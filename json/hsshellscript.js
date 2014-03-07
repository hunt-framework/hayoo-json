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
        "word": "hsshellscript"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a more convient way of parsing command line\n arguments than the GHC GetOpt package. It makes use of GetOpt, but hides\n it from the user. It is reexported from module HsShellScript.\n\u003c/p\u003e\u003cp\u003eFor each command line argument, a description is to be created with\n \u003ccode\u003eargdesc\u003c/code\u003e. Then the command line arguments are evaluated with\n one of the \u003ccode\u003egetargs\u003c/code\u003e... functions. In case of an error, this will cause a\n exception, which provides an expressive error message to be\n printed. Then the \u003ccode\u003earg\u003c/code\u003e... functions are used to extract the\n values contained in the arguments, with the right type. The typical use\n of HsShellScript.Args looks something like this:\n\u003c/p\u003e\u003cpre\u003eimport HsShellScript\n\nmain =\n   do let a_onevalue = argdesc [ desc_at_most_once, ... ]\n          a_values   = argdesc [ desc_direct, ... ]\n          a_switch   = argdesc [ ... ]\n          ...\n          header = \"mclapep - My Command Line Argument Parser Example Program, version 1.0.0\"\n\n      args \u003c- getargs header [a_onevalue, a_values, a_switch, ...]\n\n      val  \u003c- optarg_req a_onevalue args        -- val  :: Maybe String\n      vals \u003c- args_req   a_values args          -- vals :: [String]\n      doit \u003c- arg_switch a_switch args          -- doit :: Bool\n      ...\n   `catch` \n      (\\argerror -\u003e do\n          hPutStrLn stderr $ (argerror_message argerror) ++ \"\\n\\n\" ++ (argerror_usageinfo argerror)\n          exitFailure\n      )\n\u003c/pre\u003e\u003cp\u003eErrors in the argument descriptions are regarded as bugs, and handled\n by aborting the program with a message which is meaningful to the\n programmer. It is assumed that the argument description is a constant for\n a given program.\n\u003c/p\u003e\u003cp\u003eErrors in the arguments are reported using HsShellScript's error handling\n scheme. An error description\n value is generated, and either returned via an \u003ccode\u003eEither\u003c/code\u003e\n value, or thrown as an exception.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HsShellScript.Args",
          "name": "Args",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides more convient way of parsing command line arguments than the GHC GetOpt package It makes use of GetOpt but hides it from the user It is reexported from module HsShellScript For each command line argument description is to be created with argdesc Then the command line arguments are evaluated with one of the getargs functions In case of an error this will cause exception which provides an expressive error message to be printed Then the arg functions are used to extract the values contained in the arguments with the right type The typical use of HsShellScript.Args looks something like this import HsShellScript main do let onevalue argdesc desc at most once values argdesc desc direct switch argdesc header mclapep My Command Line Argument Parser Example Program version args getargs header onevalue values switch val optarg req onevalue args val Maybe String vals args req values args vals String doit arg switch switch args doit Bool catch argerror do hPutStrLn stderr argerror message argerror argerror usageinfo argerror exitFailure Errors in the argument descriptions are regarded as bugs and handled by aborting the program with message which is meaningful to the programmer It is assumed that the argument description is constant for given program Errors in the arguments are reported using HsShellScript error handling scheme An error description value is generated and either returned via an Either value or thrown as an exception",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "Args",
          "package": "hsshellscript",
          "partial": "Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError thrown when there is an error in the\n command line arguments.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgError",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#ArgError",
          "type": "data"
        },
        "index": {
          "description": "Error thrown when there is an error in the command line arguments",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgError",
          "package": "hsshellscript",
          "partial": "Arg Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:ArgError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument value tester function. This tests the format of an argument's value for errors. The tester function is specified by\n \u003ccode\u003e\u003ca\u003edesc_tester\u003c/a\u003e\u003c/code\u003e or such, as part of the argument description. \n\u003c/p\u003e\u003cp\u003eThe tester is passed the argument value. If the format is correct, then it returns \u003ccode\u003eNothing\u003c/code\u003e. If there is an error, then it returns \u003ccode\u003eJust msgf\u003c/code\u003e,\n with \u003ccode\u003emsgf\u003c/code\u003e being an error message generation function. This function gets passed the argument description, and produces the error\n message. The argument description typically is used to extract a descriptive name of the argument (using \u003ccode\u003e\u003ca\u003eargname\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eargname_a\u003c/a\u003e\u003c/code\u003e) to be included\n in the error message.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "Argtester",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#Argtester",
          "type": "type"
        },
        "index": {
          "description": "Argument value tester function This tests the format of an argument value for errors The tester function is specified by desc tester or such as part of the argument description The tester is passed the argument value If the format is correct then it returns Nothing If there is an error then it returns Just msgf with msgf being an error message generation function This function gets passed the argument description and produces the error message The argument description typically is used to extract descriptive name of the argument using argname or argname to be included in the error message",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "Argtester",
          "package": "hsshellscript",
          "partial": "Argtester",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:Argtester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of one command line argument. These are generated by\n \u003ccode\u003eargdesc\u003c/code\u003e from a list of argument properties, and subsequently used by one of the\n \u003ccode\u003egetargs\u003c/code\u003e... functions. This type is abstract.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentDescription",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "data"
        },
        "index": {
          "description": "Description of one command line argument These are generated by argdesc from list of argument properties and subsequently used by one of the getargs functions This type is abstract",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentDescription",
          "package": "hsshellscript",
          "partial": "Argument Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:ArgumentDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA property of a command line argument. These are generated by the\n \u003ccode\u003edesc_\u003c/code\u003e... functions, and condensed to argument\n descriptions of type \u003ccode\u003eArgumentDescription\u003c/code\u003e by \u003ccode\u003eargdesc\u003c/code\u003e. This type is abstract.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentProperty",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#ArgumentProperty",
          "type": "data"
        },
        "index": {
          "description": "property of command line argument These are generated by the desc functions and condensed to argument descriptions of type ArgumentDescription by argdesc This type is abstract",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentProperty",
          "package": "hsshellscript",
          "partial": "Argument Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:ArgumentProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the command line argument take an value?\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentValueSpec",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#ArgumentValueSpec",
          "type": "data"
        },
        "index": {
          "description": "Does the command line argument take an value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentValueSpec",
          "package": "hsshellscript",
          "partial": "Argument Value Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:ArgumentValueSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis represents the parsed contents of the command line. It is returned\n by the \u003ccode\u003egetargs\u003c/code\u003e... functions, and passed on to the\n value extraction functions by the user.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetargs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetargs_ordered\u003c/a\u003e\u003c/code\u003e, 'getargs\\'', 'getargs_ordered\\''.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "Arguments",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Args.html#Arguments",
          "type": "data"
        },
        "index": {
          "description": "This represents the parsed contents of the command line It is returned by the getargs functions and passed on to the value extraction functions by the user See getargs getargs ordered getargs getargs ordered",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "Arguments",
          "package": "hsshellscript",
          "partial": "Arguments",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#t:Arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Args",
          "name": "ArgError",
          "package": "hsshellscript",
          "signature": "ArgError",
          "source": "src/HsShellScript-Args.html#ArgError",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgError",
          "package": "hsshellscript",
          "partial": "Arg Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:ArgError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Args",
          "name": "ArgumentDescription",
          "package": "hsshellscript",
          "signature": "ArgumentDescription",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentDescription",
          "package": "hsshellscript",
          "partial": "Argument Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:ArgumentDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo value\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_none",
          "package": "hsshellscript",
          "signature": "ArgumentValue_none",
          "source": "src/HsShellScript-Args.html#ArgumentValueSpec",
          "type": "function"
        },
        "index": {
          "description": "No value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_none",
          "package": "hsshellscript",
          "partial": "Argument Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:ArgumentValue_none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue optional\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_optional",
          "package": "hsshellscript",
          "signature": "ArgumentValue_optional",
          "source": "src/HsShellScript-Args.html#ArgumentValueSpec",
          "type": "function"
        },
        "index": {
          "description": "Value optional",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_optional",
          "package": "hsshellscript",
          "partial": "Argument Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:ArgumentValue_optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue required\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_required",
          "package": "hsshellscript",
          "signature": "ArgumentValue_required",
          "source": "src/HsShellScript-Args.html#ArgumentValueSpec",
          "type": "function"
        },
        "index": {
          "description": "Value required",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "ArgumentValue_required",
          "package": "hsshellscript",
          "partial": "Argument Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:ArgumentValue_required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the specified argument is present, then none of the other arguments may be present.\n\u003c/p\u003e\u003cp\u003eOtherwise throw an ArgError.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "arg_conflicts",
          "package": "hsshellscript",
          "signature": "ArgumentDescription-\u003e [ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "When the specified argument is present then none of the other arguments may be present Otherwise throw an ArgError",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "arg_conflicts",
          "normalized": "ArgumentDescription-\u003e[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "ArgumentDescription-\u003e[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:arg_conflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the specified argument occurs in the command line. \n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "arg_occurs",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Whether the specified argument occurs in the command line",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "arg_occurs",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eBool",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:arg_occurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery whether a certain switch is specified on the command line. A switch is an\n argument which is allowed zero or one time, and has no value.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "arg_switch",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Query whether certain switch is specified on the command line switch is an argument which is allowed zero or one time and has no value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "arg_switch",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eBool",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:arg_switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the number of occurences of an argument.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "arg_times",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Query the number of occurences of an argument",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "arg_times",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eInt",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:arg_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an argument description from a list of argument properties. This\n condenses the list to an argument description,\n which can be uses by the \u003ccode\u003egetargs\u003c/code\u003e... functions and the\n argument value extraction functions.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc",
          "package": "hsshellscript",
          "signature": "[ArgumentProperty]-\u003e ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Make an argument description from list of argument properties This condenses the list to an argument description which can be uses by the getargs functions and the argument value extraction functions",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc",
          "normalized": "[ArgumentProperty]-\u003eArgumentDescription",
          "package": "hsshellscript",
          "signature": "[ArgumentProperty]-\u003eArgumentDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat about a possible value of the argument?\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg",
          "package": "hsshellscript",
          "signature": "ArgumentValueSpec",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "What about possible value of the argument",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_argarg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescrition of the argument, for message generation\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg_description",
          "package": "hsshellscript",
          "signature": "Maybe String",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Descrition of the argument for message generation",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg_description",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_argarg_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument value tester\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg_tester",
          "package": "hsshellscript",
          "signature": "Maybe Argtester",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Argument value tester",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_argarg_tester",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_argarg_tester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName for argument's value, for message generation\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_argargname",
          "package": "hsshellscript",
          "signature": "Maybe String",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Name for argument value for message generation",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_argargname",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_argargname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong option names\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_long_args",
          "package": "hsshellscript",
          "signature": "[String]",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Long option names",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_long_args",
          "normalized": "[String]",
          "package": "hsshellscript",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_long_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort option names\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_short_args",
          "package": "hsshellscript",
          "signature": "[Char]",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Short option names",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_short_args",
          "normalized": "[Char]",
          "package": "hsshellscript",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_short_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum and maximum of number of occurences allowed\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argdesc_times",
          "package": "hsshellscript",
          "signature": "Maybe (Int, Int)",
          "source": "src/HsShellScript-Args.html#ArgumentDescription",
          "type": "function"
        },
        "index": {
          "description": "Minimum and maximum of number of occurences allowed",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argdesc_times",
          "normalized": "Maybe(Int,Int)",
          "package": "hsshellscript",
          "signature": "Maybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argdesc_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError message generated by HsShellScript.Args.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argerror_message",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Args.html#ArgError",
          "type": "function"
        },
        "index": {
          "description": "Error message generated by HsShellScript.Args",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argerror_message",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argerror_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage information derived from the argument descriptions.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argerror_usageinfo",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Args.html#ArgError",
          "type": "function"
        },
        "index": {
          "description": "Usage information derived from the argument descriptions",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argerror_usageinfo",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argerror_usageinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a descriptive argument name from an argument description, suitable for use in error messages. This uses the long and short argument names\n (as specified by \u003ccode\u003e\u003ca\u003edesc_short\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edesc_long\u003c/a\u003e\u003c/code\u003e) and generates descriptive names of the argument like \"-f\", \"-myflag\", \"-f/--myflag\", etc. All the\n argument names are included. In case of direct arguments (see \u003ccode\u003e\u003ca\u003edesc_direct\u003c/a\u003e\u003c/code\u003e), the descriptive name is \"\u003ccode\u003e(direct argument)\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argname",
          "package": "hsshellscript",
          "signature": "ArgumentDescription -\u003e String",
          "source": "src/HsShellScript-Args.html#argname",
          "type": "function"
        },
        "index": {
          "description": "Generate descriptive argument name from an argument description suitable for use in error messages This uses the long and short argument names as specified by desc short and desc long and generates descriptive names of the argument like myflag myflag etc All the argument names are included In case of direct arguments see desc direct the descriptive name is direct argument",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argname",
          "normalized": "ArgumentDescription-\u003eString",
          "package": "hsshellscript",
          "signature": "ArgumentDescription-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a descriptive argument name from an argument description, beginning with \"argument\". This uses the long and short argument names (as\n specified by \u003ccode\u003e\u003ca\u003edesc_short\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edesc_long\u003c/a\u003e\u003c/code\u003e) and generates descriptive names of the argument like \"argument -f\", \"argument -myflag\", \"argument\n -f/--myflag\", etc. All the argument names are included. In case of direct arguments (see \u003ccode\u003e\u003ca\u003edesc_direct\u003c/a\u003e\u003c/code\u003e), the descriptive name is \"direct argument\".\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "argname_a",
          "package": "hsshellscript",
          "signature": "ArgumentDescription -\u003e String",
          "source": "src/HsShellScript-Args.html#argname_a",
          "type": "function"
        },
        "index": {
          "description": "Generate descriptive argument name from an argument description beginning with argument This uses the long and short argument names as specified by desc short and desc long and generates descriptive names of the argument like argument argument myflag argument myflag etc All the argument names are included In case of direct arguments see desc direct the descriptive name is direct argument",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "argname_a",
          "normalized": "ArgumentDescription-\u003eString",
          "package": "hsshellscript",
          "signature": "ArgumentDescription-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:argname_a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the specified arguments must be present.\n\u003c/p\u003e\u003cp\u003eThrows an ArgError if any is missing.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_all",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "All of the specified arguments must be present Throws an ArgError if any is missing",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_all",
          "normalized": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt least one of the specified arguments must be present.\n\u003c/p\u003e\u003cp\u003eOtherwise throw an ArgError.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_at_least_one",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "At least one of the specified arguments must be present Otherwise throw an ArgError",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_at_least_one",
          "normalized": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_at_least_one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt most one of the specified arguments may be present.\n\u003c/p\u003e\u003cp\u003eOtherwise throw an ArgError.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_at_most_one",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "At most one of the specified arguments may be present Otherwise throw an ArgError",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_at_most_one",
          "normalized": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_at_most_one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNone of the specifed arguments may be present.\n\u003c/p\u003e\u003cp\u003eThrows an ArgError if any of the arguments are present.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_none",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "None of the specifed arguments may be present Throws an ArgError if any of the arguments are present",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_none",
          "normalized": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly one of the specified arguments must be present.\n\u003c/p\u003e\u003cp\u003eOtherwise throw an ArgError.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_one",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003e Arguments-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Exactly one of the specified arguments must be present Otherwise throw an ArgError",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_one",
          "normalized": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[ArgumentDescription]-\u003eArguments-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the values of an argument with optional value. This is for\n arguments which take an optional value, and may occur several times. The\n occurences with value are represented as \u003ccode\u003eJust value\u003c/code\u003e, the occurences\n without are represented as \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_opt",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e [Maybe String]",
          "type": "function"
        },
        "index": {
          "description": "Query the values of an argument with optional value This is for arguments which take an optional value and may occur several times The occurences with value are represented as Just value the occurences without are represented as Nothing",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_opt",
          "normalized": "Arguments-\u003eArgumentDescription-\u003e[Maybe String]",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003e[Maybe String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the values of an argument with required value. This is for\n arguments which require a value, and may occur several times.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "args_req",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Query the values of an argument with required value This is for arguments which require value and may occur several times",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "args_req",
          "normalized": "Arguments-\u003eArgumentDescription-\u003e[String]",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:args_req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument may occur any number of times.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_any_times",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument may occur any number of times",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_any_times",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_any_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the descriptive name for command line argument's value. Used for the\n generation of the usage message. The name should be very short.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_argname",
          "package": "hsshellscript",
          "signature": "String-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Specify the descriptive name for command line argument value Used for the generation of the usage message The name should be very short",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_argname",
          "normalized": "String-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "String-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_argname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument must have at least the specified number of\n occurences, and has no upper limit of occurences.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_at_least",
          "package": "hsshellscript",
          "signature": "Int-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument must have at least the specified number of occurences and has no upper limit of occurences",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_at_least",
          "normalized": "Int-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "Int-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_at_least"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument must occur at least one time.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_at_least_once",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument must occur at least one time",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_at_least_once",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_at_least_once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument does not need to be present, and may occur at most\n the specified number of times.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_at_most",
          "package": "hsshellscript",
          "signature": "Int-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument does not need to be present and may occur at most the specified number of times",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_at_most",
          "normalized": "Int-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "Int-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_at_most"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument must occur at most one time.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_at_most_once",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument must occur at most one time",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_at_most_once",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_at_most_once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a short description of what the argument does. Used for the\n generation of the usage message. This is to fit on one line, after the\n short and long argument names. It should be 40 characters long or so.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_description",
          "package": "hsshellscript",
          "signature": "String-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Specify short description of what the argument does Used for the generation of the usage message This is to fit on one line after the short and long argument names It should be characters long or so",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_description",
          "normalized": "String-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "String-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that this is the description of direct arguments. Direct arguments\n are the ones not introduced by any short or long argument names (like\n \u003ccode\u003e-x\u003c/code\u003e or \u003ccode\u003e--arg\u003c/code\u003e), or which occur after the special\n argument \u003ccode\u003e--\u003c/code\u003e. The presence of \u003ccode\u003edesc_direct\u003c/code\u003e in the argument properties list\n signals \u003ccode\u003eargdesc\u003c/code\u003e that this is the description of the direct\n arguments. There may be at most one such description.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_direct",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "source": "src/HsShellScript-Args.html#desc_direct",
          "type": "function"
        },
        "index": {
          "description": "Signal that this is the description of direct arguments Direct arguments are the ones not introduced by any short or long argument names like or arg or which occur after the special argument The presence of desc direct in the argument properties list signals argdesc that this is the description of the direct arguments There may be at most one such description",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_direct",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that the value of this argument, if present, is a positive integer. This will cause an error when the command line is parsed, and the\n   argument's value doesn't specify an integer.\n\u003c/p\u003e\u003cpre\u003edesc_integer = desc_tester (readtester (reads :: ReadS Int) \"Integer expected.\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edesc_tester\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_integer",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "source": "src/HsShellScript-Args.html#desc_integer",
          "type": "function"
        },
        "index": {
          "description": "Specify that the value of this argument if present is positive integer This will cause an error when the command line is parsed and the argument value doesn specify an integer desc integer desc tester readtester reads ReadS Int Integer expected See desc tester",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_integer",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong name of the argument. This specifies a GNU style long\n name for the argument, like \u003ccode\u003e--arg\u003c/code\u003e or \u003ccode\u003e--arg=...\u003c/code\u003e. There can be specified\n several names for the same argument. Each argument needs at least\n either a short or a long name.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_long",
          "package": "hsshellscript",
          "signature": "String-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Long name of the argument This specifies GNU style long name for the argument like arg or arg There can be specified several names for the same argument Each argument needs at least either short or long name",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_long",
          "normalized": "String-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "String-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify that the value of this argument, if present, is a non-negative integer. This will cause an error when the command line is parsed, and the\n   value doesn't specify a non-negative integer.\n\u003c/p\u003e\u003cpre\u003edesc_nonneg_integer = desc_tester (readtester ((filter (\\(a,_) -\u003e a \u003e= 0) . reads) :: ReadS Int) \"Non-negative integer expected.\" )\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edesc_tester\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_nonneg_integer",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "source": "src/HsShellScript-Args.html#desc_nonneg_integer",
          "type": "function"
        },
        "index": {
          "description": "Specify that the value of this argument if present is non-negative integer This will cause an error when the command line is parsed and the value doesn specify non-negative integer desc nonneg integer desc tester readtester filter reads ReadS Int Non-negative integer expected See desc tester",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_nonneg_integer",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_nonneg_integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument must be present exactly once. This is\n meaningful only for arguments which can take a value.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_once",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument must be present exactly once This is meaningful only for arguments which can take value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_once",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort name of the argument. This specifies a character for a\n one letter style argument, like \u003ccode\u003e-x\u003c/code\u003e. There can be specified\n several for the same argument. Each argument needs at least\n either a short or a long name.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_short",
          "package": "hsshellscript",
          "signature": "Char-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Short name of the argument This specifies character for one letter style argument like There can be specified several for the same argument Each argument needs at least either short or long name",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_short",
          "normalized": "Char-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "Char-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a tester for this argument. The tester is a function which tests the argument value for format errors. Typically, it tests whether the\n value can be parsed to some target type. If the test fails, the tester produces an error message. When parsing the command line arguments (which\n \u003ccode\u003egetargs\u003c/code\u003e or related), all the testers are applied to the respective argument values, and an \u003ccode\u003e\u003ca\u003eArgError\u003c/a\u003e\u003c/code\u003e is thrown in case of failure. By using a\n tester, it can be ensured that the argument values abide a specific format when extracting them, such that they can be parsed without errors, e.g.\n \u003ccode\u003emyarg = read (reqarg_req args d_myarg)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn argument tester is a function of type \u003ccode\u003e\u003ca\u003eArgtester\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ereadtester\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edesc_integer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edesc_nonneg_integer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eArgtester\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_tester",
          "package": "hsshellscript",
          "signature": "Argtester-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Specify tester for this argument The tester is function which tests the argument value for format errors Typically it tests whether the value can be parsed to some target type If the test fails the tester produces an error message When parsing the command line arguments which getargs or related all the testers are applied to the respective argument values and an ArgError is thrown in case of failure By using tester it can be ensured that the argument values abide specific format when extracting them such that they can be parsed without errors e.g myarg read reqarg req args myarg An argument tester is function of type Argtester See readtester desc integer desc nonneg integer Argtester",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_tester",
          "normalized": "Argtester-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "Argtester-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_tester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify lower and upper bound on the number of times an argument may\n occur.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_times",
          "package": "hsshellscript",
          "signature": "Int-\u003e Int-\u003e ArgumentProperty",
          "type": "function"
        },
        "index": {
          "description": "Specify lower and upper bound on the number of times an argument may occur",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_times",
          "normalized": "Int-\u003eInt-\u003eArgumentProperty",
          "package": "hsshellscript",
          "signature": "Int-\u003eInt-\u003eArgumentProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument optionally has a value. The user may or may\n not specify a value to this argument.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_value_optional",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "source": "src/HsShellScript-Args.html#desc_value_optional",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument optionally has value The user may or may not specify value to this argument",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_value_optional",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_value_optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal that the argument requires a value.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "desc_value_required",
          "package": "hsshellscript",
          "signature": "ArgumentProperty",
          "source": "src/HsShellScript-Args.html#desc_value_required",
          "type": "function"
        },
        "index": {
          "description": "Signal that the argument requires value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "desc_value_required",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:desc_value_required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse command line arguments. The arguments are taken from a call to\n \u003ccode\u003egetArgs\u003c/code\u003e and parsed. Any error is thrown as a \n \u003ccode\u003eArgError\u003c/code\u003e exception. The result is a value from which the\n information in the command line can be extracted by the \u003ccode\u003earg\u003c/code\u003e...,\n \u003ccode\u003ereqarg\u003c/code\u003e... and \u003ccode\u003eoptarg\u003c/code\u003e... functions.\n\u003c/p\u003e\u003cp\u003eNamed arguments (like \u003ccode\u003e-x\u003c/code\u003e or \u003ccode\u003e--arg\u003c/code\u003e) and direct\n arguments may occur in any order.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "getargs",
          "package": "hsshellscript",
          "signature": "String-\u003e [ArgumentDescription]-\u003e IO Arguments",
          "type": "function"
        },
        "index": {
          "description": "Parse command line arguments The arguments are taken from call to getArgs and parsed Any error is thrown as ArgError exception The result is value from which the information in the command line can be extracted by the arg reqarg and optarg functions Named arguments like or arg and direct arguments may occur in any order",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "getargs",
          "normalized": "String-\u003e[ArgumentDescription]-\u003eIO Arguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[ArgumentDescription]-\u003eIO Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:getargs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the specified command line. Any error is returned as \u003ccode\u003eLeft\n argerror\u003c/code\u003e. In case of success, the result is returned as\n \u003ccode\u003eRight res\u003c/code\u003e. From the result, the information in the command\n line can be extracted by the \u003ccode\u003earg\u003c/code\u003e..., \u003ccode\u003ereqarg\u003c/code\u003e...\n and \u003ccode\u003eoptarg\u003c/code\u003e... functions.\n\u003c/p\u003e\u003cp\u003eNamed arguments (like \u003ccode\u003e-x\u003c/code\u003e or \u003ccode\u003e--arg\u003c/code\u003e) and direct\n arguments may occur in any order.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "getargs'",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e [ArgumentDescription]-\u003e Either ArgError Arguments",
          "type": "function"
        },
        "index": {
          "description": "Parse the specified command line Any error is returned as Left argerror In case of success the result is returned as Right res From the result the information in the command line can be extracted by the arg reqarg and optarg functions Named arguments like or arg and direct arguments may occur in any order",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "getargs'",
          "normalized": "String-\u003e[String]-\u003e[ArgumentDescription]-\u003eEither ArgError Arguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003e[ArgumentDescription]-\u003eEither ArgError Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:getargs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse command line arguments. The arguments are taken from a call to\n \u003ccode\u003egetArgs\u003c/code\u003e and parsed. Any error is thrown as a \n \u003ccode\u003eArgError\u003c/code\u003e exception. The result is a value from which the\n information in the command line can be extracted by the \u003ccode\u003earg\u003c/code\u003e...,\n \u003ccode\u003ereqarg\u003c/code\u003e... and \u003ccode\u003eoptarg\u003c/code\u003e... functions.\n\u003c/p\u003e\u003cp\u003eAll arguments after the first direct argument are regarded as direct\n arguments. This means that argument names introduced by \u003ccode\u003e-\u003c/code\u003e\n or \u003ccode\u003e--\u003c/code\u003e no longer take effect.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "getargs_ordered",
          "package": "hsshellscript",
          "signature": "String-\u003e [ArgumentDescription]-\u003e IO Arguments",
          "type": "function"
        },
        "index": {
          "description": "Parse command line arguments The arguments are taken from call to getArgs and parsed Any error is thrown as ArgError exception The result is value from which the information in the command line can be extracted by the arg reqarg and optarg functions All arguments after the first direct argument are regarded as direct arguments This means that argument names introduced by or no longer take effect",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "getargs_ordered",
          "normalized": "String-\u003e[ArgumentDescription]-\u003eIO Arguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[ArgumentDescription]-\u003eIO Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:getargs_ordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the specified command line. Any error is returned as \u003ccode\u003eLeft\n argerror\u003c/code\u003e. In case of success, the result is returned as\n \u003ccode\u003eRight res\u003c/code\u003e. From the result, the information in the command\n line can be extracted by the \u003ccode\u003earg\u003c/code\u003e..., \u003ccode\u003ereqarg\u003c/code\u003e...\n and \u003ccode\u003eoptarg\u003c/code\u003e... functions.\n\u003c/p\u003e\u003cp\u003eAll arguments after the first direct argument are regarded as direct\n arguments. This means that argument names introduced by \u003ccode\u003e-\u003c/code\u003e\n or \u003ccode\u003e--\u003c/code\u003e no longer take effect.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "getargs_ordered'",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e [ArgumentDescription]-\u003e Either ArgError Arguments",
          "type": "function"
        },
        "index": {
          "description": "Parse the specified command line Any error is returned as Left argerror In case of success the result is returned as Right res From the result the information in the command line can be extracted by the arg reqarg and optarg functions All arguments after the first direct argument are regarded as direct arguments This means that argument names introduced by or no longer take effect",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "getargs_ordered'",
          "normalized": "String-\u003e[String]-\u003e[ArgumentDescription]-\u003eEither ArgError Arguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003e[ArgumentDescription]-\u003eEither ArgError Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:getargs_ordered-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the optional value of an optional argument. This is for arguments\n which may occur zero or one time, and which may or may not have a value.\n If the argument doesn't occur, the result is \u003ccode\u003eNothing\u003c/code\u003e. If it does occur,\n but has no value, then the result is \u003ccode\u003eJust Nothing\u003c/code\u003e. If it does occur with\n value, the result is \u003ccode\u003eJust (Just value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "optarg_opt",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Maybe (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Query the optional value of an optional argument This is for arguments which may occur zero or one time and which may or may not have value If the argument doesn occur the result is Nothing If it does occur but has no value then the result is Just Nothing If it does occur with value the result is Just Just value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "optarg_opt",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eMaybe(Maybe String)",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eMaybe(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:optarg_opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the value of an optional argument. This is for optional arguments\n which require a value, and may occur at most once. The result is\n \u003ccode\u003eJust value\u003c/code\u003e if the argument occurs, and \u003ccode\u003eNothing\u003c/code\u003e\n if it doesn't occur.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "optarg_req",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Query the value of an optional argument This is for optional arguments which require value and may occur at most once The result is Just value if the argument occurs and Nothing if it doesn occur",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "optarg_req",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eMaybe String",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:optarg_req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an argument tester from a \u003ccode\u003ereads\u003c/code\u003e like function. Typically, a specialisation of the standard prelude function \u003ccode\u003eread\u003c/code\u003e is used. \n Example: \u003ccode\u003ereadtester \"Integer expected.\" (reads :: ReadS Int)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "readtester",
          "package": "hsshellscript",
          "signature": "ReadS a -\u003e String -\u003e Argtester",
          "source": "src/HsShellScript-Args.html#readtester",
          "type": "function"
        },
        "index": {
          "description": "Build an argument tester from reads like function Typically specialisation of the standard prelude function read is used Example readtester Integer expected reads ReadS Int",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "readtester",
          "normalized": "ReadS a-\u003eString-\u003eArgtester",
          "package": "hsshellscript",
          "signature": "ReadS a-\u003eString-\u003eArgtester",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:readtester"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the optional value of a required argument. This is for arguments\n which must occur once, and may have a value. If the argument is\n specified, its value is returned as \u003ccode\u003eJust value\u003c/code\u003e. If it isn't, the result\n is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "reqarg_opt",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Query the optional value of required argument This is for arguments which must occur once and may have value If the argument is specified its value is returned as Just value If it isn the result is Nothing",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "reqarg_opt",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eMaybe String",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:reqarg_opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the value of a required argument. This is for arguments which must\n occur exactly once, and require a value.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "reqarg_req",
          "package": "hsshellscript",
          "signature": "Arguments-\u003e ArgumentDescription-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Query the value of required argument This is for arguments which must occur exactly once and require value",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "reqarg_req",
          "normalized": "Arguments-\u003eArgumentDescription-\u003eString",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eArgumentDescription-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:reqarg_req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetargs\u003c/code\u003e as a pure function, instead of an IO action. This allows to make evaluated command line arguments global values. This calls \u003ccode\u003egetargs\u003c/code\u003e\n   to parse the command line arguments. \u003ccode\u003eGHC.IO.unsafePerformIO\u003c/code\u003e is used to take the result out of the IO monad.\n\u003c/p\u003e\u003cpre\u003eunsafe_getargs header descs = GHC.IO.unsafePerformIO $ getargs header descs\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003egetargs\u003c/code\u003e action is performed on demand, when the parse result is evaluated. It may result in an \u003ccode\u003e\u003ca\u003eArgError\u003c/a\u003e\u003c/code\u003e being thrown. In order to avoid\n   this happening at unexpected times, the \u003ccode\u003emain\u003c/code\u003e function should, start with the line \u003ccode\u003eseq args (return ())\u003c/code\u003e, where \u003ccode\u003eargs\u003c/code\u003e is the result of\n   \u003ccode\u003eunsafe_getargs\u003c/code\u003e,. This will trigger any command line argument errors at the beginning of the program. (See section 6.2 of the Hakell Report for the\n   definition of \u003ccode\u003eseq\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eA typical use of \u003ccode\u003eunsafe_getargs\u003c/code\u003e looks like this:\n\u003c/p\u003e\u003cpre\u003eheader = \"...\"\ndescs = [ d_myflag, ... ]\n\nd_myflag = argdesc [ ... ]\n\nargs = unsafe_getargs header descs\nmyflag = arg_switch args d_myflag\n\nmain = mainwrapper $ do\n   seq args (return ())\n   ...\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetargs\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsafe_getargs_ordered\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "unsafe_getargs",
          "package": "hsshellscript",
          "signature": "String-\u003e [ArgumentDescription]-\u003e Arguments",
          "type": "function"
        },
        "index": {
          "description": "getargs as pure function instead of an IO action This allows to make evaluated command line arguments global values This calls getargs to parse the command line arguments GHC.IO.unsafePerformIO is used to take the result out of the IO monad unsafe getargs header descs GHC.IO.unsafePerformIO getargs header descs The getargs action is performed on demand when the parse result is evaluated It may result in an ArgError being thrown In order to avoid this happening at unexpected times the main function should start with the line seq args return where args is the result of unsafe getargs This will trigger any command line argument errors at the beginning of the program See section of the Hakell Report for the definition of seq typical use of unsafe getargs looks like this header descs myflag myflag argdesc args unsafe getargs header descs myflag arg switch args myflag main mainwrapper do seq args return See getargs unsafe getargs ordered",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "unsafe_getargs",
          "normalized": "String-\u003e[ArgumentDescription]-\u003eArguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[ArgumentDescription]-\u003eArguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:unsafe_getargs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetargs_ordered\u003c/code\u003e as a pure function, instead of an IO action. This is exactly like \u003ccode\u003eunsafe_getargs\u003c/code\u003e, but using \u003ccode\u003egetargs_ordered\u003c/code\u003e instead of\n   \u003ccode\u003egetargs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eunsafe_getargs_ordered = GHC.IO.unsafePerformIO $ getargs_ordered header descs\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunsafe_getargs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "unsafe_getargs_ordered",
          "package": "hsshellscript",
          "signature": "String-\u003e [ArgumentDescription]-\u003e Arguments",
          "type": "function"
        },
        "index": {
          "description": "getargs ordered as pure function instead of an IO action This is exactly like unsafe getargs but using getargs ordered instead of getargs unsafe getargs ordered GHC.IO.unsafePerformIO getargs ordered header descs See unsafe getargs",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "unsafe_getargs_ordered",
          "normalized": "String-\u003e[ArgumentDescription]-\u003eArguments",
          "package": "hsshellscript",
          "signature": "String-\u003e[ArgumentDescription]-\u003eArguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:unsafe_getargs_ordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the usage information from the parsed arguments. The usage info\n contains the header specified to the corresponding \u003ccode\u003egetargs...\u003c/code\u003e\n function, and descriptions of the command line arguments.\n\u003c/p\u003e",
          "module": "HsShellScript.Args",
          "name": "usage_info",
          "package": "hsshellscript",
          "signature": "Arguments -\u003e String",
          "source": "src/HsShellScript-Args.html#usage_info",
          "type": "function"
        },
        "index": {
          "description": "Get the usage information from the parsed arguments The usage info contains the header specified to the corresponding getargs function and descriptions of the command line arguments",
          "hierarchy": "HsShellScript Args",
          "module": "HsShellScript.Args",
          "name": "usage_info",
          "normalized": "Arguments-\u003eString",
          "package": "hsshellscript",
          "signature": "Arguments-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Args.html#v:usage_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "Commands",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Commands.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "Commands",
          "package": "hsshellscript",
          "partial": "Commands",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange directory. This is an alias for \u003ccode\u003eDirectory.setCurrentDirectory\u003c/code\u003e from the Haskell standard\n   library. In case of an error, the path is included in the \u003ccode\u003eIOError\u003c/code\u003e, which GHC's implementation neglects to do.\n\u003c/p\u003e\u003cp\u003eNote that this command is subtly different from the shell's \u003ccode\u003ecd\u003c/code\u003e command. It changes the process' working directory. This is always a realpath.\n   Symlinks are expanded. The shell, on the other hand, keeps track of the current working directory separately, in a different way: symlinks are\n   \u003cem\u003enot\u003c/em\u003e expanded. The shell's idea of the working directory is different from the working directory which a process has.\n\u003c/p\u003e\u003cp\u003eThis means that the same sequence of \u003ccode\u003ecd\u003c/code\u003e commands, when done in a real shell script, will lead into the same directory. But the working directory\n   as reported by the shell's \u003ccode\u003epwd\u003c/code\u003e command may differ from the corresponding one, reported by \u003ccode\u003egetCurrentDirectory\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(When talking about the \"shell\", I'm talking about bash, regardless of whether started as \u003ccode\u003e/bin/bash\u003c/code\u003e or in compatibility mode, as \u003ccode\u003e/bin/sh\u003c/code\u003e. I\n   presume it's the standard behavior for the POSIX standard shell.)\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003epwd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "cd",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:cd\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:cd\"]"
        },
        "index": {
          "description": "Change directory This is an alias for Directory.setCurrentDirectory from the Haskell standard library In case of an error the path is included in the IOError which GHC implementation neglects to do Note that this command is subtly different from the shell cd command It changes the process working directory This is always realpath Symlinks are expanded The shell on the other hand keeps track of the current working directory separately in different way symlinks are not expanded The shell idea of the working directory is different from the working directory which process has This means that the same sequence of cd commands when done in real shell script will lead into the same directory But the working directory as reported by the shell pwd command may differ from the corresponding one reported by getCurrentDirectory When talking about the shell talking about bash regardless of whether started as bin bash or in compatibility mode as bin sh presume it the standard behavior for the POSIX standard shell See pwd",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "cd",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003e/bin/chmod\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003echmod = run \"/bin/chmod\"\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "chmod",
          "package": "hsshellscript",
          "signature": "[String]-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:chmod\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:chmod\"]"
        },
        "index": {
          "description": "Execute bin chmod chmod run bin chmod",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "chmod",
          "normalized": "[String]-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:chmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute \u003ccode\u003e/bin/chown\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003echown = run \"/bin/chown\"\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "chown",
          "package": "hsshellscript",
          "signature": "[String]-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:chown\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:chown\"]"
        },
        "index": {
          "description": "Execute bin chown chown run bin chown",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "chown",
          "normalized": "[String]-\u003eIO()",
          "package": "hsshellscript",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:chown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the cp program\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "cp",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:cp\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:cp\"]"
        },
        "index": {
          "description": "Execute the cp program",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "cp",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the \u003ccode\u003edu\u003c/code\u003e program. See du(1).\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "du",
          "package": "hsshellscript",
          "signature": "int-\u003e String-\u003e IO int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:du\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:du\"]"
        },
        "index": {
          "description": "Call the du program See du",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "du",
          "normalized": "a-\u003eString-\u003eIO a",
          "package": "hsshellscript",
          "signature": "int-\u003eString-\u003eIO int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:du"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the \u003ccode\u003efdupes\u003c/code\u003e program in order to find identical files. It outputs a\n list of groups of file names, such that the files in each group are\n identical. Each of these groups is further analysed by the \u003ccode\u003efdupes\u003c/code\u003e\n action. It is split to a list of lists of paths, such that each list\n of paths corresponds to one of the directories which have been searched\n by the \u003ccode\u003efdupes\u003c/code\u003e program. If you just want groups of identical files, then apply \u003ccode\u003emap concat\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe\u003c/em\u003e \u003ccode\u003efdupes\u003c/code\u003e /program doesn't handle multiple occurences of the same directory, or in recursive mode one specified directory containing another,\n properly. The same file may get reported multiple times, and identical files may not get reported./\n\u003c/p\u003e\u003cp\u003eThe paths are normalised (using \u003ccode\u003e\u003ca\u003enormalise_path\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "fdupes",
          "package": "hsshellscript",
          "signature": "[String]-\u003e [String]-\u003e IO [[[String]]]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:fdupes\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:fdupes\"]"
        },
        "index": {
          "description": "Call the fdupes program in order to find identical files It outputs list of groups of file names such that the files in each group are identical Each of these groups is further analysed by the fdupes action It is split to list of lists of paths such that each list of paths corresponds to one of the directories which have been searched by the fdupes program If you just want groups of identical files then apply map concat to the result The fdupes program doesn handle multiple occurences of the same directory or in recursive mode one specified directory containing another properly The same file may get reported multiple times and identical files may not get reported The paths are normalised using normalise path",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "fdupes",
          "normalized": "[String]-\u003e[String]-\u003eIO[[[String]]]",
          "package": "hsshellscript",
          "signature": "[String]-\u003e[String]-\u003eIO[[[String]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:fdupes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a command which moves a file or directory, and cope with read only issues.\n\u003c/p\u003e\u003cp\u003eThis function is for calling a command, which renames files. Beforehand, write permissions are set in order to enable the\noperation, and afterwards the permissions are restored. The command is meant to be something like \u003ccode\u003erename\u003c/code\u003e or \u003ccode\u003erun \"/bin/mv\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn order to change the name of a file or dirctory, but leave it in the super directory\nit is in, the super directory must be writeable. In order to move a file or directory to a different super directory, both super directories and\nthe file/directory to be moved must be writeable. I don't know what this behaviour is supposed to be good for.\n\u003c/p\u003e\u003cp\u003eThis function copes with the case that the file/directory to be moved or renamed, or the super directories are read only. It makes the necessary\nplaces writeable, calls the command, and makes them read only again, if they were before. The user needs the necessary permissions for changing the\ncorresponding write permissions. If an error occurs (such as file not found, or insufficient permissions), then the write permissions are restored\nto the state before, before the exception is passed through to the caller.\n\u003c/p\u003e\u003cp\u003eThe command must take two arguments, the old path and the new path. It is expected to create the new path in the file system, such that the correct\nwrite permissions of the new path can be set by \u003ccode\u003eforce_cmd\u003c/code\u003e after executing it.\n\u003c/p\u003e\u003cp\u003eThe new path may be an existing directory. In this case, it is assumed that the old file is to be moved into this directory (like with \u003ccode\u003emv\u003c/code\u003e). The\nnew path is completed with the file name component of the old path, before it is passed to the command, such that the command is supplied the\ncomplete new path.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eforce_cmd rename from to\nforce_cmd (\\from to -\u003e run \"/bin/mv\" [\"-i\", \"-v\", \"--\", from, to]) from to\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eforce_rename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce_mv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_cmd",
          "package": "hsshellscript",
          "signature": "(String -\u003e String -\u003e IO ())-\u003e String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_cmd\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_cmd\"]"
        },
        "index": {
          "description": "Call command which moves file or directory and cope with read only issues This function is for calling command which renames files Beforehand write permissions are set in order to enable the operation and afterwards the permissions are restored The command is meant to be something like rename or run bin mv In order to change the name of file or dirctory but leave it in the super directory it is in the super directory must be writeable In order to move file or directory to different super directory both super directories and the file directory to be moved must be writeable don know what this behaviour is supposed to be good for This function copes with the case that the file directory to be moved or renamed or the super directories are read only It makes the necessary places writeable calls the command and makes them read only again if they were before The user needs the necessary permissions for changing the corresponding write permissions If an error occurs such as file not found or insufficient permissions then the write permissions are restored to the state before before the exception is passed through to the caller The command must take two arguments the old path and the new path It is expected to create the new path in the file system such that the correct write permissions of the new path can be set by force cmd after executing it The new path may be an existing directory In this case it is assumed that the old file is to be moved into this directory like with mv The new path is completed with the file name component of the old path before it is passed to the command such that the command is supplied the complete new path Examples force cmd rename from to force cmd from to run bin mv from to from to See force rename force mv rename",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_cmd",
          "normalized": "(String-\u003eString-\u003eIO())-\u003eString-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "(String-\u003eString-\u003eIO())-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a file or directory, and cope with read only issues.\n\u003c/p\u003e\u003cp\u003eThis moves a file or directory, using the external command \u003ccode\u003emv\u003c/code\u003e, sets the necessary write permissions beforehand, and restores them afterwards.\nThis is less efficient than \u003ccode\u003eforce_rename\u003c/code\u003e, because the external program \u003ccode\u003emv\u003c/code\u003e needs to be called, but it can move files between file systems. See\n\u003ccode\u003eforce_cmd\u003c/code\u003e for a detailed description.\n\u003c/p\u003e\u003cpre\u003eforce_mv src tgt = fill_in_location \"force_mv\" $ force_cmd (\\src tgt -\u003e run \"/bin/mv\" [\"--\", src, tgt]) src tgt\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eforce_cmd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce_mv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_mv",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_mv\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_mv\"]"
        },
        "index": {
          "description": "Move file or directory and cope with read only issues This moves file or directory using the external command mv sets the necessary write permissions beforehand and restores them afterwards This is less efficient than force rename because the external program mv needs to be called but it can move files between file systems See force cmd for detailed description force mv src tgt fill in location force mv force cmd src tgt run bin mv src tgt src tgt See force cmd force mv",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_mv",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a file or directory, and cope with read only issues.\n\u003c/p\u003e\u003cp\u003eThis renames a file or directory, using \u003ccode\u003erename\u003c/code\u003e, sets the necessary write permissions beforehand, and restores them afterwards. This is more\nefficient than \u003ccode\u003eforce_mv\u003c/code\u003e, because no external program needs to be called, but it can rename files only inside the same file system. See \u003ccode\u003eforce_cmd\u003c/code\u003e\nfor a detailed description.\n\u003c/p\u003e\u003cp\u003eThe new path may be an existing directory. In this case, it is assumed that the old file is to be moved into this directory (like with \u003ccode\u003emv\u003c/code\u003e). The\nnew path is then completed with the file name component of the old path. You won't get an \"already exists\" error.\n\u003c/p\u003e\u003cpre\u003eforce_rename = force_cmd rename\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eforce_cmd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_rename",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_rename\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_rename\"]"
        },
        "index": {
          "description": "Rename file or directory and cope with read only issues This renames file or directory using rename sets the necessary write permissions beforehand and restores them afterwards This is more efficient than force mv because no external program needs to be called but it can rename files only inside the same file system See force cmd for detailed description The new path may be an existing directory In this case it is assumed that the old file is to be moved into this directory like with mv The new path is then completed with the file name component of the old path You won get an already exists error force rename force cmd rename See force cmd rename",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_rename",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a file with \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, or when necessary with \u003ccode\u003e\u003ca\u003emv\u003c/a\u003e\u003c/code\u003e, and cope with read only issues.\n\u003c/p\u003e\u003cp\u003eThe necessary write permissions are set, then the file is renamed, then the permissions are restored.\n\u003c/p\u003e\u003cp\u003eFirst, the \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e system call is tried, which is most efficient. If it fails, because source and target path point to different file systems\n(as indicated by the \u003ccode\u003eerrno\u003c/code\u003e value \u003ccode\u003eEXDEV\u003c/code\u003e), then \u003ccode\u003e/bin/mv\u003c/code\u003e is called.\n\u003c/p\u003e\u003cpre\u003eforce_rename_mv old new = fill_in_location \"force_rename_mv\" $ force_cmd rename_mv old new\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erename_mv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce_cmd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_rename_mv",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_rename_mv\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_rename_mv\"]"
        },
        "index": {
          "description": "Rename file with rename or when necessary with mv and cope with read only issues The necessary write permissions are set then the file is renamed then the permissions are restored First the rename system call is tried which is most efficient If it fails because source and target path point to different file systems as indicated by the errno value EXDEV then bin mv is called force rename mv old new fill in location force rename mv force cmd rename mv old new See rename mv rename mv force cmd",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_rename_mv",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "hsshellscript",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_rename_mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a file or directory writeable for the user, perform an action, and restore its writeable status. An IOError is raised when the user doesn't\n   have permission to make the file or directory writeable.\n\u003c/p\u003e\u003cpre\u003eforce_writeable path io = force_writeable2 path (io \u003e\u003e= \\res -\u003e return (path, res))\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e-- Need to create a new directory in /foo/bar, even if that's write protected\nforce_writeable \"/foo/bar\" $ mkdir \"/foo/bar/baz\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eforce_cmd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce_writeable2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_writeable",
          "package": "hsshellscript",
          "signature": "String-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_writeable\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_writeable\"]"
        },
        "index": {
          "description": "Make file or directory writeable for the user perform an action and restore its writeable status An IOError is raised when the user doesn have permission to make the file or directory writeable force writeable path io force writeable2 path io res return path res Example Need to create new directory in foo bar even if that write protected force writeable foo bar mkdir foo bar baz See force cmd force writeable2",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_writeable",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_writeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a file or directory writeable for the user, perform an action, and restore its writeable status. The action may change the name of the file\n   or directory. Therefore it returns the new name, along with another return value, which is passed to the caller.\n\u003c/p\u003e\u003cp\u003eThe writeable status is only changed back if it has been changed by \u003ccode\u003eforce_writeable2\u003c/code\u003e before. An IOError is raised when the user doesn'h have\n   permission to make the file or directory writeable, or when the new path doesn't exist.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eforce_cmd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eforce_writeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "force_writeable2",
          "package": "hsshellscript",
          "signature": "String-\u003e IO (String, a)-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_writeable2\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:force_writeable2\"]"
        },
        "index": {
          "description": "Make file or directory writeable for the user perform an action and restore its writeable status The action may change the name of the file or directory Therefore it returns the new name along with another return value which is passed to the caller The writeable status is only changed back if it has been changed by force writeable2 before An IOError is raised when the user doesn have permission to make the file or directory writeable or when the new path doesn exist See force cmd force writeable",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "force_writeable2",
          "normalized": "String-\u003eIO(String,a)-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eIO(String,a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:force_writeable2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "foreign_rename",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e IO CInt",
          "source": "src/HsShellScript-Commands.html#foreign_rename",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "foreign_rename",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:foreign_rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "foreign_symlink",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e IO CInt",
          "source": "src/HsShellScript-Commands.html#foreign_symlink",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "foreign_symlink",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:foreign_symlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "hsshellscript_get_readlink",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e IO (Ptr CChar)",
          "source": "src/HsShellScript-Commands.html#hsshellscript_get_readlink",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "hsshellscript_get_readlink",
          "normalized": "Ptr CChar-\u003eIO(Ptr CChar)",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:hsshellscript_get_readlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "hsshellscript_get_realpath",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e IO (Ptr CChar)",
          "source": "src/HsShellScript-Commands.html#hsshellscript_get_realpath",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "hsshellscript_get_realpath",
          "normalized": "Ptr CChar-\u003eIO(Ptr CChar)",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003eIO(Ptr CChar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:hsshellscript_get_realpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether a path is a symbolic link. The result for a dangling symlink is \u003ccode\u003eTrue\u003c/code\u003e. The path must exist in the file system. In case of an\n error, a proper \u003ccode\u003eIOError\u003c/code\u003e is thrown.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "is_symlink",
          "package": "hsshellscript",
          "signature": "String-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:is_symlink\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:is_symlink\"]"
        },
        "index": {
          "description": "Determine whether path is symbolic link The result for dangling symlink is True The path must exist in the file system In case of an error proper IOError is thrown",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "is_symlink",
          "normalized": "String-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:is_symlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate directory. This is a shorthand to \u003ccode\u003eSystem.Directory.createDirectory\u003c/code\u003e from the Haskell standard\n library. In case of an error, the path is included in the \u003ccode\u003eIOError\u003c/code\u003e, which GHC's implementation neglects to do.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "mkdir",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mkdir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mkdir\"]"
        },
        "index": {
          "description": "Create directory This is shorthand to System.Directory.createDirectory from the Haskell standard library In case of an error the path is included in the IOError which GHC implementation neglects to do",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "mkdir",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the command \u003ccode\u003emt status\u003c/code\u003e for querying the tape drive status, and\n parse its output.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "mt_status",
          "package": "hsshellscript",
          "signature": "IO (Int, Int)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mt_status\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mt_status\"]"
        },
        "index": {
          "description": "Run the command mt status for querying the tape drive status and parse its output",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "mt_status",
          "normalized": "IO(Int,Int)",
          "package": "hsshellscript",
          "signature": "IO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mt_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the mv program\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "mv",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mv\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mv\"]"
        },
        "index": {
          "description": "Execute the mv program",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "mv",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "number",
          "package": "hsshellscript",
          "signature": "Parser Int",
          "source": "src/HsShellScript-Commands.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "number",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "parse_mt_status",
          "package": "hsshellscript",
          "signature": "Parser (Int, Int)",
          "source": "src/HsShellScript-Commands.html#parse_mt_status",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "parse_mt_status",
          "normalized": "Parser(Int,Int)",
          "package": "hsshellscript",
          "signature": "Parser(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:parse_mt_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet program start working directory. This is the \u003ccode\u003ePWD\u003c/code\u003e environent\n variable, which is kept by the shell (bash, at least). It records the\n directory path in which the program has been started. Symbolic links in\n this path aren't expanded. In this way, it differs from\n \u003ccode\u003egetCurrentDirectory\u003c/code\u003e from the Haskell standard library.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "pwd",
          "package": "hsshellscript",
          "signature": "IO String",
          "source": "src/HsShellScript-Commands.html#pwd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:pwd\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:pwd\"]"
        },
        "index": {
          "description": "Get program start working directory This is the PWD environent variable which is kept by the shell bash at least It records the directory path in which the program has been started Symbolic links in this path aren expanded In this way it differs from getCurrentDirectory from the Haskell standard library",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "pwd",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the target of a symbolic link. This uses the \u003ccode\u003ereadlink(2)\u003c/code\u003e system call. The result is a path which is either absolute, or relative to\n the directory which the symlink is in. In case of an error, an \u003ccode\u003eIOError\u003c/code\u003e is thrown. The path is included and can be accessed with\n \u003ccode\u003eIO.ioeGetFileName\u003c/code\u003e. Note that, if the path to the symlink ends with a slash, this path denotes the directory pointed to, \u003cem\u003enot\u003c/em\u003e the symlink. In\n this case the call to will fail because of \"Invalid argument\".\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "readlink",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:readlink\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:readlink\"]"
        },
        "index": {
          "description": "Determine the target of symbolic link This uses the readlink system call The result is path which is either absolute or relative to the directory which the symlink is in In case of an error an IOError is thrown The path is included and can be accessed with IO.ioeGetFileName Note that if the path to the symlink ends with slash this path denotes the directory pointed to not the symlink In this case the call to will fail because of Invalid argument",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "readlink",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:readlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the target of a symbolic link. This uses the \u003ccode\u003ereadlink(2)\u003c/code\u003e system call. The target is converted, such that it is relative to the\n current working directory, if it isn't absolute. Note that, if the path to the symlink ends with a slash, this path denotes the directory pointed\n to, \u003cem\u003enot\u003c/em\u003e the symlink. In this case the call to \u003ccode\u003ereadlink\u003c/code\u003e will fail with an \u003ccode\u003eIOError\u003c/code\u003e because of \"Invalid argument\". In case of any error, a\n proper \u003ccode\u003eIOError\u003c/code\u003e is thrown.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "readlink'",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:readlink-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:readlink-39-\"]"
        },
        "index": {
          "description": "Determine the target of symbolic link This uses the readlink system call The target is converted such that it is relative to the current working directory if it isn absolute Note that if the path to the symlink ends with slash this path denotes the directory pointed to not the symlink In this case the call to readlink will fail with an IOError because of Invalid argument In case of any error proper IOError is thrown",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "readlink'",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:readlink-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a call to the \u003ccode\u003erealpath(3)\u003c/code\u003e system library function. This makes the path absolute, normalizes it and expands all symbolic links. In case of an\n error, an \u003ccode\u003eIOError\u003c/code\u003e is thrown.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "realpath",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:realpath\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:realpath\"]"
        },
        "index": {
          "description": "Do call to the realpath system library function This makes the path absolute normalizes it and expands all symbolic links In case of an error an IOError is thrown",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "realpath",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:realpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the normalised, absolute version of a specified path. The path is made absolute with the current working directory, and is syntactically\n normalised afterwards. This is the same as what the \u003ccode\u003erealpath\u003c/code\u003e program reports with the \u003ccode\u003e-s\u003c/code\u003e option. It's almost the same as what it reports when\n called from a shell. The difference lies in the shell's idea of the current working directory. See \u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enormalise_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "realpath_s",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:realpath_s\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:realpath_s\"]"
        },
        "index": {
          "description": "Return the normalised absolute version of specified path The path is made absolute with the current working directory and is syntactically normalised afterwards This is the same as what the realpath program reports with the option It almost the same as what it reports when called from shell The difference lies in the shell idea of the current working directory See cd for details See cd normalise path",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "realpath_s",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:realpath_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003erename(2)\u003c/code\u003e system call to rename and/or move a file. The \u003ccode\u003erenameFile\u003c/code\u003e action from the Haskell standard library doesn't do it, because\n the two paths may not refer to directories. Failure results in an \u003ccode\u003eIOError\u003c/code\u003e thrown. The \u003cem\u003enew\u003c/em\u003e path is included in\n the \u003ccode\u003eIOError\u003c/code\u003e and\n can be accessed with \u003ccode\u003eIO.ioeGetFileName\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "rename",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rename\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:rename\"]"
        },
        "index": {
          "description": "The rename system call to rename and or move file The renameFile action from the Haskell standard library doesn do it because the two paths may not refer to directories Failure results in an IOError thrown The new path is included in the IOError and can be accessed with IO.ioeGetFileName",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "rename",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a file. This first tries \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, which is most efficient. If it fails, because source and target path point to different file systems\n (as indicated by the \u003ccode\u003eerrno\u003c/code\u003e value \u003ccode\u003eEXDEV\u003c/code\u003e), then \u003ccode\u003e/bin/mv\u003c/code\u003e is called.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "rename_mv",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rename_mv\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:rename_mv\"]"
        },
        "index": {
          "description": "Rename file This first tries rename which is most efficient If it fails because source and target path point to different file systems as indicated by the errno value EXDEV then bin mv is called See rename mv",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "rename_mv",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "hsshellscript",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rename_mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Commands",
          "name": "replace_location",
          "package": "hsshellscript",
          "signature": "String -\u003e String -\u003e IO a -\u003e IO a",
          "source": "src/HsShellScript-Commands.html#replace_location",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "replace_location",
          "normalized": "String-\u003eString-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:replace_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove file. This is \u003ccode\u003eDirectory.removeFile\u003c/code\u003e from the Haskell standard library, which is a direct frontend to the \u003ccode\u003eunlink(2)\u003c/code\u003e system call in GHC.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "rm",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rm\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:rm\"]"
        },
        "index": {
          "description": "Remove file This is Directory.removeFile from the Haskell standard library which is direct frontend to the unlink system call in GHC",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "rm",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove directory. This is\n \u003ccode\u003eDirectory.removeDirectory\u003c/code\u003e from the Haskell standard\n library. In case of an error, the path is included in the \u003ccode\u003eIOError\u003c/code\u003e, which GHC's implementation neglects to do.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "rmdir",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rmdir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:rmdir\"]"
        },
        "index": {
          "description": "Remove directory This is Directory.removeDirectory from the Haskell standard library In case of an error the path is included in the IOError which GHC implementation neglects to do",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "rmdir",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:rmdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a symbolic link. This is the \u003ccode\u003esymlink(2)\u003c/code\u003e function. Any error results in an \u003ccode\u003eIOError\u003c/code\u003e thrown. The path of the intended symlink is included in\n the \u003ccode\u003eIOError\u003c/code\u003e and\n can be accessed with \u003ccode\u003eioeGetFileName\u003c/code\u003e from the Haskell standard library \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Commands\",\"HsShellScript\"]",
          "name": "symlink",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:symlink\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:symlink\"]"
        },
        "index": {
          "description": "Make symbolic link This is the symlink function Any error results in an IOError thrown The path of the intended symlink is included in the IOError and can be accessed with ioeGetFileName from the Haskell standard library IO",
          "hierarchy": "HsShellScript Commands",
          "module": "HsShellScript.Commands",
          "name": "symlink",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Commands.html#v:symlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.GetOpt",
          "name": "GetOpt",
          "package": "hsshellscript",
          "source": "src/HsShellScript-GetOpt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "GetOpt",
          "package": "hsshellscript",
          "partial": "Get Opt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes whether an option takes an argument or not, and if so\n how the argument is injected into a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "ArgDescr",
          "package": "hsshellscript",
          "source": "src/HsShellScript-GetOpt.html#ArgDescr",
          "type": "data"
        },
        "index": {
          "description": "Describes whether an option takes an argument or not and if so how the argument is injected into value of type",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "ArgDescr",
          "package": "hsshellscript",
          "partial": "Arg Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#t:ArgDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with options following non-options\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "ArgOrder",
          "package": "hsshellscript",
          "source": "src/HsShellScript-GetOpt.html#ArgOrder",
          "type": "data"
        },
        "index": {
          "description": "What to do with options following non-options",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "ArgOrder",
          "package": "hsshellscript",
          "partial": "Arg Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#t:ArgOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e describes a single option.\n\u003c/p\u003e\u003cp\u003eThe arguments to \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e list of short option characters\n\u003c/li\u003e\u003cli\u003e list of long option strings (without \"--\")\n\u003c/li\u003e\u003cli\u003e argument descriptor\n\u003c/li\u003e\u003cli\u003e explanation of option for user\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "OptDescr",
          "package": "hsshellscript",
          "source": "src/HsShellScript-GetOpt.html#OptDescr",
          "type": "data"
        },
        "index": {
          "description": "Each OptDescr describes single option The arguments to Option are list of short option characters list of long option strings without argument descriptor explanation of option for user",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "OptDescr",
          "package": "hsshellscript",
          "partial": "Opt Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#t:OptDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno argument expected\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "NoArg",
          "package": "hsshellscript",
          "signature": "NoArg a",
          "source": "src/HsShellScript-GetOpt.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "no argument expected",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "NoArg",
          "package": "hsshellscript",
          "partial": "No Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:NoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional argument\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "OptArg",
          "package": "hsshellscript",
          "signature": "OptArg (Maybe String -\u003e a) String",
          "source": "src/HsShellScript-GetOpt.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "optional argument",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "OptArg",
          "normalized": "OptArg(Maybe String-\u003ea)String",
          "package": "hsshellscript",
          "partial": "Opt Arg",
          "signature": "OptArg(Maybe String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:OptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.GetOpt",
          "name": "Option",
          "package": "hsshellscript",
          "signature": "Option [Char] [String] (ArgDescr a) String",
          "source": "src/HsShellScript-GetOpt.html#OptDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "Option",
          "normalized": "Option[Char][String](ArgDescr a)String",
          "package": "hsshellscript",
          "partial": "Option",
          "signature": "Option[Char][String](ArgDescr a)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efreely intersperse options and non-options\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "Permute",
          "package": "hsshellscript",
          "signature": "Permute",
          "source": "src/HsShellScript-GetOpt.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "freely intersperse options and non-options",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "Permute",
          "package": "hsshellscript",
          "partial": "Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:Permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoption requires argument\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "ReqArg",
          "package": "hsshellscript",
          "signature": "ReqArg (String -\u003e a) String",
          "source": "src/HsShellScript-GetOpt.html#ArgDescr",
          "type": "function"
        },
        "index": {
          "description": "option requires argument",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "ReqArg",
          "normalized": "ReqArg(String-\u003ea)String",
          "package": "hsshellscript",
          "partial": "Req Arg",
          "signature": "ReqArg(String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:ReqArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno option processing after first non-option\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "RequireOrder",
          "package": "hsshellscript",
          "signature": "RequireOrder",
          "source": "src/HsShellScript-GetOpt.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "no option processing after first non-option",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "RequireOrder",
          "package": "hsshellscript",
          "partial": "Require Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:RequireOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrap non-options into options\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "ReturnInOrder",
          "package": "hsshellscript",
          "signature": "ReturnInOrder (String -\u003e a)",
          "source": "src/HsShellScript-GetOpt.html#ArgOrder",
          "type": "function"
        },
        "index": {
          "description": "wrap non-options into options",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "ReturnInOrder",
          "normalized": "ReturnInOrder(String-\u003ea)",
          "package": "hsshellscript",
          "partial": "Return In Order",
          "signature": "ReturnInOrder(String-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:ReturnInOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the command-line, and return the list of values that matched\n(and those that didn't). The arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The order requirements (see \u003ccode\u003e\u003ca\u003eArgOrder\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The option descriptions (see \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e The actual command line arguments (presumably got from \n  \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetOpt\u003c/a\u003e\u003c/code\u003e returns a triple, consisting of the argument values, a list\nof options that didn't match, and a list of error messages.\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "getOpt",
          "package": "hsshellscript",
          "signature": "ArgOrder a -\u003e [OptDescr a] -\u003e [String] -\u003e ([a], [String], [String])",
          "source": "src/HsShellScript-GetOpt.html#getOpt",
          "type": "function"
        },
        "index": {
          "description": "Process the command-line and return the list of values that matched and those that didn The arguments are The order requirements see ArgOrder The option descriptions see OptDescr The actual command line arguments presumably got from getArgs getOpt returns triple consisting of the argument values list of options that didn match and list of error messages",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "getOpt",
          "normalized": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])",
          "package": "hsshellscript",
          "partial": "Opt",
          "signature": "ArgOrder a-\u003e[OptDescr a]-\u003e[String]-\u003e([a],[String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:getOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a string describing the usage of a command, derived from\n the header (first argument) and the options described by the \n second argument.\n\u003c/p\u003e",
          "module": "HsShellScript.GetOpt",
          "name": "usageInfo",
          "package": "hsshellscript",
          "signature": "String -\u003e [OptDescr a] -\u003e String",
          "source": "src/HsShellScript-GetOpt.html#usageInfo",
          "type": "function"
        },
        "index": {
          "description": "Return string describing the usage of command derived from the header first argument and the options described by the second argument",
          "hierarchy": "HsShellScript GetOpt",
          "module": "HsShellScript.GetOpt",
          "name": "usageInfo",
          "normalized": "String-\u003e[OptDescr a]-\u003eString",
          "package": "hsshellscript",
          "partial": "Info",
          "signature": "String-\u003e[OptDescr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-GetOpt.html#v:usageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "Misc",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Misc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "Misc",
          "package": "hsshellscript",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne entry of mount information. This is the same as \u003ccode\u003estruct mntent\u003c/code\u003e from \u003ccode\u003e\u003cmntent.h\u003e\u003c/code\u003e.\nA list of these is returned by the functions which read mount information.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eread_mounts\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eread_mtab\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eread_fstab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Misc",
          "name": "Mntent",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "data"
        },
        "index": {
          "description": "One entry of mount information This is the same as struct mntent from mntent.h list of these is returned by the functions which read mount information See read mounts read mtab read fstab",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "Mntent",
          "package": "hsshellscript",
          "partial": "Mntent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#t:Mntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "Mntent",
          "package": "hsshellscript",
          "signature": "Mntent",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:Mntent\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:Mntent\"]"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "Mntent",
          "package": "hsshellscript",
          "partial": "Mntent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:Mntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "c_close",
          "package": "hsshellscript",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/HsShellScript-Misc.html#c_close",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "c_close",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:c_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "c_getmntent",
          "package": "hsshellscript",
          "signature": "Ptr () -\u003e IO (Ptr ())",
          "source": "src/HsShellScript-Misc.html#c_getmntent",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "c_getmntent",
          "normalized": "Ptr()-\u003eIO(Ptr())",
          "package": "hsshellscript",
          "signature": "Ptr()-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:c_getmntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "c_mkdir",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e CUInt -\u003e IO CInt",
          "source": "src/HsShellScript-Misc.html#c_mkdir",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "c_mkdir",
          "normalized": "Ptr CChar-\u003eCUInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:c_mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove trailing newlines. This is silimar to perl's \u003ccode\u003echomp\u003c/code\u003e procedure.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "chomp",
          "package": "hsshellscript",
          "signature": "String-\u003e String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:chomp\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:chomp\"]"
        },
        "index": {
          "description": "Remove trailing newlines This is silimar to perl chomp procedure",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "chomp",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:chomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet contents of a file or of \u003ccode\u003estdin\u003c/code\u003e eagerly. This is the\n same as \u003ccode\u003elazy_contents\u003c/code\u003e, except for the contents being\n read immediately.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "contents",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:contents\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:contents\"]"
        },
        "index": {
          "description": "Get contents of file or of stdin eagerly This is the same as lazy contents except for the contents being read immediately",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "contents",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "do_glob",
          "package": "hsshellscript",
          "signature": "Ptr () -\u003e Ptr CChar -\u003e IO CInt",
          "source": "src/HsShellScript-Misc.html#do_glob",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "do_glob",
          "normalized": "Ptr()-\u003ePtr CChar-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr()-\u003ePtr CChar-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:do_glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "endmntent",
          "package": "hsshellscript",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "src/HsShellScript-Misc.html#endmntent",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "endmntent",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:endmntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003eSystem.Posix.Files.fileAccess\u003c/code\u003e function from the GHC libraries, with improved error reporting. The GHC function doesn't include the\n file name in the \u003ccode\u003eIOError\u003c/code\u003e when the call fails, making error messages much less useful. \u003ccode\u003efileAccess'\u003c/code\u003e rectifies this.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efileAccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "fileAccess'",
          "package": "hsshellscript",
          "signature": "FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e IO Bool",
          "source": "src/HsShellScript-Misc.html#fileAccess%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:fileAccess-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:fileAccess-39-\"]"
        },
        "index": {
          "description": "This is the System.Posix.Files.fileAccess function from the GHC libraries with improved error reporting The GHC function doesn include the file name in the IOError when the call fails making error messages much less useful fileAccess rectifies this See fileAccess",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "fileAccess'",
          "normalized": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "package": "hsshellscript",
          "partial": "Access'",
          "signature": "FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:fileAccess-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003eSystem.Posix.Files.getFileStatus\u003c/code\u003e function from the GHC libraries, with improved error reporting. The GHC function doesn't include the\n file name in the \u003ccode\u003eIOError\u003c/code\u003e when the call fails, making error messages much less useful. \u003ccode\u003egetFileStatus'\u003c/code\u003e rectifies this.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetFileStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "getFileStatus'",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e IO FileStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:getFileStatus-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:getFileStatus-39-\"]"
        },
        "index": {
          "description": "This is the System.Posix.Files.getFileStatus function from the GHC libraries with improved error reporting The GHC function doesn include the file name in the IOError when the call fails making error messages much less useful getFileStatus rectifies this See getFileStatus",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "getFileStatus'",
          "normalized": "FilePath-\u003eIO FileStatus",
          "package": "hsshellscript",
          "partial": "File Status'",
          "signature": "FilePath-\u003eIO FileStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:getFileStatus-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an interface to the POSIX \u003ccode\u003eglob\u003c/code\u003e function, which does wildcard expansion\n in paths. The list of matched paths is returned. It's empty\n for no match (rather than the original pattern). In case anything goes wrong\n (such as permission denied), an IOError is thrown.\n\u003c/p\u003e\u003cp\u003eThis does \u003cem\u003enot\u003c/em\u003e do tilde expansion, which is done (among many unwanted other\n things) by \u003ccode\u003ewordexp\u003c/code\u003e. The only flag used for the call to \u003ccode\u003eglob\u003c/code\u003e is \u003ccode\u003eGLOB_ERR\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe behaviour in case of non-existing path components is inconsistent in the\n GNU version of the underlying \u003ccode\u003eglob\u003c/code\u003e function. \u003ccode\u003eglob \u003ca\u003e/doesnt_exist/foo\u003c/a\u003e\u003c/code\u003e will return\n the empty list, whereas \u003ccode\u003eglob \u003ca\u003e/doesnt_exist/*\u003c/a\u003e\u003c/code\u003e causes a \u003ca\u003eNo such file or directory\u003c/a\u003e\n IOError.\n\u003c/p\u003e\u003cp\u003eSee man pages \u003ccode\u003eglob(3)\u003c/code\u003e and \u003ccode\u003ewordexp(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "glob",
          "package": "hsshellscript",
          "signature": "String-\u003e IO [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:glob\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:glob\"]"
        },
        "index": {
          "description": "This is an interface to the POSIX glob function which does wildcard expansion in paths The list of matched paths is returned It empty for no match rather than the original pattern In case anything goes wrong such as permission denied an IOError is thrown This does not do tilde expansion which is done among many unwanted other things by wordexp The only flag used for the call to glob is GLOB ERR The behaviour in case of non-existing path components is inconsistent in the GNU version of the underlying glob function glob doesnt exist foo will return the empty list whereas glob doesnt exist causes No such file or directory IOError See man pages glob and wordexp",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "glob",
          "normalized": "String-\u003eIO[String]",
          "package": "hsshellscript",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "globfree",
          "package": "hsshellscript",
          "signature": "Ptr () -\u003e IO ()",
          "source": "src/HsShellScript-Misc.html#globfree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "globfree",
          "normalized": "Ptr()-\u003eIO()",
          "package": "hsshellscript",
          "signature": "Ptr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:globfree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "hsshellscript_open_nonvariadic",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e CInt -\u003e CUInt -\u003e IO CInt",
          "source": "src/HsShellScript-Misc.html#hsshellscript_open_nonvariadic",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "hsshellscript_open_nonvariadic",
          "normalized": "Ptr CChar-\u003eCInt-\u003eCUInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003eCInt-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:hsshellscript_open_nonvariadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if path points to a directory. This will return \u003ccode\u003eTrue\u003c/code\u003e for a symlink pointing to a directory. It's a shortcut for\n \u003ccode\u003eDirectory.doesDirectoryExist\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "is_dir",
          "package": "hsshellscript",
          "signature": "String-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:is_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:is_dir\"]"
        },
        "index": {
          "description": "Test if path points to directory This will return True for symlink pointing to directory It shortcut for Directory.doesDirectoryExist",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "is_dir",
          "normalized": "String-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:is_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if path points to a file. This is a shortcut for\n \u003ccode\u003eDirectory.doesFileExist\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "is_file",
          "package": "hsshellscript",
          "signature": "String-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:is_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:is_file\"]"
        },
        "index": {
          "description": "Test if path points to file This is shortcut for Directory.doesFileExist",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "is_file",
          "normalized": "String-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:is_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet contents of a file or of \u003ccode\u003estdin\u003c/code\u003e. This is a simple frontend to\n\u003ccode\u003ehGetContents\u003c/code\u003e. A file name of \u003ccode\u003e\"-\"\u003c/code\u003e designates stdin. The contents are read\nlazily as the string is evaluated.\n\u003c/p\u003e\u003cp\u003e(The handle which we read from will be in semi-closed state. Once all input\nhas read, it is closed automatically (Haskell Library Report 11.2.1).\nTherefore we don't need to return it).\n\u003c/p\u003e\u003cpre\u003elazy_contents path = do\n    h   \u003c- if path == \"-\" then return stdin else openFile path ReadMode\n    hGetContents h\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "lazy_contents",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:lazy_contents\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:lazy_contents\"]"
        },
        "index": {
          "description": "Get contents of file or of stdin This is simple frontend to hGetContents file name of designates stdin The contents are read lazily as the string is evaluated The handle which we read from will be in semi-closed state Once all input has read it is closed automatically Haskell Library Report Therefore we don need to return it lazy contents path do if path then return stdin else openFile path ReadMode hGetContents",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "lazy_contents",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:lazy_contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMount point\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_dir",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_dir\"]"
        },
        "index": {
          "description": "Mount point",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_dir",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump frequency in days\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_freq",
          "package": "hsshellscript",
          "signature": "Int",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_freq\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_freq\"]"
        },
        "index": {
          "description": "Dump frequency in days",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_freq",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevice file (\"name of mounted file system\")\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_fsname",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_fsname\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_fsname\"]"
        },
        "index": {
          "description": "Device file name of mounted file system",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_fsname",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_fsname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMount options (\"see mntent.h\")\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_opts",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_opts\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_opts\"]"
        },
        "index": {
          "description": "Mount options see mntent.h",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_opts",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Pass number on parallel fsck\"\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_passno",
          "package": "hsshellscript",
          "signature": "Int",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_passno\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_passno\"]"
        },
        "index": {
          "description": "Pass number on parallel fsck",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_passno",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_passno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich kind of file system (\"see mntent.h\")\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "mnt_type",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_type\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mnt_type\"]"
        },
        "index": {
          "description": "Which kind of file system see mntent.h",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "mnt_type",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:mnt_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "o_CREAT",
          "package": "hsshellscript",
          "signature": "CInt",
          "source": "src/HsShellScript-Misc.html#o_CREAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "o_CREAT",
          "package": "hsshellscript",
          "partial": "CREAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:o_CREAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "o_EXCL",
          "package": "hsshellscript",
          "signature": "CInt",
          "source": "src/HsShellScript-Misc.html#o_EXCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "o_EXCL",
          "package": "hsshellscript",
          "partial": "EXCL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:o_EXCL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for the existence of a path. This is the disjunction of\n \u003ccode\u003eDirectory.doesDirectoryExist\u003c/code\u003e and \u003ccode\u003eDirectory.doesFileExist\u003c/code\u003e. For an dangling symlink, this will return \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "path_exists",
          "package": "hsshellscript",
          "signature": "String-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:path_exists\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:path_exists\"]"
        },
        "index": {
          "description": "Test for the existence of path This is the disjunction of Directory.doesDirectoryExist and Directory.doesFileExist For an dangling symlink this will return False",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "path_exists",
          "normalized": "String-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:path_exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for the existence of a path. This uses \u003ccode\u003eSystem.Posix.Files.getFileStatus\u003c/code\u003e to determine whether the path exists in any form in the file system.\n For a dangling symlink, the result is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "path_exists'",
          "package": "hsshellscript",
          "signature": "String-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:path_exists-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:path_exists-39-\"]"
        },
        "index": {
          "description": "Test for the existence of path This uses System.Posix.Files.getFileStatus to determine whether the path exists in any form in the file system For dangling symlink the result is True",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "path_exists'",
          "normalized": "String-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:path_exists-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the system wide file system table.\n\u003c/p\u003e\u003cpre\u003eread_fstab = read_mounts \"/etc/fstab\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eread_mounts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "read_fstab",
          "package": "hsshellscript",
          "signature": "IO [Mntent]",
          "source": "src/HsShellScript-Misc.html#read_fstab",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_fstab\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:read_fstab\"]"
        },
        "index": {
          "description": "Get the system wide file system table read fstab read mounts etc fstab See read mounts",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "read_fstab",
          "normalized": "IO[Mntent]",
          "package": "hsshellscript",
          "signature": "IO[Mntent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_fstab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead mount information. This is a front end to the \u003ccode\u003esetmntent(3)\u003c/code\u003e, \u003ccode\u003egetmntent(3)\u003c/code\u003e, \u003ccode\u003eendmntent(3)\u003c/code\u003e system library functions.\n\u003c/p\u003e\u003cp\u003eWhen the \u003ccode\u003esetmntent\u003c/code\u003e call fails, the \u003ccode\u003eerrno\u003c/code\u003e value is converted to an \u003ccode\u003eIOError\u003c/code\u003e and thrown.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eread_mtab\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eread_fstab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "read_mounts",
          "package": "hsshellscript",
          "signature": "String-\u003e IO [Mntent]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_mounts\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:read_mounts\"]"
        },
        "index": {
          "description": "Read mount information This is front end to the setmntent getmntent endmntent system library functions When the setmntent call fails the errno value is converted to an IOError and thrown See read mtab read fstab",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "read_mounts",
          "normalized": "String-\u003eIO[Mntent]",
          "package": "hsshellscript",
          "signature": "String-\u003eIO[Mntent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_mounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the currently mounted file systems.\n\u003c/p\u003e\u003cpre\u003eread_mtab = read_mounts \"/etc/mtab\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eread_mounts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "read_mtab",
          "package": "hsshellscript",
          "signature": "IO [Mntent]",
          "source": "src/HsShellScript-Misc.html#read_mtab",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_mtab\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:read_mtab\"]"
        },
        "index": {
          "description": "Get the currently mounted file systems read mtab read mounts etc mtab See read mounts",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "read_mtab",
          "normalized": "IO[Mntent]",
          "package": "hsshellscript",
          "signature": "IO[Mntent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:read_mtab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "setmntent",
          "package": "hsshellscript",
          "signature": "Ptr CChar -\u003e Ptr CChar -\u003e IO (Ptr ())",
          "source": "src/HsShellScript-Misc.html#setmntent",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "setmntent",
          "normalized": "Ptr CChar-\u003ePtr CChar-\u003eIO(Ptr())",
          "package": "hsshellscript",
          "signature": "Ptr CChar-\u003ePtr CChar-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:setmntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory. This will create a new directory, with a path which did not previously exist in the file system. The path consists\n of the specified prefix, a sequence of random characters (digits and letters), and the specified suffix. The directory is normally created with\n read-write-execute permissions for the user, and no permissons for the group and others. But this may be further restricted by the process's umask\n in the usual way.\n\u003c/p\u003e\u003cp\u003eThe newly created directory will be owned by the effective uid of the process.  If the directory containing the it has the  set  group\n id  bit  set, or if the filesystem is mounted with BSD group semantics, the new directory will inherit the group ownership from its parent;\n otherwise it will be owned by the effective gid of the process. (See \u003ccode\u003emkdir(2)\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etmp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etemp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_dir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "temp_dir",
          "package": "hsshellscript",
          "signature": "Int-\u003e String-\u003e String-\u003e IO FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:temp_dir\"]"
        },
        "index": {
          "description": "Create temporary directory This will create new directory with path which did not previously exist in the file system The path consists of the specified prefix sequence of random characters digits and letters and the specified suffix The directory is normally created with read-write-execute permissions for the user and no permissons for the group and others But this may be further restricted by the process umask in the usual way The newly created directory will be owned by the effective uid of the process If the directory containing the it has the set group id bit set or if the filesystem is mounted with BSD group semantics the new directory will inherit the group ownership from its parent otherwise it will be owned by the effective gid of the process See mkdir See tmp dir temp file with temp dir",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "temp_dir",
          "normalized": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "package": "hsshellscript",
          "signature": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary file. This will create a new, empty file, with a path which did not previously exist in the file system. The path consists\n of the specified prefix, a sequence of random characters (digits and letters), and the specified suffix. The file is created with read-write\n permissions for the user, and no permissons for the group and others. The ownership is set to the effective user ID of the process. The group\n ownership is set either to the effective group ID of the process or to the group ID of the parent directory (depending on filesystem type and mount\n options on Linux - see \u003ccode\u003eopen(2)\u003c/code\u003e for details).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etmp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etemp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_file\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "temp_file",
          "package": "hsshellscript",
          "signature": "Int-\u003e String-\u003e String-\u003e IO FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:temp_file\"]"
        },
        "index": {
          "description": "Create temporary file This will create new empty file with path which did not previously exist in the file system The path consists of the specified prefix sequence of random characters digits and letters and the specified suffix The file is created with read-write permissions for the user and no permissons for the group and others The ownership is set to the effective user ID of the process The group ownership is set either to the effective group ID of the process or to the group ID of the parent directory depending on filesystem type and mount options on Linux see open for details See tmp file temp dir with temp file",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "temp_file",
          "normalized": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "package": "hsshellscript",
          "signature": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary path. This will generate a path which does not yet exist in the file system. It consists of the specified prefix, a\n sequence of random characters (digits and letters), and the specified suffix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAvoid relying on the generated path not to exist in the file system.\u003c/em\u003e Or else you'll get a potential race condition, since some other process might\n create the path after \u003ccode\u003etemp_path\u003c/code\u003e, before you use it. This is a security risk. The global random number generator (\u003ccode\u003eRandom.randomRIO\u003c/code\u003e) is used to\n generate the random characters. These might not be that random after all, and could potentially be guessed. Rather use \u003ccode\u003etemp_file\u003c/code\u003e or \u003ccode\u003etemp_dir\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etemp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etemp_dir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "temp_path",
          "package": "hsshellscript",
          "signature": "Int-\u003e String-\u003e String-\u003e IO FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_path\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:temp_path\"]"
        },
        "index": {
          "description": "Create temporary path This will generate path which does not yet exist in the file system It consists of the specified prefix sequence of random characters digits and letters and the specified suffix Avoid relying on the generated path not to exist in the file system Or else you ll get potential race condition since some other process might create the path after temp path before you use it This is security risk The global random number generator Random.randomRIO is used to generate the random characters These might not be that random after all and could potentially be guessed Rather use temp file or temp dir See temp file temp dir",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "temp_path",
          "normalized": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "package": "hsshellscript",
          "signature": "Int-\u003eString-\u003eString-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:temp_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory. This will create a new directory, with read-write-execute permissions for the user (unless further restricted by the\n process's umask), and no permissons for the group and others.\n The path consists of the specified prefix, a dot, and six random characters (digits and letters).\n\u003c/p\u003e\u003cpre\u003etmp_dir prefix = temp_dir 6 (prefix ++ \".\") \"\"\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etemp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etmp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_dir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "tmp_dir",
          "package": "hsshellscript",
          "signature": "String-\u003e IO FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:tmp_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:tmp_dir\"]"
        },
        "index": {
          "description": "Create temporary directory This will create new directory with read-write-execute permissions for the user unless further restricted by the process umask and no permissons for the group and others The path consists of the specified prefix dot and six random characters digits and letters tmp dir prefix temp dir prefix See temp dir tmp file with tmp dir",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "tmp_dir",
          "normalized": "String-\u003eIO FilePath",
          "package": "hsshellscript",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:tmp_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary file. This will create a new, empty file, with read-write permissions for the user, and no permissons for the group and others.\n The path consists of the specified prefix, a dot, and six random characters (digits and letters).\n\u003c/p\u003e\u003cpre\u003etmp_file prefix = temp_file 6 (prefix ++ \".\") \"\"\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etemp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etmp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_file\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "tmp_file",
          "package": "hsshellscript",
          "signature": "String-\u003e IO FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:tmp_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:tmp_file\"]"
        },
        "index": {
          "description": "Create temporary file This will create new empty file with read-write permissions for the user and no permissons for the group and others The path consists of the specified prefix dot and six random characters digits and letters tmp file prefix temp file prefix See temp file tmp dir with tmp file",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "tmp_file",
          "normalized": "String-\u003eIO FilePath",
          "package": "hsshellscript",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:tmp_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Misc",
          "name": "untilIO",
          "package": "hsshellscript",
          "signature": "m b -\u003e (b -\u003e m Bool) -\u003e m b",
          "source": "src/HsShellScript-Misc.html#untilIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "untilIO",
          "normalized": "a b-\u003e(b-\u003ea Bool)-\u003ea b",
          "package": "hsshellscript",
          "partial": "IO",
          "signature": "m b-\u003e(b-\u003em Bool)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:untilIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory, perform some action with it, and delete it afterwards. This is a front end to the \u003ccode\u003e\u003ca\u003etemp_dir\u003c/a\u003e\u003c/code\u003e function. The directory\n and its path are created in the same way. The IO action is passed the path of the new directory. When it finishes - normally or with an exception -\n the directory is deleted.\n\u003c/p\u003e\u003cp\u003eThe action must clean up any files it creates inside the directory by itself. \u003ccode\u003ewith_temp_dir\u003c/code\u003e doesn't delete any files inside, so the directory\n could be removed. If the directory isn't empty, an \u003ccode\u003eIOError\u003c/code\u003e results (with the path filled in). When the action throws an exception, and the\n temporary directory cannot be removed, then the exception is passed through, rather than replacing it with the IOError. (This is because it's\n probably exactly because of that exception that the directory isn't empty and can't be removed).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etemp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_file\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "with_temp_dir",
          "package": "hsshellscript",
          "signature": "Int-\u003e String-\u003e String-\u003e (FilePath -\u003e IO a)-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_temp_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:with_temp_dir\"]"
        },
        "index": {
          "description": "Create temporary directory perform some action with it and delete it afterwards This is front end to the temp dir function The directory and its path are created in the same way The IO action is passed the path of the new directory When it finishes normally or with an exception the directory is deleted The action must clean up any files it creates inside the directory by itself with temp dir doesn delete any files inside so the directory could be removed If the directory isn empty an IOError results with the path filled in When the action throws an exception and the temporary directory cannot be removed then the exception is passed through rather than replacing it with the IOError This is because it probably exactly because of that exception that the directory isn empty and can be removed See temp dir with tmp dir with temp file",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "with_temp_dir",
          "normalized": "Int-\u003eString-\u003eString-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "signature": "Int-\u003eString-\u003eString-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_temp_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and open a temporary file, perform some action with it, and delete it afterwards. This is a front end to the \u003ccode\u003e\u003ca\u003etemp_file\u003c/a\u003e\u003c/code\u003e function. The file\n and its path are created in the same way. The IO action is passed a handle of the new file. When it finishes - normally or with an exception -\n the file is deleted.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etemp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_dir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "with_temp_file",
          "package": "hsshellscript",
          "signature": "Int-\u003e String-\u003e String-\u003e (Handle -\u003e IO a)-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_temp_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:with_temp_file\"]"
        },
        "index": {
          "description": "Create and open temporary file perform some action with it and delete it afterwards This is front end to the temp file function The file and its path are created in the same way The IO action is passed handle of the new file When it finishes normally or with an exception the file is deleted See temp file with tmp file with temp dir",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "with_temp_file",
          "normalized": "Int-\u003eString-\u003eString-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "signature": "Int-\u003eString-\u003eString-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_temp_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory, perform some action with it, and delete it afterwards. This is a front end to the \u003ccode\u003e\u003ca\u003etmp_dir\u003c/a\u003e\u003c/code\u003e function. The directory\n and its path are created in the same way. The IO action is passed the path of the new directory. When it finishes - normally or with an exception -\n the directory is deleted.\n\u003c/p\u003e\u003cp\u003eThe action must clean up any files it creates inside the directory by itself. \u003ccode\u003ewith_temp_dir\u003c/code\u003e doesn't delete any files inside, so the directory\n could be removed. If the directory isn't empty, an \u003ccode\u003eIOError\u003c/code\u003e results (with the path filled in). When the action throws an exception, and the\n temporary directory cannot be removed, then the exception is passed through, rather than replacing it with the IOError. (This is because it's\n probably exactly because of that exception that the directory isn't empty and can't be removed).\n\u003c/p\u003e\u003cpre\u003ewith_tmp_dir prefix io = with_temp_dir 6 (prefix ++ \".\") \"\" io\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etmp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_dir\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_file\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "with_tmp_dir",
          "package": "hsshellscript",
          "signature": "String-\u003e (FilePath -\u003e IO a)-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_tmp_dir\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:with_tmp_dir\"]"
        },
        "index": {
          "description": "Create temporary directory perform some action with it and delete it afterwards This is front end to the tmp dir function The directory and its path are created in the same way The IO action is passed the path of the new directory When it finishes normally or with an exception the directory is deleted The action must clean up any files it creates inside the directory by itself with temp dir doesn delete any files inside so the directory could be removed If the directory isn empty an IOError results with the path filled in When the action throws an exception and the temporary directory cannot be removed then the exception is passed through rather than replacing it with the IOError This is because it probably exactly because of that exception that the directory isn empty and can be removed with tmp dir prefix io with temp dir prefix io See tmp dir with temp dir with tmp file",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "with_tmp_dir",
          "normalized": "String-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_tmp_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and open a temporary file, perform some action with it, and delete it afterwards. This is a front end to the \u003ccode\u003e\u003ca\u003etmp_file\u003c/a\u003e\u003c/code\u003e function. The file\n and its path are created in the same way. The IO action is passed a handle of the new file. When it finishes - normally or with an exception -\n the file is deleted.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etmp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_temp_file\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith_tmp_dir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "with_tmp_file",
          "package": "hsshellscript",
          "signature": "String-\u003e (Handle -\u003e IO a)-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_tmp_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:with_tmp_file\"]"
        },
        "index": {
          "description": "Create and open temporary file perform some action with it and delete it afterwards This is front end to the tmp file function The file and its path are created in the same way The IO action is passed handle of the new file When it finishes normally or with an exception the file is deleted See tmp file with temp file with tmp dir",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "with_tmp_file",
          "normalized": "String-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_tmp_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the working directory temporarily. This executes the specified IO action with a new working directory, and restores it afterwards\n (exception-safely).\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "with_wd",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_wd\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:with_wd\"]"
        },
        "index": {
          "description": "Change the working directory temporarily This executes the specified IO action with new working directory and restores it afterwards exception-safely",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "with_wd",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:with_wd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat an \u003ccode\u003eInt\u003c/code\u003e with leading zeros. If the string representation of the \u003ccode\u003eIn&#359;\u003c/code\u003e is longer than the number of characters to fill up, this produces as \n many characters as needed.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.Misc\",\"HsShellScript\"]",
          "name": "zeros",
          "package": "hsshellscript",
          "signature": "Int-\u003e Int-\u003e String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:zeros\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:zeros\"]"
        },
        "index": {
          "description": "Format an Int with leading zeros If the string representation of the In is longer than the number of characters to fill up this produces as many characters as needed",
          "hierarchy": "HsShellScript Misc",
          "module": "HsShellScript.Misc",
          "name": "zeros",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "hsshellscript",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Misc.html#v:zeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Paths",
          "name": "Paths",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Paths.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "Paths",
          "package": "hsshellscript",
          "partial": "Paths",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute, using the current working directory.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to the current\nworking directory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe current working directory is determined with \u003ccode\u003egetCurrentDirectory\u003c/code\u003e\nwhich means that symbolic links in it are expanded and the path is\nnormalised. This is different from \u003ccode\u003epwd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "absolute_path",
          "package": "hsshellscript",
          "signature": "String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute using the current working directory This makes relative path absolute with respect to the current working directory An absolute path is returned unmodified The current working directory is determined with getCurrentDirectory which means that symbolic links in it are expanded and the path is normalised This is different from pwd",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "absolute_path",
          "normalized": "String-\u003eIO String",
          "package": "hsshellscript",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:absolute_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e\u003cp\u003eThe order of the arguments can be confusing. You should rather use \u003ccode\u003e\u003ca\u003eabsolute_path_by\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003eabsolute_path'\u003c/code\u003e is included for backwards compatibility.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "absolute_path'",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified The order of the arguments can be confusing You should rather use absolute path by absolute path is included for backwards compatibility",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "absolute_path'",
          "normalized": "String-\u003eString-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:absolute_path-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a path absolute.\n\u003c/p\u003e\u003cp\u003eThis makes a relative path absolute with respect to a specified\ndirectory. An absolute path is returned unmodified.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "absolute_path_by",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Make path absolute This makes relative path absolute with respect to specified directory An absolute path is returned unmodified",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "absolute_path_by",
          "normalized": "String-\u003eString-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:absolute_path_by"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory part of a path.\n\u003c/p\u003e\u003cpre\u003edir_part = fst . split_path\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "dir_part",
          "package": "hsshellscript",
          "signature": "String -\u003e String",
          "source": "src/HsShellScript-Paths.html#dir_part",
          "type": "function"
        },
        "index": {
          "description": "Get the directory part of path dir part fst split path See split path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "dir_part",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:dir_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last path component of a path.\n\u003c/p\u003e\u003cpre\u003efilename_part = snd . split_path\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003efilename_part \"foo/bar\" == \"bar\"\nfilename_part \".\"       == \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "filename_part",
          "package": "hsshellscript",
          "signature": "String -\u003e String",
          "source": "src/HsShellScript-Paths.html#filename_part",
          "type": "function"
        },
        "index": {
          "description": "Get the last path component of path filename part snd split path Examples filename part foo bar bar filename part See split path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "filename_part",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:filename_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free, normalised form of a path. The transformation is purely syntactic. \u003ccode\u003e\"..\"\u003c/code\u003e path components will be removed, along\n   with their preceding path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eguess_dotdot = fmap unslice_path . guess_dotdot_comps . slice_path\n\u003c/pre\u003e",
          "module": "HsShellScript.Paths",
          "name": "guess_dotdot",
          "package": "hsshellscript",
          "signature": "String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Guess the component free normalised form of path The transformation is purely syntactic path components will be removed along with their preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing guess dotdot fmap unslice path guess dotdot comps slice path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "guess_dotdot",
          "normalized": "String-\u003eMaybe String",
          "package": "hsshellscript",
          "signature": "String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:guess_dotdot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the \u003ccode\u003e\"..\"\u003c/code\u003e-component free form of a path, specified as a list of path components, by syntactically removing them, along with the preceding\n   path components. This will produce\n   erroneous results when the path contains symlinks. If the path contains leading \u003ccode\u003e\"..\"\u003c/code\u003e components, or more \u003ccode\u003e\"..\"\u003c/code\u003e components than preceeding normal\n   components, then the \u003ccode\u003e\"..\"\u003c/code\u003e components can't be normalised away. In this case, the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "guess_dotdot_comps",
          "package": "hsshellscript",
          "signature": "[String]-\u003e Maybe [String]",
          "type": "function"
        },
        "index": {
          "description": "Guess the component free form of path specified as list of path components by syntactically removing them along with the preceding path components This will produce erroneous results when the path contains symlinks If the path contains leading components or more components than preceeding normal components then the components can be normalised away In this case the result is Nothing",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "guess_dotdot_comps",
          "normalized": "[String]-\u003eMaybe[String]",
          "package": "hsshellscript",
          "signature": "[String]-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:guess_dotdot_comps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a path. This is done by reducing repeated \u003ccode\u003e/\u003c/code\u003e characters to one, and removing\n   \u003ccode\u003e.\u003c/code\u003e path components. \u003ccode\u003e..\u003c/code\u003e path components are left intact, because of possible symlinks.\n\u003c/p\u003e\u003cp\u003eNote that the normalised path isn't 100% equivalent to the original one. Any trailing slash is removed. When the last path component is a symbolic\n   link, then both paths denote the same thing, except for in the context of the \u003ccode\u003ereadlink\u003c/code\u003e call. It will fail when the trailing slash is present\n   (because then the path denotes the directory which the link points to), but it will succeed when it is absent.\n\u003c/p\u003e\u003cpre\u003enormalise_path = unslice_path . slice_path\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "normalise_path",
          "package": "hsshellscript",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Normalise path This is done by reducing repeated characters to one and removing path components path components are left intact because of possible symlinks Note that the normalised path isn equivalent to the original one Any trailing slash is removed When the last path component is symbolic link then both paths denote the same thing except for in the context of the readlink call It will fail when the trailing slash is present because then the path denotes the directory which the link points to but it will succeed when it is absent normalise path unslice path slice path See unslice path slice path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "normalise_path",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:normalise_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a file name in components. This are the base file name and the\nsuffixes, which are separated by dots. If the name starts with a dot, it is\nregarded as part of the base name. The result is a list of file name\ncomponents. The filename may be a path. In this case, everything up to the\nlast path component will be returned as part of the base file name. The\npath gets normalised thereby.\n\u003c/p\u003e\u003cp\u003eNo empty suffixes are returned. If the file name contains several\nconsecutive dots, they are regared as part of the preceding file name\ncomponent.\n\u003c/p\u003e\u003cp\u003eConcateneting the name components and adding dots, reproduces the\noriginal name, with a normalised path:\n\u003ccode\u003econcat . intersperse \".\" . \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003enormalise\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \"\u003ccode\u003e..\u003c/code\u003e\". Then it is not\npossible to deduce the refered directory's name from the path. An IO\naction for getting the real path is then necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eslice_filename \"a.b//./.foo.tar.gz\" = [\"a.b/.foo\",\"tar\",\"gz\"]\nslice_filename \".x..y.\"             = [\".x.\", \"y.\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eslice_filename'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "slice_filename",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Split file name in components This are the base file name and the suffixes which are separated by dots If the name starts with dot it is regarded as part of the base name The result is list of file name components The filename may be path In this case everything up to the last path component will be returned as part of the base file name The path gets normalised thereby No empty suffixes are returned If the file name contains several consecutive dots they are regared as part of the preceding file name component Concateneting the name components and adding dots reproduces the original name with normalised path concat intersperse slice filename normalise Note that the last path component might be Then it is not possible to deduce the refered directory name from the path An IO action for getting the real path is then necessary Examples slice filename a.b foo.tar.gz a.b foo tar gz slice filename x..y See unslice filename slice filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "slice_filename",
          "normalized": "String-\u003e[String]",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:slice_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e. It is like \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for\nbeing more efficient, and the filename must not contain any preceding path,\nsince this case isn't considered.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "slice_filename'",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "This is variant of slice filename It is like slice filename except for being more efficient and the filename must not contain any preceding path since this case isn considered See slice filename unslice filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "slice_filename'",
          "normalized": "String-\u003e[String]",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:slice_filename-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in components. Repeated \"\u003ccode\u003e/\u003c/code\u003e\" characters don't lead to empty\ncomponents. \"\u003ccode\u003e.\u003c/code\u003e\" path components are removed. If the path is absolute, the first component\nwill start with \"\u003ccode\u003e/\u003c/code\u003e\". \"\u003ccode\u003e..\u003c/code\u003e\" components are left intact. They can't be simply\nremoved, because the preceding component might be a symlink. In this case,\n\u003ccode\u003erealpath\u003c/code\u003e is probably what you need.\n\u003c/p\u003e\u003cp\u003eThe case that the path is empty is treated like \"\u003ccode\u003e.\u003c/code\u003e\", yielding an empty path components list.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eslice_path \"/\"        = [\"/\"]\nslice_path \"/foo/bar\" = [\"/foo\",\"bar\"]\nslice_path \"..//./\"   = [\"..\"]\nslice_path \".\"        = []\nslice_path \"\"         = []\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003erealpath\u003c/code\u003e, \u003ccode\u003erealpath_s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "slice_path",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Split path in components Repeated characters don lead to empty components path components are removed If the path is absolute the first component will start with components are left intact They can be simply removed because the preceding component might be symlink In this case realpath is probably what you need The case that the path is empty is treated like yielding an empty path components list Examples slice path slice path foo bar foo bar slice path slice path slice path See unslice path realpath realpath",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "slice_path",
          "normalized": "String-\u003e[String]",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:slice_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in directory, base file name and suffix.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "split3",
          "package": "hsshellscript",
          "signature": "String-\u003e (String, String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split path in directory base file name and suffix",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "split3",
          "normalized": "String-\u003e(String,String,String)",
          "package": "hsshellscript",
          "signature": "String-\u003e(String,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:split3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a file name in prefix and suffix. If there isn't any suffix in\nthe file name, then return an empty suffix. A dot at the beginning or at\nthe end is not regarded as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eThe last path component is what is being split. This isn't the same as\nsplitting the string at the last dot. For instance, if the file name\ndoesn't contain any dot, dots in previous path component's aren't mistaken\nas introducing suffixes.\n\u003c/p\u003e\u003cp\u003eThe path part is returned in normalised form. This means, \u003ccode\u003e\".\"\u003c/code\u003e components\nare removed, and multiple \"\u003ccode\u003e/\u003c/code\u003e\"s are reduced to one.\n\u003c/p\u003e\u003cp\u003eNote that there isn't any plausibility check performed on the suffix. If the file name doesn't have a suffix, but happens to contain a dot, then this\ndot is mistaken as introducing a suffix.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_filename \"path/to/foo.bar\"                             = (\"path/to/foo\",\"bar\")\nsplit_filename \"path/to/foo\"                                 = (\"path/to/foo\",\"\")\nsplit_filename \"/path.to/foo\"                                = (\"/path.to/foo\",\"\")\nsplit_filename \"a///./x\"                                     = (\"a/x\",\"\")\nsplit_filename \"dir.suffix/./\"                               = (\"dir\",\"suffix\")\nsplit_filename \"Photographie, Das 20. Jahrhundert (300 dpi)\" = (\"Photographie, Das 20\", \" Jahrhundert (300 dpi)\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, 'split_filename\\''\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "split_filename",
          "package": "hsshellscript",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split file name in prefix and suffix If there isn any suffix in the file name then return an empty suffix dot at the beginning or at the end is not regarded as introducing suffix The last path component is what is being split This isn the same as splitting the string at the last dot For instance if the file name doesn contain any dot dots in previous path component aren mistaken as introducing suffixes The path part is returned in normalised form This means components are removed and multiple are reduced to one Note that there isn any plausibility check performed on the suffix If the file name doesn have suffix but happens to contain dot then this dot is mistaken as introducing suffix Examples split filename path to foo.bar path to foo bar split filename path to foo path to foo split filename path.to foo path.to foo split filename split filename dir.suffix dir suffix split filename Photographie Das Jahrhundert dpi Photographie Das Jahrhundert dpi See slice path split filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "split_filename",
          "normalized": "String-\u003e(String,String)",
          "package": "hsshellscript",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:split_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. This is a more efficient version\nof \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e, for the case that you know the string is\nis a pure file name without any slashes.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "split_filename'",
          "package": "hsshellscript",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Variant of split filename This is more efficient version of split filename for the case that you know the string is is pure file name without any slashes See split filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "split_filename'",
          "normalized": "String-\u003e(String,String)",
          "package": "hsshellscript",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:split_filename-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path in directory and file name. Only in the case that the\nsupplied path is empty, both parts are empty strings. Otherwise, \u003ccode\u003e\".\"\u003c/code\u003e is filled in\nfor the corresponding part, if necessary. Unless the path is empty,\nconcatenating the returned path and file name components with a slash in\nbetween, makes a valid path to the file.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esplit_path\u003c/code\u003e splits off the last path component. This\nisn't the same as the text after the last \u003ccode\u003e/\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the last path component might be \u003ccode\u003e\"..\"\u003c/code\u003e. Then it is not\npossible to deduce the refered directory's name from the path. Then an IO\naction for getting the real path is necessary.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003esplit_path \"/a/b/c\"      == (\"/a/b\", \"c\")\nsplit_path \"foo\"         == (\".\", \"foo\")\nsplit_path \"foo/bar\"     == (\"foo\", \"bar\")\nsplit_path \"foo/..\"      == (\"foo\", \"..\")\nsplit_path \".\"           == (\".\", \".\")\nsplit_path \"\"            == (\"\", \"\")\nsplit_path \"/foo\"        == (\"/\", \"foo\")\nsplit_path \"foo/\"        == (\".\", \"foo\")\nsplit_path \"foo/.\"       == (\".\", \"foo\")\nsplit_path \"foo///./bar\" == (\"foo\", \"bar\")\nsplit_path \"/\"           == (\"/\", \".\")\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "split_path",
          "package": "hsshellscript",
          "signature": "String-\u003e (String, String)",
          "type": "function"
        },
        "index": {
          "description": "Split path in directory and file name Only in the case that the supplied path is empty both parts are empty strings Otherwise is filled in for the corresponding part if necessary Unless the path is empty concatenating the returned path and file name components with slash in between makes valid path to the file split path splits off the last path component This isn the same as the text after the last Note that the last path component might be Then it is not possible to deduce the refered directory name from the path Then an IO action for getting the real path is necessary Examples split path split path foo foo split path foo bar foo bar split path foo foo split path split path split path foo foo split path foo foo split path foo foo split path foo bar foo bar split path See slice path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "split_path",
          "normalized": "String-\u003e(String,String)",
          "package": "hsshellscript",
          "signature": "String-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:split_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a path for a specific suffix and split it off.\n\u003c/p\u003e\u003cp\u003eIf the path ends with the suffix, then the result is \u003ccode\u003eJust\nprefix\u003c/code\u003e, where \u003ccode\u003eprefix\u003c/code\u003e is the normalised path\nwithout the suffix. Otherwise it's \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "test_suffix",
          "package": "hsshellscript",
          "signature": "String-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Test path for specific suffix and split it off If the path ends with the suffix then the result is Just prefix where prefix is the normalised path without the suffix Otherwise it Nothing",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "test_suffix",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "hsshellscript",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:test_suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm file name from file name components, interspersing dots. This is\nthe inverse of \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e, except for normalisation of any path.\n\u003c/p\u003e\u003cpre\u003e unslice_filename = concat . intersperse \".\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unslice_filename",
          "package": "hsshellscript",
          "signature": "[String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form file name from file name components interspersing dots This is the inverse of slice filename except for normalisation of any path unslice filename concat intersperse See slice filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unslice_filename",
          "normalized": "[String]-\u003eString",
          "package": "hsshellscript",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unslice_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a path from path components. This isn't the inverse\nof \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, since \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\nnormalises the path.\n\u003c/p\u003e\u003cpre\u003eunslice_path [] = \".\"\nunslice_path cs = concat (intersperse \"/\" cs)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsplit_parts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unslice_path",
          "package": "hsshellscript",
          "signature": "[String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form path from path components This isn the inverse of slice path since unslice path slice path normalises the path unslice path unslice path cs concat intersperse cs See slice path unsplit parts",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unslice_path",
          "normalized": "[String]-\u003eString",
          "package": "hsshellscript",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unslice_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm path from directory, base file name and suffix parts.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unsplit3",
          "package": "hsshellscript",
          "signature": "(String, String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Form path from directory base file name and suffix parts",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unsplit3",
          "normalized": "(String,String,String)-\u003eString",
          "package": "hsshellscript",
          "signature": "(String,String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unsplit3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e. Concatenate prefix and suffix, adding\na dot in between, iff the suffix is not empty. The path part of the prefix is\nnormalised.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unsplit_filename",
          "package": "hsshellscript",
          "signature": "(String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Inverse of split filename Concatenate prefix and suffix adding dot in between iff the suffix is not empty The path part of the prefix is normalised See split filename",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unsplit_filename",
          "normalized": "(String,String)-\u003eString",
          "package": "hsshellscript",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unsplit_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of path parts. The idea is that you can throw in reasonably formed parts, and get a reasonably\nformed version of the concatenated path out.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\".\"\u003c/code\u003e parts are removed. Empty parts are treated as \u003ccode\u003e\".\"\u003c/code\u003e parts. One leading slash in each of any but the first part is removed. The result is\nthen interspersed with slashes and string wise concatenated. The interior of the parts isn't examined. \u003ccode\u003e\"..\"\u003c/code\u003e components aren't treated specially.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eunsplit_parts []                       == \".\"\nunsplit_parts [\"\"]                     == \".\"\nunsplit_parts [\"/\"]                    == \"/\"\nunsplit_parts [\"/\", \"foo\"]             == \"/foo\"\nunsplit_parts [\"\", \"/foo\"]             == \"foo\"\nunsplit_parts [\"/foo\", \"bar\"]          == \"/foo/bar\"\nunsplit_parts [\"/foo\", \"/bar\"]         == \"/foo/bar\"\nunsplit_parts [\"foo/\", \"bar\"]          == \"foo//bar\"\nunsplit_parts [\"foo\", \"\", \".\", \"bar\"]  == \"foo/bar\"\nunsplit_parts [\"foo\", \"bar//./baz/\"]   == \"foo/bar//./baz/\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunsplit_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unsplit_parts",
          "package": "hsshellscript",
          "signature": "[String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of path parts The idea is that you can throw in reasonably formed parts and get reasonably formed version of the concatenated path out parts are removed Empty parts are treated as parts One leading slash in each of any but the first part is removed The result is then interspersed with slashes and string wise concatenated The interior of the parts isn examined components aren treated specially Examples unsplit parts unsplit parts unsplit parts unsplit parts foo foo unsplit parts foo foo unsplit parts foo bar foo bar unsplit parts foo bar foo bar unsplit parts foo bar foo bar unsplit parts foo bar foo bar unsplit parts foo bar baz foo bar baz See unsplit path unslice path split path",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unsplit_parts",
          "normalized": "[String]-\u003eString",
          "package": "hsshellscript",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unsplit_parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e, except for normalisation.\n\u003c/p\u003e\u003cp\u003eThis forms a path from two parts, and takes care of \u003ccode\u003e\".\"\u003c/code\u003e and empty parts. When the two components are in normalised form, then \u003ccode\u003eunsplit_path\u003c/code\u003e\ncreates a normalised path.\n\u003c/p\u003e\u003cp\u003eThe definition:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\"\", \"\") = \"\"\nunsplit_path (p, q)   = unsplit_parts [p, q]\n\u003c/pre\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003eunsplit_path (\"\", \"\")     == \"\"\nunsplit_path (\".\", \"\")    == \".\"\nunsplit_path (\".\", \".\")   == \".\"\nunsplit_path (\"foo\", \".\") == \"foo\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esplit_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eslice_path\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsplit_parts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Paths",
          "name": "unsplit_path",
          "package": "hsshellscript",
          "signature": "(String, String)-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Inverse of split path except for normalisation This forms path from two parts and takes care of and empty parts When the two components are in normalised form then unsplit path creates normalised path The definition unsplit path unsplit path unsplit parts Examples unsplit path unsplit path unsplit path unsplit path foo foo See split path slice path unsplit parts",
          "hierarchy": "HsShellScript Paths",
          "module": "HsShellScript.Paths",
          "name": "unsplit_path",
          "normalized": "(String,String)-\u003eString",
          "package": "hsshellscript",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Paths.html#v:unsplit_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "ProcErr",
          "package": "hsshellscript",
          "source": "src/HsShellScript-ProcErr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "ProcErr",
          "package": "hsshellscript",
          "partial": "Proc Err",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error which occured when calling an external program.\n   The fields specifiy the details of the call.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eshow_runerror\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eas_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eSystem.Posix.ProcessStatus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.ProcErr",
          "name": "RunError",
          "package": "hsshellscript",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "data"
        },
        "index": {
          "description": "An error which occured when calling an external program The fields specifiy the details of the call See show runerror to ioe as ioe System.Posix.ProcessStatus",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "RunError",
          "package": "hsshellscript",
          "partial": "Run Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#t:RunError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild left handed pipe of stdout.\n\u003c/p\u003e\u003cp\u003e\"\u003ccode\u003ep -|- q\u003c/code\u003e\" builds an IO action from the two IO actions \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.\n   \u003ccode\u003eq\u003c/code\u003e is executed in an external process. The standard output of \u003ccode\u003ep\u003c/code\u003e is sent\n   to the standard input of \u003ccode\u003eq\u003c/code\u003e through a pipe. The result action consists\n   of forking off \u003ccode\u003eq\u003c/code\u003e (connected with a pipe), and \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result action does \u003cem\u003enot\u003c/em\u003e run \u003ccode\u003ep\u003c/code\u003e in a separate process. So, the pipe\n   itself can be seen as a modified action \u003ccode\u003ep\u003c/code\u003e, forking a connected \u003ccode\u003eq\u003c/code\u003e. The\n   pipe is called \"left handed\", because \u003ccode\u003ep\u003c/code\u003e remains unforked, and not \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe exit code of q is silently ignored.\u003c/em\u003e The process ID of the forked\n   copy of \u003ccode\u003eq\u003c/code\u003e isn't returned to the caller, so it's lost.\n\u003c/p\u003e\u003cp\u003eThe pipe, which connects \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e, is in \u003cem\u003etext mode\u003c/em\u003e. This means that the \n   output of \u003ccode\u003ep\u003c/code\u003e is converted from Unicode to the system character set, which \n   is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e and\n   \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003ecall (exec \"/usr/bin/foo\" [] -|- exec \"/usr/bin/bar\" [])\n\u003c/pre\u003e\u003cpre\u003ecall (    execp \"foo\" [\"...\"]\n      -|= ( -- Do something with foo's output\n            do cnt \u003c- lazy_contents \"-\"\n               ...\n          )\n     )\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, '(=|-)', '(-|=)', \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-|-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO b-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--124--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--124--45-\"]"
        },
        "index": {
          "description": "Build left handed pipe of stdout builds an IO action from the two IO actions and is executed in an external process The standard output of is sent to the standard input of through pipe The result action consists of forking off connected with pipe and The result action does not run in separate process So the pipe itself can be seen as modified action forking connected The pipe is called left handed because remains unforked and not The exit code of is silently ignored The process ID of the forked copy of isn returned to the caller so it lost The pipe which connects and is in text mode This means that the output of is converted from Unicode to the system character set which is determined by the environment variable LANG See HsShellScript and HsShellScript for further details Examples call exec usr bin foo exec usr bin bar call execp foo Do something with foo output do cnt lazy contents See subproc redirect",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-|-) -|-",
          "normalized": "IO a-\u003eIO b-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild right handed pipe of stdout.\n\u003c/p\u003e\u003cp\u003e\"\u003ccode\u003ep -|= q\u003c/code\u003e\" builds an IO action from the two IO actions \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.\n   \u003ccode\u003ep\u003c/code\u003e is executed in an external process. The standard output of \u003ccode\u003ep\u003c/code\u003e is sent\n   to the standard input of \u003ccode\u003eq\u003c/code\u003e through a pipe. The result action consists\n   of forking off \u003ccode\u003ep\u003c/code\u003e (connected with a pipe), and \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result action does \u003cem\u003enot\u003c/em\u003e run \u003ccode\u003eq\u003c/code\u003e in a separate process. So, the pipe\n   itself can be seen as a modified action \u003ccode\u003eq\u003c/code\u003e, forking a connected \u003ccode\u003ep\u003c/code\u003e.\n   The pipe is called \"right\n   handed\", because \u003ccode\u003eq\u003c/code\u003e has this property, and not \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe exit code of p is silently ignored.\u003c/em\u003e The process ID of the forked\n   copy of \u003ccode\u003eq\u003c/code\u003e isn't returned to the caller, so it's lost.\n\u003c/p\u003e\u003cp\u003eThe pipe, which connects \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e, is in \u003cem\u003etext mode\u003c/em\u003e. This means that the \n   output of \u003ccode\u003ep\u003c/code\u003e is converted from Unicode to the system character set, which \n   is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e and\n   \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e@call (exec \\\"\\/usr\\/bin\\/foo\\\" [] -|= exec \\\"\\/usr\\/bin\\/bar\\\" [])@\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, '(=|-)', '(=|=)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-|=)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO b-\u003e IO b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--124--61-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--124--61-\"]"
        },
        "index": {
          "description": "Build right handed pipe of stdout builds an IO action from the two IO actions and is executed in an external process The standard output of is sent to the standard input of through pipe The result action consists of forking off connected with pipe and The result action does not run in separate process So the pipe itself can be seen as modified action forking connected The pipe is called right handed because has this property and not The exit code of is silently ignored The process ID of the forked copy of isn returned to the caller so it lost The pipe which connects and is in text mode This means that the output of is converted from Unicode to the system character set which is determined by the environment variable LANG See HsShellScript and HsShellScript for further details Example call exec usr bin foo exec usr bin bar See subproc",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-|=) -|=",
          "normalized": "IO a-\u003eIO b-\u003eIO b",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect both stdout and stderr to a file. This is equivalent to the\nshell's \u003ccode\u003e&\u003e\u003c/code\u003e operator. If the file already exists, it will be overwritten.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified are the \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e handles, not the file\ndescriptors 1 and 2. The \u003ccode\u003eexec\u003c/code\u003e functions know about this. See\n\u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eNote: You can't redirect to \u003ccode\u003e\"/dev/null\"\u003c/code\u003e this way, because GHC 6.4's \u003ccode\u003eopenFile\u003c/code\u003e throws an \"invalid argument\"\nIOError. (This may be a bug in the GHC 6.4 libraries). Use \u003ccode\u003e-&\u003e\u003e-\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e(-&\u003e-) io path = err_to_out io -\u003e- path\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ecall (exec \"/path/to/foo\" [] -&\u003e- \"log\")\u003c/pre\u003e\u003cp\u003eSee '(-&\u003e\u003e-)', \u003ccode\u003e\u003ca\u003eerr_to_out\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-&\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--38--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--38--62--45-\"]"
        },
        "index": {
          "description": "Redirect both stdout and stderr to file This is equivalent to the shell operator If the file already exists it will be overwritten What actually modified are the stdout and stderr handles not the file descriptors and The exec functions know about this See HsShellScript and HsShellScript for details Note You can redirect to dev null this way because GHC openFile throws an invalid argument IOError This may be bug in the GHC libraries Use instead The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG io path err to out io path Example call exec path to foo log See err to out",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-&\u003e-) -&\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--38--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect both stdout and stderr to a file. If the file already exists, the\n   output will be appended.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified are the \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e handles, not the file\ndescriptors 1 and 2. The \u003ccode\u003eexec\u003c/code\u003e functions know about this. See\n\u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e(-&\u003e\u003e-) io path = (err_to_out \u003e\u003e io) -\u003e\u003e- path\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erun \"/some/noisy/program\" [] -&\u003e\u003e- \"/dev/null\"\n\u003c/pre\u003e\u003cp\u003eSee '(-&\u003e-)', \u003ccode\u003e\u003ca\u003eout_to_err\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-&\u003e\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--38--62--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--38--62--62--45-\"]"
        },
        "index": {
          "description": "Redirect both stdout and stderr to file If the file already exists the output will be appended What actually modified are the stdout and stderr handles not the file descriptors and The exec functions know about this See HsShellScript and HsShellScript for details The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG io path err to out io path Example run some noisy program dev null See out to err",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-&\u003e\u003e-) -&\u003e\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--38--62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect stdin from a file. This modifies the specified action, such\nthat the standard input is read from a file.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estdin\u003c/code\u003e handle, not the file\n   descriptor 0. The \u003ccode\u003eexec\u003c/code\u003e functions know about this. See\n   \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe file is read in \u003cem\u003etext mode\u003c/em\u003e. This means that the input is converted from the\nsystem character set to Unicode. The system's character set is determined by the\nenvironment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ecall (exec \"/path/to/foo\" [] -\u003c- \"bar\")\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, '(-\u003e-)', '(=\u003e-)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-\u003c-)",
          "package": "hsshellscript",
          "signature": "IO a -\u003e FilePath -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#-%3C-",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--60--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--60--45-\"]"
        },
        "index": {
          "description": "Redirect stdin from file This modifies the specified action such that the standard input is read from file What actually modified is the stdin handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details The file is read in text mode This means that the input is converted from the system character set to Unicode The system character set is determined by the environment variable LANG Example call exec path to foo bar See exec runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-\u003c-) -\u003c-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the standard output of the specified IO action to a file. The file will be overwritten, if it already exists.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estdout\u003c/code\u003e handle, not the file descriptor 1. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erunprog \"/some/program\" [] -\u003e- \"/tmp/output\"\n\u003c/pre\u003e\u003cp\u003eNote: You can't redirect to \u003ccode\u003e\"/dev/null\"\u003c/code\u003e this way, because GHC 6.4's \u003ccode\u003eopenFile\u003c/code\u003e throws an \"invalid argument\"\nIOError. (This may be a bug in the GHC 6.4 libraries). Use \u003ccode\u003e-\u003e\u003e-\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e-\u003e\u003e-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e=\u003e-\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--62--45-\"]"
        },
        "index": {
          "description": "Redirect the standard output of the specified IO action to file The file will be overwritten if it already exists What actually modified is the stdout handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG Example runprog some program tmp output Note You can redirect to dev null this way because GHC openFile throws an invalid argument IOError This may be bug in the GHC libraries Use instead See subproc runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-\u003e-) -\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the standard output of the specified IO action to a file. If the file already exists, the output will be appended.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estdout\u003c/code\u003e handle, not the file descriptor 1. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erun \"/some/noisy/program\" [] -\u003e\u003e- \"/dev/null\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, '(-\u003e-)', '(=\u003e\u003e-)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(-\u003e\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--62--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-45--62--62--45-\"]"
        },
        "index": {
          "description": "Redirect the standard output of the specified IO action to file If the file already exists the output will be appended What actually modified is the stdout handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG Example run some noisy program dev null See subproc runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(-\u003e\u003e-) -\u003e\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-45--62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild left handed pipe of stderr.\n\u003c/p\u003e\u003cp\u003e\"\u003ccode\u003ep =|- q\u003c/code\u003e\" builds an IO action from the two IO actions \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.\n   \u003ccode\u003eq\u003c/code\u003e is executed in an external process. The standard error output of \u003ccode\u003ep\u003c/code\u003e is sent\n   to the standard input of \u003ccode\u003eq\u003c/code\u003e through a pipe. The result action consists\n   of forking off \u003ccode\u003eq\u003c/code\u003e (connected with a pipe), and \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result action does \u003cem\u003enot\u003c/em\u003e run \u003ccode\u003ep\u003c/code\u003e in a separate process. So, the pipe\n   itself can be seen as a modified action \u003ccode\u003ep\u003c/code\u003e, forking a connected \u003ccode\u003eq\u003c/code\u003e. The\n   pipe is called \"left handed\", because \u003ccode\u003ep\u003c/code\u003e has this property, and not \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe exit code of q is silently ignored.\u003c/em\u003e The process ID of the forked\n   copy of \u003ccode\u003eq\u003c/code\u003e isn't returned to the caller, so it's lost.\n\u003c/p\u003e\u003cp\u003eThe pipe, which connects \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e, is in \u003cem\u003etext mode\u003c/em\u003e. This means that the \n   output of \u003ccode\u003ep\u003c/code\u003e is converted from Unicode to the system character set, which \n   is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e and\n   \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ecall (exec \"/usr/bin/foo\" [] =|- exec \"/usr/bin/bar\" [])\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, '(-|-)', '(-|=)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(=|-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO b-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--124--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-61--124--45-\"]"
        },
        "index": {
          "description": "Build left handed pipe of stderr builds an IO action from the two IO actions and is executed in an external process The standard error output of is sent to the standard input of through pipe The result action consists of forking off connected with pipe and The result action does not run in separate process So the pipe itself can be seen as modified action forking connected The pipe is called left handed because has this property and not The exit code of is silently ignored The process ID of the forked copy of isn returned to the caller so it lost The pipe which connects and is in text mode This means that the output of is converted from Unicode to the system character set which is determined by the environment variable LANG See HsShellScript and HsShellScript for further details Example call exec usr bin foo exec usr bin bar See subproc",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(=|-) =|-",
          "normalized": "IO a-\u003eIO b-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild right handed pipe of stderr.\n\u003c/p\u003e\u003cp\u003e\"\u003ccode\u003ep =|= q\u003c/code\u003e\" builds an IO action from the two IO actions \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e.\n   \u003ccode\u003ep\u003c/code\u003e is executed in an external process. The standard error output of \u003ccode\u003ep\u003c/code\u003e is sent\n   to the standard input of \u003ccode\u003eq\u003c/code\u003e through a pipe. The result action consists\n   of forking off \u003ccode\u003ep\u003c/code\u003e (connected with a pipe), and \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result action does \u003cem\u003enot\u003c/em\u003e run \u003ccode\u003eq\u003c/code\u003e in a separate process. So, the pipe\n   itself can be seen as a modified action \u003ccode\u003eq\u003c/code\u003e, forking a connected \u003ccode\u003ep\u003c/code\u003e.\n   The pipe is called \"right\n   handed\", because \u003ccode\u003eq\u003c/code\u003e has this property, and not \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe exit code of p is silently ignored.\u003c/em\u003e The process ID of the forked\n   copy of \u003ccode\u003eq\u003c/code\u003e isn't returned to the caller, so it's lost.\n\u003c/p\u003e\u003cp\u003eThe pipe, which connects \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e, is in \u003cem\u003etext mode\u003c/em\u003e. This means that the \n   output of \u003ccode\u003ep\u003c/code\u003e is converted from Unicode to the system character set, which \n   is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e and\n   \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e call (exec \"/usr/bin/foo\" [] =|= exec \"/usr/bin/bar\" [])\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e=|-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e-|=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(=|=)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO b-\u003e IO b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--124--61-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-61--124--61-\"]"
        },
        "index": {
          "description": "Build right handed pipe of stderr builds an IO action from the two IO actions and is executed in an external process The standard error output of is sent to the standard input of through pipe The result action consists of forking off connected with pipe and The result action does not run in separate process So the pipe itself can be seen as modified action forking connected The pipe is called right handed because has this property and not The exit code of is silently ignored The process ID of the forked copy of isn returned to the caller so it lost The pipe which connects and is in text mode This means that the output of is converted from Unicode to the system character set which is determined by the environment variable LANG See HsShellScript and HsShellScript for further details Example call exec usr bin foo exec usr bin bar See subproc",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(=|=) =|=",
          "normalized": "IO a-\u003eIO b-\u003eIO b",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--124--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the standard error output of the specified IO action to a file. If the file already exists, it will be overwritten.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estderr\u003c/code\u003e handle, not the file descriptor 2. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eNote: You can't redirect to \u003ccode\u003e\"/dev/null\"\u003c/code\u003e this way, because GHC 6.4's \u003ccode\u003eopenFile\u003c/code\u003e throws an \"invalid argument\"\nIOError. (This may be a bug in the GHC 6.4 libraries). Use \u003ccode\u003e=\u003e\u003e-\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erun \"/path/to/foo\" [] =\u003e- \"/tmp/errlog\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, '(-\u003e-)', '(=\u003e\u003e-)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(=\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-61--62--45-\"]"
        },
        "index": {
          "description": "Redirect the standard error output of the specified IO action to file If the file already exists it will be overwritten What actually modified is the stderr handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details Note You can redirect to dev null this way because GHC openFile throws an invalid argument IOError This may be bug in the GHC libraries Use instead The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG Example run path to foo tmp errlog See subproc runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(=\u003e-) =\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect the standard error output of the specified IO action to a file. If the file already exists, the output will be appended.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estderr\u003c/code\u003e handle, not the file descriptor 2. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe file is written in \u003cem\u003etext mode\u003c/em\u003e. This means that the\noutput is converted from Unicode to the system character set, which\nis determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erun \"/some/program\" [] =\u003e\u003e- \"/dev/null\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, '(-\u003e\u003e-)', '(=\u003e-)'.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "(=\u003e\u003e-)",
          "package": "hsshellscript",
          "signature": "IO a-\u003e FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--62--62--45-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:-61--62--62--45-\"]"
        },
        "index": {
          "description": "Redirect the standard error output of the specified IO action to file If the file already exists the output will be appended What actually modified is the stderr handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details The file is written in text mode This means that the output is converted from Unicode to the system character set which is determined by the environment variable LANG Example run some program dev null See subproc runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "(=\u003e\u003e-) =\u003e\u003e-",
          "normalized": "IO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:-61--62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "RunError",
          "package": "hsshellscript",
          "signature": "RunError",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:RunError\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:RunError\"]"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "RunError",
          "package": "hsshellscript",
          "partial": "Run Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:RunError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForcibly terminate the program, circumventing normal program shutdown.\n\u003c/p\u003e\u003cp\u003eThis is the \u003ccode\u003e_exit(2)\u003c/code\u003e system call. No cleanup actions installed with \u003ccode\u003ebracket\u003c/code\u003e\nare performed, no data buffered by file handles is written out, etc.\n\u003c/p\u003e",
          "module": "HsShellScript.ProcErr",
          "name": "_exit",
          "package": "hsshellscript",
          "signature": "Int-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Forcibly terminate the program circumventing normal program shutdown This is the exit system call No cleanup actions installed with bracket are performed no data buffered by file handles is written out etc",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "_exit",
          "normalized": "Int-\u003eIO a",
          "package": "hsshellscript",
          "signature": "Int-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:_exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "_exit_prim",
          "package": "hsshellscript",
          "signature": "CInt -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#_exit_prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "_exit_prim",
          "normalized": "CInt-\u003eIO()",
          "package": "hsshellscript",
          "signature": "CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:_exit_prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case the specified action throws an IOError, add a line to its location field. This way, more useful error messages can be produced. The\n   specified string is prepended to the old location, separating it with a newline from the previous location, if any. When using this thoroughly, you\n   get a reverse call stack in IOErrors.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003emy_fun =\n   add_location \"my_fun\" $ do\n      -- ...\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efill_in_filename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efill_in_location\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "add_location",
          "package": "hsshellscript",
          "signature": "String-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:add_location\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:add_location\"]"
        },
        "index": {
          "description": "In case the specified action throws an IOError add line to its location field This way more useful error messages can be produced The specified string is prepended to the old location separating it with newline from the previous location if any When using this thoroughly you get reverse call stack in IOErrors Example my fun add location my fun do See fill in filename fill in location",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "add_location",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:add_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the specified IO action (which is expected to contain calls of\n \u003ccode\u003erunprog\u003c/code\u003e) and convert any \u003ccode\u003eRunError\u003c/code\u003e exceptions to \u003ccode\u003eIOError\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe conversion is done by \u003ccode\u003eto_ioe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eto_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "as_ioe",
          "package": "hsshellscript",
          "signature": "IO a -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#as_ioe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:as_ioe\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:as_ioe\"]"
        },
        "index": {
          "description": "Call the specified IO action which is expected to contain calls of runprog and convert any RunError exceptions to IOError The conversion is done by to ioe See to ioe runprog",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "as_ioe",
          "normalized": "IO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:as_ioe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "c_close_on_exec",
          "package": "hsshellscript",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/HsShellScript-ProcErr.html#c_close_on_exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "c_close_on_exec",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:c_close_on_exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "c_fcntl_dupfd",
          "package": "hsshellscript",
          "signature": "CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/HsShellScript-ProcErr.html#c_fcntl_dupfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "c_fcntl_dupfd",
          "normalized": "CInt-\u003eCInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:c_fcntl_dupfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "c_prepare_fd_flags_for_exec",
          "package": "hsshellscript",
          "signature": "IO ()",
          "source": "src/HsShellScript-ProcErr.html#c_prepare_fd_flags_for_exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "c_prepare_fd_flags_for_exec",
          "normalized": "IO()",
          "package": "hsshellscript",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:c_prepare_fd_flags_for_exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "c_restore_fdflags",
          "package": "hsshellscript",
          "signature": "Ptr CInt -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#c_restore_fdflags",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "c_restore_fdflags",
          "normalized": "Ptr CInt-\u003eIO()",
          "package": "hsshellscript",
          "signature": "Ptr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:c_restore_fdflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "c_save_fdflags",
          "package": "hsshellscript",
          "signature": "IO (Ptr CInt)",
          "source": "src/HsShellScript-ProcErr.html#c_save_fdflags",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "c_save_fdflags",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:c_save_fdflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action as a separate process, and wait for it to finish.\n Report errors as exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is included only for backwards compatibility. New code should\u003c/em\u003e\n \u003cem\u003euse\u003c/em\u003e \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e instead\u003cem\u003e, which has better error handling.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe program forks a child process and performs the specified action.\n Then it waits for the child process to finish. If it exits in any way\n which indicates an error, the \u003ccode\u003eProcessStatus\u003c/code\u003e is thrown.\n\u003c/p\u003e\u003cp\u003eThe parent process waits for the child processes, which have been stopped by\n a signal.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "call",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:call\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:call\"]"
        },
        "index": {
          "description": "Execute an IO action as separate process and wait for it to finish Report errors as exceptions This function is included only for backwards compatibility New code should use subproc instead which has better error handling The program forks child process and performs the specified action Then it waits for the child process to finish If it exits in any way which indicates an error the ProcessStatus is thrown The parent process waits for the child processes which have been stopped by signal See HsShellScript for further details See subproc spawn",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "call",
          "normalized": "IO a-\u003eIO()",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a subroutine action in order to make it suitable to run as a child\n   process.\n\u003c/p\u003e\u003cp\u003eThis is used by functions like \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e etc. The action\n   is executed. When it returns, the (child) process is terminated with \u003ccode\u003e\u003ccode\u003e\u003ca\u003e_exit\u003c/a\u003e\u003c/code\u003e 0\u003c/code\u003e\n   (after flushing \u003ccode\u003estdout\u003c/code\u003e), circumventing normal program shutdown. When it\n   throws an exception, an error message is printed and the (child) process is\n   terminated with \u003ccode\u003e\u003ccode\u003e\u003ca\u003e_exit\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "child",
          "package": "hsshellscript",
          "signature": "IO a -\u003e IO b",
          "source": "src/HsShellScript-ProcErr.html#child",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:child\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:child\"]"
        },
        "index": {
          "description": "Modify subroutine action in order to make it suitable to run as child process This is used by functions like call silently pipe to etc The action is executed When it returns the child process is terminated with exit after flushing stdout circumventing normal program shutdown When it throws an exception an error message is printed and the child process is terminated with exit",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "child",
          "normalized": "IO a-\u003eIO b",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "close",
          "package": "hsshellscript",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/HsShellScript-ProcErr.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "close",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "decode_ioerror",
          "package": "hsshellscript",
          "signature": "String -\u003e Maybe IOError",
          "source": "src/HsShellScript-ProcErr.html#decode_ioerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "decode_ioerror",
          "normalized": "String-\u003eMaybe IOError",
          "package": "hsshellscript",
          "signature": "String-\u003eMaybe IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:decode_ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "dup2",
          "package": "hsshellscript",
          "signature": "CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/HsShellScript-ProcErr.html#dup2",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "dup2",
          "normalized": "CInt-\u003eCInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:dup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an action as a shell command, then perform it.\n\u003c/p\u003e\u003cp\u003eThis is used with actions such as \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e. For instance,\n \u003ccode\u003eecho runprog prog args\u003c/code\u003e is a variant of \u003ccode\u003erunprog prog args\u003c/code\u003e, which prints what\n is being done before doing it.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "echo",
          "package": "hsshellscript",
          "signature": "(FilePath -\u003e [String] -\u003e IO ())-\u003e FilePath-\u003e [String]-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:echo\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:echo\"]"
        },
        "index": {
          "description": "Print an action as shell command then perform it This is used with actions such as runprog exec or subproc For instance echo runprog prog args is variant of runprog prog args which prints what is being done before doing it See runprog subproc exec",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "echo",
          "normalized": "(FilePath-\u003e[String]-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eIO()",
          "package": "hsshellscript",
          "signature": "(FilePath-\u003e[String]-\u003eIO())-\u003eFilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "encode_ioerror",
          "package": "hsshellscript",
          "signature": "IOError -\u003e String",
          "source": "src/HsShellScript-ProcErr.html#encode_ioerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "encode_ioerror",
          "normalized": "IOError-\u003eString",
          "package": "hsshellscript",
          "signature": "IOError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:encode_ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the error output of the specified action to its standard output.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estdout\u003c/code\u003e handle, not the file descriptor 1. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cpre\u003eerr_to_out = redirect stderr stdout\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "err_to_out",
          "package": "hsshellscript",
          "signature": "IO a -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#err_to_out",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:err_to_out\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:err_to_out\"]"
        },
        "index": {
          "description": "Send the error output of the specified action to its standard output What actually modified is the stdout handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details err to out redirect stderr stdout See redirect",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "err_to_out",
          "normalized": "IO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:err_to_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColorful error message to \u003ccode\u003estderr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis prints a message to \u003ccode\u003estderr\u003c/code\u003e. When \u003ccode\u003estderr\u003c/code\u003e is connected to a terminal\n   (as determined by \u003ccode\u003eisatty(3)\u003c/code\u003e), additional escape sequences are printed,\n   which make the message appear in red. Additionally, a newline character is\n   output at the end.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estdout\u003c/code\u003e is flushed beforehand. So normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elogm_\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "errm",
          "package": "hsshellscript",
          "signature": "String -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#errm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errm\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:errm\"]"
        },
        "index": {
          "description": "Colorful error message to stderr This prints message to stderr When stderr is connected to terminal as determined by isatty additional escape sequences are printed which make the message appear in red Additionally newline character is output at the end stdout is flushed beforehand So normal output and error output appear in order even when they aren buffered as by default See logm logm errm",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "errm",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColorful error message to \u003ccode\u003estderr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis prints a message to \u003ccode\u003estderr\u003c/code\u003e. When \u003ccode\u003estderr\u003c/code\u003e is connected to a terminal\n   (as determined by \u003ccode\u003eisatty(3)\u003c/code\u003e), additional escape sequences are printed,\n   which make the message appear in red. No a newline character is output at the end.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estdout\u003c/code\u003e is flushed beforehand. So normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elogm_\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "errm_",
          "package": "hsshellscript",
          "signature": "String -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#errm_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errm_\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:errm_\"]"
        },
        "index": {
          "description": "Colorful error message to stderr This prints message to stderr When stderr is connected to terminal as determined by isatty additional escape sequences are printed which make the message appear in red No newline character is output at the end stdout is flushed beforehand So normal output and error output appear in order even when they aren buffered as by default See logm logm errm",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "errm_",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the global system error number. This is the POSIX \u003ccode\u003eerrno\u003c/code\u003e value. This\n function is redundant. Use \u003ccode\u003eForeign.C.Error.getErrno\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "errno",
          "package": "hsshellscript",
          "signature": "IO Errno",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errno\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:errno\"]"
        },
        "index": {
          "description": "Read the global system error number This is the POSIX errno value This function is redundant Use Foreign.C.Error.getErrno instead",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "errno",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external program. This replaces the running process. The path isn't searched, the environment isn't changed. In case of failure,\n an IOError is thrown.\n\u003c/p\u003e\u003cpre\u003eexec path args =\n   execute_file path False args Nothing\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute_file\u003c/a\u003e\u003c/code\u003e, \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "exec",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exec\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:exec\"]"
        },
        "index": {
          "description": "Execute an external program This replaces the running process The path isn searched the environment isn changed In case of failure an IOError is thrown exec path args execute file path False args Nothing See execute file HsShellScript",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "exec",
          "normalized": "String-\u003e[String]-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external program. This replaces the running process. The path isn't searched, the environment of the program is set as specified. In\n case of failure, an IOError is thrown.\n\u003c/p\u003e\u003cpre\u003eexece path args env =\n   execute_file path False args (Just env)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute_file\u003c/a\u003e\u003c/code\u003e, \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "exece",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e [(String, String)]-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exece\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:exece\"]"
        },
        "index": {
          "description": "Execute an external program This replaces the running process The path isn searched the environment of the program is set as specified In case of failure an IOError is thrown exece path args env execute file path False args Just env See execute file HsShellScript",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "exece",
          "normalized": "String-\u003e[String]-\u003e[(String,String)]-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003e[(String,String)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external program. This replaces the running process. The path is searched, the environment isn't changed. In case of failure,\n an IOError is thrown.\n\u003c/p\u003e\u003cpre\u003eexecp prog args =\n   execute_file prog True args Nothing\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute_file\u003c/a\u003e\u003c/code\u003e, \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "execp",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execp\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:execp\"]"
        },
        "index": {
          "description": "Execute an external program This replaces the running process The path is searched the environment isn changed In case of failure an IOError is thrown execp prog args execute file prog True args Nothing See execute file HsShellScript",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "execp",
          "normalized": "String-\u003e[String]-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external program. This replaces the running process. The path is searched, the environment of the program is set as specified. In\n case of failure, an IOError is thrown.\n\u003c/p\u003e\u003cpre\u003eexecpe prog args env =\n   execute_file prog True args (Just env)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecute_file\u003c/a\u003e\u003c/code\u003e, \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "execpe",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e [(String, String)]-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execpe\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:execpe\"]"
        },
        "index": {
          "description": "Execute an external program This replaces the running process The path is searched the environment of the program is set as specified In case of failure an IOError is thrown execpe prog args env execute file prog True args Just env See execute file HsShellScript",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "execpe",
          "normalized": "String-\u003e[String]-\u003e[(String,String)]-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003e[(String,String)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a replacement for \u003ccode\u003eSystem.Posix.Process.executeFile\u003c/code\u003e. It does\n   additional preparations, then calls \u003ccode\u003eexecuteFile\u003c/code\u003e. \u003ccode\u003eexecuteFile\u003c/code\u003e \u003cem\u003ecan't normally\u003c/em\u003e\n   \u003cem\u003ebe used directly, because it doesn't do the things which are\u003c/em\u003e\n   \u003cem\u003eoutlined here.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis are the differences to \u003ccode\u003eexecuteFile\u003c/code\u003e:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e are flushed.\n\u003c/li\u003e\u003cli\u003e The standard file descriptors 0-2 are made copies of the file descriptors\n   which the standard handles currently use. This is necessary because they\n   might no longer use the standard handles. See \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf the standard handles \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e, \u003ccode\u003estderr\u003c/code\u003e aren't in closed state,\n   and they aren't already connected to the respective standard file\n   descriptors, their file descriptors are copied to the respective standard\n   file descriptors (with \u003ccode\u003edup2\u003c/code\u003e). Backup copies are made of the file\n   descriptors which are overwritten. If some of the standard handles are closed,\n   the corresponding standard file descriptors are closed as well.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e All file descriptors, except for the standard ones, are set to close-on-exec\n   (see \u003ccode\u003efcntl(2)\u003c/code\u003e), and will be closed on successful replacement of\n   the process. Before that, the old file descriptor flags are saved.\n\u003c/li\u003e\u003cli\u003e The standard file descriptors are set to blocking mode, since GHC 6.2.2\n   sets file descriptors to non-blocking (except 0-2, which may get\n   overwritten by a non-blocking one in step 2). The called program\n   doesn't expect that.\n\u003c/li\u003e\u003cli\u003e In case replacing the process fails, the file descriptors are reset to\n   the original state. The file descriptors flags are restored, and the file\n   descriptors 0-2 are overwritten again, with their backup copies. Then an\n   IOError is thrown.\n\u003c/li\u003e\u003cli\u003e In any IOError, the program is filled in as the file name (\u003ccode\u003eexecuteFile\u003c/code\u003e\n   neglects this).\n\u003c/li\u003e\u003cli\u003e The return type is a generic \u003ccode\u003ea\u003c/code\u003e, rather than \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eAlso see \u003ca\u003eHsShellScript\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "execute_file",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e Bool-\u003e [String]-\u003e Maybe [(String, String)]-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execute_file\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:execute_file\"]"
        },
        "index": {
          "description": "This is replacement for System.Posix.Process.executeFile It does additional preparations then calls executeFile executeFile can normally be used directly because it doesn do the things which are outlined here This are the differences to executeFile stdout and stderr are flushed The standard file descriptors are made copies of the file descriptors which the standard handles currently use This is necessary because they might no longer use the standard handles See HsShellScript If the standard handles stdin stdout stderr aren in closed state and they aren already connected to the respective standard file descriptors their file descriptors are copied to the respective standard file descriptors with dup2 Backup copies are made of the file descriptors which are overwritten If some of the standard handles are closed the corresponding standard file descriptors are closed as well All file descriptors except for the standard ones are set to close-on-exec see fcntl and will be closed on successful replacement of the process Before that the old file descriptor flags are saved The standard file descriptors are set to blocking mode since GHC sets file descriptors to non-blocking except which may get overwritten by non-blocking one in step The called program doesn expect that In case replacing the process fails the file descriptors are reset to the original state The file descriptors flags are restored and the file descriptors are overwritten again with their backup copies Then an IOError is thrown In any IOError the program is filled in as the file name executeFile neglects this The return type is generic rather than Also see HsShellScript",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "execute_file",
          "normalized": "FilePath-\u003eBool-\u003e[String]-\u003eMaybe[(String,String)]-\u003eIO a",
          "package": "hsshellscript",
          "signature": "FilePath-\u003eBool-\u003e[String]-\u003eMaybe[(String,String)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:execute_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify an IO action to return the exit code of a failed program call,\n instead of throwing an exception.\n\u003c/p\u003e\u003cp\u003eThis is used to modify the error reporting behaviour of an IO action which\n uses 'run'/'runprog' or 'call'/'subproc'. When an external program exits with\n an exit code which indicates an error, normally an exception is thrown. After\n \u003ccode\u003eexitcode\u003c/code\u003e has been applied, the exit code is retruned instead.\n\u003c/p\u003e\u003cp\u003eThe caught exceptions are \u003ccode\u003e\u003ca\u003eRunError\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProcessStatus\u003c/a\u003e\u003c/code\u003e. Termination by a\n signal is still reported by an exception, which is passed through.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003eec \u003c- exitcode $ runprog \"foo\" [\"bar\"]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "exitcode",
          "package": "hsshellscript",
          "signature": "IO ()-\u003e IO ExitCode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exitcode\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:exitcode\"]"
        },
        "index": {
          "description": "Modify an IO action to return the exit code of failed program call instead of throwing an exception This is used to modify the error reporting behaviour of an IO action which uses run runprog or call subproc When an external program exits with an exit code which indicates an error normally an exception is thrown After exitcode has been applied the exit code is retruned instead The caught exceptions are RunError and ProcessStatus Termination by signal is still reported by an exception which is passed through Example ec exitcode runprog foo bar See runprog subproc run call",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "exitcode",
          "normalized": "IO()-\u003eIO ExitCode",
          "package": "hsshellscript",
          "signature": "IO()-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:exitcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a human-readable description of a \u003ccode\u003eProcessStatus\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eSystem.Posix.ProcessStatus\u003c/code\u003e in the GHC hierarchical\n library documentation.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "explain_processstatus",
          "package": "hsshellscript",
          "signature": "ProcessStatus -\u003e String",
          "source": "src/HsShellScript-ProcErr.html#explain_processstatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:explain_processstatus\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:explain_processstatus\"]"
        },
        "index": {
          "description": "Generate human-readable description of ProcessStatus See exec runprog and System.Posix.ProcessStatus in the GHC hierarchical library documentation",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "explain_processstatus",
          "normalized": "ProcessStatus-\u003eString",
          "package": "hsshellscript",
          "signature": "ProcessStatus-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:explain_processstatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a message to \u003ccode\u003estderr\u003c/code\u003e and exit with an exit code\n indicating an error.\n\u003c/p\u003e\u003cpre\u003efailIO msg = hPutStrLn stderr msg \u003e\u003e exitFailure\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "failIO",
          "package": "hsshellscript",
          "signature": "String -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#failIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:failIO\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:failIO\"]"
        },
        "index": {
          "description": "Print message to stderr and exit with an exit code indicating an error failIO msg hPutStrLn stderr msg exitFailure",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "failIO",
          "normalized": "String-\u003eIO a",
          "package": "hsshellscript",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:failIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case the specified action throws an IOError, fill in its filename field. This way, more useful error messages can be produced.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e-- Oh, the GHC libraries neglect to fill in the file name\nexecuteFile' prog a b c =\n   fill_in_filename prog $ executeFile prog a b c\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efill_in_location\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadd_location\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "fill_in_filename",
          "package": "hsshellscript",
          "signature": "String-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:fill_in_filename\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:fill_in_filename\"]"
        },
        "index": {
          "description": "In case the specified action throws an IOError fill in its filename field This way more useful error messages can be produced Example Oh the GHC libraries neglect to fill in the file name executeFile prog fill in filename prog executeFile prog See fill in location add location",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "fill_in_filename",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:fill_in_filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case the specified action throws an IOError, fill in its location field. This way, more useful error messages can be produced.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003emy_fun a b c = do\n   -- ...\n   fill_in_location \"my_fun\" $  -- Give the caller a more useful location information in case of failure\n      rename \"foo\" \"bar\"\n   -- ...\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efill_in_filename\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "fill_in_location",
          "package": "hsshellscript",
          "signature": "String-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:fill_in_location\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:fill_in_location\"]"
        },
        "index": {
          "description": "In case the specified action throws an IOError fill in its location field This way more useful error messages can be produced Example my fun do fill in location my fun Give the caller more useful location information in case of failure rename foo bar See fill in filename",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "fill_in_location",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:fill_in_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "flush_outerr",
          "package": "hsshellscript",
          "signature": "IO ()",
          "source": "src/HsShellScript-ProcErr.html#flush_outerr",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "flush_outerr",
          "normalized": "IO()",
          "package": "hsshellscript",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:flush_outerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "foreign_strerror",
          "package": "hsshellscript",
          "signature": "CInt -\u003e Ptr CChar",
          "source": "src/HsShellScript-ProcErr.html#foreign_strerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "foreign_strerror",
          "normalized": "CInt-\u003ePtr CChar",
          "package": "hsshellscript",
          "signature": "CInt-\u003ePtr CChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:foreign_strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and connect to its \u003ccode\u003estdout\u003c/code\u003e\n with a file handle.\n This is like the backquote feature of shells.\n\u003c/p\u003e\u003cp\u003eThis forks a subprocess, which executes the specified action. A file handle,\n which is connected to its \u003ccode\u003estdout\u003c/code\u003e, is returned. The child's \u003ccode\u003eProcessID\u003c/code\u003e\n is returned as well. If the action replaces the child process, by calling an\n \u003ccode\u003eexec\u003c/code\u003e variant, it is made sure that its file descriptor 1 is connected to\n the returned file handle.\n\u003c/p\u003e\u003cp\u003eThis gives you full control of the pipe, and of the forked process. But you\n must cope with the child process by yourself.\n\u003c/p\u003e\u003cp\u003eWhen you call \u003ccode\u003egetProcessStatus\u003c/code\u003e blockingly, you must first ensure that all\n data has been read, or close the handle. Otherwise you'll get a deadlock.\n When you close the handle before all data has been read, then the child gets\n a \u003ccode\u003eSIGPIPE\u003c/code\u003e signal.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally.\n The child process is then properly terminated, such\n that no resources, which have been duplicated by the fork, cause problems.\n See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eErrors can only be detected by examining the child's process status (using\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e). No attempt is made to create more\n meaningful exceptions, like it is done by \u003ccode\u003erunprog\u003c/code\u003e/\u003ccode\u003esubproc\u003c/code\u003e. If the child\n action throws an exception, an error message is printed on \u003ccode\u003estderr\u003c/code\u003e, and the\n child process exits with a \u003ccode\u003eProcessStatus\u003c/code\u003e of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The\n following exceptions are understood, and result in corresponding messages:\n \u003ccode\u003eArgError\u003c/code\u003e, \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other\n exceptions result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from stdin, is converted from the system character set to\n Unicode. The system character set is determined by the environment variable\n \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked process, you can set\n the returned handle to binary mode. This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\n h True\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e(h,pid) \u003c- h_pipe_from $ exec \"/usr/bin/foo\" [\"bar\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003echomp\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eHsShellScript\u003c/a\u003e for more details.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "h_pipe_from",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO (Handle, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_from\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:h_pipe_from\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and connect to its stdout with file handle This is like the backquote feature of shells This forks subprocess which executes the specified action file handle which is connected to its stdout is returned The child ProcessID is returned as well If the action replaces the child process by calling an exec variant it is made sure that its file descriptor is connected to the returned file handle This gives you full control of the pipe and of the forked process But you must cope with the child process by yourself When you call getProcessStatus blockingly you must first ensure that all data has been read or close the handle Otherwise you ll get deadlock When you close the handle before all data has been read then the child gets SIGPIPE signal Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Errors can only be detected by examining the child process status using getProcessStatus No attempt is made to create more meaningful exceptions like it is done by runprog subproc If the child action throws an exception an error message is printed on stderr and the child process exits with ProcessStatus of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show The pipe is set to text mode This means that the Unicode characters in the text which is read from stdin is converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you can set the returned handle to binary mode This is accomplished by hSetBinaryMode True Example pid pipe from exec usr bin foo bar See exec pipe to pipe from2 pipe from lazy pipe from chomp silently See HsShellScript for more details",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "h_pipe_from",
          "normalized": "IO a-\u003eIO(Handle,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO(Handle,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and connect to its \u003ccode\u003estderr\u003c/code\u003e\n with a file handle.\n\u003c/p\u003e\u003cp\u003eThis forks a subprocess, which executes the specified action. A file handle,\n which is connected to its \u003ccode\u003estderr\u003c/code\u003e, is returned. The child's \u003ccode\u003eProcessID\u003c/code\u003e\n is returned as well. If the action replaces the child process, by calling an\n \u003ccode\u003eexec\u003c/code\u003e variant, it is made sure that its file descriptor 2 is connected to\n the returned file handle.\n\u003c/p\u003e\u003cp\u003eThis gives you full control of the pipe, and of the forked process. But you\n must cope with the child process by yourself.\n\u003c/p\u003e\u003cp\u003eWhen you call \u003ccode\u003egetProcessStatus\u003c/code\u003e blockingly, you must first ensure that all\n data has been read, or close the handle. Otherwise you'll get a deadlock.\n When you close the handle before all data has been read, then the child gets\n a \u003ccode\u003eSIGPIPE\u003c/code\u003e signal.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. The child process is\n then properly terminated, such that no resources, which have been duplicated\n by the fork, cause problems. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eErrors can only be detected by examining the child's process status (using\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e). No attempt is made to create more\n meaningful exceptions, like it is done by \u003ccode\u003erunprog\u003c/code\u003e/\u003ccode\u003esubproc\u003c/code\u003e. If the child\n action throws an exception, an error message is printed on \u003ccode\u003estderr\u003c/code\u003e. This\n means that the message goes through the pipe to the parent process. Then the\n child process exits with a \u003ccode\u003eProcessStatus\u003c/code\u003e of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The\n following exceptions are understood, and result in corresponding messages:\n \u003ccode\u003eArgError\u003c/code\u003e, \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other\n exceptions result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from stdin, is converted from the system character set to\n Unicode. The system character set is determined by the environment variable\n \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked process, you can set\n the returned handle to binary mode. This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\n h True\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e(h,pid) \u003c- h_pipe_from $ exec \"/usr/bin/foo\" [\"bar\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003echomp\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "h_pipe_from2",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO (Handle, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_from2\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:h_pipe_from2\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and connect to its stderr with file handle This forks subprocess which executes the specified action file handle which is connected to its stderr is returned The child ProcessID is returned as well If the action replaces the child process by calling an exec variant it is made sure that its file descriptor is connected to the returned file handle This gives you full control of the pipe and of the forked process But you must cope with the child process by yourself When you call getProcessStatus blockingly you must first ensure that all data has been read or close the handle Otherwise you ll get deadlock When you close the handle before all data has been read then the child gets SIGPIPE signal Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Errors can only be detected by examining the child process status using getProcessStatus No attempt is made to create more meaningful exceptions like it is done by runprog subproc If the child action throws an exception an error message is printed on stderr This means that the message goes through the pipe to the parent process Then the child process exits with ProcessStatus of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show The pipe is set to text mode This means that the Unicode characters in the text which is read from stdin is converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you can set the returned handle to binary mode This is accomplished by hSetBinaryMode True Example pid pipe from exec usr bin foo bar See exec pipe from pipe from2 pipe from pipe to lazy pipe from chomp silently",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "h_pipe_from2",
          "normalized": "IO a-\u003eIO(Handle,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO(Handle,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_from2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and get a connection (a pipe) to\n its \u003ccode\u003estdin\u003c/code\u003e as a file handle.\n\u003c/p\u003e\u003cp\u003eThis forks a subprocess, which executes the specified action. A file handle,\n which is connected to its \u003ccode\u003estdin\u003c/code\u003e, is returned. The child's \u003ccode\u003eProcessID\u003c/code\u003e\n is returned as well. If the action replaces the child process, by calling an\n \u003ccode\u003eexec\u003c/code\u003e variant, it is made sure that its file descriptor 0 is connected to\n the returned file handle.\n\u003c/p\u003e\u003cp\u003eThis gives you full control of the pipe, and of the forked process. But you\n must cope with the child process by yourself.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally.\n The child process is then properly terminated, such\n that no resources, which have been duplicated by the fork, cause problems.\n See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eErrors can only be detected by examining the child's process status (using\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e). If the child action throws an\n exception, an error message is printed on \u003ccode\u003estderr\u003c/code\u003e, and the child process\n exits with a \u003ccode\u003eProcessStatus\u003c/code\u003e of \u003ccode\u003eExited\n (ExitFailure 1)\u003c/code\u003e. The following exceptions are understood, and\n result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e, \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e,\n \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions result in the generic message, as\n produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the child process exits in a way which signals an error, the\n corresponding \u003ccode\u003eProcessStatus\u003c/code\u003e is returned by \u003ccode\u003egetProcessStatus\u003c/code\u003e. See\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text are converted to the system character set. You can set the returned\n handle to binary mode, by calling \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e handle True\u003c/code\u003e. The system\n character set is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e(handle, pid) \u003c- h_pipe_to $ exec \"/usr/bin/foo\" [\"bar\"]\nhPutStrLn handle \"Some text to go through the pipe\"\n(Just ps) \u003c- getProcessStatus True False pid\nwhen (ps /= Exited ExitSuccess) $\n   throw ps\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003e-\u003c-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from2\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eHsShellScript\u003c/a\u003e for more details.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "h_pipe_to",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO (Handle, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_to\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:h_pipe_to\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and get connection pipe to its stdin as file handle This forks subprocess which executes the specified action file handle which is connected to its stdin is returned The child ProcessID is returned as well If the action replaces the child process by calling an exec variant it is made sure that its file descriptor is connected to the returned file handle This gives you full control of the pipe and of the forked process But you must cope with the child process by yourself Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Errors can only be detected by examining the child process status using getProcessStatus If the child action throws an exception an error message is printed on stderr and the child process exits with ProcessStatus of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show If the child process exits in way which signals an error the corresponding ProcessStatus is returned by getProcessStatus See getProcessStatus for details The pipe is set to text mode This means that the Unicode characters in the text are converted to the system character set You can set the returned handle to binary mode by calling hSetBinaryMode handle True The system character set is determined by the environment variable LANG Example handle pid pipe to exec usr bin foo bar hPutStrLn handle Some text to go through the pipe Just ps getProcessStatus True False pid when ps Exited ExitSuccess throw ps See pipe to pipe from pipe from2 See HsShellScript for more details",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "h_pipe_to",
          "normalized": "IO a-\u003eIO(Handle,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO(Handle,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:h_pipe_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "hssh_c_isatty",
          "package": "hsshellscript",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/HsShellScript-ProcErr.html#hssh_c_isatty",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "hssh_c_isatty",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsshellscript",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:hssh_c_isatty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "ioe_types",
          "package": "hsshellscript",
          "signature": "[(IOErrorType, Integer)]",
          "source": "src/HsShellScript-ProcErr.html#ioe_types",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "ioe_types",
          "normalized": "[(IOErrorType,Integer)]",
          "package": "hsshellscript",
          "signature": "[(IOErrorType,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:ioe_types"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "ioetype_num",
          "package": "hsshellscript",
          "signature": "IOError -\u003e Integer",
          "source": "src/HsShellScript-ProcErr.html#ioetype_num",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "ioetype_num",
          "normalized": "IOError-\u003eInteger",
          "package": "hsshellscript",
          "signature": "IOError-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:ioetype_num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a handle is connected to a terminal.\n\u003c/p\u003e\u003cp\u003eThis is a front end to the \u003ccode\u003eisatty(3)\u003c/code\u003e function (see man page). It is useful,\n   for instance, to determine if color escape sequences should be\n   generated.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "isatty",
          "package": "hsshellscript",
          "signature": "Handle-\u003e IO Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:isatty\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:isatty\"]"
        },
        "index": {
          "description": "Check if handle is connected to terminal This is front end to the isatty function see man page It is useful for instance to determine if color escape sequences should be generated",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "isatty",
          "normalized": "Handle-\u003eIO Bool",
          "package": "hsshellscript",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:isatty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action in a separate process, and read its standard output, The output\n is read lazily, as the returned string is evaluated. The child's output along\n with its process ID are returned.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which executes the specified action. The output\n of the child is read lazily through a pipe, which connncts to its standard\n output. In case the child replaces the process by calling an \u003ccode\u003eexec\u003c/code\u003e variant,\n it is make sure that the output is read from the new process' file descriptor\n 1.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elazy_pipe_from\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e, in order to read the pipe\n lazily. This means that the file handle goes to semi-closed state. The handle\n holds a file descriptor, and as long as the string isn't fully evaluated,\n this file descriptor won't be closed. For the file descriptor to be closed,\n first its standard output needs to be closed on the child side. This happens\n when the child explicitly closes it, or the child process exits. When\n afterwards the string on the parent side is completely evaluated, the handle,\n along with the file descritor it holds, are closed and freed.\n\u003c/p\u003e\u003cp\u003eIf you use the string in such a way that you only access the beginning of the\n string, the handle will remain in semi-closed state, holding a file\n descriptor, even when the pipe is closed on the child side. When you do that\n repeatedly, you may run out of file descriptors.\n\u003c/p\u003e\u003cp\u003eUnless you're sure that your program will reach the string's end, you should\n take care for it explicitly, by doing something like this:\n\u003c/p\u003e\u003cpre\u003e(output, pid) \u003c- lazy_pipe_from (exec \"\\/usr\\/bin\\/foobar\" [])\n...\nseq (length output) (return ())\n\u003c/pre\u003e\u003cp\u003eThis will read the entire standard output of the child, even if it isn't\n needed. You can't cut the child process' output short, when you use\n \u003ccode\u003elazy_pipe_from\u003c/code\u003e. If you need to do this, you should use \u003ccode\u003eh_pipe_from\u003c/code\u003e, which\n gives you the handle, which can then be closed by \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e, even\n if the child's output isn't completed:\n\u003c/p\u003e\u003cpre\u003e(h, pid) \u003c- h_pipe_from io\n\n-- Lazily read io's output\noutput \u003c- hGetContents h\n...\n-- Not eveyting read yet, but cut io short.\nhClose h\n\n-- Wait for io to finish, and detect errors\n(Just ps) \u003c- System.Posix.getProcessStatus True False pid\nwhen (ps /= Exited ExitSuccess) $\n   throw ps\n\u003c/pre\u003e\u003cp\u003eWhen you close the handle before all data has been read, then the child gets\n a \u003ccode\u003eSIGPIPE\u003c/code\u003e signal.\n\u003c/p\u003e\u003cp\u003eAfter all the output has been read, you should call \u003ccode\u003egetProcessStatus\u003c/code\u003e on the\n child's process ID, in order to detect errors. Be aware that you must\n evaluate the whole string, before calling \u003ccode\u003egetProcessStatus\u003c/code\u003e blockingly, or\n you'll get a deadlock.\n\u003c/p\u003e\u003cp\u003eYou won't get an exception, if the child action exits in a way which\n indicates an error. Errors occur asynchronously, when the output string is\n evaluated. You must detect errors by yourself, by calling\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn case the action doesn't replace the child process with an external\n program, an exception may be thrown out of the action. This results in an error\n message on \u003ccode\u003estderr\u003c/code\u003e, and the proper termination of the child. The\n \u003ccode\u003eProcessStatus\u003c/code\u003e, which can be accessed in the parent process by\n \u003ccode\u003egetProcessStatus\u003c/code\u003e, is \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The following exceptions are\n understood, and result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e,\n \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions\n result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. The child process is\n then properly terminated, such that no resources, which have been duplicated\n by the fork, cause problems. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eUnlike shells' backquote feature, \u003ccode\u003elazy_pipe_from\u003c/code\u003e does not remove any trailing\n newline characters. The entire output of the action is returned. You might want\n to apply \u003ccode\u003echomp\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from the IO action's stdout, are converted from the system\n character set to Unicode. The system character set is determined by the\n environment variable \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked\n process, you should use h_pipe_from and set the returned handle to binary mode.\n This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e h True\u003c/code\u003e. Then you can lazily read \n the output of the action from the handle.\n\u003c/p\u003e\u003cp\u003eExample: Lazily read binary data from an IO action. Don't forget to collect \n the child process later, using \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e True False pid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e(h, pid) \u003c- h_pipe_from io\nhSetBinaryMode h True\ntxt \u003c- hGetContents h\n...\n(Just ps) \u003c- System.Posix.getProcessStatus True False pid\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "lazy_pipe_from",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO (String, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:lazy_pipe_from\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:lazy_pipe_from\"]"
        },
        "index": {
          "description": "Run an IO action in separate process and read its standard output The output is read lazily as the returned string is evaluated The child output along with its process ID are returned This forks child process which executes the specified action The output of the child is read lazily through pipe which connncts to its standard output In case the child replaces the process by calling an exec variant it is make sure that the output is read from the new process file descriptor lazy pipe from calls hGetContents in order to read the pipe lazily This means that the file handle goes to semi-closed state The handle holds file descriptor and as long as the string isn fully evaluated this file descriptor won be closed For the file descriptor to be closed first its standard output needs to be closed on the child side This happens when the child explicitly closes it or the child process exits When afterwards the string on the parent side is completely evaluated the handle along with the file descritor it holds are closed and freed If you use the string in such way that you only access the beginning of the string the handle will remain in semi-closed state holding file descriptor even when the pipe is closed on the child side When you do that repeatedly you may run out of file descriptors Unless you re sure that your program will reach the string end you should take care for it explicitly by doing something like this output pid lazy pipe from exec usr bin foobar seq length output return This will read the entire standard output of the child even if it isn needed You can cut the child process output short when you use lazy pipe from If you need to do this you should use pipe from which gives you the handle which can then be closed by hClose even if the child output isn completed pid pipe from io Lazily read io output output hGetContents Not eveyting read yet but cut io short hClose Wait for io to finish and detect errors Just ps System.Posix.getProcessStatus True False pid when ps Exited ExitSuccess throw ps When you close the handle before all data has been read then the child gets SIGPIPE signal After all the output has been read you should call getProcessStatus on the child process ID in order to detect errors Be aware that you must evaluate the whole string before calling getProcessStatus blockingly or you ll get deadlock You won get an exception if the child action exits in way which indicates an error Errors occur asynchronously when the output string is evaluated You must detect errors by yourself by calling getProcessStatus In case the action doesn replace the child process with an external program an exception may be thrown out of the action This results in an error message on stderr and the proper termination of the child The ProcessStatus which can be accessed in the parent process by getProcessStatus is Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Unlike shells backquote feature lazy pipe from does not remove any trailing newline characters The entire output of the action is returned You might want to apply chomp to the result The pipe is set to text mode This means that the Unicode characters in the text which is read from the IO action stdout are converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you should use pipe from and set the returned handle to binary mode This is accomplished by hSetBinaryMode True Then you can lazily read the output of the action from the handle Example Lazily read binary data from an IO action Don forget to collect the child process later using getProcessStatus True False pid pid pipe from io hSetBinaryMode True txt hGetContents Just ps System.Posix.getProcessStatus True False pid See exec pipe to pipe from pipe from lazy pipe from2 silently",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "lazy_pipe_from",
          "normalized": "IO a-\u003eIO(String,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO(String,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:lazy_pipe_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action in a separate process, and read its standard error output, The output\n is read lazily, as the returned string is evaluated. The child's error output along\n with its process ID are returned.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which executes the specified action. The error output\n of the child is read lazily through a pipe, which connncts to its standard error\n output. In case the child replaces the process by calling an \u003ccode\u003eexec\u003c/code\u003e variant,\n it is make sure that the output is read from the new process' file descriptor\n 1.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elazy_pipe_from\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e, in order to read the pipe\n lazily. This means that the file handle goes to semi-closed state. The handle\n holds a file descriptor, and as long as the string isn't fully evaluated,\n this file descriptor won't be closed. For the file descriptor to be closed,\n first its standard error output needs to be closed on the child side. This happens\n when the child explicitly closes it, or the child process exits. When\n afterwards the string on the parent side is completely evaluated, the handle,\n along with the file descritor it holds, are closed and freed.\n\u003c/p\u003e\u003cp\u003eIf you use the string in such a way that you only access the beginning of the\n string, the handle will remain in semi-closed state, holding a file\n descriptor, even when the pipe is closed on the child side. When you do that\n repeatedly, you may run out of file descriptors.\n\u003c/p\u003e\u003cp\u003eUnless you're sure that your program will reach the string's end, you should\n take care for it explicitly, by doing something like this:\n\u003c/p\u003e\u003cpre\u003e(errmsg, pid) \u003c- lazy_pipe_from2 (exec \"/usr/bin/foobar\" [])\n...\nseq (length errmsg) (return ())\n\u003c/pre\u003e\u003cp\u003eThis will read the entire standard error output of the child, even if it isn't\n needed. You can't cut the child process' output short, when you use\n \u003ccode\u003elazy_pipe_from\u003c/code\u003e. If you need to do this, you should use \u003ccode\u003eh_pipe_from\u003c/code\u003e, which\n gives you the handle, which can then be closed by \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e, even\n if the child's output isn't completed:\n\u003c/p\u003e\u003cpre\u003e(h, pid) \u003c- h_pipe_from io\n\n-- Lazily read io's output\noutput \u003c- hGetContents h\n...\n-- Not eveyting read yet, but cut io short.\nhClose h\n\n-- Wait for io to finish, and detect errors\n(Just ps) \u003c- System.Posix.getProcessStatus True False pid\nwhen (ps /= Exited ExitSuccess) $\n   throw ps\n\u003c/pre\u003e\u003cp\u003eWhen you close the handle before all data has been read, then the child gets\n a \u003ccode\u003eSIGPIPE\u003c/code\u003e signal.\n\u003c/p\u003e\u003cp\u003eAfter all the output has been read, you should call \u003ccode\u003egetProcessStatus\u003c/code\u003e on the\n child's process ID, in order to detect errors. Be aware that you must\n evaluate the whole string, before calling \u003ccode\u003egetProcessStatus\u003c/code\u003e blockingly, or\n you'll get a deadlock.\n\u003c/p\u003e\u003cp\u003eYou won't get an exception, if the child action exits in a way which\n indicates an error. Errors occur asynchronously, when the output string is\n evaluated. You must detect errors by yourself, by calling\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn case the action doesn't replace the child process with an external\n program, an exception may be thrown out of the action. This results in an\n error message on \u003ccode\u003estderr\u003c/code\u003e. This means that the message is sent through the\n pipe, to the parent process. Then the child process is properly terminated.\n The \u003ccode\u003eProcessStatus\u003c/code\u003e, which can be accessed in the parent process by\n \u003ccode\u003egetProcessStatus\u003c/code\u003e, is \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The following exceptions are\n understood, and result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e,\n \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions\n result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. The child process is\n then properly terminated, such that no resources, which have been duplicated\n by the fork, cause problems. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from stdin, is converted from the system character set to\n Unicode. The system character set is determined by the environment variable\n \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked process, you can set\n the returned handle to binary mode. This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\n h True\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnlike shells' backquote feature, \u003ccode\u003elazy_pipe_from\u003c/code\u003e does not remove any trailing\n newline characters. The entire output of the action is returned. You might want\n to apply \u003ccode\u003echomp\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from the IO action's stdout, are converted from the\n system character set to Unicode. The system character set is determined by\n the environment variable \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the\n forked process' standard error output, you should use h_pipe_from2 and set\n the returned handle to binary mode. This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\n h True\u003c/code\u003e. Then you can lazily read the output of the action from the handle.\n\u003c/p\u003e\u003cp\u003eExample: Lazily read binary data from an IO action. Don't forget to collect \n the child process later, using \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e True False pid\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e(h, pid) \u003c- h_pipe_from2 io\nhSetBinaryMode h True\ntxt \u003c- hGetContents h\n...\n(Just ps) \u003c- System.Posix.getProcessStatus True False pid\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "lazy_pipe_from2",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO (String, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:lazy_pipe_from2\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:lazy_pipe_from2\"]"
        },
        "index": {
          "description": "Run an IO action in separate process and read its standard error output The output is read lazily as the returned string is evaluated The child error output along with its process ID are returned This forks child process which executes the specified action The error output of the child is read lazily through pipe which connncts to its standard error output In case the child replaces the process by calling an exec variant it is make sure that the output is read from the new process file descriptor lazy pipe from calls hGetContents in order to read the pipe lazily This means that the file handle goes to semi-closed state The handle holds file descriptor and as long as the string isn fully evaluated this file descriptor won be closed For the file descriptor to be closed first its standard error output needs to be closed on the child side This happens when the child explicitly closes it or the child process exits When afterwards the string on the parent side is completely evaluated the handle along with the file descritor it holds are closed and freed If you use the string in such way that you only access the beginning of the string the handle will remain in semi-closed state holding file descriptor even when the pipe is closed on the child side When you do that repeatedly you may run out of file descriptors Unless you re sure that your program will reach the string end you should take care for it explicitly by doing something like this errmsg pid lazy pipe from2 exec usr bin foobar seq length errmsg return This will read the entire standard error output of the child even if it isn needed You can cut the child process output short when you use lazy pipe from If you need to do this you should use pipe from which gives you the handle which can then be closed by hClose even if the child output isn completed pid pipe from io Lazily read io output output hGetContents Not eveyting read yet but cut io short hClose Wait for io to finish and detect errors Just ps System.Posix.getProcessStatus True False pid when ps Exited ExitSuccess throw ps When you close the handle before all data has been read then the child gets SIGPIPE signal After all the output has been read you should call getProcessStatus on the child process ID in order to detect errors Be aware that you must evaluate the whole string before calling getProcessStatus blockingly or you ll get deadlock You won get an exception if the child action exits in way which indicates an error Errors occur asynchronously when the output string is evaluated You must detect errors by yourself by calling getProcessStatus In case the action doesn replace the child process with an external program an exception may be thrown out of the action This results in an error message on stderr This means that the message is sent through the pipe to the parent process Then the child process is properly terminated The ProcessStatus which can be accessed in the parent process by getProcessStatus is Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details The pipe is set to text mode This means that the Unicode characters in the text which is read from stdin is converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you can set the returned handle to binary mode This is accomplished by hSetBinaryMode True Unlike shells backquote feature lazy pipe from does not remove any trailing newline characters The entire output of the action is returned You might want to apply chomp to the result The pipe is set to text mode This means that the Unicode characters in the text which is read from the IO action stdout are converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process standard error output you should use pipe from2 and set the returned handle to binary mode This is accomplished by hSetBinaryMode True Then you can lazily read the output of the action from the handle Example Lazily read binary data from an IO action Don forget to collect the child process later using getProcessStatus True False pid pid pipe from2 io hSetBinaryMode True txt hGetContents Just ps System.Posix.getProcessStatus True False pid See exec pipe to pipe from2 pipe from2 lazy pipe from silently",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "lazy_pipe_from2",
          "normalized": "IO a-\u003eIO(String,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO(String,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:lazy_pipe_from2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColorful log message to \u003ccode\u003estderr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis prints a message to \u003ccode\u003estderr\u003c/code\u003e. When \u003ccode\u003estderr\u003c/code\u003e is connected to a terminal\n   (as determined by \u003ccode\u003eisatty(3)\u003c/code\u003e), additional escape sequences are printed,\n   which make the message appear in cyan. Additionally, a newline character is\n   output at the end.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estdout\u003c/code\u003e is flushed beforehand. So normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogm_\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "logm",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:logm\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:logm\"]"
        },
        "index": {
          "description": "Colorful log message to stderr This prints message to stderr When stderr is connected to terminal as determined by isatty additional escape sequences are printed which make the message appear in cyan Additionally newline character is output at the end stdout is flushed beforehand So normal output and error output appear in order even when they aren buffered as by default See logm errm errm",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "logm",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:logm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColorful log message to \u003ccode\u003estderr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis prints a message to \u003ccode\u003estderr\u003c/code\u003e. When \u003ccode\u003estderr\u003c/code\u003e is connected to a terminal\n   (as determined by \u003ccode\u003eisatty(3)\u003c/code\u003e), additional escape sequences are printed,\n   which make the message appear in cyan. No a newline character is output at the end.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estdout\u003c/code\u003e is flushed beforehand. So normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrm_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "logm_",
          "package": "hsshellscript",
          "signature": "String -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#logm_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:logm_\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:logm_\"]"
        },
        "index": {
          "description": "Colorful log message to stderr This prints message to stderr When stderr is connected to terminal as determined by isatty additional escape sequences are printed which make the message appear in cyan No newline character is output at the end stdout is flushed beforehand So normal output and error output appear in order even when they aren buffered as by default See logm errm errm",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "logm_",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:logm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "num_ioetype",
          "package": "hsshellscript",
          "signature": "Integer -\u003e IOErrorType",
          "source": "src/HsShellScript-ProcErr.html#num_ioetype",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "num_ioetype",
          "normalized": "Integer-\u003eIOErrorType",
          "package": "hsshellscript",
          "signature": "Integer-\u003eIOErrorType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:num_ioetype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the output of the specified action to its standard error output.\n\u003c/p\u003e\u003cp\u003eWhat's actually modified is the \u003ccode\u003estderr\u003c/code\u003e handle, not the file descriptor 2. The\n\u003ccode\u003eexec\u003c/code\u003e functions know about this. See \u003ca\u003eHsShellScript\u003c/a\u003e and\n\u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cpre\u003eredirect stdout stderr\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "out_to_err",
          "package": "hsshellscript",
          "signature": "IO a -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#out_to_err",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:out_to_err\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:out_to_err\"]"
        },
        "index": {
          "description": "Send the output of the specified action to its standard error output What actually modified is the stderr handle not the file descriptor The exec functions know about this See HsShellScript and HsShellScript for details redirect stdout stderr See redirect",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "out_to_err",
          "normalized": "IO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:out_to_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint text to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a shorthand for \u003ccode\u003eputStrLn\u003c/code\u003e, except for \u003ccode\u003estderr\u003c/code\u003e being flushed\n   beforehand. This way normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eAn additional newline is printed at the end.\n\u003c/p\u003e\u003cpre\u003eoutm msg = do\n   hFlush stderr\n   putStrLn msg\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "outm",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:outm\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:outm\"]"
        },
        "index": {
          "description": "Print text to stdout This is shorthand for putStrLn except for stderr being flushed beforehand This way normal output and error output appear in order even when they aren buffered as by default An additional newline is printed at the end outm msg do hFlush stderr putStrLn msg",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "outm",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:outm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint text to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a shorthand for \u003ccode\u003eputStr\u003c/code\u003e, except for \u003ccode\u003estderr\u003c/code\u003e being flushed\n   beforehand. This way normal output and error output appear in\n   order, even when they aren't buffered as by default.\n\u003c/p\u003e\u003cp\u003eNo newline is printed at the end.\n\u003c/p\u003e\u003cpre\u003eoutm_ msg = do\n   hFlush stderr\n   putStr msg\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "outm_",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:outm_\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:outm_\"]"
        },
        "index": {
          "description": "Print text to stdout This is shorthand for putStr except for stderr being flushed beforehand This way normal output and error output appear in order even when they aren buffered as by default No newline is printed at the end outm msg do hFlush stderr putStr msg",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "outm_",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:outm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint error message corresponding to the global \u003ccode\u003eerrno\u003c/code\u003e error\n number. This is the same as the POSIX system library function \u003ccode\u003eperror\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the man page \u003ccode\u003eperror(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "perror",
          "package": "hsshellscript",
          "signature": "String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:perror\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:perror\"]"
        },
        "index": {
          "description": "Print error message corresponding to the global errno error number This is the same as the POSIX system library function perror See the man page perror",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "perror",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:perror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint error message corresponding to the specified \u003ccode\u003eerrno\u003c/code\u003e error\n number. This is similar to the POSIX system library function \u003ccode\u003eperror\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the man page \u003ccode\u003eperror(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "perror'",
          "package": "hsshellscript",
          "signature": "Errno-\u003e String-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:perror-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:perror-39-\"]"
        },
        "index": {
          "description": "Print error message corresponding to the specified errno error number This is similar to the POSIX system library function perror See the man page perror",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "perror'",
          "normalized": "Errno-\u003eString-\u003eIO()",
          "package": "hsshellscript",
          "signature": "Errno-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:perror-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "pipe_fork_dup",
          "package": "hsshellscript",
          "signature": "IO a -\u003e Bool -\u003e Bool -\u003e Bool -\u003e IO (Maybe Handle, Maybe Handle, Maybe Handle, ProcessID)",
          "source": "src/HsShellScript-ProcErr.html#pipe_fork_dup",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "pipe_fork_dup",
          "normalized": "IO a-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_fork_dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and read its \u003ccode\u003estdout\u003c/code\u003e strictly.\n Then wait for the child process to finish. This is like the backquote feature\n of shells.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which executes the specified action. The output\n of the child is read from its standard output. In case it replaces the\n process by calling an \u003ccode\u003eexec\u003c/code\u003e variant, it is make sure that the output is\n read from the new process' file descriptor 1.\n\u003c/p\u003e\u003cp\u003eThe end of the child's output is reached when either the standard output is\n closed, or the child process exits. The program blocks until the action\n exits, even if the child closes its standard output earlier. So the parent\n process always notices a failure of the action (when it exits in a way which\n indicates an error).\n\u003c/p\u003e\u003cp\u003eWhen the child action exits in a way which indicates an error, the\n corresponding \u003ccode\u003eProcessStatus\u003c/code\u003e is thrown. See\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e. No attempt is made to create more\n meaningful exceptions, like it is done by \u003ccode\u003erunprog\u003c/code\u003e/\u003ccode\u003esubproc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions in the action result in an error message on \u003ccode\u003estderr\u003c/code\u003e, and the\n proper termination of the child. The parent gets a \u003ccode\u003eProcessStatus\u003c/code\u003e exception, with\n the value of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The following exceptions are\n understood, and result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e,\n \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions\n result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. The child process is\n then properly terminated, such that no resources, which have been duplicated\n by the fork, cause problems. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eUnlike shells' backquote feature, \u003ccode\u003epipe_from\u003c/code\u003e does not remove any trailing\n newline characters. The entire output of the action is returned. You might want\n to apply \u003ccode\u003echomp\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from stdin, is converted from the system character set to\n Unicode. The system character set is determined by the environment variable\n \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked process, you should use\n \u003ccode\u003eh_pipe_from\u003c/code\u003e and set the returned handle to binary mode. This is\n accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e h True\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eoutput \u003c- pipe_from $ exec \"/bin/mount\" []\n\u003c/pre\u003e\u003cp\u003eExample: Access both \u003ccode\u003estdin\u003c/code\u003e and \u003ccode\u003estdout\u003c/code\u003e of an external program.\n\u003c/p\u003e\u003cpre\u003eimport HsShellScript\n\nmain = mainwrapper $ do\n\n   res \u003c- pipe_from $\n      pipe_to \"2\\n3\\n1\" $\n         exec \"/usr/bin/sort\" []\n\n   putStrLn res\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003echomp\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "pipe_from",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_from\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:pipe_from\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and read its stdout strictly Then wait for the child process to finish This is like the backquote feature of shells This forks child process which executes the specified action The output of the child is read from its standard output In case it replaces the process by calling an exec variant it is make sure that the output is read from the new process file descriptor The end of the child output is reached when either the standard output is closed or the child process exits The program blocks until the action exits even if the child closes its standard output earlier So the parent process always notices failure of the action when it exits in way which indicates an error When the child action exits in way which indicates an error the corresponding ProcessStatus is thrown See getProcessStatus No attempt is made to create more meaningful exceptions like it is done by runprog subproc Exceptions in the action result in an error message on stderr and the proper termination of the child The parent gets ProcessStatus exception with the value of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Unlike shells backquote feature pipe from does not remove any trailing newline characters The entire output of the action is returned You might want to apply chomp to the result The pipe is set to text mode This means that the Unicode characters in the text which is read from stdin is converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you should use pipe from and set the returned handle to binary mode This is accomplished by hSetBinaryMode True Example output pipe from exec bin mount Example Access both stdin and stdout of an external program import HsShellScript main mainwrapper do res pipe from pipe to n3 n1 exec usr bin sort putStrLn res See exec pipe to pipe from2 pipe from lazy pipe from chomp silently",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "pipe_from",
          "normalized": "IO a-\u003eIO String",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and read its standard error output\n strictly. Then wait for the child process to finish. This is like the\n backquote feature of shells. This function is exactly the same as\n \u003ccode\u003epipe_from\u003c/code\u003e, except that the standard error output is read, instead of the\n standard output.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which executes the specified action. The error output\n of the child is read from its standard error output. In case it replaces the\n process by calling an \u003ccode\u003eexec\u003c/code\u003e variant, it is made sure that the output is\n read from the new process' file descriptor 2.\n\u003c/p\u003e\u003cp\u003eThe end of the child's error output is reached when either the standard error\n output is closed, or the child process exits. The program blocks until the\n action exits, even if the child closes its standard error output earlier. So\n the parent process always notices a failure of the action (which means it\n exits in a way which indicates an error).\n\u003c/p\u003e\u003cp\u003eWhen the child action exits in a way which indicates an error, the\n corresponding \u003ccode\u003eProcessStatus\u003c/code\u003e is thrown. See\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e.\n No attempt is made to create\n more meaningful exceptions, like it is done by \u003ccode\u003erunprog\u003c/code\u003e/\u003ccode\u003esubproc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions in the action result in an error message on \u003ccode\u003estderr\u003c/code\u003e, and the\n proper termination of the child. This means that the error message is sent\n through the pipe, to the parent process. The message can be found in the text\n which has been read from the child process. It doesn't appear on the console.\n\u003c/p\u003e\u003cp\u003eThe parent gets a \u003ccode\u003eProcessStatus\u003c/code\u003e exception, with\n the value of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The following exceptions are\n understood, and result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e,\n \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions\n result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. The child process is\n then properly terminated, such that no resources, which have been duplicated\n by the fork, cause problems. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eUnlike shells' backquote feature, \u003ccode\u003epipe_from2\u003c/code\u003e does not remove any trailing\n newline characters. The entire error output of the action is returned. You might want\n to apply \u003ccode\u003echomp\u003c/code\u003e to the result.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in the\n text, which is read from stdin, is converted from the system character set to\n Unicode. The system character set is determined by the environment variable\n \u003ccode\u003eLANG\u003c/code\u003e. If you need to read binary data from the forked process, you should use\n \u003ccode\u003eh_pipe_from\u003c/code\u003e and set the returned handle to binary mode. This is\n accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e h True\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eoutput \u003c- pipe_from $ exec \"/bin/mount\" []\n\u003c/pre\u003e\u003cp\u003eExample: Access both \u003ccode\u003estdin\u003c/code\u003e and \u003ccode\u003estdout\u003c/code\u003e of an external program.\n\u003c/p\u003e\u003cpre\u003eimport HsShellScript\n\nmain = mainwrapper $ do\n\n   res \u003c- pipe_from $\n      pipe_to \"2\\n3\\n1\" $\n         exec \"/usr/bin/sort\" []\n\n   putStrLn res\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esilently\u003c/a\u003e\u003c/code\u003e. See \u003ca\u003eHsShellScript\u003c/a\u003e for more details.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "pipe_from2",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_from2\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:pipe_from2\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and read its standard error output strictly Then wait for the child process to finish This is like the backquote feature of shells This function is exactly the same as pipe from except that the standard error output is read instead of the standard output This forks child process which executes the specified action The error output of the child is read from its standard error output In case it replaces the process by calling an exec variant it is made sure that the output is read from the new process file descriptor The end of the child error output is reached when either the standard error output is closed or the child process exits The program blocks until the action exits even if the child closes its standard error output earlier So the parent process always notices failure of the action which means it exits in way which indicates an error When the child action exits in way which indicates an error the corresponding ProcessStatus is thrown See getProcessStatus No attempt is made to create more meaningful exceptions like it is done by runprog subproc Exceptions in the action result in an error message on stderr and the proper termination of the child This means that the error message is sent through the pipe to the parent process The message can be found in the text which has been read from the child process It doesn appear on the console The parent gets ProcessStatus exception with the value of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details Unlike shells backquote feature pipe from2 does not remove any trailing newline characters The entire error output of the action is returned You might want to apply chomp to the result The pipe is set to text mode This means that the Unicode characters in the text which is read from stdin is converted from the system character set to Unicode The system character set is determined by the environment variable LANG If you need to read binary data from the forked process you should use pipe from and set the returned handle to binary mode This is accomplished by hSetBinaryMode True Example output pipe from exec bin mount Example Access both stdin and stdout of an external program import HsShellScript main mainwrapper do res pipe from pipe to n3 n1 exec usr bin sort putStrLn res See exec pipe to pipe from pipe from2 lazy pipe from2 silently See HsShellScript for more details",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "pipe_from2",
          "normalized": "IO a-\u003eIO String",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_from2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and pipe some text to its \u003ccode\u003estdin\u003c/code\u003e.\n Then close the pipe and wait for the child process to finish.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which executes the specified action. The specified\n text is sent to the action's \u003ccode\u003estdin\u003c/code\u003e through a pipe. Then the pipe is closed.\n In case the action replaces the process by calling an \u003ccode\u003eexec\u003c/code\u003e variant, it is\n made sure that the process gets the text on it's file descriptor 0.\n\u003c/p\u003e\u003cp\u003eIn case the action fails (exits with an exit status other than 0, or is\n terminated by a signal), the \u003ccode\u003eProcessStatus\u003c/code\u003e is thrown, such as reported by\n \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e. No attempt is made to create more meaningful\n exceptions, like it is done by \u003ccode\u003erunprog\u003c/code\u003e/\u003ccode\u003esubproc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExceptions in the action result in an error message on \u003ccode\u003estderr\u003c/code\u003e, and the\n termination of the child. The parent gets a \u003ccode\u003eProcessStatus\u003c/code\u003e exception, with\n the value of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The following exceptions are\n understood, and result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e,\n \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions\n result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally.\n The child process is then properly terminated, such\n that no resources, which have been duplicated by the fork, cause problems.\n See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe pipe is set to \u003cem\u003etext mode\u003c/em\u003e. This means that the Unicode characters in\n the text are converted to the system character set. If you need to pipe binary\n data, you should use \u003ccode\u003eh_pipe_to\u003c/code\u003e, and set the returned handle to binary\n mode. This is accomplished by \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e h True\u003c/code\u003e. The system\n character set is determined by the environment variable \u003ccode\u003eLANG\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003epipe_to \"blah\" (exec \"/usr/bin/foo\" [\"bar\"])\n\u003c/pre\u003e\u003cp\u003eExample: Access both \u003ccode\u003estdin\u003c/code\u003e and \u003ccode\u003estdout\u003c/code\u003e of an external program.\n\u003c/p\u003e\u003cpre\u003eimport HsShellScript\n\nmain = mainwrapper $ do\n\n   res \u003c- pipe_from $\n      pipe_to \"2\\n3\\n1\" $\n         exec \"/usr/bin/sort\" []\n\n   putStrLn res\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e-\u003c-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_to\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "pipe_to",
          "package": "hsshellscript",
          "signature": "String-\u003e IO a-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_to\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:pipe_to\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and pipe some text to its stdin Then close the pipe and wait for the child process to finish This forks child process which executes the specified action The specified text is sent to the action stdin through pipe Then the pipe is closed In case the action replaces the process by calling an exec variant it is made sure that the process gets the text on it file descriptor In case the action fails exits with an exit status other than or is terminated by signal the ProcessStatus is thrown such as reported by getProcessStatus No attempt is made to create more meaningful exceptions like it is done by runprog subproc Exceptions in the action result in an error message on stderr and the termination of the child The parent gets ProcessStatus exception with the value of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally The child process is then properly terminated such that no resources which have been duplicated by the fork cause problems See HsShellScript for details The pipe is set to text mode This means that the Unicode characters in the text are converted to the system character set If you need to pipe binary data you should use pipe to and set the returned handle to binary mode This is accomplished by hSetBinaryMode True The system character set is determined by the environment variable LANG Example pipe to blah exec usr bin foo bar Example Access both stdin and stdout of an external program import HsShellScript main mainwrapper do res pipe from pipe to n3 n1 exec usr bin sort putStrLn res See subproc runprog pipe to",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "pipe_to",
          "normalized": "String-\u003eIO a-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipe_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action as a separate process, and optionally connect to its\n \u003ccode\u003estdin\u003c/code\u003e, its \u003ccode\u003estdout\u003c/code\u003e and its \u003ccode\u003estderr\u003c/code\u003e output with pipes.\n\u003c/p\u003e\u003cp\u003eThis forks a subprocess, which executes the specified action. The child's\n \u003ccode\u003eProcessID\u003c/code\u003e is returned. Some of the action's standard handles are made to\n connected to pipes, which the caller can use in order to communicate with the\n new child process. Which, this is determined by the first three arguments.\n\u003c/p\u003e\u003cp\u003eYou get full control of the pipes, and of the forked process. But you\n must cope with the child process by yourself.\n\u003c/p\u003e\u003cp\u003eErrors in the child process can only be detected by examining its process\n status (using \u003ccode\u003e\u003ca\u003egetProcessStatus\u003c/a\u003e\u003c/code\u003e). If the child action\n throws an exception, an error message is printed on \u003ccode\u003estderr\u003c/code\u003e, and the child\n process exits with a \u003ccode\u003eProcessStatus\u003c/code\u003e of \u003ccode\u003eExited (ExitFailure 1)\u003c/code\u003e. The\n following exceptions are understood, and result in corresponding messages:\n \u003ccode\u003eArgError\u003c/code\u003e, \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e, \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other\n exceptions result in the generic message, as produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally. It is then properly \n take care of.\n\u003c/p\u003e\u003cp\u003eThe pipes are set to \u003cem\u003etext mode\u003c/em\u003e. When connecting to the child's \u003ccode\u003estdin\u003c/code\u003e,\n this means that the Unicode characters in the Haskell side text are converted\n to the system character set. When reading from the child's \u003ccode\u003estdout\u003c/code\u003e or\n \u003ccode\u003estderr\u003c/code\u003e, the text is converted from the system character set to Unicode in\n the Haskell-side strings. The system character set is determined by the\n environment variable \u003ccode\u003eLANG\u003c/code\u003e. If you need to read or write binary data, then\n this is no problem. Just call \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e handle True\u003c/code\u003e. This sets the\n corresponding pipe to binary mode.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003epipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eh_pipe_from2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epipe_to\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eh_pipe_to\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elazy_pipe_from2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "pipes",
          "package": "hsshellscript",
          "signature": "IO a-\u003e Bool-\u003e Bool-\u003e Bool-\u003e IO (Maybe Handle, Maybe Handle, Maybe Handle, ProcessID)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipes\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:pipes\"]"
        },
        "index": {
          "description": "Run an IO action as separate process and optionally connect to its stdin its stdout and its stderr output with pipes This forks subprocess which executes the specified action The child ProcessID is returned Some of the action standard handles are made to connected to pipes which the caller can use in order to communicate with the new child process Which this is determined by the first three arguments You get full control of the pipes and of the forked process But you must cope with the child process by yourself Errors in the child process can only be detected by examining its process status using getProcessStatus If the child action throws an exception an error message is printed on stderr and the child process exits with ProcessStatus of Exited ExitFailure The following exceptions are understood and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally It is then properly take care of The pipes are set to text mode When connecting to the child stdin this means that the Unicode characters in the Haskell side text are converted to the system character set When reading from the child stdout or stderr the text is converted from the system character set to Unicode in the Haskell-side strings The system character set is determined by the environment variable LANG If you need to read or write binary data then this is no problem Just call hSetBinaryMode handle True This sets the corresponding pipe to binary mode See pipe from pipe from pipe from2 pipe from2 pipe to pipe to lazy pipe from lazy pipe from2",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "pipes",
          "normalized": "IO a-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessID)",
          "package": "hsshellscript",
          "signature": "IO a-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:pipes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe environment in use when the call was done\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_env",
          "package": "hsshellscript",
          "signature": "[(String, String)]",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_env\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_env\"]"
        },
        "index": {
          "description": "The environment in use when the call was done",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_env",
          "normalized": "[(String,String)]",
          "package": "hsshellscript",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error (errno) code\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_errno",
          "package": "hsshellscript",
          "signature": "Maybe CInt",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_errno\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_errno\"]"
        },
        "index": {
          "description": "The error errno code",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_errno",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram arguments\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_pars",
          "package": "hsshellscript",
          "signature": "[String]",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_pars\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_pars\"]"
        },
        "index": {
          "description": "Program arguments",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_pars",
          "normalized": "[String]",
          "package": "hsshellscript",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_pars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram name\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_prog",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_prog\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_prog\"]"
        },
        "index": {
          "description": "Program name",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_prog",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_prog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process status of the failure\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_ps",
          "package": "hsshellscript",
          "signature": "ProcessStatus",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_ps\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_ps\"]"
        },
        "index": {
          "description": "The process status of the failure",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_ps",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe working directory when the call was done\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "re_wd",
          "package": "hsshellscript",
          "signature": "String",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_wd\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:re_wd\"]"
        },
        "index": {
          "description": "The working directory when the call was done",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "re_wd",
          "package": "hsshellscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:re_wd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "receive_ioerror",
          "package": "hsshellscript",
          "signature": "Fd -\u003e IO (Maybe IOError)",
          "source": "src/HsShellScript-ProcErr.html#receive_ioerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "receive_ioerror",
          "normalized": "Fd-\u003eIO(Maybe IOError)",
          "package": "hsshellscript",
          "signature": "Fd-\u003eIO(Maybe IOError)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:receive_ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily replace a handle. This makes a backup copy of the original handle (typically a standard handle), overwrites it with the specified one,\n runs the specified action, and restores the handle from the backup.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e   h \u003c- openFile \"/tmp/log\" WriteMode\n   redirect stdout h io\n   hClose h\n\u003c/pre\u003e\u003cp\u003eThis is the same as\n\u003c/p\u003e\u003cpre\u003e   io -\u003e- \"/tmp/log\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003e-|-\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e=|-\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "redirect",
          "package": "hsshellscript",
          "signature": "Handle-\u003e Handle-\u003e IO a-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:redirect\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:redirect\"]"
        },
        "index": {
          "description": "Temporarily replace handle This makes backup copy of the original handle typically standard handle overwrites it with the specified one runs the specified action and restores the handle from the backup Example openFile tmp log WriteMode redirect stdout io hClose This is the same as io tmp log See",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "redirect",
          "normalized": "Handle-\u003eHandle-\u003eIO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "Handle-\u003eHandle-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "redirect_helper",
          "package": "hsshellscript",
          "signature": "Handle -\u003e IOMode -\u003e IO b -\u003e FilePath -\u003e IO b",
          "source": "src/HsShellScript-ProcErr.html#redirect_helper",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "redirect_helper",
          "normalized": "Handle-\u003eIOMode-\u003eIO a-\u003eFilePath-\u003eIO a",
          "package": "hsshellscript",
          "signature": "Handle-\u003eIOMode-\u003eIO b-\u003eFilePath-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:redirect_helper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an external program. This starts a program as a child\n process, and waits for it to finish. The executable is searched via the\n \u003ccode\u003ePATH\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is included for backwards compatibility only. New code should\u003c/em\u003e\n \u003cem\u003euse\u003c/em\u003e \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e\u003cem\u003e, which has much better error handling.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWhen the specified program can't be executed, an error message is printed, and the main process\n gets a \u003ccode\u003eProcessStatus\u003c/code\u003e thrown, with the value \u003ccode\u003eExited\n (ExitFailure 1)\u003c/code\u003e. This means that the main program can't distinguish between\n failure of calling the program and the program exiting with an exit code of\n 1. However, an error message \"Error calling ...\", including the description in the IOError produced\n by the failed \u003ccode\u003eexecp\u003c/code\u003e call, is printed on \u003ccode\u003estderr\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003erun prog par\u003c/code\u003e is essentially \u003ccode\u003ecall (execp prog par)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003erun \"/usr/bin/foobar\" [\"some\", \"args\"]\n   `catch` (\\ps -\u003e do -- oops...\n              )\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "run",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e [String]-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:run\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:run\"]"
        },
        "index": {
          "description": "Run an external program This starts program as child process and waits for it to finish The executable is searched via the PATH This function is included for backwards compatibility only New code should use runprog which has much better error handling When the specified program can be executed an error message is printed and the main process gets ProcessStatus thrown with the value Exited ExitFailure This means that the main program can distinguish between failure of calling the program and the program exiting with an exit code of However an error message Error calling including the description in the IOError produced by the failed execp call is printed on stderr run prog par is essentially call execp prog par Example run usr bin foobar some args catch ps do oops See runprog subproc spawn",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "run",
          "normalized": "FilePath-\u003e[String]-\u003eIO()",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an external program, and report errors as exceptions. The executable is\n searched via the \u003ccode\u003ePATH\u003c/code\u003e. In case the child process has been stopped by a\n signal, the parent blocks.\n\u003c/p\u003e\u003cp\u003eIn case the program exits in an way which indicates an error, or is\n terminated by a signal, a \u003ccode\u003eRunError\u003c/code\u003e is thrown. It\n contains the details of the call. The \u003ccode\u003erunprog\u003c/code\u003e action can also be converted\n to throw \u003ccode\u003eIOError\u003c/code\u003es instaed, by applying \u003ccode\u003eas_ioe\u003c/code\u003e to it. Either can be used\n to generate an informative error message.\n\u003c/p\u003e\u003cp\u003eIn case of starting the program itself failed, an \u003ccode\u003eIOError\u003c/code\u003e is thrown.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003erunprog prog par\u003c/code\u003e is a simple front end to \u003ccode\u003esubproc\u003c/code\u003e. It is essentially\n \u003ccode\u003esubproc (execp prog par)\u003c/code\u003e, apart from building a \u003ccode\u003eRunError\u003c/code\u003e from a\n \u003ccode\u003eProcessStatus\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample 1:\n\u003c/p\u003e\u003cpre\u003edo runprog \"foo\" [\"some\", \"args\"]\n   ...\n`catch` (\\re -\u003e do errm (show_runerror re)\n                      ...\n           )\n\u003c/pre\u003e\u003cp\u003eExample 2:\n\u003c/p\u003e\u003cpre\u003edo as_ioe $ runprog \"foo\" [\"some\", \"args\"]\n   ...\n`catch` (\\ioe -\u003e do errm (show_ioerror ioe)\n                       ...\n           )\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRunError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshow_runerror\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eas_ioe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "runprog",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e [String]-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:runprog\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:runprog\"]"
        },
        "index": {
          "description": "Run an external program and report errors as exceptions The executable is searched via the PATH In case the child process has been stopped by signal the parent blocks In case the program exits in an way which indicates an error or is terminated by signal RunError is thrown It contains the details of the call The runprog action can also be converted to throw IOError instaed by applying as ioe to it Either can be used to generate an informative error message In case of starting the program itself failed an IOError is thrown runprog prog par is simple front end to subproc It is essentially subproc execp prog par apart from building RunError from ProcessStatus Example do runprog foo some args catch re do errm show runerror re Example do as ioe runprog foo some args catch ioe do errm show ioerror ioe See subproc spawn RunError show runerror to ioe as ioe",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "runprog",
          "normalized": "FilePath-\u003e[String]-\u003eIO()",
          "package": "hsshellscript",
          "signature": "FilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:runprog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "send_ioerror",
          "package": "hsshellscript",
          "signature": "Fd -\u003e IOError -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#send_ioerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "send_ioerror",
          "normalized": "Fd-\u003eIOError-\u003eIO()",
          "package": "hsshellscript",
          "signature": "Fd-\u003eIOError-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:send_ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImproved version of \u003ccode\u003eSystem.Posix.Files.setFileMode\u003c/code\u003e, which sets the file name in the \u003ccode\u003eIOError\u003c/code\u003e which is thrown in case of an error. The\n   implementation in GHC 6.2.2 neglects to do this.\n\u003c/p\u003e\u003cpre\u003esetFileMode' path mode =\n   fill_in_filename path $\n      setFileMode path mode\n\u003c/pre\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "setFileMode'",
          "package": "hsshellscript",
          "signature": "FilePath -\u003e FileMode -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#setFileMode%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:setFileMode-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:setFileMode-39-\"]"
        },
        "index": {
          "description": "Improved version of System.Posix.Files.setFileMode which sets the file name in the IOError which is thrown in case of an error The implementation in GHC neglects to do this setFileMode path mode fill in filename path setFileMode path mode",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "setFileMode'",
          "normalized": "FilePath-\u003eFileMode-\u003eIO()",
          "package": "hsshellscript",
          "partial": "File Mode'",
          "signature": "FilePath-\u003eFileMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:setFileMode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003eIOError\u003c/code\u003e to a string.\n\u003c/p\u003e\u003cp\u003eThere is an instance declaration of \u003ccode\u003eIOError\u003c/code\u003e in \u003ccode\u003eShow\u003c/code\u003e in the \u003ccode\u003eGHC.IO\u003c/code\u003e library, but \u003ccode\u003eshow_ioerror\u003c/code\u003e produces a more readable, and more\n complete, message.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "show_ioerror",
          "package": "hsshellscript",
          "signature": "IOError -\u003e String",
          "source": "src/HsShellScript-ProcErr.html#show_ioerror",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:show_ioerror\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:show_ioerror\"]"
        },
        "index": {
          "description": "Convert an IOError to string There is an instance declaration of IOError in Show in the GHC.IO library but show ioerror produces more readable and more complete message",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "show_ioerror",
          "normalized": "IOError-\u003eString",
          "package": "hsshellscript",
          "signature": "IOError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:show_ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a readable error message. This includes all the\n fields of \u003ccode\u003eRunError\u003c/code\u003e except for the environment.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eRunError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "show_runerror",
          "package": "hsshellscript",
          "signature": "RunError -\u003e String",
          "source": "src/HsShellScript-ProcErr.html#show_runerror",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:show_runerror\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:show_runerror\"]"
        },
        "index": {
          "description": "Make readable error message This includes all the fields of RunError except for the environment See RunError",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "show_runerror",
          "normalized": "RunError-\u003eString",
          "package": "hsshellscript",
          "signature": "RunError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:show_runerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a subroutine as a child process, but don't let it produce any messages.\nRead its \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e instead, and append it to the contents of a\nmutable variable. The idea is that you can run some commands silently, and\nreport them and their messages to the user only when something goes wrong.\n\u003c/p\u003e\u003cp\u003eIf the child process terminates in a way which indicates an error, then the\nprocess status is thrown, in the same way as \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e does. If the subroutine\nthrows an \u003ccode\u003e(Exited ec)\u003c/code\u003e exception (of type \u003ccode\u003eProcessStatus\u003c/code\u003e), such as thrown by\n\u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, then the child process exits with the same exit code, such that the\nparent process reports it to the caller, again as a \u003ccode\u003eProcessStatus\u003c/code\u003e exception.\n\u003c/p\u003e\u003cp\u003eWhen the subroutine finishes, the child process is terminated with \u003ccode\u003e\u003ccode\u003e\u003ca\u003e_exit\u003c/a\u003e\u003c/code\u003e 0\u003c/code\u003e.\nWhen it throws an exception, an error message is printed and it is terminated\nwith \u003ccode\u003e\u003ccode\u003e\u003ca\u003e_exit\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e. See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eThe standard output (and the standard error output) of the parent process are\nflushed before the fork, such that no output appears twice.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003elet handler :: IORef String -\u003e ProcessStatus -\u003e IO ()\n    handler msgref ps = do hPutStrLn stderr (\"Command failed with \" ++ show ps ++ \". Actions so far: \")\n                           msg \u003c- readIORef msgref\n                           hPutStrLn stderr msg\n                           exitWith (ExitFailure 1)\n\nmsgref \u003c- newIORef \"\"\ndo silently msgref $ do putStrLn \"Now doing foobar:\"\n                        echo exec \"/foo/bar\" [\"arguments\"]\n   silently msgref $ echo exec \"/bar/baz\" [\"arguments\"]\n`catch` (handler msgref)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elazy_pipe_from\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, Data.IORef.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "silently",
          "package": "hsshellscript",
          "signature": "IORef String-\u003e IO ()-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:silently\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:silently\"]"
        },
        "index": {
          "description": "Run subroutine as child process but don let it produce any messages Read its stdout and stderr instead and append it to the contents of mutable variable The idea is that you can run some commands silently and report them and their messages to the user only when something goes wrong If the child process terminates in way which indicates an error then the process status is thrown in the same way as runprog does If the subroutine throws an Exited ec exception of type ProcessStatus such as thrown by runprog then the child process exits with the same exit code such that the parent process reports it to the caller again as ProcessStatus exception When the subroutine finishes the child process is terminated with exit When it throws an exception an error message is printed and it is terminated with exit See HsShellScript for details The standard output and the standard error output of the parent process are flushed before the fork such that no output appears twice Example let handler IORef String ProcessStatus IO handler msgref ps do hPutStrLn stderr Command failed with show ps Actions so far msg readIORef msgref hPutStrLn stderr msg exitWith ExitFailure msgref newIORef do silently msgref do putStrLn Now doing foobar echo exec foo bar arguments silently msgref echo exec bar baz arguments catch handler msgref See lazy pipe from subproc runprog Data.IORef",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "silently",
          "normalized": "IORef String-\u003eIO()-\u003eIO()",
          "package": "hsshellscript",
          "signature": "IORef String-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:silently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action as a separate process, and continue without waiting\n for it to finish.\n\u003c/p\u003e\u003cp\u003eThe program forks a child process, which performs the specified action and terminates.\n The child's process ID is returned.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eHsShellScript\u003c/a\u003e for further details.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esubproc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "spawn",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO ProcessID",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:spawn\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:spawn\"]"
        },
        "index": {
          "description": "Execute an IO action as separate process and continue without waiting for it to finish The program forks child process which performs the specified action and terminates The child process ID is returned See HsShellScript for further details See subproc",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "spawn",
          "normalized": "IO a-\u003eIO ProcessID",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "spawn_loc",
          "package": "hsshellscript",
          "signature": "String -\u003e IO a -\u003e IO ProcessID",
          "source": "src/HsShellScript-ProcErr.html#spawn_loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "spawn_loc",
          "normalized": "String-\u003eIO a-\u003eIO ProcessID",
          "package": "hsshellscript",
          "signature": "String-\u003eIO a-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:spawn_loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an error message from an \u003ccode\u003eerrno\u003c/code\u003e value. This is the POSIX\n \u003ccode\u003estrerror\u003c/code\u003e system library function.\n\u003c/p\u003e\u003cp\u003eSee the man page \u003ccode\u003estrerror(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "strerror",
          "package": "hsshellscript",
          "signature": "Errno-\u003e IO String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:strerror\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:strerror\"]"
        },
        "index": {
          "description": "Generate an error message from an errno value This is the POSIX strerror system library function See the man page strerror",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "strerror",
          "normalized": "Errno-\u003eIO String",
          "package": "hsshellscript",
          "signature": "Errno-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action as a separate process, and wait for it to finish.\n Report errors as exceptions.\n\u003c/p\u003e\u003cp\u003eThis forks a child process, which performs the specified IO action.\n In\n case the child process has been stopped by a signal, the parent blocks.\n\u003c/p\u003e\u003cp\u003eIf the action throws an \u003ccode\u003eIOError\u003c/code\u003e, it is transmitted to the parent.\n It is then raised there, as if it happened locally. The child then aborts\n quietly with an exit code of 0.\n\u003c/p\u003e\u003cp\u003eExceptions in\n the child process, other than \u003ccode\u003eIOError\u003c/code\u003es, result in an error message on \u003ccode\u003estderr\u003c/code\u003e, and a\n \u003ccode\u003eProcessStatus\u003c/code\u003e exception in the parent, with the value of \u003ccode\u003eExited\n (ExitFailure 1)\u003c/code\u003e. The following exceptions are understood by \u003ccode\u003esubproc\u003c/code\u003e, and\n result in corresponding messages: \u003ccode\u003eArgError\u003c/code\u003e, \u003ccode\u003eProcessStatus\u003c/code\u003e, \u003ccode\u003eRunError\u003c/code\u003e,\n \u003ccode\u003eIOError\u003c/code\u003e and \u003ccode\u003eExitCode\u003c/code\u003e. Other exceptions result in the generic message, as\n produced by \u003ccode\u003eshow\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the child process exits with an exit code other than zero, or it is\n terminated by a signal, the corresponding \u003ccode\u003eProcessStatus\u003c/code\u003e is raised as an\n exception in the parent program. Only \u003ccode\u003eIOError\u003c/code\u003es are transmitted to the parent.\n\u003c/p\u003e\u003cp\u003eWhen used in conjunction with an \u003ccode\u003eexec\u003c/code\u003e variant, this means that the parent\n process can tell the difference between failure of the \u003ccode\u003eexec\u003c/code\u003e call itself,\n and failure of the child program being executed after a successful call of\n the \u003ccode\u003eexec\u003c/code\u003e variant. In case of failure of the \u003ccode\u003eexec\u003c/code\u003e\n call, You get the \u003ccode\u003eIOError\u003c/code\u003e, which\n happened in the child when calling \u003ccode\u003eexecuteFile\u003c/code\u003e (from the GHC hierarchical\n libraries). In case of the called program failing, you get the \u003ccode\u003eProcessStatus\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnless you replace the child process, calling an \u003ccode\u003eexec\u003c/code\u003e variant, the child\n should let the control flow leave the action normally (unless it throws an\n \u003ccode\u003eIOError\u003c/code\u003e). The child process is then properly terminated by \u003ccode\u003esubproc\u003c/code\u003e, such\n that no resources, which have been duplicated by the fork, cause problems.\n See \u003ca\u003eHsShellScript\u003c/a\u003e for details.\n\u003c/p\u003e\u003cp\u003eIf you want to run an external program, by calling one of the \u003ccode\u003eexec\u003c/code\u003e\n variants in the child action, you might want to call \u003ccode\u003erunprog\u003c/code\u003e instead of \u003ccode\u003esubproc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003eRun a program with the environment replaced:\n\u003c/p\u003e\u003cpre\u003esubproc (execpe \"foobar\" [\"1\",\"2\",\"3\"] new_env)\n\u003c/pre\u003e\u003cp\u003eThis results in a \u003ccode\u003eProcessStatus\u003c/code\u003e exception:\n\u003c/p\u003e\u003cpre\u003esubproc (exec \"/bin/false\" [])\n\u003c/pre\u003e\u003cp\u003eThis results in an \u003ccode\u003eIOError\u003c/code\u003e (unless you actually have \u003ccode\u003e/frooble\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003esubproc (exec \"/frooble\" [])\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexece\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecpe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "subproc",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:subproc\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:subproc\"]"
        },
        "index": {
          "description": "Execute an IO action as separate process and wait for it to finish Report errors as exceptions This forks child process which performs the specified IO action In case the child process has been stopped by signal the parent blocks If the action throws an IOError it is transmitted to the parent It is then raised there as if it happened locally The child then aborts quietly with an exit code of Exceptions in the child process other than IOError result in an error message on stderr and ProcessStatus exception in the parent with the value of Exited ExitFailure The following exceptions are understood by subproc and result in corresponding messages ArgError ProcessStatus RunError IOError and ExitCode Other exceptions result in the generic message as produced by show If the child process exits with an exit code other than zero or it is terminated by signal the corresponding ProcessStatus is raised as an exception in the parent program Only IOError are transmitted to the parent When used in conjunction with an exec variant this means that the parent process can tell the difference between failure of the exec call itself and failure of the child program being executed after successful call of the exec variant In case of failure of the exec call You get the IOError which happened in the child when calling executeFile from the GHC hierarchical libraries In case of the called program failing you get the ProcessStatus Unless you replace the child process calling an exec variant the child should let the control flow leave the action normally unless it throws an IOError The child process is then properly terminated by subproc such that no resources which have been duplicated by the fork cause problems See HsShellScript for details If you want to run an external program by calling one of the exec variants in the child action you might want to call runprog instead of subproc Examples Run program with the environment replaced subproc execpe foobar new env This results in ProcessStatus exception subproc exec bin false This results in an IOError unless you actually have frooble subproc exec frooble See runprog spawn exec execp exece execpe",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "subproc",
          "normalized": "IO a-\u003eIO()",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:subproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the shell to execute a command. In case of an error, a \u003ccode\u003eRunError\u003c/code\u003e ist thrown.\n   This is like the Haskell standard library function \u003ccode\u003esystem\u003c/code\u003e, except that error handling is brought in accordance with HsShellScript's scheme. (It is\n   \u003cem\u003enot\u003c/em\u003e a front end to \u003ccode\u003esystem\u003c/code\u003e.)\n\u003c/p\u003e\u003cpre\u003esystem_runprog cmd = runprog \"/bin/sh\" [\"-c\", \"--\", cmd]\n\u003c/pre\u003e\u003cp\u003eExample: Call \"foo\" and report Errors as \u003ccode\u003eIOError\u003c/code\u003es, rather than \u003ccode\u003eRunError\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003eas_ioe $ system_runprog \"foo\" [\"bar\", \"baz\"]\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eRunError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eas_ioe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "system_runprog",
          "package": "hsshellscript",
          "signature": "String -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#system_runprog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:system_runprog\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:system_runprog\"]"
        },
        "index": {
          "description": "Call the shell to execute command In case of an error RunError ist thrown This is like the Haskell standard library function system except that error handling is brought in accordance with HsShellScript scheme It is not front end to system system runprog cmd runprog bin sh cmd Example Call foo and report Errors as IOError rather than RunError as ioe system runprog foo bar baz See RunError as ioe",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "system_runprog",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:system_runprog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the shell to execute a command. In case of an error, throw the \u003ccode\u003eProcessStatus\u003c/code\u003e (such as \u003ccode\u003e(Exited (ExitFailure ec))\u003c/code\u003e) as an exception.\n   This is like the Haskell standard library function \u003ccode\u003esystem\u003c/code\u003e, except that error handling is brought in accordance with HsShellScript's scheme.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eexitcode . system_throw\u003c/code\u003e is the same as the \u003ccode\u003esystem\u003c/code\u003e function, except that when the called shell is terminated or stopped by a signal, this still\n   lead to the \u003ccode\u003eProcessStatus\u003c/code\u003e being thrown. The Haskell library report says nothing about what happens in this case, when using the\n   \u003ccode\u003esystem\u003c/code\u003e function.\n\u003c/p\u003e\u003cpre\u003esystem_throw cmd = run \"/bin/sh\" [\"-c\", \"--\", cmd]\n\u003c/pre\u003e\u003cp\u003eThis function is deprecated. You should rather use \u003ccode\u003e\u003ca\u003esystem_runprog\u003c/a\u003e\u003c/code\u003e, which provides for much better error reporting.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "system_throw",
          "package": "hsshellscript",
          "signature": "String -\u003e IO ()",
          "source": "src/HsShellScript-ProcErr.html#system_throw",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:system_throw\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:system_throw\"]"
        },
        "index": {
          "description": "Call the shell to execute command In case of an error throw the ProcessStatus such as Exited ExitFailure ec as an exception This is like the Haskell standard library function system except that error handling is brought in accordance with HsShellScript scheme exitcode system throw is the same as the system function except that when the called shell is terminated or stopped by signal this still lead to the ProcessStatus being thrown The Haskell library report says nothing about what happens in this case when using the system function system throw cmd run bin sh cmd This function is deprecated You should rather use system runprog which provides for much better error reporting",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "system_throw",
          "normalized": "String-\u003eIO()",
          "package": "hsshellscript",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:system_throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and throw an \u003ccode\u003eIOError\u003c/code\u003e from the current \u003ccode\u003eerrno\u003c/code\u003e value, an optional handle and an optional file name.\n\u003c/p\u003e\u003cp\u003eThis is an extended version of the \u003ccode\u003eForeign.C.Error.throwErrno\u003c/code\u003e function\n from the GHC libraries, which additionally allows to specify a handle and a file\n name to include in the \u003ccode\u003eIOError\u003c/code\u003e thrown.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003eForeign.C.Error.throwErrno\u003c/code\u003e, \u003ccode\u003eForeign.C.Error.errnoToIOError\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "throwErrno'",
          "package": "hsshellscript",
          "signature": "String-\u003e Maybe Handle-\u003e Maybe FilePath-\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:throwErrno-39-\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:throwErrno-39-\"]"
        },
        "index": {
          "description": "Create and throw an IOError from the current errno value an optional handle and an optional file name This is an extended version of the Foreign.C.Error.throwErrno function from the GHC libraries which additionally allows to specify handle and file name to include in the IOError thrown See Foreign.C.Error.throwErrno Foreign.C.Error.errnoToIOError",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "throwErrno'",
          "normalized": "String-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIO a",
          "package": "hsshellscript",
          "partial": "Errno'",
          "signature": "String-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:throwErrno-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eRunError\u003c/code\u003e to an \u003ccode\u003eIOError\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eIOError\u003c/code\u003e type isn't capable of holding all the information which is\n contained in a \u003ccode\u003eRunError\u003c/code\u003e. The environment is left out, and most of the other\n fields are included only informally, in the description.\n\u003c/p\u003e\u003cp\u003eThe fields of the generated \u003ccode\u003eIOError\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The handle (\u003ccode\u003eioeGetHandle\u003c/code\u003e): \u003ccode\u003eNothing\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e The error type (\u003ccode\u003eioeGetErrorType\u003c/code\u003e): \u003ccode\u003eGHC.IO.Exception.SystemError\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eioe_location\u003c/code\u003e: \u003ccode\u003e\"runprog\"\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eioe_description\u003c/code\u003e: The error message, as procuded by \u003ccode\u003eshow_runerror\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eioe_filename\u003c/code\u003e: This is \u003ccode\u003eJust (shell_command \u003cem\u003eprog\u003c/em\u003e \u003cem\u003epars\u003c/em\u003e)\u003c/code\u003e, with \u003cem\u003eprog\u003c/em\u003e\n   and \u003cem\u003epars\u003c/em\u003e being the program and its arguments.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eas_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunprog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshow_runerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"HsShellScript.ProcErr\",\"HsShellScript\"]",
          "name": "to_ioe",
          "package": "hsshellscript",
          "signature": "RunError -\u003e IOError",
          "source": "src/HsShellScript-ProcErr.html#to_ioe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:to_ioe\",\"http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:to_ioe\"]"
        },
        "index": {
          "description": "Convert RunError to an IOError The IOError type isn capable of holding all the information which is contained in RunError The environment is left out and most of the other fields are included only informally in the description The fields of the generated IOError are The handle ioeGetHandle Nothing The error type ioeGetErrorType GHC.IO.Exception.SystemError ioe location runprog ioe description The error message as procuded by show runerror ioe filename This is Just shell command prog pars with prog and pars being the program and its arguments See as ioe runprog show runerror",
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "to_ioe",
          "normalized": "RunError-\u003eIOError",
          "package": "hsshellscript",
          "signature": "RunError-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:to_ioe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "tyCon_ProcessStatus",
          "package": "hsshellscript",
          "signature": "TypeRep",
          "source": "src/HsShellScript-ProcErr.html#tyCon_ProcessStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "tyCon_ProcessStatus",
          "package": "hsshellscript",
          "partial": "Con Process Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:tyCon_ProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "unsafeWithHandleFd",
          "package": "hsshellscript",
          "signature": "Handle -\u003e (Fd -\u003e IO a) -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#unsafeWithHandleFd",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "unsafeWithHandleFd",
          "normalized": "Handle-\u003e(Fd-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "partial": "With Handle Fd",
          "signature": "Handle-\u003e(Fd-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:unsafeWithHandleFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.ProcErr",
          "name": "unsafeWithHandleFd'",
          "package": "hsshellscript",
          "signature": "Handle -\u003e MVar Handle__ -\u003e (Fd -\u003e IO a) -\u003e IO a",
          "source": "src/HsShellScript-ProcErr.html#unsafeWithHandleFd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "HsShellScript ProcErr",
          "module": "HsShellScript.ProcErr",
          "name": "unsafeWithHandleFd'",
          "normalized": "Handle-\u003eMVar Handle__-\u003e(Fd-\u003eIO a)-\u003eIO a",
          "package": "hsshellscript",
          "partial": "With Handle Fd'",
          "signature": "Handle-\u003eMVar Handle__-\u003e(Fd-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-ProcErr.html#v:unsafeWithHandleFd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript.Shell",
          "name": "Shell",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Shell.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript Shell",
          "module": "HsShellScript.Shell",
          "name": "Shell",
          "package": "hsshellscript",
          "partial": "Shell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Shell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote a string for the shell\n\u003c/p\u003e\u003cp\u003eThis encloses a string in double quotes and quotes any special\n characters inside, such that it will be recognized as one string by a\n shell. The double quotes are added even when they aren't needed for this\n purpose.\n\u003c/p\u003e\u003cp\u003eNote: The quoted strings are correctly recognized in shell scripts. But the shell bash has an annoying history expansion \"feature\", which causes\n it to choke on exclamation marks, when in interactive mode, even when quoted with double quotes. You can turn it off with \u003ccode\u003eset +o histexpand\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equote0\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshell_quote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Shell",
          "name": "quote",
          "package": "hsshellscript",
          "signature": "String -\u003e String",
          "source": "src/HsShellScript-Shell.html#quote",
          "type": "function"
        },
        "index": {
          "description": "Quote string for the shell This encloses string in double quotes and quotes any special characters inside such that it will be recognized as one string by shell The double quotes are added even when they aren needed for this purpose Note The quoted strings are correctly recognized in shell scripts But the shell bash has an annoying history expansion feature which causes it to choke on exclamation marks when in interactive mode even when quoted with double quotes You can turn it off with set histexpand See quote0 shell quote",
          "hierarchy": "HsShellScript Shell",
          "module": "HsShellScript.Shell",
          "name": "quote",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Shell.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote special characters inside a string for the shell\n\u003c/p\u003e\u003cp\u003eThis quotes special characters inside a string, such that it is\n recognized as one string by the shell when enclosed in double quotes.\n Doesn't add the double quotes.\n\u003c/p\u003e\u003cp\u003eNote: The quoted strings are correctly recognized in shell scripts. But the shell bash has an annoying history expansion \"feature\", which causes\n it to choke on exclamation marks, when in interactive mode, even when quoted with double quotes. You can turn it off with \u003ccode\u003eset +o histexpand\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equote\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshell_quote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Shell",
          "name": "quote0",
          "package": "hsshellscript",
          "signature": "String -\u003e String",
          "source": "src/HsShellScript-Shell.html#quote0",
          "type": "function"
        },
        "index": {
          "description": "Quote special characters inside string for the shell This quotes special characters inside string such that it is recognized as one string by the shell when enclosed in double quotes Doesn add the double quotes Note The quoted strings are correctly recognized in shell scripts But the shell bash has an annoying history expansion feature which causes it to choke on exclamation marks when in interactive mode even when quoted with double quotes You can turn it off with set histexpand See quote shell quote",
          "hierarchy": "HsShellScript Shell",
          "module": "HsShellScript.Shell",
          "name": "quote0",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Shell.html#v:quote0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate command (for a shell) which corresponds to the specified program\n name and argument list. The program name and arguments are the usual\n parameters for calling an external program, like when using\n \u003ccode\u003erunProcess\u003c/code\u003e or \u003ccode\u003erun\u003c/code\u003e. The generated shell command\n would achieve the same effect. The name and the arguments are properly\n quoted, using \u003ccode\u003e\u003ca\u003eshell_quote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: The quoted strings are correctly recognized in shell scripts. But the shell bash has an annoying history expansion \"feature\", which causes\n it to choke on exclamation marks, when in interactive mode, even when quoted with double quotes. You can turn it off with \u003ccode\u003eset +o histexpand\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Shell",
          "name": "shell_command",
          "package": "hsshellscript",
          "signature": "String-\u003e [String]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Generate command for shell which corresponds to the specified program name and argument list The program name and arguments are the usual parameters for calling an external program like when using runProcess or run The generated shell command would achieve the same effect The name and the arguments are properly quoted using shell quote Note The quoted strings are correctly recognized in shell scripts But the shell bash has an annoying history expansion feature which causes it to choke on exclamation marks when in interactive mode even when quoted with double quotes You can turn it off with set histexpand",
          "hierarchy": "HsShellScript Shell",
          "module": "HsShellScript.Shell",
          "name": "shell_command",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Shell.html#v:shell_command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote shell metacharacters.\n\u003c/p\u003e\u003cp\u003eThis function quotes strings, such that they are not misinterpreted by\n the shell. It tries to be friendly to a human reader - when special\n characters are present, then the string is quoted with double quotes. If\n not, it is left unchanged.\n\u003c/p\u003e\u003cp\u003eThe list of exacly which characters need to be quoted has been taken\n from the bash source code. Bash in turn, implements POSIX 1003.2. So the\n result produced should be correct. From the bash info pages:\n \"... the rules for evaluation and quoting are taken from the POSIX\n 1003.2 specification for the \u003ccode\u003estandard\u003c/code\u003e Unix shell.\"\n\u003c/p\u003e\u003cp\u003eNote: The quoted strings are correctly recognized in shell scripts. But the shell bash has an annoying history expansion \"feature\", which causes\n it to choke on exclamation marks, when in interactive mode, even when quoted with double quotes. You can turn it off with \u003ccode\u003eset +o histexpand\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003equote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript.Shell",
          "name": "shell_quote",
          "package": "hsshellscript",
          "signature": "String -\u003e String",
          "source": "src/HsShellScript-Shell.html#shell_quote",
          "type": "function"
        },
        "index": {
          "description": "Quote shell metacharacters This function quotes strings such that they are not misinterpreted by the shell It tries to be friendly to human reader when special characters are present then the string is quoted with double quotes If not it is left unchanged The list of exacly which characters need to be quoted has been taken from the bash source code Bash in turn implements POSIX So the result produced should be correct From the bash info pages the rules for evaluation and quoting are taken from the POSIX specification for the standard Unix shell Note The quoted strings are correctly recognized in shell scripts But the shell bash has an annoying history expansion feature which causes it to choke on exclamation marks when in interactive mode even when quoted with double quotes You can turn it off with set histexpand See quote",
          "hierarchy": "HsShellScript Shell",
          "module": "HsShellScript.Shell",
          "name": "shell_quote",
          "normalized": "String-\u003eString",
          "package": "hsshellscript",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript-Shell.html#v:shell_quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HsShellScript",
          "name": "HsShellScript",
          "package": "hsshellscript",
          "source": "src/HsShellScript.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HsShellScript",
          "module": "HsShellScript",
          "name": "HsShellScript",
          "package": "hsshellscript",
          "partial": "Hs Shell Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne entry of mount information. This is the same as \u003ccode\u003estruct mntent\u003c/code\u003e from \u003ccode\u003e\u003cmntent.h\u003e\u003c/code\u003e.\nA list of these is returned by the functions which read mount information.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eread_mounts\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eread_mtab\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eread_fstab\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript",
          "name": "Mntent",
          "package": "hsshellscript",
          "source": "src/HsShellScript-Misc.html#Mntent",
          "type": "data"
        },
        "index": {
          "description": "One entry of mount information This is the same as struct mntent from mntent.h list of these is returned by the functions which read mount information See read mounts read mtab read fstab",
          "hierarchy": "HsShellScript",
          "module": "HsShellScript",
          "name": "Mntent",
          "package": "hsshellscript",
          "partial": "Mntent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#t:Mntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error which occured when calling an external program.\n   The fields specifiy the details of the call.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eshow_runerror\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eto_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eas_ioe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eSystem.Posix.ProcessStatus\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript",
          "name": "RunError",
          "package": "hsshellscript",
          "source": "src/HsShellScript-ProcErr.html#RunError",
          "type": "data"
        },
        "index": {
          "description": "An error which occured when calling an external program The fields specifiy the details of the call See show runerror to ioe as ioe System.Posix.ProcessStatus",
          "hierarchy": "HsShellScript",
          "module": "HsShellScript",
          "name": "RunError",
          "package": "hsshellscript",
          "partial": "Run Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#t:RunError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError reporting wrapper for the \u003ccode\u003emain\u003c/code\u003e function. This catches any\n   HsShellScript generated exceptions, and \u003ccode\u003eIOError\u003c/code\u003es, prints\n   an error message and exits with \u003ccode\u003eexitFailure\u003c/code\u003e. The \u003ccode\u003emain\u003c/code\u003e function\n   typically looks like this:\n\u003c/p\u003e\u003cpre\u003emain = mainwrapper $ do ...\n\u003c/pre\u003e\u003cp\u003eThe exceptions caught are \u003ccode\u003e\u003ca\u003eArgError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRunError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eProcessStatus\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eIOError\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HsShellScript",
          "name": "mainwrapper",
          "package": "hsshellscript",
          "signature": "IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Error reporting wrapper for the main function This catches any HsShellScript generated exceptions and IOError prints an error message and exits with exitFailure The main function typically looks like this main mainwrapper do The exceptions caught are ArgError RunError ProcessStatus and IOError",
          "hierarchy": "HsShellScript",
          "module": "HsShellScript",
          "name": "mainwrapper",
          "normalized": "IO a-\u003eIO a",
          "package": "hsshellscript",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsshellscript/docs/HsShellScript.html#v:mainwrapper"
      }
    }
  ]
]