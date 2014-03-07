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
        "word": "haskell-coffee"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple Cofeescript library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Coffee.Bindings",
          "name": "Bindings",
          "package": "haskell-coffee",
          "source": "src/Coffee-Bindings.html",
          "type": "module"
        },
        "index": {
          "description": "simple Cofeescript library",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "Bindings",
          "package": "haskell-coffee",
          "partial": "Bindings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Coffee data structure\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "Coffee",
          "package": "haskell-coffee",
          "source": "src/Coffee-Bindings.html#Coffee",
          "type": "data"
        },
        "index": {
          "description": "The Coffee data structure",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "Coffee",
          "package": "haskell-coffee",
          "partial": "Coffee",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#t:Coffee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Coffee.Bindings",
          "name": "Coffee",
          "package": "haskell-coffee",
          "signature": "Coffee",
          "source": "src/Coffee-Bindings.html#Coffee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "Coffee",
          "package": "haskell-coffee",
          "partial": "Coffee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:Coffee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset True to use '-b' option.\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "bare",
          "package": "haskell-coffee",
          "signature": "Bool",
          "source": "src/Coffee-Bindings.html#Coffee",
          "type": "function"
        },
        "index": {
          "description": "set True to use option",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "bare",
          "package": "haskell-coffee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:bare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile .coffee file(s)\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "coffeeCompile",
          "package": "haskell-coffee",
          "signature": "[FilePath]-\u003e Maybe FilePath-\u003e Coffee-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Compile coffee file",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "coffeeCompile",
          "normalized": "[FilePath]-\u003eMaybe FilePath-\u003eCoffee-\u003eIO ExitCode",
          "package": "haskell-coffee",
          "partial": "Compile",
          "signature": "[FilePath]-\u003eMaybe FilePath-\u003eCoffee-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:coffeeCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the coffee output\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "coffeePrint",
          "package": "haskell-coffee",
          "signature": "FilePath -\u003e Coffee -\u003e IO String",
          "source": "src/Coffee-Bindings.html#coffeePrint",
          "type": "function"
        },
        "index": {
          "description": "Print the coffee output",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "coffeePrint",
          "normalized": "FilePath-\u003eCoffee-\u003eIO String",
          "package": "haskell-coffee",
          "partial": "Print",
          "signature": "FilePath-\u003eCoffee-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:coffeePrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the version of the coffee binary\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "coffeeVersion",
          "package": "haskell-coffee",
          "signature": "Coffee -\u003e IO String",
          "source": "src/Coffee-Bindings.html#coffeeVersion",
          "type": "function"
        },
        "index": {
          "description": "Get the version of the coffee binary",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "coffeeVersion",
          "normalized": "Coffee-\u003eIO String",
          "package": "haskell-coffee",
          "partial": "Version",
          "signature": "Coffee-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:coffeeVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom compiler path, set to Nothing for default\n\u003c/p\u003e",
          "module": "Coffee.Bindings",
          "name": "customCompiler",
          "package": "haskell-coffee",
          "signature": "Maybe FilePath",
          "source": "src/Coffee-Bindings.html#Coffee",
          "type": "function"
        },
        "index": {
          "description": "Custom compiler path set to Nothing for default",
          "hierarchy": "Coffee Bindings",
          "module": "Coffee.Bindings",
          "name": "customCompiler",
          "package": "haskell-coffee",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-coffee/docs/Coffee-Bindings.html#v:customCompiler"
      }
    }
  ]
]