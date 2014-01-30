[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Bool.html#",
      "description": {
        "fct-module": "Extra.Bool",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Bool.html",
        "fct-type": "module",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Bool",
        "module": "Extra.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "Extra",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Bool.html#v:cond",
      "description": {
        "fct-module": "Extra.Bool",
        "fct-package": "Extra",
        "fct-signature": "a -\u003e a -\u003e Bool -\u003e a",
        "fct-source": "src/Extra-Bool.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Bool",
        "module": "Extra.Bool",
        "name": "cond",
        "normalized": "a-\u003ea-\u003eBool-\u003ea",
        "package": "Extra",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use System.Unix.QIO in Unixutils.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCIO is a type class for the TIO monad, which tracks the cursor\n position of the console so that indentation and prefixes can be\n added to the output.  TIO also has a style component which lets you\n control the output verbosity and the appearance of the prefix.\n There is an instance for the regular IO monad which doesn't use any\n of these features, to allow functions which do not use the TIO\n monad call functions in the Debian library.\n\u003c/p\u003e\u003cp\u003eNOTE: a copy of this library is in the Extra library as\n well. Please update both locations.\n\u003c/p\u003e\u003cp\u003eThis code is provided for backwards compatibility, I don't\n endorse its use in new projects.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-CIO.html",
        "fct-type": "module",
        "title": "CIO"
      },
      "index": {
        "description": "Deprecated Use System.Unix.QIO in Unixutils CIO is type class for the TIO monad which tracks the cursor position of the console so that indentation and prefixes can be added to the output TIO also has style component which lets you control the output verbosity and the appearance of the prefix There is an instance for the regular IO monad which doesn use any of these features to allow functions which do not use the TIO monad call functions in the Debian library NOTE copy of this library is in the Extra library as well Please update both locations This code is provided for backwards compatibility don endorse its use in new projects",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "CIO",
        "normalized": "",
        "package": "Extra",
        "partial": "CIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#t:CIO",
      "description": {
        "fct-descr": "\u003cp\u003eClass representing ways of doing console (terminal?) output.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "class",
        "fct-source": "src/Extra-CIO.html#CIO",
        "fct-type": "class",
        "title": "CIO"
      },
      "index": {
        "description": "Class representing ways of doing console terminal output",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "CIO",
        "normalized": "",
        "package": "Extra",
        "partial": "CIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#t:TStyle",
      "description": {
        "fct-descr": "\u003cp\u003eA record used to hold the output style information for a task.\n This The prefixes that will appear at the beginning of each line,\n and the desired verbosity level.  Suggested verbosity level policy:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e -1: No output of any kind, as if you were directing all output to \u003cem\u003edev\u003c/em\u003enull\n\u003c/li\u003e\u003cli\u003e 0: Error output only, suitable for a run whose log you might examine later\n\u003c/li\u003e\u003cli\u003e 1: casual progress reporting - if you were running on a console but didn't\n      expect anything to go wrong\n\u003c/li\u003e\u003cli\u003e 2: detailed progress reporting - show more progress, particularly things\n      that might fail during the normal operation of the autobuilder: patches\n      that fail to apply, dpkg-buildpackage runs that return errors, etc.\n\u003c/li\u003e\u003cli\u003e 3: Debugging output - use this level or higher if you suspect the\n      autobuilder itself is failing, or you are doing development work on\n      the autobuilder.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "data",
        "fct-source": "src/Extra-CIO.html#TStyle",
        "fct-type": "data",
        "title": "TStyle"
      },
      "index": {
        "description": "record used to hold the output style information for task This The prefixes that will appear at the beginning of each line and the desired verbosity level Suggested verbosity level policy No output of any kind as if you were directing all output to dev null Error output only suitable for run whose log you might examine later casual progress reporting if you were running on console but didn expect anything to go wrong detailed progress reporting show more progress particularly things that might fail during the normal operation of the autobuilder patches that fail to apply dpkg-buildpackage runs that return errors etc Debugging output use this level or higher if you suspect the autobuilder itself is failing or you are doing development work on the autobuilder",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "TStyle",
        "normalized": "",
        "package": "Extra",
        "partial": "TStyle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:TStyle",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "TStyle",
        "fct-source": "src/Extra-CIO.html#TStyle",
        "fct-type": "function",
        "title": "TStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "TStyle",
        "normalized": "",
        "package": "Extra",
        "partial": "TStyle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend some text to the prefix.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#addPrefix",
        "fct-type": "function",
        "title": "addPrefix"
      },
      "index": {
        "description": "Prepend some text to the prefix",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "addPrefix",
        "normalized": "String-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "String-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addPrefixes",
      "description": {
        "fct-descr": "\u003cp\u003eSwitch to prefixed mode and modify both the stdout and stderr prefixes.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#addPrefixes",
        "fct-type": "function",
        "title": "addPrefixes"
      },
      "index": {
        "description": "Switch to prefixed mode and modify both the stdout and stderr prefixes",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "addPrefixes",
        "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefixes",
        "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addVerbosity",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#addVerbosity",
        "fct-type": "function",
        "title": "addVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "addVerbosity",
        "normalized": "Int-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Verbosity",
        "signature": "Int-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:appPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eAppend some text to the prefix.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#appPrefix",
        "fct-type": "function",
        "title": "appPrefix"
      },
      "index": {
        "description": "Append some text to the prefix",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "appPrefix",
        "normalized": "String-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "String-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:appPrefixes",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#appPrefixes",
        "fct-type": "function",
        "title": "appPrefixes"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "appPrefixes",
        "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefixes",
        "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:blue",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Extra-CIO.html#blue",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "blue",
        "normalized": "[Char]-\u003e[Char]",
        "package": "Extra",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:bol",
      "description": {
        "fct-descr": "\u003cp\u003ehBOL to stdout.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "m ()",
        "fct-source": "src/Extra-CIO.html#bol",
        "fct-type": "function",
        "title": "bol"
      },
      "index": {
        "description": "hBOL to stdout",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "bol",
        "normalized": "a()",
        "package": "Extra",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:defStyle",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "TStyle",
        "fct-source": "src/Extra-CIO.html#defStyle",
        "fct-type": "function",
        "title": "defStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "defStyle",
        "normalized": "",
        "package": "Extra",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:eBOL",
      "description": {
        "fct-descr": "\u003cp\u003ehBOL to stderr.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "m ()",
        "fct-source": "src/Extra-CIO.html#eBOL",
        "fct-type": "function",
        "title": "eBOL"
      },
      "index": {
        "description": "hBOL to stderr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "eBOL",
        "normalized": "a()",
        "package": "Extra",
        "partial": "BOL",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character to stderr.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#ePutChar",
        "fct-type": "function",
        "title": "ePutChar"
      },
      "index": {
        "description": "Write character to stderr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "ePutChar",
        "normalized": "Char-\u003ea()",
        "package": "Extra",
        "partial": "Put Char",
        "signature": "Char-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to stderr.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#ePutStr",
        "fct-type": "function",
        "title": "ePutStr"
      },
      "index": {
        "description": "Write string to stderr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "ePutStr",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Put Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStrBl",
      "description": {
        "fct-descr": "\u003cp\u003ehPutStrBl to stderr.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#ePutStrBl",
        "fct-type": "function",
        "title": "ePutStrBl"
      },
      "index": {
        "description": "hPutStrBl to stderr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "ePutStrBl",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Bl",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003ehPutStrLn to stderr.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#ePutStrLn",
        "fct-type": "function",
        "title": "ePutStrLn"
      },
      "index": {
        "description": "hPutStrLn to stderr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "ePutStrLn",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ev",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \"effective verbosity\" for a task.  If the argument\n is 2 it means the caller is computing ev for a task that\n normally does output when the verbosity level is 2 or higher.\n If the verbosity of the current style is 1, then the ev or\n effective verbosity is 2-1 = -1, so the output should be\n quieter.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e m Int",
        "fct-source": "src/Extra-CIO.html#ev",
        "fct-type": "method",
        "title": "ev"
      },
      "index": {
        "description": "Return the effective verbosity for task If the argument is it means the caller is computing ev for task that normally does output when the verbosity level is or higher If the verbosity of the current style is then the ev or effective verbosity is so the output should be quieter",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "ev",
        "normalized": "Int-\u003ea Int",
        "package": "Extra",
        "partial": "",
        "signature": "Int-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:green",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Extra-CIO.html#green",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "green",
        "normalized": "[Char]-\u003e[Char]",
        "package": "Extra",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hBOL",
      "description": {
        "fct-descr": "\u003cp\u003eIf we are not already at the beginning of a line, move the cursor\n to the beginning of the next one.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#hBOL",
        "fct-type": "method",
        "title": "hBOL"
      },
      "index": {
        "description": "If we are not already at the beginning of line move the cursor to the beginning of the next one",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hBOL",
        "normalized": "Handle-\u003ea()",
        "package": "Extra",
        "partial": "BOL",
        "signature": "Handle-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hColor",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e [Char] -\u003e [Char]",
        "fct-source": "src/Extra-CIO.html#hColor",
        "fct-type": "function",
        "title": "hColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hColor",
        "normalized": "Handle-\u003e[Char]-\u003e[Char]",
        "package": "Extra",
        "partial": "Color",
        "signature": "Handle-\u003e[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hGetPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current prefix for a particular handle\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e TStyle -\u003e String",
        "fct-source": "src/Extra-CIO.html#hGetPrefix",
        "fct-type": "function",
        "title": "hGetPrefix"
      },
      "index": {
        "description": "Get the current prefix for particular handle",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hGetPrefix",
        "normalized": "Handle-\u003eTStyle-\u003eString",
        "package": "Extra",
        "partial": "Get Prefix",
        "signature": "Handle-\u003eTStyle-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPrefix",
      "description": {
        "fct-descr": "\u003cp\u003ePer-handle prefix\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "[(Handle, String)]",
        "fct-source": "src/Extra-CIO.html#TStyle",
        "fct-type": "function",
        "title": "hPrefix"
      },
      "index": {
        "description": "Per-handle prefix",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hPrefix",
        "normalized": "[(Handle,String)]",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "[(Handle,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#hPutChar",
        "fct-type": "function",
        "title": "hPutChar"
      },
      "index": {
        "description": "Write character",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hPutChar",
        "normalized": "Handle-\u003eChar-\u003ea()",
        "package": "Extra",
        "partial": "Put Char",
        "signature": "Handle-\u003eChar-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite output to a handle.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#hPutStr",
        "fct-type": "method",
        "title": "hPutStr"
      },
      "index": {
        "description": "Write output to handle",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hPutStr",
        "normalized": "Handle-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str",
        "signature": "Handle-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStrBl",
      "description": {
        "fct-descr": "\u003cp\u003eMove to beginning of next line (if necessary) and output a string.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#hPutStrBl",
        "fct-type": "function",
        "title": "hPutStrBl"
      },
      "index": {
        "description": "Move to beginning of next line if necessary and output string",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hPutStrBl",
        "normalized": "Handle-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Bl",
        "signature": "Handle-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a newline character and a string.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "Write newline character and string",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:magenta",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Extra-CIO.html#magenta",
        "fct-type": "function",
        "title": "magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "magenta",
        "normalized": "[Char]-\u003e[Char]",
        "package": "Extra",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eAdd this string at the beginning of each line\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String",
        "fct-source": "src/Extra-CIO.html#TStyle",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "Add this string at the beginning of each line",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "prefix",
        "normalized": "",
        "package": "Extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character to stdout.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "Write character to stdout",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "putChar",
        "normalized": "Char-\u003ea()",
        "package": "Extra",
        "partial": "Char",
        "signature": "Char-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to stdout.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write string to stdout",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "putStr",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStrBl",
      "description": {
        "fct-descr": "\u003cp\u003ehPutStrBl to stdout.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#putStrBl",
        "fct-type": "function",
        "title": "putStrBl"
      },
      "index": {
        "description": "hPutStrBl to stdout",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "putStrBl",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Str Bl",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003ehPutStrLn to stdout.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "hPutStrLn to stdout",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "putStrLn",
        "normalized": "String-\u003ea()",
        "package": "Extra",
        "partial": "Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:red",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Extra-CIO.html#red",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "red",
        "normalized": "[Char]-\u003e[Char]",
        "package": "Extra",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eSet the output style for a handle to prefixed.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#setPrefix",
        "fct-type": "function",
        "title": "setPrefix"
      },
      "index": {
        "description": "Set the output style for handle to prefixed",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "setPrefix",
        "normalized": "String-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "String-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setPrefixes",
      "description": {
        "fct-descr": "\u003cp\u003eSet the output style for the stdout and stderr handle to prefixed,\n using whatever prefixes were most recently set (default is [1] and [2].)\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#setPrefixes",
        "fct-type": "function",
        "title": "setPrefixes"
      },
      "index": {
        "description": "Set the output style for the stdout and stderr handle to prefixed using whatever prefixes were most recently set default is and",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "setPrefixes",
        "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Prefixes",
        "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setStyle",
      "description": {
        "fct-descr": "\u003cp\u003eModify the current output style.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "(TStyle -\u003e TStyle) -\u003e m a -\u003e m a",
        "fct-source": "src/Extra-CIO.html#setStyle",
        "fct-type": "method",
        "title": "setStyle"
      },
      "index": {
        "description": "Modify the current output style",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "setStyle",
        "normalized": "(TStyle-\u003eTStyle)-\u003ea b-\u003ea b",
        "package": "Extra",
        "partial": "Style",
        "signature": "(TStyle-\u003eTStyle)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setVerbosity",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e TStyle -\u003e TStyle",
        "fct-source": "src/Extra-CIO.html#setVerbosity",
        "fct-type": "function",
        "title": "setVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "setVerbosity",
        "normalized": "Int-\u003eTStyle-\u003eTStyle",
        "package": "Extra",
        "partial": "Verbosity",
        "signature": "Int-\u003eTStyle-\u003eTStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:tryCIO",
      "description": {
        "fct-descr": "\u003cp\u003eImplementation of try for this monad\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "m a -\u003e m (Either SomeException a)",
        "fct-source": "src/Extra-CIO.html#tryCIO",
        "fct-type": "method",
        "title": "tryCIO"
      },
      "index": {
        "description": "Implementation of try for this monad",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "tryCIO",
        "normalized": "a b-\u003ea(Either SomeException b)",
        "package": "Extra",
        "partial": "CIO",
        "signature": "m a-\u003em(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vBOL",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of BOL\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vBOL",
        "fct-type": "function",
        "title": "vBOL"
      },
      "index": {
        "description": "Verbosity controlled version of BOL",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vBOL",
        "normalized": "Int-\u003ea()",
        "package": "Extra",
        "partial": "BOL",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEBOL",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of eBOL\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vEBOL",
        "fct-type": "function",
        "title": "vEBOL"
      },
      "index": {
        "description": "Verbosity controlled version of eBOL",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vEBOL",
        "normalized": "Int-\u003ea()",
        "package": "Extra",
        "partial": "EBOL",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of ePutChar\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vEPutChar",
        "fct-type": "function",
        "title": "vEPutChar"
      },
      "index": {
        "description": "Verbosity controlled version of ePutChar",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vEPutChar",
        "normalized": "Int-\u003eChar-\u003ea()",
        "package": "Extra",
        "partial": "EPut Char",
        "signature": "Int-\u003eChar-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of ePutStr\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vEPutStr",
        "fct-type": "function",
        "title": "vEPutStr"
      },
      "index": {
        "description": "Verbosity controlled version of ePutStr",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vEPutStr",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "EPut Str",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStrBl",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of ePutStrBl\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vEPutStrBl",
        "fct-type": "function",
        "title": "vEPutStrBl"
      },
      "index": {
        "description": "Verbosity controlled version of ePutStrBl",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vEPutStrBl",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "EPut Str Bl",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of ePutStrLn\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vEPutStrLn",
        "fct-type": "function",
        "title": "vEPutStrLn"
      },
      "index": {
        "description": "Verbosity controlled version of ePutStrLn",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vEPutStrLn",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "EPut Str Ln",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHBOL",
      "description": {
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e Int -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vHBOL",
        "fct-type": "function",
        "title": "vHBOL"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vHBOL",
        "normalized": "Handle-\u003eInt-\u003ea()",
        "package": "Extra",
        "partial": "HBOL",
        "signature": "Handle-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of hPutChar.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e Int -\u003e Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vHPutChar",
        "fct-type": "function",
        "title": "vHPutChar"
      },
      "index": {
        "description": "Verbosity controlled version of hPutChar",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vHPutChar",
        "normalized": "Handle-\u003eInt-\u003eChar-\u003ea()",
        "package": "Extra",
        "partial": "HPut Char",
        "signature": "Handle-\u003eInt-\u003eChar-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutStrBl",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of hPutStrBl\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vHPutStrBl",
        "fct-type": "function",
        "title": "vHPutStrBl"
      },
      "index": {
        "description": "Verbosity controlled version of hPutStrBl",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vHPutStrBl",
        "normalized": "Handle-\u003eInt-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "HPut Str Bl",
        "signature": "Handle-\u003eInt-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of hPutStrLn.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Handle -\u003e Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vHPutStrLn",
        "fct-type": "function",
        "title": "vHPutStrLn"
      },
      "index": {
        "description": "Verbosity controlled version of hPutStrLn",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vHPutStrLn",
        "normalized": "Handle-\u003eInt-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "HPut Str Ln",
        "signature": "Handle-\u003eInt-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of putChar\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e Char -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vPutChar",
        "fct-type": "function",
        "title": "vPutChar"
      },
      "index": {
        "description": "Verbosity controlled version of putChar",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vPutChar",
        "normalized": "Int-\u003eChar-\u003ea()",
        "package": "Extra",
        "partial": "Put Char",
        "signature": "Int-\u003eChar-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to stdout depending on the verbosity level.\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vPutStr",
        "fct-type": "function",
        "title": "vPutStr"
      },
      "index": {
        "description": "Write string to stdout depending on the verbosity level",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vPutStr",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStrBl",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of putStrBl\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vPutStrBl",
        "fct-type": "function",
        "title": "vPutStrBl"
      },
      "index": {
        "description": "Verbosity controlled version of putStrBl",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vPutStrBl",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Bl",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eVerbosity controlled version of putStrLn\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int -\u003e String -\u003e m ()",
        "fct-source": "src/Extra-CIO.html#vPutStrLn",
        "fct-type": "function",
        "title": "vPutStrLn"
      },
      "index": {
        "description": "Verbosity controlled version of putStrLn",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "vPutStrLn",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "Extra",
        "partial": "Put Str Ln",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore v functions whose argument is more than this\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "Int",
        "fct-source": "src/Extra-CIO.html#TStyle",
        "fct-type": "function",
        "title": "verbosity"
      },
      "index": {
        "description": "Ignore functions whose argument is more than this",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "verbosity",
        "normalized": "",
        "package": "Extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:withStyle",
      "description": {
        "fct-descr": "\u003cp\u003eUse a new style for the TIO action\n\u003c/p\u003e",
        "fct-module": "Extra.CIO",
        "fct-package": "Extra",
        "fct-signature": "TStyle -\u003e m a -\u003e m a",
        "fct-source": "src/Extra-CIO.html#withStyle",
        "fct-type": "function",
        "title": "withStyle"
      },
      "index": {
        "description": "Use new style for the TIO action",
        "hierarchy": "Extra CIO",
        "module": "Extra.CIO",
        "name": "withStyle",
        "normalized": "TStyle-\u003ea b-\u003ea b",
        "package": "Extra",
        "partial": "Style",
        "signature": "TStyle-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#",
      "description": {
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Either.html",
        "fct-type": "module",
        "title": "Either"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "Either",
        "normalized": "",
        "package": "Extra",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:concatEithers",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a list of eithers into an either of lists\n\u003c/p\u003e",
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "[Either a b] -\u003e Either [a] [b]",
        "fct-source": "src/Extra-Either.html#concatEithers",
        "fct-type": "function",
        "title": "concatEithers"
      },
      "index": {
        "description": "Turn list of eithers into an either of lists",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "concatEithers",
        "normalized": "[Either a b]-\u003eEither[a][b]",
        "package": "Extra",
        "partial": "Eithers",
        "signature": "[Either a b]-\u003eEither[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:eitherFromList",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use concatEithers\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "[Either a b] -\u003e Either [a] [b]",
        "fct-source": "src/Extra-Either.html#eitherFromList",
        "fct-type": "function",
        "title": "eitherFromList"
      },
      "index": {
        "description": "Deprecated Use concatEithers",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "eitherFromList",
        "normalized": "[Either a b]-\u003eEither[a][b]",
        "package": "Extra",
        "partial": "From List",
        "signature": "[Either a b]-\u003eEither[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:isLeft",
      "description": {
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "Either t t1 -\u003e Bool",
        "fct-source": "src/Extra-Either.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "isLeft",
        "normalized": "Either a a-\u003eBool",
        "package": "Extra",
        "partial": "Left",
        "signature": "Either t t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:isRight",
      "description": {
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "Either t t1 -\u003e Bool",
        "fct-source": "src/Extra-Either.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "isRight",
        "normalized": "Either a a-\u003eBool",
        "package": "Extra",
        "partial": "Right",
        "signature": "Either t t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:rightOnly",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use rights\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.Either",
        "fct-package": "Extra",
        "fct-signature": "[Either a b] -\u003e [b]",
        "fct-source": "src/Extra-Either.html#rightOnly",
        "fct-type": "function",
        "title": "rightOnly"
      },
      "index": {
        "description": "Deprecated Use rights",
        "hierarchy": "Extra Either",
        "module": "Extra.Either",
        "name": "rightOnly",
        "normalized": "[Either a b]-\u003e[b]",
        "package": "Extra",
        "partial": "Only",
        "signature": "[Either a b]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Exit.html#",
      "description": {
        "fct-module": "Extra.Exit",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Exit.html",
        "fct-type": "module",
        "title": "Exit"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Exit",
        "module": "Extra.Exit",
        "name": "Exit",
        "normalized": "",
        "package": "Extra",
        "partial": "Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Exit.html#v:exitWithHelp",
      "description": {
        "fct-descr": "\u003cp\u003eexitFailure with nicely formatted help text on stderr\n\u003c/p\u003e",
        "fct-module": "Extra.Exit",
        "fct-package": "Extra",
        "fct-signature": "(String -\u003e Doc)-\u003e IO a",
        "fct-type": "function",
        "title": "exitWithHelp"
      },
      "index": {
        "description": "exitFailure with nicely formatted help text on stderr",
        "hierarchy": "Extra Exit",
        "module": "Extra.Exit",
        "name": "exitWithHelp",
        "normalized": "(String-\u003eDoc)-\u003eIO a",
        "package": "Extra",
        "partial": "With Help",
        "signature": "(String-\u003eDoc)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome extra operations on files.  The functions here generally\n return (Right ()) on success, Left [messages] on failure, and throw\n an exception when a failure leaves things in an inconsistant state.\n An example of an inconsistant state would be if we got a failure\n when writing out a file, but were unable to restore the original\n file to its original position.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Files.html",
        "fct-type": "module",
        "title": "Files"
      },
      "index": {
        "description": "Some extra operations on files The functions here generally return Right on success Left messages on failure and throw an exception when failure leaves things in an inconsistant state An example of an inconsistant state would be if we got failure when writing out file but were unable to restore the original file to its original position",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "Files",
        "normalized": "",
        "package": "Extra",
        "partial": "Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:backupFile",
      "description": {
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#backupFile",
        "fct-type": "function",
        "title": "backupFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "backupFile",
        "normalized": "FilePath-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:createSymbolicLinkIfMissing",
      "description": {
        "fct-descr": "\u003cp\u003eAdd-on for System.Posix.Files\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#createSymbolicLinkIfMissing",
        "fct-type": "function",
        "title": "createSymbolicLinkIfMissing"
      },
      "index": {
        "description": "Add-on for System.Posix.Files",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "createSymbolicLinkIfMissing",
        "normalized": "String-\u003eFilePath-\u003eIO()",
        "package": "Extra",
        "partial": "Symbolic Link If Missing",
        "signature": "String-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:deleteMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a file if it exists\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#deleteMaybe",
        "fct-type": "function",
        "title": "deleteMaybe"
      },
      "index": {
        "description": "Delete file if it exists",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "deleteMaybe",
        "normalized": "FilePath-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "Maybe",
        "signature": "FilePath-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:forceRemoveLink",
      "description": {
        "fct-descr": "\u003cp\u003elike removeLink, but does not fail if link did not exist\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#forceRemoveLink",
        "fct-type": "function",
        "title": "forceRemoveLink"
      },
      "index": {
        "description": "like removeLink but does not fail if link did not exist",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "forceRemoveLink",
        "normalized": "FilePath-\u003eIO()",
        "package": "Extra",
        "partial": "Remove Link",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:getSubDirectories",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the list of subdirectories, omitting . and .. and ignoring\n symbolic links.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO [String]",
        "fct-source": "src/Extra-Files.html#getSubDirectories",
        "fct-type": "function",
        "title": "getSubDirectories"
      },
      "index": {
        "description": "Return the list of subdirectories omitting and and ignoring symbolic links",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "getSubDirectories",
        "normalized": "FilePath-\u003eIO[String]",
        "package": "Extra",
        "partial": "Sub Directories",
        "signature": "FilePath-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:installFiles",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically install a list of files.  Returns a list of what went\n wrong on failure.  Will throw an error if it fails and is unable to\n restore the original files to their original states.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "[(FilePath, FilePath)] -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#installFiles",
        "fct-type": "function",
        "title": "installFiles"
      },
      "index": {
        "description": "Atomically install list of files Returns list of what went wrong on failure Will throw an error if it fails and is unable to restore the original files to their original states",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "installFiles",
        "normalized": "[(FilePath,FilePath)]-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "Files",
        "signature": "[(FilePath,FilePath)]-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:maybeWriteFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a file if its content is different from the given text.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#maybeWriteFile",
        "fct-type": "function",
        "title": "maybeWriteFile"
      },
      "index": {
        "description": "Write file if its content is different from the given text",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "maybeWriteFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "Extra",
        "partial": "Write File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:prepareSymbolicLink",
      "description": {
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#prepareSymbolicLink",
        "fct-type": "function",
        "title": "prepareSymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "prepareSymbolicLink",
        "normalized": "FilePath-\u003eFilePath-\u003eIO()",
        "package": "Extra",
        "partial": "Symbolic Link",
        "signature": "FilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:renameAlways",
      "description": {
        "fct-descr": "\u003cp\u003eChange a file's name, removing any existing file with the new name.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#renameAlways",
        "fct-type": "function",
        "title": "renameAlways"
      },
      "index": {
        "description": "Change file name removing any existing file with the new name",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "renameAlways",
        "normalized": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "Always",
        "signature": "FilePath-\u003eFilePath-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:renameMissing",
      "description": {
        "fct-descr": "\u003cp\u003eChange a file's name only if the new name doesn't exist.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#renameMissing",
        "fct-type": "function",
        "title": "renameMissing"
      },
      "index": {
        "description": "Change file name only if the new name doesn exist",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "renameMissing",
        "normalized": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "Missing",
        "signature": "FilePath-\u003eFilePath-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:replaceFile",
      "description": {
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#replaceFile",
        "fct-type": "function",
        "title": "replaceFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "replaceFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "Extra",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeAndZipFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite out three versions of a file, regular, gzipped, and bzip2ed.\n This new version assumes the files are written to temporary locations,\n so any existing file there can be removed.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#writeAndZipFile",
        "fct-type": "function",
        "title": "writeAndZipFile"
      },
      "index": {
        "description": "Write out three versions of file regular gzipped and bzip2ed This new version assumes the files are written to temporary locations so any existing file there can be removed",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "writeAndZipFile",
        "normalized": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "And Zip File",
        "signature": "FilePath-\u003eByteString-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeAndZipFileWithBackup",
      "description": {
        "fct-descr": "\u003cp\u003eWrite out three versions of a file, regular, gzipped, and bzip2ed.\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO (Either [String] ())",
        "fct-source": "src/Extra-Files.html#writeAndZipFileWithBackup",
        "fct-type": "function",
        "title": "writeAndZipFileWithBackup"
      },
      "index": {
        "description": "Write out three versions of file regular gzipped and bzip2ed",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "writeAndZipFileWithBackup",
        "normalized": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
        "package": "Extra",
        "partial": "And Zip File With Backup",
        "signature": "FilePath-\u003eByteString-\u003eIO(Either[String]())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeFileIfMissing",
      "description": {
        "fct-descr": "\u003cp\u003eLike writeFile, but if the file already exists don't touch it.\n Example: writeFileIfMissing True \"/var/lib/dpkg/status\" \"\"\n\u003c/p\u003e",
        "fct-module": "Extra.Files",
        "fct-package": "Extra",
        "fct-signature": "Bool -\u003e FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Extra-Files.html#writeFileIfMissing",
        "fct-type": "function",
        "title": "writeFileIfMissing"
      },
      "index": {
        "description": "Like writeFile but if the file already exists don touch it Example writeFileIfMissing True var lib dpkg status",
        "hierarchy": "Extra Files",
        "module": "Extra.Files",
        "name": "writeFileIfMissing",
        "normalized": "Bool-\u003eFilePath-\u003eString-\u003eIO()",
        "package": "Extra",
        "partial": "File If Missing",
        "signature": "Bool-\u003eFilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-GPGSign.html",
        "fct-type": "module",
        "title": "GPGSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "GPGSign",
        "normalized": "",
        "package": "Extra",
        "partial": "GPGSign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#t:PGPKey",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "data",
        "fct-source": "src/Extra-GPGSign.html#PGPKey",
        "fct-type": "data",
        "title": "PGPKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "PGPKey",
        "normalized": "",
        "package": "Extra",
        "partial": "PGPKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:Default",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "Default",
        "fct-source": "src/Extra-GPGSign.html#PGPKey",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "Default",
        "normalized": "",
        "package": "Extra",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:Key",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "Key String",
        "fct-source": "src/Extra-GPGSign.html#PGPKey",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "Key",
        "normalized": "",
        "package": "Extra",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:cd",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/Extra-Misc.html#cd",
        "fct-type": "function",
        "title": "cd"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "cd",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "Extra",
        "partial": "",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:pgpSignFile",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "PGPKey -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/Extra-GPGSign.html#pgpSignFile",
        "fct-type": "function",
        "title": "pgpSignFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "pgpSignFile",
        "normalized": "PGPKey-\u003eFilePath-\u003eIO Bool",
        "package": "Extra",
        "partial": "Sign File",
        "signature": "PGPKey-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:pgpSignFiles",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e PGPKey -\u003e [FilePath] -\u003e IO [Bool]",
        "fct-source": "src/Extra-GPGSign.html#pgpSignFiles",
        "fct-type": "function",
        "title": "pgpSignFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "pgpSignFiles",
        "normalized": "FilePath-\u003ePGPKey-\u003e[FilePath]-\u003eIO[Bool]",
        "package": "Extra",
        "partial": "Sign Files",
        "signature": "FilePath-\u003ePGPKey-\u003e[FilePath]-\u003eIO[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:sign",
      "description": {
        "fct-module": "Extra.GPGSign",
        "fct-package": "Extra",
        "fct-signature": "PGPKey'' -\u003e FilePath -\u003e IO FilePath",
        "fct-source": "src/Extra-GPGSign.html#sign",
        "fct-type": "function",
        "title": "sign"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra GPGSign",
        "module": "Extra.GPGSign",
        "name": "sign",
        "normalized": "PGPKey''-\u003eFilePath-\u003eIO FilePath",
        "package": "Extra",
        "partial": "",
        "signature": "PGPKey''-\u003eFilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-HughesPJ.html#",
      "description": {
        "fct-module": "Extra.HughesPJ",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-HughesPJ.html",
        "fct-type": "module",
        "title": "HughesPJ"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra HughesPJ",
        "module": "Extra.HughesPJ",
        "name": "HughesPJ",
        "normalized": "",
        "package": "Extra",
        "partial": "Hughes PJ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-HughesPJ.html#v:renderWidth",
      "description": {
        "fct-descr": "\u003cp\u003erender a Doc using the current terminal width\n\u003c/p\u003e",
        "fct-module": "Extra.HughesPJ",
        "fct-package": "Extra",
        "fct-signature": "Doc -\u003e IO String",
        "fct-source": "src/Extra-HughesPJ.html#renderWidth",
        "fct-type": "function",
        "title": "renderWidth"
      },
      "index": {
        "description": "render Doc using the current terminal width",
        "hierarchy": "Extra HughesPJ",
        "module": "Extra.HughesPJ",
        "name": "renderWidth",
        "normalized": "Doc-\u003eIO String",
        "package": "Extra",
        "partial": "Width",
        "signature": "Doc-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: CIO is deprecated\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fct-module": "Extra.IO",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Deprecated CIO is deprecated",
        "hierarchy": "Extra IO",
        "module": "Extra.IO",
        "name": "IO",
        "normalized": "",
        "package": "Extra",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ethis module provides a simple mechanism for adding IO operations\n to a queue and running them in a single thread. This is useful if\n the IO operations have side-effects which could collide if run from\n multiple threads. For example, creating an image thumbnail and\n storing it on disk, running latex, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.IOThread",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-IOThread.html",
        "fct-type": "module",
        "title": "IOThread"
      },
      "index": {
        "description": "this module provides simple mechanism for adding IO operations to queue and running them in single thread This is useful if the IO operations have side-effects which could collide if run from multiple threads For example creating an image thumbnail and storing it on disk running latex etc",
        "hierarchy": "Extra IOThread",
        "module": "Extra.IOThread",
        "name": "IOThread",
        "normalized": "",
        "package": "Extra",
        "partial": "IOThread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#t:IOThread",
      "description": {
        "fct-module": "Extra.IOThread",
        "fct-package": "Extra",
        "fct-signature": "newtype",
        "fct-source": "src/Extra-IOThread.html#IOThread",
        "fct-type": "newtype",
        "title": "IOThread"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra IOThread",
        "module": "Extra.IOThread",
        "name": "IOThread",
        "normalized": "",
        "package": "Extra",
        "partial": "IOThread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:IOThread",
      "description": {
        "fct-module": "Extra.IOThread",
        "fct-package": "Extra",
        "fct-signature": "IOThread (Chan (a, MVar (Either SomeException b)))",
        "fct-source": "src/Extra-IOThread.html#IOThread",
        "fct-type": "function",
        "title": "IOThread"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra IOThread",
        "module": "Extra.IOThread",
        "name": "IOThread",
        "normalized": "IOThread(Chan(a,MVar(Either SomeException b)))",
        "package": "Extra",
        "partial": "IOThread",
        "signature": "IOThread(Chan(a,MVar(Either SomeException b)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:ioRequest",
      "description": {
        "fct-descr": "\u003cp\u003eissue a request to the IO thread and get back the result\n if the thread function throws an exception \u003ccode\u003e\u003ca\u003eioRequest\u003c/a\u003e\u003c/code\u003e will rethrow the exception.\n\u003c/p\u003e",
        "fct-module": "Extra.IOThread",
        "fct-package": "Extra",
        "fct-signature": "IOThread a b-\u003e a-\u003e IO b",
        "fct-type": "function",
        "title": "ioRequest"
      },
      "index": {
        "description": "issue request to the IO thread and get back the result if the thread function throws an exception ioRequest will rethrow the exception",
        "hierarchy": "Extra IOThread",
        "module": "Extra.IOThread",
        "name": "ioRequest",
        "normalized": "IOThread a b-\u003ea-\u003eIO b",
        "package": "Extra",
        "partial": "Request",
        "signature": "IOThread a b-\u003ea-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:startIOThread",
      "description": {
        "fct-descr": "\u003cp\u003estart the IO thread.\n\u003c/p\u003e",
        "fct-module": "Extra.IOThread",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e IO b)-\u003e IO (ThreadId, IOThread a b)",
        "fct-type": "function",
        "title": "startIOThread"
      },
      "index": {
        "description": "start the IO thread",
        "hierarchy": "Extra IOThread",
        "module": "Extra.IOThread",
        "name": "startIOThread",
        "normalized": "(a-\u003eIO b)-\u003eIO(ThreadId,IOThread a b)",
        "package": "Extra",
        "partial": "IOThread",
        "signature": "(a-\u003eIO b)-\u003eIO(ThreadId,IOThread a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#",
      "description": {
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "List",
        "normalized": "",
        "package": "Extra",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:cartesianProduct",
      "description": {
        "fct-descr": "\u003cp\u003ecartesianProduct [[1,2,3], [4,5],[6]] -\u003e [[1,4,6],[1,5,6],[2,4,6],[2,5,6],[3,4,6],[3,5,6]]\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Extra-List.html#cartesianProduct",
        "fct-type": "function",
        "title": "cartesianProduct"
      },
      "index": {
        "description": "cartesianProduct",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "cartesianProduct",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "Extra",
        "partial": "Product",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:changePrefix",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the prefix of s, return Nothing if it doesn't match.\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e Maybe [a]",
        "fct-source": "src/Extra-List.html#changePrefix",
        "fct-type": "function",
        "title": "changePrefix"
      },
      "index": {
        "description": "Replace the prefix of return Nothing if it doesn match",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "changePrefix",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003eMaybe[a]",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:consperse",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use intercalate\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThe mighty consperse function - e.g. consperse \u003ca\u003e,\u003c/a\u003e [\u003ca\u003ea\u003c/a\u003e, \u003ca\u003eb\u003c/a\u003e] -\u003e \u003ca\u003ea,b\u003c/a\u003e\n consperse = MissingH.List.join\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Extra-List.html#consperse",
        "fct-type": "function",
        "title": "consperse"
      },
      "index": {
        "description": "Deprecated Use intercalate The mighty consperse function e.g consperse consperse MissingH.List.join",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "consperse",
        "normalized": "[a]-\u003e[[a]]-\u003e[a]",
        "package": "Extra",
        "partial": "",
        "signature": "[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:dropPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a prefix of s, return nothing if it doesn't match.\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe [a]",
        "fct-source": "src/Extra-List.html#dropPrefix",
        "fct-type": "function",
        "title": "dropPrefix"
      },
      "index": {
        "description": "Remove prefix of return nothing if it doesn match",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "dropPrefix",
        "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
        "package": "Extra",
        "partial": "Prefix",
        "signature": "[a]-\u003e[a]-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eLike maybe, but with empty vs. non-empty list\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "b -\u003e ([a] -\u003e b) -\u003e [a] -\u003e b",
        "fct-source": "src/Extra-List.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Like maybe but with empty vs non-empty list",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "empty",
        "normalized": "a-\u003e([b]-\u003ea)-\u003e[b]-\u003ea",
        "package": "Extra",
        "partial": "",
        "signature": "b-\u003e([a]-\u003eb)-\u003e[a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:isSublistOf",
      "description": {
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Extra-List.html#isSublistOf",
        "fct-type": "function",
        "title": "isSublistOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "isSublistOf",
        "normalized": "[a]-\u003e[a]-\u003eMaybe Int",
        "package": "Extra",
        "partial": "Sublist Of",
        "signature": "[a]-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:listIntersection",
      "description": {
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Extra-List.html#listIntersection",
        "fct-type": "function",
        "title": "listIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "listIntersection",
        "normalized": "[[a]]-\u003e[a]",
        "package": "Extra",
        "partial": "Intersection",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:partitionM",
      "description": {
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m ([a], [a])",
        "fct-source": "src/Extra-List.html#partitionM",
        "fct-type": "function",
        "title": "partitionM"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "partitionM",
        "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb([a],[a])",
        "package": "Extra",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003e[a]-\u003em([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:sortByMapped",
      "description": {
        "fct-descr": "\u003cp\u003eSort a list using the compare function on the list elements mapped\n over f.  This is like \u003ca\u003esortBy ( a b -\u003e compare (f a) (f b))\u003c/a\u003e\n except that f is applied O(n) times instead of O(n log n)\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e Ordering) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Extra-List.html#sortByMapped",
        "fct-type": "function",
        "title": "sortByMapped"
      },
      "index": {
        "description": "Sort list using the compare function on the list elements mapped over This is like sortBy compare except that is applied times instead of log",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "sortByMapped",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[a]",
        "package": "Extra",
        "partial": "By Mapped",
        "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:sortByMappedM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of sortByMapped\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e IO b) -\u003e (b -\u003e b -\u003e Ordering) -\u003e [a] -\u003e IO [a]",
        "fct-source": "src/Extra-List.html#sortByMappedM",
        "fct-type": "function",
        "title": "sortByMappedM"
      },
      "index": {
        "description": "Monadic version of sortByMapped",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "sortByMappedM",
        "normalized": "(a-\u003eIO b)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003eIO[a]",
        "package": "Extra",
        "partial": "By Mapped",
        "signature": "(a-\u003eIO b)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:surround",
      "description": {
        "fct-descr": "\u003cp\u003esurround each element of a list - e.g. surround \u003ca\u003e(\u003c/a\u003e \u003ca\u003e)\u003c/a\u003e [\u003ca\u003ea\u003c/a\u003e, \u003ca\u003eb\u003c/a\u003e] -\u003e [\u003ca\u003e(a)(b)\u003c/a\u003e]\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [a] -\u003e [[a]] -\u003e [a]",
        "fct-source": "src/Extra-List.html#surround",
        "fct-type": "function",
        "title": "surround"
      },
      "index": {
        "description": "surround each element of list e.g surround",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "surround",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]-\u003e[a]",
        "package": "Extra",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:wordsBy",
      "description": {
        "fct-descr": "\u003cp\u003eFIXME: implement for a string\n\u003c/p\u003e",
        "fct-module": "Extra.List",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Extra-List.html#wordsBy",
        "fct-type": "function",
        "title": "wordsBy"
      },
      "index": {
        "description": "FIXME implement for string",
        "hierarchy": "Extra List",
        "module": "Extra.List",
        "name": "wordsBy",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "Extra",
        "partial": "By",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#",
      "description": {
        "fct-module": "Extra.Lock",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Lock.html",
        "fct-type": "module",
        "title": "Lock"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Lock",
        "module": "Extra.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "Extra",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#v:awaitLock",
      "description": {
        "fct-descr": "\u003cp\u003eLike withLock, but instead of giving up immediately, try n times\n with a wait between each.\nawaitLock :: (MonadIO m) =\u003e Int -\u003e Int -\u003e FilePath -\u003e m a -\u003e m (Either Exception a)\n\u003c/p\u003e",
        "fct-module": "Extra.Lock",
        "fct-package": "Extra",
        "fct-signature": "a -\u003e Int -\u003e [Char] -\u003e IO b -\u003e IO b",
        "fct-source": "src/Extra-Lock.html#awaitLock",
        "fct-type": "function",
        "title": "awaitLock"
      },
      "index": {
        "description": "Like withLock but instead of giving up immediately try times with wait between each awaitLock MonadIO Int Int FilePath Either Exception",
        "hierarchy": "Extra Lock",
        "module": "Extra.Lock",
        "name": "awaitLock",
        "normalized": "a-\u003eInt-\u003e[Char]-\u003eIO b-\u003eIO b",
        "package": "Extra",
        "partial": "Lock",
        "signature": "a-\u003eInt-\u003e[Char]-\u003eIO b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#v:withLock",
      "description": {
        "fct-module": "Extra.Lock",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e m a -\u003e m a",
        "fct-source": "src/Extra-Lock.html#withLock",
        "fct-type": "function",
        "title": "withLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Lock",
        "module": "Extra.Lock",
        "name": "withLock",
        "normalized": "FilePath-\u003ea b-\u003ea b",
        "package": "Extra",
        "partial": "Lock",
        "signature": "FilePath-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#",
      "description": {
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Misc.html",
        "fct-type": "module",
        "title": "Misc"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "Misc",
        "normalized": "",
        "package": "Extra",
        "partial": "Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:canon",
      "description": {
        "fct-descr": "\u003cp\u003eWeak attempt at canonicalizing a file path.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Extra-Misc.html#canon",
        "fct-type": "function",
        "title": "canon"
      },
      "index": {
        "description": "Weak attempt at canonicalizing file path",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "canon",
        "normalized": "FilePath-\u003eFilePath",
        "package": "Extra",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:cd",
      "description": {
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/Extra-Misc.html#cd",
        "fct-type": "function",
        "title": "cd"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "cd",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "Extra",
        "partial": "",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:checkSuperUser",
      "description": {
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "IO Bool",
        "fct-source": "src/Extra-Misc.html#checkSuperUser",
        "fct-type": "function",
        "title": "checkSuperUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "checkSuperUser",
        "normalized": "",
        "package": "Extra",
        "partial": "Super User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:columns",
      "description": {
        "fct-descr": "\u003cp\u003ePad strings so the columns line up. The argument and return value\n elements are the rows of a table.  Do not pad the rightmost column.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "[[String]] -\u003e [[String]]",
        "fct-source": "src/Extra-Misc.html#columns",
        "fct-type": "function",
        "title": "columns"
      },
      "index": {
        "description": "Pad strings so the columns line up The argument and return value elements are the rows of table Do not pad the rightmost column",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "columns",
        "normalized": "[[String]]-\u003e[[String]]",
        "package": "Extra",
        "partial": "",
        "signature": "[[String]]-\u003e[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:justify",
      "description": {
        "fct-descr": "\u003cp\u003eGroup words into lines of length n or less.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e Int -\u003e [[String]]",
        "fct-source": "src/Extra-Misc.html#justify",
        "fct-type": "function",
        "title": "justify"
      },
      "index": {
        "description": "Group words into lines of length or less",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "justify",
        "normalized": "String-\u003eInt-\u003e[[String]]",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003eInt-\u003e[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:listDiff",
      "description": {
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Extra-Misc.html#listDiff",
        "fct-type": "function",
        "title": "listDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "listDiff",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "Extra",
        "partial": "Diff",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:listMap",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a list of (k, a) pairs into a map from k -\u003e [a].  The order of the elements in\n the a list is preserved.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "[(k, a)] -\u003e Map k [a]",
        "fct-source": "src/Extra-Misc.html#listMap",
        "fct-type": "function",
        "title": "listMap"
      },
      "index": {
        "description": "Turn list of pairs into map from The order of the elements in the list is preserved",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "listMap",
        "normalized": "[(a,b)]-\u003eMap a[b]",
        "package": "Extra",
        "partial": "Map",
        "signature": "[(k,a)]-\u003eMap k[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:mapSnd",
      "description": {
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "(b -\u003e c) -\u003e (a, b) -\u003e (a, c)",
        "fct-source": "src/Extra-Misc.html#mapSnd",
        "fct-type": "function",
        "title": "mapSnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "mapSnd",
        "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
        "package": "Extra",
        "partial": "Snd",
        "signature": "(b-\u003ec)-\u003e(a,b)-\u003e(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:md5sum",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRun md5sum on a file and return the resulting checksum as text.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/Extra-Misc.html#md5sum",
        "fct-type": "function",
        "title": "md5sum"
      },
      "index": {
        "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5 Run md5sum on file and return the resulting checksum as text",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "md5sum",
        "normalized": "FilePath-\u003eIO String",
        "package": "Extra",
        "partial": "",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:parentPath",
      "description": {
        "fct-descr": "\u003cp\u003edirname\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Extra-Misc.html#parentPath",
        "fct-type": "function",
        "title": "parentPath"
      },
      "index": {
        "description": "dirname",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "parentPath",
        "normalized": "FilePath-\u003eFilePath",
        "package": "Extra",
        "partial": "Path",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:read-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of read with a more helpful error message.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Extra-Misc.html#read%27",
        "fct-type": "function",
        "title": "read'"
      },
      "index": {
        "description": "version of read with more helpful error message",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "read'",
        "normalized": "String-\u003ea",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:sameInode",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to decide if two files have the same inode.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/Extra-Misc.html#sameInode",
        "fct-type": "function",
        "title": "sameInode"
      },
      "index": {
        "description": "Predicate to decide if two files have the same inode",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "sameInode",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
        "package": "Extra",
        "partial": "Inode",
        "signature": "FilePath-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:sameMd5sum",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to decide if two files have the same md5 checksum.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e FilePath -\u003e IO Bool",
        "fct-source": "src/Extra-Misc.html#sameMd5sum",
        "fct-type": "function",
        "title": "sameMd5sum"
      },
      "index": {
        "description": "Predicate to decide if two files have the same md5 checksum",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "sameMd5sum",
        "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
        "package": "Extra",
        "partial": "Md",
        "signature": "FilePath-\u003eFilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:tarDir",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a tarball, return the name of the top directory.\n\u003c/p\u003e",
        "fct-module": "Extra.Misc",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO (Maybe String)",
        "fct-source": "src/Extra-Misc.html#tarDir",
        "fct-type": "function",
        "title": "tarDir"
      },
      "index": {
        "description": "Given tarball return the name of the top directory",
        "hierarchy": "Extra Misc",
        "module": "Extra.Misc",
        "name": "tarDir",
        "normalized": "FilePath-\u003eIO(Maybe String)",
        "package": "Extra",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Net.html#",
      "description": {
        "fct-module": "Extra.Net",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Net.html",
        "fct-type": "module",
        "title": "Net"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Net",
        "module": "Extra.Net",
        "name": "Net",
        "normalized": "",
        "package": "Extra",
        "partial": "Net",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Net.html#v:webServerDirectoryContents",
      "description": {
        "fct-descr": "\u003cp\u003eParse the text returned when a directory is listed by a web\n server.  This is currently only known to work with Apache.\n NOTE: there is a second copy of this function in\n debian:Debian.URI. Please update both locations if you make\n changes.\n\u003c/p\u003e",
        "fct-module": "Extra.Net",
        "fct-package": "Extra",
        "fct-signature": "ByteString -\u003e [String]",
        "fct-source": "src/Extra-Net.html#webServerDirectoryContents",
        "fct-type": "function",
        "title": "webServerDirectoryContents"
      },
      "index": {
        "description": "Parse the text returned when directory is listed by web server This is currently only known to work with Apache NOTE there is second copy of this function in debian Debian.URI Please update both locations if you make changes",
        "hierarchy": "Extra Net",
        "module": "Extra.Net",
        "name": "webServerDirectoryContents",
        "normalized": "ByteString-\u003e[String]",
        "package": "Extra",
        "partial": "Server Directory Contents",
        "signature": "ByteString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#",
      "description": {
        "fct-module": "Extra.SSH",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-SSH.html",
        "fct-type": "module",
        "title": "SSH"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra SSH",
        "module": "Extra.SSH",
        "name": "SSH",
        "normalized": "",
        "package": "Extra",
        "partial": "SSH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshCopy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the ssh configuration from $HOME to the /root directory of a\n changeroot.\n\u003c/p\u003e",
        "fct-module": "Extra.SSH",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e IO ExitCode",
        "fct-source": "src/Extra-SSH.html#sshCopy",
        "fct-type": "function",
        "title": "sshCopy"
      },
      "index": {
        "description": "Copy the ssh configuration from HOME to the root directory of changeroot",
        "hierarchy": "Extra SSH",
        "module": "Extra.SSH",
        "name": "sshCopy",
        "normalized": "FilePath-\u003eIO ExitCode",
        "package": "Extra",
        "partial": "Copy",
        "signature": "FilePath-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshExportDeprecated",
      "description": {
        "fct-descr": "\u003cp\u003eSet up access to destination (user@host).\n\u003c/p\u003e",
        "fct-module": "Extra.SSH",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e Maybe Int -\u003e IO (Either String ())",
        "fct-source": "src/Extra-SSH.html#sshExportDeprecated",
        "fct-type": "function",
        "title": "sshExportDeprecated"
      },
      "index": {
        "description": "Set up access to destination user@host",
        "hierarchy": "Extra SSH",
        "module": "Extra.SSH",
        "name": "sshExportDeprecated",
        "normalized": "String-\u003eMaybe Int-\u003eIO(Either String())",
        "package": "Extra",
        "partial": "Export Deprecated",
        "signature": "String-\u003eMaybe Int-\u003eIO(Either String())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshVerify",
      "description": {
        "fct-descr": "\u003cp\u003eSee if we already have access to the destination (user@host).\n\u003c/p\u003e",
        "fct-module": "Extra.SSH",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e Maybe Int -\u003e IO Bool",
        "fct-source": "src/Extra-SSH.html#sshVerify",
        "fct-type": "function",
        "title": "sshVerify"
      },
      "index": {
        "description": "See if we already have access to the destination user@host",
        "hierarchy": "Extra SSH",
        "module": "Extra.SSH",
        "name": "sshVerify",
        "normalized": "String-\u003eMaybe Int-\u003eIO Bool",
        "package": "Extra",
        "partial": "Verify",
        "signature": "String-\u003eMaybe Int-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#",
      "description": {
        "fct-module": "Extra.Terminal",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Terminal.html",
        "fct-type": "module",
        "title": "Terminal"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Terminal",
        "module": "Extra.Terminal",
        "name": "Terminal",
        "normalized": "",
        "package": "Extra",
        "partial": "Terminal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:c_get_window_size",
      "description": {
        "fct-module": "Extra.Terminal",
        "fct-package": "Extra",
        "fct-signature": "IO CLong",
        "fct-source": "src/Extra-Terminal.html#c_get_window_size",
        "fct-type": "function",
        "title": "c_get_window_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Terminal",
        "module": "Extra.Terminal",
        "name": "c_get_window_size",
        "normalized": "",
        "package": "Extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:getWidth",
      "description": {
        "fct-module": "Extra.Terminal",
        "fct-package": "Extra",
        "fct-signature": "IO (Maybe Int)",
        "fct-source": "src/Extra-Terminal.html#getWidth",
        "fct-type": "function",
        "title": "getWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Terminal",
        "module": "Extra.Terminal",
        "name": "getWidth",
        "normalized": "",
        "package": "Extra",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:getWinSize",
      "description": {
        "fct-module": "Extra.Terminal",
        "fct-package": "Extra",
        "fct-signature": "IO (Int, Int)",
        "fct-source": "src/Extra-Terminal.html#getWinSize",
        "fct-type": "function",
        "title": "getWinSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Terminal",
        "module": "Extra.Terminal",
        "name": "getWinSize",
        "normalized": "IO(Int,Int)",
        "package": "Extra",
        "partial": "Win Size",
        "signature": "IO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#",
      "description": {
        "fct-module": "Extra.Time",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Time",
        "module": "Extra.Time",
        "name": "Time",
        "normalized": "",
        "package": "Extra",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#v:formatDebianDate",
      "description": {
        "fct-module": "Extra.Time",
        "fct-package": "Extra",
        "fct-signature": "t -\u003e [Char]",
        "fct-source": "src/Extra-Time.html#formatDebianDate",
        "fct-type": "function",
        "title": "formatDebianDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Time",
        "module": "Extra.Time",
        "name": "formatDebianDate",
        "normalized": "a-\u003e[Char]",
        "package": "Extra",
        "partial": "Debian Date",
        "signature": "t-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#v:myTimeDiffToString",
      "description": {
        "fct-module": "Extra.Time",
        "fct-package": "Extra",
        "fct-signature": "TimeDiff -\u003e [Char]",
        "fct-source": "src/Extra-Time.html#myTimeDiffToString",
        "fct-type": "function",
        "title": "myTimeDiffToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra Time",
        "module": "Extra.Time",
        "name": "myTimeDiffToString",
        "normalized": "TimeDiff-\u003e[Char]",
        "package": "Extra",
        "partial": "Time Diff To String",
        "signature": "TimeDiff-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake URI an instance of Read and Ord, and add functions to\n manipulate the uriQuery.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-URI.html",
        "fct-type": "module",
        "title": "URI"
      },
      "index": {
        "description": "Make URI an instance of Read and Ord and add functions to manipulate the uriQuery",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "URI",
        "normalized": "",
        "package": "Extra",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:deleteURIQueryAttr",
      "description": {
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URI.html#deleteURIQueryAttr",
        "fct-type": "function",
        "title": "deleteURIQueryAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "deleteURIQueryAttr",
        "normalized": "String-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "URIQuery Attr",
        "signature": "String-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:modifyURIQuery",
      "description": {
        "fct-descr": "\u003cp\u003eModify a URI's query by applying a function to the pairs\n\u003c/p\u003e",
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "([(String, String)] -\u003e [(String, String)]) -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URI.html#modifyURIQuery",
        "fct-type": "function",
        "title": "modifyURIQuery"
      },
      "index": {
        "description": "Modify URI query by applying function to the pairs",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "modifyURIQuery",
        "normalized": "([(String,String)]-\u003e[(String,String)])-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "URIQuery",
        "signature": "([(String,String)]-\u003e[(String,String)])-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:parseURIQuery",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the pairs in a URI's query\n\u003c/p\u003e",
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "URI -\u003e [(String, String)]",
        "fct-source": "src/Extra-URI.html#parseURIQuery",
        "fct-type": "function",
        "title": "parseURIQuery"
      },
      "index": {
        "description": "Return the pairs in URI query",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "parseURIQuery",
        "normalized": "URI-\u003e[(String,String)]",
        "package": "Extra",
        "partial": "URIQuery",
        "signature": "URI-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:relURI",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a relative URI with the given query.\n\u003c/p\u003e",
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "FilePath -\u003e [(String, String)] -\u003e URI",
        "fct-source": "src/Extra-URI.html#relURI",
        "fct-type": "function",
        "title": "relURI"
      },
      "index": {
        "description": "Create relative URI with the given query",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "relURI",
        "normalized": "FilePath-\u003e[(String,String)]-\u003eURI",
        "package": "Extra",
        "partial": "URI",
        "signature": "FilePath-\u003e[(String,String)]-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIPort",
      "description": {
        "fct-descr": "\u003cp\u003eSet the port number in the URI authority, creating it if necessary.\n\u003c/p\u003e",
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "[Char] -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URI.html#setURIPort",
        "fct-type": "function",
        "title": "setURIPort"
      },
      "index": {
        "description": "Set the port number in the URI authority creating it if necessary",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "setURIPort",
        "normalized": "[Char]-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "URIPort",
        "signature": "[Char]-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIQuery",
      "description": {
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "[(String, String)] -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URI.html#setURIQuery",
        "fct-type": "function",
        "title": "setURIQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "setURIQuery",
        "normalized": "[(String,String)]-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "URIQuery",
        "signature": "[(String,String)]-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIQueryAttr",
      "description": {
        "fct-module": "Extra.URI",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e String -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URI.html#setURIQueryAttr",
        "fct-type": "function",
        "title": "setURIQueryAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra URI",
        "module": "Extra.URI",
        "name": "setURIQueryAttr",
        "normalized": "String-\u003eString-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "URIQuery Attr",
        "signature": "String-\u003eString-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#",
      "description": {
        "fct-module": "Extra.URIQuery",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Extra-URIQuery.html",
        "fct-type": "module",
        "title": "URIQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Extra URIQuery",
        "module": "Extra.URIQuery",
        "name": "URIQuery",
        "normalized": "",
        "package": "Extra",
        "partial": "URIQuery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an attribute from one query to another\n\u003c/p\u003e",
        "fct-module": "Extra.URIQuery",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e URI -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URIQuery.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy an attribute from one query to another",
        "hierarchy": "Extra URIQuery",
        "module": "Extra.URIQuery",
        "name": "copy",
        "normalized": "String-\u003eURI-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003eURI-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:del",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a query attribute with Nothing.\n\u003c/p\u003e",
        "fct-module": "Extra.URIQuery",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URIQuery.html#del",
        "fct-type": "function",
        "title": "del"
      },
      "index": {
        "description": "Replace query attribute with Nothing",
        "hierarchy": "Extra URIQuery",
        "module": "Extra.URIQuery",
        "name": "del",
        "normalized": "String-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModify an individual URI query attributes.\n\u003c/p\u003e",
        "fct-module": "Extra.URIQuery",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e (Maybe String -\u003e Maybe String) -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URIQuery.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modify an individual URI query attributes",
        "hierarchy": "Extra URIQuery",
        "module": "Extra.URIQuery",
        "name": "modify",
        "normalized": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a query attribute with something.\n\u003c/p\u003e",
        "fct-module": "Extra.URIQuery",
        "fct-package": "Extra",
        "fct-signature": "String -\u003e String -\u003e URI -\u003e URI",
        "fct-source": "src/Extra-URIQuery.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Replace query attribute with something",
        "hierarchy": "Extra URIQuery",
        "module": "Extra.URIQuery",
        "name": "put",
        "normalized": "String-\u003eString-\u003eURI-\u003eURI",
        "package": "Extra",
        "partial": "",
        "signature": "String-\u003eString-\u003eURI-\u003eURI"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QUnit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome glue code for running QuickCheck tests using the HUnit framework.\n\u003c/p\u003e\u003cp\u003eThis module provides an instance of Test.HUnit.Testable for\n Test.QuickCheck.Property, which makes it trivial to use QuickCheck\n properties in the HUnit framework:\n\u003c/p\u003e\u003cpre\u003e\n   import Test.HUnit\n   import Test.HUnit.Text\n   import Test.QuickCheck\n   import Test.QUnit\n\nrunTestTT $ (\"x /= x\" ~: property (x -\u003e x /= x))\n\u003c/pre\u003e\u003cp\u003eThe QuickCheck Property will be run using\n Test.QuickCheck.defaultConfig.  If you need to specific an\n alternate config, then use \u003ccode\u003e\u003ca\u003etestQuickCheck\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e\n   runTestTT $ (\"x /= x\" ~: testQuickCheck myConfig (x -\u003e x /= x))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.QUnit",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Test-QUnit.html",
        "fct-type": "module",
        "title": "QUnit"
      },
      "index": {
        "description": "Some glue code for running QuickCheck tests using the HUnit framework This module provides an instance of Test.HUnit.Testable for Test.QuickCheck.Property which makes it trivial to use QuickCheck properties in the HUnit framework import Test.HUnit import Test.HUnit.Text import Test.QuickCheck import Test.QUnit runTestTT property The QuickCheck Property will be run using Test.QuickCheck.defaultConfig If you need to specific an alternate config then use testQuickCheck like this runTestTT testQuickCheck myConfig",
        "hierarchy": "Test QUnit",
        "module": "Test.QUnit",
        "name": "QUnit",
        "normalized": "",
        "package": "Extra",
        "partial": "QUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QUnit.html#v:testQuickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eturns the quickcheck test into an hunit test\n\u003c/p\u003e\u003cp\u003eUse this if you want to provide a custom \u003ccode\u003eConfig\u003c/code\u003e instead of\n \u003ccode\u003edefaultConfig\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QUnit",
        "fct-package": "Extra",
        "fct-signature": "Args-\u003e a-\u003e Test",
        "fct-type": "function",
        "title": "testQuickCheck"
      },
      "index": {
        "description": "turns the quickcheck test into an hunit test Use this if you want to provide custom Config instead of defaultConfig",
        "hierarchy": "Test QUnit",
        "module": "Test.QUnit",
        "name": "testQuickCheck",
        "normalized": "Args-\u003ea-\u003eTest",
        "package": "Extra",
        "partial": "Quick Check",
        "signature": "Args-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#",
      "description": {
        "fct-module": "Test.QuickCheck.Properties",
        "fct-package": "Extra",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Properties.html",
        "fct-type": "module",
        "title": "Properties"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Properties",
        "module": "Test.QuickCheck.Properties",
        "name": "Properties",
        "normalized": "",
        "package": "Extra",
        "partial": "Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#v:isIdempotent",
      "description": {
        "fct-module": "Test.QuickCheck.Properties",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e a) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Properties.html#isIdempotent",
        "fct-type": "function",
        "title": "isIdempotent"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Properties",
        "module": "Test.QuickCheck.Properties",
        "name": "isIdempotent",
        "normalized": "(a-\u003ea)-\u003eProperty",
        "package": "Extra",
        "partial": "Idempotent",
        "signature": "(a-\u003ea)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#v:isIdempotentBy",
      "description": {
        "fct-module": "Test.QuickCheck.Properties",
        "fct-package": "Extra",
        "fct-signature": "(a -\u003e a) -\u003e Gen a -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Properties.html#isIdempotentBy",
        "fct-type": "function",
        "title": "isIdempotentBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Properties",
        "module": "Test.QuickCheck.Properties",
        "name": "isIdempotentBy",
        "normalized": "(a-\u003ea)-\u003eGen a-\u003eProperty",
        "package": "Extra",
        "partial": "Idempotent By",
        "signature": "(a-\u003ea)-\u003eGen a-\u003eProperty"
      }
    }
  }
]