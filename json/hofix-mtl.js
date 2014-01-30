[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Control-Monad-StarToStar-Fix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances for \u003ccode\u003emtl\u003c/code\u003e interface classes via \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e for\n monads defined using \u003ccode\u003e\u003ca\u003eFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.StarToStar.Fix",
        "fct-package": "hofix-mtl",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-StarToStar-Fix.html",
        "fct-type": "module",
        "title": "Fix"
      },
      "index": {
        "description": "Instances for mtl interface classes via Iso for monads defined using Fix",
        "hierarchy": "Control Monad StarToStar Fix",
        "module": "Control.Monad.StarToStar.Fix",
        "name": "Fix",
        "normalized": "",
        "package": "hofix-mtl",
        "partial": "Fix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA template haskell definition for automatically generating the instance for\n \u003ccode\u003eData.StarToStar.Iso.Iso\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e decl_fix \"ReaderST\" [\"s\"] [t| ReaderT (Map String ($me Int) (ST $(tvar \"s\")) |]\n\u003c/pre\u003e\u003cp\u003egenerates\n\u003c/p\u003e\u003cpre\u003e\n newtype ReaderST s me a = ReaderST (ReaderT (Map String (me Int)) (ST s) a)\n unReaderST (ReaderST x) = x\n type ReaderST_inner s me = ReaderT (Map String (me Int)) (ST s)\n\u003c/pre\u003e\u003cpre\u003e\n instance Iso (Fix (ReaderST s)) where\n   type Other (Fix (ReaderST s)) = ReaderST_inner s (Fix (ReaderST s))\n   from = unReaderST . fromFix\n   to = toFix . ReaderST\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.StarToStar.Iso.TH",
        "fct-package": "hofix-mtl",
        "fct-signature": "module",
        "fct-source": "src/Data-StarToStar-Iso-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "template haskell definition for automatically generating the instance for Data.StarToStar.Iso.Iso For example decl fix ReaderST ReaderT Map String me Int ST tvar generates newtype ReaderST me ReaderST ReaderT Map String me Int ST unReaderST ReaderST type ReaderST inner me ReaderT Map String me Int ST instance Iso Fix ReaderST where type Other Fix ReaderST ReaderST inner Fix ReaderST from unReaderST fromFix to toFix ReaderST",
        "hierarchy": "Data StarToStar Iso TH",
        "module": "Data.StarToStar.Iso.TH",
        "name": "TH",
        "normalized": "",
        "package": "hofix-mtl",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:decl_fix",
      "description": {
        "fct-module": "Data.StarToStar.Iso.TH",
        "fct-package": "hofix-mtl",
        "fct-signature": "String -\u003e [String] -\u003e Q Type -\u003e Q [Dec]",
        "fct-source": "src/Data-StarToStar-Iso-TH.html#decl_fix",
        "fct-type": "function",
        "title": "decl_fix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso TH",
        "module": "Data.StarToStar.Iso.TH",
        "name": "decl_fix",
        "normalized": "String-\u003e[String]-\u003eQ Type-\u003eQ[Dec]",
        "package": "hofix-mtl",
        "partial": "",
        "signature": "String-\u003e[String]-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:decl_fix_kinds",
      "description": {
        "fct-module": "Data.StarToStar.Iso.TH",
        "fct-package": "hofix-mtl",
        "fct-signature": "String -\u003e [TyVarBndr] -\u003e Q Type -\u003e Q [Dec]",
        "fct-source": "src/Data-StarToStar-Iso-TH.html#decl_fix_kinds",
        "fct-type": "function",
        "title": "decl_fix_kinds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso TH",
        "module": "Data.StarToStar.Iso.TH",
        "name": "decl_fix_kinds",
        "normalized": "String-\u003e[TyVarBndr]-\u003eQ Type-\u003eQ[Dec]",
        "package": "hofix-mtl",
        "partial": "",
        "signature": "String-\u003e[TyVarBndr]-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:me",
      "description": {
        "fct-module": "Data.StarToStar.Iso.TH",
        "fct-package": "hofix-mtl",
        "fct-signature": "TypeQ",
        "fct-source": "src/Data-StarToStar-Iso-TH.html#me",
        "fct-type": "function",
        "title": "me"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso TH",
        "module": "Data.StarToStar.Iso.TH",
        "name": "me",
        "normalized": "",
        "package": "hofix-mtl",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso-TH.html#v:tvar",
      "description": {
        "fct-module": "Data.StarToStar.Iso.TH",
        "fct-package": "hofix-mtl",
        "fct-signature": "String -\u003e TypeQ",
        "fct-source": "src/Data-StarToStar-Iso-TH.html#tvar",
        "fct-type": "function",
        "title": "tvar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso TH",
        "module": "Data.StarToStar.Iso.TH",
        "name": "tvar",
        "normalized": "String-\u003eTypeQ",
        "package": "hofix-mtl",
        "partial": "",
        "signature": "String-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe * -\u003e * isomorphism class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StarToStar.Iso",
        "fct-package": "hofix-mtl",
        "fct-signature": "module",
        "fct-source": "src/Data-StarToStar-Iso.html",
        "fct-type": "module",
        "title": "Iso"
      },
      "index": {
        "description": "The isomorphism class",
        "hierarchy": "Data StarToStar Iso",
        "module": "Data.StarToStar.Iso",
        "name": "Iso",
        "normalized": "",
        "package": "hofix-mtl",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#t:Iso",
      "description": {
        "fct-module": "Data.StarToStar.Iso",
        "fct-package": "hofix-mtl",
        "fct-signature": "class",
        "fct-source": "src/Data-StarToStar-Iso.html#Iso",
        "fct-type": "class",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso",
        "module": "Data.StarToStar.Iso",
        "name": "Iso",
        "normalized": "",
        "package": "hofix-mtl",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#v:from",
      "description": {
        "fct-module": "Data.StarToStar.Iso",
        "fct-package": "hofix-mtl",
        "fct-signature": "f a -\u003e Other f a",
        "fct-source": "src/Data-StarToStar-Iso.html#from",
        "fct-type": "method",
        "title": "from"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso",
        "module": "Data.StarToStar.Iso",
        "name": "from",
        "normalized": "a b-\u003eOther a b",
        "package": "hofix-mtl",
        "partial": "",
        "signature": "f a-\u003eOther f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hofix-mtl/docs/Data-StarToStar-Iso.html#v:to",
      "description": {
        "fct-module": "Data.StarToStar.Iso",
        "fct-package": "hofix-mtl",
        "fct-signature": "Other f a -\u003e f a",
        "fct-source": "src/Data-StarToStar-Iso.html#to",
        "fct-type": "method",
        "title": "to"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StarToStar Iso",
        "module": "Data.StarToStar.Iso",
        "name": "to",
        "normalized": "Other a b-\u003ea b",
        "package": "hofix-mtl",
        "partial": "",
        "signature": "Other f a-\u003ef a"
      }
    }
  }
]