[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a way to serialize graph-like structures into\nlazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Graph-like structures here are structures that\nmay reference other locations in the resulting output.  The references\nare serialized as relative byte offsets.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003etest1 :: [Word8]\ntest1 =\n  L.unpack $ toLazyByteString id $ do\n    r \u003c- \u003ccode\u003e\u003ca\u003enewRegion\u003c/a\u003e\u003c/code\u003e\n    l1 \u003c- \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e r\n    \u003ccode\u003e\u003ca\u003eemitWord32le\u003c/a\u003e\u003c/code\u003e r 42\n    \u003ccode\u003e\u003ca\u003ereference\u003c/a\u003e\u003c/code\u003e S4 LE r l1\n    emitWord32le r 43\n\ntest1 == [42,0,0,0,252,255,255,255,43,0,0,0]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize-References.html",
        "fct-type": "module",
        "title": "References"
      },
      "index": {
        "description": "This module provides way to serialize graph-like structures into lazy ByteString Graph-like structures here are structures that may reference other locations in the resulting output The references are serialized as relative byte offsets simple example test1 Word8 test1 L.unpack toLazyByteString id do newRegion l1 label emitWord32le reference S4 LE l1 emitWord32le test1",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "References",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "References",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:BuildM",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for constructing the serialised structure.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-References.html#BuildM",
        "fct-type": "data",
        "title": "BuildM"
      },
      "index": {
        "description": "Monad for constructing the serialised structure",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "BuildM",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:ByteOrder",
      "description": {
        "fct-descr": "\u003cp\u003eThe byte ordering to be used when serializing a reference.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-References.html#ByteOrder",
        "fct-type": "data",
        "title": "ByteOrder"
      },
      "index": {
        "description": "The byte ordering to be used when serializing reference",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "ByteOrder",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Byte Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA location in the data stream.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-References.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "location in the data stream",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "Label",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Region",
      "description": {
        "fct-descr": "\u003cp\u003eA logical section of the data stream.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-References.html#Region",
        "fct-type": "data",
        "title": "Region"
      },
      "index": {
        "description": "logical section of the data stream",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "Region",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of a reference (1, 2, 4, or 8 bytes).\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "data",
        "title": "Size"
      },
      "index": {
        "description": "The size of reference or bytes",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "Size",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:BE",
      "description": {
        "fct-descr": "\u003cp\u003eBig endian\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "BE",
        "fct-source": "src/Data-Serialize-References.html#ByteOrder",
        "fct-type": "function",
        "title": "BE"
      },
      "index": {
        "description": "Big endian",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "BE",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:Host",
      "description": {
        "fct-descr": "\u003cp\u003eHost byte order (and endianness)\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Host",
        "fct-source": "src/Data-Serialize-References.html#ByteOrder",
        "fct-type": "function",
        "title": "Host"
      },
      "index": {
        "description": "Host byte order and endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "Host",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:LE",
      "description": {
        "fct-descr": "\u003cp\u003eLittle endian\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "LE",
        "fct-source": "src/Data-Serialize-References.html#ByteOrder",
        "fct-type": "function",
        "title": "LE"
      },
      "index": {
        "description": "Little endian",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "LE",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S1",
      "description": {
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S1",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S1",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S1NoRC",
      "description": {
        "fct-descr": "\u003cp\u003e1 byte but don't fail if out of range\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S1NoRC",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S1NoRC"
      },
      "index": {
        "description": "byte but don fail if out of range",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S1NoRC",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "No RC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S2",
      "description": {
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S2",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S2",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S2NoRC",
      "description": {
        "fct-descr": "\u003cp\u003e2 byte but don't fail if out of range\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S2NoRC",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S2NoRC"
      },
      "index": {
        "description": "byte but don fail if out of range",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S2NoRC",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "No RC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S4",
      "description": {
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S4",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S4",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S8",
      "description": {
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "S8",
        "fct-source": "src/Data-Serialize-References.html#Size",
        "fct-type": "function",
        "title": "S8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "S8",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:alignedLabel",
      "description": {
        "fct-descr": "\u003cp\u003eEmit an aligned label at the current location in the region.\n\u003c/p\u003e\u003cp\u003eThe label's address relative to the region start will be at a\n multiple of the given alignment\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int -\u003e BuildM Label",
        "fct-source": "src/Data-Serialize-References.html#alignedLabel",
        "fct-type": "function",
        "title": "alignedLabel"
      },
      "index": {
        "description": "Emit an aligned label at the current location in the region The label address relative to the region start will be at multiple of the given alignment",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "alignedLabel",
        "normalized": "Region-\u003eInt-\u003eBuildM Label",
        "package": "graph-serialize",
        "partial": "Label",
        "signature": "Region-\u003eInt-\u003eBuildM Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitByteString",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e ByteString -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitByteString",
        "fct-type": "function",
        "title": "emitByteString"
      },
      "index": {
        "description": "Emit strict ByteString",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitByteString",
        "normalized": "Region-\u003eByteString-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Byte String",
        "signature": "Region-\u003eByteString-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt16be",
        "fct-type": "function",
        "title": "emitInt16be"
      },
      "index": {
        "description": "Emit Int16 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt16be",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt16host",
        "fct-type": "function",
        "title": "emitInt16host"
      },
      "index": {
        "description": "Emit Int16 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt16host",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt16le",
        "fct-type": "function",
        "title": "emitInt16le"
      },
      "index": {
        "description": "Emit Int16 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt16le",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt32be",
        "fct-type": "function",
        "title": "emitInt32be"
      },
      "index": {
        "description": "Emit Int32 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt32be",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt32host",
        "fct-type": "function",
        "title": "emitInt32host"
      },
      "index": {
        "description": "Emit Int32 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt32host",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt32le",
        "fct-type": "function",
        "title": "emitInt32le"
      },
      "index": {
        "description": "Emit Int32 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt32le",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt64be",
        "fct-type": "function",
        "title": "emitInt64be"
      },
      "index": {
        "description": "Emit Int64 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt64be",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt64host",
        "fct-type": "function",
        "title": "emitInt64host"
      },
      "index": {
        "description": "Emit Int64 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt64host",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt64le",
        "fct-type": "function",
        "title": "emitInt64le"
      },
      "index": {
        "description": "Emit Int64 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt64le",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt8",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a single byte.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Int8 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt8",
        "fct-type": "function",
        "title": "emitInt8"
      },
      "index": {
        "description": "Emit single byte",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt8",
        "normalized": "Region-\u003eInt-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003eInt-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt8s",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e [Int8] -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitInt8s",
        "fct-type": "function",
        "title": "emitInt8s"
      },
      "index": {
        "description": "Emit list of bytes",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitInt8s",
        "normalized": "Region-\u003e[Int]-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Int",
        "signature": "Region-\u003e[Int]-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e ByteString -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitLazyByteString",
        "fct-type": "function",
        "title": "emitLazyByteString"
      },
      "index": {
        "description": "Emit lazy ByteString",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitLazyByteString",
        "normalized": "Region-\u003eByteString-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Lazy Byte String",
        "signature": "Region-\u003eByteString-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord16be",
        "fct-type": "function",
        "title": "emitWord16be"
      },
      "index": {
        "description": "Emit Word16 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord16be",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord16host",
        "fct-type": "function",
        "title": "emitWord16host"
      },
      "index": {
        "description": "Emit Word16 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord16host",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word16 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord16le",
        "fct-type": "function",
        "title": "emitWord16le"
      },
      "index": {
        "description": "Emit Word16 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord16le",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord32be",
        "fct-type": "function",
        "title": "emitWord32be"
      },
      "index": {
        "description": "Emit Word32 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord32be",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord32host",
        "fct-type": "function",
        "title": "emitWord32host"
      },
      "index": {
        "description": "Emit Word32 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord32host",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word32 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord32le",
        "fct-type": "function",
        "title": "emitWord32le"
      },
      "index": {
        "description": "Emit Word32 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord32le",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord64be",
        "fct-type": "function",
        "title": "emitWord64be"
      },
      "index": {
        "description": "Emit Word64 in big endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord64be",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64host",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord64host",
        "fct-type": "function",
        "title": "emitWord64host"
      },
      "index": {
        "description": "Emit Word64 in native host order and host endianness",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord64host",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word64 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord64le",
        "fct-type": "function",
        "title": "emitWord64le"
      },
      "index": {
        "description": "Emit Word64 in little endian format",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord64le",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord8",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a single byte.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Word8 -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord8",
        "fct-type": "function",
        "title": "emitWord8"
      },
      "index": {
        "description": "Emit single byte",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord8",
        "normalized": "Region-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord8s",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e [Word8] -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#emitWord8s",
        "fct-type": "function",
        "title": "emitWord8s"
      },
      "index": {
        "description": "Emit list of bytes",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "emitWord8s",
        "normalized": "Region-\u003e[Word]-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Word",
        "signature": "Region-\u003e[Word]-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a label at the current location in the given region.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e BuildM Label",
        "fct-source": "src/Data-Serialize-References.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Emit label at the current location in the given region",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "label",
        "normalized": "Region-\u003eBuildM Label",
        "package": "graph-serialize",
        "partial": "",
        "signature": "Region-\u003eBuildM Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:makeLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new label (with no location attached to it).\n\u003c/p\u003e\u003cp\u003eIt is up to the user to ensure that if this label is ever used in a\n \u003ccode\u003e\u003ca\u003ereference\u003c/a\u003e\u003c/code\u003e, then the label must have been placed via \u003ccode\u003e\u003ca\u003eplaceLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is intended for forward references within a region:\n\u003c/p\u003e\u003cpre\u003e example r = do\n  l \u003c- makeLabel\n  reference S4 Host r l\n  ... more stuff ...\n  placeLabel r l\n  ... other stuff ...\n\u003c/pre\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "BuildM Label",
        "fct-source": "src/Data-Serialize-References.html#makeLabel",
        "fct-type": "function",
        "title": "makeLabel"
      },
      "index": {
        "description": "Create new label with no location attached to it It is up to the user to ensure that if this label is ever used in reference then the label must have been placed via placeLabel This is intended for forward references within region example do makeLabel reference S4 Host more stuff placeLabel other stuff",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "makeLabel",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:newRegion",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new region.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "BuildM Region",
        "fct-source": "src/Data-Serialize-References.html#newRegion",
        "fct-type": "function",
        "title": "newRegion"
      },
      "index": {
        "description": "Create new region",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "newRegion",
        "normalized": "",
        "package": "graph-serialize",
        "partial": "Region",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:offset-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEmit the distance between two labels.\n\u003c/p\u003e\u003cp\u003eIf the start label occurs before the end label, then the written integer\n will be positive, negative otherwise.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003etest3 = (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e id $ do\n   r \u003c- \u003ccode\u003e\u003ca\u003enewRegion\u003c/a\u003e\u003c/code\u003e\n   l1 \u003c- \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e r\n   \u003ccode\u003e\u003ca\u003eemitWord32le\u003c/a\u003e\u003c/code\u003e r 42\n   l2 \u003c- label r\n   \u003ccode\u003e\u003ca\u003eoffset'\u003c/a\u003e\u003c/code\u003e S4 LE id r l1 l2) == \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e [42,0,0,0,4,0,0,0]\n\u003c/pre\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Size-\u003e ByteOrder-\u003e (Int -\u003e Int)-\u003e Region-\u003e Label-\u003e Label-\u003e BuildM ()",
        "fct-type": "function",
        "title": "offset'"
      },
      "index": {
        "description": "Emit the distance between two labels If the start label occurs before the end label then the written integer will be positive negative otherwise For example test3 toLazyByteString id do newRegion l1 label emitWord32le l2 label offset S4 LE id l1 l2 pack",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "offset'",
        "normalized": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eLabel-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "",
        "signature": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eLabel-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:padTo",
      "description": {
        "fct-descr": "\u003cp\u003eInsert padding bytes into given region until its size is a\n multiple of the expected alignment.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region-\u003e Int-\u003e Word8-\u003e BuildM ()",
        "fct-type": "function",
        "title": "padTo"
      },
      "index": {
        "description": "Insert padding bytes into given region until its size is multiple of the expected alignment",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "padTo",
        "normalized": "Region-\u003eInt-\u003eWord-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "To",
        "signature": "Region-\u003eInt-\u003eWord-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:placeLabel",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a label previously created with \u003ccode\u003e\u003ca\u003emakeLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function must only be called once per label.  If the same\n label is placed multiple times, it is undefined where references to\n it point to.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Region -\u003e Label -\u003e BuildM ()",
        "fct-source": "src/Data-Serialize-References.html#placeLabel",
        "fct-type": "function",
        "title": "placeLabel"
      },
      "index": {
        "description": "Place label previously created with makeLabel This function must only be called once per label If the same label is placed multiple times it is undefined where references to it point to",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "placeLabel",
        "normalized": "Region-\u003eLabel-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "Label",
        "signature": "Region-\u003eLabel-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:reference",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a reference to the given label in the current region.\n\u003c/p\u003e\u003cp\u003eThe reference will be encoded as a signed integer that specifies\n the relative distance (in bytes) from the current location to the\n target label.\n\u003c/p\u003e\u003cp\u003eThe current location starts before the reference.  A serialised\n reference with value \u003ccode\u003e0\u003c/code\u003e therefore refers to itself.\n\u003c/p\u003e\u003cp\u003eIt is up to the user to ensure that references are large enough to\n encode the required range.  If they are not in range\n \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e will fail.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Size-\u003e ByteOrder-\u003e Region-\u003e Label-\u003e BuildM ()",
        "fct-type": "function",
        "title": "reference"
      },
      "index": {
        "description": "Emit reference to the given label in the current region The reference will be encoded as signed integer that specifies the relative distance in bytes from the current location to the target label The current location starts before the reference serialised reference with value therefore refers to itself It is up to the user to ensure that references are large enough to encode the required range If they are not in range toLazyByteString will fail",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "reference",
        "normalized": "Size-\u003eByteOrder-\u003eRegion-\u003eLabel-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "",
        "signature": "Size-\u003eByteOrder-\u003eRegion-\u003eLabel-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:reference-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a reference to the given label in the current region.\n\u003c/p\u003e\u003cp\u003eThe calculated offset will be passed to the function being\n supplied.  This can be use for example to change the unit of\n reference from bytes to, say, words.\n\u003c/p\u003e\u003cp\u003eSay, you're generating bytecode where each instruction is a\n multiple of 4 bytes.  Then a reference is known to be a multiple of\n 4.  If our bytecode only uses 16 bit references then it would be\n wasteful to store the lowest 2 bits which we know to be zero.  We\n can implement this transformation by passing \u003ccode\u003e(`shiftR` 2)\u003c/code\u003e as\n the transformation function.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Size-\u003e ByteOrder-\u003e (Int -\u003e Int)-\u003e Region-\u003e Label-\u003e BuildM ()",
        "fct-type": "function",
        "title": "reference'"
      },
      "index": {
        "description": "Emit reference to the given label in the current region The calculated offset will be passed to the function being supplied This can be use for example to change the unit of reference from bytes to say words Say you re generating bytecode where each instruction is multiple of bytes Then reference is known to be multiple of If our bytecode only uses bit references then it would be wasteful to store the lowest bits which we know to be zero We can implement this transformation by passing shiftR as the transformation function",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "reference'",
        "normalized": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eBuildM()",
        "package": "graph-serialize",
        "partial": "",
        "signature": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eBuildM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:sizeToBytes",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e into matching number of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "Size -\u003e Int",
        "fct-source": "src/Data-Serialize-References.html#sizeToBytes",
        "fct-type": "function",
        "title": "sizeToBytes"
      },
      "index": {
        "description": "Translate Size into matching number of bytes",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "sizeToBytes",
        "normalized": "Size-\u003eInt",
        "package": "graph-serialize",
        "partial": "To Bytes",
        "signature": "Size-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eSerialise the graph into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.References",
        "fct-package": "graph-serialize",
        "fct-signature": "([Region] -\u003e [Region])-\u003e BuildM ()-\u003e ByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Serialise the graph into lazy ByteString",
        "hierarchy": "Data Serialize References",
        "module": "Data.Serialize.References",
        "name": "toLazyByteString",
        "normalized": "([Region]-\u003e[Region])-\u003eBuildM()-\u003eByteString",
        "package": "graph-serialize",
        "partial": "Lazy Byte String",
        "signature": "([Region]-\u003e[Region])-\u003eBuildM()-\u003eByteString"
      }
    }
  }
]