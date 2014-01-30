[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurner file parser. Returns a Turner2004 data structure. Requires an\n annoying amount of boilerplate.\n\u003c/p\u003e\u003cp\u003eHow is \u003ccode\u003e\u003ca\u003estack\u003c/a\u003e\u003c/code\u003e data stored:\n\u003c/p\u003e\u003cp\u003eAX\n UY   -\u003e  ((A,U),(Y,X))\n\u003c/p\u003e\u003cp\u003eHow \u003ccode\u003e\u003ca\u003eiloop1x1\u003c/a\u003e\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eX\n A G\n U C  -\u003e ((A,U),(C,G),X,Y)\n  Y\n\u003c/p\u003e\u003cp\u003eNow \u003ccode\u003eiloop1x2\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eX\n A  G\n U  C  -\u003e ((A,U),(C,G),X,C,Y), single (X) first, then 5' to 3'\n  YC\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eiloop2x2\u003c/a\u003e\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eXY\n A  G\n U  C  -\u003e ((A,U),(C,G),X,Y,y,x), X--\u003eY then x\u003c--y\n  xy\n\u003c/p\u003e\u003cp\u003eTODO not sure if dangle3/dangle5 are correctly split or if they should switch\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Turner-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Turner file parser Returns Turner2004 data structure Requires an annoying amount of boilerplate How is stack data stored AX UY How iloop1x1 is stored Now iloop1x2 is stored single first then to YC iloop2x2 is stored XY then xy TODO not sure if dangle3 dangle5 are correctly split or if they should switch",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#t:Prefix",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner-Import.html#Prefix",
        "fct-type": "type",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "Prefix",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#t:Suffix",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner-Import.html#Suffix",
        "fct-type": "type",
        "title": "Suffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "Suffix",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:allEq",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[a] -\u003e Bool",
        "fct-source": "src/Biobase-Turner-Import.html#allEq",
        "fct-type": "function",
        "title": "allEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "allEq",
        "normalized": "[a]-\u003eBool",
        "package": "BiobaseTurner",
        "partial": "Eq",
        "signature": "[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:blockFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "FilePath -\u003e IO [Energy]",
        "fct-source": "src/Biobase-Turner-Import.html#blockFromFile",
        "fct-type": "function",
        "title": "blockFromFile"
      },
      "index": {
        "description": "Convenience function",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "blockFromFile",
        "normalized": "FilePath-\u003eIO[Energy]",
        "package": "BiobaseTurner",
        "partial": "From File",
        "signature": "FilePath-\u003eIO[Energy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:d1_30",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. Z a]",
        "fct-source": "src/Biobase-Turner-Import.html#d1_30",
        "fct-type": "function",
        "title": "d1_30"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "d1_30",
        "normalized": "[Z a]",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "[Z a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:fromDir",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a directory, fill in the \u003ccode\u003e\u003ca\u003eTurner2004\u003c/a\u003e\u003c/code\u003e data structure\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "FilePath -\u003e Prefix -\u003e Suffix -\u003e IO Turner2004",
        "fct-source": "src/Biobase-Turner-Import.html#fromDir",
        "fct-type": "function",
        "title": "fromDir"
      },
      "index": {
        "description": "Given directory fill in the Turner2004 data structure",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "fromDir",
        "normalized": "FilePath-\u003ePrefix-\u003eSuffix-\u003eIO Turner",
        "package": "BiobaseTurner",
        "partial": "Dir",
        "signature": "FilePath-\u003ePrefix-\u003eSuffix-\u003eIO Turner"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:infE",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Energy",
        "fct-source": "src/Biobase-Turner-Import.html#infE",
        "fct-type": "function",
        "title": "infE"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "infE",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. Z Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPB",
        "fct-type": "function",
        "title": "keysPB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPB",
        "normalized": "[((Z Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PB",
        "signature": "[((Z Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPBB",
        "fct-type": "function",
        "title": "keysPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPBB",
        "normalized": "[(((Z Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PBB",
        "signature": "[(((Z Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPP",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPP",
        "fct-type": "function",
        "title": "keysPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPP",
        "normalized": "[(((Z Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PP",
        "signature": "[(((Z Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPPBB",
        "fct-type": "function",
        "title": "keysPPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPPBB",
        "normalized": "[(((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PPBB",
        "signature": "[(((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPPBBB",
        "fct-type": "function",
        "title": "keysPPBBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPPBBB",
        "normalized": "[((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PPBBB",
        "signature": "[((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBBBdna",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPPBBBBdna",
        "fct-type": "function",
        "title": "keysPPBBBBdna"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPPBBBBdna",
        "normalized": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PPBBBBdna",
        "signature": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBBBrna",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[:. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
        "fct-source": "src/Biobase-Turner-Import.html#keysPPBBBBrna",
        "fct-type": "function",
        "title": "keysPPBBBBrna"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "keysPPBBBBrna",
        "normalized": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
        "package": "BiobaseTurner",
        "partial": "PPBBBBrna",
        "signature": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxP",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. Z Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxP",
        "fct-type": "function",
        "title": "maxP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxP",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. Z Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPB",
        "fct-type": "function",
        "title": "maxPB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPBB",
        "fct-type": "function",
        "title": "maxPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPP",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPP",
        "fct-type": "function",
        "title": "maxPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPP",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPPBB",
        "fct-type": "function",
        "title": "maxPPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPPBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPPBBB",
        "fct-type": "function",
        "title": "maxPPBBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPPBBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBBBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#maxPPBBBB",
        "fct-type": "function",
        "title": "maxPPBBBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "maxPPBBBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBBBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minP",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. Z Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minP",
        "fct-type": "function",
        "title": "minP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minP",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. Z Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPB",
        "fct-type": "function",
        "title": "minPB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPBB",
        "fct-type": "function",
        "title": "minPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPP",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPP",
        "fct-type": "function",
        "title": "minPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPP",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPPBB",
        "fct-type": "function",
        "title": "minPPBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPPBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPPBBB",
        "fct-type": "function",
        "title": "minPPBBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPPBBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBBBB",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": ":. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
        "fct-source": "src/Biobase-Turner-Import.html#minPPBBBB",
        "fct-type": "function",
        "title": "minPPBBBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "minPPBBBB",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPBBBB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:miscFromFile",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "FilePath -\u003e IO [[Double]]",
        "fct-source": "src/Biobase-Turner-Import.html#miscFromFile",
        "fct-type": "function",
        "title": "miscFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "miscFromFile",
        "normalized": "FilePath-\u003eIO[[Double]]",
        "package": "BiobaseTurner",
        "partial": "From File",
        "signature": "FilePath-\u003eIO[[Double]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eTransform input stream into list of list of doubles\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Conduit ByteString m [Energy]",
        "fct-source": "src/Biobase-Turner-Import.html#parseBlocks",
        "fct-type": "function",
        "title": "parseBlocks"
      },
      "index": {
        "description": "Transform input stream into list of list of doubles",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "parseBlocks",
        "normalized": "Conduit ByteString a[Energy]",
        "package": "BiobaseTurner",
        "partial": "Blocks",
        "signature": "Conduit ByteString m[Energy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseMiscLoop",
      "description": {
        "fct-descr": "\u003cp\u003eParses the miscloop table\n\u003c/p\u003e\u003cp\u003eNOTE extra brownie points for miscloop.dat for providing data in a form that\n does not conform to normal number encoding.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Sink ByteString m [[Double]]",
        "fct-source": "src/Biobase-Turner-Import.html#parseMiscLoop",
        "fct-type": "function",
        "title": "parseMiscLoop"
      },
      "index": {
        "description": "Parses the miscloop table NOTE extra brownie points for miscloop.dat for providing data in form that does not conform to normal number encoding",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "parseMiscLoop",
        "normalized": "Sink ByteString a[[Double]]",
        "package": "BiobaseTurner",
        "partial": "Misc Loop",
        "signature": "Sink ByteString m[[Double]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseTabulated",
      "description": {
        "fct-descr": "\u003cp\u003eIteratee to parse tabulated loops (hairpins).\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Sink ByteString m [(ByteString, Energy)]",
        "fct-source": "src/Biobase-Turner-Import.html#parseTabulated",
        "fct-type": "function",
        "title": "parseTabulated"
      },
      "index": {
        "description": "Iteratee to parse tabulated loops hairpins",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "parseTabulated",
        "normalized": "Sink ByteString a[(ByteString,Energy)]",
        "package": "BiobaseTurner",
        "partial": "Tabulated",
        "signature": "Sink ByteString m[(ByteString,Energy)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist11",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[(Nuc, Nuc)]",
        "fct-source": "src/Biobase-Turner-Import.html#plist11",
        "fct-type": "function",
        "title": "plist11"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "plist11",
        "normalized": "[(Nuc,Nuc)]",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "[(Nuc,Nuc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist22dna",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[(Nuc, Nuc)]",
        "fct-source": "src/Biobase-Turner-Import.html#plist22dna",
        "fct-type": "function",
        "title": "plist22dna"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "plist22dna",
        "normalized": "[(Nuc,Nuc)]",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "[(Nuc,Nuc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist22rna",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "[(Nuc, Nuc)]",
        "fct-source": "src/Biobase-Turner-Import.html#plist22rna",
        "fct-type": "function",
        "title": "plist22rna"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "plist22rna",
        "normalized": "[(Nuc,Nuc)]",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "[(Nuc,Nuc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:readD",
      "description": {
        "fct-descr": "\u003cp\u003eParses stupidly encoded values like \u003ca\u003e.6\u003c/a\u003e and \u003ca\u003e-.0\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "ByteString -\u003e Double",
        "fct-source": "src/Biobase-Turner-Import.html#readD",
        "fct-type": "function",
        "title": "readD"
      },
      "index": {
        "description": "Parses stupidly encoded values like and",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "readD",
        "normalized": "ByteString-\u003eDouble",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "ByteString-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:tabFromFile",
      "description": {
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "FilePath -\u003e IO [(Primary, Energy)]",
        "fct-source": "src/Biobase-Turner-Import.html#tabFromFile",
        "fct-type": "function",
        "title": "tabFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "tabFromFile",
        "normalized": "FilePath-\u003eIO[(Primary,Energy)]",
        "package": "BiobaseTurner",
        "partial": "From File",
        "signature": "FilePath-\u003eIO[(Primary,Energy)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eextract values. \u003ca\u003e.\u003c/a\u003e - values are extracted as \u003e 100k\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner.Import",
        "fct-package": "BiobaseTurner",
        "fct-signature": "ByteString -\u003e [Energy]",
        "fct-source": "src/Biobase-Turner-Import.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "extract values values are extracted as",
        "hierarchy": "Biobase Turner Import",
        "module": "Biobase.Turner.Import",
        "name": "values",
        "normalized": "ByteString-\u003e[Energy]",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "ByteString-\u003e[Energy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTurner2004\u003c/a\u003e\u003c/code\u003e data structure reflects the RNA (and DNA) energy\n parameters known as the Turner 2004 data set.\n\u003c/p\u003e\u003cp\u003eIn general, have a look here:\n \u003ca\u003ehttp://rna.urmc.rochester.edu/NNDB/turner04/index.html\u003c/a\u003e where parameters\n are explained.\n\u003c/p\u003e\u003cp\u003eTODO need a \u003ca\u003eFunctor\u003c/a\u003e instance over elements \u003ca\u003ee\u003c/a\u003e. Or alternatively, generic\n programming to capture stuff going on in \u003ccode\u003ee\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Turner.html",
        "fct-type": "module",
        "title": "Turner"
      },
      "index": {
        "description": "The Turner2004 data structure reflects the RNA and DNA energy parameters known as the Turner data set In general have look here http rna.urmc.rochester.edu NNDB turner04 index.html where parameters are explained TODO need Functor instance over elements Or alternatively generic programming to capture stuff going on in",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Turner",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Turner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Energy",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual Turner parameters return energies in Double format.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "newtype",
        "fct-source": "src/Biobase-Turner.html#Energy",
        "fct-type": "newtype",
        "title": "Energy"
      },
      "index": {
        "description": "The actual Turner parameters return energies in Double format",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Energy",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PN",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PN",
        "fct-type": "type",
        "title": "PN"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PN",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PNN",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PNN",
        "fct-type": "type",
        "title": "PNN"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PNN",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PNN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PP",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PP",
        "fct-type": "type",
        "title": "PP"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PP",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNN",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PPNN",
        "fct-type": "type",
        "title": "PPNN"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PPNN",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPNN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNNN",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PPNNN",
        "fct-type": "type",
        "title": "PPNNN"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PPNNN",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPNNN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNNNN",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#PPNNNN",
        "fct-type": "type",
        "title": "PPNNNN"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "PPNNNN",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "PPNNNN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Turner2004",
      "description": {
        "fct-descr": "\u003cp\u003eThe Turner model with \u003ccode\u003e\u003ca\u003eEnergy\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "type",
        "fct-source": "src/Biobase-Turner.html#Turner2004",
        "fct-type": "type",
        "title": "Turner2004"
      },
      "index": {
        "description": "The Turner model with Energy",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Turner2004",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Turner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Turner2004Model",
      "description": {
        "fct-descr": "\u003cp\u003eThe Turner energy tables. Parametrized over the storing vector type \u003ccode\u003ev\u003c/code\u003e\n and the actual element type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "data",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "data",
        "title": "Turner2004Model"
      },
      "index": {
        "description": "The Turner energy tables Parametrized over the storing vector type and the actual element type",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Turner2004Model",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Turner Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:Energy",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Energy Double",
        "fct-source": "src/Biobase-Turner.html#Energy",
        "fct-type": "function",
        "title": "Energy"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Energy",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Energy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:Turner2004Model",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "Turner2004Model",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "Turner2004Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "Turner2004Model",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Turner Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_bulgeL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Vector e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_bulgeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_bulgeL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_bulgeSingleC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_bulgeSingleC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_bulgeSingleC",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_coaxStack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_coaxStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_coaxStack",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_coaxial",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PP e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_coaxial"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_coaxial",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_dangle3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_dangle3"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_dangle3",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_dangle5",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_dangle5"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_dangle5",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_extMM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_extMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_extMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinC3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinC3"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinC3",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinCintercept",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinCintercept"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinCintercept",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Cintercept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinCslope",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinCslope"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinCslope",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Cslope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinGGG",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinGGG"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinGGG",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "GGG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Vector e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinLookup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Map Primary e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinLookup",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinMM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_hairpinMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_hairpinMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop1x1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PPNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloop1x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloop1x1",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop1xnMM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloop1xnMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloop1xnMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PPNNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloop2x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloop2x1",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PPNNNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloop2x2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloop2x2",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x3MM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloop2x3MM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloop2x3MM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloopL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Vector e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloopL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloopL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloopMM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_iloopMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_iloopMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_intermolecularInit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_intermolecularInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_intermolecularInit",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_largeLoop",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_largeLoop"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_largeLoop",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_maxNinio",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_maxNinio"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_maxNinio",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Ninio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiAsym",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiAsym"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiAsym",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Asym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiHelix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiHelix"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiHelix",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Helix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiMM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiNuc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiNuc"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiNuc",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Nuc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiOffset",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiStrain",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_multiStrain"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_multiStrain",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Strain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_ninio",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_ninio"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_ninio",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_stack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PP e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_stack",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_tStackCoax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!(Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_tStackCoax"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_tStackCoax",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Stack Coax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_termAU",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "!e",
        "fct-source": "src/Biobase-Turner.html#Turner2004Model",
        "fct-type": "function",
        "title": "_termAU"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "_termAU",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "AU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:bulgeL",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
        "fct-source": "src/Biobase-Turner.html#bulgeL",
        "fct-type": "function",
        "title": "bulgeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "bulgeL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:bulgeSingleC",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#bulgeSingleC",
        "fct-type": "function",
        "title": "bulgeSingleC"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "bulgeSingleC",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:coaxStack",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#coaxStack",
        "fct-type": "function",
        "title": "coaxStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "coaxStack",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:coaxial",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PP e)",
        "fct-source": "src/Biobase-Turner.html#coaxial",
        "fct-type": "function",
        "title": "coaxial"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "coaxial",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:dangle3",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PN e)",
        "fct-source": "src/Biobase-Turner.html#dangle3",
        "fct-type": "function",
        "title": "dangle3"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "dangle3",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:dangle5",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PN e)",
        "fct-source": "src/Biobase-Turner.html#dangle5",
        "fct-type": "function",
        "title": "dangle5"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "dangle5",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:emap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all \u003ccode\u003ee\u003c/code\u003e elements.\n\u003c/p\u003e",
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "(e -\u003e e') -\u003e Turner2004Model e -\u003e Turner2004Model e'",
        "fct-source": "src/Biobase-Turner.html#emap",
        "fct-type": "function",
        "title": "emap"
      },
      "index": {
        "description": "Map function over all elements",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "emap",
        "normalized": "(a-\u003eb)-\u003eTurner Model a-\u003eTurner Model b",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": "(e-\u003ee')-\u003eTurner Model e-\u003eTurner Model e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:extMM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#extMM",
        "fct-type": "function",
        "title": "extMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "extMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinC3",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#hairpinC3",
        "fct-type": "function",
        "title": "hairpinC3"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinC3",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinCintercept",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#hairpinCintercept",
        "fct-type": "function",
        "title": "hairpinCintercept"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinCintercept",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Cintercept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinCslope",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#hairpinCslope",
        "fct-type": "function",
        "title": "hairpinCslope"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinCslope",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Cslope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinGGG",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#hairpinGGG",
        "fct-type": "function",
        "title": "hairpinGGG"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinGGG",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "GGG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinL",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
        "fct-source": "src/Biobase-Turner.html#hairpinL",
        "fct-type": "function",
        "title": "hairpinL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinLookup",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Map Primary e)",
        "fct-source": "src/Biobase-Turner.html#hairpinLookup",
        "fct-type": "function",
        "title": "hairpinLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinLookup",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinMM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#hairpinMM",
        "fct-type": "function",
        "title": "hairpinMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "hairpinMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop1x1",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNN e)",
        "fct-source": "src/Biobase-Turner.html#iloop1x1",
        "fct-type": "function",
        "title": "iloop1x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloop1x1",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop1xnMM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#iloop1xnMM",
        "fct-type": "function",
        "title": "iloop1xnMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloop1xnMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x1",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNNN e)",
        "fct-source": "src/Biobase-Turner.html#iloop2x1",
        "fct-type": "function",
        "title": "iloop2x1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloop2x1",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x2",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNNNN e)",
        "fct-source": "src/Biobase-Turner.html#iloop2x2",
        "fct-type": "function",
        "title": "iloop2x2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloop2x2",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x3MM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#iloop2x3MM",
        "fct-type": "function",
        "title": "iloop2x3MM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloop2x3MM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloopL",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
        "fct-source": "src/Biobase-Turner.html#iloopL",
        "fct-type": "function",
        "title": "iloopL"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloopL",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloopMM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#iloopMM",
        "fct-type": "function",
        "title": "iloopMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "iloopMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:intermolecularInit",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#intermolecularInit",
        "fct-type": "function",
        "title": "intermolecularInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "intermolecularInit",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:largeLoop",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#largeLoop",
        "fct-type": "function",
        "title": "largeLoop"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "largeLoop",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:maxNinio",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#maxNinio",
        "fct-type": "function",
        "title": "maxNinio"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "maxNinio",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Ninio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiAsym",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#multiAsym",
        "fct-type": "function",
        "title": "multiAsym"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiAsym",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Asym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiHelix",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#multiHelix",
        "fct-type": "function",
        "title": "multiHelix"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiHelix",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Helix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiMM",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#multiMM",
        "fct-type": "function",
        "title": "multiMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiMM",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiNuc",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#multiNuc",
        "fct-type": "function",
        "title": "multiNuc"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiNuc",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Nuc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiOffset",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#multiOffset",
        "fct-type": "function",
        "title": "multiOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiOffset",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiStrain",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#multiStrain",
        "fct-type": "function",
        "title": "multiStrain"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "multiStrain",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Strain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:ninio",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#ninio",
        "fct-type": "function",
        "title": "ninio"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "ninio",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:stack",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PP e)",
        "fct-source": "src/Biobase-Turner.html#stack",
        "fct-type": "function",
        "title": "stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "stack",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:tStackCoax",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
        "fct-source": "src/Biobase-Turner.html#tStackCoax",
        "fct-type": "function",
        "title": "tStackCoax"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "tStackCoax",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "Stack Coax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:termAU",
      "description": {
        "fct-module": "Biobase.Turner",
        "fct-package": "BiobaseTurner",
        "fct-signature": "forall e.  Lens' (Turner2004Model e) e",
        "fct-source": "src/Biobase-Turner.html#termAU",
        "fct-type": "function",
        "title": "termAU"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Turner",
        "module": "Biobase.Turner",
        "name": "termAU",
        "normalized": "",
        "package": "BiobaseTurner",
        "partial": "AU",
        "signature": ""
      }
    }
  }
]