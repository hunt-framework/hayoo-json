[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-CostCentreTree.html",
        "fct-type": "module",
        "title": "CostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "CostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:buildCallSitesOrderBy",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e Text-\u003e Text-\u003e CostCentreTree-\u003e Maybe (Callee, Seq CallSite)",
        "fct-type": "function",
        "title": "buildCallSitesOrderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "buildCallSitesOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eCostCentreTree-\u003eMaybe(Callee,Seq CallSite)",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Sites Order By",
        "signature": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eCostCentreTree-\u003eMaybe(Callee,Seq CallSite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:buildCostCentresOrderBy",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e CostCentreTree-\u003e Maybe (Tree CostCentre)",
        "fct-type": "function",
        "title": "buildCostCentresOrderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "buildCostCentresOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eCostCentreTree-\u003eMaybe(Tree CostCentre)",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres Order By",
        "signature": "(CostCentre-\u003ea)-\u003eCostCentreTree-\u003eMaybe(Tree CostCentre)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSites",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a list of call-sites (caller functions) for a specified\n cost-centre name and module name.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
        "fct-type": "function",
        "title": "profileCallSites"
      },
      "index": {
        "description": "Build list of call-sites caller functions for specified cost-centre name and module name",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "profileCallSites",
        "normalized": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Sites",
        "signature": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSitesOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a list of call-sites (caller function) for a specified\n cost-centre name and module name. Nodes are sorted by the given\n key function.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
        "fct-type": "function",
        "title": "profileCallSitesOrderBy"
      },
      "index": {
        "description": "Build list of call-sites caller function for specified cost-centre name and module name Nodes are sorted by the given key function",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "profileCallSitesOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Sites Order By",
        "signature": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentres",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TimeAllocProfile -\u003e Maybe (Tree CostCentre)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-CostCentreTree.html#profileCostCentres",
        "fct-type": "function",
        "title": "profileCostCentres"
      },
      "index": {
        "description": "Build tree of cost-centres from profiling report",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "profileCostCentres",
        "normalized": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres",
        "signature": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentresOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n Nodes are sorted by the given key function for each level\n of the tree.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e TimeAllocProfile-\u003e Maybe (Tree CostCentre)",
        "fct-type": "function",
        "title": "profileCostCentresOrderBy"
      },
      "index": {
        "description": "Build tree of cost-centres from profiling report Nodes are sorted by the given key function for each level of the tree",
        "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
        "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
        "name": "profileCostCentresOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres Order By",
        "signature": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:briefCostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser BriefCostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#briefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "briefCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:commandLine",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#commandLine",
        "fct-type": "function",
        "title": "commandLine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "commandLine",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:costCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser CostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#costCentre",
        "fct-type": "function",
        "title": "costCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "costCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:costCentres",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser CostCentreTree",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#costCentres",
        "fct-type": "function",
        "title": "costCentres"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "costCentres",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centres",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:hotCostCentres",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser [BriefCostCentre]",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#hotCostCentres",
        "fct-type": "function",
        "title": "hotCostCentres"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "hotCostCentres",
        "normalized": "Parser[BriefCostCentre]",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres",
        "signature": "Parser[BriefCostCentre]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:timeAllocProfile",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser TimeAllocProfile",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#timeAllocProfile",
        "fct-type": "function",
        "title": "timeAllocProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "timeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:timestamp",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser LocalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#timestamp",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "timestamp",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:title",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "title",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:totalAlloc",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser TotalAlloc",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#totalAlloc",
        "fct-type": "function",
        "title": "totalAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "totalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:totalTime",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Parser",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser TotalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#totalTime",
        "fct-type": "function",
        "title": "totalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Parser",
        "module": "GHC.RTS.TimeAllocProfile.Parser",
        "name": "totalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "Types",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:BriefCostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "data",
        "title": "BriefCostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "BriefCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Brief Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CallSite",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "data",
        "title": "CallSite"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CallSite",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:Callee",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "data",
        "title": "Callee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "Callee",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Callee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentre",
      "description": {
        "fct-descr": "\u003cp\u003eCost-centre node\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "data",
        "title": "CostCentre"
      },
      "index": {
        "description": "Cost-centre node",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentreNo",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "type",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreNo",
        "fct-type": "type",
        "title": "CostCentreNo"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CostCentreNo",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentreTree",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "data",
        "title": "CostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TimeAllocProfile",
      "description": {
        "fct-descr": "\u003cp\u003eTop-level profiling report\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "data",
        "title": "TimeAllocProfile"
      },
      "index": {
        "description": "Top-level profiling report",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TimeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TotalAlloc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etotal alloc\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "newtype",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "newtype",
        "title": "TotalAlloc"
      },
      "index": {
        "description": "total alloc in the profiling reports",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TotalTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etotal time\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "data",
        "title": "TotalTime"
      },
      "index": {
        "description": "total time in the profiling reports",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:BriefCostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "BriefCostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "BriefCostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "BriefCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Brief Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CallSite",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CallSite",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "CallSite"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CallSite",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:Callee",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Callee",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "Callee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "Callee",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Callee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "CostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CostCentreTree",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreTree",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "function",
        "title": "CostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "CostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TimeAllocProfile",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TimeAllocProfile",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "TimeAllocProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TimeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalAlloc",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalAlloc",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "function",
        "title": "TotalAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalTime",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "TotalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "TotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eTotal allocation in the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreAlloc"
      },
      "index": {
        "description": "Total allocation in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreBytes",
      "description": {
        "fct-descr": "\u003cp\u003eTotal memory allocation in the cost-centre. This number\n exists only if \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreBytes"
      },
      "index": {
        "description": "Total memory allocation in the cost-centre This number exists only if or Pa option is given at run-time",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreModule"
      },
      "index": {
        "description": "Module name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreName"
      },
      "index": {
        "description": "Name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTicks",
      "description": {
        "fct-descr": "\u003cp\u003eTotal ticks in the cost-centre. This number exists only if\n \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreTicks"
      },
      "index": {
        "description": "Total ticks in the cost-centre This number exists only if or Pa option is given at run-time",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTime",
      "description": {
        "fct-descr": "\u003cp\u003eTotal time spent in the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreTime"
      },
      "index": {
        "description": "Total time spent in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "briefCostCentreTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribAlloc"
      },
      "index": {
        "description": "Allocation contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteContribAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes contributed byt hte caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribBytes"
      },
      "index": {
        "description": "Number of allocated bytes contributed byt hte caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteContribBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries contriubted by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribEntries"
      },
      "index": {
        "description": "Number of entries contriubted by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteContribEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of tikcs contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribTicks"
      },
      "index": {
        "description": "Number of tikcs contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteContribTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribTime"
      },
      "index": {
        "description": "Time contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteContribTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteCostCentre",
      "description": {
        "fct-descr": "\u003cp\u003eMetrics for the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteCostCentre"
      },
      "index": {
        "description": "Metrics for the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "callSiteCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeAlloc"
      },
      "index": {
        "description": "Allocation incurred by the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeBytes"
      },
      "index": {
        "description": "Number of allocated bytes in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries to the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeEntries"
      },
      "index": {
        "description": "Number of entries to the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the calle function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeModule"
      },
      "index": {
        "description": "Module name of the calle function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeName"
      },
      "index": {
        "description": "Name of the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of ticks in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeTicks"
      },
      "index": {
        "description": "Number of ticks in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeTime"
      },
      "index": {
        "description": "Time spent in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "calleeTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes in the cost-centre.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreBytes"
      },
      "index": {
        "description": "Number of allocated bytes in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreCallSites",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Map (Text, Text) (Seq CostCentre))",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "function",
        "title": "costCentreCallSites"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreCallSites",
        "normalized": "(Map(Text,Text)(Seq CostCentre))",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Call Sites",
        "signature": "(Map(Text,Text)(Seq CostCentre))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreChildren",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(IntMap (Seq CostCentre))",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "function",
        "title": "costCentreChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreChildren",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries to the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreEntries"
      },
      "index": {
        "description": "Number of entries to the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the cost-centre itself\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreIndAlloc"
      },
      "index": {
        "description": "Allocation incurred by the cost-centre itself",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreIndAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ind Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the cost-centre itself\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreIndTime"
      },
      "index": {
        "description": "Time spent in the cost-centre itself",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreIndTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ind Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the cost-centre's children\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreInhAlloc"
      },
      "index": {
        "description": "Allocation incurred by the cost-centre children",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreInhAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Inh Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the cost-centre's children\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreInhTime"
      },
      "index": {
        "description": "Time spent in the cost-centre children",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreInhTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Inh Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreModule"
      },
      "index": {
        "description": "Module name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreName"
      },
      "index": {
        "description": "Name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreNo",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreNo",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreNo"
      },
      "index": {
        "description": "Identifier of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreNo",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreNodes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(IntMap CostCentre)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "function",
        "title": "costCentreNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreNodes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreParents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(IntMap CostCentreNo)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "function",
        "title": "costCentreParents"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreParents",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Parents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of ticks in the cost-centre.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreTicks"
      },
      "index": {
        "description": "Number of ticks in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "costCentreTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:emptyCostCentreTree",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreTree",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#emptyCostCentreTree",
        "fct-type": "function",
        "title": "emptyCostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "emptyCostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCommandLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileCommandLine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileCommandLine",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Command Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCostCentreTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreTree",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileCostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileCostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileHotCostCentres",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "[BriefCostCentre]",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileHotCostCentres"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileHotCostCentres",
        "normalized": "[BriefCostCentre]",
        "package": "ghc-time-alloc-prof",
        "partial": "Hot Cost Centres",
        "signature": "[BriefCostCentre]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTimestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "LocalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileTimestamp",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalAlloc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalAlloc",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTotalAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileTotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTotalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "profileTotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalAllocBytes",
      "description": {
        "fct-descr": "\u003cp\u003eTotal memory allocation in bytes\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "function",
        "title": "totalAllocBytes"
      },
      "index": {
        "description": "Total memory allocation in bytes",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "totalAllocBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeElapsed",
      "description": {
        "fct-descr": "\u003cp\u003eTotal elapsed time in seconds\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "DiffTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeElapsed"
      },
      "index": {
        "description": "Total elapsed time in seconds",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "totalTimeElapsed",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Elapsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeProcessors",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of processors\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Int",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeProcessors"
      },
      "index": {
        "description": "Number of processors",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "totalTimeProcessors",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Processors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeResolution",
      "description": {
        "fct-descr": "\u003cp\u003eDuration of a tick\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "DiffTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeResolution"
      },
      "index": {
        "description": "Duration of tick",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "totalTimeResolution",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Resolution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeTicks",
      "description": {
        "fct-descr": "\u003cp\u003eTotal number of ticks\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile.Types",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeTicks"
      },
      "index": {
        "description": "Total number of ticks",
        "hierarchy": "GHC RTS TimeAllocProfile Types",
        "module": "GHC.RTS.TimeAllocProfile.Types",
        "name": "totalTimeTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "module",
        "fct-source": "src/GHC-RTS-TimeAllocProfile.html",
        "fct-type": "module",
        "title": "TimeAllocProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TimeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:BriefCostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "data",
        "title": "BriefCostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "BriefCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Brief Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CallSite",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "data",
        "title": "CallSite"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CallSite",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:Callee",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "data",
        "title": "Callee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "Callee",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Callee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentre",
      "description": {
        "fct-descr": "\u003cp\u003eCost-centre node\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "data",
        "title": "CostCentre"
      },
      "index": {
        "description": "Cost-centre node",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentreNo",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "type",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreNo",
        "fct-type": "type",
        "title": "CostCentreNo"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CostCentreNo",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentreTree",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
        "fct-type": "data",
        "title": "CostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TimeAllocProfile",
      "description": {
        "fct-descr": "\u003cp\u003eTop-level profiling report\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "data",
        "title": "TimeAllocProfile"
      },
      "index": {
        "description": "Top-level profiling report",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TimeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TotalAlloc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etotal alloc\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "newtype",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "newtype",
        "title": "TotalAlloc"
      },
      "index": {
        "description": "total alloc in the profiling reports",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TotalTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etotal time\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "data",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "data",
        "title": "TotalTime"
      },
      "index": {
        "description": "total time in the profiling reports",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:BriefCostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "BriefCostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "BriefCostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "BriefCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Brief Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:CallSite",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CallSite",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "CallSite"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CallSite",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:Callee",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Callee",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "Callee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "Callee",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Callee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:CostCentre",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "CostCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "CostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TimeAllocProfile",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TimeAllocProfile",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "TimeAllocProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TimeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TotalAlloc",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalAlloc",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "function",
        "title": "TotalAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TotalTime",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "TotalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "TotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eTotal allocation in the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreAlloc"
      },
      "index": {
        "description": "Total allocation in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreBytes",
      "description": {
        "fct-descr": "\u003cp\u003eTotal memory allocation in the cost-centre. This number\n exists only if \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreBytes"
      },
      "index": {
        "description": "Total memory allocation in the cost-centre This number exists only if or Pa option is given at run-time",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreModule"
      },
      "index": {
        "description": "Module name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreName"
      },
      "index": {
        "description": "Name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreTicks",
      "description": {
        "fct-descr": "\u003cp\u003eTotal ticks in the cost-centre. This number exists only if\n \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreTicks"
      },
      "index": {
        "description": "Total ticks in the cost-centre This number exists only if or Pa option is given at run-time",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreTime",
      "description": {
        "fct-descr": "\u003cp\u003eTotal time spent in the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
        "fct-type": "function",
        "title": "briefCostCentreTime"
      },
      "index": {
        "description": "Total time spent in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "briefCostCentreTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribAlloc"
      },
      "index": {
        "description": "Allocation contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteContribAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes contributed byt hte caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribBytes"
      },
      "index": {
        "description": "Number of allocated bytes contributed byt hte caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteContribBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries contriubted by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribEntries"
      },
      "index": {
        "description": "Number of entries contriubted by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteContribEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of tikcs contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribTicks"
      },
      "index": {
        "description": "Number of tikcs contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteContribTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime contributed by the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteContribTime"
      },
      "index": {
        "description": "Time contributed by the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteContribTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Contrib Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteCostCentre",
      "description": {
        "fct-descr": "\u003cp\u003eMetrics for the caller function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentre",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
        "fct-type": "function",
        "title": "callSiteCostCentre"
      },
      "index": {
        "description": "Metrics for the caller function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "callSiteCostCentre",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Site Cost Centre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeAlloc"
      },
      "index": {
        "description": "Allocation incurred by the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeBytes"
      },
      "index": {
        "description": "Number of allocated bytes in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries to the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeEntries"
      },
      "index": {
        "description": "Number of entries to the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the calle function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeModule"
      },
      "index": {
        "description": "Module name of the calle function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeName"
      },
      "index": {
        "description": "Name of the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of ticks in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!(Maybe Integer)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeTicks"
      },
      "index": {
        "description": "Number of ticks in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the callee function\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "!Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
        "fct-type": "function",
        "title": "calleeTime"
      },
      "index": {
        "description": "Time spent in the callee function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "calleeTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreBytes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated bytes in the cost-centre.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreBytes"
      },
      "index": {
        "description": "Number of allocated bytes in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreEntries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries to the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreEntries"
      },
      "index": {
        "description": "Number of entries to the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreEntries",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreIndAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the cost-centre itself\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreIndAlloc"
      },
      "index": {
        "description": "Allocation incurred by the cost-centre itself",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreIndAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ind Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreIndTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the cost-centre itself\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreIndTime"
      },
      "index": {
        "description": "Time spent in the cost-centre itself",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreIndTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ind Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreInhAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocation incurred by the cost-centre's children\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreInhAlloc"
      },
      "index": {
        "description": "Allocation incurred by the cost-centre children",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreInhAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Inh Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreInhTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime spent in the cost-centre's children\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Double",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreInhTime"
      },
      "index": {
        "description": "Time spent in the cost-centre children",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreInhTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Inh Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreModule",
      "description": {
        "fct-descr": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreModule"
      },
      "index": {
        "description": "Module name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreModule",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreName"
      },
      "index": {
        "description": "Name of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreName",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreNo",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifier of the cost-centre\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreNo",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreNo"
      },
      "index": {
        "description": "Identifier of the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreNo",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreTicks",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of ticks in the cost-centre.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Maybe Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
        "fct-type": "function",
        "title": "costCentreTicks"
      },
      "index": {
        "description": "Number of ticks in the cost-centre",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "costCentreTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Centre Ticks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCallSites",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a list of call-sites (caller functions) for a specified\n cost-centre name and module name.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
        "fct-type": "function",
        "title": "profileCallSites"
      },
      "index": {
        "description": "Build list of call-sites caller functions for specified cost-centre name and module name",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCallSites",
        "normalized": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Sites",
        "signature": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCallSitesOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a list of call-sites (caller function) for a specified\n cost-centre name and module name. Nodes are sorted by the given\n key function.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
        "fct-type": "function",
        "title": "profileCallSitesOrderBy"
      },
      "index": {
        "description": "Build list of call-sites caller function for specified cost-centre name and module name Nodes are sorted by the given key function",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCallSitesOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
        "package": "ghc-time-alloc-prof",
        "partial": "Call Sites Order By",
        "signature": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCommandLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Text",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileCommandLine"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCommandLine",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Command Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentreTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "CostCentreTree",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileCostCentreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCostCentreTree",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centre Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentres",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TimeAllocProfile -\u003e Maybe (Tree CostCentre)",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-CostCentreTree.html#profileCostCentres",
        "fct-type": "function",
        "title": "profileCostCentres"
      },
      "index": {
        "description": "Build tree of cost-centres from profiling report",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCostCentres",
        "normalized": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres",
        "signature": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentresOrderBy",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n Nodes are sorted by the given key function for each level\n of the tree.\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "(CostCentre -\u003e a)-\u003e TimeAllocProfile-\u003e Maybe (Tree CostCentre)",
        "fct-type": "function",
        "title": "profileCostCentresOrderBy"
      },
      "index": {
        "description": "Build tree of cost-centres from profiling report Nodes are sorted by the given key function for each level of the tree",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileCostCentresOrderBy",
        "normalized": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)",
        "package": "ghc-time-alloc-prof",
        "partial": "Cost Centres Order By",
        "signature": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileHotCostCentres",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "[BriefCostCentre]",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileHotCostCentres"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileHotCostCentres",
        "normalized": "[BriefCostCentre]",
        "package": "ghc-time-alloc-prof",
        "partial": "Hot Cost Centres",
        "signature": "[BriefCostCentre]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTimestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "LocalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTimestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileTimestamp",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTotalAlloc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalAlloc",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTotalAlloc"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileTotalAlloc",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTotalTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "TotalTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
        "fct-type": "function",
        "title": "profileTotalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "profileTotalTime",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Total Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:timeAllocProfile",
      "description": {
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Parser TimeAllocProfile",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Parser.html#timeAllocProfile",
        "fct-type": "function",
        "title": "timeAllocProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "timeAllocProfile",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalAllocBytes",
      "description": {
        "fct-descr": "\u003cp\u003eTotal memory allocation in bytes\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
        "fct-type": "function",
        "title": "totalAllocBytes"
      },
      "index": {
        "description": "Total memory allocation in bytes",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "totalAllocBytes",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Alloc Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeElapsed",
      "description": {
        "fct-descr": "\u003cp\u003eTotal elapsed time in seconds\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "DiffTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeElapsed"
      },
      "index": {
        "description": "Total elapsed time in seconds",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "totalTimeElapsed",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Elapsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeProcessors",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of processors\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Int",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeProcessors"
      },
      "index": {
        "description": "Number of processors",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "totalTimeProcessors",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Processors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeResolution",
      "description": {
        "fct-descr": "\u003cp\u003eDuration of a tick\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "DiffTime",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeResolution"
      },
      "index": {
        "description": "Duration of tick",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "totalTimeResolution",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Resolution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeTicks",
      "description": {
        "fct-descr": "\u003cp\u003eTotal number of ticks\n\u003c/p\u003e",
        "fct-module": "GHC.RTS.TimeAllocProfile",
        "fct-package": "ghc-time-alloc-prof",
        "fct-signature": "Integer",
        "fct-source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
        "fct-type": "function",
        "title": "totalTimeTicks"
      },
      "index": {
        "description": "Total number of ticks",
        "hierarchy": "GHC RTS TimeAllocProfile",
        "module": "GHC.RTS.TimeAllocProfile",
        "name": "totalTimeTicks",
        "normalized": "",
        "package": "ghc-time-alloc-prof",
        "partial": "Time Ticks",
        "signature": ""
      }
    }
  }
]