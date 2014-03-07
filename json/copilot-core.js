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
        "word": "copilot-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerates a C99 header from a copilot-specification. The functionality\n provided by the header must be implemented by back-ends targetting C99.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Compile.Header.C99",
          "name": "C99",
          "package": "copilot-core",
          "source": "src/Copilot-Compile-Header-C99.html",
          "type": "module"
        },
        "index": {
          "description": "Generates C99 header from copilot-specification The functionality provided by the header must be implemented by back-ends targetting C99",
          "hierarchy": "Copilot Compile Header C99",
          "module": "Copilot.Compile.Header.C99",
          "name": "C99",
          "package": "copilot-core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Compile-Header-C99.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Compile.Header.C99",
          "name": "c99HeaderName",
          "package": "copilot-core",
          "signature": "Maybe String -\u003e String",
          "source": "src/Copilot-Compile-Header-C99.html#c99HeaderName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Compile Header C99",
          "module": "Copilot.Compile.Header.C99",
          "name": "c99HeaderName",
          "normalized": "Maybe String-\u003eString",
          "package": "copilot-core",
          "partial": "Header Name",
          "signature": "Maybe String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Compile-Header-C99.html#v:c99HeaderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Compile.Header.C99",
          "name": "genC99Header",
          "package": "copilot-core",
          "signature": "Maybe String -\u003e FilePath -\u003e Spec -\u003e IO ()",
          "source": "src/Copilot-Compile-Header-C99.html#genC99Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Compile Header C99",
          "module": "Copilot.Compile.Header.C99",
          "name": "genC99Header",
          "normalized": "Maybe String-\u003eFilePath-\u003eSpec-\u003eIO()",
          "package": "copilot-core",
          "partial": "Header",
          "signature": "Maybe String-\u003eFilePath-\u003eSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Compile-Header-C99.html#v:genC99Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Error",
          "name": "Error",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Error",
          "module": "Copilot.Core.Error",
          "name": "Error",
          "package": "copilot-core",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Error",
          "name": "badUsage",
          "package": "copilot-core",
          "signature": "String -\u003e a",
          "source": "src/Copilot-Core-Error.html#badUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Error",
          "module": "Copilot.Core.Error",
          "name": "badUsage",
          "normalized": "String-\u003ea",
          "package": "copilot-core",
          "partial": "Usage",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Error.html#v:badUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Error",
          "name": "impossible",
          "package": "copilot-core",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Copilot-Core-Error.html#impossible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Error",
          "module": "Copilot.Core.Error",
          "name": "impossible",
          "normalized": "String-\u003eString-\u003ea",
          "package": "copilot-core",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Error.html#v:impossible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Expr",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Expr",
          "package": "copilot-core",
          "partial": "Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn index for the drop operator.\n\u003c/p\u003e",
          "module": "Copilot.Core.Expr",
          "name": "DropIdx",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#DropIdx",
          "type": "type"
        },
        "index": {
          "description": "An index for the drop operator",
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "DropIdx",
          "package": "copilot-core",
          "partial": "Drop Idx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:DropIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Expr",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Expr",
          "package": "copilot-core",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream identifier.\n\u003c/p\u003e",
          "module": "Copilot.Core.Expr",
          "name": "Id",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#Id",
          "type": "type"
        },
        "index": {
          "description": "stream identifier",
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Id",
          "package": "copilot-core",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name of a trigger, an external variable, or an external function.\n\u003c/p\u003e",
          "module": "Copilot.Core.Expr",
          "name": "Name",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#Name",
          "type": "type"
        },
        "index": {
          "description": "name of trigger an external variable or an external function",
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Name",
          "package": "copilot-core",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique tag for external arrays/function calls.\n\u003c/p\u003e",
          "module": "Copilot.Core.Expr",
          "name": "Tag",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#Tag",
          "type": "type"
        },
        "index": {
          "description": "unique tag for external arrays function calls",
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Tag",
          "package": "copilot-core",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA untyped expression (no phantom type).\n\u003c/p\u003e",
          "module": "Copilot.Core.Expr",
          "name": "UExpr",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Expr.html#UExpr",
          "type": "data"
        },
        "index": {
          "description": "untyped expression no phantom type",
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "UExpr",
          "package": "copilot-core",
          "partial": "UExpr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#t:UExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Const",
          "package": "copilot-core",
          "signature": "Type a -\u003e a -\u003e Expr a",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Const",
          "normalized": "Type a-\u003ea-\u003eExpr a",
          "package": "copilot-core",
          "partial": "Const",
          "signature": "Type a-\u003ea-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Drop",
          "package": "copilot-core",
          "signature": "Type a -\u003e DropIdx -\u003e Id -\u003e Expr a",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Drop",
          "normalized": "Type a-\u003eDropIdx-\u003eId-\u003eExpr a",
          "package": "copilot-core",
          "partial": "Drop",
          "signature": "Type a-\u003eDropIdx-\u003eId-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "ExternArray",
          "package": "copilot-core",
          "signature": "Type a -\u003e Type b -\u003e Name -\u003e Int -\u003e Expr a -\u003e Maybe [[b]] -\u003e Maybe Tag -\u003e Expr b",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "ExternArray",
          "normalized": "Type a-\u003eType b-\u003eName-\u003eInt-\u003eExpr a-\u003eMaybe[[b]]-\u003eMaybe Tag-\u003eExpr b",
          "package": "copilot-core",
          "partial": "Extern Array",
          "signature": "Type a-\u003eType b-\u003eName-\u003eInt-\u003eExpr a-\u003eMaybe[[b]]-\u003eMaybe Tag-\u003eExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:ExternArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "ExternFun",
          "package": "copilot-core",
          "signature": "Type a -\u003e Name -\u003e [UExpr] -\u003e Maybe (Expr a) -\u003e Maybe Tag -\u003e Expr a",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "ExternFun",
          "normalized": "Type a-\u003eName-\u003e[UExpr]-\u003eMaybe(Expr a)-\u003eMaybe Tag-\u003eExpr a",
          "package": "copilot-core",
          "partial": "Extern Fun",
          "signature": "Type a-\u003eName-\u003e[UExpr]-\u003eMaybe(Expr a)-\u003eMaybe Tag-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:ExternFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "ExternVar",
          "package": "copilot-core",
          "signature": "Type a -\u003e Name -\u003e Maybe [a] -\u003e Expr a",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "ExternVar",
          "normalized": "Type a-\u003eName-\u003eMaybe[a]-\u003eExpr a",
          "package": "copilot-core",
          "partial": "Extern Var",
          "signature": "Type a-\u003eName-\u003eMaybe[a]-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:ExternVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Local",
          "package": "copilot-core",
          "signature": "Type a -\u003e Type b -\u003e Name -\u003e Expr a -\u003e Expr b -\u003e Expr b",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Local",
          "normalized": "Type a-\u003eType b-\u003eName-\u003eExpr a-\u003eExpr b-\u003eExpr b",
          "package": "copilot-core",
          "partial": "Local",
          "signature": "Type a-\u003eType b-\u003eName-\u003eExpr a-\u003eExpr b-\u003eExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Op1",
          "package": "copilot-core",
          "signature": "Op1 a b -\u003e Expr a -\u003e Expr b",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Op1",
          "normalized": "Op a b-\u003eExpr a-\u003eExpr b",
          "package": "copilot-core",
          "partial": "Op",
          "signature": "Op a b-\u003eExpr a-\u003eExpr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Op1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Op2",
          "package": "copilot-core",
          "signature": "Op2 a b c -\u003e Expr a -\u003e Expr b -\u003e Expr c",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Op2",
          "normalized": "Op a b c-\u003eExpr a-\u003eExpr b-\u003eExpr c",
          "package": "copilot-core",
          "partial": "Op",
          "signature": "Op a b c-\u003eExpr a-\u003eExpr b-\u003eExpr c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Op2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Op3",
          "package": "copilot-core",
          "signature": "Op3 a b c d -\u003e Expr a -\u003e Expr b -\u003e Expr c -\u003e Expr d",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Op3",
          "normalized": "Op a b c d-\u003eExpr a-\u003eExpr b-\u003eExpr c-\u003eExpr d",
          "package": "copilot-core",
          "partial": "Op",
          "signature": "Op a b c d-\u003eExpr a-\u003eExpr b-\u003eExpr c-\u003eExpr d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Op3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "UExpr",
          "package": "copilot-core",
          "signature": "forall a . UExpr",
          "source": "src/Copilot-Core-Expr.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "UExpr",
          "package": "copilot-core",
          "partial": "UExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:UExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "Var",
          "package": "copilot-core",
          "signature": "Type a -\u003e Name -\u003e Expr a",
          "source": "src/Copilot-Core-Expr.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "Var",
          "normalized": "Type a-\u003eName-\u003eExpr a",
          "package": "copilot-core",
          "partial": "Var",
          "signature": "Type a-\u003eName-\u003eExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "uExprExpr",
          "package": "copilot-core",
          "signature": "Expr a",
          "source": "src/Copilot-Core-Expr.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "uExprExpr",
          "package": "copilot-core",
          "partial": "Expr Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:uExprExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Expr",
          "name": "uExprType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Expr.html#UExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Expr",
          "module": "Copilot.Core.Expr",
          "name": "uExprType",
          "package": "copilot-core",
          "partial": "Expr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Expr.html#v:uExprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "External",
          "package": "copilot-core",
          "source": "src/Copilot-Core-External.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "External",
          "package": "copilot-core",
          "partial": "External",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtArray",
          "package": "copilot-core",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtArray",
          "package": "copilot-core",
          "partial": "Ext Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#t:ExtArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtFun",
          "package": "copilot-core",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtFun",
          "package": "copilot-core",
          "partial": "Ext Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#t:ExtFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtVar",
          "package": "copilot-core",
          "source": "src/Copilot-Core-External.html#ExtVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtVar",
          "package": "copilot-core",
          "partial": "Ext Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#t:ExtVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtArray",
          "package": "copilot-core",
          "signature": "ExtArray",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtArray",
          "package": "copilot-core",
          "partial": "Ext Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:ExtArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtFun",
          "package": "copilot-core",
          "signature": "forall a . ExtFun",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtFun",
          "package": "copilot-core",
          "partial": "Ext Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:ExtFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "ExtVar",
          "package": "copilot-core",
          "signature": "ExtVar",
          "source": "src/Copilot-Core-External.html#ExtVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "ExtVar",
          "package": "copilot-core",
          "partial": "Ext Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:ExtVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrayElemType",
          "package": "copilot-core",
          "signature": "Type b",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrayElemType",
          "package": "copilot-core",
          "partial": "Array Elem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrayElemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrayIdx",
          "package": "copilot-core",
          "signature": "Expr a",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrayIdx",
          "package": "copilot-core",
          "partial": "Array Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrayIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrayIdxType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrayIdxType",
          "package": "copilot-core",
          "partial": "Array Idx Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrayIdxType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrayName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrayName",
          "package": "copilot-core",
          "partial": "Array Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArraySize",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArraySize",
          "package": "copilot-core",
          "partial": "Array Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArraySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrayTag",
          "package": "copilot-core",
          "signature": "Maybe Tag",
          "source": "src/Copilot-Core-External.html#ExtArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrayTag",
          "package": "copilot-core",
          "partial": "Array Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrayTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externArrays",
          "package": "copilot-core",
          "signature": "Spec -\u003e [ExtArray]",
          "source": "src/Copilot-Core-External.html#externArrays",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externArrays",
          "normalized": "Spec-\u003e[ExtArray]",
          "package": "copilot-core",
          "partial": "Arrays",
          "signature": "Spec-\u003e[ExtArray]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externArrays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externFunArgs",
          "package": "copilot-core",
          "signature": "[UExpr]",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externFunArgs",
          "normalized": "[UExpr]",
          "package": "copilot-core",
          "partial": "Fun Args",
          "signature": "[UExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externFunArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externFunName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externFunName",
          "package": "copilot-core",
          "partial": "Fun Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externFunName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externFunTag",
          "package": "copilot-core",
          "signature": "Maybe Tag",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externFunTag",
          "package": "copilot-core",
          "partial": "Fun Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externFunTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externFunType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-External.html#ExtFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externFunType",
          "package": "copilot-core",
          "partial": "Fun Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externFunType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externFuns",
          "package": "copilot-core",
          "signature": "Spec -\u003e [ExtFun]",
          "source": "src/Copilot-Core-External.html#externFuns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externFuns",
          "normalized": "Spec-\u003e[ExtFun]",
          "package": "copilot-core",
          "partial": "Funs",
          "signature": "Spec-\u003e[ExtFun]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externFuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externVarName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-External.html#ExtVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externVarName",
          "package": "copilot-core",
          "partial": "Var Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externVarType",
          "package": "copilot-core",
          "signature": "UType",
          "source": "src/Copilot-Core-External.html#ExtVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externVarType",
          "package": "copilot-core",
          "partial": "Var Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externVarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.External",
          "name": "externVars",
          "package": "copilot-core",
          "signature": "Spec -\u003e [ExtVar]",
          "source": "src/Copilot-Core-External.html#externVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core External",
          "module": "Copilot.Core.External",
          "name": "externVars",
          "normalized": "Spec-\u003e[ExtVar]",
          "package": "copilot-core",
          "partial": "Vars",
          "signature": "Spec-\u003e[ExtVar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-External.html#v:externVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tagless interpreter for Copilot specifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Eval",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "tagless interpreter for Copilot specifications",
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Eval",
          "package": "copilot-core",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Env",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret-Eval.html#Env",
          "type": "type"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Env",
          "package": "copilot-core",
          "partial": "Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "ExecTrace",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret-Eval.html#ExecTrace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "ExecTrace",
          "package": "copilot-core",
          "partial": "Exec Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#t:ExecTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Output",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret-Eval.html#Output",
          "type": "type"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "Output",
          "package": "copilot-core",
          "partial": "Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "ExecTrace",
          "package": "copilot-core",
          "signature": "ExecTrace",
          "source": "src/Copilot-Core-Interpret-Eval.html#ExecTrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "ExecTrace",
          "package": "copilot-core",
          "partial": "Exec Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#v:ExecTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "eval",
          "package": "copilot-core",
          "signature": "ShowType -\u003e Int -\u003e Spec -\u003e ExecTrace",
          "source": "src/Copilot-Core-Interpret-Eval.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "eval",
          "normalized": "ShowType-\u003eInt-\u003eSpec-\u003eExecTrace",
          "package": "copilot-core",
          "signature": "ShowType-\u003eInt-\u003eSpec-\u003eExecTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "interpObservers",
          "package": "copilot-core",
          "signature": "Map String [Output]",
          "source": "src/Copilot-Core-Interpret-Eval.html#ExecTrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "interpObservers",
          "normalized": "Map String[Output]",
          "package": "copilot-core",
          "partial": "Observers",
          "signature": "Map String[Output]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#v:interpObservers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Eval",
          "name": "interpTriggers",
          "package": "copilot-core",
          "signature": "Map String [Maybe [Output]]",
          "source": "src/Copilot-Core-Interpret-Eval.html#ExecTrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Eval",
          "module": "Copilot.Core.Interpret.Eval",
          "name": "interpTriggers",
          "normalized": "Map String[Maybe[Output]]",
          "package": "copilot-core",
          "partial": "Triggers",
          "signature": "Map String[Maybe[Output]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Eval.html#v:interpTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn tagless interpreter for Copilot specifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Interpret.Render",
          "name": "Render",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret-Render.html",
          "type": "module"
        },
        "index": {
          "description": "An tagless interpreter for Copilot specifications",
          "hierarchy": "Copilot Core Interpret Render",
          "module": "Copilot.Core.Interpret.Render",
          "name": "Render",
          "package": "copilot-core",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Render",
          "name": "renderAsCSV",
          "package": "copilot-core",
          "signature": "ExecTrace -\u003e String",
          "source": "src/Copilot-Core-Interpret-Render.html#renderAsCSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Render",
          "module": "Copilot.Core.Interpret.Render",
          "name": "renderAsCSV",
          "normalized": "ExecTrace-\u003eString",
          "package": "copilot-core",
          "partial": "As CSV",
          "signature": "ExecTrace-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Render.html#v:renderAsCSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret.Render",
          "name": "renderAsTable",
          "package": "copilot-core",
          "signature": "ExecTrace -\u003e String",
          "source": "src/Copilot-Core-Interpret-Render.html#renderAsTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret Render",
          "module": "Copilot.Core.Interpret.Render",
          "name": "renderAsTable",
          "normalized": "ExecTrace-\u003eString",
          "package": "copilot-core",
          "partial": "As Table",
          "signature": "ExecTrace-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret-Render.html#v:renderAsTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interpreter for Copilot specifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Interpret",
          "name": "Interpret",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret.html",
          "type": "module"
        },
        "index": {
          "description": "An interpreter for Copilot specifications",
          "hierarchy": "Copilot Core Interpret",
          "module": "Copilot.Core.Interpret",
          "name": "Interpret",
          "package": "copilot-core",
          "partial": "Interpret",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret",
          "name": "Format",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Interpret.html#Format",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret",
          "module": "Copilot.Core.Interpret",
          "name": "Format",
          "package": "copilot-core",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret",
          "name": "CSV",
          "package": "copilot-core",
          "signature": "CSV",
          "source": "src/Copilot-Core-Interpret.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret",
          "module": "Copilot.Core.Interpret",
          "name": "CSV",
          "package": "copilot-core",
          "partial": "CSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret.html#v:CSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Interpret",
          "name": "Table",
          "package": "copilot-core",
          "signature": "Table",
          "source": "src/Copilot-Core-Interpret.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Interpret",
          "module": "Copilot.Core.Interpret",
          "name": "Table",
          "package": "copilot-core",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterprets a Copilot specification.\n\u003c/p\u003e",
          "module": "Copilot.Core.Interpret",
          "name": "interpret",
          "package": "copilot-core",
          "signature": "Format -\u003e Int -\u003e Spec -\u003e String",
          "source": "src/Copilot-Core-Interpret.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interprets Copilot specification",
          "hierarchy": "Copilot Core Interpret",
          "module": "Copilot.Core.Interpret",
          "name": "interpret",
          "normalized": "Format-\u003eInt-\u003eSpec-\u003eString",
          "package": "copilot-core",
          "signature": "Format-\u003eInt-\u003eSpec-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Interpret.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLet expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Locals",
          "name": "Locals",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Locals.html",
          "type": "module"
        },
        "index": {
          "description": "Let expressions",
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "Locals",
          "package": "copilot-core",
          "partial": "Locals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Locals",
          "name": "Loc",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Locals.html#Loc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "Loc",
          "package": "copilot-core",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Locals",
          "name": "Loc",
          "package": "copilot-core",
          "signature": "forall a . Loc",
          "source": "src/Copilot-Core-Locals.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "Loc",
          "package": "copilot-core",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Locals",
          "name": "localName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-Locals.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "localName",
          "package": "copilot-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#v:localName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Locals",
          "name": "localType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Locals.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "localType",
          "package": "copilot-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#v:localType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Locals",
          "name": "locals",
          "package": "copilot-core",
          "signature": "Spec -\u003e [Loc]",
          "source": "src/Copilot-Core-Locals.html#locals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Locals",
          "module": "Copilot.Core.Locals",
          "name": "locals",
          "normalized": "Spec-\u003e[Loc]",
          "package": "copilot-core",
          "signature": "Spec-\u003e[Loc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Locals.html#v:locals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSets a unique tags for each external array/function call.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.MakeTags",
          "name": "MakeTags",
          "package": "copilot-core",
          "source": "src/Copilot-Core-MakeTags.html",
          "type": "module"
        },
        "index": {
          "description": "Sets unique tags for each external array function call",
          "hierarchy": "Copilot Core MakeTags",
          "module": "Copilot.Core.MakeTags",
          "name": "MakeTags",
          "package": "copilot-core",
          "partial": "Make Tags",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-MakeTags.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.MakeTags",
          "name": "makeTags",
          "package": "copilot-core",
          "signature": "Spec -\u003e Spec",
          "source": "src/Copilot-Core-MakeTags.html#makeTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core MakeTags",
          "module": "Copilot.Core.MakeTags",
          "name": "makeTags",
          "normalized": "Spec-\u003eSpec",
          "package": "copilot-core",
          "partial": "Tags",
          "signature": "Spec-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-MakeTags.html#v:makeTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Operators",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Operators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Operators",
          "package": "copilot-core",
          "partial": "Operators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Op1",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Op1",
          "package": "copilot-core",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#t:Op1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operators.\n\u003c/p\u003e",
          "module": "Copilot.Core.Operators",
          "name": "Op2",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "data"
        },
        "index": {
          "description": "Binary operators",
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Op2",
          "package": "copilot-core",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#t:Op2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTernary operators.\n\u003c/p\u003e",
          "module": "Copilot.Core.Operators",
          "name": "Op3",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Operators.html#Op3",
          "type": "data"
        },
        "index": {
          "description": "Ternary operators",
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Op3",
          "package": "copilot-core",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#t:Op3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Abs",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Abs",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Abs",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Acos",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Acos",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Acos",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Acosh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Acosh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Acosh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Add",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Add",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Add",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "And",
          "package": "copilot-core",
          "signature": "Op2 Bool Bool Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "And",
          "package": "copilot-core",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Asin",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Asin",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Asin",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Asinh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Asinh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Asinh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Atan",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Atan",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Atan",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Atanh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Atanh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Atanh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwAnd",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwAnd",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Bw And",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwNot",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwNot",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Bw Not",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwOr",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwOr",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Bw Or",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwShiftL",
          "package": "copilot-core",
          "signature": "Type a -\u003e Type b -\u003e Op2 a b a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwShiftL",
          "normalized": "Type a-\u003eType b-\u003eOp a b a",
          "package": "copilot-core",
          "partial": "Bw Shift",
          "signature": "Type a-\u003eType b-\u003eOp a b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwShiftR",
          "package": "copilot-core",
          "signature": "Type a -\u003e Type b -\u003e Op2 a b a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwShiftR",
          "normalized": "Type a-\u003eType b-\u003eOp a b a",
          "package": "copilot-core",
          "partial": "Bw Shift",
          "signature": "Type a-\u003eType b-\u003eOp a b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "BwXor",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "BwXor",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Bw Xor",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:BwXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Cast",
          "package": "copilot-core",
          "signature": "Type a -\u003e Type b -\u003e Op1 a b",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Cast",
          "normalized": "Type a-\u003eType b-\u003eOp a b",
          "package": "copilot-core",
          "partial": "Cast",
          "signature": "Type a-\u003eType b-\u003eOp a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Cos",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Cos",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Cos",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Cosh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Cosh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Cosh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Div",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Div",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Div",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Eq",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Eq",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Eq",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Exp",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Exp",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Exp",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Fdiv",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Fdiv",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Fdiv",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Fdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Ge",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Ge",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Ge",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Gt",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Gt",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Gt",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Le",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Le",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Le",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Log",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Log",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Log",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Logb",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Logb",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Logb",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Logb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Lt",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Lt",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Lt",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Mod",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Mod",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Mod",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Mul",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Mul",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Mul",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Mux",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op3 Bool a a a",
          "source": "src/Copilot-Core-Operators.html#Op3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Mux",
          "normalized": "Type a-\u003eOp Bool a a a",
          "package": "copilot-core",
          "partial": "Mux",
          "signature": "Type a-\u003eOp Bool a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Mux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Ne",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Ne",
          "normalized": "Type a-\u003eOp a a Bool",
          "package": "copilot-core",
          "partial": "Ne",
          "signature": "Type a-\u003eOp a a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Not",
          "package": "copilot-core",
          "signature": "Op1 Bool Bool",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Not",
          "package": "copilot-core",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Or",
          "package": "copilot-core",
          "signature": "Op2 Bool Bool Bool",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Or",
          "package": "copilot-core",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Pow",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Pow",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Pow",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Recip",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Recip",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Recip",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Sign",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Sign",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Sign",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Sin",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Sin",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Sin",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Sinh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Sinh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Sinh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Sqrt",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Sqrt",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Sqrt",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Sub",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op2 a a a",
          "source": "src/Copilot-Core-Operators.html#Op2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Sub",
          "normalized": "Type a-\u003eOp a a a",
          "package": "copilot-core",
          "partial": "Sub",
          "signature": "Type a-\u003eOp a a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Tan",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Tan",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Tan",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Operators",
          "name": "Tanh",
          "package": "copilot-core",
          "signature": "Type a -\u003e Op1 a a",
          "source": "src/Copilot-Core-Operators.html#Op1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Operators",
          "module": "Copilot.Core.Operators",
          "name": "Tanh",
          "normalized": "Type a-\u003eOp a a",
          "package": "copilot-core",
          "partial": "Tanh",
          "signature": "Type a-\u003eOp a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Operators.html#v:Tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pretty printer for Copilot specifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.PrettyPrint",
          "name": "PrettyPrint",
          "package": "copilot-core",
          "source": "src/Copilot-Core-PrettyPrint.html",
          "type": "module"
        },
        "index": {
          "description": "pretty printer for Copilot specifications",
          "hierarchy": "Copilot Core PrettyPrint",
          "module": "Copilot.Core.PrettyPrint",
          "name": "PrettyPrint",
          "package": "copilot-core",
          "partial": "Pretty Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-PrettyPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a Copilot specification.\n\u003c/p\u003e",
          "module": "Copilot.Core.PrettyPrint",
          "name": "prettyPrint",
          "package": "copilot-core",
          "signature": "Spec -\u003e String",
          "source": "src/Copilot-Core-PrettyPrint.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints Copilot specification",
          "hierarchy": "Copilot Core PrettyPrint",
          "module": "Copilot.Core.PrettyPrint",
          "name": "prettyPrint",
          "normalized": "Spec-\u003eString",
          "package": "copilot-core",
          "partial": "Print",
          "signature": "Spec-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-PrettyPrint.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "Gen",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random-Gen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "Gen",
          "package": "copilot-core",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunGen\u003c/code\u003e takes a \u003ccode\u003eGen a\u003c/code\u003e, a max depth of the expression, the weights, and\n the standard random generator.\n\u003c/p\u003e",
          "module": "Copilot.Core.Random.Gen",
          "name": "Gen",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random-Gen.html#Gen",
          "type": "data"
        },
        "index": {
          "description": "runGen takes Gen max depth of the expression the weights and the standard random generator",
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "Gen",
          "package": "copilot-core",
          "partial": "Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#t:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "choose",
          "package": "copilot-core",
          "signature": "(a, a) -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#choose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "choose",
          "normalized": "(a,a)-\u003eGen a",
          "package": "copilot-core",
          "signature": "(a,a)-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "depth",
          "package": "copilot-core",
          "signature": "Gen Depth",
          "source": "src/Copilot-Core-Random-Gen.html#depth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "depth",
          "package": "copilot-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "elements",
          "package": "copilot-core",
          "signature": "[a] -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#elements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "elements",
          "normalized": "[a]-\u003eGen a",
          "package": "copilot-core",
          "signature": "[a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of pairs (weight, Gen), and choose the Gen based on the\n weights.  To get the frequency of choosing a Gen, sum up all the weights, and\n choose c between 1 and the total.  Now recurse down the list, choosing an\n item only when c \u003c= weight.  If not, subtract the current weight from c.\n\u003c/p\u003e",
          "module": "Copilot.Core.Random.Gen",
          "name": "freq",
          "package": "copilot-core",
          "signature": "[(Int, Gen a)] -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#freq",
          "type": "function"
        },
        "index": {
          "description": "Takes list of pairs weight Gen and choose the Gen based on the weights To get the frequency of choosing Gen sum up all the weights and choose between and the total Now recurse down the list choosing an item only when weight If not subtract the current weight from",
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "freq",
          "normalized": "[(Int,Gen a)]-\u003eGen a",
          "package": "copilot-core",
          "signature": "[(Int,Gen a)]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "incDepth",
          "package": "copilot-core",
          "signature": "Gen a -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#incDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "incDepth",
          "normalized": "Gen a-\u003eGen a",
          "package": "copilot-core",
          "partial": "Depth",
          "signature": "Gen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:incDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "oneOf",
          "package": "copilot-core",
          "signature": "[Gen a] -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "oneOf",
          "normalized": "[Gen a]-\u003eGen a",
          "package": "copilot-core",
          "partial": "Of",
          "signature": "[Gen a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "randomFromType",
          "package": "copilot-core",
          "signature": "Type a -\u003e Gen a",
          "source": "src/Copilot-Core-Random-Gen.html#randomFromType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "randomFromType",
          "normalized": "Type a-\u003eGen a",
          "package": "copilot-core",
          "partial": "From Type",
          "signature": "Type a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:randomFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "randomReplicate",
          "package": "copilot-core",
          "signature": "Int -\u003e Type a -\u003e Gen [a]",
          "source": "src/Copilot-Core-Random-Gen.html#randomReplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "randomReplicate",
          "normalized": "Int-\u003eType a-\u003eGen[a]",
          "package": "copilot-core",
          "partial": "Replicate",
          "signature": "Int-\u003eType a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:randomReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "runGen",
          "package": "copilot-core",
          "signature": "Gen a -\u003e Depth -\u003e Weights -\u003e StdGen -\u003e a",
          "source": "src/Copilot-Core-Random-Gen.html#runGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "runGen",
          "normalized": "Gen a-\u003eDepth-\u003eWeights-\u003eStdGen-\u003ea",
          "package": "copilot-core",
          "partial": "Gen",
          "signature": "Gen a-\u003eDepth-\u003eWeights-\u003eStdGen-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:runGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Gen",
          "name": "weights",
          "package": "copilot-core",
          "signature": "Gen Weights",
          "source": "src/Copilot-Core-Random-Gen.html#weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Gen",
          "module": "Copilot.Core.Random.Gen",
          "name": "weights",
          "package": "copilot-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Gen.html#v:weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random-Weights.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "partial": "Weights",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "Depth",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random-Weights.html#Depth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "Depth",
          "package": "copilot-core",
          "partial": "Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#t:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "partial": "Weights",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#t:Weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "signature": "Weights",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "Weights",
          "package": "copilot-core",
          "partial": "Weights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:Weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "boolFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "boolFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:boolFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "constFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "constFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:constFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "divModFreq",
          "package": "copilot-core",
          "signature": "Bool",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "divModFreq",
          "package": "copilot-core",
          "partial": "Mod Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:divModFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "doubleFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "doubleFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:doubleFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "drop0Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "drop0Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:drop0Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "dropFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "dropFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:dropFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "extVarFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "extVarFreq",
          "package": "copilot-core",
          "partial": "Var Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:extVarFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "externFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "externFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:externFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "floatFreq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "floatFreq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:floatFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "int16Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "int16Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:int16Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "int32Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "int32Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:int32Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "int64Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "int64Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:int64Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "int8Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "int8Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:int8Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxBuffSize",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxBuffSize",
          "package": "copilot-core",
          "partial": "Buff Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxBuffSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxExprDepth",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxExprDepth",
          "package": "copilot-core",
          "partial": "Expr Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxExprDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxExtVars",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxExtVars",
          "package": "copilot-core",
          "partial": "Ext Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxExtVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxObservers",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxObservers",
          "package": "copilot-core",
          "partial": "Observers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxObservers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxTrigArgs",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxTrigArgs",
          "package": "copilot-core",
          "partial": "Trig Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxTrigArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "maxTriggers",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "maxTriggers",
          "package": "copilot-core",
          "partial": "Triggers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:maxTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "numStreams",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "numStreams",
          "package": "copilot-core",
          "partial": "Streams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:numStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "op1Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "op1Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:op1Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "op2Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "op2Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:op2Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "op3Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "op3Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:op3Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "simpleWeights",
          "package": "copilot-core",
          "signature": "Weights",
          "source": "src/Copilot-Core-Random-Weights.html#simpleWeights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "simpleWeights",
          "package": "copilot-core",
          "partial": "Weights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:simpleWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "word16Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "word16Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:word16Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "word32Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "word32Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:word32Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "word64Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "word64Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:word64Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random.Weights",
          "name": "word8Freq",
          "package": "copilot-core",
          "signature": "Int",
          "source": "src/Copilot-Core-Random-Weights.html#Weights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random Weights",
          "module": "Copilot.Core.Random.Weights",
          "name": "word8Freq",
          "package": "copilot-core",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random-Weights.html#v:word8Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom spec generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Random",
          "name": "Random",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Random spec generator",
          "hierarchy": "Copilot Core Random",
          "module": "Copilot.Core.Random",
          "name": "Random",
          "package": "copilot-core",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Random",
          "name": "randomSpec",
          "package": "copilot-core",
          "signature": "Int -\u003e Weights -\u003e StdGen -\u003e Spec",
          "source": "src/Copilot-Core-Random.html#randomSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Random",
          "module": "Copilot.Core.Random",
          "name": "randomSpec",
          "normalized": "Int-\u003eWeights-\u003eStdGen-\u003eSpec",
          "package": "copilot-core",
          "partial": "Spec",
          "signature": "Int-\u003eWeights-\u003eStdGen-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Random.html#v:randomSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Spec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "partial": "Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn observer.\n\u003c/p\u003e",
          "module": "Copilot.Core.Spec",
          "name": "Observer",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Spec.html#Observer",
          "type": "data"
        },
        "index": {
          "description": "An observer",
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Observer",
          "package": "copilot-core",
          "partial": "Observer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#t:Observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Copilot specification consists of a list of variables bound to anonymous\n streams, a lost of anomymous streams, a list of observers, and a list of\n triggers.\n\u003c/p\u003e",
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Spec.html#Spec",
          "type": "data"
        },
        "index": {
          "description": "Copilot specification consists of list of variables bound to anonymous streams lost of anomymous streams list of observers and list of triggers",
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "partial": "Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream.\n\u003c/p\u003e",
          "module": "Copilot.Core.Spec",
          "name": "Stream",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "stream",
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Stream",
          "package": "copilot-core",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trigger.\n\u003c/p\u003e",
          "module": "Copilot.Core.Spec",
          "name": "Trigger",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Spec.html#Trigger",
          "type": "data"
        },
        "index": {
          "description": "trigger",
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Trigger",
          "package": "copilot-core",
          "partial": "Trigger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#t:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "Observer",
          "package": "copilot-core",
          "signature": "forall a . Observer",
          "source": "src/Copilot-Core-Spec.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Observer",
          "package": "copilot-core",
          "partial": "Observer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:Observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "signature": "Spec",
          "source": "src/Copilot-Core-Spec.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Spec",
          "package": "copilot-core",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "Stream",
          "package": "copilot-core",
          "signature": "Stream",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Stream",
          "package": "copilot-core",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "Trigger",
          "package": "copilot-core",
          "signature": "Trigger",
          "source": "src/Copilot-Core-Spec.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "Trigger",
          "package": "copilot-core",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "observerExpr",
          "package": "copilot-core",
          "signature": "Expr a",
          "source": "src/Copilot-Core-Spec.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "observerExpr",
          "package": "copilot-core",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:observerExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "observerExprType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Spec.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "observerExprType",
          "package": "copilot-core",
          "partial": "Expr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:observerExprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "observerName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-Spec.html#Observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "observerName",
          "package": "copilot-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:observerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "specObservers",
          "package": "copilot-core",
          "signature": "[Observer]",
          "source": "src/Copilot-Core-Spec.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "specObservers",
          "normalized": "[Observer]",
          "package": "copilot-core",
          "partial": "Observers",
          "signature": "[Observer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:specObservers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "specStreams",
          "package": "copilot-core",
          "signature": "[Stream]",
          "source": "src/Copilot-Core-Spec.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "specStreams",
          "normalized": "[Stream]",
          "package": "copilot-core",
          "partial": "Streams",
          "signature": "[Stream]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:specStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "specTriggers",
          "package": "copilot-core",
          "signature": "[Trigger]",
          "source": "src/Copilot-Core-Spec.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "specTriggers",
          "normalized": "[Trigger]",
          "package": "copilot-core",
          "partial": "Triggers",
          "signature": "[Trigger]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:specTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "streamBuffer",
          "package": "copilot-core",
          "signature": "[a]",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "streamBuffer",
          "normalized": "[a]",
          "package": "copilot-core",
          "partial": "Buffer",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:streamBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "streamExpr",
          "package": "copilot-core",
          "signature": "Expr a",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "streamExpr",
          "package": "copilot-core",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:streamExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "streamExprType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "streamExprType",
          "package": "copilot-core",
          "partial": "Expr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:streamExprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "streamId",
          "package": "copilot-core",
          "signature": "Id",
          "source": "src/Copilot-Core-Spec.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "streamId",
          "package": "copilot-core",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:streamId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "triggerArgs",
          "package": "copilot-core",
          "signature": "[UExpr]",
          "source": "src/Copilot-Core-Spec.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "triggerArgs",
          "normalized": "[UExpr]",
          "package": "copilot-core",
          "partial": "Args",
          "signature": "[UExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:triggerArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "triggerGuard",
          "package": "copilot-core",
          "signature": "Expr Bool",
          "source": "src/Copilot-Core-Spec.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "triggerGuard",
          "package": "copilot-core",
          "partial": "Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:triggerGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Spec",
          "name": "triggerName",
          "package": "copilot-core",
          "signature": "Name",
          "source": "src/Copilot-Core-Spec.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Spec",
          "module": "Copilot.Core.Spec",
          "name": "triggerName",
          "package": "copilot-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Spec.html#v:triggerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of dynamic types using \u003ca\u003eCopilot.Core.Type.Equality\u003c/a\u003e.\n The theory behind this technique is described the following paper:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Baars, Arthur I. and Swierstra, S. Doaitse,\n \"\u003cem\u003eTyping dynamic typing\u003c/em\u003e\",\n ACM SIGPLAN Notices vol. 37, p. 157-166, 2002\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "Dynamic",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of dynamic types using Copilot.Core.Type.Equality The theory behind this technique is described the following paper Baars Arthur and Swierstra Doaitse Typing dynamic typing ACM SIGPLAN Notices vol",
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "Dynamic",
          "package": "copilot-core",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "Dynamic",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Dynamic.html#Dynamic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "Dynamic",
          "package": "copilot-core",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "DynamicF",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Dynamic.html#DynamicF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "DynamicF",
          "package": "copilot-core",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#t:DynamicF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "DynamicF",
          "package": "copilot-core",
          "signature": "f a -\u003e t a -\u003e DynamicF f t",
          "source": "src/Copilot-Core-Type-Dynamic.html#DynamicF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "DynamicF",
          "normalized": "a b-\u003ec b-\u003eDynamicF a c",
          "package": "copilot-core",
          "partial": "Dynamic",
          "signature": "f a-\u003et a-\u003eDynamicF f t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#v:DynamicF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "fromDyn",
          "package": "copilot-core",
          "signature": "t a -\u003e Dynamic t -\u003e Maybe a",
          "source": "src/Copilot-Core-Type-Dynamic.html#fromDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "fromDyn",
          "normalized": "a b-\u003eDynamic a-\u003eMaybe b",
          "package": "copilot-core",
          "partial": "Dyn",
          "signature": "t a-\u003eDynamic t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#v:fromDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "fromDynF",
          "package": "copilot-core",
          "signature": "t a -\u003e DynamicF f t -\u003e Maybe (f a)",
          "source": "src/Copilot-Core-Type-Dynamic.html#fromDynF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "fromDynF",
          "normalized": "a b-\u003eDynamicF c a-\u003eMaybe(c b)",
          "package": "copilot-core",
          "partial": "Dyn",
          "signature": "t a-\u003eDynamicF f t-\u003eMaybe(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#v:fromDynF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "toDyn",
          "package": "copilot-core",
          "signature": "t a -\u003e a -\u003e Dynamic t",
          "source": "src/Copilot-Core-Type-Dynamic.html#toDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "toDyn",
          "normalized": "a b-\u003eb-\u003eDynamic a",
          "package": "copilot-core",
          "partial": "Dyn",
          "signature": "t a-\u003ea-\u003eDynamic t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#v:toDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Dynamic",
          "name": "toDynF",
          "package": "copilot-core",
          "signature": "t a -\u003e f a -\u003e DynamicF f t",
          "source": "src/Copilot-Core-Type-Dynamic.html#toDynF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Dynamic",
          "module": "Copilot.Core.Type.Dynamic",
          "name": "toDynF",
          "normalized": "a b-\u003ec b-\u003eDynamicF c a",
          "package": "copilot-core",
          "partial": "Dyn",
          "signature": "t a-\u003ef a-\u003eDynamicF f t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Dynamic.html#v:toDynF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "Eq",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Eq.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "Eq",
          "package": "copilot-core",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "EqWit",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Eq.html#EqWit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "EqWit",
          "package": "copilot-core",
          "partial": "Eq Wit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#t:EqWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "UVal",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Eq.html#UVal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "UVal",
          "package": "copilot-core",
          "partial": "UVal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#t:UVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "EqWit",
          "package": "copilot-core",
          "signature": "EqWit",
          "source": "src/Copilot-Core-Type-Eq.html#EqWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "EqWit",
          "package": "copilot-core",
          "partial": "Eq Wit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#v:EqWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "UVal",
          "package": "copilot-core",
          "signature": "forall a . UVal",
          "source": "src/Copilot-Core-Type-Eq.html#UVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "UVal",
          "package": "copilot-core",
          "partial": "UVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#v:UVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "eqWit",
          "package": "copilot-core",
          "signature": "Type a -\u003e EqWit a",
          "source": "src/Copilot-Core-Type-Eq.html#eqWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "eqWit",
          "normalized": "Type a-\u003eEqWit a",
          "package": "copilot-core",
          "partial": "Wit",
          "signature": "Type a-\u003eEqWit a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#v:eqWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "uType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Type-Eq.html#UVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "uType",
          "package": "copilot-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#v:uType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Eq",
          "name": "uVal",
          "package": "copilot-core",
          "signature": "a",
          "source": "src/Copilot-Core-Type-Eq.html#UVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Eq",
          "module": "Copilot.Core.Type.Eq",
          "name": "uVal",
          "package": "copilot-core",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Eq.html#v:uVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "Equality",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Equality.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "Equality",
          "package": "copilot-core",
          "partial": "Equality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "Equal",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Equality.html#Equal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "Equal",
          "package": "copilot-core",
          "partial": "Equal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#t:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "EqualType",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Equality.html#EqualType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "EqualType",
          "package": "copilot-core",
          "partial": "Equal Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#t:EqualType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "(=~=)",
          "package": "copilot-core",
          "signature": "t a -\u003e t b -\u003e Maybe (Equal a b)",
          "source": "src/Copilot-Core-Type-Equality.html#%3D~%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "(=~=) =~=",
          "normalized": "a b-\u003ea c-\u003eMaybe(Equal b c)",
          "package": "copilot-core",
          "signature": "t a-\u003et b-\u003eMaybe(Equal a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:-61--126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "Refl",
          "package": "copilot-core",
          "signature": "Equal a a",
          "source": "src/Copilot-Core-Type-Equality.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "Refl",
          "package": "copilot-core",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "coerce",
          "package": "copilot-core",
          "signature": "Equal a b -\u003e a -\u003e b",
          "source": "src/Copilot-Core-Type-Equality.html#coerce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "coerce",
          "normalized": "Equal a b-\u003ea-\u003eb",
          "package": "copilot-core",
          "signature": "Equal a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "cong",
          "package": "copilot-core",
          "signature": "Equal a b -\u003e Equal (f a) (f b)",
          "source": "src/Copilot-Core-Type-Equality.html#cong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "cong",
          "normalized": "Equal a b-\u003eEqual(c a)(c b)",
          "package": "copilot-core",
          "signature": "Equal a b-\u003eEqual(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:cong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "refl",
          "package": "copilot-core",
          "signature": "Equal a a",
          "source": "src/Copilot-Core-Type-Equality.html#refl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "refl",
          "package": "copilot-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "symm",
          "package": "copilot-core",
          "signature": "Equal a b -\u003e Equal b a",
          "source": "src/Copilot-Core-Type-Equality.html#symm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "symm",
          "normalized": "Equal a b-\u003eEqual b a",
          "package": "copilot-core",
          "signature": "Equal a b-\u003eEqual b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:symm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Equality",
          "name": "trans",
          "package": "copilot-core",
          "signature": "Equal a b -\u003e Equal b c -\u003e Equal a c",
          "source": "src/Copilot-Core-Type-Equality.html#trans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Equality",
          "module": "Copilot.Core.Type.Equality",
          "name": "trans",
          "normalized": "Equal a b-\u003eEqual b c-\u003eEqual a c",
          "package": "copilot-core",
          "signature": "Equal a b-\u003eEqual b c-\u003eEqual a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Equality.html#v:trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Read",
          "name": "Read",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Read.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Type Read",
          "module": "Copilot.Core.Type.Read",
          "name": "Read",
          "package": "copilot-core",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Read",
          "name": "ReadWit",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Read.html#ReadWit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Read",
          "module": "Copilot.Core.Type.Read",
          "name": "ReadWit",
          "package": "copilot-core",
          "partial": "Read Wit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Read.html#t:ReadWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Read",
          "name": "ReadWit",
          "package": "copilot-core",
          "signature": "ReadWit",
          "source": "src/Copilot-Core-Type-Read.html#ReadWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Read",
          "module": "Copilot.Core.Type.Read",
          "name": "ReadWit",
          "package": "copilot-core",
          "partial": "Read Wit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Read.html#v:ReadWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Read",
          "name": "readWit",
          "package": "copilot-core",
          "signature": "Type a -\u003e ReadWit a",
          "source": "src/Copilot-Core-Type-Read.html#readWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Read",
          "module": "Copilot.Core.Type.Read",
          "name": "readWit",
          "normalized": "Type a-\u003eReadWit a",
          "package": "copilot-core",
          "partial": "Wit",
          "signature": "Type a-\u003eReadWit a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Read.html#v:readWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Read",
          "name": "readWithType",
          "package": "copilot-core",
          "signature": "Type a -\u003e String -\u003e a",
          "source": "src/Copilot-Core-Type-Read.html#readWithType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Read",
          "module": "Copilot.Core.Type.Read",
          "name": "readWithType",
          "normalized": "Type a-\u003eString-\u003ea",
          "package": "copilot-core",
          "partial": "With Type",
          "signature": "Type a-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Read.html#v:readWithType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "Show",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Show.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "Show",
          "package": "copilot-core",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "ShowType",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Show.html#ShowType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "ShowType",
          "package": "copilot-core",
          "partial": "Show Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#t:ShowType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "ShowWit",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Show.html#ShowWit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "ShowWit",
          "package": "copilot-core",
          "partial": "Show Wit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#t:ShowWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "C",
          "package": "copilot-core",
          "signature": "C",
          "source": "src/Copilot-Core-Type-Show.html#ShowType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "C",
          "package": "copilot-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "Haskell",
          "package": "copilot-core",
          "signature": "Haskell",
          "source": "src/Copilot-Core-Type-Show.html#ShowType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "Haskell",
          "package": "copilot-core",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:Haskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "ShowWit",
          "package": "copilot-core",
          "signature": "ShowWit",
          "source": "src/Copilot-Core-Type-Show.html#ShowWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "ShowWit",
          "package": "copilot-core",
          "partial": "Show Wit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:ShowWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "showType",
          "package": "copilot-core",
          "signature": "Type a -\u003e String",
          "source": "src/Copilot-Core-Type-Show.html#showType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "showType",
          "normalized": "Type a-\u003eString",
          "package": "copilot-core",
          "partial": "Type",
          "signature": "Type a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:showType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "showWit",
          "package": "copilot-core",
          "signature": "Type a -\u003e ShowWit a",
          "source": "src/Copilot-Core-Type-Show.html#showWit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "showWit",
          "normalized": "Type a-\u003eShowWit a",
          "package": "copilot-core",
          "partial": "Wit",
          "signature": "Type a-\u003eShowWit a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:showWit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Show",
          "name": "showWithType",
          "package": "copilot-core",
          "signature": "ShowType -\u003e Type a -\u003e a -\u003e String",
          "source": "src/Copilot-Core-Type-Show.html#showWithType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Show",
          "module": "Copilot.Core.Type.Show",
          "name": "showWithType",
          "normalized": "ShowType-\u003eType a-\u003ea-\u003eString",
          "package": "copilot-core",
          "partial": "With Type",
          "signature": "ShowType-\u003eType a-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Show.html#v:showWithType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInitial values for give types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Type.Uninitialized",
          "name": "Uninitialized",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type-Uninitialized.html",
          "type": "module"
        },
        "index": {
          "description": "Initial values for give types",
          "hierarchy": "Copilot Core Type Uninitialized",
          "module": "Copilot.Core.Type.Uninitialized",
          "name": "Uninitialized",
          "package": "copilot-core",
          "partial": "Uninitialized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Uninitialized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type.Uninitialized",
          "name": "uninitialized",
          "package": "copilot-core",
          "signature": "Type a -\u003e a",
          "source": "src/Copilot-Core-Type-Uninitialized.html#uninitialized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type Uninitialized",
          "module": "Copilot.Core.Type.Uninitialized",
          "name": "uninitialized",
          "normalized": "Type a-\u003ea",
          "package": "copilot-core",
          "signature": "Type a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type-Uninitialized.html#v:uninitialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTyping for Core.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core.Type",
          "name": "Type",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Typing for Core",
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Type",
          "package": "copilot-core",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SimpleType",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SimpleType",
          "package": "copilot-core",
          "partial": "Simple Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#t:SimpleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Type",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Type",
          "package": "copilot-core",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Typed",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type.html#Typed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Typed",
          "package": "copilot-core",
          "partial": "Typed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#t:Typed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA untyped type (no phantom type).\n\u003c/p\u003e",
          "module": "Copilot.Core.Type",
          "name": "UType",
          "package": "copilot-core",
          "source": "src/Copilot-Core-Type.html#UType",
          "type": "data"
        },
        "index": {
          "description": "untyped type no phantom type",
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "UType",
          "package": "copilot-core",
          "partial": "UType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#t:UType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Bool",
          "package": "copilot-core",
          "signature": "Type Bool",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Bool",
          "package": "copilot-core",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Double",
          "package": "copilot-core",
          "signature": "Type Double",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Double",
          "package": "copilot-core",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Float",
          "package": "copilot-core",
          "signature": "Type Float",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Float",
          "package": "copilot-core",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Int16",
          "package": "copilot-core",
          "signature": "Type Int16",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Int16",
          "package": "copilot-core",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Int32",
          "package": "copilot-core",
          "signature": "Type Int32",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Int32",
          "package": "copilot-core",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Int64",
          "package": "copilot-core",
          "signature": "Type Int64",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Int64",
          "package": "copilot-core",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Int8",
          "package": "copilot-core",
          "signature": "Type Int8",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Int8",
          "package": "copilot-core",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SBool",
          "package": "copilot-core",
          "signature": "SBool",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SBool",
          "package": "copilot-core",
          "partial": "SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SDouble",
          "package": "copilot-core",
          "signature": "SDouble",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SDouble",
          "package": "copilot-core",
          "partial": "SDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SFloat",
          "package": "copilot-core",
          "signature": "SFloat",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SFloat",
          "package": "copilot-core",
          "partial": "SFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SInt16",
          "package": "copilot-core",
          "signature": "SInt16",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SInt16",
          "package": "copilot-core",
          "partial": "SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SInt32",
          "package": "copilot-core",
          "signature": "SInt32",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SInt32",
          "package": "copilot-core",
          "partial": "SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SInt64",
          "package": "copilot-core",
          "signature": "SInt64",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SInt64",
          "package": "copilot-core",
          "partial": "SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SInt8",
          "package": "copilot-core",
          "signature": "SInt8",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SInt8",
          "package": "copilot-core",
          "partial": "SInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SWord16",
          "package": "copilot-core",
          "signature": "SWord16",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SWord16",
          "package": "copilot-core",
          "partial": "SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SWord32",
          "package": "copilot-core",
          "signature": "SWord32",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SWord32",
          "package": "copilot-core",
          "partial": "SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SWord64",
          "package": "copilot-core",
          "signature": "SWord64",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SWord64",
          "package": "copilot-core",
          "partial": "SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "SWord8",
          "package": "copilot-core",
          "signature": "SWord8",
          "source": "src/Copilot-Core-Type.html#SimpleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "SWord8",
          "package": "copilot-core",
          "partial": "SWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:SWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "UType",
          "package": "copilot-core",
          "signature": "forall a . UType",
          "source": "src/Copilot-Core-Type.html#UType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "UType",
          "package": "copilot-core",
          "partial": "UType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:UType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Word16",
          "package": "copilot-core",
          "signature": "Type Word16",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Word16",
          "package": "copilot-core",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Word32",
          "package": "copilot-core",
          "signature": "Type Word32",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Word32",
          "package": "copilot-core",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Word64",
          "package": "copilot-core",
          "signature": "Type Word64",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Word64",
          "package": "copilot-core",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "Word8",
          "package": "copilot-core",
          "signature": "Type Word8",
          "source": "src/Copilot-Core-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "Word8",
          "package": "copilot-core",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "simpleType",
          "package": "copilot-core",
          "signature": "Type a -\u003e SimpleType",
          "source": "src/Copilot-Core-Type.html#simpleType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "simpleType",
          "normalized": "Type a-\u003eSimpleType",
          "package": "copilot-core",
          "partial": "Type",
          "signature": "Type a-\u003eSimpleType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:simpleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "typeOf",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Type.html#typeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "typeOf",
          "package": "copilot-core",
          "partial": "Of",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Core.Type",
          "name": "uTypeType",
          "package": "copilot-core",
          "signature": "Type a",
          "source": "src/Copilot-Core-Type.html#UType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Core Type",
          "module": "Copilot.Core.Type",
          "name": "uTypeType",
          "package": "copilot-core",
          "partial": "Type Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core-Type.html#v:uTypeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntermediate representation for Copilot specifications.\n The form of the representation is based on this paper:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Carette, Jacques and Kiselyov, Oleg and Shan, Chung-chieh,\n \"\u003cem\u003eFinally tagless, partially evaluated: Tagless staged\u003c/em\u003e\n \u003cem\u003einterpreters for simpler typed languages\u003c/em\u003e\",\n Journal of Functional Programming vol. 19, p. 509-543, 2009.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe following article might also be useful:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Guillemette, Louis-Julien and Monnier, Stefan,\n \"\u003cem\u003eType-Safe Code Transformations in Haskell\u003c/em\u003e\",\n Electronic Notes in Theoretical Computer Science vol. 174, p. 23-39, 2007.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor examples of how to traverse a Copilot specification see\n the source code of the interpreter\n (\u003ca\u003eCopilot.Core.Interpret\u003c/a\u003e)\n and the pretty-printer\n (\u003ca\u003eCopilot.Core.PrettyPrint\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Core",
          "name": "Core",
          "package": "copilot-core",
          "source": "src/Copilot-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Intermediate representation for Copilot specifications The form of the representation is based on this paper Carette Jacques and Kiselyov Oleg and Shan Chung-chieh Finally tagless partially evaluated Tagless staged interpreters for simpler typed languages Journal of Functional Programming vol The following article might also be useful Guillemette Louis-Julien and Monnier Stefan Type-Safe Code Transformations in Haskell Electronic Notes in Theoretical Computer Science vol For examples of how to traverse Copilot specification see the source code of the interpreter Copilot.Core.Interpret and the pretty-printer Copilot.Core.PrettyPrint",
          "hierarchy": "Copilot Core",
          "module": "Copilot.Core",
          "name": "Core",
          "package": "copilot-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-core/docs/Copilot-Core.html#"
      }
    }
  ]
]