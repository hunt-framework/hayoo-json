[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for working with command line arguments and options.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Args.html",
        "fct-type": "module",
        "title": "Args"
      },
      "index": {
        "description": "Functions for working with command line arguments and options",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "Args",
        "normalized": "",
        "package": "Lastik",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#t:ArgShow",
      "description": {
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-Args.html#ArgShow",
        "fct-type": "class",
        "title": "ArgShow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "ArgShow",
        "normalized": "",
        "package": "Lastik",
        "partial": "Arg Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126-",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty list if the boolean is \u003ccode\u003eFalse\u003c/code\u003e otherwise the given string value with \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e prepended.\n\u003c/p\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e Bool -\u003e String",
        "fct-source": "src/System-Build-Args.html#~~",
        "fct-type": "function",
        "title": "(~~)"
      },
      "index": {
        "description": "An empty list if the boolean is False otherwise the given string value with prepended",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(~~) ~~",
        "normalized": "String-\u003eBool-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eBool-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126--126--62-",
      "description": {
        "fct-descr": "\u003cp\u003ePrepends \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e' '\u003c/code\u003e then the second value surrounded by double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~~\u003e \"def\" == \"-abc \\\"def\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/System-Build-Args.html#~~~%3E",
        "fct-type": "function",
        "title": "(~~~\u003e)"
      },
      "index": {
        "description": "Prepends followed by the first value then then the second value surrounded by double-quotes abc def abc def",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(~~~\u003e) ~~~\u003e",
        "normalized": "String-\u003eString-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e' '\u003c/code\u003e followed by surrounding the result of running the given function in double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~\u003e Just \"def\" == \"-abc \\\"def\\\"\"\n \"abc\" ~~\u003e Nothing == \"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e Maybe k -\u003e String",
        "fct-source": "src/System-Build-Args.html#~~%3E",
        "fct-type": "function",
        "title": "(~~\u003e)"
      },
      "index": {
        "description": "If the given value is Nothing return the empty list otherwise prepend followed by the first value then followed by surrounding the result of running the given function in double-quotes abc Just def abc def abc Nothing",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(~~\u003e) ~~\u003e",
        "normalized": "String-\u003eMaybe a-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eMaybe k-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--63-",
      "description": {
        "fct-descr": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise run the given function.\n\u003c/p\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "(k -\u003e [a]) -\u003e Maybe k -\u003e [a]",
        "fct-source": "src/System-Build-Args.html#~%3F",
        "fct-type": "function",
        "title": "(~?)"
      },
      "index": {
        "description": "If the given value is Nothing return the empty list otherwise run the given function",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(~?) ~?",
        "normalized": "(a-\u003e[b])-\u003eMaybe a-\u003e[b]",
        "package": "Lastik",
        "partial": "",
        "signature": "(k-\u003e[a])-\u003eMaybe k-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126-:",
      "description": {
        "fct-descr": "\u003cp\u003eIf the given list of file paths is empty, then returns the empty list. Otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the string followed by \u003ccode\u003e' '\u003c/code\u003e then the search path separator intercalated in the list of file paths.\n\u003c/p\u003e\u003cpre\u003e Posix\n \"123\" ~?? [\"abc\", \"def\"] == \"-123 \\\"abc\\\":\\\"def\\\"\"\n \"123\" ~?? [\"abc\", \"def\", \"ghi\"] == \"-123 \\\"abc\\\":\\\"def\\\":\\\"ghi\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e [FilePath] -\u003e String",
        "fct-source": "src/System-Build-Args.html#~%3A",
        "fct-type": "function",
        "title": "(~:)"
      },
      "index": {
        "description": "If the given list of file paths is empty then returns the empty list Otherwise prepend to the string followed by then the search path separator intercalated in the list of file paths Posix abc def abc def abc def ghi abc def ghi",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(~:) ~:",
        "normalized": "String-\u003e[FilePath]-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003e[FilePath]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-45--126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e followed by surrounding the result of \u003ccode\u003eshow\u003c/code\u003e in double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~\u003e Just \"def\" == \"-abc:\\\"def\\\"\"\n \"abc\" ~~\u003e Nothing == \"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e Maybe k -\u003e String",
        "fct-source": "src/System-Build-Args.html#-~%3E",
        "fct-type": "function",
        "title": "(-~\u003e)"
      },
      "index": {
        "description": "If the given value is Nothing return the empty list otherwise prepend followed by the first value then followed by surrounding the result of show in double-quotes abc Just def abc def abc Nothing",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(-~\u003e) -~\u003e",
        "normalized": "String-\u003eMaybe a-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eMaybe k-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-94--94--94-",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves all empty lists from the first argument the intercalates the second argument.\n\u003c/p\u003e\u003cpre\u003e [\"abc\", \"\", \"def\"] ^^^ \"x\" == \"abcxdef\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "[[a]] -\u003e [a] -\u003e [a]",
        "fct-source": "src/System-Build-Args.html#%5E%5E%5E",
        "fct-type": "function",
        "title": "(^^^)"
      },
      "index": {
        "description": "Removes all empty lists from the first argument the intercalates the second argument abc def abcxdef",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "(^^^) ^^^",
        "normalized": "[[a]]-\u003e[a]-\u003e[a]",
        "package": "Lastik",
        "partial": "",
        "signature": "[[a]]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:arg",
      "description": {
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/System-Build-Args.html#arg",
        "fct-type": "method",
        "title": "arg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "arg",
        "normalized": "a-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:many",
      "description": {
        "fct-descr": "\u003cp\u003eA parameter with many values interspersed by \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e many \"abc\" [\"tuv\", \"wxy\"] == \"-abc \\\"tuv\\\" -abc \\\"wxy\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e [String] -\u003e String",
        "fct-source": "src/System-Build-Args.html#many",
        "fct-type": "function",
        "title": "many"
      },
      "index": {
        "description": "parameter with many values interspersed by many abc tuv wxy abc tuv abc wxy",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "many",
        "normalized": "String-\u003e[String]-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003e[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:manys",
      "description": {
        "fct-descr": "\u003cp\u003eA parameter with many values interspersed by \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e manys id \"abc\" [\"tuv\", \"wxy\"] == \"-abc \\\"tuv\\\" -abc \\\"wxy\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "(a -\u003e String) -\u003e String -\u003e [a] -\u003e String",
        "fct-source": "src/System-Build-Args.html#manys",
        "fct-type": "function",
        "title": "manys"
      },
      "index": {
        "description": "parameter with many values interspersed by manys id abc tuv wxy abc tuv abc wxy",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "manys",
        "normalized": "(a-\u003eString)-\u003eString-\u003e[a]-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "(a-\u003eString)-\u003eString-\u003e[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the given string followed by the given character followed by surrounding the result of running the given function in double-quotes.\n\u003c/p\u003e\u003cpre\u003e param \"abc\" 'x' id (Just \"tuv\") == \"-abcx\\\"tuv\\\"\"\n param \"abc\" 'x' id Nothing == \"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e Char -\u003e (k -\u003e String) -\u003e Maybe k -\u003e String",
        "fct-source": "src/System-Build-Args.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "If the given value is Nothing return the empty list otherwise prepend to the given string followed by the given character followed by surrounding the result of running the given function in double-quotes param abc id Just tuv abcx tuv param abc id Nothing",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "param",
        "normalized": "String-\u003eChar-\u003e(a-\u003eString)-\u003eMaybe a-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eChar-\u003e(k-\u003eString)-\u003eMaybe k-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:quote",
      "description": {
        "fct-descr": "\u003cp\u003eSurrounds the given string in double-quotes and escapes any already there.\n\u003c/p\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/System-Build-Args.html#quote",
        "fct-type": "function",
        "title": "quote"
      },
      "index": {
        "description": "Surrounds the given string in double-quotes and escapes any already there",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "quote",
        "normalized": "String-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:searchPath",
      "description": {
        "fct-descr": "\u003cp\u003eSurrounds each given value in double-quotes then intercalates \u003ccode\u003e[searchPathSeparator]\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e searchPath [\"abc\", \"def\"] == \"\\\"abc\\\":\\\"def\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/System-Build-Args.html#searchPath",
        "fct-type": "function",
        "title": "searchPath"
      },
      "index": {
        "description": "Surrounds each given value in double-quotes then intercalates searchPathSeparator searchPath abc def abc def",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "searchPath",
        "normalized": "[String]-\u003eString",
        "package": "Lastik",
        "partial": "Path",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eSurrounds each given value in double-quotes then intercalates \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e space [\"abc\", \"def\"] == \"\\\"abc\\\" \\\"def\\\"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/System-Build-Args.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "Surrounds each given value in double-quotes then intercalates space abc def abc def",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "space",
        "normalized": "[String]-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:tryEnvs",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the given environment variables. The first one found that exists has its associated function called to produce a value.\n\u003c/p\u003e",
        "fct-module": "System.Build.Args",
        "fct-package": "Lastik",
        "fct-signature": "[(String, String -\u003e a)] -\u003e IO (Maybe a)",
        "fct-source": "src/System-Build-Args.html#tryEnvs",
        "fct-type": "function",
        "title": "tryEnvs"
      },
      "index": {
        "description": "Look up the given environment variables The first one found that exists has its associated function called to produce value",
        "hierarchy": "System Build Args",
        "module": "System.Build.Args",
        "name": "tryEnvs",
        "normalized": "[(String,String-\u003ea)]-\u003eIO(Maybe a)",
        "package": "Lastik",
        "partial": "Envs",
        "signature": "[(String,String-\u003ea)]-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction on executable commands.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Command",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Command.html",
        "fct-type": "module",
        "title": "Command"
      },
      "index": {
        "description": "Abstraction on executable commands",
        "hierarchy": "System Build Command",
        "module": "System.Build.Command",
        "name": "Command",
        "normalized": "",
        "package": "Lastik",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#t:Command",
      "description": {
        "fct-module": "System.Build.Command",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-Command.html#Command",
        "fct-type": "class",
        "title": "Command"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Command",
        "module": "System.Build.Command",
        "name": "Command",
        "normalized": "",
        "package": "Lastik",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#v:command",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines the executable command for a value. Since this is in \u003ccode\u003eIO\u003c/code\u003e it may use environment variables.\n\u003c/p\u003e",
        "fct-module": "System.Build.Command",
        "fct-package": "Lastik",
        "fct-signature": "c -\u003e IO String",
        "fct-source": "src/System-Build-Command.html#command",
        "fct-type": "method",
        "title": "command"
      },
      "index": {
        "description": "Determines the executable command for value Since this is in IO it may use environment variables",
        "hierarchy": "System Build Command",
        "module": "System.Build.Command",
        "name": "command",
        "normalized": "a-\u003eIO String",
        "package": "Lastik",
        "partial": "",
        "signature": "c-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor building a command for values that use paths.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.CompilePaths",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-CompilePaths.html",
        "fct-type": "module",
        "title": "CompilePaths"
      },
      "index": {
        "description": "For building command for values that use paths",
        "hierarchy": "System Build CompilePaths",
        "module": "System.Build.CompilePaths",
        "name": "CompilePaths",
        "normalized": "",
        "package": "Lastik",
        "partial": "Compile Paths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#t:CompilePaths",
      "description": {
        "fct-module": "System.Build.CompilePaths",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-CompilePaths.html#CompilePaths",
        "fct-type": "class",
        "title": "CompilePaths"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build CompilePaths",
        "module": "System.Build.CompilePaths",
        "name": "CompilePaths",
        "normalized": "",
        "package": "Lastik",
        "partial": "Compile Paths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#v:-61--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds a command for a value given a list of file paths.\n\u003c/p\u003e",
        "fct-module": "System.Build.CompilePaths",
        "fct-package": "Lastik",
        "fct-signature": "c -\u003e [FilePath] -\u003e String",
        "fct-source": "src/System-Build-CompilePaths.html#%3D%3E%3E",
        "fct-type": "method",
        "title": "(=\u003e\u003e)"
      },
      "index": {
        "description": "Builds command for value given list of file paths",
        "hierarchy": "System Build CompilePaths",
        "module": "System.Build.CompilePaths",
        "name": "(=\u003e\u003e) =\u003e\u003e",
        "normalized": "a-\u003e[FilePath]-\u003eString",
        "package": "Lastik",
        "partial": "",
        "signature": "c-\u003e[FilePath]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for performing operations on directories.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Directory.html",
        "fct-type": "module",
        "title": "Directory"
      },
      "index": {
        "description": "module for performing operations on directories",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "Directory",
        "normalized": "",
        "package": "Lastik",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:archiveDirectories",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a zip archive by changing into directories and archiving the contents.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e IO Archive",
        "fct-type": "function",
        "title": "archiveDirectories"
      },
      "index": {
        "description": "Create zip archive by changing into directories and archiving the contents",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "archiveDirectories",
        "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eIO Archive",
        "package": "Lastik",
        "partial": "Directories",
        "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eIO Archive"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:chdir",
      "description": {
        "fct-descr": "\u003cp\u003eChange to the given directory, then execute the given action, then change back to the original directory.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "FilePath-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "chdir"
      },
      "index": {
        "description": "Change to the given directory then execute the given action then change back to the original directory",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "chdir",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "Lastik",
        "partial": "",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the contents of a directory to another, perhaps trimming parent directories.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Copy the contents of directory to another perhaps trimming parent directories",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "copy",
        "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "",
        "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:copyl",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the contents of a directory to another, perhaps trimming parent directories.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "RecursionPredicate-\u003e FilterPredicate-\u003e Int-\u003e FilePath-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "copyl"
      },
      "index": {
        "description": "Copy the contents of directory to another perhaps trimming parent directories",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "copyl",
        "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "",
        "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:dropRoot",
      "description": {
        "fct-descr": "\u003cp\u003eDrops the parent directory of a given file path.\n\u003c/p\u003e\u003cpre\u003e dropRoot \"/foo/bar\" == \"/bar\"\n dropRoot \"foo/bar\" == \"bar\"\n dropRoot \"foo\" == \"\"\n dropRoot \"\" == \"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "FilePath-\u003e String",
        "fct-type": "function",
        "title": "dropRoot"
      },
      "index": {
        "description": "Drops the parent directory of given file path dropRoot foo bar bar dropRoot foo bar bar dropRoot foo dropRoot",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "dropRoot",
        "normalized": "FilePath-\u003eString",
        "package": "Lastik",
        "partial": "Root",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:dropRoot-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDrops the parent directory (\u003ccode\u003e\u003ca\u003edropRoot\u003c/a\u003e\u003c/code\u003e) of a given file path multiple times.\n\u003c/p\u003e\u003cpre\u003e dropRoot' 0 \"/foo/bar\" == \"/foo/bar\"\n dropRoot' 1 \"/foo/bar\" == \"/bar\"\n dropRoot' 1 \"foo/bar\" == \"bar\"\n dropRoot' 2 \"foo/bar\" == \"\"\n dropRoot' 10 \"foo/bar\" == \"\"\n\u003c/pre\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "Int-\u003e FilePath-\u003e FilePath",
        "fct-type": "function",
        "title": "dropRoot'"
      },
      "index": {
        "description": "Drops the parent directory dropRoot of given file path multiple times dropRoot foo bar foo bar dropRoot foo bar bar dropRoot foo bar bar dropRoot foo bar dropRoot foo bar",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "dropRoot'",
        "normalized": "Int-\u003eFilePath-\u003eFilePath",
        "package": "Lastik",
        "partial": "Root'",
        "signature": "Int-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:mkdir",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the given directory and its parents if it doesn't exist.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "mkdir"
      },
      "index": {
        "description": "Creates the given directory and its parents if it doesn exist",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "mkdir",
        "normalized": "FilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:rmdir",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves the given directory recursively if it exists.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "rmdir"
      },
      "index": {
        "description": "Removes the given directory recursively if it exists",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "rmdir",
        "normalized": "FilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:writeArchive",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a zip archive to a file.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "writeArchive"
      },
      "index": {
        "description": "Writes zip archive to file",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "writeArchive",
        "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "Archive",
        "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:writeHashArchive",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a zip archive to a file then computes a MD5 and SHA1 hash and writes them to files with \u003ccode\u003e\u003ca\u003e.md5\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.sha1\u003c/a\u003e\u003c/code\u003e extensions.\n\u003c/p\u003e",
        "fct-module": "System.Build.Directory",
        "fct-package": "Lastik",
        "fct-signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "writeHashArchive"
      },
      "index": {
        "description": "Writes zip archive to file then computes MD5 and SHA1 hash and writes them to files with md5 and sha1 extensions",
        "hierarchy": "System Build Directory",
        "module": "System.Build.Directory",
        "name": "writeHashArchive",
        "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
        "package": "Lastik",
        "partial": "Hash Archive",
        "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing file extensions for a value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Extensions",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Extensions.html",
        "fct-type": "module",
        "title": "Extensions"
      },
      "index": {
        "description": "Computing file extensions for value",
        "hierarchy": "System Build Extensions",
        "module": "System.Build.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "Lastik",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#t:Extensions",
      "description": {
        "fct-module": "System.Build.Extensions",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-Extensions.html#Extensions",
        "fct-type": "class",
        "title": "Extensions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Extensions",
        "module": "System.Build.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "Lastik",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#v:exts",
      "description": {
        "fct-module": "System.Build.Extensions",
        "fct-package": "Lastik",
        "fct-signature": "e -\u003e [String]",
        "fct-source": "src/System-Build-Extensions.html#exts",
        "fct-type": "method",
        "title": "exts"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Extensions",
        "module": "System.Build.Extensions",
        "name": "exts",
        "normalized": "a-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "e-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#v:exts-39-",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all the file extensions associated with the given value and prepend a single dot.\n\u003c/p\u003e",
        "fct-module": "System.Build.Extensions",
        "fct-package": "Lastik",
        "fct-signature": "e -\u003e [String]",
        "fct-source": "src/System-Build-Extensions.html#exts%27",
        "fct-type": "function",
        "title": "exts'"
      },
      "index": {
        "description": "Return all the file extensions associated with the given value and prepend single dot",
        "hierarchy": "System Build Extensions",
        "module": "System.Build.Extensions",
        "name": "exts'",
        "normalized": "a-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "e-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for compiling Java source files using \u003ccode\u003ejavac\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Java-Javac.html",
        "fct-type": "module",
        "title": "Javac"
      },
      "index": {
        "description": "module for compiling Java source files using javac",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Javac",
        "normalized": "",
        "package": "Lastik",
        "partial": "Javac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Debug",
      "description": {
        "fct-descr": "\u003cp\u003eThe debug options that can be passed to \u003ccode\u003ejavac\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "data",
        "title": "Debug"
      },
      "index": {
        "description": "The debug options that can be passed to javac",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Debug",
        "normalized": "",
        "package": "Lastik",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Implicit",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify whether or not to generate class files for implicitly referenced files.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javac.html#Implicit",
        "fct-type": "data",
        "title": "Implicit"
      },
      "index": {
        "description": "Specify whether or not to generate class files for implicitly referenced files",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Implicit",
        "normalized": "",
        "package": "Lastik",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Javac",
      "description": {
        "fct-descr": "\u003cp\u003eJavac is the compiler for Java source files.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javac.html#Javac",
        "fct-type": "data",
        "title": "Javac"
      },
      "index": {
        "description": "Javac is the compiler for Java source files",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Javac",
        "normalized": "",
        "package": "Lastik",
        "partial": "Javac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Proc",
      "description": {
        "fct-descr": "\u003cp\u003eControl whether annotation processing and/or compilation is done.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javac.html#Proc",
        "fct-type": "data",
        "title": "Proc"
      },
      "index": {
        "description": "Control whether annotation processing and or compilation is done",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Proc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:All",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all debugging info.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "All",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "Generate all debugging info",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "All",
        "normalized": "",
        "package": "Lastik",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Lines",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003elines\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Lines",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "function",
        "title": "Lines"
      },
      "index": {
        "description": "Generate only some debugging info lines",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Lines",
        "normalized": "",
        "package": "Lastik",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate no debugging info.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "None",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "Generate no debugging info",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "None",
        "normalized": "",
        "package": "Lastik",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Source",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003esource\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Source",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "function",
        "title": "Source"
      },
      "index": {
        "description": "Generate only some debugging info source",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Source",
        "normalized": "",
        "package": "Lastik",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Vars",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003evars\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Vars",
        "fct-source": "src/System-Build-Java-Javac.html#Debug",
        "fct-type": "function",
        "title": "Vars"
      },
      "index": {
        "description": "Generate only some debugging info vars",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "Vars",
        "normalized": "",
        "package": "Lastik",
        "partial": "Vars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:akv",
      "description": {
        "fct-descr": "\u003cpre\u003e-Akey[=value]\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe ([String], Maybe String)",
        "fct-source": "src/System-Build-Java-Javac.html#akv",
        "fct-type": "function",
        "title": "akv"
      },
      "index": {
        "description": "Akey value",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "akv",
        "normalized": "Javac-\u003eMaybe([String],Maybe String)",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe([String],Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:bootclasspath",
      "description": {
        "fct-descr": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javac.html#bootclasspath",
        "fct-type": "function",
        "title": "bootclasspath"
      },
      "index": {
        "description": "bootclasspath",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "bootclasspath",
        "normalized": "Javac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:class-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate class files for implicitly referenced files (\u003ccode\u003eclass\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Implicit",
        "fct-source": "src/System-Build-Java-Javac.html#class%27",
        "fct-type": "function",
        "title": "class'"
      },
      "index": {
        "description": "Generate class files for implicitly referenced files class",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "class'",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:classpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-classpath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javac.html#classpath",
        "fct-type": "function",
        "title": "classpath"
      },
      "index": {
        "description": "classpath",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "classpath",
        "normalized": "Javac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:debug",
      "description": {
        "fct-descr": "\u003cpre\u003e-g\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe Debug",
        "fct-source": "src/System-Build-Java-Javac.html#debug",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "debug",
        "normalized": "Javac-\u003eMaybe Debug",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe Debug"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:deprecation",
      "description": {
        "fct-descr": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javac.html#deprecation",
        "fct-type": "function",
        "title": "deprecation"
      },
      "index": {
        "description": "deprecation",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "deprecation",
        "normalized": "Javac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:directory",
      "description": {
        "fct-descr": "\u003cpre\u003e-d\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javac.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "directory",
        "normalized": "Javac-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:encoding",
      "description": {
        "fct-descr": "\u003cpre\u003e-encoding\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javac.html#encoding",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "encoding",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "encoding",
        "normalized": "Javac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:endorseddirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-endorseddirs\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javac.html#endorseddirs",
        "fct-type": "function",
        "title": "endorseddirs"
      },
      "index": {
        "description": "endorseddirs",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "endorseddirs",
        "normalized": "Javac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:etc",
      "description": {
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javac.html#etc",
        "fct-type": "function",
        "title": "etc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "etc",
        "normalized": "Javac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:extdirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javac.html#extdirs",
        "fct-type": "function",
        "title": "extdirs"
      },
      "index": {
        "description": "extdirs",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "extdirs",
        "normalized": "Javac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:flags",
      "description": {
        "fct-descr": "\u003cpre\u003e-J\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javac.html#flags",
        "fct-type": "function",
        "title": "flags"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "flags",
        "normalized": "Javac-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:help",
      "description": {
        "fct-descr": "\u003cpre\u003e-help\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javac.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "help",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "help",
        "normalized": "Javac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:implicit",
      "description": {
        "fct-descr": "\u003cpre\u003e-implicit\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe Implicit",
        "fct-source": "src/System-Build-Java-Javac.html#implicit",
        "fct-type": "function",
        "title": "implicit"
      },
      "index": {
        "description": "implicit",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "implicit",
        "normalized": "Javac-\u003eMaybe Implicit",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe Implicit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:implicit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the second argument if the given \u003ccode\u003eImplicit\u003c/code\u003e is \u003ccode\u003enone\u003c/code\u003e, otherwise the third argument.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Implicit -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/System-Build-Java-Javac.html#implicit%27",
        "fct-type": "function",
        "title": "implicit'"
      },
      "index": {
        "description": "Returns the second argument if the given Implicit is none otherwise the third argument",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "implicit'",
        "normalized": "Implicit-\u003ea-\u003ea-\u003ea",
        "package": "Lastik",
        "partial": "",
        "signature": "Implicit-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:javac",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eJavac\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac",
        "fct-source": "src/System-Build-Java-Javac.html#javac",
        "fct-type": "function",
        "title": "javac"
      },
      "index": {
        "description": "Javac with nothing set",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "javac",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:javac-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eJavac\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe Proc -\u003e [String] -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e Maybe Implicit -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e Bool -\u003e Maybe ([String], Maybe String) -\u003e [String] -\u003e Maybe String -\u003e Javac",
        "fct-source": "src/System-Build-Java-Javac.html#javac%27",
        "fct-type": "function",
        "title": "javac'"
      },
      "index": {
        "description": "Construct Javac",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "javac'",
        "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe Proc-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe Implicit-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe([String],Maybe String)-\u003e[String]-\u003eMaybe String-\u003eJavac",
        "package": "Lastik",
        "partial": "",
        "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe Proc-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe Implicit-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe([String],Maybe String)-\u003e[String]-\u003eMaybe String-\u003eJavac"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:noneImplicit",
      "description": {
        "fct-descr": "\u003cp\u003eNo generate class files for implicitly referenced files (\u003ccode\u003enone\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Implicit",
        "fct-source": "src/System-Build-Java-Javac.html#noneImplicit",
        "fct-type": "function",
        "title": "noneImplicit"
      },
      "index": {
        "description": "No generate class files for implicitly referenced files none",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "noneImplicit",
        "normalized": "",
        "package": "Lastik",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:noneProc",
      "description": {
        "fct-descr": "\u003cp\u003eNo annotation processing (\u003ccode\u003enone\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Proc",
        "fct-source": "src/System-Build-Java-Javac.html#noneProc",
        "fct-type": "function",
        "title": "noneProc"
      },
      "index": {
        "description": "No annotation processing none",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "noneProc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:nowarn",
      "description": {
        "fct-descr": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javac.html#nowarn",
        "fct-type": "function",
        "title": "nowarn"
      },
      "index": {
        "description": "nowarn",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "nowarn",
        "normalized": "Javac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:only",
      "description": {
        "fct-descr": "\u003cp\u003eOnly annotation processing (\u003ccode\u003eonly\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Proc",
        "fct-source": "src/System-Build-Java-Javac.html#only",
        "fct-type": "function",
        "title": "only"
      },
      "index": {
        "description": "Only annotation processing only",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "only",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:proc",
      "description": {
        "fct-descr": "\u003cpre\u003e-proc\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe Proc",
        "fct-source": "src/System-Build-Java-Javac.html#proc",
        "fct-type": "function",
        "title": "proc"
      },
      "index": {
        "description": "proc",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "proc",
        "normalized": "Javac-\u003eMaybe Proc",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe Proc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:proc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the second argument if the given \u003ccode\u003eProc\u003c/code\u003e is \u003ccode\u003enone\u003c/code\u003e, otherwise the third argument.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Proc -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/System-Build-Java-Javac.html#proc%27",
        "fct-type": "function",
        "title": "proc'"
      },
      "index": {
        "description": "Returns the second argument if the given Proc is none otherwise the third argument",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "proc'",
        "normalized": "Proc-\u003ea-\u003ea-\u003ea",
        "package": "Lastik",
        "partial": "",
        "signature": "Proc-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:processor",
      "description": {
        "fct-descr": "\u003cpre\u003e-processor\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javac.html#processor",
        "fct-type": "function",
        "title": "processor"
      },
      "index": {
        "description": "processor",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "processor",
        "normalized": "Javac-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:processorpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-processorpath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javac.html#processorpath",
        "fct-type": "function",
        "title": "processorpath"
      },
      "index": {
        "description": "processorpath",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "processorpath",
        "normalized": "Javac-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:source",
      "description": {
        "fct-descr": "\u003cpre\u003e-source\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javac.html#source",
        "fct-type": "function",
        "title": "source"
      },
      "index": {
        "description": "source",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "source",
        "normalized": "Javac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:sourcepath",
      "description": {
        "fct-descr": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javac.html#sourcepath",
        "fct-type": "function",
        "title": "sourcepath"
      },
      "index": {
        "description": "sourcepath",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "sourcepath",
        "normalized": "Javac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:src",
      "description": {
        "fct-descr": "\u003cpre\u003e-s\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javac.html#src",
        "fct-type": "function",
        "title": "src"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "src",
        "normalized": "Javac-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:target",
      "description": {
        "fct-descr": "\u003cpre\u003e-target\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javac.html#target",
        "fct-type": "function",
        "title": "target"
      },
      "index": {
        "description": "target",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "target",
        "normalized": "Javac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:verbose",
      "description": {
        "fct-descr": "\u003cpre\u003e-verbose\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javac.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "verbose",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "verbose",
        "normalized": "Javac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:version",
      "description": {
        "fct-descr": "\u003cpre\u003e-version\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javac",
        "fct-package": "Lastik",
        "fct-signature": "Javac -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javac.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "version",
        "hierarchy": "System Build Java Javac",
        "module": "System.Build.Java.Javac",
        "name": "version",
        "normalized": "Javac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for documenting Java source files using \u003ccode\u003ejavadoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Java-Javadoc.html",
        "fct-type": "module",
        "title": "Javadoc"
      },
      "index": {
        "description": "module for documenting Java source files using javadoc",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "Javadoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Javadoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#t:Javadoc",
      "description": {
        "fct-descr": "\u003cp\u003eJavadoc is the compiler for Java API documentation.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javadoc.html#Javadoc",
        "fct-type": "data",
        "title": "Javadoc"
      },
      "index": {
        "description": "Javadoc is the compiler for Java API documentation",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "Javadoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Javadoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#t:SourceRelease",
      "description": {
        "fct-descr": "\u003cp\u003eProvide source compatibility with specified release\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Java-Javadoc.html#SourceRelease",
        "fct-type": "data",
        "title": "SourceRelease"
      },
      "index": {
        "description": "Provide source compatibility with specified release",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "SourceRelease",
        "normalized": "",
        "package": "Lastik",
        "partial": "Source Release",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S13",
      "description": {
        "fct-descr": "\u003cpre\u003e1.3\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "S13",
        "fct-source": "src/System-Build-Java-Javadoc.html#SourceRelease",
        "fct-type": "function",
        "title": "S13"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "S13",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S14",
      "description": {
        "fct-descr": "\u003cpre\u003e1.4\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "S14",
        "fct-source": "src/System-Build-Java-Javadoc.html#SourceRelease",
        "fct-type": "function",
        "title": "S14"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "S14",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S15",
      "description": {
        "fct-descr": "\u003cpre\u003e1.5\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "S15",
        "fct-source": "src/System-Build-Java-Javadoc.html#SourceRelease",
        "fct-type": "function",
        "title": "S15"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "S15",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:author",
      "description": {
        "fct-descr": "\u003cpre\u003e-author\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#author",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "author",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "author",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:bootclasspath",
      "description": {
        "fct-descr": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javadoc.html#bootclasspath",
        "fct-type": "function",
        "title": "bootclasspath"
      },
      "index": {
        "description": "bootclasspath",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "bootclasspath",
        "normalized": "Javadoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:bottom",
      "description": {
        "fct-descr": "\u003cpre\u003e-bottom\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#bottom",
        "fct-type": "function",
        "title": "bottom"
      },
      "index": {
        "description": "bottom",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "bottom",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:breakiterator",
      "description": {
        "fct-descr": "\u003cpre\u003e-breakiterator\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#breakiterator",
        "fct-type": "function",
        "title": "breakiterator"
      },
      "index": {
        "description": "breakiterator",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "breakiterator",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:charset",
      "description": {
        "fct-descr": "\u003cpre\u003e-charset\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#charset",
        "fct-type": "function",
        "title": "charset"
      },
      "index": {
        "description": "charset",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "charset",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:classpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-classpath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javadoc.html#classpath",
        "fct-type": "function",
        "title": "classpath"
      },
      "index": {
        "description": "classpath",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "classpath",
        "normalized": "Javadoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:directory",
      "description": {
        "fct-descr": "\u003cpre\u003e-d\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javadoc.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "directory",
        "normalized": "Javadoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docencoding",
      "description": {
        "fct-descr": "\u003cpre\u003e-docencoding\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#docencoding",
        "fct-type": "function",
        "title": "docencoding"
      },
      "index": {
        "description": "docencoding",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "docencoding",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docfilessubdirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-docfilessubdirs\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#docfilessubdirs",
        "fct-type": "function",
        "title": "docfilessubdirs"
      },
      "index": {
        "description": "docfilessubdirs",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "docfilessubdirs",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:doclet",
      "description": {
        "fct-descr": "\u003cpre\u003e-doclet\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#doclet",
        "fct-type": "function",
        "title": "doclet"
      },
      "index": {
        "description": "doclet",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "doclet",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docletpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-docletpath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javadoc.html#docletpath",
        "fct-type": "function",
        "title": "docletpath"
      },
      "index": {
        "description": "docletpath",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "docletpath",
        "normalized": "Javadoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:doctitle",
      "description": {
        "fct-descr": "\u003cpre\u003e-doctitle\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#doctitle",
        "fct-type": "function",
        "title": "doctitle"
      },
      "index": {
        "description": "doctitle",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "doctitle",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:encoding",
      "description": {
        "fct-descr": "\u003cpre\u003e-encoding\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#encoding",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "encoding",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "encoding",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:exclude",
      "description": {
        "fct-descr": "\u003cpre\u003e-exclude\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#exclude",
        "fct-type": "function",
        "title": "exclude"
      },
      "index": {
        "description": "exclude",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "exclude",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:excludedocfilessubdir",
      "description": {
        "fct-descr": "\u003cpre\u003e-excludedocfilessubdir\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#excludedocfilessubdir",
        "fct-type": "function",
        "title": "excludedocfilessubdir"
      },
      "index": {
        "description": "excludedocfilessubdir",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "excludedocfilessubdir",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:extdirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javadoc.html#extdirs",
        "fct-type": "function",
        "title": "extdirs"
      },
      "index": {
        "description": "extdirs",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "extdirs",
        "normalized": "Javadoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:flags",
      "description": {
        "fct-descr": "\u003cpre\u003e-flags\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#flags",
        "fct-type": "function",
        "title": "flags"
      },
      "index": {
        "description": "flags",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "flags",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:footer",
      "description": {
        "fct-descr": "\u003cpre\u003e-footer\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#footer",
        "fct-type": "function",
        "title": "footer"
      },
      "index": {
        "description": "footer",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "footer",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:group",
      "description": {
        "fct-descr": "\u003cpre\u003e-group\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [(String, [String])]",
        "fct-source": "src/System-Build-Java-Javadoc.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "group",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "group",
        "normalized": "Javadoc-\u003e[(String,[String])]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[(String,[String])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:header",
      "description": {
        "fct-descr": "\u003cpre\u003e-header\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "header",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "header",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:help",
      "description": {
        "fct-descr": "\u003cpre\u003e-help\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "help",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "help",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:helpfile",
      "description": {
        "fct-descr": "\u003cpre\u003e-helpfile\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javadoc.html#helpfile",
        "fct-type": "function",
        "title": "helpfile"
      },
      "index": {
        "description": "helpfile",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "helpfile",
        "normalized": "Javadoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:javadoc",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eJavadoc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc",
        "fct-source": "src/System-Build-Java-Javadoc.html#javadoc",
        "fct-type": "function",
        "title": "javadoc"
      },
      "index": {
        "description": "Javadoc with nothing set",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "javadoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:javadoc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eJavadoc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Maybe FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe FilePath -\u003e [FilePath] -\u003e [FilePath] -\u003e [String] -\u003e [String] -\u003e Bool -\u003e [FilePath] -\u003e Maybe SourceRelease -\u003e [FilePath] -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e [String] -\u003e Maybe FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e [String] -\u003e [(String, String)] -\u003e [String] -\u003e [(String, [String])] -\u003e Bool -\u003e Bool -\u003e [String] -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [(String, String, String)] -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe FilePath -\u003e Bool -\u003e Maybe Int -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe String -\u003e Javadoc",
        "fct-source": "src/System-Build-Java-Javadoc.html#javadoc%27",
        "fct-type": "function",
        "title": "javadoc'"
      },
      "index": {
        "description": "Construct Javadoc",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "javadoc'",
        "normalized": "Maybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003e[FilePath]-\u003e[FilePath]-\u003e[String]-\u003e[String]-\u003eBool-\u003e[FilePath]-\u003eMaybe SourceRelease-\u003e[FilePath]-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003e[String]-\u003eMaybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003e[(String,String)]-\u003e[String]-\u003e[(String,[String])]-\u003eBool-\u003eBool-\u003e[String]-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[(String,String,String)]-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003eBool-\u003eMaybe Int-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eJavadoc",
        "package": "Lastik",
        "partial": "",
        "signature": "Maybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003e[FilePath]-\u003e[FilePath]-\u003e[String]-\u003e[String]-\u003eBool-\u003e[FilePath]-\u003eMaybe SourceRelease-\u003e[FilePath]-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003e[String]-\u003eMaybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003e[(String,String)]-\u003e[String]-\u003e[(String,[String])]-\u003eBool-\u003eBool-\u003e[String]-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[(String,String,String)]-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003eBool-\u003eMaybe Int-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eJavadoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:keywords",
      "description": {
        "fct-descr": "\u003cpre\u003e-keywords\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#keywords",
        "fct-type": "function",
        "title": "keywords"
      },
      "index": {
        "description": "keywords",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "keywords",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:link",
      "description": {
        "fct-descr": "\u003cpre\u003e-link\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "link",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "link",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:linkoffline",
      "description": {
        "fct-descr": "\u003cpre\u003e-linkoffline\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [(String, String)]",
        "fct-source": "src/System-Build-Java-Javadoc.html#linkoffline",
        "fct-type": "function",
        "title": "linkoffline"
      },
      "index": {
        "description": "linkoffline",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "linkoffline",
        "normalized": "Javadoc-\u003e[(String,String)]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:linksource",
      "description": {
        "fct-descr": "\u003cpre\u003e-linksource\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#linksource",
        "fct-type": "function",
        "title": "linksource"
      },
      "index": {
        "description": "linksource",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "linksource",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:locale",
      "description": {
        "fct-descr": "\u003cpre\u003e-locale\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#locale",
        "fct-type": "function",
        "title": "locale"
      },
      "index": {
        "description": "locale",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "locale",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nocomment",
      "description": {
        "fct-descr": "\u003cpre\u003e-nocomment\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nocomment",
        "fct-type": "function",
        "title": "nocomment"
      },
      "index": {
        "description": "nocomment",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nocomment",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nodeprecated",
      "description": {
        "fct-descr": "\u003cpre\u003e-nodeprecated\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nodeprecated",
        "fct-type": "function",
        "title": "nodeprecated"
      },
      "index": {
        "description": "nodeprecated",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nodeprecated",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nodeprecatedlist",
      "description": {
        "fct-descr": "\u003cpre\u003e-nodeprecatedlist\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nodeprecatedlist",
        "fct-type": "function",
        "title": "nodeprecatedlist"
      },
      "index": {
        "description": "nodeprecatedlist",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nodeprecatedlist",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nohelp",
      "description": {
        "fct-descr": "\u003cpre\u003e-nohelp\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nohelp",
        "fct-type": "function",
        "title": "nohelp"
      },
      "index": {
        "description": "nohelp",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nohelp",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:noindex",
      "description": {
        "fct-descr": "\u003cpre\u003e-noindex\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#noindex",
        "fct-type": "function",
        "title": "noindex"
      },
      "index": {
        "description": "noindex",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "noindex",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nonavbar",
      "description": {
        "fct-descr": "\u003cpre\u003e-nonavbar\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nonavbar",
        "fct-type": "function",
        "title": "nonavbar"
      },
      "index": {
        "description": "nonavbar",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nonavbar",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:noqualifier",
      "description": {
        "fct-descr": "\u003cpre\u003e-noqualifier\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#noqualifier",
        "fct-type": "function",
        "title": "noqualifier"
      },
      "index": {
        "description": "noqualifier",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "noqualifier",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nosince",
      "description": {
        "fct-descr": "\u003cpre\u003e-nosince\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#nosince",
        "fct-type": "function",
        "title": "nosince"
      },
      "index": {
        "description": "nosince",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "nosince",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:notimestamp",
      "description": {
        "fct-descr": "\u003cpre\u003e-notimestamp\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#notimestamp",
        "fct-type": "function",
        "title": "notimestamp"
      },
      "index": {
        "description": "notimestamp",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "notimestamp",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:notree",
      "description": {
        "fct-descr": "\u003cpre\u003e-notree\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#notree",
        "fct-type": "function",
        "title": "notree"
      },
      "index": {
        "description": "notree",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "notree",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:overview",
      "description": {
        "fct-descr": "\u003cpre\u003e-overview\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javadoc.html#overview",
        "fct-type": "function",
        "title": "overview"
      },
      "index": {
        "description": "overview",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "overview",
        "normalized": "Javadoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:package",
      "description": {
        "fct-descr": "\u003cpre\u003e-package\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#package",
        "fct-type": "function",
        "title": "package"
      },
      "index": {
        "description": "package",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "package",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:private",
      "description": {
        "fct-descr": "\u003cpre\u003e-private\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#private",
        "fct-type": "function",
        "title": "private"
      },
      "index": {
        "description": "private",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "private",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:protected",
      "description": {
        "fct-descr": "\u003cpre\u003e-protected\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#protected",
        "fct-type": "function",
        "title": "protected"
      },
      "index": {
        "description": "protected",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "protected",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:public",
      "description": {
        "fct-descr": "\u003cpre\u003e-public\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#public",
        "fct-type": "function",
        "title": "public"
      },
      "index": {
        "description": "public",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "public",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:quiet",
      "description": {
        "fct-descr": "\u003cpre\u003e-quiet\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#quiet",
        "fct-type": "function",
        "title": "quiet"
      },
      "index": {
        "description": "quiet",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "quiet",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:serialwarn",
      "description": {
        "fct-descr": "\u003cpre\u003e-serialwarn\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#serialwarn",
        "fct-type": "function",
        "title": "serialwarn"
      },
      "index": {
        "description": "serialwarn",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "serialwarn",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:source",
      "description": {
        "fct-descr": "\u003cpre\u003e-source\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe SourceRelease",
        "fct-source": "src/System-Build-Java-Javadoc.html#source",
        "fct-type": "function",
        "title": "source"
      },
      "index": {
        "description": "source",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "source",
        "normalized": "Javadoc-\u003eMaybe SourceRelease",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe SourceRelease"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:sourcepath",
      "description": {
        "fct-descr": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Java-Javadoc.html#sourcepath",
        "fct-type": "function",
        "title": "sourcepath"
      },
      "index": {
        "description": "sourcepath",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "sourcepath",
        "normalized": "Javadoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:sourcetab",
      "description": {
        "fct-descr": "\u003cpre\u003e-sourcetab\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe Int",
        "fct-source": "src/System-Build-Java-Javadoc.html#sourcetab",
        "fct-type": "function",
        "title": "sourcetab"
      },
      "index": {
        "description": "sourcetab",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "sourcetab",
        "normalized": "Javadoc-\u003eMaybe Int",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:splitindex",
      "description": {
        "fct-descr": "\u003cpre\u003e-splitindex\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#splitindex",
        "fct-type": "function",
        "title": "splitindex"
      },
      "index": {
        "description": "splitindex",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "splitindex",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:stylesheetfile",
      "description": {
        "fct-descr": "\u003cpre\u003e-stylesheetfile\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Java-Javadoc.html#stylesheetfile",
        "fct-type": "function",
        "title": "stylesheetfile"
      },
      "index": {
        "description": "stylesheetfile",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "stylesheetfile",
        "normalized": "Javadoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:subpackages",
      "description": {
        "fct-descr": "\u003cpre\u003e-subpackages\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [String]",
        "fct-source": "src/System-Build-Java-Javadoc.html#subpackages",
        "fct-type": "function",
        "title": "subpackages"
      },
      "index": {
        "description": "subpackages",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "subpackages",
        "normalized": "Javadoc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:tag",
      "description": {
        "fct-descr": "\u003cpre\u003e-tag\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e [(String, String, String)]",
        "fct-source": "src/System-Build-Java-Javadoc.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "tag",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "tag",
        "normalized": "Javadoc-\u003e[(String,String,String)]",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003e[(String,String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:taglet",
      "description": {
        "fct-descr": "\u003cpre\u003e-taglet\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#taglet",
        "fct-type": "function",
        "title": "taglet"
      },
      "index": {
        "description": "taglet",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "taglet",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:tagletpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-tagletpath\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#tagletpath",
        "fct-type": "function",
        "title": "tagletpath"
      },
      "index": {
        "description": "tagletpath",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "tagletpath",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:top",
      "description": {
        "fct-descr": "\u003cpre\u003e-top\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "top",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "top",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:use",
      "description": {
        "fct-descr": "\u003cpre\u003e-use\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#use",
        "fct-type": "function",
        "title": "use"
      },
      "index": {
        "description": "use",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "use",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:verbose",
      "description": {
        "fct-descr": "\u003cpre\u003e-verbose\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "verbose",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "verbose",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:version",
      "description": {
        "fct-descr": "\u003cpre\u003e-version\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Bool",
        "fct-source": "src/System-Build-Java-Javadoc.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "version",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "version",
        "normalized": "Javadoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:windowtitle",
      "description": {
        "fct-descr": "\u003cpre\u003e-windowtitle\u003c/pre\u003e",
        "fct-module": "System.Build.Java.Javadoc",
        "fct-package": "Lastik",
        "fct-signature": "Javadoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Java-Javadoc.html#windowtitle",
        "fct-type": "function",
        "title": "windowtitle"
      },
      "index": {
        "description": "windowtitle",
        "hierarchy": "System Build Java Javadoc",
        "module": "System.Build.Java.Javadoc",
        "name": "windowtitle",
        "normalized": "Javadoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Javadoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that have the potential for an output directory.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.OutputDirectory",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-OutputDirectory.html",
        "fct-type": "module",
        "title": "OutputDirectory"
      },
      "index": {
        "description": "Values that have the potential for an output directory",
        "hierarchy": "System Build OutputDirectory",
        "module": "System.Build.OutputDirectory",
        "name": "OutputDirectory",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#t:OutputDirectory",
      "description": {
        "fct-module": "System.Build.OutputDirectory",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-OutputDirectory.html#OutputDirectory",
        "fct-type": "class",
        "title": "OutputDirectory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build OutputDirectory",
        "module": "System.Build.OutputDirectory",
        "name": "OutputDirectory",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#v:outdir",
      "description": {
        "fct-module": "System.Build.OutputDirectory",
        "fct-package": "Lastik",
        "fct-signature": "o -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-OutputDirectory.html#outdir",
        "fct-type": "method",
        "title": "outdir"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build OutputDirectory",
        "module": "System.Build.OutputDirectory",
        "name": "outdir",
        "normalized": "a-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "o-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that reference a list of file paths.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.OutputReferenceGet",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-OutputReferenceGet.html",
        "fct-type": "module",
        "title": "OutputReferenceGet"
      },
      "index": {
        "description": "Values that reference list of file paths",
        "hierarchy": "System Build OutputReferenceGet",
        "module": "System.Build.OutputReferenceGet",
        "name": "OutputReferenceGet",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Reference Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#t:OutputReferenceGet",
      "description": {
        "fct-module": "System.Build.OutputReferenceGet",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-OutputReferenceGet.html#OutputReferenceGet",
        "fct-type": "class",
        "title": "OutputReferenceGet"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build OutputReferenceGet",
        "module": "System.Build.OutputReferenceGet",
        "name": "OutputReferenceGet",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Reference Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#v:getReference",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the file paths referenced by the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.OutputReferenceGet",
        "fct-package": "Lastik",
        "fct-signature": "r -\u003e [FilePath]",
        "fct-source": "src/System-Build-OutputReferenceGet.html#getReference",
        "fct-type": "method",
        "title": "getReference"
      },
      "index": {
        "description": "Return the file paths referenced by the given value",
        "hierarchy": "System Build OutputReferenceGet",
        "module": "System.Build.OutputReferenceGet",
        "name": "getReference",
        "normalized": "a-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "Reference",
        "signature": "r-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that reference a list of file paths.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.OutputReferenceSet",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-OutputReferenceSet.html",
        "fct-type": "module",
        "title": "OutputReferenceSet"
      },
      "index": {
        "description": "Values that reference list of file paths",
        "hierarchy": "System Build OutputReferenceSet",
        "module": "System.Build.OutputReferenceSet",
        "name": "OutputReferenceSet",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Reference Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#t:OutputReferenceSet",
      "description": {
        "fct-module": "System.Build.OutputReferenceSet",
        "fct-package": "Lastik",
        "fct-signature": "class",
        "fct-source": "src/System-Build-OutputReferenceSet.html#OutputReferenceSet",
        "fct-type": "class",
        "title": "OutputReferenceSet"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build OutputReferenceSet",
        "module": "System.Build.OutputReferenceSet",
        "name": "OutputReferenceSet",
        "normalized": "",
        "package": "Lastik",
        "partial": "Output Reference Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#v:setReference",
      "description": {
        "fct-descr": "\u003cp\u003eSet the file path list reference of the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.OutputReferenceSet",
        "fct-package": "Lastik",
        "fct-signature": "[FilePath] -\u003e r -\u003e r",
        "fct-source": "src/System-Build-OutputReferenceSet.html#setReference",
        "fct-type": "method",
        "title": "setReference"
      },
      "index": {
        "description": "Set the file path list reference of the given value",
        "hierarchy": "System Build OutputReferenceSet",
        "module": "System.Build.OutputReferenceSet",
        "name": "setReference",
        "normalized": "[FilePath]-\u003ea-\u003ea",
        "package": "Lastik",
        "partial": "Reference",
        "signature": "[FilePath]-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for running compilable data types that take a list of file paths to compile.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Runner.html",
        "fct-type": "module",
        "title": "Runner"
      },
      "index": {
        "description": "module for running compilable data types that take list of file paths to compile",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "Runner",
        "normalized": "",
        "package": "Lastik",
        "partial": "Runner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#t:Runner",
      "description": {
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "type",
        "fct-source": "src/System-Build-Runner.html#Runner",
        "fct-type": "type",
        "title": "Runner"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "Runner",
        "normalized": "",
        "package": "Lastik",
        "partial": "Runner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#t:RunnerExit",
      "description": {
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "type",
        "fct-source": "src/System-Build-Runner.html#RunnerExit",
        "fct-type": "type",
        "title": "RunnerExit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "RunnerExit",
        "normalized": "",
        "package": "Lastik",
        "partial": "Runner Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-33--33--33-",
      "description": {
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "RunnerExit c",
        "fct-source": "src/System-Build-Runner.html#%21%21%21",
        "fct-type": "function",
        "title": "(!!!)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(!!!) !!!",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-43--43--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the given file paths to the reference target of the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "[FilePath]-\u003e r-\u003e r",
        "fct-type": "function",
        "title": "(++\u003e\u003e)"
      },
      "index": {
        "description": "Adds the given file paths to the reference target of the given value",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(++\u003e\u003e) ++\u003e\u003e",
        "normalized": "[FilePath]-\u003ea-\u003ea",
        "package": "Lastik",
        "partial": "",
        "signature": "[FilePath]-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-43--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the given file path to the reference target of the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "FilePath-\u003e r-\u003e r",
        "fct-type": "function",
        "title": "(+\u003e\u003e)"
      },
      "index": {
        "description": "Adds the given file path to the reference target of the given value",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(+\u003e\u003e) +\u003e\u003e",
        "normalized": "FilePath-\u003ea-\u003ea",
        "package": "Lastik",
        "partial": "",
        "signature": "FilePath-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-45--62--45-",
      "description": {
        "fct-descr": "\u003cp\u003eA runner that recursively searches the output target for files that match a given extension and compiles them as a system command.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "RunnerExit c",
        "fct-source": "src/System-Build-Runner.html#-%3E-",
        "fct-type": "function",
        "title": "(-\u003e-)"
      },
      "index": {
        "description": "runner that recursively searches the output target for files that match given extension and compiles them as system command",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(-\u003e-) -\u003e-",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--45--45-",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the second value only if the first produces \u003ccode\u003eExitSuccess\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "m ExitCode -\u003e m ExitCode -\u003e m ExitCode",
        "fct-source": "src/System-Build-Runner.html#%3E--",
        "fct-type": "function",
        "title": "(\u003e--)"
      },
      "index": {
        "description": "Applies the second value only if the first produces ExitSuccess",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(\u003e--) \u003e--",
        "normalized": "a ExitCode-\u003ea ExitCode-\u003ea ExitCode",
        "package": "Lastik",
        "partial": "",
        "signature": "m ExitCode-\u003em ExitCode-\u003em ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the output target directory then execute the compile result as a system command.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "RunnerExit c",
        "fct-source": "src/System-Build-Runner.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Create the output target directory then execute the compile result as system command",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the second action only if the first produces \u003ccode\u003eExitSuccess\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "m ExitCode -\u003e m () -\u003e m ()",
        "fct-source": "src/System-Build-Runner.html#%3E%3D%3D",
        "fct-type": "function",
        "title": "(\u003e==)"
      },
      "index": {
        "description": "Executes the second action only if the first produces ExitSuccess",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(\u003e==) \u003e==",
        "normalized": "a ExitCode-\u003ea()-\u003ea()",
        "package": "Lastik",
        "partial": "",
        "signature": "m ExitCode-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the (potential) output target of the given value to the output target of the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "o-\u003e r-\u003e r",
        "fct-type": "function",
        "title": "(\u003e===\u003e)"
      },
      "index": {
        "description": "Adds the potential output target of the given value to the output target of the given value",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(\u003e===\u003e) \u003e===\u003e",
        "normalized": "a-\u003eb-\u003eb",
        "package": "Lastik",
        "partial": "",
        "signature": "o-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--62--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the (potential) output target and output references of the given value to the output target of the given value.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "o-\u003e r-\u003e r",
        "fct-type": "function",
        "title": "(\u003e=\u003e=\u003e)"
      },
      "index": {
        "description": "Adds the potential output target and output references of the given value to the output target of the given value",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "(\u003e=\u003e=\u003e) \u003e=\u003e=\u003e",
        "normalized": "a-\u003eb-\u003eb",
        "package": "Lastik",
        "partial": "",
        "signature": "o-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:pathTransform",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the list of file paths before executing the runner.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "([FilePath] -\u003e IO [FilePath]) -\u003e Runner x t -\u003e Runner x t",
        "fct-source": "src/System-Build-Runner.html#pathTransform",
        "fct-type": "function",
        "title": "pathTransform"
      },
      "index": {
        "description": "Transform the list of file paths before executing the runner",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "pathTransform",
        "normalized": "([FilePath]-\u003eIO[FilePath])-\u003eRunner a b-\u003eRunner a b",
        "package": "Lastik",
        "partial": "Transform",
        "signature": "([FilePath]-\u003eIO[FilePath])-\u003eRunner x t-\u003eRunner x t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:pathTransform-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGet all file paths with the given file extension (recursively) and execute the runner on those.\n\u003c/p\u003e",
        "fct-module": "System.Build.Runner",
        "fct-package": "Lastik",
        "fct-signature": "e -\u003e Runner x r -\u003e Runner x r",
        "fct-source": "src/System-Build-Runner.html#pathTransform%27",
        "fct-type": "function",
        "title": "pathTransform'"
      },
      "index": {
        "description": "Get all file paths with the given file extension recursively and execute the runner on those",
        "hierarchy": "System Build Runner",
        "module": "System.Build.Runner",
        "name": "pathTransform'",
        "normalized": "a-\u003eRunner b c-\u003eRunner b c",
        "package": "Lastik",
        "partial": "Transform'",
        "signature": "e-\u003eRunner x r-\u003eRunner x r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents that access levels available to \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Scala.Access",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Scala-Access.html",
        "fct-type": "module",
        "title": "Access"
      },
      "index": {
        "description": "module that represents that access levels available to scaladoc",
        "hierarchy": "System Build Scala Access",
        "module": "System.Build.Scala.Access",
        "name": "Access",
        "normalized": "",
        "package": "Lastik",
        "partial": "Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#t:Access",
      "description": {
        "fct-descr": "\u003cp\u003eShow only public, protected/public (default) or all classes and members (public,protected,private)\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Access",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Access.html#Access",
        "fct-type": "data",
        "title": "Access"
      },
      "index": {
        "description": "Show only public protected public default or all classes and members public protected private",
        "hierarchy": "System Build Scala Access",
        "module": "System.Build.Scala.Access",
        "name": "Access",
        "normalized": "",
        "package": "Lastik",
        "partial": "Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Private",
      "description": {
        "fct-descr": "\u003cpre\u003eprivate\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Access",
        "fct-package": "Lastik",
        "fct-signature": "Private",
        "fct-source": "src/System-Build-Scala-Access.html#Access",
        "fct-type": "function",
        "title": "Private"
      },
      "index": {
        "description": "private",
        "hierarchy": "System Build Scala Access",
        "module": "System.Build.Scala.Access",
        "name": "Private",
        "normalized": "",
        "package": "Lastik",
        "partial": "Private",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Protected",
      "description": {
        "fct-descr": "\u003cpre\u003eprotected\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Access",
        "fct-package": "Lastik",
        "fct-signature": "Protected",
        "fct-source": "src/System-Build-Scala-Access.html#Access",
        "fct-type": "function",
        "title": "Protected"
      },
      "index": {
        "description": "protected",
        "hierarchy": "System Build Scala Access",
        "module": "System.Build.Scala.Access",
        "name": "Protected",
        "normalized": "",
        "package": "Lastik",
        "partial": "Protected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Public",
      "description": {
        "fct-descr": "\u003cpre\u003epublic\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Access",
        "fct-package": "Lastik",
        "fct-signature": "Public",
        "fct-source": "src/System-Build-Scala-Access.html#Access",
        "fct-type": "function",
        "title": "Public"
      },
      "index": {
        "description": "public",
        "hierarchy": "System Build Scala Access",
        "module": "System.Build.Scala.Access",
        "name": "Public",
        "normalized": "",
        "package": "Lastik",
        "partial": "Public",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents the debug levels to \u003ccode\u003escalac\u003c/code\u003e and \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Scala-Debug.html",
        "fct-type": "module",
        "title": "Debug"
      },
      "index": {
        "description": "module that represents the debug levels to scalac and scaladoc",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "Lastik",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#t:Debug",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify level of generated debugging info (none,source,line,vars,notailcalls)\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "data",
        "title": "Debug"
      },
      "index": {
        "description": "Specify level of generated debugging info none source line vars notailcalls",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "Lastik",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Line",
      "description": {
        "fct-descr": "\u003cpre\u003eline\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "Line",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "line",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "Line",
        "normalized": "",
        "package": "Lastik",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:NoTailCalls",
      "description": {
        "fct-descr": "\u003cpre\u003enotailcalls\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "NoTailCalls",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "function",
        "title": "NoTailCalls"
      },
      "index": {
        "description": "notailcalls",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "NoTailCalls",
        "normalized": "",
        "package": "Lastik",
        "partial": "No Tail Calls",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:None",
      "description": {
        "fct-descr": "\u003cpre\u003enone\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "None",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "none",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "None",
        "normalized": "",
        "package": "Lastik",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Source",
      "description": {
        "fct-descr": "\u003cpre\u003esource\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "Source",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "function",
        "title": "Source"
      },
      "index": {
        "description": "source",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "Source",
        "normalized": "",
        "package": "Lastik",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Vars",
      "description": {
        "fct-descr": "\u003cpre\u003evars\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Debug",
        "fct-package": "Lastik",
        "fct-signature": "Vars",
        "fct-source": "src/System-Build-Scala-Debug.html#Debug",
        "fct-type": "function",
        "title": "Vars"
      },
      "index": {
        "description": "vars",
        "hierarchy": "System Build Scala Debug",
        "module": "System.Build.Scala.Debug",
        "name": "Vars",
        "normalized": "",
        "package": "Lastik",
        "partial": "Vars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for compiling Scala source files using \u003ccode\u003escalac\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Scala-Scalac.html",
        "fct-type": "module",
        "title": "Scalac"
      },
      "index": {
        "description": "module for compiling Scala source files using scalac",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "Scalac",
        "normalized": "",
        "package": "Lastik",
        "partial": "Scalac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#t:Fsc",
      "description": {
        "fct-descr": "\u003cp\u003eThe Scala fast compiler (\u003ccode\u003efsc\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Scalac.html#Fsc",
        "fct-type": "data",
        "title": "Fsc"
      },
      "index": {
        "description": "The Scala fast compiler fsc",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "Fsc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Fsc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#t:Scalac",
      "description": {
        "fct-descr": "\u003cp\u003eScalac is the compiler for Scala source files.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Scalac.html#Scalac",
        "fct-type": "data",
        "title": "Scalac"
      },
      "index": {
        "description": "Scalac is the compiler for Scala source files",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "Scalac",
        "normalized": "",
        "package": "Lastik",
        "partial": "Scalac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:-63-",
      "description": {
        "fct-descr": "\u003cpre\u003e@\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Scala-Scalac.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "(?) ?",
        "normalized": "Scalac-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:bootclasspath",
      "description": {
        "fct-descr": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scalac.html#bootclasspath",
        "fct-type": "function",
        "title": "bootclasspath"
      },
      "index": {
        "description": "bootclasspath",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "bootclasspath",
        "normalized": "Scalac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:classpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-classpath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scalac.html#classpath",
        "fct-type": "function",
        "title": "classpath"
      },
      "index": {
        "description": "classpath",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "classpath",
        "normalized": "Scalac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:debug",
      "description": {
        "fct-descr": "\u003cpre\u003e-g\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe Debug",
        "fct-source": "src/System-Build-Scala-Scalac.html#debug",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "debug",
        "normalized": "Scalac-\u003eMaybe Debug",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe Debug"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:deprecation",
      "description": {
        "fct-descr": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#deprecation",
        "fct-type": "function",
        "title": "deprecation"
      },
      "index": {
        "description": "deprecation",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "deprecation",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:directory",
      "description": {
        "fct-descr": "\u003cpre\u003e-d\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Scala-Scalac.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "directory",
        "normalized": "Scalac-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:encoding",
      "description": {
        "fct-descr": "\u003cpre\u003e-encoding\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scalac.html#encoding",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "encoding",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "encoding",
        "normalized": "Scalac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:etc",
      "description": {
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scalac.html#etc",
        "fct-type": "function",
        "title": "etc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "etc",
        "normalized": "Scalac-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:explaintypes",
      "description": {
        "fct-descr": "\u003cpre\u003e-explaintypes\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#explaintypes",
        "fct-type": "function",
        "title": "explaintypes"
      },
      "index": {
        "description": "explaintypes",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "explaintypes",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:extdirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scalac.html#extdirs",
        "fct-type": "function",
        "title": "extdirs"
      },
      "index": {
        "description": "extdirs",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "extdirs",
        "normalized": "Scalac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:flags",
      "description": {
        "fct-descr": "\u003cpre\u003e-flags\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc -\u003e [String]",
        "fct-source": "src/System-Build-Scala-Scalac.html#flags",
        "fct-type": "function",
        "title": "flags"
      },
      "index": {
        "description": "flags",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "flags",
        "normalized": "Fsc-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Fsc-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:fsc",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eFsc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc",
        "fct-source": "src/System-Build-Scala-Scalac.html#fsc",
        "fct-type": "function",
        "title": "fsc"
      },
      "index": {
        "description": "Fsc with nothing set",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "fsc",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:fscalac",
      "description": {
        "fct-descr": "\u003cp\u003eThe scalac options to use.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc -\u003e Scalac",
        "fct-source": "src/System-Build-Scala-Scalac.html#fscalac",
        "fct-type": "function",
        "title": "fscalac"
      },
      "index": {
        "description": "The scalac options to use",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "fscalac",
        "normalized": "Fsc-\u003eScalac",
        "package": "Lastik",
        "partial": "",
        "signature": "Fsc-\u003eScalac"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:help",
      "description": {
        "fct-descr": "\u003cpre\u003e-help\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "help",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "help",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:kscalac",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the given scalac to a list of command line options which may be used by other scala tools.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e [String]",
        "fct-source": "src/System-Build-Scala-Scalac.html#kscalac",
        "fct-type": "function",
        "title": "kscalac"
      },
      "index": {
        "description": "Convert the given scalac to list of command line options which may be used by other scala tools",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "kscalac",
        "normalized": "Scalac-\u003e[String]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:nowarn",
      "description": {
        "fct-descr": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#nowarn",
        "fct-type": "function",
        "title": "nowarn"
      },
      "index": {
        "description": "nowarn",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "nowarn",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:optimise",
      "description": {
        "fct-descr": "\u003cpre\u003e-optimise\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#optimise",
        "fct-type": "function",
        "title": "optimise"
      },
      "index": {
        "description": "optimise",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "optimise",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:print",
      "description": {
        "fct-descr": "\u003cpre\u003e-print\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "print",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "print",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:reset",
      "description": {
        "fct-descr": "\u003cpre\u003e-reset\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#reset",
        "fct-type": "function",
        "title": "reset"
      },
      "index": {
        "description": "reset",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "reset",
        "normalized": "Fsc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Fsc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:scalac",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eScalac\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac",
        "fct-source": "src/System-Build-Scala-Scalac.html#scalac",
        "fct-type": "function",
        "title": "scalac"
      },
      "index": {
        "description": "Scalac with nothing set",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "scalac",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:scalac-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eScalac\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe Target -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe String -\u003e Scalac",
        "fct-source": "src/System-Build-Scala-Scalac.html#scalac%27",
        "fct-type": "function",
        "title": "scalac'"
      },
      "index": {
        "description": "Construct Scalac",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "scalac'",
        "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eScalac",
        "package": "Lastik",
        "partial": "",
        "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eScalac"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:server",
      "description": {
        "fct-descr": "\u003cpre\u003e-server\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc -\u003e Maybe (String, String)",
        "fct-source": "src/System-Build-Scala-Scalac.html#server",
        "fct-type": "function",
        "title": "server"
      },
      "index": {
        "description": "server",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "server",
        "normalized": "Fsc-\u003eMaybe(String,String)",
        "package": "Lastik",
        "partial": "",
        "signature": "Fsc-\u003eMaybe(String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:shutdown",
      "description": {
        "fct-descr": "\u003cpre\u003e-shutdown\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Fsc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#shutdown",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "shutdown",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "shutdown",
        "normalized": "Fsc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Fsc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:sourcepath",
      "description": {
        "fct-descr": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scalac.html#sourcepath",
        "fct-type": "function",
        "title": "sourcepath"
      },
      "index": {
        "description": "sourcepath",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "sourcepath",
        "normalized": "Scalac-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:target",
      "description": {
        "fct-descr": "\u003cpre\u003e-target\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Maybe Target",
        "fct-source": "src/System-Build-Scala-Scalac.html#target",
        "fct-type": "function",
        "title": "target"
      },
      "index": {
        "description": "target",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "target",
        "normalized": "Scalac-\u003eMaybe Target",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eMaybe Target"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:unchecked",
      "description": {
        "fct-descr": "\u003cpre\u003e-unchecked\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#unchecked",
        "fct-type": "function",
        "title": "unchecked"
      },
      "index": {
        "description": "unchecked",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "unchecked",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:uniqid",
      "description": {
        "fct-descr": "\u003cpre\u003e-uniqid\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#uniqid",
        "fct-type": "function",
        "title": "uniqid"
      },
      "index": {
        "description": "uniqid",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "uniqid",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:verbose",
      "description": {
        "fct-descr": "\u003cpre\u003e-verbose\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "verbose",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "verbose",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:version",
      "description": {
        "fct-descr": "\u003cpre\u003e-version\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scalac",
        "fct-package": "Lastik",
        "fct-signature": "Scalac -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scalac.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "version",
        "hierarchy": "System Build Scala Scalac",
        "module": "System.Build.Scala.Scalac",
        "name": "version",
        "normalized": "Scalac-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scalac-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for documenting Scala source files using \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Scala-Scaladoc.html",
        "fct-type": "module",
        "title": "Scaladoc"
      },
      "index": {
        "description": "module for documenting Scala source files using scaladoc",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "Scaladoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Scaladoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#t:Scaladoc",
      "description": {
        "fct-descr": "\u003cp\u003eJavadoc is the compiler for Scala API documentation.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#Scaladoc",
        "fct-type": "data",
        "title": "Scaladoc"
      },
      "index": {
        "description": "Javadoc is the compiler for Scala API documentation",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "Scaladoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "Scaladoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:-63-",
      "description": {
        "fct-descr": "\u003cpre\u003e@\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "(?) ?",
        "normalized": "Scaladoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:access",
      "description": {
        "fct-descr": "\u003cpre\u003e-access\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe Access",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#access",
        "fct-type": "function",
        "title": "access"
      },
      "index": {
        "description": "access",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "access",
        "normalized": "Scaladoc-\u003eMaybe Access",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe Access"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:bootclasspath",
      "description": {
        "fct-descr": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#bootclasspath",
        "fct-type": "function",
        "title": "bootclasspath"
      },
      "index": {
        "description": "bootclasspath",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "bootclasspath",
        "normalized": "Scaladoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:bottom",
      "description": {
        "fct-descr": "\u003cpre\u003e-bottom\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#bottom",
        "fct-type": "function",
        "title": "bottom"
      },
      "index": {
        "description": "bottom",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "bottom",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:charset",
      "description": {
        "fct-descr": "\u003cpre\u003e-charset\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#charset",
        "fct-type": "function",
        "title": "charset"
      },
      "index": {
        "description": "charset",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "charset",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:classpath",
      "description": {
        "fct-descr": "\u003cpre\u003e-classpath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#classpath",
        "fct-type": "function",
        "title": "classpath"
      },
      "index": {
        "description": "classpath",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "classpath",
        "normalized": "Scaladoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:debug",
      "description": {
        "fct-descr": "\u003cpre\u003e-g\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe Debug",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#debug",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "debug",
        "normalized": "Scaladoc-\u003eMaybe Debug",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe Debug"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:deprecation",
      "description": {
        "fct-descr": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#deprecation",
        "fct-type": "function",
        "title": "deprecation"
      },
      "index": {
        "description": "deprecation",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "deprecation",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:directory",
      "description": {
        "fct-descr": "\u003cpre\u003e-d\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe FilePath",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "directory",
        "normalized": "Scaladoc-\u003eMaybe FilePath",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:doctitle",
      "description": {
        "fct-descr": "\u003cpre\u003e-doctitle\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#doctitle",
        "fct-type": "function",
        "title": "doctitle"
      },
      "index": {
        "description": "doctitle",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "doctitle",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:encoding",
      "description": {
        "fct-descr": "\u003cpre\u003e-encoding\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#encoding",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "encoding",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "encoding",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:etc",
      "description": {
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#etc",
        "fct-type": "function",
        "title": "etc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "etc",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:explaintypes",
      "description": {
        "fct-descr": "\u003cpre\u003e-explaintypes\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#explaintypes",
        "fct-type": "function",
        "title": "explaintypes"
      },
      "index": {
        "description": "explaintypes",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "explaintypes",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:extdirs",
      "description": {
        "fct-descr": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#extdirs",
        "fct-type": "function",
        "title": "extdirs"
      },
      "index": {
        "description": "extdirs",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "extdirs",
        "normalized": "Scaladoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:footer",
      "description": {
        "fct-descr": "\u003cpre\u003e-footer\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#footer",
        "fct-type": "function",
        "title": "footer"
      },
      "index": {
        "description": "footer",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "footer",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:header",
      "description": {
        "fct-descr": "\u003cpre\u003e-header\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "header",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "header",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:help",
      "description": {
        "fct-descr": "\u003cpre\u003e-help\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "help",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "help",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:linksource",
      "description": {
        "fct-descr": "\u003cpre\u003e-linksource\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#linksource",
        "fct-type": "function",
        "title": "linksource"
      },
      "index": {
        "description": "linksource",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "linksource",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:nocomment",
      "description": {
        "fct-descr": "\u003cpre\u003e-nocomment\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#nocomment",
        "fct-type": "function",
        "title": "nocomment"
      },
      "index": {
        "description": "nocomment",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "nocomment",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:nowarn",
      "description": {
        "fct-descr": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#nowarn",
        "fct-type": "function",
        "title": "nowarn"
      },
      "index": {
        "description": "nowarn",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "nowarn",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:optimise",
      "description": {
        "fct-descr": "\u003cpre\u003e-optimise\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#optimise",
        "fct-type": "function",
        "title": "optimise"
      },
      "index": {
        "description": "optimise",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "optimise",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:print",
      "description": {
        "fct-descr": "\u003cpre\u003e-print\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "print",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "print",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:scaladoc",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eScaladoc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#scaladoc",
        "fct-type": "function",
        "title": "scaladoc"
      },
      "index": {
        "description": "Scaladoc with nothing set",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "scaladoc",
        "normalized": "",
        "package": "Lastik",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:scaladoc-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003eScaladoc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe Target -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe Access -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Scaladoc",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#scaladoc%27",
        "fct-type": "function",
        "title": "scaladoc'"
      },
      "index": {
        "description": "Construct Scaladoc",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "scaladoc'",
        "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe Access-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eScaladoc",
        "package": "Lastik",
        "partial": "",
        "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe Access-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eScaladoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:sourcepath",
      "description": {
        "fct-descr": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e [FilePath]",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#sourcepath",
        "fct-type": "function",
        "title": "sourcepath"
      },
      "index": {
        "description": "sourcepath",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "sourcepath",
        "normalized": "Scaladoc-\u003e[FilePath]",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:stylesheetfile",
      "description": {
        "fct-descr": "\u003cpre\u003e-stylesheetfile\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#stylesheetfile",
        "fct-type": "function",
        "title": "stylesheetfile"
      },
      "index": {
        "description": "stylesheetfile",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "stylesheetfile",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:target",
      "description": {
        "fct-descr": "\u003cpre\u003e-target\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe Target",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#target",
        "fct-type": "function",
        "title": "target"
      },
      "index": {
        "description": "target",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "target",
        "normalized": "Scaladoc-\u003eMaybe Target",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe Target"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:top",
      "description": {
        "fct-descr": "\u003cpre\u003e-top\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "top",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "top",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:unchecked",
      "description": {
        "fct-descr": "\u003cpre\u003e-unchecked\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#unchecked",
        "fct-type": "function",
        "title": "unchecked"
      },
      "index": {
        "description": "unchecked",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "unchecked",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:uniqid",
      "description": {
        "fct-descr": "\u003cpre\u003e-uniqid\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#uniqid",
        "fct-type": "function",
        "title": "uniqid"
      },
      "index": {
        "description": "uniqid",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "uniqid",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:verbose",
      "description": {
        "fct-descr": "\u003cpre\u003e-verbose\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "verbose",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "verbose",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:version",
      "description": {
        "fct-descr": "\u003cpre\u003e-version\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Bool",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "version",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "version",
        "normalized": "Scaladoc-\u003eBool",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:windowtitle",
      "description": {
        "fct-descr": "\u003cpre\u003e-windowtitle\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Scaladoc",
        "fct-package": "Lastik",
        "fct-signature": "Scaladoc -\u003e Maybe String",
        "fct-source": "src/System-Build-Scala-Scaladoc.html#windowtitle",
        "fct-type": "function",
        "title": "windowtitle"
      },
      "index": {
        "description": "windowtitle",
        "hierarchy": "System Build Scala Scaladoc",
        "module": "System.Build.Scala.Scaladoc",
        "name": "windowtitle",
        "normalized": "Scaladoc-\u003eMaybe String",
        "package": "Lastik",
        "partial": "",
        "signature": "Scaladoc-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents the target levels to \u003ccode\u003escalac\u003c/code\u003e and \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Build.Scala.Target",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build-Scala-Target.html",
        "fct-type": "module",
        "title": "Target"
      },
      "index": {
        "description": "module that represents the target levels to scalac and scaladoc",
        "hierarchy": "System Build Scala Target",
        "module": "System.Build.Scala.Target",
        "name": "Target",
        "normalized": "",
        "package": "Lastik",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#t:Target",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify for which target object files should be built (jvm-1.5,jvm-1.4,msil)\n\u003c/p\u003e",
        "fct-module": "System.Build.Scala.Target",
        "fct-package": "Lastik",
        "fct-signature": "data",
        "fct-source": "src/System-Build-Scala-Target.html#Target",
        "fct-type": "data",
        "title": "Target"
      },
      "index": {
        "description": "Specify for which target object files should be built jvm-1.5 jvm-1.4 msil",
        "hierarchy": "System Build Scala Target",
        "module": "System.Build.Scala.Target",
        "name": "Target",
        "normalized": "",
        "package": "Lastik",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:JVM14",
      "description": {
        "fct-descr": "\u003cpre\u003ejvm-1.4\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Target",
        "fct-package": "Lastik",
        "fct-signature": "JVM14",
        "fct-source": "src/System-Build-Scala-Target.html#Target",
        "fct-type": "function",
        "title": "JVM14"
      },
      "index": {
        "description": "jvm-1.4",
        "hierarchy": "System Build Scala Target",
        "module": "System.Build.Scala.Target",
        "name": "JVM14",
        "normalized": "",
        "package": "Lastik",
        "partial": "JVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:JVM15",
      "description": {
        "fct-descr": "\u003cpre\u003ejvm-1.5\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Target",
        "fct-package": "Lastik",
        "fct-signature": "JVM15",
        "fct-source": "src/System-Build-Scala-Target.html#Target",
        "fct-type": "function",
        "title": "JVM15"
      },
      "index": {
        "description": "jvm-1.5",
        "hierarchy": "System Build Scala Target",
        "module": "System.Build.Scala.Target",
        "name": "JVM15",
        "normalized": "",
        "package": "Lastik",
        "partial": "JVM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:MSIL",
      "description": {
        "fct-descr": "\u003cpre\u003emsil\u003c/pre\u003e",
        "fct-module": "System.Build.Scala.Target",
        "fct-package": "Lastik",
        "fct-signature": "MSIL",
        "fct-source": "src/System-Build-Scala-Target.html#Target",
        "fct-type": "function",
        "title": "MSIL"
      },
      "index": {
        "description": "msil",
        "hierarchy": "System Build Scala Target",
        "module": "System.Build.Scala.Target",
        "name": "MSIL",
        "normalized": "",
        "package": "Lastik",
        "partial": "MSIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build.html#",
      "description": {
        "fct-module": "System.Build",
        "fct-package": "Lastik",
        "fct-signature": "module",
        "fct-source": "src/System-Build.html",
        "fct-type": "module",
        "title": "Build"
      },
      "index": {
        "description": "",
        "hierarchy": "System Build",
        "module": "System.Build",
        "name": "Build",
        "normalized": "",
        "package": "Lastik",
        "partial": "Build",
        "signature": ""
      }
    }
  }
]