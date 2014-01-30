[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport qualified Distribution.HaskellSuite.Compiler as Compiler\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "module",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html",
        "fct-type": "module",
        "title": "Compiler"
      },
      "index": {
        "description": "This module is designed to be imported qualified import qualified Distribution.HaskellSuite.Compiler as Compiler",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:CompileFn",
      "description": {
        "fct-descr": "\u003cp\u003eCompilation function\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "type",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#CompileFn",
        "fct-type": "type",
        "title": "CompileFn"
      },
      "index": {
        "description": "Compilation function",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "CompileFn",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Compile Fn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:Is",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstraction over a Haskell compiler.\n\u003c/p\u003e\u003cp\u003eOnce you've written a \u003ccode\u003eCompiler.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eIs\u003c/a\u003e\u003c/code\u003e instance, you get Cabal\n integration for free (via \u003ccode\u003eCompiler\u003c/code\u003e.\u003ccode\u003e\u003ca\u003emain\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eConsider whether \u003ccode\u003eCompiler.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eSimple\u003c/a\u003e\u003c/code\u003e suits your needs &#8212; then you need to\n write even less code.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eDB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eversion\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguages\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elanguageExtensions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e are only used for \u003ccode\u003e\u003ca\u003einstallLib\u003c/a\u003e\u003c/code\u003e, so if you define\n a custom \u003ccode\u003e\u003ca\u003einstallLib\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efileExtensions\u003c/a\u003e\u003c/code\u003e won't be used (but you'll still\n get a compiler warning if you do not define it).\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "class",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#Is",
        "fct-type": "class",
        "title": "Is"
      },
      "index": {
        "description": "An abstraction over Haskell compiler Once you ve written Compiler Is instance you get Cabal integration for free via Compiler main Consider whether Compiler Simple suits your needs then you need to write even less code Minimal definition DB name version fileExtensions compile languages languageExtensions fileExtensions are only used for installLib so if you define custom installLib fileExtensions won be used but you ll still get compiler warning if you do not define it",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "Is",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Is",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#t:Simple",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#Simple",
        "fct-type": "data",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "Simple",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eHow to compile a set of modules\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e CompileFn",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#compile",
        "fct-type": "method",
        "title": "compile"
      },
      "index": {
        "description": "How to compile set of modules",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "compile",
        "normalized": "a-\u003eCompileFn",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003eCompileFn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:fileExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eFile extensions of the files generated by the compiler. Those files\n will be copied during the install phase.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e [String]",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#fileExtensions",
        "fct-type": "method",
        "title": "fileExtensions"
      },
      "index": {
        "description": "File extensions of the files generated by the compiler Those files will be copied during the install phase",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "fileExtensions",
        "normalized": "a-\u003e[String]",
        "package": "haskell-packages",
        "partial": "Extensions",
        "signature": "compiler-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:installLib",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "installLib",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#installLib",
        "fct-type": "method",
        "title": "installLib"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "installLib",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:languageExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eExtensions supported by this compiler\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e [Extension]",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#languageExtensions",
        "fct-type": "method",
        "title": "languageExtensions"
      },
      "index": {
        "description": "Extensions supported by this compiler",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "languageExtensions",
        "normalized": "a-\u003e[Extension]",
        "package": "haskell-packages",
        "partial": "Extensions",
        "signature": "compiler-\u003e[Extension]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:languages",
      "description": {
        "fct-descr": "\u003cp\u003eLanguages supported by this compiler (such as \u003ccode\u003eHaskell98\u003c/code\u003e,\n \u003ccode\u003eHaskell2010\u003c/code\u003e etc.)\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e [Language]",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#languages",
        "fct-type": "method",
        "title": "languages"
      },
      "index": {
        "description": "Languages supported by this compiler such as Haskell98 Haskell2010 etc",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "languages",
        "normalized": "a-\u003e[Language]",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003e[Language]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:list",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e PackageDB -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#list",
        "fct-type": "method",
        "title": "list"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "list",
        "normalized": "a-\u003ePackageDB-\u003eIO()",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003ePackageDB-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:main",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "c -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Cabal.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "main",
        "normalized": "a-\u003eIO()",
        "package": "haskell-packages",
        "partial": "",
        "signature": "c-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eCompiler's name. Should not contain spaces.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e String",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#name",
        "fct-type": "method",
        "title": "name"
      },
      "index": {
        "description": "Compiler name Should not contain spaces",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "name",
        "normalized": "a-\u003eString",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister the package in the database. If a package with the same id\n is already installed, it should be replaced by the new one.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e PackageDB -\u003e InstalledPackageInfo -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#register",
        "fct-type": "method",
        "title": "register"
      },
      "index": {
        "description": "Register the package in the database If package with the same id is already installed it should be replaced by the new one",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "register",
        "normalized": "a-\u003ePackageDB-\u003eInstalledPackageInfo-\u003eIO()",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003ePackageDB-\u003eInstalledPackageInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:simple",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "String-\u003e Version-\u003e [Language]-\u003e [Extension]-\u003e CompileFn-\u003e [String]-\u003e Simple db",
        "fct-type": "function",
        "title": "simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "simple",
        "normalized": "String-\u003eVersion-\u003e[Language]-\u003e[Extension]-\u003eCompileFn-\u003e[String]-\u003eSimple a",
        "package": "haskell-packages",
        "partial": "",
        "signature": "String-\u003eVersion-\u003e[Language]-\u003e[Extension]-\u003eCompileFn-\u003e[String]-\u003eSimple db"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:unregister",
      "description": {
        "fct-descr": "\u003cp\u003eUnregister the package\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e PackageDB -\u003e PackageId -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#unregister",
        "fct-type": "method",
        "title": "unregister"
      },
      "index": {
        "description": "Unregister the package",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "unregister",
        "normalized": "a-\u003ePackageDB-\u003ePackageId-\u003eIO()",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003ePackageDB-\u003ePackageId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Compiler.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eCompiler's version\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Compiler",
        "fct-package": "haskell-packages",
        "fct-signature": "compiler -\u003e Version",
        "fct-source": "src/Distribution-HaskellSuite-Compiler.html#version",
        "fct-type": "method",
        "title": "version"
      },
      "index": {
        "description": "Compiler version",
        "hierarchy": "Distribution HaskellSuite Compiler",
        "module": "Distribution.HaskellSuite.Compiler",
        "name": "version",
        "normalized": "a-\u003eVersion",
        "package": "haskell-packages",
        "partial": "",
        "signature": "compiler-\u003eVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "module",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html",
        "fct-type": "module",
        "title": "Modules"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "Modules",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Modules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:ModName",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent libraries (Cabal, haskell-src-exts, ...) use different types\n to represent module names. Hence this class.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "class",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#ModName",
        "fct-type": "class",
        "title": "ModName"
      },
      "index": {
        "description": "Different libraries Cabal haskell-src-exts use different types to represent module names Hence this class",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "ModName",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Mod Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:ModuleT",
      "description": {
        "fct-descr": "\u003cp\u003eA standard module monad transformer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ei\u003c/code\u003e is the type of module info, \u003ccode\u003em\u003c/code\u003e is the underlying monad.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#ModuleT",
        "fct-type": "data",
        "title": "ModuleT"
      },
      "index": {
        "description": "standard module monad transformer is the type of module info is the underlying monad",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "ModuleT",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#t:MonadModule",
      "description": {
        "fct-descr": "\u003cp\u003eThis class defines the interface that is used by \u003ccode\u003e\u003ca\u003egetModuleInfo\u003c/a\u003e\u003c/code\u003e, so\n that you can use it in monads other than \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou don't typically have to define your own instances of this class, but\n here are a couple of cases when you might:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A pure (non-\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e) mockup module monad for testing purposes\n\u003c/li\u003e\u003cli\u003e A transformer over \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e You need a more complex way to retrieve the module info\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "class",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#MonadModule",
        "fct-type": "class",
        "title": "MonadModule"
      },
      "index": {
        "description": "This class defines the interface that is used by getModuleInfo so that you can use it in monads other than ModuleT You don typically have to define your own instances of this class but here are couple of cases when you might pure non MonadIO mockup module monad for testing purposes transformer over ModuleT You need more complex way to retrieve the module info",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "MonadModule",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Monad Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:convertModuleName",
      "description": {
        "fct-descr": "\u003cp\u003eConvert module name from arbitrary representation to Cabal's one\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "n -\u003e ModuleName",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#convertModuleName",
        "fct-type": "function",
        "title": "convertModuleName"
      },
      "index": {
        "description": "Convert module name from arbitrary representation to Cabal one",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "convertModuleName",
        "normalized": "a-\u003eModuleName",
        "package": "haskell-packages",
        "partial": "Module Name",
        "signature": "n-\u003eModuleName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:evalModuleT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eThis is a simplified version of \u003ccode\u003e\u003ca\u003erunModuleT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "ModuleT i m a-\u003e Packages-\u003e String-\u003e (FilePath -\u003e m i)-\u003e m a",
        "fct-type": "function",
        "title": "evalModuleT"
      },
      "index": {
        "description": "Run ModuleT action This is simplified version of runModuleT",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "evalModuleT",
        "normalized": "ModuleT a b c-\u003ePackages-\u003eString-\u003e(FilePath-\u003eb a)-\u003eb c",
        "package": "haskell-packages",
        "partial": "Module",
        "signature": "ModuleT i m a-\u003ePackages-\u003eString-\u003e(FilePath-\u003em i)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:getModuleInfo",
      "description": {
        "fct-descr": "\u003cp\u003eTries to find the module in the current set of packages, then find the\n module's info file, and reads and caches its contents.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the module could not be found in the current set of\n packages. If the module is found, but something else goes wrong (e.g.\n there's no info file for it), an exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "n -\u003e m (Maybe (ModuleInfo m))",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#getModuleInfo",
        "fct-type": "function",
        "title": "getModuleInfo"
      },
      "index": {
        "description": "Tries to find the module in the current set of packages then find the module info file and reads and caches its contents Returns Nothing if the module could not be found in the current set of packages If the module is found but something else goes wrong e.g there no info file for it an exception is thrown",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "getModuleInfo",
        "normalized": "a-\u003eb(Maybe(ModuleInfo b))",
        "package": "haskell-packages",
        "partial": "Module Info",
        "signature": "n-\u003em(Maybe(ModuleInfo m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:getPackages",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "m Packages",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#getPackages",
        "fct-type": "method",
        "title": "getPackages"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "getPackages",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Packages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:insertInCache",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "n -\u003e ModuleInfo m -\u003e m ()",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#insertInCache",
        "fct-type": "method",
        "title": "insertInCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "insertInCache",
        "normalized": "a-\u003eModuleInfo b-\u003eb()",
        "package": "haskell-packages",
        "partial": "In Cache",
        "signature": "n-\u003eModuleInfo m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:lookupInCache",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "n -\u003e m (Maybe (ModuleInfo m))",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#lookupInCache",
        "fct-type": "method",
        "title": "lookupInCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "lookupInCache",
        "normalized": "a-\u003eb(Maybe(ModuleInfo b))",
        "package": "haskell-packages",
        "partial": "In Cache",
        "signature": "n-\u003em(Maybe(ModuleInfo m))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:modToString",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "n -\u003e String",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#modToString",
        "fct-type": "method",
        "title": "modToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "modToString",
        "normalized": "a-\u003eString",
        "package": "haskell-packages",
        "partial": "To String",
        "signature": "n-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:readModuleInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRead the module info, given a list of search paths and the module\n name\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "[FilePath] -\u003e n -\u003e m (ModuleInfo m)",
        "fct-source": "src/Distribution-HaskellSuite-Modules.html#readModuleInfo",
        "fct-type": "method",
        "title": "readModuleInfo"
      },
      "index": {
        "description": "Read the module info given list of search paths and the module name",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "readModuleInfo",
        "normalized": "[FilePath]-\u003ea-\u003eb(ModuleInfo b)",
        "package": "haskell-packages",
        "partial": "Module Info",
        "signature": "[FilePath]-\u003en-\u003em(ModuleInfo m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Modules.html#v:runModuleT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eModuleT\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Modules",
        "fct-package": "haskell-packages",
        "fct-signature": "ModuleT i m a-\u003e Packages-\u003e String-\u003e (FilePath -\u003e m i)-\u003e Map ModuleName i-\u003e m (a, Map ModuleName i)",
        "fct-type": "function",
        "title": "runModuleT"
      },
      "index": {
        "description": "Run ModuleT action",
        "hierarchy": "Distribution HaskellSuite Modules",
        "module": "Distribution.HaskellSuite.Modules",
        "name": "runModuleT",
        "normalized": "ModuleT a b c-\u003ePackages-\u003eString-\u003e(FilePath-\u003eb a)-\u003eMap ModuleName a-\u003eb(c,Map ModuleName a)",
        "package": "haskell-packages",
        "partial": "Module",
        "signature": "ModuleT i m a-\u003ePackages-\u003eString-\u003e(FilePath-\u003em i)-\u003eMap ModuleName i-\u003em(a,Map ModuleName i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "module",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html",
        "fct-type": "module",
        "title": "Packages"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "Packages",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Packages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:IsDBName",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "class",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#IsDBName",
        "fct-type": "class",
        "title": "IsDBName"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "IsDBName",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Is DBName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:IsPackageDB",
      "description": {
        "fct-descr": "\u003cp\u003ePackage database class.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edb\u003c/code\u003e will typically be a newtype-wrapped path to the database file,\n although more sophisticated setups are certainly possible.\n\u003c/p\u003e\u003cp\u003eConsider using \u003ccode\u003e\u003ca\u003eStandardDB\u003c/a\u003e\u003c/code\u003e first, and implement your own database\n type if that isn't enough.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "class",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#IsPackageDB",
        "fct-type": "class",
        "title": "IsPackageDB"
      },
      "index": {
        "description": "Package database class db will typically be newtype-wrapped path to the database file although more sophisticated setups are certainly possible Consider using StandardDB first and implement your own database type if that isn enough",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "IsPackageDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Is Package DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:MaybeInitDB",
      "description": {
        "fct-descr": "\u003cp\u003eA flag which tells whether the library should create an empty package\n database if it doesn't exist yet\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
        "fct-type": "data",
        "title": "MaybeInitDB"
      },
      "index": {
        "description": "flag which tells whether the library should create an empty package database if it doesn exist yet",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "MaybeInitDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Maybe Init DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:Packages",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "type",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#Packages",
        "fct-type": "type",
        "title": "Packages"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "Packages",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Packages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:PkgDBError",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
        "fct-type": "data",
        "title": "PkgDBError"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "PkgDBError",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Pkg DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:PkgInfoError",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgInfoError",
        "fct-type": "data",
        "title": "PkgInfoError"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "PkgInfoError",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Pkg Info Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#t:StandardDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "data",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#StandardDB",
        "fct-type": "data",
        "title": "StandardDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "StandardDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Standard DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:BadPkgDB",
      "description": {
        "fct-descr": "\u003cp\u003epackage database could not be parsed or contains errors\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "BadPkgDB FilePath",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
        "fct-type": "function",
        "title": "BadPkgDB"
      },
      "index": {
        "description": "package database could not be parsed or contains errors",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "BadPkgDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Bad Pkg DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:Don-39-tInitDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "Don'tInitDB",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
        "fct-type": "function",
        "title": "Don'tInitDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "Don'tInitDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Don't Init DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:InitDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "InitDB",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#MaybeInitDB",
        "fct-type": "function",
        "title": "InitDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "InitDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Init DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgDBReadError",
      "description": {
        "fct-descr": "\u003cp\u003epackage db file could not be read\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "PkgDBReadError FilePath IOException",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
        "fct-type": "function",
        "title": "PkgDBReadError"
      },
      "index": {
        "description": "package db file could not be read",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "PkgDBReadError",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Pkg DBRead Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgExists",
      "description": {
        "fct-descr": "\u003cp\u003eattempt to register an already present package id\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "PkgExists InstalledPackageId",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
        "fct-type": "function",
        "title": "PkgExists"
      },
      "index": {
        "description": "attempt to register an already present package id",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "PkgExists",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Pkg Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:PkgInfoNotFound",
      "description": {
        "fct-descr": "\u003cp\u003erequested package id could not be found in any of the package databases\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "PkgInfoNotFound InstalledPackageId",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgInfoError",
        "fct-type": "function",
        "title": "PkgInfoNotFound"
      },
      "index": {
        "description": "requested package id could not be found in any of the package databases",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "PkgInfoNotFound",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Pkg Info Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:RegisterNullDB",
      "description": {
        "fct-descr": "\u003cp\u003eattempt to register in the global db when it's not present\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "RegisterNullDB",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#PkgDBError",
        "fct-type": "function",
        "title": "RegisterNullDB"
      },
      "index": {
        "description": "attempt to register in the global db when it not present",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "RegisterNullDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Register Null DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:StandardDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "StandardDB FilePath",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#StandardDB",
        "fct-type": "function",
        "title": "StandardDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "StandardDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Standard DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:dbFromPath",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a db object given a database file path\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "FilePath -\u003e IO db",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#dbFromPath",
        "fct-type": "method",
        "title": "dbFromPath"
      },
      "index": {
        "description": "Create db object given database file path",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "dbFromPath",
        "normalized": "FilePath-\u003eIO a",
        "package": "haskell-packages",
        "partial": "From Path",
        "signature": "FilePath-\u003eIO db"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:dbName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the database. Used to construct some paths.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "Tagged db String",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#dbName",
        "fct-type": "method",
        "title": "dbName"
      },
      "index": {
        "description": "The name of the database Used to construct some paths",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "dbName",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:getDBName",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "Tagged name String",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#getDBName",
        "fct-type": "method",
        "title": "getDBName"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "getDBName",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "DBName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:getInstalledPackages",
      "description": {
        "fct-descr": "\u003cp\u003eGet all packages that are registered in a particular database\n\u003c/p\u003e\u003cp\u003eIf the database doesn't exist, the behaviour is determined by\n \u003ccode\u003e\u003ca\u003emaybeInitDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "Proxy db -\u003e PackageDB -\u003e IO Packages",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#getInstalledPackages",
        "fct-type": "function",
        "title": "getInstalledPackages"
      },
      "index": {
        "description": "Get all packages that are registered in particular database If the database doesn exist the behaviour is determined by maybeInitDB",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "getInstalledPackages",
        "normalized": "Proxy a-\u003ePackageDB-\u003eIO Packages",
        "package": "haskell-packages",
        "partial": "Installed Packages",
        "signature": "Proxy db-\u003ePackageDB-\u003eIO Packages"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:globalDB",
      "description": {
        "fct-descr": "\u003cp\u003eGet the location of a global package database (if there's one)\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "IO (Maybe db)",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#globalDB",
        "fct-type": "method",
        "title": "globalDB"
      },
      "index": {
        "description": "Get the location of global package database if there one",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "globalDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:initDB",
      "description": {
        "fct-descr": "\u003cp\u003eIf the path does not exist, create an empty database there. Otherwise,\n do nothing.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#initDB",
        "fct-type": "function",
        "title": "initDB"
      },
      "index": {
        "description": "If the path does not exist create an empty database there Otherwise do nothing",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "initDB",
        "normalized": "FilePath-\u003eIO()",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:locateDB",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a package db specification to a db object\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "PackageDB -\u003e IO (Maybe db)",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#locateDB",
        "fct-type": "method",
        "title": "locateDB"
      },
      "index": {
        "description": "Convert package db specification to db object",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "locateDB",
        "normalized": "PackageDB-\u003eIO(Maybe a)",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": "PackageDB-\u003eIO(Maybe db)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:makePkgInfoAbsolute",
      "description": {
        "fct-descr": "\u003cp\u003eMake all relative paths in the package info absolute, interpreting\n them relative to the given base directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "FilePath -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#makePkgInfoAbsolute",
        "fct-type": "function",
        "title": "makePkgInfoAbsolute"
      },
      "index": {
        "description": "Make all relative paths in the package info absolute interpreting them relative to the given base directory",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "makePkgInfoAbsolute",
        "normalized": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
        "package": "haskell-packages",
        "partial": "Pkg Info Absolute",
        "signature": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:makePkgInfoRelative",
      "description": {
        "fct-descr": "\u003cp\u003eMake all paths in the package info relative to the given base\n directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "FilePath -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#makePkgInfoRelative",
        "fct-type": "function",
        "title": "makePkgInfoRelative"
      },
      "index": {
        "description": "Make all paths in the package info relative to the given base directory",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "makePkgInfoRelative",
        "normalized": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
        "package": "haskell-packages",
        "partial": "Pkg Info Relative",
        "signature": "FilePath-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:mapPaths",
      "description": {
        "fct-descr": "\u003cp\u003eApply a given function to all file paths contained in the package info\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "(FilePath -\u003e FilePath) -\u003e InstalledPackageInfo -\u003e InstalledPackageInfo",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#mapPaths",
        "fct-type": "function",
        "title": "mapPaths"
      },
      "index": {
        "description": "Apply given function to all file paths contained in the package info",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "mapPaths",
        "normalized": "(FilePath-\u003eFilePath)-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo",
        "package": "haskell-packages",
        "partial": "Paths",
        "signature": "(FilePath-\u003eFilePath)-\u003eInstalledPackageInfo-\u003eInstalledPackageInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:maybeInitDB",
      "description": {
        "fct-descr": "\u003cp\u003eThis function determines whether a package database should be\n initialized if it doesn't exist yet.\n\u003c/p\u003e\u003cp\u003eThe rule is this: if it is a global or a user database, then initialize\n it; otherwise, don't.\n\u003c/p\u003e\u003cp\u003eRationale: if the database was specified by the user, she could have\n made a mistake in the path, and we'd rather report it. On the other\n hand, it is our responsibility to ensure that the user and global\n databases exist.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "PackageDB -\u003e MaybeInitDB",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#maybeInitDB",
        "fct-type": "function",
        "title": "maybeInitDB"
      },
      "index": {
        "description": "This function determines whether package database should be initialized if it doesn exist yet The rule is this if it is global or user database then initialize it otherwise don Rationale if the database was specified by the user she could have made mistake in the path and we rather report it On the other hand it is our responsibility to ensure that the user and global databases exist",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "maybeInitDB",
        "normalized": "PackageDB-\u003eMaybeInitDB",
        "package": "haskell-packages",
        "partial": "Init DB",
        "signature": "PackageDB-\u003eMaybeInitDB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "MaybeInitDB -\u003e FilePath -\u003e IO Packages",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#readDB",
        "fct-type": "function",
        "title": "readDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "readDB",
        "normalized": "MaybeInitDB-\u003eFilePath-\u003eIO Packages",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": "MaybeInitDB-\u003eFilePath-\u003eIO Packages"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readPackageDB",
      "description": {
        "fct-descr": "\u003cp\u003eRead a package database.\n\u003c/p\u003e\u003cp\u003eIf the database does not exist, then the first argument tells whether\n we should create and initialize it with an empty package list. In\n that case, if \u003ccode\u003e\u003ca\u003eDon'tInitDB\u003c/a\u003e\u003c/code\u003e is specified, a \u003ccode\u003eBadPkgDb\u003c/code\u003e exception is\n thrown.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "MaybeInitDB -\u003e db -\u003e IO Packages",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#readPackageDB",
        "fct-type": "method",
        "title": "readPackageDB"
      },
      "index": {
        "description": "Read package database If the database does not exist then the first argument tells whether we should create and initialize it with an empty package list In that case if Don tInitDB is specified BadPkgDb exception is thrown",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "readPackageDB",
        "normalized": "MaybeInitDB-\u003ea-\u003eIO Packages",
        "package": "haskell-packages",
        "partial": "Package DB",
        "signature": "MaybeInitDB-\u003edb-\u003eIO Packages"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:readPackagesInfo",
      "description": {
        "fct-descr": "\u003cp\u003eTry to retrieve an \u003ccode\u003eInstalledPackageInfo\u003c/code\u003e for each of\n \u003ccode\u003e\u003ca\u003eInstalledPackageId\u003c/a\u003e\u003c/code\u003es from a specified set of \u003ccode\u003e\u003ca\u003ePackageDB\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMay throw a \u003ccode\u003e\u003ca\u003ePkgInfoNotFound\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eIf a database doesn't exist, the behaviour is determined by\n \u003ccode\u003e\u003ca\u003emaybeInitDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "Proxy db -\u003e [PackageDB] -\u003e [InstalledPackageId] -\u003e IO Packages",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#readPackagesInfo",
        "fct-type": "function",
        "title": "readPackagesInfo"
      },
      "index": {
        "description": "Try to retrieve an InstalledPackageInfo for each of InstalledPackageId from specified set of PackageDB May throw PkgInfoNotFound exception If database doesn exist the behaviour is determined by maybeInitDB",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "readPackagesInfo",
        "normalized": "Proxy a-\u003e[PackageDB]-\u003e[InstalledPackageId]-\u003eIO Packages",
        "package": "haskell-packages",
        "partial": "Packages Info",
        "signature": "Proxy db-\u003e[PackageDB]-\u003e[InstalledPackageId]-\u003eIO Packages"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:userDB",
      "description": {
        "fct-descr": "\u003cp\u003eThe user database\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "IO db",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#userDB",
        "fct-type": "method",
        "title": "userDB"
      },
      "index": {
        "description": "The user database",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "userDB",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:writeDB",
      "description": {
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "FilePath -\u003e Packages -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#writeDB",
        "fct-type": "function",
        "title": "writeDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "writeDB",
        "normalized": "FilePath-\u003ePackages-\u003eIO()",
        "package": "haskell-packages",
        "partial": "DB",
        "signature": "FilePath-\u003ePackages-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite-Packages.html#v:writePackageDB",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a package database\n\u003c/p\u003e",
        "fct-module": "Distribution.HaskellSuite.Packages",
        "fct-package": "haskell-packages",
        "fct-signature": "db -\u003e Packages -\u003e IO ()",
        "fct-source": "src/Distribution-HaskellSuite-Packages.html#writePackageDB",
        "fct-type": "method",
        "title": "writePackageDB"
      },
      "index": {
        "description": "Write package database",
        "hierarchy": "Distribution HaskellSuite Packages",
        "module": "Distribution.HaskellSuite.Packages",
        "name": "writePackageDB",
        "normalized": "a-\u003ePackages-\u003eIO()",
        "package": "haskell-packages",
        "partial": "Package DB",
        "signature": "db-\u003ePackages-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-packages/docs/Distribution-HaskellSuite.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports all you need in order to \u003cem\u003eread\u003c/em\u003e package\n databases and module info files created by compilers that use\n haskell-packages.\n\u003c/p\u003e\u003cp\u003eIf you are writing a compiler, i.e. a program that creates or writes\n package databases or module info files &#8212; then take a look at\n \u003ca\u003eDistribution.HaskellSuite.Compiler\u003c/a\u003e. It provides command-line\n options handling and Cabal integration.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.HaskellSuite",
        "fct-package": "haskell-packages",
        "fct-signature": "module",
        "fct-source": "src/Distribution-HaskellSuite.html",
        "fct-type": "module",
        "title": "HaskellSuite"
      },
      "index": {
        "description": "This module re-exports all you need in order to read package databases and module info files created by compilers that use haskell-packages If you are writing compiler i.e program that creates or writes package databases or module info files then take look at Distribution.HaskellSuite.Compiler It provides command-line options handling and Cabal integration",
        "hierarchy": "Distribution HaskellSuite",
        "module": "Distribution.HaskellSuite",
        "name": "HaskellSuite",
        "normalized": "",
        "package": "haskell-packages",
        "partial": "Haskell Suite",
        "signature": ""
      }
    }
  }
]