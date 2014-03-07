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
        "word": "noodle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Banner",
          "name": "Banner",
          "package": "noodle",
          "source": "src/Language-Noodle-Banner.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Banner",
          "module": "Language.Noodle.Banner",
          "name": "Banner",
          "package": "noodle",
          "partial": "Banner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Banner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Banner",
          "name": "text",
          "package": "noodle",
          "signature": "[Char]",
          "source": "src/Language-Noodle-Banner.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Banner",
          "module": "Language.Noodle.Banner",
          "name": "text",
          "normalized": "[Char]",
          "package": "noodle",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Banner.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "DepTree",
          "package": "noodle",
          "source": "src/Language-Noodle-DepTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "DepTree",
          "package": "noodle",
          "partial": "Dep Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "SourceFile",
          "package": "noodle",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "SourceFile",
          "package": "noodle",
          "partial": "Source File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#t:SourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "SF",
          "package": "noodle",
          "signature": "SF",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "SF",
          "package": "noodle",
          "partial": "SF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:SF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "parseDeps",
          "package": "noodle",
          "signature": "[FilePath] -\u003e FilePath -\u003e IO (Either String SourceFile)",
          "source": "src/Language-Noodle-DepTree.html#parseDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "parseDeps",
          "normalized": "[FilePath]-\u003eFilePath-\u003eIO(Either String SourceFile)",
          "package": "noodle",
          "partial": "Deps",
          "signature": "[FilePath]-\u003eFilePath-\u003eIO(Either String SourceFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:parseDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "srcBody",
          "package": "noodle",
          "signature": "String",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "srcBody",
          "package": "noodle",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:srcBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "srcDeps",
          "package": "noodle",
          "signature": "[SourceFile]",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "srcDeps",
          "normalized": "[SourceFile]",
          "package": "noodle",
          "partial": "Deps",
          "signature": "[SourceFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:srcDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "srcDir",
          "package": "noodle",
          "signature": "FilePath",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "srcDir",
          "package": "noodle",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:srcDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.DepTree",
          "name": "srcName",
          "package": "noodle",
          "signature": "FilePath",
          "source": "src/Language-Noodle-DepTree.html#SourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle DepTree",
          "module": "Language.Noodle.DepTree",
          "name": "srcName",
          "package": "noodle",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-DepTree.html#v:srcName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Evaluation",
          "package": "noodle",
          "source": "src/Language-Noodle-Evaluation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Evaluation",
          "package": "noodle",
          "partial": "Evaluation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Env",
          "package": "noodle",
          "source": "src/Language-Noodle-Evaluation.html#Env",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Env",
          "package": "noodle",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Error",
          "package": "noodle",
          "source": "src/Language-Noodle-Evaluation.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Error",
          "package": "noodle",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Name",
          "package": "noodle",
          "source": "src/Language-Noodle-Evaluation.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Name",
          "package": "noodle",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Val",
          "package": "noodle",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Val",
          "package": "noodle",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Abst",
          "package": "noodle",
          "signature": "Abst (Maybe Unique) Val",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Abst",
          "package": "noodle",
          "partial": "Abst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Abst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "BadParse",
          "package": "noodle",
          "signature": "BadParse String Int Int String",
          "source": "src/Language-Noodle-Evaluation.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "BadParse",
          "package": "noodle",
          "partial": "Bad Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:BadParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Bar",
          "package": "noodle",
          "signature": "Bar Env",
          "source": "src/Language-Noodle-Evaluation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Bar",
          "package": "noodle",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Env",
          "package": "noodle",
          "signature": "Env Unique Env [(Name, Val)]",
          "source": "src/Language-Noodle-Evaluation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Env",
          "normalized": "Env Unique Env[(Name,Val)]",
          "package": "noodle",
          "partial": "Env",
          "signature": "Env Unique Env[(Name,Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Error",
          "package": "noodle",
          "signature": "Error Error",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Error",
          "package": "noodle",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Extern",
          "package": "noodle",
          "signature": "Extern Dynamic",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Extern",
          "package": "noodle",
          "partial": "Extern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Extern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Function",
          "package": "noodle",
          "signature": "Function (Val -\u003e IO Val)",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Function",
          "normalized": "Function(Val-\u003eIO Val)",
          "package": "noodle",
          "partial": "Function",
          "signature": "Function(Val-\u003eIO Val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Module",
          "package": "noodle",
          "signature": "Module (IO Env)",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Module",
          "package": "noodle",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Nil",
          "package": "noodle",
          "signature": "Nil",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Nil",
          "package": "noodle",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Number",
          "package": "noodle",
          "signature": "Number Rational",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Number",
          "package": "noodle",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Prod",
          "package": "noodle",
          "signature": "Prod Val Val",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Prod",
          "package": "noodle",
          "partial": "Prod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Prod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Str",
          "package": "noodle",
          "signature": "Str String",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Str",
          "package": "noodle",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Symbol",
          "package": "noodle",
          "signature": "Symbol String",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Symbol",
          "package": "noodle",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Thunk",
          "package": "noodle",
          "signature": "Thunk (IO Val)",
          "source": "src/Language-Noodle-Evaluation.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Thunk",
          "package": "noodle",
          "partial": "Thunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Thunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "Top",
          "package": "noodle",
          "signature": "Top",
          "source": "src/Language-Noodle-Evaluation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "Top",
          "package": "noodle",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "compile",
          "package": "noodle",
          "signature": "Env -\u003e String -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#compile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "compile",
          "normalized": "Env-\u003eString-\u003eVal",
          "package": "noodle",
          "signature": "Env-\u003eString-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "compileFile",
          "package": "noodle",
          "signature": "Env -\u003e FilePath -\u003e IO Val",
          "source": "src/Language-Noodle-Evaluation.html#compileFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "compileFile",
          "normalized": "Env-\u003eFilePath-\u003eIO Val",
          "package": "noodle",
          "partial": "File",
          "signature": "Env-\u003eFilePath-\u003eIO Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:compileFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "compute",
          "package": "noodle",
          "signature": "Env -\u003e Comp -\u003e IO Val",
          "source": "src/Language-Noodle-Evaluation.html#compute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "compute",
          "normalized": "Env-\u003eComp-\u003eIO Val",
          "package": "noodle",
          "signature": "Env-\u003eComp-\u003eIO Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:compute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "declare",
          "package": "noodle",
          "signature": "Env -\u003e Decls -\u003e IO (Either String Env)",
          "source": "src/Language-Noodle-Evaluation.html#declare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "declare",
          "normalized": "Env-\u003eDecls-\u003eIO(Either String Env)",
          "package": "noodle",
          "signature": "Env-\u003eDecls-\u003eIO(Either String Env)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:declare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "extenv",
          "package": "noodle",
          "signature": "[(String, Val)] -\u003e Env",
          "source": "src/Language-Noodle-Evaluation.html#extenv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "extenv",
          "normalized": "[(String,Val)]-\u003eEnv",
          "package": "noodle",
          "signature": "[(String,Val)]-\u003eEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:extenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "extfun",
          "package": "noodle",
          "signature": "(Val -\u003e IO Val) -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#extfun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "extfun",
          "normalized": "(Val-\u003eIO Val)-\u003eVal",
          "package": "noodle",
          "signature": "(Val-\u003eIO Val)-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:extfun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "extmod",
          "package": "noodle",
          "signature": "Env -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#extmod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "extmod",
          "normalized": "Env-\u003eVal",
          "package": "noodle",
          "signature": "Env-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:extmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "extop",
          "package": "noodle",
          "signature": "(Val -\u003e Val -\u003e IO Val) -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#extop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "extop",
          "normalized": "(Val-\u003eVal-\u003eIO Val)-\u003eVal",
          "package": "noodle",
          "signature": "(Val-\u003eVal-\u003eIO Val)-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:extop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "rtError",
          "package": "noodle",
          "signature": "Val -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#rtError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "rtError",
          "normalized": "Val-\u003eVal",
          "package": "noodle",
          "partial": "Error",
          "signature": "Val-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:rtError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "showAst",
          "package": "noodle",
          "signature": "String -\u003e String",
          "source": "src/Language-Noodle-Evaluation.html#showAst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "showAst",
          "normalized": "String-\u003eString",
          "package": "noodle",
          "partial": "Ast",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:showAst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Evaluation",
          "name": "srtError",
          "package": "noodle",
          "signature": "String -\u003e Val",
          "source": "src/Language-Noodle-Evaluation.html#srtError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Evaluation",
          "module": "Language.Noodle.Evaluation",
          "name": "srtError",
          "normalized": "String-\u003eVal",
          "package": "noodle",
          "partial": "Error",
          "signature": "String-\u003eVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Evaluation.html#v:srtError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Basic",
          "name": "Basic",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-Basic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Basic",
          "module": "Language.Noodle.Lib.Basic",
          "name": "Basic",
          "package": "noodle",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Basic",
          "name": "decls",
          "package": "noodle",
          "signature": "[(String, Val)]",
          "source": "src/Language-Noodle-Lib-Basic.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Basic",
          "module": "Language.Noodle.Lib.Basic",
          "name": "decls",
          "normalized": "[(String,Val)]",
          "package": "noodle",
          "signature": "[(String,Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Basic.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Basic",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-Basic.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Basic",
          "module": "Language.Noodle.Lib.Basic",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Basic.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Boolean",
          "name": "Boolean",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-Boolean.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Boolean",
          "module": "Language.Noodle.Lib.Boolean",
          "name": "Boolean",
          "package": "noodle",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Boolean",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-Boolean.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Boolean",
          "module": "Language.Noodle.Lib.Boolean",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Boolean.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Boolean",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-Boolean.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Boolean",
          "module": "Language.Noodle.Lib.Boolean",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Boolean.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Function",
          "name": "Function",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-Function.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Function",
          "module": "Language.Noodle.Lib.Function",
          "name": "Function",
          "package": "noodle",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Function",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-Function.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Function",
          "module": "Language.Noodle.Lib.Function",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Function.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Function",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-Function.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Function",
          "module": "Language.Noodle.Lib.Function",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Function.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.IO",
          "name": "IO",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib IO",
          "module": "Language.Noodle.Lib.IO",
          "name": "IO",
          "package": "noodle",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.IO",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-IO.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib IO",
          "module": "Language.Noodle.Lib.IO",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-IO.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.IO",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-IO.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib IO",
          "module": "Language.Noodle.Lib.IO",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-IO.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Math",
          "name": "Math",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-Math.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Math",
          "module": "Language.Noodle.Lib.Math",
          "name": "Math",
          "package": "noodle",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Math",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-Math.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Math",
          "module": "Language.Noodle.Lib.Math",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Math.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Math",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-Math.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Math",
          "module": "Language.Noodle.Lib.Math",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Math.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Prod",
          "name": "Prod",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-Prod.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Prod",
          "module": "Language.Noodle.Lib.Prod",
          "name": "Prod",
          "package": "noodle",
          "partial": "Prod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Prod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Prod",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-Prod.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Prod",
          "module": "Language.Noodle.Lib.Prod",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Prod.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.Prod",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-Prod.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib Prod",
          "module": "Language.Noodle.Lib.Prod",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-Prod.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.String",
          "name": "String",
          "package": "noodle",
          "source": "src/Language-Noodle-Lib-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Lib String",
          "module": "Language.Noodle.Lib.String",
          "name": "String",
          "package": "noodle",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.String",
          "name": "decls",
          "package": "noodle",
          "signature": "[([Char], Val)]",
          "source": "src/Language-Noodle-Lib-String.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib String",
          "module": "Language.Noodle.Lib.String",
          "name": "decls",
          "normalized": "[([Char],Val)]",
          "package": "noodle",
          "signature": "[([Char],Val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-String.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Lib.String",
          "name": "env",
          "package": "noodle",
          "signature": "Env",
          "source": "src/Language-Noodle-Lib-String.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Lib String",
          "module": "Language.Noodle.Lib.String",
          "name": "env",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Lib-String.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGParser is a generalized backtracking parser combinator with state, error propogation and easy to use associativity primitves.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Generic",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "GParser is generalized backtracking parser combinator with state error propogation and easy to use associativity primitves",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Generic",
          "package": "noodle",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGParser\u003c/a\u003e\u003c/code\u003e computes some result \u003ccode\u003eres\u003c/code\u003e, based on a stream of tokens \u003ccode\u003etok\u003c/code\u003e having a state of type \u003ccode\u003est\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "GParser",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Generic.html#GParser",
          "type": "newtype"
        },
        "index": {
          "description": "GParser computes some result res based on stream of tokens tok having state of type st",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "GParser",
          "package": "noodle",
          "partial": "GParser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#t:GParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e encompases error propogation, parameterized over \u003ccode\u003est\u003c/code\u003e state type, \u003ccode\u003etok\u003c/code\u003e token type, and \u003ccode\u003eres\u003c/code\u003e the monadic return value\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Result",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Generic.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result encompases error propogation parameterized over st state type tok token type and res the monadic return value",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Result",
          "package": "noodle",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif the left operand \u003ca\u003e|\u003c/a\u003e results in failure, apply the right operand. state and token stream changes are not carried over to right operand\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "(\u003c|\u003e)",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok res -\u003e GParser st tok res",
          "source": "src/Language-Noodle-Parsing-Generic.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "if the left operand results in failure apply the right operand state and token stream changes are not carried over to right operand",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "GParser a b c-\u003eGParser a b c-\u003eGParser a b c",
          "package": "noodle",
          "signature": "GParser st tok res-\u003eGParser st tok res-\u003eGParser st tok res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Failure error_message state'\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Failure",
          "package": "noodle",
          "signature": "Failure String st",
          "source": "src/Language-Noodle-Parsing-Generic.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Failure error message state",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Failure",
          "package": "noodle",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Generic",
          "name": "P",
          "package": "noodle",
          "signature": "P ((st, [tok]) -\u003e Result st tok res)",
          "source": "src/Language-Noodle-Parsing-Generic.html#GParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "P",
          "normalized": "P((a,[b])-\u003eResult a b c)",
          "package": "noodle",
          "signature": "P((st,[tok])-\u003eResult st tok res)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Success result state token_stream'\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Success",
          "package": "noodle",
          "signature": "Success res st [tok]",
          "source": "src/Language-Noodle-Parsing-Generic.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Success result state token stream",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "Success",
          "normalized": "Success a b[c]",
          "package": "noodle",
          "partial": "Success",
          "signature": "Success res st[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe first successful parser to succeed is parsed, if none, fail\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "choice",
          "package": "noodle",
          "signature": "[GParser st tok res] -\u003e GParser st tok res",
          "source": "src/Language-Noodle-Parsing-Generic.html#choice",
          "type": "function"
        },
        "index": {
          "description": "the first successful parser to succeed is parsed if none fail",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "choice",
          "normalized": "[GParser a b c]-\u003eGParser a b c",
          "package": "noodle",
          "signature": "[GParser st tok res]-\u003eGParser st tok res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the current state\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getSt",
          "package": "noodle",
          "signature": "GParser st tok st",
          "source": "src/Language-Noodle-Parsing-Generic.html#getSt",
          "type": "function"
        },
        "index": {
          "description": "return the current state",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getSt",
          "package": "noodle",
          "partial": "St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:getSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econsume one token and return it\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getTok",
          "package": "noodle",
          "signature": "GParser st tok tok",
          "source": "src/Language-Noodle-Parsing-Generic.html#getTok",
          "type": "function"
        },
        "index": {
          "description": "consume one token and return it",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getTok",
          "package": "noodle",
          "partial": "Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:getTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econsume one token and return it if the result of applying the predicate to it is true, otherwise fail with 'unexpected token'\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getTokIf",
          "package": "noodle",
          "signature": "(tok -\u003e Bool) -\u003e GParser st tok tok",
          "source": "src/Language-Noodle-Parsing-Generic.html#getTokIf",
          "type": "function"
        },
        "index": {
          "description": "consume one token and return it if the result of applying the predicate to it is true otherwise fail with unexpected token",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "getTokIf",
          "normalized": "(a-\u003eBool)-\u003eGParser b a a",
          "package": "noodle",
          "partial": "Tok If",
          "signature": "(tok-\u003eBool)-\u003eGParser st tok tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:getTokIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esucceed if all of the input has been consumed, otherwise complain about expecting the end of the input\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "inputEnd",
          "package": "noodle",
          "signature": "GParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Generic.html#inputEnd",
          "type": "function"
        },
        "index": {
          "description": "succeed if all of the input has been consumed otherwise complain about expecting the end of the input",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "inputEnd",
          "normalized": "GParser a b()",
          "package": "noodle",
          "partial": "End",
          "signature": "GParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:inputEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elookahead at the rest of the tokens left in the input\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "lookToks",
          "package": "noodle",
          "signature": "GParser st tok [tok]",
          "source": "src/Language-Noodle-Parsing-Generic.html#lookToks",
          "type": "function"
        },
        "index": {
          "description": "lookahead at the rest of the tokens left in the input",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "lookToks",
          "normalized": "GParser a b[b]",
          "package": "noodle",
          "partial": "Toks",
          "signature": "GParser st tok[tok]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:lookToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply the parser as many times as is possible, and return a list of the results\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "many",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok [res]",
          "source": "src/Language-Noodle-Parsing-Generic.html#many",
          "type": "function"
        },
        "index": {
          "description": "apply the parser as many times as is possible and return list of the results",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "many",
          "normalized": "GParser a b c-\u003eGParser a b[c]",
          "package": "noodle",
          "signature": "GParser st tok res-\u003eGParser st tok[res]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply the parser one or more times, and return a list of the results. Fails the first application fails\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "many1",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok [res]",
          "source": "src/Language-Noodle-Parsing-Generic.html#many1",
          "type": "function"
        },
        "index": {
          "description": "apply the parser one or more times and return list of the results Fails the first application fails",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "many1",
          "normalized": "GParser a b c-\u003eGParser a b[c]",
          "package": "noodle",
          "signature": "GParser st tok res-\u003eGParser st tok[res]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply some update function to the current state\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "modSt",
          "package": "noodle",
          "signature": "(st -\u003e st) -\u003e GParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Generic.html#modSt",
          "type": "function"
        },
        "index": {
          "description": "apply some update function to the current state",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "modSt",
          "normalized": "(a-\u003ea)-\u003eGParser a b()",
          "package": "noodle",
          "partial": "St",
          "signature": "(st-\u003est)-\u003eGParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:modSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to parse either p1 or p2, returning Left a for p1, or Right b for p2\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "pEither",
          "package": "noodle",
          "signature": "GParser st tok a -\u003e GParser st tok b -\u003e GParser st tok (Either a b)",
          "source": "src/Language-Noodle-Parsing-Generic.html#pEither",
          "type": "function"
        },
        "index": {
          "description": "try to parse either p1 or p2 returning Left for p1 or Right for p2",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "pEither",
          "normalized": "GParser a b c-\u003eGParser a b d-\u003eGParser a b(Either c d)",
          "package": "noodle",
          "partial": "Either",
          "signature": "GParser st tok a-\u003eGParser st tok b-\u003eGParser st tok(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:pEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to apply parser p, return Just res on success, or Nothing on fail\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "pMaybe",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok (Maybe res)",
          "source": "src/Language-Noodle-Parsing-Generic.html#pMaybe",
          "type": "function"
        },
        "index": {
          "description": "try to apply parser return Just res on success or Nothing on fail",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "pMaybe",
          "normalized": "GParser a b c-\u003eGParser a b(Maybe c)",
          "package": "noodle",
          "partial": "Maybe",
          "signature": "GParser st tok res-\u003eGParser st tok(Maybe res)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:pMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the value of the current state\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "putSt",
          "package": "noodle",
          "signature": "st -\u003e GParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Generic.html#putSt",
          "type": "function"
        },
        "index": {
          "description": "change the value of the current state",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "putSt",
          "normalized": "a-\u003eGParser a b()",
          "package": "noodle",
          "partial": "St",
          "signature": "st-\u003eGParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:putSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a \u003ccode\u003e\u003ca\u003eGParser\u003c/a\u003e\u003c/code\u003e computation to state and a token stream, returning a value of type \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "runp",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e st -\u003e [tok] -\u003e Result st tok res",
          "source": "src/Language-Noodle-Parsing-Generic.html#runp",
          "type": "function"
        },
        "index": {
          "description": "apply GParser computation to state and token stream returning value of type Result",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "runp",
          "normalized": "GParser a b c-\u003ea-\u003e[b]-\u003eResult a b c",
          "package": "noodle",
          "signature": "GParser st tok res-\u003est-\u003e[tok]-\u003eResult st tok res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:runp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse many p's seperated by sep\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "sepBy",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok b -\u003e GParser st tok [res]",
          "source": "src/Language-Noodle-Parsing-Generic.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "parse many seperated by sep",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "sepBy",
          "normalized": "GParser a b c-\u003eGParser a b d-\u003eGParser a b[c]",
          "package": "noodle",
          "partial": "By",
          "signature": "GParser st tok res-\u003eGParser st tok b-\u003eGParser st tok[res]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse many1 p's seperated by sep\n\u003c/p\u003e",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "sepBy1",
          "package": "noodle",
          "signature": "GParser st tok res -\u003e GParser st tok b -\u003e GParser st tok [res]",
          "source": "src/Language-Noodle-Parsing-Generic.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "parse many1 seperated by sep",
          "hierarchy": "Language Noodle Parsing Generic",
          "module": "Language.Noodle.Parsing.Generic",
          "name": "sepBy1",
          "normalized": "GParser a b c-\u003eGParser a b d-\u003eGParser a b[c]",
          "package": "noodle",
          "partial": "By",
          "signature": "GParser st tok res-\u003eGParser st tok b-\u003eGParser st tok[res]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Generic.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "Noodle",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Noodle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "Noodle",
          "package": "noodle",
          "partial": "Noodle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "NParser",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Noodle.html#NParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "NParser",
          "package": "noodle",
          "partial": "NParser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#t:NParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "absLit",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char a -\u003e GParser (PosSt ()) Char (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#absLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "absLit",
          "normalized": "GParser(PosSt())Char a-\u003eGParser(PosSt())Char(Literal a)",
          "package": "noodle",
          "partial": "Lit",
          "signature": "GParser(PosSt())Char a-\u003eGParser(PosSt())Char(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:absLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "block",
          "package": "noodle",
          "signature": "NParser a -\u003e NParser a",
          "source": "src/Language-Noodle-Parsing-Noodle.html#block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "block",
          "normalized": "NParser a-\u003eNParser a",
          "package": "noodle",
          "signature": "NParser a-\u003eNParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "clause",
          "package": "noodle",
          "signature": "NParser a -\u003e NParser b -\u003e NParser (a, b)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#clause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "clause",
          "normalized": "NParser a-\u003eNParser b-\u003eNParser(a,b)",
          "package": "noodle",
          "signature": "NParser a-\u003eNParser b-\u003eNParser(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "comment",
          "package": "noodle",
          "signature": "NParser String",
          "source": "src/Language-Noodle-Parsing-Noodle.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "comment",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "comp",
          "package": "noodle",
          "signature": "NParser Comp",
          "source": "src/Language-Noodle-Parsing-Noodle.html#comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "comp",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "decl",
          "package": "noodle",
          "signature": "NParser Decl",
          "source": "src/Language-Noodle-Parsing-Noodle.html#decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "decl",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "decls",
          "package": "noodle",
          "signature": "NParser Decls",
          "source": "src/Language-Noodle-Parsing-Noodle.html#decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "decls",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "expr",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char Expr",
          "source": "src/Language-Noodle-Parsing-Noodle.html#expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "expr",
          "normalized": "GParser(PosSt())Char Expr",
          "package": "noodle",
          "signature": "GParser(PosSt())Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprApp",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char Expr",
          "source": "src/Language-Noodle-Parsing-Noodle.html#exprApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprApp",
          "normalized": "GParser(PosSt())Char Expr",
          "package": "noodle",
          "partial": "App",
          "signature": "GParser(PosSt())Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:exprApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprLit",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char Expr",
          "source": "src/Language-Noodle-Parsing-Noodle.html#exprLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprLit",
          "normalized": "GParser(PosSt())Char Expr",
          "package": "noodle",
          "partial": "Lit",
          "signature": "GParser(PosSt())Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:exprLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprOp",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char Expr",
          "source": "src/Language-Noodle-Parsing-Noodle.html#exprOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "exprOp",
          "normalized": "GParser(PosSt())Char Expr",
          "package": "noodle",
          "partial": "Op",
          "signature": "GParser(PosSt())Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:exprOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "ident",
          "package": "noodle",
          "signature": "NParser String",
          "source": "src/Language-Noodle-Parsing-Noodle.html#ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "ident",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "identifier",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "identifier",
          "normalized": "GParser(PosSt())Char(Literal a)",
          "package": "noodle",
          "signature": "GParser(PosSt())Char(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "isReserved",
          "package": "noodle",
          "signature": "String -\u003e Bool",
          "source": "src/Language-Noodle-Parsing-Noodle.html#isReserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "isReserved",
          "normalized": "String-\u003eBool",
          "package": "noodle",
          "partial": "Reserved",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:isReserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "lBrace",
          "package": "noodle",
          "signature": "NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#lBrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "lBrace",
          "normalized": "NParser()",
          "package": "noodle",
          "partial": "Brace",
          "signature": "NParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:lBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "lParen",
          "package": "noodle",
          "signature": "NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#lParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "lParen",
          "normalized": "NParser()",
          "package": "noodle",
          "partial": "Paren",
          "signature": "NParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:lParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "literal",
          "package": "noodle",
          "signature": "NParser a -\u003e NParser (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "literal",
          "normalized": "NParser a-\u003eNParser(Literal a)",
          "package": "noodle",
          "signature": "NParser a-\u003eNParser(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "modRef",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char Expr",
          "source": "src/Language-Noodle-Parsing-Noodle.html#modRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "modRef",
          "normalized": "GParser(PosSt())Char Expr",
          "package": "noodle",
          "partial": "Ref",
          "signature": "GParser(PosSt())Char Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:modRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "notcode",
          "package": "noodle",
          "signature": "NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#notcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "notcode",
          "normalized": "NParser()",
          "package": "noodle",
          "signature": "NParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:notcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "number",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "number",
          "normalized": "GParser(PosSt())Char(Literal a)",
          "package": "noodle",
          "signature": "GParser(PosSt())Char(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "numeric",
          "package": "noodle",
          "signature": "NParser String",
          "source": "src/Language-Noodle-Parsing-Noodle.html#numeric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "numeric",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "opChar",
          "package": "noodle",
          "signature": "NParser Char",
          "source": "src/Language-Noodle-Parsing-Noodle.html#opChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "opChar",
          "package": "noodle",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:opChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "opChars",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char [Char]",
          "source": "src/Language-Noodle-Parsing-Noodle.html#opChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "opChars",
          "normalized": "GParser(PosSt())Char[Char]",
          "package": "noodle",
          "partial": "Chars",
          "signature": "GParser(PosSt())Char[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:opChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "oper",
          "package": "noodle",
          "signature": "NParser String",
          "source": "src/Language-Noodle-Parsing-Noodle.html#oper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "oper",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:oper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "paren",
          "package": "noodle",
          "signature": "GParser (PosSt ()) Char a -\u003e GParser (PosSt ()) Char (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#paren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "paren",
          "normalized": "GParser(PosSt())Char a-\u003eGParser(PosSt())Char(Literal a)",
          "package": "noodle",
          "signature": "GParser(PosSt())Char a-\u003eGParser(PosSt())Char(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:paren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "pattern",
          "package": "noodle",
          "signature": "NParser Pattern",
          "source": "src/Language-Noodle-Parsing-Noodle.html#pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "pattern",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "prodLit",
          "package": "noodle",
          "signature": "NParser a -\u003e NParser (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#prodLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "prodLit",
          "normalized": "NParser a-\u003eNParser(Literal a)",
          "package": "noodle",
          "partial": "Lit",
          "signature": "NParser a-\u003eNParser(Literal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:prodLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "rBrace",
          "package": "noodle",
          "signature": "NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#rBrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "rBrace",
          "normalized": "NParser()",
          "package": "noodle",
          "partial": "Brace",
          "signature": "NParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:rBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "rParen",
          "package": "noodle",
          "signature": "NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#rParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "rParen",
          "normalized": "NParser()",
          "package": "noodle",
          "partial": "Paren",
          "signature": "NParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:rParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "reserved",
          "package": "noodle",
          "signature": "String -\u003e NParser ()",
          "source": "src/Language-Noodle-Parsing-Noodle.html#reserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "reserved",
          "normalized": "String-\u003eNParser()",
          "package": "noodle",
          "signature": "String-\u003eNParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "stringLit",
          "package": "noodle",
          "signature": "NParser (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#stringLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "stringLit",
          "package": "noodle",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:stringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "symbLit",
          "package": "noodle",
          "signature": "NParser (Literal a)",
          "source": "src/Language-Noodle-Parsing-Noodle.html#symbLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "symbLit",
          "package": "noodle",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:symbLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "topDecls",
          "package": "noodle",
          "signature": "NParser Decls",
          "source": "src/Language-Noodle-Parsing-Noodle.html#topDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Noodle",
          "module": "Language.Noodle.Parsing.Noodle",
          "name": "topDecls",
          "package": "noodle",
          "partial": "Decls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Noodle.html#v:topDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "Positional",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Positional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "Positional",
          "package": "noodle",
          "partial": "Positional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "PosParser",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Positional.html#PosParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "PosParser",
          "package": "noodle",
          "partial": "Pos Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#t:PosParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "Position",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-Positional.html#Position",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "Position",
          "package": "noodle",
          "partial": "Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "getPos",
          "package": "noodle",
          "signature": "PosParser st tok Position",
          "source": "src/Language-Noodle-Parsing-Positional.html#getPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "getPos",
          "package": "noodle",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:getPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "getSt",
          "package": "noodle",
          "signature": "PosParser st tok st",
          "source": "src/Language-Noodle-Parsing-Positional.html#getSt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "getSt",
          "package": "noodle",
          "partial": "St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:getSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "incLine",
          "package": "noodle",
          "signature": "PosParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Positional.html#incLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "incLine",
          "normalized": "PosParser a b()",
          "package": "noodle",
          "partial": "Line",
          "signature": "PosParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:incLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "incPos",
          "package": "noodle",
          "signature": "PosParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Positional.html#incPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "incPos",
          "normalized": "PosParser a b()",
          "package": "noodle",
          "partial": "Pos",
          "signature": "PosParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:incPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "modSt",
          "package": "noodle",
          "signature": "(st -\u003e st) -\u003e PosParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Positional.html#modSt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "modSt",
          "normalized": "(a-\u003ea)-\u003ePosParser a b()",
          "package": "noodle",
          "partial": "St",
          "signature": "(st-\u003est)-\u003ePosParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:modSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "putSt",
          "package": "noodle",
          "signature": "st -\u003e PosParser st tok ()",
          "source": "src/Language-Noodle-Parsing-Positional.html#putSt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "putSt",
          "normalized": "a-\u003ePosParser a b()",
          "package": "noodle",
          "partial": "St",
          "signature": "st-\u003ePosParser st tok()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:putSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.Positional",
          "name": "startPos",
          "package": "noodle",
          "signature": "Position",
          "source": "src/Language-Noodle-Parsing-Positional.html#startPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing Positional",
          "module": "Language.Noodle.Parsing.Positional",
          "name": "startPos",
          "package": "noodle",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-Positional.html#v:startPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "String",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-String.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "String",
          "package": "noodle",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "Parser",
          "package": "noodle",
          "source": "src/Language-Noodle-Parsing-String.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "Parser",
          "package": "noodle",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "alphaLower",
          "package": "noodle",
          "signature": "Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#alphaLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "alphaLower",
          "package": "noodle",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:alphaLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "alphaUpper",
          "package": "noodle",
          "signature": "Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#alphaUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "alphaUpper",
          "package": "noodle",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:alphaUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "char",
          "package": "noodle",
          "signature": "Char -\u003e Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "char",
          "normalized": "Char-\u003eParser a Char",
          "package": "noodle",
          "signature": "Char-\u003eParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "digit",
          "package": "noodle",
          "signature": "Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#digit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "digit",
          "package": "noodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "oneOf",
          "package": "noodle",
          "signature": "[Char] -\u003e Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "oneOf",
          "normalized": "[Char]-\u003eParser a Char",
          "package": "noodle",
          "partial": "Of",
          "signature": "[Char]-\u003eParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "satisfy",
          "package": "noodle",
          "signature": "(Char -\u003e Bool) -\u003e Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#satisfy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eParser a Char",
          "package": "noodle",
          "signature": "(Char-\u003eBool)-\u003eParser st Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "string",
          "package": "noodle",
          "signature": "String -\u003e Parser st String",
          "source": "src/Language-Noodle-Parsing-String.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "string",
          "normalized": "String-\u003eParser a String",
          "package": "noodle",
          "signature": "String-\u003eParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "whiteChar",
          "package": "noodle",
          "signature": "Parser st Char",
          "source": "src/Language-Noodle-Parsing-String.html#whiteChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "whiteChar",
          "package": "noodle",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:whiteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Parsing.String",
          "name": "whiteSpace",
          "package": "noodle",
          "signature": "Parser st String",
          "source": "src/Language-Noodle-Parsing-String.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Parsing String",
          "module": "Language.Noodle.Parsing.String",
          "name": "whiteSpace",
          "package": "noodle",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Parsing-String.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Syntax",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Syntax",
          "package": "noodle",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Comp",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Comp",
          "package": "noodle",
          "partial": "Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Decl",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Decl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Decl",
          "package": "noodle",
          "partial": "Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Decls",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Decls",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Decls",
          "package": "noodle",
          "partial": "Decls",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Expr",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Expr",
          "package": "noodle",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Literal",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Literal",
          "package": "noodle",
          "partial": "Literal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Pattern",
          "package": "noodle",
          "source": "src/Language-Noodle-Syntax.html#Pattern",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Pattern",
          "package": "noodle",
          "partial": "Pattern",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Abs",
          "package": "noodle",
          "signature": "Abs a",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Abs",
          "package": "noodle",
          "partial": "Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Decls",
          "package": "noodle",
          "signature": "Decls",
          "source": "src/Language-Noodle-Syntax.html#Decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Decls",
          "package": "noodle",
          "partial": "Decls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "ExprApp",
          "package": "noodle",
          "signature": "ExprApp Expr Expr",
          "source": "src/Language-Noodle-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "ExprApp",
          "package": "noodle",
          "partial": "Expr App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:ExprApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "ExprComp",
          "package": "noodle",
          "signature": "ExprComp Expr",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "ExprComp",
          "package": "noodle",
          "partial": "Expr Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:ExprComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "ExprOp",
          "package": "noodle",
          "signature": "ExprOp Expr String Expr",
          "source": "src/Language-Noodle-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "ExprOp",
          "package": "noodle",
          "partial": "Expr Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:ExprOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Handler",
          "package": "noodle",
          "signature": "Handler Comp Comp",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Handler",
          "package": "noodle",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Ident",
          "package": "noodle",
          "signature": "Ident String",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Ident",
          "package": "noodle",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "In",
          "package": "noodle",
          "signature": "In Decls Comp",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "In",
          "package": "noodle",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "IntFun",
          "package": "noodle",
          "signature": "IntFun Pattern String Comp",
          "source": "src/Language-Noodle-Syntax.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "IntFun",
          "package": "noodle",
          "partial": "Int Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:IntFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "IntMod",
          "package": "noodle",
          "signature": "IntMod String Decls",
          "source": "src/Language-Noodle-Syntax.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "IntMod",
          "package": "noodle",
          "partial": "Int Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:IntMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "IntOp",
          "package": "noodle",
          "signature": "IntOp Pattern String Pattern Comp",
          "source": "src/Language-Noodle-Syntax.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "IntOp",
          "package": "noodle",
          "partial": "Int Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:IntOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "IntThunk",
          "package": "noodle",
          "signature": "IntThunk String Comp",
          "source": "src/Language-Noodle-Syntax.html#Decl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "IntThunk",
          "package": "noodle",
          "partial": "Int Thunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:IntThunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Lit",
          "package": "noodle",
          "signature": "Lit (Literal Comp)",
          "source": "src/Language-Noodle-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Lit",
          "package": "noodle",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "ModRef",
          "package": "noodle",
          "signature": "ModRef String",
          "source": "src/Language-Noodle-Syntax.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "ModRef",
          "package": "noodle",
          "partial": "Mod Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:ModRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Numb",
          "package": "noodle",
          "signature": "Numb Integer",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Numb",
          "package": "noodle",
          "partial": "Numb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Numb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Paren",
          "package": "noodle",
          "signature": "Paren a",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Paren",
          "package": "noodle",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Paren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Pat",
          "package": "noodle",
          "signature": "Pat (Literal Pattern)",
          "source": "src/Language-Noodle-Syntax.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Pat",
          "package": "noodle",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "PatMatch",
          "package": "noodle",
          "signature": "PatMatch Pattern Comp Comp",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "PatMatch",
          "package": "noodle",
          "partial": "Pat Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:PatMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "ProdLit",
          "package": "noodle",
          "signature": "ProdLit a a [a]",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "ProdLit",
          "normalized": "ProdLit a a[a]",
          "package": "noodle",
          "partial": "Prod Lit",
          "signature": "ProdLit a a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:ProdLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "StrLit",
          "package": "noodle",
          "signature": "StrLit String",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "StrLit",
          "package": "noodle",
          "partial": "Str Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:StrLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "Symb",
          "package": "noodle",
          "signature": "Symb String",
          "source": "src/Language-Noodle-Syntax.html#Literal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "Symb",
          "package": "noodle",
          "partial": "Symb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:Symb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "With",
          "package": "noodle",
          "signature": "With Comp Comp",
          "source": "src/Language-Noodle-Syntax.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "With",
          "package": "noodle",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "showClause",
          "package": "noodle",
          "signature": "(String, String) -\u003e String",
          "source": "src/Language-Noodle-Syntax.html#showClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "showClause",
          "normalized": "(String,String)-\u003eString",
          "package": "noodle",
          "partial": "Clause",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:showClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Noodle.Syntax",
          "name": "toDecList",
          "package": "noodle",
          "signature": "[Decl]",
          "source": "src/Language-Noodle-Syntax.html#Decls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Noodle Syntax",
          "module": "Language.Noodle.Syntax",
          "name": "toDecList",
          "normalized": "[Decl]",
          "package": "noodle",
          "partial": "Dec List",
          "signature": "[Decl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/noodle/docs/Language-Noodle-Syntax.html#v:toDecList"
      }
    }
  ]
]