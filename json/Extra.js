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
        "word": "Extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Bool",
          "name": "Bool",
          "package": "Extra",
          "source": "src/Extra-Bool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Bool",
          "module": "Extra.Bool",
          "name": "Bool",
          "package": "Extra",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Bool",
          "name": "cond",
          "package": "Extra",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Extra-Bool.html#cond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Bool",
          "module": "Extra.Bool",
          "name": "cond",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "Extra",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Bool.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use System.Unix.QIO in Unixutils.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCIO is a type class for the TIO monad, which tracks the cursor\n position of the console so that indentation and prefixes can be\n added to the output.  TIO also has a style component which lets you\n control the output verbosity and the appearance of the prefix.\n There is an instance for the regular IO monad which doesn't use any\n of these features, to allow functions which do not use the TIO\n monad call functions in the Debian library.\n\u003c/p\u003e\u003cp\u003eNOTE: a copy of this library is in the Extra library as\n well. Please update both locations.\n\u003c/p\u003e\u003cp\u003eThis code is provided for backwards compatibility, I don't\n endorse its use in new projects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.CIO",
          "name": "CIO",
          "package": "Extra",
          "source": "src/Extra-CIO.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use System.Unix.QIO in Unixutils CIO is type class for the TIO monad which tracks the cursor position of the console so that indentation and prefixes can be added to the output TIO also has style component which lets you control the output verbosity and the appearance of the prefix There is an instance for the regular IO monad which doesn use any of these features to allow functions which do not use the TIO monad call functions in the Debian library NOTE copy of this library is in the Extra library as well Please update both locations This code is provided for backwards compatibility don endorse its use in new projects",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "CIO",
          "package": "Extra",
          "partial": "CIO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass representing ways of doing console (terminal?) output.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "CIO",
          "package": "Extra",
          "source": "src/Extra-CIO.html#CIO",
          "type": "class"
        },
        "index": {
          "description": "Class representing ways of doing console terminal output",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "CIO",
          "package": "Extra",
          "partial": "CIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#t:CIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record used to hold the output style information for a task.\n This The prefixes that will appear at the beginning of each line,\n and the desired verbosity level.  Suggested verbosity level policy:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e -1: No output of any kind, as if you were directing all output to \u003cem\u003edev\u003c/em\u003enull\n\u003c/li\u003e\u003cli\u003e 0: Error output only, suitable for a run whose log you might examine later\n\u003c/li\u003e\u003cli\u003e 1: casual progress reporting - if you were running on a console but didn't\n      expect anything to go wrong\n\u003c/li\u003e\u003cli\u003e 2: detailed progress reporting - show more progress, particularly things\n      that might fail during the normal operation of the autobuilder: patches\n      that fail to apply, dpkg-buildpackage runs that return errors, etc.\n\u003c/li\u003e\u003cli\u003e 3: Debugging output - use this level or higher if you suspect the\n      autobuilder itself is failing, or you are doing development work on\n      the autobuilder.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Extra.CIO",
          "name": "TStyle",
          "package": "Extra",
          "source": "src/Extra-CIO.html#TStyle",
          "type": "data"
        },
        "index": {
          "description": "record used to hold the output style information for task This The prefixes that will appear at the beginning of each line and the desired verbosity level Suggested verbosity level policy No output of any kind as if you were directing all output to dev null Error output only suitable for run whose log you might examine later casual progress reporting if you were running on console but didn expect anything to go wrong detailed progress reporting show more progress particularly things that might fail during the normal operation of the autobuilder patches that fail to apply dpkg-buildpackage runs that return errors etc Debugging output use this level or higher if you suspect the autobuilder itself is failing or you are doing development work on the autobuilder",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "TStyle",
          "package": "Extra",
          "partial": "TStyle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#t:TStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "TStyle",
          "package": "Extra",
          "signature": "TStyle",
          "source": "src/Extra-CIO.html#TStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "TStyle",
          "package": "Extra",
          "partial": "TStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:TStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend some text to the prefix.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "addPrefix",
          "package": "Extra",
          "signature": "String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#addPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prepend some text to the prefix",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "addPrefix",
          "normalized": "String-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "String-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch to prefixed mode and modify both the stdout and stderr prefixes.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "addPrefixes",
          "package": "Extra",
          "signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#addPrefixes",
          "type": "function"
        },
        "index": {
          "description": "Switch to prefixed mode and modify both the stdout and stderr prefixes",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "addPrefixes",
          "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefixes",
          "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "addVerbosity",
          "package": "Extra",
          "signature": "Int -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#addVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "addVerbosity",
          "normalized": "Int-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Verbosity",
          "signature": "Int-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:addVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend some text to the prefix.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "appPrefix",
          "package": "Extra",
          "signature": "String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#appPrefix",
          "type": "function"
        },
        "index": {
          "description": "Append some text to the prefix",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "appPrefix",
          "normalized": "String-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "String-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:appPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "appPrefixes",
          "package": "Extra",
          "signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#appPrefixes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "appPrefixes",
          "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefixes",
          "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:appPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "blue",
          "package": "Extra",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Extra-CIO.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "blue",
          "normalized": "[Char]-\u003e[Char]",
          "package": "Extra",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehBOL to stdout.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "bol",
          "package": "Extra",
          "signature": "m ()",
          "source": "src/Extra-CIO.html#bol",
          "type": "function"
        },
        "index": {
          "description": "hBOL to stdout",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "bol",
          "normalized": "a()",
          "package": "Extra",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:bol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "defStyle",
          "package": "Extra",
          "signature": "TStyle",
          "source": "src/Extra-CIO.html#defStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "defStyle",
          "package": "Extra",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:defStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehBOL to stderr.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "eBOL",
          "package": "Extra",
          "signature": "m ()",
          "source": "src/Extra-CIO.html#eBOL",
          "type": "function"
        },
        "index": {
          "description": "hBOL to stderr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "eBOL",
          "normalized": "a()",
          "package": "Extra",
          "partial": "BOL",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:eBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to stderr.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "ePutChar",
          "package": "Extra",
          "signature": "Char -\u003e m ()",
          "source": "src/Extra-CIO.html#ePutChar",
          "type": "function"
        },
        "index": {
          "description": "Write character to stderr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "ePutChar",
          "normalized": "Char-\u003ea()",
          "package": "Extra",
          "partial": "Put Char",
          "signature": "Char-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to stderr.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "ePutStr",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#ePutStr",
          "type": "function"
        },
        "index": {
          "description": "Write string to stderr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "ePutStr",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Put Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehPutStrBl to stderr.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "ePutStrBl",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#ePutStrBl",
          "type": "function"
        },
        "index": {
          "description": "hPutStrBl to stderr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "ePutStrBl",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Bl",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehPutStrLn to stderr.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "ePutStrLn",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#ePutStrLn",
          "type": "function"
        },
        "index": {
          "description": "hPutStrLn to stderr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "ePutStrLn",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Ln",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ePutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \"effective verbosity\" for a task.  If the argument\n is 2 it means the caller is computing ev for a task that\n normally does output when the verbosity level is 2 or higher.\n If the verbosity of the current style is 1, then the ev or\n effective verbosity is 2-1 = -1, so the output should be\n quieter.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "ev",
          "package": "Extra",
          "signature": "Int -\u003e m Int",
          "source": "src/Extra-CIO.html#ev",
          "type": "method"
        },
        "index": {
          "description": "Return the effective verbosity for task If the argument is it means the caller is computing ev for task that normally does output when the verbosity level is or higher If the verbosity of the current style is then the ev or effective verbosity is so the output should be quieter",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "ev",
          "normalized": "Int-\u003ea Int",
          "package": "Extra",
          "signature": "Int-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:ev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "green",
          "package": "Extra",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Extra-CIO.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "green",
          "normalized": "[Char]-\u003e[Char]",
          "package": "Extra",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we are not already at the beginning of a line, move the cursor\n to the beginning of the next one.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hBOL",
          "package": "Extra",
          "signature": "Handle -\u003e m ()",
          "source": "src/Extra-CIO.html#hBOL",
          "type": "method"
        },
        "index": {
          "description": "If we are not already at the beginning of line move the cursor to the beginning of the next one",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hBOL",
          "normalized": "Handle-\u003ea()",
          "package": "Extra",
          "partial": "BOL",
          "signature": "Handle-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "hColor",
          "package": "Extra",
          "signature": "Handle -\u003e [Char] -\u003e [Char]",
          "source": "src/Extra-CIO.html#hColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hColor",
          "normalized": "Handle-\u003e[Char]-\u003e[Char]",
          "package": "Extra",
          "partial": "Color",
          "signature": "Handle-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current prefix for a particular handle\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hGetPrefix",
          "package": "Extra",
          "signature": "Handle -\u003e TStyle -\u003e String",
          "source": "src/Extra-CIO.html#hGetPrefix",
          "type": "function"
        },
        "index": {
          "description": "Get the current prefix for particular handle",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hGetPrefix",
          "normalized": "Handle-\u003eTStyle-\u003eString",
          "package": "Extra",
          "partial": "Get Prefix",
          "signature": "Handle-\u003eTStyle-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hGetPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer-handle prefix\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hPrefix",
          "package": "Extra",
          "signature": "[(Handle, String)]",
          "source": "src/Extra-CIO.html#TStyle",
          "type": "function"
        },
        "index": {
          "description": "Per-handle prefix",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hPrefix",
          "normalized": "[(Handle,String)]",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "[(Handle,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hPutChar",
          "package": "Extra",
          "signature": "Handle -\u003e Char -\u003e m ()",
          "source": "src/Extra-CIO.html#hPutChar",
          "type": "function"
        },
        "index": {
          "description": "Write character",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hPutChar",
          "normalized": "Handle-\u003eChar-\u003ea()",
          "package": "Extra",
          "partial": "Put Char",
          "signature": "Handle-\u003eChar-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite output to a handle.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hPutStr",
          "package": "Extra",
          "signature": "Handle -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#hPutStr",
          "type": "method"
        },
        "index": {
          "description": "Write output to handle",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to beginning of next line (if necessary) and output a string.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hPutStrBl",
          "package": "Extra",
          "signature": "Handle -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#hPutStrBl",
          "type": "function"
        },
        "index": {
          "description": "Move to beginning of next line if necessary and output string",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hPutStrBl",
          "normalized": "Handle-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Bl",
          "signature": "Handle-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a newline character and a string.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "hPutStrLn",
          "package": "Extra",
          "signature": "Handle -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write newline character and string",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "magenta",
          "package": "Extra",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Extra-CIO.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "magenta",
          "normalized": "[Char]-\u003e[Char]",
          "package": "Extra",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd this string at the beginning of each line\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "prefix",
          "package": "Extra",
          "signature": "String",
          "source": "src/Extra-CIO.html#TStyle",
          "type": "function"
        },
        "index": {
          "description": "Add this string at the beginning of each line",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "prefix",
          "package": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to stdout.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "putChar",
          "package": "Extra",
          "signature": "Char -\u003e m ()",
          "source": "src/Extra-CIO.html#putChar",
          "type": "function"
        },
        "index": {
          "description": "Write character to stdout",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "putChar",
          "normalized": "Char-\u003ea()",
          "package": "Extra",
          "partial": "Char",
          "signature": "Char-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to stdout.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "putStr",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write string to stdout",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "putStr",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehPutStrBl to stdout.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "putStrBl",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#putStrBl",
          "type": "function"
        },
        "index": {
          "description": "hPutStrBl to stdout",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "putStrBl",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Str Bl",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehPutStrLn to stdout.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "putStrLn",
          "package": "Extra",
          "signature": "String -\u003e m ()",
          "source": "src/Extra-CIO.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "hPutStrLn to stdout",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "putStrLn",
          "normalized": "String-\u003ea()",
          "package": "Extra",
          "partial": "Str Ln",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "red",
          "package": "Extra",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Extra-CIO.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "red",
          "normalized": "[Char]-\u003e[Char]",
          "package": "Extra",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the output style for a handle to prefixed.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "setPrefix",
          "package": "Extra",
          "signature": "String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#setPrefix",
          "type": "function"
        },
        "index": {
          "description": "Set the output style for handle to prefixed",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "setPrefix",
          "normalized": "String-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "String-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the output style for the stdout and stderr handle to prefixed,\n using whatever prefixes were most recently set (default is [1] and [2].)\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "setPrefixes",
          "package": "Extra",
          "signature": "String -\u003e String -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#setPrefixes",
          "type": "function"
        },
        "index": {
          "description": "Set the output style for the stdout and stderr handle to prefixed using whatever prefixes were most recently set default is and",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "setPrefixes",
          "normalized": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Prefixes",
          "signature": "String-\u003eString-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current output style.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "setStyle",
          "package": "Extra",
          "signature": "(TStyle -\u003e TStyle) -\u003e m a -\u003e m a",
          "source": "src/Extra-CIO.html#setStyle",
          "type": "method"
        },
        "index": {
          "description": "Modify the current output style",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "setStyle",
          "normalized": "(TStyle-\u003eTStyle)-\u003ea b-\u003ea b",
          "package": "Extra",
          "partial": "Style",
          "signature": "(TStyle-\u003eTStyle)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "setVerbosity",
          "package": "Extra",
          "signature": "Int -\u003e TStyle -\u003e TStyle",
          "source": "src/Extra-CIO.html#setVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "setVerbosity",
          "normalized": "Int-\u003eTStyle-\u003eTStyle",
          "package": "Extra",
          "partial": "Verbosity",
          "signature": "Int-\u003eTStyle-\u003eTStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:setVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of try for this monad\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "tryCIO",
          "package": "Extra",
          "signature": "m a -\u003e m (Either SomeException a)",
          "source": "src/Extra-CIO.html#tryCIO",
          "type": "method"
        },
        "index": {
          "description": "Implementation of try for this monad",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "tryCIO",
          "normalized": "a b-\u003ea(Either SomeException b)",
          "package": "Extra",
          "partial": "CIO",
          "signature": "m a-\u003em(Either SomeException a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:tryCIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of BOL\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vBOL",
          "package": "Extra",
          "signature": "Int -\u003e m ()",
          "source": "src/Extra-CIO.html#vBOL",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of BOL",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vBOL",
          "normalized": "Int-\u003ea()",
          "package": "Extra",
          "partial": "BOL",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of eBOL\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vEBOL",
          "package": "Extra",
          "signature": "Int -\u003e m ()",
          "source": "src/Extra-CIO.html#vEBOL",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of eBOL",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vEBOL",
          "normalized": "Int-\u003ea()",
          "package": "Extra",
          "partial": "EBOL",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of ePutChar\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vEPutChar",
          "package": "Extra",
          "signature": "Int -\u003e Char -\u003e m ()",
          "source": "src/Extra-CIO.html#vEPutChar",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of ePutChar",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vEPutChar",
          "normalized": "Int-\u003eChar-\u003ea()",
          "package": "Extra",
          "partial": "EPut Char",
          "signature": "Int-\u003eChar-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of ePutStr\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vEPutStr",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vEPutStr",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of ePutStr",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vEPutStr",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "EPut Str",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of ePutStrBl\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vEPutStrBl",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vEPutStrBl",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of ePutStrBl",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vEPutStrBl",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "EPut Str Bl",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of ePutStrLn\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vEPutStrLn",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vEPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of ePutStrLn",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vEPutStrLn",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "EPut Str Ln",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vEPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.CIO",
          "name": "vHBOL",
          "package": "Extra",
          "signature": "Handle -\u003e Int -\u003e m ()",
          "source": "src/Extra-CIO.html#vHBOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vHBOL",
          "normalized": "Handle-\u003eInt-\u003ea()",
          "package": "Extra",
          "partial": "HBOL",
          "signature": "Handle-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of hPutChar.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vHPutChar",
          "package": "Extra",
          "signature": "Handle -\u003e Int -\u003e Char -\u003e m ()",
          "source": "src/Extra-CIO.html#vHPutChar",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of hPutChar",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vHPutChar",
          "normalized": "Handle-\u003eInt-\u003eChar-\u003ea()",
          "package": "Extra",
          "partial": "HPut Char",
          "signature": "Handle-\u003eInt-\u003eChar-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of hPutStrBl\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vHPutStrBl",
          "package": "Extra",
          "signature": "Handle -\u003e Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vHPutStrBl",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of hPutStrBl",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vHPutStrBl",
          "normalized": "Handle-\u003eInt-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "HPut Str Bl",
          "signature": "Handle-\u003eInt-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of hPutStrLn.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vHPutStrLn",
          "package": "Extra",
          "signature": "Handle -\u003e Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vHPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of hPutStrLn",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vHPutStrLn",
          "normalized": "Handle-\u003eInt-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "HPut Str Ln",
          "signature": "Handle-\u003eInt-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vHPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of putChar\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vPutChar",
          "package": "Extra",
          "signature": "Int -\u003e Char -\u003e m ()",
          "source": "src/Extra-CIO.html#vPutChar",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of putChar",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vPutChar",
          "normalized": "Int-\u003eChar-\u003ea()",
          "package": "Extra",
          "partial": "Put Char",
          "signature": "Int-\u003eChar-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to stdout depending on the verbosity level.\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vPutStr",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vPutStr",
          "type": "function"
        },
        "index": {
          "description": "Write string to stdout depending on the verbosity level",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vPutStr",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of putStrBl\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vPutStrBl",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vPutStrBl",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of putStrBl",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vPutStrBl",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Bl",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStrBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity controlled version of putStrLn\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "vPutStrLn",
          "package": "Extra",
          "signature": "Int -\u003e String -\u003e m ()",
          "source": "src/Extra-CIO.html#vPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Verbosity controlled version of putStrLn",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "vPutStrLn",
          "normalized": "Int-\u003eString-\u003ea()",
          "package": "Extra",
          "partial": "Put Str Ln",
          "signature": "Int-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:vPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore v functions whose argument is more than this\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "verbosity",
          "package": "Extra",
          "signature": "Int",
          "source": "src/Extra-CIO.html#TStyle",
          "type": "function"
        },
        "index": {
          "description": "Ignore functions whose argument is more than this",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "verbosity",
          "package": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a new style for the TIO action\n\u003c/p\u003e",
          "module": "Extra.CIO",
          "name": "withStyle",
          "package": "Extra",
          "signature": "TStyle -\u003e m a -\u003e m a",
          "source": "src/Extra-CIO.html#withStyle",
          "type": "function"
        },
        "index": {
          "description": "Use new style for the TIO action",
          "hierarchy": "Extra CIO",
          "module": "Extra.CIO",
          "name": "withStyle",
          "normalized": "TStyle-\u003ea b-\u003ea b",
          "package": "Extra",
          "partial": "Style",
          "signature": "TStyle-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-CIO.html#v:withStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Either",
          "name": "Either",
          "package": "Extra",
          "source": "src/Extra-Either.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "Either",
          "package": "Extra",
          "partial": "Either",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list of eithers into an either of lists\n\u003c/p\u003e",
          "module": "Extra.Either",
          "name": "concatEithers",
          "package": "Extra",
          "signature": "[Either a b] -\u003e Either [a] [b]",
          "source": "src/Extra-Either.html#concatEithers",
          "type": "function"
        },
        "index": {
          "description": "Turn list of eithers into an either of lists",
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "concatEithers",
          "normalized": "[Either a b]-\u003eEither[a][b]",
          "package": "Extra",
          "partial": "Eithers",
          "signature": "[Either a b]-\u003eEither[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:concatEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use concatEithers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.Either",
          "name": "eitherFromList",
          "package": "Extra",
          "signature": "[Either a b] -\u003e Either [a] [b]",
          "source": "src/Extra-Either.html#eitherFromList",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use concatEithers",
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "eitherFromList",
          "normalized": "[Either a b]-\u003eEither[a][b]",
          "package": "Extra",
          "partial": "From List",
          "signature": "[Either a b]-\u003eEither[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:eitherFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Either",
          "name": "isLeft",
          "package": "Extra",
          "signature": "Either t t1 -\u003e Bool",
          "source": "src/Extra-Either.html#isLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "isLeft",
          "normalized": "Either a a-\u003eBool",
          "package": "Extra",
          "partial": "Left",
          "signature": "Either t t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Either",
          "name": "isRight",
          "package": "Extra",
          "signature": "Either t t1 -\u003e Bool",
          "source": "src/Extra-Either.html#isRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "isRight",
          "normalized": "Either a a-\u003eBool",
          "package": "Extra",
          "partial": "Right",
          "signature": "Either t t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use rights\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.Either",
          "name": "rightOnly",
          "package": "Extra",
          "signature": "[Either a b] -\u003e [b]",
          "source": "src/Extra-Either.html#rightOnly",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use rights",
          "hierarchy": "Extra Either",
          "module": "Extra.Either",
          "name": "rightOnly",
          "normalized": "[Either a b]-\u003e[b]",
          "package": "Extra",
          "partial": "Only",
          "signature": "[Either a b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Either.html#v:rightOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Exit",
          "name": "Exit",
          "package": "Extra",
          "source": "src/Extra-Exit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Exit",
          "module": "Extra.Exit",
          "name": "Exit",
          "package": "Extra",
          "partial": "Exit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Exit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexitFailure with nicely formatted help text on stderr\n\u003c/p\u003e",
          "module": "Extra.Exit",
          "name": "exitWithHelp",
          "package": "Extra",
          "signature": "(String -\u003e Doc)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "exitFailure with nicely formatted help text on stderr",
          "hierarchy": "Extra Exit",
          "module": "Extra.Exit",
          "name": "exitWithHelp",
          "normalized": "(String-\u003eDoc)-\u003eIO a",
          "package": "Extra",
          "partial": "With Help",
          "signature": "(String-\u003eDoc)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Exit.html#v:exitWithHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome extra operations on files.  The functions here generally\n return (Right ()) on success, Left [messages] on failure, and throw\n an exception when a failure leaves things in an inconsistant state.\n An example of an inconsistant state would be if we got a failure\n when writing out a file, but were unable to restore the original\n file to its original position.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.Files",
          "name": "Files",
          "package": "Extra",
          "source": "src/Extra-Files.html",
          "type": "module"
        },
        "index": {
          "description": "Some extra operations on files The functions here generally return Right on success Left messages on failure and throw an exception when failure leaves things in an inconsistant state An example of an inconsistant state would be if we got failure when writing out file but were unable to restore the original file to its original position",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "Files",
          "package": "Extra",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Files",
          "name": "backupFile",
          "package": "Extra",
          "signature": "FilePath -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#backupFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "backupFile",
          "normalized": "FilePath-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:backupFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd-on for System.Posix.Files\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "createSymbolicLinkIfMissing",
          "package": "Extra",
          "signature": "String -\u003e FilePath -\u003e IO ()",
          "source": "src/Extra-Files.html#createSymbolicLinkIfMissing",
          "type": "function"
        },
        "index": {
          "description": "Add-on for System.Posix.Files",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "createSymbolicLinkIfMissing",
          "normalized": "String-\u003eFilePath-\u003eIO()",
          "package": "Extra",
          "partial": "Symbolic Link If Missing",
          "signature": "String-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:createSymbolicLinkIfMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a file if it exists\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "deleteMaybe",
          "package": "Extra",
          "signature": "FilePath -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#deleteMaybe",
          "type": "function"
        },
        "index": {
          "description": "Delete file if it exists",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "deleteMaybe",
          "normalized": "FilePath-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "Maybe",
          "signature": "FilePath-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:deleteMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike removeLink, but does not fail if link did not exist\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "forceRemoveLink",
          "package": "Extra",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Extra-Files.html#forceRemoveLink",
          "type": "function"
        },
        "index": {
          "description": "like removeLink but does not fail if link did not exist",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "forceRemoveLink",
          "normalized": "FilePath-\u003eIO()",
          "package": "Extra",
          "partial": "Remove Link",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:forceRemoveLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of subdirectories, omitting . and .. and ignoring\n symbolic links.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "getSubDirectories",
          "package": "Extra",
          "signature": "FilePath -\u003e IO [String]",
          "source": "src/Extra-Files.html#getSubDirectories",
          "type": "function"
        },
        "index": {
          "description": "Return the list of subdirectories omitting and and ignoring symbolic links",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "getSubDirectories",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "Extra",
          "partial": "Sub Directories",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:getSubDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically install a list of files.  Returns a list of what went\n wrong on failure.  Will throw an error if it fails and is unable to\n restore the original files to their original states.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "installFiles",
          "package": "Extra",
          "signature": "[(FilePath, FilePath)] -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#installFiles",
          "type": "function"
        },
        "index": {
          "description": "Atomically install list of files Returns list of what went wrong on failure Will throw an error if it fails and is unable to restore the original files to their original states",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "installFiles",
          "normalized": "[(FilePath,FilePath)]-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "Files",
          "signature": "[(FilePath,FilePath)]-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:installFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a file if its content is different from the given text.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "maybeWriteFile",
          "package": "Extra",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Extra-Files.html#maybeWriteFile",
          "type": "function"
        },
        "index": {
          "description": "Write file if its content is different from the given text",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "maybeWriteFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "Extra",
          "partial": "Write File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:maybeWriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Files",
          "name": "prepareSymbolicLink",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Extra-Files.html#prepareSymbolicLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "prepareSymbolicLink",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "Extra",
          "partial": "Symbolic Link",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:prepareSymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a file's name, removing any existing file with the new name.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "renameAlways",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#renameAlways",
          "type": "function"
        },
        "index": {
          "description": "Change file name removing any existing file with the new name",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "renameAlways",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "Always",
          "signature": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:renameAlways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange a file's name only if the new name doesn't exist.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "renameMissing",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#renameMissing",
          "type": "function"
        },
        "index": {
          "description": "Change file name only if the new name doesn exist",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "renameMissing",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "Missing",
          "signature": "FilePath-\u003eFilePath-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:renameMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Files",
          "name": "replaceFile",
          "package": "Extra",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Extra-Files.html#replaceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "replaceFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "Extra",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:replaceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out three versions of a file, regular, gzipped, and bzip2ed.\n This new version assumes the files are written to temporary locations,\n so any existing file there can be removed.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "writeAndZipFile",
          "package": "Extra",
          "signature": "FilePath -\u003e ByteString -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#writeAndZipFile",
          "type": "function"
        },
        "index": {
          "description": "Write out three versions of file regular gzipped and bzip2ed This new version assumes the files are written to temporary locations so any existing file there can be removed",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "writeAndZipFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "And Zip File",
          "signature": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeAndZipFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out three versions of a file, regular, gzipped, and bzip2ed.\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "writeAndZipFileWithBackup",
          "package": "Extra",
          "signature": "FilePath -\u003e ByteString -\u003e IO (Either [String] ())",
          "source": "src/Extra-Files.html#writeAndZipFileWithBackup",
          "type": "function"
        },
        "index": {
          "description": "Write out three versions of file regular gzipped and bzip2ed",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "writeAndZipFileWithBackup",
          "normalized": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
          "package": "Extra",
          "partial": "And Zip File With Backup",
          "signature": "FilePath-\u003eByteString-\u003eIO(Either[String]())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeAndZipFileWithBackup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike writeFile, but if the file already exists don't touch it.\n Example: writeFileIfMissing True \"/var/lib/dpkg/status\" \"\"\n\u003c/p\u003e",
          "module": "Extra.Files",
          "name": "writeFileIfMissing",
          "package": "Extra",
          "signature": "Bool -\u003e FilePath -\u003e String -\u003e IO ()",
          "source": "src/Extra-Files.html#writeFileIfMissing",
          "type": "function"
        },
        "index": {
          "description": "Like writeFile but if the file already exists don touch it Example writeFileIfMissing True var lib dpkg status",
          "hierarchy": "Extra Files",
          "module": "Extra.Files",
          "name": "writeFileIfMissing",
          "normalized": "Bool-\u003eFilePath-\u003eString-\u003eIO()",
          "package": "Extra",
          "partial": "File If Missing",
          "signature": "Bool-\u003eFilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Files.html#v:writeFileIfMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "GPGSign",
          "package": "Extra",
          "source": "src/Extra-GPGSign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "GPGSign",
          "package": "Extra",
          "partial": "GPGSign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "PGPKey",
          "package": "Extra",
          "source": "src/Extra-GPGSign.html#PGPKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "PGPKey",
          "package": "Extra",
          "partial": "PGPKey",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#t:PGPKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "Default",
          "package": "Extra",
          "signature": "Default",
          "source": "src/Extra-GPGSign.html#PGPKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "Default",
          "package": "Extra",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "Key",
          "package": "Extra",
          "signature": "Key String",
          "source": "src/Extra-GPGSign.html#PGPKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "Key",
          "package": "Extra",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Extra.GPGSign\",\"Extra.Misc\"]",
          "name": "cd",
          "package": "Extra",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Extra-Misc.html#cd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:cd\",\"http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:cd\"]"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "cd",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "Extra",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "pgpSignFile",
          "package": "Extra",
          "signature": "PGPKey -\u003e FilePath -\u003e IO Bool",
          "source": "src/Extra-GPGSign.html#pgpSignFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "pgpSignFile",
          "normalized": "PGPKey-\u003eFilePath-\u003eIO Bool",
          "package": "Extra",
          "partial": "Sign File",
          "signature": "PGPKey-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:pgpSignFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "pgpSignFiles",
          "package": "Extra",
          "signature": "FilePath -\u003e PGPKey -\u003e [FilePath] -\u003e IO [Bool]",
          "source": "src/Extra-GPGSign.html#pgpSignFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "pgpSignFiles",
          "normalized": "FilePath-\u003ePGPKey-\u003e[FilePath]-\u003eIO[Bool]",
          "package": "Extra",
          "partial": "Sign Files",
          "signature": "FilePath-\u003ePGPKey-\u003e[FilePath]-\u003eIO[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:pgpSignFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.GPGSign",
          "name": "sign",
          "package": "Extra",
          "signature": "PGPKey'' -\u003e FilePath -\u003e IO FilePath",
          "source": "src/Extra-GPGSign.html#sign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra GPGSign",
          "module": "Extra.GPGSign",
          "name": "sign",
          "normalized": "PGPKey''-\u003eFilePath-\u003eIO FilePath",
          "package": "Extra",
          "signature": "PGPKey''-\u003eFilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-GPGSign.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.HughesPJ",
          "name": "HughesPJ",
          "package": "Extra",
          "source": "src/Extra-HughesPJ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra HughesPJ",
          "module": "Extra.HughesPJ",
          "name": "HughesPJ",
          "package": "Extra",
          "partial": "Hughes PJ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-HughesPJ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender a Doc using the current terminal width\n\u003c/p\u003e",
          "module": "Extra.HughesPJ",
          "name": "renderWidth",
          "package": "Extra",
          "signature": "Doc -\u003e IO String",
          "source": "src/Extra-HughesPJ.html#renderWidth",
          "type": "function"
        },
        "index": {
          "description": "render Doc using the current terminal width",
          "hierarchy": "Extra HughesPJ",
          "module": "Extra.HughesPJ",
          "name": "renderWidth",
          "normalized": "Doc-\u003eIO String",
          "package": "Extra",
          "partial": "Width",
          "signature": "Doc-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-HughesPJ.html#v:renderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: CIO is deprecated\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
          "module": "Extra.IO",
          "name": "IO",
          "package": "Extra",
          "source": "src/Extra-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated CIO is deprecated",
          "hierarchy": "Extra IO",
          "module": "Extra.IO",
          "name": "IO",
          "package": "Extra",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ethis module provides a simple mechanism for adding IO operations\n to a queue and running them in a single thread. This is useful if\n the IO operations have side-effects which could collide if run from\n multiple threads. For example, creating an image thumbnail and\n storing it on disk, running latex, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.IOThread",
          "name": "IOThread",
          "package": "Extra",
          "source": "src/Extra-IOThread.html",
          "type": "module"
        },
        "index": {
          "description": "this module provides simple mechanism for adding IO operations to queue and running them in single thread This is useful if the IO operations have side-effects which could collide if run from multiple threads For example creating an image thumbnail and storing it on disk running latex etc",
          "hierarchy": "Extra IOThread",
          "module": "Extra.IOThread",
          "name": "IOThread",
          "package": "Extra",
          "partial": "IOThread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.IOThread",
          "name": "IOThread",
          "package": "Extra",
          "source": "src/Extra-IOThread.html#IOThread",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Extra IOThread",
          "module": "Extra.IOThread",
          "name": "IOThread",
          "package": "Extra",
          "partial": "IOThread",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#t:IOThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.IOThread",
          "name": "IOThread",
          "package": "Extra",
          "signature": "IOThread (Chan (a, MVar (Either SomeException b)))",
          "source": "src/Extra-IOThread.html#IOThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra IOThread",
          "module": "Extra.IOThread",
          "name": "IOThread",
          "normalized": "IOThread(Chan(a,MVar(Either SomeException b)))",
          "package": "Extra",
          "partial": "IOThread",
          "signature": "IOThread(Chan(a,MVar(Either SomeException b)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:IOThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eissue a request to the IO thread and get back the result\n if the thread function throws an exception \u003ccode\u003e\u003ca\u003eioRequest\u003c/a\u003e\u003c/code\u003e will rethrow the exception.\n\u003c/p\u003e",
          "module": "Extra.IOThread",
          "name": "ioRequest",
          "package": "Extra",
          "signature": "IOThread a b-\u003e a-\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "issue request to the IO thread and get back the result if the thread function throws an exception ioRequest will rethrow the exception",
          "hierarchy": "Extra IOThread",
          "module": "Extra.IOThread",
          "name": "ioRequest",
          "normalized": "IOThread a b-\u003ea-\u003eIO b",
          "package": "Extra",
          "partial": "Request",
          "signature": "IOThread a b-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:ioRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart the IO thread.\n\u003c/p\u003e",
          "module": "Extra.IOThread",
          "name": "startIOThread",
          "package": "Extra",
          "signature": "(a -\u003e IO b)-\u003e IO (ThreadId, IOThread a b)",
          "type": "function"
        },
        "index": {
          "description": "start the IO thread",
          "hierarchy": "Extra IOThread",
          "module": "Extra.IOThread",
          "name": "startIOThread",
          "normalized": "(a-\u003eIO b)-\u003eIO(ThreadId,IOThread a b)",
          "package": "Extra",
          "partial": "IOThread",
          "signature": "(a-\u003eIO b)-\u003eIO(ThreadId,IOThread a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-IOThread.html#v:startIOThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.List",
          "name": "List",
          "package": "Extra",
          "source": "src/Extra-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "List",
          "package": "Extra",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecartesianProduct [[1,2,3], [4,5],[6]] -\u003e [[1,4,6],[1,5,6],[2,4,6],[2,5,6],[3,4,6],[3,5,6]]\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "cartesianProduct",
          "package": "Extra",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Extra-List.html#cartesianProduct",
          "type": "function"
        },
        "index": {
          "description": "cartesianProduct",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "cartesianProduct",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "Extra",
          "partial": "Product",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:cartesianProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the prefix of s, return Nothing if it doesn't match.\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "changePrefix",
          "package": "Extra",
          "signature": "[a] -\u003e [a] -\u003e [a] -\u003e Maybe [a]",
          "source": "src/Extra-List.html#changePrefix",
          "type": "function"
        },
        "index": {
          "description": "Replace the prefix of return Nothing if it doesn match",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "changePrefix",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:changePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use intercalate\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThe mighty consperse function - e.g. consperse \u003ca\u003e,\u003c/a\u003e [\u003ca\u003ea\u003c/a\u003e, \u003ca\u003eb\u003c/a\u003e] -\u003e \u003ca\u003ea,b\u003c/a\u003e\n consperse = MissingH.List.join\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "consperse",
          "package": "Extra",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Extra-List.html#consperse",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use intercalate The mighty consperse function e.g consperse consperse MissingH.List.join",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "consperse",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "Extra",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:consperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a prefix of s, return nothing if it doesn't match.\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "dropPrefix",
          "package": "Extra",
          "signature": "[a] -\u003e [a] -\u003e Maybe [a]",
          "source": "src/Extra-List.html#dropPrefix",
          "type": "function"
        },
        "index": {
          "description": "Remove prefix of return nothing if it doesn match",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "dropPrefix",
          "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "Extra",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:dropPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike maybe, but with empty vs. non-empty list\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "empty",
          "package": "Extra",
          "signature": "b -\u003e ([a] -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Extra-List.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Like maybe but with empty vs non-empty list",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "empty",
          "normalized": "a-\u003e([b]-\u003ea)-\u003e[b]-\u003ea",
          "package": "Extra",
          "signature": "b-\u003e([a]-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.List",
          "name": "isSublistOf",
          "package": "Extra",
          "signature": "[a] -\u003e [a] -\u003e Maybe Int",
          "source": "src/Extra-List.html#isSublistOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "isSublistOf",
          "normalized": "[a]-\u003e[a]-\u003eMaybe Int",
          "package": "Extra",
          "partial": "Sublist Of",
          "signature": "[a]-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:isSublistOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.List",
          "name": "listIntersection",
          "package": "Extra",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Extra-List.html#listIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "listIntersection",
          "normalized": "[[a]]-\u003e[a]",
          "package": "Extra",
          "partial": "Intersection",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:listIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.List",
          "name": "partitionM",
          "package": "Extra",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m ([a], [a])",
          "source": "src/Extra-List.html#partitionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "partitionM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb([a],[a])",
          "package": "Extra",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:partitionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a list using the compare function on the list elements mapped\n over f.  This is like \u003ca\u003esortBy ( a b -\u003e compare (f a) (f b))\u003c/a\u003e\n except that f is applied O(n) times instead of O(n log n)\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "sortByMapped",
          "package": "Extra",
          "signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "source": "src/Extra-List.html#sortByMapped",
          "type": "function"
        },
        "index": {
          "description": "Sort list using the compare function on the list elements mapped over This is like sortBy compare except that is applied times instead of log",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "sortByMapped",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "Extra",
          "partial": "By Mapped",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:sortByMapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of sortByMapped\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "sortByMappedM",
          "package": "Extra",
          "signature": "(a -\u003e IO b) -\u003e (b -\u003e b -\u003e Ordering) -\u003e [a] -\u003e IO [a]",
          "source": "src/Extra-List.html#sortByMappedM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of sortByMapped",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "sortByMappedM",
          "normalized": "(a-\u003eIO b)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003eIO[a]",
          "package": "Extra",
          "partial": "By Mapped",
          "signature": "(a-\u003eIO b)-\u003e(b-\u003eb-\u003eOrdering)-\u003e[a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:sortByMappedM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esurround each element of a list - e.g. surround \u003ca\u003e(\u003c/a\u003e \u003ca\u003e)\u003c/a\u003e [\u003ca\u003ea\u003c/a\u003e, \u003ca\u003eb\u003c/a\u003e] -\u003e [\u003ca\u003e(a)(b)\u003c/a\u003e]\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "surround",
          "package": "Extra",
          "signature": "[a] -\u003e [a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Extra-List.html#surround",
          "type": "function"
        },
        "index": {
          "description": "surround each element of list e.g surround",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "surround",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]-\u003e[a]",
          "package": "Extra",
          "signature": "[a]-\u003e[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:surround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFIXME: implement for a string\n\u003c/p\u003e",
          "module": "Extra.List",
          "name": "wordsBy",
          "package": "Extra",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Extra-List.html#wordsBy",
          "type": "function"
        },
        "index": {
          "description": "FIXME implement for string",
          "hierarchy": "Extra List",
          "module": "Extra.List",
          "name": "wordsBy",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "Extra",
          "partial": "By",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-List.html#v:wordsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Lock",
          "name": "Lock",
          "package": "Extra",
          "source": "src/Extra-Lock.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Lock",
          "module": "Extra.Lock",
          "name": "Lock",
          "package": "Extra",
          "partial": "Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike withLock, but instead of giving up immediately, try n times\n with a wait between each.\nawaitLock :: (MonadIO m) =\u003e Int -\u003e Int -\u003e FilePath -\u003e m a -\u003e m (Either Exception a)\n\u003c/p\u003e",
          "module": "Extra.Lock",
          "name": "awaitLock",
          "package": "Extra",
          "signature": "a -\u003e Int -\u003e [Char] -\u003e IO b -\u003e IO b",
          "source": "src/Extra-Lock.html#awaitLock",
          "type": "function"
        },
        "index": {
          "description": "Like withLock but instead of giving up immediately try times with wait between each awaitLock MonadIO Int Int FilePath Either Exception",
          "hierarchy": "Extra Lock",
          "module": "Extra.Lock",
          "name": "awaitLock",
          "normalized": "a-\u003eInt-\u003e[Char]-\u003eIO b-\u003eIO b",
          "package": "Extra",
          "partial": "Lock",
          "signature": "a-\u003eInt-\u003e[Char]-\u003eIO b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#v:awaitLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Lock",
          "name": "withLock",
          "package": "Extra",
          "signature": "FilePath -\u003e m a -\u003e m a",
          "source": "src/Extra-Lock.html#withLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Lock",
          "module": "Extra.Lock",
          "name": "withLock",
          "normalized": "FilePath-\u003ea b-\u003ea b",
          "package": "Extra",
          "partial": "Lock",
          "signature": "FilePath-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Lock.html#v:withLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Misc",
          "name": "Misc",
          "package": "Extra",
          "source": "src/Extra-Misc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "Misc",
          "package": "Extra",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeak attempt at canonicalizing a file path.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "canon",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Extra-Misc.html#canon",
          "type": "function"
        },
        "index": {
          "description": "Weak attempt at canonicalizing file path",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "canon",
          "normalized": "FilePath-\u003eFilePath",
          "package": "Extra",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:canon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Misc",
          "name": "checkSuperUser",
          "package": "Extra",
          "signature": "IO Bool",
          "source": "src/Extra-Misc.html#checkSuperUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "checkSuperUser",
          "package": "Extra",
          "partial": "Super User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:checkSuperUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad strings so the columns line up. The argument and return value\n elements are the rows of a table.  Do not pad the rightmost column.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "columns",
          "package": "Extra",
          "signature": "[[String]] -\u003e [[String]]",
          "source": "src/Extra-Misc.html#columns",
          "type": "function"
        },
        "index": {
          "description": "Pad strings so the columns line up The argument and return value elements are the rows of table Do not pad the rightmost column",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "columns",
          "normalized": "[[String]]-\u003e[[String]]",
          "package": "Extra",
          "signature": "[[String]]-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup words into lines of length n or less.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "justify",
          "package": "Extra",
          "signature": "String -\u003e Int -\u003e [[String]]",
          "source": "src/Extra-Misc.html#justify",
          "type": "function"
        },
        "index": {
          "description": "Group words into lines of length or less",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "justify",
          "normalized": "String-\u003eInt-\u003e[[String]]",
          "package": "Extra",
          "signature": "String-\u003eInt-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:justify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Misc",
          "name": "listDiff",
          "package": "Extra",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Extra-Misc.html#listDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "listDiff",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "Extra",
          "partial": "Diff",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:listDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list of (k, a) pairs into a map from k -\u003e [a].  The order of the elements in\n the a list is preserved.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "listMap",
          "package": "Extra",
          "signature": "[(k, a)] -\u003e Map k [a]",
          "source": "src/Extra-Misc.html#listMap",
          "type": "function"
        },
        "index": {
          "description": "Turn list of pairs into map from The order of the elements in the list is preserved",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "listMap",
          "normalized": "[(a,b)]-\u003eMap a[b]",
          "package": "Extra",
          "partial": "Map",
          "signature": "[(k,a)]-\u003eMap k[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:listMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Misc",
          "name": "mapSnd",
          "package": "Extra",
          "signature": "(b -\u003e c) -\u003e (a, b) -\u003e (a, c)",
          "source": "src/Extra-Misc.html#mapSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "mapSnd",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "Extra",
          "partial": "Snd",
          "signature": "(b-\u003ec)-\u003e(a,b)-\u003e(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:mapSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.readFile path \u003e\u003e= return . show . Data.Digest.Pure.MD5.md5\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRun md5sum on a file and return the resulting checksum as text.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "md5sum",
          "package": "Extra",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Extra-Misc.html#md5sum",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Lazy.Char8.readFile path return show Data.Digest.Pure.MD5.md5 Run md5sum on file and return the resulting checksum as text",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "md5sum",
          "normalized": "FilePath-\u003eIO String",
          "package": "Extra",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:md5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirname\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "parentPath",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Extra-Misc.html#parentPath",
          "type": "function"
        },
        "index": {
          "description": "dirname",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "parentPath",
          "normalized": "FilePath-\u003eFilePath",
          "package": "Extra",
          "partial": "Path",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:parentPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of read with a more helpful error message.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "read'",
          "package": "Extra",
          "signature": "String -\u003e a",
          "source": "src/Extra-Misc.html#read%27",
          "type": "function"
        },
        "index": {
          "description": "version of read with more helpful error message",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "read'",
          "normalized": "String-\u003ea",
          "package": "Extra",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:read-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to decide if two files have the same inode.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "sameInode",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath -\u003e IO Bool",
          "source": "src/Extra-Misc.html#sameInode",
          "type": "function"
        },
        "index": {
          "description": "Predicate to decide if two files have the same inode",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "sameInode",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
          "package": "Extra",
          "partial": "Inode",
          "signature": "FilePath-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:sameInode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to decide if two files have the same md5 checksum.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "sameMd5sum",
          "package": "Extra",
          "signature": "FilePath -\u003e FilePath -\u003e IO Bool",
          "source": "src/Extra-Misc.html#sameMd5sum",
          "type": "function"
        },
        "index": {
          "description": "Predicate to decide if two files have the same md5 checksum",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "sameMd5sum",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
          "package": "Extra",
          "partial": "Md",
          "signature": "FilePath-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:sameMd5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a tarball, return the name of the top directory.\n\u003c/p\u003e",
          "module": "Extra.Misc",
          "name": "tarDir",
          "package": "Extra",
          "signature": "FilePath -\u003e IO (Maybe String)",
          "source": "src/Extra-Misc.html#tarDir",
          "type": "function"
        },
        "index": {
          "description": "Given tarball return the name of the top directory",
          "hierarchy": "Extra Misc",
          "module": "Extra.Misc",
          "name": "tarDir",
          "normalized": "FilePath-\u003eIO(Maybe String)",
          "package": "Extra",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Misc.html#v:tarDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Net",
          "name": "Net",
          "package": "Extra",
          "source": "src/Extra-Net.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Net",
          "module": "Extra.Net",
          "name": "Net",
          "package": "Extra",
          "partial": "Net",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Net.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the text returned when a directory is listed by a web\n server.  This is currently only known to work with Apache.\n NOTE: there is a second copy of this function in\n debian:Debian.URI. Please update both locations if you make\n changes.\n\u003c/p\u003e",
          "module": "Extra.Net",
          "name": "webServerDirectoryContents",
          "package": "Extra",
          "signature": "ByteString -\u003e [String]",
          "source": "src/Extra-Net.html#webServerDirectoryContents",
          "type": "function"
        },
        "index": {
          "description": "Parse the text returned when directory is listed by web server This is currently only known to work with Apache NOTE there is second copy of this function in debian Debian.URI Please update both locations if you make changes",
          "hierarchy": "Extra Net",
          "module": "Extra.Net",
          "name": "webServerDirectoryContents",
          "normalized": "ByteString-\u003e[String]",
          "package": "Extra",
          "partial": "Server Directory Contents",
          "signature": "ByteString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Net.html#v:webServerDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.SSH",
          "name": "SSH",
          "package": "Extra",
          "source": "src/Extra-SSH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra SSH",
          "module": "Extra.SSH",
          "name": "SSH",
          "package": "Extra",
          "partial": "SSH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the ssh configuration from $HOME to the /root directory of a\n changeroot.\n\u003c/p\u003e",
          "module": "Extra.SSH",
          "name": "sshCopy",
          "package": "Extra",
          "signature": "FilePath -\u003e IO ExitCode",
          "source": "src/Extra-SSH.html#sshCopy",
          "type": "function"
        },
        "index": {
          "description": "Copy the ssh configuration from HOME to the root directory of changeroot",
          "hierarchy": "Extra SSH",
          "module": "Extra.SSH",
          "name": "sshCopy",
          "normalized": "FilePath-\u003eIO ExitCode",
          "package": "Extra",
          "partial": "Copy",
          "signature": "FilePath-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up access to destination (user@host).\n\u003c/p\u003e",
          "module": "Extra.SSH",
          "name": "sshExportDeprecated",
          "package": "Extra",
          "signature": "String -\u003e Maybe Int -\u003e IO (Either String ())",
          "source": "src/Extra-SSH.html#sshExportDeprecated",
          "type": "function"
        },
        "index": {
          "description": "Set up access to destination user@host",
          "hierarchy": "Extra SSH",
          "module": "Extra.SSH",
          "name": "sshExportDeprecated",
          "normalized": "String-\u003eMaybe Int-\u003eIO(Either String())",
          "package": "Extra",
          "partial": "Export Deprecated",
          "signature": "String-\u003eMaybe Int-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshExportDeprecated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if we already have access to the destination (user@host).\n\u003c/p\u003e",
          "module": "Extra.SSH",
          "name": "sshVerify",
          "package": "Extra",
          "signature": "String -\u003e Maybe Int -\u003e IO Bool",
          "source": "src/Extra-SSH.html#sshVerify",
          "type": "function"
        },
        "index": {
          "description": "See if we already have access to the destination user@host",
          "hierarchy": "Extra SSH",
          "module": "Extra.SSH",
          "name": "sshVerify",
          "normalized": "String-\u003eMaybe Int-\u003eIO Bool",
          "package": "Extra",
          "partial": "Verify",
          "signature": "String-\u003eMaybe Int-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-SSH.html#v:sshVerify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Terminal",
          "name": "Terminal",
          "package": "Extra",
          "source": "src/Extra-Terminal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Terminal",
          "module": "Extra.Terminal",
          "name": "Terminal",
          "package": "Extra",
          "partial": "Terminal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Terminal",
          "name": "c_get_window_size",
          "package": "Extra",
          "signature": "IO CLong",
          "source": "src/Extra-Terminal.html#c_get_window_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Terminal",
          "module": "Extra.Terminal",
          "name": "c_get_window_size",
          "package": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:c_get_window_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Terminal",
          "name": "getWidth",
          "package": "Extra",
          "signature": "IO (Maybe Int)",
          "source": "src/Extra-Terminal.html#getWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Terminal",
          "module": "Extra.Terminal",
          "name": "getWidth",
          "package": "Extra",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:getWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Terminal",
          "name": "getWinSize",
          "package": "Extra",
          "signature": "IO (Int, Int)",
          "source": "src/Extra-Terminal.html#getWinSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Terminal",
          "module": "Extra.Terminal",
          "name": "getWinSize",
          "normalized": "IO(Int,Int)",
          "package": "Extra",
          "partial": "Win Size",
          "signature": "IO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Terminal.html#v:getWinSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Time",
          "name": "Time",
          "package": "Extra",
          "source": "src/Extra-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra Time",
          "module": "Extra.Time",
          "name": "Time",
          "package": "Extra",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Time",
          "name": "formatDebianDate",
          "package": "Extra",
          "signature": "t -\u003e [Char]",
          "source": "src/Extra-Time.html#formatDebianDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Time",
          "module": "Extra.Time",
          "name": "formatDebianDate",
          "normalized": "a-\u003e[Char]",
          "package": "Extra",
          "partial": "Debian Date",
          "signature": "t-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#v:formatDebianDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.Time",
          "name": "myTimeDiffToString",
          "package": "Extra",
          "signature": "TimeDiff -\u003e [Char]",
          "source": "src/Extra-Time.html#myTimeDiffToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra Time",
          "module": "Extra.Time",
          "name": "myTimeDiffToString",
          "normalized": "TimeDiff-\u003e[Char]",
          "package": "Extra",
          "partial": "Time Diff To String",
          "signature": "TimeDiff-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-Time.html#v:myTimeDiffToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMake URI an instance of Read and Ord, and add functions to\n manipulate the uriQuery.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Extra.URI",
          "name": "URI",
          "package": "Extra",
          "source": "src/Extra-URI.html",
          "type": "module"
        },
        "index": {
          "description": "Make URI an instance of Read and Ord and add functions to manipulate the uriQuery",
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "URI",
          "package": "Extra",
          "partial": "URI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.URI",
          "name": "deleteURIQueryAttr",
          "package": "Extra",
          "signature": "String -\u003e URI -\u003e URI",
          "source": "src/Extra-URI.html#deleteURIQueryAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "deleteURIQueryAttr",
          "normalized": "String-\u003eURI-\u003eURI",
          "package": "Extra",
          "partial": "URIQuery Attr",
          "signature": "String-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:deleteURIQueryAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a URI's query by applying a function to the pairs\n\u003c/p\u003e",
          "module": "Extra.URI",
          "name": "modifyURIQuery",
          "package": "Extra",
          "signature": "([(String, String)] -\u003e [(String, String)]) -\u003e URI -\u003e URI",
          "source": "src/Extra-URI.html#modifyURIQuery",
          "type": "function"
        },
        "index": {
          "description": "Modify URI query by applying function to the pairs",
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "modifyURIQuery",
          "normalized": "([(String,String)]-\u003e[(String,String)])-\u003eURI-\u003eURI",
          "package": "Extra",
          "partial": "URIQuery",
          "signature": "([(String,String)]-\u003e[(String,String)])-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:modifyURIQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the pairs in a URI's query\n\u003c/p\u003e",
          "module": "Extra.URI",
          "name": "parseURIQuery",
          "package": "Extra",
          "signature": "URI -\u003e [(String, String)]",
          "source": "src/Extra-URI.html#parseURIQuery",
          "type": "function"
        },
        "index": {
          "description": "Return the pairs in URI query",
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "parseURIQuery",
          "normalized": "URI-\u003e[(String,String)]",
          "package": "Extra",
          "partial": "URIQuery",
          "signature": "URI-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:parseURIQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a relative URI with the given query.\n\u003c/p\u003e",
          "module": "Extra.URI",
          "name": "relURI",
          "package": "Extra",
          "signature": "FilePath -\u003e [(String, String)] -\u003e URI",
          "source": "src/Extra-URI.html#relURI",
          "type": "function"
        },
        "index": {
          "description": "Create relative URI with the given query",
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "relURI",
          "normalized": "FilePath-\u003e[(String,String)]-\u003eURI",
          "package": "Extra",
          "partial": "URI",
          "signature": "FilePath-\u003e[(String,String)]-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:relURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the port number in the URI authority, creating it if necessary.\n\u003c/p\u003e",
          "module": "Extra.URI",
          "name": "setURIPort",
          "package": "Extra",
          "signature": "[Char] -\u003e URI -\u003e URI",
          "source": "src/Extra-URI.html#setURIPort",
          "type": "function"
        },
        "index": {
          "description": "Set the port number in the URI authority creating it if necessary",
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "setURIPort",
          "normalized": "[Char]-\u003eURI-\u003eURI",
          "package": "Extra",
          "partial": "URIPort",
          "signature": "[Char]-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.URI",
          "name": "setURIQuery",
          "package": "Extra",
          "signature": "[(String, String)] -\u003e URI -\u003e URI",
          "source": "src/Extra-URI.html#setURIQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "setURIQuery",
          "normalized": "[(String,String)]-\u003eURI-\u003eURI",
          "package": "Extra",
          "partial": "URIQuery",
          "signature": "[(String,String)]-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.URI",
          "name": "setURIQueryAttr",
          "package": "Extra",
          "signature": "String -\u003e String -\u003e URI -\u003e URI",
          "source": "src/Extra-URI.html#setURIQueryAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Extra URI",
          "module": "Extra.URI",
          "name": "setURIQueryAttr",
          "normalized": "String-\u003eString-\u003eURI-\u003eURI",
          "package": "Extra",
          "partial": "URIQuery Attr",
          "signature": "String-\u003eString-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URI.html#v:setURIQueryAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Extra.URIQuery",
          "name": "URIQuery",
          "package": "Extra",
          "source": "src/Extra-URIQuery.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Extra URIQuery",
          "module": "Extra.URIQuery",
          "name": "URIQuery",
          "package": "Extra",
          "partial": "URIQuery",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an attribute from one query to another\n\u003c/p\u003e",
          "module": "Extra.URIQuery",
          "name": "copy",
          "package": "Extra",
          "signature": "String -\u003e URI -\u003e URI -\u003e URI",
          "source": "src/Extra-URIQuery.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Copy an attribute from one query to another",
          "hierarchy": "Extra URIQuery",
          "module": "Extra.URIQuery",
          "name": "copy",
          "normalized": "String-\u003eURI-\u003eURI-\u003eURI",
          "package": "Extra",
          "signature": "String-\u003eURI-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a query attribute with Nothing.\n\u003c/p\u003e",
          "module": "Extra.URIQuery",
          "name": "del",
          "package": "Extra",
          "signature": "String -\u003e URI -\u003e URI",
          "source": "src/Extra-URIQuery.html#del",
          "type": "function"
        },
        "index": {
          "description": "Replace query attribute with Nothing",
          "hierarchy": "Extra URIQuery",
          "module": "Extra.URIQuery",
          "name": "del",
          "normalized": "String-\u003eURI-\u003eURI",
          "package": "Extra",
          "signature": "String-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify an individual URI query attributes.\n\u003c/p\u003e",
          "module": "Extra.URIQuery",
          "name": "modify",
          "package": "Extra",
          "signature": "String -\u003e (Maybe String -\u003e Maybe String) -\u003e URI -\u003e URI",
          "source": "src/Extra-URIQuery.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modify an individual URI query attributes",
          "hierarchy": "Extra URIQuery",
          "module": "Extra.URIQuery",
          "name": "modify",
          "normalized": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eURI-\u003eURI",
          "package": "Extra",
          "signature": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a query attribute with something.\n\u003c/p\u003e",
          "module": "Extra.URIQuery",
          "name": "put",
          "package": "Extra",
          "signature": "String -\u003e String -\u003e URI -\u003e URI",
          "source": "src/Extra-URIQuery.html#put",
          "type": "function"
        },
        "index": {
          "description": "Replace query attribute with something",
          "hierarchy": "Extra URIQuery",
          "module": "Extra.URIQuery",
          "name": "put",
          "normalized": "String-\u003eString-\u003eURI-\u003eURI",
          "package": "Extra",
          "signature": "String-\u003eString-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Extra-URIQuery.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome glue code for running QuickCheck tests using the HUnit framework.\n\u003c/p\u003e\u003cp\u003eThis module provides an instance of Test.HUnit.Testable for\n Test.QuickCheck.Property, which makes it trivial to use QuickCheck\n properties in the HUnit framework:\n\u003c/p\u003e\u003cpre\u003e\n   import Test.HUnit\n   import Test.HUnit.Text\n   import Test.QuickCheck\n   import Test.QUnit\n\nrunTestTT $ (\"x /= x\" ~: property (x -\u003e x /= x))\n\u003c/pre\u003e\u003cp\u003eThe QuickCheck Property will be run using\n Test.QuickCheck.defaultConfig.  If you need to specific an\n alternate config, then use \u003ccode\u003e\u003ca\u003etestQuickCheck\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e\n   runTestTT $ (\"x /= x\" ~: testQuickCheck myConfig (x -\u003e x /= x))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.QUnit",
          "name": "QUnit",
          "package": "Extra",
          "source": "src/Test-QUnit.html",
          "type": "module"
        },
        "index": {
          "description": "Some glue code for running QuickCheck tests using the HUnit framework This module provides an instance of Test.HUnit.Testable for Test.QuickCheck.Property which makes it trivial to use QuickCheck properties in the HUnit framework import Test.HUnit import Test.HUnit.Text import Test.QuickCheck import Test.QUnit runTestTT property The QuickCheck Property will be run using Test.QuickCheck.defaultConfig If you need to specific an alternate config then use testQuickCheck like this runTestTT testQuickCheck myConfig",
          "hierarchy": "Test QUnit",
          "module": "Test.QUnit",
          "name": "QUnit",
          "package": "Extra",
          "partial": "QUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturns the quickcheck test into an hunit test\n\u003c/p\u003e\u003cp\u003eUse this if you want to provide a custom \u003ccode\u003eConfig\u003c/code\u003e instead of\n \u003ccode\u003edefaultConfig\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QUnit",
          "name": "testQuickCheck",
          "package": "Extra",
          "signature": "Args-\u003e a-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "turns the quickcheck test into an hunit test Use this if you want to provide custom Config instead of defaultConfig",
          "hierarchy": "Test QUnit",
          "module": "Test.QUnit",
          "name": "testQuickCheck",
          "normalized": "Args-\u003ea-\u003eTest",
          "package": "Extra",
          "partial": "Quick Check",
          "signature": "Args-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QUnit.html#v:testQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Properties",
          "name": "Properties",
          "package": "Extra",
          "source": "src/Test-QuickCheck-Properties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck Properties",
          "module": "Test.QuickCheck.Properties",
          "name": "Properties",
          "package": "Extra",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Properties",
          "name": "isIdempotent",
          "package": "Extra",
          "signature": "(a -\u003e a) -\u003e Property",
          "source": "src/Test-QuickCheck-Properties.html#isIdempotent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Properties",
          "module": "Test.QuickCheck.Properties",
          "name": "isIdempotent",
          "normalized": "(a-\u003ea)-\u003eProperty",
          "package": "Extra",
          "partial": "Idempotent",
          "signature": "(a-\u003ea)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#v:isIdempotent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Properties",
          "name": "isIdempotentBy",
          "package": "Extra",
          "signature": "(a -\u003e a) -\u003e Gen a -\u003e Property",
          "source": "src/Test-QuickCheck-Properties.html#isIdempotentBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Properties",
          "module": "Test.QuickCheck.Properties",
          "name": "isIdempotentBy",
          "normalized": "(a-\u003ea)-\u003eGen a-\u003eProperty",
          "package": "Extra",
          "partial": "Idempotent By",
          "signature": "(a-\u003ea)-\u003eGen a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Extra/docs/Test-QuickCheck-Properties.html#v:isIdempotentBy"
      }
    }
  ]
]