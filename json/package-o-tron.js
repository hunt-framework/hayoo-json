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
        "word": "package-o-tron"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "Modules",
          "package": "package-o-tron",
          "source": "src/Distribution-Pot-Modules.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "Modules",
          "package": "package-o-tron",
          "partial": "Modules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe collected information on one module\n\u003c/p\u003e",
          "module": "Distribution.Pot.Modules",
          "name": "ModuleInfo",
          "package": "package-o-tron",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "data"
        },
        "index": {
          "description": "The collected information on one module",
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "ModuleInfo",
          "package": "package-o-tron",
          "partial": "Module Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#t:ModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "ModuleInfo",
          "package": "package-o-tron",
          "signature": "ModuleInfo",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "ModuleInfo",
          "package": "package-o-tron",
          "partial": "Module Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:ModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehelper to filter the two module lists according to some function\n\u003c/p\u003e",
          "module": "Distribution.Pot.Modules",
          "name": "filterModules",
          "package": "package-o-tron",
          "signature": "(String -\u003e Bool) -\u003e ModuleInfo -\u003e ModuleInfo",
          "source": "src/Distribution-Pot-Modules.html#filterModules",
          "type": "function"
        },
        "index": {
          "description": "helper to filter the two module lists according to some function",
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "filterModules",
          "normalized": "(String-\u003eBool)-\u003eModuleInfo-\u003eModuleInfo",
          "package": "package-o-tron",
          "partial": "Modules",
          "signature": "(String-\u003eBool)-\u003eModuleInfo-\u003eModuleInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:filterModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miFileName",
          "package": "package-o-tron",
          "signature": "FilePath",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miFileName",
          "package": "package-o-tron",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miFilePrefix",
          "package": "package-o-tron",
          "signature": "FilePath",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miFilePrefix",
          "package": "package-o-tron",
          "partial": "File Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miFilePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miLocalDependencies",
          "package": "package-o-tron",
          "signature": "[((FilePath, FilePath), String)]",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miLocalDependencies",
          "normalized": "[((FilePath,FilePath),String)]",
          "package": "package-o-tron",
          "partial": "Local Dependencies",
          "signature": "[((FilePath,FilePath),String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miLocalDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miLocalTransitiveDependencies",
          "package": "package-o-tron",
          "signature": "[((FilePath, FilePath), String)]",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miLocalTransitiveDependencies",
          "normalized": "[((FilePath,FilePath),String)]",
          "package": "package-o-tron",
          "partial": "Local Transitive Dependencies",
          "signature": "[((FilePath,FilePath),String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miLocalTransitiveDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miModuleFile",
          "package": "package-o-tron",
          "signature": "FilePath",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miModuleFile",
          "package": "package-o-tron",
          "partial": "Module File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miModuleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miModuleName",
          "package": "package-o-tron",
          "signature": "String",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miModuleName",
          "package": "package-o-tron",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miPackages",
          "package": "package-o-tron",
          "signature": "[String]",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miPackages",
          "normalized": "[String]",
          "package": "package-o-tron",
          "partial": "Packages",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "miTransitivePackages",
          "package": "package-o-tron",
          "signature": "[String]",
          "source": "src/Distribution-Pot-Modules.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "miTransitivePackages",
          "normalized": "[String]",
          "package": "package-o-tron",
          "partial": "Transitive Packages",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:miTransitivePackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a set of source files and gets the ModuleInfo information\n   for all of them\n\u003c/p\u003e",
          "module": "Distribution.Pot.Modules",
          "name": "modulesInfo",
          "package": "package-o-tron",
          "signature": "[FilePath]-\u003e IO [(FilePath, ModuleInfo)]",
          "type": "function"
        },
        "index": {
          "description": "Takes set of source files and gets the ModuleInfo information for all of them",
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "modulesInfo",
          "normalized": "[FilePath]-\u003eIO[(FilePath,ModuleInfo)]",
          "package": "package-o-tron",
          "partial": "Info",
          "signature": "[FilePath]-\u003eIO[(FilePath,ModuleInfo)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:modulesInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Modules",
          "name": "showmi",
          "package": "package-o-tron",
          "signature": "[(FilePath, ModuleInfo)] -\u003e String",
          "source": "src/Distribution-Pot-Modules.html#showmi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Pot Modules",
          "module": "Distribution.Pot.Modules",
          "name": "showmi",
          "normalized": "[(FilePath,ModuleInfo)]-\u003eString",
          "package": "package-o-tron",
          "signature": "[(FilePath,ModuleInfo)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Modules.html#v:showmi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Pot.Packages",
          "name": "Packages",
          "package": "package-o-tron",
          "source": "src/Distribution-Pot-Packages.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Pot Packages",
          "module": "Distribution.Pot.Packages",
          "name": "Packages",
          "package": "package-o-tron",
          "partial": "Packages",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Packages.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a map from package name to the names of the modules in\n   that package. The information is from the output of ghc-pkg dump, so\n   only includes information from installed packages\n\u003c/p\u003e",
          "module": "Distribution.Pot.Packages",
          "name": "readPackages",
          "package": "package-o-tron",
          "signature": "IO [(String, [String])]",
          "source": "src/Distribution-Pot-Packages.html#readPackages",
          "type": "function"
        },
        "index": {
          "description": "returns map from package name to the names of the modules in that package The information is from the output of ghc-pkg dump so only includes information from installed packages",
          "hierarchy": "Distribution Pot Packages",
          "module": "Distribution.Pot.Packages",
          "name": "readPackages",
          "normalized": "IO[(String,[String])]",
          "package": "package-o-tron",
          "partial": "Packages",
          "signature": "IO[(String,[String])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/package-o-tron/docs/Distribution-Pot-Packages.html#v:readPackages"
      }
    }
  ]
]