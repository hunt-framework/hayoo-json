[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatibility code for things that need to be done differently\non different systems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Config.Dyre.Compat",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Compat.html",
        "fct-type": "module",
        "title": "Compat"
      },
      "index": {
        "description": "Compatibility code for things that need to be done differently on different systems",
        "hierarchy": "Config Dyre Compat",
        "module": "Config.Dyre.Compat",
        "name": "Compat",
        "normalized": "",
        "package": "dyre",
        "partial": "Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compat.html#v:customExec",
      "description": {
        "fct-descr": "\u003cp\u003eCalled whenever execution needs to be transferred over to\n   a different binary.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Compat",
        "fct-package": "dyre",
        "fct-signature": "FilePath -\u003e Maybe [String] -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Compat.html#customExec",
        "fct-type": "function",
        "title": "customExec"
      },
      "index": {
        "description": "Called whenever execution needs to be transferred over to different binary",
        "hierarchy": "Config Dyre Compat",
        "module": "Config.Dyre.Compat",
        "name": "customExec",
        "normalized": "FilePath-\u003eMaybe[String]-\u003eIO()",
        "package": "dyre",
        "partial": "Exec",
        "signature": "FilePath-\u003eMaybe[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compat.html#v:getPIDString",
      "description": {
        "fct-descr": "\u003cp\u003eWhat it says on the tin. Gets the current PID as a string.\n   Used to determine the name for the state file during restarts.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Compat",
        "fct-package": "dyre",
        "fct-signature": "IO String",
        "fct-source": "src/Config-Dyre-Compat.html#getPIDString",
        "fct-type": "function",
        "title": "getPIDString"
      },
      "index": {
        "description": "What it says on the tin Gets the current PID as string Used to determine the name for the state file during restarts",
        "hierarchy": "Config Dyre Compat",
        "module": "Config.Dyre.Compat",
        "name": "getPIDString",
        "normalized": "",
        "package": "dyre",
        "partial": "PIDString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompiling the custom executable. The majority of the code actually\ndeals with error handling, and not the compilation itself \u003cem\u003eper se\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Config.Dyre.Compile",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Compile.html",
        "fct-type": "module",
        "title": "Compile"
      },
      "index": {
        "description": "Compiling the custom executable The majority of the code actually deals with error handling and not the compilation itself per se",
        "hierarchy": "Config Dyre Compile",
        "module": "Config.Dyre.Compile",
        "name": "Compile",
        "normalized": "",
        "package": "dyre",
        "partial": "Compile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compile.html#v:customCompile",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to compile the configuration file. Will return a string\n   containing any compiler output.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Compile",
        "fct-package": "dyre",
        "fct-signature": "Params cfgType -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Compile.html#customCompile",
        "fct-type": "function",
        "title": "customCompile"
      },
      "index": {
        "description": "Attempts to compile the configuration file Will return string containing any compiler output",
        "hierarchy": "Config Dyre Compile",
        "module": "Config.Dyre.Compile",
        "name": "customCompile",
        "normalized": "Params a-\u003eIO()",
        "package": "dyre",
        "partial": "Compile",
        "signature": "Params cfgType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compile.html#v:getErrorPath",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the path to the error file.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Compile",
        "fct-package": "dyre",
        "fct-signature": "Params cfgType -\u003e IO FilePath",
        "fct-source": "src/Config-Dyre-Compile.html#getErrorPath",
        "fct-type": "function",
        "title": "getErrorPath"
      },
      "index": {
        "description": "Return the path to the error file",
        "hierarchy": "Config Dyre Compile",
        "module": "Config.Dyre.Compile",
        "name": "getErrorPath",
        "normalized": "Params a-\u003eIO FilePath",
        "package": "dyre",
        "partial": "Error Path",
        "signature": "Params cfgType-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Compile.html#v:getErrorString",
      "description": {
        "fct-descr": "\u003cp\u003eIf the error file exists and actually has some contents, return\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the error string. Otherwise return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Compile",
        "fct-package": "dyre",
        "fct-signature": "Params cfgType -\u003e IO (Maybe String)",
        "fct-source": "src/Config-Dyre-Compile.html#getErrorString",
        "fct-type": "function",
        "title": "getErrorString"
      },
      "index": {
        "description": "If the error file exists and actually has some contents return Just the error string Otherwise return Nothing",
        "hierarchy": "Config Dyre Compile",
        "module": "Config.Dyre.Compile",
        "name": "getErrorString",
        "normalized": "Params a-\u003eIO(Maybe String)",
        "package": "dyre",
        "partial": "Error String",
        "signature": "Params cfgType-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#",
      "description": {
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "Options",
        "normalized": "",
        "package": "dyre",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:customOptions",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the set of options which will be passed to another instance\n   of Dyre. Preserves the master binary, state file, and debug mode\n   flags, but doesn't pass along the forced-recompile flag. Can be\n   passed a set of other arguments to use, or it defaults to using\n   the current arguments when passed \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "Maybe [String] -\u003e IO [String]",
        "fct-source": "src/Config-Dyre-Options.html#customOptions",
        "fct-type": "function",
        "title": "customOptions"
      },
      "index": {
        "description": "Return the set of options which will be passed to another instance of Dyre Preserves the master binary state file and debug mode flags but doesn pass along the forced-recompile flag Can be passed set of other arguments to use or it defaults to using the current arguments when passed Nothing",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "customOptions",
        "normalized": "Maybe[String]-\u003eIO[String]",
        "package": "dyre",
        "partial": "Options",
        "signature": "Maybe[String]-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:getDebug",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of the '--dyre-debug' flag, which is used\n   to debug a program without installation. Specifically,\n   it forces the application to use './cache/' as the cache\n   directory, and \u003ccode\u003e./\u003c/code\u003e as the configuration directory.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "IO Bool",
        "fct-source": "src/Config-Dyre-Options.html#getDebug",
        "fct-type": "function",
        "title": "getDebug"
      },
      "index": {
        "description": "Get the value of the dyre-debug flag which is used to debug program without installation Specifically it forces the application to use cache as the cache directory and as the configuration directory",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "getDebug",
        "normalized": "",
        "package": "dyre",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:getDenyReconf",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of the '--deny-reconf' flag, which disables\n   recompilation. This overrides \u003ca\u003e--force-reconf\u003c/a\u003e, too.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "IO Bool",
        "fct-source": "src/Config-Dyre-Options.html#getDenyReconf",
        "fct-type": "function",
        "title": "getDenyReconf"
      },
      "index": {
        "description": "Get the value of the deny-reconf flag which disables recompilation This overrides force-reconf too",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "getDenyReconf",
        "normalized": "",
        "package": "dyre",
        "partial": "Deny Reconf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:getForceReconf",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of the '--force-reconf' flag, which is used\n   to force a recompile of the custom configuration.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "IO Bool",
        "fct-source": "src/Config-Dyre-Options.html#getForceReconf",
        "fct-type": "function",
        "title": "getForceReconf"
      },
      "index": {
        "description": "Get the value of the force-reconf flag which is used to force recompile of the custom configuration",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "getForceReconf",
        "normalized": "",
        "package": "dyre",
        "partial": "Force Reconf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:getMasterBinary",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path to the master binary. This is set to the path of\n   the *current* binary unless the '--dyre-master-binary=' flag\n   is set. Obviously, we pass the '--dyre-master-binary=' flag to\n   the custom configured application from the master binary.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "IO (Maybe String)",
        "fct-source": "src/Config-Dyre-Options.html#getMasterBinary",
        "fct-type": "function",
        "title": "getMasterBinary"
      },
      "index": {
        "description": "Get the path to the master binary This is set to the path of the current binary unless the dyre-master-binary flag is set Obviously we pass the dyre-master-binary flag to the custom configured application from the master binary",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "getMasterBinary",
        "normalized": "",
        "package": "dyre",
        "partial": "Master Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:getStatePersist",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path to a persistent state file. This is set only when\n   the '--dyre-state-persist=' flag is passed to the program. It\n   is used internally by \u003ccode\u003e\u003ca\u003eRelaunch\u003c/a\u003e\u003c/code\u003e to save and restore\n   state when relaunching the program.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "IO (Maybe String)",
        "fct-source": "src/Config-Dyre-Options.html#getStatePersist",
        "fct-type": "function",
        "title": "getStatePersist"
      },
      "index": {
        "description": "Get the path to persistent state file This is set only when the dyre-state-persist flag is passed to the program It is used internally by Relaunch to save and restore state when relaunching the program",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "getStatePersist",
        "normalized": "",
        "package": "dyre",
        "partial": "State Persist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:removeDyreOptions",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all Dyre's options from the given commandline arguments.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "[String] -\u003e [String]",
        "fct-source": "src/Config-Dyre-Options.html#removeDyreOptions",
        "fct-type": "function",
        "title": "removeDyreOptions"
      },
      "index": {
        "description": "Remove all Dyre options from the given commandline arguments",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "removeDyreOptions",
        "normalized": "[String]-\u003e[String]",
        "package": "dyre",
        "partial": "Dyre Options",
        "signature": "[String]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Options.html#v:withDyreOptions",
      "description": {
        "fct-descr": "\u003cp\u003eStore Dyre's command-line options to the IO-Store \u003ca\u003edyre\u003c/a\u003e,\n   and then execute the provided IO action with all Dyre's\n   options removed from the command-line arguments.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Options",
        "fct-package": "dyre",
        "fct-signature": "Params c -\u003e IO a -\u003e IO a",
        "fct-source": "src/Config-Dyre-Options.html#withDyreOptions",
        "fct-type": "function",
        "title": "withDyreOptions"
      },
      "index": {
        "description": "Store Dyre command-line options to the IO-Store dyre and then execute the provided IO action with all Dyre options removed from the command-line arguments",
        "hierarchy": "Config Dyre Options",
        "module": "Config.Dyre.Options",
        "name": "withDyreOptions",
        "normalized": "Params a-\u003eIO b-\u003eIO b",
        "package": "dyre",
        "partial": "Dyre Options",
        "signature": "Params c-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e datatype which Dyre uses to define all\nprogram-specific configuration data. Shouldn't be imported\ndirectly, as \u003ccode\u003e\u003ca\u003eDyre\u003c/a\u003e\u003c/code\u003e re-exports it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Params.html",
        "fct-type": "module",
        "title": "Params"
      },
      "index": {
        "description": "Defines the Params datatype which Dyre uses to define all program-specific configuration data Shouldn be imported directly as Dyre re-exports it",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "Params",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#t:Params",
      "description": {
        "fct-descr": "\u003cp\u003eThis structure is how all kinds of useful data is fed into Dyre. Of\n   course, only the \u003ccode\u003e\u003ca\u003eprojectName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealMain\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eshowError\u003c/a\u003e\u003c/code\u003e fields\n   are really necessary. By using the set of default values provided\n   as \u003ccode\u003e\u003ca\u003edefaultParams\u003c/a\u003e\u003c/code\u003e, you can get all the benefits of\n   using Dyre to configure your program in only five or six lines of\n   code.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "data",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "data",
        "title": "Params"
      },
      "index": {
        "description": "This structure is how all kinds of useful data is fed into Dyre Of course only the projectName realMain and showError fields are really necessary By using the set of default values provided as defaultParams you can get all the benefits of using Dyre to configure your program in only five or six lines of code",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "Params",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#t:RTSOptionHandling",
      "description": {
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "data",
        "fct-source": "src/Config-Dyre-Params.html#RTSOptionHandling",
        "fct-type": "data",
        "title": "RTSOptionHandling"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "RTSOptionHandling",
        "normalized": "",
        "package": "dyre",
        "partial": "RTSOption Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:Params",
      "description": {
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Params",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "Params"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "Params",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:RTSAppend",
      "description": {
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "RTSAppend [String]",
        "fct-source": "src/Config-Dyre-Params.html#RTSOptionHandling",
        "fct-type": "function",
        "title": "RTSAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "RTSAppend",
        "normalized": "RTSAppend[String]",
        "package": "dyre",
        "partial": "RTSAppend",
        "signature": "RTSAppend[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:RTSReplace",
      "description": {
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "RTSReplace [String]",
        "fct-source": "src/Config-Dyre-Params.html#RTSOptionHandling",
        "fct-type": "function",
        "title": "RTSReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "RTSReplace",
        "normalized": "RTSReplace[String]",
        "package": "dyre",
        "partial": "RTSReplace",
        "signature": "RTSReplace[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:cacheDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory to store build files in, including the final\n   generated executable.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Maybe (IO FilePath)",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "cacheDir"
      },
      "index": {
        "description": "The directory to store build files in including the final generated executable",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "cacheDir",
        "normalized": "",
        "package": "dyre",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:configCheck",
      "description": {
        "fct-descr": "\u003cp\u003eShould Dyre look for and attempt to compile custom configurations?\n   Useful for creating program entry points that bypass Dyre's\n   recompilation, for testing purposes.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "configCheck"
      },
      "index": {
        "description": "Should Dyre look for and attempt to compile custom configurations Useful for creating program entry points that bypass Dyre recompilation for testing purposes",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "configCheck",
        "normalized": "",
        "package": "dyre",
        "partial": "Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:configDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory to look for a configuration file in.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Maybe (IO FilePath)",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "configDir"
      },
      "index": {
        "description": "The directory to look for configuration file in",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "configDir",
        "normalized": "",
        "package": "dyre",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:forceRecomp",
      "description": {
        "fct-descr": "\u003cp\u003eShould GHC be given the -fforce-recomp flag?\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "forceRecomp"
      },
      "index": {
        "description": "Should GHC be given the fforce-recomp flag",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "forceRecomp",
        "normalized": "",
        "package": "dyre",
        "partial": "Recomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:ghcOpts",
      "description": {
        "fct-descr": "\u003cp\u003eMiscellaneous GHC compilation settings go here\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "[String]",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "ghcOpts"
      },
      "index": {
        "description": "Miscellaneous GHC compilation settings go here",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "ghcOpts",
        "normalized": "[String]",
        "package": "dyre",
        "partial": "Opts",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:hidePackages",
      "description": {
        "fct-descr": "\u003cp\u003ePackages that need to be hidden during compilation\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "[String]",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "hidePackages"
      },
      "index": {
        "description": "Packages that need to be hidden during compilation",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "hidePackages",
        "normalized": "[String]",
        "package": "dyre",
        "partial": "Packages",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:includeCurrentDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to add current directory to include list (set False to\n   prevent name shadowing within project directory.)  --\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "includeCurrentDirectory"
      },
      "index": {
        "description": "Whether to add current directory to include list set False to prevent name shadowing within project directory",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "includeCurrentDirectory",
        "normalized": "",
        "package": "dyre",
        "partial": "Current Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:projectName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the project. This needs to also be the name of\n   the executable, and the name of the configuration file.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "String",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "projectName"
      },
      "index": {
        "description": "The name of the project This needs to also be the name of the executable and the name of the configuration file",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "projectName",
        "normalized": "",
        "package": "dyre",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:realMain",
      "description": {
        "fct-descr": "\u003cp\u003eThe main function of the program. When Dyre has completed\n   all of its recompilation, it passes the configuration data\n   to this function and gets out of the way.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "cfgType -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "realMain"
      },
      "index": {
        "description": "The main function of the program When Dyre has completed all of its recompilation it passes the configuration data to this function and gets out of the way",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "realMain",
        "normalized": "a-\u003eIO()",
        "package": "dyre",
        "partial": "Main",
        "signature": "cfgType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:rtsOptsHandling",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to append, or replace GHC runtime system options\n   with others.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "RTSOptionHandling",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "rtsOptsHandling"
      },
      "index": {
        "description": "Whether to append or replace GHC runtime system options with others",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "rtsOptsHandling",
        "normalized": "",
        "package": "dyre",
        "partial": "Opts Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:showError",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is used to display error messages that occur\n   during recompilation, by allowing the program to modify its\n   initial configuration.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "cfgType -\u003e String -\u003e cfgType",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "showError"
      },
      "index": {
        "description": "This function is used to display error messages that occur during recompilation by allowing the program to modify its initial configuration",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "showError",
        "normalized": "a-\u003eString-\u003ea",
        "package": "dyre",
        "partial": "Error",
        "signature": "cfgType-\u003eString-\u003ecfgType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Params.html#v:statusOut",
      "description": {
        "fct-descr": "\u003cp\u003eA status output function. Will be called with messages\n   when Dyre recompiles or launches anything. A good value\n   is 'hPutStrLn stderr', assuming there is no pressing\n   reason to not put messages on stderr.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Params",
        "fct-package": "dyre",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "statusOut"
      },
      "index": {
        "description": "status output function Will be called with messages when Dyre recompiles or launches anything good value is hPutStrLn stderr assuming there is no pressing reason to not put messages on stderr",
        "hierarchy": "Config Dyre Params",
        "module": "Config.Dyre.Params",
        "name": "statusOut",
        "normalized": "String-\u003eIO()",
        "package": "dyre",
        "partial": "Out",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Paths.html#",
      "description": {
        "fct-module": "Config.Dyre.Paths",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Paths.html",
        "fct-type": "module",
        "title": "Paths"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Paths",
        "module": "Config.Dyre.Paths",
        "name": "Paths",
        "normalized": "",
        "package": "dyre",
        "partial": "Paths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Paths.html#v:getPaths",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the paths to, respectively, the current binary, the custom\n   binary, the config file, and the cache directory.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Paths",
        "fct-package": "dyre",
        "fct-signature": "Params c -\u003e IO (FilePath, FilePath, FilePath, FilePath, FilePath)",
        "fct-source": "src/Config-Dyre-Paths.html#getPaths",
        "fct-type": "function",
        "title": "getPaths"
      },
      "index": {
        "description": "Return the paths to respectively the current binary the custom binary the config file and the cache directory",
        "hierarchy": "Config Dyre Paths",
        "module": "Config.Dyre.Paths",
        "name": "getPaths",
        "normalized": "Params a-\u003eIO(FilePath,FilePath,FilePath,FilePath,FilePath)",
        "package": "dyre",
        "partial": "Paths",
        "signature": "Params c-\u003eIO(FilePath,FilePath,FilePath,FilePath,FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Paths.html#v:maybeModTime",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a file exists. If it exists, return Just the modification\n   time. If it doesn't exist, return Nothing.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Paths",
        "fct-package": "dyre",
        "fct-signature": "FilePath -\u003e IO (Maybe UTCTime)",
        "fct-source": "src/Config-Dyre-Paths.html#maybeModTime",
        "fct-type": "function",
        "title": "maybeModTime"
      },
      "index": {
        "description": "Check if file exists If it exists return Just the modification time If it doesn exist return Nothing",
        "hierarchy": "Config Dyre Paths",
        "module": "Config.Dyre.Paths",
        "name": "maybeModTime",
        "normalized": "FilePath-\u003eIO(Maybe UTCTime)",
        "package": "dyre",
        "partial": "Mod Time",
        "signature": "FilePath-\u003eIO(Maybe UTCTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#",
      "description": {
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre-Relaunch.html",
        "fct-type": "module",
        "title": "Relaunch"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "Relaunch",
        "normalized": "",
        "package": "dyre",
        "partial": "Relaunch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:relaunchMaster",
      "description": {
        "fct-descr": "\u003cp\u003eJust relaunch the master binary. We don't have any important\n   state to worry about. (Or, like when 'relaunchWith\u003cX\u003eState' calls\n   it, we're managing state on our own). It takes an argument which\n   can optionally specify a new set of arguments. If it is given a\n   value of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the current value of \u003ccode\u003egetArgs\u003c/code\u003e will be used.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "Maybe [String] -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Relaunch.html#relaunchMaster",
        "fct-type": "function",
        "title": "relaunchMaster"
      },
      "index": {
        "description": "Just relaunch the master binary We don have any important state to worry about Or like when relaunchWith State calls it we re managing state on our own It takes an argument which can optionally specify new set of arguments If it is given value of Nothing the current value of getArgs will be used",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "relaunchMaster",
        "normalized": "Maybe[String]-\u003eIO()",
        "package": "dyre",
        "partial": "Master",
        "signature": "Maybe[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:relaunchWithBinaryState",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize the state for later restoration with \u003ccode\u003e\u003ca\u003erestoreBinaryState\u003c/a\u003e\u003c/code\u003e,\n   and then relaunch the master binary.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e Maybe [String] -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Relaunch.html#relaunchWithBinaryState",
        "fct-type": "function",
        "title": "relaunchWithBinaryState"
      },
      "index": {
        "description": "Serialize the state for later restoration with restoreBinaryState and then relaunch the master binary",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "relaunchWithBinaryState",
        "normalized": "a-\u003eMaybe[String]-\u003eIO()",
        "package": "dyre",
        "partial": "With Binary State",
        "signature": "a-\u003eMaybe[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:relaunchWithTextState",
      "description": {
        "fct-descr": "\u003cp\u003eRelaunch the master binary, but first preserve the program\n   state so that we can use the \u003ccode\u003e\u003ca\u003erestoreTextState\u003c/a\u003e\u003c/code\u003e functions to\n   get it back again later.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e Maybe [String] -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Relaunch.html#relaunchWithTextState",
        "fct-type": "function",
        "title": "relaunchWithTextState"
      },
      "index": {
        "description": "Relaunch the master binary but first preserve the program state so that we can use the restoreTextState functions to get it back again later",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "relaunchWithTextState",
        "normalized": "a-\u003eMaybe[String]-\u003eIO()",
        "package": "dyre",
        "partial": "With Text State",
        "signature": "a-\u003eMaybe[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:restoreBinaryState",
      "description": {
        "fct-descr": "\u003cp\u003eRestore state which has been serialized through the\n   \u003ccode\u003e\u003ca\u003esaveBinaryState\u003c/a\u003e\u003c/code\u003e function. Takes a default which is\n   returned if the state doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e IO a",
        "fct-source": "src/Config-Dyre-Relaunch.html#restoreBinaryState",
        "fct-type": "function",
        "title": "restoreBinaryState"
      },
      "index": {
        "description": "Restore state which has been serialized through the saveBinaryState function Takes default which is returned if the state doesn exist",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "restoreBinaryState",
        "normalized": "a-\u003eIO a",
        "package": "dyre",
        "partial": "Binary State",
        "signature": "a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:restoreTextState",
      "description": {
        "fct-descr": "\u003cp\u003eRestore state which has been serialized through the\n   \u003ccode\u003e\u003ca\u003esaveTextState\u003c/a\u003e\u003c/code\u003e function. Takes a default which is\n   returned if the state doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e IO a",
        "fct-source": "src/Config-Dyre-Relaunch.html#restoreTextState",
        "fct-type": "function",
        "title": "restoreTextState"
      },
      "index": {
        "description": "Restore state which has been serialized through the saveTextState function Takes default which is returned if the state doesn exist",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "restoreTextState",
        "normalized": "a-\u003eIO a",
        "package": "dyre",
        "partial": "Text State",
        "signature": "a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:saveBinaryState",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a state as binary data, for later loading with\n   the \u003ccode\u003e\u003ca\u003erestoreBinaryState\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Relaunch.html#saveBinaryState",
        "fct-type": "function",
        "title": "saveBinaryState"
      },
      "index": {
        "description": "Serialize state as binary data for later loading with the restoreBinaryState function",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "saveBinaryState",
        "normalized": "a-\u003eIO()",
        "package": "dyre",
        "partial": "Binary State",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre-Relaunch.html#v:saveTextState",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a state as text, for later loading with the\n   \u003ccode\u003e\u003ca\u003erestoreTextState\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre.Relaunch",
        "fct-package": "dyre",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Relaunch.html#saveTextState",
        "fct-type": "function",
        "title": "saveTextState"
      },
      "index": {
        "description": "Serialize state as text for later loading with the restoreTextState function",
        "hierarchy": "Config Dyre Relaunch",
        "module": "Config.Dyre.Relaunch",
        "name": "saveTextState",
        "normalized": "a-\u003eIO()",
        "package": "dyre",
        "partial": "Text State",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDyre is a library for configuring your Haskell programs. Like Xmonad,\nprograms configured with Dyre will look for a configuration file written\nin Haskell, which essentially defines a custom program configured exactly\nas the user wishes it to be. And since the configuration is written in\nHaskell, the user is free to do anything they might wish in the context\nof configuring the program.\n\u003c/p\u003e\u003cp\u003eDyre places emphasis on elegance of operation and ease of integration\nwith existing applications. The \u003ccode\u003e\u003ca\u003ewrapMain\u003c/a\u003e\u003c/code\u003e function is the sole entry\npoint for Dyre. When partially applied with a parameter structure, it\nwraps around the \u003ccode\u003e\u003ca\u003erealMain\u003c/a\u003e\u003c/code\u003e value from that structure, yielding an almost\nidentical function which has been augmented with dynamic recompilation\nfunctionality.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRelaunch\u003c/a\u003e\u003c/code\u003e module provides the ability to restart the\nprogram (recompiling if applicable), and persist state across restarts,\nbut it has no impact whatsoever on the rest of the library whether it\nis used or not.\n\u003c/p\u003e\u003cp\u003eA full example of using most of Dyre's major features is as follows:\n\u003c/p\u003e\u003cpre\u003e    -- DyreExample.hs --\n    module DyreExample where\n\n    import qualified Config.Dyre as Dyre\n    import Config.Dyre.Relaunch\n\n    import System.IO\n\n    data Config = Config { message :: String, errorMsg :: Maybe String }\n    data State  = State { bufferLines :: [String] } deriving (Read, Show)\n\n    defaultConfig :: Config\n    defaultConfig = Config \"Dyre Example v0.1\" Nothing\n\n    showError :: Config -\u003e String -\u003e Config\n    showError cfg msg = cfg { errorMsg = Just msg }\n\n    realMain Config{message = message, errorMsg = errorMsg } = do\n        (State buffer) \u003c- restoreTextState $ State []\n        case errorMsg of\n             Nothing -\u003e return ()\n             Just em -\u003e putStrLn $ \"Error: \" ++ em\n        putStrLn message\n        mapM putStrLn . reverse $ buffer\n        putStr \"\u003e \" \u003e\u003e hFlush stdout\n        input \u003c- getLine\n        case input of\n             \"exit\" -\u003e return ()\n             \"quit\" -\u003e return ()\n             other  -\u003e relaunchWithTextState (State $ other:buffer) Nothing\n\n    dyreExample = Dyre.wrapMain $ Dyre.defaultParams\n        { Dyre.projectName = \"dyreExample\"\n        , Dyre.realMain    = realMain\n        , Dyre.showError   = showError\n        }\n\u003c/pre\u003e\u003cp\u003eNotice that all of the program logic is contained in the \u003ccode\u003eDyreExample\u003c/code\u003e\nmodule. The main module of the program is absolutely trivial, being\nessentially just the default configuration for the program:\n\u003c/p\u003e\u003cpre\u003e    -- Main.hs --\n    import DyreExample\n    main = dyreExample defaultConfig\n\u003c/pre\u003e\u003cp\u003eThe user can then create a custom configuration file, which\noverrides some or all of the default configuration:\n\u003c/p\u003e\u003cpre\u003e    -- ~/.config/dyreExample/dyreExample.hs --\n    import DyreExample\n    main = dyreExample $ defaultConfig { message = \"Dyre Example v0.1 (Modified)\" }\n\u003c/pre\u003e\u003cp\u003eWhen reading the above program, notice that the majority of the\ncode is simply *program logic*. Dyre is designed to intelligently\nhandle recompilation with a minimum of programmer work.\n\u003c/p\u003e\u003cp\u003eSome mention should be made of Dyre's defaults. The \u003ccode\u003e\u003ca\u003edefaultParams\u003c/a\u003e\u003c/code\u003e\nstructure used in the example defines reasonable default values for\nmost configuration items. The three elements defined above are the\nonly elements that must be overridden. For documentation of the\nparameters, consult the \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e module.\n\u003c/p\u003e\u003cp\u003eIn the absence of any customization, Dyre will search for configuration\nfiles in '$XDG_CONFIG_HOME/\u003cappName\u003e/\u003cappName\u003e.hs', and will store\ncache files in '$XDG_CACHE_HOME/\u003cappName\u003e/' directory. The module\n\u003ccode\u003e\u003ca\u003eXDG\u003c/a\u003e\u003c/code\u003e is used for this purpose, which also provides\nanalogous behaviour on Windows.\n\u003c/p\u003e\u003cp\u003eThe above example can be tested by running Main.hs with \u003ccode\u003erunhaskell\u003c/code\u003e,\nand will detect custom configurations and recompile correctly even when\nthe library isn't installed, so long as it is in the current directory\nwhen run.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "module",
        "fct-source": "src/Config-Dyre.html",
        "fct-type": "module",
        "title": "Dyre"
      },
      "index": {
        "description": "Dyre is library for configuring your Haskell programs Like Xmonad programs configured with Dyre will look for configuration file written in Haskell which essentially defines custom program configured exactly as the user wishes it to be And since the configuration is written in Haskell the user is free to do anything they might wish in the context of configuring the program Dyre places emphasis on elegance of operation and ease of integration with existing applications The wrapMain function is the sole entry point for Dyre When partially applied with parameter structure it wraps around the realMain value from that structure yielding an almost identical function which has been augmented with dynamic recompilation functionality The Relaunch module provides the ability to restart the program recompiling if applicable and persist state across restarts but it has no impact whatsoever on the rest of the library whether it is used or not full example of using most of Dyre major features is as follows DyreExample.hs module DyreExample where import qualified Config.Dyre as Dyre import Config.Dyre.Relaunch import System.IO data Config Config message String errorMsg Maybe String data State State bufferLines String deriving Read Show defaultConfig Config defaultConfig Config Dyre Example v0.1 Nothing showError Config String Config showError cfg msg cfg errorMsg Just msg realMain Config message message errorMsg errorMsg do State buffer restoreTextState State case errorMsg of Nothing return Just em putStrLn Error em putStrLn message mapM putStrLn reverse buffer putStr hFlush stdout input getLine case input of exit return quit return other relaunchWithTextState State other buffer Nothing dyreExample Dyre.wrapMain Dyre.defaultParams Dyre.projectName dyreExample Dyre.realMain realMain Dyre.showError showError Notice that all of the program logic is contained in the DyreExample module The main module of the program is absolutely trivial being essentially just the default configuration for the program Main.hs import DyreExample main dyreExample defaultConfig The user can then create custom configuration file which overrides some or all of the default configuration config dyreExample dyreExample.hs import DyreExample main dyreExample defaultConfig message Dyre Example v0.1 Modified When reading the above program notice that the majority of the code is simply program logic Dyre is designed to intelligently handle recompilation with minimum of programmer work Some mention should be made of Dyre defaults The defaultParams structure used in the example defines reasonable default values for most configuration items The three elements defined above are the only elements that must be overridden For documentation of the parameters consult the Params module In the absence of any customization Dyre will search for configuration files in XDG CONFIG HOME appName appName hs and will store cache files in XDG CACHE HOME appName directory The module XDG is used for this purpose which also provides analogous behaviour on Windows The above example can be tested by running Main.hs with runhaskell and will detect custom configurations and recompile correctly even when the library isn installed so long as it is in the current directory when run",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "Dyre",
        "normalized": "",
        "package": "dyre",
        "partial": "Dyre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#t:Params",
      "description": {
        "fct-descr": "\u003cp\u003eThis structure is how all kinds of useful data is fed into Dyre. Of\n   course, only the \u003ccode\u003e\u003ca\u003eprojectName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealMain\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eshowError\u003c/a\u003e\u003c/code\u003e fields\n   are really necessary. By using the set of default values provided\n   as \u003ccode\u003e\u003ca\u003edefaultParams\u003c/a\u003e\u003c/code\u003e, you can get all the benefits of\n   using Dyre to configure your program in only five or six lines of\n   code.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "data",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "data",
        "title": "Params"
      },
      "index": {
        "description": "This structure is how all kinds of useful data is fed into Dyre Of course only the projectName realMain and showError fields are really necessary By using the set of default values provided as defaultParams you can get all the benefits of using Dyre to configure your program in only five or six lines of code",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "Params",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:Params",
      "description": {
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Params",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "Params"
      },
      "index": {
        "description": "",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "Params",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:cacheDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory to store build files in, including the final\n   generated executable.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Maybe (IO FilePath)",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "cacheDir"
      },
      "index": {
        "description": "The directory to store build files in including the final generated executable",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "cacheDir",
        "normalized": "",
        "package": "dyre",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:configCheck",
      "description": {
        "fct-descr": "\u003cp\u003eShould Dyre look for and attempt to compile custom configurations?\n   Useful for creating program entry points that bypass Dyre's\n   recompilation, for testing purposes.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "configCheck"
      },
      "index": {
        "description": "Should Dyre look for and attempt to compile custom configurations Useful for creating program entry points that bypass Dyre recompilation for testing purposes",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "configCheck",
        "normalized": "",
        "package": "dyre",
        "partial": "Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:configDir",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory to look for a configuration file in.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Maybe (IO FilePath)",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "configDir"
      },
      "index": {
        "description": "The directory to look for configuration file in",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "configDir",
        "normalized": "",
        "package": "dyre",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:defaultParams",
      "description": {
        "fct-descr": "\u003cp\u003eA set of reasonable defaults for configuring Dyre. The fields that\n   have to be filled are \u003ccode\u003e\u003ca\u003eprojectName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erealMain\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eshowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Params cfgType",
        "fct-source": "src/Config-Dyre.html#defaultParams",
        "fct-type": "function",
        "title": "defaultParams"
      },
      "index": {
        "description": "set of reasonable defaults for configuring Dyre The fields that have to be filled are projectName realMain and showError",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "defaultParams",
        "normalized": "",
        "package": "dyre",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:forceRecomp",
      "description": {
        "fct-descr": "\u003cp\u003eShould GHC be given the -fforce-recomp flag?\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "forceRecomp"
      },
      "index": {
        "description": "Should GHC be given the fforce-recomp flag",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "forceRecomp",
        "normalized": "",
        "package": "dyre",
        "partial": "Recomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:ghcOpts",
      "description": {
        "fct-descr": "\u003cp\u003eMiscellaneous GHC compilation settings go here\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "[String]",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "ghcOpts"
      },
      "index": {
        "description": "Miscellaneous GHC compilation settings go here",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "ghcOpts",
        "normalized": "[String]",
        "package": "dyre",
        "partial": "Opts",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:hidePackages",
      "description": {
        "fct-descr": "\u003cp\u003ePackages that need to be hidden during compilation\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "[String]",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "hidePackages"
      },
      "index": {
        "description": "Packages that need to be hidden during compilation",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "hidePackages",
        "normalized": "[String]",
        "package": "dyre",
        "partial": "Packages",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:includeCurrentDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to add current directory to include list (set False to\n   prevent name shadowing within project directory.)  --\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Bool",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "includeCurrentDirectory"
      },
      "index": {
        "description": "Whether to add current directory to include list set False to prevent name shadowing within project directory",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "includeCurrentDirectory",
        "normalized": "",
        "package": "dyre",
        "partial": "Current Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:projectName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the project. This needs to also be the name of\n   the executable, and the name of the configuration file.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "String",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "projectName"
      },
      "index": {
        "description": "The name of the project This needs to also be the name of the executable and the name of the configuration file",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "projectName",
        "normalized": "",
        "package": "dyre",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:realMain",
      "description": {
        "fct-descr": "\u003cp\u003eThe main function of the program. When Dyre has completed\n   all of its recompilation, it passes the configuration data\n   to this function and gets out of the way.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "cfgType -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "realMain"
      },
      "index": {
        "description": "The main function of the program When Dyre has completed all of its recompilation it passes the configuration data to this function and gets out of the way",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "realMain",
        "normalized": "a-\u003eIO()",
        "package": "dyre",
        "partial": "Main",
        "signature": "cfgType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:rtsOptsHandling",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to append, or replace GHC runtime system options\n   with others.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "RTSOptionHandling",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "rtsOptsHandling"
      },
      "index": {
        "description": "Whether to append or replace GHC runtime system options with others",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "rtsOptsHandling",
        "normalized": "",
        "package": "dyre",
        "partial": "Opts Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:showError",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is used to display error messages that occur\n   during recompilation, by allowing the program to modify its\n   initial configuration.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "cfgType -\u003e String -\u003e cfgType",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "showError"
      },
      "index": {
        "description": "This function is used to display error messages that occur during recompilation by allowing the program to modify its initial configuration",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "showError",
        "normalized": "a-\u003eString-\u003ea",
        "package": "dyre",
        "partial": "Error",
        "signature": "cfgType-\u003eString-\u003ecfgType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:statusOut",
      "description": {
        "fct-descr": "\u003cp\u003eA status output function. Will be called with messages\n   when Dyre recompiles or launches anything. A good value\n   is 'hPutStrLn stderr', assuming there is no pressing\n   reason to not put messages on stderr.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Config-Dyre-Params.html#Params",
        "fct-type": "function",
        "title": "statusOut"
      },
      "index": {
        "description": "status output function Will be called with messages when Dyre recompiles or launches anything good value is hPutStrLn stderr assuming there is no pressing reason to not put messages on stderr",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "statusOut",
        "normalized": "String-\u003eIO()",
        "package": "dyre",
        "partial": "Out",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dyre/docs/Config-Dyre.html#v:wrapMain",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewrapMain\u003c/a\u003e\u003c/code\u003e is how Dyre recieves control of the program. It is expected\n   that it will be partially applied with its parameters to yield a \u003ccode\u003emain\u003c/code\u003e\n   entry point, which will then be called by the \u003ccode\u003emain\u003c/code\u003e function, as well\n   as by any custom configurations.\n\u003c/p\u003e",
        "fct-module": "Config.Dyre",
        "fct-package": "dyre",
        "fct-signature": "Params cfgType -\u003e cfgType -\u003e IO ()",
        "fct-source": "src/Config-Dyre.html#wrapMain",
        "fct-type": "function",
        "title": "wrapMain"
      },
      "index": {
        "description": "wrapMain is how Dyre recieves control of the program It is expected that it will be partially applied with its parameters to yield main entry point which will then be called by the main function as well as by any custom configurations",
        "hierarchy": "Config Dyre",
        "module": "Config.Dyre",
        "name": "wrapMain",
        "normalized": "Params a-\u003ea-\u003eIO()",
        "package": "dyre",
        "partial": "Main",
        "signature": "Params cfgType-\u003ecfgType-\u003eIO()"
      }
    }
  }
]