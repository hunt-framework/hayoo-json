[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "module",
        "fct-source": "src/UI-Command.html",
        "fct-type": "module",
        "title": "Command"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "Command",
        "normalized": "",
        "package": "ui-command",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:App",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "type",
        "fct-source": "src/UI-Command-App.html#App",
        "fct-type": "type",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "App",
        "normalized": "",
        "package": "ui-command",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:Application",
      "description": {
        "fct-descr": "\u003cp\u003eIt is often simpler to use the default implementation of Application, and\n override it with the details you choose to use.\n For example, an implementation of the ''hello'' command:\n\u003c/p\u003e\u003cpre\u003e hello = def {\n         appName = \"hello\",\n         appVersion = \"0.1\",\n         appAuthors = [\"Joe R. Hacker\"],\n         appBugEmail = \"bugs@example.com\",\n         appShortDesc = \"UI.Command example program\",\n         appLongDesc = longDesc,\n         appCategories = [\"Greetings\", \"Cat Math\"],\n         appSeeAlso = [\"tractorgen\"],\n         appProject = \"Haskell\",\n         appCmds = [world, times]\n }\n \n longDesc = \"a demonstration program for the UI.Command framework.\"\n\u003c/pre\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "data",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "data",
        "title": "Application"
      },
      "index": {
        "description": "It is often simpler to use the default implementation of Application and override it with the details you choose to use For example an implementation of the hello command hello def appName hello appVersion appAuthors Joe Hacker appBugEmail bugs@example.com appShortDesc UI.Command example program appLongDesc longDesc appCategories Greetings Cat Math appSeeAlso tractorgen appProject Haskell appCmds world times longDesc demonstration program for the UI.Command framework",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "Application",
        "normalized": "",
        "package": "ui-command",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003eIt is often simpler to use the default implementation of Command, and\n override it with the details you choose to use.\n For example, an implementation of the ''hello world'' command:\n\u003c/p\u003e\u003cpre\u003e world = def {\n         cmdName = \"world\",\n         cmdHandler = worldHandler,\n         cmdCategory = \"Greetings\",\n         cmdShortDesc = \"An implementation of the standard software greeting.\"\n }\n\n worldHandler = liftIO $ putStrLn \"Hello world!\"\n\u003c/pre\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "data",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "data",
        "title": "Command"
      },
      "index": {
        "description": "It is often simpler to use the default implementation of Command and override it with the details you choose to use For example an implementation of the hello world command world def cmdName world cmdHandler worldHandler cmdCategory Greetings cmdShortDesc An implementation of the standard software greeting worldHandler liftIO putStrLn Hello world",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "Command",
        "normalized": "",
        "package": "ui-command",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:Application",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "Application",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "Application"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "Application",
        "normalized": "",
        "package": "ui-command",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:Command",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "Command",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "Command"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "Command",
        "normalized": "",
        "package": "ui-command",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appArgs",
      "description": {
        "fct-descr": "\u003cp\u003eGet the application arguments\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "App config [String]",
        "fct-source": "src/UI-Command-App.html#appArgs",
        "fct-type": "function",
        "title": "appArgs"
      },
      "index": {
        "description": "Get the application arguments",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appArgs",
        "normalized": "App a[String]",
        "package": "ui-command",
        "partial": "Args",
        "signature": "App config[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appAuthors",
      "description": {
        "fct-descr": "\u003cp\u003eNames of authors\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[String]",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appAuthors"
      },
      "index": {
        "description": "Names of authors",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appAuthors",
        "normalized": "[String]",
        "package": "ui-command",
        "partial": "Authors",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appBugEmail",
      "description": {
        "fct-descr": "\u003cp\u003eEmail address to report bugs to\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appBugEmail"
      },
      "index": {
        "description": "Email address to report bugs to",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appBugEmail",
        "normalized": "",
        "package": "ui-command",
        "partial": "Bug Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appCategories",
      "description": {
        "fct-descr": "\u003cp\u003eCategories to show in help text, in order of appearance\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[String]",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appCategories"
      },
      "index": {
        "description": "Categories to show in help text in order of appearance",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appCategories",
        "normalized": "[String]",
        "package": "ui-command",
        "partial": "Categories",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appCmds",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual commands\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[Command config]",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appCmds"
      },
      "index": {
        "description": "The actual commands",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appCmds",
        "normalized": "[Command a]",
        "package": "ui-command",
        "partial": "Cmds",
        "signature": "[Command config]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGet the application config\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "App config config",
        "fct-source": "src/UI-Command-App.html#appConfig",
        "fct-type": "function",
        "title": "appConfig"
      },
      "index": {
        "description": "Get the application config",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appConfig",
        "normalized": "",
        "package": "ui-command",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appLongDesc",
      "description": {
        "fct-descr": "\u003cp\u003eLong description of the command\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appLongDesc"
      },
      "index": {
        "description": "Long description of the command",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appLongDesc",
        "normalized": "",
        "package": "ui-command",
        "partial": "Long Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appMain",
      "description": {
        "fct-descr": "\u003cp\u003eMain wrapper\n\u003c/p\u003e\u003cpre\u003e main = appMain hello\n\u003c/pre\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "Application () () -\u003e IO ()",
        "fct-source": "src/UI-Command-Main.html#appMain",
        "fct-type": "function",
        "title": "appMain"
      },
      "index": {
        "description": "Main wrapper main appMain hello",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appMain",
        "normalized": "Application()()-\u003eIO()",
        "package": "ui-command",
        "partial": "Main",
        "signature": "Application()()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appMainWithOptions",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "Application opts config -\u003e IO ()",
        "fct-source": "src/UI-Command-Main.html#appMainWithOptions",
        "fct-type": "function",
        "title": "appMainWithOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appMainWithOptions",
        "normalized": "Application a b-\u003eIO()",
        "package": "ui-command",
        "partial": "Main With Options",
        "signature": "Application opts config-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the program\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appName"
      },
      "index": {
        "description": "Name of the program",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appName",
        "normalized": "",
        "package": "ui-command",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appOptions",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of all options accepted by the application's commands.\n Note that options '-h', \u003ccode\u003e-?\u003c/code\u003e, '--help', '-V', '--version' will\n be automatically added and handled by UI.Command\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[OptDescr opts]",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appOptions"
      },
      "index": {
        "description": "Union of all options accepted by the application commands Note that options help version will be automatically added and handled by UI.Command",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appOptions",
        "normalized": "[OptDescr a]",
        "package": "ui-command",
        "partial": "Options",
        "signature": "[OptDescr opts]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appProcessConfig",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to process options\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "config -\u003e [opts] -\u003e IO config",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appProcessConfig"
      },
      "index": {
        "description": "Function to process options",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appProcessConfig",
        "normalized": "a-\u003e[b]-\u003eIO a",
        "package": "ui-command",
        "partial": "Process Config",
        "signature": "config-\u003e[opts]-\u003eIO config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appProject",
      "description": {
        "fct-descr": "\u003cp\u003eProject that this command is part of\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appProject"
      },
      "index": {
        "description": "Project that this command is part of",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appProject",
        "normalized": "",
        "package": "ui-command",
        "partial": "Project",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appSeeAlso",
      "description": {
        "fct-descr": "\u003cp\u003eRelated commands\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[String]",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appSeeAlso"
      },
      "index": {
        "description": "Related commands",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appSeeAlso",
        "normalized": "[String]",
        "package": "ui-command",
        "partial": "See Also",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appShortDesc",
      "description": {
        "fct-descr": "\u003cp\u003eOne-line description of the command\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appShortDesc"
      },
      "index": {
        "description": "One-line description of the command",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appShortDesc",
        "normalized": "",
        "package": "ui-command",
        "partial": "Short Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appVersion",
      "description": {
        "fct-descr": "\u003cp\u003eSoftware version\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Application.html#Application",
        "fct-type": "function",
        "title": "appVersion"
      },
      "index": {
        "description": "Software version",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "appVersion",
        "normalized": "",
        "package": "ui-command",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdCategory",
      "description": {
        "fct-descr": "\u003cp\u003eCategory in this program's documentation\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdCategory"
      },
      "index": {
        "description": "Category in this program documentation",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdCategory",
        "normalized": "",
        "package": "ui-command",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdExamples",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003e(example description, args)\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdExamples"
      },
      "index": {
        "description": "example description args",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdExamples",
        "normalized": "[(String,String)]",
        "package": "ui-command",
        "partial": "Examples",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdHandler",
      "description": {
        "fct-descr": "\u003cp\u003eHandler\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "App config ()",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdHandler"
      },
      "index": {
        "description": "Handler",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdHandler",
        "normalized": "App a()",
        "package": "ui-command",
        "partial": "Handler",
        "signature": "App config()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cmdcommand\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdName"
      },
      "index": {
        "description": "Name of the cmdcommand",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdName",
        "normalized": "",
        "package": "ui-command",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdShortDesc",
      "description": {
        "fct-descr": "\u003cp\u003eShort description\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdShortDesc"
      },
      "index": {
        "description": "Short description",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdShortDesc",
        "normalized": "",
        "package": "ui-command",
        "partial": "Short Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdSynopsis",
      "description": {
        "fct-descr": "\u003cp\u003eSynopsis\n\u003c/p\u003e",
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "String",
        "fct-source": "src/UI-Command-Command.html#Command",
        "fct-type": "function",
        "title": "cmdSynopsis"
      },
      "index": {
        "description": "Synopsis",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "cmdSynopsis",
        "normalized": "",
        "package": "ui-command",
        "partial": "Synopsis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:defCmd",
      "description": {
        "fct-module": "UI.Command",
        "fct-package": "ui-command",
        "fct-signature": "Command ()",
        "fct-source": "src/UI-Command-Command.html#defCmd",
        "fct-type": "function",
        "title": "defCmd"
      },
      "index": {
        "description": "",
        "hierarchy": "UI Command",
        "module": "UI.Command",
        "name": "defCmd",
        "normalized": "Command()",
        "package": "ui-command",
        "partial": "Cmd",
        "signature": "Command()"
      }
    }
  }
]