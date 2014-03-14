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
        "word": "BiobaseTurner"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurner file parser. Returns a Turner2004 data structure. Requires an\n annoying amount of boilerplate.\n\u003c/p\u003e\u003cp\u003eHow is \u003ccode\u003e\u003ca\u003estack\u003c/a\u003e\u003c/code\u003e data stored:\n\u003c/p\u003e\u003cp\u003eAX\n UY   -\u003e  ((A,U),(Y,X))\n\u003c/p\u003e\u003cp\u003eHow \u003ccode\u003e\u003ca\u003eiloop1x1\u003c/a\u003e\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eX\n A G\n U C  -\u003e ((A,U),(C,G),X,Y)\n  Y\n\u003c/p\u003e\u003cp\u003eNow \u003ccode\u003eiloop1x2\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eX\n A  G\n U  C  -\u003e ((A,U),(C,G),X,C,Y), single (X) first, then 5' to 3'\n  YC\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eiloop2x2\u003c/a\u003e\u003c/code\u003e is stored:\n\u003c/p\u003e\u003cp\u003eXY\n A  G\n U  C  -\u003e ((A,U),(C,G),X,Y,y,x), X--\u003eY then x\u003c--y\n  xy\n\u003c/p\u003e\u003cp\u003eTODO not sure if dangle3/dangle5 are correctly split or if they should switch\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.Turner.Import",
          "name": "Import",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Turner file parser Returns Turner2004 data structure Requires an annoying amount of boilerplate How is stack data stored AX UY How iloop1x1 is stored Now iloop1x2 is stored single first then to YC iloop2x2 is stored XY then xy TODO not sure if dangle3 dangle5 are correctly split or if they should switch",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "Import",
          "package": "BiobaseTurner",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "Prefix",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner-Import.html#Prefix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "Prefix",
          "package": "BiobaseTurner",
          "partial": "Prefix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#t:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "Suffix",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner-Import.html#Suffix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "Suffix",
          "package": "BiobaseTurner",
          "partial": "Suffix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#t:Suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "allEq",
          "package": "BiobaseTurner",
          "signature": "[a] -\u003e Bool",
          "source": "src/Biobase-Turner-Import.html#allEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "allEq",
          "normalized": "[a]-\u003eBool",
          "package": "BiobaseTurner",
          "partial": "Eq",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:allEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "blockFromFile",
          "package": "BiobaseTurner",
          "signature": "FilePath -\u003e IO [Energy]",
          "source": "src/Biobase-Turner-Import.html#blockFromFile",
          "type": "function"
        },
        "index": {
          "description": "Convenience function",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "blockFromFile",
          "normalized": "FilePath-\u003eIO[Energy]",
          "package": "BiobaseTurner",
          "partial": "From File",
          "signature": "FilePath-\u003eIO[Energy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:blockFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "d1_30",
          "package": "BiobaseTurner",
          "signature": "[:. Z a]",
          "source": "src/Biobase-Turner-Import.html#d1_30",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "d1_30",
          "normalized": "[Z a]",
          "package": "BiobaseTurner",
          "signature": "[Z a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:d1_30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a directory, fill in the \u003ccode\u003e\u003ca\u003eTurner2004\u003c/a\u003e\u003c/code\u003e data structure\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "fromDir",
          "package": "BiobaseTurner",
          "signature": "FilePath -\u003e Prefix -\u003e Suffix -\u003e IO Turner2004",
          "source": "src/Biobase-Turner-Import.html#fromDir",
          "type": "function"
        },
        "index": {
          "description": "Given directory fill in the Turner2004 data structure",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "fromDir",
          "normalized": "FilePath-\u003ePrefix-\u003eSuffix-\u003eIO Turner",
          "package": "BiobaseTurner",
          "partial": "Dir",
          "signature": "FilePath-\u003ePrefix-\u003eSuffix-\u003eIO Turner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:fromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "infE",
          "package": "BiobaseTurner",
          "signature": "Energy",
          "source": "src/Biobase-Turner-Import.html#infE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "infE",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:infE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPB",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. Z Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPB",
          "normalized": "[((Z Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PB",
          "signature": "[((Z Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPBB",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPBB",
          "normalized": "[(((Z Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PBB",
          "signature": "[(((Z Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPP",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPP",
          "normalized": "[(((Z Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PP",
          "signature": "[(((Z Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPPBB",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPPBB",
          "normalized": "[(((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PPBB",
          "signature": "[(((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBB",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPPBBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBB",
          "normalized": "[((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PPBBB",
          "signature": "[((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBBBdna",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPPBBBBdna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBBBdna",
          "normalized": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PPBBBBdna",
          "signature": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBBBdna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBBBrna",
          "package": "BiobaseTurner",
          "signature": "[:. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc]",
          "source": "src/Biobase-Turner-Import.html#keysPPBBBBrna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "keysPPBBBBrna",
          "normalized": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "package": "BiobaseTurner",
          "partial": "PPBBBBrna",
          "signature": "[(((((((Z Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc)Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:keysPPBBBBrna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxP",
          "package": "BiobaseTurner",
          "signature": ":. (:. Z Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxP",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. Z Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPB",
          "package": "BiobaseTurner",
          "partial": "PB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPBB",
          "package": "BiobaseTurner",
          "partial": "PBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPP",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPP",
          "package": "BiobaseTurner",
          "partial": "PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPPBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPPBB",
          "package": "BiobaseTurner",
          "partial": "PPBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPPBBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPPBBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPPBBB",
          "package": "BiobaseTurner",
          "partial": "PPBBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "maxPPBBBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#maxPPBBBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "maxPPBBBB",
          "package": "BiobaseTurner",
          "partial": "PPBBBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:maxPPBBBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minP",
          "package": "BiobaseTurner",
          "signature": ":. (:. Z Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minP",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. Z Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPB",
          "package": "BiobaseTurner",
          "partial": "PB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPBB",
          "package": "BiobaseTurner",
          "partial": "PBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPP",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPP",
          "package": "BiobaseTurner",
          "partial": "PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPPBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPPBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPPBB",
          "package": "BiobaseTurner",
          "partial": "PPBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPPBBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPPBBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPPBBB",
          "package": "BiobaseTurner",
          "partial": "PPBBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "minPPBBBB",
          "package": "BiobaseTurner",
          "signature": ":. (:. (:. (:. (:. (:. (:. (:. Z Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc) Nuc",
          "source": "src/Biobase-Turner-Import.html#minPPBBBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "minPPBBBB",
          "package": "BiobaseTurner",
          "partial": "PPBBBB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:minPPBBBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "miscFromFile",
          "package": "BiobaseTurner",
          "signature": "FilePath -\u003e IO [[Double]]",
          "source": "src/Biobase-Turner-Import.html#miscFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "miscFromFile",
          "normalized": "FilePath-\u003eIO[[Double]]",
          "package": "BiobaseTurner",
          "partial": "From File",
          "signature": "FilePath-\u003eIO[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:miscFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform input stream into list of list of doubles\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "parseBlocks",
          "package": "BiobaseTurner",
          "signature": "Conduit ByteString m [Energy]",
          "source": "src/Biobase-Turner-Import.html#parseBlocks",
          "type": "function"
        },
        "index": {
          "description": "Transform input stream into list of list of doubles",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "parseBlocks",
          "normalized": "Conduit ByteString a[Energy]",
          "package": "BiobaseTurner",
          "partial": "Blocks",
          "signature": "Conduit ByteString m[Energy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the miscloop table\n\u003c/p\u003e\u003cp\u003eNOTE extra brownie points for miscloop.dat for providing data in a form that\n does not conform to normal number encoding.\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "parseMiscLoop",
          "package": "BiobaseTurner",
          "signature": "Sink ByteString m [[Double]]",
          "source": "src/Biobase-Turner-Import.html#parseMiscLoop",
          "type": "function"
        },
        "index": {
          "description": "Parses the miscloop table NOTE extra brownie points for miscloop.dat for providing data in form that does not conform to normal number encoding",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "parseMiscLoop",
          "normalized": "Sink ByteString a[[Double]]",
          "package": "BiobaseTurner",
          "partial": "Misc Loop",
          "signature": "Sink ByteString m[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseMiscLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratee to parse tabulated loops (hairpins).\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "parseTabulated",
          "package": "BiobaseTurner",
          "signature": "Sink ByteString m [(ByteString, Energy)]",
          "source": "src/Biobase-Turner-Import.html#parseTabulated",
          "type": "function"
        },
        "index": {
          "description": "Iteratee to parse tabulated loops hairpins",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "parseTabulated",
          "normalized": "Sink ByteString a[(ByteString,Energy)]",
          "package": "BiobaseTurner",
          "partial": "Tabulated",
          "signature": "Sink ByteString m[(ByteString,Energy)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:parseTabulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "plist11",
          "package": "BiobaseTurner",
          "signature": "[(Nuc, Nuc)]",
          "source": "src/Biobase-Turner-Import.html#plist11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "plist11",
          "normalized": "[(Nuc,Nuc)]",
          "package": "BiobaseTurner",
          "signature": "[(Nuc,Nuc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "plist22dna",
          "package": "BiobaseTurner",
          "signature": "[(Nuc, Nuc)]",
          "source": "src/Biobase-Turner-Import.html#plist22dna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "plist22dna",
          "normalized": "[(Nuc,Nuc)]",
          "package": "BiobaseTurner",
          "signature": "[(Nuc,Nuc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist22dna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "plist22rna",
          "package": "BiobaseTurner",
          "signature": "[(Nuc, Nuc)]",
          "source": "src/Biobase-Turner-Import.html#plist22rna",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "plist22rna",
          "normalized": "[(Nuc,Nuc)]",
          "package": "BiobaseTurner",
          "signature": "[(Nuc,Nuc)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:plist22rna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses stupidly encoded values like \u003ca\u003e.6\u003c/a\u003e and \u003ca\u003e-.0\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "readD",
          "package": "BiobaseTurner",
          "signature": "ByteString -\u003e Double",
          "source": "src/Biobase-Turner-Import.html#readD",
          "type": "function"
        },
        "index": {
          "description": "Parses stupidly encoded values like and",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "readD",
          "normalized": "ByteString-\u003eDouble",
          "package": "BiobaseTurner",
          "signature": "ByteString-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:readD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner.Import",
          "name": "tabFromFile",
          "package": "BiobaseTurner",
          "signature": "FilePath -\u003e IO [(Primary, Energy)]",
          "source": "src/Biobase-Turner-Import.html#tabFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "tabFromFile",
          "normalized": "FilePath-\u003eIO[(Primary,Energy)]",
          "package": "BiobaseTurner",
          "partial": "From File",
          "signature": "FilePath-\u003eIO[(Primary,Energy)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:tabFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract values. \u003ca\u003e.\u003c/a\u003e - values are extracted as \u003e 100k\n\u003c/p\u003e",
          "module": "Biobase.Turner.Import",
          "name": "values",
          "package": "BiobaseTurner",
          "signature": "ByteString -\u003e [Energy]",
          "source": "src/Biobase-Turner-Import.html#values",
          "type": "function"
        },
        "index": {
          "description": "extract values values are extracted as",
          "hierarchy": "Biobase Turner Import",
          "module": "Biobase.Turner.Import",
          "name": "values",
          "normalized": "ByteString-\u003e[Energy]",
          "package": "BiobaseTurner",
          "signature": "ByteString-\u003e[Energy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner-Import.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTurner2004\u003c/a\u003e\u003c/code\u003e data structure reflects the RNA (and DNA) energy\n parameters known as the Turner 2004 data set.\n\u003c/p\u003e\u003cp\u003eIn general, have a look here:\n \u003ca\u003ehttp://rna.urmc.rochester.edu/NNDB/turner04/index.html\u003c/a\u003e where parameters\n are explained.\n\u003c/p\u003e\u003cp\u003eTODO need a \u003ca\u003eFunctor\u003c/a\u003e instance over elements \u003ca\u003ee\u003c/a\u003e. Or alternatively, generic\n programming to capture stuff going on in \u003ccode\u003ee\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.Turner",
          "name": "Turner",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html",
          "type": "module"
        },
        "index": {
          "description": "The Turner2004 data structure reflects the RNA and DNA energy parameters known as the Turner data set In general have look here http rna.urmc.rochester.edu NNDB turner04 index.html where parameters are explained TODO need Functor instance over elements Or alternatively generic programming to capture stuff going on in",
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Turner",
          "package": "BiobaseTurner",
          "partial": "Turner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual Turner parameters return energies in Double format.\n\u003c/p\u003e",
          "module": "Biobase.Turner",
          "name": "Energy",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#Energy",
          "type": "newtype"
        },
        "index": {
          "description": "The actual Turner parameters return energies in Double format",
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Energy",
          "package": "BiobaseTurner",
          "partial": "Energy",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Energy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PN",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PN",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PN",
          "package": "BiobaseTurner",
          "partial": "PN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PNN",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PNN",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PNN",
          "package": "BiobaseTurner",
          "partial": "PNN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PP",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PP",
          "package": "BiobaseTurner",
          "partial": "PP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PPNN",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PPNN",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PPNN",
          "package": "BiobaseTurner",
          "partial": "PPNN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PPNNN",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PPNNN",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PPNNN",
          "package": "BiobaseTurner",
          "partial": "PPNNN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "PPNNNN",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#PPNNNN",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "PPNNNN",
          "package": "BiobaseTurner",
          "partial": "PPNNNN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:PPNNNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Turner model with \u003ccode\u003e\u003ca\u003eEnergy\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Biobase.Turner",
          "name": "Turner2004",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#Turner2004",
          "type": "type"
        },
        "index": {
          "description": "The Turner model with Energy",
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Turner2004",
          "package": "BiobaseTurner",
          "partial": "Turner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Turner2004"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Turner energy tables. Parametrized over the storing vector type \u003ccode\u003ev\u003c/code\u003e\n and the actual element type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Biobase.Turner",
          "name": "Turner2004Model",
          "package": "BiobaseTurner",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "data"
        },
        "index": {
          "description": "The Turner energy tables Parametrized over the storing vector type and the actual element type",
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Turner2004Model",
          "package": "BiobaseTurner",
          "partial": "Turner Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#t:Turner2004Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "Energy",
          "package": "BiobaseTurner",
          "signature": "Energy Double",
          "source": "src/Biobase-Turner.html#Energy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Energy",
          "package": "BiobaseTurner",
          "partial": "Energy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:Energy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "Turner2004Model",
          "package": "BiobaseTurner",
          "signature": "Turner2004Model",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "Turner2004Model",
          "package": "BiobaseTurner",
          "partial": "Turner Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:Turner2004Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_bulgeL",
          "package": "BiobaseTurner",
          "signature": "(Vector e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_bulgeL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_bulgeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_bulgeSingleC",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_bulgeSingleC",
          "package": "BiobaseTurner",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_bulgeSingleC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_coaxStack",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_coaxStack",
          "package": "BiobaseTurner",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_coaxStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_coaxial",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PP e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_coaxial",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_coaxial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_dangle3",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_dangle3",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_dangle3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_dangle5",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_dangle5",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_dangle5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_extMM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_extMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_extMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinC3",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinC3",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinCintercept",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinCintercept",
          "package": "BiobaseTurner",
          "partial": "Cintercept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinCintercept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinCslope",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinCslope",
          "package": "BiobaseTurner",
          "partial": "Cslope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinCslope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinGGG",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinGGG",
          "package": "BiobaseTurner",
          "partial": "GGG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinGGG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinL",
          "package": "BiobaseTurner",
          "signature": "(Vector e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinLookup",
          "package": "BiobaseTurner",
          "signature": "(Map Primary e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinLookup",
          "package": "BiobaseTurner",
          "partial": "Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_hairpinMM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_hairpinMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_hairpinMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloop1x1",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PPNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloop1x1",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop1x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloop1xnMM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloop1xnMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop1xnMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloop2x1",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PPNNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloop2x1",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloop2x2",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PPNNNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloop2x2",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloop2x3MM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloop2x3MM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloop2x3MM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloopL",
          "package": "BiobaseTurner",
          "signature": "(Vector e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloopL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloopL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_iloopMM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_iloopMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_iloopMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_intermolecularInit",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_intermolecularInit",
          "package": "BiobaseTurner",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_intermolecularInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_largeLoop",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_largeLoop",
          "package": "BiobaseTurner",
          "partial": "Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_largeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_maxNinio",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_maxNinio",
          "package": "BiobaseTurner",
          "partial": "Ninio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_maxNinio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiAsym",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiAsym",
          "package": "BiobaseTurner",
          "partial": "Asym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiHelix",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiHelix",
          "package": "BiobaseTurner",
          "partial": "Helix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiMM",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiNuc",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiNuc",
          "package": "BiobaseTurner",
          "partial": "Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiNuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiOffset",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiOffset",
          "package": "BiobaseTurner",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_multiStrain",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_multiStrain",
          "package": "BiobaseTurner",
          "partial": "Strain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_multiStrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_ninio",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_ninio",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_ninio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_stack",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PP e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_stack",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_tStackCoax",
          "package": "BiobaseTurner",
          "signature": "(Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_tStackCoax",
          "package": "BiobaseTurner",
          "partial": "Stack Coax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_tStackCoax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "_termAU",
          "package": "BiobaseTurner",
          "signature": "e",
          "source": "src/Biobase-Turner.html#Turner2004Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "_termAU",
          "package": "BiobaseTurner",
          "partial": "AU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:_termAU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "bulgeL",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
          "source": "src/Biobase-Turner.html#bulgeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "bulgeL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:bulgeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "bulgeSingleC",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#bulgeSingleC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "bulgeSingleC",
          "package": "BiobaseTurner",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:bulgeSingleC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "coaxStack",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#coaxStack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "coaxStack",
          "package": "BiobaseTurner",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:coaxStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "coaxial",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PP e)",
          "source": "src/Biobase-Turner.html#coaxial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "coaxial",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:coaxial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "dangle3",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PN e)",
          "source": "src/Biobase-Turner.html#dangle3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "dangle3",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:dangle3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "dangle5",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PN e)",
          "source": "src/Biobase-Turner.html#dangle5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "dangle5",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:dangle5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all \u003ccode\u003ee\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Biobase.Turner",
          "name": "emap",
          "package": "BiobaseTurner",
          "signature": "(e -\u003e e') -\u003e Turner2004Model e -\u003e Turner2004Model e'",
          "source": "src/Biobase-Turner.html#emap",
          "type": "function"
        },
        "index": {
          "description": "Map function over all elements",
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "emap",
          "normalized": "(a-\u003eb)-\u003eTurner Model a-\u003eTurner Model b",
          "package": "BiobaseTurner",
          "signature": "(e-\u003ee')-\u003eTurner Model e-\u003eTurner Model e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:emap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "extMM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#extMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "extMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:extMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinC3",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#hairpinC3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinC3",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinC3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinCintercept",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#hairpinCintercept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinCintercept",
          "package": "BiobaseTurner",
          "partial": "Cintercept",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinCintercept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinCslope",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#hairpinCslope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinCslope",
          "package": "BiobaseTurner",
          "partial": "Cslope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinCslope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinGGG",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#hairpinGGG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinGGG",
          "package": "BiobaseTurner",
          "partial": "GGG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinGGG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinL",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
          "source": "src/Biobase-Turner.html#hairpinL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinLookup",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Map Primary e)",
          "source": "src/Biobase-Turner.html#hairpinLookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinLookup",
          "package": "BiobaseTurner",
          "partial": "Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "hairpinMM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#hairpinMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "hairpinMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:hairpinMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloop1x1",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNN e)",
          "source": "src/Biobase-Turner.html#iloop1x1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloop1x1",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop1x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloop1xnMM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#iloop1xnMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloop1xnMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop1xnMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloop2x1",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNNN e)",
          "source": "src/Biobase-Turner.html#iloop2x1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloop2x1",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloop2x2",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PPNNNN e)",
          "source": "src/Biobase-Turner.html#iloop2x2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloop2x2",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloop2x3MM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#iloop2x3MM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloop2x3MM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloop2x3MM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloopL",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Vector e)",
          "source": "src/Biobase-Turner.html#iloopL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloopL",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloopL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "iloopMM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#iloopMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "iloopMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:iloopMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "intermolecularInit",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#intermolecularInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "intermolecularInit",
          "package": "BiobaseTurner",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:intermolecularInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "largeLoop",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#largeLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "largeLoop",
          "package": "BiobaseTurner",
          "partial": "Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:largeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "maxNinio",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#maxNinio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "maxNinio",
          "package": "BiobaseTurner",
          "partial": "Ninio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:maxNinio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiAsym",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#multiAsym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiAsym",
          "package": "BiobaseTurner",
          "partial": "Asym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiHelix",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#multiHelix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiHelix",
          "package": "BiobaseTurner",
          "partial": "Helix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiMM",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#multiMM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiMM",
          "package": "BiobaseTurner",
          "partial": "MM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiNuc",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#multiNuc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiNuc",
          "package": "BiobaseTurner",
          "partial": "Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiNuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiOffset",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#multiOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiOffset",
          "package": "BiobaseTurner",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "multiStrain",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#multiStrain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "multiStrain",
          "package": "BiobaseTurner",
          "partial": "Strain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:multiStrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "ninio",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#ninio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "ninio",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:ninio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "stack",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PP e)",
          "source": "src/Biobase-Turner.html#stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "stack",
          "package": "BiobaseTurner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "tStackCoax",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) (Unboxed PNN e)",
          "source": "src/Biobase-Turner.html#tStackCoax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "tStackCoax",
          "package": "BiobaseTurner",
          "partial": "Stack Coax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:tStackCoax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Turner",
          "name": "termAU",
          "package": "BiobaseTurner",
          "signature": "forall e.  Lens' (Turner2004Model e) e",
          "source": "src/Biobase-Turner.html#termAU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Turner",
          "module": "Biobase.Turner",
          "name": "termAU",
          "package": "BiobaseTurner",
          "partial": "AU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTurner/docs/Biobase-Turner.html#v:termAU"
      }
    }
  ]
]