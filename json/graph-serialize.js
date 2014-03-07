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
        "word": "graph-serialize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a way to serialize graph-like structures into\nlazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Graph-like structures here are structures that\nmay reference other locations in the resulting output.  The references\nare serialized as relative byte offsets.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003etest1 :: [Word8]\ntest1 =\n  L.unpack $ toLazyByteString id $ do\n    r \u003c- \u003ccode\u003e\u003ca\u003enewRegion\u003c/a\u003e\u003c/code\u003e\n    l1 \u003c- \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e r\n    \u003ccode\u003e\u003ca\u003eemitWord32le\u003c/a\u003e\u003c/code\u003e r 42\n    \u003ccode\u003e\u003ca\u003ereference\u003c/a\u003e\u003c/code\u003e S4 LE r l1\n    emitWord32le r 43\n\ntest1 == [42,0,0,0,252,255,255,255,43,0,0,0]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Serialize.References",
          "name": "References",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides way to serialize graph-like structures into lazy ByteString Graph-like structures here are structures that may reference other locations in the resulting output The references are serialized as relative byte offsets simple example test1 Word8 test1 L.unpack toLazyByteString id do newRegion l1 label emitWord32le reference S4 LE l1 emitWord32le test1",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "References",
          "package": "graph-serialize",
          "partial": "References",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for constructing the serialised structure.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "BuildM",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html#BuildM",
          "type": "data"
        },
        "index": {
          "description": "Monad for constructing the serialised structure",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "BuildM",
          "package": "graph-serialize",
          "partial": "Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:BuildM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe byte ordering to be used when serializing a reference.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "ByteOrder",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html#ByteOrder",
          "type": "data"
        },
        "index": {
          "description": "The byte ordering to be used when serializing reference",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "ByteOrder",
          "package": "graph-serialize",
          "partial": "Byte Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:ByteOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location in the data stream.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "Label",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html#Label",
          "type": "data"
        },
        "index": {
          "description": "location in the data stream",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "Label",
          "package": "graph-serialize",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logical section of the data stream.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "Region",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html#Region",
          "type": "data"
        },
        "index": {
          "description": "logical section of the data stream",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "Region",
          "package": "graph-serialize",
          "partial": "Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a reference (1, 2, 4, or 8 bytes).\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "Size",
          "package": "graph-serialize",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "data"
        },
        "index": {
          "description": "The size of reference or bytes",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "Size",
          "package": "graph-serialize",
          "partial": "Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBig endian\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "BE",
          "package": "graph-serialize",
          "signature": "BE",
          "source": "src/Data-Serialize-References.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "description": "Big endian",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "BE",
          "package": "graph-serialize",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost byte order (and endianness)\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "Host",
          "package": "graph-serialize",
          "signature": "Host",
          "source": "src/Data-Serialize-References.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "description": "Host byte order and endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "Host",
          "package": "graph-serialize",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle endian\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "LE",
          "package": "graph-serialize",
          "signature": "LE",
          "source": "src/Data-Serialize-References.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "description": "Little endian",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "LE",
          "package": "graph-serialize",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.References",
          "name": "S1",
          "package": "graph-serialize",
          "signature": "S1",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S1",
          "package": "graph-serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1 byte but don't fail if out of range\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "S1NoRC",
          "package": "graph-serialize",
          "signature": "S1NoRC",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "description": "byte but don fail if out of range",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S1NoRC",
          "package": "graph-serialize",
          "partial": "No RC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S1NoRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.References",
          "name": "S2",
          "package": "graph-serialize",
          "signature": "S2",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S2",
          "package": "graph-serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2 byte but don't fail if out of range\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "S2NoRC",
          "package": "graph-serialize",
          "signature": "S2NoRC",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "description": "byte but don fail if out of range",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S2NoRC",
          "package": "graph-serialize",
          "partial": "No RC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S2NoRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.References",
          "name": "S4",
          "package": "graph-serialize",
          "signature": "S4",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S4",
          "package": "graph-serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.References",
          "name": "S8",
          "package": "graph-serialize",
          "signature": "S8",
          "source": "src/Data-Serialize-References.html#Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "S8",
          "package": "graph-serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:S8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit an aligned label at the current location in the region.\n\u003c/p\u003e\u003cp\u003eThe label's address relative to the region start will be at a\n multiple of the given alignment\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "alignedLabel",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int -\u003e BuildM Label",
          "source": "src/Data-Serialize-References.html#alignedLabel",
          "type": "function"
        },
        "index": {
          "description": "Emit an aligned label at the current location in the region The label address relative to the region start will be at multiple of the given alignment",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "alignedLabel",
          "normalized": "Region-\u003eInt-\u003eBuildM Label",
          "package": "graph-serialize",
          "partial": "Label",
          "signature": "Region-\u003eInt-\u003eBuildM Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:alignedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitByteString",
          "package": "graph-serialize",
          "signature": "Region -\u003e ByteString -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitByteString",
          "type": "function"
        },
        "index": {
          "description": "Emit strict ByteString",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitByteString",
          "normalized": "Region-\u003eByteString-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Byte String",
          "signature": "Region-\u003eByteString-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt16be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt16be",
          "type": "function"
        },
        "index": {
          "description": "Emit Int16 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt16be",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt16host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt16host",
          "type": "function"
        },
        "index": {
          "description": "Emit Int16 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt16host",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt16le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt16le",
          "type": "function"
        },
        "index": {
          "description": "Emit Int16 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt16le",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt32be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt32be",
          "type": "function"
        },
        "index": {
          "description": "Emit Int32 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt32be",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt32host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt32host",
          "type": "function"
        },
        "index": {
          "description": "Emit Int32 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt32host",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt32le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt32le",
          "type": "function"
        },
        "index": {
          "description": "Emit Int32 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt32le",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt64be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt64be",
          "type": "function"
        },
        "index": {
          "description": "Emit Int64 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt64be",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt64host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt64host",
          "type": "function"
        },
        "index": {
          "description": "Emit Int64 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt64host",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt64le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt64le",
          "type": "function"
        },
        "index": {
          "description": "Emit Int64 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt64le",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a single byte.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt8",
          "package": "graph-serialize",
          "signature": "Region -\u003e Int8 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt8",
          "type": "function"
        },
        "index": {
          "description": "Emit single byte",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt8",
          "normalized": "Region-\u003eInt-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003eInt-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a list of bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitInt8s",
          "package": "graph-serialize",
          "signature": "Region -\u003e [Int8] -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitInt8s",
          "type": "function"
        },
        "index": {
          "description": "Emit list of bytes",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitInt8s",
          "normalized": "Region-\u003e[Int]-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Int",
          "signature": "Region-\u003e[Int]-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitInt8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitLazyByteString",
          "package": "graph-serialize",
          "signature": "Region -\u003e ByteString -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Emit lazy ByteString",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitLazyByteString",
          "normalized": "Region-\u003eByteString-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Lazy Byte String",
          "signature": "Region-\u003eByteString-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord16be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord16be",
          "type": "function"
        },
        "index": {
          "description": "Emit Word16 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord16be",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord16host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord16host",
          "type": "function"
        },
        "index": {
          "description": "Emit Word16 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord16host",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord16le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word16 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord16le",
          "type": "function"
        },
        "index": {
          "description": "Emit Word16 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord16le",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord32be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord32be",
          "type": "function"
        },
        "index": {
          "description": "Emit Word32 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord32be",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord32host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord32host",
          "type": "function"
        },
        "index": {
          "description": "Emit Word32 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord32host",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord32le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word32 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord32le",
          "type": "function"
        },
        "index": {
          "description": "Emit Word32 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord32le",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord64be",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord64be",
          "type": "function"
        },
        "index": {
          "description": "Emit Word64 in big endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord64be",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord64host",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord64host",
          "type": "function"
        },
        "index": {
          "description": "Emit Word64 in native host order and host endianness",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord64host",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord64le",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word64 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord64le",
          "type": "function"
        },
        "index": {
          "description": "Emit Word64 in little endian format",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord64le",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a single byte.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord8",
          "package": "graph-serialize",
          "signature": "Region -\u003e Word8 -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord8",
          "type": "function"
        },
        "index": {
          "description": "Emit single byte",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord8",
          "normalized": "Region-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a list of bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "emitWord8s",
          "package": "graph-serialize",
          "signature": "Region -\u003e [Word8] -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#emitWord8s",
          "type": "function"
        },
        "index": {
          "description": "Emit list of bytes",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "emitWord8s",
          "normalized": "Region-\u003e[Word]-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Word",
          "signature": "Region-\u003e[Word]-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:emitWord8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a label at the current location in the given region.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "label",
          "package": "graph-serialize",
          "signature": "Region -\u003e BuildM Label",
          "source": "src/Data-Serialize-References.html#label",
          "type": "function"
        },
        "index": {
          "description": "Emit label at the current location in the given region",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "label",
          "normalized": "Region-\u003eBuildM Label",
          "package": "graph-serialize",
          "signature": "Region-\u003eBuildM Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new label (with no location attached to it).\n\u003c/p\u003e\u003cp\u003eIt is up to the user to ensure that if this label is ever used in a\n \u003ccode\u003e\u003ca\u003ereference\u003c/a\u003e\u003c/code\u003e, then the label must have been placed via \u003ccode\u003e\u003ca\u003eplaceLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is intended for forward references within a region:\n\u003c/p\u003e\u003cpre\u003e example r = do\n  l \u003c- makeLabel\n  reference S4 Host r l\n  ... more stuff ...\n  placeLabel r l\n  ... other stuff ...\n\u003c/pre\u003e",
          "module": "Data.Serialize.References",
          "name": "makeLabel",
          "package": "graph-serialize",
          "signature": "BuildM Label",
          "source": "src/Data-Serialize-References.html#makeLabel",
          "type": "function"
        },
        "index": {
          "description": "Create new label with no location attached to it It is up to the user to ensure that if this label is ever used in reference then the label must have been placed via placeLabel This is intended for forward references within region example do makeLabel reference S4 Host more stuff placeLabel other stuff",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "makeLabel",
          "package": "graph-serialize",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:makeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new region.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "newRegion",
          "package": "graph-serialize",
          "signature": "BuildM Region",
          "source": "src/Data-Serialize-References.html#newRegion",
          "type": "function"
        },
        "index": {
          "description": "Create new region",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "newRegion",
          "package": "graph-serialize",
          "partial": "Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:newRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit the distance between two labels.\n\u003c/p\u003e\u003cp\u003eIf the start label occurs before the end label, then the written integer\n will be positive, negative otherwise.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003etest3 = (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e id $ do\n   r \u003c- \u003ccode\u003e\u003ca\u003enewRegion\u003c/a\u003e\u003c/code\u003e\n   l1 \u003c- \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e r\n   \u003ccode\u003e\u003ca\u003eemitWord32le\u003c/a\u003e\u003c/code\u003e r 42\n   l2 \u003c- label r\n   \u003ccode\u003e\u003ca\u003eoffset'\u003c/a\u003e\u003c/code\u003e S4 LE id r l1 l2) == \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e [42,0,0,0,4,0,0,0]\n\u003c/pre\u003e",
          "module": "Data.Serialize.References",
          "name": "offset'",
          "package": "graph-serialize",
          "signature": "Size-\u003e ByteOrder-\u003e (Int -\u003e Int)-\u003e Region-\u003e Label-\u003e Label-\u003e BuildM ()",
          "type": "function"
        },
        "index": {
          "description": "Emit the distance between two labels If the start label occurs before the end label then the written integer will be positive negative otherwise For example test3 toLazyByteString id do newRegion l1 label emitWord32le l2 label offset S4 LE id l1 l2 pack",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "offset'",
          "normalized": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eLabel-\u003eBuildM()",
          "package": "graph-serialize",
          "signature": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eLabel-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:offset-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert padding bytes into given region until its size is a\n multiple of the expected alignment.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "padTo",
          "package": "graph-serialize",
          "signature": "Region-\u003e Int-\u003e Word8-\u003e BuildM ()",
          "type": "function"
        },
        "index": {
          "description": "Insert padding bytes into given region until its size is multiple of the expected alignment",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "padTo",
          "normalized": "Region-\u003eInt-\u003eWord-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "To",
          "signature": "Region-\u003eInt-\u003eWord-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:padTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a label previously created with \u003ccode\u003e\u003ca\u003emakeLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function must only be called once per label.  If the same\n label is placed multiple times, it is undefined where references to\n it point to.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "placeLabel",
          "package": "graph-serialize",
          "signature": "Region -\u003e Label -\u003e BuildM ()",
          "source": "src/Data-Serialize-References.html#placeLabel",
          "type": "function"
        },
        "index": {
          "description": "Place label previously created with makeLabel This function must only be called once per label If the same label is placed multiple times it is undefined where references to it point to",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "placeLabel",
          "normalized": "Region-\u003eLabel-\u003eBuildM()",
          "package": "graph-serialize",
          "partial": "Label",
          "signature": "Region-\u003eLabel-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:placeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a reference to the given label in the current region.\n\u003c/p\u003e\u003cp\u003eThe reference will be encoded as a signed integer that specifies\n the relative distance (in bytes) from the current location to the\n target label.\n\u003c/p\u003e\u003cp\u003eThe current location starts before the reference.  A serialised\n reference with value \u003ccode\u003e0\u003c/code\u003e therefore refers to itself.\n\u003c/p\u003e\u003cp\u003eIt is up to the user to ensure that references are large enough to\n encode the required range.  If they are not in range\n \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e will fail.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "reference",
          "package": "graph-serialize",
          "signature": "Size-\u003e ByteOrder-\u003e Region-\u003e Label-\u003e BuildM ()",
          "type": "function"
        },
        "index": {
          "description": "Emit reference to the given label in the current region The reference will be encoded as signed integer that specifies the relative distance in bytes from the current location to the target label The current location starts before the reference serialised reference with value therefore refers to itself It is up to the user to ensure that references are large enough to encode the required range If they are not in range toLazyByteString will fail",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "reference",
          "normalized": "Size-\u003eByteOrder-\u003eRegion-\u003eLabel-\u003eBuildM()",
          "package": "graph-serialize",
          "signature": "Size-\u003eByteOrder-\u003eRegion-\u003eLabel-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:reference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a reference to the given label in the current region.\n\u003c/p\u003e\u003cp\u003eThe calculated offset will be passed to the function being\n supplied.  This can be use for example to change the unit of\n reference from bytes to, say, words.\n\u003c/p\u003e\u003cp\u003eSay, you're generating bytecode where each instruction is a\n multiple of 4 bytes.  Then a reference is known to be a multiple of\n 4.  If our bytecode only uses 16 bit references then it would be\n wasteful to store the lowest 2 bits which we know to be zero.  We\n can implement this transformation by passing \u003ccode\u003e(`shiftR` 2)\u003c/code\u003e as\n the transformation function.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "reference'",
          "package": "graph-serialize",
          "signature": "Size-\u003e ByteOrder-\u003e (Int -\u003e Int)-\u003e Region-\u003e Label-\u003e BuildM ()",
          "type": "function"
        },
        "index": {
          "description": "Emit reference to the given label in the current region The calculated offset will be passed to the function being supplied This can be use for example to change the unit of reference from bytes to say words Say you re generating bytecode where each instruction is multiple of bytes Then reference is known to be multiple of If our bytecode only uses bit references then it would be wasteful to store the lowest bits which we know to be zero We can implement this transformation by passing shiftR as the transformation function",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "reference'",
          "normalized": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eBuildM()",
          "package": "graph-serialize",
          "signature": "Size-\u003eByteOrder-\u003e(Int-\u003eInt)-\u003eRegion-\u003eLabel-\u003eBuildM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:reference-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e into matching number of bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "sizeToBytes",
          "package": "graph-serialize",
          "signature": "Size -\u003e Int",
          "source": "src/Data-Serialize-References.html#sizeToBytes",
          "type": "function"
        },
        "index": {
          "description": "Translate Size into matching number of bytes",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "sizeToBytes",
          "normalized": "Size-\u003eInt",
          "package": "graph-serialize",
          "partial": "To Bytes",
          "signature": "Size-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:sizeToBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialise the graph into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.References",
          "name": "toLazyByteString",
          "package": "graph-serialize",
          "signature": "([Region] -\u003e [Region])-\u003e BuildM ()-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Serialise the graph into lazy ByteString",
          "hierarchy": "Data Serialize References",
          "module": "Data.Serialize.References",
          "name": "toLazyByteString",
          "normalized": "([Region]-\u003e[Region])-\u003eBuildM()-\u003eByteString",
          "package": "graph-serialize",
          "partial": "Lazy Byte String",
          "signature": "([Region]-\u003e[Region])-\u003eBuildM()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-serialize/docs/Data-Serialize-References.html#v:toLazyByteString"
      }
    }
  ]
]