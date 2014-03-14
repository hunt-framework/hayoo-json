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
        "word": "console-program"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions to create option descriptions, together\n with their argument types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Argument",
          "name": "Argument",
          "package": "console-program",
          "source": "src/System-Console-Argument.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions to create option descriptions together with their argument types",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "Argument",
          "package": "console-program",
          "partial": "Argument",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eOption a\u003c/code\u003e describes an option, that delivers a value\n to the program of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "Option",
          "package": "console-program",
          "source": "src/System-Console-Internal.html#Option",
          "type": "data"
        },
        "index": {
          "description": "value of type Option describes an option that delivers value to the program of type",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "Option",
          "package": "console-program",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eType a\u003c/code\u003e represents the type of an option or argument.\n\u003c/p\u003e\u003cp\u003eFurther below you can find some common types of option arguments.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "Type",
          "package": "console-program",
          "source": "src/System-Console-Argument.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Type represents the type of an option or argument Further below you can find some common types of option arguments",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "Type",
          "package": "console-program",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Argument",
          "name": "Type",
          "package": "console-program",
          "signature": "Type",
          "source": "src/System-Console-Argument.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "Type",
          "package": "console-program",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boolean. Argument can be \"1\",\"0\",\"true\",\"false\",\"on\",\"off\",\"yes\",\"no\".\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "boolean",
          "package": "console-program",
          "signature": "Type Bool",
          "source": "src/System-Console-Argument.html#boolean",
          "type": "function"
        },
        "index": {
          "description": "boolean Argument can be true false on off yes no",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "boolean",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value, when the option occurs without option argument.\n \u003ccode\u003eNothing\u003c/code\u003e means that an argument is required for this type of option.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "defaultValue",
          "package": "console-program",
          "signature": "Maybe a",
          "source": "src/System-Console-Argument.html#Type",
          "type": "function"
        },
        "index": {
          "description": "The default value when the option occurs without option argument Nothing means that an argument is required for this type of option",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "defaultValue",
          "package": "console-program",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:defaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA device path.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "device",
          "package": "console-program",
          "signature": "Type FilePath",
          "source": "src/System-Console-Argument.html#device",
          "type": "function"
        },
        "index": {
          "description": "device path",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "device",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directory path. A trailing slash is stripped, if present.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "directory",
          "package": "console-program",
          "signature": "Type FilePath",
          "source": "src/System-Console-Argument.html#directory",
          "type": "function"
        },
        "index": {
          "description": "directory path trailing slash is stripped if present",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "directory",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file path.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "file",
          "package": "console-program",
          "signature": "Type FilePath",
          "source": "src/System-Console-Argument.html#file",
          "type": "function"
        },
        "index": {
          "description": "file path",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "file",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer number (in decimal).\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "integer",
          "package": "console-program",
          "signature": "Type Integer",
          "source": "src/System-Console-Argument.html#integer",
          "type": "function"
        },
        "index": {
          "description": "An integer number in decimal",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "integer",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for this type of option argument (for usage info).\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "name",
          "package": "console-program",
          "signature": "String",
          "source": "src/System-Console-Argument.html#Type",
          "type": "function"
        },
        "index": {
          "description": "name for this type of option argument for usage info",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "name",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA natural number (in decimal).\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "natural",
          "package": "console-program",
          "signature": "Type Integer",
          "source": "src/System-Console-Argument.html#natural",
          "type": "function"
        },
        "index": {
          "description": "natural number in decimal",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "natural",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an option description.\n\u003c/p\u003e\u003cp\u003eOptions can have arguments, as in \u003ccode\u003emyprogram --foo=bar\u003c/code\u003e, where \u003ccode\u003ebar\u003c/code\u003e\n is the argument to \u003ccode\u003efoo\u003c/code\u003e. These arguments have types, dictated by the\n particular option; this type is the third parameter to \u003ccode\u003eoption\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "option",
          "package": "console-program",
          "signature": "[Char]-\u003e [String]-\u003e Type a-\u003e a-\u003e String-\u003e Option a",
          "type": "function"
        },
        "index": {
          "description": "Create an option description Options can have arguments as in myprogram foo bar where bar is the argument to foo These arguments have types dictated by the particular option this type is the third parameter to option",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "option",
          "normalized": "[Char]-\u003e[String]-\u003eType a-\u003ea-\u003eString-\u003eOption a",
          "package": "console-program",
          "signature": "[Char]-\u003e[String]-\u003eType a-\u003ea-\u003eString-\u003eOption a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Argument",
          "name": "optional",
          "package": "console-program",
          "signature": "a-\u003e Type a-\u003e Type a",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "optional",
          "normalized": "a-\u003eType a-\u003eType a",
          "package": "console-program",
          "signature": "a-\u003eType a-\u003eType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the option argument into a value (\u003ccode\u003eRight\u003c/code\u003e) or signal a parsing\n error (\u003ccode\u003eLeft\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "parser",
          "package": "console-program",
          "signature": "String -\u003e Either String a",
          "source": "src/System-Console-Argument.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Parse the option argument into value Right or signal parsing error Left",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "parser",
          "normalized": "String-\u003eEither String a",
          "package": "console-program",
          "signature": "String-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plain string.\n\u003c/p\u003e",
          "module": "System.Console.Argument",
          "name": "string",
          "package": "console-program",
          "signature": "Type String",
          "source": "src/System-Console-Argument.html#string",
          "type": "function"
        },
        "index": {
          "description": "plain string",
          "hierarchy": "System Console Argument",
          "module": "System.Console.Argument",
          "name": "string",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Argument.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCommand\u003c/a\u003e\u003c/code\u003e provides a mode of operation of your program.\n This allows a single program to provide many different pieces of\n functionality. The first argument to the program (or the first few, if it\n has subcommands) determines which command should be executed.\n (\u003ccode\u003edarcs\u003c/code\u003e and \u003ccode\u003ecabal\u003c/code\u003e are examples of programs with this behaviour.)\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e represents an IO action, together with information about\n applicable options and non-option arguments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "source": "src/System-Console-Command.html",
          "type": "module"
        },
        "index": {
          "description": "Command provides mode of operation of your program This allows single program to provide many different pieces of functionality The first argument to the program or the first few if it has subcommands determines which command should be executed darcs and cabal are examples of programs with this behaviour An Action represents an IO action together with information about applicable options and non-option arguments",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eAction\u003c/code\u003e is an \u003ccode\u003eIO\u003c/code\u003e action, which may take arguments\n (\"non-options\") and options from the command line.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "Action",
          "package": "console-program",
          "source": "src/System-Console-Internal.html#Action",
          "type": "data"
        },
        "index": {
          "description": "An Action is an IO action which may take arguments non-options and options from the command line",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Action",
          "package": "console-program",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eCommand\u003c/code\u003e is an action, together with some descriptive information.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "source": "src/System-Console-Internal.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Command is an action together with some descriptive information",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCommands s\u003c/code\u003e is a tree of commands. It represents the whole set of\n possible commands of a program.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "Commands",
          "package": "console-program",
          "source": "src/System-Console-Command.html#Commands",
          "type": "type"
        },
        "index": {
          "description": "Commands is tree of commands It represents the whole set of possible commands of program",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Commands",
          "package": "console-program",
          "partial": "Commands",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#t:Commands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-way trees, also known as \u003cem\u003erose trees\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "Tree",
          "package": "console-program",
          "type": "data"
        },
        "index": {
          "description": "Multi-way trees also known as rose trees",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Tree",
          "package": "console-program",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "signature": "Command",
          "source": "src/System-Console-Internal.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Command",
          "package": "console-program",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Command",
          "name": "Node",
          "package": "console-program",
          "signature": "Node a (Forest a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "Node",
          "package": "console-program",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual action performed by this command.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "action",
          "package": "console-program",
          "signature": "Action",
          "source": "src/System-Console-Internal.html#Command",
          "type": "function"
        },
        "index": {
          "description": "The actual action performed by this command",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "action",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor usage info.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "description",
          "package": "console-program",
          "signature": "String",
          "source": "src/System-Console-Internal.html#Command",
          "type": "function"
        },
        "index": {
          "description": "For usage info",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "description",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an action that allows, but ignores, the given option.\n\u003c/p\u003e\u003cp\u003eThis is especially useful if this option is given in the configuration\n file, but is meant for other commands; then this action will not give an\n error message about an unrecognised option.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "ignoreOption",
          "package": "console-program",
          "signature": "Option a -\u003e Action -\u003e Action",
          "source": "src/System-Console-Command.html#ignoreOption",
          "type": "function"
        },
        "index": {
          "description": "Create an action that allows but ignores the given option This is especially useful if this option is given in the configuration file but is meant for other commands then this action will not give an error message about an unrecognised option",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "ignoreOption",
          "normalized": "Option a-\u003eAction-\u003eAction",
          "package": "console-program",
          "partial": "Option",
          "signature": "Option a-\u003eAction-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:ignoreOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple action, taking no argument, and having no options.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "io",
          "package": "console-program",
          "signature": "IO () -\u003e Action",
          "source": "src/System-Console-Command.html#io",
          "type": "function"
        },
        "index": {
          "description": "simple action taking no argument and having no options",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "io",
          "normalized": "IO()-\u003eAction",
          "package": "console-program",
          "signature": "IO()-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis determines which command is executed.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "name",
          "package": "console-program",
          "signature": "String",
          "source": "src/System-Console-Internal.html#Command",
          "type": "function"
        },
        "index": {
          "description": "This determines which command is executed",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "name",
          "package": "console-program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an action that takes an argument (non-option).\n\u003c/p\u003e\u003cp\u003eThe type of argument is specified by the first parameter; such values can\n be obtained from the module \u003ca\u003eSystem.Console.Argument\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "withNonOption",
          "package": "console-program",
          "signature": "Type x -\u003e (x -\u003e Action) -\u003e Action",
          "source": "src/System-Console-Command.html#withNonOption",
          "type": "function"
        },
        "index": {
          "description": "Create an action that takes an argument non-option The type of argument is specified by the first parameter such values can be obtained from the module System.Console.Argument",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "withNonOption",
          "normalized": "Type a-\u003e(a-\u003eAction)-\u003eAction",
          "package": "console-program",
          "partial": "Non Option",
          "signature": "Type x-\u003e(x-\u003eAction)-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:withNonOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an action that takes an option.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a description of the option; such a value can be\n constructed using \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Command",
          "name": "withOption",
          "package": "console-program",
          "signature": "Option a -\u003e (a -\u003e Action) -\u003e Action",
          "source": "src/System-Console-Command.html#withOption",
          "type": "function"
        },
        "index": {
          "description": "Create an action that takes an option The first parameter is description of the option such value can be constructed using option",
          "hierarchy": "System Console Command",
          "module": "System.Console.Command",
          "name": "withOption",
          "normalized": "Option a-\u003e(a-\u003eAction)-\u003eAction",
          "package": "console-program",
          "partial": "Option",
          "signature": "Option a-\u003e(a-\u003eAction)-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Command.html#v:withOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions to build a console program, that parses\n the command line (and a configuration file), divides it into commands,\n options and non-options, and executes the corresponding action from a tree\n of available commands.\n\u003c/p\u003e\u003cp\u003eThese commands can be constructed using the module \u003ca\u003eSystem.Console.Command\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Program",
          "name": "Program",
          "package": "console-program",
          "source": "src/System-Console-Program.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions to build console program that parses the command line and configuration file divides it into commands options and non-options and executes the corresponding action from tree of available commands These commands can be constructed using the module System.Console.Command",
          "hierarchy": "System Console Program",
          "module": "System.Console.Program",
          "name": "Program",
          "package": "console-program",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an interactive session. Arguments to the program are ignored;\n instead, the user may repeatedly enter a command, possibly with options,\n which will be executed.\n\u003c/p\u003e",
          "module": "System.Console.Program",
          "name": "interactive",
          "package": "console-program",
          "signature": "Commands -\u003e IO ()",
          "source": "src/System-Console-Program.html#interactive",
          "type": "function"
        },
        "index": {
          "description": "Start an interactive session Arguments to the program are ignored instead the user may repeatedly enter command possibly with options which will be executed",
          "hierarchy": "System Console Program",
          "module": "System.Console.Program",
          "name": "interactive",
          "normalized": "Commands-\u003eIO()",
          "package": "console-program",
          "signature": "Commands-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Program.html#v:interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint usage info for the program to stdout.\n\u003c/p\u003e",
          "module": "System.Console.Program",
          "name": "showUsage",
          "package": "console-program",
          "signature": "Commands -\u003e IO ()",
          "source": "src/System-Console-Program.html#showUsage",
          "type": "function"
        },
        "index": {
          "description": "Print usage info for the program to stdout",
          "hierarchy": "System Console Program",
          "module": "System.Console.Program",
          "name": "showUsage",
          "normalized": "Commands-\u003eIO()",
          "package": "console-program",
          "partial": "Usage",
          "signature": "Commands-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Program.html#v:showUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the configuration file (if present), and run the command given on\n the command line. Settings on the command line override the configuration\n file.\n\u003c/p\u003e\u003cp\u003eYou may use this function, applied to your tree of available commands, as your \u003ccode\u003emain\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "System.Console.Program",
          "name": "single",
          "package": "console-program",
          "signature": "Commands -\u003e IO ()",
          "source": "src/System-Console-Program.html#single",
          "type": "function"
        },
        "index": {
          "description": "Load the configuration file if present and run the command given on the command line Settings on the command line override the configuration file You may use this function applied to your tree of available commands as your main function",
          "hierarchy": "System Console Program",
          "module": "System.Console.Program",
          "name": "single",
          "normalized": "Commands-\u003eIO()",
          "package": "console-program",
          "signature": "Commands-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/console-program/docs/System-Console-Program.html#v:single"
      }
    }
  ]
]