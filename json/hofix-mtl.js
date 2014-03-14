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
        "word": "hofix-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances for \u003ccode\u003emtl\u003c/code\u003e interface classes via \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e for\n monads defined using \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.StarToStar.Fix",
          "name": "Fix",
          "package": "hofix-mtl",
          "source": "src/Control-Monad-StarToStar-Fix.html",
          "type": "module"
        },
        "index": {
          "description": "Instances for mtl interface classes via Iso for monads defined using Fix",
          "hierarchy": "Control Monad StarToStar Fix",
          "module": "Control.Monad.StarToStar.Fix",
          "name": "Fix",
          "package": "hofix-mtl",
          "partial": "Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Control-Monad-StarToStar-Fix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA template haskell definition for automatically generating the instance for\n \u003ccode\u003eData.StarToStar.Iso.Iso\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e decl_fix \"ReaderST\" [\"s\"] [t| ReaderT (Map String ($me Int) (ST $(tvar \"s\")) |]\n\u003c/pre\u003e\u003cp\u003egenerates\n\u003c/p\u003e\u003cpre\u003e\n newtype ReaderST s me a = ReaderST (ReaderT (Map String (me Int)) (ST s) a)\n unReaderST (ReaderST x) = x\n type ReaderST_inner s me = ReaderT (Map String (me Int)) (ST s)\n\u003c/pre\u003e\u003cpre\u003e\n instance Iso (Fix (ReaderST s)) where\n   type Other (Fix (ReaderST s)) = ReaderST_inner s (Fix (ReaderST s))\n   from = unReaderST . fromFix\n   to = toFix . ReaderST\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.StarToStar.Iso.TH",
          "name": "TH",
          "package": "hofix-mtl",
          "source": "src/Data-StarToStar-Iso-TH.html",
          "type": "module"
        },
        "index": {
          "description": "template haskell definition for automatically generating the instance for Data.StarToStar.Iso.Iso For example decl fix ReaderST ReaderT Map String me Int ST tvar generates newtype ReaderST me ReaderST ReaderT Map String me Int ST unReaderST ReaderST type ReaderST inner me ReaderT Map String me Int ST instance Iso Fix ReaderST where type Other Fix ReaderST ReaderST inner Fix ReaderST from unReaderST fromFix to toFix ReaderST",
          "hierarchy": "Data StarToStar Iso TH",
          "module": "Data.StarToStar.Iso.TH",
          "name": "TH",
          "package": "hofix-mtl",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso.TH",
          "name": "decl_fix",
          "package": "hofix-mtl",
          "signature": "String -\u003e [String] -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Data-StarToStar-Iso-TH.html#decl_fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso TH",
          "module": "Data.StarToStar.Iso.TH",
          "name": "decl_fix",
          "normalized": "String-\u003e[String]-\u003eQ Type-\u003eQ[Dec]",
          "package": "hofix-mtl",
          "signature": "String-\u003e[String]-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:decl_fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso.TH",
          "name": "decl_fix_kinds",
          "package": "hofix-mtl",
          "signature": "String -\u003e [TyVarBndr] -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Data-StarToStar-Iso-TH.html#decl_fix_kinds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso TH",
          "module": "Data.StarToStar.Iso.TH",
          "name": "decl_fix_kinds",
          "normalized": "String-\u003e[TyVarBndr]-\u003eQ Type-\u003eQ[Dec]",
          "package": "hofix-mtl",
          "signature": "String-\u003e[TyVarBndr]-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:decl_fix_kinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso.TH",
          "name": "me",
          "package": "hofix-mtl",
          "signature": "TypeQ",
          "source": "src/Data-StarToStar-Iso-TH.html#me",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso TH",
          "module": "Data.StarToStar.Iso.TH",
          "name": "me",
          "package": "hofix-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:me"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso.TH",
          "name": "tvar",
          "package": "hofix-mtl",
          "signature": "String -\u003e TypeQ",
          "source": "src/Data-StarToStar-Iso-TH.html#tvar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso TH",
          "module": "Data.StarToStar.Iso.TH",
          "name": "tvar",
          "normalized": "String-\u003eTypeQ",
          "package": "hofix-mtl",
          "signature": "String-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:tvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe * -\u003e * isomorphism class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StarToStar.Iso",
          "name": "Iso",
          "package": "hofix-mtl",
          "source": "src/Data-StarToStar-Iso.html",
          "type": "module"
        },
        "index": {
          "description": "The isomorphism class",
          "hierarchy": "Data StarToStar Iso",
          "module": "Data.StarToStar.Iso",
          "name": "Iso",
          "package": "hofix-mtl",
          "partial": "Iso",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso",
          "name": "Iso",
          "package": "hofix-mtl",
          "source": "src/Data-StarToStar-Iso.html#Iso",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso",
          "module": "Data.StarToStar.Iso",
          "name": "Iso",
          "package": "hofix-mtl",
          "partial": "Iso",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso",
          "name": "from",
          "package": "hofix-mtl",
          "signature": "f a -\u003e Other f a",
          "source": "src/Data-StarToStar-Iso.html#from",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso",
          "module": "Data.StarToStar.Iso",
          "name": "from",
          "normalized": "a b-\u003eOther a b",
          "package": "hofix-mtl",
          "signature": "f a-\u003eOther f a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Iso",
          "name": "to",
          "package": "hofix-mtl",
          "signature": "Other f a -\u003e f a",
          "source": "src/Data-StarToStar-Iso.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data StarToStar Iso",
          "module": "Data.StarToStar.Iso",
          "name": "to",
          "normalized": "Other a b-\u003ea b",
          "package": "hofix-mtl",
          "signature": "Other f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#v:to"
      }
    }
  ]
]