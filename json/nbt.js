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
        "word": "nbt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a Haskell representation of Minecraft's NBT binary data\nformat, along with instances of \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e. See the\nNBT specification for details:\n\u003ca\u003ehttps://raw.github.com/acfoltzer/nbt/master/NBT-spec.txt\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "source": "src/Data-NBT.html",
          "type": "module"
        },
        "index": {
          "description": "Defines Haskell representation of Minecraft NBT binary data format along with instances of Serialize See the NBT specification for details https raw.github.com acfoltzer nbt master NBT-spec.txt",
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "partial": "NBT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive representation of NBT data. This type contains only the data\n part, since named nodes can only exist inside compound nodes.\n\u003c/p\u003e",
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "source": "src/Data-NBT.html#NBT",
          "type": "data"
        },
        "index": {
          "description": "Primitive representation of NBT data This type contains only the data part since named nodes can only exist inside compound nodes",
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "partial": "NBT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#t:NBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "NbtContents",
          "package": "nbt",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "NbtContents",
          "package": "nbt",
          "partial": "Nbt Contents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#t:NbtContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag types listed in order so that deriving \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e will assign\n them the correct number for the binary type field.\n\u003c/p\u003e",
          "module": "Data.NBT",
          "name": "TagType",
          "package": "nbt",
          "source": "src/Data-NBT.html#TagType",
          "type": "data"
        },
        "index": {
          "description": "Tag types listed in order so that deriving Enum will assign them the correct number for the binary type field",
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "TagType",
          "package": "nbt",
          "partial": "Tag Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#t:TagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ByteArrayTag",
          "package": "nbt",
          "signature": "ByteArrayTag (UArray Int32 Int8)",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ByteArrayTag",
          "package": "nbt",
          "partial": "Byte Array Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ByteArrayTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ByteArrayType",
          "package": "nbt",
          "signature": "ByteArrayType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ByteArrayType",
          "package": "nbt",
          "partial": "Byte Array Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ByteArrayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ByteTag",
          "package": "nbt",
          "signature": "ByteTag Int8",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ByteTag",
          "package": "nbt",
          "partial": "Byte Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ByteTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ByteType",
          "package": "nbt",
          "signature": "ByteType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ByteType",
          "package": "nbt",
          "partial": "Byte Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ByteType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "CompoundTag",
          "package": "nbt",
          "signature": "CompoundTag [NBT]",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "CompoundTag",
          "normalized": "CompoundTag[NBT]",
          "package": "nbt",
          "partial": "Compound Tag",
          "signature": "CompoundTag[NBT]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:CompoundTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "CompoundType",
          "package": "nbt",
          "signature": "CompoundType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "CompoundType",
          "package": "nbt",
          "partial": "Compound Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:CompoundType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "DoubleTag",
          "package": "nbt",
          "signature": "DoubleTag Double",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "DoubleTag",
          "package": "nbt",
          "partial": "Double Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:DoubleTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "DoubleType",
          "package": "nbt",
          "signature": "DoubleType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "DoubleType",
          "package": "nbt",
          "partial": "Double Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:DoubleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "EndType",
          "package": "nbt",
          "signature": "EndType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "EndType",
          "package": "nbt",
          "partial": "End Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:EndType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "FloatTag",
          "package": "nbt",
          "signature": "FloatTag Float",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "FloatTag",
          "package": "nbt",
          "partial": "Float Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:FloatTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "FloatType",
          "package": "nbt",
          "signature": "FloatType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "FloatType",
          "package": "nbt",
          "partial": "Float Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:FloatType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "IntArrayTag",
          "package": "nbt",
          "signature": "IntArrayTag (UArray Int32 Int32)",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "IntArrayTag",
          "package": "nbt",
          "partial": "Int Array Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:IntArrayTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "IntArrayType",
          "package": "nbt",
          "signature": "IntArrayType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "IntArrayType",
          "package": "nbt",
          "partial": "Int Array Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:IntArrayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "IntTag",
          "package": "nbt",
          "signature": "IntTag Int32",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "IntTag",
          "package": "nbt",
          "partial": "Int Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:IntTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "IntType",
          "package": "nbt",
          "signature": "IntType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "IntType",
          "package": "nbt",
          "partial": "Int Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:IntType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ListTag",
          "package": "nbt",
          "signature": "ListTag TagType (Array Int32 NbtContents)",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ListTag",
          "package": "nbt",
          "partial": "List Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ListTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ListType",
          "package": "nbt",
          "signature": "ListType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ListType",
          "package": "nbt",
          "partial": "List Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "LongTag",
          "package": "nbt",
          "signature": "LongTag Int64",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "LongTag",
          "package": "nbt",
          "partial": "Long Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:LongTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "LongType",
          "package": "nbt",
          "signature": "LongType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "LongType",
          "package": "nbt",
          "partial": "Long Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:LongType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "signature": "NBT Text NbtContents",
          "source": "src/Data-NBT.html#NBT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "NBT",
          "package": "nbt",
          "partial": "NBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:NBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ShortTag",
          "package": "nbt",
          "signature": "ShortTag Int16",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ShortTag",
          "package": "nbt",
          "partial": "Short Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ShortTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "ShortType",
          "package": "nbt",
          "signature": "ShortType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "ShortType",
          "package": "nbt",
          "partial": "Short Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:ShortType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "StringTag",
          "package": "nbt",
          "signature": "StringTag Text",
          "source": "src/Data-NBT.html#NbtContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "StringTag",
          "package": "nbt",
          "partial": "String Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:StringTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "StringType",
          "package": "nbt",
          "signature": "StringType",
          "source": "src/Data-NBT.html#TagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "StringType",
          "package": "nbt",
          "partial": "String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:StringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "getArrayElements",
          "package": "nbt",
          "signature": "len -\u003e Get a -\u003e Get (arr len a)",
          "source": "src/Data-NBT.html#getArrayElements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "getArrayElements",
          "normalized": "a-\u003eGet b-\u003eGet(c a b)",
          "package": "nbt",
          "partial": "Array Elements",
          "signature": "len-\u003eGet a-\u003eGet(arr len a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:getArrayElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "getByType",
          "package": "nbt",
          "signature": "TagType -\u003e Get NbtContents",
          "source": "src/Data-NBT.html#getByType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "getByType",
          "normalized": "TagType-\u003eGet NbtContents",
          "package": "nbt",
          "partial": "By Type",
          "signature": "TagType-\u003eGet NbtContents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:getByType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "putContents",
          "package": "nbt",
          "signature": "NbtContents -\u003e Put",
          "source": "src/Data-NBT.html#putContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "putContents",
          "normalized": "NbtContents-\u003ePut",
          "package": "nbt",
          "partial": "Contents",
          "signature": "NbtContents-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:putContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NBT",
          "name": "typeOf",
          "package": "nbt",
          "signature": "NbtContents -\u003e TagType",
          "source": "src/Data-NBT.html#typeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NBT",
          "module": "Data.NBT",
          "name": "typeOf",
          "normalized": "NbtContents-\u003eTagType",
          "package": "nbt",
          "partial": "Of",
          "signature": "NbtContents-\u003eTagType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nbt/docs/Data-NBT.html#v:typeOf"
      }
    }
  ]
]