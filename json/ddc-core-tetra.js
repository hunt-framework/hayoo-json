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
        "word": "ddc-core-tetra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Tetra.Compounds",
          "name": "Compounds",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Compounds.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Tetra Compounds",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "Compounds",
          "package": "ddc-core-tetra",
          "partial": "Compounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Compounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tBool",
          "package": "ddc-core-tetra",
          "signature": "Type Name",
          "source": "src/DDC-Core-Tetra-Prim-TyConPrim.html#tBool",
          "type": "function"
        },
        "index": {
          "description": "Primitive Bool type",
          "hierarchy": "DDC Core Tetra Compounds",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tBool",
          "package": "ddc-core-tetra",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Compounds.html#v:tBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tInt",
          "package": "ddc-core-tetra",
          "signature": "Type Name",
          "source": "src/DDC-Core-Tetra-Prim-TyConPrim.html#tInt",
          "type": "function"
        },
        "index": {
          "description": "Primitive Int type",
          "hierarchy": "DDC Core Tetra Compounds",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tInt",
          "package": "ddc-core-tetra",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Compounds.html#v:tInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive \u003ccode\u003eNat\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tNat",
          "package": "ddc-core-tetra",
          "signature": "Type Name",
          "source": "src/DDC-Core-Tetra-Prim-TyConPrim.html#tNat",
          "type": "function"
        },
        "index": {
          "description": "Primitive Nat type",
          "hierarchy": "DDC Core Tetra Compounds",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tNat",
          "package": "ddc-core-tetra",
          "partial": "Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Compounds.html#v:tNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive \u003ccode\u003eWordN\u003c/code\u003e type of the given width.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tWord",
          "package": "ddc-core-tetra",
          "signature": "Int -\u003e Type Name",
          "source": "src/DDC-Core-Tetra-Prim-TyConPrim.html#tWord",
          "type": "function"
        },
        "index": {
          "description": "Primitive WordN type of the given width",
          "hierarchy": "DDC Core Tetra Compounds",
          "module": "DDC.Core.Tetra.Compounds",
          "name": "tWord",
          "normalized": "Int-\u003eType Name",
          "package": "ddc-core-tetra",
          "partial": "Word",
          "signature": "Int-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Compounds.html#v:tWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Tetra.Env",
          "name": "Env",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Tetra Env",
          "module": "DDC.Core.Tetra.Env",
          "name": "Env",
          "package": "ddc-core-tetra",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type definitions \n\u003c/p\u003e\u003cpre\u003e  Type                         Constructors\n  ----                ------------------------------\n  Bool                True False\n  Nat                 0 1 2 ...\n  Int                 ... -2i -1i 0i 1i 2i ...\n  Word{8,16,32,64}#   42w8 123w64 ...\n\u003c/pre\u003e",
          "module": "DDC.Core.Tetra.Env",
          "name": "primDataDefs",
          "package": "ddc-core-tetra",
          "signature": "DataDefs Name",
          "source": "src/DDC-Core-Tetra-Env.html#primDataDefs",
          "type": "function"
        },
        "index": {
          "description": "Data type definitions Type Constructors Bool True False Nat Int Word w8 w64",
          "hierarchy": "DDC Core Tetra Env",
          "module": "DDC.Core.Tetra.Env",
          "name": "primDataDefs",
          "package": "ddc-core-tetra",
          "partial": "Data Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Env.html#v:primDataDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind environment containing kinds of primitive data types.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Env",
          "name": "primKindEnv",
          "package": "ddc-core-tetra",
          "signature": "Env Name",
          "source": "src/DDC-Core-Tetra-Env.html#primKindEnv",
          "type": "function"
        },
        "index": {
          "description": "Kind environment containing kinds of primitive data types",
          "hierarchy": "DDC Core Tetra Env",
          "module": "DDC.Core.Tetra.Env",
          "name": "primKindEnv",
          "package": "ddc-core-tetra",
          "partial": "Kind Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Env.html#v:primKindEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort environment containing sorts of primitive kinds.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Env",
          "name": "primSortEnv",
          "package": "ddc-core-tetra",
          "signature": "Env Name",
          "source": "src/DDC-Core-Tetra-Env.html#primSortEnv",
          "type": "function"
        },
        "index": {
          "description": "Sort environment containing sorts of primitive kinds",
          "hierarchy": "DDC Core Tetra Env",
          "module": "DDC.Core.Tetra.Env",
          "name": "primSortEnv",
          "package": "ddc-core-tetra",
          "partial": "Sort Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Env.html#v:primSortEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType environment containing types of primitive operators.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Env",
          "name": "primTypeEnv",
          "package": "ddc-core-tetra",
          "signature": "Env Name",
          "source": "src/DDC-Core-Tetra-Env.html#primTypeEnv",
          "type": "function"
        },
        "index": {
          "description": "Type environment containing types of primitive operators",
          "hierarchy": "DDC Core Tetra Env",
          "module": "DDC.Core.Tetra.Env",
          "name": "primTypeEnv",
          "package": "ddc-core-tetra",
          "partial": "Type Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Env.html#v:primTypeEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Tetra.Prim",
          "name": "Prim",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "Prim",
          "package": "ddc-core-tetra",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of things used in Disciple Core Tetra.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "Name",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Names of things used in Disciple Core Tetra",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "Name",
          "package": "ddc-core-tetra",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive arithmetic, logic, and comparison opretors.\n   We expect the backend/machine to be able to implement these directly.\n\u003c/p\u003e\u003cp\u003eFor the Shift Right operator, the type that it is used at determines\n   whether it is an arithmetic (with sign-extension) or logical\n   (no sign-extension) shift.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArith",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "data"
        },
        "index": {
          "description": "Primitive arithmetic logic and comparison opretors We expect the backend machine to be able to implement these directly For the Shift Right operator the type that it is used at determines whether it is an arithmetic with sign-extension or logical no sign-extension shift",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArith",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#t:OpPrimArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable References.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimRef",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimRef",
          "type": "data"
        },
        "index": {
          "description": "Mutable References",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimRef",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#t:OpPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive type constructors.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrim",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "data"
        },
        "index": {
          "description": "Primitive type constructors",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrim",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#t:TyConPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user defined constructor.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameCon",
          "package": "ddc-core-tetra",
          "signature": "NameCon String",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameCon\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameCon\"]"
        },
        "index": {
          "description": "user defined constructor",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameCon",
          "package": "ddc-core-tetra",
          "partial": "Name Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boolean literal.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameLitBool",
          "package": "ddc-core-tetra",
          "signature": "NameLitBool Bool",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitBool\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameLitBool\"]"
        },
        "index": {
          "description": "boolean literal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameLitBool",
          "package": "ddc-core-tetra",
          "partial": "Name Lit Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer literal.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameLitInt",
          "package": "ddc-core-tetra",
          "signature": "NameLitInt Integer",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitInt\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameLitInt\"]"
        },
        "index": {
          "description": "An integer literal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameLitInt",
          "package": "ddc-core-tetra",
          "partial": "Name Lit Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA natural literal.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameLitNat",
          "package": "ddc-core-tetra",
          "signature": "NameLitNat Integer",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitNat\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameLitNat\"]"
        },
        "index": {
          "description": "natural literal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameLitNat",
          "package": "ddc-core-tetra",
          "partial": "Name Lit Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word literal.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameLitWord",
          "package": "ddc-core-tetra",
          "signature": "NameLitWord Integer Int",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitWord\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameLitWord\"]"
        },
        "index": {
          "description": "word literal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameLitWord",
          "package": "ddc-core-tetra",
          "partial": "Name Lit Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameLitWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive arithmetic, logic, comparison and bit-wise operators.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameOpPrimArith",
          "package": "ddc-core-tetra",
          "signature": "NameOpPrimArith OpPrimArith",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameOpPrimArith\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameOpPrimArith\"]"
        },
        "index": {
          "description": "Primitive arithmetic logic comparison and bit-wise operators",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameOpPrimArith",
          "package": "ddc-core-tetra",
          "partial": "Name Op Prim Arith",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameOpPrimArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable references.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameOpPrimRef",
          "package": "ddc-core-tetra",
          "signature": "NameOpPrimRef OpPrimRef",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameOpPrimRef\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameOpPrimRef\"]"
        },
        "index": {
          "description": "Mutable references",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameOpPrimRef",
          "package": "ddc-core-tetra",
          "partial": "Name Op Prim Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameOpPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive type constructor.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameTyConPrim",
          "package": "ddc-core-tetra",
          "signature": "NameTyConPrim TyConPrim",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameTyConPrim\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameTyConPrim\"]"
        },
        "index": {
          "description": "primitive type constructor",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameTyConPrim",
          "package": "ddc-core-tetra",
          "partial": "Name Ty Con Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameTyConPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser defined variables.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "NameVar",
          "package": "ddc-core-tetra",
          "signature": "NameVar String",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameVar\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:NameVar\"]"
        },
        "index": {
          "description": "User defined variables",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "NameVar",
          "package": "ddc-core-tetra",
          "partial": "Name Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:NameVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithAdd",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithAdd",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithAdd\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithAdd\"]"
        },
        "index": {
          "description": "Addition",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithAdd",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean And\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithAnd",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithAnd",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithAnd\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithAnd\"]"
        },
        "index": {
          "description": "Boolean And",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithAnd",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit-wise And\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithBAnd",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithBAnd",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBAnd\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithBAnd\"]"
        },
        "index": {
          "description": "Bit-wise And",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithBAnd",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit-wise Or\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithBOr",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithBOr",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBOr\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithBOr\"]"
        },
        "index": {
          "description": "Bit-wise Or",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithBOr",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit-wise eXclusive Or\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithBXOr",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithBXOr",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBXOr\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithBXOr\"]"
        },
        "index": {
          "description": "Bit-wise eXclusive Or",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithBXOr",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith BXOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithBXOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithDiv",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithDiv",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithDiv\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithDiv\"]"
        },
        "index": {
          "description": "Division",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithDiv",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithEq",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithEq",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithEq\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithEq\"]"
        },
        "index": {
          "description": "Equality",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithEq",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater Than or Equal\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithGe",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithGe",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithGe\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithGe\"]"
        },
        "index": {
          "description": "Greater Than or Equal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithGe",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater Than\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithGt",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithGt",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithGt\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithGt\"]"
        },
        "index": {
          "description": "Greater Than",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithGt",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess Than or Equal\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithLe",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithLe",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithLe\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithLe\"]"
        },
        "index": {
          "description": "Less Than or Equal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithLe",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess Than\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithLt",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithLt",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithLt\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithLt\"]"
        },
        "index": {
          "description": "Less Than",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithLt",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulus\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithMod",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithMod",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithMod\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithMod\"]"
        },
        "index": {
          "description": "Modulus",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithMod",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithMul",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithMul",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithMul\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithMul\"]"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithMul",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithNeg",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithNeg",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithNeg\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithNeg\"]"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithNeg",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Neg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegated Equality\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithNeq",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithNeq",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithNeq\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithNeq\"]"
        },
        "index": {
          "description": "Negated Equality",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithNeq",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Neq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithNeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean Or\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithOr",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithOr",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithOr\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithOr\"]"
        },
        "index": {
          "description": "Boolean Or",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithOr",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemainder\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithRem",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithRem",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithRem\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithRem\"]"
        },
        "index": {
          "description": "Remainder",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithRem",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Rem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift Left\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithShl",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithShl",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithShl\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithShl\"]"
        },
        "index": {
          "description": "Shift Left",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithShl",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Shl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithShl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift Right\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithShr",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithShr",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithShr\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithShr\"]"
        },
        "index": {
          "description": "Shift Right",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithShr",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Shr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimArithSub",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArithSub",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithSub\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimArithSub\"]"
        },
        "index": {
          "description": "Subtraction",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimArithSub",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimArithSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a reference.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimRefAllocRef",
          "package": "ddc-core-tetra",
          "signature": "OpPrimRefAllocRef",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefAllocRef\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimRefAllocRef\"]"
        },
        "index": {
          "description": "Allocate reference",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimRefAllocRef",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref Alloc Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefAllocRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a reference.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimRefReadRef",
          "package": "ddc-core-tetra",
          "signature": "OpPrimRefReadRef",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefReadRef\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimRefReadRef\"]"
        },
        "index": {
          "description": "Read reference",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimRefReadRef",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref Read Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefReadRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to a reference.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "OpPrimRefWriteRef",
          "package": "ddc-core-tetra",
          "signature": "OpPrimRefWriteRef",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefWriteRef\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:OpPrimRefWriteRef\"]"
        },
        "index": {
          "description": "Write to reference",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "OpPrimRefWriteRef",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref Write Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:OpPrimRefWriteRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBool\u003c/code\u003e unboxed booleans.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "TyConPrimBool",
          "package": "ddc-core-tetra",
          "signature": "TyConPrimBool",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimBool\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:TyConPrimBool\"]"
        },
        "index": {
          "description": "Bool unboxed booleans",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrimBool",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eInt\u003c/code\u003e signed integers.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "TyConPrimInt",
          "package": "ddc-core-tetra",
          "signature": "TyConPrimInt",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimInt\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:TyConPrimInt\"]"
        },
        "index": {
          "description": "Int signed integers",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrimInt",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNat\u003c/code\u003e natural numbers.\n   Big enough to count every addressable byte in the store.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "TyConPrimNat",
          "package": "ddc-core-tetra",
          "signature": "TyConPrimNat",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimNat\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:TyConPrimNat\"]"
        },
        "index": {
          "description": "Nat natural numbers Big enough to count every addressable byte in the store",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrimNat",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable reference.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "TyConPrimRef",
          "package": "ddc-core-tetra",
          "signature": "TyConPrimRef",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimRef\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:TyConPrimRef\"]"
        },
        "index": {
          "description": "mutable reference",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrimRef",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eWordN\u003c/code\u003e machine words of the given width.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "TyConPrimWord",
          "package": "ddc-core-tetra",
          "signature": "TyConPrimWord Int",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimWord\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:TyConPrimWord\"]"
        },
        "index": {
          "description": "WordN machine words of the given width",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "TyConPrimWord",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:TyConPrimWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the kind of a type constructor.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "kindTyConPrim",
          "package": "ddc-core-tetra",
          "signature": "TyConPrim -\u003e Kind Name",
          "source": "src/DDC-Core-Tetra-Prim-TyConPrim.html#kindTyConPrim",
          "type": "function"
        },
        "index": {
          "description": "Yield the kind of type constructor",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "kindTyConPrim",
          "normalized": "TyConPrim-\u003eKind Name",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim",
          "signature": "TyConPrim-\u003eKind Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:kindTyConPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the name of a variable, constructor or literal.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Prim\",\"DDC.Core.Tetra\"]",
          "name": "readName",
          "package": "ddc-core-tetra",
          "signature": "String -\u003e Maybe Name",
          "source": "src/DDC-Core-Tetra-Prim.html#readName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:readName\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:readName\"]"
        },
        "index": {
          "description": "Read the name of variable constructor or literal",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "readName",
          "normalized": "String-\u003eMaybe Name",
          "package": "ddc-core-tetra",
          "partial": "Name",
          "signature": "String-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:readName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the type of a primitive arithmetic operator.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "typeOpPrimArith",
          "package": "ddc-core-tetra",
          "signature": "OpPrimArith -\u003e Type Name",
          "source": "src/DDC-Core-Tetra-Prim-OpPrimArith.html#typeOpPrimArith",
          "type": "function"
        },
        "index": {
          "description": "Take the type of primitive arithmetic operator",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "typeOpPrimArith",
          "normalized": "OpPrimArith-\u003eType Name",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith",
          "signature": "OpPrimArith-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:typeOpPrimArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the type of a primitive arithmetic operator.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Prim",
          "name": "typeOpPrimRef",
          "package": "ddc-core-tetra",
          "signature": "OpPrimRef -\u003e Type Name",
          "source": "src/DDC-Core-Tetra-Prim-OpPrimRef.html#typeOpPrimRef",
          "type": "function"
        },
        "index": {
          "description": "Take the type of primitive arithmetic operator",
          "hierarchy": "DDC Core Tetra Prim",
          "module": "DDC.Core.Tetra.Prim",
          "name": "typeOpPrimRef",
          "normalized": "OpPrimRef-\u003eType Name",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref",
          "signature": "OpPrimRef-\u003eType Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Prim.html#v:typeOpPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLanguage profile for Disciple Core Tetra\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Core.Tetra.Profile",
          "name": "Profile",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Profile.html",
          "type": "module"
        },
        "index": {
          "description": "Language profile for Disciple Core Tetra",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "Profile",
          "package": "ddc-core-tetra",
          "partial": "Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new type variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Profile",
          "name": "freshT",
          "package": "ddc-core-tetra",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Core-Tetra-Profile.html#freshT",
          "type": "function"
        },
        "index": {
          "description": "Create new type variable name that is not in the given environment",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "freshT",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-core-tetra",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:freshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new value variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra.Profile",
          "name": "freshX",
          "package": "ddc-core-tetra",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Core-Tetra-Profile.html#freshX",
          "type": "function"
        },
        "index": {
          "description": "Create new value variable name that is not in the given environment",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "freshX",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-core-tetra",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:freshX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Profile\",\"DDC.Core.Tetra\"]",
          "name": "lexExpString",
          "package": "ddc-core-tetra",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
          "source": "src/DDC-Core-Tetra-Profile.html#lexExpString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:lexExpString\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:lexExpString\"]"
        },
        "index": {
          "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "lexExpString",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "package": "ddc-core-tetra",
          "partial": "Exp String",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:lexExpString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex a string to tokens, using primitive names.\n\u003c/p\u003e\u003cp\u003eThe first argument gives the starting source line number.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Profile\",\"DDC.Core.Tetra\"]",
          "name": "lexModuleString",
          "package": "ddc-core-tetra",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok Name)]",
          "source": "src/DDC-Core-Tetra-Profile.html#lexModuleString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:lexModuleString\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:lexModuleString\"]"
        },
        "index": {
          "description": "Lex string to tokens using primitive names The first argument gives the starting source line number",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "lexModuleString",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "package": "ddc-core-tetra",
          "partial": "Module String",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:lexModuleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage profile for Disciple Core Flow.\n\u003c/p\u003e",
          "module": "[\"DDC.Core.Tetra.Profile\",\"DDC.Core.Tetra\"]",
          "name": "profile",
          "package": "ddc-core-tetra",
          "signature": "Profile Name",
          "source": "src/DDC-Core-Tetra-Profile.html#profile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:profile\",\"http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#v:profile\"]"
        },
        "index": {
          "description": "Language profile for Disciple Core Flow",
          "hierarchy": "DDC Core Tetra Profile",
          "module": "DDC.Core.Tetra.Profile",
          "name": "profile",
          "package": "ddc-core-tetra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra-Profile.html#v:profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Tetra",
          "name": "Tetra",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Tetra",
          "module": "DDC.Core.Tetra",
          "name": "Tetra",
          "package": "ddc-core-tetra",
          "partial": "Tetra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of things used in Disciple Core Tetra.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra",
          "name": "Name",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Names of things used in Disciple Core Tetra",
          "hierarchy": "DDC Core Tetra",
          "module": "DDC.Core.Tetra",
          "name": "Name",
          "package": "ddc-core-tetra",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive arithmetic, logic, and comparison opretors.\n   We expect the backend/machine to be able to implement these directly.\n\u003c/p\u003e\u003cp\u003eFor the Shift Right operator, the type that it is used at determines\n   whether it is an arithmetic (with sign-extension) or logical\n   (no sign-extension) shift.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra",
          "name": "OpPrimArith",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimArith",
          "type": "data"
        },
        "index": {
          "description": "Primitive arithmetic logic and comparison opretors We expect the backend machine to be able to implement these directly For the Shift Right operator the type that it is used at determines whether it is an arithmetic with sign-extension or logical no sign-extension shift",
          "hierarchy": "DDC Core Tetra",
          "module": "DDC.Core.Tetra",
          "name": "OpPrimArith",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Arith",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#t:OpPrimArith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable References.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra",
          "name": "OpPrimRef",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#OpPrimRef",
          "type": "data"
        },
        "index": {
          "description": "Mutable References",
          "hierarchy": "DDC Core Tetra",
          "module": "DDC.Core.Tetra",
          "name": "OpPrimRef",
          "package": "ddc-core-tetra",
          "partial": "Op Prim Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#t:OpPrimRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive type constructors.\n\u003c/p\u003e",
          "module": "DDC.Core.Tetra",
          "name": "TyConPrim",
          "package": "ddc-core-tetra",
          "source": "src/DDC-Core-Tetra-Prim-Base.html#TyConPrim",
          "type": "data"
        },
        "index": {
          "description": "Primitive type constructors",
          "hierarchy": "DDC Core Tetra",
          "module": "DDC.Core.Tetra",
          "name": "TyConPrim",
          "package": "ddc-core-tetra",
          "partial": "Ty Con Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-tetra/docs/DDC-Core-Tetra.html#t:TyConPrim"
      }
    }
  ]
]