[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a library interface to HLint. The current\ninterface is strongly modelled on the command line interface,\nand is expected to evolve.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-HLint.html",
        "fct-type": "module",
        "title": "HLint"
      },
      "index": {
        "description": "This module provides library interface to HLint The current interface is strongly modelled on the command line interface and is expected to evolve",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "HLint",
        "normalized": "",
        "package": "hlint",
        "partial": "HLint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#t:Severity",
      "description": {
        "fct-descr": "\u003cp\u003eHow severe an error is.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "data",
        "fct-source": "src/Settings.html#Severity",
        "fct-type": "data",
        "title": "Severity"
      },
      "index": {
        "description": "How severe an error is",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "Severity",
        "normalized": "",
        "package": "hlint",
        "partial": "Severity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#t:Suggestion",
      "description": {
        "fct-descr": "\u003cp\u003eA suggestion - the \u003ccode\u003eShow\u003c/code\u003e instance is of particular use.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "data",
        "fct-source": "src/HLint.html#Suggestion",
        "fct-type": "data",
        "title": "Suggestion"
      },
      "index": {
        "description": "suggestion the Show instance is of particular use",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "Suggestion",
        "normalized": "",
        "package": "hlint",
        "partial": "Suggestion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eErrors are suggestions that should nearly always be a good idea to apply.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "Error",
        "fct-source": "src/Settings.html#Severity",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "Errors are suggestions that should nearly always be good idea to apply",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "Error",
        "normalized": "",
        "package": "hlint",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Ignore",
      "description": {
        "fct-descr": "\u003cp\u003eIgnored errors are only returned when \u003ccode\u003e--show\u003c/code\u003e is passed.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "Ignore",
        "fct-source": "src/Settings.html#Severity",
        "fct-type": "function",
        "title": "Ignore"
      },
      "index": {
        "description": "Ignored errors are only returned when show is passed",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "Ignore",
        "normalized": "",
        "package": "hlint",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Warning",
      "description": {
        "fct-descr": "\u003cp\u003eWarnings are things that some people may consider improvements, but some may not.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "Warning",
        "fct-source": "src/Settings.html#Severity",
        "fct-type": "function",
        "title": "Warning"
      },
      "index": {
        "description": "Warnings are things that some people may consider improvements but some may not",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "Warning",
        "normalized": "",
        "package": "hlint",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:hlint",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a list of command line arguments, and returns the given suggestions.\n   To see a list of arguments type \u003ccode\u003ehlint --help\u003c/code\u003e at the console.\n   This function writes to the stdout/stderr streams, unless \u003ccode\u003e--quiet\u003c/code\u003e is specified.\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e do hints \u003c- hlint [\"src\", \"--ignore=Use map\",\"--quiet\"]\n    when (length hints \u003e 3) $ error \"Too many hints!\"\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "[String] -\u003e IO [Suggestion]",
        "fct-source": "src/HLint.html#hlint",
        "fct-type": "function",
        "title": "hlint"
      },
      "index": {
        "description": "This function takes list of command line arguments and returns the given suggestions To see list of arguments type hlint help at the console This function writes to the stdout stderr streams unless quiet is specified As an example do hints hlint src ignore Use map quiet when length hints error Too many hints",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "hlint",
        "normalized": "[String]-\u003eIO[Suggestion]",
        "package": "hlint",
        "partial": "",
        "signature": "[String]-\u003eIO[Suggestion]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:suggestionLocation",
      "description": {
        "fct-descr": "\u003cp\u003eFrom a suggestion, extract the file location it refers to.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "Suggestion -\u003e SrcLoc",
        "fct-source": "src/HLint.html#suggestionLocation",
        "fct-type": "function",
        "title": "suggestionLocation"
      },
      "index": {
        "description": "From suggestion extract the file location it refers to",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "suggestionLocation",
        "normalized": "Suggestion-\u003eSrcLoc",
        "package": "hlint",
        "partial": "Location",
        "signature": "Suggestion-\u003eSrcLoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:suggestionSeverity",
      "description": {
        "fct-descr": "\u003cp\u003eFrom a suggestion, determine how severe it is.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.HLint",
        "fct-package": "hlint",
        "fct-signature": "Suggestion -\u003e Severity",
        "fct-source": "src/HLint.html#suggestionSeverity",
        "fct-type": "function",
        "title": "suggestionSeverity"
      },
      "index": {
        "description": "From suggestion determine how severe it is",
        "hierarchy": "Language Haskell HLint",
        "module": "Language.Haskell.HLint",
        "name": "suggestionSeverity",
        "normalized": "Suggestion-\u003eSeverity",
        "package": "hlint",
        "partial": "Severity",
        "signature": "Suggestion-\u003eSeverity"
      }
    }
  }
]