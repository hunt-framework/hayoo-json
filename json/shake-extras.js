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
        "word": "shake-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a convenient cmdargs style interface for\n controlling shake build options.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.CLI",
          "name": "CLI",
          "package": "shake-extras",
          "source": "src/Development-Shake-CLI.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenient cmdargs style interface for controlling shake build options",
          "hierarchy": "Development Shake CLI",
          "module": "Development.Shake.CLI",
          "name": "CLI",
          "package": "shake-extras",
          "partial": "CLI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-CLI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e data structure with \n annotations for CmdArgs already included.\n\u003c/p\u003e",
          "module": "Development.Shake.CLI",
          "name": "options",
          "package": "shake-extras",
          "signature": "ShakeOptions",
          "source": "src/Development-Shake-CLI.html#options",
          "type": "function"
        },
        "index": {
          "description": "ShakeOptions data structure with annotations for CmdArgs already included",
          "hierarchy": "Development Shake CLI",
          "module": "Development.Shake.CLI",
          "name": "options",
          "package": "shake-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-CLI.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a set of Shake rules, and let cmdargs take care of\n parsing command line arguments that may influence the used\n \u003ccode\u003e\u003ca\u003eShakeOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Development.Shake.CLI",
          "name": "shakeWithArgs",
          "package": "shake-extras",
          "signature": "Rules () -\u003e IO ()",
          "source": "src/Development-Shake-CLI.html#shakeWithArgs",
          "type": "function"
        },
        "index": {
          "description": "Build set of Shake rules and let cmdargs take care of parsing command line arguments that may influence the used ShakeOptions",
          "hierarchy": "Development Shake CLI",
          "module": "Development.Shake.CLI",
          "name": "shakeWithArgs",
          "normalized": "Rules()-\u003eIO()",
          "package": "shake-extras",
          "partial": "With Args",
          "signature": "Rules()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-CLI.html#v:shakeWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to search imports. Imports are files that are needed for\n compilation of a source code file.  (This module is experimental.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Development.Shake.Imports",
          "name": "Imports",
          "package": "shake-extras",
          "source": "src/Development-Shake-Imports.html",
          "type": "module"
        },
        "index": {
          "description": "Module to search imports Imports are files that are needed for compilation of source code file This module is experimental",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "Imports",
          "package": "shake-extras",
          "partial": "Imports",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for imports in a file. Before compiling, you still have to \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e the imports.\n\u003c/p\u003e",
          "module": "Development.Shake.Imports",
          "name": "directImports",
          "package": "shake-extras",
          "signature": "FilePath -\u003e Action [FilePath]",
          "source": "src/Development-Shake-Imports.html#directImports",
          "type": "function"
        },
        "index": {
          "description": "Searches for imports in file Before compiling you still have to need the imports",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "directImports",
          "normalized": "FilePath-\u003eAction[FilePath]",
          "package": "shake-extras",
          "partial": "Imports",
          "signature": "FilePath-\u003eAction[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#v:directImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegisters a defaultRule for imports in C++ source files (\".cpp\").\n Only returns the imported files that are found\n on disk in one of the directories specified by the first argument.\n\u003c/p\u003e",
          "module": "Development.Shake.Imports",
          "name": "importsDefaultCpp",
          "package": "shake-extras",
          "signature": "[FilePath] -\u003e Rules ()",
          "source": "src/Development-Shake-Imports.html#importsDefaultCpp",
          "type": "function"
        },
        "index": {
          "description": "Registers defaultRule for imports in source files cpp Only returns the imported files that are found on disk in one of the directories specified by the first argument",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "importsDefaultCpp",
          "normalized": "[FilePath]-\u003eRules()",
          "package": "shake-extras",
          "partial": "Default Cpp",
          "signature": "[FilePath]-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#v:importsDefaultCpp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegisters a defaultRule for imports in haskell source files (\".hs\").\n Only returns the imported files that are found\n on disk in one of the directories specified by the first argument.\n\u003c/p\u003e",
          "module": "Development.Shake.Imports",
          "name": "importsDefaultHaskell",
          "package": "shake-extras",
          "signature": "[FilePath] -\u003e Rules ()",
          "source": "src/Development-Shake-Imports.html#importsDefaultHaskell",
          "type": "function"
        },
        "index": {
          "description": "Registers defaultRule for imports in haskell source files hs Only returns the imported files that are found on disk in one of the directories specified by the first argument",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "importsDefaultHaskell",
          "normalized": "[FilePath]-\u003eRules()",
          "package": "shake-extras",
          "partial": "Default Haskell",
          "signature": "[FilePath]-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#v:importsDefaultHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eimportsRule p searchImports\u003c/code\u003e registers a rule for how to look up imports\n for files matching p.\n\u003c/p\u003e",
          "module": "Development.Shake.Imports",
          "name": "importsRule",
          "package": "shake-extras",
          "signature": "(FilePath -\u003e Bool) -\u003e (FilePath -\u003e Action [FilePath]) -\u003e Rules ()",
          "source": "src/Development-Shake-Imports.html#importsRule",
          "type": "function"
        },
        "index": {
          "description": "importsRule searchImports registers rule for how to look up imports for files matching",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "importsRule",
          "normalized": "(FilePath-\u003eBool)-\u003e(FilePath-\u003eAction[FilePath])-\u003eRules()",
          "package": "shake-extras",
          "partial": "Rule",
          "signature": "(FilePath-\u003eBool)-\u003e(FilePath-\u003eAction[FilePath])-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#v:importsRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for transitive imports in a file. This might be useful for linking.\n\u003c/p\u003e",
          "module": "Development.Shake.Imports",
          "name": "transitiveImports",
          "package": "shake-extras",
          "signature": "FilePath -\u003e Action [FilePath]",
          "source": "src/Development-Shake-Imports.html#transitiveImports",
          "type": "function"
        },
        "index": {
          "description": "Searches for transitive imports in file This might be useful for linking",
          "hierarchy": "Development Shake Imports",
          "module": "Development.Shake.Imports",
          "name": "transitiveImports",
          "normalized": "FilePath-\u003eAction[FilePath]",
          "package": "shake-extras",
          "partial": "Imports",
          "signature": "FilePath-\u003eAction[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shake-extras/docs/Development-Shake-Imports.html#v:transitiveImports"
      }
    }
  ]
]