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
        "word": "Lastik"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for working with command line arguments and options.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Args",
          "name": "Args",
          "package": "Lastik",
          "source": "src/System-Build-Args.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for working with command line arguments and options",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "Args",
          "package": "Lastik",
          "partial": "Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Args",
          "name": "ArgShow",
          "package": "Lastik",
          "source": "src/System-Build-Args.html#ArgShow",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "ArgShow",
          "package": "Lastik",
          "partial": "Arg Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#t:ArgShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty list if the boolean is \u003ccode\u003eFalse\u003c/code\u003e otherwise the given string value with \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e prepended.\n\u003c/p\u003e",
          "module": "System.Build.Args",
          "name": "(~~)",
          "package": "Lastik",
          "signature": "String -\u003e Bool -\u003e String",
          "source": "src/System-Build-Args.html#~~",
          "type": "function"
        },
        "index": {
          "description": "An empty list if the boolean is False otherwise the given string value with prepended",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(~~) ~~",
          "normalized": "String-\u003eBool-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eBool-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepends \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e' '\u003c/code\u003e then the second value surrounded by double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~~\u003e \"def\" == \"-abc \\\"def\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "(~~~\u003e)",
          "package": "Lastik",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/System-Build-Args.html#~~~%3E",
          "type": "function"
        },
        "index": {
          "description": "Prepends followed by the first value then then the second value surrounded by double-quotes abc def abc def",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(~~~\u003e) ~~~\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e' '\u003c/code\u003e followed by surrounding the result of running the given function in double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~\u003e Just \"def\" == \"-abc \\\"def\\\"\"\n \"abc\" ~~\u003e Nothing == \"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "(~~\u003e)",
          "package": "Lastik",
          "signature": "String -\u003e Maybe k -\u003e String",
          "source": "src/System-Build-Args.html#~~%3E",
          "type": "function"
        },
        "index": {
          "description": "If the given value is Nothing return the empty list otherwise prepend followed by the first value then followed by surrounding the result of running the given function in double-quotes abc Just def abc def abc Nothing",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(~~\u003e) ~~\u003e",
          "normalized": "String-\u003eMaybe a-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eMaybe k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise run the given function.\n\u003c/p\u003e",
          "module": "System.Build.Args",
          "name": "(~?)",
          "package": "Lastik",
          "signature": "(k -\u003e [a]) -\u003e Maybe k -\u003e [a]",
          "source": "src/System-Build-Args.html#~%3F",
          "type": "function"
        },
        "index": {
          "description": "If the given value is Nothing return the empty list otherwise run the given function",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(~?) ~?",
          "normalized": "(a-\u003e[b])-\u003eMaybe a-\u003e[b]",
          "package": "Lastik",
          "signature": "(k-\u003e[a])-\u003eMaybe k-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given list of file paths is empty, then returns the empty list. Otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the string followed by \u003ccode\u003e' '\u003c/code\u003e then the search path separator intercalated in the list of file paths.\n\u003c/p\u003e\u003cpre\u003e Posix\n \"123\" ~?? [\"abc\", \"def\"] == \"-123 \\\"abc\\\":\\\"def\\\"\"\n \"123\" ~?? [\"abc\", \"def\", \"ghi\"] == \"-123 \\\"abc\\\":\\\"def\\\":\\\"ghi\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "(~:)",
          "package": "Lastik",
          "signature": "String -\u003e [FilePath] -\u003e String",
          "source": "src/System-Build-Args.html#~%3A",
          "type": "function"
        },
        "index": {
          "description": "If the given list of file paths is empty then returns the empty list Otherwise prepend to the string followed by then the search path separator intercalated in the list of file paths Posix abc def abc def abc def ghi abc def ghi",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(~:) ~:",
          "normalized": "String-\u003e[FilePath]-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003e[FilePath]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e followed by the first value then \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e followed by surrounding the result of \u003ccode\u003eshow\u003c/code\u003e in double-quotes.\n\u003c/p\u003e\u003cpre\u003e \"abc\" ~~\u003e Just \"def\" == \"-abc:\\\"def\\\"\"\n \"abc\" ~~\u003e Nothing == \"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "(-~\u003e)",
          "package": "Lastik",
          "signature": "String -\u003e Maybe k -\u003e String",
          "source": "src/System-Build-Args.html#-~%3E",
          "type": "function"
        },
        "index": {
          "description": "If the given value is Nothing return the empty list otherwise prepend followed by the first value then followed by surrounding the result of show in double-quotes abc Just def abc def abc Nothing",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(-~\u003e) -~\u003e",
          "normalized": "String-\u003eMaybe a-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eMaybe k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-45--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all empty lists from the first argument the intercalates the second argument.\n\u003c/p\u003e\u003cpre\u003e [\"abc\", \"\", \"def\"] ^^^ \"x\" == \"abcxdef\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "(^^^)",
          "package": "Lastik",
          "signature": "[[a]] -\u003e [a] -\u003e [a]",
          "source": "src/System-Build-Args.html#%5E%5E%5E",
          "type": "function"
        },
        "index": {
          "description": "Removes all empty lists from the first argument the intercalates the second argument abc def abcxdef",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "(^^^) ^^^",
          "normalized": "[[a]]-\u003e[a]-\u003e[a]",
          "package": "Lastik",
          "signature": "[[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:-94--94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Args",
          "name": "arg",
          "package": "Lastik",
          "signature": "a -\u003e String",
          "source": "src/System-Build-Args.html#arg",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "arg",
          "normalized": "a-\u003eString",
          "package": "Lastik",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter with many values interspersed by \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e many \"abc\" [\"tuv\", \"wxy\"] == \"-abc \\\"tuv\\\" -abc \\\"wxy\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "many",
          "package": "Lastik",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/System-Build-Args.html#many",
          "type": "function"
        },
        "index": {
          "description": "parameter with many values interspersed by many abc tuv wxy abc tuv abc wxy",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "many",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter with many values interspersed by \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e manys id \"abc\" [\"tuv\", \"wxy\"] == \"-abc \\\"tuv\\\" -abc \\\"wxy\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "manys",
          "package": "Lastik",
          "signature": "(a -\u003e String) -\u003e String -\u003e [a] -\u003e String",
          "source": "src/System-Build-Args.html#manys",
          "type": "function"
        },
        "index": {
          "description": "parameter with many values interspersed by manys id abc tuv wxy abc tuv abc wxy",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "manys",
          "normalized": "(a-\u003eString)-\u003eString-\u003e[a]-\u003eString",
          "package": "Lastik",
          "signature": "(a-\u003eString)-\u003eString-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:manys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the given value is \u003ccode\u003eNothing\u003c/code\u003e return the empty list, otherwise prepend \u003ccode\u003e\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the given string followed by the given character followed by surrounding the result of running the given function in double-quotes.\n\u003c/p\u003e\u003cpre\u003e param \"abc\" 'x' id (Just \"tuv\") == \"-abcx\\\"tuv\\\"\"\n param \"abc\" 'x' id Nothing == \"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "param",
          "package": "Lastik",
          "signature": "String -\u003e Char -\u003e (k -\u003e String) -\u003e Maybe k -\u003e String",
          "source": "src/System-Build-Args.html#param",
          "type": "function"
        },
        "index": {
          "description": "If the given value is Nothing return the empty list otherwise prepend to the given string followed by the given character followed by surrounding the result of running the given function in double-quotes param abc id Just tuv abcx tuv param abc id Nothing",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "param",
          "normalized": "String-\u003eChar-\u003e(a-\u003eString)-\u003eMaybe a-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eChar-\u003e(k-\u003eString)-\u003eMaybe k-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurrounds the given string in double-quotes and escapes any already there.\n\u003c/p\u003e",
          "module": "System.Build.Args",
          "name": "quote",
          "package": "Lastik",
          "signature": "String -\u003e String",
          "source": "src/System-Build-Args.html#quote",
          "type": "function"
        },
        "index": {
          "description": "Surrounds the given string in double-quotes and escapes any already there",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "quote",
          "normalized": "String-\u003eString",
          "package": "Lastik",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurrounds each given value in double-quotes then intercalates \u003ccode\u003e[searchPathSeparator]\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e searchPath [\"abc\", \"def\"] == \"\\\"abc\\\":\\\"def\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "searchPath",
          "package": "Lastik",
          "signature": "[String] -\u003e String",
          "source": "src/System-Build-Args.html#searchPath",
          "type": "function"
        },
        "index": {
          "description": "Surrounds each given value in double-quotes then intercalates searchPathSeparator searchPath abc def abc def",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "searchPath",
          "normalized": "[String]-\u003eString",
          "package": "Lastik",
          "partial": "Path",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:searchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurrounds each given value in double-quotes then intercalates \u003ccode\u003e' '\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e space [\"abc\", \"def\"] == \"\\\"abc\\\" \\\"def\\\"\"\n\u003c/pre\u003e",
          "module": "System.Build.Args",
          "name": "space",
          "package": "Lastik",
          "signature": "[String] -\u003e String",
          "source": "src/System-Build-Args.html#space",
          "type": "function"
        },
        "index": {
          "description": "Surrounds each given value in double-quotes then intercalates space abc def abc def",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "space",
          "normalized": "[String]-\u003eString",
          "package": "Lastik",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the given environment variables. The first one found that exists has its associated function called to produce a value.\n\u003c/p\u003e",
          "module": "System.Build.Args",
          "name": "tryEnvs",
          "package": "Lastik",
          "signature": "[(String, String -\u003e a)] -\u003e IO (Maybe a)",
          "source": "src/System-Build-Args.html#tryEnvs",
          "type": "function"
        },
        "index": {
          "description": "Look up the given environment variables The first one found that exists has its associated function called to produce value",
          "hierarchy": "System Build Args",
          "module": "System.Build.Args",
          "name": "tryEnvs",
          "normalized": "[(String,String-\u003ea)]-\u003eIO(Maybe a)",
          "package": "Lastik",
          "partial": "Envs",
          "signature": "[(String,String-\u003ea)]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Args.html#v:tryEnvs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction on executable commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Command",
          "name": "Command",
          "package": "Lastik",
          "source": "src/System-Build-Command.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction on executable commands",
          "hierarchy": "System Build Command",
          "module": "System.Build.Command",
          "name": "Command",
          "package": "Lastik",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Command",
          "name": "Command",
          "package": "Lastik",
          "source": "src/System-Build-Command.html#Command",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build Command",
          "module": "System.Build.Command",
          "name": "Command",
          "package": "Lastik",
          "partial": "Command",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the executable command for a value. Since this is in \u003ccode\u003eIO\u003c/code\u003e it may use environment variables.\n\u003c/p\u003e",
          "module": "System.Build.Command",
          "name": "command",
          "package": "Lastik",
          "signature": "c -\u003e IO String",
          "source": "src/System-Build-Command.html#command",
          "type": "method"
        },
        "index": {
          "description": "Determines the executable command for value Since this is in IO it may use environment variables",
          "hierarchy": "System Build Command",
          "module": "System.Build.Command",
          "name": "command",
          "normalized": "a-\u003eIO String",
          "package": "Lastik",
          "signature": "c-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Command.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor building a command for values that use paths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.CompilePaths",
          "name": "CompilePaths",
          "package": "Lastik",
          "source": "src/System-Build-CompilePaths.html",
          "type": "module"
        },
        "index": {
          "description": "For building command for values that use paths",
          "hierarchy": "System Build CompilePaths",
          "module": "System.Build.CompilePaths",
          "name": "CompilePaths",
          "package": "Lastik",
          "partial": "Compile Paths",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.CompilePaths",
          "name": "CompilePaths",
          "package": "Lastik",
          "source": "src/System-Build-CompilePaths.html#CompilePaths",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build CompilePaths",
          "module": "System.Build.CompilePaths",
          "name": "CompilePaths",
          "package": "Lastik",
          "partial": "Compile Paths",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#t:CompilePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a command for a value given a list of file paths.\n\u003c/p\u003e",
          "module": "System.Build.CompilePaths",
          "name": "(=\u003e\u003e)",
          "package": "Lastik",
          "signature": "c -\u003e [FilePath] -\u003e String",
          "source": "src/System-Build-CompilePaths.html#%3D%3E%3E",
          "type": "method"
        },
        "index": {
          "description": "Builds command for value given list of file paths",
          "hierarchy": "System Build CompilePaths",
          "module": "System.Build.CompilePaths",
          "name": "(=\u003e\u003e) =\u003e\u003e",
          "normalized": "a-\u003e[FilePath]-\u003eString",
          "package": "Lastik",
          "signature": "c-\u003e[FilePath]-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-CompilePaths.html#v:-61--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for performing operations on directories.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Directory",
          "name": "Directory",
          "package": "Lastik",
          "source": "src/System-Build-Directory.html",
          "type": "module"
        },
        "index": {
          "description": "module for performing operations on directories",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "Directory",
          "package": "Lastik",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zip archive by changing into directories and archiving the contents.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "archiveDirectories",
          "package": "Lastik",
          "signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e IO Archive",
          "type": "function"
        },
        "index": {
          "description": "Create zip archive by changing into directories and archiving the contents",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "archiveDirectories",
          "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eIO Archive",
          "package": "Lastik",
          "partial": "Directories",
          "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eIO Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:archiveDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange to the given directory, then execute the given action, then change back to the original directory.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "chdir",
          "package": "Lastik",
          "signature": "FilePath-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Change to the given directory then execute the given action then change back to the original directory",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "chdir",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "Lastik",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:chdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of a directory to another, perhaps trimming parent directories.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "copy",
          "package": "Lastik",
          "signature": "RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of directory to another perhaps trimming parent directories",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "copy",
          "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "Lastik",
          "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the contents of a directory to another, perhaps trimming parent directories.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "copyl",
          "package": "Lastik",
          "signature": "RecursionPredicate-\u003e FilterPredicate-\u003e Int-\u003e FilePath-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the contents of directory to another perhaps trimming parent directories",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "copyl",
          "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "Lastik",
          "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eInt-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:copyl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the parent directory of a given file path.\n\u003c/p\u003e\u003cpre\u003e dropRoot \"/foo/bar\" == \"/bar\"\n dropRoot \"foo/bar\" == \"bar\"\n dropRoot \"foo\" == \"\"\n dropRoot \"\" == \"\"\n\u003c/pre\u003e",
          "module": "System.Build.Directory",
          "name": "dropRoot",
          "package": "Lastik",
          "signature": "FilePath-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Drops the parent directory of given file path dropRoot foo bar bar dropRoot foo bar bar dropRoot foo dropRoot",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "dropRoot",
          "normalized": "FilePath-\u003eString",
          "package": "Lastik",
          "partial": "Root",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:dropRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the parent directory (\u003ccode\u003e\u003ca\u003edropRoot\u003c/a\u003e\u003c/code\u003e) of a given file path multiple times.\n\u003c/p\u003e\u003cpre\u003e dropRoot' 0 \"/foo/bar\" == \"/foo/bar\"\n dropRoot' 1 \"/foo/bar\" == \"/bar\"\n dropRoot' 1 \"foo/bar\" == \"bar\"\n dropRoot' 2 \"foo/bar\" == \"\"\n dropRoot' 10 \"foo/bar\" == \"\"\n\u003c/pre\u003e",
          "module": "System.Build.Directory",
          "name": "dropRoot'",
          "package": "Lastik",
          "signature": "Int-\u003e FilePath-\u003e FilePath",
          "type": "function"
        },
        "index": {
          "description": "Drops the parent directory dropRoot of given file path multiple times dropRoot foo bar foo bar dropRoot foo bar bar dropRoot foo bar bar dropRoot foo bar dropRoot foo bar",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "dropRoot'",
          "normalized": "Int-\u003eFilePath-\u003eFilePath",
          "package": "Lastik",
          "partial": "Root'",
          "signature": "Int-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:dropRoot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the given directory and its parents if it doesn't exist.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "mkdir",
          "package": "Lastik",
          "signature": "FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Creates the given directory and its parents if it doesn exist",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "mkdir",
          "normalized": "FilePath-\u003eIO()",
          "package": "Lastik",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the given directory recursively if it exists.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "rmdir",
          "package": "Lastik",
          "signature": "FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Removes the given directory recursively if it exists",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "rmdir",
          "normalized": "FilePath-\u003eIO()",
          "package": "Lastik",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:rmdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a zip archive to a file.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "writeArchive",
          "package": "Lastik",
          "signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Writes zip archive to file",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "writeArchive",
          "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
          "package": "Lastik",
          "partial": "Archive",
          "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:writeArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a zip archive to a file then computes a MD5 and SHA1 hash and writes them to files with \u003ccode\u003e\u003ca\u003e.md5\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.sha1\u003c/a\u003e\u003c/code\u003e extensions.\n\u003c/p\u003e",
          "module": "System.Build.Directory",
          "name": "writeHashArchive",
          "package": "Lastik",
          "signature": "[(FilePath, FilePath)]-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e [ZipOption]-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Writes zip archive to file then computes MD5 and SHA1 hash and writes them to files with md5 and sha1 extensions",
          "hierarchy": "System Build Directory",
          "module": "System.Build.Directory",
          "name": "writeHashArchive",
          "normalized": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
          "package": "Lastik",
          "partial": "Hash Archive",
          "signature": "[(FilePath,FilePath)]-\u003eRecursionPredicate-\u003eFilterPredicate-\u003e[ZipOption]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Directory.html#v:writeHashArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComputing file extensions for a value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Extensions",
          "name": "Extensions",
          "package": "Lastik",
          "source": "src/System-Build-Extensions.html",
          "type": "module"
        },
        "index": {
          "description": "Computing file extensions for value",
          "hierarchy": "System Build Extensions",
          "module": "System.Build.Extensions",
          "name": "Extensions",
          "package": "Lastik",
          "partial": "Extensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Extensions",
          "name": "Extensions",
          "package": "Lastik",
          "source": "src/System-Build-Extensions.html#Extensions",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build Extensions",
          "module": "System.Build.Extensions",
          "name": "Extensions",
          "package": "Lastik",
          "partial": "Extensions",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#t:Extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Extensions",
          "name": "exts",
          "package": "Lastik",
          "signature": "e -\u003e [String]",
          "source": "src/System-Build-Extensions.html#exts",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Build Extensions",
          "module": "System.Build.Extensions",
          "name": "exts",
          "normalized": "a-\u003e[String]",
          "package": "Lastik",
          "signature": "e-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#v:exts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the file extensions associated with the given value and prepend a single dot.\n\u003c/p\u003e",
          "module": "System.Build.Extensions",
          "name": "exts'",
          "package": "Lastik",
          "signature": "e -\u003e [String]",
          "source": "src/System-Build-Extensions.html#exts%27",
          "type": "function"
        },
        "index": {
          "description": "Return all the file extensions associated with the given value and prepend single dot",
          "hierarchy": "System Build Extensions",
          "module": "System.Build.Extensions",
          "name": "exts'",
          "normalized": "a-\u003e[String]",
          "package": "Lastik",
          "signature": "e-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Extensions.html#v:exts-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for compiling Java source files using \u003ccode\u003ejavac\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Javac",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javac.html",
          "type": "module"
        },
        "index": {
          "description": "module for compiling Java source files using javac",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Javac",
          "package": "Lastik",
          "partial": "Javac",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe debug options that can be passed to \u003ccode\u003ejavac\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Debug",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "data"
        },
        "index": {
          "description": "The debug options that can be passed to javac",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Debug",
          "package": "Lastik",
          "partial": "Debug",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify whether or not to generate class files for implicitly referenced files.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Implicit",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javac.html#Implicit",
          "type": "data"
        },
        "index": {
          "description": "Specify whether or not to generate class files for implicitly referenced files",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Implicit",
          "package": "Lastik",
          "partial": "Implicit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Implicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavac is the compiler for Java source files.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Javac",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javac.html#Javac",
          "type": "data"
        },
        "index": {
          "description": "Javac is the compiler for Java source files",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Javac",
          "package": "Lastik",
          "partial": "Javac",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Javac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl whether annotation processing and/or compilation is done.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Proc",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javac.html#Proc",
          "type": "data"
        },
        "index": {
          "description": "Control whether annotation processing and or compilation is done",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Proc",
          "package": "Lastik",
          "partial": "Proc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#t:Proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all debugging info.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "All",
          "package": "Lastik",
          "signature": "All",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "Generate all debugging info",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "All",
          "package": "Lastik",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003elines\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Lines",
          "package": "Lastik",
          "signature": "Lines",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "Generate only some debugging info lines",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Lines",
          "package": "Lastik",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate no debugging info.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "None",
          "package": "Lastik",
          "signature": "None",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "Generate no debugging info",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "None",
          "package": "Lastik",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003esource\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Source",
          "package": "Lastik",
          "signature": "Source",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "Generate only some debugging info source",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Source",
          "package": "Lastik",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate only some debugging info (\u003ccode\u003evars\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "Vars",
          "package": "Lastik",
          "signature": "Vars",
          "source": "src/System-Build-Java-Javac.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "Generate only some debugging info vars",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "Vars",
          "package": "Lastik",
          "partial": "Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:Vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-Akey[=value]\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "akv",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe ([String], Maybe String)",
          "source": "src/System-Build-Java-Javac.html#akv",
          "type": "function"
        },
        "index": {
          "description": "Akey value",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "akv",
          "normalized": "Javac-\u003eMaybe([String],Maybe String)",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe([String],Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:akv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "bootclasspath",
          "package": "Lastik",
          "signature": "Javac -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javac.html#bootclasspath",
          "type": "function"
        },
        "index": {
          "description": "bootclasspath",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "bootclasspath",
          "normalized": "Javac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:bootclasspath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate class files for implicitly referenced files (\u003ccode\u003eclass\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "class'",
          "package": "Lastik",
          "signature": "Implicit",
          "source": "src/System-Build-Java-Javac.html#class%27",
          "type": "function"
        },
        "index": {
          "description": "Generate class files for implicitly referenced files class",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "class'",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:class-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-classpath\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "classpath",
          "package": "Lastik",
          "signature": "Javac -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javac.html#classpath",
          "type": "function"
        },
        "index": {
          "description": "classpath",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "classpath",
          "normalized": "Javac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:classpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-g\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "debug",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe Debug",
          "source": "src/System-Build-Java-Javac.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "debug",
          "normalized": "Javac-\u003eMaybe Debug",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "deprecation",
          "package": "Lastik",
          "signature": "Javac -\u003e Bool",
          "source": "src/System-Build-Java-Javac.html#deprecation",
          "type": "function"
        },
        "index": {
          "description": "deprecation",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "deprecation",
          "normalized": "Javac-\u003eBool",
          "package": "Lastik",
          "signature": "Javac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:deprecation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-d\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "directory",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javac.html#directory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "directory",
          "normalized": "Javac-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-encoding\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "encoding",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe String",
          "source": "src/System-Build-Java-Javac.html#encoding",
          "type": "function"
        },
        "index": {
          "description": "encoding",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "encoding",
          "normalized": "Javac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-endorseddirs\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "endorseddirs",
          "package": "Lastik",
          "signature": "Javac -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javac.html#endorseddirs",
          "type": "function"
        },
        "index": {
          "description": "endorseddirs",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "endorseddirs",
          "normalized": "Javac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:endorseddirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Java.Javac",
          "name": "etc",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe String",
          "source": "src/System-Build-Java-Javac.html#etc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "etc",
          "normalized": "Javac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:etc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "extdirs",
          "package": "Lastik",
          "signature": "Javac -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javac.html#extdirs",
          "type": "function"
        },
        "index": {
          "description": "extdirs",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "extdirs",
          "normalized": "Javac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:extdirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-J\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "flags",
          "package": "Lastik",
          "signature": "Javac -\u003e [String]",
          "source": "src/System-Build-Java-Javac.html#flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "flags",
          "normalized": "Javac-\u003e[String]",
          "package": "Lastik",
          "signature": "Javac-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-help\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "help",
          "package": "Lastik",
          "signature": "Javac -\u003e Bool",
          "source": "src/System-Build-Java-Javac.html#help",
          "type": "function"
        },
        "index": {
          "description": "help",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "help",
          "normalized": "Javac-\u003eBool",
          "package": "Lastik",
          "signature": "Javac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-implicit\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "implicit",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe Implicit",
          "source": "src/System-Build-Java-Javac.html#implicit",
          "type": "function"
        },
        "index": {
          "description": "implicit",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "implicit",
          "normalized": "Javac-\u003eMaybe Implicit",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe Implicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:implicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the second argument if the given \u003ccode\u003eImplicit\u003c/code\u003e is \u003ccode\u003enone\u003c/code\u003e, otherwise the third argument.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "implicit'",
          "package": "Lastik",
          "signature": "Implicit -\u003e a -\u003e a -\u003e a",
          "source": "src/System-Build-Java-Javac.html#implicit%27",
          "type": "function"
        },
        "index": {
          "description": "Returns the second argument if the given Implicit is none otherwise the third argument",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "implicit'",
          "normalized": "Implicit-\u003ea-\u003ea-\u003ea",
          "package": "Lastik",
          "signature": "Implicit-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:implicit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eJavac\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "javac",
          "package": "Lastik",
          "signature": "Javac",
          "source": "src/System-Build-Java-Javac.html#javac",
          "type": "function"
        },
        "index": {
          "description": "Javac with nothing set",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "javac",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:javac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eJavac\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "javac'",
          "package": "Lastik",
          "signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe Proc -\u003e [String] -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e Maybe Implicit -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e Bool -\u003e Maybe ([String], Maybe String) -\u003e [String] -\u003e Maybe String -\u003e Javac",
          "source": "src/System-Build-Java-Javac.html#javac%27",
          "type": "function"
        },
        "index": {
          "description": "Construct Javac",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "javac'",
          "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe Proc-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe Implicit-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe([String],Maybe String)-\u003e[String]-\u003eMaybe String-\u003eJavac",
          "package": "Lastik",
          "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe Proc-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eMaybe Implicit-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe([String],Maybe String)-\u003e[String]-\u003eMaybe String-\u003eJavac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:javac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo generate class files for implicitly referenced files (\u003ccode\u003enone\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "noneImplicit",
          "package": "Lastik",
          "signature": "Implicit",
          "source": "src/System-Build-Java-Javac.html#noneImplicit",
          "type": "function"
        },
        "index": {
          "description": "No generate class files for implicitly referenced files none",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "noneImplicit",
          "package": "Lastik",
          "partial": "Implicit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:noneImplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo annotation processing (\u003ccode\u003enone\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "noneProc",
          "package": "Lastik",
          "signature": "Proc",
          "source": "src/System-Build-Java-Javac.html#noneProc",
          "type": "function"
        },
        "index": {
          "description": "No annotation processing none",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "noneProc",
          "package": "Lastik",
          "partial": "Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:noneProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "nowarn",
          "package": "Lastik",
          "signature": "Javac -\u003e Bool",
          "source": "src/System-Build-Java-Javac.html#nowarn",
          "type": "function"
        },
        "index": {
          "description": "nowarn",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "nowarn",
          "normalized": "Javac-\u003eBool",
          "package": "Lastik",
          "signature": "Javac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:nowarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly annotation processing (\u003ccode\u003eonly\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "only",
          "package": "Lastik",
          "signature": "Proc",
          "source": "src/System-Build-Java-Javac.html#only",
          "type": "function"
        },
        "index": {
          "description": "Only annotation processing only",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "only",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-proc\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "proc",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe Proc",
          "source": "src/System-Build-Java-Javac.html#proc",
          "type": "function"
        },
        "index": {
          "description": "proc",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "proc",
          "normalized": "Javac-\u003eMaybe Proc",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the second argument if the given \u003ccode\u003eProc\u003c/code\u003e is \u003ccode\u003enone\u003c/code\u003e, otherwise the third argument.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javac",
          "name": "proc'",
          "package": "Lastik",
          "signature": "Proc -\u003e a -\u003e a -\u003e a",
          "source": "src/System-Build-Java-Javac.html#proc%27",
          "type": "function"
        },
        "index": {
          "description": "Returns the second argument if the given Proc is none otherwise the third argument",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "proc'",
          "normalized": "Proc-\u003ea-\u003ea-\u003ea",
          "package": "Lastik",
          "signature": "Proc-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:proc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-processor\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "processor",
          "package": "Lastik",
          "signature": "Javac -\u003e [String]",
          "source": "src/System-Build-Java-Javac.html#processor",
          "type": "function"
        },
        "index": {
          "description": "processor",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "processor",
          "normalized": "Javac-\u003e[String]",
          "package": "Lastik",
          "signature": "Javac-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-processorpath\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "processorpath",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javac.html#processorpath",
          "type": "function"
        },
        "index": {
          "description": "processorpath",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "processorpath",
          "normalized": "Javac-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:processorpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-source\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "source",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe String",
          "source": "src/System-Build-Java-Javac.html#source",
          "type": "function"
        },
        "index": {
          "description": "source",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "source",
          "normalized": "Javac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "sourcepath",
          "package": "Lastik",
          "signature": "Javac -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javac.html#sourcepath",
          "type": "function"
        },
        "index": {
          "description": "sourcepath",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "sourcepath",
          "normalized": "Javac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:sourcepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-s\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "src",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javac.html#src",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "src",
          "normalized": "Javac-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-target\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "target",
          "package": "Lastik",
          "signature": "Javac -\u003e Maybe String",
          "source": "src/System-Build-Java-Javac.html#target",
          "type": "function"
        },
        "index": {
          "description": "target",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "target",
          "normalized": "Javac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-verbose\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "verbose",
          "package": "Lastik",
          "signature": "Javac -\u003e Bool",
          "source": "src/System-Build-Java-Javac.html#verbose",
          "type": "function"
        },
        "index": {
          "description": "verbose",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "verbose",
          "normalized": "Javac-\u003eBool",
          "package": "Lastik",
          "signature": "Javac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-version\u003c/pre\u003e",
          "module": "System.Build.Java.Javac",
          "name": "version",
          "package": "Lastik",
          "signature": "Javac -\u003e Bool",
          "source": "src/System-Build-Java-Javac.html#version",
          "type": "function"
        },
        "index": {
          "description": "version",
          "hierarchy": "System Build Java Javac",
          "module": "System.Build.Java.Javac",
          "name": "version",
          "normalized": "Javac-\u003eBool",
          "package": "Lastik",
          "signature": "Javac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javac.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for documenting Java source files using \u003ccode\u003ejavadoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "Javadoc",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javadoc.html",
          "type": "module"
        },
        "index": {
          "description": "module for documenting Java source files using javadoc",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "Javadoc",
          "package": "Lastik",
          "partial": "Javadoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavadoc is the compiler for Java API documentation.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "Javadoc",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javadoc.html#Javadoc",
          "type": "data"
        },
        "index": {
          "description": "Javadoc is the compiler for Java API documentation",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "Javadoc",
          "package": "Lastik",
          "partial": "Javadoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#t:Javadoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide source compatibility with specified release\n\u003c/p\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "SourceRelease",
          "package": "Lastik",
          "source": "src/System-Build-Java-Javadoc.html#SourceRelease",
          "type": "data"
        },
        "index": {
          "description": "Provide source compatibility with specified release",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "SourceRelease",
          "package": "Lastik",
          "partial": "Source Release",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#t:SourceRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e1.3\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "S13",
          "package": "Lastik",
          "signature": "S13",
          "source": "src/System-Build-Java-Javadoc.html#SourceRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "S13",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e1.4\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "S14",
          "package": "Lastik",
          "signature": "S14",
          "source": "src/System-Build-Java-Javadoc.html#SourceRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "S14",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e1.5\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "S15",
          "package": "Lastik",
          "signature": "S15",
          "source": "src/System-Build-Java-Javadoc.html#SourceRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "S15",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:S15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-author\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "author",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#author",
          "type": "function"
        },
        "index": {
          "description": "author",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "author",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "bootclasspath",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javadoc.html#bootclasspath",
          "type": "function"
        },
        "index": {
          "description": "bootclasspath",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "bootclasspath",
          "normalized": "Javadoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:bootclasspath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bottom\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "bottom",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#bottom",
          "type": "function"
        },
        "index": {
          "description": "bottom",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "bottom",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-breakiterator\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "breakiterator",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#breakiterator",
          "type": "function"
        },
        "index": {
          "description": "breakiterator",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "breakiterator",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:breakiterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-charset\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "charset",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#charset",
          "type": "function"
        },
        "index": {
          "description": "charset",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "charset",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:charset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-classpath\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "classpath",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javadoc.html#classpath",
          "type": "function"
        },
        "index": {
          "description": "classpath",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "classpath",
          "normalized": "Javadoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:classpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-d\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "directory",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javadoc.html#directory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "directory",
          "normalized": "Javadoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-docencoding\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "docencoding",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#docencoding",
          "type": "function"
        },
        "index": {
          "description": "docencoding",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "docencoding",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docencoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-docfilessubdirs\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "docfilessubdirs",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#docfilessubdirs",
          "type": "function"
        },
        "index": {
          "description": "docfilessubdirs",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "docfilessubdirs",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docfilessubdirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-doclet\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "doclet",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#doclet",
          "type": "function"
        },
        "index": {
          "description": "doclet",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "doclet",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:doclet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-docletpath\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "docletpath",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javadoc.html#docletpath",
          "type": "function"
        },
        "index": {
          "description": "docletpath",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "docletpath",
          "normalized": "Javadoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:docletpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-doctitle\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "doctitle",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#doctitle",
          "type": "function"
        },
        "index": {
          "description": "doctitle",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "doctitle",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:doctitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-encoding\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "encoding",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#encoding",
          "type": "function"
        },
        "index": {
          "description": "encoding",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "encoding",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-exclude\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "exclude",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#exclude",
          "type": "function"
        },
        "index": {
          "description": "exclude",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "exclude",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:exclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-excludedocfilessubdir\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "excludedocfilessubdir",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#excludedocfilessubdir",
          "type": "function"
        },
        "index": {
          "description": "excludedocfilessubdir",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "excludedocfilessubdir",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:excludedocfilessubdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "extdirs",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javadoc.html#extdirs",
          "type": "function"
        },
        "index": {
          "description": "extdirs",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "extdirs",
          "normalized": "Javadoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:extdirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-flags\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "flags",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#flags",
          "type": "function"
        },
        "index": {
          "description": "flags",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "flags",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-footer\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "footer",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#footer",
          "type": "function"
        },
        "index": {
          "description": "footer",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "footer",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-group\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "group",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [(String, [String])]",
          "source": "src/System-Build-Java-Javadoc.html#group",
          "type": "function"
        },
        "index": {
          "description": "group",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "group",
          "normalized": "Javadoc-\u003e[(String,[String])]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[(String,[String])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-header\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "header",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#header",
          "type": "function"
        },
        "index": {
          "description": "header",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "header",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-help\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "help",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#help",
          "type": "function"
        },
        "index": {
          "description": "help",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "help",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-helpfile\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "helpfile",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javadoc.html#helpfile",
          "type": "function"
        },
        "index": {
          "description": "helpfile",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "helpfile",
          "normalized": "Javadoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:helpfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eJavadoc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "javadoc",
          "package": "Lastik",
          "signature": "Javadoc",
          "source": "src/System-Build-Java-Javadoc.html#javadoc",
          "type": "function"
        },
        "index": {
          "description": "Javadoc with nothing set",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "javadoc",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:javadoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eJavadoc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "javadoc'",
          "package": "Lastik",
          "signature": "Maybe FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe FilePath -\u003e [FilePath] -\u003e [FilePath] -\u003e [String] -\u003e [String] -\u003e Bool -\u003e [FilePath] -\u003e Maybe SourceRelease -\u003e [FilePath] -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e [String] -\u003e Maybe FilePath -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e [String] -\u003e [(String, String)] -\u003e [String] -\u003e [(String, [String])] -\u003e Bool -\u003e Bool -\u003e [String] -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [(String, String, String)] -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe FilePath -\u003e Bool -\u003e Maybe Int -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe String -\u003e Javadoc",
          "source": "src/System-Build-Java-Javadoc.html#javadoc%27",
          "type": "function"
        },
        "index": {
          "description": "Construct Javadoc",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "javadoc'",
          "normalized": "Maybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003e[FilePath]-\u003e[FilePath]-\u003e[String]-\u003e[String]-\u003eBool-\u003e[FilePath]-\u003eMaybe SourceRelease-\u003e[FilePath]-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003e[String]-\u003eMaybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003e[(String,String)]-\u003e[String]-\u003e[(String,[String])]-\u003eBool-\u003eBool-\u003e[String]-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[(String,String,String)]-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003eBool-\u003eMaybe Int-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eJavadoc",
          "package": "Lastik",
          "signature": "Maybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003e[FilePath]-\u003e[FilePath]-\u003e[String]-\u003e[String]-\u003eBool-\u003e[FilePath]-\u003eMaybe SourceRelease-\u003e[FilePath]-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003e[String]-\u003eMaybe FilePath-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003e[String]-\u003e[(String,String)]-\u003e[String]-\u003e[(String,[String])]-\u003eBool-\u003eBool-\u003e[String]-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[(String,String,String)]-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe FilePath-\u003eBool-\u003eMaybe Int-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eJavadoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:javadoc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-keywords\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "keywords",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#keywords",
          "type": "function"
        },
        "index": {
          "description": "keywords",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "keywords",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-link\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "link",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#link",
          "type": "function"
        },
        "index": {
          "description": "link",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "link",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-linkoffline\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "linkoffline",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [(String, String)]",
          "source": "src/System-Build-Java-Javadoc.html#linkoffline",
          "type": "function"
        },
        "index": {
          "description": "linkoffline",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "linkoffline",
          "normalized": "Javadoc-\u003e[(String,String)]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:linkoffline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-linksource\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "linksource",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#linksource",
          "type": "function"
        },
        "index": {
          "description": "linksource",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "linksource",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:linksource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-locale\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "locale",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#locale",
          "type": "function"
        },
        "index": {
          "description": "locale",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "locale",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nocomment\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nocomment",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nocomment",
          "type": "function"
        },
        "index": {
          "description": "nocomment",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nocomment",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nocomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nodeprecated\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nodeprecated",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nodeprecated",
          "type": "function"
        },
        "index": {
          "description": "nodeprecated",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nodeprecated",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nodeprecated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nodeprecatedlist\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nodeprecatedlist",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nodeprecatedlist",
          "type": "function"
        },
        "index": {
          "description": "nodeprecatedlist",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nodeprecatedlist",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nodeprecatedlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nohelp\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nohelp",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nohelp",
          "type": "function"
        },
        "index": {
          "description": "nohelp",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nohelp",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nohelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-noindex\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "noindex",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#noindex",
          "type": "function"
        },
        "index": {
          "description": "noindex",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "noindex",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:noindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nonavbar\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nonavbar",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nonavbar",
          "type": "function"
        },
        "index": {
          "description": "nonavbar",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nonavbar",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nonavbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-noqualifier\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "noqualifier",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#noqualifier",
          "type": "function"
        },
        "index": {
          "description": "noqualifier",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "noqualifier",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:noqualifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nosince\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "nosince",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#nosince",
          "type": "function"
        },
        "index": {
          "description": "nosince",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "nosince",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:nosince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-notimestamp\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "notimestamp",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#notimestamp",
          "type": "function"
        },
        "index": {
          "description": "notimestamp",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "notimestamp",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:notimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-notree\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "notree",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#notree",
          "type": "function"
        },
        "index": {
          "description": "notree",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "notree",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:notree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-overview\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "overview",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javadoc.html#overview",
          "type": "function"
        },
        "index": {
          "description": "overview",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "overview",
          "normalized": "Javadoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:overview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-package\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "package",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#package",
          "type": "function"
        },
        "index": {
          "description": "package",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "package",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-private\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "private",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#private",
          "type": "function"
        },
        "index": {
          "description": "private",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "private",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-protected\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "protected",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#protected",
          "type": "function"
        },
        "index": {
          "description": "protected",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "protected",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:protected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-public\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "public",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#public",
          "type": "function"
        },
        "index": {
          "description": "public",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "public",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-quiet\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "quiet",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#quiet",
          "type": "function"
        },
        "index": {
          "description": "quiet",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "quiet",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-serialwarn\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "serialwarn",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#serialwarn",
          "type": "function"
        },
        "index": {
          "description": "serialwarn",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "serialwarn",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:serialwarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-source\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "source",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe SourceRelease",
          "source": "src/System-Build-Java-Javadoc.html#source",
          "type": "function"
        },
        "index": {
          "description": "source",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "source",
          "normalized": "Javadoc-\u003eMaybe SourceRelease",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe SourceRelease",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "sourcepath",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [FilePath]",
          "source": "src/System-Build-Java-Javadoc.html#sourcepath",
          "type": "function"
        },
        "index": {
          "description": "sourcepath",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "sourcepath",
          "normalized": "Javadoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:sourcepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-sourcetab\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "sourcetab",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe Int",
          "source": "src/System-Build-Java-Javadoc.html#sourcetab",
          "type": "function"
        },
        "index": {
          "description": "sourcetab",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "sourcetab",
          "normalized": "Javadoc-\u003eMaybe Int",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:sourcetab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-splitindex\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "splitindex",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#splitindex",
          "type": "function"
        },
        "index": {
          "description": "splitindex",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "splitindex",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:splitindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-stylesheetfile\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "stylesheetfile",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Java-Javadoc.html#stylesheetfile",
          "type": "function"
        },
        "index": {
          "description": "stylesheetfile",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "stylesheetfile",
          "normalized": "Javadoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:stylesheetfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-subpackages\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "subpackages",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [String]",
          "source": "src/System-Build-Java-Javadoc.html#subpackages",
          "type": "function"
        },
        "index": {
          "description": "subpackages",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "subpackages",
          "normalized": "Javadoc-\u003e[String]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:subpackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-tag\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "tag",
          "package": "Lastik",
          "signature": "Javadoc -\u003e [(String, String, String)]",
          "source": "src/System-Build-Java-Javadoc.html#tag",
          "type": "function"
        },
        "index": {
          "description": "tag",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "tag",
          "normalized": "Javadoc-\u003e[(String,String,String)]",
          "package": "Lastik",
          "signature": "Javadoc-\u003e[(String,String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-taglet\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "taglet",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#taglet",
          "type": "function"
        },
        "index": {
          "description": "taglet",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "taglet",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:taglet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-tagletpath\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "tagletpath",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#tagletpath",
          "type": "function"
        },
        "index": {
          "description": "tagletpath",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "tagletpath",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:tagletpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-top\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "top",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#top",
          "type": "function"
        },
        "index": {
          "description": "top",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "top",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-use\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "use",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#use",
          "type": "function"
        },
        "index": {
          "description": "use",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "use",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-verbose\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "verbose",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#verbose",
          "type": "function"
        },
        "index": {
          "description": "verbose",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "verbose",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-version\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "version",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Bool",
          "source": "src/System-Build-Java-Javadoc.html#version",
          "type": "function"
        },
        "index": {
          "description": "version",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "version",
          "normalized": "Javadoc-\u003eBool",
          "package": "Lastik",
          "signature": "Javadoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-windowtitle\u003c/pre\u003e",
          "module": "System.Build.Java.Javadoc",
          "name": "windowtitle",
          "package": "Lastik",
          "signature": "Javadoc -\u003e Maybe String",
          "source": "src/System-Build-Java-Javadoc.html#windowtitle",
          "type": "function"
        },
        "index": {
          "description": "windowtitle",
          "hierarchy": "System Build Java Javadoc",
          "module": "System.Build.Java.Javadoc",
          "name": "windowtitle",
          "normalized": "Javadoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Javadoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Java-Javadoc.html#v:windowtitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that have the potential for an output directory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.OutputDirectory",
          "name": "OutputDirectory",
          "package": "Lastik",
          "source": "src/System-Build-OutputDirectory.html",
          "type": "module"
        },
        "index": {
          "description": "Values that have the potential for an output directory",
          "hierarchy": "System Build OutputDirectory",
          "module": "System.Build.OutputDirectory",
          "name": "OutputDirectory",
          "package": "Lastik",
          "partial": "Output Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.OutputDirectory",
          "name": "OutputDirectory",
          "package": "Lastik",
          "source": "src/System-Build-OutputDirectory.html#OutputDirectory",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build OutputDirectory",
          "module": "System.Build.OutputDirectory",
          "name": "OutputDirectory",
          "package": "Lastik",
          "partial": "Output Directory",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#t:OutputDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.OutputDirectory",
          "name": "outdir",
          "package": "Lastik",
          "signature": "o -\u003e Maybe FilePath",
          "source": "src/System-Build-OutputDirectory.html#outdir",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Build OutputDirectory",
          "module": "System.Build.OutputDirectory",
          "name": "outdir",
          "normalized": "a-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "o-\u003eMaybe FilePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputDirectory.html#v:outdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that reference a list of file paths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.OutputReferenceGet",
          "name": "OutputReferenceGet",
          "package": "Lastik",
          "source": "src/System-Build-OutputReferenceGet.html",
          "type": "module"
        },
        "index": {
          "description": "Values that reference list of file paths",
          "hierarchy": "System Build OutputReferenceGet",
          "module": "System.Build.OutputReferenceGet",
          "name": "OutputReferenceGet",
          "package": "Lastik",
          "partial": "Output Reference Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.OutputReferenceGet",
          "name": "OutputReferenceGet",
          "package": "Lastik",
          "source": "src/System-Build-OutputReferenceGet.html#OutputReferenceGet",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build OutputReferenceGet",
          "module": "System.Build.OutputReferenceGet",
          "name": "OutputReferenceGet",
          "package": "Lastik",
          "partial": "Output Reference Get",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#t:OutputReferenceGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the file paths referenced by the given value.\n\u003c/p\u003e",
          "module": "System.Build.OutputReferenceGet",
          "name": "getReference",
          "package": "Lastik",
          "signature": "r -\u003e [FilePath]",
          "source": "src/System-Build-OutputReferenceGet.html#getReference",
          "type": "method"
        },
        "index": {
          "description": "Return the file paths referenced by the given value",
          "hierarchy": "System Build OutputReferenceGet",
          "module": "System.Build.OutputReferenceGet",
          "name": "getReference",
          "normalized": "a-\u003e[FilePath]",
          "package": "Lastik",
          "partial": "Reference",
          "signature": "r-\u003e[FilePath]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceGet.html#v:getReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValues that reference a list of file paths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.OutputReferenceSet",
          "name": "OutputReferenceSet",
          "package": "Lastik",
          "source": "src/System-Build-OutputReferenceSet.html",
          "type": "module"
        },
        "index": {
          "description": "Values that reference list of file paths",
          "hierarchy": "System Build OutputReferenceSet",
          "module": "System.Build.OutputReferenceSet",
          "name": "OutputReferenceSet",
          "package": "Lastik",
          "partial": "Output Reference Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.OutputReferenceSet",
          "name": "OutputReferenceSet",
          "package": "Lastik",
          "source": "src/System-Build-OutputReferenceSet.html#OutputReferenceSet",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Build OutputReferenceSet",
          "module": "System.Build.OutputReferenceSet",
          "name": "OutputReferenceSet",
          "package": "Lastik",
          "partial": "Output Reference Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#t:OutputReferenceSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the file path list reference of the given value.\n\u003c/p\u003e",
          "module": "System.Build.OutputReferenceSet",
          "name": "setReference",
          "package": "Lastik",
          "signature": "[FilePath] -\u003e r -\u003e r",
          "source": "src/System-Build-OutputReferenceSet.html#setReference",
          "type": "method"
        },
        "index": {
          "description": "Set the file path list reference of the given value",
          "hierarchy": "System Build OutputReferenceSet",
          "module": "System.Build.OutputReferenceSet",
          "name": "setReference",
          "normalized": "[FilePath]-\u003ea-\u003ea",
          "package": "Lastik",
          "partial": "Reference",
          "signature": "[FilePath]-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-OutputReferenceSet.html#v:setReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for running compilable data types that take a list of file paths to compile.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Runner",
          "name": "Runner",
          "package": "Lastik",
          "source": "src/System-Build-Runner.html",
          "type": "module"
        },
        "index": {
          "description": "module for running compilable data types that take list of file paths to compile",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "Runner",
          "package": "Lastik",
          "partial": "Runner",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Runner",
          "name": "Runner",
          "package": "Lastik",
          "source": "src/System-Build-Runner.html#Runner",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "Runner",
          "package": "Lastik",
          "partial": "Runner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#t:Runner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Runner",
          "name": "RunnerExit",
          "package": "Lastik",
          "source": "src/System-Build-Runner.html#RunnerExit",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "RunnerExit",
          "package": "Lastik",
          "partial": "Runner Exit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#t:RunnerExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Runner",
          "name": "(!!!)",
          "package": "Lastik",
          "signature": "RunnerExit c",
          "source": "src/System-Build-Runner.html#%21%21%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(!!!) !!!",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-33--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given file paths to the reference target of the given value.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(++\u003e\u003e)",
          "package": "Lastik",
          "signature": "[FilePath]-\u003e r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Adds the given file paths to the reference target of the given value",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(++\u003e\u003e) ++\u003e\u003e",
          "normalized": "[FilePath]-\u003ea-\u003ea",
          "package": "Lastik",
          "signature": "[FilePath]-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-43--43--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given file path to the reference target of the given value.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(+\u003e\u003e)",
          "package": "Lastik",
          "signature": "FilePath-\u003e r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Adds the given file path to the reference target of the given value",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(+\u003e\u003e) +\u003e\u003e",
          "normalized": "FilePath-\u003ea-\u003ea",
          "package": "Lastik",
          "signature": "FilePath-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-43--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA runner that recursively searches the output target for files that match a given extension and compiles them as a system command.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(-\u003e-)",
          "package": "Lastik",
          "signature": "RunnerExit c",
          "source": "src/System-Build-Runner.html#-%3E-",
          "type": "function"
        },
        "index": {
          "description": "runner that recursively searches the output target for files that match given extension and compiles them as system command",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(-\u003e-) -\u003e-",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-45--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the second value only if the first produces \u003ccode\u003eExitSuccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(\u003e--)",
          "package": "Lastik",
          "signature": "m ExitCode -\u003e m ExitCode -\u003e m ExitCode",
          "source": "src/System-Build-Runner.html#%3E--",
          "type": "function"
        },
        "index": {
          "description": "Applies the second value only if the first produces ExitSuccess",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(\u003e--) \u003e--",
          "normalized": "a ExitCode-\u003ea ExitCode-\u003ea ExitCode",
          "package": "Lastik",
          "signature": "m ExitCode-\u003em ExitCode-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--45--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the output target directory then execute the compile result as a system command.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(\u003e-\u003e)",
          "package": "Lastik",
          "signature": "RunnerExit c",
          "source": "src/System-Build-Runner.html#%3E-%3E",
          "type": "function"
        },
        "index": {
          "description": "Create the output target directory then execute the compile result as system command",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(\u003e-\u003e) \u003e-\u003e",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the second action only if the first produces \u003ccode\u003eExitSuccess\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(\u003e==)",
          "package": "Lastik",
          "signature": "m ExitCode -\u003e m () -\u003e m ()",
          "source": "src/System-Build-Runner.html#%3E%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Executes the second action only if the first produces ExitSuccess",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(\u003e==) \u003e==",
          "normalized": "a ExitCode-\u003ea()-\u003ea()",
          "package": "Lastik",
          "signature": "m ExitCode-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the (potential) output target of the given value to the output target of the given value.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(\u003e===\u003e)",
          "package": "Lastik",
          "signature": "o-\u003e r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Adds the potential output target of the given value to the output target of the given value",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(\u003e===\u003e) \u003e===\u003e",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Lastik",
          "signature": "o-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the (potential) output target and output references of the given value to the output target of the given value.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "(\u003e=\u003e=\u003e)",
          "package": "Lastik",
          "signature": "o-\u003e r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Adds the potential output target and output references of the given value to the output target of the given value",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "(\u003e=\u003e=\u003e) \u003e=\u003e=\u003e",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Lastik",
          "signature": "o-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:-62--61--62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the list of file paths before executing the runner.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "pathTransform",
          "package": "Lastik",
          "signature": "([FilePath] -\u003e IO [FilePath]) -\u003e Runner x t -\u003e Runner x t",
          "source": "src/System-Build-Runner.html#pathTransform",
          "type": "function"
        },
        "index": {
          "description": "Transform the list of file paths before executing the runner",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "pathTransform",
          "normalized": "([FilePath]-\u003eIO[FilePath])-\u003eRunner a b-\u003eRunner a b",
          "package": "Lastik",
          "partial": "Transform",
          "signature": "([FilePath]-\u003eIO[FilePath])-\u003eRunner x t-\u003eRunner x t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:pathTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all file paths with the given file extension (recursively) and execute the runner on those.\n\u003c/p\u003e",
          "module": "System.Build.Runner",
          "name": "pathTransform'",
          "package": "Lastik",
          "signature": "e -\u003e Runner x r -\u003e Runner x r",
          "source": "src/System-Build-Runner.html#pathTransform%27",
          "type": "function"
        },
        "index": {
          "description": "Get all file paths with the given file extension recursively and execute the runner on those",
          "hierarchy": "System Build Runner",
          "module": "System.Build.Runner",
          "name": "pathTransform'",
          "normalized": "a-\u003eRunner b c-\u003eRunner b c",
          "package": "Lastik",
          "partial": "Transform'",
          "signature": "e-\u003eRunner x r-\u003eRunner x r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Runner.html#v:pathTransform-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents that access levels available to \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Scala.Access",
          "name": "Access",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Access.html",
          "type": "module"
        },
        "index": {
          "description": "module that represents that access levels available to scaladoc",
          "hierarchy": "System Build Scala Access",
          "module": "System.Build.Scala.Access",
          "name": "Access",
          "package": "Lastik",
          "partial": "Access",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only public, protected/public (default) or all classes and members (public,protected,private)\n\u003c/p\u003e",
          "module": "System.Build.Scala.Access",
          "name": "Access",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Access.html#Access",
          "type": "data"
        },
        "index": {
          "description": "Show only public protected public default or all classes and members public protected private",
          "hierarchy": "System Build Scala Access",
          "module": "System.Build.Scala.Access",
          "name": "Access",
          "package": "Lastik",
          "partial": "Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#t:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eprivate\u003c/pre\u003e",
          "module": "System.Build.Scala.Access",
          "name": "Private",
          "package": "Lastik",
          "signature": "Private",
          "source": "src/System-Build-Scala-Access.html#Access",
          "type": "function"
        },
        "index": {
          "description": "private",
          "hierarchy": "System Build Scala Access",
          "module": "System.Build.Scala.Access",
          "name": "Private",
          "package": "Lastik",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eprotected\u003c/pre\u003e",
          "module": "System.Build.Scala.Access",
          "name": "Protected",
          "package": "Lastik",
          "signature": "Protected",
          "source": "src/System-Build-Scala-Access.html#Access",
          "type": "function"
        },
        "index": {
          "description": "protected",
          "hierarchy": "System Build Scala Access",
          "module": "System.Build.Scala.Access",
          "name": "Protected",
          "package": "Lastik",
          "partial": "Protected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Protected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003epublic\u003c/pre\u003e",
          "module": "System.Build.Scala.Access",
          "name": "Public",
          "package": "Lastik",
          "signature": "Public",
          "source": "src/System-Build-Scala-Access.html#Access",
          "type": "function"
        },
        "index": {
          "description": "public",
          "hierarchy": "System Build Scala Access",
          "module": "System.Build.Scala.Access",
          "name": "Public",
          "package": "Lastik",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Access.html#v:Public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents the debug levels to \u003ccode\u003escalac\u003c/code\u003e and \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "Debug",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "module that represents the debug levels to scalac and scaladoc",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "Debug",
          "package": "Lastik",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify level of generated debugging info (none,source,line,vars,notailcalls)\n\u003c/p\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "Debug",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "data"
        },
        "index": {
          "description": "Specify level of generated debugging info none source line vars notailcalls",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "Debug",
          "package": "Lastik",
          "partial": "Debug",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#t:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eline\u003c/pre\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "Line",
          "package": "Lastik",
          "signature": "Line",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "line",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "Line",
          "package": "Lastik",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enotailcalls\u003c/pre\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "NoTailCalls",
          "package": "Lastik",
          "signature": "NoTailCalls",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "notailcalls",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "NoTailCalls",
          "package": "Lastik",
          "partial": "No Tail Calls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:NoTailCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enone\u003c/pre\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "None",
          "package": "Lastik",
          "signature": "None",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "none",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "None",
          "package": "Lastik",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003esource\u003c/pre\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "Source",
          "package": "Lastik",
          "signature": "Source",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "source",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "Source",
          "package": "Lastik",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evars\u003c/pre\u003e",
          "module": "System.Build.Scala.Debug",
          "name": "Vars",
          "package": "Lastik",
          "signature": "Vars",
          "source": "src/System-Build-Scala-Debug.html#Debug",
          "type": "function"
        },
        "index": {
          "description": "vars",
          "hierarchy": "System Build Scala Debug",
          "module": "System.Build.Scala.Debug",
          "name": "Vars",
          "package": "Lastik",
          "partial": "Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Debug.html#v:Vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for compiling Scala source files using \u003ccode\u003escalac\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "Scalac",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Scalac.html",
          "type": "module"
        },
        "index": {
          "description": "module for compiling Scala source files using scalac",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "Scalac",
          "package": "Lastik",
          "partial": "Scalac",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Scala fast compiler (\u003ccode\u003efsc\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "Fsc",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Scalac.html#Fsc",
          "type": "data"
        },
        "index": {
          "description": "The Scala fast compiler fsc",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "Fsc",
          "package": "Lastik",
          "partial": "Fsc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#t:Fsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalac is the compiler for Scala source files.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "Scalac",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Scalac.html#Scalac",
          "type": "data"
        },
        "index": {
          "description": "Scalac is the compiler for Scala source files",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "Scalac",
          "package": "Lastik",
          "partial": "Scalac",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#t:Scalac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e@\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "(?)",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe FilePath",
          "source": "src/System-Build-Scala-Scalac.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "(?) ?",
          "normalized": "Scalac-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "bootclasspath",
          "package": "Lastik",
          "signature": "Scalac -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scalac.html#bootclasspath",
          "type": "function"
        },
        "index": {
          "description": "bootclasspath",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "bootclasspath",
          "normalized": "Scalac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scalac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:bootclasspath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-classpath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "classpath",
          "package": "Lastik",
          "signature": "Scalac -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scalac.html#classpath",
          "type": "function"
        },
        "index": {
          "description": "classpath",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "classpath",
          "normalized": "Scalac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scalac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:classpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-g\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "debug",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe Debug",
          "source": "src/System-Build-Scala-Scalac.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "debug",
          "normalized": "Scalac-\u003eMaybe Debug",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "deprecation",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#deprecation",
          "type": "function"
        },
        "index": {
          "description": "deprecation",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "deprecation",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:deprecation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-d\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "directory",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe FilePath",
          "source": "src/System-Build-Scala-Scalac.html#directory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "directory",
          "normalized": "Scalac-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-encoding\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "encoding",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scalac.html#encoding",
          "type": "function"
        },
        "index": {
          "description": "encoding",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "encoding",
          "normalized": "Scalac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Scala.Scalac",
          "name": "etc",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scalac.html#etc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "etc",
          "normalized": "Scalac-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:etc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-explaintypes\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "explaintypes",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#explaintypes",
          "type": "function"
        },
        "index": {
          "description": "explaintypes",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "explaintypes",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:explaintypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "extdirs",
          "package": "Lastik",
          "signature": "Scalac -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scalac.html#extdirs",
          "type": "function"
        },
        "index": {
          "description": "extdirs",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "extdirs",
          "normalized": "Scalac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scalac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:extdirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-flags\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "flags",
          "package": "Lastik",
          "signature": "Fsc -\u003e [String]",
          "source": "src/System-Build-Scala-Scalac.html#flags",
          "type": "function"
        },
        "index": {
          "description": "flags",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "flags",
          "normalized": "Fsc-\u003e[String]",
          "package": "Lastik",
          "signature": "Fsc-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eFsc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "fsc",
          "package": "Lastik",
          "signature": "Fsc",
          "source": "src/System-Build-Scala-Scalac.html#fsc",
          "type": "function"
        },
        "index": {
          "description": "Fsc with nothing set",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "fsc",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:fsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe scalac options to use.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "fscalac",
          "package": "Lastik",
          "signature": "Fsc -\u003e Scalac",
          "source": "src/System-Build-Scala-Scalac.html#fscalac",
          "type": "function"
        },
        "index": {
          "description": "The scalac options to use",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "fscalac",
          "normalized": "Fsc-\u003eScalac",
          "package": "Lastik",
          "signature": "Fsc-\u003eScalac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:fscalac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-help\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "help",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#help",
          "type": "function"
        },
        "index": {
          "description": "help",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "help",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the given scalac to a list of command line options which may be used by other scala tools.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "kscalac",
          "package": "Lastik",
          "signature": "Scalac -\u003e [String]",
          "source": "src/System-Build-Scala-Scalac.html#kscalac",
          "type": "function"
        },
        "index": {
          "description": "Convert the given scalac to list of command line options which may be used by other scala tools",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "kscalac",
          "normalized": "Scalac-\u003e[String]",
          "package": "Lastik",
          "signature": "Scalac-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:kscalac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "nowarn",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#nowarn",
          "type": "function"
        },
        "index": {
          "description": "nowarn",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "nowarn",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:nowarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-optimise\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "optimise",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#optimise",
          "type": "function"
        },
        "index": {
          "description": "optimise",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "optimise",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:optimise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-print\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "print",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#print",
          "type": "function"
        },
        "index": {
          "description": "print",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "print",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-reset\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "reset",
          "package": "Lastik",
          "signature": "Fsc -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#reset",
          "type": "function"
        },
        "index": {
          "description": "reset",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "reset",
          "normalized": "Fsc-\u003eBool",
          "package": "Lastik",
          "signature": "Fsc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eScalac\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "scalac",
          "package": "Lastik",
          "signature": "Scalac",
          "source": "src/System-Build-Scala-Scalac.html#scalac",
          "type": "function"
        },
        "index": {
          "description": "Scalac with nothing set",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "scalac",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:scalac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eScalac\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "scalac'",
          "package": "Lastik",
          "signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe Target -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe String -\u003e Scalac",
          "source": "src/System-Build-Scala-Scalac.html#scalac%27",
          "type": "function"
        },
        "index": {
          "description": "Construct Scalac",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "scalac'",
          "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eScalac",
          "package": "Lastik",
          "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe String-\u003eScalac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:scalac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-server\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "server",
          "package": "Lastik",
          "signature": "Fsc -\u003e Maybe (String, String)",
          "source": "src/System-Build-Scala-Scalac.html#server",
          "type": "function"
        },
        "index": {
          "description": "server",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "server",
          "normalized": "Fsc-\u003eMaybe(String,String)",
          "package": "Lastik",
          "signature": "Fsc-\u003eMaybe(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-shutdown\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "shutdown",
          "package": "Lastik",
          "signature": "Fsc -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#shutdown",
          "type": "function"
        },
        "index": {
          "description": "shutdown",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "shutdown",
          "normalized": "Fsc-\u003eBool",
          "package": "Lastik",
          "signature": "Fsc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "sourcepath",
          "package": "Lastik",
          "signature": "Scalac -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scalac.html#sourcepath",
          "type": "function"
        },
        "index": {
          "description": "sourcepath",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "sourcepath",
          "normalized": "Scalac-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scalac-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:sourcepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-target\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "target",
          "package": "Lastik",
          "signature": "Scalac -\u003e Maybe Target",
          "source": "src/System-Build-Scala-Scalac.html#target",
          "type": "function"
        },
        "index": {
          "description": "target",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "target",
          "normalized": "Scalac-\u003eMaybe Target",
          "package": "Lastik",
          "signature": "Scalac-\u003eMaybe Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-unchecked\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "unchecked",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#unchecked",
          "type": "function"
        },
        "index": {
          "description": "unchecked",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "unchecked",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:unchecked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-uniqid\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "uniqid",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#uniqid",
          "type": "function"
        },
        "index": {
          "description": "uniqid",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "uniqid",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:uniqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-verbose\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "verbose",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#verbose",
          "type": "function"
        },
        "index": {
          "description": "verbose",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "verbose",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-version\u003c/pre\u003e",
          "module": "System.Build.Scala.Scalac",
          "name": "version",
          "package": "Lastik",
          "signature": "Scalac -\u003e Bool",
          "source": "src/System-Build-Scala-Scalac.html#version",
          "type": "function"
        },
        "index": {
          "description": "version",
          "hierarchy": "System Build Scala Scalac",
          "module": "System.Build.Scala.Scalac",
          "name": "version",
          "normalized": "Scalac-\u003eBool",
          "package": "Lastik",
          "signature": "Scalac-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scalac.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for documenting Scala source files using \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "Scaladoc",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Scaladoc.html",
          "type": "module"
        },
        "index": {
          "description": "module for documenting Scala source files using scaladoc",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "Scaladoc",
          "package": "Lastik",
          "partial": "Scaladoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavadoc is the compiler for Scala API documentation.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "Scaladoc",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Scaladoc.html#Scaladoc",
          "type": "data"
        },
        "index": {
          "description": "Javadoc is the compiler for Scala API documentation",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "Scaladoc",
          "package": "Lastik",
          "partial": "Scaladoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#t:Scaladoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e@\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "(?)",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Scala-Scaladoc.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "(?) ?",
          "normalized": "Scaladoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-access\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "access",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe Access",
          "source": "src/System-Build-Scala-Scaladoc.html#access",
          "type": "function"
        },
        "index": {
          "description": "access",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "access",
          "normalized": "Scaladoc-\u003eMaybe Access",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bootclasspath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "bootclasspath",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scaladoc.html#bootclasspath",
          "type": "function"
        },
        "index": {
          "description": "bootclasspath",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "bootclasspath",
          "normalized": "Scaladoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scaladoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:bootclasspath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-bottom\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "bottom",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#bottom",
          "type": "function"
        },
        "index": {
          "description": "bottom",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "bottom",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-charset\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "charset",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#charset",
          "type": "function"
        },
        "index": {
          "description": "charset",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "charset",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:charset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-classpath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "classpath",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scaladoc.html#classpath",
          "type": "function"
        },
        "index": {
          "description": "classpath",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "classpath",
          "normalized": "Scaladoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scaladoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:classpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-g\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "debug",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe Debug",
          "source": "src/System-Build-Scala-Scaladoc.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "debug",
          "normalized": "Scaladoc-\u003eMaybe Debug",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-deprecation\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "deprecation",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#deprecation",
          "type": "function"
        },
        "index": {
          "description": "deprecation",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "deprecation",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:deprecation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-d\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "directory",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe FilePath",
          "source": "src/System-Build-Scala-Scaladoc.html#directory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "directory",
          "normalized": "Scaladoc-\u003eMaybe FilePath",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-doctitle\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "doctitle",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#doctitle",
          "type": "function"
        },
        "index": {
          "description": "doctitle",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "doctitle",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:doctitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-encoding\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "encoding",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#encoding",
          "type": "function"
        },
        "index": {
          "description": "encoding",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "encoding",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build.Scala.Scaladoc",
          "name": "etc",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#etc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "etc",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:etc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-explaintypes\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "explaintypes",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#explaintypes",
          "type": "function"
        },
        "index": {
          "description": "explaintypes",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "explaintypes",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:explaintypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-extdirs\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "extdirs",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scaladoc.html#extdirs",
          "type": "function"
        },
        "index": {
          "description": "extdirs",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "extdirs",
          "normalized": "Scaladoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scaladoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:extdirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-footer\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "footer",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#footer",
          "type": "function"
        },
        "index": {
          "description": "footer",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "footer",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-header\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "header",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#header",
          "type": "function"
        },
        "index": {
          "description": "header",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "header",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-help\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "help",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#help",
          "type": "function"
        },
        "index": {
          "description": "help",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "help",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-linksource\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "linksource",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#linksource",
          "type": "function"
        },
        "index": {
          "description": "linksource",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "linksource",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:linksource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nocomment\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "nocomment",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#nocomment",
          "type": "function"
        },
        "index": {
          "description": "nocomment",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "nocomment",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:nocomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-nowarn\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "nowarn",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#nowarn",
          "type": "function"
        },
        "index": {
          "description": "nowarn",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "nowarn",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:nowarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-optimise\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "optimise",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#optimise",
          "type": "function"
        },
        "index": {
          "description": "optimise",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "optimise",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:optimise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-print\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "print",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#print",
          "type": "function"
        },
        "index": {
          "description": "print",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "print",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eScaladoc\u003c/code\u003e with nothing set.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "scaladoc",
          "package": "Lastik",
          "signature": "Scaladoc",
          "source": "src/System-Build-Scala-Scaladoc.html#scaladoc",
          "type": "function"
        },
        "index": {
          "description": "Scaladoc with nothing set",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "scaladoc",
          "package": "Lastik",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:scaladoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003eScaladoc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "scaladoc'",
          "package": "Lastik",
          "signature": "Maybe Debug -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e [FilePath] -\u003e Maybe FilePath -\u003e Maybe String -\u003e Maybe Target -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Maybe FilePath -\u003e Maybe Access -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Bool -\u003e Bool -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Maybe String -\u003e Scaladoc",
          "source": "src/System-Build-Scala-Scaladoc.html#scaladoc%27",
          "type": "function"
        },
        "index": {
          "description": "Construct Scaladoc",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "scaladoc'",
          "normalized": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe Access-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eScaladoc",
          "package": "Lastik",
          "signature": "Maybe Debug-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003e[FilePath]-\u003eMaybe FilePath-\u003eMaybe String-\u003eMaybe Target-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe FilePath-\u003eMaybe Access-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eBool-\u003eBool-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eMaybe String-\u003eScaladoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:scaladoc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-sourcepath\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "sourcepath",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e [FilePath]",
          "source": "src/System-Build-Scala-Scaladoc.html#sourcepath",
          "type": "function"
        },
        "index": {
          "description": "sourcepath",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "sourcepath",
          "normalized": "Scaladoc-\u003e[FilePath]",
          "package": "Lastik",
          "signature": "Scaladoc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:sourcepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-stylesheetfile\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "stylesheetfile",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#stylesheetfile",
          "type": "function"
        },
        "index": {
          "description": "stylesheetfile",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "stylesheetfile",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:stylesheetfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-target\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "target",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe Target",
          "source": "src/System-Build-Scala-Scaladoc.html#target",
          "type": "function"
        },
        "index": {
          "description": "target",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "target",
          "normalized": "Scaladoc-\u003eMaybe Target",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-top\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "top",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#top",
          "type": "function"
        },
        "index": {
          "description": "top",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "top",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-unchecked\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "unchecked",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#unchecked",
          "type": "function"
        },
        "index": {
          "description": "unchecked",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "unchecked",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:unchecked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-uniqid\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "uniqid",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#uniqid",
          "type": "function"
        },
        "index": {
          "description": "uniqid",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "uniqid",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:uniqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-verbose\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "verbose",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#verbose",
          "type": "function"
        },
        "index": {
          "description": "verbose",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "verbose",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-version\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "version",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Bool",
          "source": "src/System-Build-Scala-Scaladoc.html#version",
          "type": "function"
        },
        "index": {
          "description": "version",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "version",
          "normalized": "Scaladoc-\u003eBool",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-windowtitle\u003c/pre\u003e",
          "module": "System.Build.Scala.Scaladoc",
          "name": "windowtitle",
          "package": "Lastik",
          "signature": "Scaladoc -\u003e Maybe String",
          "source": "src/System-Build-Scala-Scaladoc.html#windowtitle",
          "type": "function"
        },
        "index": {
          "description": "windowtitle",
          "hierarchy": "System Build Scala Scaladoc",
          "module": "System.Build.Scala.Scaladoc",
          "name": "windowtitle",
          "normalized": "Scaladoc-\u003eMaybe String",
          "package": "Lastik",
          "signature": "Scaladoc-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Scaladoc.html#v:windowtitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that represents the target levels to \u003ccode\u003escalac\u003c/code\u003e and \u003ccode\u003escaladoc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Build.Scala.Target",
          "name": "Target",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Target.html",
          "type": "module"
        },
        "index": {
          "description": "module that represents the target levels to scalac and scaladoc",
          "hierarchy": "System Build Scala Target",
          "module": "System.Build.Scala.Target",
          "name": "Target",
          "package": "Lastik",
          "partial": "Target",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify for which target object files should be built (jvm-1.5,jvm-1.4,msil)\n\u003c/p\u003e",
          "module": "System.Build.Scala.Target",
          "name": "Target",
          "package": "Lastik",
          "source": "src/System-Build-Scala-Target.html#Target",
          "type": "data"
        },
        "index": {
          "description": "Specify for which target object files should be built jvm-1.5 jvm-1.4 msil",
          "hierarchy": "System Build Scala Target",
          "module": "System.Build.Scala.Target",
          "name": "Target",
          "package": "Lastik",
          "partial": "Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ejvm-1.4\u003c/pre\u003e",
          "module": "System.Build.Scala.Target",
          "name": "JVM14",
          "package": "Lastik",
          "signature": "JVM14",
          "source": "src/System-Build-Scala-Target.html#Target",
          "type": "function"
        },
        "index": {
          "description": "jvm-1.4",
          "hierarchy": "System Build Scala Target",
          "module": "System.Build.Scala.Target",
          "name": "JVM14",
          "package": "Lastik",
          "partial": "JVM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:JVM14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ejvm-1.5\u003c/pre\u003e",
          "module": "System.Build.Scala.Target",
          "name": "JVM15",
          "package": "Lastik",
          "signature": "JVM15",
          "source": "src/System-Build-Scala-Target.html#Target",
          "type": "function"
        },
        "index": {
          "description": "jvm-1.5",
          "hierarchy": "System Build Scala Target",
          "module": "System.Build.Scala.Target",
          "name": "JVM15",
          "package": "Lastik",
          "partial": "JVM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:JVM15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emsil\u003c/pre\u003e",
          "module": "System.Build.Scala.Target",
          "name": "MSIL",
          "package": "Lastik",
          "signature": "MSIL",
          "source": "src/System-Build-Scala-Target.html#Target",
          "type": "function"
        },
        "index": {
          "description": "msil",
          "hierarchy": "System Build Scala Target",
          "module": "System.Build.Scala.Target",
          "name": "MSIL",
          "package": "Lastik",
          "partial": "MSIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build-Scala-Target.html#v:MSIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Build",
          "name": "Build",
          "package": "Lastik",
          "source": "src/System-Build.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Build",
          "module": "System.Build",
          "name": "Build",
          "package": "Lastik",
          "partial": "Build",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Lastik/docs/System-Build.html#"
      }
    }
  ]
]