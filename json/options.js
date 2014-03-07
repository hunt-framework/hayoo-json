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
        "word": "options"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eoptions\u003c/code\u003e package lets library and application developers easily work\n with command-line options.\n\u003c/p\u003e\u003cp\u003eThe following example is a full program that can accept two options,\n \u003ccode\u003e--message\u003c/code\u003e and \u003ccode\u003e--quiet\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nimport Control.Applicative\nimport Options\n\ndata MainOptions = MainOptions\n    { optMessage :: String\n    , optQuiet :: Bool\n    }\n\ninstance \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e MainOptions where\n    \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e = pure MainOptions\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e \"message\" \"Hello world!\"\n            \"A message to show the user.\"\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e \"quiet\" False\n            \"Whether to be quiet.\"\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e $ \\opts args -\u003e do\n    if optQuiet opts\n        then return ()\n        else putStrLn (optMessage opts)\n\u003c/pre\u003e\u003cpre\u003e$ ./hello\nHello world!\n$ ./hello --message='ciao mondo'\nciao mondo\n$ ./hello --quiet\n$\n\u003c/pre\u003e\u003cp\u003eIn addition, this library will automatically create documentation options\n such as \u003ccode\u003e--help\u003c/code\u003e and \u003ccode\u003e--help-all\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e$ ./hello --help\nHelp Options:\n  -h, --help\n    Show option summary.\n  --help-all\n    Show all help options.\n\nApplication Options:\n  --message :: text\n    A message to show the user.\n    default: \"Hello world!\"\n  --quiet :: bool\n    Whether to be quiet.\n    default: false\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Options",
          "name": "Options",
          "package": "options",
          "source": "src/Options.html",
          "type": "module"
        },
        "index": {
          "description": "The options package lets library and application developers easily work with command-line options The following example is full program that can accept two options message and quiet import Control.Applicative import Options data MainOptions MainOptions optMessage String optQuiet Bool instance Options MainOptions where defineOptions pure MainOptions simpleOption message Hello world message to show the user simpleOption quiet False Whether to be quiet main IO main runCommand opts args do if optQuiet opts then return else putStrLn optMessage opts hello Hello world hello message ciao mondo ciao mondo hello quiet In addition this library will automatically create documentation options such as help and help-all hello help Help Options help Show option summary help-all Show all help options Application Options message text message to show the user default Hello world quiet bool Whether to be quiet default false",
          "hierarchy": "Options",
          "module": "Options",
          "name": "Options",
          "package": "options",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "DefineOptions",
          "package": "options",
          "source": "src/Options.html#DefineOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "DefineOptions",
          "package": "options",
          "partial": "Define Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:DefineOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "Group",
          "package": "options",
          "source": "src/Options-Types.html#Group",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "Group",
          "package": "options",
          "partial": "Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "Option",
          "package": "options",
          "source": "src/Options.html#Option",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "Option",
          "package": "options",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option's type determines how the option will be parsed, and which\n Haskell type the parsed value will be stored as. There are many types\n available, covering most basic types and a few more advanced types.\n\u003c/p\u003e",
          "module": "Options",
          "name": "OptionType",
          "package": "options",
          "source": "src/Options.html#OptionType",
          "type": "data"
        },
        "index": {
          "description": "An option type determines how the option will be parsed and which Haskell type the parsed value will be stored as There are many types available covering most basic types and few more advanced types",
          "hierarchy": "Options",
          "module": "Options",
          "name": "OptionType",
          "package": "options",
          "partial": "Option Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:OptionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions are defined together in a single data type, which will be an\n instance of \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e for details on defining instances of \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "Options",
          "package": "options",
          "source": "src/Options.html#Options",
          "type": "class"
        },
        "index": {
          "description": "Options are defined together in single data type which will be an instance of Options See defineOptions for details on defining instances of Options",
          "hierarchy": "Options",
          "module": "Options",
          "name": "Options",
          "package": "options",
          "partial": "Options",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "Parsed",
          "package": "options",
          "source": "src/Options.html#Parsed",
          "type": "class"
        },
        "index": {
          "description": "See parseOptions and parseSubcommand",
          "hierarchy": "Options",
          "module": "Options",
          "name": "Parsed",
          "package": "options",
          "partial": "Parsed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "ParsedOptions",
          "package": "options",
          "source": "src/Options.html#ParsedOptions",
          "type": "data"
        },
        "index": {
          "description": "See parseOptions",
          "hierarchy": "Options",
          "module": "Options",
          "name": "ParsedOptions",
          "package": "options",
          "partial": "Parsed Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:ParsedOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "ParsedSubcommand",
          "package": "options",
          "source": "src/Options.html#ParsedSubcommand",
          "type": "data"
        },
        "index": {
          "description": "See parseSubcommand",
          "hierarchy": "Options",
          "module": "Options",
          "name": "ParsedSubcommand",
          "package": "options",
          "partial": "Parsed Subcommand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:ParsedSubcommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "SimpleOptionType",
          "package": "options",
          "source": "src/Options.html#SimpleOptionType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "SimpleOptionType",
          "package": "options",
          "partial": "Simple Option Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:SimpleOptionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "Subcommand",
          "package": "options",
          "source": "src/Options.html#Subcommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "Subcommand",
          "package": "options",
          "partial": "Subcommand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#t:Subcommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn options value containing only the default values for each option.\n This is equivalent to the options value when parsing an empty argument\n list.\n\u003c/p\u003e",
          "module": "Options",
          "name": "defaultOptions",
          "package": "options",
          "signature": "opts",
          "source": "src/Options.html#defaultOptions",
          "type": "function"
        },
        "index": {
          "description": "An options value containing only the default values for each option This is equivalent to the options value when parsing an empty argument list",
          "hierarchy": "Options",
          "module": "Options",
          "name": "defaultOptions",
          "package": "options",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a new option in the current options type.\n\u003c/p\u003e\u003cp\u003eAll options must have one or more \u003cem\u003eflags\u003c/em\u003e. Options may also have a\n default value, a description, and a group.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eflags\u003c/em\u003e are how the user specifies an option on the command line. Flags\n may be \u003cem\u003eshort\u003c/em\u003e or \u003cem\u003elong\u003c/em\u003e. See \u003ccode\u003e\u003ca\u003eoptionShortFlags\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e for\n details.\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003edefineOption\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoptionType_word16\u003c/a\u003e\u003c/code\u003e (\\o -\u003e o\n    { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"port\"]\n    , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = 80\n    })\n\u003c/pre\u003e",
          "module": "Options",
          "name": "defineOption",
          "package": "options",
          "signature": "OptionType a -\u003e (Option a -\u003e Option a) -\u003e DefineOptions a",
          "source": "src/Options.html#defineOption",
          "type": "function"
        },
        "index": {
          "description": "Defines new option in the current options type All options must have one or more flags Options may also have default value description and group The flags are how the user specifies an option on the command line Flags may be short or long See optionShortFlags and optionLongFlags for details defineOption optionType word16 optionLongFlags port optionDefault",
          "hierarchy": "Options",
          "module": "Options",
          "name": "defineOption",
          "normalized": "OptionType a-\u003e(Option a-\u003eOption a)-\u003eDefineOptions a",
          "package": "options",
          "partial": "Option",
          "signature": "OptionType a-\u003e(Option a-\u003eOption a)-\u003eDefineOptions a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:defineOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the structure and metadata of the options in this type,\n including their types, flag names, and documentation.\n\u003c/p\u003e\u003cp\u003eOptions with a basic type and a single flag name may be defined\n with \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e. Options with more complex requirements may\n be defined with \u003ccode\u003e\u003ca\u003edefineOption\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNon-option fields in the type may be set using applicative functions\n such as \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOptions may be included from another type by using a nested call to\n \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLibrary authors are encouraged to aggregate their options into a\n few top-level types, so application authors can include it\n easily in their own option definitions.\n\u003c/p\u003e",
          "module": "Options",
          "name": "defineOptions",
          "package": "options",
          "signature": "DefineOptions opts",
          "source": "src/Options.html#defineOptions",
          "type": "method"
        },
        "index": {
          "description": "Defines the structure and metadata of the options in this type including their types flag names and documentation Options with basic type and single flag name may be defined with simpleOption Options with more complex requirements may be defined with defineOption Non-option fields in the type may be set using applicative functions such as pure Options may be included from another type by using nested call to defineOptions Library authors are encouraged to aggregate their options into few top-level types so application authors can include it easily in their own option definitions",
          "hierarchy": "Options",
          "module": "Options",
          "name": "defineOptions",
          "package": "options",
          "partial": "Options",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:defineOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of the group, which is used when printing\n \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
          "module": "Options",
          "name": "groupDescription",
          "package": "options",
          "signature": "Group -\u003e String",
          "source": "src/Options-Types.html#groupDescription",
          "type": "function"
        },
        "index": {
          "description": "description of the group which is used when printing help output",
          "hierarchy": "Options",
          "module": "Options",
          "name": "groupDescription",
          "normalized": "Group-\u003eString",
          "package": "options",
          "partial": "Description",
          "signature": "Group-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:groupDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "groupName",
          "package": "options",
          "signature": "Group -\u003e String",
          "source": "src/Options-Types.html#groupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "groupName",
          "normalized": "Group-\u003eString",
          "package": "options",
          "partial": "Name",
          "signature": "Group-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA short title for the group, which is used when printing\n \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
          "module": "Options",
          "name": "groupTitle",
          "package": "options",
          "signature": "Group -\u003e String",
          "source": "src/Options-Types.html#groupTitle",
          "type": "function"
        },
        "index": {
          "description": "short title for the group which is used when printing help output",
          "hierarchy": "Options",
          "module": "Options",
          "name": "groupTitle",
          "normalized": "Group-\u003eString",
          "package": "options",
          "partial": "Title",
          "signature": "Group-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:groupTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions may have a default value. This will be parsed as if the\n user had entered it on the command line.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionDefault",
          "package": "options",
          "signature": "Option a -\u003e a",
          "source": "src/Options.html#optionDefault",
          "type": "function"
        },
        "index": {
          "description": "Options may have default value This will be parsed as if the user had entered it on the command line",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionDefault",
          "normalized": "Option a-\u003ea",
          "package": "options",
          "partial": "Default",
          "signature": "Option a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option's description is used with the default implementation\n of \u003ccode\u003e--help\u003c/code\u003e. It should be a short string describing what the option\n does.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionDescription",
          "package": "options",
          "signature": "Option a -\u003e String",
          "source": "src/Options.html#optionDescription",
          "type": "function"
        },
        "index": {
          "description": "An option description is used with the default implementation of help It should be short string describing what the option does",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionDescription",
          "normalized": "Option a-\u003eString",
          "package": "options",
          "partial": "Description",
          "signature": "Option a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich group the option is in. See the \"Option groups\" section\n for details.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionGroup",
          "package": "options",
          "signature": "Option a -\u003e Maybe Group",
          "source": "src/Options.html#optionGroup",
          "type": "function"
        },
        "index": {
          "description": "Which group the option is in See the Option groups section for details",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionGroup",
          "normalized": "Option a-\u003eMaybe Group",
          "package": "options",
          "partial": "Group",
          "signature": "Option a-\u003eMaybe Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong flags are multiple characters. When entered by a user, they\n are preceded by two dashes.\n\u003c/p\u003e\u003cp\u003eLong flags may contain letters, numbers, \u003ccode\u003e'-'\u003c/code\u003e, and \u003ccode\u003e'_'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: An option with \u003ccode\u003eoptionLongFlags = [\"port\"]\u003c/code\u003e may be set using:\n\u003c/p\u003e\u003cpre\u003e$ ./app --port 443\n$ ./app --port=443\n\u003c/pre\u003e",
          "module": "Options",
          "name": "optionLongFlags",
          "package": "options",
          "signature": "Option a -\u003e [String]",
          "source": "src/Options.html#optionLongFlags",
          "type": "function"
        },
        "index": {
          "description": "Long flags are multiple characters When entered by user they are preceded by two dashes Long flags may contain letters numbers and Example An option with optionLongFlags port may be set using app port app port",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionLongFlags",
          "normalized": "Option a-\u003e[String]",
          "package": "options",
          "partial": "Long Flags",
          "signature": "Option a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionLongFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort flags are a single character. When entered by a user,\n they are preceded by a dash and possibly other short flags.\n\u003c/p\u003e\u003cp\u003eShort flags must be a letter or a number.\n\u003c/p\u003e\u003cp\u003eExample: An option with \u003ccode\u003eoptionShortFlags = ['p']\u003c/code\u003e may be set using:\n\u003c/p\u003e\u003cpre\u003e$ ./app -p 443\n$ ./app -p443\n\u003c/pre\u003e",
          "module": "Options",
          "name": "optionShortFlags",
          "package": "options",
          "signature": "Option a -\u003e [Char]",
          "source": "src/Options.html#optionShortFlags",
          "type": "function"
        },
        "index": {
          "description": "Short flags are single character When entered by user they are preceded by dash and possibly other short flags Short flags must be letter or number Example An option with optionShortFlags may be set using app app p443",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionShortFlags",
          "normalized": "Option a-\u003e[Char]",
          "package": "options",
          "partial": "Short Flags",
          "signature": "Option a-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionShortFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a new option type with the given name, default, and behavior.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType",
          "package": "options",
          "signature": "String-\u003e val-\u003e (String -\u003e Either String val)-\u003e (val -\u003e String)-\u003e OptionType val",
          "type": "function"
        },
        "index": {
          "description": "Define new option type with the given name default and behavior",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType",
          "normalized": "String-\u003ea-\u003e(String-\u003eEither String a)-\u003e(a-\u003eString)-\u003eOptionType a",
          "package": "options",
          "partial": "Type",
          "signature": "String-\u003eval-\u003e(String-\u003eEither String val)-\u003e(val-\u003eString)-\u003eOptionType val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for options of this type. This will be used\n if \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e is not set when defining the option.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionTypeDefault",
          "package": "options",
          "signature": "OptionType val -\u003e val",
          "source": "src/Options.html#optionTypeDefault",
          "type": "function"
        },
        "index": {
          "description": "The default value for options of this type This will be used if optionDefault is not set when defining the option",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionTypeDefault",
          "normalized": "OptionType a-\u003ea",
          "package": "options",
          "partial": "Type Default",
          "signature": "OptionType val-\u003eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this option type; used in \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionTypeName",
          "package": "options",
          "signature": "OptionType val -\u003e String",
          "source": "src/Options.html#optionTypeName",
          "type": "function"
        },
        "index": {
          "description": "The name of this option type used in help output",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionTypeName",
          "normalized": "OptionType a-\u003eString",
          "package": "options",
          "partial": "Type Name",
          "signature": "OptionType val-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse the given string to an option value. If parsing\n fails, an error message will be returned.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionTypeParse",
          "package": "options",
          "signature": "OptionType val -\u003e String -\u003e Either String val",
          "source": "src/Options.html#optionTypeParse",
          "type": "function"
        },
        "index": {
          "description": "Try to parse the given string to an option value If parsing fails an error message will be returned",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionTypeParse",
          "normalized": "OptionType a-\u003eString-\u003eEither String a",
          "package": "options",
          "partial": "Type Parse",
          "signature": "OptionType val-\u003eString-\u003eEither String val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the value for display; used in \u003ccode\u003e--help\u003c/code\u003e output.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionTypeShow",
          "package": "options",
          "signature": "OptionType val -\u003e val -\u003e String",
          "source": "src/Options.html#optionTypeShow",
          "type": "function"
        },
        "index": {
          "description": "Format the value for display used in help output",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionTypeShow",
          "normalized": "OptionType a-\u003ea-\u003eString",
          "package": "options",
          "partial": "Type Show",
          "signature": "OptionType val-\u003eval-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf not Nothing, then options of this type may be set by a unary\n flag. The option will be parsed as if the given value were set.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionTypeUnary",
          "package": "options",
          "signature": "OptionType val -\u003e Maybe val",
          "source": "src/Options.html#optionTypeUnary",
          "type": "function"
        },
        "index": {
          "description": "If not Nothing then options of this type may be set by unary flag The option will be parsed as if the given value were set",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionTypeUnary",
          "normalized": "OptionType a-\u003eMaybe a",
          "package": "options",
          "partial": "Type Unary",
          "signature": "OptionType val-\u003eMaybe val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionTypeUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option's value must be either\n \u003ccode\u003e\"true\"\u003c/code\u003e or \u003ccode\u003e\"false\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBoolean options are unary, which means that their value is optional when\n specified on the command line. If a flag is present, the option is set to\n True.\n\u003c/p\u003e\u003cpre\u003e$ ./app -q\n$ ./app --quiet\n\u003c/pre\u003e\u003cp\u003eBoolean options may still be specified explicitly by using long flags with\n the \u003ccode\u003e--flag=value\u003c/code\u003e format. This is the only way to set a unary flag to\n \u003ccode\u003e\"false\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e$ ./app --quiet=true\n$ ./app --quiet=false\n\u003c/pre\u003e",
          "module": "Options",
          "name": "optionType_bool",
          "package": "options",
          "signature": "OptionType Bool",
          "source": "src/Options.html#optionType_bool",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Bool The option value must be either true or false Boolean options are unary which means that their value is optional when specified on the command line If flag is present the option is set to True app app quiet Boolean options may still be specified explicitly by using long flags with the flag value format This is the only way to set unary flag to false app quiet true app quiet false",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_bool",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a number. Due to\n the imprecision of floating-point math, the stored value might not exactly\n match the user's input. If the user's input is out of range for the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type, it will be stored as \u003ccode\u003eInfinity\u003c/code\u003e or \u003ccode\u003e-Infinity\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_double",
          "package": "options",
          "signature": "OptionType Double",
          "source": "src/Options.html#optionType_double",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Double The option value must be number Due to the imprecision of floating-point math the stored value might not exactly match the user input If the user input is out of range for the Double type it will be stored as Infinity or Infinity",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_double",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as one of a set of possible values. The type must be a\n bounded enumeration, and the type's \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance will be used to\n implement the parser.\n\u003c/p\u003e\u003cp\u003eThis is a simplistic implementation, useful for quick scripts. Users with\n more complex requirements for enum parsing are encouraged to define their\n own option types using \u003ccode\u003e\u003ca\u003eoptionType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\ndata Action = Hello | Goodbye\n    deriving (Bounded, Enum, Show)\n\ndata MainOptions = MainOptions { optAction :: Action }\n\ninstance \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e MainOptions where\n    \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e = pure MainOptions\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003edefineOption\u003c/a\u003e\u003c/code\u003e (optionType_enum \"action\") (\\o -\u003e o\n            { \u003ccode\u003e\u003ca\u003eoptionLongFlags\u003c/a\u003e\u003c/code\u003e = [\"action\"]\n            , \u003ccode\u003e\u003ca\u003eoptionDefault\u003c/a\u003e\u003c/code\u003e = Hello\n            })\n\nmain = \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e $ \\opts args -\u003e do\n    putStrLn (\"Running action \" ++ show (optAction opts))\n\u003c/pre\u003e\u003cpre\u003e$ ./app\nRunning action Hello\n$ ./app --action=Goodbye\nRunning action Goodbye\n\u003c/pre\u003e",
          "module": "Options",
          "name": "optionType_enum",
          "package": "options",
          "signature": "String-\u003e OptionType a",
          "type": "function"
        },
        "index": {
          "description": "Store an option as one of set of possible values The type must be bounded enumeration and the type Show instance will be used to implement the parser This is simplistic implementation useful for quick scripts Users with more complex requirements for enum parsing are encouraged to define their own option types using optionType data Action Hello Goodbye deriving Bounded Enum Show data MainOptions MainOptions optAction Action instance Options MainOptions where defineOptions pure MainOptions defineOption optionType enum action optionLongFlags action optionDefault Hello main runCommand opts args do putStrLn Running action show optAction opts app Running action Hello app action Goodbye Running action Goodbye",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_enum",
          "normalized": "String-\u003eOptionType a",
          "package": "options",
          "partial": "Type",
          "signature": "String-\u003eOptionType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a number. Due to\n the imprecision of floating-point math, the stored value might not exactly\n match the user's input. If the user's input is out of range for the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type, it will be stored as \u003ccode\u003eInfinity\u003c/code\u003e or \u003ccode\u003e-Infinity\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_float",
          "package": "options",
          "signature": "OptionType Float",
          "source": "src/Options.html#optionType_float",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Float The option value must be number Due to the imprecision of floating-point math the stored value might not exactly match the user input If the user input is out of range for the Float type it will be stored as Infinity or Infinity",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_float",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_int",
          "package": "options",
          "signature": "OptionType Int",
          "source": "src/Options.html#optionType_int",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Int The option value must be an integer such that minBound maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_int",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_int16",
          "package": "options",
          "signature": "OptionType Int16",
          "source": "src/Options.html#optionType_int16",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Int16 The option value must be an integer such that minBound maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_int16",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_int16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_int32",
          "package": "options",
          "signature": "OptionType Int32",
          "source": "src/Options.html#optionType_int32",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Int32 The option value must be an integer such that minBound maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_int32",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_int64",
          "package": "options",
          "signature": "OptionType Int64",
          "source": "src/Options.html#optionType_int64",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Int64 The option value must be an integer such that minBound maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_int64",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer \u003cem\u003en\u003c/em\u003e\n such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_int8",
          "package": "options",
          "signature": "OptionType Int8",
          "source": "src/Options.html#optionType_int8",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Int8 The option value must be an integer such that minBound maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_int8",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be an integer.\n There is no minimum or maximum value.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_integer",
          "package": "options",
          "signature": "OptionType Integer",
          "source": "src/Options.html#optionType_integer",
          "type": "function"
        },
        "index": {
          "description": "Store an option as an Integer The option value must be an integer There is no minimum or maximum value",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_integer",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a list, using another option type for the elements.\n The separator should be a character that will not occur within the values,\n such as a comma or semicolon.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_list",
          "package": "options",
          "signature": "Char-\u003e OptionType a-\u003e OptionType [a]",
          "type": "function"
        },
        "index": {
          "description": "Store an option as list using another option type for the elements The separator should be character that will not occur within the values such as comma or semicolon",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_list",
          "normalized": "Char-\u003eOptionType a-\u003eOptionType[a]",
          "package": "options",
          "partial": "Type",
          "signature": "Char-\u003eOptionType a-\u003eOptionType[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, using other option types for the keys and\n values.\n\u003c/p\u003e\u003cp\u003eThe item separator is used to separate key/value pairs from eachother. It\n should be a character that will not occur within either the keys or values.\n\u003c/p\u003e\u003cp\u003eThe value separator is used to separate the key from the value. It should\n be a character that will not occur within the keys. It may occur within the\n values.\n\u003c/p\u003e\u003cp\u003eDuplicate keys in the input are permitted. The final value for each key is\n stored.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_map",
          "package": "options",
          "signature": "Char-\u003e Char-\u003e OptionType k-\u003e OptionType v-\u003e OptionType (Map k v)",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Map using other option types for the keys and values The item separator is used to separate key value pairs from eachother It should be character that will not occur within either the keys or values The value separator is used to separate the key from the value It should be character that will not occur within the keys It may occur within the values Duplicate keys in the input are permitted The final value for each key is stored",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_map",
          "normalized": "Char-\u003eChar-\u003eOptionType a-\u003eOptionType b-\u003eOptionType(Map a b)",
          "package": "options",
          "partial": "Type",
          "signature": "Char-\u003eChar-\u003eOptionType k-\u003eOptionType v-\u003eOptionType(Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of another type. The value will be\n \u003ccode\u003eNothing\u003c/code\u003e if the option is set to an empty string.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_maybe",
          "package": "options",
          "signature": "OptionType a -\u003e OptionType (Maybe a)",
          "source": "src/Options.html#optionType_maybe",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Maybe of another type The value will be Nothing if the option is set to an empty string",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_maybe",
          "normalized": "OptionType a-\u003eOptionType(Maybe a)",
          "package": "options",
          "partial": "Type",
          "signature": "OptionType a-\u003eOptionType(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, using another option type for the\n elements. The separator should be a character that will not occur within\n the values, such as a comma or semicolon.\n\u003c/p\u003e\u003cp\u003eDuplicate elements in the input are permitted.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_set",
          "package": "options",
          "signature": "Char-\u003e OptionType a-\u003e OptionType (Set a)",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Set using another option type for the elements The separator should be character that will not occur within the values such as comma or semicolon Duplicate elements in the input are permitted",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_set",
          "normalized": "Char-\u003eOptionType a-\u003eOptionType(Set a)",
          "package": "options",
          "partial": "Type",
          "signature": "Char-\u003eOptionType a-\u003eOptionType(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option value as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The value is decoded to Unicode\n first, if needed. The value may contain non-Unicode bytes, in which case\n they will be stored using GHC 7.4's encoding for mixed-use strings.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_string",
          "package": "options",
          "signature": "OptionType String",
          "source": "src/Options.html#optionType_string",
          "type": "function"
        },
        "index": {
          "description": "Store an option value as String The value is decoded to Unicode first if needed The value may contain non-Unicode bytes in which case they will be stored using GHC encoding for mixed-use strings",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_string",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_word",
          "package": "options",
          "signature": "OptionType Word",
          "source": "src/Options.html#optionType_word",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Word The option value must be positive integer such that maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_word",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_word16",
          "package": "options",
          "signature": "OptionType Word16",
          "source": "src/Options.html#optionType_word16",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Word16 The option value must be positive integer such that maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_word16",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_word16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_word32",
          "package": "options",
          "signature": "OptionType Word32",
          "source": "src/Options.html#optionType_word32",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Word32 The option value must be positive integer such that maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_word32",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_word64",
          "package": "options",
          "signature": "OptionType Word64",
          "source": "src/Options.html#optionType_word64",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Word64 The option value must be positive integer such that maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_word64",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an option as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The option value must be a positive\n integer \u003cem\u003en\u003c/em\u003e such that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "optionType_word8",
          "package": "options",
          "signature": "OptionType Word8",
          "source": "src/Options.html#optionType_word8",
          "type": "function"
        },
        "index": {
          "description": "Store an option as Word8 The option value must be positive integer such that maxBound",
          "hierarchy": "Options",
          "module": "Options",
          "name": "optionType_word8",
          "package": "options",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:optionType_word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert a list of command-line arguments into an options\n value. This can be used by application developers who want finer control\n over error handling, or who want to perform additional validation on the\n options value.\n\u003c/p\u003e\u003cp\u003eThe argument list must be in the same encoding as the result of\n \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedArguments\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to inspect the result of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\ngetOptionsOrDie :: Options a =\u003e IO a\ngetOptionsOrDie = do\n    argv \u003c- System.Environment.getArgs\n    let parsed = \u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e argv\n    case \u003ccode\u003e\u003ca\u003eparsedOptions\u003c/a\u003e\u003c/code\u003e parsed of\n        Just opts -\u003e return opts\n        Nothing -\u003e case \u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e parsed of\n            Just err -\u003e do\n                hPutStrLn stderr (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                hPutStrLn stderr err\n                exitFailure\n            Nothing -\u003e do\n                hPutStr stdout (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                exitSuccess\n\u003c/pre\u003e",
          "module": "Options",
          "name": "parseOptions",
          "package": "options",
          "signature": "[String] -\u003e ParsedOptions opts",
          "source": "src/Options.html#parseOptions",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert list of command-line arguments into an options value This can be used by application developers who want finer control over error handling or who want to perform additional validation on the options value The argument list must be in the same encoding as the result of getArgs Use parsedOptions parsedArguments parsedError and parsedHelp to inspect the result of parseOptions Example getOptionsOrDie Options IO getOptionsOrDie do argv System.Environment.getArgs let parsed parseOptions argv case parsedOptions parsed of Just opts return opts Nothing case parsedError parsed of Just err do hPutStrLn stderr parsedHelp parsed hPutStrLn stderr err exitFailure Nothing do hPutStr stdout parsedHelp parsed exitSuccess",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parseOptions",
          "normalized": "[String]-\u003eParsedOptions a",
          "package": "options",
          "partial": "Options",
          "signature": "[String]-\u003eParsedOptions opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to convert a list of command-line arguments into a subcommand\n action. This can be used by application developers who want finer control\n over error handling, or who want subcommands that run in an unusual monad.\n\u003c/p\u003e\u003cp\u003eThe argument list must be in the same encoding as the result of\n \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to inspect the\n result of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nrunSubcommand :: Options cmdOpts =\u003e [Subcommand cmdOpts (IO a)] -\u003e IO a\nrunSubcommand subcommands = do\n    argv \u003c- System.Environment.getArgs\n    let parsed = \u003ccode\u003e\u003ca\u003eparseSubcommand\u003c/a\u003e\u003c/code\u003e subcommands argv\n    case \u003ccode\u003e\u003ca\u003eparsedSubcommand\u003c/a\u003e\u003c/code\u003e parsed of\n        Just cmd -\u003e cmd\n        Nothing -\u003e case \u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e parsed of\n            Just err -\u003e do\n                hPutStrLn stderr (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                hPutStrLn stderr err\n                exitFailure\n            Nothing -\u003e do\n                hPutStr stdout (\u003ccode\u003e\u003ca\u003eparsedHelp\u003c/a\u003e\u003c/code\u003e parsed)\n                exitSuccess\n\u003c/pre\u003e",
          "module": "Options",
          "name": "parseSubcommand",
          "package": "options",
          "signature": "[Subcommand cmdOpts action] -\u003e [String] -\u003e ParsedSubcommand action",
          "source": "src/Options.html#parseSubcommand",
          "type": "function"
        },
        "index": {
          "description": "Attempt to convert list of command-line arguments into subcommand action This can be used by application developers who want finer control over error handling or who want subcommands that run in an unusual monad The argument list must be in the same encoding as the result of getArgs Use parsedSubcommand parsedError and parsedHelp to inspect the result of parseSubcommand Example runSubcommand Options cmdOpts Subcommand cmdOpts IO IO runSubcommand subcommands do argv System.Environment.getArgs let parsed parseSubcommand subcommands argv case parsedSubcommand parsed of Just cmd cmd Nothing case parsedError parsed of Just err do hPutStrLn stderr parsedHelp parsed hPutStrLn stderr err exitFailure Nothing do hPutStr stdout parsedHelp parsed exitSuccess",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parseSubcommand",
          "normalized": "[Subcommand a b]-\u003e[String]-\u003eParsedSubcommand b",
          "package": "options",
          "partial": "Subcommand",
          "signature": "[Subcommand cmdOpts action]-\u003e[String]-\u003eParsedSubcommand action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parseSubcommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet command-line arguments remaining after parsing options. The arguments\n are unchanged from the original argument list, and have not been decoded\n or otherwise transformed.\n\u003c/p\u003e",
          "module": "Options",
          "name": "parsedArguments",
          "package": "options",
          "signature": "ParsedOptions opts -\u003e [String]",
          "source": "src/Options.html#parsedArguments",
          "type": "function"
        },
        "index": {
          "description": "Get command-line arguments remaining after parsing options The arguments are unchanged from the original argument list and have not been decoded or otherwise transformed",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parsedArguments",
          "normalized": "ParsedOptions a-\u003e[String]",
          "package": "options",
          "partial": "Arguments",
          "signature": "ParsedOptions opts-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the error that prevented options from being parsed from argv,\n or \u003ccode\u003eNothing\u003c/code\u003e if no error was detected.\n\u003c/p\u003e",
          "module": "Options",
          "name": "parsedError",
          "package": "options",
          "signature": "a -\u003e Maybe String",
          "source": "src/Options.html#parsedError",
          "type": "function"
        },
        "index": {
          "description": "Get the error that prevented options from being parsed from argv or Nothing if no error was detected",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parsedError",
          "normalized": "a-\u003eMaybe String",
          "package": "options",
          "partial": "Error",
          "signature": "a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a help message to show the user. If the arguments included\n a help flag, this will be a message appropriate to that flag.\n Otherwise, it is a summary (equivalent to \u003ccode\u003e--help\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is always a non-empty string, regardless of whether the parse\n succeeded or failed. If you need to perform additional validation\n on the options value, this message can be displayed if validation\n fails.\n\u003c/p\u003e",
          "module": "Options",
          "name": "parsedHelp",
          "package": "options",
          "signature": "a -\u003e String",
          "source": "src/Options.html#parsedHelp",
          "type": "function"
        },
        "index": {
          "description": "Get help message to show the user If the arguments included help flag this will be message appropriate to that flag Otherwise it is summary equivalent to help This is always non-empty string regardless of whether the parse succeeded or failed If you need to perform additional validation on the options value this message can be displayed if validation fails",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parsedHelp",
          "normalized": "a-\u003eString",
          "package": "options",
          "partial": "Help",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the options value that was parsed from argv, or \u003ccode\u003eNothing\u003c/code\u003e if the\n arguments could not be converted into options.\n\u003c/p\u003e\u003cp\u003eNote: This function return \u003ccode\u003eNothing\u003c/code\u003e if the user provided a help flag. To\n check whether an error occured during parsing, check the value of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "parsedOptions",
          "package": "options",
          "signature": "ParsedOptions opts -\u003e Maybe opts",
          "source": "src/Options.html#parsedOptions",
          "type": "function"
        },
        "index": {
          "description": "Get the options value that was parsed from argv or Nothing if the arguments could not be converted into options Note This function return Nothing if the user provided help flag To check whether an error occured during parsing check the value of parsedError",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parsedOptions",
          "normalized": "ParsedOptions a-\u003eMaybe a",
          "package": "options",
          "partial": "Options",
          "signature": "ParsedOptions opts-\u003eMaybe opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the subcommand action that was parsed from argv, or \u003ccode\u003eNothing\u003c/code\u003e if the\n arguments could not be converted into a valid action.\n\u003c/p\u003e\u003cp\u003eNote: This function return \u003ccode\u003eNothing\u003c/code\u003e if the user provided a help flag. To\n check whether an error occured during parsing, check the value of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparsedError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options",
          "name": "parsedSubcommand",
          "package": "options",
          "signature": "ParsedSubcommand action -\u003e Maybe action",
          "source": "src/Options.html#parsedSubcommand",
          "type": "function"
        },
        "index": {
          "description": "Get the subcommand action that was parsed from argv or Nothing if the arguments could not be converted into valid action Note This function return Nothing if the user provided help flag To check whether an error occured during parsing check the value of parsedError",
          "hierarchy": "Options",
          "module": "Options",
          "name": "parsedSubcommand",
          "normalized": "ParsedSubcommand a-\u003eMaybe a",
          "package": "options",
          "partial": "Subcommand",
          "signature": "ParsedSubcommand action-\u003eMaybe action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:parsedSubcommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e, and attempt to parse it into a\n valid value of an \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e type plus a list of left-over arguments. The\n options and arguments are then passed to the provided computation.\n\u003c/p\u003e\u003cp\u003eIf parsing fails, this computation will print an error and call\n \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf parsing succeeds, and the user has passed a \u003ccode\u003e--help\u003c/code\u003e flag, and the\n developer is using the default help flag definitions, then this computation\n will print documentation and call \u003ccode\u003e\u003ca\u003eexitSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e for details on subcommand support.\n\u003c/p\u003e",
          "module": "Options",
          "name": "runCommand",
          "package": "options",
          "signature": "(opts -\u003e [String] -\u003e m a) -\u003e m a",
          "source": "src/Options.html#runCommand",
          "type": "function"
        },
        "index": {
          "description": "Retrieve getArgs and attempt to parse it into valid value of an Options type plus list of left-over arguments The options and arguments are then passed to the provided computation If parsing fails this computation will print an error and call exitFailure If parsing succeeds and the user has passed help flag and the developer is using the default help flag definitions then this computation will print documentation and call exitSuccess See runSubcommand for details on subcommand support",
          "hierarchy": "Options",
          "module": "Options",
          "name": "runCommand",
          "normalized": "(a-\u003e[String]-\u003eb c)-\u003eb c",
          "package": "options",
          "partial": "Command",
          "signature": "(opts-\u003e[String]-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:runCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to run applications that are split into subcommands.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e to define available commands and their actions, then pass\n them to this computation to select one and run it. If the user specifies\n an invalid subcommand, this computation will print an error and call\n \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e. In handling of invalid flags or \u003ccode\u003e--help\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e\n acts like \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\nimport Control.Applicative\nimport Control.Monad (unless)\nimport Options\n\ndata MainOptions = MainOptions { optQuiet :: Bool }\ninstance \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e MainOptions where\n    \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e = pure MainOptions\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e \"quiet\" False \"Whether to be quiet.\"\n\ndata HelloOpts = HelloOpts { optHello :: String }\ninstance \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e HelloOpts where\n    \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e = pure HelloOpts\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e \"hello\" \"Hello!\" \"How to say hello.\"\n\ndata ByeOpts = ByeOpts { optName :: String }\ninstance \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e ByeOpts where\n    \u003ccode\u003e\u003ca\u003edefineOptions\u003c/a\u003e\u003c/code\u003e = pure ByeOpts\n        \u003c*\u003e \u003ccode\u003e\u003ca\u003esimpleOption\u003c/a\u003e\u003c/code\u003e \"name\" \"\" \"The user's name.\"\n\nhello :: MainOptions -\u003e HelloOpts -\u003e [String] -\u003e IO ()\nhello mainOpts opts args = unless (optQuiet mainOpts) $ do\n    putStrLn (optHello opts)\n\nbye :: MainOptions -\u003e ByeOpts -\u003e [String] -\u003e IO ()\nbye mainOpts opts args = unless (optQuiet mainOpts) $ do\n    putStrLn (\"Good bye \" ++ optName opts)\n\nmain :: IO ()\nmain = \u003ccode\u003e\u003ca\u003erunSubcommand\u003c/a\u003e\u003c/code\u003e\n    [ \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e \"hello\" hello\n    , \u003ccode\u003e\u003ca\u003esubcommand\u003c/a\u003e\u003c/code\u003e \"bye\" bye\n    ]\n\u003c/pre\u003e\u003cpre\u003e$ ./app hello\nHello!\n$ ./app hello --hello='Allo!'\nAllo!\n$ ./app bye\nGood bye \n$ ./app bye --name='Alice'\nGood bye Alice\n\u003c/pre\u003e",
          "module": "Options",
          "name": "runSubcommand",
          "package": "options",
          "signature": "[Subcommand opts (m a)] -\u003e m a",
          "source": "src/Options.html#runSubcommand",
          "type": "function"
        },
        "index": {
          "description": "Used to run applications that are split into subcommands Use subcommand to define available commands and their actions then pass them to this computation to select one and run it If the user specifies an invalid subcommand this computation will print an error and call exitFailure In handling of invalid flags or help runSubcommand acts like runCommand import Control.Applicative import Control.Monad unless import Options data MainOptions MainOptions optQuiet Bool instance Options MainOptions where defineOptions pure MainOptions simpleOption quiet False Whether to be quiet data HelloOpts HelloOpts optHello String instance Options HelloOpts where defineOptions pure HelloOpts simpleOption hello Hello How to say hello data ByeOpts ByeOpts optName String instance Options ByeOpts where defineOptions pure ByeOpts simpleOption name The user name hello MainOptions HelloOpts String IO hello mainOpts opts args unless optQuiet mainOpts do putStrLn optHello opts bye MainOptions ByeOpts String IO bye mainOpts opts args unless optQuiet mainOpts do putStrLn Good bye optName opts main IO main runSubcommand subcommand hello hello subcommand bye bye app hello Hello app hello hello Allo Allo app bye Good bye app bye name Alice Good bye Alice",
          "hierarchy": "Options",
          "module": "Options",
          "name": "runSubcommand",
          "normalized": "[Subcommand a(b c)]-\u003eb c",
          "package": "options",
          "partial": "Subcommand",
          "signature": "[Subcommand opts(m a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:runSubcommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a new option in the current options type.\n\u003c/p\u003e",
          "module": "Options",
          "name": "simpleOption",
          "package": "options",
          "signature": "String -\u003e a -\u003e String -\u003e DefineOptions a",
          "source": "src/Options.html#simpleOption",
          "type": "function"
        },
        "index": {
          "description": "Defines new option in the current options type",
          "hierarchy": "Options",
          "module": "Options",
          "name": "simpleOption",
          "normalized": "String-\u003ea-\u003eString-\u003eDefineOptions a",
          "package": "options",
          "partial": "Option",
          "signature": "String-\u003ea-\u003eString-\u003eDefineOptions a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:simpleOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "simpleOptionType",
          "package": "options",
          "signature": "OptionType a",
          "source": "src/Options.html#simpleOptionType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "simpleOptionType",
          "package": "options",
          "partial": "Option Type",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:simpleOptionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options",
          "name": "subcommand",
          "package": "options",
          "signature": "String-\u003e (cmdOpts -\u003e subcmdOpts -\u003e [String] -\u003e action)-\u003e Subcommand cmdOpts action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options",
          "module": "Options",
          "name": "subcommand",
          "normalized": "String-\u003e(a-\u003eb-\u003e[String]-\u003ec)-\u003eSubcommand a c",
          "package": "options",
          "signature": "String-\u003e(cmdOpts-\u003esubcmdOpts-\u003e[String]-\u003eaction)-\u003eSubcommand cmdOpts action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/options/docs/Options.html#v:subcommand"
      }
    }
  ]
]