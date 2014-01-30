[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module supplies an argument parser.\n Given a description of type [\u003ccode\u003e\u003ca\u003eArg\u003c/a\u003e\u003c/code\u003e] of the legal\n arguments to the program, a list of argument strings,\n and a bit of extra information, the \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e function\n in this module returns an\n \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e data structure suitable for querying using the\n provided functions \u003ccode\u003e\u003ca\u003egotArg\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetArg\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "module",
        "fct-source": "src/System-Console-ParseArgs.html",
        "fct-type": "module",
        "title": "ParseArgs"
      },
      "index": {
        "description": "This module supplies an argument parser Given description of type Arg of the legal arguments to the program list of argument strings and bit of extra information the parseArgs function in this module returns an Args data structure suitable for querying using the provided functions gotArg getArg etc",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ParseArgs",
        "normalized": "",
        "package": "parseargs",
        "partial": "Parse Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:APCData",
      "description": {
        "fct-descr": "\u003cp\u003eClass for building parse control information,\n for backward compatibility.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "class",
        "fct-source": "src/System-Console-ParseArgs.html#APCData",
        "fct-type": "class",
        "title": "APCData"
      },
      "index": {
        "description": "Class for building parse control information for backward compatibility",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "APCData",
        "normalized": "",
        "package": "parseargs",
        "partial": "APCData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Arg",
      "description": {
        "fct-descr": "\u003cp\u003eThe description of an argument, suitable for\n messages and for parsing.  The \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e field\n is used both for flags with a data argument, and\n for positional data arguments.\n\u003c/p\u003e\u003cp\u003eThere are two cases:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The argument is a flag, in which case at least\n     one of \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e is provided;\n\u003c/li\u003e\u003cli\u003e The argument is positional, in which case neither\n     \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e are provided, but \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e is.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf none of \u003ccode\u003e\u003ca\u003eargAbbr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargName\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e are\n provided, this is an error.  See also the\n \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e functions below, which are used to\n generate \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "data",
        "title": "Arg"
      },
      "index": {
        "description": "The description of an argument suitable for messages and for parsing The argData field is used both for flags with data argument and for positional data arguments There are two cases The argument is flag in which case at least one of argAbbr and argName is provided The argument is positional in which case neither argAbbr nor argName are provided but argData is If none of argAbbr argName or argData are provided this is an error See also the argDataRequired argDataOptional and argDataDefaulted functions below which are used to generate argData",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "Arg",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgFileOpener",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eArgType\u003c/a\u003e\u003c/code\u003e instance for opening a file from its string name.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "newtype",
        "fct-source": "src/System-Console-ParseArgs.html#ArgFileOpener",
        "fct-type": "newtype",
        "title": "ArgFileOpener"
      },
      "index": {
        "description": "ArgType instance for opening file from its string name",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgFileOpener",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg File Opener",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgRecord",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the mapping from argument index to value.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#ArgRecord",
        "fct-type": "data",
        "title": "ArgRecord"
      },
      "index": {
        "description": "The type of the mapping from argument index to value",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgRecord",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgType",
      "description": {
        "fct-descr": "\u003cp\u003eType of values that can be parsed by the argument parser.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "class",
        "fct-source": "src/System-Console-ParseArgs.html#ArgType",
        "fct-type": "class",
        "title": "ArgType"
      },
      "index": {
        "description": "Type of values that can be parsed by the argument parser",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgType",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Args",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e produces.  The key\n element is the \u003ccode\u003e\u003ca\u003eArgRecord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eargs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "data",
        "title": "Args"
      },
      "index": {
        "description": "The data structure parseArgs produces The key element is the ArgRecord args",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "Args",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsComplete",
      "description": {
        "fct-descr": "\u003cp\u003eHow \"sloppy\" the parse is.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsComplete",
        "fct-type": "data",
        "title": "ArgsComplete"
      },
      "index": {
        "description": "How sloppy the parse is",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsComplete",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsDash",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to always treat an unknown argument beginning\n with \"-\" as an error, or to allow it to be used as a\n positional argument when possible.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsDash",
        "fct-type": "data",
        "title": "ArgsDash"
      },
      "index": {
        "description": "Whether to always treat an unknown argument beginning with as an error or to allow it to be used as positional argument when possible",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsDash",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ArgsParseControl",
      "description": {
        "fct-descr": "\u003cp\u003eRecord containing the collective parse control information.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsParseControl",
        "fct-type": "data",
        "title": "ArgsParseControl"
      },
      "index": {
        "description": "Record containing the collective parse control information",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsParseControl",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Parse Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:Argtype",
      "description": {
        "fct-descr": "\u003cp\u003eThe types of an argument carrying data.  The constructor\n argument is used to carry a default value.\n\u003c/p\u003e\u003cp\u003eThe constructor argument should really be hidden.\n Values of this type are normally constructed within\n the pseudo-constructors pseudo-constructors\n \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e, to which only the constructor\n function itself is passed.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "data",
        "title": "Argtype"
      },
      "index": {
        "description": "The types of an argument carrying data The constructor argument is used to carry default value The constructor argument should really be hidden Values of this type are normally constructed within the pseudo-constructors pseudo-constructors argDataRequired argDataOptional and argDataDefaulted to which only the constructor function itself is passed",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "Argtype",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:DataArg",
      "description": {
        "fct-descr": "\u003cp\u003eInformation specific to an argument carrying a datum.  This\n is an opaque type, whose instances are constructed using the\n pseudo-constructors \u003ccode\u003e\u003ca\u003eargDataRequired\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargDataOptional\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eargDataDefaulted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#DataArg",
        "fct-type": "data",
        "title": "DataArg"
      },
      "index": {
        "description": "Information specific to an argument carrying datum This is an opaque type whose instances are constructed using the pseudo-constructors argDataRequired argDataOptional and argDataDefaulted",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "DataArg",
        "normalized": "",
        "package": "parseargs",
        "partial": "Data Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "See openFile",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "IOMode",
        "normalized": "",
        "package": "parseargs",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#t:ParseArgsException",
      "description": {
        "fct-descr": "\u003cp\u003eThis exception is raised with an appropriate error message\n when argument parsing fails.  The first argument is the usage\n message, the second the actual error message from the parser.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ParseArgs.html#ParseArgsException",
        "fct-type": "data",
        "title": "ParseArgsException"
      },
      "index": {
        "description": "This exception is raised with an appropriate error message when argument parsing fails The first argument is the usage message the second the actual error message from the parser",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ParseArgsException",
        "normalized": "",
        "package": "parseargs",
        "partial": "Parse Args Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:AppendMode",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "AppendMode",
        "normalized": "",
        "package": "parseargs",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:Arg",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Arg",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "Arg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "Arg",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgFileOpener",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgFileOpener",
        "fct-source": "src/System-Console-ParseArgs.html#ArgFileOpener",
        "fct-type": "function",
        "title": "ArgFileOpener"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgFileOpener",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg File Opener",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:Args",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "function",
        "title": "Args"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "Args",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsComplete",
      "description": {
        "fct-descr": "\u003cp\u003eAny extraneous arguments\n (unparseable from description)\n will cause the parser to fail.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsComplete",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsComplete",
        "fct-type": "function",
        "title": "ArgsComplete"
      },
      "index": {
        "description": "Any extraneous arguments unparseable from description will cause the parser to fail",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsComplete",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsHardDash",
      "description": {
        "fct-descr": "\u003cp\u003eIf an argument begins with\n a \"-\", it will always be\n treated as an error unless\n it corresponds to a flag description.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsHardDash",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsDash",
        "fct-type": "function",
        "title": "ArgsHardDash"
      },
      "index": {
        "description": "If an argument begins with it will always be treated as an error unless it corresponds to flag description",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsHardDash",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Hard Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsInterspersed",
      "description": {
        "fct-descr": "\u003cp\u003eAll extraneous arguments are\n permitted, and will be skipped,\n saved, and returned.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsInterspersed",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsComplete",
        "fct-type": "function",
        "title": "ArgsInterspersed"
      },
      "index": {
        "description": "All extraneous arguments are permitted and will be skipped saved and returned",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsInterspersed",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Interspersed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsParseControl",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsParseControl",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsParseControl",
        "fct-type": "function",
        "title": "ArgsParseControl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsParseControl",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Parse Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsSoftDash",
      "description": {
        "fct-descr": "\u003cp\u003eIf an argument beginning with\n a \"-\" is unrecognized as a flag,\n treat it as a positional argument\n if possible. Otherwise it is an error.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsSoftDash",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsDash",
        "fct-type": "function",
        "title": "ArgsSoftDash"
      },
      "index": {
        "description": "If an argument beginning with is unrecognized as flag treat it as positional argument if possible Otherwise it is an error",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsSoftDash",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Soft Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgsTrailing",
      "description": {
        "fct-descr": "\u003cp\u003eTrailing extraneous arguments are\n permitted, and will be skipped,\n saved, and returned.  The\n constructor argument is the\n name of the args.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsTrailing String",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsComplete",
        "fct-type": "function",
        "title": "ArgsTrailing"
      },
      "index": {
        "description": "Trailing extraneous arguments are permitted and will be skipped saved and returned The constructor argument is the name of the args",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgsTrailing",
        "normalized": "",
        "package": "parseargs",
        "partial": "Args Trailing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeDouble",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgtypeDouble (Maybe Double)",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "function",
        "title": "ArgtypeDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgtypeDouble",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeFloat",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgtypeFloat (Maybe Float)",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "function",
        "title": "ArgtypeFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgtypeFloat",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeInt",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgtypeInt (Maybe Int)",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "function",
        "title": "ArgtypeInt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgtypeInt",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeInteger",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgtypeInteger (Maybe Integer)",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "function",
        "title": "ArgtypeInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgtypeInteger",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ArgtypeString",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgtypeString (Maybe String)",
        "fct-source": "src/System-Console-ParseArgs.html#Argtype",
        "fct-type": "function",
        "title": "ArgtypeString"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ArgtypeString",
        "normalized": "",
        "package": "parseargs",
        "partial": "Argtype String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ParseArgsException",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ParseArgsException String String",
        "fct-source": "src/System-Console-ParseArgs.html#ParseArgsException",
        "fct-type": "function",
        "title": "ParseArgsException"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ParseArgsException",
        "normalized": "",
        "package": "parseargs",
        "partial": "Parse Args Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:ReadMode",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "ReadMode",
        "normalized": "",
        "package": "parseargs",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:WriteMode",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "WriteMode",
        "normalized": "",
        "package": "parseargs",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:apcComplete",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsComplete",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsParseControl",
        "fct-type": "function",
        "title": "apcComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "apcComplete",
        "normalized": "",
        "package": "parseargs",
        "partial": "Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:apcDash",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgsDash",
        "fct-source": "src/System-Console-ParseArgs.html#ArgsParseControl",
        "fct-type": "function",
        "title": "apcDash"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "apcDash",
        "normalized": "",
        "package": "parseargs",
        "partial": "Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argAbbr",
      "description": {
        "fct-descr": "\u003cp\u003eOne-character flag name.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Maybe Char",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "argAbbr"
      },
      "index": {
        "description": "One-character flag name",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argAbbr",
        "normalized": "",
        "package": "parseargs",
        "partial": "Abbr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argData",
      "description": {
        "fct-descr": "\u003cp\u003eDatum description.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Maybe DataArg",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "argData"
      },
      "index": {
        "description": "Datum description",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argData",
        "normalized": "",
        "package": "parseargs",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataDefaulted",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given optional argument with the\n given default.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e a-\u003e Maybe DataArg",
        "fct-type": "function",
        "title": "argDataDefaulted"
      },
      "index": {
        "description": "Generate the argData for the given optional argument with the given default",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argDataDefaulted",
        "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003ea-\u003eMaybe DataArg",
        "package": "parseargs",
        "partial": "Data Defaulted",
        "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003ea-\u003eMaybe DataArg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataOptional",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given optional argument with no default.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e Maybe DataArg",
        "fct-type": "function",
        "title": "argDataOptional"
      },
      "index": {
        "description": "Generate the argData for the given optional argument with no default",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argDataOptional",
        "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
        "package": "parseargs",
        "partial": "Data Optional",
        "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDataRequired",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the \u003ccode\u003e\u003ca\u003eargData\u003c/a\u003e\u003c/code\u003e for the given non-optional argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String-\u003e (Maybe a -\u003e Argtype)-\u003e Maybe DataArg",
        "fct-type": "function",
        "title": "argDataRequired"
      },
      "index": {
        "description": "Generate the argData for the given non-optional argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argDataRequired",
        "normalized": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg",
        "package": "parseargs",
        "partial": "Data Required",
        "signature": "String-\u003e(Maybe a-\u003eArgtype)-\u003eMaybe DataArg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argDesc",
      "description": {
        "fct-descr": "\u003cp\u003eDocumentation for the argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "argDesc"
      },
      "index": {
        "description": "Documentation for the argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argDesc",
        "normalized": "",
        "package": "parseargs",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argFileOpener",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to open the file\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "IOMode -\u003e IO Handle",
        "fct-source": "src/System-Console-ParseArgs.html#ArgFileOpener",
        "fct-type": "function",
        "title": "argFileOpener"
      },
      "index": {
        "description": "Function to open the file",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argFileOpener",
        "normalized": "IOMode-\u003eIO Handle",
        "package": "parseargs",
        "partial": "File Opener",
        "signature": "IOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argIndex",
      "description": {
        "fct-descr": "\u003cp\u003eConnects the input description\n to the output argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "a",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "argIndex"
      },
      "index": {
        "description": "Connects the input description to the output argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argIndex",
        "normalized": "",
        "package": "parseargs",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argName",
      "description": {
        "fct-descr": "\u003cp\u003e\"Long name\" of flag.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Console-ParseArgs.html#Arg",
        "fct-type": "function",
        "title": "argName"
      },
      "index": {
        "description": "Long name of flag",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argName",
        "normalized": "",
        "package": "parseargs",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:args",
      "description": {
        "fct-descr": "\u003cp\u003eThe argument map.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "ArgRecord a",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "function",
        "title": "args"
      },
      "index": {
        "description": "The argument map",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "args",
        "normalized": "",
        "package": "parseargs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsProgName",
      "description": {
        "fct-descr": "\u003cp\u003eBasename of 0th argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "function",
        "title": "argsProgName"
      },
      "index": {
        "description": "Basename of th argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argsProgName",
        "normalized": "",
        "package": "parseargs",
        "partial": "Prog Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsRest",
      "description": {
        "fct-descr": "\u003cp\u003eRemaining unprocessed arguments.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "[String]",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "function",
        "title": "argsRest"
      },
      "index": {
        "description": "Remaining unprocessed arguments",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argsRest",
        "normalized": "[String]",
        "package": "parseargs",
        "partial": "Rest",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:argsUsage",
      "description": {
        "fct-descr": "\u003cp\u003eFull usage string.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ParseArgs.html#Args",
        "fct-type": "function",
        "title": "argsUsage"
      },
      "index": {
        "description": "Full usage string",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "argsUsage",
        "normalized": "",
        "package": "parseargs",
        "partial": "Usage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:baseName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the filename part of a pathname.\n Unnecessarily efficient implementation does a single\n tail-call traversal with no construction.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String-\u003e String",
        "fct-type": "function",
        "title": "baseName"
      },
      "index": {
        "description": "Return the filename part of pathname Unnecessarily efficient implementation does single tail-call traversal with no construction",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "baseName",
        "normalized": "String-\u003eString",
        "package": "parseargs",
        "partial": "Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getAPCData",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "a -\u003e ArgsParseControl",
        "fct-source": "src/System-Console-ParseArgs.html#getAPCData",
        "fct-type": "method",
        "title": "getAPCData"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getAPCData",
        "normalized": "a-\u003eArgsParseControl",
        "package": "parseargs",
        "partial": "APCData",
        "signature": "a-\u003eArgsParseControl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArg",
      "description": {
        "fct-descr": "\u003cp\u003eFetch an argument's value if it is present.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "getArg",
        "fct-source": "src/System-Console-ParseArgs.html#getArg",
        "fct-type": "method",
        "title": "getArg"
      },
      "index": {
        "description": "Fetch an argument value if it is present",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArg",
        "normalized": "",
        "package": "parseargs",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgDouble",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Maybe Double",
        "fct-type": "function",
        "title": "getArgDouble"
      },
      "index": {
        "description": "Deprecated Return the Double value if any of the given argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgDouble",
        "normalized": "Args a-\u003ea-\u003eMaybe Double",
        "package": "parseargs",
        "partial": "Arg Double",
        "signature": "Args a-\u003ea-\u003eMaybe Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgFile",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Treat the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument as\n a file handle and try to open it as requested.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e IOMode-\u003e IO (Maybe Handle)",
        "fct-type": "function",
        "title": "getArgFile"
      },
      "index": {
        "description": "Deprecated Treat the String value if any of the given argument as file handle and try to open it as requested",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgFile",
        "normalized": "Args a-\u003ea-\u003eIOMode-\u003eIO(Maybe Handle)",
        "package": "parseargs",
        "partial": "Arg File",
        "signature": "Args a-\u003ea-\u003eIOMode-\u003eIO(Maybe Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgFloat",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Maybe Float",
        "fct-type": "function",
        "title": "getArgFloat"
      },
      "index": {
        "description": "Deprecated Return the Float value if any of the given argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgFloat",
        "normalized": "Args a-\u003ea-\u003eMaybe Float",
        "package": "parseargs",
        "partial": "Arg Float",
        "signature": "Args a-\u003ea-\u003eMaybe Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgInt",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Maybe Int",
        "fct-type": "function",
        "title": "getArgInt"
      },
      "index": {
        "description": "Deprecated Return the Int value if any of the given argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgInt",
        "normalized": "Args a-\u003ea-\u003eMaybe Int",
        "package": "parseargs",
        "partial": "Arg Int",
        "signature": "Args a-\u003ea-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgInteger",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e Return the \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Maybe Integer",
        "fct-type": "function",
        "title": "getArgInteger"
      },
      "index": {
        "description": "Deprecated Return the Integer value if any of the given argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgInteger",
        "normalized": "Args a-\u003ea-\u003eMaybe Integer",
        "package": "parseargs",
        "partial": "Arg Integer",
        "signature": "Args a-\u003ea-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgStdio",
      "description": {
        "fct-descr": "\u003cp\u003eTreat the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument as a\n file handle and try to open it as requested.  If not\n present, substitute the appropriate one of stdin or\n stdout as indicated by \u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e IOMode-\u003e IO Handle",
        "fct-type": "function",
        "title": "getArgStdio"
      },
      "index": {
        "description": "Treat the String value if any of the given argument as file handle and try to open it as requested If not present substitute the appropriate one of stdin or stdout as indicated by IOMode",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgStdio",
        "normalized": "Args a-\u003ea-\u003eIOMode-\u003eIO Handle",
        "package": "parseargs",
        "partial": "Arg Stdio",
        "signature": "Args a-\u003ea-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getArgString",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003eDeprecated\u003c/dt\u003e\u003cdd\u003e  Return the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e value, if any, of the given argument.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Maybe String",
        "fct-type": "function",
        "title": "getArgString"
      },
      "index": {
        "description": "Deprecated Return the String value if any of the given argument",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getArgString",
        "normalized": "Args a-\u003ea-\u003eMaybe String",
        "package": "parseargs",
        "partial": "Arg String",
        "signature": "Args a-\u003ea-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:getRequiredArg",
      "description": {
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "getRequiredArg",
        "fct-source": "src/System-Console-ParseArgs.html#getRequiredArg",
        "fct-type": "method",
        "title": "getRequiredArg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "getRequiredArg",
        "normalized": "",
        "package": "parseargs",
        "partial": "Required Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:gotArg",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a given optional argument was supplied. Works on all types.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a-\u003e a-\u003e Bool",
        "fct-type": "function",
        "title": "gotArg"
      },
      "index": {
        "description": "Check whether given optional argument was supplied Works on all types",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "gotArg",
        "normalized": "Args a-\u003ea-\u003eBool",
        "package": "parseargs",
        "partial": "Arg",
        "signature": "Args a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseArgs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a description of the arguments, \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e\n produces a map from the arguments to their \"values\" and\n some other useful byproducts.  \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e requires that\n the argument descriptions occur in the order 1) flag\n arguments, then 2) positional arguments; otherwise a\n runtime error will be thrown.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "b-\u003e [Arg a]-\u003e String-\u003e [String]-\u003e Args a",
        "fct-type": "function",
        "title": "parseArgs"
      },
      "index": {
        "description": "Given description of the arguments parseArgs produces map from the arguments to their values and some other useful byproducts parseArgs requires that the argument descriptions occur in the order flag arguments then positional arguments otherwise runtime error will be thrown",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "parseArgs",
        "normalized": "a-\u003e[Arg b]-\u003eString-\u003e[String]-\u003eArgs b",
        "package": "parseargs",
        "partial": "Args",
        "signature": "b-\u003e[Arg a]-\u003eString-\u003e[String]-\u003eArgs a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseArgsIO",
      "description": {
        "fct-descr": "\u003cp\u003eMost of the time, you just want the environment's\n arguments and are willing to live in the IO monad.\n This version of \u003ccode\u003e\u003ca\u003eparseArgs\u003c/a\u003e\u003c/code\u003e digs the pathname and arguments\n out of the system directly.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "b-\u003e [Arg a]-\u003e IO (Args a)",
        "fct-type": "function",
        "title": "parseArgsIO"
      },
      "index": {
        "description": "Most of the time you just want the environment arguments and are willing to live in the IO monad This version of parseArgs digs the pathname and arguments out of the system directly",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "parseArgsIO",
        "normalized": "a-\u003e[Arg b]-\u003eIO(Args b)",
        "package": "parseargs",
        "partial": "Args IO",
        "signature": "b-\u003e[Arg a]-\u003eIO(Args a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:parseError",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a usage error with the given supplementary message string.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "String-\u003e String-\u003e a",
        "fct-type": "function",
        "title": "parseError"
      },
      "index": {
        "description": "Generate usage error with the given supplementary message string",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "parseError",
        "normalized": "String-\u003eString-\u003ea",
        "package": "parseargs",
        "partial": "Error",
        "signature": "String-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parseargs/docs/System-Console-ParseArgs.html#v:usageError",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a usage error with the given supplementary message string.\n\u003c/p\u003e",
        "fct-module": "System.Console.ParseArgs",
        "fct-package": "parseargs",
        "fct-signature": "Args a -\u003e String -\u003e b",
        "fct-source": "src/System-Console-ParseArgs.html#usageError",
        "fct-type": "function",
        "title": "usageError"
      },
      "index": {
        "description": "Generate usage error with the given supplementary message string",
        "hierarchy": "System Console ParseArgs",
        "module": "System.Console.ParseArgs",
        "name": "usageError",
        "normalized": "Args a-\u003eString-\u003eb",
        "package": "parseargs",
        "partial": "Error",
        "signature": "Args a-\u003eString-\u003eb"
      }
    }
  }
]