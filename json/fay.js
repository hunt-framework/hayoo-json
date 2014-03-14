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
        "word": "fay"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguration functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Compiler.Config",
          "name": "Config",
          "package": "fay",
          "source": "src/Fay-Compiler-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Configuration functions",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "Config",
          "package": "fay",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a mapping from (maybe) a package to a source directory\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryInclude",
          "package": "fay",
          "signature": "Maybe String -\u003e FilePath -\u003e CompileConfig -\u003e CompileConfig",
          "source": "src/Fay-Compiler-Config.html#addConfigDirectoryInclude",
          "type": "function"
        },
        "index": {
          "description": "Add mapping from maybe package to source directory",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryInclude",
          "normalized": "Maybe String-\u003eFilePath-\u003eCompileConfig-\u003eCompileConfig",
          "package": "fay",
          "partial": "Config Directory Include",
          "signature": "Maybe String-\u003eFilePath-\u003eCompileConfig-\u003eCompileConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:addConfigDirectoryInclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd several include directories without package references.\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryIncludePaths",
          "package": "fay",
          "signature": "[FilePath] -\u003e CompileConfig -\u003e CompileConfig",
          "source": "src/Fay-Compiler-Config.html#addConfigDirectoryIncludePaths",
          "type": "function"
        },
        "index": {
          "description": "Add several include directories without package references",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryIncludePaths",
          "normalized": "[FilePath]-\u003eCompileConfig-\u003eCompileConfig",
          "package": "fay",
          "partial": "Config Directory Include Paths",
          "signature": "[FilePath]-\u003eCompileConfig-\u003eCompileConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:addConfigDirectoryIncludePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd several include directories.\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryIncludes",
          "package": "fay",
          "signature": "[(Maybe String, FilePath)] -\u003e CompileConfig -\u003e CompileConfig",
          "source": "src/Fay-Compiler-Config.html#addConfigDirectoryIncludes",
          "type": "function"
        },
        "index": {
          "description": "Add several include directories",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "addConfigDirectoryIncludes",
          "normalized": "[(Maybe String,FilePath)]-\u003eCompileConfig-\u003eCompileConfig",
          "package": "fay",
          "partial": "Config Directory Includes",
          "signature": "[(Maybe String,FilePath)]-\u003eCompileConfig-\u003eCompileConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:addConfigDirectoryIncludes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a package to compilation\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "addConfigPackage",
          "package": "fay",
          "signature": "String -\u003e CompileConfig -\u003e CompileConfig",
          "source": "src/Fay-Compiler-Config.html#addConfigPackage",
          "type": "function"
        },
        "index": {
          "description": "Add package to compilation",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "addConfigPackage",
          "normalized": "String-\u003eCompileConfig-\u003eCompileConfig",
          "package": "fay",
          "partial": "Config Package",
          "signature": "String-\u003eCompileConfig-\u003eCompileConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:addConfigPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd several packages to compilation\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "addConfigPackages",
          "package": "fay",
          "signature": "[String] -\u003e CompileConfig -\u003e CompileConfig",
          "source": "src/Fay-Compiler-Config.html#addConfigPackages",
          "type": "function"
        },
        "index": {
          "description": "Add several packages to compilation",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "addConfigPackages",
          "normalized": "[String]-\u003eCompileConfig-\u003eCompileConfig",
          "package": "fay",
          "partial": "Config Packages",
          "signature": "[String]-\u003eCompileConfig-\u003eCompileConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:addConfigPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all include directories without the package mapping.\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "configDirectoryIncludePaths",
          "package": "fay",
          "signature": "CompileConfig -\u003e [FilePath]",
          "source": "src/Fay-Compiler-Config.html#configDirectoryIncludePaths",
          "type": "function"
        },
        "index": {
          "description": "Get all include directories without the package mapping",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "configDirectoryIncludePaths",
          "normalized": "CompileConfig-\u003e[FilePath]",
          "package": "fay",
          "partial": "Directory Include Paths",
          "signature": "CompileConfig-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:configDirectoryIncludePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all include directories not included through packages.\n\u003c/p\u003e",
          "module": "Fay.Compiler.Config",
          "name": "nonPackageConfigDirectoryIncludePaths",
          "package": "fay",
          "signature": "CompileConfig -\u003e [FilePath]",
          "source": "src/Fay-Compiler-Config.html#nonPackageConfigDirectoryIncludePaths",
          "type": "function"
        },
        "index": {
          "description": "Get all include directories not included through packages",
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "nonPackageConfigDirectoryIncludePaths",
          "normalized": "CompileConfig-\u003e[FilePath]",
          "package": "fay",
          "partial": "Package Config Directory Include Paths",
          "signature": "CompileConfig-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:nonPackageConfigDirectoryIncludePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Compiler.Config",
          "name": "shouldExportStrictWrapper",
          "package": "fay",
          "signature": "ModuleName a -\u003e CompileConfig -\u003e Bool",
          "source": "src/Fay-Compiler-Config.html#shouldExportStrictWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Compiler Config",
          "module": "Fay.Compiler.Config",
          "name": "shouldExportStrictWrapper",
          "normalized": "ModuleName a-\u003eCompileConfig-\u003eBool",
          "package": "fay",
          "partial": "Export Strict Wrapper",
          "signature": "ModuleName a-\u003eCompileConfig-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler-Config.html#v:shouldExportStrictWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Haskell&#8594;Javascript compiler.\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Compiler",
          "name": "Compiler",
          "package": "fay",
          "source": "src/Fay-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "The Haskell Javascript compiler",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "Compiler",
          "package": "fay",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a declaration.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileDecl",
          "package": "fay",
          "signature": "Bool -\u003e Decl -\u003e Compile [JsStmt]",
          "source": "src/Fay-Compiler-Decl.html#compileDecl",
          "type": "function"
        },
        "index": {
          "description": "Compile declaration",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileDecl",
          "normalized": "Bool-\u003eDecl-\u003eCompile[JsStmt]",
          "package": "fay",
          "partial": "Decl",
          "signature": "Bool-\u003eDecl-\u003eCompile[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile Haskell expression.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileExp",
          "package": "fay",
          "signature": "Exp -\u003e Compile JsExp",
          "source": "src/Fay-Compiler-Exp.html#compileExp",
          "type": "function"
        },
        "index": {
          "description": "Compile Haskell expression",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileExp",
          "normalized": "Exp-\u003eCompile JsExp",
          "package": "fay",
          "partial": "Exp",
          "signature": "Exp-\u003eCompile JsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a parse HSE module.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileModuleFromAST",
          "package": "fay",
          "signature": "([JsStmt], [JsStmt]) -\u003e Module -\u003e Compile ([JsStmt], [JsStmt])",
          "source": "src/Fay-Compiler.html#compileModuleFromAST",
          "type": "function"
        },
        "index": {
          "description": "Compile parse HSE module",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileModuleFromAST",
          "normalized": "([JsStmt],[JsStmt])-\u003eModule-\u003eCompile([JsStmt],[JsStmt])",
          "package": "fay",
          "partial": "Module From AST",
          "signature": "([JsStmt],[JsStmt])-\u003eModule-\u003eCompile([JsStmt],[JsStmt])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileModuleFromAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a source string.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileModuleFromContents",
          "package": "fay",
          "signature": "String -\u003e Compile ([JsStmt], [JsStmt])",
          "source": "src/Fay-Compiler.html#compileModuleFromContents",
          "type": "function"
        },
        "index": {
          "description": "Compile source string",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileModuleFromContents",
          "normalized": "String-\u003eCompile([JsStmt],[JsStmt])",
          "package": "fay",
          "partial": "Module From Contents",
          "signature": "String-\u003eCompile([JsStmt],[JsStmt])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileModuleFromContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the top-level Fay module.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileToplevelModule",
          "package": "fay",
          "signature": "FilePath -\u003e Module -\u003e Compile [JsStmt]",
          "source": "src/Fay-Compiler.html#compileToplevelModule",
          "type": "function"
        },
        "index": {
          "description": "Compile the top-level Fay module",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileToplevelModule",
          "normalized": "FilePath-\u003eModule-\u003eCompile[JsStmt]",
          "package": "fay",
          "partial": "Toplevel Module",
          "signature": "FilePath-\u003eModule-\u003eCompile[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileToplevelModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a Haskell source string to a JavaScript source string.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileViaStr",
          "package": "fay",
          "signature": "FilePath -\u003e CompileConfig -\u003e PrintState -\u003e (Module -\u003e Compile [JsStmt]) -\u003e String -\u003e IO (Either CompileError (PrintState, CompileState, CompileWriter))",
          "source": "src/Fay-Compiler.html#compileViaStr",
          "type": "function"
        },
        "index": {
          "description": "Compile Haskell source string to JavaScript source string",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileViaStr",
          "normalized": "FilePath-\u003eCompileConfig-\u003ePrintState-\u003e(Module-\u003eCompile[JsStmt])-\u003eString-\u003eIO(Either CompileError(PrintState,CompileState,CompileWriter))",
          "package": "fay",
          "partial": "Via Str",
          "signature": "FilePath-\u003eCompileConfig-\u003ePrintState-\u003e(Module-\u003eCompile[JsStmt])-\u003eString-\u003eIO(Either CompileError(PrintState,CompileState,CompileWriter))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileViaStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a module\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "compileWith",
          "package": "fay",
          "signature": "FilePath -\u003e (a -\u003e Module -\u003e Compile a) -\u003e (FilePath -\u003e String -\u003e Compile a) -\u003e (X -\u003e Module -\u003e IO (Either CompileError Module)) -\u003e String -\u003e Compile (a, CompileState, CompileWriter)",
          "source": "src/Fay-Compiler-Import.html#compileWith",
          "type": "function"
        },
        "index": {
          "description": "Compile module",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "compileWith",
          "normalized": "FilePath-\u003e(a-\u003eModule-\u003eCompile a)-\u003e(FilePath-\u003eString-\u003eCompile a)-\u003e(X-\u003eModule-\u003eIO(Either CompileError Module))-\u003eString-\u003eCompile(a,CompileState,CompileWriter)",
          "package": "fay",
          "partial": "With",
          "signature": "FilePath-\u003e(a-\u003eModule-\u003eCompile a)-\u003e(FilePath-\u003eString-\u003eCompile a)-\u003e(X-\u003eModule-\u003eIO(Either CompileError Module))-\u003eString-\u003eCompile(a,CompileState,CompileWriter)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:compileWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse some Fay code.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "parseFay",
          "package": "fay",
          "signature": "FilePath -\u003e String -\u003e ParseResult ast",
          "source": "src/Fay-Compiler-Misc.html#parseFay",
          "type": "function"
        },
        "index": {
          "description": "Parse some Fay code",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "parseFay",
          "normalized": "FilePath-\u003eString-\u003eParseResult a",
          "package": "fay",
          "partial": "Fay",
          "signature": "FilePath-\u003eString-\u003eParseResult ast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:parseFay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns compilation for a single module.\n\u003c/p\u003e",
          "module": "Fay.Compiler",
          "name": "runCompileModule",
          "package": "fay",
          "signature": "CompileReader -\u003e CompileState -\u003e Compile a -\u003e CompileModule a",
          "source": "src/Fay-Compiler-Misc.html#runCompileModule",
          "type": "function"
        },
        "index": {
          "description": "Runs compilation for single module",
          "hierarchy": "Fay Compiler",
          "module": "Fay.Compiler",
          "name": "runCompileModule",
          "normalized": "CompileReader-\u003eCompileState-\u003eCompile a-\u003eCompileModule a",
          "package": "fay",
          "partial": "Compile Module",
          "signature": "CompileReader-\u003eCompileState-\u003eCompile a-\u003eCompileModule a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Compiler.html#v:runCompileModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra monadic functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "Extra",
          "package": "fay",
          "source": "src/Fay-Control-Monad-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra monadic functions",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "Extra",
          "package": "fay",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo any of the (monadic) predicates match?\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "anyM",
          "package": "fay",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Fay-Control-Monad-Extra.html#anyM",
          "type": "function"
        },
        "index": {
          "description": "Do any of the monadic predicates match",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "anyM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "fay",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:anyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord version of flip (\u003e\u003e=).\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "bind",
          "package": "fay",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Fay-Control-Monad-Extra.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Word version of flip",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "bind",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "fay",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip of mapMaybe.\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "forMaybe",
          "package": "fay",
          "signature": "[a] -\u003e (a -\u003e Maybe b) -\u003e [b]",
          "source": "src/Fay-Control-Monad-Extra.html#forMaybe",
          "type": "function"
        },
        "index": {
          "description": "Flip of mapMaybe",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "forMaybe",
          "normalized": "[a]-\u003e(a-\u003eMaybe b)-\u003e[b]",
          "package": "fay",
          "partial": "Maybe",
          "signature": "[a]-\u003e(a-\u003eMaybe b)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:forMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a form in a Maybe.\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "just",
          "package": "fay",
          "signature": "m a -\u003e m (Maybe a)",
          "source": "src/Fay-Control-Monad-Extra.html#just",
          "type": "function"
        },
        "index": {
          "description": "Wrap up form in Maybe",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "just",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "fay",
          "signature": "m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of maybe.\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "maybeM",
          "package": "fay",
          "signature": "a -\u003e (a1 -\u003e m a) -\u003e Maybe a1 -\u003e m a",
          "source": "src/Fay-Control-Monad-Extra.html#maybeM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of maybe",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "maybeM",
          "normalized": "a-\u003e(a-\u003eb a)-\u003eMaybe a-\u003eb a",
          "package": "fay",
          "signature": "a-\u003e(a-\u003em a)-\u003eMaybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:maybeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the value is Just.\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.Extra",
          "name": "whenJust",
          "package": "fay",
          "signature": "Maybe a -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/Fay-Control-Monad-Extra.html#whenJust",
          "type": "function"
        },
        "index": {
          "description": "When the value is Just",
          "hierarchy": "Fay Control Monad Extra",
          "module": "Fay.Control.Monad.Extra",
          "name": "whenJust",
          "normalized": "Maybe a-\u003e(a-\u003eb())-\u003eb()",
          "package": "fay",
          "partial": "Just",
          "signature": "Maybe a-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-Extra.html#v:whenJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlias of MonadIO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Control.Monad.IO",
          "name": "IO",
          "package": "fay",
          "source": "src/Fay-Control-Monad-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Alias of MonadIO",
          "hierarchy": "Fay Control Monad IO",
          "module": "Fay.Control.Monad.IO",
          "name": "IO",
          "package": "fay",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias of liftIO, I hate typing it. Hate reading it.\n\u003c/p\u003e",
          "module": "Fay.Control.Monad.IO",
          "name": "io",
          "package": "fay",
          "signature": "IO a -\u003e m a",
          "source": "src/Fay-Control-Monad-IO.html#io",
          "type": "function"
        },
        "index": {
          "description": "Alias of liftIO hate typing it Hate reading it",
          "hierarchy": "Fay Control Monad IO",
          "module": "Fay.Control.Monad.IO",
          "name": "io",
          "normalized": "IO a-\u003eb a",
          "package": "fay",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Control-Monad-IO.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a Haskell value to a (JSON representation of a) Fay value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Convert",
          "name": "Convert",
          "package": "fay",
          "source": "src/Fay-Convert.html",
          "type": "module"
        },
        "index": {
          "description": "Convert Haskell value to JSON representation of Fay value",
          "hierarchy": "Fay Convert",
          "module": "Fay.Convert",
          "name": "Convert",
          "package": "fay",
          "partial": "Convert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Convert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value representing a Fay value to a Haskell value.\n\u003c/p\u003e",
          "module": "Fay.Convert",
          "name": "readFromFay",
          "package": "fay",
          "signature": "Value -\u003e Maybe a",
          "source": "src/Fay-Convert.html#readFromFay",
          "type": "function"
        },
        "index": {
          "description": "Convert value representing Fay value to Haskell value",
          "hierarchy": "Fay Convert",
          "module": "Fay.Convert",
          "name": "readFromFay",
          "normalized": "Value-\u003eMaybe a",
          "package": "fay",
          "partial": "From Fay",
          "signature": "Value-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Convert.html#v:readFromFay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value to a value representing a Fay value.\n\u003c/p\u003e",
          "module": "Fay.Convert",
          "name": "showToFay",
          "package": "fay",
          "signature": "a -\u003e Maybe Value",
          "source": "src/Fay-Convert.html#showToFay",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value to value representing Fay value",
          "hierarchy": "Fay Convert",
          "module": "Fay.Convert",
          "name": "showToFay",
          "normalized": "a-\u003eMaybe Value",
          "package": "fay",
          "partial": "To Fay",
          "signature": "a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Convert.html#v:showToFay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra list functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Data.List.Extra",
          "name": "Extra",
          "package": "fay",
          "source": "src/Fay-Data-List-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra list functions",
          "hierarchy": "Fay Data List Extra",
          "module": "Fay.Data.List.Extra",
          "name": "Extra",
          "package": "fay",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Data-List-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip of map.\n\u003c/p\u003e",
          "module": "Fay.Data.List.Extra",
          "name": "for",
          "package": "fay",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Fay-Data-List-Extra.html#for",
          "type": "function"
        },
        "index": {
          "description": "Flip of map",
          "hierarchy": "Fay Data List Extra",
          "module": "Fay.Data.List.Extra",
          "name": "for",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "fay",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Data-List-Extra.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the union of a list of lists.\n\u003c/p\u003e",
          "module": "Fay.Data.List.Extra",
          "name": "unionOf",
          "package": "fay",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Fay-Data-List-Extra.html#unionOf",
          "type": "function"
        },
        "index": {
          "description": "Get the union of list of lists",
          "hierarchy": "Fay Data List Extra",
          "module": "Fay.Data.List.Extra",
          "name": "unionOf",
          "normalized": "[[a]]-\u003e[a]",
          "package": "fay",
          "partial": "Of",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Data-List-Extra.html#v:unionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "NoAnnotation",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "NoAnnotation",
          "package": "fay",
          "partial": "No Annotation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Alt",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Alt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Alt",
          "package": "fay",
          "partial": "Alt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "BangType",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#BangType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "BangType",
          "package": "fay",
          "partial": "Bang Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:BangType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ClassDecl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ClassDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ClassDecl",
          "package": "fay",
          "partial": "Class Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ClassDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Decl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Decl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Decl",
          "package": "fay",
          "partial": "Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "DeclHead",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#DeclHead",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "DeclHead",
          "package": "fay",
          "partial": "Decl Head",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:DeclHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Ex",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Ex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Ex",
          "package": "fay",
          "partial": "Ex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Exp",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Exp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Exp",
          "package": "fay",
          "partial": "Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ExportSpec",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ExportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ExportSpec",
          "package": "fay",
          "partial": "Export Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ExportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "FieldDecl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#FieldDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "FieldDecl",
          "package": "fay",
          "partial": "Field Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:FieldDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "FieldUpdate",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#FieldUpdate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "FieldUpdate",
          "package": "fay",
          "partial": "Field Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:FieldUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "GadtDecl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#GadtDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "GadtDecl",
          "package": "fay",
          "partial": "Gadt Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:GadtDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "GuardedAlts",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#GuardedAlts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "GuardedAlts",
          "package": "fay",
          "partial": "Guarded Alts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:GuardedAlts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "GuardedRhs",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#GuardedRhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "GuardedRhs",
          "package": "fay",
          "partial": "Guarded Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:GuardedRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ImportDecl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ImportDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ImportDecl",
          "package": "fay",
          "partial": "Import Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ImportDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ImportSpec",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ImportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ImportSpec",
          "package": "fay",
          "partial": "Import Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ImportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Literal",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Literal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Literal",
          "package": "fay",
          "partial": "Literal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Match",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Match",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Match",
          "package": "fay",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Module",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Module",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Module",
          "package": "fay",
          "partial": "Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ModuleName",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ModuleName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ModuleName",
          "package": "fay",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "ModulePragma",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#ModulePragma",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "ModulePragma",
          "package": "fay",
          "partial": "Module Pragma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:ModulePragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Name",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Name",
          "package": "fay",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Pat",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Pat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Pat",
          "package": "fay",
          "partial": "Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "PatField",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#PatField",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "PatField",
          "package": "fay",
          "partial": "Pat Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:PatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "QName",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#QName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "QName",
          "package": "fay",
          "partial": "QName",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "QOp",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#QOp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "QOp",
          "package": "fay",
          "partial": "QOp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:QOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "QualConDecl",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#QualConDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "QualConDecl",
          "package": "fay",
          "partial": "Qual Con Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:QualConDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "QualStmt",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#QualStmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "QualStmt",
          "package": "fay",
          "partial": "Qual Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:QualStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Rhs",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Rhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Rhs",
          "package": "fay",
          "partial": "Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "SpecialCon",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#SpecialCon",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "SpecialCon",
          "package": "fay",
          "partial": "Special Con",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:SpecialCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcLoc",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#SrcLoc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcLoc",
          "package": "fay",
          "partial": "Src Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:SrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcSpan",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#SrcSpan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcSpan",
          "package": "fay",
          "partial": "Src Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:SrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcSpanInfo",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#SrcSpanInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "SrcSpanInfo",
          "package": "fay",
          "partial": "Src Span Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:SrcSpanInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Stmt",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Stmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Stmt",
          "package": "fay",
          "partial": "Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "TyVarBind",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#TyVarBind",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "TyVarBind",
          "package": "fay",
          "partial": "Ty Var Bind",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:TyVarBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "Type",
          "package": "fay",
          "source": "src/Fay-Exts-NoAnnotation.html#Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "Type",
          "package": "fay",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.NoAnnotation",
          "name": "unAnn",
          "package": "fay",
          "signature": "f a -\u003e f ()",
          "source": "src/Fay-Exts-NoAnnotation.html#unAnn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts NoAnnotation",
          "module": "Fay.Exts.NoAnnotation",
          "name": "unAnn",
          "normalized": "a b-\u003ea()",
          "package": "fay",
          "partial": "Ann",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-NoAnnotation.html#v:unAnn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Scoped",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Scoped",
          "package": "fay",
          "partial": "Scoped",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Alt",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Alt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Alt",
          "package": "fay",
          "partial": "Alt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "BangType",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#BangType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "BangType",
          "package": "fay",
          "partial": "Bang Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:BangType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ClassDecl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ClassDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ClassDecl",
          "package": "fay",
          "partial": "Class Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ClassDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Decl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Decl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Decl",
          "package": "fay",
          "partial": "Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "DeclHead",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#DeclHead",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "DeclHead",
          "package": "fay",
          "partial": "Decl Head",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:DeclHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Ex",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Ex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Ex",
          "package": "fay",
          "partial": "Ex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Exp",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Exp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Exp",
          "package": "fay",
          "partial": "Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ExportSpec",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ExportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ExportSpec",
          "package": "fay",
          "partial": "Export Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ExportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "FieldDecl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#FieldDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "FieldDecl",
          "package": "fay",
          "partial": "Field Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:FieldDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "FieldUpdate",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#FieldUpdate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "FieldUpdate",
          "package": "fay",
          "partial": "Field Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:FieldUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "GadtDecl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#GadtDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "GadtDecl",
          "package": "fay",
          "partial": "Gadt Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:GadtDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "GuardedAlts",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#GuardedAlts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "GuardedAlts",
          "package": "fay",
          "partial": "Guarded Alts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:GuardedAlts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "GuardedRhs",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#GuardedRhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "GuardedRhs",
          "package": "fay",
          "partial": "Guarded Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:GuardedRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ImportDecl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ImportDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ImportDecl",
          "package": "fay",
          "partial": "Import Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ImportDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ImportSpec",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ImportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ImportSpec",
          "package": "fay",
          "partial": "Import Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ImportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Literal",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Literal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Literal",
          "package": "fay",
          "partial": "Literal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Match",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Match",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Match",
          "package": "fay",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Module",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Module",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Module",
          "package": "fay",
          "partial": "Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ModuleName",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ModuleName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ModuleName",
          "package": "fay",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "ModulePragma",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#ModulePragma",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "ModulePragma",
          "package": "fay",
          "partial": "Module Pragma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:ModulePragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Name",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Name",
          "package": "fay",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Pat",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Pat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Pat",
          "package": "fay",
          "partial": "Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "PatField",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#PatField",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "PatField",
          "package": "fay",
          "partial": "Pat Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:PatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "QName",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#QName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "QName",
          "package": "fay",
          "partial": "QName",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "QOp",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#QOp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "QOp",
          "package": "fay",
          "partial": "QOp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:QOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "QualConDecl",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#QualConDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "QualConDecl",
          "package": "fay",
          "partial": "Qual Con Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:QualConDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "QualStmt",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#QualStmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "QualStmt",
          "package": "fay",
          "partial": "Qual Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:QualStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Rhs",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Rhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Rhs",
          "package": "fay",
          "partial": "Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "SpecialCon",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#SpecialCon",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "SpecialCon",
          "package": "fay",
          "partial": "Special Con",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:SpecialCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "SrcLoc",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#SrcLoc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "SrcLoc",
          "package": "fay",
          "partial": "Src Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:SrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Stmt",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Stmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Stmt",
          "package": "fay",
          "partial": "Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "TyVarBind",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#TyVarBind",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "TyVarBind",
          "package": "fay",
          "partial": "Ty Var Bind",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:TyVarBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "Type",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "Type",
          "package": "fay",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "X",
          "package": "fay",
          "source": "src/Fay-Exts-Scoped.html#X",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "X",
          "package": "fay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "noI",
          "package": "fay",
          "signature": "Scoped SrcSpanInfo",
          "source": "src/Fay-Exts-Scoped.html#noI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "noI",
          "package": "fay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#v:noI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts.Scoped",
          "name": "srcSpanInfo",
          "package": "fay",
          "signature": "Scoped SrcSpanInfo -\u003e SrcSpanInfo",
          "source": "src/Fay-Exts-Scoped.html#srcSpanInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts Scoped",
          "module": "Fay.Exts.Scoped",
          "name": "srcSpanInfo",
          "normalized": "Scoped SrcSpanInfo-\u003eSrcSpanInfo",
          "package": "fay",
          "partial": "Span Info",
          "signature": "Scoped SrcSpanInfo-\u003eSrcSpanInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts-Scoped.html#v:srcSpanInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Exts",
          "package": "fay",
          "source": "src/Fay-Exts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Exts",
          "package": "fay",
          "partial": "Exts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Alt",
          "package": "fay",
          "source": "src/Fay-Exts.html#Alt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Alt",
          "package": "fay",
          "partial": "Alt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "BangType",
          "package": "fay",
          "source": "src/Fay-Exts.html#BangType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "BangType",
          "package": "fay",
          "partial": "Bang Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:BangType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ClassDecl",
          "package": "fay",
          "source": "src/Fay-Exts.html#ClassDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ClassDecl",
          "package": "fay",
          "partial": "Class Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ClassDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Decl",
          "package": "fay",
          "source": "src/Fay-Exts.html#Decl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Decl",
          "package": "fay",
          "partial": "Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Decl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "DeclHead",
          "package": "fay",
          "source": "src/Fay-Exts.html#DeclHead",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "DeclHead",
          "package": "fay",
          "partial": "Decl Head",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:DeclHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Ex",
          "package": "fay",
          "source": "src/Fay-Exts.html#Ex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Ex",
          "package": "fay",
          "partial": "Ex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Exp",
          "package": "fay",
          "source": "src/Fay-Exts.html#Exp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Exp",
          "package": "fay",
          "partial": "Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ExportSpec",
          "package": "fay",
          "source": "src/Fay-Exts.html#ExportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ExportSpec",
          "package": "fay",
          "partial": "Export Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ExportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "FieldDecl",
          "package": "fay",
          "source": "src/Fay-Exts.html#FieldDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "FieldDecl",
          "package": "fay",
          "partial": "Field Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:FieldDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "FieldUpdate",
          "package": "fay",
          "source": "src/Fay-Exts.html#FieldUpdate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "FieldUpdate",
          "package": "fay",
          "partial": "Field Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:FieldUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "GadtDecl",
          "package": "fay",
          "source": "src/Fay-Exts.html#GadtDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "GadtDecl",
          "package": "fay",
          "partial": "Gadt Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:GadtDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "GuardedAlts",
          "package": "fay",
          "source": "src/Fay-Exts.html#GuardedAlts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "GuardedAlts",
          "package": "fay",
          "partial": "Guarded Alts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:GuardedAlts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "GuardedRhs",
          "package": "fay",
          "source": "src/Fay-Exts.html#GuardedRhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "GuardedRhs",
          "package": "fay",
          "partial": "Guarded Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:GuardedRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ImportDecl",
          "package": "fay",
          "source": "src/Fay-Exts.html#ImportDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ImportDecl",
          "package": "fay",
          "partial": "Import Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ImportDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ImportSpec",
          "package": "fay",
          "source": "src/Fay-Exts.html#ImportSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ImportSpec",
          "package": "fay",
          "partial": "Import Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ImportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Literal",
          "package": "fay",
          "source": "src/Fay-Exts.html#Literal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Literal",
          "package": "fay",
          "partial": "Literal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Match",
          "package": "fay",
          "source": "src/Fay-Exts.html#Match",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Match",
          "package": "fay",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Module",
          "package": "fay",
          "source": "src/Fay-Exts.html#Module",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Module",
          "package": "fay",
          "partial": "Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ModuleName",
          "package": "fay",
          "source": "src/Fay-Exts.html#ModuleName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ModuleName",
          "package": "fay",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "ModulePragma",
          "package": "fay",
          "source": "src/Fay-Exts.html#ModulePragma",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "ModulePragma",
          "package": "fay",
          "partial": "Module Pragma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:ModulePragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Name",
          "package": "fay",
          "source": "src/Fay-Exts.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Name",
          "package": "fay",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Pat",
          "package": "fay",
          "source": "src/Fay-Exts.html#Pat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Pat",
          "package": "fay",
          "partial": "Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "PatField",
          "package": "fay",
          "source": "src/Fay-Exts.html#PatField",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "PatField",
          "package": "fay",
          "partial": "Pat Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:PatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "QName",
          "package": "fay",
          "source": "src/Fay-Exts.html#QName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "QName",
          "package": "fay",
          "partial": "QName",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "QOp",
          "package": "fay",
          "source": "src/Fay-Exts.html#QOp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "QOp",
          "package": "fay",
          "partial": "QOp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:QOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "QualConDecl",
          "package": "fay",
          "source": "src/Fay-Exts.html#QualConDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "QualConDecl",
          "package": "fay",
          "partial": "Qual Con Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:QualConDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "QualStmt",
          "package": "fay",
          "source": "src/Fay-Exts.html#QualStmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "QualStmt",
          "package": "fay",
          "partial": "Qual Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:QualStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Rhs",
          "package": "fay",
          "source": "src/Fay-Exts.html#Rhs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Rhs",
          "package": "fay",
          "partial": "Rhs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "SpecialCon",
          "package": "fay",
          "source": "src/Fay-Exts.html#SpecialCon",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "SpecialCon",
          "package": "fay",
          "partial": "Special Con",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:SpecialCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "SrcLoc",
          "package": "fay",
          "source": "src/Fay-Exts.html#SrcLoc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "SrcLoc",
          "package": "fay",
          "partial": "Src Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:SrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Stmt",
          "package": "fay",
          "source": "src/Fay-Exts.html#Stmt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Stmt",
          "package": "fay",
          "partial": "Stmt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "TyVarBind",
          "package": "fay",
          "source": "src/Fay-Exts.html#TyVarBind",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "TyVarBind",
          "package": "fay",
          "partial": "Ty Var Bind",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:TyVarBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "Type",
          "package": "fay",
          "source": "src/Fay-Exts.html#Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "Type",
          "package": "fay",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "X",
          "package": "fay",
          "source": "src/Fay-Exts.html#X",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "X",
          "package": "fay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "convertFieldDecl",
          "package": "fay",
          "signature": "FieldDecl a -\u003e ([Name a], BangType a)",
          "source": "src/Fay-Exts.html#convertFieldDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "convertFieldDecl",
          "normalized": "FieldDecl a-\u003e([Name a],BangType a)",
          "package": "fay",
          "partial": "Field Decl",
          "signature": "FieldDecl a-\u003e([Name a],BangType a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:convertFieldDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "declHeadName",
          "package": "fay",
          "signature": "DeclHead a -\u003e Name a",
          "source": "src/Fay-Exts.html#declHeadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "declHeadName",
          "normalized": "DeclHead a-\u003eName a",
          "package": "fay",
          "partial": "Head Name",
          "signature": "DeclHead a-\u003eName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:declHeadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "fieldDeclNames",
          "package": "fay",
          "signature": "FieldDecl a -\u003e [Name a]",
          "source": "src/Fay-Exts.html#fieldDeclNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "fieldDeclNames",
          "normalized": "FieldDecl a-\u003e[Name a]",
          "package": "fay",
          "partial": "Decl Names",
          "signature": "FieldDecl a-\u003e[Name a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:fieldDeclNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "mkIdent",
          "package": "fay",
          "signature": "String -\u003e Name SrcSpanInfo",
          "source": "src/Fay-Exts.html#mkIdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "mkIdent",
          "normalized": "String-\u003eName SrcSpanInfo",
          "package": "fay",
          "partial": "Ident",
          "signature": "String-\u003eName SrcSpanInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:mkIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "moduleExports",
          "package": "fay",
          "signature": "Module X -\u003e Maybe (ExportSpecList X)",
          "source": "src/Fay-Exts.html#moduleExports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "moduleExports",
          "normalized": "Module X-\u003eMaybe(ExportSpecList X)",
          "package": "fay",
          "partial": "Exports",
          "signature": "Module X-\u003eMaybe(ExportSpecList X)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:moduleExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "moduleName",
          "package": "fay",
          "signature": "Module a -\u003e ModuleName a",
          "source": "src/Fay-Exts.html#moduleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "moduleName",
          "normalized": "Module a-\u003eModuleName a",
          "package": "fay",
          "partial": "Name",
          "signature": "Module a-\u003eModuleName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:moduleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "moduleNameString",
          "package": "fay",
          "signature": "ModuleName t -\u003e String",
          "source": "src/Fay-Exts.html#moduleNameString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "moduleNameString",
          "normalized": "ModuleName a-\u003eString",
          "package": "fay",
          "partial": "Name String",
          "signature": "ModuleName t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:moduleNameString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Exts",
          "name": "noI",
          "package": "fay",
          "signature": "SrcSpanInfo",
          "source": "src/Fay-Exts.html#noI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Exts",
          "module": "Fay.Exts",
          "name": "noI",
          "package": "fay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Exts.html#v:noI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe internal FFI module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.FFI",
          "name": "FFI",
          "package": "fay",
          "source": "src/Fay-FFI.html",
          "type": "module"
        },
        "index": {
          "description": "The internal FFI module",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "FFI",
          "package": "fay",
          "partial": "FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opposite of \u003ca\u003ePtr\u003c/a\u003e. Serialize the specified polymorphic type.\n\u003c/p\u003e\u003cpre\u003e foo :: Automatic a -\u003e String\n\u003c/pre\u003e",
          "module": "Fay.FFI",
          "name": "Automatic",
          "package": "fay",
          "source": "src/Fay-FFI.html#Automatic",
          "type": "type"
        },
        "index": {
          "description": "The opposite of Ptr Serialize the specified polymorphic type foo Automatic String",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Automatic",
          "package": "fay",
          "partial": "Automatic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#t:Automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues that may be undefined\n Defined x encodes to x, Undefined decodes to undefined.\n An undefined property in a record will be removed when encoding.\n\u003c/p\u003e",
          "module": "Fay.FFI",
          "name": "Defined",
          "package": "fay",
          "source": "src/Fay-FFI.html#Defined",
          "type": "data"
        },
        "index": {
          "description": "Values that may be undefined Defined encodes to Undefined decodes to undefined An undefined property in record will be removed when encoding",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Defined",
          "package": "fay",
          "partial": "Defined",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#t:Defined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JavaScript FFI interfacing monad.\n\u003c/p\u003e",
          "module": "Fay.FFI",
          "name": "Fay",
          "package": "fay",
          "source": "src/Fay-Types.html#Fay",
          "type": "data"
        },
        "index": {
          "description": "The JavaScript FFI interfacing monad",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Fay",
          "package": "fay",
          "partial": "Fay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#t:Fay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues that may be null\n  Nullable x decodes to x, Null decodes to null.\n\u003c/p\u003e",
          "module": "Fay.FFI",
          "name": "Nullable",
          "package": "fay",
          "source": "src/Fay-FFI.html#Nullable",
          "type": "data"
        },
        "index": {
          "description": "Values that may be null Nullable decodes to Null decodes to null",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Nullable",
          "package": "fay",
          "partial": "Nullable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#t:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not serialize the specified type. This is useful for, e.g.\n\u003c/p\u003e\u003cpre\u003e foo :: String -\u003e String\n foo = ffi \"%1\"\n\u003c/pre\u003e\u003cp\u003eThis would normally serialize and unserialize the string, for no\n reason, in this case. Instead:\n\u003c/p\u003e\u003cpre\u003e foo :: Ptr String -\u003e Ptr String\n\u003c/pre\u003e\u003cp\u003eWill just give an identity function.\n\u003c/p\u003e",
          "module": "Fay.FFI",
          "name": "Ptr",
          "package": "fay",
          "source": "src/Fay-FFI.html#Ptr",
          "type": "type"
        },
        "index": {
          "description": "Do not serialize the specified type This is useful for e.g foo String String foo ffi This would normally serialize and unserialize the string for no reason in this case Instead foo Ptr String Ptr String Will just give an identity function",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Ptr",
          "package": "fay",
          "partial": "Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#t:Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.FFI",
          "name": "Defined",
          "package": "fay",
          "signature": "Defined a",
          "source": "src/Fay-FFI.html#Defined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Defined",
          "package": "fay",
          "partial": "Defined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#v:Defined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.FFI",
          "name": "Null",
          "package": "fay",
          "signature": "Null",
          "source": "src/Fay-FFI.html#Nullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Null",
          "package": "fay",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.FFI",
          "name": "Nullable",
          "package": "fay",
          "signature": "Nullable a",
          "source": "src/Fay-FFI.html#Nullable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Nullable",
          "package": "fay",
          "partial": "Nullable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#v:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.FFI",
          "name": "Undefined",
          "package": "fay",
          "signature": "Undefined",
          "source": "src/Fay-FFI.html#Defined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "Undefined",
          "package": "fay",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#v:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a foreign action.\n\u003c/p\u003e",
          "module": "Fay.FFI",
          "name": "ffi",
          "package": "fay",
          "signature": "s-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Declare foreign action",
          "hierarchy": "Fay FFI",
          "module": "Fay.FFI",
          "name": "ffi",
          "normalized": "a-\u003eb",
          "package": "fay",
          "signature": "s-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-FFI.html#v:ffi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra directory functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.System.Directory.Extra",
          "name": "Extra",
          "package": "fay",
          "source": "src/Fay-System-Directory-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra directory functions",
          "hierarchy": "Fay System Directory Extra",
          "module": "Fay.System.Directory.Extra",
          "name": "Extra",
          "package": "fay",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-System-Directory-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all files in a folder and its subdirectories.\n Taken from Real World Haskell\n http:\u003cem/\u003ebook.realworldhaskell.org\u003cem\u003eread\u003c/em\u003eio-case-study-a-library-for-searching-the-filesystem.html\n\u003c/p\u003e",
          "module": "Fay.System.Directory.Extra",
          "name": "getRecursiveContents",
          "package": "fay",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Fay-System-Directory-Extra.html#getRecursiveContents",
          "type": "function"
        },
        "index": {
          "description": "Get all files in folder and its subdirectories Taken from Real World Haskell http book.realworldhaskell.org read io-case-study-a-library-for-searching-the-filesystem.html",
          "hierarchy": "Fay System Directory Extra",
          "module": "Fay.System.Directory.Extra",
          "name": "getRecursiveContents",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "fay",
          "partial": "Recursive Contents",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-System-Directory-Extra.html#v:getRecursiveContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra process functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.System.Process.Extra",
          "name": "Extra",
          "package": "fay",
          "source": "src/Fay-System-Process-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra process functions",
          "hierarchy": "Fay System Process Extra",
          "module": "Fay.System.Process.Extra",
          "name": "Extra",
          "package": "fay",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-System-Process-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from a process returning both std err and out.\n\u003c/p\u003e",
          "module": "Fay.System.Process.Extra",
          "name": "readAllFromProcess",
          "package": "fay",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e IO (Either (String, String) (String, String))",
          "source": "src/Fay-System-Process-Extra.html#readAllFromProcess",
          "type": "function"
        },
        "index": {
          "description": "Read from process returning both std err and out",
          "hierarchy": "Fay System Process Extra",
          "module": "Fay.System.Process.Extra",
          "name": "readAllFromProcess",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(Either(String,String)(String,String))",
          "package": "fay",
          "partial": "All From Process",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(Either(String,String)(String,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-System-Process-Extra.html#v:readAllFromProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll Fay types and instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Types",
          "name": "Types",
          "package": "fay",
          "source": "src/Fay-Types.html",
          "type": "module"
        },
        "index": {
          "description": "All Fay types and instances",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Types",
          "package": "fay",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile monad.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "Compile",
          "package": "fay",
          "source": "src/Fay-Types.html#Compile",
          "type": "newtype"
        },
        "index": {
          "description": "Compile monad",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Compile",
          "package": "fay",
          "partial": "Compile",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:Compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the compiler.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "CompileConfig",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the compiler",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileConfig",
          "package": "fay",
          "partial": "Compile Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError type.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "CompileError",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileError",
          "type": "data"
        },
        "index": {
          "description": "Error type",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileError",
          "package": "fay",
          "partial": "Compile Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileModule",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileModule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileModule",
          "package": "fay",
          "partial": "Compile Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration and globals for the compiler.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "CompileReader",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileReader",
          "type": "data"
        },
        "index": {
          "description": "Configuration and globals for the compiler",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileReader",
          "package": "fay",
          "partial": "Compile Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileResult",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileResult",
          "package": "fay",
          "partial": "Compile Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of the compiler.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "CompileState",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileState",
          "type": "data"
        },
        "index": {
          "description": "State of the compiler",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileState",
          "package": "fay",
          "partial": "Compile State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings written out by the compiler.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "CompileWriter",
          "package": "fay",
          "source": "src/Fay-Types.html#CompileWriter",
          "type": "data"
        },
        "index": {
          "description": "Things written out by the compiler",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileWriter",
          "package": "fay",
          "partial": "Compile Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:CompileWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JavaScript FFI interfacing monad.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "Fay",
          "package": "fay",
          "source": "src/Fay-Types.html#Fay",
          "type": "data"
        },
        "index": {
          "description": "The JavaScript FFI interfacing monad",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Fay",
          "package": "fay",
          "partial": "Fay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:Fay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the data types that are serializable directly to native\n JS data types. Strings, floating points and arrays. The others are:\n actions in the JS monad, which are thunks that shouldn't be forced\n when serialized but wrapped up as JS zero-arg functions, and\n unknown types can't be converted but should at least be forced.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "FundamentalType",
          "package": "fay",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "data"
        },
        "index": {
          "description": "These are the data types that are serializable directly to native JS data types Strings floating points and arrays The others are actions in the JS monad which are thunks that shouldn be forced when serialized but wrapped up as JS zero-arg functions and unknown types can be converted but should at least be forced",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FundamentalType",
          "package": "fay",
          "partial": "Fundamental Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:FundamentalType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression type.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "JsExp",
          "package": "fay",
          "source": "src/Fay-Types.html#JsExp",
          "type": "data"
        },
        "index": {
          "description": "Expression type",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsExp",
          "package": "fay",
          "partial": "Js Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:JsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral value type.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "JsLit",
          "package": "fay",
          "source": "src/Fay-Types.html#JsLit",
          "type": "data"
        },
        "index": {
          "description": "Literal value type",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsLit",
          "package": "fay",
          "partial": "Js Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:JsLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name of some kind.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "JsName",
          "package": "fay",
          "source": "src/Fay-Types.html#JsName",
          "type": "data"
        },
        "index": {
          "description": "name of some kind",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsName",
          "package": "fay",
          "partial": "Js Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:JsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement type.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "JsStmt",
          "package": "fay",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "data"
        },
        "index": {
          "description": "Statement type",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsStmt",
          "package": "fay",
          "partial": "Js Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:JsStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a module split into a list for code generation.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "ModulePath",
          "package": "fay",
          "source": "src/Fay-Types.html#ModulePath",
          "type": "data"
        },
        "index": {
          "description": "The name of module split into list for code generation",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "ModulePath",
          "package": "fay",
          "partial": "Module Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:ModulePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the pretty printer.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "PrintState",
          "package": "fay",
          "source": "src/Fay-Types.html#PrintState",
          "type": "data"
        },
        "index": {
          "description": "The state of the pretty printer",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "PrintState",
          "package": "fay",
          "partial": "Print State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:PrintState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint some value.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "Printable",
          "package": "fay",
          "source": "src/Fay-Types.html#Printable",
          "type": "class"
        },
        "index": {
          "description": "Print some value",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Printable",
          "package": "fay",
          "partial": "Printable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe printer monad.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "Printer",
          "package": "fay",
          "source": "src/Fay-Types.html#Printer",
          "type": "newtype"
        },
        "index": {
          "description": "The printer monad",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Printer",
          "package": "fay",
          "partial": "Printer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe serialization context indicates whether we're currently\n serializing some value or a particular field in a user-defined data\n type.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "SerializeContext",
          "package": "fay",
          "source": "src/Fay-Types.html#SerializeContext",
          "type": "data"
        },
        "index": {
          "description": "The serialization context indicates whether we re currently serializing some value or particular field in user-defined data type",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "SerializeContext",
          "package": "fay",
          "partial": "Serialize Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#t:SerializeContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Automatic",
          "package": "fay",
          "signature": "Automatic",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Automatic",
          "package": "fay",
          "partial": "Automatic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "BoolType",
          "package": "fay",
          "signature": "BoolType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "BoolType",
          "package": "fay",
          "partial": "Bool Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:BoolType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Compile",
          "package": "fay",
          "signature": "Compile",
          "source": "src/Fay-Types.html#Compile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Compile",
          "package": "fay",
          "partial": "Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileConfig",
          "package": "fay",
          "signature": "CompileConfig",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileConfig",
          "package": "fay",
          "partial": "Compile Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:CompileConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileReader",
          "package": "fay",
          "signature": "CompileReader",
          "source": "src/Fay-Types.html#CompileReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileReader",
          "package": "fay",
          "partial": "Compile Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:CompileReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileState",
          "package": "fay",
          "signature": "CompileState",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileState",
          "package": "fay",
          "partial": "Compile State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:CompileState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "CompileWriter",
          "package": "fay",
          "signature": "CompileWriter",
          "source": "src/Fay-Types.html#CompileWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "CompileWriter",
          "package": "fay",
          "partial": "Compile Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:CompileWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Couldn'tFindImport",
          "package": "fay",
          "signature": "Couldn'tFindImport ModuleName [FilePath]",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Couldn'tFindImport",
          "normalized": "Couldn'tFindImport ModuleName[FilePath]",
          "package": "fay",
          "partial": "Couldn't Find Import",
          "signature": "Couldn'tFindImport ModuleName[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Couldn-39-tFindImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "DateType",
          "package": "fay",
          "signature": "DateType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "DateType",
          "package": "fay",
          "partial": "Date Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:DateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Defined",
          "package": "fay",
          "signature": "Defined FundamentalType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Defined",
          "package": "fay",
          "partial": "Defined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Defined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "DoubleType",
          "package": "fay",
          "signature": "DoubleType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "DoubleType",
          "package": "fay",
          "partial": "Double Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:DoubleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "EmptyDoBlock",
          "package": "fay",
          "signature": "EmptyDoBlock",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "EmptyDoBlock",
          "package": "fay",
          "partial": "Empty Do Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:EmptyDoBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FfiFormatBadChars",
          "package": "fay",
          "signature": "FfiFormatBadChars SrcSpanInfo String",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FfiFormatBadChars",
          "package": "fay",
          "partial": "Ffi Format Bad Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FfiFormatBadChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FfiFormatIncompleteArg",
          "package": "fay",
          "signature": "FfiFormatIncompleteArg SrcSpanInfo",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FfiFormatIncompleteArg",
          "package": "fay",
          "partial": "Ffi Format Incomplete Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FfiFormatIncompleteArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FfiFormatInvalidJavaScript",
          "package": "fay",
          "signature": "FfiFormatInvalidJavaScript SrcSpanInfo String String",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FfiFormatInvalidJavaScript",
          "package": "fay",
          "partial": "Ffi Format Invalid Java Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FfiFormatInvalidJavaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FfiFormatNoSuchArg",
          "package": "fay",
          "signature": "FfiFormatNoSuchArg SrcSpanInfo Int",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FfiFormatNoSuchArg",
          "package": "fay",
          "partial": "Ffi Format No Such Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FfiFormatNoSuchArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FfiNeedsTypeSig",
          "package": "fay",
          "signature": "FfiNeedsTypeSig Exp",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FfiNeedsTypeSig",
          "package": "fay",
          "partial": "Ffi Needs Type Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FfiNeedsTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "FunctionType",
          "package": "fay",
          "signature": "FunctionType [FundamentalType]",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "FunctionType",
          "normalized": "FunctionType[FundamentalType]",
          "package": "fay",
          "partial": "Function Type",
          "signature": "FunctionType[FundamentalType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:FunctionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "GHCError",
          "package": "fay",
          "signature": "GHCError String",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "GHCError",
          "package": "fay",
          "partial": "GHCError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:GHCError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "IntType",
          "package": "fay",
          "signature": "IntType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "IntType",
          "package": "fay",
          "partial": "Int Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:IntType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "InvalidDoBlock",
          "package": "fay",
          "signature": "InvalidDoBlock",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "InvalidDoBlock",
          "package": "fay",
          "partial": "Invalid Do Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:InvalidDoBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsAnd",
          "package": "fay",
          "signature": "JsAnd JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsAnd",
          "package": "fay",
          "partial": "Js And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsApp",
          "package": "fay",
          "signature": "JsApp JsExp [JsExp]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsApp",
          "normalized": "JsApp JsExp[JsExp]",
          "package": "fay",
          "partial": "Js App",
          "signature": "JsApp JsExp[JsExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsApply",
          "package": "fay",
          "signature": "JsApply",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsApply",
          "package": "fay",
          "partial": "Js Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsBlock",
          "package": "fay",
          "signature": "JsBlock [JsStmt]",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsBlock",
          "normalized": "JsBlock[JsStmt]",
          "package": "fay",
          "partial": "Js Block",
          "signature": "JsBlock[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsBool",
          "package": "fay",
          "signature": "JsBool Bool",
          "source": "src/Fay-Types.html#JsLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsBool",
          "package": "fay",
          "partial": "Js Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsBuiltIn",
          "package": "fay",
          "signature": "JsBuiltIn Name",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsBuiltIn",
          "package": "fay",
          "partial": "Js Built In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsBuiltIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsChar",
          "package": "fay",
          "signature": "JsChar Char",
          "source": "src/Fay-Types.html#JsLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsChar",
          "package": "fay",
          "partial": "Js Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsConstructor",
          "package": "fay",
          "signature": "JsConstructor QName",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsConstructor",
          "package": "fay",
          "partial": "Js Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsContinue",
          "package": "fay",
          "signature": "JsContinue",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsContinue",
          "package": "fay",
          "partial": "Js Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsEarlyReturn",
          "package": "fay",
          "signature": "JsEarlyReturn JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsEarlyReturn",
          "package": "fay",
          "partial": "Js Early Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsEarlyReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsEq",
          "package": "fay",
          "signature": "JsEq JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsEq",
          "package": "fay",
          "partial": "Js Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsExpStmt",
          "package": "fay",
          "signature": "JsExpStmt JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsExpStmt",
          "package": "fay",
          "partial": "Js Exp Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsExpStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsFloating",
          "package": "fay",
          "signature": "JsFloating Double",
          "source": "src/Fay-Types.html#JsLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsFloating",
          "package": "fay",
          "partial": "Js Floating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsForce",
          "package": "fay",
          "signature": "JsForce",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsForce",
          "package": "fay",
          "partial": "Js Force",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsForce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsFun",
          "package": "fay",
          "signature": "JsFun (Maybe JsName) [JsName] [JsStmt] (Maybe JsExp)",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsFun",
          "normalized": "JsFun(Maybe JsName)[JsName][JsStmt](Maybe JsExp)",
          "package": "fay",
          "partial": "Js Fun",
          "signature": "JsFun(Maybe JsName)[JsName][JsStmt](Maybe JsExp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsGetProp",
          "package": "fay",
          "signature": "JsGetProp JsExp JsName",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsGetProp",
          "package": "fay",
          "partial": "Js Get Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsGetProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsGetPropExtern",
          "package": "fay",
          "signature": "JsGetPropExtern JsExp String",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsGetPropExtern",
          "package": "fay",
          "partial": "Js Get Prop Extern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsGetPropExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsIf",
          "package": "fay",
          "signature": "JsIf JsExp [JsStmt] [JsStmt]",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsIf",
          "normalized": "JsIf JsExp[JsStmt][JsStmt]",
          "package": "fay",
          "partial": "Js If",
          "signature": "JsIf JsExp[JsStmt][JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsIndex",
          "package": "fay",
          "signature": "JsIndex Int JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsIndex",
          "package": "fay",
          "partial": "Js Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsInfix",
          "package": "fay",
          "signature": "JsInfix String JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsInfix",
          "package": "fay",
          "partial": "Js Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsInfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsInstanceOf",
          "package": "fay",
          "signature": "JsInstanceOf JsExp JsName",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsInstanceOf",
          "package": "fay",
          "partial": "Js Instance Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsInstanceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsInt",
          "package": "fay",
          "signature": "JsInt Int",
          "source": "src/Fay-Types.html#JsLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsInt",
          "package": "fay",
          "partial": "Js Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsList",
          "package": "fay",
          "signature": "JsList [JsExp]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsList",
          "normalized": "JsList[JsExp]",
          "package": "fay",
          "partial": "Js List",
          "signature": "JsList[JsExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsLit",
          "package": "fay",
          "signature": "JsLit JsLit",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsLit",
          "package": "fay",
          "partial": "Js Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsLitObj",
          "package": "fay",
          "signature": "JsLitObj [(Name, JsExp)]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsLitObj",
          "normalized": "JsLitObj[(Name,JsExp)]",
          "package": "fay",
          "partial": "Js Lit Obj",
          "signature": "JsLitObj[(Name,JsExp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsLitObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsLookup",
          "package": "fay",
          "signature": "JsLookup JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsLookup",
          "package": "fay",
          "partial": "Js Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsModuleName",
          "package": "fay",
          "signature": "JsModuleName ModuleName",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsModuleName",
          "package": "fay",
          "partial": "Js Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsName",
          "package": "fay",
          "signature": "JsName JsName",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsName",
          "package": "fay",
          "partial": "Js Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsNameVar",
          "package": "fay",
          "signature": "JsNameVar QName",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsNameVar",
          "package": "fay",
          "partial": "Js Name Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsNameVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsNegApp",
          "package": "fay",
          "signature": "JsNegApp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsNegApp",
          "package": "fay",
          "partial": "Js Neg App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsNegApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsNeq",
          "package": "fay",
          "signature": "JsNeq JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsNeq",
          "package": "fay",
          "partial": "Js Neq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsNeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsNew",
          "package": "fay",
          "signature": "JsNew JsName [JsExp]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsNew",
          "normalized": "JsNew JsName[JsExp]",
          "package": "fay",
          "partial": "Js New",
          "signature": "JsNew JsName[JsExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsNull",
          "package": "fay",
          "signature": "JsNull",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsNull",
          "package": "fay",
          "partial": "Js Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsObj",
          "package": "fay",
          "signature": "JsObj [(String, JsExp)]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsObj",
          "normalized": "JsObj[(String,JsExp)]",
          "package": "fay",
          "partial": "Js Obj",
          "signature": "JsObj[(String,JsExp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsOr",
          "package": "fay",
          "signature": "JsOr JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsOr",
          "package": "fay",
          "partial": "Js Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsParam",
          "package": "fay",
          "signature": "JsParam Integer",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsParam",
          "package": "fay",
          "partial": "Js Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsParametrizedType",
          "package": "fay",
          "signature": "JsParametrizedType",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsParametrizedType",
          "package": "fay",
          "partial": "Js Parametrized Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsParametrizedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsParen",
          "package": "fay",
          "signature": "JsParen JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsParen",
          "package": "fay",
          "partial": "Js Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsRawExp",
          "package": "fay",
          "signature": "JsRawExp String",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsRawExp",
          "package": "fay",
          "partial": "Js Raw Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsRawExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSeq",
          "package": "fay",
          "signature": "JsSeq [JsExp]",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSeq",
          "normalized": "JsSeq[JsExp]",
          "package": "fay",
          "partial": "Js Seq",
          "signature": "JsSeq[JsExp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSetConstructor",
          "package": "fay",
          "signature": "JsSetConstructor QName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSetConstructor",
          "package": "fay",
          "partial": "Js Set Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSetConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSetModule",
          "package": "fay",
          "signature": "JsSetModule ModulePath JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSetModule",
          "package": "fay",
          "partial": "Js Set Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSetModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSetProp",
          "package": "fay",
          "signature": "JsSetProp JsName JsName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSetProp",
          "package": "fay",
          "partial": "Js Set Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSetProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSetPropExtern",
          "package": "fay",
          "signature": "JsSetPropExtern JsName JsName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSetPropExtern",
          "package": "fay",
          "partial": "Js Set Prop Extern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSetPropExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsSetQName",
          "package": "fay",
          "signature": "JsSetQName (Maybe SrcSpan) QName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsSetQName",
          "package": "fay",
          "partial": "Js Set QName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsSetQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsStr",
          "package": "fay",
          "signature": "JsStr String",
          "source": "src/Fay-Types.html#JsLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsStr",
          "package": "fay",
          "partial": "Js Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsTernaryIf",
          "package": "fay",
          "signature": "JsTernaryIf JsExp JsExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsTernaryIf",
          "package": "fay",
          "partial": "Js Ternary If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsTernaryIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsThis",
          "package": "fay",
          "signature": "JsThis",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsThis",
          "package": "fay",
          "partial": "Js This",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsThrow",
          "package": "fay",
          "signature": "JsThrow JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsThrow",
          "package": "fay",
          "partial": "Js Throw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsThrowExp",
          "package": "fay",
          "signature": "JsThrowExp JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsThrowExp",
          "package": "fay",
          "partial": "Js Throw Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsThrowExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsThunk",
          "package": "fay",
          "signature": "JsThunk",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsThunk",
          "package": "fay",
          "partial": "Js Thunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsThunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsTmp",
          "package": "fay",
          "signature": "JsTmp Integer",
          "source": "src/Fay-Types.html#JsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsTmp",
          "package": "fay",
          "partial": "Js Tmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsTmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsType",
          "package": "fay",
          "signature": "JsType FundamentalType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsType",
          "package": "fay",
          "partial": "Js Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsUndefined",
          "package": "fay",
          "signature": "JsUndefined",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsUndefined",
          "package": "fay",
          "partial": "Js Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsUndefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsUpdate",
          "package": "fay",
          "signature": "JsUpdate JsName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsUpdate",
          "package": "fay",
          "partial": "Js Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsUpdateProp",
          "package": "fay",
          "signature": "JsUpdateProp JsExp JsName JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsUpdateProp",
          "package": "fay",
          "partial": "Js Update Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsUpdateProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsUpdatePropExtern",
          "package": "fay",
          "signature": "JsUpdatePropExtern JsExp JsName JsExp",
          "source": "src/Fay-Types.html#JsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsUpdatePropExtern",
          "package": "fay",
          "partial": "Js Update Prop Extern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsUpdatePropExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsVar",
          "package": "fay",
          "signature": "JsVar JsName JsExp",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsVar",
          "package": "fay",
          "partial": "Js Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "JsWhile",
          "package": "fay",
          "signature": "JsWhile JsExp [JsStmt]",
          "source": "src/Fay-Types.html#JsStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "JsWhile",
          "normalized": "JsWhile JsExp[JsStmt]",
          "package": "fay",
          "partial": "Js While",
          "signature": "JsWhile JsExp[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:JsWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "ListType",
          "package": "fay",
          "signature": "ListType FundamentalType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "ListType",
          "package": "fay",
          "partial": "List Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:ListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Nullable",
          "package": "fay",
          "signature": "Nullable FundamentalType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Nullable",
          "package": "fay",
          "partial": "Nullable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "ParseError",
          "package": "fay",
          "signature": "ParseError SrcLoc String",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "ParseError",
          "package": "fay",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "PrintState",
          "package": "fay",
          "signature": "PrintState",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "PrintState",
          "package": "fay",
          "partial": "Print State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:PrintState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "Printer",
          "package": "fay",
          "signature": "Printer",
          "source": "src/Fay-Types.html#Printer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "Printer",
          "package": "fay",
          "partial": "Printer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "PtrType",
          "package": "fay",
          "signature": "PtrType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "PtrType",
          "package": "fay",
          "partial": "Ptr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:PtrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "SerializeAnywhere",
          "package": "fay",
          "signature": "SerializeAnywhere",
          "source": "src/Fay-Types.html#SerializeContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "SerializeAnywhere",
          "package": "fay",
          "partial": "Serialize Anywhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:SerializeAnywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "SerializeUserArg",
          "package": "fay",
          "signature": "SerializeUserArg Int",
          "source": "src/Fay-Types.html#SerializeContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "SerializeUserArg",
          "package": "fay",
          "partial": "Serialize User Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:SerializeUserArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "ShouldBeDesugared",
          "package": "fay",
          "signature": "ShouldBeDesugared String",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "ShouldBeDesugared",
          "package": "fay",
          "partial": "Should Be Desugared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:ShouldBeDesugared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "StringType",
          "package": "fay",
          "signature": "StringType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "StringType",
          "package": "fay",
          "partial": "String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:StringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "TupleType",
          "package": "fay",
          "signature": "TupleType [FundamentalType]",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "TupleType",
          "normalized": "TupleType[FundamentalType]",
          "package": "fay",
          "partial": "Tuple Type",
          "signature": "TupleType[FundamentalType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:TupleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnableResolveQualified",
          "package": "fay",
          "signature": "UnableResolveQualified QName",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnableResolveQualified",
          "package": "fay",
          "partial": "Unable Resolve Qualified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnableResolveQualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnknownType",
          "package": "fay",
          "signature": "UnknownType",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnknownType",
          "package": "fay",
          "partial": "Unknown Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnknownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedDeclaration",
          "package": "fay",
          "signature": "UnsupportedDeclaration Decl",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedDeclaration",
          "package": "fay",
          "partial": "Unsupported Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedEnum",
          "package": "fay",
          "signature": "UnsupportedEnum Exp",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedEnum",
          "package": "fay",
          "partial": "Unsupported Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedExportSpec",
          "package": "fay",
          "signature": "UnsupportedExportSpec ExportSpec",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedExportSpec",
          "package": "fay",
          "partial": "Unsupported Export Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedExportSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedExpression",
          "package": "fay",
          "signature": "UnsupportedExpression Exp",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedExpression",
          "package": "fay",
          "partial": "Unsupported Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedFieldPattern",
          "package": "fay",
          "signature": "UnsupportedFieldPattern PatField",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedFieldPattern",
          "package": "fay",
          "partial": "Unsupported Field Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedFieldPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedImport",
          "package": "fay",
          "signature": "UnsupportedImport ImportDecl",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedImport",
          "package": "fay",
          "partial": "Unsupported Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedLet",
          "package": "fay",
          "signature": "UnsupportedLet",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedLet",
          "package": "fay",
          "partial": "Unsupported Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedLetBinding",
          "package": "fay",
          "signature": "UnsupportedLetBinding Decl",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedLetBinding",
          "package": "fay",
          "partial": "Unsupported Let Binding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedLetBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedLiteral",
          "package": "fay",
          "signature": "UnsupportedLiteral Literal",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedLiteral",
          "package": "fay",
          "partial": "Unsupported Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedModuleSyntax",
          "package": "fay",
          "signature": "UnsupportedModuleSyntax String Module",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedModuleSyntax",
          "package": "fay",
          "partial": "Unsupported Module Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedModuleSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedPattern",
          "package": "fay",
          "signature": "UnsupportedPattern Pat",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedPattern",
          "package": "fay",
          "partial": "Unsupported Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedQualStmt",
          "package": "fay",
          "signature": "UnsupportedQualStmt QualStmt",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedQualStmt",
          "package": "fay",
          "partial": "Unsupported Qual Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedQualStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedRecursiveDo",
          "package": "fay",
          "signature": "UnsupportedRecursiveDo",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedRecursiveDo",
          "package": "fay",
          "partial": "Unsupported Recursive Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedRecursiveDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedRhs",
          "package": "fay",
          "signature": "UnsupportedRhs Rhs",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedRhs",
          "package": "fay",
          "partial": "Unsupported Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedWhereInAlt",
          "package": "fay",
          "signature": "UnsupportedWhereInAlt Alt",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedWhereInAlt",
          "package": "fay",
          "partial": "Unsupported Where In Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedWhereInAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UnsupportedWhereInMatch",
          "package": "fay",
          "signature": "UnsupportedWhereInMatch Match",
          "source": "src/Fay-Types.html#CompileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UnsupportedWhereInMatch",
          "package": "fay",
          "partial": "Unsupported Where In Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UnsupportedWhereInMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "UserDefined",
          "package": "fay",
          "signature": "UserDefined Name [FundamentalType]",
          "source": "src/Fay-Types.html#FundamentalType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "UserDefined",
          "normalized": "UserDefined Name[FundamentalType]",
          "package": "fay",
          "partial": "User Defined",
          "signature": "UserDefined Name[FundamentalType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:UserDefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom source location for fay-base\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configBasePath",
          "package": "fay",
          "signature": "Maybe FilePath",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Custom source location for fay-base",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configBasePath",
          "package": "fay",
          "partial": "Base Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configBasePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly a fay package name, and a include directory.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configDirectoryIncludes",
          "package": "fay",
          "signature": "[(Maybe String, FilePath)]",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Possibly fay package name and include directory",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configDirectoryIncludes",
          "normalized": "[(Maybe String,FilePath)]",
          "package": "fay",
          "partial": "Directory Includes",
          "signature": "[(Maybe String,FilePath)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configDirectoryIncludes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport the runtime?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configExportRuntime",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Export the runtime",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configExportRuntime",
          "package": "fay",
          "partial": "Export Runtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configExportRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport the stdlib?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configExportStdlib",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Export the stdlib",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configExportStdlib",
          "package": "fay",
          "partial": "Export Stdlib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configExportStdlib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport \u003cem\u003eonly\u003c/em\u003e the stdlib?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configExportStdlibOnly",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Export only the stdlib",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configExportStdlibOnly",
          "package": "fay",
          "partial": "Export Stdlib Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configExportStdlibOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile path to output to.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configFilePath",
          "package": "fay",
          "signature": "Maybe FilePath",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "File path to output to",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configFilePath",
          "package": "fay",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten function application?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configFlattenApps",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Flatten function application",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configFlattenApps",
          "package": "fay",
          "partial": "Flatten Apps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configFlattenApps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun Google Closure on the produced JS.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configGClosure",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Run Google Closure on the produced JS",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configGClosure",
          "package": "fay",
          "partial": "GClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configGClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny JS files to link to in the HTML.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configHtmlJSLibs",
          "package": "fay",
          "signature": "[FilePath]",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Any JS files to link to in the HTML",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configHtmlJSLibs",
          "normalized": "[FilePath]",
          "package": "fay",
          "partial": "Html JSLibs",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configHtmlJSLibs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a HTML file including the produced JS.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configHtmlWrapper",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Output HTML file including the produced JS",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configHtmlWrapper",
          "package": "fay",
          "partial": "Html Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configHtmlWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't invoke main in the produced JS.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configLibrary",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Don invoke main in the produced JS",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configLibrary",
          "package": "fay",
          "partial": "Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun optimizations\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configOptimize",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Run optimizations",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configOptimize",
          "package": "fay",
          "partial": "Optimize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configOptimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe package config e.g. packages-6.12.3.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configPackageConf",
          "package": "fay",
          "signature": "Maybe FilePath",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "The package config e.g packages-6.12.3",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configPackageConf",
          "package": "fay",
          "partial": "Package Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configPackageConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncluded Fay packages.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configPackages",
          "package": "fay",
          "signature": "[String]",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Included Fay packages",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configPackages",
          "normalized": "[String]",
          "package": "fay",
          "partial": "Packages",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the JS output?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configPrettyPrint",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the JS output",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configPrettyPrint",
          "package": "fay",
          "partial": "Pretty Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configPrettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "configRuntimePath",
          "package": "fay",
          "signature": "Maybe FilePath",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configRuntimePath",
          "package": "fay",
          "partial": "Runtime Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configRuntimePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a source map file as outfile.map.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configSourceMap",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Output source map file as outfile.map",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configSourceMap",
          "package": "fay",
          "partial": "Source Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configSourceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce strict and uncurried wrappers for all functions with type signatures in the given module\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configStrict",
          "package": "fay",
          "signature": "[String]",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Produce strict and uncurried wrappers for all functions with type signatures in the given module",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configStrict",
          "normalized": "[String]",
          "package": "fay",
          "partial": "Strict",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypecheck with GHC.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configTypecheck",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Typecheck with GHC",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configTypecheck",
          "package": "fay",
          "partial": "Typecheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configTypecheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly invoke GHC for typechecking, don't produce any output\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configTypecheckOnly",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Only invoke GHC for typechecking don produce any output",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configTypecheckOnly",
          "package": "fay",
          "partial": "Typecheck Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configTypecheckOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypecheck with -Wall.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configWall",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Typecheck with Wall",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configWall",
          "package": "fay",
          "partial": "Wall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configWall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarn on dubious stuff, not related to typechecking.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "configWarn",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileConfig",
          "type": "function"
        },
        "index": {
          "description": "Warn on dubious stuff not related to typechecking",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "configWarn",
          "package": "fay",
          "partial": "Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:configWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the complete ModulePath from a ModuleName.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "mkModulePath",
          "package": "fay",
          "signature": "ModuleName a -\u003e ModulePath",
          "source": "src/Fay-Types.html#mkModulePath",
          "type": "function"
        },
        "index": {
          "description": "Construct the complete ModulePath from ModuleName",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "mkModulePath",
          "normalized": "ModuleName a-\u003eModulePath",
          "package": "fay",
          "partial": "Module Path",
          "signature": "ModuleName a-\u003eModulePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:mkModulePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting a QName to a ModulePath is only relevant for constructors since\n they can conflict with module names.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "mkModulePathFromQName",
          "package": "fay",
          "signature": "QName a -\u003e ModulePath",
          "source": "src/Fay-Types.html#mkModulePathFromQName",
          "type": "function"
        },
        "index": {
          "description": "Converting QName to ModulePath is only relevant for constructors since they can conflict with module names",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "mkModulePathFromQName",
          "normalized": "QName a-\u003eModulePath",
          "package": "fay",
          "partial": "Module Path From QName",
          "signature": "QName a-\u003eModulePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:mkModulePathFromQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct intermediate module paths from a ModuleName.\n mkModulePaths \u003ca\u003eA.B\u003c/a\u003e =\u003e [[\u003ca\u003eA\u003c/a\u003e], [\u003ca\u003eA\u003c/a\u003e,\u003ca\u003eB\u003c/a\u003e]]\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "mkModulePaths",
          "package": "fay",
          "signature": "ModuleName a -\u003e [ModulePath]",
          "source": "src/Fay-Types.html#mkModulePaths",
          "type": "function"
        },
        "index": {
          "description": "Construct intermediate module paths from ModuleName mkModulePaths A.B",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "mkModulePaths",
          "normalized": "ModuleName a-\u003e[ModulePath]",
          "package": "fay",
          "partial": "Module Paths",
          "signature": "ModuleName a-\u003e[ModulePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:mkModulePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "printJS",
          "package": "fay",
          "signature": "a -\u003e Printer ()",
          "source": "src/Fay-Types.html#printJS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "printJS",
          "normalized": "a-\u003ePrinter()",
          "package": "fay",
          "partial": "JS",
          "signature": "a-\u003ePrinter()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:printJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent column.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psColumn",
          "package": "fay",
          "signature": "Int",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "Current column",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psColumn",
          "package": "fay",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent indentation level.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psIndentLevel",
          "package": "fay",
          "signature": "Int",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "Current indentation level",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psIndentLevel",
          "package": "fay",
          "partial": "Indent Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psIndentLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current line.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psLine",
          "package": "fay",
          "signature": "Int",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "The current line",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psLine",
          "package": "fay",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource mappings.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psMappings",
          "package": "fay",
          "signature": "[Mapping]",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "Source mappings",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psMappings",
          "normalized": "[Mapping]",
          "package": "fay",
          "partial": "Mappings",
          "signature": "[Mapping]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust outputted a newline?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psNewline",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "Just outputted newline",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psNewline",
          "package": "fay",
          "partial": "Newline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psNewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current output. TODO: Make more efficient.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psOutput",
          "package": "fay",
          "signature": "[String]",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "The current output TODO Make more efficient",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psOutput",
          "normalized": "[String]",
          "package": "fay",
          "partial": "Output",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we to pretty print?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "psPretty",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#PrintState",
          "type": "function"
        },
        "index": {
          "description": "Are we to pretty print",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "psPretty",
          "package": "fay",
          "partial": "Pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:psPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "readerCompileDecls",
          "package": "fay",
          "signature": "Bool -\u003e [Decl] -\u003e Compile [JsStmt]",
          "source": "src/Fay-Types.html#CompileReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "readerCompileDecls",
          "normalized": "Bool-\u003e[Decl]-\u003eCompile[JsStmt]",
          "package": "fay",
          "partial": "Compile Decls",
          "signature": "Bool-\u003e[Decl]-\u003eCompile[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:readerCompileDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "readerCompileLit",
          "package": "fay",
          "signature": "Literal -\u003e Compile JsExp",
          "source": "src/Fay-Types.html#CompileReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "readerCompileLit",
          "normalized": "Literal-\u003eCompile JsExp",
          "package": "fay",
          "partial": "Compile Lit",
          "signature": "Literal-\u003eCompile JsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:readerCompileLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compilation configuration.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "readerConfig",
          "package": "fay",
          "signature": "CompileConfig",
          "source": "src/Fay-Types.html#CompileReader",
          "type": "function"
        },
        "index": {
          "description": "The compilation configuration",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "readerConfig",
          "package": "fay",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:readerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Types",
          "name": "runPrinter",
          "package": "fay",
          "signature": "State PrintState a",
          "source": "src/Fay-Types.html#Printer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "runPrinter",
          "package": "fay",
          "partial": "Printer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:runPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of all imported modules and their source locations.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateImported",
          "package": "fay",
          "signature": "[(ModuleName, FilePath)]",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Map of all imported modules and their source locations",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateImported",
          "normalized": "[(ModuleName,FilePath)]",
          "package": "fay",
          "partial": "Imported",
          "signature": "[(ModuleName,FilePath)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateImported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExported identifiers for all modules\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateInterfaces",
          "package": "fay",
          "signature": "Map ModuleName Symbols",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Exported identifiers for all modules",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateInterfaces",
          "package": "fay",
          "partial": "Interfaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule paths that have code generated for them.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateJsModulePaths",
          "package": "fay",
          "signature": "Set ModulePath",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Module paths that have code generated for them",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateJsModulePaths",
          "package": "fay",
          "partial": "Js Module Paths",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateJsModulePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the module currently being compiled.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateModuleName",
          "package": "fay",
          "signature": "ModuleName",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Name of the module currently being compiled",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateModuleName",
          "package": "fay",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepth of the current lexical scope, used for creating unshadowing variables.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateNameDepth",
          "package": "fay",
          "signature": "Integer",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Depth of the current lexical scope used for creating unshadowing variables",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateNameDepth",
          "package": "fay",
          "partial": "Name Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateNameDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype constructor, destructor, wrapped type tuple\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateNewtypes",
          "package": "fay",
          "signature": "[(QName, Maybe QName, Type)]",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Newtype constructor destructor wrapped type tuple",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateNewtypes",
          "normalized": "[(QName,Maybe QName,Type)]",
          "package": "fay",
          "partial": "Newtypes",
          "signature": "[(QName,Maybe QName,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateNewtypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap types to constructors\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateRecordTypes",
          "package": "fay",
          "signature": "[(QName, [QName])]",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Map types to constructors",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateRecordTypes",
          "normalized": "[(QName,[QName])]",
          "package": "fay",
          "partial": "Record Types",
          "signature": "[(QName,[QName])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateRecordTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap constructors to fields\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateRecords",
          "package": "fay",
          "signature": "[(QName, [Name])]",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Map constructors to fields",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateRecords",
          "normalized": "[(QName,[Name])]",
          "package": "fay",
          "partial": "Records",
          "signature": "[(QName,[Name])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule level declarations having explicit type signatures\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateTypeSigs",
          "package": "fay",
          "signature": "Map QName Type",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Module level declarations having explicit type signatures",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateTypeSigs",
          "package": "fay",
          "partial": "Type Sigs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateTypeSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse JS Strings instead of [Char] for string literals?\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "stateUseFromString",
          "package": "fay",
          "signature": "Bool",
          "source": "src/Fay-Types.html#CompileState",
          "type": "function"
        },
        "index": {
          "description": "Use JS Strings instead of Char for string literals",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "stateUseFromString",
          "package": "fay",
          "partial": "Use From String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:stateUseFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUns the compiler\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "unCompile",
          "package": "fay",
          "signature": "RWST CompileReader CompileWriter CompileState (ErrorT CompileError (ModuleT (ModuleInfo Compile) IO)) a",
          "source": "src/Fay-Types.html#Compile",
          "type": "function"
        },
        "index": {
          "description": "Uns the compiler",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "unCompile",
          "package": "fay",
          "partial": "Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:unCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructors.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "writerCons",
          "package": "fay",
          "signature": "[JsStmt]",
          "source": "src/Fay-Types.html#CompileWriter",
          "type": "function"
        },
        "index": {
          "description": "Constructors",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "writerCons",
          "normalized": "[JsStmt]",
          "package": "fay",
          "partial": "Cons",
          "signature": "[JsStmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:writerCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFay to JS dispatchers.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "writerFayToJs",
          "package": "fay",
          "signature": "[(String, JsExp)]",
          "source": "src/Fay-Types.html#CompileWriter",
          "type": "function"
        },
        "index": {
          "description": "Fay to JS dispatchers",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "writerFayToJs",
          "normalized": "[(String,JsExp)]",
          "package": "fay",
          "partial": "Fay To Js",
          "signature": "[(String,JsExp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:writerFayToJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJS to Fay dispatchers.\n\u003c/p\u003e",
          "module": "Fay.Types",
          "name": "writerJsToFay",
          "package": "fay",
          "signature": "[(String, JsExp)]",
          "source": "src/Fay-Types.html#CompileWriter",
          "type": "function"
        },
        "index": {
          "description": "JS to Fay dispatchers",
          "hierarchy": "Fay Types",
          "module": "Fay.Types",
          "name": "writerJsToFay",
          "normalized": "[(String,JsExp)]",
          "package": "fay",
          "partial": "Js To Fay",
          "signature": "[(String,JsExp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay-Types.html#v:writerJsToFay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain library entry point.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay",
          "name": "Fay",
          "package": "fay",
          "source": "src/Fay.html",
          "type": "module"
        },
        "index": {
          "description": "Main library entry point",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "Fay",
          "package": "fay",
          "partial": "Fay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the given file.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "compileFile",
          "package": "fay",
          "signature": "CompileConfig -\u003e FilePath -\u003e IO (Either CompileError (String, [Mapping]))",
          "source": "src/Fay.html#compileFile",
          "type": "function"
        },
        "index": {
          "description": "Compile the given file",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "compileFile",
          "normalized": "CompileConfig-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping]))",
          "package": "fay",
          "partial": "File",
          "signature": "CompileConfig-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:compileFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a file returning the state.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "compileFileWithState",
          "package": "fay",
          "signature": "CompileConfig -\u003e FilePath -\u003e IO (Either CompileError (String, [Mapping], CompileState))",
          "source": "src/Fay.html#compileFileWithState",
          "type": "function"
        },
        "index": {
          "description": "Compile file returning the state",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "compileFileWithState",
          "normalized": "CompileConfig-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping],CompileState))",
          "package": "fay",
          "partial": "File With State",
          "signature": "CompileConfig-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping],CompileState))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:compileFileWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the given file and write the output to the given path, or\n if nothing given, stdout.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "compileFromTo",
          "package": "fay",
          "signature": "CompileConfig -\u003e FilePath -\u003e Maybe FilePath -\u003e IO ()",
          "source": "src/Fay.html#compileFromTo",
          "type": "function"
        },
        "index": {
          "description": "Compile the given file and write the output to the given path or if nothing given stdout",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "compileFromTo",
          "normalized": "CompileConfig-\u003eFilePath-\u003eMaybe FilePath-\u003eIO()",
          "package": "fay",
          "partial": "From To",
          "signature": "CompileConfig-\u003eFilePath-\u003eMaybe FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:compileFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile the given file and write to the output, also generate any HTML.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "compileFromToAndGenerateHtml",
          "package": "fay",
          "signature": "CompileConfig -\u003e FilePath -\u003e FilePath -\u003e IO (Either CompileError (String, [Mapping]))",
          "source": "src/Fay.html#compileFromToAndGenerateHtml",
          "type": "function"
        },
        "index": {
          "description": "Compile the given file and write to the output also generate any HTML",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "compileFromToAndGenerateHtml",
          "normalized": "CompileConfig-\u003eFilePath-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping]))",
          "package": "fay",
          "partial": "From To And Generate Html",
          "signature": "CompileConfig-\u003eFilePath-\u003eFilePath-\u003eIO(Either CompileError(String,[Mapping]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:compileFromToAndGenerateHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the JS runtime source.\n This will return the user supplied runtime if it exists.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "getConfigRuntime",
          "package": "fay",
          "signature": "CompileConfig -\u003e IO String",
          "source": "src/Fay.html#getConfigRuntime",
          "type": "function"
        },
        "index": {
          "description": "Get the JS runtime source This will return the user supplied runtime if it exists",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "getConfigRuntime",
          "normalized": "CompileConfig-\u003eIO String",
          "package": "fay",
          "partial": "Config Runtime",
          "signature": "CompileConfig-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:getConfigRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the default JS runtime source.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "getRuntime",
          "package": "fay",
          "signature": "IO String",
          "source": "src/Fay.html#getRuntime",
          "type": "function"
        },
        "index": {
          "description": "Get the default JS runtime source",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "getRuntime",
          "package": "fay",
          "partial": "Runtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:getRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a compile error for human consumption.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "showCompileError",
          "package": "fay",
          "signature": "CompileError -\u003e String",
          "source": "src/Fay.html#showCompileError",
          "type": "function"
        },
        "index": {
          "description": "Print compile error for human consumption",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "showCompileError",
          "normalized": "CompileError-\u003eString",
          "package": "fay",
          "partial": "Compile Error",
          "signature": "CompileError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:showCompileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell filename to a JS filename.\n\u003c/p\u003e",
          "module": "Fay",
          "name": "toJsName",
          "package": "fay",
          "signature": "String -\u003e String",
          "source": "src/Fay.html#toJsName",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell filename to JS filename",
          "hierarchy": "Fay",
          "module": "Fay",
          "name": "toJsName",
          "normalized": "String-\u003eString",
          "package": "fay",
          "partial": "Js Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay/docs/Fay.html#v:toJsName"
      }
    }
  ]
]