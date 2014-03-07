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
        "word": "shaker"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Compile",
          "name": "Compile",
          "package": "shaker",
          "source": "src/Shaker-Action-Compile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker Action Compile",
          "module": "Shaker.Action.Compile",
          "name": "Compile",
          "package": "shaker",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Compile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfigure and load targets of compilation.\n It is possible to exploit the compilation result after this step.\n\u003c/p\u003e",
          "module": "[\"Shaker.Action.Compile\",\"Shaker.GhcInterface\"]",
          "name": "ghcCompile",
          "package": "shaker",
          "signature": "CompileInput -\u003e m SuccessFlag",
          "source": "src/Shaker-GhcInterface.html#ghcCompile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Compile.html#v:ghcCompile\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:ghcCompile\"]"
        },
        "index": {
          "description": "Configure and load targets of compilation It is possible to exploit the compilation result after this step",
          "hierarchy": "Shaker Action Compile",
          "module": "Shaker.Action.Compile",
          "name": "ghcCompile",
          "normalized": "CompileInput-\u003ea SuccessFlag",
          "package": "shaker",
          "partial": "Compile",
          "signature": "CompileInput-\u003em SuccessFlag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Compile.html#v:ghcCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun haskell compilation on given CompileInput list\n\u003c/p\u003e",
          "module": "Shaker.Action.Compile",
          "name": "runCompile",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Compile.html#runCompile",
          "type": "function"
        },
        "index": {
          "description": "Run haskell compilation on given CompileInput list",
          "hierarchy": "Shaker Action Compile",
          "module": "Shaker.Action.Compile",
          "name": "runCompile",
          "package": "shaker",
          "partial": "Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Compile.html#v:runCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun haskell compilation on all haskell files\n\u003c/p\u003e",
          "module": "Shaker.Action.Compile",
          "name": "runFullCompile",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Compile.html#runFullCompile",
          "type": "function"
        },
        "index": {
          "description": "Run haskell compilation on all haskell files",
          "hierarchy": "Shaker Action Compile",
          "module": "Shaker.Action.Compile",
          "name": "runFullCompile",
          "package": "shaker",
          "partial": "Full Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Compile.html#v:runFullCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard and simple actions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Action.Standard",
          "name": "Standard",
          "package": "shaker",
          "source": "src/Shaker-Action-Standard.html",
          "type": "module"
        },
        "index": {
          "description": "Standard and simple actions",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "Standard",
          "package": "shaker",
          "partial": "Standard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean action is responsible to delete fileListenInfoDirectory containing temporary .o and .hi files\n\u003c/p\u003e",
          "module": "Shaker.Action.Standard",
          "name": "runClean",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runClean",
          "type": "function"
        },
        "index": {
          "description": "Clean action is responsible to delete fileListenInfoDirectory containing temporary and hi files",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runClean",
          "package": "shaker",
          "partial": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Standard",
          "name": "runEmpty",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runEmpty",
          "package": "shaker",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an end action notification\n\u003c/p\u003e",
          "module": "Shaker.Action.Standard",
          "name": "runEndAction",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runEndAction",
          "type": "function"
        },
        "index": {
          "description": "Print an end action notification",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runEndAction",
          "package": "shaker",
          "partial": "End Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runEndAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint exit. The real exit management is made in conductor\n\u003c/p\u003e",
          "module": "Shaker.Action.Standard",
          "name": "runExit",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runExit",
          "type": "function"
        },
        "index": {
          "description": "Print exit The real exit management is made in conductor",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runExit",
          "package": "shaker",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the list of available actions\n\u003c/p\u003e",
          "module": "Shaker.Action.Standard",
          "name": "runHelp",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runHelp",
          "type": "function"
        },
        "index": {
          "description": "Print the list of available actions",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runHelp",
          "package": "shaker",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Standard",
          "name": "runInvalidAction",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runInvalidAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runInvalidAction",
          "package": "shaker",
          "partial": "Invalid Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runInvalidAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a begin action notification\n\u003c/p\u003e",
          "module": "Shaker.Action.Standard",
          "name": "runStartAction",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Standard.html#runStartAction",
          "type": "function"
        },
        "index": {
          "description": "Print begin action notification",
          "hierarchy": "Shaker Action Standard",
          "module": "Shaker.Action.Standard",
          "name": "runStartAction",
          "package": "shaker",
          "partial": "Start Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Standard.html#v:runStartAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "Test",
          "package": "shaker",
          "source": "src/Shaker-Action-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "Test",
          "package": "shaker",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "executeTest",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e Plugin",
          "source": "src/Shaker-Action-Test.html#executeTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "executeTest",
          "normalized": "[ModuleData]-\u003ePlugin",
          "package": "shaker",
          "partial": "Test",
          "signature": "[ModuleData]-\u003ePlugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:executeTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "getModulesWithFunctionFiltering",
          "package": "shaker",
          "signature": "Shaker IO [ModuleData]",
          "source": "src/Shaker-Action-Test.html#getModulesWithFunctionFiltering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "getModulesWithFunctionFiltering",
          "normalized": "Shaker IO[ModuleData]",
          "package": "shaker",
          "partial": "Modules With Function Filtering",
          "signature": "Shaker IO[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:getModulesWithFunctionFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "getModulesWithModuleFiltering",
          "package": "shaker",
          "signature": "Shaker IO [ModuleData]",
          "source": "src/Shaker-Action-Test.html#getModulesWithModuleFiltering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "getModulesWithModuleFiltering",
          "normalized": "Shaker IO[ModuleData]",
          "package": "shaker",
          "partial": "Modules With Module Filtering",
          "signature": "Shaker IO[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:getModulesWithModuleFiltering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "processModuleDataList",
          "package": "shaker",
          "signature": "[[ModuleData]] -\u003e Plugin",
          "source": "src/Shaker-Action-Test.html#processModuleDataList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "processModuleDataList",
          "normalized": "[[ModuleData]]-\u003ePlugin",
          "package": "shaker",
          "partial": "Module Data List",
          "signature": "[[ModuleData]]-\u003ePlugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:processModuleDataList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "runModuleTestFramework",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Test.html#runModuleTestFramework",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "runModuleTestFramework",
          "package": "shaker",
          "partial": "Module Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:runModuleTestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Action.Test",
          "name": "runTestFramework",
          "package": "shaker",
          "signature": "Plugin",
          "source": "src/Shaker-Action-Test.html#runTestFramework",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Action Test",
          "module": "Shaker.Action.Test",
          "name": "runTestFramework",
          "package": "shaker",
          "partial": "Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Action-Test.html#v:runTestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllow to use cabal configuration (generated via the configure action of cabal).\n Source fileListenInfoDirectories and compilation options will be reused by Shaker.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.CabalInfo",
          "name": "CabalInfo",
          "package": "shaker",
          "source": "src/Shaker-CabalInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Allow to use cabal configuration generated via the configure action of cabal Source fileListenInfoDirectories and compilation options will be reused by Shaker",
          "hierarchy": "Shaker CabalInfo",
          "module": "Shaker.CabalInfo",
          "name": "CabalInfo",
          "package": "shaker",
          "partial": "Cabal Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shaker.CabalInfo\",\"Shaker.CabalInterface\"]",
          "name": "applyPreprocessSources",
          "package": "shaker",
          "signature": "Shaker IO ()",
          "source": "src/Shaker-CabalInterface.html#applyPreprocessSources",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInfo.html#v:applyPreprocessSources\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#v:applyPreprocessSources\"]"
        },
        "index": {
          "hierarchy": "Shaker CabalInfo",
          "module": "Shaker.CabalInfo",
          "name": "applyPreprocessSources",
          "normalized": "Shaker IO()",
          "package": "shaker",
          "partial": "Preprocess Sources",
          "signature": "Shaker IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInfo.html#v:applyPreprocessSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the build information from cabal and output a shakerInput from it\n\u003c/p\u003e",
          "module": "Shaker.CabalInfo",
          "name": "defaultCabalInput",
          "package": "shaker",
          "signature": "IO ShakerInput",
          "source": "src/Shaker-CabalInfo.html#defaultCabalInput",
          "type": "function"
        },
        "index": {
          "description": "Read the build information from cabal and output shakerInput from it",
          "hierarchy": "Shaker CabalInfo",
          "module": "Shaker.CabalInfo",
          "name": "defaultCabalInput",
          "package": "shaker",
          "partial": "Cabal Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInfo.html#v:defaultCabalInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CabalInterface",
          "name": "CabalInterface",
          "package": "shaker",
          "source": "src/Shaker-CabalInterface.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker CabalInterface",
          "module": "Shaker.CabalInterface",
          "name": "CabalInterface",
          "package": "shaker",
          "partial": "Cabal Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CabalInterface",
          "name": "generateAutogenFiles",
          "package": "shaker",
          "signature": "LocalBuildInfo -\u003e IO ()",
          "source": "src/Shaker-CabalInterface.html#generateAutogenFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CabalInterface",
          "module": "Shaker.CabalInterface",
          "name": "generateAutogenFiles",
          "normalized": "LocalBuildInfo-\u003eIO()",
          "package": "shaker",
          "partial": "Autogen Files",
          "signature": "LocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#v:generateAutogenFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CabalInterface",
          "name": "getCompileFlagsForExecutable",
          "package": "shaker",
          "signature": "LocalBuildInfo -\u003e Executable -\u003e ComponentLocalBuildInfo -\u003e [String]",
          "source": "src/Shaker-CabalInterface.html#getCompileFlagsForExecutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CabalInterface",
          "module": "Shaker.CabalInterface",
          "name": "getCompileFlagsForExecutable",
          "normalized": "LocalBuildInfo-\u003eExecutable-\u003eComponentLocalBuildInfo-\u003e[String]",
          "package": "shaker",
          "partial": "Compile Flags For Executable",
          "signature": "LocalBuildInfo-\u003eExecutable-\u003eComponentLocalBuildInfo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#v:getCompileFlagsForExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CabalInterface",
          "name": "getCompileFlagsForLibrary",
          "package": "shaker",
          "signature": "LocalBuildInfo -\u003e Library -\u003e ComponentLocalBuildInfo -\u003e [String]",
          "source": "src/Shaker-CabalInterface.html#getCompileFlagsForLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CabalInterface",
          "module": "Shaker.CabalInterface",
          "name": "getCompileFlagsForLibrary",
          "normalized": "LocalBuildInfo-\u003eLibrary-\u003eComponentLocalBuildInfo-\u003e[String]",
          "package": "shaker",
          "partial": "Compile Flags For Library",
          "signature": "LocalBuildInfo-\u003eLibrary-\u003eComponentLocalBuildInfo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#v:getCompileFlagsForLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CabalInterface",
          "name": "getPreprocessorDirectory",
          "package": "shaker",
          "signature": "LocalBuildInfo -\u003e Executable -\u003e FilePath",
          "source": "src/Shaker-CabalInterface.html#getPreprocessorDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CabalInterface",
          "module": "Shaker.CabalInterface",
          "name": "getPreprocessorDirectory",
          "normalized": "LocalBuildInfo-\u003eExecutable-\u003eFilePath",
          "package": "shaker",
          "partial": "Preprocessor Directory",
          "signature": "LocalBuildInfo-\u003eExecutable-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CabalInterface.html#v:getPreprocessorDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommand line manager\n This manager will listen to the standard input as soon as the MVar token is filled.\n Then, it will fill another MVar (input) with the parsed command.\n Autocompletion is supported throught haskeline configuration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Cli",
          "name": "Cli",
          "package": "shaker",
          "source": "src/Shaker-Cli.html",
          "type": "module"
        },
        "index": {
          "description": "Command line manager This manager will listen to the standard input as soon as the MVar token is filled Then it will fill another MVar input with the parsed command Autocompletion is supported throught haskeline configuration",
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "Cli",
          "package": "shaker",
          "partial": "Cli",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Cli",
          "name": "InputState",
          "package": "shaker",
          "source": "src/Shaker-Type.html#InputState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "InputState",
          "package": "shaker",
          "partial": "Input State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#t:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shaker.Cli\",\"Shaker.Type\"]",
          "name": "InputState",
          "package": "shaker",
          "signature": "InputState",
          "source": "src/Shaker-Type.html#InputState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:InputState\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:InputState\"]"
        },
        "index": {
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "InputState",
          "package": "shaker",
          "partial": "Input State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen to keyboard input and parse command\n\u003c/p\u003e",
          "module": "Shaker.Cli",
          "name": "getInput",
          "package": "shaker",
          "signature": "Shaker IO (IO ())",
          "source": "src/Shaker-Cli.html#getInput",
          "type": "function"
        },
        "index": {
          "description": "Listen to keyboard input and parse command",
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "getInput",
          "normalized": "Shaker IO(IO())",
          "package": "shaker",
          "partial": "Input",
          "signature": "Shaker IO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Cli",
          "name": "listActions",
          "package": "shaker",
          "signature": "ShakerInput -\u003e String -\u003e m [Completion]",
          "source": "src/Shaker-Cli.html#listActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "listActions",
          "normalized": "ShakerInput-\u003eString-\u003ea[Completion]",
          "package": "shaker",
          "partial": "Actions",
          "signature": "ShakerInput-\u003eString-\u003em[Completion]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:listActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shaker.Cli\",\"Shaker.Type\"]",
          "name": "shakerInputStateCommand",
          "package": "shaker",
          "signature": "InputCommand",
          "source": "src/Shaker-Type.html#InputState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:shakerInputStateCommand\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerInputStateCommand\"]"
        },
        "index": {
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "shakerInputStateCommand",
          "package": "shaker",
          "partial": "Input State Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:shakerInputStateCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken is used to manage the token between action executor and command-line listener\n\u003c/p\u003e",
          "module": "[\"Shaker.Cli\",\"Shaker.Type\"]",
          "name": "shakerInputStateToken",
          "package": "shaker",
          "signature": "Token",
          "source": "src/Shaker-Type.html#InputState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:shakerInputStateToken\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerInputStateToken\"]"
        },
        "index": {
          "description": "Token is used to manage the token between action executor and command-line listener",
          "hierarchy": "Shaker Cli",
          "module": "Shaker.Cli",
          "name": "shakerInputStateToken",
          "package": "shaker",
          "partial": "Input State Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Cli.html#v:shakerInputStateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CommonUtil",
          "name": "CommonUtil",
          "package": "shaker",
          "source": "src/Shaker-CommonUtil.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker CommonUtil",
          "module": "Shaker.CommonUtil",
          "name": "CommonUtil",
          "package": "shaker",
          "partial": "Common Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CommonUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CommonUtil",
          "name": "separateEqual",
          "package": "shaker",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Shaker-CommonUtil.html#separateEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CommonUtil",
          "module": "Shaker.CommonUtil",
          "name": "separateEqual",
          "normalized": "[a]-\u003e[[a]]",
          "package": "shaker",
          "partial": "Equal",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CommonUtil.html#v:separateEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CommonUtil",
          "name": "separateEqual'",
          "package": "shaker",
          "signature": "[[a]] -\u003e a -\u003e [[a]]",
          "source": "src/Shaker-CommonUtil.html#separateEqual%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CommonUtil",
          "module": "Shaker.CommonUtil",
          "name": "separateEqual'",
          "normalized": "[[a]]-\u003ea-\u003e[[a]]",
          "package": "shaker",
          "partial": "Equal'",
          "signature": "[[a]]-\u003ea-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CommonUtil.html#v:separateEqual-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.CommonUtil",
          "name": "trimList",
          "package": "shaker",
          "signature": "[String] -\u003e [String]",
          "source": "src/Shaker-CommonUtil.html#trimList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker CommonUtil",
          "module": "Shaker.CommonUtil",
          "name": "trimList",
          "normalized": "[String]-\u003e[String]",
          "package": "shaker",
          "partial": "List",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-CommonUtil.html#v:trimList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConductor is responsible to control the command-line listener,\n the listener manager and the action to execute\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Conductor",
          "name": "Conductor",
          "package": "shaker",
          "source": "src/Shaker-Conductor.html",
          "type": "module"
        },
        "index": {
          "description": "Conductor is responsible to control the command-line listener the listener manager and the action to execute",
          "hierarchy": "Shaker Conductor",
          "module": "Shaker.Conductor",
          "name": "Conductor",
          "package": "shaker",
          "partial": "Conductor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Conductor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Given Command in a new thread\n\u003c/p\u003e",
          "module": "Shaker.Conductor",
          "name": "executeCommand",
          "package": "shaker",
          "signature": "Maybe Command -\u003e Shaker IO ()",
          "source": "src/Shaker-Conductor.html#executeCommand",
          "type": "function"
        },
        "index": {
          "description": "Execute Given Command in new thread",
          "hierarchy": "Shaker Conductor",
          "module": "Shaker.Conductor",
          "name": "executeCommand",
          "normalized": "Maybe Command-\u003eShaker IO()",
          "package": "shaker",
          "partial": "Command",
          "signature": "Maybe Command-\u003eShaker IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Conductor.html#v:executeCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the master thread\n Once quit is called, all threads are killed\n\u003c/p\u003e",
          "module": "Shaker.Conductor",
          "name": "initThread",
          "package": "shaker",
          "signature": "Shaker IO ()",
          "source": "src/Shaker-Conductor.html#initThread",
          "type": "function"
        },
        "index": {
          "description": "Initialize the master thread Once quit is called all threads are killed",
          "hierarchy": "Shaker Conductor",
          "module": "Shaker.Conductor",
          "name": "initThread",
          "normalized": "Shaker IO()",
          "package": "shaker",
          "partial": "Thread",
          "signature": "Shaker IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Conductor.html#v:initThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the default configuration of shaker\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Config",
          "name": "Config",
          "package": "shaker",
          "source": "src/Shaker-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the default configuration of shaker",
          "hierarchy": "Shaker Config",
          "module": "Shaker.Config",
          "name": "Config",
          "package": "shaker",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Config",
          "name": "defaultInput",
          "package": "shaker",
          "signature": "ShakerInput",
          "source": "src/Shaker-Config.html#defaultInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Config",
          "module": "Shaker.Config",
          "name": "defaultInput",
          "package": "shaker",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Config.html#v:defaultInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Config",
          "name": "defaultInputInitialized",
          "package": "shaker",
          "signature": "IO ShakerInput",
          "source": "src/Shaker-Config.html#defaultInputInitialized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Config",
          "module": "Shaker.Config",
          "name": "defaultInputInitialized",
          "package": "shaker",
          "partial": "Input Initialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Config.html#v:defaultInputInitialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Config",
          "name": "defaultInputState",
          "package": "shaker",
          "signature": "IO InputState",
          "source": "src/Shaker-Config.html#defaultInputState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Config",
          "module": "Shaker.Config",
          "name": "defaultInputState",
          "package": "shaker",
          "partial": "Input State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Config.html#v:defaultInputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Config",
          "name": "defaultThreadData",
          "package": "shaker",
          "signature": "IO ThreadData",
          "source": "src/Shaker-Config.html#defaultThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Config",
          "module": "Shaker.Config",
          "name": "defaultThreadData",
          "package": "shaker",
          "partial": "Thread Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Config.html#v:defaultThreadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "GhcInterface",
          "package": "shaker",
          "source": "src/Shaker-GhcInterface.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "GhcInterface",
          "package": "shaker",
          "partial": "Ghc Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "addLibraryToDynFlags",
          "package": "shaker",
          "signature": "[String] -\u003e DynFlags -\u003e DynFlags",
          "source": "src/Shaker-GhcInterface.html#addLibraryToDynFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "addLibraryToDynFlags",
          "normalized": "[String]-\u003eDynFlags-\u003eDynFlags",
          "package": "shaker",
          "partial": "Library To Dyn Flags",
          "signature": "[String]-\u003eDynFlags-\u003eDynFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:addLibraryToDynFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "fillModuleDataTest",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e Shaker IO [[ModuleData]]",
          "source": "src/Shaker-GhcInterface.html#fillModuleDataTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "fillModuleDataTest",
          "normalized": "[ModuleData]-\u003eShaker IO[[ModuleData]]",
          "package": "shaker",
          "partial": "Module Data Test",
          "signature": "[ModuleData]-\u003eShaker IO[[ModuleData]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:fillModuleDataTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of unresolved import and\n unexposed yet needed packages\n\u003c/p\u003e",
          "module": "Shaker.GhcInterface",
          "name": "getListNeededPackages",
          "package": "shaker",
          "signature": "Shaker IO [String]",
          "source": "src/Shaker-GhcInterface.html#getListNeededPackages",
          "type": "function"
        },
        "index": {
          "description": "Get the list of unresolved import and unexposed yet needed packages",
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "getListNeededPackages",
          "normalized": "Shaker IO[String]",
          "package": "shaker",
          "partial": "List Needed Packages",
          "signature": "Shaker IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:getListNeededPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "initializeGhc",
          "package": "shaker",
          "signature": "CompileInput -\u003e m ()",
          "source": "src/Shaker-GhcInterface.html#initializeGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "initializeGhc",
          "normalized": "CompileInput-\u003ea()",
          "package": "shaker",
          "partial": "Ghc",
          "signature": "CompileInput-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:initializeGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "installedPackageIdString",
          "package": "shaker",
          "signature": "InstalledPackageId -\u003e String",
          "source": "src/Shaker-GhcInterface.html#installedPackageIdString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "installedPackageIdString",
          "normalized": "InstalledPackageId-\u003eString",
          "package": "shaker",
          "partial": "Package Id String",
          "signature": "InstalledPackageId-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:installedPackageIdString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.GhcInterface",
          "name": "searchInstalledPackageId",
          "package": "shaker",
          "signature": "String -\u003e Shaker IO (Maybe String)",
          "source": "src/Shaker-GhcInterface.html#searchInstalledPackageId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker GhcInterface",
          "module": "Shaker.GhcInterface",
          "name": "searchInstalledPackageId",
          "normalized": "String-\u003eShaker IO(Maybe String)",
          "package": "shaker",
          "partial": "Installed Package Id",
          "signature": "String-\u003eShaker IO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-GhcInterface.html#v:searchInstalledPackageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "HsHelper",
          "package": "shaker",
          "source": "src/Shaker-HsHelper.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "HsHelper",
          "package": "shaker",
          "partial": "Hs Helper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "abstractCollectFunctionWithUnqualifiedType",
          "package": "shaker",
          "signature": "(HsQualType -\u003e Bool) -\u003e HsModule -\u003e [String]",
          "source": "src/Shaker-HsHelper.html#abstractCollectFunctionWithUnqualifiedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "abstractCollectFunctionWithUnqualifiedType",
          "normalized": "(HsQualType-\u003eBool)-\u003eHsModule-\u003e[String]",
          "package": "shaker",
          "partial": "Collect Function With Unqualified Type",
          "signature": "(HsQualType-\u003eBool)-\u003eHsModule-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:abstractCollectFunctionWithUnqualifiedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "filterSnd",
          "package": "shaker",
          "signature": "(b -\u003e Bool) -\u003e [(a, b)] -\u003e [(a, b)]",
          "source": "src/Shaker-HsHelper.html#filterSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "filterSnd",
          "normalized": "(a-\u003eBool)-\u003e[(b,a)]-\u003e[(b,a)]",
          "package": "shaker",
          "partial": "Snd",
          "signature": "(b-\u003eBool)-\u003e[(a,b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:filterSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getDecls",
          "package": "shaker",
          "signature": "HsModule -\u003e [HsDecl]",
          "source": "src/Shaker-HsHelper.html#getDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getDecls",
          "normalized": "HsModule-\u003e[HsDecl]",
          "package": "shaker",
          "partial": "Decls",
          "signature": "HsModule-\u003e[HsDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getFunBindName",
          "package": "shaker",
          "signature": "HsDecl -\u003e Maybe String",
          "source": "src/Shaker-HsHelper.html#getFunBindName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getFunBindName",
          "normalized": "HsDecl-\u003eMaybe String",
          "package": "shaker",
          "partial": "Fun Bind Name",
          "signature": "HsDecl-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getFunBindName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getIdentFromHsName",
          "package": "shaker",
          "signature": "HsName -\u003e String",
          "source": "src/Shaker-HsHelper.html#getIdentFromHsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getIdentFromHsName",
          "normalized": "HsName-\u003eString",
          "package": "shaker",
          "partial": "Ident From Hs Name",
          "signature": "HsName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getIdentFromHsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getListFunction",
          "package": "shaker",
          "signature": "HsModule -\u003e [String]",
          "source": "src/Shaker-HsHelper.html#getListFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getListFunction",
          "normalized": "HsModule-\u003e[String]",
          "package": "shaker",
          "partial": "List Function",
          "signature": "HsModule-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getListFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getSignature",
          "package": "shaker",
          "signature": "HsDecl -\u003e Maybe (String, HsQualType)",
          "source": "src/Shaker-HsHelper.html#getSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getSignature",
          "normalized": "HsDecl-\u003eMaybe(String,HsQualType)",
          "package": "shaker",
          "partial": "Signature",
          "signature": "HsDecl-\u003eMaybe(String,HsQualType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "getTupleFunctionNameType",
          "package": "shaker",
          "signature": "HsModule -\u003e [(String, HsQualType)]",
          "source": "src/Shaker-HsHelper.html#getTupleFunctionNameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "getTupleFunctionNameType",
          "normalized": "HsModule-\u003e[(String,HsQualType)]",
          "package": "shaker",
          "partial": "Tuple Function Name Type",
          "signature": "HsModule-\u003e[(String,HsQualType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:getTupleFunctionNameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "hsModuleCollectProperties",
          "package": "shaker",
          "signature": "HsModule -\u003e [String]",
          "source": "src/Shaker-HsHelper.html#hsModuleCollectProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "hsModuleCollectProperties",
          "normalized": "HsModule-\u003e[String]",
          "package": "shaker",
          "partial": "Module Collect Properties",
          "signature": "HsModule-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:hsModuleCollectProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "hsModuleFileName",
          "package": "shaker",
          "signature": "HsModule -\u003e String",
          "source": "src/Shaker-HsHelper.html#hsModuleFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "hsModuleFileName",
          "normalized": "HsModule-\u003eString",
          "package": "shaker",
          "partial": "Module File Name",
          "signature": "HsModule-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:hsModuleFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "hsModuleName",
          "package": "shaker",
          "signature": "HsModule -\u003e String",
          "source": "src/Shaker-HsHelper.html#hsModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "hsModuleName",
          "normalized": "HsModule-\u003eString",
          "package": "shaker",
          "partial": "Module Name",
          "signature": "HsModule-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:hsModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "mapSnd",
          "package": "shaker",
          "signature": "(t1 -\u003e t2) -\u003e [(t, t1)] -\u003e [(t, t2)]",
          "source": "src/Shaker-HsHelper.html#mapSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "mapSnd",
          "normalized": "(a-\u003ea)-\u003e[(a,a)]-\u003e[(a,a)]",
          "package": "shaker",
          "partial": "Snd",
          "signature": "(t-\u003et)-\u003e[(t,t)]-\u003e[(t,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:mapSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "parseFileToHsModule",
          "package": "shaker",
          "signature": "FilePath -\u003e IO (Maybe HsModule)",
          "source": "src/Shaker-HsHelper.html#parseFileToHsModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "parseFileToHsModule",
          "normalized": "FilePath-\u003eIO(Maybe HsModule)",
          "package": "shaker",
          "partial": "File To Hs Module",
          "signature": "FilePath-\u003eIO(Maybe HsModule)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:parseFileToHsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.HsHelper",
          "name": "parseHsFiles",
          "package": "shaker",
          "signature": "[FileListenInfo] -\u003e IO [HsModule]",
          "source": "src/Shaker-HsHelper.html#parseHsFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker HsHelper",
          "module": "Shaker.HsHelper",
          "name": "parseHsFiles",
          "normalized": "[FileListenInfo]-\u003eIO[HsModule]",
          "package": "shaker",
          "partial": "Hs Files",
          "signature": "[FileListenInfo]-\u003eIO[HsModule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-HsHelper.html#v:parseHsFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManage all file operations like listing files with fileListenInfoIncludes and exclude patterns\n and file filtering\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Io",
          "name": "Io",
          "package": "shaker",
          "source": "src/Shaker-Io.html",
          "type": "module"
        },
        "index": {
          "description": "Manage all file operations like listing files with fileListenInfoIncludes and exclude patterns and file filtering",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "Io",
          "package": "shaker",
          "partial": "Io",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault exclude pattern : Setup.hs\n\u003c/p\u003e",
          "module": "[\"Shaker.Io\",\"Shaker.Type\"]",
          "name": "defaultExclude",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#defaultExclude",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:defaultExclude\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:defaultExclude\"]"
        },
        "index": {
          "description": "Default exclude pattern Setup.hs",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "defaultExclude",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Exclude",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:defaultExclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault haskell file pattern : *.hs\n\u003c/p\u003e",
          "module": "[\"Shaker.Io\",\"Shaker.Type\"]",
          "name": "defaultHaskellPatterns",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#defaultHaskellPatterns",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:defaultHaskellPatterns\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:defaultHaskellPatterns\"]"
        },
        "index": {
          "description": "Default haskell file pattern hs",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "defaultHaskellPatterns",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Haskell Patterns",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:defaultHaskellPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the build file (without extension) for the given file\n\u003c/p\u003e",
          "module": "Shaker.Io",
          "name": "getCorrespondingBuildFile",
          "package": "shaker",
          "signature": "FilePath -\u003e Shaker IO FilePath",
          "source": "src/Shaker-Io.html#getCorrespondingBuildFile",
          "type": "function"
        },
        "index": {
          "description": "Get the build file without extension for the given file",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "getCorrespondingBuildFile",
          "normalized": "FilePath-\u003eShaker IO FilePath",
          "package": "shaker",
          "partial": "Corresponding Build File",
          "signature": "FilePath-\u003eShaker IO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:getCorrespondingBuildFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of FileInfo of the given fileListenInfoDirectory\n\u003c/p\u003e",
          "module": "Shaker.Io",
          "name": "getCurrentFpCl",
          "package": "shaker",
          "signature": "FileListenInfo -\u003e IO [FileInfo]",
          "source": "src/Shaker-Io.html#getCurrentFpCl",
          "type": "function"
        },
        "index": {
          "description": "Get the list of FileInfo of the given fileListenInfoDirectory",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "getCurrentFpCl",
          "normalized": "FileListenInfo-\u003eIO[FileInfo]",
          "package": "shaker",
          "partial": "Current Fp Cl",
          "signature": "FileListenInfo-\u003eIO[FileInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:getCurrentFpCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Io",
          "name": "handleActionInterrupt",
          "package": "shaker",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Shaker-Io.html#handleActionInterrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "handleActionInterrupt",
          "normalized": "IO()-\u003eIO()",
          "package": "shaker",
          "partial": "Action Interrupt",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:handleActionInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Io",
          "name": "handleIOException",
          "package": "shaker",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Shaker-Io.html#handleIOException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "handleIOException",
          "normalized": "IO()-\u003eIO()",
          "package": "shaker",
          "partial": "IOException",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:handleIOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList files in the given fileListenInfoDirectory \n Files matching one regexp in the fileListenInfoIgnore shakerArgument are excluded\n\u003c/p\u003e",
          "module": "Shaker.Io",
          "name": "listFiles",
          "package": "shaker",
          "signature": "FileListenInfo -\u003e IO [FilePath]",
          "source": "src/Shaker-Io.html#listFiles",
          "type": "function"
        },
        "index": {
          "description": "List files in the given fileListenInfoDirectory Files matching one regexp in the fileListenInfoIgnore shakerArgument are excluded",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "listFiles",
          "normalized": "FileListenInfo-\u003eIO[FilePath]",
          "package": "shaker",
          "partial": "Files",
          "signature": "FileListenInfo-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:listFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tuples of (newFiles,modifiedFiles) from given list of fileListenInfoDirectory\n\u003c/p\u003e",
          "module": "Shaker.Io",
          "name": "listModifiedAndCreatedFiles",
          "package": "shaker",
          "signature": "[FileListenInfo] -\u003e [FileInfo] -\u003e IO ([FileInfo], [FileInfo])",
          "source": "src/Shaker-Io.html#listModifiedAndCreatedFiles",
          "type": "function"
        },
        "index": {
          "description": "Get the tuples of newFiles modifiedFiles from given list of fileListenInfoDirectory",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "listModifiedAndCreatedFiles",
          "normalized": "[FileListenInfo]-\u003e[FileInfo]-\u003eIO([FileInfo],[FileInfo])",
          "package": "shaker",
          "partial": "Modified And Created Files",
          "signature": "[FileListenInfo]-\u003e[FileInfo]-\u003eIO([FileInfo],[FileInfo])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:listModifiedAndCreatedFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Io",
          "name": "mapImportToModules",
          "package": "shaker",
          "signature": "IO PackageData",
          "source": "src/Shaker-Io.html#mapImportToModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "mapImportToModules",
          "package": "shaker",
          "partial": "Import To Modules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:mapImportToModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively list all files\n All non matching files are excluded\n\u003c/p\u003e",
          "module": "Shaker.Io",
          "name": "recurseListFiles",
          "package": "shaker",
          "signature": "FileListenInfo -\u003e IO [FilePath]",
          "source": "src/Shaker-Io.html#recurseListFiles",
          "type": "function"
        },
        "index": {
          "description": "Recursively list all files All non matching files are excluded",
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "recurseListFiles",
          "normalized": "FileListenInfo-\u003eIO[FilePath]",
          "package": "shaker",
          "partial": "List Files",
          "signature": "FileListenInfo-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:recurseListFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Io",
          "name": "recurseMultipleListFiles",
          "package": "shaker",
          "signature": "[FileListenInfo] -\u003e IO [FilePath]",
          "source": "src/Shaker-Io.html#recurseMultipleListFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Io",
          "module": "Shaker.Io",
          "name": "recurseMultipleListFiles",
          "normalized": "[FileListenInfo]-\u003eIO[FilePath]",
          "package": "shaker",
          "partial": "Multiple List Files",
          "signature": "[FileListenInfo]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Io.html#v:recurseMultipleListFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManage file listener operation for continuous mode.\n All communication are made via MVars\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Listener",
          "name": "Listener",
          "package": "shaker",
          "source": "src/Shaker-Listener.html",
          "type": "module"
        },
        "index": {
          "description": "Manage file listener operation for continuous mode All communication are made via MVars",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "Listener",
          "package": "shaker",
          "partial": "Listener",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAgregate all information of listener\n\u003c/p\u003e",
          "module": "Shaker.Listener",
          "name": "ListenState",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "data"
        },
        "index": {
          "description": "Agregate all information of listener",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "ListenState",
          "package": "shaker",
          "partial": "Listen State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#t:ListenState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Shaker.Listener\",\"Shaker.Type\"]",
          "name": "ListenState",
          "package": "shaker",
          "signature": "ListenState",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:ListenState\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ListenState\"]"
        },
        "index": {
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "ListenState",
          "package": "shaker",
          "partial": "Listen State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:ListenState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles found in the last check\n\u003c/p\u003e",
          "module": "[\"Shaker.Listener\",\"Shaker.Type\"]",
          "name": "currentFiles",
          "package": "shaker",
          "signature": "CurrentFiles",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:currentFiles\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:currentFiles\"]"
        },
        "index": {
          "description": "Files found in the last check",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "currentFiles",
          "package": "shaker",
          "partial": "Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:currentFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Listener",
          "name": "initializeListener",
          "package": "shaker",
          "signature": "Shaker IO ListenState",
          "source": "src/Shaker-Listener.html#initializeListener",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "initializeListener",
          "package": "shaker",
          "partial": "Listener",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:initializeListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elisten to the job box and process the job\n\u003c/p\u003e",
          "module": "Shaker.Listener",
          "name": "listen",
          "package": "shaker",
          "signature": "CurrentFiles -\u003e MvModifiedFiles -\u003e Job -\u003e IO ()",
          "source": "src/Shaker-Listener.html#listen",
          "type": "function"
        },
        "index": {
          "description": "listen to the job box and process the job",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "listen",
          "normalized": "CurrentFiles-\u003eMvModifiedFiles-\u003eJob-\u003eIO()",
          "package": "shaker",
          "signature": "CurrentFiles-\u003eMvModifiedFiles-\u003eJob-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferences between last and before last check\n\u003c/p\u003e",
          "module": "[\"Shaker.Listener\",\"Shaker.Type\"]",
          "name": "mvModifiedFiles",
          "package": "shaker",
          "signature": "MvModifiedFiles",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:mvModifiedFiles\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:mvModifiedFiles\"]"
        },
        "index": {
          "description": "Differences between last and before last check",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "mvModifiedFiles",
          "package": "shaker",
          "partial": "Modified Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:mvModifiedFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emanage the job box. Fill it with a job every listenerInputDelay\n\u003c/p\u003e",
          "module": "Shaker.Listener",
          "name": "schedule",
          "package": "shaker",
          "signature": "ListenerInput -\u003e Job -\u003e IO ()",
          "source": "src/Shaker-Listener.html#schedule",
          "type": "function"
        },
        "index": {
          "description": "manage the job box Fill it with job every listenerInputDelay",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "schedule",
          "normalized": "ListenerInput-\u003eJob-\u003eIO()",
          "package": "shaker",
          "signature": "ListenerInput-\u003eJob-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all forks id initialized\n\u003c/p\u003e",
          "module": "[\"Shaker.Listener\",\"Shaker.Type\"]",
          "name": "threadIds",
          "package": "shaker",
          "signature": "[ThreadId]",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:threadIds\",\"http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:threadIds\"]"
        },
        "index": {
          "description": "List of all forks id initialized",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "threadIds",
          "normalized": "[ThreadId]",
          "package": "shaker",
          "partial": "Ids",
          "signature": "[ThreadId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:threadIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the files status\n\u003c/p\u003e",
          "module": "Shaker.Listener",
          "name": "updateFileStat",
          "package": "shaker",
          "signature": "CurrentFiles -\u003e MvModifiedFiles -\u003e [FileInfo] -\u003e [FileInfo] -\u003e IO ()",
          "source": "src/Shaker-Listener.html#updateFileStat",
          "type": "function"
        },
        "index": {
          "description": "Update the files status",
          "hierarchy": "Shaker Listener",
          "module": "Shaker.Listener",
          "name": "updateFileStat",
          "normalized": "CurrentFiles-\u003eMvModifiedFiles-\u003e[FileInfo]-\u003e[FileInfo]-\u003eIO()",
          "package": "shaker",
          "partial": "File Stat",
          "signature": "CurrentFiles-\u003eMvModifiedFiles-\u003e[FileInfo]-\u003e[FileInfo]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Listener.html#v:updateFileStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "ModuleData",
          "package": "shaker",
          "source": "src/Shaker-ModuleData.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "ModuleData",
          "package": "shaker",
          "partial": "Module Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "constructModuleData",
          "package": "shaker",
          "signature": "HsModule -\u003e ModuleData",
          "source": "src/Shaker-ModuleData.html#constructModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "constructModuleData",
          "normalized": "HsModule-\u003eModuleData",
          "package": "shaker",
          "partial": "Module Data",
          "signature": "HsModule-\u003eModuleData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:constructModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "convertModuleDataToFullCompileInput",
          "package": "shaker",
          "signature": "Shaker IO [CompileInput]",
          "source": "src/Shaker-ModuleData.html#convertModuleDataToFullCompileInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "convertModuleDataToFullCompileInput",
          "normalized": "Shaker IO[CompileInput]",
          "package": "shaker",
          "partial": "Module Data To Full Compile Input",
          "signature": "Shaker IO[CompileInput]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:convertModuleDataToFullCompileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "fillModuleData",
          "package": "shaker",
          "signature": "ShakerInput -\u003e IO ShakerInput",
          "source": "src/Shaker-ModuleData.html#fillModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "fillModuleData",
          "normalized": "ShakerInput-\u003eIO ShakerInput",
          "package": "shaker",
          "partial": "Module Data",
          "signature": "ShakerInput-\u003eIO ShakerInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:fillModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "filterFunctionsWithPatterns",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e [String] -\u003e [ModuleData]",
          "source": "src/Shaker-ModuleData.html#filterFunctionsWithPatterns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "filterFunctionsWithPatterns",
          "normalized": "[ModuleData]-\u003e[String]-\u003e[ModuleData]",
          "package": "shaker",
          "partial": "Functions With Patterns",
          "signature": "[ModuleData]-\u003e[String]-\u003e[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:filterFunctionsWithPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "filterFunctionsWithPatterns'",
          "package": "shaker",
          "signature": "ModuleData -\u003e [String] -\u003e ModuleData",
          "source": "src/Shaker-ModuleData.html#filterFunctionsWithPatterns%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "filterFunctionsWithPatterns'",
          "normalized": "ModuleData-\u003e[String]-\u003eModuleData",
          "package": "shaker",
          "partial": "Functions With Patterns'",
          "signature": "ModuleData-\u003e[String]-\u003eModuleData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:filterFunctionsWithPatterns-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude only module matching the given pattern\n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "filterModulesWithPattern",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e String -\u003e [ModuleData]",
          "source": "src/Shaker-ModuleData.html#filterModulesWithPattern",
          "type": "function"
        },
        "index": {
          "description": "Include only module matching the given pattern",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "filterModulesWithPattern",
          "normalized": "[ModuleData]-\u003eString-\u003e[ModuleData]",
          "package": "shaker",
          "partial": "Modules With Pattern",
          "signature": "[ModuleData]-\u003eString-\u003e[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:filterModulesWithPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the corresponding mdata file from the given source file\n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "getCorrespondingModuleDataFile",
          "package": "shaker",
          "signature": "FilePath -\u003e Shaker IO FilePath",
          "source": "src/Shaker-ModuleData.html#getCorrespondingModuleDataFile",
          "type": "function"
        },
        "index": {
          "description": "Get the corresponding mdata file from the given source file",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "getCorrespondingModuleDataFile",
          "normalized": "FilePath-\u003eShaker IO FilePath",
          "package": "shaker",
          "partial": "Corresponding Module Data File",
          "signature": "FilePath-\u003eShaker IO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:getCorrespondingModuleDataFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "getNonMainCompileInput",
          "package": "shaker",
          "signature": "Shaker IO CompileInput",
          "source": "src/Shaker-ModuleData.html#getNonMainCompileInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "getNonMainCompileInput",
          "package": "shaker",
          "partial": "Non Main Compile Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:getNonMainCompileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "groupByValidTargets",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e [[ModuleData]]",
          "source": "src/Shaker-ModuleData.html#groupByValidTargets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "groupByValidTargets",
          "normalized": "[ModuleData]-\u003e[[ModuleData]]",
          "package": "shaker",
          "partial": "By Valid Targets",
          "signature": "[ModuleData]-\u003e[[ModuleData]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:groupByValidTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "hsModuleDataHasTest",
          "package": "shaker",
          "signature": "ModuleData -\u003e Bool",
          "source": "src/Shaker-ModuleData.html#hsModuleDataHasTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "hsModuleDataHasTest",
          "normalized": "ModuleData-\u003eBool",
          "package": "shaker",
          "partial": "Module Data Has Test",
          "signature": "ModuleData-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:hsModuleDataHasTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse module data from all haskell sources. \n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "parseAllModuleData",
          "package": "shaker",
          "signature": "Shaker IO [ModuleData]",
          "source": "src/Shaker-ModuleData.html#parseAllModuleData",
          "type": "function"
        },
        "index": {
          "description": "Parse module data from all haskell sources",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "parseAllModuleData",
          "normalized": "Shaker IO[ModuleData]",
          "package": "shaker",
          "partial": "All Module Data",
          "signature": "Shaker IO[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:parseAllModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead Module data from the given haskell source. It tries to read serialized information beforehand.\n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "parseModuleData",
          "package": "shaker",
          "signature": "FilePath -\u003e Shaker IO (Maybe ModuleData)",
          "source": "src/Shaker-ModuleData.html#parseModuleData",
          "type": "function"
        },
        "index": {
          "description": "Read Module data from the given haskell source It tries to read serialized information beforehand",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "parseModuleData",
          "normalized": "FilePath-\u003eShaker IO(Maybe ModuleData)",
          "package": "shaker",
          "partial": "Module Data",
          "signature": "FilePath-\u003eShaker IO(Maybe ModuleData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:parseModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead Module data from the serialized data. It returns Nothing if the serialized data is absent or out-of-date.\n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "parseModuleDataIfExist",
          "package": "shaker",
          "signature": "FilePath -\u003e Shaker IO (Maybe ModuleData)",
          "source": "src/Shaker-ModuleData.html#parseModuleDataIfExist",
          "type": "function"
        },
        "index": {
          "description": "Read Module data from the serialized data It returns Nothing if the serialized data is absent or out-of-date",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "parseModuleDataIfExist",
          "normalized": "FilePath-\u003eShaker IO(Maybe ModuleData)",
          "package": "shaker",
          "partial": "Module Data If Exist",
          "signature": "FilePath-\u003eShaker IO(Maybe ModuleData)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:parseModuleDataIfExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.ModuleData",
          "name": "removeNonTestModules",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e [ModuleData]",
          "source": "src/Shaker-ModuleData.html#removeNonTestModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "removeNonTestModules",
          "normalized": "[ModuleData]-\u003e[ModuleData]",
          "package": "shaker",
          "partial": "Non Test Modules",
          "signature": "[ModuleData]-\u003e[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:removeNonTestModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite given moduleData in dist directory\n\u003c/p\u003e",
          "module": "Shaker.ModuleData",
          "name": "writeModuleData",
          "package": "shaker",
          "signature": "ModuleData -\u003e Shaker IO ()",
          "source": "src/Shaker-ModuleData.html#writeModuleData",
          "type": "function"
        },
        "index": {
          "description": "Write given moduleData in dist directory",
          "hierarchy": "Shaker ModuleData",
          "module": "Shaker.ModuleData",
          "name": "writeModuleData",
          "normalized": "ModuleData-\u003eShaker IO()",
          "package": "shaker",
          "partial": "Module Data",
          "signature": "ModuleData-\u003eShaker IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-ModuleData.html#v:writeModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule responsible to parse a String into a Command\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Parser",
          "name": "Parser",
          "package": "shaker",
          "source": "src/Shaker-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Module responsible to parse String into Command",
          "hierarchy": "Shaker Parser",
          "module": "Shaker.Parser",
          "name": "Parser",
          "package": "shaker",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string to a Command\n\u003c/p\u003e",
          "module": "Shaker.Parser",
          "name": "parseCommand",
          "package": "shaker",
          "signature": "String -\u003e ShakerInput -\u003e Either ParseError Command",
          "source": "src/Shaker-Parser.html#parseCommand",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string to Command",
          "hierarchy": "Shaker Parser",
          "module": "Shaker.Parser",
          "name": "parseCommand",
          "normalized": "String-\u003eShakerInput-\u003eEither ParseError Command",
          "package": "shaker",
          "partial": "Command",
          "signature": "String-\u003eShakerInput-\u003eEither ParseError Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Parser.html#v:parseCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegister available actions and how they will be called\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.PluginConfig",
          "name": "PluginConfig",
          "package": "shaker",
          "source": "src/Shaker-PluginConfig.html",
          "type": "module"
        },
        "index": {
          "description": "Register available actions and how they will be called",
          "hierarchy": "Shaker PluginConfig",
          "module": "Shaker.PluginConfig",
          "name": "PluginConfig",
          "package": "shaker",
          "partial": "Plugin Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-PluginConfig.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.PluginConfig",
          "name": "defaultCommandMap",
          "package": "shaker",
          "signature": "CommandMap",
          "source": "src/Shaker-PluginConfig.html#defaultCommandMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker PluginConfig",
          "module": "Shaker.PluginConfig",
          "name": "defaultCommandMap",
          "package": "shaker",
          "partial": "Command Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-PluginConfig.html#v:defaultCommandMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default plugin map contains mapping for compile, help and exit action \n\u003c/p\u003e",
          "module": "Shaker.PluginConfig",
          "name": "defaultPluginMap",
          "package": "shaker",
          "signature": "PluginMap",
          "source": "src/Shaker-PluginConfig.html#defaultPluginMap",
          "type": "function"
        },
        "index": {
          "description": "The default plugin map contains mapping for compile help and exit action",
          "hierarchy": "Shaker PluginConfig",
          "module": "Shaker.PluginConfig",
          "name": "defaultPluginMap",
          "package": "shaker",
          "partial": "Plugin Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-PluginConfig.html#v:defaultPluginMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "Reflexivite",
          "package": "shaker",
          "source": "src/Shaker-Reflexivite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "Reflexivite",
          "package": "shaker",
          "partial": "Reflexivite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "RunnableFunction",
          "package": "shaker",
          "source": "src/Shaker-Reflexivite.html#RunnableFunction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "RunnableFunction",
          "package": "shaker",
          "partial": "Runnable Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#t:RunnableFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "RunnableFunction",
          "package": "shaker",
          "signature": "RunnableFunction",
          "source": "src/Shaker-Reflexivite.html#RunnableFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "RunnableFunction",
          "package": "shaker",
          "partial": "Runnable Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#v:RunnableFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile, load and run the given function\n\u003c/p\u003e",
          "module": "Shaker.Reflexivite",
          "name": "runFunction",
          "package": "shaker",
          "signature": "CompileInput -\u003e RunnableFunction -\u003e Shaker IO ()",
          "source": "src/Shaker-Reflexivite.html#runFunction",
          "type": "function"
        },
        "index": {
          "description": "Compile load and run the given function",
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "runFunction",
          "normalized": "CompileInput-\u003eRunnableFunction-\u003eShaker IO()",
          "package": "shaker",
          "partial": "Function",
          "signature": "CompileInput-\u003eRunnableFunction-\u003eShaker IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#v:runFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "runnableFunctionFunction",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Reflexivite.html#RunnableFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "runnableFunctionFunction",
          "package": "shaker",
          "partial": "Function Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#v:runnableFunctionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "runnableFunctionModule",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Reflexivite.html#RunnableFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "runnableFunctionModule",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Function Module",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#v:runnableFunctionModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Reflexivite",
          "name": "runnableLibrairies",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Reflexivite.html#RunnableFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Reflexivite",
          "module": "Shaker.Reflexivite",
          "name": "runnableLibrairies",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Librairies",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Reflexivite.html#v:runnableLibrairies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllow to filter a list of string with fileListenInfoInclude and exclude patterns\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Regex",
          "name": "Regex",
          "package": "shaker",
          "source": "src/Shaker-Regex.html",
          "type": "module"
        },
        "index": {
          "description": "Allow to filter list of string with fileListenInfoInclude and exclude patterns",
          "hierarchy": "Shaker Regex",
          "module": "Shaker.Regex",
          "name": "Regex",
          "package": "shaker",
          "partial": "Regex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Regex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter all elements matching fileListenInfoInclude patterns and \n remove all elements matching exclude patterns to the result.\n\u003c/p\u003e\u003cp\u003eIf no fileListenInfoInclude pattern is given, all elements are accepted minus those matching exclude patterns.\n\u003c/p\u003e\u003cp\u003eIf no exclude pattern is given, all elements matching fileListenInfoInclude patterns are taken.\n\u003c/p\u003e",
          "module": "Shaker.Regex",
          "name": "processListWithRegexp",
          "package": "shaker",
          "signature": "[String]-\u003e [String]-\u003e [String]-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Filter all elements matching fileListenInfoInclude patterns and remove all elements matching exclude patterns to the result If no fileListenInfoInclude pattern is given all elements are accepted minus those matching exclude patterns If no exclude pattern is given all elements matching fileListenInfoInclude patterns are taken",
          "hierarchy": "Shaker Regex",
          "module": "Shaker.Regex",
          "name": "processListWithRegexp",
          "normalized": "[String]-\u003e[String]-\u003e[String]-\u003e[String]",
          "package": "shaker",
          "partial": "List With Regexp",
          "signature": "[String]-\u003e[String]-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Regex.html#v:processListWithRegexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllow to dynamically construct a list of \n quickcheck properties and Hunit test with template haskell\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.TestTH",
          "name": "TestTH",
          "package": "shaker",
          "source": "src/Shaker-TestTH.html",
          "type": "module"
        },
        "index": {
          "description": "Allow to dynamically construct list of quickcheck properties and Hunit test with template haskell",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "TestTH",
          "package": "shaker",
          "partial": "Test TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.TestTH",
          "name": "convertHunitTestCaseToTuples",
          "package": "shaker",
          "signature": "[String] -\u003e Exp",
          "source": "src/Shaker-TestTH.html#convertHunitTestCaseToTuples",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "convertHunitTestCaseToTuples",
          "normalized": "[String]-\u003eExp",
          "package": "shaker",
          "partial": "Hunit Test Case To Tuples",
          "signature": "[String]-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:convertHunitTestCaseToTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an expression for a single hunit test\n\u003c/p\u003e",
          "module": "Shaker.TestTH",
          "name": "getSingleFrameworkHunit",
          "package": "shaker",
          "signature": "String -\u003e Exp",
          "source": "src/Shaker-TestTH.html#getSingleFrameworkHunit",
          "type": "function"
        },
        "index": {
          "description": "Generate an expression for single hunit test",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "getSingleFrameworkHunit",
          "normalized": "String-\u003eExp",
          "package": "shaker",
          "partial": "Single Framework Hunit",
          "signature": "String-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:getSingleFrameworkHunit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an expression for a single quickcheck property\n\u003c/p\u003e",
          "module": "Shaker.TestTH",
          "name": "getSingleFrameworkQuickCheck",
          "package": "shaker",
          "signature": "String -\u003e Exp",
          "source": "src/Shaker-TestTH.html#getSingleFrameworkQuickCheck",
          "type": "function"
        },
        "index": {
          "description": "Generate an expression for single quickcheck property",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "getSingleFrameworkQuickCheck",
          "normalized": "String-\u003eExp",
          "package": "shaker",
          "partial": "Single Framework Quick Check",
          "signature": "String-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:getSingleFrameworkQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a test group for a given module\n\u003c/p\u003e",
          "module": "Shaker.TestTH",
          "name": "getSingleTestFrameworkGroup",
          "package": "shaker",
          "signature": "ModuleData -\u003e Exp",
          "source": "src/Shaker-TestTH.html#getSingleTestFrameworkGroup",
          "type": "function"
        },
        "index": {
          "description": "Generate test group for given module",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "getSingleTestFrameworkGroup",
          "normalized": "ModuleData-\u003eExp",
          "package": "shaker",
          "partial": "Single Test Framework Group",
          "signature": "ModuleData-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:getSingleTestFrameworkGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all test group of the project.\n see \u003ca\u003eShaker.TestTH\u003c/a\u003e \n\u003c/p\u003e",
          "module": "Shaker.TestTH",
          "name": "listAllTestFrameworkGroupList",
          "package": "shaker",
          "signature": "ShakerInput -\u003e ExpQ",
          "source": "src/Shaker-TestTH.html#listAllTestFrameworkGroupList",
          "type": "function"
        },
        "index": {
          "description": "List all test group of the project see Shaker.TestTH",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "listAllTestFrameworkGroupList",
          "normalized": "ShakerInput-\u003eExpQ",
          "package": "shaker",
          "partial": "All Test Framework Group List",
          "signature": "ShakerInput-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:listAllTestFrameworkGroupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all test group for test-framework from the list of modules\n\u003c/p\u003e",
          "module": "Shaker.TestTH",
          "name": "listTestFrameworkGroupList",
          "package": "shaker",
          "signature": "[ModuleData] -\u003e ExpQ",
          "source": "src/Shaker-TestTH.html#listTestFrameworkGroupList",
          "type": "function"
        },
        "index": {
          "description": "List all test group for test-framework from the list of modules",
          "hierarchy": "Shaker TestTH",
          "module": "Shaker.TestTH",
          "name": "listTestFrameworkGroupList",
          "normalized": "[ModuleData]-\u003eExpQ",
          "package": "shaker",
          "partial": "Test Framework Group List",
          "signature": "[ModuleData]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-TestTH.html#v:listTestFrameworkGroupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAggregate all types and data used through shaker\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shaker.Type",
          "name": "Type",
          "package": "shaker",
          "source": "src/Shaker-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Aggregate all types and data used through shaker",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Type",
          "package": "shaker",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction represents the differents action with arguments\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Action",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Action",
          "type": "data"
        },
        "index": {
          "description": "Action represents the differents action with arguments",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Action",
          "package": "shaker",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand agregate a duration with an action\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Command",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Command agregate duration with an action",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Command",
          "package": "shaker",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the mapping between the command-line input and the action\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "CommandMap",
          "package": "shaker",
          "source": "src/Shaker-Type.html#CommandMap",
          "type": "type"
        },
        "index": {
          "description": "Represents the mapping between the command-line input and the action",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "CommandMap",
          "package": "shaker",
          "partial": "Command Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:CommandMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration flags to pass to the ghc compiler\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "CompileInput",
          "package": "shaker",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "data"
        },
        "index": {
          "description": "Configuration flags to pass to the ghc compiler",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "CompileInput",
          "package": "shaker",
          "partial": "Compile Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:CompileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironnement for the project compilation\n This environnement can change depending on the compile \n action called\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "CompileM",
          "package": "shaker",
          "source": "src/Shaker-Type.html#CompileM",
          "type": "type"
        },
        "index": {
          "description": "Environnement for the project compilation This environnement can change depending on the compile action called",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "CompileM",
          "package": "shaker",
          "partial": "Compile",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:CompileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ConductorData",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ConductorData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ConductorData",
          "package": "shaker",
          "partial": "Conductor Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ConductorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMVar used to store currentFiles listed\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "CurrentFiles",
          "package": "shaker",
          "source": "src/Shaker-Type.html#CurrentFiles",
          "type": "type"
        },
        "index": {
          "description": "MVar used to store currentFiles listed",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "CurrentFiles",
          "package": "shaker",
          "partial": "Current Files",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:CurrentFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration define the life span of an action\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Duration",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Duration",
          "type": "data"
        },
        "index": {
          "description": "Duration define the life span of an action",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Duration",
          "package": "shaker",
          "partial": "Duration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAgregate a FilePath with its modification time\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "FileInfo",
          "package": "shaker",
          "source": "src/Shaker-Type.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "Agregate FilePath with its modification time",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "FileInfo",
          "package": "shaker",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents fileListenInfoDirectory to listen \n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "FileListenInfo",
          "package": "shaker",
          "source": "src/Shaker-Type.html#FileListenInfo",
          "type": "data"
        },
        "index": {
          "description": "Represents fileListenInfoDirectory to listen",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "FileListenInfo",
          "package": "shaker",
          "partial": "File Listen Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:FileListenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input mvar is used to push the parsed command\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "InputCommand",
          "package": "shaker",
          "source": "src/Shaker-Type.html#InputCommand",
          "type": "type"
        },
        "index": {
          "description": "The input mvar is used to push the parsed command",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "InputCommand",
          "package": "shaker",
          "partial": "Input Command",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:InputCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "InputState",
          "package": "shaker",
          "source": "src/Shaker-Type.html#InputState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "InputState",
          "package": "shaker",
          "partial": "Input State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMVar used to pass action to the fileListenInfoDirectory scanner\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Job",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Job",
          "type": "type"
        },
        "index": {
          "description": "MVar used to pass action to the fileListenInfoDirectory scanner",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Job",
          "package": "shaker",
          "partial": "Job",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAgregate all information of listener\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "ListenState",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ListenState",
          "type": "data"
        },
        "index": {
          "description": "Agregate all information of listener",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ListenState",
          "package": "shaker",
          "partial": "Listen State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ListenState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the continuous listener\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "ListenerInput",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ListenerInput",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the continuous listener",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ListenerInput",
          "package": "shaker",
          "partial": "Listener Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ListenerInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "MapImportToModules",
          "package": "shaker",
          "source": "src/Shaker-Type.html#MapImportToModules",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "MapImportToModules",
          "package": "shaker",
          "partial": "Map Import To Modules",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:MapImportToModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ModuleData",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ModuleData",
          "package": "shaker",
          "partial": "Module Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMVar used to store modifiedFiles since the last check\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "MvModifiedFiles",
          "package": "shaker",
          "source": "src/Shaker-Type.html#MvModifiedFiles",
          "type": "type"
        },
        "index": {
          "description": "MVar used to store modifiedFiles since the last check",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "MvModifiedFiles",
          "package": "shaker",
          "partial": "Mv Modified Files",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:MvModifiedFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "PackageData",
          "package": "shaker",
          "source": "src/Shaker-Type.html#PackageData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "PackageData",
          "package": "shaker",
          "partial": "Package Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:PackageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an action of shaker\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Plugin",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Plugin",
          "type": "type"
        },
        "index": {
          "description": "Represents an action of shaker",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Plugin",
          "package": "shaker",
          "partial": "Plugin",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the mapping beetween an action and the function to execute\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "PluginMap",
          "package": "shaker",
          "source": "src/Shaker-Type.html#PluginMap",
          "type": "type"
        },
        "index": {
          "description": "Represents the mapping beetween an action and the function to execute",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "PluginMap",
          "package": "shaker",
          "partial": "Plugin Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:PluginMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironnement containing the project configuration.\n It is generated at startup and won't change\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Shaker",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Shaker",
          "type": "type"
        },
        "index": {
          "description": "Environnement containing the project configuration It is generated at startup and won change",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Shaker",
          "package": "shaker",
          "partial": "Shaker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Shaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShakerAction represents the differents actions realisable by shaker\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "ShakerAction",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "data"
        },
        "index": {
          "description": "ShakerAction represents the differents actions realisable by shaker",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ShakerAction",
          "package": "shaker",
          "partial": "Shaker Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ShakerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the global configuration of the system\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "ShakerInput",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "data"
        },
        "index": {
          "description": "Represents the global configuration of the system",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ShakerInput",
          "package": "shaker",
          "partial": "Shaker Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ShakerInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ShakerR",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ShakerR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ShakerR",
          "package": "shaker",
          "partial": "Shaker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ShakerR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ThreadData",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ThreadData",
          "package": "shaker",
          "partial": "Thread Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ThreadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ThreadIdList",
          "package": "shaker",
          "source": "src/Shaker-Type.html#ThreadIdList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ThreadIdList",
          "package": "shaker",
          "partial": "Thread Id List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:ThreadIdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Token",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Token",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Token",
          "package": "shaker",
          "partial": "Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Verbosity",
          "package": "shaker",
          "source": "src/Shaker-Type.html#Verbosity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Verbosity",
          "package": "shaker",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Action",
          "package": "shaker",
          "signature": "Action ShakerAction",
          "source": "src/Shaker-Type.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Action",
          "package": "shaker",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ActionWithArg",
          "package": "shaker",
          "signature": "ActionWithArg ShakerAction [String]",
          "source": "src/Shaker-Type.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ActionWithArg",
          "normalized": "ActionWithArg ShakerAction[String]",
          "package": "shaker",
          "partial": "Action With Arg",
          "signature": "ActionWithArg ShakerAction[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ActionWithArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete generated\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Clean",
          "package": "shaker",
          "signature": "Clean",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Delete generated",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Clean",
          "package": "shaker",
          "partial": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Clean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Command",
          "package": "shaker",
          "signature": "Command Duration [Action]",
          "source": "src/Shaker-Type.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Command",
          "normalized": "Command Duration[Action]",
          "package": "shaker",
          "partial": "Command",
          "signature": "Command Duration[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile sources with ghc\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Compile",
          "package": "shaker",
          "signature": "Compile",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Compile sources with ghc",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Compile",
          "package": "shaker",
          "partial": "Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "CompileInput",
          "package": "shaker",
          "signature": "CompileInput",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "CompileInput",
          "package": "shaker",
          "partial": "Compile Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:CompileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ConductorData",
          "package": "shaker",
          "signature": "ConductorData ListenState ([FileInfo] -\u003e IO ())",
          "source": "src/Shaker-Type.html#ConductorData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ConductorData",
          "normalized": "ConductorData ListenState([FileInfo]-\u003eIO())",
          "package": "shaker",
          "partial": "Conductor Data",
          "signature": "ConductorData ListenState([FileInfo]-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ConductorData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the action when a source file modification is done until it is stopped\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Continuous",
          "package": "shaker",
          "signature": "Continuous",
          "source": "src/Shaker-Type.html#Duration",
          "type": "function"
        },
        "index": {
          "description": "Execute the action when source file modification is done until it is stopped",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Continuous",
          "package": "shaker",
          "partial": "Continuous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Continuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Debug",
          "package": "shaker",
          "signature": "Debug",
          "source": "src/Shaker-Type.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Debug",
          "package": "shaker",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing to execute\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Empty",
          "package": "shaker",
          "signature": "Empty",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Nothing to execute",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Empty",
          "package": "shaker",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a command\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Execute",
          "package": "shaker",
          "signature": "Execute",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Execute command",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Execute",
          "package": "shaker",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "FileInfo",
          "package": "shaker",
          "signature": "FileInfo",
          "source": "src/Shaker-Type.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "FileInfo",
          "package": "shaker",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "FileListenInfo",
          "package": "shaker",
          "signature": "FileListenInfo",
          "source": "src/Shaker-Type.html#FileListenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "FileListenInfo",
          "package": "shaker",
          "partial": "File Listen Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:FileListenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile all hs sources with ghc\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "FullCompile",
          "package": "shaker",
          "signature": "FullCompile",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Compile all hs sources with ghc",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "FullCompile",
          "package": "shaker",
          "partial": "Full Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:FullCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "GhcModuleData",
          "package": "shaker",
          "signature": "GhcModuleData",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "GhcModuleData",
          "package": "shaker",
          "partial": "Ghc Module Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:GhcModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay the help\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Help",
          "package": "shaker",
          "signature": "Help",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Display the help",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Help",
          "package": "shaker",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute both quickcheck and hunit using test framework on recompiled modules\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "IntelligentModuleTestFramework",
          "package": "shaker",
          "signature": "IntelligentModuleTestFramework",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Execute both quickcheck and hunit using test framework on recompiled modules",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "IntelligentModuleTestFramework",
          "package": "shaker",
          "partial": "Intelligent Module Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:IntelligentModuleTestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute both quickcheck and hunit using test framework on recompiled modules\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "IntelligentTestFramework",
          "package": "shaker",
          "signature": "IntelligentTestFramework",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Execute both quickcheck and hunit using test framework on recompiled modules",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "IntelligentTestFramework",
          "package": "shaker",
          "partial": "Intelligent Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:IntelligentTestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay an error when invalid action is inputed\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "InvalidAction",
          "package": "shaker",
          "signature": "InvalidAction",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Display an error when invalid action is inputed",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "InvalidAction",
          "package": "shaker",
          "partial": "Invalid Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:InvalidAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ListenerInput",
          "package": "shaker",
          "signature": "ListenerInput",
          "source": "src/Shaker-Type.html#ListenerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ListenerInput",
          "package": "shaker",
          "partial": "Listener Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ListenerInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ModuleData",
          "package": "shaker",
          "signature": "ModuleData",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ModuleData",
          "package": "shaker",
          "partial": "Module Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute both quickcheck and hunit using test framework with module filtering\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "ModuleTestFramework",
          "package": "shaker",
          "signature": "ModuleTestFramework",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Execute both quickcheck and hunit using test framework with module filtering",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ModuleTestFramework",
          "package": "shaker",
          "partial": "Module Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ModuleTestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the action and give back control\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "OneShot",
          "package": "shaker",
          "signature": "OneShot",
          "source": "src/Shaker-Type.html#Duration",
          "type": "function"
        },
        "index": {
          "description": "Execute the action and give back control",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "OneShot",
          "package": "shaker",
          "partial": "One Shot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:OneShot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "PackageData",
          "package": "shaker",
          "signature": "PackageData",
          "source": "src/Shaker-Type.html#PackageData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "PackageData",
          "package": "shaker",
          "partial": "Package Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:PackageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExit shaker\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "Quit",
          "package": "shaker",
          "signature": "Quit",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Exit shaker",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Quit",
          "package": "shaker",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ShakerInput",
          "package": "shaker",
          "signature": "ShakerInput",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ShakerInput",
          "package": "shaker",
          "partial": "Shaker Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ShakerInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "Silent",
          "package": "shaker",
          "signature": "Silent",
          "source": "src/Shaker-Type.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "Silent",
          "package": "shaker",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute both quickcheck and hunit using test framework\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "TestFramework",
          "package": "shaker",
          "signature": "TestFramework",
          "source": "src/Shaker-Type.html#ShakerAction",
          "type": "function"
        },
        "index": {
          "description": "Execute both quickcheck and hunit using test framework",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "TestFramework",
          "package": "shaker",
          "partial": "Test Framework",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:TestFramework"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ThreadData",
          "package": "shaker",
          "signature": "ThreadData",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ThreadData",
          "package": "shaker",
          "partial": "Thread Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ThreadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination of .o and .hi files\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "compileInputBuildDirectory",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "description": "Destination of and hi files",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "compileInputBuildDirectory",
          "package": "shaker",
          "partial": "Input Build Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:compileInputBuildDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe command line to pass options to pass to the ghc compiler\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "compileInputCommandLineFlags",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "description": "The command line to pass options to pass to the ghc compiler",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "compileInputCommandLineFlags",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Input Command Line Flags",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:compileInputCommandLineFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transform fonction wich will takes the DynFlags of the current ghc session and change some values\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "compileInputDynFlags",
          "package": "shaker",
          "signature": "DynFlags -\u003e DynFlags",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "description": "transform fonction wich will takes the DynFlags of the current ghc session and change some values",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "compileInputDynFlags",
          "normalized": "DynFlags-\u003eDynFlags",
          "package": "shaker",
          "partial": "Input Dyn Flags",
          "signature": "DynFlags-\u003eDynFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:compileInputDynFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource fileListenInfoDirectory of haskell files\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "compileInputSourceDirs",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "description": "Source fileListenInfoDirectory of haskell files",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "compileInputSourceDirs",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Input Source Dirs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:compileInputSourceDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of files or list of modules to compile\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "compileInputTargetFiles",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#CompileInput",
          "type": "function"
        },
        "index": {
          "description": "List of files or list of modules to compile",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "compileInputTargetFiles",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Input Target Files",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:compileInputTargetFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault dynamics flags\n the sources are expected to be in src as described in \u003ca\u003ehttp://www.haskell.org/haskellwiki/structure_of_a_haskell_project\u003c/a\u003e\n the result of compilation (.o and .hi) are placed in the dist/shakerTarget\n there is no main linkage by default to allow faster compilation feedback\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "defaultCompileFlags",
          "package": "shaker",
          "signature": "DynFlags -\u003e DynFlags",
          "source": "src/Shaker-Type.html#defaultCompileFlags",
          "type": "function"
        },
        "index": {
          "description": "default dynamics flags the sources are expected to be in src as described in http www.haskell.org haskellwiki structure of haskell project the result of compilation and hi are placed in the dist shakerTarget there is no main linkage by default to allow faster compilation feedback",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "defaultCompileFlags",
          "normalized": "DynFlags-\u003eDynFlags",
          "package": "shaker",
          "partial": "Compile Flags",
          "signature": "DynFlags-\u003eDynFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:defaultCompileFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "defaultDistDir",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#defaultDistDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "defaultDistDir",
          "package": "shaker",
          "partial": "Dist Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:defaultDistDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "emptyCommand",
          "package": "shaker",
          "signature": "Command",
          "source": "src/Shaker-Type.html#emptyCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "emptyCommand",
          "package": "shaker",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:emptyCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "exitCommand",
          "package": "shaker",
          "signature": "Command",
          "source": "src/Shaker-Type.html#exitCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "exitCommand",
          "package": "shaker",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:exitCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "fileInfoClockTime",
          "package": "shaker",
          "signature": "ClockTime",
          "source": "src/Shaker-Type.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "fileInfoClockTime",
          "package": "shaker",
          "partial": "Info Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:fileInfoClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "fileInfoFilePath",
          "package": "shaker",
          "signature": "FilePath",
          "source": "src/Shaker-Type.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "fileInfoFilePath",
          "package": "shaker",
          "partial": "Info File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:fileInfoFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of the listened fileListenInfoDirectory\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "fileListenInfoDir",
          "package": "shaker",
          "signature": "FilePath",
          "source": "src/Shaker-Type.html#FileListenInfo",
          "type": "function"
        },
        "index": {
          "description": "location of the listened fileListenInfoDirectory",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "fileListenInfoDir",
          "package": "shaker",
          "partial": "Listen Info Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:fileListenInfoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efileListenInfoIgnore patterns\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "fileListenInfoIgnore",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#FileListenInfo",
          "type": "function"
        },
        "index": {
          "description": "fileListenInfoIgnore patterns",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "fileListenInfoIgnore",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Listen Info Ignore",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:fileListenInfoIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efileListenInfoInclude patterns\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "fileListenInfoInclude",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#FileListenInfo",
          "type": "function"
        },
        "index": {
          "description": "fileListenInfoInclude patterns",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "fileListenInfoInclude",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Listen Info Include",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:fileListenInfoInclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "getListenThreadList",
          "package": "shaker",
          "signature": "ShakerInput -\u003e ThreadIdList",
          "source": "src/Shaker-Type.html#getListenThreadList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "getListenThreadList",
          "normalized": "ShakerInput-\u003eThreadIdList",
          "package": "shaker",
          "partial": "Listen Thread List",
          "signature": "ShakerInput-\u003eThreadIdList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:getListenThreadList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "getModuleDataName",
          "package": "shaker",
          "signature": "ModuleData -\u003e String",
          "source": "src/Shaker-Type.html#getModuleDataName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "getModuleDataName",
          "normalized": "ModuleData-\u003eString",
          "package": "shaker",
          "partial": "Module Data Name",
          "signature": "ModuleData-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:getModuleDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "getModuleDataTests",
          "package": "shaker",
          "signature": "ModuleData -\u003e ([String], [String], [String])",
          "source": "src/Shaker-Type.html#getModuleDataTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "getModuleDataTests",
          "normalized": "ModuleData-\u003e([String],[String],[String])",
          "package": "shaker",
          "partial": "Module Data Tests",
          "signature": "ModuleData-\u003e([String],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:getModuleDataTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ghcModuleDataAssertions",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ghcModuleDataAssertions",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Module Data Assertions",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ghcModuleDataAssertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ghcModuleDataName",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ghcModuleDataName",
          "package": "shaker",
          "partial": "Module Data Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ghcModuleDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "ghcModuleDataTestCase",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "ghcModuleDataTestCase",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Module Data Test Case",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:ghcModuleDataTestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "listTestLibs",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#listTestLibs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "listTestLibs",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Test Libs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:listTestLibs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay beetween 2 check in microsecond\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "listenerInputDelay",
          "package": "shaker",
          "signature": "Int",
          "source": "src/Shaker-Type.html#ListenerInput",
          "type": "function"
        },
        "index": {
          "description": "Delay beetween check in microsecond",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "listenerInputDelay",
          "package": "shaker",
          "partial": "Input Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:listenerInputDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe files to listen\n\u003c/p\u003e",
          "module": "Shaker.Type",
          "name": "listenerInputFiles",
          "package": "shaker",
          "signature": "[FileListenInfo]",
          "source": "src/Shaker-Type.html#ListenerInput",
          "type": "function"
        },
        "index": {
          "description": "The files to listen",
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "listenerInputFiles",
          "normalized": "[FileListenInfo]",
          "package": "shaker",
          "partial": "Input Files",
          "signature": "[FileListenInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:listenerInputFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataAssertions",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataAssertions",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Data Assertions",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataAssertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataExtension",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#moduleDataExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataExtension",
          "package": "shaker",
          "partial": "Data Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataFileName",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataFileName",
          "package": "shaker",
          "partial": "Data File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataHasMain",
          "package": "shaker",
          "signature": "Bool",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataHasMain",
          "package": "shaker",
          "partial": "Data Has Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataHasMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataName",
          "package": "shaker",
          "signature": "String",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataName",
          "package": "shaker",
          "partial": "Data Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataProperties",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataProperties",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Data Properties",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "moduleDataTestCase",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ModuleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "moduleDataTestCase",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Data Test Case",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:moduleDataTestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "packageDataListProjectModules",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#PackageData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "packageDataListProjectModules",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Data List Project Modules",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:packageDataListProjectModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "packageDataMapImportToModules",
          "package": "shaker",
          "signature": "MapImportToModules",
          "source": "src/Shaker-Type.html#PackageData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "packageDataMapImportToModules",
          "package": "shaker",
          "partial": "Data Map Import To Modules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:packageDataMapImportToModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerArgument",
          "package": "shaker",
          "signature": "[String]",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerArgument",
          "normalized": "[String]",
          "package": "shaker",
          "partial": "Argument",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerCommandMap",
          "package": "shaker",
          "signature": "CommandMap",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerCommandMap",
          "package": "shaker",
          "partial": "Command Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerCommandMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerCompileInputs",
          "package": "shaker",
          "signature": "[CompileInput]",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerCompileInputs",
          "normalized": "[CompileInput]",
          "package": "shaker",
          "partial": "Compile Inputs",
          "signature": "[CompileInput]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerCompileInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerInputState",
          "package": "shaker",
          "signature": "InputState",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerInputState",
          "package": "shaker",
          "partial": "Input State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerInputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerListenerInput",
          "package": "shaker",
          "signature": "ListenerInput",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerListenerInput",
          "package": "shaker",
          "partial": "Listener Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerListenerInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerLocalBuildInfo",
          "package": "shaker",
          "signature": "LocalBuildInfo",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerLocalBuildInfo",
          "package": "shaker",
          "partial": "Local Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerLocalBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerModifiedInfoFiles",
          "package": "shaker",
          "signature": "[FileInfo]",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerModifiedInfoFiles",
          "normalized": "[FileInfo]",
          "package": "shaker",
          "partial": "Modified Info Files",
          "signature": "[FileInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerModifiedInfoFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerModuleData",
          "package": "shaker",
          "signature": "[ModuleData]",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerModuleData",
          "normalized": "[ModuleData]",
          "package": "shaker",
          "partial": "Module Data",
          "signature": "[ModuleData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerModuleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerPackageIndex",
          "package": "shaker",
          "signature": "PackageIndex",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerPackageIndex",
          "package": "shaker",
          "partial": "Package Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerPackageIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerPluginMap",
          "package": "shaker",
          "signature": "PluginMap",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerPluginMap",
          "package": "shaker",
          "partial": "Plugin Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerPluginMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerThreadData",
          "package": "shaker",
          "signature": "ThreadData",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerThreadData",
          "package": "shaker",
          "partial": "Thread Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerThreadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "shakerVerbosity",
          "package": "shaker",
          "signature": "Verbosity",
          "source": "src/Shaker-Type.html#ShakerInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "shakerVerbosity",
          "package": "shaker",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:shakerVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "threadDataListenList",
          "package": "shaker",
          "signature": "ThreadIdList",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "threadDataListenList",
          "package": "shaker",
          "partial": "Data Listen List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:threadDataListenList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "threadDataListenToken",
          "package": "shaker",
          "signature": "Token",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "threadDataListenToken",
          "package": "shaker",
          "partial": "Data Listen Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:threadDataListenToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "threadDataQuitList",
          "package": "shaker",
          "signature": "ThreadIdList",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "threadDataQuitList",
          "package": "shaker",
          "partial": "Data Quit List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:threadDataQuitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shaker.Type",
          "name": "threadDataQuitToken",
          "package": "shaker",
          "signature": "Token",
          "source": "src/Shaker-Type.html#ThreadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shaker Type",
          "module": "Shaker.Type",
          "name": "threadDataQuitToken",
          "package": "shaker",
          "partial": "Data Quit Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shaker/docs/Shaker-Type.html#v:threadDataQuitToken"
      }
    }
  ]
]