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
        "word": "parseargs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies an argument parser.\n Given a description of type [\u003ccode\u003e\u003ca\u003eArg\u003c/a\u003e\u003c/code\u003e] of the legal\n arguments to the program, a list of argument strings,\n and a bit of extra information, the \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e function\n in this module returns an\n \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e data structure suitable for querying using the\n provided functions \u003ccode\u003e\u003ca\u003egotArg\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetArg\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ParseArgs",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html",
          "type": "module"
        },
        "index": {
          "description": "This module supplies an argument parser Given description of type Arg of the legal arguments to the program list of argument strings and bit of extra information the parseArgs function in this module returns an Args data structure suitable for querying using the provided functions gotArg getArg etc",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ParseArgs",
          "package": "parseargs",
          "partial": "Parse Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for building parse control information,\n for backward compatibility.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "APCData",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#APCData",
          "type": "class"
        },
        "index": {
          "description": "Class for building parse control information for backward compatibility",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "APCData",
          "package": "parseargs",
          "partial": "APCData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:APCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe description of an argument, suitable for\n messages and for parsing.  The \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e field\n is used both for flags with a data argument, and\n for positional data arguments.\n\u003c/p\u003e\u003cp\u003eThere are two cases:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The argument is a flag, in which case at least\n     one of \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e is provided;\n\u003c/li\u003e\u003cli\u003e The argument is positional, in which case neither\n     \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e are provided, but \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e is.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf none of \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e are\n provided, this is an error.  See also the\n \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e functions below, which are used to\n generate \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "Arg",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "data"
        },
        "index": {
          "description": "The description of an argument suitable for messages and for parsing The argData field is used both for flags with data argument and for positional data arguments There are two cases The argument is flag in which case at least one of argAbbr and argName is provided The argument is positional in which case neither argAbbr nor argName are provided but argData is If none of argAbbr argName or argData are provided this is an error See also the argDataRequired argDataOptional and argDataDefaulted functions below which are used to generate argData",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "Arg",
          "package": "parseargs",
          "partial": "Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eArgType\u003c/a\u003e\u003c/code\u003e instance for opening a file from its string name.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgFileOpener",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgFileOpener",
          "type": "newtype"
        },
        "index": {
          "description": "ArgType instance for opening file from its string name",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgFileOpener",
          "package": "parseargs",
          "partial": "Arg File Opener",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgFileOpener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the mapping from argument index to value.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgRecord",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgRecord",
          "type": "data"
        },
        "index": {
          "description": "The type of the mapping from argument index to value",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgRecord",
          "package": "parseargs",
          "partial": "Arg Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of values that can be parsed by the argument parser.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgType",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgType",
          "type": "class"
        },
        "index": {
          "description": "Type of values that can be parsed by the argument parser",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgType",
          "package": "parseargs",
          "partial": "Arg Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e produces.  The key\n element is the \u003ccode\u003e\u003ca\u003eArgRecord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eargs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "Args",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "data"
        },
        "index": {
          "description": "The data structure parseArgs produces The key element is the ArgRecord args",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "Args",
          "package": "parseargs",
          "partial": "Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow \"sloppy\" the parse is.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsComplete",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgsComplete",
          "type": "data"
        },
        "index": {
          "description": "How sloppy the parse is",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsComplete",
          "package": "parseargs",
          "partial": "Args Complete",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to always treat an unknown argument beginning\n with \"-\" as an error, or to allow it to be used as a\n positional argument when possible.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsDash",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgsDash",
          "type": "data"
        },
        "index": {
          "description": "Whether to always treat an unknown argument beginning with as an error or to allow it to be used as positional argument when possible",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsDash",
          "package": "parseargs",
          "partial": "Args Dash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord containing the collective parse control information.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsParseControl",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ArgsParseControl",
          "type": "data"
        },
        "index": {
          "description": "Record containing the collective parse control information",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsParseControl",
          "package": "parseargs",
          "partial": "Args Parse Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsParseControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe types of an argument carrying data.  The constructor\n argument is used to carry a default value.\n\u003c/p\u003e\u003cp\u003eThe constructor argument should really be hidden.\n Values of this type are normally constructed within\n the pseudo-constructors pseudo-constructors\n \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e, to which only the constructor\n function itself is passed.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "Argtype",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "data"
        },
        "index": {
          "description": "The types of an argument carrying data The constructor argument is used to carry default value The constructor argument should really be hidden Values of this type are normally constructed within the pseudo-constructors pseudo-constructors argDataRequired argDataOptional and argDataDefaulted to which only the constructor function itself is passed",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "Argtype",
          "package": "parseargs",
          "partial": "Argtype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Argtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation specific to an argument carrying a datum.  This\n is an opaque type, whose instances are constructed using the\n pseudo-constructors \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "DataArg",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#DataArg",
          "type": "data"
        },
        "index": {
          "description": "Information specific to an argument carrying datum This is an opaque type whose instances are constructed using the pseudo-constructors argDataRequired argDataOptional and argDataDefaulted",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "DataArg",
          "package": "parseargs",
          "partial": "Data Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:DataArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "IOMode",
          "package": "parseargs",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "IOMode",
          "package": "parseargs",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is raised with an appropriate error message\n when argument parsing fails.  The first argument is the usage\n message, the second the actual error message from the parser.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ParseArgsException",
          "package": "parseargs",
          "source": "src/System-Console-ParseArgs.html#ParseArgsException",
          "type": "data"
        },
        "index": {
          "description": "This exception is raised with an appropriate error message when argument parsing fails The first argument is the usage message the second the actual error message from the parser",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ParseArgsException",
          "package": "parseargs",
          "partial": "Parse Args Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ParseArgsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "AppendMode",
          "package": "parseargs",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "AppendMode",
          "package": "parseargs",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "Arg",
          "package": "parseargs",
          "signature": "Arg",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "Arg",
          "package": "parseargs",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgFileOpener",
          "package": "parseargs",
          "signature": "ArgFileOpener",
          "source": "src/System-Console-ParseArgs.html#ArgFileOpener",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgFileOpener",
          "package": "parseargs",
          "partial": "Arg File Opener",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgFileOpener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "Args",
          "package": "parseargs",
          "signature": "Args",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "Args",
          "package": "parseargs",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny extraneous arguments\n (unparseable from description)\n will cause the parser to fail.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsComplete",
          "package": "parseargs",
          "signature": "ArgsComplete",
          "source": "src/System-Console-ParseArgs.html#ArgsComplete",
          "type": "function"
        },
        "index": {
          "description": "Any extraneous arguments unparseable from description will cause the parser to fail",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsComplete",
          "package": "parseargs",
          "partial": "Args Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an argument begins with\n a \"-\", it will always be\n treated as an error unless\n it corresponds to a flag description.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsHardDash",
          "package": "parseargs",
          "signature": "ArgsHardDash",
          "source": "src/System-Console-ParseArgs.html#ArgsDash",
          "type": "function"
        },
        "index": {
          "description": "If an argument begins with it will always be treated as an error unless it corresponds to flag description",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsHardDash",
          "package": "parseargs",
          "partial": "Args Hard Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsHardDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll extraneous arguments are\n permitted, and will be skipped,\n saved, and returned.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsInterspersed",
          "package": "parseargs",
          "signature": "ArgsInterspersed",
          "source": "src/System-Console-ParseArgs.html#ArgsComplete",
          "type": "function"
        },
        "index": {
          "description": "All extraneous arguments are permitted and will be skipped saved and returned",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsInterspersed",
          "package": "parseargs",
          "partial": "Args Interspersed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsInterspersed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgsParseControl",
          "package": "parseargs",
          "signature": "ArgsParseControl",
          "source": "src/System-Console-ParseArgs.html#ArgsParseControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsParseControl",
          "package": "parseargs",
          "partial": "Args Parse Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsParseControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an argument beginning with\n a \"-\" is unrecognized as a flag,\n treat it as a positional argument\n if possible. Otherwise it is an error.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsSoftDash",
          "package": "parseargs",
          "signature": "ArgsSoftDash",
          "source": "src/System-Console-ParseArgs.html#ArgsDash",
          "type": "function"
        },
        "index": {
          "description": "If an argument beginning with is unrecognized as flag treat it as positional argument if possible Otherwise it is an error",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsSoftDash",
          "package": "parseargs",
          "partial": "Args Soft Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsSoftDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrailing extraneous arguments are\n permitted, and will be skipped,\n saved, and returned.  The\n constructor argument is the\n name of the args.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "ArgsTrailing",
          "package": "parseargs",
          "signature": "ArgsTrailing String",
          "source": "src/System-Console-ParseArgs.html#ArgsComplete",
          "type": "function"
        },
        "index": {
          "description": "Trailing extraneous arguments are permitted and will be skipped saved and returned The constructor argument is the name of the args",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgsTrailing",
          "package": "parseargs",
          "partial": "Args Trailing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsTrailing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeDouble",
          "package": "parseargs",
          "signature": "ArgtypeDouble (Maybe Double)",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeDouble",
          "package": "parseargs",
          "partial": "Argtype Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeFloat",
          "package": "parseargs",
          "signature": "ArgtypeFloat (Maybe Float)",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeFloat",
          "package": "parseargs",
          "partial": "Argtype Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeInt",
          "package": "parseargs",
          "signature": "ArgtypeInt (Maybe Int)",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeInt",
          "package": "parseargs",
          "partial": "Argtype Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeInteger",
          "package": "parseargs",
          "signature": "ArgtypeInteger (Maybe Integer)",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeInteger",
          "package": "parseargs",
          "partial": "Argtype Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeString",
          "package": "parseargs",
          "signature": "ArgtypeString (Maybe String)",
          "source": "src/System-Console-ParseArgs.html#Argtype",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ArgtypeString",
          "package": "parseargs",
          "partial": "Argtype String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ParseArgsException",
          "package": "parseargs",
          "signature": "ParseArgsException String String",
          "source": "src/System-Console-ParseArgs.html#ParseArgsException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ParseArgsException",
          "package": "parseargs",
          "partial": "Parse Args Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ParseArgsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "ReadMode",
          "package": "parseargs",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "ReadMode",
          "package": "parseargs",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "WriteMode",
          "package": "parseargs",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "WriteMode",
          "package": "parseargs",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "apcComplete",
          "package": "parseargs",
          "signature": "ArgsComplete",
          "source": "src/System-Console-ParseArgs.html#ArgsParseControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "apcComplete",
          "package": "parseargs",
          "partial": "Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:apcComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "apcDash",
          "package": "parseargs",
          "signature": "ArgsDash",
          "source": "src/System-Console-ParseArgs.html#ArgsParseControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "apcDash",
          "package": "parseargs",
          "partial": "Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:apcDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-character flag name.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argAbbr",
          "package": "parseargs",
          "signature": "Maybe Char",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "description": "One-character flag name",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argAbbr",
          "package": "parseargs",
          "partial": "Abbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argAbbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatum description.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argData",
          "package": "parseargs",
          "signature": "Maybe DataArg",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "description": "Datum description",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argData",
          "package": "parseargs",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given optional argument with the\n given default.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argDataDefaulted",
          "package": "parseargs",
          "signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e a-\u003e Maybe DataArg",
          "type": "function"
        },
        "index": {
          "description": "Generate the argData for the given optional argument with the given default",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argDataDefaulted",
          "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003ea-\u003eMaybe DataArg",
          "package": "parseargs",
          "partial": "Data Defaulted",
          "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003ea-\u003eMaybe DataArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataDefaulted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given optional argument with no default.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argDataOptional",
          "package": "parseargs",
          "signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e Maybe DataArg",
          "type": "function"
        },
        "index": {
          "description": "Generate the argData for the given optional argument with no default",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argDataOptional",
          "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
          "package": "parseargs",
          "partial": "Data Optional",
          "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given non-optional argument.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argDataRequired",
          "package": "parseargs",
          "signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e Maybe DataArg",
          "type": "function"
        },
        "index": {
          "description": "Generate the argData for the given non-optional argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argDataRequired",
          "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
          "package": "parseargs",
          "partial": "Data Required",
          "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation for the argument.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argDesc",
          "package": "parseargs",
          "signature": "String",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "description": "Documentation for the argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argDesc",
          "package": "parseargs",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to open the file\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argFileOpener",
          "package": "parseargs",
          "signature": "IOMode -\u003e IO Handle",
          "source": "src/System-Console-ParseArgs.html#ArgFileOpener",
          "type": "function"
        },
        "index": {
          "description": "Function to open the file",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argFileOpener",
          "normalized": "IOMode-\u003eIO Handle",
          "package": "parseargs",
          "partial": "File Opener",
          "signature": "IOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argFileOpener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects the input description\n to the output argument.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argIndex",
          "package": "parseargs",
          "signature": "a",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "description": "Connects the input description to the output argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argIndex",
          "package": "parseargs",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Long name\" of flag.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argName",
          "package": "parseargs",
          "signature": "Maybe String",
          "source": "src/System-Console-ParseArgs.html#Arg",
          "type": "function"
        },
        "index": {
          "description": "Long name of flag",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argName",
          "package": "parseargs",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe argument map.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "args",
          "package": "parseargs",
          "signature": "ArgRecord a",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "function"
        },
        "index": {
          "description": "The argument map",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "args",
          "package": "parseargs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasename of 0th argument.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argsProgName",
          "package": "parseargs",
          "signature": "String",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "function"
        },
        "index": {
          "description": "Basename of th argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argsProgName",
          "package": "parseargs",
          "partial": "Prog Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemaining unprocessed arguments.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argsRest",
          "package": "parseargs",
          "signature": "[String]",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "function"
        },
        "index": {
          "description": "Remaining unprocessed arguments",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argsRest",
          "normalized": "[String]",
          "package": "parseargs",
          "partial": "Rest",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull usage string.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "argsUsage",
          "package": "parseargs",
          "signature": "String",
          "source": "src/System-Console-ParseArgs.html#Args",
          "type": "function"
        },
        "index": {
          "description": "Full usage string",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "argsUsage",
          "package": "parseargs",
          "partial": "Usage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the filename part of a pathname.\n Unnecessarily efficient implementation does a single\n tail-call traversal with no construction.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "baseName",
          "package": "parseargs",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Return the filename part of pathname Unnecessarily efficient implementation does single tail-call traversal with no construction",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "baseName",
          "normalized": "String-\u003eString",
          "package": "parseargs",
          "partial": "Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:baseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "getAPCData",
          "package": "parseargs",
          "signature": "a -\u003e ArgsParseControl",
          "source": "src/System-Console-ParseArgs.html#getAPCData",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getAPCData",
          "normalized": "a-\u003eArgsParseControl",
          "package": "parseargs",
          "partial": "APCData",
          "signature": "a-\u003eArgsParseControl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getAPCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch an argument's value if it is present.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArg",
          "package": "parseargs",
          "signature": "getArg",
          "source": "src/System-Console-ParseArgs.html#getArg",
          "type": "method"
        },
        "index": {
          "description": "Fetch an argument value if it is present",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArg",
          "package": "parseargs",
          "partial": "Arg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgDouble",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Maybe Double",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Return the Double value if any of the given argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgDouble",
          "normalized": "Args a-\u003ea-\u003eMaybe Double",
          "package": "parseargs",
          "partial": "Arg Double",
          "signature": "Args a-\u003ea-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Treat the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument as\n a file handle and try to open it as requested.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgFile",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e IOMode-\u003e IO (Maybe Handle)",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Treat the String value if any of the given argument as file handle and try to open it as requested",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgFile",
          "normalized": "Args a-\u003ea-\u003eIOMode-\u003eIO(Maybe Handle)",
          "package": "parseargs",
          "partial": "Arg File",
          "signature": "Args a-\u003ea-\u003eIOMode-\u003eIO(Maybe Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgFloat",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Maybe Float",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Return the Float value if any of the given argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgFloat",
          "normalized": "Args a-\u003ea-\u003eMaybe Float",
          "package": "parseargs",
          "partial": "Arg Float",
          "signature": "Args a-\u003ea-\u003eMaybe Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgInt",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Return the Int value if any of the given argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgInt",
          "normalized": "Args a-\u003ea-\u003eMaybe Int",
          "package": "parseargs",
          "partial": "Arg Int",
          "signature": "Args a-\u003ea-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgInteger",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Maybe Integer",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Return the Integer value if any of the given argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgInteger",
          "normalized": "Args a-\u003ea-\u003eMaybe Integer",
          "package": "parseargs",
          "partial": "Arg Integer",
          "signature": "Args a-\u003ea-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument as a\n file handle and try to open it as requested.  If not\n present, substitute the appropriate one of stdin or\n stdout as indicated by \u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgStdio",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e IOMode-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Treat the String value if any of the given argument as file handle and try to open it as requested If not present substitute the appropriate one of stdin or stdout as indicated by IOMode",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgStdio",
          "normalized": "Args a-\u003ea-\u003eIOMode-\u003eIO Handle",
          "package": "parseargs",
          "partial": "Arg Stdio",
          "signature": "Args a-\u003ea-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgStdio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e  Return the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.ParseArgs",
          "name": "getArgString",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Return the String value if any of the given argument",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getArgString",
          "normalized": "Args a-\u003ea-\u003eMaybe String",
          "package": "parseargs",
          "partial": "Arg String",
          "signature": "Args a-\u003ea-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ParseArgs",
          "name": "getRequiredArg",
          "package": "parseargs",
          "signature": "getRequiredArg",
          "source": "src/System-Console-ParseArgs.html#getRequiredArg",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "getRequiredArg",
          "package": "parseargs",
          "partial": "Required Arg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getRequiredArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given optional argument was supplied. Works on all types.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "gotArg",
          "package": "parseargs",
          "signature": "Args a-\u003e a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether given optional argument was supplied Works on all types",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "gotArg",
          "normalized": "Args a-\u003ea-\u003eBool",
          "package": "parseargs",
          "partial": "Arg",
          "signature": "Args a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:gotArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a description of the arguments, \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e\n produces a map from the arguments to their \"values\" and\n some other useful byproducts.  \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e requires that\n the argument descriptions occur in the order 1) flag\n arguments, then 2) positional arguments; otherwise a\n runtime error will be thrown.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "parseArgs",
          "package": "parseargs",
          "signature": "b-\u003e [Arg a]-\u003e String-\u003e [String]-\u003e Args a",
          "type": "function"
        },
        "index": {
          "description": "Given description of the arguments parseArgs produces map from the arguments to their values and some other useful byproducts parseArgs requires that the argument descriptions occur in the order flag arguments then positional arguments otherwise runtime error will be thrown",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "parseArgs",
          "normalized": "a-\u003e[Arg b]-\u003eString-\u003e[String]-\u003eArgs b",
          "package": "parseargs",
          "partial": "Args",
          "signature": "b-\u003e[Arg a]-\u003eString-\u003e[String]-\u003eArgs a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost of the time, you just want the environment's\n arguments and are willing to live in the IO monad.\n This version of \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e digs the pathname and arguments\n out of the system directly.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "parseArgsIO",
          "package": "parseargs",
          "signature": "b-\u003e [Arg a]-\u003e IO (Args a)",
          "type": "function"
        },
        "index": {
          "description": "Most of the time you just want the environment arguments and are willing to live in the IO monad This version of parseArgs digs the pathname and arguments out of the system directly",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "parseArgsIO",
          "normalized": "a-\u003e[Arg b]-\u003eIO(Args b)",
          "package": "parseargs",
          "partial": "Args IO",
          "signature": "b-\u003e[Arg a]-\u003eIO(Args a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseArgsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a usage error with the given supplementary message string.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "parseError",
          "package": "parseargs",
          "signature": "String-\u003e String-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Generate usage error with the given supplementary message string",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "parseError",
          "normalized": "String-\u003eString-\u003ea",
          "package": "parseargs",
          "partial": "Error",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a usage error with the given supplementary message string.\n\u003c/p\u003e",
          "module": "System.Console.ParseArgs",
          "name": "usageError",
          "package": "parseargs",
          "signature": "Args a -\u003e String -\u003e b",
          "source": "src/System-Console-ParseArgs.html#usageError",
          "type": "function"
        },
        "index": {
          "description": "Generate usage error with the given supplementary message string",
          "hierarchy": "System Console ParseArgs",
          "module": "System.Console.ParseArgs",
          "name": "usageError",
          "normalized": "Args a-\u003eString-\u003eb",
          "package": "parseargs",
          "partial": "Error",
          "signature": "Args a-\u003eString-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:usageError"
      }
    }
  ]
]