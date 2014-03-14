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
        "word": "modulespection"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "Magic",
          "package": "modulespection",
          "source": "src/Language-Haskell-TH-Module-Magic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH Module Magic",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "Magic",
          "package": "modulespection",
          "partial": "Magic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/modulespection/docs/Language-Haskell-TH-Module-Magic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the type declarations of the current file. \n   Function and pattern declarations are ignored ... for now.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "declarations",
          "package": "modulespection",
          "signature": "Q [Dec]",
          "source": "src/Language-Haskell-TH-Module-Magic.html#declarations",
          "type": "function"
        },
        "index": {
          "description": "Get all the type declarations of the current file Function and pattern declarations are ignored for now",
          "hierarchy": "Language Haskell TH Module Magic",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "declarations",
          "normalized": "Q[Dec]",
          "package": "modulespection",
          "signature": "Q[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modulespection/docs/Language-Haskell-TH-Module-Magic.html#v:declarations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the top level names of a given module. \n   If a file path is used, all names, exported and internal\n   are returned. If a module name is used, only the exported\n   names are returned.\n   Function and pattern declarations are ignored ... for now.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "moduleDeclarations",
          "package": "modulespection",
          "signature": "String -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Module-Magic.html#moduleDeclarations",
          "type": "function"
        },
        "index": {
          "description": "Get all the top level names of given module If file path is used all names exported and internal are returned If module name is used only the exported names are returned Function and pattern declarations are ignored for now",
          "hierarchy": "Language Haskell TH Module Magic",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "moduleDeclarations",
          "normalized": "String-\u003eQ[Dec]",
          "package": "modulespection",
          "partial": "Declarations",
          "signature": "String-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modulespection/docs/Language-Haskell-TH-Module-Magic.html#v:moduleDeclarations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the top level names of a given module. \n   If a file path is used, all names, exported and internal\n   are returned. If a module name is used, only the exported\n   names are returned.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "moduleNames",
          "package": "modulespection",
          "signature": "String -\u003e Q [Name]",
          "source": "src/Language-Haskell-TH-Module-Magic.html#moduleNames",
          "type": "function"
        },
        "index": {
          "description": "Get all the top level names of given module If file path is used all names exported and internal are returned If module name is used only the exported names are returned",
          "hierarchy": "Language Haskell TH Module Magic",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "moduleNames",
          "normalized": "String-\u003eQ[Name]",
          "package": "modulespection",
          "partial": "Names",
          "signature": "String-\u003eQ[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modulespection/docs/Language-Haskell-TH-Module-Magic.html#v:moduleNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the top level declarations of the current file.\n   All names are returned whether they are exported or not.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "names",
          "package": "modulespection",
          "signature": "Q [Name]",
          "source": "src/Language-Haskell-TH-Module-Magic.html#names",
          "type": "function"
        },
        "index": {
          "description": "Get all the top level declarations of the current file All names are returned whether they are exported or not",
          "hierarchy": "Language Haskell TH Module Magic",
          "module": "Language.Haskell.TH.Module.Magic",
          "name": "names",
          "normalized": "Q[Name]",
          "package": "modulespection",
          "signature": "Q[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modulespection/docs/Language-Haskell-TH-Module-Magic.html#v:names"
      }
    }
  ]
]