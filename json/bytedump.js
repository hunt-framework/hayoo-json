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
        "word": "bytedump"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing some routines to debug data dump\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Bytedump",
          "name": "Bytedump",
          "package": "bytedump",
          "source": "src/Text-Bytedump.html",
          "type": "module"
        },
        "index": {
          "description": "module containing some routines to debug data dump",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "Bytedump",
          "package": "bytedump",
          "partial": "Bytedump",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration structure used for formatting functions\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "BytedumpConfig",
          "package": "bytedump",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration structure used for formatting functions",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "BytedumpConfig",
          "package": "bytedump",
          "partial": "Bytedump Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#t:BytedumpConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bytedump",
          "name": "BytedumpConfig",
          "package": "bytedump",
          "signature": "BytedumpConfig",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "BytedumpConfig",
          "package": "bytedump",
          "partial": "Bytedump Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:BytedumpConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring separating cells in row.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configCellSep",
          "package": "bytedump",
          "signature": "String",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "string separating cells in row",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configCellSep",
          "package": "bytedump",
          "partial": "Cell Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configCellSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif the printable ascii table is displayed.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configPrintChar",
          "package": "bytedump",
          "signature": "Bool",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "if the printable ascii table is displayed",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configPrintChar",
          "package": "bytedump",
          "partial": "Print Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configPrintChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring separating groups.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configRowGroupSep",
          "package": "bytedump",
          "signature": "String",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "string separating groups",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configRowGroupSep",
          "package": "bytedump",
          "partial": "Row Group Sep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configRowGroupSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes per group per row.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configRowGroupSize",
          "package": "bytedump",
          "signature": "Int",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "number of bytes per group per row",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configRowGroupSize",
          "package": "bytedump",
          "partial": "Row Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configRowGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring on the left of the row.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configRowLeft",
          "package": "bytedump",
          "signature": "String",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "string on the left of the row",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configRowLeft",
          "package": "bytedump",
          "partial": "Row Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configRowLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring on the right of the row.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configRowRight",
          "package": "bytedump",
          "signature": "String",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "string on the right of the row",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configRowRight",
          "package": "bytedump",
          "partial": "Row Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configRowRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bytes per row.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "configRowSize",
          "package": "bytedump",
          "signature": "Int",
          "source": "src/Text-Bytedump.html#BytedumpConfig",
          "type": "function"
        },
        "index": {
          "description": "number of bytes per row",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "configRowSize",
          "package": "bytedump",
          "partial": "Row Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:configRowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Config using 16 bytes by row with a separation at the 8th byte, and\n dumping printable ascii character on the right.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "defaultConfig",
          "package": "bytedump",
          "signature": "BytedumpConfig",
          "source": "src/Text-Bytedump.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default Config using bytes by row with separation at the th byte and dumping printable ascii character on the right",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "defaultConfig",
          "package": "bytedump",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a list of word8 into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dump",
          "package": "bytedump",
          "signature": "[Word8] -\u003e String",
          "source": "src/Text-Bytedump.html#dump",
          "type": "function"
        },
        "index": {
          "description": "Dump list of word8 into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dump",
          "normalized": "[Word]-\u003eString",
          "package": "bytedump",
          "signature": "[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a bytestring into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpBS",
          "type": "function"
        },
        "index": {
          "description": "Dump bytestring into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpBS",
          "normalized": "ByteString-\u003eString",
          "package": "bytedump",
          "partial": "BS",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump two list of word8 into a formatted string of hex value side by side\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpDiff",
          "package": "bytedump",
          "signature": "[Word8] -\u003e [Word8] -\u003e String",
          "source": "src/Text-Bytedump.html#dumpDiff",
          "type": "function"
        },
        "index": {
          "description": "Dump two list of word8 into formatted string of hex value side by side",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpDiff",
          "normalized": "[Word]-\u003e[Word]-\u003eString",
          "package": "bytedump",
          "partial": "Diff",
          "signature": "[Word]-\u003e[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a bytestring into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpDiffBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpDiffBS",
          "type": "function"
        },
        "index": {
          "description": "Dump bytestring into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpDiffBS",
          "normalized": "ByteString-\u003eByteString-\u003eString",
          "package": "bytedump",
          "partial": "Diff BS",
          "signature": "ByteString-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpDiffBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a lazy bytestring into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpDiffLBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpDiffLBS",
          "type": "function"
        },
        "index": {
          "description": "Dump lazy bytestring into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpDiffLBS",
          "normalized": "ByteString-\u003eByteString-\u003eString",
          "package": "bytedump",
          "partial": "Diff LBS",
          "signature": "ByteString-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpDiffLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a string into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpDiffS",
          "package": "bytedump",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Text-Bytedump.html#dumpDiffS",
          "type": "function"
        },
        "index": {
          "description": "Dump string into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpDiffS",
          "normalized": "String-\u003eString-\u003eString",
          "package": "bytedump",
          "partial": "Diff",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpDiffS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a lazy bytestring into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpLBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpLBS",
          "type": "function"
        },
        "index": {
          "description": "Dump lazy bytestring into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpLBS",
          "normalized": "ByteString-\u003eString",
          "package": "bytedump",
          "partial": "LBS",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a list of word8 into a raw string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpRaw",
          "package": "bytedump",
          "signature": "[Word8] -\u003e String",
          "source": "src/Text-Bytedump.html#dumpRaw",
          "type": "function"
        },
        "index": {
          "description": "Dump list of word8 into raw string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpRaw",
          "normalized": "[Word]-\u003eString",
          "package": "bytedump",
          "partial": "Raw",
          "signature": "[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a bytestring into a raw string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpRawBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpRawBS",
          "type": "function"
        },
        "index": {
          "description": "Dump bytestring into raw string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpRawBS",
          "normalized": "ByteString-\u003eString",
          "package": "bytedump",
          "partial": "Raw BS",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpRawBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a lazy bytestring into a raw string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpRawLBS",
          "package": "bytedump",
          "signature": "ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpRawLBS",
          "type": "function"
        },
        "index": {
          "description": "Dump lazy bytestring into raw string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpRawLBS",
          "normalized": "ByteString-\u003eString",
          "package": "bytedump",
          "partial": "Raw LBS",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpRawLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a string into a raw string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpRawS",
          "package": "bytedump",
          "signature": "String -\u003e String",
          "source": "src/Text-Bytedump.html#dumpRawS",
          "type": "function"
        },
        "index": {
          "description": "Dump string into raw string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpRawS",
          "normalized": "String-\u003eString",
          "package": "bytedump",
          "partial": "Raw",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpRawS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a string into a formatted string of hex value\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpS",
          "package": "bytedump",
          "signature": "String -\u003e String",
          "source": "src/Text-Bytedump.html#dumpS",
          "type": "function"
        },
        "index": {
          "description": "Dump string into formatted string of hex value",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpS",
          "normalized": "String-\u003eString",
          "package": "bytedump",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a list of bytes into formatted strings using a specific config\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpWith",
          "package": "bytedump",
          "signature": "BytedumpConfig -\u003e [Word8] -\u003e String",
          "source": "src/Text-Bytedump.html#dumpWith",
          "type": "function"
        },
        "index": {
          "description": "Dump list of bytes into formatted strings using specific config",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpWith",
          "normalized": "BytedumpConfig-\u003e[Word]-\u003eString",
          "package": "bytedump",
          "partial": "With",
          "signature": "BytedumpConfig-\u003e[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a bytestring into formatted strings using a specific config\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpWithBS",
          "package": "bytedump",
          "signature": "BytedumpConfig -\u003e ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpWithBS",
          "type": "function"
        },
        "index": {
          "description": "Dump bytestring into formatted strings using specific config",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpWithBS",
          "normalized": "BytedumpConfig-\u003eByteString-\u003eString",
          "package": "bytedump",
          "partial": "With BS",
          "signature": "BytedumpConfig-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpWithBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a lazy bytestring into formatted strings using a specific config\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpWithLBS",
          "package": "bytedump",
          "signature": "BytedumpConfig -\u003e ByteString -\u003e String",
          "source": "src/Text-Bytedump.html#dumpWithLBS",
          "type": "function"
        },
        "index": {
          "description": "Dump lazy bytestring into formatted strings using specific config",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpWithLBS",
          "normalized": "BytedumpConfig-\u003eByteString-\u003eString",
          "package": "bytedump",
          "partial": "With LBS",
          "signature": "BytedumpConfig-\u003eByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpWithLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a string into formatted strings using a specific config\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "dumpWithS",
          "package": "bytedump",
          "signature": "BytedumpConfig -\u003e String -\u003e String",
          "source": "src/Text-Bytedump.html#dumpWithS",
          "type": "function"
        },
        "index": {
          "description": "Dump string into formatted strings using specific config",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "dumpWithS",
          "normalized": "BytedumpConfig-\u003eString-\u003eString",
          "package": "bytedump",
          "partial": "With",
          "signature": "BytedumpConfig-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:dumpWithS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump one byte into a 2 hexadecimal characters.\n\u003c/p\u003e",
          "module": "Text.Bytedump",
          "name": "hexString",
          "package": "bytedump",
          "signature": "Word8 -\u003e String",
          "source": "src/Text-Bytedump.html#hexString",
          "type": "function"
        },
        "index": {
          "description": "Dump one byte into hexadecimal characters",
          "hierarchy": "Text Bytedump",
          "module": "Text.Bytedump",
          "name": "hexString",
          "normalized": "Word-\u003eString",
          "package": "bytedump",
          "partial": "String",
          "signature": "Word-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytedump/docs/Text-Bytedump.html#v:hexString"
      }
    }
  ]
]