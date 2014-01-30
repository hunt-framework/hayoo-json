[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eGHC.Syb.Instances\u003c/a\u003e provides instances of Data/Typeable\n     for Ghc Api types, using standalone deriving.\n\u003c/p\u003e\u003cp\u003eMost instances are standard; to provide \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances \nabstract types, we use one of two schemes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e no traversal: \u003ccode\u003e\u003ca\u003eSrcSpan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eModuleName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOccName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, \n                \u003ccode\u003e\u003ca\u003eFastString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDataCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTyCon\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eClass\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n    abstractConstr   n = mkConstr (abstractDataType n) (\u003ca\u003e{abstract:\u003c/a\u003e++n++\u003ca\u003e}\u003c/a\u003e) [] Prefix\n    abstractDataType n = mkDataType n [abstractConstr n]\n\u003c/pre\u003e\u003cpre\u003e\n    instance Data SrcSpan where\n      -- don't traverse?\n      toConstr _   = abstractConstr \u003ca\u003eSrcSpan\u003c/a\u003e\n      gunfold _ _  = error \u003ca\u003egunfold\u003c/a\u003e\n      dataTypeOf _ = mkNoRepType \u003ca\u003eSrcSpan\u003c/a\u003e\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e abstract traversal: \u003ccode\u003e\u003ca\u003eNameSet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBag\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n    instance Data NameSet where\n      gfoldl k z s = z mkNameSet \u003ccode\u003ek\u003c/code\u003e nameSetToList s -- traverse abstractly\n      toConstr _   = abstractConstr \u003ca\u003eNameSet\u003c/a\u003e\n      gunfold _ _  = error \u003ca\u003egunfold\u003c/a\u003e\n      dataTypeOf _ = mkNoRepType \u003ca\u003eNameSet\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003ePlease report any issues, either with these abstract instances or with\nthese modules going out of sync with GHC head, to the package maintainer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "module",
        "fct-source": "src/GHC-SYB-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "GHC.Syb.Instances provides instances of Data Typeable for Ghc Api types using standalone deriving Most instances are standard to provide Data instances abstract types we use one of two schemes no traversal SrcSpan Module ModuleName OccName Name FastString DataCon Var TyCon Class abstractConstr mkConstr abstractDataType abstract Prefix abstractDataType mkDataType abstractConstr instance Data SrcSpan where don traverse toConstr abstractConstr SrcSpan gunfold error gunfold dataTypeOf mkNoRepType SrcSpan abstract traversal NameSet Bag instance Data NameSet where gfoldl mkNameSet nameSetToList traverse abstractly toConstr abstractConstr NameSet gunfold error gunfold dataTypeOf mkNoRepType NameSet Please report any issues either with these abstract instances or with these modules going out of sync with GHC head to the package maintainer",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:bagTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#bagTc",
        "fct-type": "function",
        "title": "bagTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "bagTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:classTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#classTc",
        "fct-type": "function",
        "title": "classTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "classTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:dataConTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#dataConTc",
        "fct-type": "function",
        "title": "dataConTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "dataConTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Con Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:moduleNameTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#moduleNameTc",
        "fct-type": "function",
        "title": "moduleNameTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "moduleNameTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Name Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:moduleTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#moduleTc",
        "fct-type": "function",
        "title": "moduleTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "moduleTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:nameSetTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#nameSetTc",
        "fct-type": "function",
        "title": "nameSetTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "nameSetTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Set Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:nameTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#nameTc",
        "fct-type": "function",
        "title": "nameTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "nameTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:occNameTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#occNameTc",
        "fct-type": "function",
        "title": "occNameTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "occNameTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Name Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:srcSpanTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#srcSpanTc",
        "fct-type": "function",
        "title": "srcSpanTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "srcSpanTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Span Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:tyConTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#tyConTc",
        "fct-type": "function",
        "title": "tyConTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "tyConTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Con Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-syb/docs/GHC-SYB-Instances.html#v:varTc",
      "description": {
        "fct-module": "GHC.SYB.Instances",
        "fct-package": "ghc-syb",
        "fct-signature": "TyCon",
        "fct-source": "src/GHC-SYB-Instances.html#varTc",
        "fct-type": "function",
        "title": "varTc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC SYB Instances",
        "module": "GHC.SYB.Instances",
        "name": "varTc",
        "normalized": "",
        "package": "ghc-syb",
        "partial": "Tc",
        "signature": ""
      }
    }
  }
]