[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements loading and saving of global and local configurations.\n All configurations are stored in the \u003ccode\u003eConfigFile\u003c/code\u003e format, which is\n fully compatible with the official Kattis configuration file.\n\u003c/p\u003e\u003cp\u003eThe global configuration file corresponds to \u003cem\u003ekattisrc\u003c/em\u003e, which holds\n information regarding authentication and hosts.\n\u003c/p\u003e\u003cp\u003eThe local configuration holds project-specific information and\n is created by the \u003ccode\u003eInit\u003c/code\u003e submodule.\n Currently only the problem name is stored.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Utils.Katt.Configuration",
        "fct-package": "katt",
        "fct-signature": "module",
        "fct-source": "src/Utils-Katt-Configuration.html",
        "fct-type": "module",
        "title": "Configuration"
      },
      "index": {
        "description": "Implements loading and saving of global and local configurations All configurations are stored in the ConfigFile format which is fully compatible with the official Kattis configuration file The global configuration file corresponds to kattisrc which holds information regarding authentication and hosts The local configuration holds project-specific information and is created by the Init submodule Currently only the problem name is stored",
        "hierarchy": "Utils Katt Configuration",
        "module": "Utils.Katt.Configuration",
        "name": "Configuration",
        "normalized": "",
        "package": "katt",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:loadGlobalConfig",
      "description": {
        "fct-descr": "\u003cp\u003eLoad global configuration file and parse the configuration state.\n   Ensures that all fields are present and validates the URLs.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Configuration",
        "fct-package": "katt",
        "fct-signature": "IO (Either ErrorDesc ConfigState)",
        "fct-source": "src/Utils-Katt-Configuration.html#loadGlobalConfig",
        "fct-type": "function",
        "title": "loadGlobalConfig"
      },
      "index": {
        "description": "Load global configuration file and parse the configuration state Ensures that all fields are present and validates the URLs",
        "hierarchy": "Utils Katt Configuration",
        "module": "Utils.Katt.Configuration",
        "name": "loadGlobalConfig",
        "normalized": "",
        "package": "katt",
        "partial": "Global Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:loadProjectConfig",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a project-specific configuration based on the current directory.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Configuration",
        "fct-package": "katt",
        "fct-signature": "ConfigEnv IO ()",
        "fct-source": "src/Utils-Katt-Configuration.html#loadProjectConfig",
        "fct-type": "function",
        "title": "loadProjectConfig"
      },
      "index": {
        "description": "Load project-specific configuration based on the current directory",
        "hierarchy": "Utils Katt Configuration",
        "module": "Utils.Katt.Configuration",
        "name": "loadProjectConfig",
        "normalized": "ConfigEnv IO()",
        "package": "katt",
        "partial": "Project Config",
        "signature": "ConfigEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:projectConfigExists",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a project-specific configuration file exists and can be read.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Configuration",
        "fct-package": "katt",
        "fct-signature": "IO Bool",
        "fct-source": "src/Utils-Katt-Configuration.html#projectConfigExists",
        "fct-type": "function",
        "title": "projectConfigExists"
      },
      "index": {
        "description": "Check if project-specific configuration file exists and can be read",
        "hierarchy": "Utils Katt Configuration",
        "module": "Utils.Katt.Configuration",
        "name": "projectConfigExists",
        "normalized": "",
        "package": "katt",
        "partial": "Config Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:saveProjectConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSave a project-specific configuration file to disk.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Configuration",
        "fct-package": "katt",
        "fct-signature": "ConnEnv IO ()",
        "fct-source": "src/Utils-Katt-Configuration.html#saveProjectConfig",
        "fct-type": "function",
        "title": "saveProjectConfig"
      },
      "index": {
        "description": "Save project-specific configuration file to disk",
        "hierarchy": "Utils Katt Configuration",
        "module": "Utils.Katt.Configuration",
        "name": "saveProjectConfig",
        "normalized": "ConnEnv IO()",
        "package": "katt",
        "partial": "Project Config",
        "signature": "ConnEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInit submodule providing initialization of problems\n and entire problem sessions.\n\u003c/p\u003e\u003cp\u003eProblems are initialized by creating a directory, configuration file,\n and optionally downloading all test files available.\n Both zip-based test data and embedded HTML tables are supported.\n\u003c/p\u003e\u003cp\u003eProblem sessions are initialized by parsing the list of problems and\n initializing each problem separately.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Utils.Katt.Init",
        "fct-package": "katt",
        "fct-signature": "module",
        "fct-source": "src/Utils-Katt-Init.html",
        "fct-type": "module",
        "title": "Init"
      },
      "index": {
        "description": "Init submodule providing initialization of problems and entire problem sessions Problems are initialized by creating directory configuration file and optionally downloading all test files available Both zip-based test data and embedded HTML tables are supported Problem sessions are initialized by parsing the list of problems and initializing each problem separately",
        "hierarchy": "Utils Katt Init",
        "module": "Utils.Katt.Init",
        "name": "Init",
        "normalized": "",
        "package": "katt",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#v:initializeProblem",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a problem identifier, setup directory structures and\n   optionally download test cases.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Init",
        "fct-package": "katt",
        "fct-signature": "Bool -\u003e Bool -\u003e KattisProblem -\u003e ConnEnv IO ()",
        "fct-source": "src/Utils-Katt-Init.html#initializeProblem",
        "fct-type": "function",
        "title": "initializeProblem"
      },
      "index": {
        "description": "Given problem identifier setup directory structures and optionally download test cases",
        "hierarchy": "Utils Katt Init",
        "module": "Utils.Katt.Init",
        "name": "initializeProblem",
        "normalized": "Bool-\u003eBool-\u003eKattisProblem-\u003eConnEnv IO()",
        "package": "katt",
        "partial": "Problem",
        "signature": "Bool-\u003eBool-\u003eKattisProblem-\u003eConnEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#v:initializeSession",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a problem session id, initialize all the corresponding problems.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Init",
        "fct-package": "katt",
        "fct-signature": "Bool -\u003e ProblemSession -\u003e ConnEnv IO ()",
        "fct-source": "src/Utils-Katt-Init.html#initializeSession",
        "fct-type": "function",
        "title": "initializeSession"
      },
      "index": {
        "description": "Given problem session id initialize all the corresponding problems",
        "hierarchy": "Utils Katt Init",
        "module": "Utils.Katt.Init",
        "name": "initializeSession",
        "normalized": "Bool-\u003eProblemSession-\u003eConnEnv IO()",
        "package": "katt",
        "partial": "Session",
        "signature": "Bool-\u003eProblemSession-\u003eConnEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides searching of source code files and language identification.\n\u003c/p\u003e\u003cp\u003eLanguage identification is required in order to detect any\n inconsistencies (e.g. combining Java and C), and to tag submissions.\n\u003c/p\u003e\u003cp\u003eJava also requires identifying which file provides the main method.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "module",
        "fct-source": "src/Utils-Katt-SourceHandler.html",
        "fct-type": "module",
        "title": "SourceHandler"
      },
      "index": {
        "description": "Provides searching of source code files and language identification Language identification is required in order to detect any inconsistencies e.g combining Java and and to tag submissions Java also requires identifying which file provides the main method",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "SourceHandler",
        "normalized": "",
        "package": "katt",
        "partial": "Source Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:determineLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine source code language by studying file extensions.\n   There is an implicit priority ordering, since C is a subset of C++.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "[FilePath] -\u003e Maybe KattisLanguage",
        "fct-source": "src/Utils-Katt-SourceHandler.html#determineLanguage",
        "fct-type": "function",
        "title": "determineLanguage"
      },
      "index": {
        "description": "Determine source code language by studying file extensions There is an implicit priority ordering since is subset of",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "determineLanguage",
        "normalized": "[FilePath]-\u003eMaybe KattisLanguage",
        "package": "katt",
        "partial": "Language",
        "signature": "[FilePath]-\u003eMaybe KattisLanguage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:findFiles",
      "description": {
        "fct-descr": "\u003cp\u003eLocate all source files recursively from the current directory.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "IO [FilePath]",
        "fct-source": "src/Utils-Katt-SourceHandler.html#findFiles",
        "fct-type": "function",
        "title": "findFiles"
      },
      "index": {
        "description": "Locate all source files recursively from the current directory",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "findFiles",
        "normalized": "IO[FilePath]",
        "package": "katt",
        "partial": "Files",
        "signature": "IO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:findMainClass",
      "description": {
        "fct-descr": "\u003cp\u003eLocate main class based on source file contents.\n   C++ and C solutions do not need to be specified, returns an empty string.\n\u003c/p\u003e\u003cp\u003eIn the Java case all souce code files are parsed.\n   All occurences of a \u003cem\u003emain\u003c/em\u003e method defined with \u003cem\u003epublic static void\u003c/em\u003e are located.\n\u003c/p\u003e\u003cp\u003eWill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if result is ambiguous.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "([FilePath], KattisLanguage) -\u003e IO (Maybe FilePath)",
        "fct-source": "src/Utils-Katt-SourceHandler.html#findMainClass",
        "fct-type": "function",
        "title": "findMainClass"
      },
      "index": {
        "description": "Locate main class based on source file contents and solutions do not need to be specified returns an empty string In the Java case all souce code files are parsed All occurences of main method defined with public static void are located Will return Nothing if result is ambiguous",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "findMainClass",
        "normalized": "([FilePath],KattisLanguage)-\u003eIO(Maybe FilePath)",
        "package": "katt",
        "partial": "Main Class",
        "signature": "([FilePath],KattisLanguage)-\u003eIO(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:languageContentType",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine content type of submission language.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "KattisLanguage -\u003e ByteString",
        "fct-source": "src/Utils-Katt-SourceHandler.html#languageContentType",
        "fct-type": "function",
        "title": "languageContentType"
      },
      "index": {
        "description": "Determine content type of submission language",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "languageContentType",
        "normalized": "KattisLanguage-\u003eByteString",
        "package": "katt",
        "partial": "Content Type",
        "signature": "KattisLanguage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:languageKattisName",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine Kattis language string identifier.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "KattisLanguage -\u003e ByteString",
        "fct-source": "src/Utils-Katt-SourceHandler.html#languageKattisName",
        "fct-type": "function",
        "title": "languageKattisName"
      },
      "index": {
        "description": "Determine Kattis language string identifier",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "languageKattisName",
        "normalized": "KattisLanguage-\u003eByteString",
        "package": "katt",
        "partial": "Kattis Name",
        "signature": "KattisLanguage-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:parseFilter",
      "description": {
        "fct-descr": "\u003cp\u003eParse an argument list from the +file1 -file2 style into\n   two lists of file paths (included and ignored files).\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.SourceHandler",
        "fct-package": "katt",
        "fct-signature": "[String] -\u003e Maybe ([FilePath], [FilePath])",
        "fct-source": "src/Utils-Katt-SourceHandler.html#parseFilter",
        "fct-type": "function",
        "title": "parseFilter"
      },
      "index": {
        "description": "Parse an argument list from the file1 file2 style into two lists of file paths included and ignored files",
        "hierarchy": "Utils Katt SourceHandler",
        "module": "Utils.Katt.SourceHandler",
        "name": "parseFilter",
        "normalized": "[String]-\u003eMaybe([FilePath],[FilePath])",
        "package": "katt",
        "partial": "Filter",
        "signature": "[String]-\u003eMaybe([FilePath],[FilePath])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Upload.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUpload submodule providing submissions of solutions and parsing of results.\n\u003c/p\u003e\u003cp\u003eA submission is done by including all recursively found files and filtering\n using a file filter given as an argument.\n This is followed by polling for a submission result until some final\n submission state has been reached (e.g. accepted).\n\u003c/p\u003e\u003cp\u003eCurrently multipart data upload is implemented since https-streams\n (the HTTP client being used) does not support it (yet?).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Utils.Katt.Upload",
        "fct-package": "katt",
        "fct-signature": "module",
        "fct-source": "src/Utils-Katt-Upload.html",
        "fct-type": "module",
        "title": "Upload"
      },
      "index": {
        "description": "Upload submodule providing submissions of solutions and parsing of results submission is done by including all recursively found files and filtering using file filter given as an argument This is followed by polling for submission result until some final submission state has been reached e.g accepted Currently multipart data upload is implemented since https-streams the HTTP client being used does not support it yet",
        "hierarchy": "Utils Katt Upload",
        "module": "Utils.Katt.Upload",
        "name": "Upload",
        "normalized": "",
        "package": "katt",
        "partial": "Upload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Upload.html#v:makeSubmission",
      "description": {
        "fct-descr": "\u003cp\u003eMake a submission of the project in the working directory.\n   Accepts a list of filters on the form \u003cem\u003e+file1 -file2 ..\u003c/em\u003e, which are\n   taken into account when locating all the source files.\n   \u003cem\u003e+file\u003c/em\u003e implies adding the specified file.\n   \u003cem\u003e-file\u003c/em\u003e implies removing the specified file.\n\u003c/p\u003e\u003cp\u003eIn addition to the filters, all recursively found source code files\n   will be included in the submission.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Upload",
        "fct-package": "katt",
        "fct-signature": "[String] -\u003e ConnEnv IO ()",
        "fct-source": "src/Utils-Katt-Upload.html#makeSubmission",
        "fct-type": "function",
        "title": "makeSubmission"
      },
      "index": {
        "description": "Make submission of the project in the working directory Accepts list of filters on the form file1 file2 which are taken into account when locating all the source files file implies adding the specified file file implies removing the specified file In addition to the filters all recursively found source code files will be included in the submission",
        "hierarchy": "Utils Katt Upload",
        "module": "Utils.Katt.Upload",
        "name": "makeSubmission",
        "normalized": "[String]-\u003eConnEnv IO()",
        "package": "katt",
        "partial": "Submission",
        "signature": "[String]-\u003eConnEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains shared type declarations and various utility functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "module",
        "fct-source": "src/Utils-Katt-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Contains shared type declarations and various utility functions",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "katt",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:AuthEnv",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication layer with token state and error handling,\n   wrapping the connection layer.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#AuthEnv",
        "fct-type": "type",
        "title": "AuthEnv"
      },
      "index": {
        "description": "Authentication layer with token state and error handling wrapping the connection layer",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "AuthEnv",
        "normalized": "",
        "package": "katt",
        "partial": "Auth Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigEnv",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration layer wrapped with error handling.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigEnv",
        "fct-type": "type",
        "title": "ConfigEnv"
      },
      "index": {
        "description": "Configuration layer wrapped with error handling",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConfigEnv",
        "normalized": "",
        "package": "katt",
        "partial": "Config Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigEnvInternal",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration layer consisting of configuration state.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigEnvInternal",
        "fct-type": "type",
        "title": "ConfigEnvInternal"
      },
      "index": {
        "description": "Configuration layer consisting of configuration state",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConfigEnvInternal",
        "normalized": "",
        "package": "katt",
        "partial": "Config Env Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigState",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal configuration, initialized from the \u003cem\u003e.kattisrc\u003c/em\u003e file.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "data",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "data",
        "title": "ConfigState"
      },
      "index": {
        "description": "Global configuration initialized from the kattisrc file",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConfigState",
        "normalized": "",
        "package": "katt",
        "partial": "Config State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConnEnv",
      "description": {
        "fct-descr": "\u003cp\u003eConnection layer wrapped with error handling.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ConnEnv",
        "fct-type": "type",
        "title": "ConnEnv"
      },
      "index": {
        "description": "Connection layer wrapped with error handling",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConnEnv",
        "normalized": "",
        "package": "katt",
        "partial": "Conn Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConnEnvInternal",
      "description": {
        "fct-descr": "\u003cp\u003eConnection layer with connection state layered on the configuration layer.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ConnEnvInternal",
        "fct-type": "type",
        "title": "ConnEnvInternal"
      },
      "index": {
        "description": "Connection layer with connection state layered on the configuration layer",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConnEnvInternal",
        "normalized": "",
        "package": "katt",
        "partial": "Conn Env Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ErrorDesc",
      "description": {
        "fct-descr": "\u003cp\u003eError description alias.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ErrorDesc",
        "fct-type": "type",
        "title": "ErrorDesc"
      },
      "index": {
        "description": "Error description alias",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ErrorDesc",
        "normalized": "",
        "package": "katt",
        "partial": "Error Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:KattisLanguage",
      "description": {
        "fct-descr": "\u003cp\u003eLanguage used in submission.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "data",
        "fct-source": "src/Utils-Katt-Utils.html#KattisLanguage",
        "fct-type": "data",
        "title": "KattisLanguage"
      },
      "index": {
        "description": "Language used in submission",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "KattisLanguage",
        "normalized": "",
        "package": "katt",
        "partial": "Kattis Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:KattisProblem",
      "description": {
        "fct-descr": "\u003cp\u003eA Kattis problem.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "data",
        "fct-source": "src/Utils-Katt-Utils.html#KattisProblem",
        "fct-type": "data",
        "title": "KattisProblem"
      },
      "index": {
        "description": "Kattis problem",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "KattisProblem",
        "normalized": "",
        "package": "katt",
        "partial": "Kattis Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ProblemSession",
      "description": {
        "fct-descr": "\u003cp\u003eProblem sessions are identified with an integer id.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ProblemSession",
        "fct-type": "type",
        "title": "ProblemSession"
      },
      "index": {
        "description": "Problem sessions are identified with an integer id",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ProblemSession",
        "normalized": "",
        "package": "katt",
        "partial": "Problem Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ProjectState",
      "description": {
        "fct-descr": "\u003cp\u003eProject-specific state consists of the problem name.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#ProjectState",
        "fct-type": "type",
        "title": "ProjectState"
      },
      "index": {
        "description": "Project-specific state consists of the problem name",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ProjectState",
        "normalized": "",
        "package": "katt",
        "partial": "Project State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:Submission",
      "description": {
        "fct-descr": "\u003cp\u003eSubmissions consist of a problem identifier and a set of file paths.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#Submission",
        "fct-type": "type",
        "title": "Submission"
      },
      "index": {
        "description": "Submissions consist of problem identifier and set of file paths",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "Submission",
        "normalized": "",
        "package": "katt",
        "partial": "Submission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:SubmissionId",
      "description": {
        "fct-descr": "\u003cp\u003eSubmissions are identified with an integer id.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "type",
        "fct-source": "src/Utils-Katt-Utils.html#SubmissionId",
        "fct-type": "type",
        "title": "SubmissionId"
      },
      "index": {
        "description": "Submissions are identified with an integer id",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "SubmissionId",
        "normalized": "",
        "package": "katt",
        "partial": "Submission Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ConfigState",
      "description": {
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ConfigState",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "ConfigState"
      },
      "index": {
        "description": "",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ConfigState",
        "normalized": "",
        "package": "katt",
        "partial": "Config State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangC",
      "description": {
        "fct-descr": "\u003cp\u003eC.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "LangC",
        "fct-source": "src/Utils-Katt-Utils.html#KattisLanguage",
        "fct-type": "function",
        "title": "LangC"
      },
      "index": {
        "description": "",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "LangC",
        "normalized": "",
        "package": "katt",
        "partial": "Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangCplusplus",
      "description": {
        "fct-descr": "\u003cp\u003eC++.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "LangCplusplus",
        "fct-source": "src/Utils-Katt-Utils.html#KattisLanguage",
        "fct-type": "function",
        "title": "LangCplusplus"
      },
      "index": {
        "description": "",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "LangCplusplus",
        "normalized": "",
        "package": "katt",
        "partial": "Lang Cplusplus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangJava",
      "description": {
        "fct-descr": "\u003cp\u003eJava.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "LangJava",
        "fct-source": "src/Utils-Katt-Utils.html#KattisLanguage",
        "fct-type": "function",
        "title": "LangJava"
      },
      "index": {
        "description": "Java",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "LangJava",
        "normalized": "",
        "package": "katt",
        "partial": "Lang Java",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ProblemId",
      "description": {
        "fct-descr": "\u003cp\u003eProblem ID, unique.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ProblemId Integer",
        "fct-source": "src/Utils-Katt-Utils.html#KattisProblem",
        "fct-type": "function",
        "title": "ProblemId"
      },
      "index": {
        "description": "Problem ID unique",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ProblemId",
        "normalized": "",
        "package": "katt",
        "partial": "Problem Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ProblemName",
      "description": {
        "fct-descr": "\u003cp\u003eAssociated name of the problem.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ProblemName ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#KattisProblem",
        "fct-type": "function",
        "title": "ProblemName"
      },
      "index": {
        "description": "Associated name of the problem",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "ProblemName",
        "normalized": "",
        "package": "katt",
        "partial": "Problem Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:apiKey",
      "description": {
        "fct-descr": "\u003cp\u003eAPI token (hash).\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "apiKey"
      },
      "index": {
        "description": "API token hash",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "apiKey",
        "normalized": "",
        "package": "katt",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:authenticate",
      "description": {
        "fct-descr": "\u003cp\u003eAuthenticate an existing connection, returns a temporary token.\n   Basically the API token is used to acquire a session-specific token.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ConnEnv IO ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#authenticate",
        "fct-type": "function",
        "title": "authenticate"
      },
      "index": {
        "description": "Authenticate an existing connection returns temporary token Basically the API token is used to acquire session-specific token",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "authenticate",
        "normalized": "",
        "package": "katt",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:configDir",
      "description": {
        "fct-descr": "\u003cp\u003eRelative path to project-specific configuration directory.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#configDir",
        "fct-type": "function",
        "title": "configDir"
      },
      "index": {
        "description": "Relative path to project-specific configuration directory",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "configDir",
        "normalized": "",
        "package": "katt",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:defaultRequest",
      "description": {
        "fct-descr": "\u003cp\u003eDefault HTTP request.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "RequestBuilder ()",
        "fct-source": "src/Utils-Katt-Utils.html#defaultRequest",
        "fct-type": "function",
        "title": "defaultRequest"
      },
      "index": {
        "description": "Default HTTP request",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "defaultRequest",
        "normalized": "RequestBuilder()",
        "package": "katt",
        "partial": "Request",
        "signature": "RequestBuilder()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:extractSessionHeader",
      "description": {
        "fct-descr": "\u003cp\u003eExtract correct temporary token from cookie header string.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#extractSessionHeader",
        "fct-type": "function",
        "title": "extractSessionHeader"
      },
      "index": {
        "description": "Extract correct temporary token from cookie header string",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "extractSessionHeader",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "katt",
        "partial": "Session Header",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eHost to be considered as service.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "Host to be considered as service",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "host",
        "normalized": "",
        "package": "katt",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:inputTestExtension",
      "description": {
        "fct-descr": "\u003cp\u003eExtension of input test files.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "FilePath",
        "fct-source": "src/Utils-Katt-Utils.html#inputTestExtension",
        "fct-type": "function",
        "title": "inputTestExtension"
      },
      "index": {
        "description": "Extension of input test files",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "inputTestExtension",
        "normalized": "",
        "package": "katt",
        "partial": "Test Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:loginPage",
      "description": {
        "fct-descr": "\u003cp\u003eURL to login page, relative \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "loginPage"
      },
      "index": {
        "description": "URL to login page relative host",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "loginPage",
        "normalized": "",
        "package": "katt",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:loginSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eServer response indicating successful login.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#loginSuccess",
        "fct-type": "function",
        "title": "loginSuccess"
      },
      "index": {
        "description": "Server response indicating successful login",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "loginSuccess",
        "normalized": "",
        "package": "katt",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:makeRequest",
      "description": {
        "fct-descr": "\u003cp\u003eMake a HTTP request and retrieve the server response body.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "Request -\u003e ConnEnv IO ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#makeRequest",
        "fct-type": "function",
        "title": "makeRequest"
      },
      "index": {
        "description": "Make HTTP request and retrieve the server response body",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "makeRequest",
        "normalized": "Request-\u003eConnEnv IO ByteString",
        "package": "katt",
        "partial": "Request",
        "signature": "Request-\u003eConnEnv IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:makeSignedRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSign an existing HTTP request with a temporary token.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "RequestBuilder () -\u003e AuthEnv IO Request",
        "fct-source": "src/Utils-Katt-Utils.html#makeSignedRequest",
        "fct-type": "function",
        "title": "makeSignedRequest"
      },
      "index": {
        "description": "Sign an existing HTTP request with temporary token",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "makeSignedRequest",
        "normalized": "RequestBuilder()-\u003eAuthEnv IO Request",
        "package": "katt",
        "partial": "Signed Request",
        "signature": "RequestBuilder()-\u003eAuthEnv IO Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:outputTestExtension",
      "description": {
        "fct-descr": "\u003cp\u003eExtension of reference ouput test files.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "FilePath",
        "fct-source": "src/Utils-Katt-Utils.html#outputTestExtension",
        "fct-type": "function",
        "title": "outputTestExtension"
      },
      "index": {
        "description": "Extension of reference ouput test files",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "outputTestExtension",
        "normalized": "",
        "package": "katt",
        "partial": "Test Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:problemAddress",
      "description": {
        "fct-descr": "\u003cp\u003eURL to page with problem information, relative to \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#problemAddress",
        "fct-type": "function",
        "title": "problemAddress"
      },
      "index": {
        "description": "URL to page with problem information relative to host",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "problemAddress",
        "normalized": "",
        "package": "katt",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:programName",
      "description": {
        "fct-descr": "\u003cp\u003eName of this program.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#programName",
        "fct-type": "function",
        "title": "programName"
      },
      "index": {
        "description": "Name of this program",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "programName",
        "normalized": "",
        "package": "katt",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eProject-specific state, optionally loaded.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "Maybe ProjectState",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "Project-specific state optionally loaded",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "project",
        "normalized": "",
        "package": "katt",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:reestablishConnection",
      "description": {
        "fct-descr": "\u003cp\u003eReestablish an existing connection.\n   Useful in order to avoid timeouts related to keep-alive.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ConnEnv IO ()",
        "fct-source": "src/Utils-Katt-Utils.html#reestablishConnection",
        "fct-type": "function",
        "title": "reestablishConnection"
      },
      "index": {
        "description": "Reestablish an existing connection Useful in order to avoid timeouts related to keep-alive",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "reestablishConnection",
        "normalized": "ConnEnv IO()",
        "package": "katt",
        "partial": "Connection",
        "signature": "ConnEnv IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrievePrivatePage",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a page requiring authentication, using HTTP GET.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString -\u003e AuthEnv IO ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#retrievePrivatePage",
        "fct-type": "function",
        "title": "retrievePrivatePage"
      },
      "index": {
        "description": "Retrieve page requiring authentication using HTTP GET",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "retrievePrivatePage",
        "normalized": "ByteString-\u003eAuthEnv IO ByteString",
        "package": "katt",
        "partial": "Private Page",
        "signature": "ByteString-\u003eAuthEnv IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrieveProblemId",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve problem ID of a Kattis problem.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "KattisProblem -\u003e ConnEnv IO Integer",
        "fct-source": "src/Utils-Katt-Utils.html#retrieveProblemId",
        "fct-type": "function",
        "title": "retrieveProblemId"
      },
      "index": {
        "description": "Retrieve problem ID of Kattis problem",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "retrieveProblemId",
        "normalized": "KattisProblem-\u003eConnEnv IO Integer",
        "package": "katt",
        "partial": "Problem Id",
        "signature": "KattisProblem-\u003eConnEnv IO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrieveProblemName",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve problem name of a Kattis problem.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "KattisProblem -\u003e ConnEnv IO ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#retrieveProblemName",
        "fct-type": "function",
        "title": "retrieveProblemName"
      },
      "index": {
        "description": "Retrieve problem name of Kattis problem",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "retrieveProblemName",
        "normalized": "KattisProblem-\u003eConnEnv IO ByteString",
        "package": "katt",
        "partial": "Problem Name",
        "signature": "KattisProblem-\u003eConnEnv IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrievePublicPage",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a publically available page, using HTTP GET.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString -\u003e ConnEnv IO ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#retrievePublicPage",
        "fct-type": "function",
        "title": "retrievePublicPage"
      },
      "index": {
        "description": "Retrieve publically available page using HTTP GET",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "retrievePublicPage",
        "normalized": "ByteString-\u003eConnEnv IO ByteString",
        "package": "katt",
        "partial": "Public Page",
        "signature": "ByteString-\u003eConnEnv IO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:submitPage",
      "description": {
        "fct-descr": "\u003cp\u003eURL to submit page, relative \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "submitPage"
      },
      "index": {
        "description": "URL to submit page relative host",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "submitPage",
        "normalized": "",
        "package": "katt",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:terminateOnFailure",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate an error action and terminate process upon failure.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ErrorDesc -\u003e EitherT ErrorDesc m a -\u003e m a",
        "fct-source": "src/Utils-Katt-Utils.html#terminateOnFailure",
        "fct-type": "function",
        "title": "terminateOnFailure"
      },
      "index": {
        "description": "Evaluate an error action and terminate process upon failure",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "terminateOnFailure",
        "normalized": "ErrorDesc-\u003eEitherT ErrorDesc a b-\u003ea b",
        "package": "katt",
        "partial": "On Failure",
        "signature": "ErrorDesc-\u003eEitherT ErrorDesc m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:testFolder",
      "description": {
        "fct-descr": "\u003cp\u003eRelative path to folder containing tests.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "FilePath",
        "fct-source": "src/Utils-Katt-Utils.html#testFolder",
        "fct-type": "function",
        "title": "testFolder"
      },
      "index": {
        "description": "Relative path to folder containing tests",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "testFolder",
        "normalized": "",
        "package": "katt",
        "partial": "Folder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:tryIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an IO action and catch any exceptions.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "IO a -\u003e EitherT ErrorDesc m a",
        "fct-source": "src/Utils-Katt-Utils.html#tryIO",
        "fct-type": "function",
        "title": "tryIO"
      },
      "index": {
        "description": "Execute an IO action and catch any exceptions",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "tryIO",
        "normalized": "IO a-\u003eEitherT ErrorDesc b a",
        "package": "katt",
        "partial": "IO",
        "signature": "IO a-\u003eEitherT ErrorDesc m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:tryIOMsg",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an IO action and catch any exceptions, tagged with description.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString -\u003e IO a -\u003e EitherT ErrorDesc m a",
        "fct-source": "src/Utils-Katt-Utils.html#tryIOMsg",
        "fct-type": "function",
        "title": "tryIOMsg"
      },
      "index": {
        "description": "Execute an IO action and catch any exceptions tagged with description",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "tryIOMsg",
        "normalized": "ByteString-\u003eIO a-\u003eEitherT ErrorDesc b a",
        "package": "katt",
        "partial": "IOMsg",
        "signature": "ByteString-\u003eIO a-\u003eEitherT ErrorDesc m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:unWrapTrans",
      "description": {
        "fct-descr": "\u003cp\u003eLift some error monad one layer.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "EitherT e m a -\u003e EitherT e (t m) a",
        "fct-source": "src/Utils-Katt-Utils.html#unWrapTrans",
        "fct-type": "function",
        "title": "unWrapTrans"
      },
      "index": {
        "description": "Lift some error monad one layer",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "unWrapTrans",
        "normalized": "EitherT a b c-\u003eEitherT a(d b)c",
        "package": "katt",
        "partial": "Wrap Trans",
        "signature": "EitherT e m a-\u003eEitherT e(t m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eUsername.\n\u003c/p\u003e",
        "fct-module": "Utils.Katt.Utils",
        "fct-package": "katt",
        "fct-signature": "ByteString",
        "fct-source": "src/Utils-Katt-Utils.html#ConfigState",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "Username",
        "hierarchy": "Utils Katt Utils",
        "module": "Utils.Katt.Utils",
        "name": "user",
        "normalized": "",
        "package": "katt",
        "partial": "",
        "signature": ""
      }
    }
  }
]