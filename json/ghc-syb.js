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
        "word": "ghc-syb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eGHC.Syb.Instances\u003c/a\u003e provides instances of Data/Typeable\n     for Ghc Api types, using standalone deriving.\n\u003c/p\u003e\u003cp\u003eMost instances are standard; to provide \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances \nabstract types, we use one of two schemes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e no traversal: \u003ccode\u003e\u003ca\u003eSrcSpan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eModuleName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOccName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, \n                \u003ccode\u003e\u003ca\u003eFastString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDataCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTyCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eClass\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n    abstractConstr   n = mkConstr (abstractDataType n) (\u003ca\u003e{abstract:\u003c/a\u003e++n++\u003ca\u003e}\u003c/a\u003e) [] Prefix\n    abstractDataType n = mkDataType n [abstractConstr n]\n\u003c/pre\u003e\u003cpre\u003e\n    instance Data SrcSpan where\n      -- don't traverse?\n      toConstr _   = abstractConstr \u003ca\u003eSrcSpan\u003c/a\u003e\n      gunfold _ _  = error \u003ca\u003egunfold\u003c/a\u003e\n      dataTypeOf _ = mkNoRepType \u003ca\u003eSrcSpan\u003c/a\u003e\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e abstract traversal: \u003ccode\u003e\u003ca\u003eNameSet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBag\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n    instance Data NameSet where\n      gfoldl k z s = z mkNameSet \u003ccode\u003ek\u003c/code\u003e nameSetToList s -- traverse abstractly\n      toConstr _   = abstractConstr \u003ca\u003eNameSet\u003c/a\u003e\n      gunfold _ _  = error \u003ca\u003egunfold\u003c/a\u003e\n      dataTypeOf _ = mkNoRepType \u003ca\u003eNameSet\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003ePlease report any issues, either with these abstract instances or with\nthese modules going out of sync with GHC head, to the package maintainer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.SYB.Instances",
          "name": "Instances",
          "package": "ghc-syb",
          "source": "src/GHC-SYB-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "GHC.Syb.Instances provides instances of Data Typeable for Ghc Api types using standalone deriving Most instances are standard to provide Data instances abstract types we use one of two schemes no traversal SrcSpan Module ModuleName OccName Name FastString DataCon Var TyCon Class abstractConstr mkConstr abstractDataType abstract Prefix abstractDataType mkDataType abstractConstr instance Data SrcSpan where don traverse toConstr abstractConstr SrcSpan gunfold error gunfold dataTypeOf mkNoRepType SrcSpan abstract traversal NameSet Bag instance Data NameSet where gfoldl mkNameSet nameSetToList traverse abstractly toConstr abstractConstr NameSet gunfold error gunfold dataTypeOf mkNoRepType NameSet Please report any issues either with these abstract instances or with these modules going out of sync with GHC head to the package maintainer",
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "Instances",
          "package": "ghc-syb",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "bagTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#bagTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "bagTc",
          "package": "ghc-syb",
          "partial": "Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:bagTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "classTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#classTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "classTc",
          "package": "ghc-syb",
          "partial": "Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:classTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "dataConTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#dataConTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "dataConTc",
          "package": "ghc-syb",
          "partial": "Con Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:dataConTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "moduleNameTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#moduleNameTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "moduleNameTc",
          "package": "ghc-syb",
          "partial": "Name Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:moduleNameTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "moduleTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#moduleTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "moduleTc",
          "package": "ghc-syb",
          "partial": "Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:moduleTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "nameSetTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#nameSetTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "nameSetTc",
          "package": "ghc-syb",
          "partial": "Set Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:nameSetTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "nameTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#nameTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "nameTc",
          "package": "ghc-syb",
          "partial": "Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:nameTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "occNameTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#occNameTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "occNameTc",
          "package": "ghc-syb",
          "partial": "Name Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:occNameTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "srcSpanTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#srcSpanTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "srcSpanTc",
          "package": "ghc-syb",
          "partial": "Span Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:srcSpanTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "tyConTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#tyConTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "tyConTc",
          "package": "ghc-syb",
          "partial": "Con Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:tyConTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.SYB.Instances",
          "name": "varTc",
          "package": "ghc-syb",
          "signature": "TyCon",
          "source": "src/GHC-SYB-Instances.html#varTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC SYB Instances",
          "module": "GHC.SYB.Instances",
          "name": "varTc",
          "package": "ghc-syb",
          "partial": "Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:varTc"
      }
    }
  ]
]