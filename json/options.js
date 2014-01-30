[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eoptions\u003c/code\u003e package lets library and application developers easily work\n with command-line options.\n\u003c/p\u003e\u003cp\u003eThe following example is a full program that can accept two options,\n \u003ccode\u003e--message\u003c/code\u003e and \u003ccode\u003e--quiet\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Options\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"MainOptions\" $ do\n    \u003ccode\u003e\u003ca\u003estringOption\u003c/a\u003e\u003c/code\u003e \"optMessage\" \"message\" \"Hello world!\"\n        \"A message to show the user.\"\n    \u003ccode\u003e\u003ca\u003eboolOption\u003c/a\u003e\u003c/code\u003e \"optQuiet\" \"quiet\" False\n        \"Whether to be quiet.\"\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e $ \\opts args -\u003e do\n    if optQuiet opts\n        then return ()\n        else putStrLn (optMessage opts)\n\u003c/pre\u003e\u003cpre\u003e$ ./hello\nHello world!\n$ ./hello --message='ciao mondo'\nciao mondo\n$ ./hello --quiet\n$\n\u003c/pre\u003e\u003cp\u003eIn addition, this library will automatically create documentation options\n such as \u003ccode\u003e--help\u003c/code\u003e and \u003ccode\u003e--help-all\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e$ ./hello --help\nHelp Options:\n  -h, --help                  Show option summary.\n  --help-all                  Show all help options.\n\nApplication Options:\n  --message                   A message to show the user.\n  --quiet                     Whether to be quiet.\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "module",
        "fct-source": "src/Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "The options package lets library and application developers easily work with command-line options The following example is full program that can accept two options message and quiet LANGUAGE TemplateHaskell import Options defineOptions MainOptions do stringOption optMessage message Hello world message to show the user boolOption optQuiet quiet False Whether to be quiet main IO main runCommand opts args do if optQuiet opts then return else putStrLn optMessage opts hello Hello world hello message ciao mondo ciao mondo hello quiet In addition this library will automatically create documentation options such as help and help-all hello help Help Options help Show option summary help-all Show all help options Application Options message message to show the user quiet Whether to be quiet",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Options",
        "normalized": "",
        "package": "options",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Group",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options-OptionTypes.html#Group",
        "fct-type": "data",
        "title": "Group"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Group",
        "normalized": "",
        "package": "options",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:ImportedOptions",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options.html#ImportedOptions",
        "fct-type": "data",
        "title": "ImportedOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "ImportedOptions",
        "normalized": "",
        "package": "options",
        "partial": "Imported Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Option",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options-OptionTypes.html#Option",
        "fct-type": "data",
        "title": "Option"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Option",
        "normalized": "",
        "package": "options",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:OptionType",
      "description": {
        "fct-descr": "\u003cp\u003eAn option's type determines how the option will be parsed, and which\n Haskell type the parsed value will be stored as. There are many types\n available, covering most basic types and a few more advanced types.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options-OptionTypes.html#OptionType",
        "fct-type": "data",
        "title": "OptionType"
      },
      "index": {
        "description": "An option type determines how the option will be parsed and which Haskell type the parsed value will be stored as There are many types available covering most basic types and few more advanced types",
        "hierarchy": "Options",
        "module": "Options",
        "name": "OptionType",
        "normalized": "",
        "package": "options",
        "partial": "Option Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eOptions are defined together in a single data type, which will be an\n instance of \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e for details on defining instances of \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eoptions\u003c/a\u003e\u003c/code\u003e for details on including imported \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e types in locally\n defined options.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "class",
        "fct-source": "src/Options.html#Options",
        "fct-type": "class",
        "title": "Options"
      },
      "index": {
        "description": "Options are defined together in single data type which will be an instance of Options See defineOptions for details on defining instances of Options See options for details on including imported Options types in locally defined options",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Options",
        "normalized": "",
        "package": "options",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Parsed",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "class",
        "fct-source": "src/Options.html#Parsed",
        "fct-type": "class",
        "title": "Parsed"
      },
      "index": {
        "description": "See parseOptions and parseSubcommand",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Parsed",
        "normalized": "",
        "package": "options",
        "partial": "Parsed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:ParsedOptions",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options.html#ParsedOptions",
        "fct-type": "data",
        "title": "ParsedOptions"
      },
      "index": {
        "description": "See parseOptions",
        "hierarchy": "Options",
        "module": "Options",
        "name": "ParsedOptions",
        "normalized": "",
        "package": "options",
        "partial": "Parsed Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:ParsedSubcommand",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options.html#ParsedSubcommand",
        "fct-type": "data",
        "title": "ParsedSubcommand"
      },
      "index": {
        "description": "See parseSubcommand",
        "hierarchy": "Options",
        "module": "Options",
        "name": "ParsedSubcommand",
        "normalized": "",
        "package": "options",
        "partial": "Parsed Subcommand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Subcommand",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "data",
        "fct-source": "src/Options.html#Subcommand",
        "fct-type": "data",
        "title": "Subcommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "Subcommand",
        "normalized": "",
        "package": "options",
        "partial": "Subcommand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:boolOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Bool-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "boolOption"
      },
      "index": {
        "description": "Define an option of type Bool This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "boolOption",
        "normalized": "String-\u003eString-\u003eBool-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eBool-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:defaultOptions",
      "description": {
        "fct-descr": "\u003cp\u003eAn options value containing only the default values for each option.\n This is equivalent to the options value when parsing an empty argument\n list.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "a",
        "fct-source": "src/Options.html#defaultOptions",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "An options value containing only the default values for each option This is equivalent to the options value when parsing an empty argument list",
        "hierarchy": "Options",
        "module": "Options",
        "name": "defaultOptions",
        "normalized": "",
        "package": "options",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:defineOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a new data type, containing fields for application or library\n options. The new type will be an instance of \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: this use of \u003ccode\u003edefineOptions\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"MainOptions\" $ do\n    \u003ccode\u003e\u003ca\u003estringOption\u003c/a\u003e\u003c/code\u003e \"optMessage\" \"message\" \"Hello world!\" \"\"\n    \u003ccode\u003e\u003ca\u003eboolOption\u003c/a\u003e\u003c/code\u003e \"optQuiet\" \"quiet\" False \"\"\n\u003c/pre\u003e\u003cp\u003eexpands to the following definition:\n\u003c/p\u003e\u003cpre\u003edata MainOptions = MainOptions\n    { optMessage :: String\n    , optQuiet :: Bool\n    }\n\ninstance Options MainOptions\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String -\u003e OptionsM () -\u003e Q [Dec]",
        "fct-source": "src/Options.html#defineOptions",
        "fct-type": "function",
        "title": "defineOptions"
      },
      "index": {
        "description": "Defines new data type containing fields for application or library options The new type will be an instance of Options Example this use of defineOptions defineOptions MainOptions do stringOption optMessage message Hello world boolOption optQuiet quiet False expands to the following definition data MainOptions MainOptions optMessage String optQuiet Bool instance Options MainOptions",
        "hierarchy": "Options",
        "module": "Options",
        "name": "defineOptions",
        "normalized": "String-\u003eOptionsM()-\u003eQ[Dec]",
        "package": "options",
        "partial": "Options",
        "signature": "String-\u003eOptionsM()-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:doubleOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Double-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "doubleOption"
      },
      "index": {
        "description": "Define an option of type Double This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "doubleOption",
        "normalized": "String-\u003eString-\u003eDouble-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eDouble-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:floatOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Float-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "floatOption"
      },
      "index": {
        "description": "Define an option of type Float This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "floatOption",
        "normalized": "String-\u003eString-\u003eFloat-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eFloat-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option group.\n\u003c/p\u003e\u003cp\u003eOption groups are used to make long \u003ccode\u003e--help\u003c/code\u003e output more readable, by\n hiding obscure or rarely-used options from the main summary.\n\u003c/p\u003e\u003cp\u003eIf an option is in a group named \u003ccode\u003e\"examples\"\u003c/code\u003e, it will only be shown\n in the help output if the user provides the flag \u003ccode\u003e--help-examples\u003c/code\u003e or\n \u003ccode\u003e--help-all\u003c/code\u003e. The flag \u003ccode\u003e--help-all\u003c/code\u003e will show all options, in all groups.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e (Group -\u003e Group)-\u003e Group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Define an option group Option groups are used to make long help output more readable by hiding obscure or rarely-used options from the main summary If an option is in group named examples it will only be shown in the help output if the user provides the flag help-examples or help-all The flag help-all will show all options in all groups",
        "hierarchy": "Options",
        "module": "Options",
        "name": "group",
        "normalized": "String-\u003e(Group-\u003eGroup)-\u003eGroup",
        "package": "options",
        "partial": "",
        "signature": "String-\u003e(Group-\u003eGroup)-\u003eGroup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:groupDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA description of the group, which is used when printing\n \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Group -\u003e String",
        "fct-source": "src/Options-OptionTypes.html#groupDescription",
        "fct-type": "function",
        "title": "groupDescription"
      },
      "index": {
        "description": "description of the group which is used when printing help output",
        "hierarchy": "Options",
        "module": "Options",
        "name": "groupDescription",
        "normalized": "Group-\u003eString",
        "package": "options",
        "partial": "Description",
        "signature": "Group-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:groupTitle",
      "description": {
        "fct-descr": "\u003cp\u003eA short title for the group, which is used when printing\n \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Group -\u003e String",
        "fct-source": "src/Options-OptionTypes.html#groupTitle",
        "fct-type": "function",
        "title": "groupTitle"
      },
      "index": {
        "description": "short title for the group which is used when printing help output",
        "hierarchy": "Options",
        "module": "Options",
        "name": "groupTitle",
        "normalized": "Group-\u003eString",
        "package": "options",
        "partial": "Title",
        "signature": "Group-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:importedOptions",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "ImportedOptions a",
        "fct-source": "src/Options.html#importedOptions",
        "fct-type": "function",
        "title": "importedOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "importedOptions",
        "normalized": "",
        "package": "options",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:intOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Int-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "intOption"
      },
      "index": {
        "description": "Define an option of type Int This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "intOption",
        "normalized": "String-\u003eString-\u003eInt-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eInt-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:integerOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Integer-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "integerOption"
      },
      "index": {
        "description": "Define an option of type Integer This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "integerOption",
        "normalized": "String-\u003eString-\u003eInteger-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eInteger-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:option",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a new option in the current options type.\n\u003c/p\u003e\u003cp\u003eAll options must have a \u003cem\u003efield name\u003c/em\u003e and one or more \u003cem\u003eflags\u003c/em\u003e. Options may\n also have a default value, a description, or a group.\n\u003c/p\u003e\u003cp\u003eThe field name is how the option will be accessed in Haskell, and is\n typically prefixed with \"opt\". This is used to define a record field,\n and must be a valid Haskell field name (see \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e for details).\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eflags\u003c/em\u003e are how the user specifies an option on the command line. Flags\n may be \u003cem\u003eshort\u003c/em\u003e or \u003cem\u003elong\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003eoptionShortFlags\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e for\n details.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e \"optPort\" (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"port\"]\n    , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = \"80\"\n    , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeWord16\u003c/a\u003e\u003c/code\u003e\n    }\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e (Option String -\u003e Option a)-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "option"
      },
      "index": {
        "description": "Defines new option in the current options type All options must have field name and one or more flags Options may also have default value description or group The field name is how the option will be accessed in Haskell and is typically prefixed with opt This is used to define record field and must be valid Haskell field name see defineOptions for details The flags are how the user specifies an option on the command line Flags may be short or long See optionShortFlags and optionLongFlags for details option optPort optionLongFlags port optionDefault optionType optionTypeWord16",
        "hierarchy": "Options",
        "module": "Options",
        "name": "option",
        "normalized": "String-\u003e(Option String-\u003eOption a)-\u003eOptionsM()",
        "package": "options",
        "partial": "",
        "signature": "String-\u003e(Option String-\u003eOption a)-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionDefault",
      "description": {
        "fct-descr": "\u003cp\u003eOptions may have a default value. This will be parsed as if the\n user had entered it on the command line.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e String",
        "fct-source": "src/Options-OptionTypes.html#optionDefault",
        "fct-type": "function",
        "title": "optionDefault"
      },
      "index": {
        "description": "Options may have default value This will be parsed as if the user had entered it on the command line",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionDefault",
        "normalized": "Option a-\u003eString",
        "package": "options",
        "partial": "Default",
        "signature": "Option a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionDescription",
      "description": {
        "fct-descr": "\u003cp\u003eAn option's description is used with the default implementation\n of \u003ccode\u003e--help\u003c/code\u003e. It should be a short string describing what the option\n does.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e String",
        "fct-source": "src/Options-OptionTypes.html#optionDescription",
        "fct-type": "function",
        "title": "optionDescription"
      },
      "index": {
        "description": "An option description is used with the default implementation of help It should be short string describing what the option does",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionDescription",
        "normalized": "Option a-\u003eString",
        "package": "options",
        "partial": "Description",
        "signature": "Option a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionGroup",
      "description": {
        "fct-descr": "\u003cp\u003eWhich group the option is in. See the \"Option groups\" section\n for details.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e Group",
        "fct-source": "src/Options-OptionTypes.html#optionGroup",
        "fct-type": "function",
        "title": "optionGroup"
      },
      "index": {
        "description": "Which group the option is in See the Option groups section for details",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionGroup",
        "normalized": "Option a-\u003eGroup",
        "package": "options",
        "partial": "Group",
        "signature": "Option a-\u003eGroup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionLongFlags",
      "description": {
        "fct-descr": "\u003cp\u003eLong flags are multiple characters. When entered by a user, they\n are preceded by two dashes.\n\u003c/p\u003e\u003cp\u003eLong flags may contain letters, numbers, \u003ccode\u003e'-'\u003c/code\u003e, and \u003ccode\u003e'_'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: An option with \u003ccode\u003eoptionLongFlags = [\"port\"]\u003c/code\u003e may be set using:\n\u003c/p\u003e\u003cpre\u003e$ ./app --port 443\n$ ./app --port=443\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e [String]",
        "fct-source": "src/Options-OptionTypes.html#optionLongFlags",
        "fct-type": "function",
        "title": "optionLongFlags"
      },
      "index": {
        "description": "Long flags are multiple characters When entered by user they are preceded by two dashes Long flags may contain letters numbers and Example An option with optionLongFlags port may be set using app port app port",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionLongFlags",
        "normalized": "Option a-\u003e[String]",
        "package": "options",
        "partial": "Long Flags",
        "signature": "Option a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionShortFlags",
      "description": {
        "fct-descr": "\u003cp\u003eShort flags are a single character. When entered by a user,\n they are preceded by a dash and possibly other short flags.\n\u003c/p\u003e\u003cp\u003eShort flags must be a letter or a number.\n\u003c/p\u003e\u003cp\u003eExample: An option with \u003ccode\u003eoptionShortFlags = ['p']\u003c/code\u003e may be set using:\n\u003c/p\u003e\u003cpre\u003e$ ./app -p 443\n$ ./app -p443\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e [Char]",
        "fct-source": "src/Options-OptionTypes.html#optionShortFlags",
        "fct-type": "function",
        "title": "optionShortFlags"
      },
      "index": {
        "description": "Short flags are single character When entered by user they are preceded by dash and possibly other short flags Short flags must be letter or number Example An option with optionShortFlags may be set using app app p443",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionShortFlags",
        "normalized": "Option a-\u003e[Char]",
        "package": "options",
        "partial": "Short Flags",
        "signature": "Option a-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType",
      "description": {
        "fct-descr": "\u003cp\u003eThere are many types which an application or library might want\n to use when designing their options. By default, options are\n strings, but \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e may be set to any supported type. See\n the \"Option types\" section for a list of supported types.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Option a -\u003e OptionType a",
        "fct-source": "src/Options-OptionTypes.html#optionType",
        "fct-type": "function",
        "title": "optionType"
      },
      "index": {
        "description": "There are many types which an application or library might want to use when designing their options By default options are strings but optionType may be set to any supported type See the Option types section for list of supported types",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionType",
        "normalized": "Option a-\u003eOptionType a",
        "package": "options",
        "partial": "Type",
        "signature": "Option a-\u003eOptionType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeBool",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option's value must be either\n \u003ccode\u003e\"true\"\u003c/code\u003e or \u003ccode\u003e\"false\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBoolean options are unary, which means that their value is optional when\n specified on the command line. If a flag is present, the option is set to\n True.\n\u003c/p\u003e\u003cpre\u003e$ ./app -q\n$ ./app --quiet\n\u003c/pre\u003e\u003cp\u003eBoolean options may still be specified explicitly by using long flags with\n the \u003ccode\u003e--flag=value\u003c/code\u003e format. This is the only way to set a unary flag to\n \u003ccode\u003e\"false\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e$ ./app --quiet=true\n$ ./app --quiet=false\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Bool",
        "fct-source": "src/Options-OptionTypes.html#optionTypeBool",
        "fct-type": "function",
        "title": "optionTypeBool"
      },
      "index": {
        "description": "Store an option as Bool The option value must be either true or false Boolean options are unary which means that their value is optional when specified on the command line If flag is present the option is set to True app app quiet Boolean options may still be specified explicitly by using long flags with the flag value format This is the only way to set unary flag to false app quiet true app quiet false",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeBool",
        "normalized": "",
        "package": "options",
        "partial": "Type Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeDouble",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a number. Due to\n the imprecision of floating-point math, the stored value might not exactly\n match the user's input. If the user's input is out of range for the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type, it will be stored as \u003ccode\u003eInfinity\u003c/code\u003e or \u003ccode\u003e-Infinity\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Double",
        "fct-source": "src/Options-OptionTypes.html#optionTypeDouble",
        "fct-type": "function",
        "title": "optionTypeDouble"
      },
      "index": {
        "description": "Store an option as Double The option value must be number Due to the imprecision of floating-point math the stored value might not exactly match the user input If the user input is out of range for the Double type it will be stored as Infinity or Infinity",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeDouble",
        "normalized": "",
        "package": "options",
        "partial": "Type Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeEnum",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as one of a set of enumerated values. The option\n type must be defined in a separate file.\n\u003c/p\u003e\u003cpre\u003e-- MyApp/Types.hs\ndata Mode = ModeFoo | ModeBar\n    deriving (Enum)\n\u003c/pre\u003e\u003cpre\u003e\n -- Main.hs\nimport MyApp.Types\n\n\u003ccode\u003edefineOptions\u003c/code\u003e \"MainOptions\" $ do\n    \u003ccode\u003eoption\u003c/code\u003e \"optMode\" (\\o -\u003e o\n        { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"mode\"]\n        , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = \"foo\"\n        , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeEnum\u003c/a\u003e\u003c/code\u003e ''Mode\n            [ (\"foo\", ModeFoo)\n            , (\"bar\", ModeBar)\n            ]\n        })\n\u003c/pre\u003e\u003cpre\u003e$ ./app\nRunning in mode ModeFoo\n$ ./app --mode=bar\nRunning in mode ModeBar\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Name -\u003e [(String, a)] -\u003e OptionType a",
        "fct-source": "src/Options-OptionTypes.html#optionTypeEnum",
        "fct-type": "function",
        "title": "optionTypeEnum"
      },
      "index": {
        "description": "Store an option as one of set of enumerated values The option type must be defined in separate file MyApp Types.hs data Mode ModeFoo ModeBar deriving Enum Main.hs import MyApp.Types defineOptions MainOptions do option optMode optionLongFlags mode optionDefault foo optionType optionTypeEnum Mode foo ModeFoo bar ModeBar app Running in mode ModeFoo app mode bar Running in mode ModeBar",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeEnum",
        "normalized": "Name-\u003e[(String,a)]-\u003eOptionType a",
        "package": "options",
        "partial": "Type Enum",
        "signature": "Name-\u003e[(String,a)]-\u003eOptionType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeFilePath",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option value as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType FilePath",
        "fct-source": "src/Options-OptionTypes.html#optionTypeFilePath",
        "fct-type": "function",
        "title": "optionTypeFilePath"
      },
      "index": {
        "description": "Store an option value as FilePath",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeFilePath",
        "normalized": "",
        "package": "options",
        "partial": "Type File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeFloat",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a number. Due to\n the imprecision of floating-point math, the stored value might not exactly\n match the user's input. If the user's input is out of range for the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type, it will be stored as \u003ccode\u003eInfinity\u003c/code\u003e or \u003ccode\u003e-Infinity\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Float",
        "fct-source": "src/Options-OptionTypes.html#optionTypeFloat",
        "fct-type": "function",
        "title": "optionTypeFloat"
      },
      "index": {
        "description": "Store an option as Float The option value must be number Due to the imprecision of floating-point math the stored value might not exactly match the user input If the user input is out of range for the Float type it will be stored as Infinity or Infinity",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeFloat",
        "normalized": "",
        "package": "options",
        "partial": "Type Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInt",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Int",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInt",
        "fct-type": "function",
        "title": "optionTypeInt"
      },
      "index": {
        "description": "Store an option as an Int The option value must be an integer such that minBound maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInt",
        "normalized": "",
        "package": "options",
        "partial": "Type Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInt16",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Int16",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInt16",
        "fct-type": "function",
        "title": "optionTypeInt16"
      },
      "index": {
        "description": "Store an option as an Int16 The option value must be an integer such that minBound maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInt16",
        "normalized": "",
        "package": "options",
        "partial": "Type Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInt32",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Int32",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInt32",
        "fct-type": "function",
        "title": "optionTypeInt32"
      },
      "index": {
        "description": "Store an option as an Int32 The option value must be an integer such that minBound maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInt32",
        "normalized": "",
        "package": "options",
        "partial": "Type Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInt64",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Int64",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInt64",
        "fct-type": "function",
        "title": "optionTypeInt64"
      },
      "index": {
        "description": "Store an option as an Int64 The option value must be an integer such that minBound maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInt64",
        "normalized": "",
        "package": "options",
        "partial": "Type Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInt8",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Int8",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInt8",
        "fct-type": "function",
        "title": "optionTypeInt8"
      },
      "index": {
        "description": "Store an option as an Int8 The option value must be an integer such that minBound maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInt8",
        "normalized": "",
        "package": "options",
        "partial": "Type Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeInteger",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer.\n There is no minimum or maximum value.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Integer",
        "fct-source": "src/Options-OptionTypes.html#optionTypeInteger",
        "fct-type": "function",
        "title": "optionTypeInteger"
      },
      "index": {
        "description": "Store an option as an Integer The option value must be an integer There is no minimum or maximum value",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeInteger",
        "normalized": "",
        "package": "options",
        "partial": "Type Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeList",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a list, using another option type for the elements.\n The separator should be a character that will not occur within the values,\n such as a comma or semicolon.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003eoption\u003c/code\u003e \"optNames\" (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"names\"]\n    , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = \"Alice;Bob;Charles\"\n    , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeList\u003c/a\u003e\u003c/code\u003e ';' \u003ccode\u003e\u003ca\u003eoptionTypeString\u003c/a\u003e\u003c/code\u003e\n    })\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Char-\u003e OptionType a-\u003e OptionType [a]",
        "fct-type": "function",
        "title": "optionTypeList"
      },
      "index": {
        "description": "Store an option as list using another option type for the elements The separator should be character that will not occur within the values such as comma or semicolon option optNames optionLongFlags names optionDefault Alice Bob Charles optionType optionTypeList optionTypeString",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeList",
        "normalized": "Char-\u003eOptionType a-\u003eOptionType[a]",
        "package": "options",
        "partial": "Type List",
        "signature": "Char-\u003eOptionType a-\u003eOptionType[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeMap",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, using other option types for the keys and\n values.\n\u003c/p\u003e\u003cp\u003eThe item separator is used to separate key/value pairs from eachother. It\n should be a character that will not occur within either the keys or values.\n\u003c/p\u003e\u003cp\u003eThe value separator is used to separate the key from the value. It should\n be a character that will not occur within the keys. It may occur within the\n values.\n\u003c/p\u003e\u003cp\u003eDuplicate keys in the input are permitted. The final value for each key is\n stored.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003eoption\u003c/code\u003e \"optNames\" (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"names\"]\n    , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = \"name=Alice;hometown=Bucharest\"\n    , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeMap\u003c/a\u003e\u003c/code\u003e ';' '=' \u003ccode\u003e\u003ca\u003eoptionTypeString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoptionTypeString\u003c/a\u003e\u003c/code\u003e\n    })\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Char-\u003e Char-\u003e OptionType k-\u003e OptionType v-\u003e OptionType (Map k v)",
        "fct-type": "function",
        "title": "optionTypeMap"
      },
      "index": {
        "description": "Store an option as Map using other option types for the keys and values The item separator is used to separate key value pairs from eachother It should be character that will not occur within either the keys or values The value separator is used to separate the key from the value It should be character that will not occur within the keys It may occur within the values Duplicate keys in the input are permitted The final value for each key is stored option optNames optionLongFlags names optionDefault name Alice hometown Bucharest optionType optionTypeMap optionTypeString optionTypeString",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeMap",
        "normalized": "Char-\u003eChar-\u003eOptionType a-\u003eOptionType b-\u003eOptionType(Map a b)",
        "package": "options",
        "partial": "Type Map",
        "signature": "Char-\u003eChar-\u003eOptionType k-\u003eOptionType v-\u003eOptionType(Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of another type. The value will be\n \u003ccode\u003eNothing\u003c/code\u003e if the option was not provided or is an empty string.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003eoption\u003c/code\u003e \"optTimeout\" (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"timeout\"]\n    , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoptionTypeInt\u003c/a\u003e\u003c/code\u003e\n    })\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType a -\u003e OptionType (Maybe a)",
        "fct-source": "src/Options-OptionTypes.html#optionTypeMaybe",
        "fct-type": "function",
        "title": "optionTypeMaybe"
      },
      "index": {
        "description": "Store an option as Maybe of another type The value will be Nothing if the option was not provided or is an empty string option optTimeout optionLongFlags timeout optionType optionTypeMaybe optionTypeInt",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeMaybe",
        "normalized": "OptionType a-\u003eOptionType(Maybe a)",
        "package": "options",
        "partial": "Type Maybe",
        "signature": "OptionType a-\u003eOptionType(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeSet",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, using another option type for the\n elements. The separator should be a character that will not occur within\n the values, such as a comma or semicolon.\n\u003c/p\u003e\u003cp\u003eDuplicate elements in the input are permitted.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003eoption\u003c/code\u003e \"optNames\" (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"names\"]\n    , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = \"Alice;Bob;Charles\"\n    , \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eoptionTypeSet\u003c/a\u003e\u003c/code\u003e ';' \u003ccode\u003e\u003ca\u003eoptionTypeString\u003c/a\u003e\u003c/code\u003e\n    })\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "Char-\u003e OptionType a-\u003e OptionType (Set a)",
        "fct-type": "function",
        "title": "optionTypeSet"
      },
      "index": {
        "description": "Store an option as Set using another option type for the elements The separator should be character that will not occur within the values such as comma or semicolon Duplicate elements in the input are permitted option optNames optionLongFlags names optionDefault Alice Bob Charles optionType optionTypeSet optionTypeString",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeSet",
        "normalized": "Char-\u003eOptionType a-\u003eOptionType(Set a)",
        "package": "options",
        "partial": "Type Set",
        "signature": "Char-\u003eOptionType a-\u003eOptionType(Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeString",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option value as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The value is decoded to Unicode\n first, if needed. The value may contain non-Unicode bytes, in which case\n they will be stored using GHC 7.4's encoding for mixed-use strings.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType String",
        "fct-source": "src/Options-OptionTypes.html#optionTypeString",
        "fct-type": "function",
        "title": "optionTypeString"
      },
      "index": {
        "description": "Store an option value as String The value is decoded to Unicode first if needed The value may contain non-Unicode bytes in which case they will be stored using GHC encoding for mixed-use strings",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeString",
        "normalized": "",
        "package": "options",
        "partial": "Type String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeText",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option value as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The value is decoded to Unicode\n first, if needed. If the value cannot be decoded, the stored value may have\n the Unicode substitution character \u003ccode\u003e'\\65533'\u003c/code\u003e in place of some of the\n original input.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Text",
        "fct-source": "src/Options-OptionTypes.html#optionTypeText",
        "fct-type": "function",
        "title": "optionTypeText"
      },
      "index": {
        "description": "Store an option value as Text The value is decoded to Unicode first if needed If the value cannot be decoded the stored value may have the Unicode substitution character in place of some of the original input",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeText",
        "normalized": "",
        "package": "options",
        "partial": "Type Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeWord",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Word",
        "fct-source": "src/Options-OptionTypes.html#optionTypeWord",
        "fct-type": "function",
        "title": "optionTypeWord"
      },
      "index": {
        "description": "Store an option as Word The option value must be positive integer such that maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeWord",
        "normalized": "",
        "package": "options",
        "partial": "Type Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeWord16",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Word16",
        "fct-source": "src/Options-OptionTypes.html#optionTypeWord16",
        "fct-type": "function",
        "title": "optionTypeWord16"
      },
      "index": {
        "description": "Store an option as Word16 The option value must be positive integer such that maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeWord16",
        "normalized": "",
        "package": "options",
        "partial": "Type Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeWord32",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Word32",
        "fct-source": "src/Options-OptionTypes.html#optionTypeWord32",
        "fct-type": "function",
        "title": "optionTypeWord32"
      },
      "index": {
        "description": "Store an option as Word32 The option value must be positive integer such that maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeWord32",
        "normalized": "",
        "package": "options",
        "partial": "Type Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeWord64",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Word64",
        "fct-source": "src/Options-OptionTypes.html#optionTypeWord64",
        "fct-type": "function",
        "title": "optionTypeWord64"
      },
      "index": {
        "description": "Store an option as Word64 The option value must be positive integer such that maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeWord64",
        "normalized": "",
        "package": "options",
        "partial": "Type Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeWord8",
      "description": {
        "fct-descr": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "OptionType Word8",
        "fct-source": "src/Options-OptionTypes.html#optionTypeWord8",
        "fct-type": "function",
        "title": "optionTypeWord8"
      },
      "index": {
        "description": "Store an option as Word8 The option value must be positive integer such that maxBound",
        "hierarchy": "Options",
        "module": "Options",
        "name": "optionTypeWord8",
        "normalized": "",
        "package": "options",
        "partial": "Type Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eInclude options defined elsewhere into the current options definition.\n\u003c/p\u003e\u003cp\u003eThis is typically used by application developers to include options defined\n in third-party libraries. For example, the author of the \"foo\" library\n would define and export \u003ccode\u003eFooOptions\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nmodule Foo (FooOptions, foo) where\n\nimport Options\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"FooOptions\" $ do\n    \u003ccode\u003e\u003ca\u003eboolOption\u003c/a\u003e\u003c/code\u003e \"optFrob\" \"frob\" True \"Enable frobnication.\"\n\nfoo :: FooOptions -\u003e IO ()\n\u003c/pre\u003e\u003cp\u003eand the author of an application would use \u003ccode\u003eoptions\u003c/code\u003e to let users specify\n \u003ccode\u003e--frob\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where\n\nimport Options\nimport Foo\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"MainOptions\" $ do\n   \u003ccode\u003e\u003ca\u003eboolOption\u003c/a\u003e\u003c/code\u003e \"optVerbose\" \"verbose\" False \"Be really loud.\"\n   \u003ccode\u003e\u003ca\u003eoptions\u003c/a\u003e\u003c/code\u003e \"optFoo\" (\u003ccode\u003e\u003ca\u003eimportedOptions\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eImportedOptions\u003c/a\u003e\u003c/code\u003e FooOptions)\n\nmain :: IO ()\nmain = runCommand $ \\opts args -\u003e do\n    foo (optFoo opts)\n\u003c/pre\u003e\u003cp\u003eUse of \u003ccode\u003e\u003ca\u003eoptions\u003c/a\u003e\u003c/code\u003e may be arbitrarily nested. Library authors are encouraged\n to aggregate their options into a single top-level type, so application\n authors can include it easily in their own option definitions.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String -\u003e ImportedOptions a -\u003e OptionsM ()",
        "fct-source": "src/Options.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Include options defined elsewhere into the current options definition This is typically used by application developers to include options defined in third-party libraries For example the author of the foo library would define and export FooOptions module Foo FooOptions foo where import Options defineOptions FooOptions do boolOption optFrob frob True Enable frobnication foo FooOptions IO and the author of an application would use options to let users specify frob module Main where import Options import Foo defineOptions MainOptions do boolOption optVerbose verbose False Be really loud options optFoo importedOptions ImportedOptions FooOptions main IO main runCommand opts args do foo optFoo opts Use of options may be arbitrarily nested Library authors are encouraged to aggregate their options into single top-level type so application authors can include it easily in their own option definitions",
        "hierarchy": "Options",
        "module": "Options",
        "name": "options",
        "normalized": "String-\u003eImportedOptions a-\u003eOptionsM()",
        "package": "options",
        "partial": "",
        "signature": "String-\u003eImportedOptions a-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parseOptions",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a list of command-line arguments into an options\n value. This can be used by application developers who want finer control\n over error handling, or who want to perform additional validation on the\n options value.\n\u003c/p\u003e\u003cp\u003eThe argument list must be in the same encoding as the result of\n \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedArguments\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to inspect the result of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\ngetOptionsOrDie :: Options a =\u003e IO a\ngetOptionsOrDie = do\n    argv \u003c- System.Environment.getArgs\n    let parsed = \u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e argv\n    case \u003ccode\u003e\u003ca\u003eparsedOptions\u003c/a\u003e\u003c/code\u003e parsed of\n        Just opts -\u003e return opts\n        Nothing -\u003e case \u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e parsed of\n            Just err -\u003e do\n                hPutStrLn stderr (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                hPutStrLn stderr err\n                exitFailure\n            Nothing -\u003e do\n                hPutStr stdout (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                exitSuccess\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "[String] -\u003e ParsedOptions opts",
        "fct-source": "src/Options.html#parseOptions",
        "fct-type": "function",
        "title": "parseOptions"
      },
      "index": {
        "description": "Attempt to convert list of command-line arguments into an options value This can be used by application developers who want finer control over error handling or who want to perform additional validation on the options value The argument list must be in the same encoding as the result of getArgs Use parsedOptions parsedArguments parsedError and parsedHelp to inspect the result of parseOptions Example getOptionsOrDie Options IO getOptionsOrDie do argv System.Environment.getArgs let parsed parseOptions argv case parsedOptions parsed of Just opts return opts Nothing case parsedError parsed of Just err do hPutStrLn stderr parsedHelp parsed hPutStrLn stderr err exitFailure Nothing do hPutStr stdout parsedHelp parsed exitSuccess",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parseOptions",
        "normalized": "[String]-\u003eParsedOptions a",
        "package": "options",
        "partial": "Options",
        "signature": "[String]-\u003eParsedOptions opts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parseSubcommand",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a list of command-line arguments into a subcommand\n action. This can be used by application developers who want finer control\n over error handling, or who want subcommands that run in an unusual monad.\n\u003c/p\u003e\u003cp\u003eThe argument list must be in the same encoding as the result of\n \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to inspect the\n result of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nrunSubcommand :: Options cmdOpts =\u003e [Subcommand cmdOpts (IO a)] -\u003e IO a\nrunSubcommand subcommands = do\n    argv \u003c- System.Environment.getArgs\n    let parsed = \u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e subcommands argv\n    case \u003ccode\u003e\u003ca\u003eparsedSubcommand\u003c/a\u003e\u003c/code\u003e parsed of\n        Just cmd -\u003e cmd\n        Nothing -\u003e case \u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e parsed of\n            Just err -\u003e do\n                hPutStrLn stderr (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                hPutStrLn stderr err\n                exitFailure\n            Nothing -\u003e do\n                hPutStr stdout (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                exitSuccess\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "[Subcommand cmdOpts action] -\u003e [String] -\u003e ParsedSubcommand action",
        "fct-source": "src/Options.html#parseSubcommand",
        "fct-type": "function",
        "title": "parseSubcommand"
      },
      "index": {
        "description": "Attempt to convert list of command-line arguments into subcommand action This can be used by application developers who want finer control over error handling or who want subcommands that run in an unusual monad The argument list must be in the same encoding as the result of getArgs Use parsedSubcommand parsedError and parsedHelp to inspect the result of parseSubcommand Example runSubcommand Options cmdOpts Subcommand cmdOpts IO IO runSubcommand subcommands do argv System.Environment.getArgs let parsed parseSubcommand subcommands argv case parsedSubcommand parsed of Just cmd cmd Nothing case parsedError parsed of Just err do hPutStrLn stderr parsedHelp parsed hPutStrLn stderr err exitFailure Nothing do hPutStr stdout parsedHelp parsed exitSuccess",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parseSubcommand",
        "normalized": "[Subcommand a b]-\u003e[String]-\u003eParsedSubcommand b",
        "package": "options",
        "partial": "Subcommand",
        "signature": "[Subcommand cmdOpts action]-\u003e[String]-\u003eParsedSubcommand action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedArguments",
      "description": {
        "fct-descr": "\u003cp\u003eGet command-line arguments remaining after parsing options. The arguments\n are unchanged from the original argument list, and have not been decoded\n or otherwise transformed.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "ParsedOptions opts -\u003e [String]",
        "fct-source": "src/Options.html#parsedArguments",
        "fct-type": "function",
        "title": "parsedArguments"
      },
      "index": {
        "description": "Get command-line arguments remaining after parsing options The arguments are unchanged from the original argument list and have not been decoded or otherwise transformed",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parsedArguments",
        "normalized": "ParsedOptions a-\u003e[String]",
        "package": "options",
        "partial": "Arguments",
        "signature": "ParsedOptions opts-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedError",
      "description": {
        "fct-descr": "\u003cp\u003eGet the error that prevented options from being parsed from argv,\n or \u003ccode\u003eNothing\u003c/code\u003e if no error was detected.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "a -\u003e Maybe String",
        "fct-source": "src/Options.html#parsedError",
        "fct-type": "function",
        "title": "parsedError"
      },
      "index": {
        "description": "Get the error that prevented options from being parsed from argv or Nothing if no error was detected",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parsedError",
        "normalized": "a-\u003eMaybe String",
        "package": "options",
        "partial": "Error",
        "signature": "a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedHelp",
      "description": {
        "fct-descr": "\u003cp\u003eGet a help message to show the user. If the arguments included\n a help flag, this will be a message appropriate to that flag.\n Otherwise, it is a summary (equivalent to \u003ccode\u003e--help\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is always a non-empty string, regardless of whether the parse\n succeeded or failed. If you need to perform additional validation\n on the options value, this message can be displayed if validation\n fails.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Options.html#parsedHelp",
        "fct-type": "function",
        "title": "parsedHelp"
      },
      "index": {
        "description": "Get help message to show the user If the arguments included help flag this will be message appropriate to that flag Otherwise it is summary equivalent to help This is always non-empty string regardless of whether the parse succeeded or failed If you need to perform additional validation on the options value this message can be displayed if validation fails",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parsedHelp",
        "normalized": "a-\u003eString",
        "package": "options",
        "partial": "Help",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedOptions",
      "description": {
        "fct-descr": "\u003cp\u003eGet the options value that was parsed from argv, or \u003ccode\u003eNothing\u003c/code\u003e if the\n arguments could not be converted into options.\n\u003c/p\u003e\u003cp\u003eNote: This function return \u003ccode\u003eNothing\u003c/code\u003e if the user provided a help flag. To\n check whether an error occured during parsing, check the value of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "ParsedOptions opts -\u003e Maybe opts",
        "fct-source": "src/Options.html#parsedOptions",
        "fct-type": "function",
        "title": "parsedOptions"
      },
      "index": {
        "description": "Get the options value that was parsed from argv or Nothing if the arguments could not be converted into options Note This function return Nothing if the user provided help flag To check whether an error occured during parsing check the value of parsedError",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parsedOptions",
        "normalized": "ParsedOptions a-\u003eMaybe a",
        "package": "options",
        "partial": "Options",
        "signature": "ParsedOptions opts-\u003eMaybe opts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedSubcommand",
      "description": {
        "fct-descr": "\u003cp\u003eGet the subcommand action that was parsed from argv, or \u003ccode\u003eNothing\u003c/code\u003e if the\n arguments could not be converted into a valid action.\n\u003c/p\u003e\u003cp\u003eNote: This function return \u003ccode\u003eNothing\u003c/code\u003e if the user provided a help flag. To\n check whether an error occured during parsing, check the value of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "ParsedSubcommand action -\u003e Maybe action",
        "fct-source": "src/Options.html#parsedSubcommand",
        "fct-type": "function",
        "title": "parsedSubcommand"
      },
      "index": {
        "description": "Get the subcommand action that was parsed from argv or Nothing if the arguments could not be converted into valid action Note This function return Nothing if the user provided help flag To check whether an error occured during parsing check the value of parsedError",
        "hierarchy": "Options",
        "module": "Options",
        "name": "parsedSubcommand",
        "normalized": "ParsedSubcommand a-\u003eMaybe a",
        "package": "options",
        "partial": "Subcommand",
        "signature": "ParsedSubcommand action-\u003eMaybe action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:pathOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper\n around \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e FilePath-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "pathOption"
      },
      "index": {
        "description": "Define an option of type FilePath This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "pathOption",
        "normalized": "String-\u003eString-\u003eFilePath-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eFilePath-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:runCommand",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e, and attempt to parse it into a\n valid value of an \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e type plus a list of left-over arguments. The\n options and arguments are then passed to the provided computation.\n\u003c/p\u003e\u003cp\u003eIf parsing fails, this computation will print an error and call\n \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf parsing succeeds, and the user has passed a \u003ccode\u003e--help\u003c/code\u003e flag, and the\n developer is using the default help flag definitions, then this computation\n will print documentation and call \u003ccode\u003e\u003ca\u003eexitSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e for details on subcommand support.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "(opts -\u003e [String] -\u003e m a) -\u003e m a",
        "fct-source": "src/Options.html#runCommand",
        "fct-type": "function",
        "title": "runCommand"
      },
      "index": {
        "description": "Retrieve getArgs and attempt to parse it into valid value of an Options type plus list of left-over arguments The options and arguments are then passed to the provided computation If parsing fails this computation will print an error and call exitFailure If parsing succeeds and the user has passed help flag and the developer is using the default help flag definitions then this computation will print documentation and call exitSuccess See runSubcommand for details on subcommand support",
        "hierarchy": "Options",
        "module": "Options",
        "name": "runCommand",
        "normalized": "(a-\u003e[String]-\u003eb c)-\u003eb c",
        "package": "options",
        "partial": "Command",
        "signature": "(opts-\u003e[String]-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:runSubcommand",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to run applications that are split into subcommands.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e to define available commands and their actions, then pass\n them to this computation to select one and run it. If the user specifies\n an invalid subcommand, this computation will print an error and call\n \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e. In handling of invalid flags or \u003ccode\u003e--help\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e\n acts like \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE TemplateHaskell #-}\n\nimport Control.Monad (unless)\nimport Options\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"MainOptions\" $ do\n    \u003ccode\u003e\u003ca\u003eboolOption\u003c/a\u003e\u003c/code\u003e \"optQuiet\" \"quiet\" False \"Whether to be quiet.\"\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"HelloOpts\" $ do\n    \u003ccode\u003e\u003ca\u003estringOption\u003c/a\u003e\u003c/code\u003e \"optHello\" \"hello\" \"Hello!\" \"How to say hello.\"\n\n\u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e \"ByeOpts\" $ do\n    \u003ccode\u003e\u003ca\u003estringOption\u003c/a\u003e\u003c/code\u003e \"optName\" \"name\" \"\" \"The user's name.\"\n\nhello :: MainOptions -\u003e HelloOpts -\u003e [String] -\u003e IO ()\nhello mainOpts opts args = unless (optQuiet mainOpts) $ do\n    putStrLn (optHello opts)\n\nbye :: MainOptions -\u003e ByeOpts -\u003e [String] -\u003e IO ()\nbye mainOpts opts args = unless (optQuiet mainOpts) $ do\n    putStrLn (\"Good bye \" ++ optName opts)\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e\n    [ \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e \"hello\" hello\n    , \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e \"bye\" bye\n    ]\n\u003c/pre\u003e\u003cpre\u003e$ ./app hello\nHello!\n$ ./app hello --hello='Allo!'\nAllo!\n$ ./app bye\nGood bye \n$ ./app bye --name='John'\nGood bye John\n\u003c/pre\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "[Subcommand opts (m a)] -\u003e m a",
        "fct-source": "src/Options.html#runSubcommand",
        "fct-type": "function",
        "title": "runSubcommand"
      },
      "index": {
        "description": "Used to run applications that are split into subcommands Use subcommand to define available commands and their actions then pass them to this computation to select one and run it If the user specifies an invalid subcommand this computation will print an error and call exitFailure In handling of invalid flags or help runSubcommand acts like runCommand LANGUAGE TemplateHaskell import Control.Monad unless import Options defineOptions MainOptions do boolOption optQuiet quiet False Whether to be quiet defineOptions HelloOpts do stringOption optHello hello Hello How to say hello defineOptions ByeOpts do stringOption optName name The user name hello MainOptions HelloOpts String IO hello mainOpts opts args unless optQuiet mainOpts do putStrLn optHello opts bye MainOptions ByeOpts String IO bye mainOpts opts args unless optQuiet mainOpts do putStrLn Good bye optName opts main IO main runSubcommand subcommand hello hello subcommand bye bye app hello Hello app hello hello Allo Allo app bye Good bye app bye name John Good bye John",
        "hierarchy": "Options",
        "module": "Options",
        "name": "runSubcommand",
        "normalized": "[Subcommand a(b c)]-\u003eb c",
        "package": "options",
        "partial": "Subcommand",
        "signature": "[Subcommand opts(m a)]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:stringOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e String-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "stringOption"
      },
      "index": {
        "description": "Define an option of type String This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "stringOption",
        "normalized": "String-\u003eString-\u003eString-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eString-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:stringsOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e. Items are comma-separated.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e [String]-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "stringsOption"
      },
      "index": {
        "description": "Define an option of type String This is simple wrapper around option Items are comma-separated",
        "hierarchy": "Options",
        "module": "Options",
        "name": "stringsOption",
        "normalized": "String-\u003eString-\u003e[String]-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003e[String]-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:subcommand",
      "description": {
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e (cmdOpts -\u003e subcmdOpts -\u003e [String] -\u003e action)-\u003e Subcommand cmdOpts action",
        "fct-type": "function",
        "title": "subcommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Options",
        "module": "Options",
        "name": "subcommand",
        "normalized": "String-\u003e(a-\u003eb-\u003e[String]-\u003ec)-\u003eSubcommand a c",
        "package": "options",
        "partial": "",
        "signature": "String-\u003e(cmdOpts-\u003esubcmdOpts-\u003e[String]-\u003eaction)-\u003eSubcommand cmdOpts action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:textOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e Text-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "textOption"
      },
      "index": {
        "description": "Define an option of type Text This is simple wrapper around option",
        "hierarchy": "Options",
        "module": "Options",
        "name": "textOption",
        "normalized": "String-\u003eString-\u003eText-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003eText-\u003eString-\u003eOptionsM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:textsOption",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an option of type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e. This is a simple wrapper around\n \u003ccode\u003e\u003ca\u003eoption\u003c/a\u003e\u003c/code\u003e. Items are comma-separated.\n\u003c/p\u003e",
        "fct-module": "Options",
        "fct-package": "options",
        "fct-signature": "String-\u003e String-\u003e [Text]-\u003e String-\u003e OptionsM ()",
        "fct-type": "function",
        "title": "textsOption"
      },
      "index": {
        "description": "Define an option of type Text This is simple wrapper around option Items are comma-separated",
        "hierarchy": "Options",
        "module": "Options",
        "name": "textsOption",
        "normalized": "String-\u003eString-\u003e[Text]-\u003eString-\u003eOptionsM()",
        "package": "options",
        "partial": "Option",
        "signature": "String-\u003eString-\u003e[Text]-\u003eString-\u003eOptionsM()"
      }
    }
  }
]