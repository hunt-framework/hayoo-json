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
        "word": "haskell-packages"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport qualified Distribution.HaskellSuite.Compiler as Compiler\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Compiler",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "This module is designed to be imported qualified import qualified Distribution.HaskellSuite.Compiler as Compiler",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Compiler",
          "package": "haskell-packages",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompilation function\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "CompileFn",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Compiler.html#CompileFn",
          "type": "type"
        },
        "index": {
          "description": "Compilation function",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "CompileFn",
          "package": "haskell-packages",
          "partial": "Compile Fn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:CompileFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstraction over a Haskell compiler.\n\u003c/p\u003e\u003cp\u003eOnce you've written a \u003ccode\u003eCompiler.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eIs\u003c/a\u003e\u003c/code\u003e instance, you get Cabal\n integration for free (via \u003ccode\u003eCompiler\u003c/code\u003e.\u003ccode\u003e\u003ca\u003emain\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eConsider whether \u003ccode\u003eCompiler.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eSimple\u003c/a\u003e\u003c/code\u003e suits your needs &#8212; then you need to\n write even less code.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eDB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eversion\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguages\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguageExtensions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e are only used for \u003ccode\u003e\u003ca\u003einstallLib\u003c/a\u003e\u003c/code\u003e, so if you define\n a custom \u003ccode\u003e\u003ca\u003einstallLib\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e won't be used (but you'll still\n get a compiler warning if you do not define it).\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Is",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Compiler.html#Is",
          "type": "class"
        },
        "index": {
          "description": "An abstraction over Haskell compiler Once you ve written Compiler Is instance you get Cabal integration for free via Compiler main Consider whether Compiler Simple suits your needs then you need to write even less code Minimal definition DB name version fileExtensions compile languages languageExtensions fileExtensions are only used for installLib so if you define custom installLib fileExtensions won be used but you ll still get compiler warning if you do not define it",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Is",
          "package": "haskell-packages",
          "partial": "Is",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Simple",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Compiler.html#Simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "Simple",
          "package": "haskell-packages",
          "partial": "Simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to compile a set of modules\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "compile",
          "package": "haskell-packages",
          "signature": "compiler -\u003e CompileFn",
          "source": "src/Distribution-HaskellSuite-Compiler.html#compile",
          "type": "method"
        },
        "index": {
          "description": "How to compile set of modules",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "compile",
          "normalized": "a-\u003eCompileFn",
          "package": "haskell-packages",
          "signature": "compiler-\u003eCompileFn",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extensions of the files generated by the compiler. Those files\n will be copied during the install phase.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "fileExtensions",
          "package": "haskell-packages",
          "signature": "compiler -\u003e [String]",
          "source": "src/Distribution-HaskellSuite-Compiler.html#fileExtensions",
          "type": "method"
        },
        "index": {
          "description": "File extensions of the files generated by the compiler Those files will be copied during the install phase",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "fileExtensions",
          "normalized": "a-\u003e[String]",
          "package": "haskell-packages",
          "partial": "Extensions",
          "signature": "compiler-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:fileExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "installLib",
          "package": "haskell-packages",
          "signature": "installLib",
          "source": "src/Distribution-HaskellSuite-Compiler.html#installLib",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "installLib",
          "package": "haskell-packages",
          "partial": "Lib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:installLib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtensions supported by this compiler\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "languageExtensions",
          "package": "haskell-packages",
          "signature": "compiler -\u003e [Extension]",
          "source": "src/Distribution-HaskellSuite-Compiler.html#languageExtensions",
          "type": "method"
        },
        "index": {
          "description": "Extensions supported by this compiler",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "languageExtensions",
          "normalized": "a-\u003e[Extension]",
          "package": "haskell-packages",
          "partial": "Extensions",
          "signature": "compiler-\u003e[Extension]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:languageExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguages supported by this compiler (such as \u003ccode\u003eHaskell98\u003c/code\u003e,\n \u003ccode\u003eHaskell2010\u003c/code\u003e etc.)\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "languages",
          "package": "haskell-packages",
          "signature": "compiler -\u003e [Language]",
          "source": "src/Distribution-HaskellSuite-Compiler.html#languages",
          "type": "method"
        },
        "index": {
          "description": "Languages supported by this compiler such as Haskell98 Haskell2010 etc",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "languages",
          "normalized": "a-\u003e[Language]",
          "package": "haskell-packages",
          "signature": "compiler-\u003e[Language]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:languages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "list",
          "package": "haskell-packages",
          "signature": "compiler -\u003e PackageDB -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Compiler.html#list",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "list",
          "normalized": "a-\u003ePackageDB-\u003eIO()",
          "package": "haskell-packages",
          "signature": "compiler-\u003ePackageDB-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "main",
          "package": "haskell-packages",
          "signature": "c -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Cabal.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "main",
          "normalized": "a-\u003eIO()",
          "package": "haskell-packages",
          "signature": "c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler's name. Should not contain spaces.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "name",
          "package": "haskell-packages",
          "signature": "compiler -\u003e String",
          "source": "src/Distribution-HaskellSuite-Compiler.html#name",
          "type": "method"
        },
        "index": {
          "description": "Compiler name Should not contain spaces",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "name",
          "normalized": "a-\u003eString",
          "package": "haskell-packages",
          "signature": "compiler-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister the package in the database. If a package with the same id\n is already installed, it should be replaced by the new one.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "register",
          "package": "haskell-packages",
          "signature": "compiler -\u003e PackageDB -\u003e InstalledPackageInfo -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Compiler.html#register",
          "type": "method"
        },
        "index": {
          "description": "Register the package in the database If package with the same id is already installed it should be replaced by the new one",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "register",
          "normalized": "a-\u003ePackageDB-\u003eInstalledPackageInfo-\u003eIO()",
          "package": "haskell-packages",
          "signature": "compiler-\u003ePackageDB-\u003eInstalledPackageInfo-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "simple",
          "package": "haskell-packages",
          "signature": "String-\u003e Version-\u003e [Language]-\u003e [Extension]-\u003e CompileFn-\u003e [String]-\u003e Simple db",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "simple",
          "normalized": "String-\u003eVersion-\u003e[Language]-\u003e[Extension]-\u003eCompileFn-\u003e[String]-\u003eSimple a",
          "package": "haskell-packages",
          "signature": "String-\u003eVersion-\u003e[Language]-\u003e[Extension]-\u003eCompileFn-\u003e[String]-\u003eSimple db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnregister the package\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "unregister",
          "package": "haskell-packages",
          "signature": "compiler -\u003e PackageDB -\u003e PackageId -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Compiler.html#unregister",
          "type": "method"
        },
        "index": {
          "description": "Unregister the package",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "unregister",
          "normalized": "a-\u003ePackageDB-\u003ePackageId-\u003eIO()",
          "package": "haskell-packages",
          "signature": "compiler-\u003ePackageDB-\u003ePackageId-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:unregister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler's version\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "version",
          "package": "haskell-packages",
          "signature": "compiler -\u003e Version",
          "source": "src/Distribution-HaskellSuite-Compiler.html#version",
          "type": "method"
        },
        "index": {
          "description": "Compiler version",
          "hierarchy": "Distribution HaskellSuite Compiler",
          "module": "Distribution.HaskellSuite.Compiler",
          "name": "version",
          "normalized": "a-\u003eVersion",
          "package": "haskell-packages",
          "signature": "compiler-\u003eVersion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Modules",
          "name": "Modules",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Modules.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "Modules",
          "package": "haskell-packages",
          "partial": "Modules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent libraries (Cabal, haskell-src-exts, ...) use different types\n to represent module names. Hence this class.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "ModName",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Modules.html#ModName",
          "type": "class"
        },
        "index": {
          "description": "Different libraries Cabal haskell-src-exts use different types to represent module names Hence this class",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "ModName",
          "package": "haskell-packages",
          "partial": "Mod Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:ModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA standard module monad transformer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ei\u003c/code\u003e is the type of module info, \u003ccode\u003em\u003c/code\u003e is the underlying monad.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "ModuleT",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Modules.html#ModuleT",
          "type": "data"
        },
        "index": {
          "description": "standard module monad transformer is the type of module info is the underlying monad",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "ModuleT",
          "package": "haskell-packages",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:ModuleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class defines the interface that is used by \u003ccode\u003e\u003ca\u003egetModuleInfo\u003c/a\u003e\u003c/code\u003e, so\n that you can use it in monads other than \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou don't typically have to define your own instances of this class, but\n here are a couple of cases when you might:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A pure (non-\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e) mockup module monad for testing purposes\n\u003c/li\u003e\u003cli\u003e A transformer over \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e You need a more complex way to retrieve the module info\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "MonadModule",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Modules.html#MonadModule",
          "type": "class"
        },
        "index": {
          "description": "This class defines the interface that is used by getModuleInfo so that you can use it in monads other than ModuleT You don typically have to define your own instances of this class but here are couple of cases when you might pure non MonadIO mockup module monad for testing purposes transformer over ModuleT You need more complex way to retrieve the module info",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "MonadModule",
          "package": "haskell-packages",
          "partial": "Monad Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:MonadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert module name from arbitrary representation to Cabal's one\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "convertModuleName",
          "package": "haskell-packages",
          "signature": "n -\u003e ModuleName",
          "source": "src/Distribution-HaskellSuite-Modules.html#convertModuleName",
          "type": "function"
        },
        "index": {
          "description": "Convert module name from arbitrary representation to Cabal one",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "convertModuleName",
          "normalized": "a-\u003eModuleName",
          "package": "haskell-packages",
          "partial": "Module Name",
          "signature": "n-\u003eModuleName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:convertModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of \u003ccode\u003e\u003ca\u003erunModuleT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "evalModuleT",
          "package": "haskell-packages",
          "signature": "ModuleT i m a-\u003e Packages-\u003e String-\u003e (FilePath -\u003e m i)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run ModuleT action This is simplified version of runModuleT",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "evalModuleT",
          "normalized": "ModuleT a b c-\u003ePackages-\u003eString-\u003e(FilePath-\u003eb a)-\u003eb c",
          "package": "haskell-packages",
          "partial": "Module",
          "signature": "ModuleT i m a-\u003ePackages-\u003eString-\u003e(FilePath-\u003em i)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:evalModuleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to find the module in the current set of packages, then find the\n module's info file, and reads and caches its contents.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the module could not be found in the current set of\n packages. If the module is found, but something else goes wrong (e.g.\n there's no info file for it), an exception is thrown.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "getModuleInfo",
          "package": "haskell-packages",
          "signature": "n -\u003e m (Maybe (ModuleInfo m))",
          "source": "src/Distribution-HaskellSuite-Modules.html#getModuleInfo",
          "type": "function"
        },
        "index": {
          "description": "Tries to find the module in the current set of packages then find the module info file and reads and caches its contents Returns Nothing if the module could not be found in the current set of packages If the module is found but something else goes wrong e.g there no info file for it an exception is thrown",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "getModuleInfo",
          "normalized": "a-\u003eb(Maybe(ModuleInfo b))",
          "package": "haskell-packages",
          "partial": "Module Info",
          "signature": "n-\u003em(Maybe(ModuleInfo m))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:getModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Modules",
          "name": "getPackages",
          "package": "haskell-packages",
          "signature": "m Packages",
          "source": "src/Distribution-HaskellSuite-Modules.html#getPackages",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "getPackages",
          "package": "haskell-packages",
          "partial": "Packages",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:getPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Modules",
          "name": "insertInCache",
          "package": "haskell-packages",
          "signature": "n -\u003e ModuleInfo m -\u003e m ()",
          "source": "src/Distribution-HaskellSuite-Modules.html#insertInCache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "insertInCache",
          "normalized": "a-\u003eModuleInfo b-\u003eb()",
          "package": "haskell-packages",
          "partial": "In Cache",
          "signature": "n-\u003eModuleInfo m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:insertInCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Modules",
          "name": "lookupInCache",
          "package": "haskell-packages",
          "signature": "n -\u003e m (Maybe (ModuleInfo m))",
          "source": "src/Distribution-HaskellSuite-Modules.html#lookupInCache",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "lookupInCache",
          "normalized": "a-\u003eb(Maybe(ModuleInfo b))",
          "package": "haskell-packages",
          "partial": "In Cache",
          "signature": "n-\u003em(Maybe(ModuleInfo m))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:lookupInCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Modules",
          "name": "modToString",
          "package": "haskell-packages",
          "signature": "n -\u003e String",
          "source": "src/Distribution-HaskellSuite-Modules.html#modToString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "modToString",
          "normalized": "a-\u003eString",
          "package": "haskell-packages",
          "partial": "To String",
          "signature": "n-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:modToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the module info, given a list of search paths and the module\n name\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "readModuleInfo",
          "package": "haskell-packages",
          "signature": "[FilePath] -\u003e n -\u003e m (ModuleInfo m)",
          "source": "src/Distribution-HaskellSuite-Modules.html#readModuleInfo",
          "type": "method"
        },
        "index": {
          "description": "Read the module info given list of search paths and the module name",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "readModuleInfo",
          "normalized": "[FilePath]-\u003ea-\u003eb(ModuleInfo b)",
          "package": "haskell-packages",
          "partial": "Module Info",
          "signature": "[FilePath]-\u003en-\u003em(ModuleInfo m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:readModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "runModuleT",
          "package": "haskell-packages",
          "signature": "ModuleT i m a-\u003e Packages-\u003e String-\u003e (FilePath -\u003e m i)-\u003e Map ModuleName i-\u003e m (a, Map ModuleName i)",
          "type": "function"
        },
        "index": {
          "description": "Run ModuleT action",
          "hierarchy": "Distribution HaskellSuite Modules",
          "module": "Distribution.HaskellSuite.Modules",
          "name": "runModuleT",
          "normalized": "ModuleT a b c-\u003ePackages-\u003eString-\u003e(FilePath-\u003eb a)-\u003eMap ModuleName a-\u003eb(c,Map ModuleName a)",
          "package": "haskell-packages",
          "partial": "Module",
          "signature": "ModuleT i m a-\u003ePackages-\u003eString-\u003e(FilePath-\u003em i)-\u003eMap ModuleName i-\u003em(a,Map ModuleName i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:runModuleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Packages",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Packages",
          "package": "haskell-packages",
          "partial": "Packages",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "IsDBName",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#IsDBName",
          "type": "class"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "IsDBName",
          "package": "haskell-packages",
          "partial": "Is DBName",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:IsDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage database class.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edb\u003c/code\u003e will typically be a newtype-wrapped path to the database file,\n although more sophisticated setups are certainly possible.\n\u003c/p\u003e\u003cp\u003eConsider using \u003ccode\u003e\u003ca\u003eStandardDB\u003c/a\u003e\u003c/code\u003e first, and implement your own database\n type if that isn't enough.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "IsPackageDB",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#IsPackageDB",
          "type": "class"
        },
        "index": {
          "description": "Package database class db will typically be newtype-wrapped path to the database file although more sophisticated setups are certainly possible Consider using StandardDB first and implement your own database type if that isn enough",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "IsPackageDB",
          "package": "haskell-packages",
          "partial": "Is Package DB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:IsPackageDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flag which tells whether the library should create an empty package\n database if it doesn't exist yet\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "MaybeInitDB",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
          "type": "data"
        },
        "index": {
          "description": "flag which tells whether the library should create an empty package database if it doesn exist yet",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "MaybeInitDB",
          "package": "haskell-packages",
          "partial": "Maybe Init DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:MaybeInitDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Packages",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#Packages",
          "type": "type"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Packages",
          "package": "haskell-packages",
          "partial": "Packages",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:Packages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgDBError",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgDBError",
          "package": "haskell-packages",
          "partial": "Pkg DBError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:PkgDBError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgInfoError",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgInfoError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgInfoError",
          "package": "haskell-packages",
          "partial": "Pkg Info Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:PkgInfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "StandardDB",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#StandardDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "StandardDB",
          "package": "haskell-packages",
          "partial": "Standard DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:StandardDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage database could not be parsed or contains errors\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "BadPkgDB",
          "package": "haskell-packages",
          "signature": "BadPkgDB FilePath",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
          "type": "function"
        },
        "index": {
          "description": "package database could not be parsed or contains errors",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "BadPkgDB",
          "package": "haskell-packages",
          "partial": "Bad Pkg DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:BadPkgDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Don'tInitDB",
          "package": "haskell-packages",
          "signature": "Don'tInitDB",
          "source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "Don'tInitDB",
          "package": "haskell-packages",
          "partial": "Don't Init DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:Don-39-tInitDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "InitDB",
          "package": "haskell-packages",
          "signature": "InitDB",
          "source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "InitDB",
          "package": "haskell-packages",
          "partial": "Init DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:InitDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage db file could not be read\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgDBReadError",
          "package": "haskell-packages",
          "signature": "PkgDBReadError FilePath IOException",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
          "type": "function"
        },
        "index": {
          "description": "package db file could not be read",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgDBReadError",
          "package": "haskell-packages",
          "partial": "Pkg DBRead Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgDBReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempt to register an already present package id\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgExists",
          "package": "haskell-packages",
          "signature": "PkgExists InstalledPackageId",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
          "type": "function"
        },
        "index": {
          "description": "attempt to register an already present package id",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgExists",
          "package": "haskell-packages",
          "partial": "Pkg Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequested package id could not be found in any of the package databases\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgInfoNotFound",
          "package": "haskell-packages",
          "signature": "PkgInfoNotFound InstalledPackageId",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgInfoError",
          "type": "function"
        },
        "index": {
          "description": "requested package id could not be found in any of the package databases",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "PkgInfoNotFound",
          "package": "haskell-packages",
          "partial": "Pkg Info Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgInfoNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempt to register in the global db when it's not present\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "RegisterNullDB",
          "package": "haskell-packages",
          "signature": "RegisterNullDB",
          "source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
          "type": "function"
        },
        "index": {
          "description": "attempt to register in the global db when it not present",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "RegisterNullDB",
          "package": "haskell-packages",
          "partial": "Register Null DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:RegisterNullDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "StandardDB",
          "package": "haskell-packages",
          "signature": "StandardDB FilePath",
          "source": "src/Distribution-HaskellSuite-Packages.html#StandardDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "StandardDB",
          "package": "haskell-packages",
          "partial": "Standard DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:StandardDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a db object given a database file path\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "dbFromPath",
          "package": "haskell-packages",
          "signature": "FilePath -\u003e IO db",
          "source": "src/Distribution-HaskellSuite-Packages.html#dbFromPath",
          "type": "method"
        },
        "index": {
          "description": "Create db object given database file path",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "dbFromPath",
          "normalized": "FilePath-\u003eIO a",
          "package": "haskell-packages",
          "partial": "From Path",
          "signature": "FilePath-\u003eIO db",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:dbFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the database. Used to construct some paths.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "dbName",
          "package": "haskell-packages",
          "signature": "Tagged db String",
          "source": "src/Distribution-HaskellSuite-Packages.html#dbName",
          "type": "method"
        },
        "index": {
          "description": "The name of the database Used to construct some paths",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "dbName",
          "package": "haskell-packages",
          "partial": "Name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:dbName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "getDBName",
          "package": "haskell-packages",
          "signature": "Tagged name String",
          "source": "src/Distribution-HaskellSuite-Packages.html#getDBName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "getDBName",
          "package": "haskell-packages",
          "partial": "DBName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:getDBName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all packages that are registered in a particular database\n\u003c/p\u003e\u003cp\u003eIf the database doesn't exist, the behaviour is determined by\n \u003ccode\u003e\u003ca\u003emaybeInitDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "getInstalledPackages",
          "package": "haskell-packages",
          "signature": "Proxy db -\u003e PackageDB -\u003e IO Packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#getInstalledPackages",
          "type": "function"
        },
        "index": {
          "description": "Get all packages that are registered in particular database If the database doesn exist the behaviour is determined by maybeInitDB",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "getInstalledPackages",
          "normalized": "Proxy a-\u003ePackageDB-\u003eIO Packages",
          "package": "haskell-packages",
          "partial": "Installed Packages",
          "signature": "Proxy db-\u003ePackageDB-\u003eIO Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:getInstalledPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the location of a global package database (if there's one)\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "globalDB",
          "package": "haskell-packages",
          "signature": "IO (Maybe db)",
          "source": "src/Distribution-HaskellSuite-Packages.html#globalDB",
          "type": "method"
        },
        "index": {
          "description": "Get the location of global package database if there one",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "globalDB",
          "package": "haskell-packages",
          "partial": "DB",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:globalDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the path does not exist, create an empty database there. Otherwise,\n do nothing.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "initDB",
          "package": "haskell-packages",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Packages.html#initDB",
          "type": "function"
        },
        "index": {
          "description": "If the path does not exist create an empty database there Otherwise do nothing",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "initDB",
          "normalized": "FilePath-\u003eIO()",
          "package": "haskell-packages",
          "partial": "DB",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:initDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a package db specification to a db object\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "locateDB",
          "package": "haskell-packages",
          "signature": "PackageDB -\u003e IO (Maybe db)",
          "source": "src/Distribution-HaskellSuite-Packages.html#locateDB",
          "type": "method"
        },
        "index": {
          "description": "Convert package db specification to db object",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "locateDB",
          "normalized": "PackageDB-\u003eIO(Maybe a)",
          "package": "haskell-packages",
          "partial": "DB",
          "signature": "PackageDB-\u003eIO(Maybe db)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:locateDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all relative paths in the package info absolute, interpreting\n them relative to the given base directory.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "makePkgInfoAbsolute",
          "package": "haskell-packages",
          "signature": "FilePath -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
          "source": "src/Distribution-HaskellSuite-Packages.html#makePkgInfoAbsolute",
          "type": "function"
        },
        "index": {
          "description": "Make all relative paths in the package info absolute interpreting them relative to the given base directory",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "makePkgInfoAbsolute",
          "normalized": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "package": "haskell-packages",
          "partial": "Pkg Info Absolute",
          "signature": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:makePkgInfoAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all paths in the package info relative to the given base\n directory.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "makePkgInfoRelative",
          "package": "haskell-packages",
          "signature": "FilePath -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
          "source": "src/Distribution-HaskellSuite-Packages.html#makePkgInfoRelative",
          "type": "function"
        },
        "index": {
          "description": "Make all paths in the package info relative to the given base directory",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "makePkgInfoRelative",
          "normalized": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "package": "haskell-packages",
          "partial": "Pkg Info Relative",
          "signature": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:makePkgInfoRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a given function to all file paths contained in the package info\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "mapPaths",
          "package": "haskell-packages",
          "signature": "(FilePath -\u003e FilePath) -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
          "source": "src/Distribution-HaskellSuite-Packages.html#mapPaths",
          "type": "function"
        },
        "index": {
          "description": "Apply given function to all file paths contained in the package info",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "mapPaths",
          "normalized": "(FilePath-\u003eFilePath)-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "package": "haskell-packages",
          "partial": "Paths",
          "signature": "(FilePath-\u003eFilePath)-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:mapPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function determines whether a package database should be\n initialized if it doesn't exist yet.\n\u003c/p\u003e\u003cp\u003eThe rule is this: if it is a global or a user database, then initialize\n it; otherwise, don't.\n\u003c/p\u003e\u003cp\u003eRationale: if the database was specified by the user, she could have\n made a mistake in the path, and we'd rather report it. On the other\n hand, it is our responsibility to ensure that the user and global\n databases exist.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "maybeInitDB",
          "package": "haskell-packages",
          "signature": "PackageDB -\u003e MaybeInitDB",
          "source": "src/Distribution-HaskellSuite-Packages.html#maybeInitDB",
          "type": "function"
        },
        "index": {
          "description": "This function determines whether package database should be initialized if it doesn exist yet The rule is this if it is global or user database then initialize it otherwise don Rationale if the database was specified by the user she could have made mistake in the path and we rather report it On the other hand it is our responsibility to ensure that the user and global databases exist",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "maybeInitDB",
          "normalized": "PackageDB-\u003eMaybeInitDB",
          "package": "haskell-packages",
          "partial": "Init DB",
          "signature": "PackageDB-\u003eMaybeInitDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:maybeInitDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readDB",
          "package": "haskell-packages",
          "signature": "MaybeInitDB -\u003e FilePath -\u003e IO Packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#readDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readDB",
          "normalized": "MaybeInitDB-\u003eFilePath-\u003eIO Packages",
          "package": "haskell-packages",
          "partial": "DB",
          "signature": "MaybeInitDB-\u003eFilePath-\u003eIO Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a package database.\n\u003c/p\u003e\u003cp\u003eIf the database does not exist, then the first argument tells whether\n we should create and initialize it with an empty package list. In\n that case, if \u003ccode\u003e\u003ca\u003eDon'tInitDB\u003c/a\u003e\u003c/code\u003e is specified, a \u003ccode\u003eBadPkgDb\u003c/code\u003e exception is\n thrown.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readPackageDB",
          "package": "haskell-packages",
          "signature": "MaybeInitDB -\u003e db -\u003e IO Packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#readPackageDB",
          "type": "method"
        },
        "index": {
          "description": "Read package database If the database does not exist then the first argument tells whether we should create and initialize it with an empty package list In that case if Don tInitDB is specified BadPkgDb exception is thrown",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readPackageDB",
          "normalized": "MaybeInitDB-\u003ea-\u003eIO Packages",
          "package": "haskell-packages",
          "partial": "Package DB",
          "signature": "MaybeInitDB-\u003edb-\u003eIO Packages",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readPackageDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to retrieve an \u003ccode\u003eInstalledPackageInfo\u003c/code\u003e for each of\n \u003ccode\u003eInstalledPackageId\u003c/code\u003es from a specified set of \u003ccode\u003ePackageDB\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003e\u003ca\u003ePkgInfoNotFound\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf a database doesn't exist, the behaviour is determined by\n \u003ccode\u003e\u003ca\u003emaybeInitDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readPackagesInfo",
          "package": "haskell-packages",
          "signature": "Proxy db -\u003e [PackageDB] -\u003e [InstalledPackageId] -\u003e IO Packages",
          "source": "src/Distribution-HaskellSuite-Packages.html#readPackagesInfo",
          "type": "function"
        },
        "index": {
          "description": "Try to retrieve an InstalledPackageInfo for each of InstalledPackageId from specified set of PackageDB May throw PkgInfoNotFound exception If database doesn exist the behaviour is determined by maybeInitDB",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "readPackagesInfo",
          "normalized": "Proxy a-\u003e[PackageDB]-\u003e[InstalledPackageId]-\u003eIO Packages",
          "package": "haskell-packages",
          "partial": "Packages Info",
          "signature": "Proxy db-\u003e[PackageDB]-\u003e[InstalledPackageId]-\u003eIO Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readPackagesInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user database\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "userDB",
          "package": "haskell-packages",
          "signature": "IO db",
          "source": "src/Distribution-HaskellSuite-Packages.html#userDB",
          "type": "method"
        },
        "index": {
          "description": "The user database",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "userDB",
          "package": "haskell-packages",
          "partial": "DB",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:userDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.HaskellSuite.Packages",
          "name": "writeDB",
          "package": "haskell-packages",
          "signature": "FilePath -\u003e Packages -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Packages.html#writeDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "writeDB",
          "normalized": "FilePath-\u003ePackages-\u003eIO()",
          "package": "haskell-packages",
          "partial": "DB",
          "signature": "FilePath-\u003ePackages-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:writeDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a package database\n\u003c/p\u003e",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "writePackageDB",
          "package": "haskell-packages",
          "signature": "db -\u003e Packages -\u003e IO ()",
          "source": "src/Distribution-HaskellSuite-Packages.html#writePackageDB",
          "type": "method"
        },
        "index": {
          "description": "Write package database",
          "hierarchy": "Distribution HaskellSuite Packages",
          "module": "Distribution.HaskellSuite.Packages",
          "name": "writePackageDB",
          "normalized": "a-\u003ePackages-\u003eIO()",
          "package": "haskell-packages",
          "partial": "Package DB",
          "signature": "db-\u003ePackages-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:writePackageDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports all you need in order to \u003cem\u003eread\u003c/em\u003e package\n databases and module info files created by compilers that use\n haskell-packages.\n\u003c/p\u003e\u003cp\u003eIf you are writing a compiler, i.e. a program that creates or writes\n package databases or module info files &#8212; then take a look at\n \u003ca\u003eDistribution.HaskellSuite.Compiler\u003c/a\u003e. It provides command-line\n options handling and Cabal integration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.HaskellSuite",
          "name": "HaskellSuite",
          "package": "haskell-packages",
          "source": "src/Distribution-HaskellSuite.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports all you need in order to read package databases and module info files created by compilers that use haskell-packages If you are writing compiler i.e program that creates or writes package databases or module info files then take look at Distribution.HaskellSuite.Compiler It provides command-line options handling and Cabal integration",
          "hierarchy": "Distribution HaskellSuite",
          "module": "Distribution.HaskellSuite",
          "name": "HaskellSuite",
          "package": "haskell-packages",
          "partial": "Haskell Suite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite.html#"
      }
    }
  ]
]