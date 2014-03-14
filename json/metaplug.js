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
        "word": "metaplug"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Eval",
          "name": "3Aeval",
          "package": "metaplug",
          "signature": "String -\u003e FilePath -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Eval",
          "module": "Metaplug.Eval",
          "name": "3Aeval",
          "normalized": "String-\u003eFilePath-\u003eIO a",
          "package": "metaplug",
          "partial": "Aeval",
          "signature": "String-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Eval.html#v:3Aeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Initialize",
          "name": "3AinitSession",
          "package": "metaplug",
          "signature": "FilePath -\u003e [String] -\u003e SessionMode -\u003e IO MetaSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Initialize",
          "module": "Metaplug.Initialize",
          "name": "3AinitSession",
          "normalized": "FilePath-\u003e[String]-\u003eSessionMode-\u003eIO MetaSession",
          "package": "metaplug",
          "partial": "Ainit Session",
          "signature": "FilePath-\u003e[String]-\u003eSessionMode-\u003eIO MetaSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Initialize.html#v:3AinitSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Initialize",
          "name": "3AinitSession'",
          "package": "metaplug",
          "signature": "FilePath -\u003e [String] -\u003e DynFlags -\u003e SessionMode -\u003e IO MetaSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Initialize",
          "module": "Metaplug.Initialize",
          "name": "3AinitSession'",
          "normalized": "FilePath-\u003e[String]-\u003eDynFlags-\u003eSessionMode-\u003eIO MetaSession",
          "package": "metaplug",
          "partial": "Ainit Session'",
          "signature": "FilePath-\u003e[String]-\u003eDynFlags-\u003eSessionMode-\u003eIO MetaSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Initialize.html#v:3AinitSession'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Loader",
          "name": "3AcompileCall",
          "package": "metaplug",
          "signature": "String -\u003e MetaSession -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Loader",
          "module": "Metaplug.Loader",
          "name": "3AcompileCall",
          "normalized": "String-\u003eMetaSession-\u003eIO a",
          "package": "metaplug",
          "partial": "Acompile Call",
          "signature": "String-\u003eMetaSession-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Loader.html#v:3AcompileCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Loader",
          "name": "3AloadFiles",
          "package": "metaplug",
          "signature": "[String] -\u003e MetaSession -\u003e IO MetaSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Loader",
          "module": "Metaplug.Loader",
          "name": "3AloadFiles",
          "normalized": "[String]-\u003eMetaSession-\u003eIO MetaSession",
          "package": "metaplug",
          "partial": "Aload Files",
          "signature": "[String]-\u003eMetaSession-\u003eIO MetaSession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Loader.html#v:3AloadFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Packages",
          "name": "3AgetPackages",
          "package": "metaplug",
          "signature": "FilePath -\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Packages",
          "module": "Metaplug.Packages",
          "name": "3AgetPackages",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "metaplug",
          "partial": "Aget Packages",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Packages.html#v:3AgetPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Packages",
          "name": "3AgetPkgAuthor",
          "package": "metaplug",
          "signature": "FilePath -\u003e String -\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Packages",
          "module": "Metaplug.Packages",
          "name": "3AgetPkgAuthor",
          "normalized": "FilePath-\u003eString-\u003eIO(Maybe String)",
          "package": "metaplug",
          "partial": "Aget Pkg Author",
          "signature": "FilePath-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Packages.html#v:3AgetPkgAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Packages",
          "name": "3AgetPkgDepends",
          "package": "metaplug",
          "signature": "FilePath -\u003e String -\u003e IO (Maybe [String])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Packages",
          "module": "Metaplug.Packages",
          "name": "3AgetPkgDepends",
          "normalized": "FilePath-\u003eString-\u003eIO(Maybe[String])",
          "package": "metaplug",
          "partial": "Aget Pkg Depends",
          "signature": "FilePath-\u003eString-\u003eIO(Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Packages.html#v:3AgetPkgDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Packages",
          "name": "3AgetPkgDesc",
          "package": "metaplug",
          "signature": "FilePath -\u003e String -\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Packages",
          "module": "Metaplug.Packages",
          "name": "3AgetPkgDesc",
          "normalized": "FilePath-\u003eString-\u003eIO(Maybe String)",
          "package": "metaplug",
          "partial": "Aget Pkg Desc",
          "signature": "FilePath-\u003eString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Packages.html#v:3AgetPkgDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Packages",
          "name": "3AgetPkgExModules",
          "package": "metaplug",
          "signature": "FilePath -\u003e String -\u003e IO (Maybe [String])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Metaplug Packages",
          "module": "Metaplug.Packages",
          "name": "3AgetPkgExModules",
          "normalized": "FilePath-\u003eString-\u003eIO(Maybe[String])",
          "package": "metaplug",
          "partial": "Aget Pkg Ex Modules",
          "signature": "FilePath-\u003eString-\u003eIO(Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Packages.html#v:3AgetPkgExModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Types",
          "name": "3AMetaSession",
          "package": "metaplug",
          "type": "data"
        },
        "index": {
          "hierarchy": "Metaplug Types",
          "module": "Metaplug.Types",
          "name": "3AMetaSession",
          "package": "metaplug",
          "partial": "AMeta Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Types.html#t:3AMetaSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Metaplug.Types",
          "name": "3ASessionMode",
          "package": "metaplug",
          "type": "data"
        },
        "index": {
          "hierarchy": "Metaplug Types",
          "module": "Metaplug.Types",
          "name": "3ASessionMode",
          "package": "metaplug",
          "partial": "ASession Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metaplug/docs/Metaplug-Types.html#t:3ASessionMode"
      }
    }
  ]
]