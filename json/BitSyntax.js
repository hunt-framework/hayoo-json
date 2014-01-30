[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains fuctions and templates for building up and breaking\n   down packed bit structures. It's something like Erlang's bit-syntax (or,\n   actually, more like Python's struct module).\n\u003c/p\u003e\u003cp\u003eThis code uses Data.ByteString which is included in GHC 6.5 and you can\n   get it for 6.4 at \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/fps.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "module",
        "fct-source": "src/Data-BitSyntax.html",
        "fct-type": "module",
        "title": "BitSyntax"
      },
      "index": {
        "description": "This module contains fuctions and templates for building up and breaking down packed bit structures It something like Erlang bit-syntax or actually more like Python struct module This code uses Data.ByteString which is included in GHC and you can get it for at http www.cse.unsw.edu.au dons fps.html",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "BitSyntax",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Bit Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#t:BitBlock",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "data",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "data",
        "title": "BitBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "BitBlock",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Bit Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#t:ReadType",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "data",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "data",
        "title": "ReadType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "ReadType",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Read Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Context",
      "description": {
        "fct-descr": "\u003cp\u003eLike variable, but the decoding function is passed the\n   entire result tuple so far. Thus the function whose name\n   passed has type\n   \u003ccode\u003eMonad m =\u003e ByteString -\u003e (...) -\u003e m (v, ByteString)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Context Name",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Context"
      },
      "index": {
        "description": "Like variable but the decoding function is passed the entire result tuple so far Thus the function whose name passed has type Monad ByteString ByteString",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Context",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Fixed",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed size field, the result of which is a ByteString\n   of that length.\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Fixed Integer",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "fixed size field the result of which is ByteString of that length",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Fixed",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Ignore",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a value and ignore it (the result will not be part\n   of the returned tuple)\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Ignore ReadType",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Ignore"
      },
      "index": {
        "description": "Decode value and ignore it the result will not be part of the returned tuple",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Ignore",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:LengthPrefixed",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the most recent element of the result tuple and\n   interprets it as the length of this field. Results in\n   a ByteString\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "LengthPrefixed",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "LengthPrefixed"
      },
      "index": {
        "description": "Takes the most recent element of the result tuple and interprets it as the length of this field Results in ByteString",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "LengthPrefixed",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Length Prefixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:NullTerminated",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the string with a trailing NUL byte\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "NullTerminated String",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "NullTerminated"
      },
      "index": {
        "description": "Appends the string with trailing NUL byte",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "NullTerminated",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Null Terminated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:PackBits",
      "description": {
        "fct-descr": "\u003cp\u003ePacks a series of bit fields together. The argument is\n   a list of pairs where the first element is the size\n   (in bits) and the second is the value. The sum of the\n   sizes for a given PackBits must be a multiple of 8\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "PackBits [(Int, Int)]",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "PackBits"
      },
      "index": {
        "description": "Packs series of bit fields together The argument is list of pairs where the first element is the size in bits and the second is the value The sum of the sizes for given PackBits must be multiple of",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "PackBits",
        "normalized": "PackBits[(Int,Int)]",
        "package": "BitSyntax",
        "partial": "Pack Bits",
        "signature": "PackBits[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:PackedBits",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a series of bit fields, results in a list of\n   Integers. Each element of the argument is the length of\n   the bit field. The sums of the lengths must be a multiple\n   of 8\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "PackedBits [Integer]",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "PackedBits"
      },
      "index": {
        "description": "Decode series of bit fields results in list of Integers Each element of the argument is the length of the bit field The sums of the lengths must be multiple of",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "PackedBits",
        "normalized": "PackedBits[Integer]",
        "package": "BitSyntax",
        "partial": "Packed Bits",
        "signature": "PackedBits[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:RawByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAppends a ByteString\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "RawByteString ByteString",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "RawByteString"
      },
      "index": {
        "description": "Appends ByteString",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "RawByteString",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Raw Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:RawString",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the string without any terminator\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "RawString String",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "RawString"
      },
      "index": {
        "description": "Appends the string without any terminator",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "RawString",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Raw String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Rest",
      "description": {
        "fct-descr": "\u003cp\u003eResults in a ByteString containing the undecoded bytes so\n   far. Generally used at the end to return the trailing body\n   of a structure, it can actually be used at any point in the\n   decoding to return the trailing part at that point.\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Rest",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Rest"
      },
      "index": {
        "description": "Results in ByteString containing the undecoded bytes so far Generally used at the end to return the trailing body of structure it can actually be used at any point in the decoding to return the trailing part at that point",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Rest",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Rest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip some number of bytes\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Skip Integer",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Skip"
      },
      "index": {
        "description": "Skip some number of bytes",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Skip",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U16",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 16-bit int\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "U16 Int",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "U16"
      },
      "index": {
        "description": "Unsigned bit int",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "U16",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U16LE",
      "description": {
        "fct-descr": "\u003cp\u003eLittle-endian, unsigned 16-bit int\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "U16LE Int",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "U16LE"
      },
      "index": {
        "description": "Little-endian unsigned bit int",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "U16LE",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U32",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 32-bit int\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "U32 Int",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "U32"
      },
      "index": {
        "description": "Unsigned bit int",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "U32",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U32LE",
      "description": {
        "fct-descr": "\u003cp\u003eLittle-endian, unsigned 32-bit int\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "U32LE Int",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "U32LE"
      },
      "index": {
        "description": "Little-endian unsigned bit int",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "U32LE",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U8",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned 8-bit int\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "U8 Int",
        "fct-source": "src/Data-BitSyntax.html#BitBlock",
        "fct-type": "function",
        "title": "U8"
      },
      "index": {
        "description": "Unsigned bit int",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "U8",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Unsigned",
      "description": {
        "fct-descr": "\u003cp\u003eAn unsigned number of some number of bytes. Valid\n   arguments are 1, 2 and 4\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Unsigned Integer",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Unsigned"
      },
      "index": {
        "description": "An unsigned number of some number of bytes Valid arguments are and",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Unsigned",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Unsigned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:UnsignedLE",
      "description": {
        "fct-descr": "\u003cp\u003eAn unsigned, little-endian integer of some number of\n   bytes. Valid arguments are 2 and 4\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "UnsignedLE Integer",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "UnsignedLE"
      },
      "index": {
        "description": "An unsigned little-endian integer of some number of bytes Valid arguments are and",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "UnsignedLE",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Unsigned LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Variable",
      "description": {
        "fct-descr": "\u003cp\u003eA variable length element to be decoded by a custom\n   function. The function's name is given as the single\n   argument and should have type\n   \u003ccode\u003eMonad m =\u003e ByteString -\u003e m (v, ByteString)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "Variable Name",
        "fct-source": "src/Data-BitSyntax.html#ReadType",
        "fct-type": "function",
        "title": "Variable"
      },
      "index": {
        "description": "variable length element to be decoded by custom function The function name is given as the single argument and should have type Monad ByteString ByteString",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "Variable",
        "normalized": "",
        "package": "BitSyntax",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:bitSyn",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "[ReadType] -\u003e Q Exp",
        "fct-source": "src/Data-BitSyntax.html#bitSyn",
        "fct-type": "function",
        "title": "bitSyn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "bitSyn",
        "normalized": "[ReadType]-\u003eQ Exp",
        "package": "BitSyntax",
        "partial": "Syn",
        "signature": "[ReadType]-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU16",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "ByteString -\u003e Word16",
        "fct-source": "src/Data-BitSyntax.html#decodeU16",
        "fct-type": "function",
        "title": "decodeU16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "decodeU16",
        "normalized": "ByteString-\u003eWord",
        "package": "BitSyntax",
        "partial": "",
        "signature": "ByteString-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU16LE",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "ByteString -\u003e Word16",
        "fct-source": "src/Data-BitSyntax.html#decodeU16LE",
        "fct-type": "function",
        "title": "decodeU16LE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "decodeU16LE",
        "normalized": "ByteString-\u003eWord",
        "package": "BitSyntax",
        "partial": "LE",
        "signature": "ByteString-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU32",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "ByteString -\u003e Word32",
        "fct-source": "src/Data-BitSyntax.html#decodeU32",
        "fct-type": "function",
        "title": "decodeU32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "decodeU32",
        "normalized": "ByteString-\u003eWord",
        "package": "BitSyntax",
        "partial": "",
        "signature": "ByteString-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU32LE",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "ByteString -\u003e Word32",
        "fct-source": "src/Data-BitSyntax.html#decodeU32LE",
        "fct-type": "function",
        "title": "decodeU32LE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "decodeU32LE",
        "normalized": "ByteString-\u003eWord",
        "package": "BitSyntax",
        "partial": "LE",
        "signature": "ByteString-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU8",
      "description": {
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "ByteString -\u003e Word8",
        "fct-source": "src/Data-BitSyntax.html#decodeU8",
        "fct-type": "function",
        "title": "decodeU8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "decodeU8",
        "normalized": "ByteString-\u003eWord",
        "package": "BitSyntax",
        "partial": "",
        "signature": "ByteString-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:makeBits",
      "description": {
        "fct-descr": "\u003cp\u003eMake a binary string from the list of elements given\n\u003c/p\u003e",
        "fct-module": "Data.BitSyntax",
        "fct-package": "BitSyntax",
        "fct-signature": "[BitBlock] -\u003e ByteString",
        "fct-source": "src/Data-BitSyntax.html#makeBits",
        "fct-type": "function",
        "title": "makeBits"
      },
      "index": {
        "description": "Make binary string from the list of elements given",
        "hierarchy": "Data BitSyntax",
        "module": "Data.BitSyntax",
        "name": "makeBits",
        "normalized": "[BitBlock]-\u003eByteString",
        "package": "BitSyntax",
        "partial": "Bits",
        "signature": "[BitBlock]-\u003eByteString"
      }
    }
  }
]