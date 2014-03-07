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
        "word": "BiobaseDotP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "source": "src/Biobase-ExtSS-Export.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase ExtSS Export",
          "module": "Biobase.ExtSS.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "partial": "Export",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Export.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of \u003ccode\u003e\u003ca\u003eExtSS\u003c/a\u003e\u003c/code\u003e elements, transform into a bytestring.\n\u003c/p\u003e",
          "module": "Biobase.ExtSS.Export",
          "name": "eneeByteString",
          "package": "BiobaseDotP",
          "signature": "Enumeratee [ExtSS] ByteString m a",
          "source": "src/Biobase-ExtSS-Export.html#eneeByteString",
          "type": "function"
        },
        "index": {
          "description": "Given list of ExtSS elements transform into bytestring",
          "hierarchy": "Biobase ExtSS Export",
          "module": "Biobase.ExtSS.Export",
          "name": "eneeByteString",
          "normalized": "Enumeratee[ExtSS]ByteString a b",
          "package": "BiobaseDotP",
          "partial": "Byte String",
          "signature": "Enumeratee[ExtSS]ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Export.html#v:eneeByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImports an extended secondary structure from bytestring. Such a structure\n is defined as:\n\u003c/p\u003e\u003cp\u003e# comment 1      -- comments\n # comment ...    -- comments\n # comment n      -- comments\n AUGACUACUAGC     -- sequence part\n    3  9  cWW     -- detailed pair information (indented)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.ExtSS.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "source": "src/Biobase-ExtSS-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Imports an extended secondary structure from bytestring Such structure is defined as comment comments comment comments comment comments AUGACUACUAGC sequence part cWW detailed pair information indented",
          "hierarchy": "Biobase ExtSS Import",
          "module": "Biobase.ExtSS.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a line into an extended pair.\n\u003c/p\u003e",
          "module": "Biobase.ExtSS.Import",
          "name": "convLine",
          "package": "BiobaseDotP",
          "signature": "ByteString -\u003e (Int, Int, ByteString)",
          "source": "src/Biobase-ExtSS-Import.html#convLine",
          "type": "function"
        },
        "index": {
          "description": "Convert line into an extended pair",
          "hierarchy": "Biobase ExtSS Import",
          "module": "Biobase.ExtSS.Import",
          "name": "convLine",
          "normalized": "ByteString-\u003e(Int,Int,ByteString)",
          "package": "BiobaseDotP",
          "partial": "Line",
          "signature": "ByteString-\u003e(Int,Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:convLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert input bytestring into a list of extended secondary structures.\n\u003c/p\u003e",
          "module": "Biobase.ExtSS.Import",
          "name": "eneeExtSS",
          "package": "BiobaseDotP",
          "signature": "Enumeratee ByteString [ExtSS] m a",
          "source": "src/Biobase-ExtSS-Import.html#eneeExtSS",
          "type": "function"
        },
        "index": {
          "description": "Convert input bytestring into list of extended secondary structures",
          "hierarchy": "Biobase ExtSS Import",
          "module": "Biobase.ExtSS.Import",
          "name": "eneeExtSS",
          "normalized": "Enumeratee ByteString[ExtSS]a b",
          "package": "BiobaseDotP",
          "partial": "Ext SS",
          "signature": "Enumeratee ByteString[ExtSS]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:eneeExtSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function\n\u003c/p\u003e",
          "module": "Biobase.ExtSS.Import",
          "name": "fromFile",
          "package": "BiobaseDotP",
          "signature": "FilePath -\u003e IO [ExtSS]",
          "source": "src/Biobase-ExtSS-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Convenience function",
          "hierarchy": "Biobase ExtSS Import",
          "module": "Biobase.ExtSS.Import",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO[ExtSS]",
          "package": "BiobaseDotP",
          "partial": "File",
          "signature": "FilePath-\u003eIO[ExtSS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "source": "src/Biobase-ExtSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "partial": "Ext SS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "partial": "Ext SS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#t:ExtSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "signature": "ExtSS",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "ExtSS",
          "package": "BiobaseDotP",
          "partial": "Ext SS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:ExtSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "comments",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "comments",
          "normalized": "[ByteString]",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "detailed",
          "package": "BiobaseDotP",
          "signature": "[(Int, Int, ByteString)]",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "detailed",
          "normalized": "[(Int,Int,ByteString)]",
          "package": "BiobaseDotP",
          "signature": "[(Int,Int,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:detailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "sequence",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "sequence",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.ExtSS",
          "name": "structure",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-ExtSS.html#ExtSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase ExtSS",
          "module": "Biobase.ExtSS",
          "name": "structure",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "source": "src/Biobase-RNAstrand-Export.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand Export",
          "module": "Biobase.RNAstrand.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "partial": "Export",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Export.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "source": "src/Biobase-RNAstrand-Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand Import",
          "module": "Biobase.RNAstrand.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRNAstrand element creation.\n\u003c/p\u003e",
          "module": "Biobase.RNAstrand.Import",
          "name": "eneeRNAstrand",
          "package": "BiobaseDotP",
          "signature": "Enumeratee ByteString [RNAstrand] m a",
          "source": "src/Biobase-RNAstrand-Import.html#eneeRNAstrand",
          "type": "function"
        },
        "index": {
          "description": "RNAstrand element creation",
          "hierarchy": "Biobase RNAstrand Import",
          "module": "Biobase.RNAstrand.Import",
          "name": "eneeRNAstrand",
          "normalized": "Enumeratee ByteString[RNAstrand]a b",
          "package": "BiobaseDotP",
          "partial": "RNAstrand",
          "signature": "Enumeratee ByteString[RNAstrand]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#v:eneeRNAstrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function.\n\u003c/p\u003e",
          "module": "Biobase.RNAstrand.Import",
          "name": "fromFile",
          "package": "BiobaseDotP",
          "signature": "FilePath -\u003e IO [RNAstrand]",
          "source": "src/Biobase-RNAstrand-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Convenience function",
          "hierarchy": "Biobase RNAstrand Import",
          "module": "Biobase.RNAstrand.Import",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO[RNAstrand]",
          "package": "BiobaseDotP",
          "partial": "File",
          "signature": "FilePath-\u003eIO[RNAstrand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "source": "src/Biobase-RNAstrand.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "partial": "RNAstrand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRNAstrand Dot-bracket files contain a sequence and a secondary structure,\n possibly with pseudoknots. In addition, comments are possible using \u003ca/\u003e.\n\u003c/p\u003e",
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "source": "src/Biobase-RNAstrand.html#RNAstrand",
          "type": "data"
        },
        "index": {
          "description": "RNAstrand Dot-bracket files contain sequence and secondary structure possibly with pseudoknots In addition comments are possible using",
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "partial": "RNAstrand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#t:RNAstrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "signature": "RNAstrand",
          "source": "src/Biobase-RNAstrand.html#RNAstrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "RNAstrand",
          "package": "BiobaseDotP",
          "partial": "RNAstrand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:RNAstrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand",
          "name": "comments",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "source": "src/Biobase-RNAstrand.html#RNAstrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "comments",
          "normalized": "[ByteString]",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand",
          "name": "sequence",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-RNAstrand.html#RNAstrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "sequence",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.RNAstrand",
          "name": "structure",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-RNAstrand.html#RNAstrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase RNAstrand",
          "module": "Biobase.RNAstrand",
          "name": "structure",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "source": "src/Biobase-Vienna-Export.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase Vienna Export",
          "module": "Biobase.Vienna.Export",
          "name": "Export",
          "package": "BiobaseDotP",
          "partial": "Export",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna-Export.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "source": "src/Biobase-Vienna-Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase Vienna Import",
          "module": "Biobase.Vienna.Import",
          "name": "Import",
          "package": "BiobaseDotP",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eViennaRNA secondary structures.\n\u003c/p\u003e\u003cp\u003eTODO extends all data structures to accept energy values associated with\n structures, if needed.\n\u003c/p\u003e\u003cp\u003eTODO or said otherwise, parsers for RNAfold, RNAsubopt, etc output would be\n nice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "source": "src/Biobase-Vienna.html",
          "type": "module"
        },
        "index": {
          "description": "ViennaRNA secondary structures TODO extends all data structures to accept energy values associated with structures if needed TODO or said otherwise parsers for RNAfold RNAsubopt etc output would be nice",
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "partial": "Vienna",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulation of ViennaRNA secondary structures.\n\u003c/p\u003e\u003cp\u003eSometimes, we need to associate more than one structure with a sequence.\n This happens, for example, when parsing RNAsubopt output.\n\u003c/p\u003e",
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "data"
        },
        "index": {
          "description": "Encapsulation of ViennaRNA secondary structures Sometimes we need to associate more than one structure with sequence This happens for example when parsing RNAsubopt output",
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "partial": "Vienna",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#t:Vienna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "signature": "Vienna",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "Vienna",
          "package": "BiobaseDotP",
          "partial": "Vienna",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:Vienna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna",
          "name": "ViennaMany",
          "package": "BiobaseDotP",
          "signature": "ViennaMany",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "ViennaMany",
          "package": "BiobaseDotP",
          "partial": "Vienna Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:ViennaMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna",
          "name": "sequence",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "sequence",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna",
          "name": "structure",
          "package": "BiobaseDotP",
          "signature": "ByteString",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "structure",
          "package": "BiobaseDotP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Vienna",
          "name": "structures",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "source": "src/Biobase-Vienna.html#Vienna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Vienna",
          "module": "Biobase.Vienna",
          "name": "structures",
          "normalized": "[ByteString]",
          "package": "BiobaseDotP",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:structures"
      }
    }
  ]
]