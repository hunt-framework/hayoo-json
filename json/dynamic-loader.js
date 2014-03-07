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
        "word": "dynamic-loader"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "LoadCriterion",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-Criteria-LoadCriterion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Criteria LoadCriterion",
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "LoadCriterion",
          "package": "dynamic-loader",
          "partial": "Load Criterion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-LoadCriterion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "LoadCriterion",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-Criteria-LoadCriterion.html#LoadCriterion",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Plugins Criteria LoadCriterion",
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "LoadCriterion",
          "package": "dynamic-loader",
          "partial": "Load Criterion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-LoadCriterion.html#t:LoadCriterion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "addDynamicLibrary",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e String -\u003e IO ()",
          "source": "src/System-Plugins-Criteria-LoadCriterion.html#addDynamicLibrary",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Plugins Criteria LoadCriterion",
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "addDynamicLibrary",
          "normalized": "Criterion a b-\u003eString-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dynamic Library",
          "signature": "Criterion c t-\u003eString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-LoadCriterion.html#v:addDynamicLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "loadQualified",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e String -\u003e Effective c t",
          "source": "src/System-Plugins-Criteria-LoadCriterion.html#loadQualified",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Plugins Criteria LoadCriterion",
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "loadQualified",
          "normalized": "Criterion a b-\u003eString-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Qualified",
          "signature": "Criterion c t-\u003eString-\u003eEffective c t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-LoadCriterion.html#v:loadQualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "resolveSymbols",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e IO ()",
          "source": "src/System-Plugins-Criteria-LoadCriterion.html#resolveSymbols",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Plugins Criteria LoadCriterion",
          "module": "System.Plugins.Criteria.LoadCriterion",
          "name": "resolveSymbols",
          "normalized": "Criterion a b-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Symbols",
          "signature": "Criterion c t-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-LoadCriterion.html#v:resolveSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Criteria.UnsafeCriterion",
          "name": "UnsafeCriterion",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-Criteria-UnsafeCriterion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Criteria UnsafeCriterion",
          "module": "System.Plugins.Criteria.UnsafeCriterion",
          "name": "UnsafeCriterion",
          "package": "dynamic-loader",
          "partial": "Unsafe Criterion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-Criteria-UnsafeCriterion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that implements dynamic loading. You can load\n and use GHC object files and packages dynamically at runtime.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicLoader",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-DynamicLoader.html",
          "type": "module"
        },
        "index": {
          "description": "module that implements dynamic loading You can load and use GHC object files and packages dynamically at runtime",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicLoader",
          "package": "dynamic-loader",
          "partial": "Dynamic Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicModule",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-DynamicLoader.html#DynamicModule",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicModule",
          "package": "dynamic-loader",
          "partial": "Dynamic Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#t:DynamicModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicPackage",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-DynamicLoader.html#DynamicPackage",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "DynamicPackage",
          "package": "dynamic-loader",
          "partial": "Dynamic Package",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#t:DynamicPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamically load a shared library (DLL or .so). A shared library can't\nbe unloaded using this interface, if you need it use\nSystem.Posix.DynamicLinker instead.\n\u003c/p\u003e",
          "module": "[\"System.Plugins.DynamicLoader\",\"System.Plugins.NameLoader\",\"System.Plugins.PathLoader\"]",
          "name": "addDLL",
          "package": "dynamic-loader",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Plugins-DynamicLoader.html#addDLL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:addDLL\",\"http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:addDLL\",\"http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:addDLL\"]"
        },
        "index": {
          "description": "Dynamically load shared library DLL or so shared library can be unloaded using this interface if you need it use System.Posix.DynamicLinker instead",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "addDLL",
          "normalized": "String-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "DLL",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:addDLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.DynamicLoader",
          "name": "dm_path",
          "package": "dynamic-loader",
          "signature": "DynamicModule -\u003e FilePath",
          "source": "src/System-Plugins-DynamicLoader.html#dm_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "dm_path",
          "normalized": "DynamicModule-\u003eFilePath",
          "package": "dynamic-loader",
          "signature": "DynamicModule-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:dm_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.DynamicLoader",
          "name": "dp_path",
          "package": "dynamic-loader",
          "signature": "DynamicPackage -\u003e FilePath",
          "source": "src/System-Plugins-DynamicLoader.html#dp_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "dp_path",
          "normalized": "DynamicPackage-\u003eFilePath",
          "package": "dynamic-loader",
          "signature": "DynamicPackage-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:dp_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a function from a given module. If the function can't be found an\nexception will be thrown. You should have called \u003ccode\u003eresolveFunctions\u003c/code\u003e before\nyou call this.\n\u003c/p\u003e\u003cp\u003eBeware that this function isn't type-safe in any way!\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadFunction",
          "package": "dynamic-loader",
          "signature": "DynamicModule -\u003e String -\u003e IO a",
          "source": "src/System-Plugins-DynamicLoader.html#loadFunction",
          "type": "function"
        },
        "index": {
          "description": "Load function from given module If the function can be found an exception will be thrown You should have called resolveFunctions before you call this Beware that this function isn type-safe in any way",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadFunction",
          "normalized": "DynamicModule-\u003eString-\u003eIO a",
          "package": "dynamic-loader",
          "partial": "Function",
          "signature": "DynamicModule-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a module given its name (for instance \u003ccode\u003eData.FiniteMap\u003c/code\u003e), maybe a\npath to the base directory and maybe a file extension. If no such path\nis given the current working directory is used and if no file suffix\nis given \"o\" is used.\n\u003c/p\u003e\u003cp\u003eIf we have our module hierarchy in \u003ccode\u003e/usr/lib/modules\u003c/code\u003e and we want to\nload the module \u003ccode\u003eFoo.Bar\u003c/code\u003e located in \u003ccode\u003e/usr/lib/modules/Foo/Bar.o\u003c/code\u003e we\ncould issue the command: \n\u003c/p\u003e\u003cpre\u003eloadModule \"Foo.Bar\" (Just \"/usr/lib/modules\") Nothing\u003c/pre\u003e\u003cp\u003eIf our current directory was \u003ccode\u003e/tmp\u003c/code\u003e and we wanted to load the module\n\u003ccode\u003eFoo\u003c/code\u003e located in the file \u003ccode\u003e/tmp/Foo.obj\u003c/code\u003e we would write:\n\u003c/p\u003e\u003cpre\u003eloadModule \"Foo\" Nothing (Just \"obj\")\u003c/pre\u003e\u003cp\u003eIf it cannot load the object it will throw an exception.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadModule",
          "package": "dynamic-loader",
          "signature": "String -\u003e Maybe FilePath -\u003e Maybe String -\u003e IO DynamicModule",
          "source": "src/System-Plugins-DynamicLoader.html#loadModule",
          "type": "function"
        },
        "index": {
          "description": "Load module given its name for instance Data.FiniteMap maybe path to the base directory and maybe file extension If no such path is given the current working directory is used and if no file suffix is given is used If we have our module hierarchy in usr lib modules and we want to load the module Foo.Bar located in usr lib modules Foo Bar.o we could issue the command loadModule Foo.Bar Just usr lib modules Nothing If our current directory was tmp and we wanted to load the module Foo located in the file tmp Foo.obj we would write loadModule Foo Nothing Just obj If it cannot load the object it will throw an exception",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadModule",
          "normalized": "String-\u003eMaybe FilePath-\u003eMaybe String-\u003eIO DynamicModule",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "String-\u003eMaybe FilePath-\u003eMaybe String-\u003eIO DynamicModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a module given its full path and maybe a base directory to use in\nfiguring out the module's hierarchical name. If no base directory is\ngiven, it is set to the current directory.\n\u003c/p\u003e\u003cp\u003eFor instance if one wants to load module \u003ccode\u003eFoo.Bar\u003c/code\u003e located in \n\u003ccode\u003e/usr/modules/Foo/Bar.o\u003c/code\u003e one would issue the command:\n\u003c/p\u003e\u003cpre\u003eloadModuleFromPath \"/usr/modules/Foo/Bar.o\" (Just\n\"/usr/modules\")\u003c/pre\u003e\u003cp\u003eIf it cannot load the object it will throw an exception.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadModuleFromPath",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e Maybe FilePath -\u003e IO DynamicModule",
          "source": "src/System-Plugins-DynamicLoader.html#loadModuleFromPath",
          "type": "function"
        },
        "index": {
          "description": "Load module given its full path and maybe base directory to use in figuring out the module hierarchical name If no base directory is given it is set to the current directory For instance if one wants to load module Foo.Bar located in usr modules Foo Bar.o one would issue the command loadModuleFromPath usr modules Foo Bar.o Just usr modules If it cannot load the object it will throw an exception",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadModuleFromPath",
          "normalized": "FilePath-\u003eMaybe FilePath-\u003eIO DynamicModule",
          "package": "dynamic-loader",
          "partial": "Module From Path",
          "signature": "FilePath-\u003eMaybe FilePath-\u003eIO DynamicModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadModuleFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a GHC package such as \"base\" or \"text\". Takes the package name,\nmaybe a path to the packages, maybe a package prefix and maybe a\npackage suffix.\n\u003c/p\u003e\u003cp\u003ePath defaults to the current directory, package prefix to \"HS\" and\npackage suffix to \"o\".\n\u003c/p\u003e\u003cp\u003eThis function also loads accompanying cbits-packages. I.e. if you load\nthe package \u003ccode\u003ebase\u003c/code\u003e located in \u003ccode\u003e/usr/modules\u003c/code\u003e using \u003ccode\u003eHS\u003c/code\u003e and \u003ccode\u003eo\u003c/code\u003e as\nprefix and suffix, \u003ccode\u003eloadPackage\u003c/code\u003e will also look for the file \n\u003ccode\u003e/usr/modules/HSbase_cbits.o\u003c/code\u003e and load it if present.\n\u003c/p\u003e\u003cp\u003eIf it fails to load a package it will throw an exception. You will\nneed to resolve functions before you use any functions loaded.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadPackage",
          "package": "dynamic-loader",
          "signature": "String -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe String -\u003e IO DynamicPackage",
          "source": "src/System-Plugins-DynamicLoader.html#loadPackage",
          "type": "function"
        },
        "index": {
          "description": "Load GHC package such as base or text Takes the package name maybe path to the packages maybe package prefix and maybe package suffix Path defaults to the current directory package prefix to HS and package suffix to This function also loads accompanying cbits-packages I.e if you load the package base located in usr modules using HS and as prefix and suffix loadPackage will also look for the file usr modules HSbase cbits.o and load it if present If it fails to load package it will throw an exception You will need to resolve functions before you use any functions loaded",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadPackage",
          "normalized": "String-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO DynamicPackage",
          "package": "dynamic-loader",
          "partial": "Package",
          "signature": "String-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO DynamicPackage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a GHC package such as \"base\" or \"text\". Takes the full path to\nthe package.\n\u003c/p\u003e\u003cp\u003eThis function also loads accompanying cbits-packages. I.e. if you load\nthe package \u003ccode\u003e/usr/modules/HSbase.o\u003c/code\u003e it will deduce that \u003ccode\u003eo\u003c/code\u003e is the\nsuffix and \u003ccode\u003eloadPackageFromPath\u003c/code\u003e will then also look for the file\n\u003ccode\u003e/usr/modules/HSbase_cbits.o\u003c/code\u003e and load it if present.\n\u003c/p\u003e\u003cp\u003eIf it fails to load a package it will throw an exception. You will\nneed to resolve functions before you use any functions loaded.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadPackageFromPath",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e IO DynamicPackage",
          "source": "src/System-Plugins-DynamicLoader.html#loadPackageFromPath",
          "type": "function"
        },
        "index": {
          "description": "Load GHC package such as base or text Takes the full path to the package This function also loads accompanying cbits-packages I.e if you load the package usr modules HSbase.o it will deduce that is the suffix and loadPackageFromPath will then also look for the file usr modules HSbase cbits.o and load it if present If it fails to load package it will throw an exception You will need to resolve functions before you use any functions loaded",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadPackageFromPath",
          "normalized": "FilePath-\u003eIO DynamicPackage",
          "package": "dynamic-loader",
          "partial": "Package From Path",
          "signature": "FilePath-\u003eIO DynamicPackage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadPackageFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a function from package (or module) given the fully qualified\nname (e.g. \u003ccode\u003eData.FiniteMap.emptyFM\u003c/code\u003e). If the function can't be found an\nexception will be thrown. You should have called \u003ccode\u003eresolveFunctions\u003c/code\u003e\nbefore you call this.\n\u003c/p\u003e\u003cp\u003eYou must take care that you load the function qualified with the name\nof the module it's defined in! You can for instance not load\n\u003ccode\u003eData.Bool.not\u003c/code\u003e because it is only reexported in that module (from\nGHC.Base).\n\u003c/p\u003e\u003cp\u003eBeware that this function isn't type-safe in any way!\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadQualifiedFunction",
          "package": "dynamic-loader",
          "signature": "String -\u003e IO a",
          "source": "src/System-Plugins-DynamicLoader.html#loadQualifiedFunction",
          "type": "function"
        },
        "index": {
          "description": "Load function from package or module given the fully qualified name e.g Data.FiniteMap.emptyFM If the function can be found an exception will be thrown You should have called resolveFunctions before you call this You must take care that you load the function qualified with the name of the module it defined in You can for instance not load Data.Bool.not because it is only reexported in that module from GHC.Base Beware that this function isn type-safe in any way",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "loadQualifiedFunction",
          "normalized": "String-\u003eIO a",
          "package": "dynamic-loader",
          "partial": "Qualified Function",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:loadQualifiedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve all loaded functions. Should be called before any functions\nare loaded. If it is unable to resolve all functions it will throw an\nexception.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "resolveFunctions",
          "package": "dynamic-loader",
          "signature": "IO ()",
          "source": "src/System-Plugins-DynamicLoader.html#resolveFunctions",
          "type": "function"
        },
        "index": {
          "description": "Resolve all loaded functions Should be called before any functions are loaded If it is unable to resolve all functions it will throw an exception",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "resolveFunctions",
          "normalized": "IO()",
          "package": "dynamic-loader",
          "partial": "Functions",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:resolveFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnload a previously loaded module. If it cannot unload it an exception\nwill be thrown.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "unloadModule",
          "package": "dynamic-loader",
          "signature": "DynamicModule -\u003e IO ()",
          "source": "src/System-Plugins-DynamicLoader.html#unloadModule",
          "type": "function"
        },
        "index": {
          "description": "Unload previously loaded module If it cannot unload it an exception will be thrown",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "unloadModule",
          "normalized": "DynamicModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "DynamicModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:unloadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnload a package (such as \u003ccode\u003ebase\u003c/code\u003e) and its cbits-package (if\nany). Throws an exception if any unloading fails.\n\u003c/p\u003e",
          "module": "System.Plugins.DynamicLoader",
          "name": "unloadPackage",
          "package": "dynamic-loader",
          "signature": "DynamicPackage -\u003e IO ()",
          "source": "src/System-Plugins-DynamicLoader.html#unloadPackage",
          "type": "function"
        },
        "index": {
          "description": "Unload package such as base and its cbits-package if any Throws an exception if any unloading fails",
          "hierarchy": "System Plugins DynamicLoader",
          "module": "System.Plugins.DynamicLoader",
          "name": "unloadPackage",
          "normalized": "DynamicPackage-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Package",
          "signature": "DynamicPackage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-DynamicLoader.html#v:unloadPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that implements dynamic loading.\n Has smart handling of dependencies and\n is thread safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "NameLoader",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-NameLoader.html",
          "type": "module"
        },
        "index": {
          "description": "module that implements dynamic loading Has smart handling of dependencies and is thread safe",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "NameLoader",
          "package": "dynamic-loader",
          "partial": "Name Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "LoadedModule",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-NameLoader.html#LoadedModule",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "LoadedModule",
          "package": "dynamic-loader",
          "partial": "Loaded Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#t:LoadedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "Module",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-NameLoader.html#Module",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "Module",
          "package": "dynamic-loader",
          "partial": "Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "ModuleType",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-NameLoader.html#ModuleType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "ModuleType",
          "package": "dynamic-loader",
          "partial": "Module Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#t:ModuleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "MT_Module",
          "package": "dynamic-loader",
          "signature": "MT_Module",
          "source": "src/System-Plugins-NameLoader.html#ModuleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "MT_Module",
          "package": "dynamic-loader",
          "partial": "MT Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:MT_Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "MT_Package",
          "package": "dynamic-loader",
          "signature": "MT_Package",
          "source": "src/System-Plugins-NameLoader.html#ModuleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "MT_Package",
          "package": "dynamic-loader",
          "partial": "MT Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:MT_Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a module dependency. Any dependencies must be added \u003cem\u003ebefore\u003c/em\u003e any\ncalls to loadModule or symbols will not be resolved with a crash as\nresult.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "addDependency",
          "package": "dynamic-loader",
          "signature": "Module -\u003e Module -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#addDependency",
          "type": "function"
        },
        "index": {
          "description": "Add module dependency Any dependencies must be added before any calls to loadModule or symbols will not be resolved with crash as result",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "addDependency",
          "normalized": "Module-\u003eModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dependency",
          "signature": "Module-\u003eModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:addDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all dependencies for a module.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "delAllDeps",
          "package": "dynamic-loader",
          "signature": "Module -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#delAllDeps",
          "type": "function"
        },
        "index": {
          "description": "Delete all dependencies for module",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "delAllDeps",
          "normalized": "Module-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "All Deps",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:delAllDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a module dependency.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "delDependency",
          "package": "dynamic-loader",
          "signature": "Module -\u003e Module -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#delDependency",
          "type": "function"
        },
        "index": {
          "description": "Delete module dependency",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "delDependency",
          "normalized": "Module-\u003eModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dependency",
          "signature": "Module-\u003eModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:delDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a function from a module. It cannot load functions from packages\nand will throw an exception if one tries to do so. Also throws if an\nerror occurs.\n\u003c/p\u003e\u003cp\u003eIt seems (but I'm unsure) like any functions loaded will continue to\nbe valid even after the module it resides in is unloaded. It will also\nstill be valid if a new version of that module is loaded (it will thus\nstill call the old function).\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "loadFunction",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e LoadedModule -\u003e String -\u003e Effective c t",
          "source": "src/System-Plugins-NameLoader.html#loadFunction",
          "type": "function"
        },
        "index": {
          "description": "Load function from module It cannot load functions from packages and will throw an exception if one tries to do so Also throws if an error occurs It seems but unsure like any functions loaded will continue to be valid even after the module it resides in is unloaded It will also still be valid if new version of that module is loaded it will thus still call the old function",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "loadFunction",
          "normalized": "Criterion a b-\u003eLoadedModule-\u003eString-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Function",
          "signature": "Criterion c t-\u003eLoadedModule-\u003eString-\u003eEffective c t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:loadFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a module (or package) and modules it depends on. It is possible\nto load a module many times without any error occuring. However to\nunload a module one needs to call \u003ccode\u003eunloadModule\u003c/code\u003e the same number of\ntimes.\n\u003c/p\u003e\u003cp\u003eBefore loading any modules you should add wich dependencies it has\nwith addDependency (and which dependencies the modules upon which it\ndepends have).\n\u003c/p\u003e\u003cp\u003eIf the module already has been loaded nothing will be done except\nupdating the reference count. I.e. if dependencies have been updated\nthey will be ignored until the module has been completely unloaded and\nloaded again.\n\u003c/p\u003e\u003cp\u003eIt treats names begining with uppercase letters (such as \u003ccode\u003eFoo.Bar\u003c/code\u003e) as\nmodules and other names (such as \u003ccode\u003ebase\u003c/code\u003e) as packages.\n\u003c/p\u003e\u003cp\u003eIf any error occurs an exception is thrown.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "loadModule",
          "package": "dynamic-loader",
          "signature": "Module -\u003e IO LoadedModule",
          "source": "src/System-Plugins-NameLoader.html#loadModule",
          "type": "function"
        },
        "index": {
          "description": "Load module or package and modules it depends on It is possible to load module many times without any error occuring However to unload module one needs to call unloadModule the same number of times Before loading any modules you should add wich dependencies it has with addDependency and which dependencies the modules upon which it depends have If the module already has been loaded nothing will be done except updating the reference count I.e if dependencies have been updated they will be ignored until the module has been completely unloaded and loaded again It treats names begining with uppercase letters such as Foo.Bar as modules and other names such as base as packages If any error occurs an exception is thrown",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "loadModule",
          "normalized": "Module-\u003eIO LoadedModule",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "Module-\u003eIO LoadedModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:loadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "loadedModules",
          "package": "dynamic-loader",
          "signature": "IO [String]",
          "source": "src/System-Plugins-NameLoader.html#loadedModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "loadedModules",
          "normalized": "IO[String]",
          "package": "dynamic-loader",
          "partial": "Modules",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:loadedModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the modification time for a loded module. Will throw an exception\nif the module isn't loaded.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "moduleLoadedAt",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO UTCTime",
          "source": "src/System-Plugins-NameLoader.html#moduleLoadedAt",
          "type": "function"
        },
        "index": {
          "description": "Give the modification time for loded module Will throw an exception if the module isn loaded",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "moduleLoadedAt",
          "normalized": "LoadedModule-\u003eIO UTCTime",
          "package": "dynamic-loader",
          "partial": "Loaded At",
          "signature": "LoadedModule-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:moduleLoadedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the environment in wich all module loading will reside. If this\nfunction isn't called the defaults will be used.\n\u003c/p\u003e\u003cp\u003eThe parameters are: Path to modules, module suffix, path to packages,\npackage prefix and package suffix. The paths will default to current\ndirectory and the rest (in order) to \u003cem\u003eo\u003c/em\u003e, \u003cem\u003eHS\u003c/em\u003e and \u003cem\u003eo\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "setEnvironment",
          "package": "dynamic-loader",
          "signature": "Maybe FilePath -\u003e Maybe String -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe String -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#setEnvironment",
          "type": "function"
        },
        "index": {
          "description": "Set the environment in wich all module loading will reside If this function isn called the defaults will be used The parameters are Path to modules module suffix path to packages package prefix and package suffix The paths will default to current directory and the rest in order to HS and",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "setEnvironment",
          "normalized": "Maybe FilePath-\u003eMaybe String-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Environment",
          "signature": "Maybe FilePath-\u003eMaybe String-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:setEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.NameLoader",
          "name": "sm_path",
          "package": "dynamic-loader",
          "signature": "NameModule -\u003e FilePath",
          "source": "src/System-Plugins-NameLoader.html#sm_path",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "sm_path",
          "normalized": "NameModule-\u003eFilePath",
          "package": "dynamic-loader",
          "signature": "NameModule-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:sm_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnload a module and all modules it depends on. This unloading only\noccurs if the module isn't needed by any other libraries or hasn't\nbeen loaded more than once. An exception is thrown in case of error.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "unloadModule",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#unloadModule",
          "type": "function"
        },
        "index": {
          "description": "Unload module and all modules it depends on This unloading only occurs if the module isn needed by any other libraries or hasn been loaded more than once An exception is thrown in case of error",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "unloadModule",
          "normalized": "LoadedModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "LoadedModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:unloadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eunloadModule\u003c/code\u003e just doesn't trow any exceptions on error.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "unloadModuleQuiet",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO ()",
          "source": "src/System-Plugins-NameLoader.html#unloadModuleQuiet",
          "type": "function"
        },
        "index": {
          "description": "Same as unloadModule just doesn trow any exceptions on error",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "unloadModuleQuiet",
          "normalized": "LoadedModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Module Quiet",
          "signature": "LoadedModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:unloadModuleQuiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something with the current dependencies of a module. You can't use\n(blocking) functions from this module in the function given to\nwithDependencies. If you do so, a deadlock will occur.\n\u003c/p\u003e",
          "module": "System.Plugins.NameLoader",
          "name": "withDependencies",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e Module -\u003e (Maybe [Module] -\u003e Effective c t) -\u003e Effective c t",
          "source": "src/System-Plugins-NameLoader.html#withDependencies",
          "type": "function"
        },
        "index": {
          "description": "Do something with the current dependencies of module You can use blocking functions from this module in the function given to withDependencies If you do so deadlock will occur",
          "hierarchy": "System Plugins NameLoader",
          "module": "System.Plugins.NameLoader",
          "name": "withDependencies",
          "normalized": "Criterion a b-\u003eModule-\u003e(Maybe[Module]-\u003eEffective a b)-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Dependencies",
          "signature": "Criterion c t-\u003eModule-\u003e(Maybe[Module]-\u003eEffective c t)-\u003eEffective c t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-NameLoader.html#v:withDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that implements dynamic loading. \n Has smart handling of dependencies and\n is thread safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "PathLoader",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-PathLoader.html",
          "type": "module"
        },
        "index": {
          "description": "module that implements dynamic loading Has smart handling of dependencies and is thread safe",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "PathLoader",
          "package": "dynamic-loader",
          "partial": "Path Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.PathLoader",
          "name": "LoadedModule",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-PathLoader.html#LoadedModule",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "LoadedModule",
          "package": "dynamic-loader",
          "partial": "Loaded Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#t:LoadedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.PathLoader",
          "name": "ModuleType",
          "package": "dynamic-loader",
          "source": "src/System-Plugins-PathLoader.html#ModuleType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "ModuleType",
          "package": "dynamic-loader",
          "partial": "Module Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#t:ModuleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.PathLoader",
          "name": "MT_Module",
          "package": "dynamic-loader",
          "signature": "MT_Module",
          "source": "src/System-Plugins-PathLoader.html#ModuleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "MT_Module",
          "package": "dynamic-loader",
          "partial": "MT Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:MT_Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.PathLoader",
          "name": "MT_Package",
          "package": "dynamic-loader",
          "signature": "MT_Package",
          "source": "src/System-Plugins-PathLoader.html#ModuleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "MT_Package",
          "package": "dynamic-loader",
          "partial": "MT Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:MT_Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a module dependency. Any dependencies must be added \u003cem\u003ebefore\u003c/em\u003e any\ncalls to loadModule/loadPackage or symbols will not be resolved with a\ncrash as result.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "addDependency",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e (ModuleType, FilePath) -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#addDependency",
          "type": "function"
        },
        "index": {
          "description": "Add module dependency Any dependencies must be added before any calls to loadModule loadPackage or symbols will not be resolved with crash as result",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "addDependency",
          "normalized": "FilePath-\u003e(ModuleType,FilePath)-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dependency",
          "signature": "FilePath-\u003e(ModuleType,FilePath)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:addDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all dependencies for a module. Same behaviour as\n\u003ccode\u003esetDependencies path []\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "delAllDeps",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#delAllDeps",
          "type": "function"
        },
        "index": {
          "description": "Delete all dependencies for module Same behaviour as setDependencies path",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "delAllDeps",
          "normalized": "FilePath-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "All Deps",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:delAllDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a module dependency.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "delDependency",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e (ModuleType, FilePath) -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#delDependency",
          "type": "function"
        },
        "index": {
          "description": "Delete module dependency",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "delDependency",
          "normalized": "FilePath-\u003e(ModuleType,FilePath)-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dependency",
          "signature": "FilePath-\u003e(ModuleType,FilePath)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:delDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a function from a module. It cannot load functions from packages\nand will throw an exception if one tries to do so. Also throws if an\nerror occurs.\n\u003c/p\u003e\u003cp\u003eIt seems (but I'm unsure) like any functions loaded will continue to\nbe valid even after the module it resides in is unloaded. It will also\nstill be valid if a new version of that module is loaded (it will thus\nstill call the old function).\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "loadFunction",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e LoadedModule -\u003e String -\u003e Effective c t",
          "source": "src/System-Plugins-PathLoader.html#loadFunction",
          "type": "function"
        },
        "index": {
          "description": "Load function from module It cannot load functions from packages and will throw an exception if one tries to do so Also throws if an error occurs It seems but unsure like any functions loaded will continue to be valid even after the module it resides in is unloaded It will also still be valid if new version of that module is loaded it will thus still call the old function",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "loadFunction",
          "normalized": "Criterion a b-\u003eLoadedModule-\u003eString-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Function",
          "signature": "Criterion c t-\u003eLoadedModule-\u003eString-\u003eEffective c t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:loadFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a module (or package) and modules (or packages) it depends on. It\nis possible to load a module many times without any error\noccuring. However to unload a module one needs to call \u003ccode\u003eunloadModule\u003c/code\u003e\nthe same number of times.\n\u003c/p\u003e\u003cp\u003eBefore loading any modules you should add wich dependencies it has\nwith addDependency (and which dependencies the modules upon which it\ndepends have).\n\u003c/p\u003e\u003cp\u003eIf the module already has been loaded nothing will be done except\nupdating the reference count. I.e. if dependencies have been updated\nthey will be ignored until the module has been completely unloaded and\nloaded again.\n\u003c/p\u003e\u003cp\u003eIf any error occurs an exception is thrown.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "loadModule",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e ModuleType -\u003e IO LoadedModule",
          "source": "src/System-Plugins-PathLoader.html#loadModule",
          "type": "function"
        },
        "index": {
          "description": "Load module or package and modules or packages it depends on It is possible to load module many times without any error occuring However to unload module one needs to call unloadModule the same number of times Before loading any modules you should add wich dependencies it has with addDependency and which dependencies the modules upon which it depends have If the module already has been loaded nothing will be done except updating the reference count I.e if dependencies have been updated they will be ignored until the module has been completely unloaded and loaded again If any error occurs an exception is thrown",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "loadModule",
          "normalized": "FilePath-\u003eModuleType-\u003eIO LoadedModule",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "FilePath-\u003eModuleType-\u003eIO LoadedModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:loadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a qualified function from a module or package. It will throw an\nexception if an error occurs. Same restriction as for\nDynamicLinker.loadQualifiedFunction applies here too.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "loadQualifiedFunction",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e String -\u003e Effective c t",
          "source": "src/System-Plugins-PathLoader.html#loadQualifiedFunction",
          "type": "function"
        },
        "index": {
          "description": "Load qualified function from module or package It will throw an exception if an error occurs Same restriction as for DynamicLinker.loadQualifiedFunction applies here too",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "loadQualifiedFunction",
          "normalized": "Criterion a b-\u003eString-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Qualified Function",
          "signature": "Criterion c t-\u003eString-\u003eEffective c t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:loadQualifiedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.PathLoader",
          "name": "loadedModules",
          "package": "dynamic-loader",
          "signature": "IO [String]",
          "source": "src/System-Plugins-PathLoader.html#loadedModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "loadedModules",
          "normalized": "IO[String]",
          "package": "dynamic-loader",
          "partial": "Modules",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:loadedModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the modification time for a loded module. Will throw an exception\nif the module isn't loaded.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "moduleLoadedAt",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO UTCTime",
          "source": "src/System-Plugins-PathLoader.html#moduleLoadedAt",
          "type": "function"
        },
        "index": {
          "description": "Give the modification time for loded module Will throw an exception if the module isn loaded",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "moduleLoadedAt",
          "normalized": "LoadedModule-\u003eIO UTCTime",
          "package": "dynamic-loader",
          "partial": "Loaded At",
          "signature": "LoadedModule-\u003eIO UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:moduleLoadedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the base path used in figuring out module names. If not set the default\n(i.e. currentDirectory) will be used.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "setBasePath",
          "package": "dynamic-loader",
          "signature": "Maybe FilePath -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#setBasePath",
          "type": "function"
        },
        "index": {
          "description": "Set the base path used in figuring out module names If not set the default i.e currentDirectory will be used",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "setBasePath",
          "normalized": "Maybe FilePath-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Base Path",
          "signature": "Maybe FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:setBasePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all dependencies. All previous dependencies are removed.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "setDependencies",
          "package": "dynamic-loader",
          "signature": "FilePath -\u003e [(ModuleType, FilePath)] -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#setDependencies",
          "type": "function"
        },
        "index": {
          "description": "Set all dependencies All previous dependencies are removed",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "setDependencies",
          "normalized": "FilePath-\u003e[(ModuleType,FilePath)]-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Dependencies",
          "signature": "FilePath-\u003e[(ModuleType,FilePath)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:setDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnload a module and all modules it depends on. This unloading only\noccurs if the module isn't needed by any other libraries or hasn't\nbeen loaded more than once. An exception is thrown in case of error.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "unloadModule",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#unloadModule",
          "type": "function"
        },
        "index": {
          "description": "Unload module and all modules it depends on This unloading only occurs if the module isn needed by any other libraries or hasn been loaded more than once An exception is thrown in case of error",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "unloadModule",
          "normalized": "LoadedModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Module",
          "signature": "LoadedModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:unloadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eunloadModule\u003c/code\u003e just doesn't trow any exceptions on error.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "unloadModuleQuiet",
          "package": "dynamic-loader",
          "signature": "LoadedModule -\u003e IO ()",
          "source": "src/System-Plugins-PathLoader.html#unloadModuleQuiet",
          "type": "function"
        },
        "index": {
          "description": "Same as unloadModule just doesn trow any exceptions on error",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "unloadModuleQuiet",
          "normalized": "LoadedModule-\u003eIO()",
          "package": "dynamic-loader",
          "partial": "Module Quiet",
          "signature": "LoadedModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:unloadModuleQuiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something with the current dependencies of a module. You can't use\n(blocking) functions from this module in the function given to\nwithDependencies. If you do so, a deadlock will occur.\n\u003c/p\u003e",
          "module": "System.Plugins.PathLoader",
          "name": "withDependencies",
          "package": "dynamic-loader",
          "signature": "Criterion c t -\u003e FilePath -\u003e (Maybe [(ModuleType, FilePath)] -\u003e Effective c t) -\u003e Effective c t",
          "source": "src/System-Plugins-PathLoader.html#withDependencies",
          "type": "function"
        },
        "index": {
          "description": "Do something with the current dependencies of module You can use blocking functions from this module in the function given to withDependencies If you do so deadlock will occur",
          "hierarchy": "System Plugins PathLoader",
          "module": "System.Plugins.PathLoader",
          "name": "withDependencies",
          "normalized": "Criterion a b-\u003eFilePath-\u003e(Maybe[(ModuleType,FilePath)]-\u003eEffective a b)-\u003eEffective a b",
          "package": "dynamic-loader",
          "partial": "Dependencies",
          "signature": "Criterion c t-\u003eFilePath-\u003e(Maybe[(ModuleType,FilePath)]-\u003eEffective c t)-\u003eEffective c t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-loader/docs/System-Plugins-PathLoader.html#v:withDependencies"
      }
    }
  ]
]