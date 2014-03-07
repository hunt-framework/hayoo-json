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
        "word": "getflag"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis adaptation of \u003ca\u003eSystem.Console.GetOpt\u003c/a\u003e provides easy handling\n of classic Unix/Plan 9-style command line options.  This means that\n single dashes are used to prefix option names, which may be of any\n length (not just single characters, although such is generally\n recommended).  It is not possible to collapse multiple options in a\n single parameter, so you will have to write \u003ccode\u003e-a -b\u003c/code\u003e instead of\n \u003ccode\u003e-ab\u003c/code\u003e.  A single GNU extension is included: the parameter \u003ccode\u003e--\u003c/code\u003e will\n cause anything past it to be returned as arguments, not options,\n even if the parameters have leading dashes.\n\u003c/p\u003e\u003cp\u003eThe API is almost compatible with \u003ca\u003eSystem.Console.GetOpt\u003c/a\u003e, the only\n difference being in \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e, which no longer permits multiple\n names per option.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.GetFlag",
          "name": "GetFlag",
          "package": "getflag",
          "source": "src/System-Console-GetFlag.html",
          "type": "module"
        },
        "index": {
          "description": "This adaptation of System.Console.GetOpt provides easy handling of classic Unix Plan style command line options This means that single dashes are used to prefix option names which may be of any length not just single characters although such is generally recommended It is not possible to collapse multiple options in single parameter so you will have to write instead of ab single GNU extension is included the parameter will cause anything past it to be returned as arguments not options even if the parameters have leading dashes The API is almost compatible with System.Console.GetOpt the only difference being in OptDescr which no longer permits multiple names per option",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "GetFlag",
          "package": "getflag",
          "partial": "Get Flag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes whether an option takes an argument or not, and if so\n how the argument is injected into a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "ArgDescr",
          "package": "getflag",
          "source": "src/System-Console-GetFlag.html#ArgDescr",
          "type": "data"
        },
        "index": {
          "description": "Describes whether an option takes an argument or not and if so how the argument is injected into value of type",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "ArgDescr",
          "package": "getflag",
          "partial": "Arg Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#t:ArgDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with options following non-options\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "ArgOrder",
          "package": "getflag",
          "source": "src/System-Console-GetFlag.html#ArgOrder",
          "type": "data"
        },
        "index": {
          "description": "What to do with options following non-options",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "ArgOrder",
          "package": "getflag",
          "partial": "Arg Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#t:ArgOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e describes a single option.\n\u003c/p\u003e\u003cp\u003eThe arguments to \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the name of the option\n\u003c/li\u003e\u003cli\u003e argument descriptor\n\u003c/li\u003e\u003cli\u003e explanation of option for user\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Console.GetFlag",
          "name": "OptDescr",
          "package": "getflag",
          "source": "src/System-Console-GetFlag.html#OptDescr",
          "type": "data"
        },
        "index": {
          "description": "Each OptDescr describes single option The arguments to Option are the name of the option argument descriptor explanation of option for user",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "OptDescr",
          "package": "getflag",
          "partial": "Opt Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#t:OptDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno argument expected\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "NoArg",
          "package": "getflag",
          "signature": "NoArg a",
          "source": "src/System-Console-GetFlag.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "no argument expected",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "NoArg",
          "package": "getflag",
          "partial": "No Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:NoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional argument\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "OptArg",
          "package": "getflag",
          "signature": "OptArg (Maybe String -\u003e a) String",
          "source": "src/System-Console-GetFlag.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "optional argument",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "OptArg",
          "normalized": "OptArg(Maybe String-\u003ea)String",
          "package": "getflag",
          "partial": "Opt Arg",
          "signature": "OptArg(Maybe String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:OptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.GetFlag",
          "name": "Option",
          "package": "getflag",
          "signature": "Option String (ArgDescr a) String",
          "source": "src/System-Console-GetFlag.html#OptDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "Option",
          "package": "getflag",
          "partial": "Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efreely intersperse options and non-options\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "Permute",
          "package": "getflag",
          "signature": "Permute",
          "source": "src/System-Console-GetFlag.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "freely intersperse options and non-options",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "Permute",
          "package": "getflag",
          "partial": "Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:Permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoption requires argument\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "ReqArg",
          "package": "getflag",
          "signature": "ReqArg (String -\u003e a) String",
          "source": "src/System-Console-GetFlag.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "option requires argument",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "ReqArg",
          "normalized": "ReqArg(String-\u003ea)String",
          "package": "getflag",
          "partial": "Req Arg",
          "signature": "ReqArg(String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:ReqArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno option processing after first non-option\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "RequireOrder",
          "package": "getflag",
          "signature": "RequireOrder",
          "source": "src/System-Console-GetFlag.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "no option processing after first non-option",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "RequireOrder",
          "package": "getflag",
          "partial": "Require Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:RequireOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap non-options into options\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "ReturnInOrder",
          "package": "getflag",
          "signature": "ReturnInOrder (String -\u003e a)",
          "source": "src/System-Console-GetFlag.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "wrap non-options into options",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "ReturnInOrder",
          "normalized": "ReturnInOrder(String-\u003ea)",
          "package": "getflag",
          "partial": "Return In Order",
          "signature": "ReturnInOrder(String-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:ReturnInOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the command-line, and return the list of values that matched\n(and those that didn't). The arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The order requirements (see \u003ccode\u003e\u003ca\u003eArgOrder\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The option descriptions (see \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The actual command line arguments (presumably got from \n  \u003ccode\u003eSystem.Environment.getArgs\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetOpt\u003c/a\u003e\u003c/code\u003e returns a triple consisting of the option arguments, a list\nof non-options, and a list of error messages.\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "getOpt",
          "package": "getflag",
          "signature": "ArgOrder a -\u003e [OptDescr a] -\u003e [String] -\u003e ([a], [String], [String])",
          "source": "src/System-Console-GetFlag.html#getOpt",
          "type": "function"
        },
        "index": {
          "description": "Process the command-line and return the list of values that matched and those that didn The arguments are The order requirements see ArgOrder The option descriptions see OptDescr The actual command line arguments presumably got from System.Environment.getArgs getOpt returns triple consisting of the option arguments list of non-options and list of error messages",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "getOpt",
          "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])",
          "package": "getflag",
          "partial": "Opt",
          "signature": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:getOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is almost the same as \u003ccode\u003e\u003ca\u003egetOpt\u003c/a\u003e\u003c/code\u003e, but returns a quadruple\nconsisting of the option arguments, a list of non-options, a list of\nunrecognized options, and a list of error messages.\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "getOpt'",
          "package": "getflag",
          "signature": "ArgOrder a -\u003e [OptDescr a] -\u003e [String] -\u003e ([a], [String], [String], [String])",
          "source": "src/System-Console-GetFlag.html#getOpt%27",
          "type": "function"
        },
        "index": {
          "description": "This is almost the same as getOpt but returns quadruple consisting of the option arguments list of non-options list of unrecognized options and list of error messages",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "getOpt'",
          "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String],[String])",
          "package": "getflag",
          "partial": "Opt'",
          "signature": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:getOpt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a string describing the usage of a command, derived from\n the header (first argument) and the options described by the \n second argument.\n\u003c/p\u003e",
          "module": "System.Console.GetFlag",
          "name": "usageInfo",
          "package": "getflag",
          "signature": "String -\u003e [OptDescr a] -\u003e String",
          "source": "src/System-Console-GetFlag.html#usageInfo",
          "type": "function"
        },
        "index": {
          "description": "Return string describing the usage of command derived from the header first argument and the options described by the second argument",
          "hierarchy": "System Console GetFlag",
          "module": "System.Console.GetFlag",
          "name": "usageInfo",
          "normalized": "String-\u003e[OptDescr a]-\u003eString",
          "package": "getflag",
          "partial": "Info",
          "signature": "String-\u003e[OptDescr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/getflag/docs/System-Console-GetFlag.html#v:usageInfo"
      }
    }
  ]
]