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
        "word": "argparser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePreprocess args from a list of words to a pair containing positional args/flag arguments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.ArgsProcess",
          "name": "ArgsProcess",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-ArgsProcess.html",
          "type": "module"
        },
        "index": {
          "description": "Preprocess args from list of words to pair containing positional args flag arguments",
          "hierarchy": "System Console ArgParser ArgsProcess",
          "module": "System.Console.ArgParser.ArgsProcess",
          "name": "ArgsProcess",
          "package": "argparser",
          "partial": "Args Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-ArgsProcess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate positional arguments from flag arguments\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.ArgsProcess",
          "name": "preprocess",
          "package": "argparser",
          "signature": "Args -\u003e NiceArgs",
          "source": "src/System-Console-ArgParser-ArgsProcess.html#preprocess",
          "type": "function"
        },
        "index": {
          "description": "Separate positional arguments from flag arguments",
          "hierarchy": "System Console ArgParser ArgsProcess",
          "module": "System.Console.ArgParser.ArgsProcess",
          "name": "preprocess",
          "normalized": "Args-\u003eNiceArgs",
          "package": "argparser",
          "signature": "Args-\u003eNiceArgs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-ArgsProcess.html#v:preprocess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase types shared by several EasyConsole modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "BaseType",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html",
          "type": "module"
        },
        "index": {
          "description": "Base types shared by several EasyConsole modules",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "BaseType",
          "package": "argparser",
          "partial": "Base Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple command line arg\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Arg",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#Arg",
          "type": "type"
        },
        "index": {
          "description": "Simple command line arg",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Arg",
          "package": "argparser",
          "partial": "Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of args provided\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Args",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#Args",
          "type": "type"
        },
        "index": {
          "description": "List of args provided",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Args",
          "package": "argparser",
          "partial": "Args",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command line application, with a parser and a description\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "CmdLnInterface",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "data"
        },
        "index": {
          "description": "command line application with parser and description",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "CmdLnInterface",
          "package": "argparser",
          "partial": "Cmd Ln Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:CmdLnInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag collection with corresponding args\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Flags",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#Flags",
          "type": "type"
        },
        "index": {
          "description": "Flag collection with corresponding args",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Flags",
          "package": "argparser",
          "partial": "Flags",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured args to be parsed.\n   Pair of (positionnal arguments, flag arguments)\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "NiceArgs",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#NiceArgs",
          "type": "type"
        },
        "index": {
          "description": "Structured args to be parsed Pair of positionnal arguments flag arguments",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "NiceArgs",
          "package": "argparser",
          "partial": "Nice Args",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:NiceArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure describing a parameter\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParamDescr",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "data"
        },
        "index": {
          "description": "Data structure describing parameter",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParamDescr",
          "package": "argparser",
          "partial": "Param Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:ParamDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing the result of the parse.\n   Right val in case of success or\n   Left msg if there was an error.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParseResult",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#ParseResult",
          "type": "type"
        },
        "index": {
          "description": "Type representing the result of the parse Right val in case of success or Left msg if there was an error",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParseResult",
          "package": "argparser",
          "partial": "Parse Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:ParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser actual function\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Parser",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "parser actual function",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Parser",
          "package": "argparser",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a full parameter spec\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParserSpec",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#ParserSpec",
          "type": "data"
        },
        "index": {
          "description": "Represent full parameter spec",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParserSpec",
          "package": "argparser",
          "partial": "Parser Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:ParserSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special action with more possibilities.\n   The full arg list will be provided,\n   with the command line spec itself.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "SpecialAction",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#SpecialAction",
          "type": "type"
        },
        "index": {
          "description": "special action with more possibilities The full arg list will be provided with the command line spec itself",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "SpecialAction",
          "package": "argparser",
          "partial": "Special Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:SpecialAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special parser allowing to\n   perform standard actions.\n   Used for version\u003cem\u003ehelp\u003c/em\u003esubparsers.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "SpecialFlag",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-BaseType.html#SpecialFlag",
          "type": "type"
        },
        "index": {
          "description": "special parser allowing to perform standard actions Used for version help subparsers",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "SpecialFlag",
          "package": "argparser",
          "partial": "Special Flag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#t:SpecialFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "CmdLnInterface",
          "package": "argparser",
          "signature": "CmdLnInterface",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "CmdLnInterface",
          "package": "argparser",
          "partial": "Cmd Ln Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:CmdLnInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParamDescr",
          "package": "argparser",
          "signature": "ParamDescr",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParamDescr",
          "package": "argparser",
          "partial": "Param Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:ParamDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "Parser",
          "package": "argparser",
          "signature": "Parser (NiceArgs -\u003e (ParseResult a, NiceArgs))",
          "source": "src/System-Console-ArgParser-BaseType.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "Parser",
          "normalized": "Parser(NiceArgs-\u003e(ParseResult a,NiceArgs))",
          "package": "argparser",
          "partial": "Parser",
          "signature": "Parser(NiceArgs-\u003e(ParseResult a,NiceArgs))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParserSpec",
          "package": "argparser",
          "signature": "ParserSpec",
          "source": "src/System-Console-ArgParser-BaseType.html#ParserSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "ParserSpec",
          "package": "argparser",
          "partial": "Parser Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:ParserSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategory of parameter (optional/mandatory)\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argCategory",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "description": "Category of parameter optional mandatory",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argCategory",
          "package": "argparser",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the parameter\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argDescr",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "description": "Description of the parameter",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argDescr",
          "package": "argparser",
          "partial": "Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat of the parameter to provide\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argFormat",
          "package": "argparser",
          "signature": "String -\u003e String",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "description": "Format of the parameter to provide",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argFormat",
          "normalized": "String-\u003eString",
          "package": "argparser",
          "partial": "Format",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the parameter in the usage\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argMetaVar",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "description": "Description of the parameter in the usage",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argMetaVar",
          "package": "argparser",
          "partial": "Meta Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argMetaVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a short description of the input format\n   of a parameter.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argUsage",
          "package": "argparser",
          "signature": "ParamDescr -\u003e String",
          "source": "src/System-Console-ArgParser-BaseType.html#argUsage",
          "type": "function"
        },
        "index": {
          "description": "Returns short description of the input format of parameter",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argUsage",
          "normalized": "ParamDescr-\u003eString",
          "package": "argparser",
          "partial": "Usage",
          "signature": "ParamDescr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort description of the parameter format\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argUsageFmt",
          "package": "argparser",
          "signature": "String -\u003e String",
          "source": "src/System-Console-ArgParser-BaseType.html#ParamDescr",
          "type": "function"
        },
        "index": {
          "description": "Short description of the parameter format",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "argUsageFmt",
          "normalized": "String-\u003eString",
          "package": "argparser",
          "partial": "Usage Fmt",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:argUsageFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe argument parser\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "cmdArgParser",
          "package": "argparser",
          "signature": "ParserSpec a",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "The argument parser",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "cmdArgParser",
          "package": "argparser",
          "partial": "Arg Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:cmdArgParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional description\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppDescr",
          "package": "argparser",
          "signature": "Maybe String",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "Optional description",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppDescr",
          "package": "argparser",
          "partial": "App Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getAppDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional epilog\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppEpilog",
          "package": "argparser",
          "signature": "Maybe String",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "Optional epilog",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppEpilog",
          "package": "argparser",
          "partial": "App Epilog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getAppEpilog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe application name.\n   Usally the binary name.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppName",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "The application name Usally the binary name",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppName",
          "package": "argparser",
          "partial": "App Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getAppName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional application version\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppVersion",
          "package": "argparser",
          "signature": "Maybe String",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "Optional application version",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getAppVersion",
          "package": "argparser",
          "partial": "App Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getAppVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a long description of the input format\n   of a parameter.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getArgFormat",
          "package": "argparser",
          "signature": "ParamDescr -\u003e String",
          "source": "src/System-Console-ArgParser-BaseType.html#getArgFormat",
          "type": "function"
        },
        "index": {
          "description": "Returns long description of the input format of parameter",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getArgFormat",
          "normalized": "ParamDescr-\u003eString",
          "package": "argparser",
          "partial": "Arg Format",
          "signature": "ParamDescr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getArgFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "getParserFun",
          "package": "argparser",
          "signature": "Parser a",
          "source": "src/System-Console-ArgParser-BaseType.html#ParserSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getParserFun",
          "package": "argparser",
          "partial": "Parser Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getParserFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.BaseType",
          "name": "getParserParams",
          "package": "argparser",
          "signature": "[ParamDescr]",
          "source": "src/System-Console-ArgParser-BaseType.html#ParserSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "getParserParams",
          "normalized": "[ParamDescr]",
          "package": "argparser",
          "partial": "Parser Params",
          "signature": "[ParamDescr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:getParserParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe special flags\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.BaseType",
          "name": "specialFlags",
          "package": "argparser",
          "signature": "[SpecialFlag a]",
          "source": "src/System-Console-ArgParser-BaseType.html#CmdLnInterface",
          "type": "function"
        },
        "index": {
          "description": "The special flags",
          "hierarchy": "System Console ArgParser BaseType",
          "module": "System.Console.ArgParser.BaseType",
          "name": "specialFlags",
          "normalized": "[SpecialFlag a]",
          "package": "argparser",
          "partial": "Flags",
          "signature": "[SpecialFlag a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-BaseType.html#v:specialFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule containing helpers to print information\nabout a parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.Format",
          "name": "Format",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Format.html",
          "type": "module"
        },
        "index": {
          "description": "Module containing helpers to print information about parser",
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "Format",
          "package": "argparser",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification of the help layout\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Format",
          "name": "CmdLineFormat",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Format.html#CmdLineFormat",
          "type": "data"
        },
        "index": {
          "description": "Specification of the help layout",
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "CmdLineFormat",
          "package": "argparser",
          "partial": "Cmd Line Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#t:CmdLineFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Format",
          "name": "CmdLineFormat",
          "package": "argparser",
          "signature": "CmdLineFormat",
          "source": "src/System-Console-ArgParser-Format.html#CmdLineFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "CmdLineFormat",
          "package": "argparser",
          "partial": "Cmd Line Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:CmdLineFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault specification for the help layout\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Format",
          "name": "defaultFormat",
          "package": "argparser",
          "signature": "CmdLineFormat",
          "source": "src/System-Console-ArgParser-Format.html#defaultFormat",
          "type": "function"
        },
        "index": {
          "description": "Default specification for the help layout",
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "defaultFormat",
          "package": "argparser",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:defaultFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Format",
          "name": "keyIndentWidth",
          "package": "argparser",
          "signature": "Int",
          "source": "src/System-Console-ArgParser-Format.html#CmdLineFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "keyIndentWidth",
          "package": "argparser",
          "partial": "Indent Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:keyIndentWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Format",
          "name": "maxDescrWidth",
          "package": "argparser",
          "signature": "Int",
          "source": "src/System-Console-ArgParser-Format.html#CmdLineFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "maxDescrWidth",
          "package": "argparser",
          "partial": "Descr Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:maxDescrWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Format",
          "name": "maxKeyWidth",
          "package": "argparser",
          "signature": "Int",
          "source": "src/System-Console-ArgParser-Format.html#CmdLineFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "maxKeyWidth",
          "package": "argparser",
          "partial": "Key Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:maxKeyWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a long usage such as\n\u003c/p\u003e\u003cpre\u003e\n   foo bar [bay]\n\u003c/pre\u003e",
          "module": "System.Console.ArgParser.Format",
          "name": "showCmdLineAppUsage",
          "package": "argparser",
          "signature": "CmdLineFormat -\u003e CmdLnInterface a -\u003e String",
          "source": "src/System-Console-ArgParser-Format.html#showCmdLineAppUsage",
          "type": "function"
        },
        "index": {
          "description": "Prints long usage such as foo bar bay",
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "showCmdLineAppUsage",
          "normalized": "CmdLineFormat-\u003eCmdLnInterface a-\u003eString",
          "package": "argparser",
          "partial": "Cmd Line App Usage",
          "signature": "CmdLineFormat-\u003eCmdLnInterface a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:showCmdLineAppUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the application name and version\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Format",
          "name": "showCmdLineVersion",
          "package": "argparser",
          "signature": "CmdLnInterface a -\u003e String",
          "source": "src/System-Console-ArgParser-Format.html#showCmdLineVersion",
          "type": "function"
        },
        "index": {
          "description": "Prints the application name and version",
          "hierarchy": "System Console ArgParser Format",
          "module": "System.Console.ArgParser.Format",
          "name": "showCmdLineVersion",
          "normalized": "CmdLnInterface a-\u003eString",
          "package": "argparser",
          "partial": "Cmd Line Version",
          "signature": "CmdLnInterface a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Format.html#v:showCmdLineVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParameters are basic building blocks of a command line parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Params",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html",
          "type": "module"
        },
        "index": {
          "description": "Parameters are basic building blocks of command line parser",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Params",
          "package": "argparser",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the number of args consumed by a standard parameter\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "ArgParser",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#ArgParser",
          "type": "data"
        },
        "index": {
          "description": "Defines the number of args consumed by standard parameter",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "ArgParser",
          "package": "argparser",
          "partial": "Arg Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:ArgParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the source of a parameter: either positional or flag.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "ArgSrc",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#ArgSrc",
          "type": "data"
        },
        "index": {
          "description": "Defines the source of parameter either positional or flag",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "ArgSrc",
          "package": "argparser",
          "partial": "Arg Src",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:ArgSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to provide a description for a particular parameter.\n   Can be used as an infix operator:\n\u003c/p\u003e\u003cpre\u003e myparam `Descr` \"this is my description\"\n\u003c/pre\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Descr",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "data"
        },
        "index": {
          "description": "Allows the user to provide description for particular parameter Can be used as an infix operator myparam Descr this is my description",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Descr",
          "package": "argparser",
          "partial": "Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:Descr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the format of a flag\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "FlagFormat",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#FlagFormat",
          "type": "data"
        },
        "index": {
          "description": "Specify the format of flag",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "FlagFormat",
          "package": "argparser",
          "partial": "Flag Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:FlagFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple command line flag.\n   The parsing function will be passed True\n   if the flag is present, if the flag is provided to\n   the command line, and False otherwise.\n   For a key \u003ccode\u003efoo\u003c/code\u003e, the flag can either be \u003ccode\u003e--foo\u003c/code\u003e or \u003ccode\u003e-f\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "FlagParam",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#FlagParam",
          "type": "data"
        },
        "index": {
          "description": "simple command line flag The parsing function will be passed True if the flag is present if the flag is provided to the command line and False otherwise For key foo the flag can either be foo or",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "FlagParam",
          "package": "argparser",
          "partial": "Flag Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:FlagParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier used to specify the name of a flag\n   or a positional argument.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Key",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#Key",
          "type": "type"
        },
        "index": {
          "description": "identifier used to specify the name of flag or positional argument",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Key",
          "package": "argparser",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to provide a description for a particular parameter.\n   Can be used as an infix operator:\n\u003c/p\u003e\u003cpre\u003e myparam `Descr` \"this is my description\"\n\u003c/pre\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "MetaVar",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#MetaVar",
          "type": "data"
        },
        "index": {
          "description": "Allows the user to provide description for particular parameter Can be used as an infix operator myparam Descr this is my description",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "MetaVar",
          "package": "argparser",
          "partial": "Meta Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:MetaVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines whether a parameter is mandatory or optional.\n   When a parameter is marked as Optional, a default value must\n   be provided.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Optionality",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#Optionality",
          "type": "data"
        },
        "index": {
          "description": "Defines whether parameter is mandatory or optional When parameter is marked as Optional default value must be provided",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Optionality",
          "package": "argparser",
          "partial": "Optionality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:Optionality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a parameter consuming arguments on the command line.\n   The source defines whether the arguments are positional:\n\u003c/p\u003e\u003cpre\u003e myprog posarg1 posarg2 ...\n\u003c/pre\u003e\u003cp\u003e... or are taken from a flag:\n\u003c/p\u003e\u003cpre\u003e myprog --myflag flagarg1 flagarg2 ...\n\u003c/pre\u003e\u003cp\u003eshort form:\n\u003c/p\u003e\u003cpre\u003e myprog -m flagarg1 flagarg2 ...\n\u003c/pre\u003e\u003cp\u003eOne can provide two signatures of parsing function using the 'ArgParser type':\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSingleArgParser\u003c/a\u003e\u003c/code\u003e means that the parameter expect exactly one arg\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMulipleArgParser\u003c/a\u003e\u003c/code\u003e means that the parameter expect any number of args\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "StdArgParam",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#StdArgParam",
          "type": "data"
        },
        "index": {
          "description": "Defines parameter consuming arguments on the command line The source defines whether the arguments are positional myprog posarg1 posarg2 or are taken from flag myprog myflag flagarg1 flagarg2 short form myprog flagarg1 flagarg2 One can provide two signatures of parsing function using the ArgParser type SingleArgParser means that the parameter expect exactly one arg MulipleArgParser means that the parameter expect any number of args",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "StdArgParam",
          "package": "argparser",
          "partial": "Std Arg Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#t:StdArgParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "Descr",
          "package": "argparser",
          "signature": "Descr",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Descr",
          "package": "argparser",
          "partial": "Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Descr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "Flag",
          "package": "argparser",
          "signature": "Flag",
          "source": "src/System-Console-ArgParser-Params.html#ArgSrc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Flag",
          "package": "argparser",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "FlagParam",
          "package": "argparser",
          "signature": "FlagParam FlagFormat Key (Bool -\u003e a)",
          "source": "src/System-Console-ArgParser-Params.html#FlagParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "FlagParam",
          "normalized": "FlagParam FlagFormat Key(Bool-\u003ea)",
          "package": "argparser",
          "partial": "Flag Param",
          "signature": "FlagParam FlagFormat Key(Bool-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:FlagParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly long format ie \u003ccode\u003e--foo\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Long",
          "package": "argparser",
          "signature": "Long",
          "source": "src/System-Console-ArgParser-Params.html#FlagFormat",
          "type": "function"
        },
        "index": {
          "description": "Only long format ie foo",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Long",
          "package": "argparser",
          "partial": "Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "Mandatory",
          "package": "argparser",
          "signature": "Mandatory",
          "source": "src/System-Console-ArgParser-Params.html#Optionality",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Mandatory",
          "package": "argparser",
          "partial": "Mandatory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Mandatory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "MetaVar",
          "package": "argparser",
          "signature": "MetaVar",
          "source": "src/System-Console-ArgParser-Params.html#MetaVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "MetaVar",
          "package": "argparser",
          "partial": "Meta Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:MetaVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses any number of args\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "MulipleArgParser",
          "package": "argparser",
          "signature": "MulipleArgParser (Args -\u003e ParseResult a)",
          "source": "src/System-Console-ArgParser-Params.html#ArgParser",
          "type": "function"
        },
        "index": {
          "description": "Uses any number of args",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "MulipleArgParser",
          "normalized": "MulipleArgParser(Args-\u003eParseResult a)",
          "package": "argparser",
          "partial": "Muliple Arg Parser",
          "signature": "MulipleArgParser(Args-\u003eParseResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:MulipleArgParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "Optional",
          "package": "argparser",
          "signature": "Optional a",
          "source": "src/System-Console-ArgParser-Params.html#Optionality",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Optional",
          "package": "argparser",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "Pos",
          "package": "argparser",
          "signature": "Pos",
          "source": "src/System-Console-ArgParser-Params.html#ArgSrc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Pos",
          "package": "argparser",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible short format ie \u003ccode\u003e-f\u003c/code\u003e or \u003ccode\u003e--foo\u003c/code\u003e \n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "Short",
          "package": "argparser",
          "signature": "Short",
          "source": "src/System-Console-ArgParser-Params.html#FlagFormat",
          "type": "function"
        },
        "index": {
          "description": "Possible short format ie or foo",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "Short",
          "package": "argparser",
          "partial": "Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:Short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses exactly one arg\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Params",
          "name": "SingleArgParser",
          "package": "argparser",
          "signature": "SingleArgParser (Arg -\u003e ParseResult a)",
          "source": "src/System-Console-ArgParser-Params.html#ArgParser",
          "type": "function"
        },
        "index": {
          "description": "Uses exactly one arg",
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "SingleArgParser",
          "normalized": "SingleArgParser(Arg-\u003eParseResult a)",
          "package": "argparser",
          "partial": "Single Arg Parser",
          "signature": "SingleArgParser(Arg-\u003eParseResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:SingleArgParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "StdArgParam",
          "package": "argparser",
          "signature": "StdArgParam (Optionality a) ArgSrc Key (ArgParser a)",
          "source": "src/System-Console-ArgParser-Params.html#StdArgParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "StdArgParam",
          "package": "argparser",
          "partial": "Std Arg Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:StdArgParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "getdvalue",
          "package": "argparser",
          "signature": "spec a",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "getdvalue",
          "package": "argparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:getdvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "getmvvalue",
          "package": "argparser",
          "signature": "spec a",
          "source": "src/System-Console-ArgParser-Params.html#MetaVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "getmvvalue",
          "package": "argparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:getmvvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "getuserdescr",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "getuserdescr",
          "package": "argparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:getuserdescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Params",
          "name": "getusermvar",
          "package": "argparser",
          "signature": "String",
          "source": "src/System-Console-ArgParser-Params.html#MetaVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser Params",
          "module": "System.Console.ArgParser.Params",
          "name": "getusermvar",
          "package": "argparser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Params.html#v:getusermvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions used to specify a parser for command line arguments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.Parser",
          "name": "Parser",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Functions used to specify parser for command line arguments",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "Parser",
          "package": "argparser",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterface allowing to define a basic block of a command line parser\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Parser",
          "name": "ParamSpec",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Parser.html#ParamSpec",
          "type": "class"
        },
        "index": {
          "description": "interface allowing to define basic block of command line parser",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "ParamSpec",
          "package": "argparser",
          "partial": "Param Spec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#t:ParamSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a parser from a parser and a \u003ccode\u003e\u003ca\u003eParamSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e MyApp `parsedBy` myparamspec `andBy` myotherparamspec\n\u003c/pre\u003e",
          "module": "[\"System.Console.ArgParser.Parser\",\"System.Console.ArgParser\"]",
          "name": "andBy",
          "package": "argparser",
          "signature": "ParserSpec (a -\u003e b) -\u003e spec a -\u003e ParserSpec b",
          "source": "src/System-Console-ArgParser-Parser.html#andBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:andBy\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:andBy\"]"
        },
        "index": {
          "description": "Build parser from parser and ParamSpec MyApp parsedBy myparamspec andBy myotherparamspec",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "andBy",
          "normalized": "ParserSpec(a-\u003eb)-\u003ec a-\u003eParserSpec b",
          "package": "argparser",
          "partial": "By",
          "signature": "ParserSpec(a-\u003eb)-\u003espec a-\u003eParserSpec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:andBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Parser",
          "name": "getParamDescr",
          "package": "argparser",
          "signature": "spec res -\u003e [ParamDescr]",
          "source": "src/System-Console-ArgParser-Parser.html#getParamDescr",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "getParamDescr",
          "normalized": "a b-\u003e[ParamDescr]",
          "package": "argparser",
          "partial": "Param Descr",
          "signature": "spec res-\u003e[ParamDescr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:getParamDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser.Parser",
          "name": "getParser",
          "package": "argparser",
          "signature": "spec res -\u003e Parser res",
          "source": "src/System-Console-ArgParser-Parser.html#getParser",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "getParser",
          "normalized": "a b-\u003eParser b",
          "package": "argparser",
          "partial": "Parser",
          "signature": "spec res-\u003eParser res",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:getParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eParamSpec\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eParserSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Parser",
          "name": "liftParam",
          "package": "argparser",
          "signature": "spec res -\u003e ParserSpec res",
          "source": "src/System-Console-ArgParser-Parser.html#liftParam",
          "type": "function"
        },
        "index": {
          "description": "Converts any ParamSpec to ParserSpec",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "liftParam",
          "normalized": "a b-\u003eParserSpec b",
          "package": "argparser",
          "partial": "Param",
          "signature": "spec res-\u003eParserSpec res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:liftParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a parser from a type constructor and a \u003ccode\u003e\u003ca\u003eParamSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e MyApp `parsedBy` myparamspec\n\u003c/pre\u003e",
          "module": "[\"System.Console.ArgParser.Parser\",\"System.Console.ArgParser\"]",
          "name": "parsedBy",
          "package": "argparser",
          "signature": "(a -\u003e b) -\u003e spec a -\u003e ParserSpec b",
          "source": "src/System-Console-ArgParser-Parser.html#parsedBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:parsedBy\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:parsedBy\"]"
        },
        "index": {
          "description": "Build parser from type constructor and ParamSpec MyApp parsedBy myparamspec",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "parsedBy",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eParserSpec b",
          "package": "argparser",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003espec a-\u003eParserSpec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:parsedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003eparsedBy\u003c/a\u003e\u003c/code\u003e with a different fixity.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Parser",
          "name": "subParser",
          "package": "argparser",
          "signature": "(a -\u003e b) -\u003e spec a -\u003e ParserSpec b",
          "source": "src/System-Console-ArgParser-Parser.html#subParser",
          "type": "function"
        },
        "index": {
          "description": "This is parsedBy with different fixity",
          "hierarchy": "System Console ArgParser Parser",
          "module": "System.Console.ArgParser.Parser",
          "name": "subParser",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eParserSpec b",
          "package": "argparser",
          "partial": "Parser",
          "signature": "(a-\u003eb)-\u003espec a-\u003eParserSpec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Parser.html#v:subParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of functions which are basically shortcuts\nof \u003ca\u003eSystem.Console.EasyConsole.Params\u003c/a\u003e versions. If you\ncannot find a parameter fitting your needs, you should check this\nmodule.\n\u003c/p\u003e\u003cp\u003eValues provided to \u003ccode\u003eparsedBy\u003c/code\u003e and \u003ccode\u003eandBy\u003c/code\u003e should be created with\nthe following functions. The types are inferred. ArgParser will use\n\u003ccode\u003ereadMaybe\u003c/code\u003e to convert the arguments to haskell values, except for strings\nwhich will be passed unmodified.\n\u003c/p\u003e\u003cp\u003eFlags can be passed in long form (\u003ccode\u003e--foo\u003c/code\u003e) or short form (\u003ccode\u003e-f\u003c/code\u003e)\nYou may also provide a prefix form such as \u003ccode\u003e--fo\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMandatory parameters will fail if the argument is absent or invalid.\nOptional parameters only fail if the argument is invalid (ie \u003ccode\u003efoo\u003c/code\u003e passed\nas \u003ccode\u003eInt\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eNote that single arg parameters need exactly one arg, and that multiple args\nparameters can have any number of args (0 included).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "QuickParams",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-QuickParams.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of functions which are basically shortcuts of System.Console.EasyConsole.Params versions If you cannot find parameter fitting your needs you should check this module Values provided to parsedBy and andBy should be created with the following functions The types are inferred ArgParser will use readMaybe to convert the arguments to haskell values except for strings which will be passed unmodified Flags can be passed in long form foo or short form You may also provide prefix form such as fo Mandatory parameters will fail if the argument is absent or invalid Optional parameters only fail if the argument is invalid ie foo passed as Int Note that single arg parameters need exactly one arg and that multiple args parameters can have any number of args included",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "QuickParams",
          "package": "argparser",
          "partial": "Quick Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass used to define a way a converting\n   string to specific types. It is similar to read.\n   The main difference is that strings are parsed\n   without quotes.\n\u003c/p\u003e\u003cpre\u003e rawRead \"foo\" :: Maybe String == Just \"foo\"\n\u003c/pre\u003e",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "RawRead",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-QuickParams.html#RawRead",
          "type": "class"
        },
        "index": {
          "description": "typeclass used to define way converting string to specific types It is similar to read The main difference is that strings are parsed without quotes rawRead foo Maybe String Just foo",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "RawRead",
          "package": "argparser",
          "partial": "Raw Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#t:RawRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple command line flag.\n   The parsing function will return True\n   if the flag is present, if the flag is provided to\n   the command line, and False otherwise.\n   For a key \u003ccode\u003efoo\u003c/code\u003e, the flag can either be \u003ccode\u003e--foo\u003c/code\u003e or \u003ccode\u003e-f\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "boolFlag",
          "package": "argparser",
          "signature": "Key-\u003e FlagParam Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:boolFlag\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:boolFlag\"]"
        },
        "index": {
          "description": "simple command line flag The parsing function will return True if the flag is present if the flag is provided to the command line and False otherwise For key foo the flag can either be foo or",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "boolFlag",
          "normalized": "Key-\u003eFlagParam Bool",
          "package": "argparser",
          "partial": "Flag",
          "signature": "Key-\u003eFlagParam Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:boolFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional flag argument parameter\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "optFlag",
          "package": "argparser",
          "signature": "a-\u003e Key-\u003e StdArgParam a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optFlag\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:optFlag\"]"
        },
        "index": {
          "description": "An optional flag argument parameter",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "optFlag",
          "normalized": "a-\u003eKey-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Flag",
          "signature": "a-\u003eKey-\u003eStdArgParam a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional flag argument parameter taking multiple arguments\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "optFlagArgs",
          "package": "argparser",
          "signature": "b-\u003e Key-\u003e b-\u003e (b -\u003e a -\u003e b)-\u003e StdArgParam b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optFlagArgs\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:optFlagArgs\"]"
        },
        "index": {
          "description": "An optional flag argument parameter taking multiple arguments",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "optFlagArgs",
          "normalized": "a-\u003eKey-\u003ea-\u003e(a-\u003eb-\u003ea)-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Flag Args",
          "signature": "b-\u003eKey-\u003eb-\u003e(b-\u003ea-\u003eb)-\u003eStdArgParam b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optFlagArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optional positional argument parameter\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "optPos",
          "package": "argparser",
          "signature": "a-\u003e Key-\u003e StdArgParam a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optPos\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:optPos\"]"
        },
        "index": {
          "description": "An optional positional argument parameter",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "optPos",
          "normalized": "a-\u003eKey-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Pos",
          "signature": "a-\u003eKey-\u003eStdArgParam a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:optPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter consuming all the remaining positional parameters\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "posArgs",
          "package": "argparser",
          "signature": "Key-\u003e b-\u003e (b -\u003e a -\u003e b)-\u003e StdArgParam b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:posArgs\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:posArgs\"]"
        },
        "index": {
          "description": "parameter consuming all the remaining positional parameters",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "posArgs",
          "normalized": "Key-\u003ea-\u003e(a-\u003eb-\u003ea)-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Args",
          "signature": "Key-\u003eb-\u003e(b-\u003ea-\u003eb)-\u003eStdArgParam b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:posArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mandatory flag argument parameter\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "reqFlag",
          "package": "argparser",
          "signature": "Key-\u003e StdArgParam a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqFlag\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:reqFlag\"]"
        },
        "index": {
          "description": "mandatory flag argument parameter",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "reqFlag",
          "normalized": "Key-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Flag",
          "signature": "Key-\u003eStdArgParam a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mandatory flag argument parameter taking multiple arguments\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "reqFlagArgs",
          "package": "argparser",
          "signature": "Key-\u003e b-\u003e (b -\u003e a -\u003e b)-\u003e StdArgParam b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqFlagArgs\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:reqFlagArgs\"]"
        },
        "index": {
          "description": "mandatory flag argument parameter taking multiple arguments",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "reqFlagArgs",
          "normalized": "Key-\u003ea-\u003e(a-\u003eb-\u003ea)-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Flag Args",
          "signature": "Key-\u003eb-\u003e(b-\u003ea-\u003eb)-\u003eStdArgParam b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqFlagArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mandatory positional argument parameter\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.QuickParams\",\"System.Console.ArgParser\"]",
          "name": "reqPos",
          "package": "argparser",
          "signature": "Key-\u003e StdArgParam a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqPos\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:reqPos\"]"
        },
        "index": {
          "description": "mandatory positional argument parameter",
          "hierarchy": "System Console ArgParser QuickParams",
          "module": "System.Console.ArgParser.QuickParams",
          "name": "reqPos",
          "normalized": "Key-\u003eStdArgParam a",
          "package": "argparser",
          "partial": "Pos",
          "signature": "Key-\u003eStdArgParam a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-QuickParams.html#v:reqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions used to build and run command line applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.Run",
          "name": "Run",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Functions used to build and run command line applications",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "Run",
          "package": "argparser",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault version and help special actions\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Run",
          "name": "defaultSpecialFlags",
          "package": "argparser",
          "signature": "[SpecialFlag a]",
          "source": "src/System-Console-ArgParser-Run.html#defaultSpecialFlags",
          "type": "function"
        },
        "index": {
          "description": "default version and help special actions",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "defaultSpecialFlags",
          "normalized": "[SpecialFlag a]",
          "package": "argparser",
          "partial": "Special Flags",
          "signature": "[SpecialFlag a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:defaultSpecialFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an application with no version/description\n   and with a name equal to the file name.\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "mkApp",
          "package": "argparser",
          "signature": "ParserSpec a -\u003e IO (CmdLnInterface a)",
          "source": "src/System-Console-ArgParser-Run.html#mkApp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:mkApp\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:mkApp\"]"
        },
        "index": {
          "description": "Build an application with no version description and with name equal to the file name",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "mkApp",
          "normalized": "ParserSpec a-\u003eIO(CmdLnInterface a)",
          "package": "argparser",
          "partial": "App",
          "signature": "ParserSpec a-\u003eIO(CmdLnInterface a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:mkApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an application with no version/description\n   and with a name equal to the provided String.\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "mkDefaultApp",
          "package": "argparser",
          "signature": "ParserSpec a -\u003e String -\u003e CmdLnInterface a",
          "source": "src/System-Console-ArgParser-Run.html#mkDefaultApp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:mkDefaultApp\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:mkDefaultApp\"]"
        },
        "index": {
          "description": "Build an application with no version description and with name equal to the provided String",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "mkDefaultApp",
          "normalized": "ParserSpec a-\u003eString-\u003eCmdLnInterface a",
          "package": "argparser",
          "partial": "Default App",
          "signature": "ParserSpec a-\u003eString-\u003eCmdLnInterface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:mkDefaultApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the arguments with the parser\n   provided to the function.\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "parseArgs",
          "package": "argparser",
          "signature": "Args-\u003e CmdLnInterface a-\u003e ParseResult a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:parseArgs\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:parseArgs\"]"
        },
        "index": {
          "description": "Parse the arguments with the parser provided to the function",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "parseArgs",
          "normalized": "Args-\u003eCmdLnInterface a-\u003eParseResult a",
          "package": "argparser",
          "partial": "Args",
          "signature": "Args-\u003eCmdLnInterface a-\u003eParseResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:parseArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the arguments with the parser\n   provided to the function.\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Run",
          "name": "parseNiceArgs",
          "package": "argparser",
          "signature": "NiceArgs-\u003e CmdLnInterface a-\u003e ParseResult a",
          "type": "function"
        },
        "index": {
          "description": "Parse the arguments with the parser provided to the function",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "parseNiceArgs",
          "normalized": "NiceArgs-\u003eCmdLnInterface a-\u003eParseResult a",
          "package": "argparser",
          "partial": "Nice Args",
          "signature": "NiceArgs-\u003eCmdLnInterface a-\u003eParseResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:parseNiceArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command line application with the\n   user provided arguments. If the parsing succeeds,\n   run the application. Print the returned message otherwise\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "runApp",
          "package": "argparser",
          "signature": "CmdLnInterface a-\u003e (a -\u003e IO ())-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:runApp\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:runApp\"]"
        },
        "index": {
          "description": "Runs command line application with the user provided arguments If the parsing succeeds run the application Print the returned message otherwise",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "runApp",
          "normalized": "CmdLnInterface a-\u003e(a-\u003eIO())-\u003eIO()",
          "package": "argparser",
          "partial": "App",
          "signature": "CmdLnInterface a-\u003e(a-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:runApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the description of an interface\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "setAppDescr",
          "package": "argparser",
          "signature": "CmdLnInterface a -\u003e String -\u003e CmdLnInterface a",
          "source": "src/System-Console-ArgParser-Run.html#setAppDescr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:setAppDescr\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:setAppDescr\"]"
        },
        "index": {
          "description": "Set the description of an interface",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "setAppDescr",
          "normalized": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "package": "argparser",
          "partial": "App Descr",
          "signature": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:setAppDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the bottom text of an interface\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.Run\",\"System.Console.ArgParser\"]",
          "name": "setAppEpilog",
          "package": "argparser",
          "signature": "CmdLnInterface a -\u003e String -\u003e CmdLnInterface a",
          "source": "src/System-Console-ArgParser-Run.html#setAppEpilog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:setAppEpilog\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:setAppEpilog\"]"
        },
        "index": {
          "description": "Set the bottom text of an interface",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "setAppEpilog",
          "normalized": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "package": "argparser",
          "partial": "App Epilog",
          "signature": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:setAppEpilog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the name of an interface\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.Run",
          "name": "setAppName",
          "package": "argparser",
          "signature": "CmdLnInterface a -\u003e String -\u003e CmdLnInterface a",
          "source": "src/System-Console-ArgParser-Run.html#setAppName",
          "type": "function"
        },
        "index": {
          "description": "Set the name of an interface",
          "hierarchy": "System Console ArgParser Run",
          "module": "System.Console.ArgParser.Run",
          "name": "setAppName",
          "normalized": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "package": "argparser",
          "partial": "App Name",
          "signature": "CmdLnInterface a-\u003eString-\u003eCmdLnInterface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-Run.html#v:setAppName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubparsers allows the creation of complex command line\napplications organized around commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser.SubParser",
          "name": "SubParser",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-SubParser.html",
          "type": "module"
        },
        "index": {
          "description": "Subparsers allows the creation of complex command line applications organized around commands",
          "hierarchy": "System Console ArgParser SubParser",
          "module": "System.Console.ArgParser.SubParser",
          "name": "SubParser",
          "package": "argparser",
          "partial": "Sub Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-SubParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a parser composed of a list of subparsers.\n\u003c/p\u003e\u003cp\u003eEach subparser is associated with a command which the user\n   must type to activate.\n\u003c/p\u003e",
          "module": "[\"System.Console.ArgParser.SubParser\",\"System.Console.ArgParser\"]",
          "name": "mkSubParser",
          "package": "argparser",
          "signature": "[(Arg, CmdLnInterface a)] -\u003e IO (CmdLnInterface a)",
          "source": "src/System-Console-ArgParser-SubParser.html#mkSubParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-SubParser.html#v:mkSubParser\",\"http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:mkSubParser\"]"
        },
        "index": {
          "description": "Create parser composed of list of subparsers Each subparser is associated with command which the user must type to activate",
          "hierarchy": "System Console ArgParser SubParser",
          "module": "System.Console.ArgParser.SubParser",
          "name": "mkSubParser",
          "normalized": "[(Arg,CmdLnInterface a)]-\u003eIO(CmdLnInterface a)",
          "package": "argparser",
          "partial": "Sub Parser",
          "signature": "[(Arg,CmdLnInterface a)]-\u003eIO(CmdLnInterface a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-SubParser.html#v:mkSubParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame that \u003ca\u003emkSubParser\u003c/a\u003e but allows a custom name\n\u003c/p\u003e",
          "module": "System.Console.ArgParser.SubParser",
          "name": "mkSubParserWithName",
          "package": "argparser",
          "signature": "String -\u003e [(Arg, CmdLnInterface a)] -\u003e CmdLnInterface a",
          "source": "src/System-Console-ArgParser-SubParser.html#mkSubParserWithName",
          "type": "function"
        },
        "index": {
          "description": "Same that mkSubParser but allows custom name",
          "hierarchy": "System Console ArgParser SubParser",
          "module": "System.Console.ArgParser.SubParser",
          "name": "mkSubParserWithName",
          "normalized": "String-\u003e[(Arg,CmdLnInterface a)]-\u003eCmdLnInterface a",
          "package": "argparser",
          "partial": "Sub Parser With Name",
          "signature": "String-\u003e[(Arg,CmdLnInterface a)]-\u003eCmdLnInterface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser-SubParser.html#v:mkSubParserWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple command line parsing library. This library provides a small combinator\ndsl to specify a parser for a datatype. Running the parser will automatically\nconsume and convert command line arguments. Default special action such as\nhelp/usage are automatically built from the parser specification.\n\u003c/p\u003e\u003cp\u003eHere is a quick example. \n\u003c/p\u003e\u003cpre\u003e\ndata MyTest =  -- First, we need a datatype\n  MyTest Int Int\n  deriving (Show) -- we will print the values\n\nmyTestParser -- Then, we define a parser \n  :: ParserSpec MyTest\nmyTestParser = MyTest\n  `parsedBy` reqPos \"pos1\"\n  `andBy` optPos 0 \"pos2\"\n\nmain = do -- We proceed to build an interface and run it:\n  interface \u003c- mkApp myTestParser\n  runApp interface print\n\u003c/pre\u003e\u003cp\u003eBuilding this app will produce an executable \u003ccode\u003efoo\u003c/code\u003e which will behave like this:\n\u003c/p\u003e\u003cpre\u003e\n$ foo 1 2\nMyTest 1 2\n$ foo 3\nMyTest 3 0\n$ foo -h\nfoo\nusage : foo pos1 [pos2] [-h] [--version]\n\nmandatory arguments:\n pos1\n\noptional arguments:\n pos2\n -h, --help                    show this help message and exit\n --version                     print the program version and exit\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Console.ArgParser",
          "name": "ArgParser",
          "package": "argparser",
          "source": "src/System-Console-ArgParser.html",
          "type": "module"
        },
        "index": {
          "description": "Simple command line parsing library This library provides small combinator dsl to specify parser for datatype Running the parser will automatically consume and convert command line arguments Default special action such as help usage are automatically built from the parser specification Here is quick example data MyTest First we need datatype MyTest Int Int deriving Show we will print the values myTestParser Then we define parser ParserSpec MyTest myTestParser MyTest parsedBy reqPos pos1 andBy optPos pos2 main do We proceed to build an interface and run it interface mkApp myTestParser runApp interface print Building this app will produce an executable foo which will behave like this foo MyTest foo MyTest foo foo usage foo pos1 pos2 version mandatory arguments pos1 optional arguments pos2 help show this help message and exit version print the program version and exit",
          "hierarchy": "System Console ArgParser",
          "module": "System.Console.ArgParser",
          "name": "ArgParser",
          "package": "argparser",
          "partial": "Arg Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to provide a description for a particular parameter.\n   Can be used as an infix operator:\n\u003c/p\u003e\u003cpre\u003e myparam `Descr` \"this is my description\"\n\u003c/pre\u003e",
          "module": "System.Console.ArgParser",
          "name": "Descr",
          "package": "argparser",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "data"
        },
        "index": {
          "description": "Allows the user to provide description for particular parameter Can be used as an infix operator myparam Descr this is my description",
          "hierarchy": "System Console ArgParser",
          "module": "System.Console.ArgParser",
          "name": "Descr",
          "package": "argparser",
          "partial": "Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#t:Descr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ArgParser",
          "name": "Descr",
          "package": "argparser",
          "signature": "Descr (spec a) String",
          "source": "src/System-Console-ArgParser-Params.html#Descr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ArgParser",
          "module": "System.Console.ArgParser",
          "name": "Descr",
          "package": "argparser",
          "partial": "Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/argparser/docs/System-Console-ArgParser.html#v:Descr"
      }
    }
  ]
]