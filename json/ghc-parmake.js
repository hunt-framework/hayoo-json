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
        "word": "ghc-parmake"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "BuildPlan",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-BuildPlan.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "BuildPlan",
          "package": "ghc-parmake",
          "partial": "Build Plan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA graph of all dependencies between targets.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "BuildPlan",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-BuildPlan.html#BuildPlan",
          "type": "data"
        },
        "index": {
          "description": "graph of all dependencies between targets",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "BuildPlan",
          "package": "ghc-parmake",
          "partial": "Build Plan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#t:BuildPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for a BuildPlan\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "Settings",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-BuildPlan.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Settings for BuildPlan",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "Settings",
          "package": "ghc-parmake",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "Target",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-BuildPlan.html#Target",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "Target",
          "package": "ghc-parmake",
          "partial": "Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "TargetId",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-BuildPlan.html#TargetId",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "TargetId",
          "package": "ghc-parmake",
          "partial": "Target Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#t:TargetId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "Settings",
          "package": "ghc-parmake",
          "signature": "Settings",
          "source": "src/GHC-ParMake-BuildPlan.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "Settings",
          "package": "ghc-parmake",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Target, return all its dependencies (internal + external).\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "allDepends",
          "package": "ghc-parmake",
          "signature": "Target -\u003e [TargetId]",
          "source": "src/GHC-ParMake-BuildPlan.html#allDepends",
          "type": "function"
        },
        "index": {
          "description": "Given Target return all its dependencies internal external",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "allDepends",
          "normalized": "Target-\u003e[TargetId]",
          "package": "ghc-parmake",
          "partial": "Depends",
          "signature": "Target-\u003e[TargetId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:allDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all targets that are currently building.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "building",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e [Target]",
          "source": "src/GHC-ParMake-BuildPlan.html#building",
          "type": "function"
        },
        "index": {
          "description": "Return all targets that are currently building",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "building",
          "normalized": "BuildPlan-\u003e[Target]",
          "package": "ghc-parmake",
          "signature": "BuildPlan-\u003e[Target]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:building"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all targets that were built successfully.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "completed",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e [Target]",
          "source": "src/GHC-ParMake-BuildPlan.html#completed",
          "type": "function"
        },
        "index": {
          "description": "Return all targets that were built successfully",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "completed",
          "normalized": "BuildPlan-\u003e[Target]",
          "package": "ghc-parmake",
          "signature": "BuildPlan-\u003e[Target]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "defaultSettings",
          "package": "ghc-parmake",
          "signature": "Settings",
          "source": "src/GHC-ParMake-BuildPlan.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "defaultSettings",
          "package": "ghc-parmake",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre there any targets in the \u003ca\u003ecurrently building\u003c/a\u003e state?\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "hasBuilding",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Bool",
          "source": "src/GHC-ParMake-BuildPlan.html#hasBuilding",
          "type": "function"
        },
        "index": {
          "description": "Are there any targets in the currently building state",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "hasBuilding",
          "normalized": "BuildPlan-\u003eBool",
          "package": "ghc-parmake",
          "partial": "Building",
          "signature": "BuildPlan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:hasBuilding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "hisuf",
          "package": "ghc-parmake",
          "signature": "String",
          "source": "src/GHC-ParMake-BuildPlan.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "hisuf",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:hisuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a target as successfully built.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "markCompleted",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Target -\u003e BuildPlan",
          "source": "src/GHC-ParMake-BuildPlan.html#markCompleted",
          "type": "function"
        },
        "index": {
          "description": "Mark target as successfully built",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "markCompleted",
          "normalized": "BuildPlan-\u003eTarget-\u003eBuildPlan",
          "package": "ghc-parmake",
          "partial": "Completed",
          "signature": "BuildPlan-\u003eTarget-\u003eBuildPlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:markCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark all \u003ca\u003eready\u003c/a\u003e targets as \u003ca\u003ecurrently building\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "markReadyAsBuilding",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e BuildPlan",
          "source": "src/GHC-ParMake-BuildPlan.html#markReadyAsBuilding",
          "type": "function"
        },
        "index": {
          "description": "Mark all ready targets as currently building",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "markReadyAsBuilding",
          "normalized": "BuildPlan-\u003eBuildPlan",
          "package": "ghc-parmake",
          "partial": "Ready As Building",
          "signature": "BuildPlan-\u003eBuildPlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:markReadyAsBuilding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new BuildPlan from a list of (target, dependency) pairs. This is\n mostly a copy of Distribution.Client.PackageIndex.dependencyGraph.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "new",
          "package": "ghc-parmake",
          "signature": "Settings -\u003e [Dep] -\u003e [FilePath] -\u003e BuildPlan",
          "source": "src/GHC-ParMake-BuildPlan.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new BuildPlan from list of target dependency pairs This is mostly copy of Distribution.Client.PackageIndex.dependencyGraph",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "new",
          "normalized": "Settings-\u003e[Dep]-\u003e[FilePath]-\u003eBuildPlan",
          "package": "ghc-parmake",
          "signature": "Settings-\u003e[Dep]-\u003e[FilePath]-\u003eBuildPlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many targets are we building currently?\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "numBuilding",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Int",
          "source": "src/GHC-ParMake-BuildPlan.html#numBuilding",
          "type": "function"
        },
        "index": {
          "description": "How many targets are we building currently",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "numBuilding",
          "normalized": "BuildPlan-\u003eInt",
          "package": "ghc-parmake",
          "partial": "Building",
          "signature": "BuildPlan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:numBuilding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "numCompleted",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Int",
          "source": "src/GHC-ParMake-BuildPlan.html#numCompleted",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "numCompleted",
          "normalized": "BuildPlan-\u003eInt",
          "package": "ghc-parmake",
          "partial": "Completed",
          "signature": "BuildPlan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:numCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Target, return the name of the object file produced from it that\n should be fed to the linker.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "object",
          "package": "ghc-parmake",
          "signature": "Target -\u003e Maybe FilePath",
          "source": "src/GHC-ParMake-BuildPlan.html#object",
          "type": "function"
        },
        "index": {
          "description": "Given Target return the name of the object file produced from it that should be fed to the linker",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "object",
          "normalized": "Target-\u003eMaybe FilePath",
          "package": "ghc-parmake",
          "signature": "Target-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a BuildPlan, return the list of object files for all completed\n targets.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "objects",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e [FilePath]",
          "source": "src/GHC-ParMake-BuildPlan.html#objects",
          "type": "function"
        },
        "index": {
          "description": "Given BuildPlan return the list of object files for all completed targets",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "objects",
          "normalized": "BuildPlan-\u003e[FilePath]",
          "package": "ghc-parmake",
          "signature": "BuildPlan-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:objects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.BuildPlan",
          "name": "osuf",
          "package": "ghc-parmake",
          "signature": "String",
          "source": "src/GHC-ParMake-BuildPlan.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "osuf",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:osuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all targets that are ready to be built.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "ready",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e [Target]",
          "source": "src/GHC-ParMake-BuildPlan.html#ready",
          "type": "function"
        },
        "index": {
          "description": "Get all targets that are ready to be built",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "ready",
          "normalized": "BuildPlan-\u003e[Target]",
          "package": "ghc-parmake",
          "signature": "BuildPlan-\u003e[Target]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:ready"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of targets in the BuildPlan.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "size",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Int",
          "source": "src/GHC-ParMake-BuildPlan.html#size",
          "type": "function"
        },
        "index": {
          "description": "Total number of targets in the BuildPlan",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "size",
          "normalized": "BuildPlan-\u003eInt",
          "package": "ghc-parmake",
          "signature": "BuildPlan-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Target, return the name of the source file from which it can be\n produced.\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "source",
          "package": "ghc-parmake",
          "signature": "Target -\u003e FilePath",
          "source": "src/GHC-ParMake-BuildPlan.html#source",
          "type": "function"
        },
        "index": {
          "description": "Given Target return the name of the source file from which it can be produced",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "source",
          "normalized": "Target-\u003eFilePath",
          "package": "ghc-parmake",
          "signature": "Target-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTarget (e.g. \u003ccode\u003e\u003ca\u003eo\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "GHC.ParMake.BuildPlan",
          "name": "targetId",
          "package": "ghc-parmake",
          "signature": "Target -\u003e TargetId",
          "source": "src/GHC-ParMake-BuildPlan.html#targetId",
          "type": "function"
        },
        "index": {
          "description": "Target e.g",
          "hierarchy": "GHC ParMake BuildPlan",
          "module": "GHC.ParMake.BuildPlan",
          "name": "targetId",
          "normalized": "Target-\u003eTargetId",
          "package": "ghc-parmake",
          "partial": "Id",
          "signature": "Target-\u003eTargetId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-BuildPlan.html#v:targetId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Common",
          "name": "Common",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "Common",
          "package": "ghc-parmake",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Common",
          "name": "andM",
          "package": "ghc-parmake",
          "signature": "[m Bool] -\u003e m Bool",
          "source": "src/GHC-ParMake-Common.html#andM",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "andM",
          "normalized": "[a Bool]-\u003ea Bool",
          "package": "ghc-parmake",
          "signature": "[m Bool]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:andM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap f over l and then append rest to l. More efficient than doing `map f l\n ++ rest`.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Common",
          "name": "appendMap",
          "package": "ghc-parmake",
          "signature": "(t -\u003e a) -\u003e [t] -\u003e [a] -\u003e [a]",
          "source": "src/GHC-ParMake-Common.html#appendMap",
          "type": "function"
        },
        "index": {
          "description": "Map over and then append rest to More efficient than doing map rest",
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "appendMap",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]-\u003e[b]",
          "package": "ghc-parmake",
          "partial": "Map",
          "signature": "(t-\u003ea)-\u003e[t]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:appendMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Common",
          "name": "firstM",
          "package": "ghc-parmake",
          "signature": "[a] -\u003e (a -\u003e m Bool) -\u003e m (Maybe a)",
          "source": "src/GHC-ParMake-Common.html#firstM",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "firstM",
          "normalized": "[a]-\u003e(a-\u003eb Bool)-\u003eb(Maybe a)",
          "package": "ghc-parmake",
          "signature": "[a]-\u003e(a-\u003em Bool)-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:firstM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Common",
          "name": "maybeRead",
          "package": "ghc-parmake",
          "signature": "String -\u003e Maybe a",
          "source": "src/GHC-ParMake-Common.html#maybeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "maybeRead",
          "normalized": "String-\u003eMaybe a",
          "package": "ghc-parmake",
          "partial": "Read",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Common",
          "name": "pathToMaybe",
          "package": "ghc-parmake",
          "signature": "FilePath -\u003e Maybe FilePath",
          "source": "src/GHC-ParMake-Common.html#pathToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "pathToMaybe",
          "normalized": "FilePath-\u003eMaybe FilePath",
          "package": "ghc-parmake",
          "partial": "To Maybe",
          "signature": "FilePath-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:pathToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove consecutive duplicate elements from a list.\n Example: uniq [3,3,3] = [3].\n\u003c/p\u003e",
          "module": "GHC.ParMake.Common",
          "name": "uniq",
          "package": "ghc-parmake",
          "signature": "[a] -\u003e [a]",
          "source": "src/GHC-ParMake-Common.html#uniq",
          "type": "function"
        },
        "index": {
          "description": "Remove consecutive duplicate elements from list Example uniq",
          "hierarchy": "GHC ParMake Common",
          "module": "GHC.ParMake.Common",
          "name": "uniq",
          "normalized": "[a]-\u003e[a]",
          "package": "ghc-parmake",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Common.html#v:uniq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "Engine",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "Engine",
          "package": "ghc-parmake",
          "partial": "Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "ControlChan",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#ControlChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "ControlChan",
          "package": "ghc-parmake",
          "partial": "Control Chan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:ControlChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "ControlMessage",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#ControlMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "ControlMessage",
          "package": "ghc-parmake",
          "partial": "Control Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:ControlMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogChan",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#LogChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogChan",
          "package": "ghc-parmake",
          "partial": "Log Chan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:LogChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogTask",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogTask",
          "package": "ghc-parmake",
          "partial": "Log Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:LogTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "WorkerChan",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#WorkerChan",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "WorkerChan",
          "package": "ghc-parmake",
          "partial": "Worker Chan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:WorkerChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "WorkerTask",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Engine.html#WorkerTask",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "WorkerTask",
          "package": "ghc-parmake",
          "partial": "Worker Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#t:WorkerTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "BuildCompleted",
          "package": "ghc-parmake",
          "signature": "BuildCompleted",
          "source": "src/GHC-ParMake-Engine.html#ControlMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "BuildCompleted",
          "package": "ghc-parmake",
          "partial": "Build Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:BuildCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "BuildFailed",
          "package": "ghc-parmake",
          "signature": "BuildFailed ExitCode",
          "source": "src/GHC-ParMake-Engine.html#ControlMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "BuildFailed",
          "package": "ghc-parmake",
          "partial": "Build Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:BuildFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "BuildModule",
          "package": "ghc-parmake",
          "signature": "BuildModule Int Target",
          "source": "src/GHC-ParMake-Engine.html#WorkerTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "BuildModule",
          "package": "ghc-parmake",
          "partial": "Build Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:BuildModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "BuildProgram",
          "package": "ghc-parmake",
          "signature": "BuildProgram FilePath [FilePath]",
          "source": "src/GHC-ParMake-Engine.html#WorkerTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "BuildProgram",
          "normalized": "BuildProgram FilePath[FilePath]",
          "package": "ghc-parmake",
          "partial": "Build Program",
          "signature": "BuildProgram FilePath[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:BuildProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "CompileFailed",
          "package": "ghc-parmake",
          "signature": "CompileFailed Target ExitCode",
          "source": "src/GHC-ParMake-Engine.html#ControlMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "CompileFailed",
          "package": "ghc-parmake",
          "partial": "Compile Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:CompileFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogFlushStdOut",
          "package": "ghc-parmake",
          "signature": "LogFlushStdOut",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogFlushStdOut",
          "package": "ghc-parmake",
          "partial": "Log Flush Std Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:LogFlushStdOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogStr",
          "package": "ghc-parmake",
          "signature": "LogStr String",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogStr",
          "package": "ghc-parmake",
          "partial": "Log Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:LogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogStrErr",
          "package": "ghc-parmake",
          "signature": "LogStrErr String",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogStrErr",
          "package": "ghc-parmake",
          "partial": "Log Str Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:LogStrErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogStrLn",
          "package": "ghc-parmake",
          "signature": "LogStrLn String",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogStrLn",
          "package": "ghc-parmake",
          "partial": "Log Str Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:LogStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "LogStrLnErr",
          "package": "ghc-parmake",
          "signature": "LogStrLnErr String",
          "source": "src/GHC-ParMake-Engine.html#LogTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "LogStrLnErr",
          "package": "ghc-parmake",
          "partial": "Log Str Ln Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:LogStrLnErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "ModuleCompiled",
          "package": "ghc-parmake",
          "signature": "ModuleCompiled Target",
          "source": "src/GHC-ParMake-Engine.html#ControlMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "ModuleCompiled",
          "package": "ghc-parmake",
          "partial": "Module Compiled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:ModuleCompiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a BuildPlan, perform the compilation.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Engine",
          "name": "compile",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e BuildPlan -\u003e Int -\u003e FilePath -\u003e [String] -\u003e [FilePath] -\u003e Maybe FilePath -\u003e IO ExitCode",
          "source": "src/GHC-ParMake-Engine.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Given BuildPlan perform the compilation",
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "compile",
          "normalized": "Verbosity-\u003eBuildPlan-\u003eInt-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eIO ExitCode",
          "package": "ghc-parmake",
          "signature": "Verbosity-\u003eBuildPlan-\u003eInt-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "controlThread",
          "package": "ghc-parmake",
          "signature": "BuildPlan -\u003e Maybe FilePath -\u003e ControlChan -\u003e WorkerChan -\u003e IO ExitCode",
          "source": "src/GHC-ParMake-Engine.html#controlThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "controlThread",
          "normalized": "BuildPlan-\u003eMaybe FilePath-\u003eControlChan-\u003eWorkerChan-\u003eIO ExitCode",
          "package": "ghc-parmake",
          "partial": "Thread",
          "signature": "BuildPlan-\u003eMaybe FilePath-\u003eControlChan-\u003eWorkerChan-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:controlThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "logThread",
          "package": "ghc-parmake",
          "signature": "LogChan -\u003e IO ()",
          "source": "src/GHC-ParMake-Engine.html#logThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "logThread",
          "normalized": "LogChan-\u003eIO()",
          "package": "ghc-parmake",
          "partial": "Thread",
          "signature": "LogChan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:logThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "logThreadOutputHooks",
          "package": "ghc-parmake",
          "signature": "String -\u003e LogChan -\u003e OutputHooks",
          "source": "src/GHC-ParMake-Engine.html#logThreadOutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "logThreadOutputHooks",
          "normalized": "String-\u003eLogChan-\u003eOutputHooks",
          "package": "ghc-parmake",
          "partial": "Thread Output Hooks",
          "signature": "String-\u003eLogChan-\u003eOutputHooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:logThreadOutputHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Engine",
          "name": "workerThread",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e FilePath -\u003e [String] -\u003e [FilePath] -\u003e WorkerChan -\u003e ControlChan -\u003e IO ()",
          "source": "src/GHC-ParMake-Engine.html#workerThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Engine",
          "module": "GHC.ParMake.Engine",
          "name": "workerThread",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eWorkerChan-\u003eControlChan-\u003eIO()",
          "package": "ghc-parmake",
          "partial": "Thread",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eWorkerChan-\u003eControlChan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Engine.html#v:workerThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Parse",
          "name": "Parse",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake Parse",
          "module": "GHC.ParMake.Parse",
          "name": "Parse",
          "package": "ghc-parmake",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of (targets, dependencies) to a \u003ccode\u003e\u003ca\u003eDep\u003c/a\u003e\u003c/code\u003e list\n with no external dependencies.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Parse",
          "name": "depsListToDeps",
          "package": "ghc-parmake",
          "signature": "[(FilePath, FilePath)] -\u003e [Dep]",
          "source": "src/GHC-ParMake-Parse.html#depsListToDeps",
          "type": "function"
        },
        "index": {
          "description": "Converts list of targets dependencies to Dep list with no external dependencies",
          "hierarchy": "GHC ParMake Parse",
          "module": "GHC.ParMake.Parse",
          "name": "depsListToDeps",
          "normalized": "[(FilePath,FilePath)]-\u003e[Dep]",
          "package": "ghc-parmake",
          "partial": "List To Deps",
          "signature": "[(FilePath,FilePath)]-\u003e[Dep]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Parse.html#v:depsListToDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Parse",
          "name": "getModuleDeps",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e FilePath -\u003e [String] -\u003e [FilePath] -\u003e IO [Dep]",
          "source": "src/GHC-ParMake-Parse.html#getModuleDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Parse",
          "module": "GHC.ParMake.Parse",
          "name": "getModuleDeps",
          "normalized": "Verbosity-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eIO[Dep]",
          "package": "ghc-parmake",
          "partial": "Module Deps",
          "signature": "Verbosity-\u003eFilePath-\u003e[String]-\u003e[FilePath]-\u003eIO[Dep]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Parse.html#v:getModuleDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Types",
          "name": "Types",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "Types",
          "package": "ghc-parmake",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single dependency extracted from the 'ghc -M' output.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Types",
          "name": "Dep",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Types.html#Dep",
          "type": "data"
        },
        "index": {
          "description": "single dependency extracted from the ghc output",
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "Dep",
          "package": "ghc-parmake",
          "partial": "Dep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#t:Dep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Types",
          "name": "Dep",
          "package": "ghc-parmake",
          "signature": "Dep",
          "source": "src/GHC-ParMake-Types.html#Dep",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "Dep",
          "package": "ghc-parmake",
          "partial": "Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#v:Dep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal dependencies: dependencies given by\n 'ghc -M -include-pkg-deps' minus the internal\n ones.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Types",
          "name": "depExternal",
          "package": "ghc-parmake",
          "signature": "[FilePath]",
          "source": "src/GHC-ParMake-Types.html#Dep",
          "type": "function"
        },
        "index": {
          "description": "External dependencies dependencies given by ghc include-pkg-deps minus the internal ones",
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "depExternal",
          "normalized": "[FilePath]",
          "package": "ghc-parmake",
          "partial": "External",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#v:depExternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependencies in our build.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Types",
          "name": "depInternal",
          "package": "ghc-parmake",
          "signature": "[FilePath]",
          "source": "src/GHC-ParMake-Types.html#Dep",
          "type": "function"
        },
        "index": {
          "description": "Dependencies in our build",
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "depInternal",
          "normalized": "[FilePath]",
          "package": "ghc-parmake",
          "partial": "Internal",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#v:depInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe target file.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Types",
          "name": "depTarget",
          "package": "ghc-parmake",
          "signature": "FilePath",
          "source": "src/GHC-ParMake-Types.html#Dep",
          "type": "function"
        },
        "index": {
          "description": "The target file",
          "hierarchy": "GHC ParMake Types",
          "module": "GHC.ParMake.Types",
          "name": "depTarget",
          "package": "ghc-parmake",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Types.html#v:depTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "Util",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "Util",
          "package": "ghc-parmake",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "OutputHooks",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "OutputHooks",
          "package": "ghc-parmake",
          "partial": "Output Hooks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#t:OutputHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "UpToDateStatus",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Util.html#UpToDateStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "UpToDateStatus",
          "package": "ghc-parmake",
          "partial": "Up To Date Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#t:UpToDateStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "Verbosity",
          "package": "ghc-parmake",
          "source": "src/GHC-ParMake-Util.html#Verbosity",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "Verbosity",
          "package": "ghc-parmake",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "NewerDependency",
          "package": "ghc-parmake",
          "signature": "NewerDependency FilePath",
          "source": "src/GHC-ParMake-Util.html#UpToDateStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "NewerDependency",
          "package": "ghc-parmake",
          "partial": "Newer Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:NewerDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "OutputHooks",
          "package": "ghc-parmake",
          "signature": "OutputHooks",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "OutputHooks",
          "package": "ghc-parmake",
          "partial": "Output Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:OutputHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "TargetDoesNotExist",
          "package": "ghc-parmake",
          "signature": "TargetDoesNotExist",
          "source": "src/GHC-ParMake-Util.html#UpToDateStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "TargetDoesNotExist",
          "package": "ghc-parmake",
          "partial": "Target Does Not Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:TargetDoesNotExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "UpToDate",
          "package": "ghc-parmake",
          "signature": "UpToDate",
          "source": "src/GHC-ParMake-Util.html#UpToDateStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "UpToDate",
          "package": "ghc-parmake",
          "partial": "Up To Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:UpToDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "deafening",
          "package": "ghc-parmake",
          "signature": "Verbosity",
          "source": "src/GHC-ParMake-Util.html#deafening",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "deafening",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:deafening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed internal debugging information\n\u003c/p\u003e\u003cp\u003eWe display these messages when the verbosity level is \u003ccode\u003e\u003ca\u003edeafening\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "debug",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#debug",
          "type": "function"
        },
        "index": {
          "description": "Detailed internal debugging information We display these messages when the verbosity level is deafening",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "debug",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "debug'",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#debug%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "debug'",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:debug-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "defaultOutputHooks",
          "package": "ghc-parmake",
          "signature": "OutputHooks",
          "source": "src/GHC-ParMake-Util.html#defaultOutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "defaultOutputHooks",
          "package": "ghc-parmake",
          "partial": "Output Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:defaultOutputHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFatal error.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "fatal",
          "package": "ghc-parmake",
          "signature": "String -\u003e a",
          "source": "src/GHC-ParMake-Util.html#fatal",
          "type": "function"
        },
        "index": {
          "description": "Fatal error",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "fatal",
          "normalized": "String-\u003ea",
          "package": "ghc-parmake",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:fatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "flushStdOutHook",
          "package": "ghc-parmake",
          "signature": "(IO ())",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "flushStdOutHook",
          "normalized": "(IO())",
          "package": "ghc-parmake",
          "partial": "Std Out Hook",
          "signature": "(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:flushStdOutHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore detail on the operation of some action.\n\u003c/p\u003e\u003cp\u003eWe display these messages when the verbosity level is \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "info",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#info",
          "type": "function"
        },
        "index": {
          "description": "More detail on the operation of some action We display these messages when the verbosity level is verbose",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "info",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "info'",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#info%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "info'",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:info-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "intToVerbosity",
          "package": "ghc-parmake",
          "signature": "Int -\u003e Maybe Verbosity",
          "source": "src/GHC-ParMake-Util.html#intToVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "intToVerbosity",
          "normalized": "Int-\u003eMaybe Verbosity",
          "package": "ghc-parmake",
          "partial": "To Verbosity",
          "signature": "Int-\u003eMaybe Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:intToVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "normal",
          "package": "ghc-parmake",
          "signature": "Verbosity",
          "source": "src/GHC-ParMake-Util.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "normal",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "notice",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#notice",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "notice",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:notice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "notice'",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#notice%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "notice'",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:notice-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful status messages.\n\u003c/p\u003e\u003cp\u003eWe display these at the \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e verbosity level.\n\u003c/p\u003e\u003cp\u003eThis is for the ordinary helpful status messages that users see. Just\n enough information to know that things are working but not floods of detail.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "noticeRaw",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#noticeRaw",
          "type": "function"
        },
        "index": {
          "description": "Useful status messages We display these at the normal verbosity level This is for the ordinary helpful status messages that users see Just enough information to know that things are working but not floods of detail",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "noticeRaw",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "partial": "Raw",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:noticeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "putStrErrHook",
          "package": "ghc-parmake",
          "signature": "(String -\u003e IO ())",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "putStrErrHook",
          "normalized": "(String-\u003eIO())",
          "package": "ghc-parmake",
          "partial": "Str Err Hook",
          "signature": "(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:putStrErrHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "putStrHook",
          "package": "ghc-parmake",
          "signature": "(String -\u003e IO ())",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "putStrHook",
          "normalized": "(String-\u003eIO())",
          "package": "ghc-parmake",
          "partial": "Str Hook",
          "signature": "(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:putStrHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "putStrLnErrHook",
          "package": "ghc-parmake",
          "signature": "(String -\u003e IO ())",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "putStrLnErrHook",
          "normalized": "(String-\u003eIO())",
          "package": "ghc-parmake",
          "partial": "Str Ln Err Hook",
          "signature": "(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:putStrLnErrHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "putStrLnHook",
          "package": "ghc-parmake",
          "signature": "(String -\u003e IO ())",
          "source": "src/GHC-ParMake-Util.html#OutputHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "putStrLnHook",
          "normalized": "(String-\u003eIO())",
          "package": "ghc-parmake",
          "partial": "Str Ln Hook",
          "signature": "(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:putStrLnHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess creation.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "runProcess",
          "package": "ghc-parmake",
          "signature": "OutputHooks-\u003e Maybe FilePath-\u003e FilePath-\u003e [String]-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Process creation",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "runProcess",
          "normalized": "OutputHooks-\u003eMaybe FilePath-\u003eFilePath-\u003e[String]-\u003eIO ExitCode",
          "package": "ghc-parmake",
          "partial": "Process",
          "signature": "OutputHooks-\u003eMaybe FilePath-\u003eFilePath-\u003e[String]-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "silent",
          "package": "ghc-parmake",
          "signature": "Verbosity",
          "source": "src/GHC-ParMake-Util.html#silent",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "silent",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this target up to date w.r.t. its dependencies?\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "upToDateCheck",
          "package": "ghc-parmake",
          "signature": "FilePath -\u003e [FilePath] -\u003e IO UpToDateStatus",
          "source": "src/GHC-ParMake-Util.html#upToDateCheck",
          "type": "function"
        },
        "index": {
          "description": "Is this target up to date w.r.t its dependencies",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "upToDateCheck",
          "normalized": "FilePath-\u003e[FilePath]-\u003eIO UpToDateStatus",
          "package": "ghc-parmake",
          "partial": "To Date Check",
          "signature": "FilePath-\u003e[FilePath]-\u003eIO UpToDateStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:upToDateCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "verbose",
          "package": "ghc-parmake",
          "signature": "Verbosity",
          "source": "src/GHC-ParMake-Util.html#verbose",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "verbose",
          "package": "ghc-parmake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon fatal conditions that may be indicative of an error or problem.\n\u003c/p\u003e\u003cp\u003eWe display these at the \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e verbosity level.\n\u003c/p\u003e",
          "module": "GHC.ParMake.Util",
          "name": "warn",
          "package": "ghc-parmake",
          "signature": "OutputHooks -\u003e Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#warn",
          "type": "function"
        },
        "index": {
          "description": "Non fatal conditions that may be indicative of an error or problem We display these at the normal verbosity level",
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "warn",
          "normalized": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "OutputHooks-\u003eVerbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:warn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ParMake.Util",
          "name": "warn'",
          "package": "ghc-parmake",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "source": "src/GHC-ParMake-Util.html#warn%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ParMake Util",
          "module": "GHC.ParMake.Util",
          "name": "warn'",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "ghc-parmake",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-parmake/docs/GHC-ParMake-Util.html#v:warn-39-"
      }
    }
  ]
]