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
        "word": "cabal-ghci"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRetrieve ghci options for your cabal project\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "Interactive",
          "package": "cabal-ghci",
          "source": "src/Distribution-Dev-Interactive.html",
          "type": "module"
        },
        "index": {
          "description": "Retrieve ghci options for your cabal project",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "Interactive",
          "package": "cabal-ghci",
          "partial": "Interactive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn value for \u003ccode\u003e\u003ca\u003eloadCabal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "LoadCabalRet",
          "package": "cabal-ghci",
          "source": "src/Distribution-Dev-Interactive.html#LoadCabalRet",
          "type": "data"
        },
        "index": {
          "description": "Return value for loadCabal",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "LoadCabalRet",
          "package": "cabal-ghci",
          "partial": "Load Cabal Ret",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#t:LoadCabalRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMissing dependencies\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "MissingDeps",
          "package": "cabal-ghci",
          "signature": "MissingDeps [Dependency]",
          "source": "src/Distribution-Dev-Interactive.html#LoadCabalRet",
          "type": "function"
        },
        "index": {
          "description": "Missing dependencies",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "MissingDeps",
          "normalized": "MissingDeps[Dependency]",
          "package": "cabal-ghci",
          "partial": "Missing Deps",
          "signature": "MissingDeps[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:MissingDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo cabal file found\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "NoCabalFile",
          "package": "cabal-ghci",
          "signature": "NoCabalFile",
          "source": "src/Distribution-Dev-Interactive.html#LoadCabalRet",
          "type": "function"
        },
        "index": {
          "description": "No cabal file found",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "NoCabalFile",
          "package": "cabal-ghci",
          "partial": "No Cabal File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:NoCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful loading and parsing of cabal file\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "Pkg",
          "package": "cabal-ghci",
          "signature": "Pkg FilePath PackageDescription (Maybe LocalBuildInfo)",
          "source": "src/Distribution-Dev-Interactive.html#LoadCabalRet",
          "type": "function"
        },
        "index": {
          "description": "Successful loading and parsing of cabal file",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "Pkg",
          "package": "cabal-ghci",
          "partial": "Pkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:Pkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecabalSet\u003c/a\u003e\u003c/code\u003e returns a list of ghci commands (seperated by newlines) that :set the \u003ccode\u003e\u003ca\u003epackageOpts\u003c/a\u003e\u003c/code\u003e of the current cabal project\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "cabalSet",
          "package": "cabal-ghci",
          "signature": "String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "cabalSet returns list of ghci commands seperated by newlines that set the packageOpts of the current cabal project",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "cabalSet",
          "normalized": "String-\u003eIO String",
          "package": "cabal-ghci",
          "partial": "Set",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:cabalSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the current cabal project file and parse it\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "loadCabal",
          "package": "cabal-ghci",
          "signature": "FilePath-\u003e FlagAssignment-\u003e IO LoadCabalRet",
          "type": "function"
        },
        "index": {
          "description": "Load the current cabal project file and parse it",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "loadCabal",
          "normalized": "FilePath-\u003eFlagAssignment-\u003eIO LoadCabalRet",
          "package": "cabal-ghci",
          "partial": "Cabal",
          "signature": "FilePath-\u003eFlagAssignment-\u003eIO LoadCabalRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:loadCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a .cabal file in the path or any of it's parent directories\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "lookForCabalFile",
          "package": "cabal-ghci",
          "signature": "FilePath-\u003e IO (Maybe FilePath)",
          "type": "function"
        },
        "index": {
          "description": "Find cabal file in the path or any of it parent directories",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "lookForCabalFile",
          "normalized": "FilePath-\u003eIO(Maybe FilePath)",
          "package": "cabal-ghci",
          "partial": "For Cabal File",
          "signature": "FilePath-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:lookForCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a list of ghci options needed to load files from a cabal project\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "packageOpts",
          "package": "cabal-ghci",
          "signature": "FilePath-\u003e PackageDescription-\u003e Maybe LocalBuildInfo-\u003e String-\u003e Maybe [String]",
          "type": "function"
        },
        "index": {
          "description": "Build list of ghci options needed to load files from cabal project",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "packageOpts",
          "normalized": "FilePath-\u003ePackageDescription-\u003eMaybe LocalBuildInfo-\u003eString-\u003eMaybe[String]",
          "package": "cabal-ghci",
          "partial": "Opts",
          "signature": "FilePath-\u003ePackageDescription-\u003eMaybe LocalBuildInfo-\u003eString-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:packageOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralised version of \u003ccode\u003e\u003ca\u003ecabalSet\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Distribution.Dev.Interactive",
          "name": "withOpts",
          "package": "cabal-ghci",
          "signature": "[String]-\u003e (String -\u003e IO a)-\u003e ([String] -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Generalised version of cabalSet",
          "hierarchy": "Distribution Dev Interactive",
          "module": "Distribution.Dev.Interactive",
          "name": "withOpts",
          "normalized": "[String]-\u003e(String-\u003eIO a)-\u003e([String]-\u003eIO a)-\u003eIO a",
          "package": "cabal-ghci",
          "partial": "Opts",
          "signature": "[String]-\u003e(String-\u003eIO a)-\u003e([String]-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-ghci/docs/Distribution-Dev-Interactive.html#v:withOpts"
      }
    }
  ]
]