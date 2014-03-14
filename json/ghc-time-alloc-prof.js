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
        "word": "ghc-time-alloc-prof"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-CostCentreTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "buildCallSitesOrderBy",
          "package": "ghc-time-alloc-prof",
          "signature": "(CostCentre -\u003e a)-\u003e Text-\u003e Text-\u003e CostCentreTree-\u003e Maybe (Callee, Seq CallSite)",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "buildCallSitesOrderBy",
          "normalized": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eCostCentreTree-\u003eMaybe(Callee,Seq CallSite)",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Sites Order By",
          "signature": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eCostCentreTree-\u003eMaybe(Callee,Seq CallSite)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:buildCallSitesOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "buildCostCentresOrderBy",
          "package": "ghc-time-alloc-prof",
          "signature": "(CostCentre -\u003e a)-\u003e CostCentreTree-\u003e Maybe (Tree CostCentre)",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "buildCostCentresOrderBy",
          "normalized": "(CostCentre-\u003ea)-\u003eCostCentreTree-\u003eMaybe(Tree CostCentre)",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centres Order By",
          "signature": "(CostCentre-\u003ea)-\u003eCostCentreTree-\u003eMaybe(Tree CostCentre)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:buildCostCentresOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a list of call-sites (caller functions) for a specified\n cost-centre name and module name.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.CostCentreTree\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCallSites",
          "package": "ghc-time-alloc-prof",
          "signature": "Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSites\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCallSites\"]"
        },
        "index": {
          "description": "Build list of call-sites caller functions for specified cost-centre name and module name",
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "profileCallSites",
          "normalized": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Sites",
          "signature": "Text-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a list of call-sites (caller function) for a specified\n cost-centre name and module name. Nodes are sorted by the given\n key function.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.CostCentreTree\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCallSitesOrderBy",
          "package": "ghc-time-alloc-prof",
          "signature": "(CostCentre -\u003e a)-\u003e Text-\u003e Text-\u003e TimeAllocProfile-\u003e Maybe (Callee, Seq CallSite)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSitesOrderBy\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCallSitesOrderBy\"]"
        },
        "index": {
          "description": "Build list of call-sites caller function for specified cost-centre name and module name Nodes are sorted by the given key function",
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "profileCallSitesOrderBy",
          "normalized": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Sites Order By",
          "signature": "(CostCentre-\u003ea)-\u003eText-\u003eText-\u003eTimeAllocProfile-\u003eMaybe(Callee,Seq CallSite)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCallSitesOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.CostCentreTree\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCostCentres",
          "package": "ghc-time-alloc-prof",
          "signature": "TimeAllocProfile -\u003e Maybe (Tree CostCentre)",
          "source": "src/GHC-RTS-TimeAllocProfile-CostCentreTree.html#profileCostCentres",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentres\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentres\"]"
        },
        "index": {
          "description": "Build tree of cost-centres from profiling report",
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "profileCostCentres",
          "normalized": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centres",
          "signature": "TimeAllocProfile-\u003eMaybe(Tree CostCentre)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a tree of cost-centres from a profiling report.\n Nodes are sorted by the given key function for each level\n of the tree.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.CostCentreTree\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCostCentresOrderBy",
          "package": "ghc-time-alloc-prof",
          "signature": "(CostCentre -\u003e a)-\u003e TimeAllocProfile-\u003e Maybe (Tree CostCentre)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentresOrderBy\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentresOrderBy\"]"
        },
        "index": {
          "description": "Build tree of cost-centres from profiling report Nodes are sorted by the given key function for each level of the tree",
          "hierarchy": "GHC RTS TimeAllocProfile CostCentreTree",
          "module": "GHC.RTS.TimeAllocProfile.CostCentreTree",
          "name": "profileCostCentresOrderBy",
          "normalized": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centres Order By",
          "signature": "(CostCentre-\u003ea)-\u003eTimeAllocProfile-\u003eMaybe(Tree CostCentre)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-CostCentreTree.html#v:profileCostCentresOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "Parser",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "Parser",
          "package": "ghc-time-alloc-prof",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "briefCostCentre",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser BriefCostCentre",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#briefCostCentre",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "briefCostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:briefCostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "commandLine",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#commandLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "commandLine",
          "package": "ghc-time-alloc-prof",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:commandLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "costCentre",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser CostCentre",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#costCentre",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "costCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:costCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "costCentres",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser CostCentreTree",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#costCentres",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "costCentres",
          "package": "ghc-time-alloc-prof",
          "partial": "Centres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:costCentres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "hotCostCentres",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser [BriefCostCentre]",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#hotCostCentres",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "hotCostCentres",
          "normalized": "Parser[BriefCostCentre]",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centres",
          "signature": "Parser[BriefCostCentre]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:hotCostCentres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Parser\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "timeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser TimeAllocProfile",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#timeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:timeAllocProfile\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:timeAllocProfile\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "timeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "partial": "Alloc Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:timeAllocProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "timestamp",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser LocalTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "timestamp",
          "package": "ghc-time-alloc-prof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "title",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#title",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "title",
          "package": "ghc-time-alloc-prof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "totalAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser TotalAlloc",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#totalAlloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "totalAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:totalAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "totalTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Parser TotalTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Parser.html#totalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Parser",
          "module": "GHC.RTS.TimeAllocProfile.Parser",
          "name": "totalTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Parser.html#v:totalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "Types",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "Types",
          "package": "ghc-time-alloc-prof",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Brief Cost Centre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:BriefCostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CallSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "partial": "Callee",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:Callee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost-centre node\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "data"
        },
        "index": {
          "description": "Cost-centre node",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreNo",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreNo",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentreNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:CostCentreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level profiling report\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "data"
        },
        "index": {
          "description": "Top-level profiling report",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Alloc Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TimeAllocProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etotal alloc\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
          "type": "newtype"
        },
        "index": {
          "description": "total alloc in the profiling reports",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Alloc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TotalAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etotal time\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "data"
        },
        "index": {
          "description": "total time in the profiling reports",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#t:TotalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "signature": "BriefCostCentre",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:BriefCostCentre\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:BriefCostCentre\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Brief Cost Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:BriefCostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "signature": "CallSite",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CallSite\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:CallSite\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CallSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "signature": "Callee",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:Callee\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:Callee\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "partial": "Callee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:Callee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentre",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CostCentre\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:CostCentre\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentreTree",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:CostCentreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "signature": "TimeAllocProfile",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TimeAllocProfile\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TimeAllocProfile\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Alloc Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TimeAllocProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "TotalAlloc",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TotalAlloc\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "signature": "TotalTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:TotalTime\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:TotalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal allocation in the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreAlloc\"]"
        },
        "index": {
          "description": "Total allocation in the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal memory allocation in the cost-centre. This number\n exists only if \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreBytes",
          "package": "ghc-time-alloc-prof",
          "signature": "Maybe Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreBytes\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreBytes\"]"
        },
        "index": {
          "description": "Total memory allocation in the cost-centre This number exists only if or Pa option is given at run-time",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreBytes",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreModule",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreModule\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreModule\"]"
        },
        "index": {
          "description": "Module name of the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreModule",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreName",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreName\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreName\"]"
        },
        "index": {
          "description": "Name of the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreName",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal ticks in the cost-centre. This number exists only if\n \u003ccode\u003e-P\u003c/code\u003e or \u003ccode\u003e-Pa\u003c/code\u003e option is given at run-time.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreTicks",
          "package": "ghc-time-alloc-prof",
          "signature": "Maybe Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTicks\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreTicks\"]"
        },
        "index": {
          "description": "Total ticks in the cost-centre This number exists only if or Pa option is given at run-time",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreTicks",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal time spent in the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "briefCostCentreTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:briefCostCentreTime\"]"
        },
        "index": {
          "description": "Total time spent in the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "briefCostCentreTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:briefCostCentreTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocation contributed by the caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteContribAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribAlloc\"]"
        },
        "index": {
          "description": "Allocation contributed by the caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteContribAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Contrib Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated bytes contributed byt hte caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteContribBytes",
          "package": "ghc-time-alloc-prof",
          "signature": "(Maybe Integer)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribBytes\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribBytes\"]"
        },
        "index": {
          "description": "Number of allocated bytes contributed byt hte caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteContribBytes",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Contrib Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of entries contriubted by the caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteContribEntries",
          "package": "ghc-time-alloc-prof",
          "signature": "Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribEntries\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribEntries\"]"
        },
        "index": {
          "description": "Number of entries contriubted by the caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteContribEntries",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Contrib Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of tikcs contributed by the caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteContribTicks",
          "package": "ghc-time-alloc-prof",
          "signature": "(Maybe Integer)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTicks\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribTicks\"]"
        },
        "index": {
          "description": "Number of tikcs contributed by the caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteContribTicks",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Contrib Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime contributed by the caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteContribTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteContribTime\"]"
        },
        "index": {
          "description": "Time contributed by the caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteContribTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Contrib Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteContribTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetrics for the caller function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "callSiteCostCentre",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentre",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteCostCentre\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:callSiteCostCentre\"]"
        },
        "index": {
          "description": "Metrics for the caller function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "callSiteCostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Site Cost Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:callSiteCostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocation incurred by the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeAlloc\"]"
        },
        "index": {
          "description": "Allocation incurred by the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated bytes in the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeBytes",
          "package": "ghc-time-alloc-prof",
          "signature": "(Maybe Integer)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeBytes\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeBytes\"]"
        },
        "index": {
          "description": "Number of allocated bytes in the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeBytes",
          "package": "ghc-time-alloc-prof",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of entries to the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeEntries",
          "package": "ghc-time-alloc-prof",
          "signature": "Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeEntries\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeEntries\"]"
        },
        "index": {
          "description": "Number of entries to the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeEntries",
          "package": "ghc-time-alloc-prof",
          "partial": "Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule name of the calle function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeModule",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeModule\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeModule\"]"
        },
        "index": {
          "description": "Module name of the calle function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeModule",
          "package": "ghc-time-alloc-prof",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeName",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeName\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeName\"]"
        },
        "index": {
          "description": "Name of the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeName",
          "package": "ghc-time-alloc-prof",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of ticks in the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeTicks",
          "package": "ghc-time-alloc-prof",
          "signature": "(Maybe Integer)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTicks\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeTicks\"]"
        },
        "index": {
          "description": "Number of ticks in the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeTicks",
          "package": "ghc-time-alloc-prof",
          "partial": "Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent in the callee function\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "calleeTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:calleeTime\"]"
        },
        "index": {
          "description": "Time spent in the callee function",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "calleeTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:calleeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated bytes in the cost-centre.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreBytes",
          "package": "ghc-time-alloc-prof",
          "signature": "Maybe Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreBytes\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreBytes\"]"
        },
        "index": {
          "description": "Number of allocated bytes in the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreBytes",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreCallSites",
          "package": "ghc-time-alloc-prof",
          "signature": "(Map (Text, Text) (Seq CostCentre))",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreCallSites",
          "normalized": "(Map(Text,Text)(Seq CostCentre))",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Call Sites",
          "signature": "(Map(Text,Text)(Seq CostCentre))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreCallSites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreChildren",
          "package": "ghc-time-alloc-prof",
          "signature": "(IntMap (Seq CostCentre))",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreChildren",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of entries to the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreEntries",
          "package": "ghc-time-alloc-prof",
          "signature": "Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreEntries\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreEntries\"]"
        },
        "index": {
          "description": "Number of entries to the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreEntries",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocation incurred by the cost-centre itself\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreIndAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreIndAlloc\"]"
        },
        "index": {
          "description": "Allocation incurred by the cost-centre itself",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreIndAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Ind Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent in the cost-centre itself\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreIndTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreIndTime\"]"
        },
        "index": {
          "description": "Time spent in the cost-centre itself",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreIndTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Ind Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreIndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocation incurred by the cost-centre's children\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreInhAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreInhAlloc\"]"
        },
        "index": {
          "description": "Allocation incurred by the cost-centre children",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreInhAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Inh Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime spent in the cost-centre's children\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreInhTime",
          "package": "ghc-time-alloc-prof",
          "signature": "Double",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreInhTime\"]"
        },
        "index": {
          "description": "Time spent in the cost-centre children",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreInhTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Inh Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreInhTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule name of the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreModule",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreModule\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreModule\"]"
        },
        "index": {
          "description": "Module name of the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreModule",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreName",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreName\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreName\"]"
        },
        "index": {
          "description": "Name of the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreName",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier of the cost-centre\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreNo",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentreNo",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreNo\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreNo\"]"
        },
        "index": {
          "description": "Identifier of the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreNo",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreNodes",
          "package": "ghc-time-alloc-prof",
          "signature": "(IntMap CostCentre)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreNodes",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreParents",
          "package": "ghc-time-alloc-prof",
          "signature": "(IntMap CostCentreNo)",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreParents",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Parents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of ticks in the cost-centre.\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "costCentreTicks",
          "package": "ghc-time-alloc-prof",
          "signature": "Maybe Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreTicks\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:costCentreTicks\"]"
        },
        "index": {
          "description": "Number of ticks in the cost-centre",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "costCentreTicks",
          "package": "ghc-time-alloc-prof",
          "partial": "Centre Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:costCentreTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "emptyCostCentreTree",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentreTree",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#emptyCostCentreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "emptyCostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:emptyCostCentreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCommandLine",
          "package": "ghc-time-alloc-prof",
          "signature": "Text",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCommandLine\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCommandLine\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileCommandLine",
          "package": "ghc-time-alloc-prof",
          "partial": "Command Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCommandLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileCostCentreTree",
          "package": "ghc-time-alloc-prof",
          "signature": "CostCentreTree",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCostCentreTree\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileCostCentreTree\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileCostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileCostCentreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileHotCostCentres",
          "package": "ghc-time-alloc-prof",
          "signature": "[BriefCostCentre]",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileHotCostCentres\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileHotCostCentres\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileHotCostCentres",
          "normalized": "[BriefCostCentre]",
          "package": "ghc-time-alloc-prof",
          "partial": "Hot Cost Centres",
          "signature": "[BriefCostCentre]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileHotCostCentres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileTimestamp",
          "package": "ghc-time-alloc-prof",
          "signature": "LocalTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTimestamp\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTimestamp\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileTimestamp",
          "package": "ghc-time-alloc-prof",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileTotalAlloc",
          "package": "ghc-time-alloc-prof",
          "signature": "TotalAlloc",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalAlloc\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTotalAlloc\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileTotalAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Alloc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "profileTotalTime",
          "package": "ghc-time-alloc-prof",
          "signature": "TotalTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalTime\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:profileTotalTime\"]"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "profileTotalTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:profileTotalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal memory allocation in bytes\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "totalAllocBytes",
          "package": "ghc-time-alloc-prof",
          "signature": "Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalAllocBytes\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalAllocBytes\"]"
        },
        "index": {
          "description": "Total memory allocation in bytes",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "totalAllocBytes",
          "package": "ghc-time-alloc-prof",
          "partial": "Alloc Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalAllocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal elapsed time in seconds\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "totalTimeElapsed",
          "package": "ghc-time-alloc-prof",
          "signature": "DiffTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeElapsed\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeElapsed\"]"
        },
        "index": {
          "description": "Total elapsed time in seconds",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "totalTimeElapsed",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Elapsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeElapsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of processors\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "totalTimeProcessors",
          "package": "ghc-time-alloc-prof",
          "signature": "Int",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeProcessors\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeProcessors\"]"
        },
        "index": {
          "description": "Number of processors",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "totalTimeProcessors",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Processors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeProcessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration of a tick\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "totalTimeResolution",
          "package": "ghc-time-alloc-prof",
          "signature": "DiffTime",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeResolution\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeResolution\"]"
        },
        "index": {
          "description": "Duration of tick",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "totalTimeResolution",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Resolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of ticks\n\u003c/p\u003e",
          "module": "[\"GHC.RTS.TimeAllocProfile.Types\",\"GHC.RTS.TimeAllocProfile\"]",
          "name": "totalTimeTicks",
          "package": "ghc-time-alloc-prof",
          "signature": "Integer",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeTicks\",\"http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#v:totalTimeTicks\"]"
        },
        "index": {
          "description": "Total number of ticks",
          "hierarchy": "GHC RTS TimeAllocProfile Types",
          "module": "GHC.RTS.TimeAllocProfile.Types",
          "name": "totalTimeTicks",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile-Types.html#v:totalTimeTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Alloc Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#BriefCostCentre",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "BriefCostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Brief Cost Centre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:BriefCostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CallSite",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CallSite",
          "package": "ghc-time-alloc-prof",
          "partial": "Call Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CallSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#Callee",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "Callee",
          "package": "ghc-time-alloc-prof",
          "partial": "Callee",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:Callee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost-centre node\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentre",
          "type": "data"
        },
        "index": {
          "description": "Cost-centre node",
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentre",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentreNo",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentreNo",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentreNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#CostCentreTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "CostCentreTree",
          "package": "ghc-time-alloc-prof",
          "partial": "Cost Centre Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:CostCentreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level profiling report\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TimeAllocProfile",
          "type": "data"
        },
        "index": {
          "description": "Top-level profiling report",
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TimeAllocProfile",
          "package": "ghc-time-alloc-prof",
          "partial": "Time Alloc Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TimeAllocProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etotal alloc\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalAlloc",
          "type": "newtype"
        },
        "index": {
          "description": "total alloc in the profiling reports",
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TotalAlloc",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Alloc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TotalAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etotal time\u003c/code\u003e in the profiling reports\n\u003c/p\u003e",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "source": "src/GHC-RTS-TimeAllocProfile-Types.html#TotalTime",
          "type": "data"
        },
        "index": {
          "description": "total time in the profiling reports",
          "hierarchy": "GHC RTS TimeAllocProfile",
          "module": "GHC.RTS.TimeAllocProfile",
          "name": "TotalTime",
          "package": "ghc-time-alloc-prof",
          "partial": "Total Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-time-alloc-prof/docs/GHC-RTS-TimeAllocProfile.html#t:TotalTime"
      }
    }
  ]
]