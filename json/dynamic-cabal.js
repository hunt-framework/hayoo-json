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
        "word": "dynamic-cabal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "LocalBuildInfo",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "LocalBuildInfo",
          "package": "dynamic-cabal",
          "partial": "Local Build Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package db is either the user package db (often at ~\u003cem\u003e.ghc\u003c/em\u003eghc-....), the global package\n or a specific file or directory.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "PackageDB",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#PackageDB",
          "type": "data"
        },
        "index": {
          "description": "package db is either the user package db often at ghc ghc the global package or specific file or directory",
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "PackageDB",
          "package": "dynamic-cabal",
          "partial": "Package DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#t:PackageDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "GlobalDB",
          "package": "dynamic-cabal",
          "signature": "GlobalDB",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#PackageDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "GlobalDB",
          "package": "dynamic-cabal",
          "partial": "Global DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:GlobalDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "SpecificDB",
          "package": "dynamic-cabal",
          "signature": "SpecificDB FilePath",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#PackageDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "SpecificDB",
          "package": "dynamic-cabal",
          "partial": "Specific DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:SpecificDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "UserDB",
          "package": "dynamic-cabal",
          "signature": "UserDB",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#PackageDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "UserDB",
          "package": "dynamic-cabal",
          "partial": "User DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:UserDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the builddir of a LocalBuildInfo. Often, this will just be \u003ca\u003edist\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "buildDir",
          "package": "dynamic-cabal",
          "signature": "Selector LocalBuildInfo String",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#buildDir",
          "type": "function"
        },
        "index": {
          "description": "Returns the builddir of LocalBuildInfo Often this will just be dist",
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "buildDir",
          "package": "dynamic-cabal",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:buildDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the package description included in a local build info.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "localPkgDesc",
          "package": "dynamic-cabal",
          "signature": "Selector LocalBuildInfo PackageDescription",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#localPkgDesc",
          "type": "function"
        },
        "index": {
          "description": "Returns the package description included in local build info",
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "localPkgDesc",
          "package": "dynamic-cabal",
          "partial": "Pkg Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:localPkgDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the package dbs that ghc will use when compiling this package.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "packageDBs",
          "package": "dynamic-cabal",
          "signature": "Query LocalBuildInfo [PackageDB]",
          "source": "src/Distribution-Client-Dynamic-LocalBuildInfo.html#packageDBs",
          "type": "function"
        },
        "index": {
          "description": "Get the package dbs that ghc will use when compiling this package",
          "hierarchy": "Distribution Client Dynamic LocalBuildInfo",
          "module": "Distribution.Client.Dynamic.LocalBuildInfo",
          "name": "packageDBs",
          "normalized": "Query LocalBuildInfo[PackageDB]",
          "package": "dynamic-cabal",
          "partial": "DBs",
          "signature": "Query LocalBuildInfo[PackageDB]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-LocalBuildInfo.html#v:packageDBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains queries that operate on a PackageDescription. It provides a function\n to extract all targets along with their dependencies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "PackageDescription",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains queries that operate on PackageDescription It provides function to extract all targets along with their dependencies",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "PackageDescription",
          "package": "dynamic-cabal",
          "partial": "Package Description",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package description type. This type has no constructors, and is only used \n for type-safety purposes.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "PackageDescription",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#PackageDescription",
          "type": "data"
        },
        "index": {
          "description": "package description type This type has no constructors and is only used for type-safety purposes",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "PackageDescription",
          "package": "dynamic-cabal",
          "partial": "Package Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#t:PackageDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA target is a single Library, an Executable, a TestSuite or a Benchmark.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Target",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "data"
        },
        "index": {
          "description": "target is single Library an Executable TestSuite or Benchmark",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Target",
          "package": "dynamic-cabal",
          "partial": "Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specific information on a target, depending on the target type.\n Libraries don't have a name, they are always named after the package, but other types do\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "TargetInfo",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#TargetInfo",
          "type": "data"
        },
        "index": {
          "description": "The specific information on target depending on the target type Libraries don have name they are always named after the package but other types do",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "TargetInfo",
          "package": "dynamic-cabal",
          "partial": "Target Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#t:TargetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains the name of the benchmark and the path to the Main module, for stdio benchmarks\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "BenchSuite",
          "package": "dynamic-cabal",
          "signature": "BenchSuite String (Maybe FilePath)",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#TargetInfo",
          "type": "function"
        },
        "index": {
          "description": "contains the name of the benchmark and the path to the Main module for stdio benchmarks",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "BenchSuite",
          "package": "dynamic-cabal",
          "partial": "Bench Suite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:BenchSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains the name of the executable and the path to the Main module\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Executable",
          "package": "dynamic-cabal",
          "signature": "Executable String FilePath",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#TargetInfo",
          "type": "function"
        },
        "index": {
          "description": "contains the name of the executable and the path to the Main module",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Executable",
          "package": "dynamic-cabal",
          "partial": "Executable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:Executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains the names of exposed modules\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Library",
          "package": "dynamic-cabal",
          "signature": "Library [String]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#TargetInfo",
          "type": "function"
        },
        "index": {
          "description": "contains the names of exposed modules",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Library",
          "normalized": "Library[String]",
          "package": "dynamic-cabal",
          "partial": "Library",
          "signature": "Library[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:Library"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Target",
          "package": "dynamic-cabal",
          "signature": "Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "Target",
          "package": "dynamic-cabal",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains the name of the test suite and the path to the Main module, for stdio tests\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "TestSuite",
          "package": "dynamic-cabal",
          "signature": "TestSuite String (Maybe FilePath)",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#TargetInfo",
          "type": "function"
        },
        "index": {
          "description": "contains the name of the test suite and the path to the Main module for stdio tests",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "TestSuite",
          "package": "dynamic-cabal",
          "partial": "Test Suite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:TestSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_buildable",
          "package": "dynamic-cabal",
          "signature": "(Bool -\u003e f Bool) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_buildable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_buildable",
          "normalized": "(Bool-\u003ea Bool)-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "signature": "(Bool-\u003ef Bool)-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_buildable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_cppOptions",
          "package": "dynamic-cabal",
          "signature": "([String] -\u003e f [String]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_cppOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_cppOptions",
          "normalized": "([String]-\u003ea[String])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "partial": "Options",
          "signature": "([String]-\u003ef[String])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_cppOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_dependencies",
          "package": "dynamic-cabal",
          "signature": "([(String, Maybe Version)] -\u003e f [(String, Maybe Version)]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_dependencies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_dependencies",
          "normalized": "([(String,Maybe Version)]-\u003ea[(String,Maybe Version)])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "signature": "([(String,Maybe Version)]-\u003ef[(String,Maybe Version)])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_enabled",
          "package": "dynamic-cabal",
          "signature": "(Bool -\u003e f Bool) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_enabled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_enabled",
          "normalized": "(Bool-\u003ea Bool)-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "signature": "(Bool-\u003ef Bool)-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_extensions",
          "package": "dynamic-cabal",
          "signature": "([String] -\u003e f [String]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_extensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_extensions",
          "normalized": "([String]-\u003ea[String])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "signature": "([String]-\u003ef[String])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_ghcOptions",
          "package": "dynamic-cabal",
          "signature": "([String] -\u003e f [String]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_ghcOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_ghcOptions",
          "normalized": "([String]-\u003ea[String])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "partial": "Options",
          "signature": "([String]-\u003ef[String])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_ghcOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_includeDirs",
          "package": "dynamic-cabal",
          "signature": "([FilePath] -\u003e f [FilePath]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_includeDirs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_includeDirs",
          "normalized": "([FilePath]-\u003ea[FilePath])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "partial": "Dirs",
          "signature": "([FilePath]-\u003ef[FilePath])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_includeDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_info",
          "package": "dynamic-cabal",
          "signature": "(TargetInfo -\u003e f TargetInfo) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_info",
          "normalized": "(TargetInfo-\u003ea TargetInfo)-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "signature": "(TargetInfo-\u003ef TargetInfo)-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the path of the main module, if available.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_mainModule",
          "package": "dynamic-cabal",
          "signature": "(FilePath -\u003e f FilePath) -\u003e TargetInfo -\u003e f TargetInfo",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_mainModule",
          "type": "function"
        },
        "index": {
          "description": "Traverse the path of the main module if available",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_mainModule",
          "normalized": "(FilePath-\u003ea FilePath)-\u003eTargetInfo-\u003ea TargetInfo",
          "package": "dynamic-cabal",
          "partial": "Module",
          "signature": "(FilePath-\u003ef FilePath)-\u003eTargetInfo-\u003ef TargetInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_mainModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the name of a target, if available (libraries don't have names).\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_name",
          "package": "dynamic-cabal",
          "signature": "(String -\u003e f String) -\u003e TargetInfo -\u003e f TargetInfo",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_name",
          "type": "function"
        },
        "index": {
          "description": "Traverse the name of target if available libraries don have names",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_name",
          "normalized": "(String-\u003ea String)-\u003eTargetInfo-\u003ea TargetInfo",
          "package": "dynamic-cabal",
          "signature": "(String-\u003ef String)-\u003eTargetInfo-\u003ef TargetInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_otherModules",
          "package": "dynamic-cabal",
          "signature": "([String] -\u003e f [String]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_otherModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_otherModules",
          "normalized": "([String]-\u003ea[String])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "partial": "Modules",
          "signature": "([String]-\u003ef[String])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_otherModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_sourceDirs",
          "package": "dynamic-cabal",
          "signature": "([FilePath] -\u003e f [FilePath]) -\u003e Target -\u003e f Target",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#_sourceDirs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "_sourceDirs",
          "normalized": "([FilePath]-\u003ea[FilePath])-\u003eTarget-\u003ea Target",
          "package": "dynamic-cabal",
          "partial": "Dirs",
          "signature": "([FilePath]-\u003ef[FilePath])-\u003eTarget-\u003ef Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:_sourceDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebuildable\u003c/a\u003e\u003c/code\u003e field in the package description.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "buildable",
          "package": "dynamic-cabal",
          "signature": "Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "The buildable field in the package description",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "buildable",
          "package": "dynamic-cabal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:buildable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional options to pass to CPP preprocessor when compiling source files.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "cppOptions",
          "package": "dynamic-cabal",
          "signature": "[String]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "Additional options to pass to CPP preprocessor when compiling source files",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "cppOptions",
          "normalized": "[String]",
          "package": "dynamic-cabal",
          "partial": "Options",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:cppOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll dependencies of the target, with their versions. If the version is not resolved yet, it'll be Nothing. \n That only happens when the target is not enabled, though.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "dependencies",
          "package": "dynamic-cabal",
          "signature": "[(String, Maybe Version)]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "All dependencies of the target with their versions If the version is not resolved yet it ll be Nothing That only happens when the target is not enabled though",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "dependencies",
          "normalized": "[(String,Maybe Version)]",
          "package": "dynamic-cabal",
          "signature": "[(String,Maybe Version)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether this target was enabled or not. This only matters for Benchmarks or Tests, Executables and Libraries are always enabled.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "enabled",
          "package": "dynamic-cabal",
          "signature": "Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "Whether this target was enabled or not This only matters for Benchmarks or Tests Executables and Libraries are always enabled",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "enabled",
          "package": "dynamic-cabal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:enabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extensions to enable/disable. The elements are like GHC's -X flags, a disabled extension \n is represented as the extension name prefixed by \u003ccode\u003eNo\u003c/code\u003e.\n Example value: extensions = [\u003ca\u003eScopedTypeVariables\u003c/a\u003e, \u003ca\u003eNoMultiParamTypeClasses\u003c/a\u003e]\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "extensions",
          "package": "dynamic-cabal",
          "signature": "[String]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "The extensions to enable disable The elements are like GHC flags disabled extension is represented as the extension name prefixed by No Example value extensions ScopedTypeVariables NoMultiParamTypeClasses",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "extensions",
          "normalized": "[String]",
          "package": "dynamic-cabal",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional options to pass to GHC when compiling source files.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "ghcOptions",
          "package": "dynamic-cabal",
          "signature": "[String]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "Additional options to pass to GHC when compiling source files",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "ghcOptions",
          "normalized": "[String]",
          "package": "dynamic-cabal",
          "partial": "Options",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:ghcOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectories where to look for header files.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "includeDirs",
          "package": "dynamic-cabal",
          "signature": "[FilePath]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "Directories where to look for header files",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "includeDirs",
          "normalized": "[FilePath]",
          "package": "dynamic-cabal",
          "partial": "Dirs",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:includeDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specific info of the target\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "info",
          "package": "dynamic-cabal",
          "signature": "TargetInfo",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "The specific info of the target",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "info",
          "package": "dynamic-cabal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the target a benchmark?\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isBench",
          "package": "dynamic-cabal",
          "signature": "Target -\u003e Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#isBench",
          "type": "function"
        },
        "index": {
          "description": "is the target benchmark",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isBench",
          "normalized": "Target-\u003eBool",
          "package": "dynamic-cabal",
          "partial": "Bench",
          "signature": "Target-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:isBench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the target an executable?\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isExecutable",
          "package": "dynamic-cabal",
          "signature": "Target -\u003e Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#isExecutable",
          "type": "function"
        },
        "index": {
          "description": "is the target an executable",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isExecutable",
          "normalized": "Target-\u003eBool",
          "package": "dynamic-cabal",
          "partial": "Executable",
          "signature": "Target-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:isExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the target the library?\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isLibrary",
          "package": "dynamic-cabal",
          "signature": "Target -\u003e Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#isLibrary",
          "type": "function"
        },
        "index": {
          "description": "is the target the library",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isLibrary",
          "normalized": "Target-\u003eBool",
          "package": "dynamic-cabal",
          "partial": "Library",
          "signature": "Target-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:isLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the target a test suite?\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isTest",
          "package": "dynamic-cabal",
          "signature": "Target -\u003e Bool",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#isTest",
          "type": "function"
        },
        "index": {
          "description": "is the target test suite",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "isTest",
          "normalized": "Target-\u003eBool",
          "package": "dynamic-cabal",
          "partial": "Test",
          "signature": "Target-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:isTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eother modules included in the target\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "otherModules",
          "package": "dynamic-cabal",
          "signature": "[String]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "other modules included in the target",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "otherModules",
          "normalized": "[String]",
          "package": "dynamic-cabal",
          "partial": "Modules",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:otherModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectories where to look for source files. \n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "sourceDirs",
          "package": "dynamic-cabal",
          "signature": "[FilePath]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#Target",
          "type": "function"
        },
        "index": {
          "description": "Directories where to look for source files",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "sourceDirs",
          "normalized": "[FilePath]",
          "package": "dynamic-cabal",
          "partial": "Dirs",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:sourceDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the target name, or the empty string for the library target\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "targetName",
          "package": "dynamic-cabal",
          "signature": "Target -\u003e String",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#targetName",
          "type": "function"
        },
        "index": {
          "description": "return the target name or the empty string for the library target",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "targetName",
          "normalized": "Target-\u003eString",
          "package": "dynamic-cabal",
          "partial": "Name",
          "signature": "Target-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:targetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the available targets. This will return all targets, even disabled ones. \n If a package is disabled or not buildable, it's possible that not all dependencies have versions, some can be Nothing.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "targets",
          "package": "dynamic-cabal",
          "signature": "Query PackageDescription [Target]",
          "source": "src/Distribution-Client-Dynamic-PackageDescription.html#targets",
          "type": "function"
        },
        "index": {
          "description": "Query the available targets This will return all targets even disabled ones If package is disabled or not buildable it possible that not all dependencies have versions some can be Nothing",
          "hierarchy": "Distribution Client Dynamic PackageDescription",
          "module": "Distribution.Client.Dynamic.PackageDescription",
          "name": "targets",
          "normalized": "Query PackageDescription[Target]",
          "package": "dynamic-cabal",
          "signature": "Query PackageDescription[Target]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-PackageDescription.html#v:targets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for building queries on cabal's setup-config an evaluating them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Query",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-Query.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for building queries on cabal setup-config an evaluating them",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Query",
          "package": "dynamic-cabal",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just a dummy type representing a LocalBuildInfo. You don't have to use\n this type, it is just used to tag queries and make them more type-safe.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "LocalBuildInfo",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-Query.html#LocalBuildInfo",
          "type": "data"
        },
        "index": {
          "description": "This is just dummy type representing LocalBuildInfo You don have to use this type it is just used to tag queries and make them more type-safe",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "LocalBuildInfo",
          "package": "dynamic-cabal",
          "partial": "Local Build Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#t:LocalBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query is like a Selector, but it cannot be composed any futher using a Category instance.\n It can have a Functor and Applicative instance though. \n To execute a query, you only need to run GHC once.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Query",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-Query.html#Query",
          "type": "data"
        },
        "index": {
          "description": "query is like Selector but it cannot be composed any futher using Category instance It can have Functor and Applicative instance though To execute query you only need to run GHC once",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Query",
          "package": "dynamic-cabal",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA selector is a generator for a function of type i -\u003e o.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Selector",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic-Query.html#Selector",
          "type": "data"
        },
        "index": {
          "description": "selector is generator for function of type",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "Selector",
          "package": "dynamic-cabal",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two selectors, monadically.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "(=\u003c\u003c\u003c)",
          "package": "dynamic-cabal",
          "signature": "Selector b (m c) -\u003e Selector a (m b) -\u003e Selector a (m c)",
          "source": "src/Distribution-Client-Dynamic-Query.html#%3D%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "Compose two selectors monadically",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "(=\u003c\u003c\u003c) =\u003c\u003c\u003c",
          "normalized": "Selector a(b c)-\u003eSelector d(b a)-\u003eSelector d(b c)",
          "package": "dynamic-cabal",
          "signature": "Selector b(m c)-\u003eSelector a(m b)-\u003eSelector a(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:-61--60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as (=\u003c\u003c\u003c), but flipped.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "(\u003e\u003e\u003e=)",
          "package": "dynamic-cabal",
          "signature": "Selector a (m b) -\u003e Selector b (m c) -\u003e Selector a (m c)",
          "source": "src/Distribution-Client-Dynamic-Query.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "The same as but flipped",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "Selector a(b c)-\u003eSelector c(b d)-\u003eSelector a(b d)",
          "package": "dynamic-cabal",
          "signature": "Selector a(m b)-\u003eSelector b(m c)-\u003eSelector a(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a query to work over functors.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "fmapQ",
          "package": "dynamic-cabal",
          "signature": "Query s a -\u003e Query (f s) (f a)",
          "source": "src/Distribution-Client-Dynamic-Query.html#fmapQ",
          "type": "function"
        },
        "index": {
          "description": "Lift query to work over functors",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "fmapQ",
          "normalized": "Query a b-\u003eQuery(c a)(c b)",
          "package": "dynamic-cabal",
          "signature": "Query s a-\u003eQuery(f s)(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:fmapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a selector to work on functorial inputs and outputs.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "fmapS",
          "package": "dynamic-cabal",
          "signature": "Selector a b -\u003e Selector (m a) (m b)",
          "source": "src/Distribution-Client-Dynamic-Query.html#fmapS",
          "type": "function"
        },
        "index": {
          "description": "Lift selector to work on functorial inputs and outputs",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "fmapS",
          "normalized": "Selector a b-\u003eSelector(c a)(c b)",
          "package": "dynamic-cabal",
          "signature": "Selector a b-\u003eSelector(m a)(m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:fmapS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic.Query",
          "name": "getCabalVersion",
          "package": "dynamic-cabal",
          "signature": "FilePath -\u003e IO Version",
          "source": "src/Distribution-Client-Dynamic-Query.html#getCabalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "getCabalVersion",
          "normalized": "FilePath-\u003eIO Version",
          "package": "dynamic-cabal",
          "partial": "Cabal Version",
          "signature": "FilePath-\u003eIO Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:getCabalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Selector to get something out of a Maybe if you supply a default value.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "maybeDefault",
          "package": "dynamic-cabal",
          "signature": "a -\u003e Selector (Maybe a) a",
          "source": "src/Distribution-Client-Dynamic-Query.html#maybeDefault",
          "type": "function"
        },
        "index": {
          "description": "Selector to get something out of Maybe if you supply default value",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "maybeDefault",
          "normalized": "a-\u003eSelector(Maybe a)a",
          "package": "dynamic-cabal",
          "partial": "Default",
          "signature": "a-\u003eSelector(Maybe a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:maybeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a selector to run a query in a bigger environment than it was defined in.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "on",
          "package": "dynamic-cabal",
          "signature": "Selector i o -\u003e Query o r -\u003e Query i r",
          "source": "src/Distribution-Client-Dynamic-Query.html#on",
          "type": "function"
        },
        "index": {
          "description": "Use selector to run query in bigger environment than it was defined in",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "on",
          "normalized": "Selector a b-\u003eQuery b c-\u003eQuery a c",
          "package": "dynamic-cabal",
          "signature": "Selector i o-\u003eQuery o r-\u003eQuery i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a query from a selector.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "query",
          "package": "dynamic-cabal",
          "signature": "Selector s a -\u003e Query s a",
          "source": "src/Distribution-Client-Dynamic-Query.html#query",
          "type": "function"
        },
        "index": {
          "description": "Build query from selector",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "query",
          "normalized": "Selector a b-\u003eQuery a b",
          "package": "dynamic-cabal",
          "signature": "Selector s a-\u003eQuery s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a query. This will generate the source code for the query and then invoke GHC to run it.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "runQuery",
          "package": "dynamic-cabal",
          "signature": "Query LocalBuildInfo a -\u003e FilePath -\u003e IO a",
          "source": "src/Distribution-Client-Dynamic-Query.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Run query This will generate the source code for the query and then invoke GHC to run it",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "runQuery",
          "normalized": "Query LocalBuildInfo a-\u003eFilePath-\u003eIO a",
          "package": "dynamic-cabal",
          "partial": "Query",
          "signature": "Query LocalBuildInfo a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a raw query, getting the full source from the first parameter\n the module must be DynamicCabalQuery and it must have a result declaration\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "runRawQuery",
          "package": "dynamic-cabal",
          "signature": "String -\u003e FilePath -\u003e IO a",
          "source": "src/Distribution-Client-Dynamic-Query.html#runRawQuery",
          "type": "function"
        },
        "index": {
          "description": "Run raw query getting the full source from the first parameter the module must be DynamicCabalQuery and it must have result declaration",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "runRawQuery",
          "normalized": "String-\u003eFilePath-\u003eIO a",
          "package": "dynamic-cabal",
          "partial": "Raw Query",
          "signature": "String-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:runRawQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a selector. The expression the selector generates can depend on the cabal version.\n\u003c/p\u003e",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "selector",
          "package": "dynamic-cabal",
          "signature": "(Version -\u003e ExpG (i -\u003e o)) -\u003e Selector i o",
          "source": "src/Distribution-Client-Dynamic-Query.html#selector",
          "type": "function"
        },
        "index": {
          "description": "Build selector The expression the selector generates can depend on the cabal version",
          "hierarchy": "Distribution Client Dynamic Query",
          "module": "Distribution.Client.Dynamic.Query",
          "name": "selector",
          "normalized": "(Version-\u003eExpG(a-\u003eb))-\u003eSelector a b",
          "package": "dynamic-cabal",
          "signature": "(Version-\u003eExpG(i-\u003eo))-\u003eSelector i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic-Query.html#v:selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Client.Dynamic",
          "name": "Dynamic",
          "package": "dynamic-cabal",
          "source": "src/Distribution-Client-Dynamic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Client Dynamic",
          "module": "Distribution.Client.Dynamic",
          "name": "Dynamic",
          "package": "dynamic-cabal",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-cabal/docs/Distribution-Client-Dynamic.html#"
      }
    }
  ]
]