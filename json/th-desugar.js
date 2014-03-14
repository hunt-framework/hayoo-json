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
        "word": "th-desugar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExpands type synonyms in desugared types, ignoring type families.\nSee also the package th-expand-syns for doing this to non-desugared types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "Expand",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Expand.html",
          "type": "module"
        },
        "index": {
          "description": "Expands type synonyms in desugared types ignoring type families See also the package th-expand-syns for doing this to non-desugared types",
          "hierarchy": "Language Haskell TH Desugar Expand",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "Expand",
          "package": "th-desugar",
          "partial": "Expand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Expand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand all type synonyms in the desugared abstract syntax tree provided.\n Normally, the first parameter should have a type like \u003ccode\u003e\u003ca\u003eDExp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDLetDec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "expand",
          "package": "th-desugar",
          "signature": "a -\u003e q a",
          "source": "src/Language-Haskell-TH-Desugar-Expand.html#expand",
          "type": "function"
        },
        "index": {
          "description": "Expand all type synonyms in the desugared abstract syntax tree provided Normally the first parameter should have type like DExp or DLetDec",
          "hierarchy": "Language Haskell TH Desugar Expand",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "expand",
          "normalized": "a-\u003eb a",
          "package": "th-desugar",
          "signature": "a-\u003eq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Expand.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands all type synonyms in a desugared type.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "expandType",
          "package": "th-desugar",
          "signature": "DType -\u003e q DType",
          "source": "src/Language-Haskell-TH-Desugar-Expand.html#expandType",
          "type": "function"
        },
        "index": {
          "description": "Expands all type synonyms in desugared type",
          "hierarchy": "Language Haskell TH Desugar Expand",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "expandType",
          "normalized": "DType-\u003ea DType",
          "package": "th-desugar",
          "partial": "Type",
          "signature": "DType-\u003eq DType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Expand.html#v:expandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture-avoiding substitution on types\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "substTy",
          "package": "th-desugar",
          "signature": "Map Name DType -\u003e DType -\u003e q DType",
          "source": "src/Language-Haskell-TH-Desugar-Expand.html#substTy",
          "type": "function"
        },
        "index": {
          "description": "Capture-avoiding substitution on types",
          "hierarchy": "Language Haskell TH Desugar Expand",
          "module": "Language.Haskell.TH.Desugar.Expand",
          "name": "substTy",
          "normalized": "Map Name DType-\u003eDType-\u003ea DType",
          "package": "th-desugar",
          "partial": "Ty",
          "signature": "Map Name DType-\u003eDType-\u003eq DType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Expand.html#v:substTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe functions in this module convert desugared Template Haskell back into\n    proper Template Haskell. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "Sweeten",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html",
          "type": "module"
        },
        "index": {
          "description": "The functions in this module convert desugared Template Haskell back into proper Template Haskell",
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "Sweeten",
          "package": "th-desugar",
          "partial": "Sweeten",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "clauseToTH",
          "package": "th-desugar",
          "signature": "DClause -\u003e Clause",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#clauseToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "clauseToTH",
          "normalized": "DClause-\u003eClause",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DClause-\u003eClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:clauseToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "expToTH",
          "package": "th-desugar",
          "signature": "DExp -\u003e Exp",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#expToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "expToTH",
          "normalized": "DExp-\u003eExp",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DExp-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:expToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "kindToTH",
          "package": "th-desugar",
          "signature": "DKind -\u003e Kind",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#kindToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "kindToTH",
          "normalized": "DKind-\u003eKind",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DKind-\u003eKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:kindToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "letDecToTH",
          "package": "th-desugar",
          "signature": "DLetDec -\u003e Dec",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#letDecToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "letDecToTH",
          "normalized": "DLetDec-\u003eDec",
          "package": "th-desugar",
          "partial": "Dec To TH",
          "signature": "DLetDec-\u003eDec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:letDecToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "matchToTH",
          "package": "th-desugar",
          "signature": "DMatch -\u003e Match",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#matchToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "matchToTH",
          "normalized": "DMatch-\u003eMatch",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DMatch-\u003eMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:matchToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "patToTH",
          "package": "th-desugar",
          "signature": "DPat -\u003e Pat",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#patToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "patToTH",
          "normalized": "DPat-\u003ePat",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DPat-\u003ePat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:patToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "predToTH",
          "package": "th-desugar",
          "signature": "DPred -\u003e Pred",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#predToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "predToTH",
          "normalized": "DPred-\u003ePred",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DPred-\u003ePred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:predToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "tvbToTH",
          "package": "th-desugar",
          "signature": "DTyVarBndr -\u003e TyVarBndr",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#tvbToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "tvbToTH",
          "normalized": "DTyVarBndr-\u003eTyVarBndr",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DTyVarBndr-\u003eTyVarBndr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:tvbToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "typeToTH",
          "package": "th-desugar",
          "signature": "DType -\u003e Type",
          "source": "src/Language-Haskell-TH-Desugar-Sweeten.html#typeToTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar Sweeten",
          "module": "Language.Haskell.TH.Desugar.Sweeten",
          "name": "typeToTH",
          "normalized": "DType-\u003eType",
          "package": "th-desugar",
          "partial": "To TH",
          "signature": "DType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar-Sweeten.html#v:typeToTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDesugars full Template Haskell syntax into a smaller core syntax for further\nprocessing. The desugared types and constructors are prefixed with a D.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "Desugar",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar.html",
          "type": "module"
        },
        "index": {
          "description": "Desugars full Template Haskell syntax into smaller core syntax for further processing The desugared types and constructors are prefixed with",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "Desugar",
          "package": "th-desugar",
          "partial": "Desugar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eClause\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClause",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DClause",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Clause type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClause",
          "package": "th-desugar",
          "partial": "DClause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eCxt\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DCxt",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DCxt",
          "type": "type"
        },
        "index": {
          "description": "Corresponds to TH Cxt",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DCxt",
          "package": "th-desugar",
          "partial": "DCxt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eExp\u003c/code\u003e type. Note that \u003ccode\u003eDLamE\u003c/code\u003e takes names, not patterns.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DExp",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Exp type Note that DLamE takes names not patterns",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DExp",
          "package": "th-desugar",
          "partial": "DExp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eKind\u003c/code\u003e type, which is a synonym for \u003ccode\u003eType\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eDKind\u003c/a\u003e\u003c/code\u003e, though,\n   only contains constructors that make sense for kinds.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DKind",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Kind type which is synonym for Type DKind though only contains constructors that make sense for kinds",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DKind",
          "package": "th-desugar",
          "partial": "DKind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclarations as used in a \u003ccode\u003elet\u003c/code\u003e statement. Other \u003ccode\u003eDec\u003c/code\u003es are not desugared.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLetDec",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DLetDec",
          "type": "data"
        },
        "index": {
          "description": "Declarations as used in let statement Other Dec are not desugared",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLetDec",
          "package": "th-desugar",
          "partial": "DLet Dec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DLetDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eMatch\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DMatch",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DMatch",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Match type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DMatch",
          "package": "th-desugar",
          "partial": "DMatch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003ePat\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPat",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Pat type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPat",
          "package": "th-desugar",
          "partial": "DPat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003ePred\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPred",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPred",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Pred",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPred",
          "package": "th-desugar",
          "partial": "DPred",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eTyVarBndr\u003c/code\u003e. Note that \u003ccode\u003ePlainTV x\u003c/code\u003e and \u003ccode\u003eKindedTV x StarT\u003c/code\u003e are\n   distinct, so we retain that distinction here.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DTyVarBndr",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DTyVarBndr",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH TyVarBndr Note that PlainTV and KindedTV StarT are distinct so we retain that distinction here",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DTyVarBndr",
          "package": "th-desugar",
          "partial": "DTy Var Bndr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DTyVarBndr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to TH's \u003ccode\u003eType\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DType",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "data"
        },
        "index": {
          "description": "Corresponds to TH Type type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DType",
          "package": "th-desugar",
          "partial": "DType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:DType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugaring a pattern also returns the list of variables bound in as-patterns\n and the values they should be bound to. This variables must be brought into\n scope in the \u003ca\u003ebody\u003c/a\u003e of the pattern.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "PatM",
          "package": "th-desugar",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#PatM",
          "type": "type"
        },
        "index": {
          "description": "Desugaring pattern also returns the list of variables bound in as-patterns and the values they should be bound to This variables must be brought into scope in the body of the pattern",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "PatM",
          "package": "th-desugar",
          "partial": "Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#t:PatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DAppE",
          "package": "th-desugar",
          "signature": "DAppE DExp DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DAppE",
          "package": "th-desugar",
          "partial": "DApp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DAppE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DAppT",
          "package": "th-desugar",
          "signature": "DAppT DType DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DAppT",
          "package": "th-desugar",
          "partial": "DApp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DAppT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DArrowK",
          "package": "th-desugar",
          "signature": "DArrowK DKind DKind",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DArrowK",
          "package": "th-desugar",
          "partial": "DArrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DArrowK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DArrowT",
          "package": "th-desugar",
          "signature": "DArrowT",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DArrowT",
          "package": "th-desugar",
          "partial": "DArrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DArrowT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DBangP",
          "package": "th-desugar",
          "signature": "DBangP DPat",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DBangP",
          "package": "th-desugar",
          "partial": "DBang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DBangP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DCaseE",
          "package": "th-desugar",
          "signature": "DCaseE DExp [DMatch]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DCaseE",
          "normalized": "DCaseE DExp[DMatch]",
          "package": "th-desugar",
          "partial": "DCase",
          "signature": "DCaseE DExp[DMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DCaseE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClassP",
          "package": "th-desugar",
          "signature": "DClassP Name [DType]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClassP",
          "normalized": "DClassP Name[DType]",
          "package": "th-desugar",
          "partial": "DClass",
          "signature": "DClassP Name[DType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DClassP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClause",
          "package": "th-desugar",
          "signature": "DClause [DPat] DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DClause",
          "normalized": "DClause[DPat]DExp",
          "package": "th-desugar",
          "partial": "DClause",
          "signature": "DClause[DPat]DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConE",
          "package": "th-desugar",
          "signature": "DConE Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConE",
          "package": "th-desugar",
          "partial": "DCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DConE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConK",
          "package": "th-desugar",
          "signature": "DConK Name [DKind]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConK",
          "normalized": "DConK Name[DKind]",
          "package": "th-desugar",
          "partial": "DCon",
          "signature": "DConK Name[DKind]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DConK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConP",
          "package": "th-desugar",
          "signature": "DConP Name [DPat]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConP",
          "normalized": "DConP Name[DPat]",
          "package": "th-desugar",
          "partial": "DCon",
          "signature": "DConP Name[DPat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DConP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConT",
          "package": "th-desugar",
          "signature": "DConT Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DConT",
          "package": "th-desugar",
          "partial": "DCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DConT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DEqualP",
          "package": "th-desugar",
          "signature": "DEqualP DType DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DEqualP",
          "package": "th-desugar",
          "partial": "DEqual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DEqualP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DForallK",
          "package": "th-desugar",
          "signature": "DForallK [Name] DKind",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DForallK",
          "normalized": "DForallK[Name]DKind",
          "package": "th-desugar",
          "partial": "DForall",
          "signature": "DForallK[Name]DKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DForallK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DForallT",
          "package": "th-desugar",
          "signature": "DForallT [DTyVarBndr] DCxt DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DForallT",
          "normalized": "DForallT[DTyVarBndr]DCxt DType",
          "package": "th-desugar",
          "partial": "DForall",
          "signature": "DForallT[DTyVarBndr]DCxt DType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DForallT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DFunD",
          "package": "th-desugar",
          "signature": "DFunD Name [DClause]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DLetDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DFunD",
          "normalized": "DFunD Name[DClause]",
          "package": "th-desugar",
          "partial": "DFun",
          "signature": "DFunD Name[DClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DFunD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DInfixD",
          "package": "th-desugar",
          "signature": "DInfixD Fixity Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DLetDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DInfixD",
          "package": "th-desugar",
          "partial": "DInfix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DInfixD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DKindedTV",
          "package": "th-desugar",
          "signature": "DKindedTV Name DKind",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DTyVarBndr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DKindedTV",
          "package": "th-desugar",
          "partial": "DKinded TV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DKindedTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLamE",
          "package": "th-desugar",
          "signature": "DLamE [Name] DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLamE",
          "normalized": "DLamE[Name]DExp",
          "package": "th-desugar",
          "partial": "DLam",
          "signature": "DLamE[Name]DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DLamE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLetE",
          "package": "th-desugar",
          "signature": "DLetE [DLetDec] DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLetE",
          "normalized": "DLetE[DLetDec]DExp",
          "package": "th-desugar",
          "partial": "DLet",
          "signature": "DLetE[DLetDec]DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DLetE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitE",
          "package": "th-desugar",
          "signature": "DLitE Lit",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitE",
          "package": "th-desugar",
          "partial": "DLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DLitE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitP",
          "package": "th-desugar",
          "signature": "DLitP Lit",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitP",
          "package": "th-desugar",
          "partial": "DLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DLitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitT",
          "package": "th-desugar",
          "signature": "DLitT TyLit",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DLitT",
          "package": "th-desugar",
          "partial": "DLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DLitT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DMatch",
          "package": "th-desugar",
          "signature": "DMatch DPat DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DMatch",
          "package": "th-desugar",
          "partial": "DMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPlainTV",
          "package": "th-desugar",
          "signature": "DPlainTV Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DTyVarBndr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DPlainTV",
          "package": "th-desugar",
          "partial": "DPlain TV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DPlainTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigD",
          "package": "th-desugar",
          "signature": "DSigD Name DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DLetDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigD",
          "package": "th-desugar",
          "partial": "DSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DSigD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigE",
          "package": "th-desugar",
          "signature": "DSigE DExp DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigE",
          "package": "th-desugar",
          "partial": "DSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DSigE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigT",
          "package": "th-desugar",
          "signature": "DSigT DType DKind",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DSigT",
          "package": "th-desugar",
          "partial": "DSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DSigT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DStarK",
          "package": "th-desugar",
          "signature": "DStarK",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DStarK",
          "package": "th-desugar",
          "partial": "DStar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DStarK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DTildeP",
          "package": "th-desugar",
          "signature": "DTildeP DPat",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DTildeP",
          "package": "th-desugar",
          "partial": "DTilde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DTildeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DValD",
          "package": "th-desugar",
          "signature": "DValD DPat DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DLetDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DValD",
          "package": "th-desugar",
          "partial": "DVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DValD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarE",
          "package": "th-desugar",
          "signature": "DVarE Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarE",
          "package": "th-desugar",
          "partial": "DVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DVarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarK",
          "package": "th-desugar",
          "signature": "DVarK Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarK",
          "package": "th-desugar",
          "partial": "DVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DVarK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarP",
          "package": "th-desugar",
          "signature": "DVarP Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarP",
          "package": "th-desugar",
          "partial": "DVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarT",
          "package": "th-desugar",
          "signature": "DVarT Name",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DVarT",
          "package": "th-desugar",
          "partial": "DVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DVarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Desugar",
          "name": "DWildP",
          "package": "th-desugar",
          "signature": "DWildP",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#DPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "DWildP",
          "package": "th-desugar",
          "partial": "DWild",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:DWildP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDPat\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eDExp\u003c/a\u003e\u003c/code\u003e. Fails on \u003ccode\u003e\u003ca\u003eDWildP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dPatToDExp",
          "package": "th-desugar",
          "signature": "DPat -\u003e DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dPatToDExp",
          "type": "function"
        },
        "index": {
          "description": "Convert DPat to DExp Fails on DWildP",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dPatToDExp",
          "normalized": "DPat-\u003eDExp",
          "package": "th-desugar",
          "partial": "Pat To DExp",
          "signature": "DPat-\u003eDExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dPatToDExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the name of a data constructor, retrieve its definition as a \u003ccode\u003eCon\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dataConNameToCon",
          "package": "th-desugar",
          "signature": "Name -\u003e q Con",
          "source": "src/Language-Haskell-TH-Desugar-Util.html#dataConNameToCon",
          "type": "function"
        },
        "index": {
          "description": "From the name of data constructor retrieve its definition as Con",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dataConNameToCon",
          "normalized": "Name-\u003ea Con",
          "package": "th-desugar",
          "partial": "Con Name To Con",
          "signature": "Name-\u003eq Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dataConNameToCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a \u003ccode\u003eBody\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsBody",
          "package": "th-desugar",
          "signature": "Body-\u003e [Dec]-\u003e DExp-\u003e q DExp",
          "type": "function"
        },
        "index": {
          "description": "Desugar Body",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsBody",
          "normalized": "Body-\u003e[Dec]-\u003eDExp-\u003ea DExp",
          "package": "th-desugar",
          "partial": "Body",
          "signature": "Body-\u003e[Dec]-\u003eDExp-\u003eq DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar clauses to a function definition\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsClauses",
          "package": "th-desugar",
          "signature": "Name-\u003e [Clause]-\u003e q [DClause]",
          "type": "function"
        },
        "index": {
          "description": "Desugar clauses to function definition",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsClauses",
          "normalized": "Name-\u003e[Clause]-\u003ea[DClause]",
          "package": "th-desugar",
          "partial": "Clauses",
          "signature": "Name-\u003e[Clause]-\u003eq[DClause]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsClauses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar the \u003ccode\u003eStmt\u003c/code\u003es in a list or monad comprehension\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsComp",
          "package": "th-desugar",
          "signature": "[Stmt] -\u003e q DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsComp",
          "type": "function"
        },
        "index": {
          "description": "Desugar the Stmt in list or monad comprehension",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsComp",
          "normalized": "[Stmt]-\u003ea DExp",
          "package": "th-desugar",
          "partial": "Comp",
          "signature": "[Stmt]-\u003eq DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar the \u003ccode\u003eStmt\u003c/code\u003es in a \u003ccode\u003edo\u003c/code\u003e expression\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsDoStmts",
          "package": "th-desugar",
          "signature": "[Stmt] -\u003e q DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsDoStmts",
          "type": "function"
        },
        "index": {
          "description": "Desugar the Stmt in do expression",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsDoStmts",
          "normalized": "[Stmt]-\u003ea DExp",
          "package": "th-desugar",
          "partial": "Do Stmts",
          "signature": "[Stmt]-\u003eq DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsDoStmts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar an expression\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsExp",
          "package": "th-desugar",
          "signature": "Exp -\u003e q DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsExp",
          "type": "function"
        },
        "index": {
          "description": "Desugar an expression",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsExp",
          "normalized": "Exp-\u003ea DExp",
          "package": "th-desugar",
          "partial": "Exp",
          "signature": "Exp-\u003eq DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar guarded expressions\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsGuards",
          "package": "th-desugar",
          "signature": "[(Guard, Exp)]-\u003e DExp-\u003e q DExp",
          "type": "function"
        },
        "index": {
          "description": "Desugar guarded expressions",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsGuards",
          "normalized": "[(Guard,Exp)]-\u003eDExp-\u003ea DExp",
          "package": "th-desugar",
          "partial": "Guards",
          "signature": "[(Guard,Exp)]-\u003eDExp-\u003eq DExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsGuards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a kind\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsKind",
          "package": "th-desugar",
          "signature": "Kind -\u003e q DKind",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsKind",
          "type": "function"
        },
        "index": {
          "description": "Desugar kind",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsKind",
          "normalized": "Kind-\u003ea DKind",
          "package": "th-desugar",
          "partial": "Kind",
          "signature": "Kind-\u003eq DKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a single \u003ccode\u003eDec\u003c/code\u003e, perhaps producing multiple \u003ccode\u003e\u003ca\u003eDLetDec\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsLetDec",
          "package": "th-desugar",
          "signature": "Dec -\u003e q [DLetDec]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsLetDec",
          "type": "function"
        },
        "index": {
          "description": "Desugar single Dec perhaps producing multiple DLetDec",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsLetDec",
          "normalized": "Dec-\u003ea[DLetDec]",
          "package": "th-desugar",
          "partial": "Let Dec",
          "signature": "Dec-\u003eq[DLetDec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsLetDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar \u003ccode\u003eDec\u003c/code\u003es that can appear in a let expression\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsLetDecs",
          "package": "th-desugar",
          "signature": "[Dec] -\u003e q [DLetDec]",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsLetDecs",
          "type": "function"
        },
        "index": {
          "description": "Desugar Dec that can appear in let expression",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsLetDecs",
          "normalized": "[Dec]-\u003ea[DLetDec]",
          "package": "th-desugar",
          "partial": "Let Decs",
          "signature": "[Dec]-\u003eq[DLetDec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsLetDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a list of matches for a \u003ccode\u003ecase\u003c/code\u003e statement\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsMatches",
          "package": "th-desugar",
          "signature": "Name-\u003e [Match]-\u003e q [DMatch]",
          "type": "function"
        },
        "index": {
          "description": "Desugar list of matches for case statement",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsMatches",
          "normalized": "Name-\u003e[Match]-\u003ea[DMatch]",
          "package": "th-desugar",
          "partial": "Matches",
          "signature": "Name-\u003e[Match]-\u003eq[DMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a pattern.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPat",
          "package": "th-desugar",
          "signature": "Pat -\u003e PatM q DPat",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsPat",
          "type": "function"
        },
        "index": {
          "description": "Desugar pattern",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPat",
          "normalized": "Pat-\u003ePatM a DPat",
          "package": "th-desugar",
          "partial": "Pat",
          "signature": "Pat-\u003ePatM q DPat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a pattern, along with processing a (desugared) expression that\n is the entire scope of the variables bound in the pattern.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatOverExp",
          "package": "th-desugar",
          "signature": "Pat -\u003e DExp -\u003e q (DPat, DExp)",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsPatOverExp",
          "type": "function"
        },
        "index": {
          "description": "Desugar pattern along with processing desugared expression that is the entire scope of the variables bound in the pattern",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatOverExp",
          "normalized": "Pat-\u003eDExp-\u003ea(DPat,DExp)",
          "package": "th-desugar",
          "partial": "Pat Over Exp",
          "signature": "Pat-\u003eDExp-\u003eq(DPat,DExp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsPatOverExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a pattern, returning a list of (Name, DExp) pairs of extra\n variables that must be bound within the scope of the pattern\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatX",
          "package": "th-desugar",
          "signature": "Pat -\u003e q (DPat, [(Name, DExp)])",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsPatX",
          "type": "function"
        },
        "index": {
          "description": "Desugar pattern returning list of Name DExp pairs of extra variables that must be bound within the scope of the pattern",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatX",
          "normalized": "Pat-\u003ea(DPat,[(Name,DExp)])",
          "package": "th-desugar",
          "partial": "Pat",
          "signature": "Pat-\u003eq(DPat,[(Name,DExp)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsPatX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar multiple patterns. Like \u003ccode\u003e\u003ca\u003edsPatOverExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatsOverExp",
          "package": "th-desugar",
          "signature": "[Pat] -\u003e DExp -\u003e q ([DPat], DExp)",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsPatsOverExp",
          "type": "function"
        },
        "index": {
          "description": "Desugar multiple patterns Like dsPatOverExp",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPatsOverExp",
          "normalized": "[Pat]-\u003eDExp-\u003ea([DPat],DExp)",
          "package": "th-desugar",
          "partial": "Pats Over Exp",
          "signature": "[Pat]-\u003eDExp-\u003eq([DPat],DExp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsPatsOverExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a \u003ccode\u003ePred\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPred",
          "package": "th-desugar",
          "signature": "Pred -\u003e q DPred",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsPred",
          "type": "function"
        },
        "index": {
          "description": "Desugar Pred",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsPred",
          "normalized": "Pred-\u003ea DPred",
          "package": "th-desugar",
          "partial": "Pred",
          "signature": "Pred-\u003eq DPred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a \u003ccode\u003eTyVarBndr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsTvb",
          "package": "th-desugar",
          "signature": "TyVarBndr -\u003e q DTyVarBndr",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsTvb",
          "type": "function"
        },
        "index": {
          "description": "Desugar TyVarBndr",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsTvb",
          "normalized": "TyVarBndr-\u003ea DTyVarBndr",
          "package": "th-desugar",
          "partial": "Tvb",
          "signature": "TyVarBndr-\u003eq DTyVarBndr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsTvb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesugar a type\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsType",
          "package": "th-desugar",
          "signature": "Type -\u003e q DType",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#dsType",
          "type": "function"
        },
        "index": {
          "description": "Desugar type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "dsType",
          "normalized": "Type-\u003ea DType",
          "package": "th-desugar",
          "partial": "Type",
          "signature": "Type-\u003eq DType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:dsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the names bound in a \u003ccode\u003eDec\u003c/code\u003e that could appear in a \u003ccode\u003elet\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesDec",
          "package": "th-desugar",
          "signature": "Dec -\u003e Set Name",
          "source": "src/Language-Haskell-TH-Desugar-Util.html#extractBoundNamesDec",
          "type": "function"
        },
        "index": {
          "description": "Extract the names bound in Dec that could appear in let expression",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesDec",
          "normalized": "Dec-\u003eSet Name",
          "package": "th-desugar",
          "partial": "Bound Names Dec",
          "signature": "Dec-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:extractBoundNamesDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the names bound in a \u003ccode\u003ePat\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesPat",
          "package": "th-desugar",
          "signature": "Pat -\u003e Set Name",
          "source": "src/Language-Haskell-TH-Desugar-Util.html#extractBoundNamesPat",
          "type": "function"
        },
        "index": {
          "description": "Extract the names bound in Pat",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesPat",
          "normalized": "Pat-\u003eSet Name",
          "package": "th-desugar",
          "partial": "Bound Names Pat",
          "signature": "Pat-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:extractBoundNamesPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the names bound in a \u003ccode\u003eStmt\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesStmt",
          "package": "th-desugar",
          "signature": "Stmt -\u003e Set Name",
          "source": "src/Language-Haskell-TH-Desugar-Util.html#extractBoundNamesStmt",
          "type": "function"
        },
        "index": {
          "description": "Extract the names bound in Stmt",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "extractBoundNamesStmt",
          "normalized": "Stmt-\u003eSet Name",
          "package": "th-desugar",
          "partial": "Bound Names Stmt",
          "signature": "Stmt-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:extractBoundNamesStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003eTyVarBndr\u003c/code\u003es and constructors given the \u003ccode\u003eName\u003c/code\u003e of a type\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "getDataD",
          "package": "th-desugar",
          "signature": "String-\u003e Name-\u003e q ([TyVarBndr], [Con])",
          "type": "function"
        },
        "index": {
          "description": "Extract the TyVarBndr and constructors given the Name of type",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "getDataD",
          "normalized": "String-\u003eName-\u003ea([TyVarBndr],[Con])",
          "package": "th-desugar",
          "partial": "Data",
          "signature": "String-\u003eName-\u003eq([TyVarBndr],[Con])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:getDataD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf matches is non-empty, make a case statement; otherwise make an error statement\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "maybeDCaseE",
          "package": "th-desugar",
          "signature": "String -\u003e DExp -\u003e [DMatch] -\u003e DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#maybeDCaseE",
          "type": "function"
        },
        "index": {
          "description": "If matches is non-empty make case statement otherwise make an error statement",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "maybeDCaseE",
          "normalized": "String-\u003eDExp-\u003e[DMatch]-\u003eDExp",
          "package": "th-desugar",
          "partial": "DCase",
          "signature": "String-\u003eDExp-\u003e[DMatch]-\u003eDExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:maybeDCaseE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf decs is non-empty, delcare them in a let:\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "maybeDLetE",
          "package": "th-desugar",
          "signature": "[DLetDec] -\u003e DExp -\u003e DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#maybeDLetE",
          "type": "function"
        },
        "index": {
          "description": "If decs is non-empty delcare them in let",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "maybeDLetE",
          "normalized": "[DLetDec]-\u003eDExp-\u003eDExp",
          "package": "th-desugar",
          "partial": "DLet",
          "signature": "[DLetDec]-\u003eDExp-\u003eDExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:maybeDLetE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tuple \u003ccode\u003e\u003ca\u003eDExp\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eDExp\u003c/a\u003e\u003c/code\u003es. Avoids using a 1-tuple.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "mkTupleDExp",
          "package": "th-desugar",
          "signature": "[DExp] -\u003e DExp",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#mkTupleDExp",
          "type": "function"
        },
        "index": {
          "description": "Make tuple DExp from list of DExp Avoids using tuple",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "mkTupleDExp",
          "normalized": "[DExp]-\u003eDExp",
          "package": "th-desugar",
          "partial": "Tuple DExp",
          "signature": "[DExp]-\u003eDExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:mkTupleDExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tuple \u003ccode\u003e\u003ca\u003eDPat\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eDPat\u003c/a\u003e\u003c/code\u003es. Avoids using a 1-tuple.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "mkTupleDPat",
          "package": "th-desugar",
          "signature": "[DPat] -\u003e DPat",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#mkTupleDPat",
          "type": "function"
        },
        "index": {
          "description": "Make tuple DPat from list of DPat Avoids using tuple",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "mkTupleDPat",
          "normalized": "[DPat]-\u003eDPat",
          "package": "th-desugar",
          "partial": "Tuple DPat",
          "signature": "[DPat]-\u003eDPat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:mkTupleDPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify a declaration, warning the user about splices if the reify fails.\n The warning says that reification can fail if you try to reify a type in\n the same splice as it is declared.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "reifyWithWarning",
          "package": "th-desugar",
          "signature": "Name -\u003e q Info",
          "source": "src/Language-Haskell-TH-Desugar-Util.html#reifyWithWarning",
          "type": "function"
        },
        "index": {
          "description": "Reify declaration warning the user about splices if the reify fails The warning says that reification can fail if you try to reify type in the same splice as it is declared",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "reifyWithWarning",
          "normalized": "Name-\u003ea Info",
          "package": "th-desugar",
          "partial": "With Warning",
          "signature": "Name-\u003eq Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:reifyWithWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all wildcards from a pattern, replacing any wildcard with a fresh\n   variable\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Desugar",
          "name": "removeWilds",
          "package": "th-desugar",
          "signature": "DPat -\u003e q DPat",
          "source": "src/Language-Haskell-TH-Desugar-Core.html#removeWilds",
          "type": "function"
        },
        "index": {
          "description": "Remove all wildcards from pattern replacing any wildcard with fresh variable",
          "hierarchy": "Language Haskell TH Desugar",
          "module": "Language.Haskell.TH.Desugar",
          "name": "removeWilds",
          "normalized": "DPat-\u003ea DPat",
          "package": "th-desugar",
          "partial": "Wilds",
          "signature": "DPat-\u003eq DPat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-desugar/docs/Language-Haskell-TH-Desugar.html#v:removeWilds"
      }
    }
  ]
]