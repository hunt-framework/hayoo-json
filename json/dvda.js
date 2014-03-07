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
        "word": "dvda"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.AD",
          "name": "AD",
          "package": "dvda",
          "source": "src/Dvda-AD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda AD",
          "module": "Dvda.AD",
          "name": "AD",
          "package": "dvda",
          "partial": "AD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-AD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.AD",
          "name": "backprop",
          "package": "dvda",
          "signature": "Expr a -\u003e HashMap (Expr a) (Expr a)",
          "source": "src/Dvda-AD.html#backprop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda AD",
          "module": "Dvda.AD",
          "name": "backprop",
          "normalized": "Expr a-\u003eHashMap(Expr a)(Expr a)",
          "package": "dvda",
          "signature": "Expr a-\u003eHashMap(Expr a)(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-AD.html#v:backprop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Dvda.AD\",\"Dvda\"]",
          "name": "rad",
          "package": "dvda",
          "signature": "Expr a -\u003e [Expr a] -\u003e [Expr a]",
          "source": "src/Dvda-AD.html#rad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-AD.html#v:rad\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:rad\"]"
        },
        "index": {
          "hierarchy": "Dvda AD",
          "module": "Dvda.AD",
          "name": "rad",
          "normalized": "Expr a-\u003e[Expr a]-\u003e[Expr a]",
          "package": "dvda",
          "signature": "Expr a-\u003e[Expr a]-\u003e[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-AD.html#v:rad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CGen",
          "name": "CGen",
          "package": "dvda",
          "source": "src/Dvda-CGen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "CGen",
          "package": "dvda",
          "partial": "CGen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CGen",
          "name": "MatrixStorageOrder",
          "package": "dvda",
          "source": "src/Dvda-CGen.html#MatrixStorageOrder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "MatrixStorageOrder",
          "package": "dvda",
          "partial": "Matrix Storage Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#t:MatrixStorageOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CGen",
          "name": "ColMajor",
          "package": "dvda",
          "signature": "ColMajor",
          "source": "src/Dvda-CGen.html#MatrixStorageOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "ColMajor",
          "package": "dvda",
          "partial": "Col Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#v:ColMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CGen",
          "name": "RowMajor",
          "package": "dvda",
          "signature": "RowMajor",
          "source": "src/Dvda-CGen.html#MatrixStorageOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "RowMajor",
          "package": "dvda",
          "partial": "Row Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#v:RowMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a FunGraph into a string containing C code\n\u003c/p\u003e",
          "module": "Dvda.CGen",
          "name": "showC",
          "package": "dvda",
          "signature": "MatrixStorageOrder -\u003e String -\u003e FunGraph a -\u003e String",
          "source": "src/Dvda-CGen.html#showC",
          "type": "function"
        },
        "index": {
          "description": "Turns FunGraph into string containing code",
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "showC",
          "normalized": "MatrixStorageOrder-\u003eString-\u003eFunGraph a-\u003eString",
          "package": "dvda",
          "signature": "MatrixStorageOrder-\u003eString-\u003eFunGraph a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#v:showC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CGen",
          "name": "showMex",
          "package": "dvda",
          "signature": "String -\u003e FunGraph a -\u003e String",
          "source": "src/Dvda-CGen.html#showMex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda CGen",
          "module": "Dvda.CGen",
          "name": "showMex",
          "normalized": "String-\u003eFunGraph a-\u003eString",
          "package": "dvda",
          "partial": "Mex",
          "signature": "String-\u003eFunGraph a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CGen.html#v:showMex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.CSE",
          "name": "CSE",
          "package": "dvda",
          "source": "src/Dvda-CSE.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda CSE",
          "module": "Dvda.CSE",
          "name": "CSE",
          "package": "dvda",
          "partial": "CSE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CSE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Dvda.CSE\",\"Dvda\"]",
          "name": "cse",
          "package": "dvda",
          "signature": "FunGraph a -\u003e FunGraph a",
          "source": "src/Dvda-CSE.html#cse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-CSE.html#v:cse\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:cse\"]"
        },
        "index": {
          "hierarchy": "Dvda CSE",
          "module": "Dvda.CSE",
          "name": "cse",
          "normalized": "FunGraph a-\u003eFunGraph a",
          "package": "dvda",
          "signature": "FunGraph a-\u003eFunGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-CSE.html#v:cse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Codegen.Gcc",
          "name": "Gcc",
          "package": "dvda",
          "source": "src/Dvda-Codegen-Gcc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Codegen Gcc",
          "module": "Dvda.Codegen.Gcc",
          "name": "Gcc",
          "package": "dvda",
          "partial": "Gcc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Codegen-Gcc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etake in name of source and future object, compile object\n\u003c/p\u003e",
          "module": "Dvda.Codegen.Gcc",
          "name": "compileWithGcc",
          "package": "dvda",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Dvda-Codegen-Gcc.html#compileWithGcc",
          "type": "function"
        },
        "index": {
          "description": "take in name of source and future object compile object",
          "hierarchy": "Dvda Codegen Gcc",
          "module": "Dvda.Codegen.Gcc",
          "name": "compileWithGcc",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "dvda",
          "partial": "With Gcc",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Codegen-Gcc.html#v:compileWithGcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Codegen.WriteFile",
          "name": "WriteFile",
          "package": "dvda",
          "source": "src/Dvda-Codegen-WriteFile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Codegen WriteFile",
          "module": "Dvda.Codegen.WriteFile",
          "name": "WriteFile",
          "package": "dvda",
          "partial": "Write File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Codegen-WriteFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Codegen.WriteFile",
          "name": "writeSourceFile",
          "package": "dvda",
          "signature": "String -\u003e FilePath -\u003e FilePath -\u003e IO FilePath",
          "source": "src/Dvda-Codegen-WriteFile.html#writeSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Codegen WriteFile",
          "module": "Dvda.Codegen.WriteFile",
          "name": "writeSourceFile",
          "normalized": "String-\u003eFilePath-\u003eFilePath-\u003eIO FilePath",
          "package": "dvda",
          "partial": "Source File",
          "signature": "String-\u003eFilePath-\u003eFilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Codegen-WriteFile.html#v:writeSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "source": "src/Dvda-Dual.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "partial": "Dual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "source": "src/Dvda-Dual.html#Dual",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "partial": "Dual",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "signature": "Dual",
          "source": "src/Dvda-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "Dual",
          "package": "dvda",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Dual",
          "name": "dualPerturbation",
          "package": "dvda",
          "signature": "a",
          "source": "src/Dvda-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "dualPerturbation",
          "package": "dvda",
          "partial": "Perturbation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#v:dualPerturbation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Dual",
          "name": "dualPrimal",
          "package": "dvda",
          "signature": "a",
          "source": "src/Dvda-Dual.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "dualPrimal",
          "package": "dvda",
          "partial": "Primal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#v:dualPrimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward derivative propogation. fad sin x == cos x\n\u003c/p\u003e",
          "module": "Dvda.Dual",
          "name": "fad",
          "package": "dvda",
          "signature": "(Dual a -\u003e Dual a) -\u003e a -\u003e a",
          "source": "src/Dvda-Dual.html#fad",
          "type": "function"
        },
        "index": {
          "description": "Forward derivative propogation fad sin cos",
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "fad",
          "normalized": "(Dual a-\u003eDual a)-\u003ea-\u003ea",
          "package": "dvda",
          "signature": "(Dual a-\u003eDual a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#v:fad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward derivative propogation. fad' [sin x, 2*x] == [cos x, 2]\n\u003c/p\u003e",
          "module": "Dvda.Dual",
          "name": "fad'",
          "package": "dvda",
          "signature": "(Dual a -\u003e [Dual a]) -\u003e a -\u003e [a]",
          "source": "src/Dvda-Dual.html#fad%27",
          "type": "function"
        },
        "index": {
          "description": "Forward derivative propogation fad sin cos",
          "hierarchy": "Dvda Dual",
          "module": "Dvda.Dual",
          "name": "fad'",
          "normalized": "(Dual a-\u003e[Dual a])-\u003ea-\u003e[a]",
          "package": "dvda",
          "signature": "(Dual a-\u003e[Dual a])-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Dual.html#v:fad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Examples",
          "name": "Examples",
          "package": "dvda",
          "source": "src/Dvda-Examples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Examples",
          "module": "Dvda.Examples",
          "name": "Examples",
          "package": "dvda",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ec code generation\n\u003c/p\u003e",
          "module": "Dvda.Examples",
          "name": "cgen",
          "package": "dvda",
          "signature": "IO ()",
          "source": "src/Dvda-Examples.html#cgen",
          "type": "function"
        },
        "index": {
          "description": "code generation",
          "hierarchy": "Dvda Examples",
          "module": "Dvda.Examples",
          "name": "cgen",
          "normalized": "IO()",
          "package": "dvda",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Examples.html#v:cgen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo cse on a fungraph and count nodes\n\u003c/p\u003e",
          "module": "Dvda.Examples",
          "name": "doCse",
          "package": "dvda",
          "signature": "IO ()",
          "source": "src/Dvda-Examples.html#doCse",
          "type": "function"
        },
        "index": {
          "description": "do cse on fungraph and count nodes",
          "hierarchy": "Dvda Examples",
          "module": "Dvda.Examples",
          "name": "doCse",
          "normalized": "IO()",
          "package": "dvda",
          "partial": "Cse",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Examples.html#v:doCse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emex function generation\n\u003c/p\u003e",
          "module": "Dvda.Examples",
          "name": "mexgen",
          "package": "dvda",
          "signature": "IO ()",
          "source": "src/Dvda-Examples.html#mexgen",
          "type": "function"
        },
        "index": {
          "description": "mex function generation",
          "hierarchy": "Dvda Examples",
          "module": "Dvda.Examples",
          "name": "mexgen",
          "normalized": "IO()",
          "package": "dvda",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Examples.html#v:mexgen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a fungraph\n\u003c/p\u003e",
          "module": "Dvda.Examples",
          "name": "showFg",
          "package": "dvda",
          "signature": "IO ()",
          "source": "src/Dvda-Examples.html#showFg",
          "type": "function"
        },
        "index": {
          "description": "show fungraph",
          "hierarchy": "Dvda Examples",
          "module": "Dvda.Examples",
          "name": "showFg",
          "normalized": "IO()",
          "package": "dvda",
          "partial": "Fg",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Examples.html#v:showFg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Expr",
          "package": "dvda",
          "source": "src/Dvda-Expr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Expr",
          "package": "dvda",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Expr",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Expr",
          "package": "dvda",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Floatings",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Floatings",
          "package": "dvda",
          "partial": "Floatings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:Floatings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Fractionals",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Fractionals",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Fractionals",
          "package": "dvda",
          "partial": "Fractionals",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:Fractionals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GExpr",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GExpr",
          "package": "dvda",
          "partial": "GExpr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:GExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Nums",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Nums",
          "package": "dvda",
          "partial": "Nums",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:Nums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Sym",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Sym",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Sym",
          "package": "dvda",
          "partial": "Sym",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#t:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ACos",
          "package": "dvda",
          "signature": "ACos a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ACos",
          "package": "dvda",
          "partial": "ACos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ACos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ACosh",
          "package": "dvda",
          "signature": "ACosh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ACosh",
          "package": "dvda",
          "partial": "ACosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ACosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ASin",
          "package": "dvda",
          "signature": "ASin a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ASin",
          "package": "dvda",
          "partial": "ASin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ASin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ASinh",
          "package": "dvda",
          "signature": "ASinh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ASinh",
          "package": "dvda",
          "partial": "ASinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ASinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ATan",
          "package": "dvda",
          "signature": "ATan a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ATan",
          "package": "dvda",
          "partial": "ATan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ATan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ATanh",
          "package": "dvda",
          "signature": "ATanh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ATanh",
          "package": "dvda",
          "partial": "ATanh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ATanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Abs",
          "package": "dvda",
          "signature": "Abs a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Abs",
          "package": "dvda",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Add",
          "package": "dvda",
          "signature": "Add a a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Add",
          "package": "dvda",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Cos",
          "package": "dvda",
          "signature": "Cos a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Cos",
          "package": "dvda",
          "partial": "Cos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Cosh",
          "package": "dvda",
          "signature": "Cosh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Cosh",
          "package": "dvda",
          "partial": "Cosh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Div",
          "package": "dvda",
          "signature": "Div a a",
          "source": "src/Dvda-Expr.html#Fractionals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Div",
          "package": "dvda",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "EConst",
          "package": "dvda",
          "signature": "a -\u003e Expr a",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "EConst",
          "normalized": "a-\u003eExpr a",
          "package": "dvda",
          "partial": "EConst",
          "signature": "a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:EConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "EFloating",
          "package": "dvda",
          "signature": "Floatings (Expr a) -\u003e Expr a",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "EFloating",
          "normalized": "Floatings(Expr a)-\u003eExpr a",
          "package": "dvda",
          "partial": "EFloating",
          "signature": "Floatings(Expr a)-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:EFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "EFractional",
          "package": "dvda",
          "signature": "Fractionals (Expr a) -\u003e Expr a",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "EFractional",
          "normalized": "Fractionals(Expr a)-\u003eExpr a",
          "package": "dvda",
          "partial": "EFractional",
          "signature": "Fractionals(Expr a)-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:EFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ENum",
          "package": "dvda",
          "signature": "Nums (Expr a) -\u003e Expr a",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ENum",
          "normalized": "Nums(Expr a)-\u003eExpr a",
          "package": "dvda",
          "partial": "ENum",
          "signature": "Nums(Expr a)-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ENum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "ESym",
          "package": "dvda",
          "signature": "Sym -\u003e Expr a",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "ESym",
          "normalized": "Sym-\u003eExpr a",
          "package": "dvda",
          "partial": "ESym",
          "signature": "Sym-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:ESym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Exp",
          "package": "dvda",
          "signature": "Exp a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Exp",
          "package": "dvda",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "FromInteger",
          "package": "dvda",
          "signature": "FromInteger Integer",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "FromInteger",
          "package": "dvda",
          "partial": "From Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:FromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "FromRational",
          "package": "dvda",
          "signature": "FromRational Rational",
          "source": "src/Dvda-Expr.html#Fractionals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "FromRational",
          "package": "dvda",
          "partial": "From Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:FromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GConst",
          "package": "dvda",
          "signature": "a -\u003e GExpr a b",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GConst",
          "normalized": "a-\u003eGExpr a b",
          "package": "dvda",
          "partial": "GConst",
          "signature": "a-\u003eGExpr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:GConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GFloating",
          "package": "dvda",
          "signature": "Floatings b -\u003e GExpr a b",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GFloating",
          "normalized": "Floatings a-\u003eGExpr b a",
          "package": "dvda",
          "partial": "GFloating",
          "signature": "Floatings b-\u003eGExpr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:GFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GFractional",
          "package": "dvda",
          "signature": "Fractionals b -\u003e GExpr a b",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GFractional",
          "normalized": "Fractionals a-\u003eGExpr b a",
          "package": "dvda",
          "partial": "GFractional",
          "signature": "Fractionals b-\u003eGExpr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:GFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GNum",
          "package": "dvda",
          "signature": "Nums b -\u003e GExpr a b",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GNum",
          "normalized": "Nums a-\u003eGExpr b a",
          "package": "dvda",
          "partial": "GNum",
          "signature": "Nums b-\u003eGExpr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:GNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "GSym",
          "package": "dvda",
          "signature": "Sym -\u003e GExpr a b",
          "source": "src/Dvda-Expr.html#GExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "GSym",
          "normalized": "Sym-\u003eGExpr a b",
          "package": "dvda",
          "partial": "GSym",
          "signature": "Sym-\u003eGExpr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:GSym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Log",
          "package": "dvda",
          "signature": "Log a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Log",
          "package": "dvda",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "LogBase",
          "package": "dvda",
          "signature": "LogBase a a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "LogBase",
          "package": "dvda",
          "partial": "Log Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:LogBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Mul",
          "package": "dvda",
          "signature": "Mul a a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Mul",
          "package": "dvda",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Negate",
          "package": "dvda",
          "signature": "Negate a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Negate",
          "package": "dvda",
          "partial": "Negate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Pow",
          "package": "dvda",
          "signature": "Pow a a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Pow",
          "package": "dvda",
          "partial": "Pow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Signum",
          "package": "dvda",
          "signature": "Signum a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Signum",
          "package": "dvda",
          "partial": "Signum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Sin",
          "package": "dvda",
          "signature": "Sin a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Sin",
          "package": "dvda",
          "partial": "Sin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Sinh",
          "package": "dvda",
          "signature": "Sinh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Sinh",
          "package": "dvda",
          "partial": "Sinh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Sub",
          "package": "dvda",
          "signature": "Sub a a",
          "source": "src/Dvda-Expr.html#Nums",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Sub",
          "package": "dvda",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Sym",
          "package": "dvda",
          "signature": "Sym String",
          "source": "src/Dvda-Expr.html#Sym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Sym",
          "package": "dvda",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "SymDependent",
          "package": "dvda",
          "signature": "SymDependent String Int Sym",
          "source": "src/Dvda-Expr.html#Sym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "SymDependent",
          "package": "dvda",
          "partial": "Sym Dependent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:SymDependent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "Tanh",
          "package": "dvda",
          "signature": "Tanh a",
          "source": "src/Dvda-Expr.html#Floatings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "Tanh",
          "package": "dvda",
          "partial": "Tanh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:Tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "const'",
          "package": "dvda",
          "signature": "a -\u003e Expr a",
          "source": "src/Dvda-Expr.html#const%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "const'",
          "normalized": "a-\u003eExpr a",
          "package": "dvda",
          "signature": "a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:const-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "extractLinearPart",
          "package": "dvda",
          "signature": "Expr a -\u003e Expr a -\u003e (Expr a, a)",
          "source": "src/Dvda-Expr.html#extractLinearPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "extractLinearPart",
          "normalized": "Expr a-\u003eExpr a-\u003e(Expr a,a)",
          "package": "dvda",
          "partial": "Linear Part",
          "signature": "Expr a-\u003eExpr a-\u003e(Expr a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:extractLinearPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efoldr over the constants and symbols\n\u003c/p\u003e",
          "module": "Dvda.Expr",
          "name": "foldExpr",
          "package": "dvda",
          "signature": "(Expr a -\u003e b -\u003e b) -\u003e b -\u003e Expr a -\u003e b",
          "source": "src/Dvda-Expr.html#foldExpr",
          "type": "function"
        },
        "index": {
          "description": "foldr over the constants and symbols",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "foldExpr",
          "normalized": "(Expr a-\u003eb-\u003eb)-\u003eb-\u003eExpr a-\u003eb",
          "package": "dvda",
          "partial": "Expr",
          "signature": "(Expr a-\u003eb-\u003eb)-\u003eb-\u003eExpr a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:foldExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "fromNeg",
          "package": "dvda",
          "signature": "Expr a -\u003e Maybe (Expr a)",
          "source": "src/Dvda-Expr.html#fromNeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "fromNeg",
          "normalized": "Expr a-\u003eMaybe(Expr a)",
          "package": "dvda",
          "partial": "Neg",
          "signature": "Expr a-\u003eMaybe(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:fromNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif the expression is a constant, a fromInteger, or a fromRational, return the constant part\n   otherwise return nothing\n\u003c/p\u003e",
          "module": "Dvda.Expr",
          "name": "getConst",
          "package": "dvda",
          "signature": "Expr a -\u003e Maybe a",
          "source": "src/Dvda-Expr.html#getConst",
          "type": "function"
        },
        "index": {
          "description": "if the expression is constant fromInteger or fromRational return the constant part otherwise return nothing",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "getConst",
          "normalized": "Expr a-\u003eMaybe a",
          "package": "dvda",
          "partial": "Const",
          "signature": "Expr a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:getConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "getParents",
          "package": "dvda",
          "signature": "GExpr a b -\u003e [b]",
          "source": "src/Dvda-Expr.html#getParents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "getParents",
          "normalized": "GExpr a b-\u003e[b]",
          "package": "dvda",
          "partial": "Parents",
          "signature": "GExpr a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:getParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks to see if an Expr is equal to a value\n\u003c/p\u003e",
          "module": "Dvda.Expr",
          "name": "isVal",
          "package": "dvda",
          "signature": "a -\u003e Expr a -\u003e Bool",
          "source": "src/Dvda-Expr.html#isVal",
          "type": "function"
        },
        "index": {
          "description": "Checks to see if an Expr is equal to value",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "isVal",
          "normalized": "a-\u003eExpr a-\u003eBool",
          "package": "dvda",
          "partial": "Val",
          "signature": "a-\u003eExpr a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:isVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis substitute is sketchy because it doesn't perform simplifications that are often assumed to be done\n\u003c/p\u003e",
          "module": "Dvda.Expr",
          "name": "sketchySubstitute",
          "package": "dvda",
          "signature": "Expr a -\u003e [(Expr a, Expr a)] -\u003e Expr a",
          "source": "src/Dvda-Expr.html#sketchySubstitute",
          "type": "function"
        },
        "index": {
          "description": "this substitute is sketchy because it doesn perform simplifications that are often assumed to be done",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "sketchySubstitute",
          "normalized": "Expr a-\u003e[(Expr a,Expr a)]-\u003eExpr a",
          "package": "dvda",
          "partial": "Substitute",
          "signature": "Expr a-\u003e[(Expr a,Expr a)]-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:sketchySubstitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Expr",
          "name": "substitute",
          "package": "dvda",
          "signature": "Expr a -\u003e [(Expr a, Expr a)] -\u003e Expr a",
          "source": "src/Dvda-Expr.html#substitute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "substitute",
          "normalized": "Expr a-\u003e[(Expr a,Expr a)]-\u003eExpr a",
          "package": "dvda",
          "signature": "Expr a-\u003e[(Expr a,Expr a)]-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esymbolic scalar\n\u003c/p\u003e",
          "module": "[\"Dvda.Expr\",\"Dvda\"]",
          "name": "sym",
          "package": "dvda",
          "signature": "String -\u003e Expr a",
          "source": "src/Dvda-Expr.html#sym",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:sym\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:sym\"]"
        },
        "index": {
          "description": "symbolic scalar",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "sym",
          "normalized": "String-\u003eExpr a",
          "package": "dvda",
          "signature": "String-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic scalar which is a function of some independent variable, like time.\n .\n This lets you do d(f(g(t)))/dt == f'(g(t))*g'(t)\n\u003c/p\u003e",
          "module": "[\"Dvda.Expr\",\"Dvda\"]",
          "name": "symDependent",
          "package": "dvda",
          "signature": "String -\u003e Expr a -\u003e Expr a",
          "source": "src/Dvda-Expr.html#symDependent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:symDependent\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:symDependent\"]"
        },
        "index": {
          "description": "Symbolic scalar which is function of some independent variable like time This lets you do dt",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "symDependent",
          "normalized": "String-\u003eExpr a-\u003eExpr a",
          "package": "dvda",
          "partial": "Dependent",
          "signature": "String-\u003eExpr a-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:symDependent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as symDependent but it can start as the Nth derivative\n\u003c/p\u003e",
          "module": "[\"Dvda.Expr\",\"Dvda\"]",
          "name": "symDependentN",
          "package": "dvda",
          "signature": "String -\u003e Expr a -\u003e Int -\u003e Expr a",
          "source": "src/Dvda-Expr.html#symDependentN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:symDependentN\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:symDependentN\"]"
        },
        "index": {
          "description": "same as symDependent but it can start as the Nth derivative",
          "hierarchy": "Dvda Expr",
          "module": "Dvda.Expr",
          "name": "symDependentN",
          "normalized": "String-\u003eExpr a-\u003eInt-\u003eExpr a",
          "package": "dvda",
          "partial": "Dependent",
          "signature": "String-\u003eExpr a-\u003eInt-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Expr.html#v:symDependentN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "FunGraph",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "FunGraph",
          "package": "dvda",
          "partial": "Fun Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": ":*",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html#%3A%2A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": ":*",
          "package": "dvda",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#t::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "FunGraph",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html#FunGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "FunGraph",
          "package": "dvda",
          "partial": "Fun Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#t:FunGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "MVS",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html#MVS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "MVS",
          "package": "dvda",
          "partial": "MVS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#t:MVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "ToFunGraph",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html#ToFunGraph",
          "type": "class"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "ToFunGraph",
          "package": "dvda",
          "partial": "To Fun Graph",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#t:ToFunGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Dvda.FunGraph\",\"Dvda\"]",
          "name": ":*",
          "package": "dvda",
          "signature": "a :* b",
          "source": "src/Dvda-FunGraph.html#%3A%2A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v::-42-\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v::-42-\"]"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": ":*",
          "package": "dvda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "Mat",
          "package": "dvda",
          "signature": "Mat [[a]]",
          "source": "src/Dvda-FunGraph.html#MVS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "Mat",
          "normalized": "Mat[[a]]",
          "package": "dvda",
          "partial": "Mat",
          "signature": "Mat[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:Mat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "Sca",
          "package": "dvda",
          "signature": "Sca a",
          "source": "src/Dvda-FunGraph.html#MVS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "Sca",
          "package": "dvda",
          "partial": "Sca",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:Sca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "Vec",
          "package": "dvda",
          "signature": "Vec [a]",
          "source": "src/Dvda-FunGraph.html#MVS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "Vec",
          "normalized": "Vec[a]",
          "package": "dvda",
          "partial": "Vec",
          "signature": "Vec[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "countNodes",
          "package": "dvda",
          "signature": "FunGraph a -\u003e Int",
          "source": "src/Dvda-FunGraph.html#countNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "countNodes",
          "normalized": "FunGraph a-\u003eInt",
          "package": "dvda",
          "partial": "Nodes",
          "signature": "FunGraph a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:countNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a FunGraph out of outputs, automatically detecting the proper inputs\n\u003c/p\u003e",
          "module": "Dvda.FunGraph",
          "name": "exprsToFunGraph",
          "package": "dvda",
          "signature": "[Expr a] -\u003e IO (FunGraph a)",
          "source": "src/Dvda-FunGraph.html#exprsToFunGraph",
          "type": "function"
        },
        "index": {
          "description": "make FunGraph out of outputs automatically detecting the proper inputs",
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "exprsToFunGraph",
          "normalized": "[Expr a]-\u003eIO(FunGraph a)",
          "package": "dvda",
          "partial": "To Fun Graph",
          "signature": "[Expr a]-\u003eIO(FunGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:exprsToFunGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "fgInputs",
          "package": "dvda",
          "signature": "FunGraph a -\u003e [MVS (GExpr a Int)]",
          "source": "src/Dvda-FunGraph.html#fgInputs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "fgInputs",
          "normalized": "FunGraph a-\u003e[MVS(GExpr a Int)]",
          "package": "dvda",
          "partial": "Inputs",
          "signature": "FunGraph a-\u003e[MVS(GExpr a Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:fgInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "fgLookupGExpr",
          "package": "dvda",
          "signature": "FunGraph a -\u003e Int -\u003e Maybe (GExpr a Int)",
          "source": "src/Dvda-FunGraph.html#fgLookupGExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "fgLookupGExpr",
          "normalized": "FunGraph a-\u003eInt-\u003eMaybe(GExpr a Int)",
          "package": "dvda",
          "partial": "Lookup GExpr",
          "signature": "FunGraph a-\u003eInt-\u003eMaybe(GExpr a Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:fgLookupGExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "fgOutputs",
          "package": "dvda",
          "signature": "FunGraph a -\u003e [MVS Int]",
          "source": "src/Dvda-FunGraph.html#fgOutputs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "fgOutputs",
          "normalized": "FunGraph a-\u003e[MVS Int]",
          "package": "dvda",
          "partial": "Outputs",
          "signature": "FunGraph a-\u003e[MVS Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:fgOutputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "fgReified",
          "package": "dvda",
          "signature": "FunGraph a -\u003e [(Int, GExpr a Int)]",
          "source": "src/Dvda-FunGraph.html#fgReified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "fgReified",
          "normalized": "FunGraph a-\u003e[(Int,GExpr a Int)]",
          "package": "dvda",
          "partial": "Reified",
          "signature": "FunGraph a-\u003e[(Int,GExpr a Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:fgReified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "nodelistToFunGraph",
          "package": "dvda",
          "signature": "[(Int, GExpr a Int)] -\u003e [MVS (GExpr a Int)] -\u003e [MVS Int] -\u003e FunGraph a",
          "source": "src/Dvda-FunGraph.html#nodelistToFunGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "nodelistToFunGraph",
          "normalized": "[(Int,GExpr a Int)]-\u003e[MVS(GExpr a Int)]-\u003e[MVS Int]-\u003eFunGraph a",
          "package": "dvda",
          "partial": "To Fun Graph",
          "signature": "[(Int,GExpr a Int)]-\u003e[MVS(GExpr a Int)]-\u003e[MVS Int]-\u003eFunGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:nodelistToFunGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake inputs and outputs which are of classes ToFunGraph (heterogenous lists of \u003ccode\u003eExpr a\u003c/code\u003e)\n   and traverse the outputs reifying all expressions and creating a hashmap of StableNames (stable pointers).\n   Once the hashmap is created, lookup the provided inputs and return a FunGraph which contains an\n   expression graph, input/output indices, and other useful functions. StableNames is non-deterministic\n   so this function may return graphs with more or fewer CSE's eliminated.\n   If CSE is then performed on the graph, the result is deterministic.\n\u003c/p\u003e",
          "module": "[\"Dvda.FunGraph\",\"Dvda\"]",
          "name": "toFunGraph",
          "package": "dvda",
          "signature": "b -\u003e c -\u003e IO (FunGraph a)",
          "source": "src/Dvda-FunGraph.html#toFunGraph",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:toFunGraph\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:toFunGraph\"]"
        },
        "index": {
          "description": "Take inputs and outputs which are of classes ToFunGraph heterogenous lists of Expr and traverse the outputs reifying all expressions and creating hashmap of StableNames stable pointers Once the hashmap is created lookup the provided inputs and return FunGraph which contains an expression graph input output indices and other useful functions StableNames is non-deterministic so this function may return graphs with more or fewer CSE eliminated If CSE is then performed on the graph the result is deterministic",
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "toFunGraph",
          "normalized": "a-\u003eb-\u003eIO(FunGraph c)",
          "package": "dvda",
          "partial": "Fun Graph",
          "signature": "b-\u003ec-\u003eIO(FunGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:toFunGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.FunGraph",
          "name": "topSort",
          "package": "dvda",
          "signature": "FunGraph a -\u003e [Int]",
          "source": "src/Dvda-FunGraph.html#topSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda FunGraph",
          "module": "Dvda.FunGraph",
          "name": "topSort",
          "normalized": "FunGraph a-\u003e[Int]",
          "package": "dvda",
          "partial": "Sort",
          "signature": "FunGraph a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-FunGraph.html#v:topSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "CoctaveTemplates",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "CoctaveTemplates",
          "package": "dvda",
          "partial": "Coctave Templates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeMexAll",
          "package": "dvda",
          "signature": "String -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writeMexAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeMexAll",
          "normalized": "String-\u003eString",
          "package": "dvda",
          "partial": "Mex All",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writeMexAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writePlot",
          "package": "dvda",
          "signature": "String -\u003e HashMap String [Expr a] -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writePlot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writePlot",
          "normalized": "String-\u003eHashMap String[Expr a]-\u003eString",
          "package": "dvda",
          "partial": "Plot",
          "signature": "String-\u003eHashMap String[Expr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writePlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeSetupSource",
          "package": "dvda",
          "signature": "String -\u003e [Expr a] -\u003e [a] -\u003e [a] -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writeSetupSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeSetupSource",
          "normalized": "String-\u003e[Expr a]-\u003e[a]-\u003e[a]-\u003eString",
          "package": "dvda",
          "partial": "Setup Source",
          "signature": "String-\u003e[Expr a]-\u003e[a]-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writeSetupSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeToStruct",
          "package": "dvda",
          "signature": "String -\u003e [Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e HashMap String [Expr a] -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writeToStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeToStruct",
          "normalized": "String-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003eHashMap String[Expr a]-\u003eString",
          "package": "dvda",
          "partial": "To Struct",
          "signature": "String-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003eHashMap String[Expr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writeToStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeUnstruct",
          "package": "dvda",
          "signature": "String -\u003e [Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e [[Expr a]] -\u003e [Expr a] -\u003e [[Expr a]] -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writeUnstruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeUnstruct",
          "normalized": "String-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[[Expr a]]-\u003e[Expr a]-\u003e[[Expr a]]-\u003eString",
          "package": "dvda",
          "partial": "Unstruct",
          "signature": "String-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[[Expr a]]-\u003e[Expr a]-\u003e[[Expr a]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writeUnstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeUnstructConsts",
          "package": "dvda",
          "signature": "String -\u003e [Expr a] -\u003e String",
          "source": "src/Dvda-MultipleShooting-CoctaveTemplates.html#writeUnstructConsts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting CoctaveTemplates",
          "module": "Dvda.MultipleShooting.CoctaveTemplates",
          "name": "writeUnstructConsts",
          "normalized": "String-\u003e[Expr a]-\u003eString",
          "package": "dvda",
          "partial": "Unstruct Consts",
          "signature": "String-\u003e[Expr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-CoctaveTemplates.html#v:writeUnstructConsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "MSCoctave",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-MSCoctave.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSCoctave",
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "MSCoctave",
          "package": "dvda",
          "partial": "MSCoctave",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSCoctave.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "msCoctave",
          "package": "dvda",
          "signature": "State (Step Double) b -\u003e Integrator Double -\u003e Int -\u003e String -\u003e FilePath -\u003e IO ()",
          "source": "src/Dvda-MultipleShooting-MSCoctave.html#msCoctave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSCoctave",
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "msCoctave",
          "normalized": "State(Step Double)a-\u003eIntegrator Double-\u003eInt-\u003eString-\u003eFilePath-\u003eIO()",
          "package": "dvda",
          "partial": "Coctave",
          "signature": "State(Step Double)b-\u003eIntegrator Double-\u003eInt-\u003eString-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSCoctave.html#v:msCoctave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "run",
          "package": "dvda",
          "signature": "IO ()",
          "source": "src/Dvda-MultipleShooting-MSCoctave.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSCoctave",
          "module": "Dvda.MultipleShooting.MSCoctave",
          "name": "run",
          "normalized": "IO()",
          "package": "dvda",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSCoctave.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "MSMonad",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-MSMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "MSMonad",
          "package": "dvda",
          "partial": "MSMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "State",
          "package": "dvda",
          "type": "type"
        },
        "index": {
          "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "State",
          "package": "dvda",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstant",
          "package": "dvda",
          "signature": "String -\u003e State (Step a) (Expr a)",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstant",
          "normalized": "String-\u003eState(Step a)(Expr a)",
          "package": "dvda",
          "partial": "Constant",
          "signature": "String-\u003eState(Step a)(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstants",
          "package": "dvda",
          "signature": "[String] -\u003e State (Step a) [Expr a]",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addConstants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstants",
          "normalized": "[String]-\u003eState(Step a)[Expr a]",
          "package": "dvda",
          "partial": "Constants",
          "signature": "[String]-\u003eState(Step a)[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstraint",
          "package": "dvda",
          "signature": "Expr a -\u003e Ordering -\u003e Expr a -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addConstraint",
          "normalized": "Expr a-\u003eOrdering-\u003eExpr a-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Constraint",
          "signature": "Expr a-\u003eOrdering-\u003eExpr a-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addOutput",
          "package": "dvda",
          "signature": "Expr a -\u003e String -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addOutput",
          "normalized": "Expr a-\u003eString-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Output",
          "signature": "Expr a-\u003eString-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addParam",
          "package": "dvda",
          "signature": "String -\u003e State (Step a) (Expr a)",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addParam",
          "normalized": "String-\u003eState(Step a)(Expr a)",
          "package": "dvda",
          "partial": "Param",
          "signature": "String-\u003eState(Step a)(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addParams",
          "package": "dvda",
          "signature": "[String] -\u003e State (Step a) [Expr a]",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#addParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "addParams",
          "normalized": "[String]-\u003eState(Step a)[Expr a]",
          "package": "dvda",
          "partial": "Params",
          "signature": "[String]-\u003eState(Step a)[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:addParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "lagrangeStateName",
          "package": "dvda",
          "signature": "String",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#lagrangeStateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "lagrangeStateName",
          "package": "dvda",
          "partial": "State Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:lagrangeStateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "lagrangeTermName",
          "package": "dvda",
          "signature": "String",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#lagrangeStateName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "lagrangeTermName",
          "package": "dvda",
          "partial": "Term Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:lagrangeTermName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setActions",
          "package": "dvda",
          "signature": "[String] -\u003e State (Step a) [Expr a]",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setActions",
          "normalized": "[String]-\u003eState(Step a)[Expr a]",
          "package": "dvda",
          "partial": "Actions",
          "signature": "[String]-\u003eState(Step a)[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setBound",
          "package": "dvda",
          "signature": "Expr a -\u003e (a, a) -\u003e BCTime -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setBound",
          "normalized": "Expr a-\u003e(a,a)-\u003eBCTime-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Bound",
          "signature": "Expr a-\u003e(a,a)-\u003eBCTime-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setDt",
          "package": "dvda",
          "signature": "Expr a -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setDt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setDt",
          "normalized": "Expr a-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Dt",
          "signature": "Expr a-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setDt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setDxdt",
          "package": "dvda",
          "signature": "[Expr a] -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setDxdt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setDxdt",
          "normalized": "[Expr a]-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Dxdt",
          "signature": "[Expr a]-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setDxdt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setLagrangeTerm",
          "package": "dvda",
          "signature": "Expr a -\u003e (a, a) -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setLagrangeTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setLagrangeTerm",
          "normalized": "Expr a-\u003e(a,a)-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Lagrange Term",
          "signature": "Expr a-\u003e(a,a)-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setLagrangeTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setMayerTerm",
          "package": "dvda",
          "signature": "Expr a -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setMayerTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setMayerTerm",
          "normalized": "Expr a-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Mayer Term",
          "signature": "Expr a-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setMayerTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setPeriodic",
          "package": "dvda",
          "signature": "Expr a -\u003e State (Step a) ()",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setPeriodic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setPeriodic",
          "normalized": "Expr a-\u003eState(Step a)()",
          "package": "dvda",
          "partial": "Periodic",
          "signature": "Expr a-\u003eState(Step a)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setPeriodic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setStates",
          "package": "dvda",
          "signature": "[String] -\u003e State (Step a) [Expr a]",
          "source": "src/Dvda-MultipleShooting-MSMonad.html#setStates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting MSMonad",
          "module": "Dvda.MultipleShooting.MSMonad",
          "name": "setStates",
          "normalized": "[String]-\u003eState(Step a)[Expr a]",
          "package": "dvda",
          "partial": "States",
          "signature": "[String]-\u003eState(Step a)[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-MSMonad.html#v:setStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Types",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Types",
          "package": "dvda",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "BCTime",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-Types.html#BCTime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "BCTime",
          "package": "dvda",
          "partial": "BCTime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#t:BCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Constraint",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-Types.html#Constraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Constraint",
          "package": "dvda",
          "partial": "Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#t:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Ode",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-Types.html#Ode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Ode",
          "package": "dvda",
          "partial": "Ode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#t:Ode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Step",
          "package": "dvda",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Step",
          "package": "dvda",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "ALWAYS",
          "package": "dvda",
          "signature": "ALWAYS",
          "source": "src/Dvda-MultipleShooting-Types.html#BCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "ALWAYS",
          "package": "dvda",
          "partial": "ALWAYS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:ALWAYS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Constraint",
          "package": "dvda",
          "signature": "Constraint a Ordering a",
          "source": "src/Dvda-MultipleShooting-Types.html#Constraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Constraint",
          "package": "dvda",
          "partial": "Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:Constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Ode",
          "package": "dvda",
          "signature": "Ode (SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e SparseVec (Expr a)) (Int, Int)",
          "source": "src/Dvda-MultipleShooting-Types.html#Ode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Ode",
          "normalized": "Ode(SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a))(Int,Int)",
          "package": "dvda",
          "partial": "Ode",
          "signature": "Ode(SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a))(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:Ode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "Step",
          "package": "dvda",
          "signature": "Step",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "Step",
          "package": "dvda",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "TIMESTEP",
          "package": "dvda",
          "signature": "TIMESTEP Int",
          "source": "src/Dvda-MultipleShooting-Types.html#BCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "TIMESTEP",
          "package": "dvda",
          "partial": "TIMESTEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:TIMESTEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "eulerError",
          "package": "dvda",
          "signature": "SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e Ode a -\u003e Expr a -\u003e SparseVec (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#eulerError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "eulerError",
          "normalized": "SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eOde a-\u003eExpr a-\u003eSparseVec(Expr a)",
          "package": "dvda",
          "partial": "Error",
          "signature": "SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eOde a-\u003eExpr a-\u003eSparseVec(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:eulerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "eulerError'",
          "package": "dvda",
          "signature": "[Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e ([Expr a] -\u003e [Expr a] -\u003e [Expr a]) -\u003e Expr a -\u003e [Expr a]",
          "source": "src/Dvda-MultipleShooting-Types.html#eulerError%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "eulerError'",
          "normalized": "[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e([Expr a]-\u003e[Expr a]-\u003e[Expr a])-\u003eExpr a-\u003e[Expr a]",
          "package": "dvda",
          "partial": "Error'",
          "signature": "[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e([Expr a]-\u003e[Expr a]-\u003e[Expr a])-\u003eExpr a-\u003e[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:eulerError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "simpsonsRuleError",
          "package": "dvda",
          "signature": "SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e SparseVec (Expr a) -\u003e Ode a -\u003e Expr a -\u003e SparseVec (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#simpsonsRuleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "simpsonsRuleError",
          "normalized": "SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eOde a-\u003eExpr a-\u003eSparseVec(Expr a)",
          "package": "dvda",
          "partial": "Rule Error",
          "signature": "SparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eSparseVec(Expr a)-\u003eOde a-\u003eExpr a-\u003eSparseVec(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:simpsonsRuleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "simpsonsRuleError'",
          "package": "dvda",
          "signature": "[Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e [Expr a] -\u003e ([Expr a] -\u003e [Expr a] -\u003e [Expr a]) -\u003e Expr a -\u003e [Expr a]",
          "source": "src/Dvda-MultipleShooting-Types.html#simpsonsRuleError%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "simpsonsRuleError'",
          "normalized": "[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e([Expr a]-\u003e[Expr a]-\u003e[Expr a])-\u003eExpr a-\u003e[Expr a]",
          "package": "dvda",
          "partial": "Rule Error'",
          "signature": "[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e[Expr a]-\u003e([Expr a]-\u003e[Expr a]-\u003e[Expr a])-\u003eExpr a-\u003e[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:simpsonsRuleError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepActions",
          "package": "dvda",
          "signature": "Maybe [Expr a]",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepActions",
          "normalized": "Maybe[Expr a]",
          "package": "dvda",
          "partial": "Actions",
          "signature": "Maybe[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepBounds",
          "package": "dvda",
          "signature": "[(Expr a, (a, a, BCTime))]",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepBounds",
          "normalized": "[(Expr a,(a,a,BCTime))]",
          "package": "dvda",
          "partial": "Bounds",
          "signature": "[(Expr a,(a,a,BCTime))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepConstants",
          "package": "dvda",
          "signature": "HashSet (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepConstants",
          "package": "dvda",
          "partial": "Constants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepConstraints",
          "package": "dvda",
          "signature": "[Constraint (Expr a)]",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepConstraints",
          "normalized": "[Constraint(Expr a)]",
          "package": "dvda",
          "partial": "Constraints",
          "signature": "[Constraint(Expr a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepDt",
          "package": "dvda",
          "signature": "Maybe (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepDt",
          "package": "dvda",
          "partial": "Dt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepDt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepDxdt",
          "package": "dvda",
          "signature": "Maybe [Expr a]",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepDxdt",
          "normalized": "Maybe[Expr a]",
          "package": "dvda",
          "partial": "Dxdt",
          "signature": "Maybe[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepDxdt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepLagrangeTerm",
          "package": "dvda",
          "signature": "Maybe (Expr a, (a, a))",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepLagrangeTerm",
          "normalized": "Maybe(Expr a,(a,a))",
          "package": "dvda",
          "partial": "Lagrange Term",
          "signature": "Maybe(Expr a,(a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepLagrangeTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepMayerTerm",
          "package": "dvda",
          "signature": "Maybe (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepMayerTerm",
          "package": "dvda",
          "partial": "Mayer Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepMayerTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepOutputs",
          "package": "dvda",
          "signature": "HashMap String (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepOutputs",
          "package": "dvda",
          "partial": "Outputs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepOutputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepParams",
          "package": "dvda",
          "signature": "HashSet (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepParams",
          "package": "dvda",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepPeriodic",
          "package": "dvda",
          "signature": "HashSet (Expr a)",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepPeriodic",
          "package": "dvda",
          "partial": "Periodic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepPeriodic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepStates",
          "package": "dvda",
          "signature": "Maybe [Expr a]",
          "source": "src/Dvda-MultipleShooting-Types.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda MultipleShooting Types",
          "module": "Dvda.MultipleShooting.Types",
          "name": "stepStates",
          "normalized": "Maybe[Expr a]",
          "package": "dvda",
          "partial": "States",
          "signature": "Maybe[Expr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-MultipleShooting-Types.html#v:stepStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Reify",
          "name": "Reify",
          "package": "dvda",
          "source": "src/Dvda-Reify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "Reify",
          "package": "dvda",
          "partial": "Reify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Reify",
          "name": "MuRef",
          "package": "dvda",
          "source": "src/Dvda-Reify.html#MuRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "MuRef",
          "package": "dvda",
          "partial": "Mu Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#t:MuRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Reify",
          "name": "ReifyGraph",
          "package": "dvda",
          "source": "src/Dvda-ReifyGraph.html#ReifyGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "ReifyGraph",
          "package": "dvda",
          "partial": "Reify Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#t:ReifyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Dvda.Reify\",\"Dvda.ReifyGraph\"]",
          "name": "ReifyGraph",
          "package": "dvda",
          "signature": "ReifyGraph [(Unique, e Unique)]",
          "source": "src/Dvda-ReifyGraph.html#ReifyGraph",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#v:ReifyGraph\",\"http://hackage.haskell.org/package/dvda/docs/Dvda-ReifyGraph.html#v:ReifyGraph\"]"
        },
        "index": {
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "ReifyGraph",
          "normalized": "ReifyGraph[(Unique,a Unique)]",
          "package": "dvda",
          "partial": "Reify Graph",
          "signature": "ReifyGraph[(Unique,e Unique)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#v:ReifyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Reify",
          "name": "mapDeRef",
          "package": "dvda",
          "signature": "b -\u003e f u) -\u003e a -\u003e f (DeRef a u)",
          "source": "src/Dvda-Reify.html#mapDeRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "mapDeRef",
          "normalized": "a-\u003eb c)-\u003ed-\u003eb(DeRef d c)",
          "package": "dvda",
          "partial": "De Ref",
          "signature": "b-\u003ef u)-\u003ea-\u003ef(DeRef a u)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#v:mapDeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereifyGraph\u003c/code\u003e takes a data structure that admits \u003ccode\u003e\u003ca\u003eMuRef\u003c/a\u003e\u003c/code\u003e, and returns a \u003ccode\u003e\u003ca\u003eReifyGraph\u003c/a\u003e\u003c/code\u003e that contains\n the dereferenced nodes, with their children as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e rather than recursive values.\n\u003c/p\u003e",
          "module": "Dvda.Reify",
          "name": "reifyGraphs",
          "package": "dvda",
          "signature": "[t s] -\u003e IO (ReifyGraph (DeRef s), [t Int])",
          "source": "src/Dvda-Reify.html#reifyGraphs",
          "type": "function"
        },
        "index": {
          "description": "reifyGraph takes data structure that admits MuRef and returns ReifyGraph that contains the dereferenced nodes with their children as Int rather than recursive values",
          "hierarchy": "Dvda Reify",
          "module": "Dvda.Reify",
          "name": "reifyGraphs",
          "normalized": "[a b]-\u003eIO(ReifyGraph(DeRef b),[a Int])",
          "package": "dvda",
          "partial": "Graphs",
          "signature": "[t s]-\u003eIO(ReifyGraph(DeRef s),[t Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Reify.html#v:reifyGraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.ReifyGraph",
          "name": "ReifyGraph",
          "package": "dvda",
          "source": "src/Dvda-ReifyGraph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda ReifyGraph",
          "module": "Dvda.ReifyGraph",
          "name": "ReifyGraph",
          "package": "dvda",
          "partial": "Reify Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-ReifyGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.ReifyGraph",
          "name": "ReifyGraph",
          "package": "dvda",
          "source": "src/Dvda-ReifyGraph.html#ReifyGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda ReifyGraph",
          "module": "Dvda.ReifyGraph",
          "name": "ReifyGraph",
          "package": "dvda",
          "partial": "Reify Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-ReifyGraph.html#t:ReifyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "SparseLA",
          "package": "dvda",
          "source": "src/Dvda-SparseLA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "SparseLA",
          "package": "dvda",
          "partial": "Sparse LA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "SparseMat",
          "package": "dvda",
          "source": "src/Dvda-SparseLA.html#SparseMat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "SparseMat",
          "package": "dvda",
          "partial": "Sparse Mat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#t:SparseMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "SparseVec",
          "package": "dvda",
          "source": "src/Dvda-SparseLA.html#SparseVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "SparseVec",
          "package": "dvda",
          "partial": "Sparse Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#t:SparseVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "denseListFromSv",
          "package": "dvda",
          "signature": "SparseVec a -\u003e [a]",
          "source": "src/Dvda-SparseLA.html#denseListFromSv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "denseListFromSv",
          "normalized": "SparseVec a-\u003e[a]",
          "package": "dvda",
          "partial": "List From Sv",
          "signature": "SparseVec a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:denseListFromSv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "getCol",
          "package": "dvda",
          "signature": "Int -\u003e SparseMat a -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#getCol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "getCol",
          "normalized": "Int-\u003eSparseMat a-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Col",
          "signature": "Int-\u003eSparseMat a-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:getCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "getRow",
          "package": "dvda",
          "signature": "Int -\u003e SparseMat a -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#getRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "getRow",
          "normalized": "Int-\u003eSparseMat a-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Row",
          "signature": "Int-\u003eSparseMat a-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:getRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "sMV",
          "package": "dvda",
          "signature": "SparseMat a -\u003e SparseVec a -\u003e Maybe (SparseVec a)",
          "source": "src/Dvda-SparseLA.html#sMV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "sMV",
          "normalized": "SparseMat a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "package": "dvda",
          "partial": "MV",
          "signature": "SparseMat a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:sMV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "sVV",
          "package": "dvda",
          "signature": "SparseVec a -\u003e SparseVec a -\u003e Maybe a",
          "source": "src/Dvda-SparseLA.html#sVV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "sVV",
          "normalized": "SparseVec a-\u003eSparseVec a-\u003eMaybe a",
          "package": "dvda",
          "partial": "VV",
          "signature": "SparseVec a-\u003eSparseVec a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:sVV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smAdd",
          "package": "dvda",
          "signature": "SparseMat a -\u003e SparseMat a -\u003e Maybe (SparseMat a)",
          "source": "src/Dvda-SparseLA.html#smAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smAdd",
          "normalized": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "package": "dvda",
          "partial": "Add",
          "signature": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smBinary",
          "package": "dvda",
          "signature": "(a -\u003e a -\u003e a) -\u003e (IntMap a -\u003e IntMap a) -\u003e (IntMap a -\u003e IntMap a) -\u003e SparseMat a -\u003e SparseMat a -\u003e Maybe (SparseMat a)",
          "source": "src/Dvda-SparseLA.html#smBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smBinary",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(IntMap a-\u003eIntMap a)-\u003e(IntMap a-\u003eIntMap a)-\u003eSparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "package": "dvda",
          "partial": "Binary",
          "signature": "(a-\u003ea-\u003ea)-\u003e(IntMap a-\u003eIntMap a)-\u003e(IntMap a-\u003eIntMap a)-\u003eSparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smFromLists",
          "package": "dvda",
          "signature": "[[a]] -\u003e SparseMat a",
          "source": "src/Dvda-SparseLA.html#smFromLists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smFromLists",
          "normalized": "[[a]]-\u003eSparseMat a",
          "package": "dvda",
          "partial": "From Lists",
          "signature": "[[a]]-\u003eSparseMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smFromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smFromSparseList",
          "package": "dvda",
          "signature": "[((Int, Int), a)] -\u003e (Int, Int) -\u003e SparseMat a",
          "source": "src/Dvda-SparseLA.html#smFromSparseList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smFromSparseList",
          "normalized": "[((Int,Int),a)]-\u003e(Int,Int)-\u003eSparseMat a",
          "package": "dvda",
          "partial": "From Sparse List",
          "signature": "[((Int,Int),a)]-\u003e(Int,Int)-\u003eSparseMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smFromSparseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smMap",
          "package": "dvda",
          "signature": "(a -\u003e b) -\u003e SparseMat a -\u003e SparseMat b",
          "source": "src/Dvda-SparseLA.html#smMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smMap",
          "normalized": "(a-\u003eb)-\u003eSparseMat a-\u003eSparseMat b",
          "package": "dvda",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003eSparseMat a-\u003eSparseMat b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smMul",
          "package": "dvda",
          "signature": "SparseMat a -\u003e SparseMat a -\u003e Maybe (SparseMat a)",
          "source": "src/Dvda-SparseLA.html#smMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smMul",
          "normalized": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "package": "dvda",
          "partial": "Mul",
          "signature": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smScale",
          "package": "dvda",
          "signature": "a -\u003e SparseMat a -\u003e SparseMat a",
          "source": "src/Dvda-SparseLA.html#smScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smScale",
          "normalized": "a-\u003eSparseMat a-\u003eSparseMat a",
          "package": "dvda",
          "partial": "Scale",
          "signature": "a-\u003eSparseMat a-\u003eSparseMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smSize",
          "package": "dvda",
          "signature": "SparseMat a -\u003e (Int, Int)",
          "source": "src/Dvda-SparseLA.html#smSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smSize",
          "normalized": "SparseMat a-\u003e(Int,Int)",
          "package": "dvda",
          "partial": "Size",
          "signature": "SparseMat a-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smSub",
          "package": "dvda",
          "signature": "SparseMat a -\u003e SparseMat a -\u003e Maybe (SparseMat a)",
          "source": "src/Dvda-SparseLA.html#smSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smSub",
          "normalized": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "package": "dvda",
          "partial": "Sub",
          "signature": "SparseMat a-\u003eSparseMat a-\u003eMaybe(SparseMat a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "smZeros",
          "package": "dvda",
          "signature": "(Int, Int) -\u003e SparseMat a",
          "source": "src/Dvda-SparseLA.html#smZeros",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "smZeros",
          "normalized": "(Int,Int)-\u003eSparseMat a",
          "package": "dvda",
          "partial": "Zeros",
          "signature": "(Int,Int)-\u003eSparseMat a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:smZeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "sparseListFromSv",
          "package": "dvda",
          "signature": "SparseVec a -\u003e [a]",
          "source": "src/Dvda-SparseLA.html#sparseListFromSv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "sparseListFromSv",
          "normalized": "SparseVec a-\u003e[a]",
          "package": "dvda",
          "partial": "List From Sv",
          "signature": "SparseVec a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:sparseListFromSv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svAdd",
          "package": "dvda",
          "signature": "SparseVec a -\u003e SparseVec a -\u003e Maybe (SparseVec a)",
          "source": "src/Dvda-SparseLA.html#svAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svAdd",
          "normalized": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "package": "dvda",
          "partial": "Add",
          "signature": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svBinary",
          "package": "dvda",
          "signature": "(a -\u003e b -\u003e c) -\u003e (IntMap a -\u003e IntMap c) -\u003e (IntMap b -\u003e IntMap c) -\u003e SparseVec a -\u003e SparseVec b -\u003e Maybe (SparseVec c)",
          "source": "src/Dvda-SparseLA.html#svBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svBinary",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(IntMap a-\u003eIntMap c)-\u003e(IntMap b-\u003eIntMap c)-\u003eSparseVec a-\u003eSparseVec b-\u003eMaybe(SparseVec c)",
          "package": "dvda",
          "partial": "Binary",
          "signature": "(a-\u003eb-\u003ec)-\u003e(IntMap a-\u003eIntMap c)-\u003e(IntMap b-\u003eIntMap c)-\u003eSparseVec a-\u003eSparseVec b-\u003eMaybe(SparseVec c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svCat",
          "package": "dvda",
          "signature": "SparseVec a -\u003e SparseVec a -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svCat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svCat",
          "normalized": "SparseVec a-\u003eSparseVec a-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Cat",
          "signature": "SparseVec a-\u003eSparseVec a-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svCats",
          "package": "dvda",
          "signature": "[SparseVec a] -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svCats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svCats",
          "normalized": "[SparseVec a]-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Cats",
          "signature": "[SparseVec a]-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svCats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svFromList",
          "package": "dvda",
          "signature": "[a] -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svFromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svFromList",
          "normalized": "[a]-\u003eSparseVec a",
          "package": "dvda",
          "partial": "From List",
          "signature": "[a]-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svFromSparseList",
          "package": "dvda",
          "signature": "[(Int, a)] -\u003e Int -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svFromSparseList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svFromSparseList",
          "normalized": "[(Int,a)]-\u003eInt-\u003eSparseVec a",
          "package": "dvda",
          "partial": "From Sparse List",
          "signature": "[(Int,a)]-\u003eInt-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svFromSparseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svMap",
          "package": "dvda",
          "signature": "(a -\u003e b) -\u003e SparseVec a -\u003e SparseVec b",
          "source": "src/Dvda-SparseLA.html#svMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svMap",
          "normalized": "(a-\u003eb)-\u003eSparseVec a-\u003eSparseVec b",
          "package": "dvda",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003eSparseVec a-\u003eSparseVec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svMul",
          "package": "dvda",
          "signature": "SparseVec a -\u003e SparseVec a -\u003e Maybe (SparseVec a)",
          "source": "src/Dvda-SparseLA.html#svMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svMul",
          "normalized": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "package": "dvda",
          "partial": "Mul",
          "signature": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svScale",
          "package": "dvda",
          "signature": "a -\u003e SparseVec a -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svScale",
          "normalized": "a-\u003eSparseVec a-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Scale",
          "signature": "a-\u003eSparseVec a-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svSize",
          "package": "dvda",
          "signature": "SparseVec a -\u003e Int",
          "source": "src/Dvda-SparseLA.html#svSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svSize",
          "normalized": "SparseVec a-\u003eInt",
          "package": "dvda",
          "partial": "Size",
          "signature": "SparseVec a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svSub",
          "package": "dvda",
          "signature": "SparseVec a -\u003e SparseVec a -\u003e Maybe (SparseVec a)",
          "source": "src/Dvda-SparseLA.html#svSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svSub",
          "normalized": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "package": "dvda",
          "partial": "Sub",
          "signature": "SparseVec a-\u003eSparseVec a-\u003eMaybe(SparseVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.SparseLA",
          "name": "svZeros",
          "package": "dvda",
          "signature": "Int -\u003e SparseVec a",
          "source": "src/Dvda-SparseLA.html#svZeros",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dvda SparseLA",
          "module": "Dvda.SparseLA",
          "name": "svZeros",
          "normalized": "Int-\u003eSparseVec a",
          "package": "dvda",
          "partial": "Zeros",
          "signature": "Int-\u003eSparseVec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-SparseLA.html#v:svZeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda.Vis",
          "name": "Vis",
          "package": "dvda",
          "source": "src/Dvda-Vis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Dvda Vis",
          "module": "Dvda.Vis",
          "name": "Vis",
          "package": "dvda",
          "partial": "Vis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Vis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a nice Dot graph\n\u003c/p\u003e",
          "module": "[\"Dvda.Vis\",\"Dvda\"]",
          "name": "previewGraph",
          "package": "dvda",
          "signature": "FunGraph a -\u003e IO ()",
          "source": "src/Dvda-Vis.html#previewGraph",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Vis.html#v:previewGraph\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:previewGraph\"]"
        },
        "index": {
          "description": "show nice Dot graph",
          "hierarchy": "Dvda Vis",
          "module": "Dvda.Vis",
          "name": "previewGraph",
          "normalized": "FunGraph a-\u003eIO()",
          "package": "dvda",
          "partial": "Graph",
          "signature": "FunGraph a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Vis.html#v:previewGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a nice Dot graph with labeled edges\n\u003c/p\u003e",
          "module": "[\"Dvda.Vis\",\"Dvda\"]",
          "name": "previewGraph'",
          "package": "dvda",
          "signature": "FunGraph a -\u003e IO ()",
          "source": "src/Dvda-Vis.html#previewGraph%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dvda/docs/Dvda-Vis.html#v:previewGraph-39-\",\"http://hackage.haskell.org/package/dvda/docs/Dvda.html#v:previewGraph-39-\"]"
        },
        "index": {
          "description": "show nice Dot graph with labeled edges",
          "hierarchy": "Dvda Vis",
          "module": "Dvda.Vis",
          "name": "previewGraph'",
          "normalized": "FunGraph a-\u003eIO()",
          "package": "dvda",
          "partial": "Graph'",
          "signature": "FunGraph a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda-Vis.html#v:previewGraph-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the top level module which exports the API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Dvda",
          "name": "Dvda",
          "package": "dvda",
          "source": "src/Dvda.html",
          "type": "module"
        },
        "index": {
          "description": "This is the top level module which exports the API",
          "hierarchy": "Dvda",
          "module": "Dvda",
          "name": "Dvda",
          "package": "dvda",
          "partial": "Dvda",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda",
          "name": ":*",
          "package": "dvda",
          "source": "src/Dvda-FunGraph.html#%3A%2A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda",
          "module": "Dvda",
          "name": ":*",
          "package": "dvda",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda.html#t::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dvda",
          "name": "Expr",
          "package": "dvda",
          "source": "src/Dvda-Expr.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Dvda",
          "module": "Dvda",
          "name": "Expr",
          "package": "dvda",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dvda/docs/Dvda.html#t:Expr"
      }
    }
  ]
]