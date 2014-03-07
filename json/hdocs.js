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
        "word": "hdocs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HDocs.Base",
          "name": "Base",
          "package": "hdocs",
          "source": "src/HDocs-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "Base",
          "package": "hdocs",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation in module\n\u003c/p\u003e",
          "module": "HDocs.Base",
          "name": "ModuleDocMap",
          "package": "hdocs",
          "source": "src/HDocs-Base.html#ModuleDocMap",
          "type": "type"
        },
        "index": {
          "description": "Documentation in module",
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "ModuleDocMap",
          "package": "hdocs",
          "partial": "Module Doc Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#t:ModuleDocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfig GHC session\n\u003c/p\u003e",
          "module": "HDocs.Base",
          "name": "configSession",
          "package": "hdocs",
          "signature": "[String] -\u003e IO DynFlags",
          "source": "src/HDocs-Base.html#configSession",
          "type": "function"
        },
        "index": {
          "description": "Config GHC session",
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "configSession",
          "normalized": "[String]-\u003eIO DynFlags",
          "package": "hdocs",
          "partial": "Session",
          "signature": "[String]-\u003eIO DynFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#v:configSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat documentation to plain text.\n\u003c/p\u003e",
          "module": "HDocs.Base",
          "name": "formatDoc",
          "package": "hdocs",
          "signature": "Doc String -\u003e String",
          "source": "src/HDocs-Base.html#formatDoc",
          "type": "function"
        },
        "index": {
          "description": "Format documentation to plain text",
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "formatDoc",
          "normalized": "Doc String-\u003eString",
          "package": "hdocs",
          "partial": "Doc",
          "signature": "Doc String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#v:formatDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat docs to plain text\n\u003c/p\u003e",
          "module": "HDocs.Base",
          "name": "formatDocs",
          "package": "hdocs",
          "signature": "ModuleDocMap -\u003e Map String String",
          "source": "src/HDocs-Base.html#formatDocs",
          "type": "function"
        },
        "index": {
          "description": "Format docs to plain text",
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "formatDocs",
          "normalized": "ModuleDocMap-\u003eMap String String",
          "package": "hdocs",
          "partial": "Docs",
          "signature": "ModuleDocMap-\u003eMap String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#v:formatDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun action with initialized packages\n\u003c/p\u003e",
          "module": "HDocs.Base",
          "name": "withInitializedPackages",
          "package": "hdocs",
          "signature": "[String] -\u003e (DynFlags -\u003e IO a) -\u003e IO a",
          "source": "src/HDocs-Base.html#withInitializedPackages",
          "type": "function"
        },
        "index": {
          "description": "Run action with initialized packages",
          "hierarchy": "HDocs Base",
          "module": "HDocs.Base",
          "name": "withInitializedPackages",
          "normalized": "[String]-\u003e(DynFlags-\u003eIO a)-\u003eIO a",
          "package": "hdocs",
          "partial": "Initialized Packages",
          "signature": "[String]-\u003e(DynFlags-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Base.html#v:withInitializedPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HDocs.Haddock",
          "name": "Haddock",
          "package": "hdocs",
          "source": "src/HDocs-Haddock.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "Haddock",
          "package": "hdocs",
          "partial": "Haddock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of haddock files in package db\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "haddockFiles",
          "package": "hdocs",
          "signature": "[String] -\u003e ErrorT String IO [FilePath]",
          "source": "src/HDocs-Haddock.html#haddockFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of haddock files in package db",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "haddockFiles",
          "normalized": "[String]-\u003eErrorT String IO[FilePath]",
          "package": "hdocs",
          "partial": "Files",
          "signature": "[String]-\u003eErrorT String IO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:haddockFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet docs for \u003ccode\u003e\u003ca\u003eInstalledInterface\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "installedInterfaceDocs",
          "package": "hdocs",
          "signature": "InstalledInterface -\u003e (String, ModuleDocMap)",
          "source": "src/HDocs-Haddock.html#installedInterfaceDocs",
          "type": "function"
        },
        "index": {
          "description": "Get docs for InstalledInterface",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "installedInterfaceDocs",
          "normalized": "InstalledInterface-\u003e(String,ModuleDocMap)",
          "package": "hdocs",
          "partial": "Interface Docs",
          "signature": "InstalledInterface-\u003e(String,ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:installedInterfaceDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet docs for \u003ccode\u003e\u003ca\u003eInstalledInterface\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "installedInterfacesDocs",
          "package": "hdocs",
          "signature": "[InstalledInterface] -\u003e Map String ModuleDocMap",
          "source": "src/HDocs-Haddock.html#installedInterfacesDocs",
          "type": "function"
        },
        "index": {
          "description": "Get docs for InstalledInterface",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "installedInterfacesDocs",
          "normalized": "[InstalledInterface]-\u003eMap String ModuleDocMap",
          "package": "hdocs",
          "partial": "Interfaces Docs",
          "signature": "[InstalledInterface]-\u003eMap String ModuleDocMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:installedInterfacesDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet docs for \u003ccode\u003e\u003ca\u003eInterface\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "interfaceDocs",
          "package": "hdocs",
          "signature": "Interface -\u003e (String, ModuleDocMap)",
          "source": "src/HDocs-Haddock.html#interfaceDocs",
          "type": "function"
        },
        "index": {
          "description": "Get docs for Interface",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "interfaceDocs",
          "normalized": "Interface-\u003e(String,ModuleDocMap)",
          "package": "hdocs",
          "partial": "Docs",
          "signature": "Interface-\u003e(String,ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:interfaceDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup doc\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "lookupDoc",
          "package": "hdocs",
          "signature": "String -\u003e String -\u003e Map String ModuleDocMap -\u003e Maybe (Doc String)",
          "source": "src/HDocs-Haddock.html#lookupDoc",
          "type": "function"
        },
        "index": {
          "description": "Lookup doc",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "lookupDoc",
          "normalized": "String-\u003eString-\u003eMap String ModuleDocMap-\u003eMaybe(Doc String)",
          "package": "hdocs",
          "partial": "Doc",
          "signature": "String-\u003eString-\u003eMap String ModuleDocMap-\u003eMaybe(Doc String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:lookupDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup doc for Name\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "lookupNameDoc",
          "package": "hdocs",
          "signature": "Name -\u003e Map String ModuleDocMap -\u003e Maybe (Doc String)",
          "source": "src/HDocs-Haddock.html#lookupNameDoc",
          "type": "function"
        },
        "index": {
          "description": "Lookup doc for Name",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "lookupNameDoc",
          "normalized": "Name-\u003eMap String ModuleDocMap-\u003eMaybe(Doc String)",
          "package": "hdocs",
          "partial": "Name Doc",
          "signature": "Name-\u003eMap String ModuleDocMap-\u003eMaybe(Doc String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:lookupNameDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead docs from .haddock file\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "readHaddock",
          "package": "hdocs",
          "signature": "FilePath -\u003e ErrorT String IO (Map String ModuleDocMap)",
          "source": "src/HDocs-Haddock.html#readHaddock",
          "type": "function"
        },
        "index": {
          "description": "Read docs from haddock file",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "readHaddock",
          "normalized": "FilePath-\u003eErrorT String IO(Map String ModuleDocMap)",
          "package": "hdocs",
          "partial": "Haddock",
          "signature": "FilePath-\u003eErrorT String IO(Map String ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:readHaddock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all installed docs\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "readInstalledDocs",
          "package": "hdocs",
          "signature": "[String] -\u003e ErrorT String IO (Map String ModuleDocMap)",
          "source": "src/HDocs-Haddock.html#readInstalledDocs",
          "type": "function"
        },
        "index": {
          "description": "Read all installed docs",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "readInstalledDocs",
          "normalized": "[String]-\u003eErrorT String IO(Map String ModuleDocMap)",
          "package": "hdocs",
          "partial": "Installed Docs",
          "signature": "[String]-\u003eErrorT String IO(Map String ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:readInstalledDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead installed interface\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "readInstalledInterfaces",
          "package": "hdocs",
          "signature": "FilePath -\u003e ErrorT String IO [InstalledInterface]",
          "source": "src/HDocs-Haddock.html#readInstalledInterfaces",
          "type": "function"
        },
        "index": {
          "description": "Read installed interface",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "readInstalledInterfaces",
          "normalized": "FilePath-\u003eErrorT String IO[InstalledInterface]",
          "package": "hdocs",
          "partial": "Installed Interfaces",
          "signature": "FilePath-\u003eErrorT String IO[InstalledInterface]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:readInstalledInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead installed interfaces for package\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "readPackageInterfaces",
          "package": "hdocs",
          "signature": "PackageConfig -\u003e ErrorT String IO [InstalledInterface]",
          "source": "src/HDocs-Haddock.html#readPackageInterfaces",
          "type": "function"
        },
        "index": {
          "description": "Read installed interfaces for package",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "readPackageInterfaces",
          "normalized": "PackageConfig-\u003eErrorT String IO[InstalledInterface]",
          "package": "hdocs",
          "partial": "Package Interfaces",
          "signature": "PackageConfig-\u003eErrorT String IO[InstalledInterface]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:readPackageInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead docs for haskell module\n\u003c/p\u003e",
          "module": "HDocs.Haddock",
          "name": "readSource",
          "package": "hdocs",
          "signature": "[String] -\u003e FilePath -\u003e ErrorT String IO (String, ModuleDocMap)",
          "source": "src/HDocs-Haddock.html#readSource",
          "type": "function"
        },
        "index": {
          "description": "Read docs for haskell module",
          "hierarchy": "HDocs Haddock",
          "module": "HDocs.Haddock",
          "name": "readSource",
          "normalized": "[String]-\u003eFilePath-\u003eErrorT String IO(String,ModuleDocMap)",
          "package": "hdocs",
          "partial": "Source",
          "signature": "[String]-\u003eFilePath-\u003eErrorT String IO(String,ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Haddock.html#v:readSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HDocs.Module",
          "name": "Module",
          "package": "hdocs",
          "source": "src/HDocs-Module.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HDocs Module",
          "module": "HDocs.Module",
          "name": "Module",
          "package": "hdocs",
          "partial": "Module",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Module.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet docs for \u003ccode\u003e\u003ca\u003eInstalledInterface\u003c/a\u003e\u003c/code\u003e with its exports docs\n\u003c/p\u003e",
          "module": "HDocs.Module",
          "name": "exportsDocs",
          "package": "hdocs",
          "signature": "Map String ModuleDocMap -\u003e InstalledInterface -\u003e (String, ModuleDocMap)",
          "source": "src/HDocs-Module.html#exportsDocs",
          "type": "function"
        },
        "index": {
          "description": "Get docs for InstalledInterface with its exports docs",
          "hierarchy": "HDocs Module",
          "module": "HDocs.Module",
          "name": "exportsDocs",
          "normalized": "Map String ModuleDocMap-\u003eInstalledInterface-\u003e(String,ModuleDocMap)",
          "package": "hdocs",
          "partial": "Docs",
          "signature": "Map String ModuleDocMap-\u003eInstalledInterface-\u003e(String,ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Module.html#v:exportsDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad docs for all installed modules\n\u003c/p\u003e",
          "module": "HDocs.Module",
          "name": "installedDocs",
          "package": "hdocs",
          "signature": "[String] -\u003e ErrorT String IO (Map String ModuleDocMap)",
          "source": "src/HDocs-Module.html#installedDocs",
          "type": "function"
        },
        "index": {
          "description": "Load docs for all installed modules",
          "hierarchy": "HDocs Module",
          "module": "HDocs.Module",
          "name": "installedDocs",
          "normalized": "[String]-\u003eErrorT String IO(Map String ModuleDocMap)",
          "package": "hdocs",
          "partial": "Docs",
          "signature": "[String]-\u003eErrorT String IO(Map String ModuleDocMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Module.html#v:installedDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad docs for all exported module symbols\n\u003c/p\u003e",
          "module": "HDocs.Module",
          "name": "moduleDocs",
          "package": "hdocs",
          "signature": "[String] -\u003e String -\u003e ErrorT String IO ModuleDocMap",
          "source": "src/HDocs-Module.html#moduleDocs",
          "type": "function"
        },
        "index": {
          "description": "Load docs for all exported module symbols",
          "hierarchy": "HDocs Module",
          "module": "HDocs.Module",
          "name": "moduleDocs",
          "normalized": "[String]-\u003eString-\u003eErrorT String IO ModuleDocMap",
          "package": "hdocs",
          "partial": "Docs",
          "signature": "[String]-\u003eString-\u003eErrorT String IO ModuleDocMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdocs/docs/HDocs-Module.html#v:moduleDocs"
      }
    }
  ]
]