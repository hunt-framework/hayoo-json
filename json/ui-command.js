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
        "word": "ui-command"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "source": "src/UI-Command.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "App",
          "package": "ui-command",
          "source": "src/UI-Command-App.html#App",
          "type": "type"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "App",
          "package": "ui-command",
          "partial": "App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is often simpler to use the default implementation of Application, and\n override it with the details you choose to use.\n For example, an implementation of the ''hello'' command:\n\u003c/p\u003e\u003cpre\u003e hello = def {\n         appName = \"hello\",\n         appVersion = \"0.1\",\n         appAuthors = [\"Joe R. Hacker\"],\n         appBugEmail = \"bugs@example.com\",\n         appShortDesc = \"UI.Command example program\",\n         appLongDesc = longDesc,\n         appCategories = [\"Greetings\", \"Cat Math\"],\n         appSeeAlso = [\"tractorgen\"],\n         appProject = \"Haskell\",\n         appCmds = [world, times]\n }\n \n longDesc = \"a demonstration program for the UI.Command framework.\"\n\u003c/pre\u003e",
          "module": "UI.Command",
          "name": "Application",
          "package": "ui-command",
          "source": "src/UI-Command-Application.html#Application",
          "type": "data"
        },
        "index": {
          "description": "It is often simpler to use the default implementation of Application and override it with the details you choose to use For example an implementation of the hello command hello def appName hello appVersion appAuthors Joe Hacker appBugEmail bugs@example.com appShortDesc UI.Command example program appLongDesc longDesc appCategories Greetings Cat Math appSeeAlso tractorgen appProject Haskell appCmds world times longDesc demonstration program for the UI.Command framework",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "Application",
          "package": "ui-command",
          "partial": "Application",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is often simpler to use the default implementation of Command, and\n override it with the details you choose to use.\n For example, an implementation of the ''hello world'' command:\n\u003c/p\u003e\u003cpre\u003e world = def {\n         cmdName = \"world\",\n         cmdHandler = worldHandler,\n         cmdCategory = \"Greetings\",\n         cmdShortDesc = \"An implementation of the standard software greeting.\"\n }\n\n worldHandler = liftIO $ putStrLn \"Hello world!\"\n\u003c/pre\u003e",
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "source": "src/UI-Command-Command.html#Command",
          "type": "data"
        },
        "index": {
          "description": "It is often simpler to use the default implementation of Command and override it with the details you choose to use For example an implementation of the hello world command world def cmdName world cmdHandler worldHandler cmdCategory Greetings cmdShortDesc An implementation of the standard software greeting worldHandler liftIO putStrLn Hello world",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "Application",
          "package": "ui-command",
          "signature": "Application",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "Application",
          "package": "ui-command",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "signature": "Command",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "Command",
          "package": "ui-command",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the application arguments\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appArgs",
          "package": "ui-command",
          "signature": "App config [String]",
          "source": "src/UI-Command-App.html#appArgs",
          "type": "function"
        },
        "index": {
          "description": "Get the application arguments",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appArgs",
          "normalized": "App a[String]",
          "package": "ui-command",
          "partial": "Args",
          "signature": "App config[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of authors\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appAuthors",
          "package": "ui-command",
          "signature": "[String]",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Names of authors",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appAuthors",
          "normalized": "[String]",
          "package": "ui-command",
          "partial": "Authors",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appAuthors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail address to report bugs to\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appBugEmail",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Email address to report bugs to",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appBugEmail",
          "package": "ui-command",
          "partial": "Bug Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appBugEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategories to show in help text, in order of appearance\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appCategories",
          "package": "ui-command",
          "signature": "[String]",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Categories to show in help text in order of appearance",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appCategories",
          "normalized": "[String]",
          "package": "ui-command",
          "partial": "Categories",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual commands\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appCmds",
          "package": "ui-command",
          "signature": "[Command config]",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "The actual commands",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appCmds",
          "normalized": "[Command a]",
          "package": "ui-command",
          "partial": "Cmds",
          "signature": "[Command config]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appCmds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the application config\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appConfig",
          "package": "ui-command",
          "signature": "App config config",
          "source": "src/UI-Command-App.html#appConfig",
          "type": "function"
        },
        "index": {
          "description": "Get the application config",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appConfig",
          "package": "ui-command",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong description of the command\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appLongDesc",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Long description of the command",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appLongDesc",
          "package": "ui-command",
          "partial": "Long Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appLongDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain wrapper\n\u003c/p\u003e\u003cpre\u003e main = appMain hello\n\u003c/pre\u003e",
          "module": "UI.Command",
          "name": "appMain",
          "package": "ui-command",
          "signature": "Application () () -\u003e IO ()",
          "source": "src/UI-Command-Main.html#appMain",
          "type": "function"
        },
        "index": {
          "description": "Main wrapper main appMain hello",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appMain",
          "normalized": "Application()()-\u003eIO()",
          "package": "ui-command",
          "partial": "Main",
          "signature": "Application()()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "appMainWithOptions",
          "package": "ui-command",
          "signature": "Application opts config -\u003e IO ()",
          "source": "src/UI-Command-Main.html#appMainWithOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appMainWithOptions",
          "normalized": "Application a b-\u003eIO()",
          "package": "ui-command",
          "partial": "Main With Options",
          "signature": "Application opts config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appMainWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the program\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appName",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Name of the program",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appName",
          "package": "ui-command",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of all options accepted by the application's commands.\n Note that options '-h', \u003ccode\u003e-?\u003c/code\u003e, '--help', '-V', '--version' will\n be automatically added and handled by UI.Command\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appOptions",
          "package": "ui-command",
          "signature": "[OptDescr opts]",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Union of all options accepted by the application commands Note that options help version will be automatically added and handled by UI.Command",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appOptions",
          "normalized": "[OptDescr a]",
          "package": "ui-command",
          "partial": "Options",
          "signature": "[OptDescr opts]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to process options\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appProcessConfig",
          "package": "ui-command",
          "signature": "config -\u003e [opts] -\u003e IO config",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Function to process options",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appProcessConfig",
          "normalized": "a-\u003e[b]-\u003eIO a",
          "package": "ui-command",
          "partial": "Process Config",
          "signature": "config-\u003e[opts]-\u003eIO config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appProcessConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProject that this command is part of\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appProject",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Project that this command is part of",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appProject",
          "package": "ui-command",
          "partial": "Project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelated commands\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appSeeAlso",
          "package": "ui-command",
          "signature": "[String]",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Related commands",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appSeeAlso",
          "normalized": "[String]",
          "package": "ui-command",
          "partial": "See Also",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appSeeAlso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-line description of the command\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appShortDesc",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "One-line description of the command",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appShortDesc",
          "package": "ui-command",
          "partial": "Short Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appShortDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSoftware version\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "appVersion",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Application.html#Application",
          "type": "function"
        },
        "index": {
          "description": "Software version",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "appVersion",
          "package": "ui-command",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:appVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategory in this program's documentation\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "cmdCategory",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Category in this program documentation",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdCategory",
          "package": "ui-command",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e(example description, args)\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "UI.Command",
          "name": "cmdExamples",
          "package": "ui-command",
          "signature": "[(String, String)]",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "example description args",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdExamples",
          "normalized": "[(String,String)]",
          "package": "ui-command",
          "partial": "Examples",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdExamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "cmdHandler",
          "package": "ui-command",
          "signature": "App config ()",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Handler",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdHandler",
          "normalized": "App a()",
          "package": "ui-command",
          "partial": "Handler",
          "signature": "App config()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the cmdcommand\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "cmdName",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Name of the cmdcommand",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdName",
          "package": "ui-command",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort description\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "cmdShortDesc",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Short description",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdShortDesc",
          "package": "ui-command",
          "partial": "Short Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdShortDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynopsis\n\u003c/p\u003e",
          "module": "UI.Command",
          "name": "cmdSynopsis",
          "package": "ui-command",
          "signature": "String",
          "source": "src/UI-Command-Command.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Synopsis",
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "cmdSynopsis",
          "package": "ui-command",
          "partial": "Synopsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:cmdSynopsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UI.Command",
          "name": "defCmd",
          "package": "ui-command",
          "signature": "Command ()",
          "source": "src/UI-Command-Command.html#defCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UI Command",
          "module": "UI.Command",
          "name": "defCmd",
          "normalized": "Command()",
          "package": "ui-command",
          "partial": "Cmd",
          "signature": "Command()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ui-command/docs/UI-Command.html#v:defCmd"
      }
    }
  ]
]