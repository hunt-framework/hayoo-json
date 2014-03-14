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
        "word": "buildwrapper"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAPI entry point, with all exposed methods\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "API",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-API.html",
          "type": "module"
        },
        "index": {
          "description": "API entry point with all exposed methods",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "API",
          "package": "buildwrapper",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun cabal build\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build",
          "package": "buildwrapper",
          "signature": "Bool-\u003e WhichCabal-\u003e BuildWrapper (OpResult BuildResult)",
          "type": "function"
        },
        "index": {
          "description": "run cabal build",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build",
          "normalized": "Bool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "package": "buildwrapper",
          "signature": "Bool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild one source file in GHC\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build1",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe [NameDef]))",
          "type": "function"
        },
        "index": {
          "description": "build one source file in GHC",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build1",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe[NameDef]))",
          "package": "buildwrapper",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe[NameDef]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:build1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild one source file in GHC\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build1LongRunning",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe ()))",
          "type": "function"
        },
        "index": {
          "description": "build one source file in GHC",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "build1LongRunning",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe()))",
          "package": "buildwrapper",
          "partial": "Long Running",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:build1LongRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "clean",
          "package": "buildwrapper",
          "signature": "Bool-\u003e BuildWrapper Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "clean",
          "normalized": "Bool-\u003eBuildWrapper Bool",
          "package": "buildwrapper",
          "signature": "Bool-\u003eBuildWrapper Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:clean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclean imports in a source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "cleanImports",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Bool-\u003e Maybe String-\u003e BuildWrapper (OpResult [ImportClean])",
          "type": "function"
        },
        "index": {
          "description": "clean imports in source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "cleanImports",
          "normalized": "FilePath-\u003eBool-\u003eMaybe String-\u003eBuildWrapper(OpResult[ImportClean])",
          "package": "buildwrapper",
          "partial": "Imports",
          "signature": "FilePath-\u003eBool-\u003eMaybe String-\u003eBuildWrapper(OpResult[ImportClean])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:cleanImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun cabal configure\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "configure",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003e BuildWrapper (OpResult Bool)",
          "type": "function"
        },
        "index": {
          "description": "run cabal configure",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "configure",
          "normalized": "WhichCabal-\u003eBuildWrapper(OpResult Bool)",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003eBuildWrapper(OpResult Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:configure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate usage information files\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "generateUsage",
          "package": "buildwrapper",
          "signature": "Bool-\u003e String-\u003e BuildWrapper (OpResult (Maybe [FilePath]))",
          "type": "function"
        },
        "index": {
          "description": "generate usage information files",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "generateUsage",
          "normalized": "Bool-\u003eString-\u003eBuildWrapper(OpResult(Maybe[FilePath]))",
          "package": "buildwrapper",
          "partial": "Usage",
          "signature": "Bool-\u003eString-\u003eBuildWrapper(OpResult(Maybe[FilePath]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:generateUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget haskell-src-exts commented AST for source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getAST",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe (ParseResult (Module SrcSpanInfo, [Comment]))))",
          "type": "function"
        },
        "index": {
          "description": "get haskell-src-exts commented AST for source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getAST",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe(ParseResult(Module SrcSpanInfo,[Comment]))))",
          "package": "buildwrapper",
          "partial": "AST",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe(ParseResult(Module SrcSpanInfo,[Comment]))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the build flags for a source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getBuildFlags",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult BuildFlags)",
          "type": "function"
        },
        "index": {
          "description": "get the build flags for source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getBuildFlags",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult BuildFlags)",
          "package": "buildwrapper",
          "partial": "Build Flags",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult BuildFlags)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getBuildFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget cabal components\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getCabalComponents",
          "package": "buildwrapper",
          "signature": "BuildWrapper (OpResult [CabalComponent])",
          "source": "src/Language-Haskell-BuildWrapper-API.html#getCabalComponents",
          "type": "function"
        },
        "index": {
          "description": "get cabal components",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getCabalComponents",
          "normalized": "BuildWrapper(OpResult[CabalComponent])",
          "package": "buildwrapper",
          "partial": "Cabal Components",
          "signature": "BuildWrapper(OpResult[CabalComponent])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getCabalComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget cabal dependencies\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getCabalDependencies",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e BuildWrapper (OpResult [(FilePath, [CabalPackage])])",
          "source": "src/Language-Haskell-BuildWrapper-API.html#getCabalDependencies",
          "type": "function"
        },
        "index": {
          "description": "get cabal dependencies",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getCabalDependencies",
          "normalized": "FilePath-\u003eBuildWrapper(OpResult[(FilePath,[CabalPackage])])",
          "package": "buildwrapper",
          "partial": "Cabal Dependencies",
          "signature": "FilePath-\u003eBuildWrapper(OpResult[(FilePath,[CabalPackage])])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getCabalDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget GHC typechecked AST for source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getGHCAST",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe TypecheckedSource))",
          "type": "function"
        },
        "index": {
          "description": "get GHC typechecked AST for source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getGHCAST",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe TypecheckedSource))",
          "package": "buildwrapper",
          "partial": "GHCAST",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe TypecheckedSource))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getGHCAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget locals identifiers\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getLocals",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Int-\u003e Int-\u003e Int-\u003e Int-\u003e Maybe String-\u003e BuildWrapper (OpResult [ThingAtPoint])",
          "type": "function"
        },
        "index": {
          "description": "get locals identifiers",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getLocals",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eMaybe String-\u003eBuildWrapper(OpResult[ThingAtPoint])",
          "package": "buildwrapper",
          "partial": "Locals",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eMaybe String-\u003eBuildWrapper(OpResult[ThingAtPoint])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getLocals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all names in scope (GHC API)                \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getNamesInScope",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe [String]))",
          "type": "function"
        },
        "index": {
          "description": "get all names in scope GHC API",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getNamesInScope",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe[String]))",
          "package": "buildwrapper",
          "partial": "Names In Scope",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getNamesInScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getOccurrences",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e Maybe String-\u003e BuildWrapper (OpResult [TokenDef])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getOccurrences",
          "normalized": "FilePath-\u003eString-\u003eMaybe String-\u003eBuildWrapper(OpResult[TokenDef])",
          "package": "buildwrapper",
          "partial": "Occurrences",
          "signature": "FilePath-\u003eString-\u003eMaybe String-\u003eBuildWrapper(OpResult[TokenDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget outline for source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getOutline",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult OutlineResult)",
          "type": "function"
        },
        "index": {
          "description": "get outline for source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getOutline",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult OutlineResult)",
          "package": "buildwrapper",
          "partial": "Outline",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult OutlineResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getOutline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget thing at point\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getThingAtPoint",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Int-\u003e Int-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe ThingAtPoint))",
          "type": "function"
        },
        "index": {
          "description": "get thing at point",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getThingAtPoint",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe ThingAtPoint))",
          "package": "buildwrapper",
          "partial": "Thing At Point",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe ThingAtPoint))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getThingAtPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all occurrences of a token in the file\n\u003c/p\u003e\u003cp\u003eget lexer token types for source file \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getTokenTypes",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e BuildWrapper (OpResult [TokenDef])",
          "type": "function"
        },
        "index": {
          "description": "get all occurrences of token in the file get lexer token types for source file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "getTokenTypes",
          "normalized": "FilePath-\u003eBuildWrapper(OpResult[TokenDef])",
          "package": "buildwrapper",
          "partial": "Token Types",
          "signature": "FilePath-\u003eBuildWrapper(OpResult[TokenDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:getTokenTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epreprocess a file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "preproc",
          "package": "buildwrapper",
          "signature": "BuildFlags-\u003e FilePath-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "preprocess file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "preproc",
          "normalized": "BuildFlags-\u003eFilePath-\u003eIO String",
          "package": "buildwrapper",
          "signature": "BuildFlags-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:preproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecopy all files from the project to the temporary folder\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "synchronize",
          "package": "buildwrapper",
          "signature": "Bool-\u003e BuildWrapper (OpResult ([FilePath], [FilePath]))",
          "type": "function"
        },
        "index": {
          "description": "copy all files from the project to the temporary folder",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "synchronize",
          "normalized": "Bool-\u003eBuildWrapper(OpResult([FilePath],[FilePath]))",
          "package": "buildwrapper",
          "signature": "Bool-\u003eBuildWrapper(OpResult([FilePath],[FilePath]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:synchronize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esynchronize one file only\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "synchronize1",
          "package": "buildwrapper",
          "signature": "Bool-\u003e FilePath-\u003e BuildWrapper (Maybe FilePath)",
          "type": "function"
        },
        "index": {
          "description": "synchronize one file only",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "synchronize1",
          "normalized": "Bool-\u003eFilePath-\u003eBuildWrapper(Maybe FilePath)",
          "package": "buildwrapper",
          "signature": "Bool-\u003eFilePath-\u003eBuildWrapper(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:synchronize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform an action on the GHC AST\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "withGHCAST",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e (FilePath -\u003e FilePath -\u003e String -\u003e [String] -\u003e IO a)-\u003e BuildWrapper (OpResult (Maybe a))",
          "type": "function"
        },
        "index": {
          "description": "perform an action on the GHC AST",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "withGHCAST",
          "normalized": "FilePath-\u003eMaybe String-\u003e(FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO a)-\u003eBuildWrapper(OpResult(Maybe a))",
          "package": "buildwrapper",
          "partial": "GHCAST",
          "signature": "FilePath-\u003eMaybe String-\u003e(FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO a)-\u003eBuildWrapper(OpResult(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:withGHCAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "withGHCAST'",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e (FilePath -\u003e FilePath -\u003e String -\u003e [String] -\u003e IO (OpResult (Maybe a)))-\u003e BuildWrapper (OpResult (Maybe a))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "withGHCAST'",
          "normalized": "FilePath-\u003eMaybe String-\u003e(FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe a)))-\u003eBuildWrapper(OpResult(Maybe a))",
          "package": "buildwrapper",
          "partial": "GHCAST'",
          "signature": "FilePath-\u003eMaybe String-\u003e(FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe a)))-\u003eBuildWrapper(OpResult(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:withGHCAST-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite contents to temporary file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "write",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e BuildWrapper ()",
          "type": "function"
        },
        "index": {
          "description": "write contents to temporary file",
          "hierarchy": "Language Haskell BuildWrapper API",
          "module": "Language.Haskell.BuildWrapper.API",
          "name": "write",
          "normalized": "FilePath-\u003eString-\u003eBuildWrapper()",
          "package": "buildwrapper",
          "signature": "FilePath-\u003eString-\u003eBuildWrapper()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-API.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types, State Monad, utility functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Base",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Data types State Monad utility functions",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Base",
          "package": "buildwrapper",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation of a note/error (lines and columns start at 1)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWLocation",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "data"
        },
        "index": {
          "description": "location of note error lines and columns start at",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWLocation",
          "package": "buildwrapper",
          "partial": "BWLocation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BWLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea note on a source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNote",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNote",
          "type": "data"
        },
        "index": {
          "description": "note on source file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNote",
          "package": "buildwrapper",
          "partial": "BWNote",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BWNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus of notes: error or warning\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNoteStatus",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNoteStatus",
          "type": "data"
        },
        "index": {
          "description": "status of notes error or warning",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNoteStatus",
          "package": "buildwrapper",
          "partial": "BWNote Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BWNoteStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild flags for a specific file        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildFlags",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "data"
        },
        "index": {
          "description": "build flags for specific file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildFlags",
          "package": "buildwrapper",
          "partial": "Build Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BuildFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult: success + files impacted\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildResult",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildResult",
          "type": "data"
        },
        "index": {
          "description": "result success files impacted",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildResult",
          "package": "buildwrapper",
          "partial": "Build Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BuildResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState type\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapper",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapper",
          "type": "type"
        },
        "index": {
          "description": "State type",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapper",
          "package": "buildwrapper",
          "partial": "Build Wrapper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BuildWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe state we keep\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapperState",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "data"
        },
        "index": {
          "description": "the state we keep",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapperState",
          "package": "buildwrapper",
          "partial": "Build Wrapper State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:BuildWrapperState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomponent in cabal file    \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalComponent",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "data"
        },
        "index": {
          "description": "component in cabal file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalComponent",
          "package": "buildwrapper",
          "partial": "Cabal Component",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:CabalComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea cabal package\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalPackage",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "data"
        },
        "index": {
          "description": "cabal package",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalPackage",
          "package": "buildwrapper",
          "partial": "Cabal Package",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:CabalPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefinition of export\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ExportDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "data"
        },
        "index": {
          "description": "definition of export",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ExportDef",
          "package": "buildwrapper",
          "partial": "Export Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ExportDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimport clean operation: the span of text to change, the new text\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportClean",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportClean",
          "type": "data"
        },
        "index": {
          "description": "import clean operation the span of text to change the new text",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportClean",
          "package": "buildwrapper",
          "partial": "Import Clean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ImportClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefinition of an import statement     \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "data"
        },
        "index": {
          "description": "definition of an import statement",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportDef",
          "package": "buildwrapper",
          "partial": "Import Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ImportDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of import/export directive    \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportExportType",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "data"
        },
        "index": {
          "description": "Type of import export directive",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportExportType",
          "package": "buildwrapper",
          "partial": "Import Export Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ImportExportType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefinition of an import element   \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportSpecDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "data"
        },
        "index": {
          "description": "definition of an import element",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportSpecDef",
          "package": "buildwrapper",
          "partial": "Import Spec Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ImportSpecDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation inside a file, the file is known and doesn't need to be repeated \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileLoc",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileLoc",
          "type": "data"
        },
        "index": {
          "description": "Location inside file the file is known and doesn need to be repeated",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileLoc",
          "package": "buildwrapper",
          "partial": "In File Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:InFileLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpan inside a file, the file is known and doesn't need to be repeated \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileSpan",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileSpan",
          "type": "data"
        },
        "index": {
          "description": "Span inside file the file is known and doesn need to be repeated",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileSpan",
          "package": "buildwrapper",
          "partial": "In File Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:InFileSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einformation about files to load (single file or multiple files)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "LoadContents",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "data"
        },
        "index": {
          "description": "information about files to load single file or multiple files",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "LoadContents",
          "package": "buildwrapper",
          "partial": "Load Contents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:LoadContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefinition of a name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "NameDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#NameDef",
          "type": "data"
        },
        "index": {
          "description": "definition of name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "NameDef",
          "package": "buildwrapper",
          "partial": "Name Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:NameDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimple type encapsulating the fact the operations return along with notes generated on files        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OpResult",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OpResult",
          "type": "type"
        },
        "index": {
          "description": "simple type encapsulating the fact the operations return along with notes generated on files",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OpResult",
          "package": "buildwrapper",
          "partial": "Op Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:OpResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelement of the outline result\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "data"
        },
        "index": {
          "description": "element of the outline result",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDef",
          "package": "buildwrapper",
          "partial": "Outline Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:OutlineDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of elements for the outline        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDefType",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "data"
        },
        "index": {
          "description": "type of elements for the outline",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDefType",
          "package": "buildwrapper",
          "partial": "Outline Def Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:OutlineDefType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomplete result for outline    \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineResult",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineResult",
          "type": "data"
        },
        "index": {
          "description": "complete result for outline",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineResult",
          "package": "buildwrapper",
          "partial": "Outline Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:OutlineResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einformation about the thing at a given point in the source   \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ThingAtPoint",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "data"
        },
        "index": {
          "description": "information about the thing at given point in the source",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ThingAtPoint",
          "package": "buildwrapper",
          "partial": "Thing At Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:ThingAtPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexer token\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "TokenDef",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#TokenDef",
          "type": "data"
        },
        "index": {
          "description": "Lexer token",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "TokenDef",
          "package": "buildwrapper",
          "partial": "Token Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:TokenDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage structure                \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Usage",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "data"
        },
        "index": {
          "description": "Usage structure",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Usage",
          "package": "buildwrapper",
          "partial": "Usage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:Usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity settings                \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Verbosity",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Verbosity",
          "type": "data"
        },
        "index": {
          "description": "Verbosity settings",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Verbosity",
          "package": "buildwrapper",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult for building one file: success + names\ndata Build1Result=Build1Result Bool [NameDef]\n        deriving (Show,Read,Eq)\n\u003c/p\u003e\u003cp\u003einstance ToJSON Build1Result  where\n    toJSON (Build1Result b ns)= object [\u003ca\u003er\u003c/a\u003e .= b, \u003ca\u003ens\u003c/a\u003e .= map toJSON ns]       \n\u003c/p\u003e\u003cp\u003einstance FromJSON Build1Result where\n    parseJSON (Object v) =Build1Result \u003ca\u003e$\u003c/a\u003e\n                         v .: \u003ca\u003er\u003c/a\u003e \u003ca\u003e*\u003c/a\u003e\n                         v .: \u003ca\u003ens\u003c/a\u003e \n    parseJSON _= mzero    \n\u003c/p\u003e\u003cp\u003ewhich cabal file to use operations\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "WhichCabal",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#WhichCabal",
          "type": "data"
        },
        "index": {
          "description": "result for building one file success names data Build1Result Build1Result Bool NameDef deriving Show Read Eq instance ToJSON Build1Result where toJSON Build1Result ns object ns map toJSON ns instance FromJSON Build1Result where parseJSON Object Build1Result ns parseJSON mzero which cabal file to use operations",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "WhichCabal",
          "package": "buildwrapper",
          "partial": "Which Cabal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#t:WhichCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWError",
          "package": "buildwrapper",
          "signature": "BWError",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNoteStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWError",
          "package": "buildwrapper",
          "partial": "BWError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BWError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWLocation",
          "package": "buildwrapper",
          "signature": "BWLocation",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWLocation",
          "package": "buildwrapper",
          "partial": "BWLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BWLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNote",
          "package": "buildwrapper",
          "signature": "BWNote",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWNote",
          "package": "buildwrapper",
          "partial": "BWNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BWNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWWarning",
          "package": "buildwrapper",
          "signature": "BWWarning",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNoteStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BWWarning",
          "package": "buildwrapper",
          "partial": "BWWarning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BWWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildFlags",
          "package": "buildwrapper",
          "signature": "BuildFlags",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildFlags",
          "package": "buildwrapper",
          "partial": "Build Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BuildFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildResult",
          "package": "buildwrapper",
          "signature": "BuildResult Bool [FilePath]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildResult",
          "normalized": "BuildResult Bool[FilePath]",
          "package": "buildwrapper",
          "partial": "Build Result",
          "signature": "BuildResult Bool[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BuildResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapperState",
          "package": "buildwrapper",
          "signature": "BuildWrapperState",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "BuildWrapperState",
          "package": "buildwrapper",
          "partial": "Build Wrapper State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:BuildWrapperState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecutable\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCExecutable",
          "package": "buildwrapper",
          "signature": "CCExecutable",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "executable",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCExecutable",
          "package": "buildwrapper",
          "partial": "CCExecutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:CCExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elibrary\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCLibrary",
          "package": "buildwrapper",
          "signature": "CCLibrary",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "library",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCLibrary",
          "package": "buildwrapper",
          "partial": "CCLibrary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:CCLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest suite\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCTestSuite",
          "package": "buildwrapper",
          "signature": "CCTestSuite",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "test suite",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CCTestSuite",
          "package": "buildwrapper",
          "partial": "CCTest Suite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:CCTestSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalPackage",
          "package": "buildwrapper",
          "signature": "CabalPackage",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "CabalPackage",
          "package": "buildwrapper",
          "partial": "Cabal Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:CabalPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Class",
          "package": "buildwrapper",
          "signature": "Class",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Class",
          "package": "buildwrapper",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Constructor",
          "package": "buildwrapper",
          "signature": "Constructor",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Constructor",
          "package": "buildwrapper",
          "partial": "Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Data",
          "package": "buildwrapper",
          "signature": "Data",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Data",
          "package": "buildwrapper",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Deafening",
          "package": "buildwrapper",
          "signature": "Deafening",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Deafening",
          "package": "buildwrapper",
          "partial": "Deafening",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Deafening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ExportDef",
          "package": "buildwrapper",
          "signature": "ExportDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ExportDef",
          "package": "buildwrapper",
          "partial": "Export Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ExportDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Family",
          "package": "buildwrapper",
          "signature": "Family",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Family",
          "package": "buildwrapper",
          "partial": "Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Field",
          "package": "buildwrapper",
          "signature": "Field",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Field",
          "package": "buildwrapper",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Function",
          "package": "buildwrapper",
          "signature": "Function",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Function",
          "package": "buildwrapper",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbs\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEAbs",
          "package": "buildwrapper",
          "signature": "IEAbs",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "function"
        },
        "index": {
          "description": "Abs",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEAbs",
          "package": "buildwrapper",
          "partial": "IEAbs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:IEAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereexport module\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEModule",
          "package": "buildwrapper",
          "signature": "IEModule",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "function"
        },
        "index": {
          "description": "reexport module",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEModule",
          "package": "buildwrapper",
          "partial": "IEModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:IEModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimport/export everything\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEThingAll",
          "package": "buildwrapper",
          "signature": "IEThingAll",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "function"
        },
        "index": {
          "description": "import export everything",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEThingAll",
          "package": "buildwrapper",
          "partial": "IEThing All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:IEThingAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especific import/export list\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEThingWith",
          "package": "buildwrapper",
          "signature": "IEThingWith",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "function"
        },
        "index": {
          "description": "specific import export list",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEThingWith",
          "package": "buildwrapper",
          "partial": "IEThing With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:IEThingWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVar\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEVar",
          "package": "buildwrapper",
          "signature": "IEVar",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportExportType",
          "type": "function"
        },
        "index": {
          "description": "Var",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "IEVar",
          "package": "buildwrapper",
          "partial": "IEVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:IEVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportClean",
          "package": "buildwrapper",
          "signature": "ImportClean",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportClean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportClean",
          "package": "buildwrapper",
          "partial": "Import Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ImportClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportDef",
          "package": "buildwrapper",
          "signature": "ImportDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportDef",
          "package": "buildwrapper",
          "partial": "Import Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ImportDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportSpecDef",
          "package": "buildwrapper",
          "signature": "ImportSpecDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ImportSpecDef",
          "package": "buildwrapper",
          "partial": "Import Spec Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ImportSpecDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileLoc",
          "package": "buildwrapper",
          "signature": "InFileLoc",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileLoc",
          "package": "buildwrapper",
          "partial": "In File Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:InFileLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileSpan",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "InFileSpan",
          "package": "buildwrapper",
          "partial": "In File Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:InFileSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Instance",
          "package": "buildwrapper",
          "signature": "Instance",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Instance",
          "package": "buildwrapper",
          "partial": "Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "MultipleFile",
          "package": "buildwrapper",
          "signature": "MultipleFile",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "MultipleFile",
          "package": "buildwrapper",
          "partial": "Multiple File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:MultipleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "NameDef",
          "package": "buildwrapper",
          "signature": "NameDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#NameDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "NameDef",
          "package": "buildwrapper",
          "partial": "Name Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:NameDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Normal",
          "package": "buildwrapper",
          "signature": "Normal",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Normal",
          "package": "buildwrapper",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDef",
          "package": "buildwrapper",
          "signature": "OutlineDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineDef",
          "package": "buildwrapper",
          "partial": "Outline Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:OutlineDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineResult",
          "package": "buildwrapper",
          "signature": "OutlineResult",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "OutlineResult",
          "package": "buildwrapper",
          "partial": "Outline Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:OutlineResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Pattern",
          "package": "buildwrapper",
          "signature": "Pattern",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Pattern",
          "package": "buildwrapper",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Silent",
          "package": "buildwrapper",
          "signature": "Silent",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Silent",
          "package": "buildwrapper",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "SingleFile",
          "package": "buildwrapper",
          "signature": "SingleFile",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "SingleFile",
          "package": "buildwrapper",
          "partial": "Single File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:SingleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse proper file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Source",
          "package": "buildwrapper",
          "signature": "Source",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#WhichCabal",
          "type": "function"
        },
        "index": {
          "description": "use proper file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Source",
          "package": "buildwrapper",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Splice",
          "package": "buildwrapper",
          "signature": "Splice",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Splice",
          "package": "buildwrapper",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Splice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Syn",
          "package": "buildwrapper",
          "signature": "Syn",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Syn",
          "package": "buildwrapper",
          "partial": "Syn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Syn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse temporary file that was saved in temp folder\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Target",
          "package": "buildwrapper",
          "signature": "Target",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#WhichCabal",
          "type": "function"
        },
        "index": {
          "description": "use temporary file that was saved in temp folder",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Target",
          "package": "buildwrapper",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ThingAtPoint",
          "package": "buildwrapper",
          "signature": "ThingAtPoint",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ThingAtPoint",
          "package": "buildwrapper",
          "partial": "Thing At Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ThingAtPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "TokenDef",
          "package": "buildwrapper",
          "signature": "TokenDef",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#TokenDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "TokenDef",
          "package": "buildwrapper",
          "partial": "Token Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:TokenDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Type",
          "package": "buildwrapper",
          "signature": "Type",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDefType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Type",
          "package": "buildwrapper",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Usage",
          "package": "buildwrapper",
          "signature": "Usage",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Usage",
          "package": "buildwrapper",
          "partial": "Usage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Verbose",
          "package": "buildwrapper",
          "signature": "Verbose",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "Verbose",
          "package": "buildwrapper",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:Verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflags for GHC\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfAst",
          "package": "buildwrapper",
          "signature": "[String]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "function"
        },
        "index": {
          "description": "flags for GHC",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfAst",
          "normalized": "[String]",
          "package": "buildwrapper",
          "partial": "Ast",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bfAst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomponent used to get flags, if known\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfComponent",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "function"
        },
        "index": {
          "description": "component used to get flags if known",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfComponent",
          "package": "buildwrapper",
          "partial": "Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bfComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodule name if known\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfModName",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "function"
        },
        "index": {
          "description": "module name if known",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfModName",
          "package": "buildwrapper",
          "partial": "Mod Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bfModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflags for preprocessor\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfPreproc",
          "package": "buildwrapper",
          "signature": "[String]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildFlags",
          "type": "function"
        },
        "index": {
          "description": "flags for preprocessor",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bfPreproc",
          "normalized": "[String]",
          "package": "buildwrapper",
          "partial": "Preproc",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bfPreproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumn\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlCol",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "description": "column",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlCol",
          "package": "buildwrapper",
          "partial": "Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwlCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend line\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlEndCol",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "description": "end line",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlEndCol",
          "package": "buildwrapper",
          "partial": "End Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwlEndCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend line\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlEndLine",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "description": "end line",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlEndLine",
          "package": "buildwrapper",
          "partial": "End Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwlEndLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlLine",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "description": "line",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlLine",
          "package": "buildwrapper",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwlLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource file \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlSrc",
          "package": "buildwrapper",
          "signature": "FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWLocation",
          "type": "function"
        },
        "index": {
          "description": "source file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwlSrc",
          "package": "buildwrapper",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhere the note is\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnLocation",
          "package": "buildwrapper",
          "signature": "BWLocation",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNote",
          "type": "function"
        },
        "index": {
          "description": "where the note is",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnLocation",
          "package": "buildwrapper",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwnLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus of the note\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnStatus",
          "package": "buildwrapper",
          "signature": "BWNoteStatus",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNote",
          "type": "function"
        },
        "index": {
          "description": "status of the note",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnStatus",
          "package": "buildwrapper",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwnStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emessage\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnTitle",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BWNote",
          "type": "function"
        },
        "index": {
          "description": "message",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "bwnTitle",
          "package": "buildwrapper",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:bwnTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the cabal component name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalComponentName",
          "package": "buildwrapper",
          "signature": "CabalComponent -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#cabalComponentName",
          "type": "function"
        },
        "index": {
          "description": "get the cabal component name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalComponentName",
          "normalized": "CabalComponent-\u003eString",
          "package": "buildwrapper",
          "partial": "Component Name",
          "signature": "CabalComponent-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cabalComponentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath of the project cabal file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalFile",
          "package": "buildwrapper",
          "signature": "FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "path of the project cabal file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalFile",
          "package": "buildwrapper",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflags to pass cabal\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalFlags",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "flags to pass cabal",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalFlags",
          "package": "buildwrapper",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cabalFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextra arguments to cabal configure\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalOpts",
          "package": "buildwrapper",
          "signature": "[String]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "extra arguments to cabal configure",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalOpts",
          "normalized": "[String]",
          "package": "buildwrapper",
          "partial": "Opts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cabalOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath to the cabal executable\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalPath",
          "package": "buildwrapper",
          "signature": "FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "path to the cabal executable",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cabalPath",
          "package": "buildwrapper",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cabalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full, canonicalized path of a source\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "canonicalizeFullPath",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e BuildWrapper FilePath",
          "type": "function"
        },
        "index": {
          "description": "get the full canonicalized path of source",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "canonicalizeFullPath",
          "normalized": "FilePath-\u003eBuildWrapper FilePath",
          "package": "buildwrapper",
          "partial": "Full Path",
          "signature": "FilePath-\u003eBuildWrapper FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:canonicalizeFullPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the test suite buildable\n\u003c/p\u003e\u003cp\u003eis the executable buildable\n\u003c/p\u003e\u003cp\u003eis the library buildable\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccBuildable",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "is the test suite buildable is the executable buildable is the library buildable",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccBuildable",
          "package": "buildwrapper",
          "partial": "Buildable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ccBuildable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecutable name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccExeName",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "executable name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccExeName",
          "package": "buildwrapper",
          "partial": "Exe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ccExeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest suite name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccTestName",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalComponent",
          "type": "function"
        },
        "index": {
          "description": "test suite name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ccTestName",
          "package": "buildwrapper",
          "partial": "Test Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ccTestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecopy a file from the normal folders to the temp folder\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "copyFromMain",
          "package": "buildwrapper",
          "signature": "Bool-\u003e FilePath-\u003e BuildWrapper (Maybe FilePath)",
          "type": "function"
        },
        "index": {
          "description": "copy file from the normal folders to the temp folder",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "copyFromMain",
          "normalized": "Bool-\u003eFilePath-\u003eBuildWrapper(Maybe FilePath)",
          "package": "buildwrapper",
          "partial": "From Main",
          "signature": "Bool-\u003eFilePath-\u003eBuildWrapper(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:copyFromMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomponents in the cabal file that use this package\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpDependent",
          "package": "buildwrapper",
          "signature": "[CabalComponent]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "description": "components in the cabal file that use this package",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpDependent",
          "normalized": "[CabalComponent]",
          "package": "buildwrapper",
          "partial": "Dependent",
          "signature": "[CabalComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cpDependent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the package exposed or hidden\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpExposed",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "description": "is the package exposed or hidden",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpExposed",
          "package": "buildwrapper",
          "partial": "Exposed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cpExposed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall modules. We keep all modules so that we can try to open non exposed but imported modules directly\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpModules",
          "package": "buildwrapper",
          "signature": "[String]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "description": "all modules We keep all modules so that we can try to open non exposed but imported modules directly",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpModules",
          "normalized": "[String]",
          "package": "buildwrapper",
          "partial": "Modules",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cpModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of package\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpName",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "description": "name of package",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cpName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eversion\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpVersion",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#CabalPackage",
          "type": "function"
        },
        "index": {
          "description": "version",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "cpVersion",
          "package": "buildwrapper",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:cpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete generated files  \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteGenerated",
          "package": "buildwrapper",
          "signature": "BuildWrapper ()",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#deleteGenerated",
          "type": "function"
        },
        "index": {
          "description": "delete generated files",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteGenerated",
          "normalized": "BuildWrapper()",
          "package": "buildwrapper",
          "partial": "Generated",
          "signature": "BuildWrapper()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:deleteGenerated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete files in temp folder but not in real folder anymore\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteGhosts",
          "package": "buildwrapper",
          "signature": "[FilePath] -\u003e BuildWrapper [FilePath]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#deleteGhosts",
          "type": "function"
        },
        "index": {
          "description": "delete files in temp folder but not in real folder anymore",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteGhosts",
          "normalized": "[FilePath]-\u003eBuildWrapper[FilePath]",
          "package": "buildwrapper",
          "partial": "Ghosts",
          "signature": "[FilePath]-\u003eBuildWrapper[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:deleteGhosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete all temporary files\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteTemp",
          "package": "buildwrapper",
          "signature": "BuildWrapper ()",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#deleteTemp",
          "type": "function"
        },
        "index": {
          "description": "delete all temporary files",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "deleteTemp",
          "normalized": "BuildWrapper()",
          "package": "buildwrapper",
          "partial": "Temp",
          "signature": "BuildWrapper()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:deleteTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echildren (constructor names, etc.)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eChildren",
          "package": "buildwrapper",
          "signature": "[Text]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "function"
        },
        "index": {
          "description": "children constructor names etc",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eChildren",
          "normalized": "[Text]",
          "package": "buildwrapper",
          "partial": "Children",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:eChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation in source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eLoc",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "function"
        },
        "index": {
          "description": "location in source file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:eLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:eName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eType",
          "package": "buildwrapper",
          "signature": "ImportExportType",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ExportDef",
          "type": "function"
        },
        "index": {
          "description": "type",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "eType",
          "package": "buildwrapper",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:eType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace relative file path by module name      \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "fileToModule",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#fileToModule",
          "type": "function"
        },
        "index": {
          "description": "replace relative file path by module name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "fileToModule",
          "normalized": "FilePath-\u003eString",
          "package": "buildwrapper",
          "partial": "To Module",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:fileToModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edebug method to vaguely format JSON result to dump them\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "formatJSON",
          "package": "buildwrapper",
          "signature": "String -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#formatJSON",
          "type": "function"
        },
        "index": {
          "description": "debug method to vaguely format JSON result to dump them",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "formatJSON",
          "normalized": "String-\u003eString",
          "package": "buildwrapper",
          "partial": "JSON",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:formatJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edebug method: fromJust with a message to display when we get Nothing \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "fromJustDebug",
          "package": "buildwrapper",
          "signature": "String -\u003e Maybe a -\u003e a",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#fromJustDebug",
          "type": "function"
        },
        "index": {
          "description": "debug method fromJust with message to display when we get Nothing",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "fromJustDebug",
          "normalized": "String-\u003eMaybe a-\u003ea",
          "package": "buildwrapper",
          "partial": "Just Debug",
          "signature": "String-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:fromJustDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full path for the temporary dist directory (where cabal will write its output)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getDistDir",
          "package": "buildwrapper",
          "signature": "BuildWrapper FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#getDistDir",
          "type": "function"
        },
        "index": {
          "description": "get the full path for the temporary dist directory where cabal will write its output",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getDistDir",
          "package": "buildwrapper",
          "partial": "Dist Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getDistDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full path of a source\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getFullSrc",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e BuildWrapper FilePath",
          "type": "function"
        },
        "index": {
          "description": "get the full path of source",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getFullSrc",
          "normalized": "FilePath-\u003eBuildWrapper FilePath",
          "package": "buildwrapper",
          "partial": "Full Src",
          "signature": "FilePath-\u003eBuildWrapper FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getFullSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full path for the temporary directory\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getFullTempDir",
          "package": "buildwrapper",
          "signature": "BuildWrapper FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#getFullTempDir",
          "type": "function"
        },
        "index": {
          "description": "get the full path for the temporary directory",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getFullTempDir",
          "package": "buildwrapper",
          "partial": "Full Temp Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getFullTempDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget files to load\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getLoadFiles",
          "package": "buildwrapper",
          "signature": "LoadContents -\u003e [(FilePath, String)]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#getLoadFiles",
          "type": "function"
        },
        "index": {
          "description": "get files to load",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getLoadFiles",
          "normalized": "LoadContents-\u003e[(FilePath,String)]",
          "package": "buildwrapper",
          "partial": "Load Files",
          "signature": "LoadContents-\u003e[(FilePath,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getLoadFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://book.realworldhaskell.org/read/io-case-study-a-library-for-searching-the-filesystem.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getRecursiveContents",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#getRecursiveContents",
          "type": "function"
        },
        "index": {
          "description": "http book.realworldhaskell.org read io-case-study-a-library-for-searching-the-filesystem.html",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getRecursiveContents",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "buildwrapper",
          "partial": "Recursive Contents",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getRecursiveContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://book.realworldhaskell.org/read/io-case-study-a-library-for-searching-the-filesystem.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getRecursiveContentsHidden",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#getRecursiveContentsHidden",
          "type": "function"
        },
        "index": {
          "description": "http book.realworldhaskell.org read io-case-study-a-library-for-searching-the-filesystem.html",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getRecursiveContentsHidden",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "buildwrapper",
          "partial": "Recursive Contents Hidden",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getRecursiveContentsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget full path in temporary folder for source file (i.e. where we're going to write the temporary contents of an edited file)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getTargetPath",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e BuildWrapper FilePath",
          "type": "function"
        },
        "index": {
          "description": "get full path in temporary folder for source file i.e where we re going to write the temporary contents of an edited file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "getTargetPath",
          "normalized": "FilePath-\u003eBuildWrapper FilePath",
          "package": "buildwrapper",
          "partial": "Target Path",
          "signature": "FilePath-\u003eBuildWrapper FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:getTargetPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealias name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iAlias",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "alias name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iAlias",
          "package": "buildwrapper",
          "partial": "Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especific import elements\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iChildren",
          "package": "buildwrapper",
          "signature": "Maybe [ImportSpecDef]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "specific import elements",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iChildren",
          "normalized": "Maybe[ImportSpecDef]",
          "package": "buildwrapper",
          "partial": "Children",
          "signature": "Maybe[ImportSpecDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the import element list for hiding or exposing \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iHiding",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "is the import element list for hiding or exposing",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iHiding",
          "package": "buildwrapper",
          "partial": "Hiding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iHiding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation in source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iLoc",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "location in source file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodule name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iModule",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "module name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iModule",
          "package": "buildwrapper",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage name\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iPackage",
          "package": "buildwrapper",
          "signature": "Maybe Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "package name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iPackage",
          "package": "buildwrapper",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the import qualified\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iQualified",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportDef",
          "type": "function"
        },
        "index": {
          "description": "is the import qualified",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iQualified",
          "package": "buildwrapper",
          "partial": "Qualified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iQualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "icSpan",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportClean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "icSpan",
          "package": "buildwrapper",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:icSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "icText",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportClean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "icText",
          "package": "buildwrapper",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:icText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumn\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflColumn",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileLoc",
          "type": "function"
        },
        "index": {
          "description": "column",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflColumn",
          "package": "buildwrapper",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iflColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflLine",
          "package": "buildwrapper",
          "signature": "Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileLoc",
          "type": "function"
        },
        "index": {
          "description": "line",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflLine",
          "package": "buildwrapper",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iflLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes span overlap location?\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflOverlap",
          "package": "buildwrapper",
          "signature": "InFileSpan -\u003e InFileLoc -\u003e Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#iflOverlap",
          "type": "function"
        },
        "index": {
          "description": "does span overlap location",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "iflOverlap",
          "normalized": "InFileSpan-\u003eInFileLoc-\u003eBool",
          "package": "buildwrapper",
          "partial": "Overlap",
          "signature": "InFileSpan-\u003eInFileLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:iflOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eend location\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsEnd",
          "package": "buildwrapper",
          "signature": "InFileLoc",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileSpan",
          "type": "function"
        },
        "index": {
          "description": "end location",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsEnd",
          "package": "buildwrapper",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ifsEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo spans overlap?\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsOverlap",
          "package": "buildwrapper",
          "signature": "InFileSpan -\u003e InFileSpan -\u003e Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ifsOverlap",
          "type": "function"
        },
        "index": {
          "description": "do spans overlap",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsOverlap",
          "normalized": "InFileSpan-\u003eInFileSpan-\u003eBool",
          "package": "buildwrapper",
          "partial": "Overlap",
          "signature": "InFileSpan-\u003eInFileSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ifsOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart location\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsStart",
          "package": "buildwrapper",
          "signature": "InFileLoc",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#InFileSpan",
          "type": "function"
        },
        "index": {
          "description": "start location",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ifsStart",
          "package": "buildwrapper",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ifsStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis a note an error?      \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isBWNoteError",
          "package": "buildwrapper",
          "signature": "BWNote -\u003e Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#isBWNoteError",
          "type": "function"
        },
        "index": {
          "description": "is note an error",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isBWNoteError",
          "normalized": "BWNote-\u003eBool",
          "package": "buildwrapper",
          "partial": "BWNote Error",
          "signature": "BWNote-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isBWNoteError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echildren (constructor names, etc.)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isChildren",
          "package": "buildwrapper",
          "signature": "[Text]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "function"
        },
        "index": {
          "description": "children constructor names etc",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isChildren",
          "normalized": "[Text]",
          "package": "buildwrapper",
          "partial": "Children",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation in source file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isLoc",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "function"
        },
        "index": {
          "description": "location in source file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the source file more recent than the target file?\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isSourceMoreRecent",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e FilePath -\u003e IO Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#isSourceMoreRecent",
          "type": "function"
        },
        "index": {
          "description": "is the source file more recent than the target file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isSourceMoreRecent",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
          "package": "buildwrapper",
          "partial": "Source More Recent",
          "signature": "FilePath-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isSourceMoreRecent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isType",
          "package": "buildwrapper",
          "signature": "ImportExportType",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ImportSpecDef",
          "type": "function"
        },
        "index": {
          "description": "type",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "isType",
          "package": "buildwrapper",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:isType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmFile",
          "package": "buildwrapper",
          "signature": "FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmFile",
          "package": "buildwrapper",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:lmFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmFiles",
          "package": "buildwrapper",
          "signature": "[(FilePath, String)]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmFiles",
          "normalized": "[(FilePath,String)]",
          "package": "buildwrapper",
          "partial": "Files",
          "signature": "[(FilePath,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:lmFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmModule",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#LoadContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "lmModule",
          "package": "buildwrapper",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:lmModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog call to cabal\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "logCabalArgs",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "log call to cabal",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "logCabalArgs",
          "package": "buildwrapper",
          "partial": "Cabal Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:logCabalArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuild an empty span in a given file at a given location\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkEmptySpan",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e Int -\u003e Int -\u003e BWLocation",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#mkEmptySpan",
          "type": "function"
        },
        "index": {
          "description": "build an empty span in given file at given location",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkEmptySpan",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eBWLocation",
          "package": "buildwrapper",
          "partial": "Empty Span",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eBWLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:mkEmptySpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct a file span\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkFileSpan",
          "package": "buildwrapper",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e InFileSpan",
          "type": "function"
        },
        "index": {
          "description": "construct file span",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkFileSpan",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInFileSpan",
          "package": "buildwrapper",
          "partial": "File Span",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eInFileSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:mkFileSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructs an OutlineDef with no children and no type signature     \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkOutlineDef",
          "package": "buildwrapper",
          "signature": "Text-\u003e [OutlineDefType]-\u003e InFileSpan-\u003e OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "constructs an OutlineDef with no children and no type signature",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkOutlineDef",
          "normalized": "Text-\u003e[OutlineDefType]-\u003eInFileSpan-\u003eOutlineDef",
          "package": "buildwrapper",
          "partial": "Outline Def",
          "signature": "Text-\u003e[OutlineDefType]-\u003eInFileSpan-\u003eOutlineDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:mkOutlineDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstructs an OutlineDef with children and no type signature     \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkOutlineDefWithChildren",
          "package": "buildwrapper",
          "signature": "Text-\u003e [OutlineDefType]-\u003e InFileSpan-\u003e [OutlineDef]-\u003e OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "constructs an OutlineDef with children and no type signature",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "mkOutlineDefWithChildren",
          "normalized": "Text-\u003e[OutlineDefType]-\u003eInFileSpan-\u003e[OutlineDef]-\u003eOutlineDef",
          "package": "buildwrapper",
          "partial": "Outline Def With Children",
          "signature": "Text-\u003e[OutlineDefType]-\u003eInFileSpan-\u003e[OutlineDef]-\u003eOutlineDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:mkOutlineDefWithChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#NameDef",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ndName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype signature if any\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndSignature",
          "package": "buildwrapper",
          "signature": "Maybe Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#NameDef",
          "type": "function"
        },
        "index": {
          "description": "type signature if any",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndSignature",
          "package": "buildwrapper",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ndSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etypes: can have several to combine\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndType",
          "package": "buildwrapper",
          "signature": "[OutlineDefType]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#NameDef",
          "type": "function"
        },
        "index": {
          "description": "types can have several to combine",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "ndType",
          "normalized": "[OutlineDefType]",
          "package": "buildwrapper",
          "partial": "Type",
          "signature": "[OutlineDefType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:ndType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enub for Ord objects: use a set    \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "nubOrd",
          "package": "buildwrapper",
          "signature": "[a] -\u003e [a]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#nubOrd",
          "type": "function"
        },
        "index": {
          "description": "nub for Ord objects use set",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "nubOrd",
          "normalized": "[a]-\u003e[a]",
          "package": "buildwrapper",
          "partial": "Ord",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:nubOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echildren (constructors...)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odChildren",
          "package": "buildwrapper",
          "signature": "[OutlineDef]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "children constructors",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odChildren",
          "normalized": "[OutlineDef]",
          "package": "buildwrapper",
          "partial": "Children",
          "signature": "[OutlineDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomment if any,\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odComment",
          "package": "buildwrapper",
          "signature": "Maybe Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "comment if any",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odComment",
          "package": "buildwrapper",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espan in source\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odLoc",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "span in source",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "name",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype signature if any\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odSignature",
          "package": "buildwrapper",
          "signature": "Maybe Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "type signature if any",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odSignature",
          "package": "buildwrapper",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomment start line if any,\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odStartLineComment",
          "package": "buildwrapper",
          "signature": "Maybe Int",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "comment start line if any",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odStartLineComment",
          "package": "buildwrapper",
          "partial": "Start Line Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odStartLineComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etypes: can have several to combine\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odType",
          "package": "buildwrapper",
          "signature": "[OutlineDefType]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineDef",
          "type": "function"
        },
        "index": {
          "description": "types can have several to combine",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "odType",
          "normalized": "[OutlineDefType]",
          "package": "buildwrapper",
          "partial": "Type",
          "signature": "[OutlineDefType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:odType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexports\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orExports",
          "package": "buildwrapper",
          "signature": "[ExportDef]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineResult",
          "type": "function"
        },
        "index": {
          "description": "exports",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orExports",
          "normalized": "[ExportDef]",
          "package": "buildwrapper",
          "partial": "Exports",
          "signature": "[ExportDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:orExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimports\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orImports",
          "package": "buildwrapper",
          "signature": "[ImportDef]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineResult",
          "type": "function"
        },
        "index": {
          "description": "imports",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orImports",
          "normalized": "[ImportDef]",
          "package": "buildwrapper",
          "partial": "Imports",
          "signature": "[ImportDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:orImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutline contents\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orOutline",
          "package": "buildwrapper",
          "signature": "[OutlineDef]",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#OutlineResult",
          "type": "function"
        },
        "index": {
          "description": "outline contents",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "orOutline",
          "normalized": "[OutlineDef]",
          "package": "buildwrapper",
          "partial": "Outline",
          "signature": "[OutlineDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:orOutline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a string from a file, forcing the read and closing the handle\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "readFile",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "read string from file forcing the read and closing the handle",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "buildwrapper",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread an object from a String, with a given error message if it fails \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "readObj",
          "package": "buildwrapper",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#readObj",
          "type": "function"
        },
        "index": {
          "description": "read an object from String with given error message if it fails",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "readObj",
          "normalized": "String-\u003eString-\u003ea",
          "package": "buildwrapper",
          "partial": "Obj",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:readObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove a base directory from a string representing a full path\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "removeBaseDir",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e String -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#removeBaseDir",
          "type": "function"
        },
        "index": {
          "description": "remove base directory from string representing full path",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "removeBaseDir",
          "normalized": "FilePath-\u003eString-\u003eString",
          "package": "buildwrapper",
          "partial": "Base Dir",
          "signature": "FilePath-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:removeBaseDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapGType",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapGType",
          "package": "buildwrapper",
          "partial": "GType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapGType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapHType",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapHType",
          "package": "buildwrapper",
          "partial": "HType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapHType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapModule",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapModule",
          "package": "buildwrapper",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapName",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapQType",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapQType",
          "package": "buildwrapper",
          "partial": "QType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapQType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapType",
          "package": "buildwrapper",
          "signature": "Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#ThingAtPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tapType",
          "package": "buildwrapper",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tapType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tdLoc",
          "package": "buildwrapper",
          "signature": "InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#TokenDef",
          "type": "function"
        },
        "index": {
          "description": "location",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tdLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tdLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of token\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tdName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#TokenDef",
          "type": "function"
        },
        "index": {
          "description": "type of token",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tdName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tdName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of temporary folder\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tempFolder",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "name of temporary folder",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "tempFolder",
          "package": "buildwrapper",
          "partial": "Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:tempFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usDef",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usDef",
          "package": "buildwrapper",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usLoc",
          "package": "buildwrapper",
          "signature": "Value",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usModule",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usModule",
          "package": "buildwrapper",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usName",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usName",
          "package": "buildwrapper",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usPackage",
          "package": "buildwrapper",
          "signature": "Maybe Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usPackage",
          "package": "buildwrapper",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usSection",
          "package": "buildwrapper",
          "signature": "Text",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usSection",
          "package": "buildwrapper",
          "partial": "Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usType",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#Usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "usType",
          "package": "buildwrapper",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:usType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everbosity of logging\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "verbosity",
          "package": "buildwrapper",
          "signature": "Verbosity",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#BuildWrapperState",
          "type": "function"
        },
        "index": {
          "description": "verbosity of logging",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "verbosity",
          "package": "buildwrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform operation on a binary opened file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "withBinaryFile",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#withBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "perform operation on binary opened file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "withBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "buildwrapper",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:withBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite string to file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "writeFile",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Language-Haskell-BuildWrapper-Base.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "write string to file",
          "hierarchy": "Language Haskell BuildWrapper Base",
          "module": "Language.Haskell.BuildWrapper.Base",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "buildwrapper",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Base.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCabal operations: configure, build, retrieve information from build info, parse errors and warnings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "Cabal",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html",
          "type": "module"
        },
        "index": {
          "description": "Cabal operations configure build retrieve information from build info parse errors and warnings",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "Cabal",
          "package": "buildwrapper",
          "partial": "Cabal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe cabal build info for a specific component\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "CabalBuildInfo",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "data"
        },
        "index": {
          "description": "the cabal build info for specific component",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "CabalBuildInfo",
          "package": "buildwrapper",
          "partial": "Cabal Build Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#t:CabalBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "CabalBuildInfo",
          "package": "buildwrapper",
          "signature": "CabalBuildInfo",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "CabalBuildInfo",
          "package": "buildwrapper",
          "partial": "Cabal Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:CabalBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "addCurrent",
          "package": "buildwrapper",
          "signature": "Maybe (BWNote, [String]) -\u003e [BWNote] -\u003e [BWNote]",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#addCurrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "addCurrent",
          "normalized": "Maybe(BWNote,[String])-\u003e[BWNote]-\u003e[BWNote]",
          "package": "buildwrapper",
          "partial": "Current",
          "signature": "Maybe(BWNote,[String])-\u003e[BWNote]-\u003e[BWNote]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:addCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun cabal build\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalBuild",
          "package": "buildwrapper",
          "signature": "Bool-\u003e WhichCabal-\u003e BuildWrapper (OpResult BuildResult)",
          "type": "function"
        },
        "index": {
          "description": "run cabal build",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalBuild",
          "normalized": "Bool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "package": "buildwrapper",
          "partial": "Build",
          "signature": "Bool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun cabal build\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalBuild'",
          "package": "buildwrapper",
          "signature": "Bool-\u003e Bool-\u003e WhichCabal-\u003e BuildWrapper (OpResult BuildResult)",
          "type": "function"
        },
        "index": {
          "description": "run cabal build",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalBuild'",
          "normalized": "Bool-\u003eBool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "package": "buildwrapper",
          "partial": "Build'",
          "signature": "Bool-\u003eBool-\u003eWhichCabal-\u003eBuildWrapper(OpResult BuildResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalBuild-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromExecutable",
          "package": "buildwrapper",
          "signature": "Executable -\u003e CabalComponent",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#cabalComponentFromExecutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromExecutable",
          "normalized": "Executable-\u003eCabalComponent",
          "package": "buildwrapper",
          "partial": "Component From Executable",
          "signature": "Executable-\u003eCabalComponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponentFromExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromLibrary",
          "package": "buildwrapper",
          "signature": "Library -\u003e CabalComponent",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#cabalComponentFromLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromLibrary",
          "normalized": "Library-\u003eCabalComponent",
          "package": "buildwrapper",
          "partial": "Component From Library",
          "signature": "Library-\u003eCabalComponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponentFromLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromTestSuite",
          "package": "buildwrapper",
          "signature": "TestSuite -\u003e CabalComponent",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#cabalComponentFromTestSuite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentFromTestSuite",
          "normalized": "TestSuite-\u003eCabalComponent",
          "package": "buildwrapper",
          "partial": "Component From Test Suite",
          "signature": "TestSuite-\u003eCabalComponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponentFromTestSuite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all components in the Cabal file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponents",
          "package": "buildwrapper",
          "signature": "BuildWrapper (OpResult [CabalComponent])",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#cabalComponents",
          "type": "function"
        },
        "index": {
          "description": "get all components in the Cabal file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponents",
          "normalized": "BuildWrapper(OpResult[CabalComponent])",
          "package": "buildwrapper",
          "partial": "Components",
          "signature": "BuildWrapper(OpResult[CabalComponent])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentsDependencies",
          "package": "buildwrapper",
          "signature": "PackageDescription-\u003e Map CabalComponent [Dependency]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentsDependencies",
          "normalized": "PackageDescription-\u003eMap CabalComponent[Dependency]",
          "package": "buildwrapper",
          "partial": "Components Dependencies",
          "signature": "PackageDescription-\u003eMap CabalComponent[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponentsDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all components from the package description        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentsFromDescription",
          "package": "buildwrapper",
          "signature": "PackageDescription-\u003e [CabalComponent]",
          "type": "function"
        },
        "index": {
          "description": "get all components from the package description",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalComponentsFromDescription",
          "normalized": "PackageDescription-\u003e[CabalComponent]",
          "package": "buildwrapper",
          "partial": "Components From Description",
          "signature": "PackageDescription-\u003e[CabalComponent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalComponentsFromDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun cabal configure\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalConfigure",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003e BuildWrapper (OpResult (Maybe LocalBuildInfo))",
          "type": "function"
        },
        "index": {
          "description": "run cabal configure",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalConfigure",
          "normalized": "WhichCabal-\u003eBuildWrapper(OpResult(Maybe LocalBuildInfo))",
          "package": "buildwrapper",
          "partial": "Configure",
          "signature": "WhichCabal-\u003eBuildWrapper(OpResult(Maybe LocalBuildInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalConfigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all the dependencies in the cabal file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalDependencies",
          "package": "buildwrapper",
          "signature": "Maybe FilePath-\u003e BuildWrapper (OpResult [(FilePath, [CabalPackage])])",
          "type": "function"
        },
        "index": {
          "description": "get all the dependencies in the cabal file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalDependencies",
          "normalized": "Maybe FilePath-\u003eBuildWrapper(OpResult[(FilePath,[CabalPackage])])",
          "package": "buildwrapper",
          "partial": "Dependencies",
          "signature": "Maybe FilePath-\u003eBuildWrapper(OpResult[(FilePath,[CabalPackage])])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalErrorLine",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e Maybe (BWNote, [String])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalErrorLine",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003eMaybe(BWNote,[String])",
          "package": "buildwrapper",
          "partial": "Error Line",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003eMaybe(BWNote,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalErrorLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the cabal extensions\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalExtensions",
          "package": "buildwrapper",
          "signature": "CabalBuildInfo-\u003e (ModuleName, [String])",
          "type": "function"
        },
        "index": {
          "description": "get the cabal extensions",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalExtensions",
          "normalized": "CabalBuildInfo-\u003e(ModuleName,[String])",
          "package": "buildwrapper",
          "partial": "Extensions",
          "signature": "CabalBuildInfo-\u003e(ModuleName,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget Cabal build info, running configure if needed\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalInit",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003e BuildWrapper (OpResult (Maybe LocalBuildInfo))",
          "type": "function"
        },
        "index": {
          "description": "get Cabal build info running configure if needed",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalInit",
          "normalized": "WhichCabal-\u003eBuildWrapper(OpResult(Maybe LocalBuildInfo))",
          "package": "buildwrapper",
          "partial": "Init",
          "signature": "WhichCabal-\u003eBuildWrapper(OpResult(Maybe LocalBuildInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalV",
          "package": "buildwrapper",
          "signature": "BuildWrapper Verbosity",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#cabalV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cabalV",
          "package": "buildwrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cabalV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecanonicalize the paths in the build info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "canonicalizeBuildInfo",
          "package": "buildwrapper",
          "signature": "CabalBuildInfo -\u003e BuildWrapper CabalBuildInfo",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#canonicalizeBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "canonicalize the paths in the build info",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "canonicalizeBuildInfo",
          "normalized": "CabalBuildInfo-\u003eBuildWrapper CabalBuildInfo",
          "package": "buildwrapper",
          "partial": "Build Info",
          "signature": "CabalBuildInfo-\u003eBuildWrapper CabalBuildInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:canonicalizeBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe folder to build that component into\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiBuildFolder",
          "package": "buildwrapper",
          "signature": "FilePath",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "the folder to build that component into",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiBuildFolder",
          "package": "buildwrapper",
          "partial": "Build Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiBuildFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe build info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiBuildInfo",
          "package": "buildwrapper",
          "signature": "BuildInfo",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "the build info",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiBuildInfo",
          "package": "buildwrapper",
          "partial": "Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe component handle\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiComponent",
          "package": "buildwrapper",
          "signature": "CabalComponent",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "the component handle",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiComponent",
          "package": "buildwrapper",
          "partial": "Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe component local build info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiComponentBuildInfo",
          "package": "buildwrapper",
          "signature": "ComponentLocalBuildInfo",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "the component local build info",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiComponentBuildInfo",
          "package": "buildwrapper",
          "partial": "Component Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiComponentBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the component the library\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiIsLibrary",
          "package": "buildwrapper",
          "signature": "Bool",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "is the component the library",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiIsLibrary",
          "package": "buildwrapper",
          "partial": "Is Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiIsLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe module name and corresponding source file for each contained Haskell module\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiModulePaths",
          "package": "buildwrapper",
          "signature": "[(Maybe ModuleName, FilePath)]",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "the module name and corresponding source file for each contained Haskell module",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "cbiModulePaths",
          "normalized": "[(Maybe ModuleName,FilePath)]",
          "package": "buildwrapper",
          "partial": "Module Paths",
          "signature": "[(Maybe ModuleName,FilePath)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:cbiModulePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all dependencies from the package description and the list of installed packages        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "dependencies",
          "package": "buildwrapper",
          "signature": "PackageDescription-\u003e [(FilePath, [InstalledPackageInfo])]-\u003e [(FilePath, [CabalPackage])]",
          "type": "function"
        },
        "index": {
          "description": "get all dependencies from the package description and the list of installed packages",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "dependencies",
          "normalized": "PackageDescription-\u003e[(FilePath,[InstalledPackageInfo])]-\u003e[(FilePath,[CabalPackage])]",
          "package": "buildwrapper",
          "signature": "PackageDescription-\u003e[(FilePath,[InstalledPackageInfo])]-\u003e[(FilePath,[CabalPackage])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "dropPrefixes",
          "package": "buildwrapper",
          "signature": "[String] -\u003e String -\u003e Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#dropPrefixes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "dropPrefixes",
          "normalized": "[String]-\u003eString-\u003eMaybe String",
          "package": "buildwrapper",
          "partial": "Prefixes",
          "signature": "[String]-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:dropPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget CPP options for a file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fileCppOptions",
          "package": "buildwrapper",
          "signature": "CabalBuildInfo-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "get CPP options for file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fileCppOptions",
          "normalized": "CabalBuildInfo-\u003e[String]",
          "package": "buildwrapper",
          "partial": "Cpp Options",
          "signature": "CabalBuildInfo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:fileCppOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget GHC options for a file            \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fileGhcOptions",
          "package": "buildwrapper",
          "signature": "(LocalBuildInfo, CabalBuildInfo)-\u003e BuildWrapper [String]",
          "type": "function"
        },
        "index": {
          "description": "get GHC options for file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fileGhcOptions",
          "normalized": "(LocalBuildInfo,CabalBuildInfo)-\u003eBuildWrapper[String]",
          "package": "buildwrapper",
          "partial": "Ghc Options",
          "signature": "(LocalBuildInfo,CabalBuildInfo)-\u003eBuildWrapper[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:fileGhcOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fromCabalDevExe",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "fromCabalDevExe",
          "normalized": "FilePath-\u003eFilePath",
          "package": "buildwrapper",
          "partial": "Cabal Dev Exe",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:fromCabalDevExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all components, referencing all the files found in the source folders \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getAllFiles",
          "package": "buildwrapper",
          "signature": "LocalBuildInfo-\u003e BuildWrapper [CabalBuildInfo]",
          "type": "function"
        },
        "index": {
          "description": "get all components referencing all the files found in the source folders",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getAllFiles",
          "normalized": "LocalBuildInfo-\u003eBuildWrapper[CabalBuildInfo]",
          "package": "buildwrapper",
          "partial": "All Files",
          "signature": "LocalBuildInfo-\u003eBuildWrapper[CabalBuildInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getAllFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the build info for a given source file\n if a source file is in several component, get the first one             \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getBuildInfo",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e Maybe String-\u003e BuildWrapper (OpResult (Maybe (LocalBuildInfo, CabalBuildInfo)))",
          "type": "function"
        },
        "index": {
          "description": "get the build info for given source file if source file is in several component get the first one",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getBuildInfo",
          "normalized": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe(LocalBuildInfo,CabalBuildInfo)))",
          "package": "buildwrapper",
          "partial": "Build Info",
          "signature": "FilePath-\u003eMaybe String-\u003eBuildWrapper(OpResult(Maybe(LocalBuildInfo,CabalBuildInfo)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the path of a file getting compiled\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getBuiltPath",
          "package": "buildwrapper",
          "signature": "String-\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "get the path of file getting compiled",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getBuiltPath",
          "normalized": "String-\u003eMaybe FilePath",
          "package": "buildwrapper",
          "partial": "Built Path",
          "signature": "String-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getBuiltPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full path to the cabal file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getCabalFile",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003e BuildWrapper FilePath",
          "type": "function"
        },
        "index": {
          "description": "get the full path to the cabal file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getCabalFile",
          "normalized": "WhichCabal-\u003eBuildWrapper FilePath",
          "package": "buildwrapper",
          "partial": "Cabal File",
          "signature": "WhichCabal-\u003eBuildWrapper FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getCabalLibraryVersion",
          "package": "buildwrapper",
          "signature": "String",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#getCabalLibraryVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getCabalLibraryVersion",
          "package": "buildwrapper",
          "partial": "Cabal Library Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getCabalLibraryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getFilesToCopy",
          "package": "buildwrapper",
          "signature": "BuildWrapper (OpResult [FilePath])",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#getFilesToCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getFilesToCopy",
          "normalized": "BuildWrapper(OpResult[FilePath])",
          "package": "buildwrapper",
          "partial": "Files To Copy",
          "signature": "BuildWrapper(OpResult[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getFilesToCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all components, referencing only the files explicitely indicated in the cabal file\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getReferencedFiles",
          "package": "buildwrapper",
          "signature": "LocalBuildInfo -\u003e BuildWrapper [CabalBuildInfo]",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#getReferencedFiles",
          "type": "function"
        },
        "index": {
          "description": "get all components referencing only the files explicitely indicated in the cabal file",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getReferencedFiles",
          "normalized": "LocalBuildInfo-\u003eBuildWrapper[CabalBuildInfo]",
          "package": "buildwrapper",
          "partial": "Referenced Files",
          "signature": "LocalBuildInfo-\u003eBuildWrapper[CabalBuildInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getReferencedFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the source directory from a build info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getSourceDirs",
          "package": "buildwrapper",
          "signature": "BuildInfo-\u003e [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "get the source directory from build info",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "getSourceDirs",
          "normalized": "BuildInfo-\u003e[FilePath]",
          "package": "buildwrapper",
          "partial": "Source Dirs",
          "signature": "BuildInfo-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:getSourceDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a message to the note\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "makeNote",
          "package": "buildwrapper",
          "signature": "BWNote-\u003e [String]-\u003e BWNote",
          "type": "function"
        },
        "index": {
          "description": "add message to the note",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "makeNote",
          "normalized": "BWNote-\u003e[String]-\u003eBWNote",
          "package": "buildwrapper",
          "partial": "Note",
          "signature": "BWNote-\u003e[String]-\u003eBWNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:makeNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a ModuleName to a String        \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "moduleToString",
          "package": "buildwrapper",
          "signature": "ModuleName -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#moduleToString",
          "type": "function"
        },
        "index": {
          "description": "convert ModuleName to String",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "moduleToString",
          "normalized": "ModuleName-\u003eString",
          "package": "buildwrapper",
          "partial": "To String",
          "signature": "ModuleName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:moduleToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a function on the build info modules and paths\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "onModulePaths",
          "package": "buildwrapper",
          "signature": "([(Maybe ModuleName, FilePath)] -\u003e [(Maybe ModuleName, FilePath)])-\u003e CabalBuildInfo-\u003e CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "apply function on the build info modules and paths",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "onModulePaths",
          "normalized": "([(Maybe ModuleName,FilePath)]-\u003e[(Maybe ModuleName,FilePath)])-\u003eCabalBuildInfo-\u003eCabalBuildInfo",
          "package": "buildwrapper",
          "partial": "Module Paths",
          "signature": "([(Maybe ModuleName,FilePath)]-\u003e[(Maybe ModuleName,FilePath)])-\u003eCabalBuildInfo-\u003eCabalBuildInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:onModulePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a function on the build info modules and paths, in a monad\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "onModulePathsM",
          "package": "buildwrapper",
          "signature": "([(Maybe ModuleName, FilePath)] -\u003e a [(Maybe ModuleName, FilePath)])-\u003e CabalBuildInfo-\u003e a CabalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "apply function on the build info modules and paths in monad",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "onModulePathsM",
          "normalized": "([(Maybe ModuleName,FilePath)]-\u003ea[(Maybe ModuleName,FilePath)])-\u003eCabalBuildInfo-\u003ea CabalBuildInfo",
          "package": "buildwrapper",
          "partial": "Module Paths",
          "signature": "([(Maybe ModuleName,FilePath)]-\u003ea[(Maybe ModuleName,FilePath)])-\u003eCabalBuildInfo-\u003ea CabalBuildInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:onModulePathsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse messages from build\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "parseBuildMessages",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e FilePath-\u003e String-\u003e [BWNote]",
          "type": "function"
        },
        "index": {
          "description": "parse messages from build",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "parseBuildMessages",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[BWNote]",
          "package": "buildwrapper",
          "partial": "Build Messages",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[BWNote]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:parseBuildMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse cabal error messages and transform them in notre\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "parseCabalMessages",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [BWNote]",
          "type": "function"
        },
        "index": {
          "description": "parse cabal error messages and transform them in notre",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "parseCabalMessages",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[BWNote]",
          "package": "buildwrapper",
          "partial": "Cabal Messages",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[BWNote]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:parseCabalMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "readInt",
          "package": "buildwrapper",
          "signature": "String -\u003e Int -\u003e Int",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#readInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "readInt",
          "normalized": "String-\u003eInt-\u003eInt",
          "package": "buildwrapper",
          "partial": "Int",
          "signature": "String-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "setupExe",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "setupExe",
          "normalized": "FilePath-\u003eFilePath",
          "package": "buildwrapper",
          "partial": "Exe",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:setupExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "stringToModuleName",
          "package": "buildwrapper",
          "signature": "String -\u003e Maybe ModuleName",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#stringToModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "stringToModuleName",
          "normalized": "String-\u003eMaybe ModuleName",
          "package": "buildwrapper",
          "partial": "To Module Name",
          "signature": "String-\u003eMaybe ModuleName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:stringToModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "stripPrefixIfNeeded",
          "package": "buildwrapper",
          "signature": "String -\u003e String -\u003e Maybe String -\u003e Maybe String",
          "source": "src/Language-Haskell-BuildWrapper-Cabal.html#stripPrefixIfNeeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "stripPrefixIfNeeded",
          "normalized": "String-\u003eString-\u003eMaybe String-\u003eMaybe String",
          "package": "buildwrapper",
          "partial": "Prefix If Needed",
          "signature": "String-\u003eString-\u003eMaybe String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:stripPrefixIfNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "validLoc",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e FilePath-\u003e FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "validLoc",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath",
          "package": "buildwrapper",
          "partial": "Loc",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:validLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a action with the cabal build info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "withCabal",
          "package": "buildwrapper",
          "signature": "WhichCabal-\u003e (LocalBuildInfo -\u003e BuildWrapper a)-\u003e BuildWrapper (OpResult (Maybe a))",
          "type": "function"
        },
        "index": {
          "description": "run action with the cabal build info",
          "hierarchy": "Language Haskell BuildWrapper Cabal",
          "module": "Language.Haskell.BuildWrapper.Cabal",
          "name": "withCabal",
          "normalized": "WhichCabal-\u003e(LocalBuildInfo-\u003eBuildWrapper a)-\u003eBuildWrapper(OpResult(Maybe a))",
          "package": "buildwrapper",
          "partial": "Cabal",
          "signature": "WhichCabal-\u003e(LocalBuildInfo-\u003eBuildWrapper a)-\u003eBuildWrapper(OpResult(Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-Cabal.html#v:withCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLoad relevant module in the GHC AST and get GHC messages and thing at point info. Also use the GHC lexer for syntax highlighting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "GHC",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html",
          "type": "module"
        },
        "index": {
          "description": "Load relevant module in the GHC AST and get GHC messages and thing at point info Also use the GHC lexer for syntax highlighting",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "GHC",
          "package": "buildwrapper",
          "partial": "GHC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "AliasMap",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#AliasMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "AliasMap",
          "package": "buildwrapper",
          "partial": "Alias Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:AliasMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "FinalImportMap",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#FinalImportMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "FinalImportMap",
          "package": "buildwrapper",
          "partial": "Final Import Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:FinalImportMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "FinalImportValue",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#FinalImportValue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "FinalImportValue",
          "package": "buildwrapper",
          "partial": "Final Import Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:FinalImportValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "GHCApplyFunction",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#GHCApplyFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "GHCApplyFunction",
          "package": "buildwrapper",
          "partial": "GHCApply Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:GHCApplyFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ImportMap",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ImportMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ImportMap",
          "package": "buildwrapper",
          "partial": "Import Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:ImportMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "PPBehavior",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#PPBehavior",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "PPBehavior",
          "package": "buildwrapper",
          "partial": "PPBehavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:PPBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodule, function/type, constructors\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "TypeMap",
          "package": "buildwrapper",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#TypeMap",
          "type": "type"
        },
        "index": {
          "description": "module function type constructors",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "TypeMap",
          "package": "buildwrapper",
          "partial": "Type Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#t:TypeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Continue",
          "package": "buildwrapper",
          "signature": "Continue Int",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#PPBehavior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Continue",
          "package": "buildwrapper",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ContinuePragma",
          "package": "buildwrapper",
          "signature": "ContinuePragma PPBehavior",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#PPBehavior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ContinuePragma",
          "package": "buildwrapper",
          "partial": "Continue Pragma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ContinuePragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Indent",
          "package": "buildwrapper",
          "signature": "Indent Int",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#PPBehavior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Indent",
          "package": "buildwrapper",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:Indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Start",
          "package": "buildwrapper",
          "signature": "Start",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#PPBehavior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "Start",
          "package": "buildwrapper",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "dotFS",
          "package": "buildwrapper",
          "signature": "FastString",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#dotFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "dotFS",
          "package": "buildwrapper",
          "partial": "FS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:dotFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "end",
          "package": "buildwrapper",
          "signature": "SrcSpan -\u003e (Int, Int)",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#end",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "end",
          "normalized": "SrcSpan-\u003e(Int,Int)",
          "package": "buildwrapper",
          "signature": "SrcSpan-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the current document, generating a TokenDef list, filtered by a function\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "generateTokens",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e Bool-\u003e [String]-\u003e ([Located Token] -\u003e [TokenDef])-\u003e ([TokenDef] -\u003e a)-\u003e IO (Either BWNote a)",
          "type": "function"
        },
        "index": {
          "description": "Parse the current document generating TokenDef list filtered by function",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "generateTokens",
          "normalized": "FilePath-\u003eString-\u003eBool-\u003e[String]-\u003e([Located Token]-\u003e[TokenDef])-\u003e([TokenDef]-\u003ea)-\u003eIO(Either BWNote a)",
          "package": "buildwrapper",
          "partial": "Tokens",
          "signature": "FilePath-\u003eString-\u003eBool-\u003e[String]-\u003e([Located Token]-\u003e[TokenDef])-\u003e([TokenDef]-\u003ea)-\u003eIO(Either BWNote a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:generateTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the current document, generating a TokenDef list, filtered by a function\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "generateTokens'",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e Bool-\u003e ([Located Token] -\u003e [TokenDef])-\u003e ([TokenDef] -\u003e a)-\u003e Ghc (Either BWNote a)",
          "type": "function"
        },
        "index": {
          "description": "Parse the current document generating TokenDef list filtered by function",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "generateTokens'",
          "normalized": "FilePath-\u003eString-\u003eBool-\u003e([Located Token]-\u003e[TokenDef])-\u003e([TokenDef]-\u003ea)-\u003eGhc(Either BWNote a)",
          "package": "buildwrapper",
          "partial": "Tokens'",
          "signature": "FilePath-\u003eString-\u003eBool-\u003e([Located Token]-\u003e[TokenDef])-\u003e([TokenDef]-\u003ea)-\u003eGhc(Either BWNote a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:generateTokens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the GHC typechecked AST\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getAST",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO (OpResult (Maybe TypecheckedSource))",
          "type": "function"
        },
        "index": {
          "description": "get the GHC typechecked AST",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getAST",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe TypecheckedSource))",
          "package": "buildwrapper",
          "partial": "AST",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe TypecheckedSource))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all names in scope, packaged in NameDefs\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNameDefsInScope",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO (OpResult (Maybe [NameDef]))",
          "type": "function"
        },
        "index": {
          "description": "get all names in scope packaged in NameDefs",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNameDefsInScope",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe[NameDef]))",
          "package": "buildwrapper",
          "partial": "Ghc Name Defs In Scope",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(OpResult(Maybe[NameDef]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getGhcNameDefsInScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all names in scope, packaged in NameDefs\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNameDefsInScopeLongRunning",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "get all names in scope packaged in NameDefs",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNameDefsInScopeLongRunning",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO()",
          "package": "buildwrapper",
          "partial": "Ghc Name Defs In Scope Long Running",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getGhcNameDefsInScopeLongRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all names in scope\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNamesInScope",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "get all names in scope",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getGhcNamesInScope",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO[String]",
          "package": "buildwrapper",
          "partial": "Ghc Names In Scope",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getGhcNamesInScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the \u003ca\u003ething\u003c/a\u003e at a particular point (line/column) in the source\n this is using the saved JSON info if available\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getLocalsJSON",
          "package": "buildwrapper",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO [ThingAtPoint]",
          "type": "function"
        },
        "index": {
          "description": "get the thing at particular point line column in the source this is using the saved JSON info if available",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getLocalsJSON",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO[ThingAtPoint]",
          "package": "buildwrapper",
          "partial": "Locals JSON",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO[ThingAtPoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getLocalsJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the \u003ca\u003ething\u003c/a\u003e at a particular point (line/column) in the source\n this is using the saved JSON info if available\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getThingAtPointJSON",
          "package": "buildwrapper",
          "signature": "Int-\u003e Int-\u003e FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO (Maybe ThingAtPoint)",
          "type": "function"
        },
        "index": {
          "description": "get the thing at particular point line column in the source this is using the saved JSON info if available",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "getThingAtPointJSON",
          "normalized": "Int-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe ThingAtPoint)",
          "package": "buildwrapper",
          "partial": "Thing At Point JSON",
          "signature": "Int-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe ThingAtPoint)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:getThingAtPointJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclean imports \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcCleanImports",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e Bool-\u003e IO (OpResult [ImportClean])",
          "type": "function"
        },
        "index": {
          "description": "clean imports",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcCleanImports",
          "normalized": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eBool-\u003eIO(OpResult[ImportClean])",
          "package": "buildwrapper",
          "partial": "Clean Imports",
          "signature": "FilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eBool-\u003eIO(OpResult[ImportClean])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcCleanImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a column info from GHC to our system (1 based)                      \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcColToScionCol",
          "package": "buildwrapper",
          "signature": "Int -\u003e Int",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcColToScionCol",
          "type": "function"
        },
        "index": {
          "description": "convert column info from GHC to our system based",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcColToScionCol",
          "normalized": "Int-\u003eInt",
          "package": "buildwrapper",
          "partial": "Col To Scion Col",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcColToScionCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a GHC error message to our note type\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcErrMsgToNote",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e FilePath -\u003e ErrMsg -\u003e BWNote",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcErrMsgToNote",
          "type": "function"
        },
        "index": {
          "description": "convert GHC error message to our note type",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcErrMsgToNote",
          "normalized": "DynFlags-\u003eFilePath-\u003eErrMsg-\u003eBWNote",
          "package": "buildwrapper",
          "partial": "Err Msg To Note",
          "signature": "DynFlags-\u003eFilePath-\u003eErrMsg-\u003eBWNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcErrMsgToNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcExportToUsage",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e Text -\u003e Text -\u003e AliasMap -\u003e LIE Name -\u003e Ghc [Usage]",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcExportToUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcExportToUsage",
          "normalized": "DynFlags-\u003eText-\u003eText-\u003eAliasMap-\u003eLIE Name-\u003eGhc[Usage]",
          "package": "buildwrapper",
          "partial": "Export To Usage",
          "signature": "DynFlags-\u003eText-\u003eText-\u003eAliasMap-\u003eLIE Name-\u003eGhc[Usage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcExportToUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcImportMap",
          "package": "buildwrapper",
          "signature": "LImportDecl Name -\u003e Ghc ImportMap",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcImportMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcImportMap",
          "normalized": "LImportDecl Name-\u003eGhc ImportMap",
          "package": "buildwrapper",
          "partial": "Import Map",
          "signature": "LImportDecl Name-\u003eGhc ImportMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcImportMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcImportToUsage",
          "package": "buildwrapper",
          "signature": "Text -\u003e LImportDecl Name -\u003e ([Usage], AliasMap) -\u003e Ghc ([Usage], AliasMap)",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcImportToUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcImportToUsage",
          "normalized": "Text-\u003eLImportDecl Name-\u003e([Usage],AliasMap)-\u003eGhc([Usage],AliasMap)",
          "package": "buildwrapper",
          "partial": "Import To Usage",
          "signature": "Text-\u003eLImportDecl Name-\u003e([Usage],AliasMap)-\u003eGhc([Usage],AliasMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcImportToUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcLIEToUsage",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e Maybe Text -\u003e Text -\u003e Text -\u003e LIE Name -\u003e [Usage]",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcLIEToUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcLIEToUsage",
          "normalized": "DynFlags-\u003eMaybe Text-\u003eText-\u003eText-\u003eLIE Name-\u003e[Usage]",
          "package": "buildwrapper",
          "partial": "LIETo Usage",
          "signature": "DynFlags-\u003eMaybe Text-\u003eText-\u003eText-\u003eLIE Name-\u003e[Usage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcLIEToUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eMessages\u003c/a\u003e\u003c/code\u003e to '[BWNote]'.\n\u003c/p\u003e\u003cp\u003eThis will mix warnings and errors, but you can split them back up\n by filtering the '[BWNote]' based on the \u003ccode\u003ebw_status\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcMessagesToNotes",
          "package": "buildwrapper",
          "signature": "DynFlags-\u003e FilePath-\u003e Messages-\u003e [BWNote]",
          "type": "function"
        },
        "index": {
          "description": "Convert Messages to BWNote This will mix warnings and errors but you can split them back up by filtering the BWNote based on the bw status",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcMessagesToNotes",
          "normalized": "DynFlags-\u003eFilePath-\u003eMessages-\u003e[BWNote]",
          "package": "buildwrapper",
          "partial": "Messages To Notes",
          "signature": "DynFlags-\u003eFilePath-\u003eMessages-\u003e[BWNote]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcMessagesToNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcMsgToNote",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e BWNoteStatus -\u003e FilePath -\u003e ErrMsg -\u003e BWNote",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcMsgToNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcMsgToNote",
          "normalized": "DynFlags-\u003eBWNoteStatus-\u003eFilePath-\u003eErrMsg-\u003eBWNote",
          "package": "buildwrapper",
          "partial": "Msg To Note",
          "signature": "DynFlags-\u003eBWNoteStatus-\u003eFilePath-\u003eErrMsg-\u003eBWNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcMsgToNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcNameToUsage",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e Maybe Text -\u003e Text -\u003e Text -\u003e Name -\u003e SrcSpan -\u003e Bool -\u003e Usage",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcNameToUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcNameToUsage",
          "normalized": "DynFlags-\u003eMaybe Text-\u003eText-\u003eText-\u003eName-\u003eSrcSpan-\u003eBool-\u003eUsage",
          "package": "buildwrapper",
          "partial": "Name To Usage",
          "signature": "DynFlags-\u003eMaybe Text-\u003eText-\u003eText-\u003eName-\u003eSrcSpan-\u003eBool-\u003eUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcNameToUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a GHC SrcSpan to a BWLocation   \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcSpanToBWLocation",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e SrcSpan-\u003e BWLocation",
          "type": "function"
        },
        "index": {
          "description": "convert GHC SrcSpan to BWLocation",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcSpanToBWLocation",
          "normalized": "FilePath-\u003eSrcSpan-\u003eBWLocation",
          "package": "buildwrapper",
          "partial": "Span To BWLocation",
          "signature": "FilePath-\u003eSrcSpan-\u003eBWLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcSpanToBWLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a GHC SrcSpan to a Span,  ignoring the actual file info\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcSpanToLocation",
          "package": "buildwrapper",
          "signature": "SrcSpan -\u003e InFileSpan",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcSpanToLocation",
          "type": "function"
        },
        "index": {
          "description": "convert GHC SrcSpan to Span ignoring the actual file info",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcSpanToLocation",
          "normalized": "SrcSpan-\u003eInFileSpan",
          "package": "buildwrapper",
          "partial": "Span To Location",
          "signature": "SrcSpan-\u003eInFileSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcSpanToLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a GHC warning message to our note type\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcWarnMsgToNote",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e FilePath -\u003e WarnMsg -\u003e BWNote",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ghcWarnMsgToNote",
          "type": "function"
        },
        "index": {
          "description": "convert GHC warning message to our note type",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcWarnMsgToNote",
          "normalized": "DynFlags-\u003eFilePath-\u003eWarnMsg-\u003eBWNote",
          "package": "buildwrapper",
          "partial": "Warn Msg To Note",
          "signature": "DynFlags-\u003eFilePath-\u003eWarnMsg-\u003eBWNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcWarnMsgToNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcWithASTNotes",
          "package": "buildwrapper",
          "signature": "GHCApplyFunction a-\u003e (FilePath -\u003e FilePath)-\u003e FilePath-\u003e LoadContents-\u003e Bool-\u003e Ghc (OpResult [a])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghcWithASTNotes",
          "normalized": "GHCApplyFunction a-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eLoadContents-\u003eBool-\u003eGhc(OpResult[a])",
          "package": "buildwrapper",
          "partial": "With ASTNotes",
          "signature": "GHCApplyFunction a-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eLoadContents-\u003eBool-\u003eGhc(OpResult[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghcWithASTNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a stream of tokens generated by the GHC lexer from the current document\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghctokensArbitrary",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e [String]-\u003e IO (Either BWNote [Located Token])",
          "type": "function"
        },
        "index": {
          "description": "Get stream of tokens generated by the GHC lexer from the current document",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghctokensArbitrary",
          "normalized": "FilePath-\u003eString-\u003e[String]-\u003eIO(Either BWNote[Located Token])",
          "package": "buildwrapper",
          "partial": "Arbitrary",
          "signature": "FilePath-\u003eString-\u003e[String]-\u003eIO(Either BWNote[Located Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghctokensArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a stream of tokens generated by the GHC lexer from the current document\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghctokensArbitrary'",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e Ghc (Either BWNote [Located Token])",
          "type": "function"
        },
        "index": {
          "description": "Get stream of tokens generated by the GHC lexer from the current document",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ghctokensArbitrary'",
          "normalized": "FilePath-\u003eString-\u003eGhc(Either BWNote[Located Token])",
          "package": "buildwrapper",
          "partial": "Arbitrary'",
          "signature": "FilePath-\u003eString-\u003eGhc(Either BWNote[Located Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ghctokensArbitrary-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "initGHC",
          "package": "buildwrapper",
          "signature": "Ghc a-\u003e [String]-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "initGHC",
          "normalized": "Ghc a-\u003e[String]-\u003eIO a",
          "package": "buildwrapper",
          "partial": "GHC",
          "signature": "Ghc a-\u003e[String]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:initGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexLoc",
          "package": "buildwrapper",
          "signature": "RealSrcLoc",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#lexLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexLoc",
          "package": "buildwrapper",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:lexLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike lexTokenStream, but keep Haddock flag\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexTokenStreamH",
          "package": "buildwrapper",
          "signature": "StringBuffer -\u003e RealSrcLoc -\u003e DynFlags -\u003e ParseResult [Located Token]",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#lexTokenStreamH",
          "type": "function"
        },
        "index": {
          "description": "like lexTokenStream but keep Haddock flag",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexTokenStreamH",
          "normalized": "StringBuffer-\u003eRealSrcLoc-\u003eDynFlags-\u003eParseResult[Located Token]",
          "package": "buildwrapper",
          "partial": "Token Stream",
          "signature": "StringBuffer-\u003eRealSrcLoc-\u003eDynFlags-\u003eParseResult[Located Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:lexTokenStreamH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexerFlags",
          "package": "buildwrapper",
          "signature": "[ExtensionFlag]",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#lexerFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "lexerFlags",
          "normalized": "[ExtensionFlag]",
          "package": "buildwrapper",
          "partial": "Flags",
          "signature": "[ExtensionFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:lexerFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake qualified token: join the qualifier and the name by a dot\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkQualifiedTokenValue",
          "package": "buildwrapper",
          "signature": "FastString-\u003e FastString-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "make qualified token join the qualifier and the name by dot",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkQualifiedTokenValue",
          "normalized": "FastString-\u003eFastString-\u003eText",
          "package": "buildwrapper",
          "partial": "Qualified Token Value",
          "signature": "FastString-\u003eFastString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:mkQualifiedTokenValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a token definition from its source location and Lexer.hs token type.\nmkTokenDef :: Located Token -\u003e TokenDef\nmkTokenDef (L sp t) = TokenDef (mkTokenName t) (ghcSpanToLocation sp)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkTokenName",
          "package": "buildwrapper",
          "signature": "Token -\u003e Text",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#mkTokenName",
          "type": "function"
        },
        "index": {
          "description": "Make token definition from its source location and Lexer.hs token type mkTokenDef Located Token TokenDef mkTokenDef sp TokenDef mkTokenName ghcSpanToLocation sp",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkTokenName",
          "normalized": "Token-\u003eText",
          "package": "buildwrapper",
          "partial": "Token Name",
          "signature": "Token-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:mkTokenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake unqualified token\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkUnqualTokenValue",
          "package": "buildwrapper",
          "signature": "FastString-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "make unqualified token",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "mkUnqualTokenValue",
          "normalized": "FastString-\u003eText",
          "package": "buildwrapper",
          "partial": "Unqual Token Value",
          "signature": "FastString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:mkUnqualTokenValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "name2nd",
          "package": "buildwrapper",
          "signature": "DynFlags -\u003e Name -\u003e m NameDef",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#name2nd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "name2nd",
          "normalized": "DynFlags-\u003eName-\u003ea NameDef",
          "package": "buildwrapper",
          "signature": "DynFlags-\u003eName-\u003em NameDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:name2nd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract occurrences based on lexing  \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "occurrences",
          "package": "buildwrapper",
          "signature": "FilePath-\u003e String-\u003e Text-\u003e Bool-\u003e [String]-\u003e IO (Either BWNote [TokenDef])",
          "type": "function"
        },
        "index": {
          "description": "Extract occurrences based on lexing",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "occurrences",
          "normalized": "FilePath-\u003eString-\u003eText-\u003eBool-\u003e[String]-\u003eIO(Either BWNote[TokenDef])",
          "package": "buildwrapper",
          "signature": "FilePath-\u003eString-\u003eText-\u003eBool-\u003e[String]-\u003eIO(Either BWNote[TokenDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:occurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter tokens whose span appears legitimate (start line is less than end line, start column is\n less than end column.)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ofInterest",
          "package": "buildwrapper",
          "signature": "Located Token -\u003e Bool",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#ofInterest",
          "type": "function"
        },
        "index": {
          "description": "Filter tokens whose span appears legitimate start line is less than end line start column is less than end column",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "ofInterest",
          "normalized": "Located Token-\u003eBool",
          "package": "buildwrapper",
          "partial": "Interest",
          "signature": "Located Token-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:ofInterest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreprocess some source, returning the literate and Haskell source as tuple.\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "preprocessSource",
          "package": "buildwrapper",
          "signature": "String-\u003e Bool-\u003e ([TokenDef], String)",
          "type": "function"
        },
        "index": {
          "description": "Preprocess some source returning the literate and Haskell source as tuple",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "preprocessSource",
          "normalized": "String-\u003eBool-\u003e([TokenDef],String)",
          "package": "buildwrapper",
          "partial": "Source",
          "signature": "String-\u003eBool-\u003e([TokenDef],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:preprocessSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove the initial status text from a message\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "removeStatus",
          "package": "buildwrapper",
          "signature": "BWNoteStatus -\u003e String -\u003e String",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#removeStatus",
          "type": "function"
        },
        "index": {
          "description": "remove the initial status text from message",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "removeStatus",
          "normalized": "BWNoteStatus-\u003eString-\u003eString",
          "package": "buildwrapper",
          "partial": "Status",
          "signature": "BWNoteStatus-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:removeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a column info from our system (1 based) to GHC      \n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "scionColToGhcCol",
          "package": "buildwrapper",
          "signature": "Int -\u003e Int",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#scionColToGhcCol",
          "type": "function"
        },
        "index": {
          "description": "convert column info from our system based to GHC",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "scionColToGhcCol",
          "normalized": "Int-\u003eInt",
          "package": "buildwrapper",
          "partial": "Col To Ghc Col",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:scionColToGhcCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "start",
          "package": "buildwrapper",
          "signature": "SrcSpan -\u003e (Int, Int)",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#start",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "start",
          "normalized": "SrcSpan-\u003e(Int,Int)",
          "package": "buildwrapper",
          "signature": "SrcSpan-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a GHC token to an interactive token (abbreviated token type)\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenToType",
          "package": "buildwrapper",
          "signature": "Located Token -\u003e TokenDef",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#tokenToType",
          "type": "function"
        },
        "index": {
          "description": "Convert GHC token to an interactive token abbreviated token type",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenToType",
          "normalized": "Located Token-\u003eTokenDef",
          "package": "buildwrapper",
          "partial": "To Type",
          "signature": "Located Token-\u003eTokenDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:tokenToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenType",
          "package": "buildwrapper",
          "signature": "Token -\u003e Text",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#tokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenType",
          "normalized": "Token-\u003eText",
          "package": "buildwrapper",
          "partial": "Type",
          "signature": "Token-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:tokenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the interactive token list used by EclipseFP for syntax highlighting\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenTypesArbitrary",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e String -\u003e Bool -\u003e [String] -\u003e IO (Either BWNote [TokenDef])",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#tokenTypesArbitrary",
          "type": "function"
        },
        "index": {
          "description": "Generate the interactive token list used by EclipseFP for syntax highlighting",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenTypesArbitrary",
          "normalized": "FilePath-\u003eString-\u003eBool-\u003e[String]-\u003eIO(Either BWNote[TokenDef])",
          "package": "buildwrapper",
          "partial": "Types Arbitrary",
          "signature": "FilePath-\u003eString-\u003eBool-\u003e[String]-\u003eIO(Either BWNote[TokenDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:tokenTypesArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenTypesArbitrary'",
          "package": "buildwrapper",
          "signature": "FilePath -\u003e String -\u003e Bool -\u003e Ghc (Either BWNote [TokenDef])",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#tokenTypesArbitrary%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenTypesArbitrary'",
          "normalized": "FilePath-\u003eString-\u003eBool-\u003eGhc(Either BWNote[TokenDef])",
          "package": "buildwrapper",
          "partial": "Types Arbitrary'",
          "signature": "FilePath-\u003eString-\u003eBool-\u003eGhc(Either BWNote[TokenDef])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:tokenTypesArbitrary-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenValue",
          "package": "buildwrapper",
          "signature": "Bool -\u003e Token -\u003e Text",
          "source": "src/Language-Haskell-BuildWrapper-GHC.html#tokenValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "tokenValue",
          "normalized": "Bool-\u003eToken-\u003eText",
          "package": "buildwrapper",
          "partial": "Value",
          "signature": "Bool-\u003eToken-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:tokenValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform an action on the GHC Typechecked module\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withAST",
          "package": "buildwrapper",
          "signature": "(TypecheckedModule -\u003e Ghc a)-\u003e FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "perform an action on the GHC Typechecked module",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withAST",
          "normalized": "(TypecheckedModule-\u003eGhc a)-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe a)",
          "package": "buildwrapper",
          "partial": "AST",
          "signature": "(TypecheckedModule-\u003eGhc a)-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:withAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe main method loading the source contents into GHC\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withASTNotes",
          "package": "buildwrapper",
          "signature": "GHCApplyFunction a-\u003e (FilePath -\u003e FilePath)-\u003e FilePath-\u003e LoadContents-\u003e [String]-\u003e IO (OpResult [a])",
          "type": "function"
        },
        "index": {
          "description": "the main method loading the source contents into GHC",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withASTNotes",
          "normalized": "GHCApplyFunction a-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eLoadContents-\u003e[String]-\u003eIO(OpResult[a])",
          "package": "buildwrapper",
          "partial": "ASTNotes",
          "signature": "GHCApplyFunction a-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eLoadContents-\u003e[String]-\u003eIO(OpResult[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:withASTNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform an action on the GHC JSON AST\n\u003c/p\u003e",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withJSONAST",
          "package": "buildwrapper",
          "signature": "(Value -\u003e IO a)-\u003e FilePath-\u003e FilePath-\u003e String-\u003e [String]-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "perform an action on the GHC JSON AST",
          "hierarchy": "Language Haskell BuildWrapper GHC",
          "module": "Language.Haskell.BuildWrapper.GHC",
          "name": "withJSONAST",
          "normalized": "(Value-\u003eIO a)-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe a)",
          "package": "buildwrapper",
          "partial": "JSONAST",
          "signature": "(Value-\u003eIO a)-\u003eFilePath-\u003eFilePath-\u003eString-\u003e[String]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buildwrapper/docs/Language-Haskell-BuildWrapper-GHC.html#v:withJSONAST"
      }
    }
  ]
]