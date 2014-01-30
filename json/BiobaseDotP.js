[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Export.html#",
      "description": {
        "fct-module": "Biobase.ExtSS.Export",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-ExtSS-Export.html",
        "fct-type": "module",
        "title": "Export"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS Export",
        "module": "Biobase.ExtSS.Export",
        "name": "Export",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Export",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Export.html#v:eneeByteString",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003ccode\u003e\u003ca\u003eExtSS\u003c/a\u003e\u003c/code\u003e elements, transform into a bytestring.\n\u003c/p\u003e",
        "fct-module": "Biobase.ExtSS.Export",
        "fct-package": "BiobaseDotP",
        "fct-signature": "Enumeratee [ExtSS] ByteString m a",
        "fct-source": "src/Biobase-ExtSS-Export.html#eneeByteString",
        "fct-type": "function",
        "title": "eneeByteString"
      },
      "index": {
        "description": "Given list of ExtSS elements transform into bytestring",
        "hierarchy": "Biobase ExtSS Export",
        "module": "Biobase.ExtSS.Export",
        "name": "eneeByteString",
        "normalized": "Enumeratee[ExtSS]ByteString a b",
        "package": "BiobaseDotP",
        "partial": "Byte String",
        "signature": "Enumeratee[ExtSS]ByteString m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImports an extended secondary structure from bytestring. Such a structure\n is defined as:\n\u003c/p\u003e\u003cp\u003e# comment 1      -- comments\n # comment ...    -- comments\n # comment n      -- comments\n AUGACUACUAGC     -- sequence part\n    3  9  cWW     -- detailed pair information (indented)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.ExtSS.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-ExtSS-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Imports an extended secondary structure from bytestring Such structure is defined as comment comments comment comments comment comments AUGACUACUAGC sequence part cWW detailed pair information indented",
        "hierarchy": "Biobase ExtSS Import",
        "module": "Biobase.ExtSS.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:convLine",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a line into an extended pair.\n\u003c/p\u003e",
        "fct-module": "Biobase.ExtSS.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "ByteString -\u003e (Int, Int, ByteString)",
        "fct-source": "src/Biobase-ExtSS-Import.html#convLine",
        "fct-type": "function",
        "title": "convLine"
      },
      "index": {
        "description": "Convert line into an extended pair",
        "hierarchy": "Biobase ExtSS Import",
        "module": "Biobase.ExtSS.Import",
        "name": "convLine",
        "normalized": "ByteString-\u003e(Int,Int,ByteString)",
        "package": "BiobaseDotP",
        "partial": "Line",
        "signature": "ByteString-\u003e(Int,Int,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:eneeExtSS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert input bytestring into a list of extended secondary structures.\n\u003c/p\u003e",
        "fct-module": "Biobase.ExtSS.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "Enumeratee ByteString [ExtSS] m a",
        "fct-source": "src/Biobase-ExtSS-Import.html#eneeExtSS",
        "fct-type": "function",
        "title": "eneeExtSS"
      },
      "index": {
        "description": "Convert input bytestring into list of extended secondary structures",
        "hierarchy": "Biobase ExtSS Import",
        "module": "Biobase.ExtSS.Import",
        "name": "eneeExtSS",
        "normalized": "Enumeratee ByteString[ExtSS]a b",
        "package": "BiobaseDotP",
        "partial": "Ext SS",
        "signature": "Enumeratee ByteString[ExtSS]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS-Import.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function\n\u003c/p\u003e",
        "fct-module": "Biobase.ExtSS.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "FilePath -\u003e IO [ExtSS]",
        "fct-source": "src/Biobase-ExtSS-Import.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "Convenience function",
        "hierarchy": "Biobase ExtSS Import",
        "module": "Biobase.ExtSS.Import",
        "name": "fromFile",
        "normalized": "FilePath-\u003eIO[ExtSS]",
        "package": "BiobaseDotP",
        "partial": "File",
        "signature": "FilePath-\u003eIO[ExtSS]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#",
      "description": {
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-ExtSS.html",
        "fct-type": "module",
        "title": "ExtSS"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "ExtSS",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Ext SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#t:ExtSS",
      "description": {
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "data",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "data",
        "title": "ExtSS"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "ExtSS",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Ext SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:ExtSS",
      "description": {
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "ExtSS",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "function",
        "title": "ExtSS"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "ExtSS",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Ext SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:comments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "function",
        "title": "comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "comments",
        "normalized": "[ByteString]",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:detailed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "![(Int, Int, ByteString)]",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "function",
        "title": "detailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "detailed",
        "normalized": "[(Int,Int,ByteString)]",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": "[(Int,Int,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "sequence",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-ExtSS.html#v:structure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.ExtSS",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-ExtSS.html#ExtSS",
        "fct-type": "function",
        "title": "structure"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase ExtSS",
        "module": "Biobase.ExtSS",
        "name": "structure",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Export.html#",
      "description": {
        "fct-module": "Biobase.RNAstrand.Export",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-RNAstrand-Export.html",
        "fct-type": "module",
        "title": "Export"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand Export",
        "module": "Biobase.RNAstrand.Export",
        "name": "Export",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Export",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#",
      "description": {
        "fct-module": "Biobase.RNAstrand.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-RNAstrand-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand Import",
        "module": "Biobase.RNAstrand.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#v:eneeRNAstrand",
      "description": {
        "fct-descr": "\u003cp\u003eRNAstrand element creation.\n\u003c/p\u003e",
        "fct-module": "Biobase.RNAstrand.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "Enumeratee ByteString [RNAstrand] m a",
        "fct-source": "src/Biobase-RNAstrand-Import.html#eneeRNAstrand",
        "fct-type": "function",
        "title": "eneeRNAstrand"
      },
      "index": {
        "description": "RNAstrand element creation",
        "hierarchy": "Biobase RNAstrand Import",
        "module": "Biobase.RNAstrand.Import",
        "name": "eneeRNAstrand",
        "normalized": "Enumeratee ByteString[RNAstrand]a b",
        "package": "BiobaseDotP",
        "partial": "RNAstrand",
        "signature": "Enumeratee ByteString[RNAstrand]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand-Import.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function.\n\u003c/p\u003e",
        "fct-module": "Biobase.RNAstrand.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "FilePath -\u003e IO [RNAstrand]",
        "fct-source": "src/Biobase-RNAstrand-Import.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "Convenience function",
        "hierarchy": "Biobase RNAstrand Import",
        "module": "Biobase.RNAstrand.Import",
        "name": "fromFile",
        "normalized": "FilePath-\u003eIO[RNAstrand]",
        "package": "BiobaseDotP",
        "partial": "File",
        "signature": "FilePath-\u003eIO[RNAstrand]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#",
      "description": {
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-RNAstrand.html",
        "fct-type": "module",
        "title": "RNAstrand"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "RNAstrand",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "RNAstrand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#t:RNAstrand",
      "description": {
        "fct-descr": "\u003cp\u003eRNAstrand Dot-bracket files contain a sequence and a secondary structure,\n possibly with pseudoknots. In addition, comments are possible using \u003ca/\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "data",
        "fct-source": "src/Biobase-RNAstrand.html#RNAstrand",
        "fct-type": "data",
        "title": "RNAstrand"
      },
      "index": {
        "description": "RNAstrand Dot-bracket files contain sequence and secondary structure possibly with pseudoknots In addition comments are possible using",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "RNAstrand",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "RNAstrand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:RNAstrand",
      "description": {
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "RNAstrand",
        "fct-source": "src/Biobase-RNAstrand.html#RNAstrand",
        "fct-type": "function",
        "title": "RNAstrand"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "RNAstrand",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "RNAstrand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:comments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Biobase-RNAstrand.html#RNAstrand",
        "fct-type": "function",
        "title": "comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "comments",
        "normalized": "[ByteString]",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-RNAstrand.html#RNAstrand",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "sequence",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-RNAstrand.html#v:structure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.RNAstrand",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-RNAstrand.html#RNAstrand",
        "fct-type": "function",
        "title": "structure"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase RNAstrand",
        "module": "Biobase.RNAstrand",
        "name": "structure",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna-Export.html#",
      "description": {
        "fct-module": "Biobase.Vienna.Export",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Vienna-Export.html",
        "fct-type": "module",
        "title": "Export"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna Export",
        "module": "Biobase.Vienna.Export",
        "name": "Export",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Export",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna-Import.html#",
      "description": {
        "fct-module": "Biobase.Vienna.Import",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Vienna-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna Import",
        "module": "Biobase.Vienna.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eViennaRNA secondary structures.\n\u003c/p\u003e\u003cp\u003eTODO extends all data structures to accept energy values associated with\n structures, if needed.\n\u003c/p\u003e\u003cp\u003eTODO or said otherwise, parsers for RNAfold, RNAsubopt, etc output would be\n nice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Vienna.html",
        "fct-type": "module",
        "title": "Vienna"
      },
      "index": {
        "description": "ViennaRNA secondary structures TODO extends all data structures to accept energy values associated with structures if needed TODO or said otherwise parsers for RNAfold RNAsubopt etc output would be nice",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "Vienna",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Vienna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#t:Vienna",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulation of ViennaRNA secondary structures.\n\u003c/p\u003e\u003cp\u003eSometimes, we need to associate more than one structure with a sequence.\n This happens, for example, when parsing RNAsubopt output.\n\u003c/p\u003e",
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "data",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "data",
        "title": "Vienna"
      },
      "index": {
        "description": "Encapsulation of ViennaRNA secondary structures Sometimes we need to associate more than one structure with sequence This happens for example when parsing RNAsubopt output",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "Vienna",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Vienna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:Vienna",
      "description": {
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "Vienna",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "function",
        "title": "Vienna"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "Vienna",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Vienna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:ViennaMany",
      "description": {
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "ViennaMany",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "function",
        "title": "ViennaMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "ViennaMany",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "Vienna Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "sequence",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:structure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "function",
        "title": "structure"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "structure",
        "normalized": "",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseDotP/docs/Biobase-Vienna.html#v:structures",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Vienna",
        "fct-package": "BiobaseDotP",
        "fct-signature": "![ByteString]",
        "fct-source": "src/Biobase-Vienna.html#Vienna",
        "fct-type": "function",
        "title": "structures"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Vienna",
        "module": "Biobase.Vienna",
        "name": "structures",
        "normalized": "[ByteString]",
        "package": "BiobaseDotP",
        "partial": "",
        "signature": "[ByteString]"
      }
    }
  }
]