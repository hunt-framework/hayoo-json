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
        "word": "narc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.HDBC",
          "name": "HDBC",
          "package": "narc",
          "source": "src/Database-Narc-HDBC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Narc HDBC",
          "module": "Database.Narc.HDBC",
          "name": "HDBC",
          "package": "narc",
          "partial": "HDBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-HDBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Narc query directly against an HDBC connection.\n\u003c/p\u003e",
          "module": "Database.Narc.HDBC",
          "name": "run",
          "package": "narc",
          "signature": "Term a -\u003e conn -\u003e IO [[SqlValue]]",
          "source": "src/Database-Narc-HDBC.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run Narc query directly against an HDBC connection",
          "hierarchy": "Database Narc HDBC",
          "module": "Database.Narc.HDBC",
          "name": "run",
          "normalized": "Term a-\u003eb-\u003eIO[[SqlValue]]",
          "package": "narc",
          "signature": "Term a-\u003econn-\u003eIO[[SqlValue]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-HDBC.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "Test",
          "package": "narc",
          "source": "src/Database-Narc-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "Test",
          "package": "narc",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "main",
          "package": "narc",
          "signature": "IO ()",
          "source": "src/Database-Narc-Test.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "main",
          "normalized": "IO()",
          "package": "narc",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "normalizerTests",
          "package": "narc",
          "signature": "Test",
          "source": "src/Database-Narc-Test.html#normalizerTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "normalizerTests",
          "package": "narc",
          "partial": "Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:normalizerTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssertion that well-typed terms compile without throwing.\n\u003c/p\u003e",
          "module": "Database.Narc.Test",
          "name": "prop_compile_safe",
          "package": "narc",
          "signature": "Property",
          "source": "src/Database-Narc-Test.html#prop_compile_safe",
          "type": "function"
        },
        "index": {
          "description": "Assertion that well-typed terms compile without throwing",
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "prop_compile_safe",
          "package": "narc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:prop_compile_safe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "prop_typedTermGen_tyCheck",
          "package": "narc",
          "signature": "Property",
          "source": "src/Database-Narc-Test.html#prop_typedTermGen_tyCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "prop_typedTermGen_tyCheck",
          "package": "narc",
          "partial": "Term Gen Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:prop_typedTermGen_tyCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "runUnitTests",
          "package": "narc",
          "signature": "IO Counts",
          "source": "src/Database-Narc-Test.html#runUnitTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "runUnitTests",
          "package": "narc",
          "partial": "Unit Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:runUnitTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Test",
          "name": "unitTests",
          "package": "narc",
          "signature": "Test",
          "source": "src/Database-Narc-Test.html#unitTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Test",
          "module": "Database.Narc.Test",
          "name": "unitTests",
          "package": "narc",
          "partial": "Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Test.html#v:unitTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "Type",
          "package": "narc",
          "source": "src/Database-Narc-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "Type",
          "package": "narc",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "QType",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#QType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "QType",
          "package": "narc",
          "partial": "QType",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#t:QType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "TyEnv",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#TyEnv",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TyEnv",
          "package": "narc",
          "partial": "Ty Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#t:TyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "TySubst",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#TySubst",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TySubst",
          "package": "narc",
          "partial": "Ty Subst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#t:TySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "TyVar",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#TyVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TyVar",
          "package": "narc",
          "partial": "Ty Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#t:TyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "Type",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "Type",
          "package": "narc",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TArr",
          "package": "narc",
          "signature": "TArr Type Type",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TArr\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TArr\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TArr",
          "package": "narc",
          "partial": "TArr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TBool",
          "package": "narc",
          "signature": "TBool",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TBool\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TBool\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TBool",
          "package": "narc",
          "partial": "TBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TList",
          "package": "narc",
          "signature": "TList Type",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TList\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TList\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TList",
          "package": "narc",
          "partial": "TList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TNum",
          "package": "narc",
          "signature": "TNum",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TNum\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TNum\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TNum",
          "package": "narc",
          "partial": "TNum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TRecord",
          "package": "narc",
          "signature": "TRecord [(String, Type)]",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TRecord\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TRecord\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TRecord",
          "normalized": "TRecord[(String,Type)]",
          "package": "narc",
          "partial": "TRecord",
          "signature": "TRecord[(String,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TString",
          "package": "narc",
          "signature": "TString",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TString\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TString\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TString",
          "package": "narc",
          "partial": "TString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TUnit",
          "package": "narc",
          "signature": "TUnit",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TUnit\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TUnit\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TUnit",
          "package": "narc",
          "partial": "TUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Narc.Type\",\"Database.Narc\"]",
          "name": "TVar",
          "package": "narc",
          "signature": "TVar TyVar",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TVar\",\"http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:TVar\"]"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "TVar",
          "package": "narc",
          "partial": "TVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eftvs: free type variables\n\u003c/p\u003e\u003cp\u003eftvsSubst: the free type variables of a type substitution--that is,\n the type variables free in the types in the range of the substitution.\n\u003c/p\u003e\u003cp\u003eoccurs x ty: does variable x appear in type ty? (Note there are no\n type-variable binders).\n\u003c/p\u003e",
          "module": "Database.Narc.Type",
          "name": "applyTySubst",
          "package": "narc",
          "signature": "TySubst -\u003e Type -\u003e Type",
          "source": "src/Database-Narc-Type.html#applyTySubst",
          "type": "function"
        },
        "index": {
          "description": "ftvs free type variables ftvsSubst the free type variables of type substitution--that is the type variables free in the types in the range of the substitution occurs ty does variable appear in type ty Note there are no type-variable binders",
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "applyTySubst",
          "normalized": "TySubst-\u003eType-\u003eType",
          "package": "narc",
          "partial": "Ty Subst",
          "signature": "TySubst-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:applyTySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "composeTySubst",
          "package": "narc",
          "signature": "[TySubst] -\u003e Failure TySubst",
          "source": "src/Database-Narc-Type.html#composeTySubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "composeTySubst",
          "normalized": "[TySubst]-\u003eFailure TySubst",
          "package": "narc",
          "partial": "Ty Subst",
          "signature": "[TySubst]-\u003eFailure TySubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:composeTySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "disjoinSubst",
          "package": "narc",
          "signature": "TySubst -\u003e TySubst -\u003e TySubst",
          "source": "src/Database-Narc-Type.html#disjoinSubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "disjoinSubst",
          "normalized": "TySubst-\u003eTySubst-\u003eTySubst",
          "package": "narc",
          "partial": "Subst",
          "signature": "TySubst-\u003eTySubst-\u003eTySubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:disjoinSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "emptyTySubst",
          "package": "narc",
          "signature": "TySubst",
          "source": "src/Database-Narc-Type.html#emptyTySubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "emptyTySubst",
          "package": "narc",
          "partial": "Ty Subst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:emptyTySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "instanceOf",
          "package": "narc",
          "signature": "Type -\u003e Type -\u003e Failure ()",
          "source": "src/Database-Narc-Type.html#instanceOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "instanceOf",
          "normalized": "Type-\u003eType-\u003eFailure()",
          "package": "narc",
          "partial": "Of",
          "signature": "Type-\u003eType-\u003eFailure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:instanceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enormalizeType:\n   Renumber all the type variables in a normal way to allow\n   comparing types.\n\u003c/p\u003e",
          "module": "Database.Narc.Type",
          "name": "normalizeType",
          "package": "narc",
          "signature": "Type -\u003e State (Int, [(Int, Int)]) Type",
          "source": "src/Database-Narc-Type.html#normalizeType",
          "type": "function"
        },
        "index": {
          "description": "normalizeType Renumber all the type variables in normal way to allow comparing types",
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "normalizeType",
          "normalized": "Type-\u003eState(Int,[(Int,Int)])Type",
          "package": "narc",
          "partial": "Type",
          "signature": "Type-\u003eState(Int,[(Int,Int)])Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:normalizeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "unify",
          "package": "narc",
          "signature": "Type -\u003e Type -\u003e Failure TySubst",
          "source": "src/Database-Narc-Type.html#unify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "unify",
          "normalized": "Type-\u003eType-\u003eFailure TySubst",
          "package": "narc",
          "signature": "Type-\u003eType-\u003eFailure TySubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc.Type",
          "name": "unifyAll",
          "package": "narc",
          "signature": "[Type] -\u003e Failure TySubst",
          "source": "src/Database-Narc-Type.html#unifyAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Narc Type",
          "module": "Database.Narc.Type",
          "name": "unifyAll",
          "normalized": "[Type]-\u003eFailure TySubst",
          "package": "narc",
          "partial": "All",
          "signature": "[Type]-\u003eFailure TySubst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc-Type.html#v:unifyAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuery SQL databases using Nested Relational Calculus embedded in\n Haskell.\n\u003c/p\u003e\u003cp\u003eThe primed functions in this module are in fact the syntactic \n forms of the embedded language. Use them as, for example:\n\u003c/p\u003e\u003cpre\u003e let employeesSchema = [(\"name\", TString), (\"salary\", TNum)] in\n let employeesTable = table \"employees\" employeesSchema in\n foreach employeesTable $ \\emp -\u003e \n   having (primApp \"\u003c\" [cnst 20000, project emp \"salary\"]) $\n   singleton (record [(\"name\", project emp \"name\")])\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.Narc",
          "name": "Narc",
          "package": "narc",
          "source": "src/Database-Narc.html",
          "type": "module"
        },
        "index": {
          "description": "Query SQL databases using Nested Relational Calculus embedded in Haskell The primed functions in this module are in fact the syntactic forms of the embedded language Use them as for example let employeesSchema name TString salary TNum in let employeesTable table employees employeesSchema in foreach employeesTable emp having primApp cnst project emp salary singleton record name project emp name",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "Narc",
          "package": "narc",
          "partial": "Narc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Narc",
          "name": "Type",
          "package": "narc",
          "source": "src/Database-Narc-Type.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "Type",
          "package": "narc",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a functional abstraction.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "abs",
          "package": "narc",
          "signature": "(String -\u003e NarcTerm) -\u003e NarcTerm",
          "source": "src/Database-Narc.html#abs",
          "type": "function"
        },
        "index": {
          "description": "Create functional abstraction",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "abs",
          "normalized": "(String-\u003eNarcTerm)-\u003eNarcTerm",
          "package": "narc",
          "signature": "(String-\u003eNarcTerm)-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a functional term to an argument.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "app",
          "package": "narc",
          "signature": "NarcTerm -\u003e NarcTerm -\u003e NarcTerm",
          "source": "src/Database-Narc.html#app",
          "type": "function"
        },
        "index": {
          "description": "Apply functional term to an argument",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "app",
          "normalized": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a constant value into a query.\n \u003ccode\u003eConstable\u003c/code\u003e types currently include \u003ccode\u003eBool\u003c/code\u003e and \u003ccode\u003eInteger\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "cnst",
          "package": "narc",
          "signature": "a -\u003e NarcTerm",
          "source": "src/Database-Narc.html#cnst",
          "type": "function"
        },
        "index": {
          "description": "Lift constant value into query Constable types currently include Bool and Integer",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "cnst",
          "normalized": "a-\u003eNarcTerm",
          "package": "narc",
          "signature": "a-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:cnst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each item in the collection resulting from the first\n argument, give it to the function which is the second argument\n and evaluate--this corresponds to a loop, or two one part of a\n cross in traditional SQL queries.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "foreach",
          "package": "narc",
          "signature": "NarcTerm -\u003e (NarcTerm -\u003e NarcTerm) -\u003e NarcTerm",
          "source": "src/Database-Narc.html#foreach",
          "type": "function"
        },
        "index": {
          "description": "For each item in the collection resulting from the first argument give it to the function which is the second argument and evaluate--this corresponds to loop or two one part of cross in traditional SQL queries",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "foreach",
          "normalized": "NarcTerm-\u003e(NarcTerm-\u003eNarcTerm)-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003e(NarcTerm-\u003eNarcTerm)-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:foreach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the current iteration as per the condition in the first\n argument. Corresponds to a \u003ccode\u003ewhere\u003c/code\u003e clause in a SQL query.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "having",
          "package": "narc",
          "signature": "NarcTerm -\u003e NarcTerm -\u003e NarcTerm",
          "source": "src/Database-Narc.html#having",
          "type": "function"
        },
        "index": {
          "description": "Filter the current iteration as per the condition in the first argument Corresponds to where clause in SQL query",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "having",
          "normalized": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:having"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA condition between two terms, as determined by the boolean value\n of the first term.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "ifthenelse",
          "package": "narc",
          "signature": "NarcTerm -\u003e NarcTerm -\u003e NarcTerm -\u003e NarcTerm",
          "source": "src/Database-Narc.html#ifthenelse",
          "type": "function"
        },
        "index": {
          "description": "condition between two terms as determined by the boolean value of the first term",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "ifthenelse",
          "normalized": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:ifthenelse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a Narc term to an SQL query.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "narcToSQL",
          "package": "narc",
          "signature": "NarcTerm -\u003e Query",
          "source": "src/Database-Narc.html#narcToSQL",
          "type": "function"
        },
        "index": {
          "description": "Translate Narc term to an SQL query",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "narcToSQL",
          "normalized": "NarcTerm-\u003eQuery",
          "package": "narc",
          "partial": "To SQL",
          "signature": "NarcTerm-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:narcToSQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a Narc term to an SQL query string--perhaps the central\n | function of the interface.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "narcToSQLString",
          "package": "narc",
          "signature": "NarcTerm -\u003e String",
          "source": "src/Database-Narc.html#narcToSQLString",
          "type": "function"
        },
        "index": {
          "description": "Translate Narc term to an SQL query string--perhaps the central function of the interface",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "narcToSQLString",
          "normalized": "NarcTerm-\u003eString",
          "package": "narc",
          "partial": "To SQLString",
          "signature": "NarcTerm-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:narcToSQLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty collection.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "nil",
          "package": "narc",
          "signature": "NarcTerm",
          "source": "src/Database-Narc.html#nil",
          "type": "function"
        },
        "index": {
          "description": "An empty collection",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "nil",
          "package": "narc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply some primitive function, such as \u003ccode\u003e(+)\u003c/code\u003e or \u003ccode\u003eavg\u003c/code\u003e, to a list\n of arguments.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "primApp",
          "package": "narc",
          "signature": "String -\u003e [NarcTerm] -\u003e NarcTerm",
          "source": "src/Database-Narc.html#primApp",
          "type": "function"
        },
        "index": {
          "description": "Apply some primitive function such as or avg to list of arguments",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "primApp",
          "normalized": "String-\u003e[NarcTerm]-\u003eNarcTerm",
          "package": "narc",
          "partial": "App",
          "signature": "String-\u003e[NarcTerm]-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:primApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject a field out of a record value.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "project",
          "package": "narc",
          "signature": "NarcTerm -\u003e String -\u003e NarcTerm",
          "source": "src/Database-Narc.html#project",
          "type": "function"
        },
        "index": {
          "description": "Project field out of record value",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "project",
          "normalized": "NarcTerm-\u003eString-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eString-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a record (name-value pairs) out of other terms; usually\n used, with base values for the record elements, as the final\n result of a query, corresponding to the \u003ccode\u003eselect\u003c/code\u003e clause of a SQL\n query, but can also be used with nested results internally in a\n query.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "record",
          "package": "narc",
          "signature": "[(String, NarcTerm)] -\u003e NarcTerm",
          "source": "src/Database-Narc.html#record",
          "type": "function"
        },
        "index": {
          "description": "Construct record name-value pairs out of other terms usually used with base values for the record elements as the final result of query corresponding to the select clause of SQL query but can also be used with nested results internally in query",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "record",
          "normalized": "[(String,NarcTerm)]-\u003eNarcTerm",
          "package": "narc",
          "signature": "[(String,NarcTerm)]-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shortcut for giving the typical bottom of a ``FLWOR-style''\n comprehension:\n\u003c/p\u003e\u003cpre\u003e foreach t $ \\row -\u003e\n having (project x \"a\" \u003e 2) $ \n result [(\"result\", project x \"b\")]\n\u003c/pre\u003e",
          "module": "Database.Narc",
          "name": "result",
          "package": "narc",
          "signature": "[(String, NarcTerm)] -\u003e NarcTerm",
          "source": "src/Database-Narc.html#result",
          "type": "function"
        },
        "index": {
          "description": "shortcut for giving the typical bottom of FLWOR-style comprehension foreach row having project result result project",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "result",
          "normalized": "[(String,NarcTerm)]-\u003eNarcTerm",
          "package": "narc",
          "signature": "[(String,NarcTerm)]-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003eQuery\u003c/code\u003e to its ASCII SQL serialization.\n Dies on those \u003ccode\u003eQuery\u003c/code\u003es that don't represent valid SQL queries.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "serialize",
          "package": "narc",
          "signature": "Query -\u003e String",
          "source": "src/Database-Narc-SQL.html#serialize",
          "type": "function"
        },
        "index": {
          "description": "Serialize Query to its ASCII SQL serialization Dies on those Query that don represent valid SQL queries",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "serialize",
          "normalized": "Query-\u003eString",
          "package": "narc",
          "signature": "Query-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton collection of one item.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "singleton",
          "package": "narc",
          "signature": "NarcTerm -\u003e NarcTerm",
          "source": "src/Database-Narc.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton collection of one item",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "singleton",
          "normalized": "NarcTerm-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to a named database table; second argument is its\n schema type.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "table",
          "package": "narc",
          "signature": "Tabname -\u003e [(Field, Type)] -\u003e NarcTerm",
          "source": "src/Database-Narc.html#table",
          "type": "function"
        },
        "index": {
          "description": "reference to named database table second argument is its schema type",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "table",
          "normalized": "Tabname-\u003e[(Field,Type)]-\u003eNarcTerm",
          "package": "narc",
          "signature": "Tabname-\u003e[(Field,Type)]-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two collections\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "union",
          "package": "narc",
          "signature": "NarcTerm -\u003e NarcTerm -\u003e NarcTerm",
          "source": "src/Database-Narc.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two collections",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "union",
          "normalized": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "package": "narc",
          "signature": "NarcTerm-\u003eNarcTerm-\u003eNarcTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dummy value, or zero-width record.\n\u003c/p\u003e",
          "module": "Database.Narc",
          "name": "unit",
          "package": "narc",
          "signature": "NarcTerm",
          "source": "src/Database-Narc.html#unit",
          "type": "function"
        },
        "index": {
          "description": "dummy value or zero-width record",
          "hierarchy": "Database Narc",
          "module": "Database.Narc",
          "name": "unit",
          "package": "narc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/narc/docs/Database-Narc.html#v:unit"
      }
    }
  ]
]