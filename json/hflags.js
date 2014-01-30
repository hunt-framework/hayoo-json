[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eHFlags\u003c/code\u003e library supports easy definition of command line flags,\n reimplementing the ideas from Google's \u003ccode\u003egflags\u003c/code\u003e\n (\u003ca\u003ehttp://code.google.com/p/gflags\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eCommand line flags can be declared in any file at the toplevel,\n using \u003ccode\u003e\u003ca\u003edefineFlag\u003c/a\u003e\u003c/code\u003e.  At runtime, the actual values are assigned to\n the toplevel \u003ccode\u003eflags_name\u003c/code\u003e constants.  Those can be used purely\n throughout the program.\n\u003c/p\u003e\u003cp\u003eAt the beginning of the \u003ccode\u003emain\u003c/code\u003e function, \u003ccode\u003e$\u003ccode\u003e\u003ca\u003einitHFlags\u003c/a\u003e\u003c/code\u003e \"program\n description\"\u003c/code\u003e has to be called to initialize the flags.  All flags\n will be initialized that are transitively reachable via imports\n from \u003ccode\u003emain\u003c/code\u003e.  This means, that any Haskell package can easily\n define command line flags with \u003ccode\u003eHFlags\u003c/code\u003e.  This feature is\n demonstrated by\n \u003ca\u003ehttp://github.com/errge/hflags/blob/master/examples/ImportExample.hs\u003c/a\u003e\n and \u003ca\u003ehttp://github.com/errge/hflags/tree/master/examples/package\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example (more in the\n \u003ca\u003ehttp://github.com/errge/hflags/tree/master/examples\u003c/a\u003e directory):\n\u003c/p\u003e\u003cpre\u003e #!/usr/bin/env runhaskell\n\n {-# LANGUAGE TemplateHaskell #-}\n\n import HFlags\n\n defineFlag \"name\" \"Indiana Jones\" \"Who to greet.\"\n defineFlag \"r:repeat\" (3 + 4 :: Int) \"Number of times to repeat the message.\"\n\n main = do s \u003c- $initHFlags \"Simple program v0.1\"\n           sequence_ $ replicate flags_repeat greet\n           putStrLn $ \"Your additional arguments were: \" ++ show s\n           putStrLn $ \"Which is the same as: \" ++ show HFlags.arguments\n   where\n     greet = putStrLn $ \"Hello \" ++ flags_name ++ \", very nice to meet you!\"\n\u003c/pre\u003e\u003cp\u003eAt \u003ccode\u003e\u003ca\u003einitHFlags\u003c/a\u003e\u003c/code\u003e time, the library also tries to gather flags out of\n environment variables.  \u003ccode\u003eHFLAGS_verbose=True\u003c/code\u003e is equivalent to\n specifying \u003ccode\u003e--verbose=True\u003c/code\u003e on the command line.  This environment\n feature only works with long options and the user has to specify a\n value even for \u003ccode\u003eBool\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince version 0.2, you mustn't put the initHFlags in a parentheses with the program description.  Just\u003c/em\u003e \u003ccode\u003e$initHFlags\u003c/code\u003e, \u003cem\u003eit's cleaner.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "module",
        "fct-source": "src/HFlags.html",
        "fct-type": "module",
        "title": "HFlags"
      },
      "index": {
        "description": "The HFlags library supports easy definition of command line flags reimplementing the ideas from Google gflags http code.google.com gflags Command line flags can be declared in any file at the toplevel using defineFlag At runtime the actual values are assigned to the toplevel flags name constants Those can be used purely throughout the program At the beginning of the main function initHFlags program description has to be called to initialize the flags All flags will be initialized that are transitively reachable via imports from main This means that any Haskell package can easily define command line flags with HFlags This feature is demonstrated by http github.com errge hflags blob master examples ImportExample.hs and http github.com errge hflags tree master examples package simple example more in the http github.com errge hflags tree master examples directory usr bin env runhaskell LANGUAGE TemplateHaskell import HFlags defineFlag name Indiana Jones Who to greet defineFlag repeat Int Number of times to repeat the message main do initHFlags Simple program v0.1 sequence replicate flags repeat greet putStrLn Your additional arguments were show putStrLn Which is the same as show HFlags.arguments where greet putStrLn Hello flags name very nice to meet you At initHFlags time the library also tries to gather flags out of environment variables HFLAGS verbose True is equivalent to specifying verbose True on the command line This environment feature only works with long options and the user has to specify value even for Bool Since version you mustn put the initHFlags in parentheses with the program description Just initHFlags it cleaner",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "HFlags",
        "normalized": "",
        "package": "hflags",
        "partial": "HFlags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#t:Flag",
      "description": {
        "fct-descr": "\u003cp\u003eEvery flag the program supports has to be defined through a new\n phantom datatype and the Flag instance of that datatype.\n\u003c/p\u003e\u003cp\u003eBut users of the library shouldn't worry about this class or the\n implementation details behind these functions, just use the\n \u003ccode\u003edefineFlag\u003c/code\u003e Template Haskell function for defining new flags.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "class",
        "fct-source": "src/HFlags.html#Flag",
        "fct-type": "class",
        "title": "Flag"
      },
      "index": {
        "description": "Every flag the program supports has to be defined through new phantom datatype and the Flag instance of that datatype But users of the library shouldn worry about this class or the implementation details behind these functions just use the defineFlag Template Haskell function for defining new flags",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "Flag",
        "normalized": "",
        "package": "hflags",
        "partial": "Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#t:FlagType",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types for which the easy \u003ccode\u003e\u003ca\u003edefineFlag\u003c/a\u003e\u003c/code\u003e syntax is supported.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "class",
        "fct-source": "src/HFlags.html#FlagType",
        "fct-type": "class",
        "title": "FlagType"
      },
      "index": {
        "description": "Class of types for which the easy defineFlag syntax is supported",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "FlagType",
        "normalized": "",
        "package": "hflags",
        "partial": "Flag Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#t:MakeThisOrphan",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a temporary hack to force visibility of flags inside\n libraries, by making the module that defines the flag orphan.  For\n usage example, check out\n \u003ca\u003ehttp://github.com/errge/hflags/blob/master/examples/package/Tup.hs\u003c/a\u003e.\n A proper fix is already proposed for GHC 7.8, see\n \u003ca\u003ehttp://ghc.haskell.org/trac/ghc/ticket/7867\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "data",
        "fct-source": "src/HFlags.html#MakeThisOrphan",
        "fct-type": "data",
        "title": "MakeThisOrphan"
      },
      "index": {
        "description": "This is temporary hack to force visibility of flags inside libraries by making the module that defines the flag orphan For usage example check out http github.com errge hflags blob master examples package Tup.hs proper fix is already proposed for GHC see http ghc.haskell.org trac ghc ticket",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "MakeThisOrphan",
        "normalized": "",
        "package": "hflags",
        "partial": "Make This Orphan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:MakeThisOrphan",
      "description": {
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "MakeThisOrphan",
        "fct-source": "src/HFlags.html#MakeThisOrphan",
        "fct-type": "function",
        "title": "MakeThisOrphan"
      },
      "index": {
        "description": "",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "MakeThisOrphan",
        "normalized": "",
        "package": "hflags",
        "partial": "Make This Orphan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:arguments",
      "description": {
        "fct-descr": "\u003cp\u003eContains the non-parsed, non-option parts of the command line,\n the arguments.  Can only be used after \u003ccode\u003e\u003ca\u003einitHFlags\u003c/a\u003e\u003c/code\u003e has been called.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "[String]",
        "fct-source": "src/HFlags.html#arguments",
        "fct-type": "function",
        "title": "arguments"
      },
      "index": {
        "description": "Contains the non-parsed non-option parts of the command line the arguments Can only be used after initHFlags has been called",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "arguments",
        "normalized": "[String]",
        "package": "hflags",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:defineCustomFlag",
      "description": {
        "fct-descr": "\u003cp\u003eThe most flexible way of defining a flag.  For an example see\n \u003ca\u003ehttp://github.com/errge/hflags/blob/master/examples/ComplexExample.hs\u003c/a\u003e.\n For most things \u003ccode\u003e\u003ca\u003edefineFlag\u003c/a\u003e\u003c/code\u003e should be enough instead.\n\u003c/p\u003e\u003cp\u003eThe parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name of the flag (\u003ccode\u003el:long\u003c/code\u003e syntax if you want to have the short option \u003ccode\u003el\u003c/code\u003e for this flag),\n\u003c/li\u003e\u003cli\u003e expression quoted and type signed default value,\n\u003c/li\u003e\u003cli\u003e help string identifying the type of the argument (e.g. INTLIST),\n\u003c/li\u003e\u003cli\u003e read function, expression quoted,\n\u003c/li\u003e\u003cli\u003e show function, expression quoted,\n\u003c/li\u003e\u003cli\u003e help string for the flag.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "String -\u003e ExpQ -\u003e String -\u003e ExpQ -\u003e ExpQ -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HFlags.html#defineCustomFlag",
        "fct-type": "function",
        "title": "defineCustomFlag"
      },
      "index": {
        "description": "The most flexible way of defining flag For an example see http github.com errge hflags blob master examples ComplexExample.hs For most things defineFlag should be enough instead The parameters name of the flag long syntax if you want to have the short option for this flag expression quoted and type signed default value help string identifying the type of the argument e.g INTLIST read function expression quoted show function expression quoted help string for the flag",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "defineCustomFlag",
        "normalized": "String-\u003eExpQ-\u003eString-\u003eExpQ-\u003eExpQ-\u003eString-\u003eQ[Dec]",
        "package": "hflags",
        "partial": "Custom Flag",
        "signature": "String-\u003eExpQ-\u003eString-\u003eExpQ-\u003eExpQ-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:defineEQFlag",
      "description": {
        "fct-descr": "\u003cp\u003eThis just forwards to \u003ccode\u003e\u003ca\u003edefineCustomFlag\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e[| read |]\u003c/code\u003e and\n \u003ccode\u003e[| show |]\u003c/code\u003e.  Useful for flags where the type is not an instance\n of \u003ccode\u003e\u003ca\u003eFlagType\u003c/a\u003e\u003c/code\u003e.  For examples, see\n \u003ca\u003ehttp://github.com/errge/hflags/blob/master/examples/ComplexExample.hs\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name of the flag (\u003ccode\u003el:long\u003c/code\u003e syntax if you want to have the short option \u003ccode\u003el\u003c/code\u003e for this flag),\n\u003c/li\u003e\u003cli\u003e expression quoted and type signed default value,\n\u003c/li\u003e\u003cli\u003e help string identifying the type of the argument (e.g. INTLIST),\n\u003c/li\u003e\u003cli\u003e help string for the flag.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "String -\u003e ExpQ -\u003e String -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HFlags.html#defineEQFlag",
        "fct-type": "function",
        "title": "defineEQFlag"
      },
      "index": {
        "description": "This just forwards to defineCustomFlag with read and show Useful for flags where the type is not an instance of FlagType For examples see http github.com errge hflags blob master examples ComplexExample.hs The parameters name of the flag long syntax if you want to have the short option for this flag expression quoted and type signed default value help string identifying the type of the argument e.g INTLIST help string for the flag",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "defineEQFlag",
        "normalized": "String-\u003eExpQ-\u003eString-\u003eString-\u003eQ[Dec]",
        "package": "hflags",
        "partial": "EQFlag",
        "signature": "String-\u003eExpQ-\u003eString-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:defineFlag",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003edefineFlag\u003c/code\u003e function defines a new flag.\n\u003c/p\u003e\u003cp\u003eThe parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name of the flag (\u003ccode\u003el:long\u003c/code\u003e syntax if you want to have the short option \u003ccode\u003el\u003c/code\u003e for this flag),,\n\u003c/li\u003e\u003cli\u003e default value,\n\u003c/li\u003e\u003cli\u003e help string for the flag.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "String -\u003e t -\u003e String -\u003e Q [Dec]",
        "fct-source": "src/HFlags.html#defineFlag",
        "fct-type": "method",
        "title": "defineFlag"
      },
      "index": {
        "description": "The defineFlag function defines new flag The parameters name of the flag long syntax if you want to have the short option for this flag default value help string for the flag",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "defineFlag",
        "normalized": "String-\u003ea-\u003eString-\u003eQ[Dec]",
        "package": "hflags",
        "partial": "Flag",
        "signature": "String-\u003et-\u003eString-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:getFlagData",
      "description": {
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "a -\u003e FlagData",
        "fct-source": "src/HFlags.html#getFlagData",
        "fct-type": "method",
        "title": "getFlagData"
      },
      "index": {
        "description": "",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "getFlagData",
        "normalized": "a-\u003eFlagData",
        "package": "hflags",
        "partial": "Flag Data",
        "signature": "a-\u003eFlagData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:globalArguments",
      "description": {
        "fct-descr": "\u003cp\u003eA global \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e for the easy access to the arguments.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "IORef (Maybe [String])",
        "fct-source": "src/HFlags.html#globalArguments",
        "fct-type": "function",
        "title": "globalArguments"
      },
      "index": {
        "description": "global IORef for the easy access to the arguments",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "globalArguments",
        "normalized": "IORef(Maybe[String])",
        "package": "hflags",
        "partial": "Arguments",
        "signature": "IORef(Maybe[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:globalHFlags",
      "description": {
        "fct-descr": "\u003cp\u003eA global \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e for the communication between \u003ccode\u003e\u003ca\u003einitHFlags\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003eflags_*\u003c/code\u003e.  This is a map between flag name and current value.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "IORef (Maybe (Map String String))",
        "fct-source": "src/HFlags.html#globalHFlags",
        "fct-type": "function",
        "title": "globalHFlags"
      },
      "index": {
        "description": "global IORef for the communication between initHFlags and flags This is map between flag name and current value",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "globalHFlags",
        "normalized": "",
        "package": "hflags",
        "partial": "HFlags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:globalUndefinedOptions",
      "description": {
        "fct-descr": "\u003cp\u003eA global \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e for the easy access to the undefined options, if\n \u003ccode\u003e--undefok\u003c/code\u003e is used.  Useful, if you have to pass these options to\n another library, e.g. \u003ccode\u003ecriterion\u003c/code\u003e or \u003ccode\u003eGTK\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "IORef (Maybe [String])",
        "fct-source": "src/HFlags.html#globalUndefinedOptions",
        "fct-type": "function",
        "title": "globalUndefinedOptions"
      },
      "index": {
        "description": "global IORef for the easy access to the undefined options if undefok is used Useful if you have to pass these options to another library e.g criterion or GTK",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "globalUndefinedOptions",
        "normalized": "IORef(Maybe[String])",
        "package": "hflags",
        "partial": "Undefined Options",
        "signature": "IORef(Maybe[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:initHFlags",
      "description": {
        "fct-descr": "\u003cp\u003eHas to be called from the main before doing anything else:\n\u003c/p\u003e\u003cpre\u003e main = do args \u003c- $initHFlags \"Simple program v0.1\"\n           ...\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eSince version 0.2, you mustn't put the initHFlags in a parentheses with the program description.  Just\u003c/em\u003e \u003ccode\u003e$initHFlags\u003c/code\u003e, \u003cem\u003eit's cleaner.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eInternally, it uses Template Haskell trickery to gather all the\n instances of the Flag class and then generates a call to\n \u003ccode\u003einitFlags\u003c/code\u003e with the appropriate data gathered together from those\n instances to a list.\n\u003c/p\u003e\u003cp\u003eType after splicing is \u003ccode\u003eString -\u003e IO [String]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "ExpQ",
        "fct-source": "src/HFlags.html#initHFlags",
        "fct-type": "function",
        "title": "initHFlags"
      },
      "index": {
        "description": "Has to be called from the main before doing anything else main do args initHFlags Simple program v0.1 Since version you mustn put the initHFlags in parentheses with the program description Just initHFlags it cleaner Internally it uses Template Haskell trickery to gather all the instances of the Flag class and then generates call to initFlags with the appropriate data gathered together from those instances to list Type after splicing is String IO String",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "initHFlags",
        "normalized": "",
        "package": "hflags",
        "partial": "HFlags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:initHFlagsDependentDefaults",
      "description": {
        "fct-descr": "\u003cp\u003eSame as initHFlags, but makes it possible to introduce\n programmatic defaults based on user supplied flag values.\n\u003c/p\u003e\u003cp\u003eThe second parameter has to be a function that gets the following\n alists:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e defaults,\n\u003c/li\u003e\u003cli\u003e values from HFLAGS_* environment variables,\n\u003c/li\u003e\u003cli\u003e command line options.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHas to return an alist that contains the additional defaults that\n will override the default flag values (but not the user supplied\n values: environment or command line).\n\u003c/p\u003e\u003cp\u003eType after splicing is \u003ccode\u003eString -\u003e DependentDefaults -\u003e IO [String]\u003c/code\u003e.\n Where:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003etype AList = [(String, String)]\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etype DependentDefaults = AList -\u003e AList -\u003e AList -\u003e AList\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "ExpQ",
        "fct-source": "src/HFlags.html#initHFlagsDependentDefaults",
        "fct-type": "function",
        "title": "initHFlagsDependentDefaults"
      },
      "index": {
        "description": "Same as initHFlags but makes it possible to introduce programmatic defaults based on user supplied flag values The second parameter has to be function that gets the following alists defaults values from HFLAGS environment variables command line options Has to return an alist that contains the additional defaults that will override the default flag values but not the user supplied values environment or command line Type after splicing is String DependentDefaults IO String Where type AList String String type DependentDefaults AList AList AList AList",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "initHFlagsDependentDefaults",
        "normalized": "",
        "package": "hflags",
        "partial": "HFlags Dependent Defaults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hflags/docs/HFlags.html#v:undefinedOptions",
      "description": {
        "fct-descr": "\u003cp\u003eContains the non-parsed, option parts of the command line, if\n \u003ccode\u003e--undefok\u003c/code\u003e is in use.  This can be useful, when you have to pass\n these options to other libraries, e.g. \u003ccode\u003ecriterion\u003c/code\u003e or \u003ccode\u003eGTK\u003c/code\u003e.  Can\n only be used after \u003ccode\u003e\u003ca\u003einitHFlags\u003c/a\u003e\u003c/code\u003e has been called.\n\u003c/p\u003e",
        "fct-module": "HFlags",
        "fct-package": "hflags",
        "fct-signature": "[String]",
        "fct-source": "src/HFlags.html#undefinedOptions",
        "fct-type": "function",
        "title": "undefinedOptions"
      },
      "index": {
        "description": "Contains the non-parsed option parts of the command line if undefok is in use This can be useful when you have to pass these options to other libraries e.g criterion or GTK Can only be used after initHFlags has been called",
        "hierarchy": "HFlags",
        "module": "HFlags",
        "name": "undefinedOptions",
        "normalized": "[String]",
        "package": "hflags",
        "partial": "Options",
        "signature": "[String]"
      }
    }
  }
]