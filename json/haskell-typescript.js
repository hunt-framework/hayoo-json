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
        "word": "haskell-typescript"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple TypeScript library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "TypeScript.Bindings",
          "name": "Bindings",
          "package": "haskell-typescript",
          "source": "src/TypeScript-Bindings.html",
          "type": "module"
        },
        "index": {
          "description": "simple TypeScript library",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "Bindings",
          "package": "haskell-typescript",
          "partial": "Bindings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TypeScript data structure\n\u003c/p\u003e",
          "module": "TypeScript.Bindings",
          "name": "TypeScript",
          "package": "haskell-typescript",
          "source": "src/TypeScript-Bindings.html#TypeScript",
          "type": "data"
        },
        "index": {
          "description": "The TypeScript data structure",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "TypeScript",
          "package": "haskell-typescript",
          "partial": "Type Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#t:TypeScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeScript.Bindings",
          "name": "TypeScript",
          "package": "haskell-typescript",
          "signature": "TypeScript",
          "source": "src/TypeScript-Bindings.html#TypeScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "TypeScript",
          "package": "haskell-typescript",
          "partial": "Type Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#v:TypeScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom compiler path, set to Nothing for default\n\u003c/p\u003e",
          "module": "TypeScript.Bindings",
          "name": "customCompiler",
          "package": "haskell-typescript",
          "signature": "Maybe FilePath",
          "source": "src/TypeScript-Bindings.html#TypeScript",
          "type": "function"
        },
        "index": {
          "description": "Custom compiler path set to Nothing for default",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "customCompiler",
          "package": "haskell-typescript",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#v:customCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile .ts file(s)\n\u003c/p\u003e",
          "module": "TypeScript.Bindings",
          "name": "typeScriptCompile",
          "package": "haskell-typescript",
          "signature": "[FilePath]-\u003e Maybe FilePath-\u003e TypeScript-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Compile ts file",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "typeScriptCompile",
          "normalized": "[FilePath]-\u003eMaybe FilePath-\u003eTypeScript-\u003eIO ExitCode",
          "package": "haskell-typescript",
          "partial": "Script Compile",
          "signature": "[FilePath]-\u003eMaybe FilePath-\u003eTypeScript-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#v:typeScriptCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the TypeScript output\n\u003c/p\u003e",
          "module": "TypeScript.Bindings",
          "name": "typeScriptPrint",
          "package": "haskell-typescript",
          "signature": "FilePath -\u003e TypeScript -\u003e IO String",
          "source": "src/TypeScript-Bindings.html#typeScriptPrint",
          "type": "function"
        },
        "index": {
          "description": "Print the TypeScript output",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "typeScriptPrint",
          "normalized": "FilePath-\u003eTypeScript-\u003eIO String",
          "package": "haskell-typescript",
          "partial": "Script Print",
          "signature": "FilePath-\u003eTypeScript-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#v:typeScriptPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the version of the typescript binary\n\u003c/p\u003e",
          "module": "TypeScript.Bindings",
          "name": "typeScriptVersion",
          "package": "haskell-typescript",
          "signature": "TypeScript -\u003e IO String",
          "source": "src/TypeScript-Bindings.html#typeScriptVersion",
          "type": "function"
        },
        "index": {
          "description": "Get the version of the typescript binary",
          "hierarchy": "TypeScript Bindings",
          "module": "TypeScript.Bindings",
          "name": "typeScriptVersion",
          "normalized": "TypeScript-\u003eIO String",
          "package": "haskell-typescript",
          "partial": "Script Version",
          "signature": "TypeScript-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-typescript/docs/TypeScript-Bindings.html#v:typeScriptVersion"
      }
    }
  ]
]