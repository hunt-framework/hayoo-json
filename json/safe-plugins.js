[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#",
      "description": {
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "module",
        "fct-source": "src/System-Plugins-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#t:Arg",
      "description": {
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Arg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "Arg",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#t:Extension",
      "description": {
        "fct-descr": "\u003cp\u003eThis represents language extensions beyond a base \u003ccode\u003e\u003ca\u003eLanguage\u003c/a\u003e\u003c/code\u003e definition\n (such as \u003ccode\u003e\u003ca\u003eHaskell98\u003c/a\u003e\u003c/code\u003e) that are supported by some implementations, usually\n in some special mode.\n\u003c/p\u003e",
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Extension"
      },
      "index": {
        "description": "This represents language extensions beyond base Language definition such as Haskell98 that are supported by some implementations usually in some special mode",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "Extension",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#t:LoadStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eLoadStatus\u003c/code\u003e type encodes the return status of functions that\n perform dynamic loading in a type isomorphic to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e. Failure\n returns a list of error strings, success returns a reference to a\n loaded module, and the Haskell value corresponding to the symbol that\n was indexed.\n\u003c/p\u003e",
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "LoadStatus"
      },
      "index": {
        "description": "The LoadStatus type encodes the return status of functions that perform dynamic loading in type isomorphic to Either Failure returns list of error strings success returns reference to loaded module and the Haskell value corresponding to the symbol that was indexed",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "LoadStatus",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Load Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#t:Symbol",
      "description": {
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Symbol"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "Symbol",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#v:LoadFailure",
      "description": {
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "LoadFailure Errors",
        "fct-type": "function",
        "title": "LoadFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "LoadFailure",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Load Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#v:LoadSuccess",
      "description": {
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "LoadSuccess Module a",
        "fct-type": "function",
        "title": "LoadSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "LoadSuccess",
        "normalized": "",
        "package": "safe-plugins",
        "partial": "Load Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safe-plugins/docs/System-Plugins-Safe.html#v:loadOneValue",
      "description": {
        "fct-descr": "\u003cp\u003eLoad one specified symbol from Haskell source file.\n That source will be:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Forced to use specified language extensions;\n\u003c/li\u003e\u003cli\u003e Forced to import specified modules;\n\u003c/li\u003e\u003cli\u003e Allowed to import specified set of modules;\n\u003c/li\u003e\u003cli\u003e Forbidden to import any other modules;\n\u003c/li\u003e\u003cli\u003e Forbidden to use any FFI declarations.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUnsafe declarations will be simply removed from module.\n\u003c/p\u003e\u003cp\u003eWARNING: source file name should start with capital letter.\n\u003c/p\u003e",
        "fct-module": "System.Plugins.Safe",
        "fct-package": "safe-plugins",
        "fct-signature": "[Arg]-\u003e [FilePath]-\u003e FilePath-\u003e [Extension]-\u003e [String]-\u003e [String]-\u003e Symbol-\u003e IO (LoadStatus a)",
        "fct-type": "function",
        "title": "loadOneValue"
      },
      "index": {
        "description": "Load one specified symbol from Haskell source file That source will be Forced to use specified language extensions Forced to import specified modules Allowed to import specified set of modules Forbidden to import any other modules Forbidden to use any FFI declarations Unsafe declarations will be simply removed from module WARNING source file name should start with capital letter",
        "hierarchy": "System Plugins Safe",
        "module": "System.Plugins.Safe",
        "name": "loadOneValue",
        "normalized": "[Arg]-\u003e[FilePath]-\u003eFilePath-\u003e[Extension]-\u003e[String]-\u003e[String]-\u003eSymbol-\u003eIO(LoadStatus a)",
        "package": "safe-plugins",
        "partial": "One Value",
        "signature": "[Arg]-\u003e[FilePath]-\u003eFilePath-\u003e[Extension]-\u003e[String]-\u003e[String]-\u003eSymbol-\u003eIO(LoadStatus a)"
      }
    }
  }
]