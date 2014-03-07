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
        "word": "ghc-mod"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level access to the ghc-mod library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "Internal",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Low level access to the ghc-mod library",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "Internal",
          "package": "ghc-mod",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOption information for GHC\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "CompilerOptions",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#CompilerOptions",
          "type": "data"
        },
        "index": {
          "description": "Option information for GHC",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "CompilerOptions",
          "package": "ghc-mod",
          "partial": "Compiler Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#t:CompilerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single GHC command line option.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "GHCOption",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#GHCOption",
          "type": "type"
        },
        "index": {
          "description": "single GHC command line option",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "GHCOption",
          "package": "ghc-mod",
          "partial": "GHCOption",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#t:GHCOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn include directory for modules.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "IncludeDir",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#IncludeDir",
          "type": "type"
        },
        "index": {
          "description": "An include directory for modules",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "IncludeDir",
          "package": "ghc-mod",
          "partial": "Include Dir",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#t:IncludeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA means to read the log.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "LogReader",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-ErrMsg.html#LogReader",
          "type": "type"
        },
        "index": {
          "description": "means to read the log",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "LogReader",
          "package": "ghc-mod",
          "partial": "Log Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#t:LogReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package name and its ID.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "Package",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#Package",
          "type": "type"
        },
        "index": {
          "description": "package name and its ID",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "Package",
          "package": "ghc-mod",
          "partial": "Package",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#t:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry the left \u003ccode\u003e\u003ca\u003eGhcMonad\u003c/a\u003e\u003c/code\u003e action. If \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs, try\n   the right \u003ccode\u003e\u003ca\u003eGhcMonad\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "(|||\u003e)",
          "package": "ghc-mod",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Language-Haskell-GhcMod-GHCChoice.html#%7C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Try the left GhcMonad action If IOException occurs try the right GhcMonad action",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "(|||\u003e) |||\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ghc-mod",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:-124--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry the left \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e action. If \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs, try\n   the right \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "(||\u003e)",
          "package": "ghc-mod",
          "signature": "Ghc a -\u003e Ghc a -\u003e Ghc a",
          "source": "src/Language-Haskell-GhcMod-GHCChoice.html#%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Try the left Ghc action If IOException occurs try the right Ghc action",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "(||\u003e) ||\u003e",
          "normalized": "Ghc a-\u003eGhc a-\u003eGhc a",
          "package": "ghc-mod",
          "signature": "Ghc a-\u003eGhc a-\u003eGhc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:-124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "CompilerOptions",
          "package": "ghc-mod",
          "signature": "CompilerOptions",
          "source": "src/Language-Haskell-GhcMod-Types.html#CompilerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "CompilerOptions",
          "package": "ghc-mod",
          "partial": "Compiler Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:CompilerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting all \u003ccode\u003e\u003ca\u003eBuildInfo\u003c/a\u003e\u003c/code\u003e for libraries, executables, tests and benchmarks.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalAllBuildInfo",
          "package": "ghc-mod",
          "signature": "PackageDescription -\u003e [BuildInfo]",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#cabalAllBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "Extracting all BuildInfo for libraries executables tests and benchmarks",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalAllBuildInfo",
          "normalized": "PackageDescription-\u003e[BuildInfo]",
          "package": "ghc-mod",
          "partial": "All Build Info",
          "signature": "PackageDescription-\u003e[BuildInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:cabalAllBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting all \u003ccode\u003eModule\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es for libraries, executables,\n tests and benchmarks.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalAllTargets",
          "package": "ghc-mod",
          "signature": "PackageDescription -\u003e IO ([String], [String], [String], [String])",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#cabalAllTargets",
          "type": "function"
        },
        "index": {
          "description": "Extracting all Module FilePath for libraries executables tests and benchmarks",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalAllTargets",
          "normalized": "PackageDescription-\u003eIO([String],[String],[String],[String])",
          "package": "ghc-mod",
          "partial": "All Targets",
          "signature": "PackageDescription-\u003eIO([String],[String],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:cabalAllTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting package names of dependency.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalDependPackages",
          "package": "ghc-mod",
          "signature": "[BuildInfo] -\u003e [PackageBaseName]",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#cabalDependPackages",
          "type": "function"
        },
        "index": {
          "description": "Extracting package names of dependency",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalDependPackages",
          "normalized": "[BuildInfo]-\u003e[PackageBaseName]",
          "package": "ghc-mod",
          "partial": "Depend Packages",
          "signature": "[BuildInfo]-\u003e[PackageBaseName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:cabalDependPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting include directories for modules.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalSourceDirs",
          "package": "ghc-mod",
          "signature": "[BuildInfo] -\u003e [IncludeDir]",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#cabalSourceDirs",
          "type": "function"
        },
        "index": {
          "description": "Extracting include directories for modules",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "cabalSourceDirs",
          "normalized": "[BuildInfo]-\u003e[IncludeDir]",
          "package": "ghc-mod",
          "partial": "Source Dirs",
          "signature": "[BuildInfo]-\u003e[IncludeDir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:cabalSourceDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if Template Haskell or quasi quotes are used.\n   If not, the process can be faster.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "canCheckFast",
          "package": "ghc-mod",
          "signature": "ModuleGraph -\u003e Bool",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#canCheckFast",
          "type": "function"
        },
        "index": {
          "description": "Checking if Template Haskell or quasi quotes are used If not the process can be faster",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "canCheckFast",
          "normalized": "ModuleGraph-\u003eBool",
          "package": "ghc-mod",
          "partial": "Check Fast",
          "signature": "ModuleGraph-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:canCheckFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo check TH, a session module graph is necessary.\n \u003ca\u003eload\u003c/a\u003e sets a session module graph using \u003ca\u003edepanal\u003c/a\u003e.\n But we have to set \u003ca\u003e-fno-code\u003c/a\u003e to DynFlags before \u003ca\u003eload\u003c/a\u003e.\n So, this is necessary redundancy.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "checkSlowAndSet",
          "package": "ghc-mod",
          "signature": "m ()",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#checkSlowAndSet",
          "type": "function"
        },
        "index": {
          "description": "To check TH session module graph is necessary load sets session module graph using depanal But we have to set fno-code to DynFlags before load So this is necessary redundancy",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "checkSlowAndSet",
          "normalized": "a()",
          "package": "ghc-mod",
          "partial": "Slow And Set",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:checkSlowAndSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependent package names\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "depPackages",
          "package": "ghc-mod",
          "signature": "[Package]",
          "source": "src/Language-Haskell-GhcMod-Types.html#CompilerOptions",
          "type": "function"
        },
        "index": {
          "description": "Dependent package names",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "depPackages",
          "normalized": "[Package]",
          "package": "ghc-mod",
          "partial": "Packages",
          "signature": "[Package]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:depPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting necessary \u003ccode\u003e\u003ca\u003eCompilerOptions\u003c/a\u003e\u003c/code\u003e from three information sources.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "getCompilerOptions",
          "package": "ghc-mod",
          "signature": "[GHCOption] -\u003e Cradle -\u003e PackageDescription -\u003e IO CompilerOptions",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#getCompilerOptions",
          "type": "function"
        },
        "index": {
          "description": "Getting necessary CompilerOptions from three information sources",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "getCompilerOptions",
          "normalized": "[GHCOption]-\u003eCradle-\u003ePackageDescription-\u003eIO CompilerOptions",
          "package": "ghc-mod",
          "partial": "Compiler Options",
          "signature": "[GHCOption]-\u003eCradle-\u003ePackageDescription-\u003eIO CompilerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:getCompilerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eDynFlags\u003c/a\u003e\u003c/code\u003e currently in use in the GHC session.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "getDynamicFlags",
          "package": "ghc-mod",
          "signature": "IO DynFlags",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#getDynamicFlags",
          "type": "function"
        },
        "index": {
          "description": "Return the DynFlags currently in use in the GHC session",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "getDynamicFlags",
          "package": "ghc-mod",
          "partial": "Dynamic Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:getDynamicFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line options\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "ghcOptions",
          "package": "ghc-mod",
          "signature": "[GHCOption]",
          "source": "src/Language-Haskell-GhcMod-Types.html#CompilerOptions",
          "type": "function"
        },
        "index": {
          "description": "Command line options",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "ghcOptions",
          "normalized": "[GHCOption]",
          "package": "ghc-mod",
          "partial": "Options",
          "signature": "[GHCOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:ghcOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003eAltGhcgoNext\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "goNext",
          "package": "ghc-mod",
          "signature": "Ghc a",
          "source": "src/Language-Haskell-GhcMod-GHCChoice.html#goNext",
          "type": "function"
        },
        "index": {
          "description": "Go to the next Ghc monad by throwing AltGhcgoNext",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "goNext",
          "package": "ghc-mod",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:goNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude directories for modules\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "includeDirs",
          "package": "ghc-mod",
          "signature": "[IncludeDir]",
          "source": "src/Language-Haskell-GhcMod-Types.html#CompilerOptions",
          "type": "function"
        },
        "index": {
          "description": "Include directories for modules",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "includeDirs",
          "normalized": "[IncludeDir]",
          "package": "ghc-mod",
          "partial": "Dirs",
          "signature": "[IncludeDir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:includeDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eDynFlags\u003c/a\u003e\u003c/code\u003e relating to the compilation of a single\n file or GHC session.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "initializeFlags",
          "package": "ghc-mod",
          "signature": "Options -\u003e m ()",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#initializeFlags",
          "type": "function"
        },
        "index": {
          "description": "Initialize the DynFlags relating to the compilation of single file or GHC session",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "initializeFlags",
          "normalized": "Options-\u003ea()",
          "package": "ghc-mod",
          "partial": "Flags",
          "signature": "Options-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:initializeFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eDynFlags\u003c/a\u003e\u003c/code\u003e relating to the compilation of a single\n file or GHC session according to the \u003ccode\u003e\u003ca\u003eCradle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e\n provided.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "initializeFlagsWithCradle",
          "package": "ghc-mod",
          "signature": "Options -\u003e Cradle -\u003e [GHCOption] -\u003e Bool -\u003e m (LogReader, Maybe PackageDescription)",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#initializeFlagsWithCradle",
          "type": "function"
        },
        "index": {
          "description": "Initialize the DynFlags relating to the compilation of single file or GHC session according to the Cradle and Options provided",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "initializeFlagsWithCradle",
          "normalized": "Options-\u003eCradle-\u003e[GHCOption]-\u003eBool-\u003ea(LogReader,Maybe PackageDescription)",
          "package": "ghc-mod",
          "partial": "Flags With Cradle",
          "signature": "Options-\u003eCradle-\u003e[GHCOption]-\u003eBool-\u003em(LogReader,Maybe PackageDescription)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:initializeFlagsWithCradle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing a cabal file and returns \u003ccode\u003e\u003ca\u003ePackageDescription\u003c/a\u003e\u003c/code\u003e.\n   \u003ccode\u003eIOException\u003c/code\u003e is thrown if parsing fails.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "parseCabalFile",
          "package": "ghc-mod",
          "signature": "FilePath -\u003e IO PackageDescription",
          "source": "src/Language-Haskell-GhcMod-CabalApi.html#parseCabalFile",
          "type": "function"
        },
        "index": {
          "description": "Parsing cabal file and returns PackageDescription IOException is thrown if parsing fails",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "parseCabalFile",
          "normalized": "FilePath-\u003eIO PackageDescription",
          "package": "ghc-mod",
          "partial": "Cabal File",
          "signature": "FilePath-\u003eIO PackageDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:parseCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun any one \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "runAnyOne",
          "package": "ghc-mod",
          "signature": "[Ghc a] -\u003e Ghc a",
          "source": "src/Language-Haskell-GhcMod-GHCChoice.html#runAnyOne",
          "type": "function"
        },
        "index": {
          "description": "Run any one Ghc monad",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "runAnyOne",
          "normalized": "[Ghc a]-\u003eGhc a",
          "package": "ghc-mod",
          "partial": "Any One",
          "signature": "[Ghc a]-\u003eGhc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:runAnyOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the files that GHC will load / compile.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "setTargetFiles",
          "package": "ghc-mod",
          "signature": "[FilePath] -\u003e m ()",
          "source": "src/Language-Haskell-GhcMod-GHCApi.html#setTargetFiles",
          "type": "function"
        },
        "index": {
          "description": "Set the files that GHC will load compile",
          "hierarchy": "Language Haskell GhcMod Internal",
          "module": "Language.Haskell.GhcMod.Internal",
          "name": "setTargetFiles",
          "normalized": "[FilePath]-\u003ea()",
          "package": "ghc-mod",
          "partial": "Target Files",
          "signature": "[FilePath]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod-Internal.html#v:setTargetFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ghc-mod library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "GhcMod",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod.html",
          "type": "module"
        },
        "index": {
          "description": "The ghc-mod library",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "GhcMod",
          "package": "ghc-mod",
          "partial": "Ghc Mod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe environment where this library is used.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "Cradle",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "data"
        },
        "index": {
          "description": "The environment where this library is used",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "Cradle",
          "package": "ghc-mod",
          "partial": "Cradle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:Cradle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "Expression",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#Expression",
          "type": "type"
        },
        "index": {
          "description": "Haskell expression",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "Expression",
          "package": "ghc-mod",
          "partial": "Expression",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for line separator. Historically, a Null string is used.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "LineSeparator",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#LineSeparator",
          "type": "newtype"
        },
        "index": {
          "description": "The type for line separator Historically Null string is used",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "LineSeparator",
          "package": "ghc-mod",
          "partial": "Line Separator",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:LineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule name.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "ModuleString",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#ModuleString",
          "type": "type"
        },
        "index": {
          "description": "Module name",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "ModuleString",
          "package": "ghc-mod",
          "partial": "Module String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:ModuleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "Options",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "Options",
          "package": "ghc-mod",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput style.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "OutputStyle",
          "package": "ghc-mod",
          "source": "src/Language-Haskell-GhcMod-Types.html#OutputStyle",
          "type": "data"
        },
        "index": {
          "description": "Output style",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "OutputStyle",
          "package": "ghc-mod",
          "partial": "Output Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#t:OutputStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "Cradle",
          "package": "ghc-mod",
          "signature": "Cradle",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "Cradle",
          "package": "ghc-mod",
          "partial": "Cradle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:Cradle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "LineSeparator",
          "package": "ghc-mod",
          "signature": "LineSeparator String",
          "source": "src/Language-Haskell-GhcMod-Types.html#LineSeparator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "LineSeparator",
          "package": "ghc-mod",
          "partial": "Line Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:LineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eS expression style.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "LispStyle",
          "package": "ghc-mod",
          "signature": "LispStyle",
          "source": "src/Language-Haskell-GhcMod-Types.html#OutputStyle",
          "type": "function"
        },
        "index": {
          "description": "expression style",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "LispStyle",
          "package": "ghc-mod",
          "partial": "Lisp Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:LispStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "Options",
          "package": "ghc-mod",
          "signature": "Options",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "Options",
          "package": "ghc-mod",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain textstyle.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "PlainStyle",
          "package": "ghc-mod",
          "signature": "PlainStyle",
          "source": "src/Language-Haskell-GhcMod-Types.html#OutputStyle",
          "type": "function"
        },
        "index": {
          "description": "Plain textstyle",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "PlainStyle",
          "package": "ghc-mod",
          "partial": "Plain Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:PlainStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting functions, classes, etc from a module.\n   If \u003ccode\u003e\u003ca\u003edetailed\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, their types are also obtained.\n   If \u003ccode\u003e\u003ca\u003eoperators\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, operators are also returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "browse",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e ModuleString-\u003e Ghc [String]",
          "type": "function"
        },
        "index": {
          "description": "Getting functions classes etc from module If detailed is True their types are also obtained If operators is True operators are also returned",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "browse",
          "normalized": "Options-\u003eCradle-\u003eModuleString-\u003eGhc[String]",
          "package": "ghc-mod",
          "signature": "Options-\u003eCradle-\u003eModuleString-\u003eGhc[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:browse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting functions, classes, etc from a module.\n   If \u003ccode\u003e\u003ca\u003edetailed\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, their types are also obtained.\n   If \u003ccode\u003e\u003ca\u003eoperators\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, operators are also returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "browseModule",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e ModuleString-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Getting functions classes etc from module If detailed is True their types are also obtained If operators is True operators are also returned",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "browseModule",
          "normalized": "Options-\u003eCradle-\u003eModuleString-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Module",
          "signature": "Options-\u003eCradle-\u003eModuleString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:browseModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking syntax of a target file using GHC.\n   Warnings and errors are returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "check",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e [FilePath]-\u003e Ghc [String]",
          "type": "function"
        },
        "index": {
          "description": "Checking syntax of target file using GHC Warnings and errors are returned",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "check",
          "normalized": "Options-\u003eCradle-\u003e[FilePath]-\u003eGhc[String]",
          "package": "ghc-mod",
          "signature": "Options-\u003eCradle-\u003e[FilePath]-\u003eGhc[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking syntax of a target file using GHC.\n   Warnings and errors are returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "checkSyntax",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e [FilePath]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Checking syntax of target file using GHC Warnings and errors are returned",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "checkSyntax",
          "normalized": "Options-\u003eCradle-\u003e[FilePath]-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Syntax",
          "signature": "Options-\u003eCradle-\u003e[FilePath]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:checkSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory where a cabal file is found.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCabalDir",
          "package": "ghc-mod",
          "signature": "Maybe FilePath",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "description": "The directory where cabal file is found",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCabalDir",
          "package": "ghc-mod",
          "partial": "Cabal Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:cradleCabalDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file name of the found cabal file.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCabalFile",
          "package": "ghc-mod",
          "signature": "Maybe FilePath",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "description": "The file name of the found cabal file",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCabalFile",
          "package": "ghc-mod",
          "partial": "Cabal File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:cradleCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory where this library is executed.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCurrentDir",
          "package": "ghc-mod",
          "signature": "FilePath",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "description": "The directory where this library is executed",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "cradleCurrentDir",
          "package": "ghc-mod",
          "partial": "Current Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:cradleCurrentDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe package db options. ([\"-no-user-package-db\",\"-package-db\",\"/foo/bar/i386-osx-ghc-7.6.3-packages.conf.d\"])\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "cradlePackageDbOpts",
          "package": "ghc-mod",
          "signature": "[GHCOption]",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "description": "The package db options no-user-package-db package-db foo bar i386-osx-ghc-7.6.3-packages.conf.d",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "cradlePackageDbOpts",
          "normalized": "[GHCOption]",
          "package": "ghc-mod",
          "partial": "Package Db Opts",
          "signature": "[GHCOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:cradlePackageDbOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "cradlePackages",
          "package": "ghc-mod",
          "signature": "[Package]",
          "source": "src/Language-Haskell-GhcMod-Types.html#Cradle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "cradlePackages",
          "normalized": "[Package]",
          "package": "ghc-mod",
          "partial": "Packages",
          "signature": "[Package]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:cradlePackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining debug information.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "debug",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e Ghc [String]",
          "type": "function"
        },
        "index": {
          "description": "Obtaining debug information",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "debug",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eGhc[String]",
          "package": "ghc-mod",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eGhc[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining debug information.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "debugInfo",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Obtaining debug information",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "debugInfo",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Info",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:debugInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "defaultOptions",
          "package": "ghc-mod",
          "signature": "Options",
          "source": "src/Language-Haskell-GhcMod-Types.html#defaultOptions",
          "type": "function"
        },
        "index": {
          "description": "default Options",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "defaultOptions",
          "package": "ghc-mod",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ebrowse\u003c/code\u003e also returns types.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "detailed",
          "package": "ghc-mod",
          "signature": "Bool",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "If True browse also returns types",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "detailed",
          "package": "ghc-mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:detailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not Template Haskell should be expanded.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "expandSplice",
          "package": "ghc-mod",
          "signature": "Bool",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Whether or not Template Haskell should be expanded",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "expandSplice",
          "package": "ghc-mod",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:expandSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding \u003ccode\u003e\u003ca\u003eCradle\u003c/a\u003e\u003c/code\u003e.\n   Find a cabal file by tracing ancestor directories.\n   Find a sandbox according to a cabal sandbox config\n   in a cabal directory.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "findCradle",
          "package": "ghc-mod",
          "signature": "IO Cradle",
          "source": "src/Language-Haskell-GhcMod-Cradle.html#findCradle",
          "type": "function"
        },
        "index": {
          "description": "Finding Cradle Find cabal file by tracing ancestor directories Find sandbox according to cabal sandbox config in cabal directory",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "findCradle",
          "package": "ghc-mod",
          "partial": "Cradle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:findCradle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "ghcOpts",
          "package": "ghc-mod",
          "signature": "[String]",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "ghcOpts",
          "normalized": "[String]",
          "package": "ghc-mod",
          "partial": "Opts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:ghcOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "hlintOpts",
          "package": "ghc-mod",
          "signature": "[String]",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "hlintOpts",
          "normalized": "[String]",
          "package": "ghc-mod",
          "partial": "Opts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:hlintOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining information of a target expression. (GHCi's info:)\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "info",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e ModuleString-\u003e Expression-\u003e Ghc String",
          "type": "function"
        },
        "index": {
          "description": "Obtaining information of target expression GHCi info",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "info",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eExpression-\u003eGhc String",
          "package": "ghc-mod",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eExpression-\u003eGhc String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining information of a target expression. (GHCi's info:)\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "infoExpr",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e ModuleString-\u003e Expression-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Obtaining information of target expression GHCi info",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "infoExpr",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eExpression-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Expr",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eExpression-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:infoExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine separator string.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "lineSeparator",
          "package": "ghc-mod",
          "signature": "LineSeparator",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Line separator string",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "lineSeparator",
          "package": "ghc-mod",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:lineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking syntax of a target file using hlint.\n   Warnings and errors are returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "lintSyntax",
          "package": "ghc-mod",
          "signature": "Options-\u003e FilePath-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Checking syntax of target file using hlint Warnings and errors are returned",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "lintSyntax",
          "normalized": "Options-\u003eFilePath-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Syntax",
          "signature": "Options-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:lintSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListing GHC flags. (e.g -fno-warn-orphans)\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "listFlags",
          "package": "ghc-mod",
          "signature": "Options -\u003e IO String",
          "source": "src/Language-Haskell-GhcMod-Flag.html#listFlags",
          "type": "function"
        },
        "index": {
          "description": "Listing GHC flags e.g fno-warn-orphans",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "listFlags",
          "normalized": "Options-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Flags",
          "signature": "Options-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:listFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListing language extensions.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "listLanguages",
          "package": "ghc-mod",
          "signature": "Options -\u003e IO String",
          "source": "src/Language-Haskell-GhcMod-Lang.html#listLanguages",
          "type": "function"
        },
        "index": {
          "description": "Listing language extensions",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "listLanguages",
          "normalized": "Options-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Languages",
          "signature": "Options-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:listLanguages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListing installed modules.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "listMods",
          "package": "ghc-mod",
          "signature": "Options -\u003e Cradle -\u003e Ghc [(String, String)]",
          "source": "src/Language-Haskell-GhcMod-List.html#listMods",
          "type": "function"
        },
        "index": {
          "description": "Listing installed modules",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "listMods",
          "normalized": "Options-\u003eCradle-\u003eGhc[(String,String)]",
          "package": "ghc-mod",
          "partial": "Mods",
          "signature": "Options-\u003eCradle-\u003eGhc[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:listMods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListing installed modules.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "listModules",
          "package": "ghc-mod",
          "signature": "Options -\u003e Cradle -\u003e IO String",
          "source": "src/Language-Haskell-GhcMod-List.html#listModules",
          "type": "function"
        },
        "index": {
          "description": "Listing installed modules",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "listModules",
          "normalized": "Options-\u003eCradle-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Modules",
          "signature": "Options-\u003eCradle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:listModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ebrowse\u003c/code\u003e also returns operators.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "operators",
          "package": "ghc-mod",
          "signature": "Bool",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "If True browse also returns operators",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "operators",
          "package": "ghc-mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:operators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.GhcMod",
          "name": "outputStyle",
          "package": "ghc-mod",
          "signature": "OutputStyle",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "outputStyle",
          "package": "ghc-mod",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:outputStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage id of module\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "packageId",
          "package": "ghc-mod",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Package id of module",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "packageId",
          "package": "ghc-mod",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:packageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ebrowse\u003c/code\u003e will return fully qualified name\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "qualified",
          "package": "ghc-mod",
          "signature": "Bool",
          "source": "src/Language-Haskell-GhcMod-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "If True browse will return fully qualified name",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "qualified",
          "package": "ghc-mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:qualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining type of a target expression. (GHCi's type:)\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "typeExpr",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e ModuleString-\u003e Int-\u003e Int-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Obtaining type of target expression GHCi type",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "typeExpr",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eInt-\u003eInt-\u003eIO String",
          "package": "ghc-mod",
          "partial": "Expr",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eInt-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:typeExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining type of a target expression. (GHCi's type:)\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "typeOf",
          "package": "ghc-mod",
          "signature": "Options-\u003e Cradle-\u003e FilePath-\u003e ModuleString-\u003e Int-\u003e Int-\u003e Ghc String",
          "type": "function"
        },
        "index": {
          "description": "Obtaining type of target expression GHCi type",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "typeOf",
          "normalized": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eInt-\u003eInt-\u003eGhc String",
          "package": "ghc-mod",
          "partial": "Of",
          "signature": "Options-\u003eCradle-\u003eFilePath-\u003eModuleString-\u003eInt-\u003eInt-\u003eGhc String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting the \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e monad to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "withGHC",
          "package": "ghc-mod",
          "signature": "FilePath-\u003e Ghc (m a)-\u003e IO (m a)",
          "type": "function"
        },
        "index": {
          "description": "Converting the Ghc monad to the IO monad",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "withGHC",
          "normalized": "FilePath-\u003eGhc(a b)-\u003eIO(a b)",
          "package": "ghc-mod",
          "partial": "GHC",
          "signature": "FilePath-\u003eGhc(m a)-\u003eIO(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:withGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting the \u003ccode\u003e\u003ca\u003eGhc\u003c/a\u003e\u003c/code\u003e monad to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Language.Haskell.GhcMod",
          "name": "withGHCDummyFile",
          "package": "ghc-mod",
          "signature": "Ghc (m a)-\u003e IO (m a)",
          "type": "function"
        },
        "index": {
          "description": "Converting the Ghc monad to the IO monad",
          "hierarchy": "Language Haskell GhcMod",
          "module": "Language.Haskell.GhcMod",
          "name": "withGHCDummyFile",
          "normalized": "Ghc(a b)-\u003eIO(a b)",
          "package": "ghc-mod",
          "partial": "GHCDummy File",
          "signature": "Ghc(m a)-\u003eIO(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-mod/docs/Language-Haskell-GhcMod.html#v:withGHCDummyFile"
      }
    }
  ]
]