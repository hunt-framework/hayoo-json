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
        "word": "katt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements loading and saving of global and local configurations.\n All configurations are stored in the \u003ccode\u003eConfigFile\u003c/code\u003e format, which is\n fully compatible with the official Kattis configuration file.\n\u003c/p\u003e\u003cp\u003eThe global configuration file corresponds to \u003cem\u003ekattisrc\u003c/em\u003e, which holds\n information regarding authentication and hosts.\n\u003c/p\u003e\u003cp\u003eThe local configuration holds project-specific information and\n is created by the \u003ccode\u003eInit\u003c/code\u003e submodule.\n Currently only the problem name is stored.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.Katt.Configuration",
          "name": "Configuration",
          "package": "katt",
          "source": "src/Utils-Katt-Configuration.html",
          "type": "module"
        },
        "index": {
          "description": "Implements loading and saving of global and local configurations All configurations are stored in the ConfigFile format which is fully compatible with the official Kattis configuration file The global configuration file corresponds to kattisrc which holds information regarding authentication and hosts The local configuration holds project-specific information and is created by the Init submodule Currently only the problem name is stored",
          "hierarchy": "Utils Katt Configuration",
          "module": "Utils.Katt.Configuration",
          "name": "Configuration",
          "package": "katt",
          "partial": "Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad global configuration file and parse the configuration state.\n   Ensures that all fields are present and validates the URLs.\n\u003c/p\u003e",
          "module": "Utils.Katt.Configuration",
          "name": "loadGlobalConfig",
          "package": "katt",
          "signature": "IO (Either ErrorDesc ConfigState)",
          "source": "src/Utils-Katt-Configuration.html#loadGlobalConfig",
          "type": "function"
        },
        "index": {
          "description": "Load global configuration file and parse the configuration state Ensures that all fields are present and validates the URLs",
          "hierarchy": "Utils Katt Configuration",
          "module": "Utils.Katt.Configuration",
          "name": "loadGlobalConfig",
          "package": "katt",
          "partial": "Global Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:loadGlobalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a project-specific configuration based on the current directory.\n\u003c/p\u003e",
          "module": "Utils.Katt.Configuration",
          "name": "loadProjectConfig",
          "package": "katt",
          "signature": "ConfigEnv IO ()",
          "source": "src/Utils-Katt-Configuration.html#loadProjectConfig",
          "type": "function"
        },
        "index": {
          "description": "Load project-specific configuration based on the current directory",
          "hierarchy": "Utils Katt Configuration",
          "module": "Utils.Katt.Configuration",
          "name": "loadProjectConfig",
          "normalized": "ConfigEnv IO()",
          "package": "katt",
          "partial": "Project Config",
          "signature": "ConfigEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:loadProjectConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a project-specific configuration file exists and can be read.\n\u003c/p\u003e",
          "module": "Utils.Katt.Configuration",
          "name": "projectConfigExists",
          "package": "katt",
          "signature": "IO Bool",
          "source": "src/Utils-Katt-Configuration.html#projectConfigExists",
          "type": "function"
        },
        "index": {
          "description": "Check if project-specific configuration file exists and can be read",
          "hierarchy": "Utils Katt Configuration",
          "module": "Utils.Katt.Configuration",
          "name": "projectConfigExists",
          "package": "katt",
          "partial": "Config Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:projectConfigExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a project-specific configuration file to disk.\n\u003c/p\u003e",
          "module": "Utils.Katt.Configuration",
          "name": "saveProjectConfig",
          "package": "katt",
          "signature": "ConnEnv IO ()",
          "source": "src/Utils-Katt-Configuration.html#saveProjectConfig",
          "type": "function"
        },
        "index": {
          "description": "Save project-specific configuration file to disk",
          "hierarchy": "Utils Katt Configuration",
          "module": "Utils.Katt.Configuration",
          "name": "saveProjectConfig",
          "normalized": "ConnEnv IO()",
          "package": "katt",
          "partial": "Project Config",
          "signature": "ConnEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Configuration.html#v:saveProjectConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInit submodule providing initialization of problems\n and entire problem sessions.\n\u003c/p\u003e\u003cp\u003eProblems are initialized by creating a directory, configuration file,\n and optionally downloading all test files available.\n Both zip-based test data and embedded HTML tables are supported.\n\u003c/p\u003e\u003cp\u003eProblem sessions are initialized by parsing the list of problems and\n initializing each problem separately.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.Katt.Init",
          "name": "Init",
          "package": "katt",
          "source": "src/Utils-Katt-Init.html",
          "type": "module"
        },
        "index": {
          "description": "Init submodule providing initialization of problems and entire problem sessions Problems are initialized by creating directory configuration file and optionally downloading all test files available Both zip-based test data and embedded HTML tables are supported Problem sessions are initialized by parsing the list of problems and initializing each problem separately",
          "hierarchy": "Utils Katt Init",
          "module": "Utils.Katt.Init",
          "name": "Init",
          "package": "katt",
          "partial": "Init",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a problem identifier, setup directory structures and\n   optionally download test cases.\n\u003c/p\u003e",
          "module": "Utils.Katt.Init",
          "name": "initializeProblem",
          "package": "katt",
          "signature": "Bool -\u003e Bool -\u003e KattisProblem -\u003e ConnEnv IO ()",
          "source": "src/Utils-Katt-Init.html#initializeProblem",
          "type": "function"
        },
        "index": {
          "description": "Given problem identifier setup directory structures and optionally download test cases",
          "hierarchy": "Utils Katt Init",
          "module": "Utils.Katt.Init",
          "name": "initializeProblem",
          "normalized": "Bool-\u003eBool-\u003eKattisProblem-\u003eConnEnv IO()",
          "package": "katt",
          "partial": "Problem",
          "signature": "Bool-\u003eBool-\u003eKattisProblem-\u003eConnEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#v:initializeProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a problem session id, initialize all the corresponding problems.\n\u003c/p\u003e",
          "module": "Utils.Katt.Init",
          "name": "initializeSession",
          "package": "katt",
          "signature": "Bool -\u003e ProblemSession -\u003e ConnEnv IO ()",
          "source": "src/Utils-Katt-Init.html#initializeSession",
          "type": "function"
        },
        "index": {
          "description": "Given problem session id initialize all the corresponding problems",
          "hierarchy": "Utils Katt Init",
          "module": "Utils.Katt.Init",
          "name": "initializeSession",
          "normalized": "Bool-\u003eProblemSession-\u003eConnEnv IO()",
          "package": "katt",
          "partial": "Session",
          "signature": "Bool-\u003eProblemSession-\u003eConnEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Init.html#v:initializeSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides searching of source code files and language identification.\n\u003c/p\u003e\u003cp\u003eLanguage identification is required in order to detect any\n inconsistencies (e.g. combining Java and C), and to tag submissions.\n\u003c/p\u003e\u003cp\u003eJava also requires identifying which file provides the main method.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "SourceHandler",
          "package": "katt",
          "source": "src/Utils-Katt-SourceHandler.html",
          "type": "module"
        },
        "index": {
          "description": "Provides searching of source code files and language identification Language identification is required in order to detect any inconsistencies e.g combining Java and and to tag submissions Java also requires identifying which file provides the main method",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "SourceHandler",
          "package": "katt",
          "partial": "Source Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine source code language by studying file extensions.\n   There is an implicit priority ordering, since C is a subset of C++.\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "determineLanguage",
          "package": "katt",
          "signature": "[FilePath] -\u003e Maybe KattisLanguage",
          "source": "src/Utils-Katt-SourceHandler.html#determineLanguage",
          "type": "function"
        },
        "index": {
          "description": "Determine source code language by studying file extensions There is an implicit priority ordering since is subset of",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "determineLanguage",
          "normalized": "[FilePath]-\u003eMaybe KattisLanguage",
          "package": "katt",
          "partial": "Language",
          "signature": "[FilePath]-\u003eMaybe KattisLanguage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:determineLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocate all source files recursively from the current directory.\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "findFiles",
          "package": "katt",
          "signature": "IO [FilePath]",
          "source": "src/Utils-Katt-SourceHandler.html#findFiles",
          "type": "function"
        },
        "index": {
          "description": "Locate all source files recursively from the current directory",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "findFiles",
          "normalized": "IO[FilePath]",
          "package": "katt",
          "partial": "Files",
          "signature": "IO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:findFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocate main class based on source file contents.\n   C++ and C solutions do not need to be specified, returns an empty string.\n\u003c/p\u003e\u003cp\u003eIn the Java case all souce code files are parsed.\n   All occurences of a \u003cem\u003emain\u003c/em\u003e method defined with \u003cem\u003epublic static void\u003c/em\u003e are located.\n\u003c/p\u003e\u003cp\u003eWill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if result is ambiguous.\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "findMainClass",
          "package": "katt",
          "signature": "([FilePath], KattisLanguage) -\u003e IO (Maybe FilePath)",
          "source": "src/Utils-Katt-SourceHandler.html#findMainClass",
          "type": "function"
        },
        "index": {
          "description": "Locate main class based on source file contents and solutions do not need to be specified returns an empty string In the Java case all souce code files are parsed All occurences of main method defined with public static void are located Will return Nothing if result is ambiguous",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "findMainClass",
          "normalized": "([FilePath],KattisLanguage)-\u003eIO(Maybe FilePath)",
          "package": "katt",
          "partial": "Main Class",
          "signature": "([FilePath],KattisLanguage)-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:findMainClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine content type of submission language.\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "languageContentType",
          "package": "katt",
          "signature": "KattisLanguage -\u003e ByteString",
          "source": "src/Utils-Katt-SourceHandler.html#languageContentType",
          "type": "function"
        },
        "index": {
          "description": "Determine content type of submission language",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "languageContentType",
          "normalized": "KattisLanguage-\u003eByteString",
          "package": "katt",
          "partial": "Content Type",
          "signature": "KattisLanguage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:languageContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine Kattis language string identifier.\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "languageKattisName",
          "package": "katt",
          "signature": "KattisLanguage -\u003e ByteString",
          "source": "src/Utils-Katt-SourceHandler.html#languageKattisName",
          "type": "function"
        },
        "index": {
          "description": "Determine Kattis language string identifier",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "languageKattisName",
          "normalized": "KattisLanguage-\u003eByteString",
          "package": "katt",
          "partial": "Kattis Name",
          "signature": "KattisLanguage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:languageKattisName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an argument list from the +file1 -file2 style into\n   two lists of file paths (included and ignored files).\n\u003c/p\u003e",
          "module": "Utils.Katt.SourceHandler",
          "name": "parseFilter",
          "package": "katt",
          "signature": "[String] -\u003e Maybe ([FilePath], [FilePath])",
          "source": "src/Utils-Katt-SourceHandler.html#parseFilter",
          "type": "function"
        },
        "index": {
          "description": "Parse an argument list from the file1 file2 style into two lists of file paths included and ignored files",
          "hierarchy": "Utils Katt SourceHandler",
          "module": "Utils.Katt.SourceHandler",
          "name": "parseFilter",
          "normalized": "[String]-\u003eMaybe([FilePath],[FilePath])",
          "package": "katt",
          "partial": "Filter",
          "signature": "[String]-\u003eMaybe([FilePath],[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-SourceHandler.html#v:parseFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUpload submodule providing submissions of solutions and parsing of results.\n\u003c/p\u003e\u003cp\u003eA submission is done by including all recursively found files and filtering\n using a file filter given as an argument.\n This is followed by polling for a submission result until some final\n submission state has been reached (e.g. accepted).\n\u003c/p\u003e\u003cp\u003eCurrently multipart data upload is implemented since https-streams\n (the HTTP client being used) does not support it (yet?).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.Katt.Upload",
          "name": "Upload",
          "package": "katt",
          "source": "src/Utils-Katt-Upload.html",
          "type": "module"
        },
        "index": {
          "description": "Upload submodule providing submissions of solutions and parsing of results submission is done by including all recursively found files and filtering using file filter given as an argument This is followed by polling for submission result until some final submission state has been reached e.g accepted Currently multipart data upload is implemented since https-streams the HTTP client being used does not support it yet",
          "hierarchy": "Utils Katt Upload",
          "module": "Utils.Katt.Upload",
          "name": "Upload",
          "package": "katt",
          "partial": "Upload",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Upload.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a submission of the project in the working directory.\n   Accepts a list of filters on the form \u003cem\u003e+file1 -file2 ..\u003c/em\u003e, which are\n   taken into account when locating all the source files.\n   \u003cem\u003e+file\u003c/em\u003e implies adding the specified file.\n   \u003cem\u003e-file\u003c/em\u003e implies removing the specified file.\n\u003c/p\u003e\u003cp\u003eIn addition to the filters, all recursively found source code files\n   will be included in the submission.\n\u003c/p\u003e",
          "module": "Utils.Katt.Upload",
          "name": "makeSubmission",
          "package": "katt",
          "signature": "[String] -\u003e ConnEnv IO ()",
          "source": "src/Utils-Katt-Upload.html#makeSubmission",
          "type": "function"
        },
        "index": {
          "description": "Make submission of the project in the working directory Accepts list of filters on the form file1 file2 which are taken into account when locating all the source files file implies adding the specified file file implies removing the specified file In addition to the filters all recursively found source code files will be included in the submission",
          "hierarchy": "Utils Katt Upload",
          "module": "Utils.Katt.Upload",
          "name": "makeSubmission",
          "normalized": "[String]-\u003eConnEnv IO()",
          "package": "katt",
          "partial": "Submission",
          "signature": "[String]-\u003eConnEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Upload.html#v:makeSubmission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains shared type declarations and various utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.Katt.Utils",
          "name": "Utils",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Contains shared type declarations and various utility functions",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "Utils",
          "package": "katt",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication layer with token state and error handling,\n   wrapping the connection layer.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "AuthEnv",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#AuthEnv",
          "type": "type"
        },
        "index": {
          "description": "Authentication layer with token state and error handling wrapping the connection layer",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "AuthEnv",
          "package": "katt",
          "partial": "Auth Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:AuthEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration layer wrapped with error handling.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ConfigEnv",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ConfigEnv",
          "type": "type"
        },
        "index": {
          "description": "Configuration layer wrapped with error handling",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConfigEnv",
          "package": "katt",
          "partial": "Config Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration layer consisting of configuration state.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ConfigEnvInternal",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ConfigEnvInternal",
          "type": "type"
        },
        "index": {
          "description": "Configuration layer consisting of configuration state",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConfigEnvInternal",
          "package": "katt",
          "partial": "Config Env Internal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigEnvInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal configuration, initialized from the \u003cem\u003e.kattisrc\u003c/em\u003e file.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ConfigState",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "data"
        },
        "index": {
          "description": "Global configuration initialized from the kattisrc file",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConfigState",
          "package": "katt",
          "partial": "Config State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConfigState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection layer wrapped with error handling.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ConnEnv",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ConnEnv",
          "type": "type"
        },
        "index": {
          "description": "Connection layer wrapped with error handling",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConnEnv",
          "package": "katt",
          "partial": "Conn Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConnEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection layer with connection state layered on the configuration layer.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ConnEnvInternal",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ConnEnvInternal",
          "type": "type"
        },
        "index": {
          "description": "Connection layer with connection state layered on the configuration layer",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConnEnvInternal",
          "package": "katt",
          "partial": "Conn Env Internal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ConnEnvInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError description alias.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ErrorDesc",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ErrorDesc",
          "type": "type"
        },
        "index": {
          "description": "Error description alias",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ErrorDesc",
          "package": "katt",
          "partial": "Error Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ErrorDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage used in submission.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "KattisLanguage",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#KattisLanguage",
          "type": "data"
        },
        "index": {
          "description": "Language used in submission",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "KattisLanguage",
          "package": "katt",
          "partial": "Kattis Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:KattisLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Kattis problem.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "KattisProblem",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#KattisProblem",
          "type": "data"
        },
        "index": {
          "description": "Kattis problem",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "KattisProblem",
          "package": "katt",
          "partial": "Kattis Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:KattisProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProblem sessions are identified with an integer id.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ProblemSession",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ProblemSession",
          "type": "type"
        },
        "index": {
          "description": "Problem sessions are identified with an integer id",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ProblemSession",
          "package": "katt",
          "partial": "Problem Session",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ProblemSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject-specific state consists of the problem name.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ProjectState",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#ProjectState",
          "type": "type"
        },
        "index": {
          "description": "Project-specific state consists of the problem name",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ProjectState",
          "package": "katt",
          "partial": "Project State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:ProjectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmissions consist of a problem identifier and a set of file paths.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "Submission",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#Submission",
          "type": "type"
        },
        "index": {
          "description": "Submissions consist of problem identifier and set of file paths",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "Submission",
          "package": "katt",
          "partial": "Submission",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:Submission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmissions are identified with an integer id.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "SubmissionId",
          "package": "katt",
          "source": "src/Utils-Katt-Utils.html#SubmissionId",
          "type": "type"
        },
        "index": {
          "description": "Submissions are identified with an integer id",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "SubmissionId",
          "package": "katt",
          "partial": "Submission Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#t:SubmissionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.Katt.Utils",
          "name": "ConfigState",
          "package": "katt",
          "signature": "ConfigState",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ConfigState",
          "package": "katt",
          "partial": "Config State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ConfigState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "LangC",
          "package": "katt",
          "signature": "LangC",
          "source": "src/Utils-Katt-Utils.html#KattisLanguage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "LangC",
          "package": "katt",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC++.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "LangCplusplus",
          "package": "katt",
          "signature": "LangCplusplus",
          "source": "src/Utils-Katt-Utils.html#KattisLanguage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "LangCplusplus",
          "package": "katt",
          "partial": "Lang Cplusplus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangCplusplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJava.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "LangJava",
          "package": "katt",
          "signature": "LangJava",
          "source": "src/Utils-Katt-Utils.html#KattisLanguage",
          "type": "function"
        },
        "index": {
          "description": "Java",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "LangJava",
          "package": "katt",
          "partial": "Lang Java",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:LangJava"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProblem ID, unique.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ProblemId",
          "package": "katt",
          "signature": "ProblemId Integer",
          "source": "src/Utils-Katt-Utils.html#KattisProblem",
          "type": "function"
        },
        "index": {
          "description": "Problem ID unique",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ProblemId",
          "package": "katt",
          "partial": "Problem Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ProblemId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociated name of the problem.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "ProblemName",
          "package": "katt",
          "signature": "ProblemName ByteString",
          "source": "src/Utils-Katt-Utils.html#KattisProblem",
          "type": "function"
        },
        "index": {
          "description": "Associated name of the problem",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "ProblemName",
          "package": "katt",
          "partial": "Problem Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:ProblemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAPI token (hash).\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "apiKey",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "API token hash",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "apiKey",
          "package": "katt",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:apiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticate an existing connection, returns a temporary token.\n   Basically the API token is used to acquire a session-specific token.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "authenticate",
          "package": "katt",
          "signature": "ConnEnv IO ByteString",
          "source": "src/Utils-Katt-Utils.html#authenticate",
          "type": "function"
        },
        "index": {
          "description": "Authenticate an existing connection returns temporary token Basically the API token is used to acquire session-specific token",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "authenticate",
          "package": "katt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:authenticate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative path to project-specific configuration directory.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "configDir",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#configDir",
          "type": "function"
        },
        "index": {
          "description": "Relative path to project-specific configuration directory",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "configDir",
          "package": "katt",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:configDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault HTTP request.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "defaultRequest",
          "package": "katt",
          "signature": "RequestBuilder ()",
          "source": "src/Utils-Katt-Utils.html#defaultRequest",
          "type": "function"
        },
        "index": {
          "description": "Default HTTP request",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "defaultRequest",
          "normalized": "RequestBuilder()",
          "package": "katt",
          "partial": "Request",
          "signature": "RequestBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:defaultRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract correct temporary token from cookie header string.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "extractSessionHeader",
          "package": "katt",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Utils-Katt-Utils.html#extractSessionHeader",
          "type": "function"
        },
        "index": {
          "description": "Extract correct temporary token from cookie header string",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "extractSessionHeader",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "katt",
          "partial": "Session Header",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:extractSessionHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost to be considered as service.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "host",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "Host to be considered as service",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "host",
          "package": "katt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension of input test files.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "inputTestExtension",
          "package": "katt",
          "signature": "FilePath",
          "source": "src/Utils-Katt-Utils.html#inputTestExtension",
          "type": "function"
        },
        "index": {
          "description": "Extension of input test files",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "inputTestExtension",
          "package": "katt",
          "partial": "Test Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:inputTestExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to login page, relative \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "loginPage",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "URL to login page relative host",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "loginPage",
          "package": "katt",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:loginPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer response indicating successful login.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "loginSuccess",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#loginSuccess",
          "type": "function"
        },
        "index": {
          "description": "Server response indicating successful login",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "loginSuccess",
          "package": "katt",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:loginSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a HTTP request and retrieve the server response body.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "makeRequest",
          "package": "katt",
          "signature": "Request -\u003e ConnEnv IO ByteString",
          "source": "src/Utils-Katt-Utils.html#makeRequest",
          "type": "function"
        },
        "index": {
          "description": "Make HTTP request and retrieve the server response body",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "makeRequest",
          "normalized": "Request-\u003eConnEnv IO ByteString",
          "package": "katt",
          "partial": "Request",
          "signature": "Request-\u003eConnEnv IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:makeRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign an existing HTTP request with a temporary token.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "makeSignedRequest",
          "package": "katt",
          "signature": "RequestBuilder () -\u003e AuthEnv IO Request",
          "source": "src/Utils-Katt-Utils.html#makeSignedRequest",
          "type": "function"
        },
        "index": {
          "description": "Sign an existing HTTP request with temporary token",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "makeSignedRequest",
          "normalized": "RequestBuilder()-\u003eAuthEnv IO Request",
          "package": "katt",
          "partial": "Signed Request",
          "signature": "RequestBuilder()-\u003eAuthEnv IO Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:makeSignedRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension of reference ouput test files.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "outputTestExtension",
          "package": "katt",
          "signature": "FilePath",
          "source": "src/Utils-Katt-Utils.html#outputTestExtension",
          "type": "function"
        },
        "index": {
          "description": "Extension of reference ouput test files",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "outputTestExtension",
          "package": "katt",
          "partial": "Test Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:outputTestExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to page with problem information, relative to \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "problemAddress",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#problemAddress",
          "type": "function"
        },
        "index": {
          "description": "URL to page with problem information relative to host",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "problemAddress",
          "package": "katt",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:problemAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of this program.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "programName",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#programName",
          "type": "function"
        },
        "index": {
          "description": "Name of this program",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "programName",
          "package": "katt",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:programName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject-specific state, optionally loaded.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "project",
          "package": "katt",
          "signature": "Maybe ProjectState",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "Project-specific state optionally loaded",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "project",
          "package": "katt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReestablish an existing connection.\n   Useful in order to avoid timeouts related to keep-alive.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "reestablishConnection",
          "package": "katt",
          "signature": "ConnEnv IO ()",
          "source": "src/Utils-Katt-Utils.html#reestablishConnection",
          "type": "function"
        },
        "index": {
          "description": "Reestablish an existing connection Useful in order to avoid timeouts related to keep-alive",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "reestablishConnection",
          "normalized": "ConnEnv IO()",
          "package": "katt",
          "partial": "Connection",
          "signature": "ConnEnv IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:reestablishConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a page requiring authentication, using HTTP GET.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "retrievePrivatePage",
          "package": "katt",
          "signature": "ByteString -\u003e AuthEnv IO ByteString",
          "source": "src/Utils-Katt-Utils.html#retrievePrivatePage",
          "type": "function"
        },
        "index": {
          "description": "Retrieve page requiring authentication using HTTP GET",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "retrievePrivatePage",
          "normalized": "ByteString-\u003eAuthEnv IO ByteString",
          "package": "katt",
          "partial": "Private Page",
          "signature": "ByteString-\u003eAuthEnv IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrievePrivatePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve problem ID of a Kattis problem.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "retrieveProblemId",
          "package": "katt",
          "signature": "KattisProblem -\u003e ConnEnv IO Integer",
          "source": "src/Utils-Katt-Utils.html#retrieveProblemId",
          "type": "function"
        },
        "index": {
          "description": "Retrieve problem ID of Kattis problem",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "retrieveProblemId",
          "normalized": "KattisProblem-\u003eConnEnv IO Integer",
          "package": "katt",
          "partial": "Problem Id",
          "signature": "KattisProblem-\u003eConnEnv IO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrieveProblemId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve problem name of a Kattis problem.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "retrieveProblemName",
          "package": "katt",
          "signature": "KattisProblem -\u003e ConnEnv IO ByteString",
          "source": "src/Utils-Katt-Utils.html#retrieveProblemName",
          "type": "function"
        },
        "index": {
          "description": "Retrieve problem name of Kattis problem",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "retrieveProblemName",
          "normalized": "KattisProblem-\u003eConnEnv IO ByteString",
          "package": "katt",
          "partial": "Problem Name",
          "signature": "KattisProblem-\u003eConnEnv IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrieveProblemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a publically available page, using HTTP GET.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "retrievePublicPage",
          "package": "katt",
          "signature": "ByteString -\u003e ConnEnv IO ByteString",
          "source": "src/Utils-Katt-Utils.html#retrievePublicPage",
          "type": "function"
        },
        "index": {
          "description": "Retrieve publically available page using HTTP GET",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "retrievePublicPage",
          "normalized": "ByteString-\u003eConnEnv IO ByteString",
          "package": "katt",
          "partial": "Public Page",
          "signature": "ByteString-\u003eConnEnv IO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:retrievePublicPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL to submit page, relative \u003ccode\u003e\u003ca\u003ehost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "submitPage",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "URL to submit page relative host",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "submitPage",
          "package": "katt",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:submitPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an error action and terminate process upon failure.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "terminateOnFailure",
          "package": "katt",
          "signature": "ErrorDesc -\u003e EitherT ErrorDesc m a -\u003e m a",
          "source": "src/Utils-Katt-Utils.html#terminateOnFailure",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an error action and terminate process upon failure",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "terminateOnFailure",
          "normalized": "ErrorDesc-\u003eEitherT ErrorDesc a b-\u003ea b",
          "package": "katt",
          "partial": "On Failure",
          "signature": "ErrorDesc-\u003eEitherT ErrorDesc m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:terminateOnFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative path to folder containing tests.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "testFolder",
          "package": "katt",
          "signature": "FilePath",
          "source": "src/Utils-Katt-Utils.html#testFolder",
          "type": "function"
        },
        "index": {
          "description": "Relative path to folder containing tests",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "testFolder",
          "package": "katt",
          "partial": "Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:testFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action and catch any exceptions.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "tryIO",
          "package": "katt",
          "signature": "IO a -\u003e EitherT ErrorDesc m a",
          "source": "src/Utils-Katt-Utils.html#tryIO",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action and catch any exceptions",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "tryIO",
          "normalized": "IO a-\u003eEitherT ErrorDesc b a",
          "package": "katt",
          "partial": "IO",
          "signature": "IO a-\u003eEitherT ErrorDesc m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:tryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action and catch any exceptions, tagged with description.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "tryIOMsg",
          "package": "katt",
          "signature": "ByteString -\u003e IO a -\u003e EitherT ErrorDesc m a",
          "source": "src/Utils-Katt-Utils.html#tryIOMsg",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action and catch any exceptions tagged with description",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "tryIOMsg",
          "normalized": "ByteString-\u003eIO a-\u003eEitherT ErrorDesc b a",
          "package": "katt",
          "partial": "IOMsg",
          "signature": "ByteString-\u003eIO a-\u003eEitherT ErrorDesc m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:tryIOMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift some error monad one layer.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "unWrapTrans",
          "package": "katt",
          "signature": "EitherT e m a -\u003e EitherT e (t m) a",
          "source": "src/Utils-Katt-Utils.html#unWrapTrans",
          "type": "function"
        },
        "index": {
          "description": "Lift some error monad one layer",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "unWrapTrans",
          "normalized": "EitherT a b c-\u003eEitherT a(d b)c",
          "package": "katt",
          "partial": "Wrap Trans",
          "signature": "EitherT e m a-\u003eEitherT e(t m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:unWrapTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsername.\n\u003c/p\u003e",
          "module": "Utils.Katt.Utils",
          "name": "user",
          "package": "katt",
          "signature": "ByteString",
          "source": "src/Utils-Katt-Utils.html#ConfigState",
          "type": "function"
        },
        "index": {
          "description": "Username",
          "hierarchy": "Utils Katt Utils",
          "module": "Utils.Katt.Utils",
          "name": "user",
          "package": "katt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/katt/docs/Utils-Katt-Utils.html#v:user"
      }
    }
  ]
]