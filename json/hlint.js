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
        "word": "hlint"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a library interface to HLint. The current\ninterface is strongly modelled on the command line interface,\nand is expected to evolve.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.HLint",
          "name": "HLint",
          "package": "hlint",
          "source": "src/Language-Haskell-HLint.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides library interface to HLint The current interface is strongly modelled on the command line interface and is expected to evolve",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "HLint",
          "package": "hlint",
          "partial": "HLint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow severe an issue is.\n\u003c/p\u003e",
          "module": "Language.Haskell.HLint",
          "name": "Severity",
          "package": "hlint",
          "source": "src/Settings.html#Severity",
          "type": "data"
        },
        "index": {
          "description": "How severe an issue is",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "Severity",
          "package": "hlint",
          "partial": "Severity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#t:Severity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA suggestion - the \u003ccode\u003eShow\u003c/code\u003e instance is of particular use.\n\u003c/p\u003e",
          "module": "Language.Haskell.HLint",
          "name": "Suggestion",
          "package": "hlint",
          "source": "src/HLint.html#Suggestion",
          "type": "data"
        },
        "index": {
          "description": "suggestion the Show instance is of particular use",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "Suggestion",
          "package": "hlint",
          "partial": "Suggestion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#t:Suggestion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors are suggestions that are nearly always a good idea to apply.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.HLint\",\"Temporary.API\"]",
          "name": "Error",
          "package": "hlint",
          "signature": "Error",
          "source": "src/Settings.html#Severity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Error\",\"http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Error\"]"
        },
        "index": {
          "description": "Errors are suggestions that are nearly always good idea to apply",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "Error",
          "package": "hlint",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe issue has been explicitly ignored and will usually be hidden (pass \u003ccode\u003e--show\u003c/code\u003e on the command line to see ignored ideas).\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.HLint\",\"Temporary.API\"]",
          "name": "Ignore",
          "package": "hlint",
          "signature": "Ignore",
          "source": "src/Settings.html#Severity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Ignore\",\"http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Ignore\"]"
        },
        "index": {
          "description": "The issue has been explicitly ignored and will usually be hidden pass show on the command line to see ignored ideas",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "Ignore",
          "package": "hlint",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarnings are things that some people may consider improvements, but some may not.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.HLint\",\"Temporary.API\"]",
          "name": "Warning",
          "package": "hlint",
          "signature": "Warning",
          "source": "src/Settings.html#Severity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Warning\",\"http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Warning\"]"
        },
        "index": {
          "description": "Warnings are things that some people may consider improvements but some may not",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "Warning",
          "package": "hlint",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a list of command line arguments, and returns the given suggestions.\n   To see a list of arguments type \u003ccode\u003ehlint --help\u003c/code\u003e at the console.\n   This function writes to the stdout/stderr streams, unless \u003ccode\u003e--quiet\u003c/code\u003e is specified.\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e do hints \u003c- hlint [\"src\", \"--ignore=Use map\",\"--quiet\"]\n    when (length hints \u003e 3) $ error \"Too many hints!\"\n\u003c/pre\u003e",
          "module": "Language.Haskell.HLint",
          "name": "hlint",
          "package": "hlint",
          "signature": "[String] -\u003e IO [Suggestion]",
          "source": "src/HLint.html#hlint",
          "type": "function"
        },
        "index": {
          "description": "This function takes list of command line arguments and returns the given suggestions To see list of arguments type hlint help at the console This function writes to the stdout stderr streams unless quiet is specified As an example do hints hlint src ignore Use map quiet when length hints error Too many hints",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "hlint",
          "normalized": "[String]-\u003eIO[Suggestion]",
          "package": "hlint",
          "signature": "[String]-\u003eIO[Suggestion]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:hlint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a suggestion, extract the file location it refers to.\n\u003c/p\u003e",
          "module": "Language.Haskell.HLint",
          "name": "suggestionLocation",
          "package": "hlint",
          "signature": "Suggestion -\u003e SrcLoc",
          "source": "src/HLint.html#suggestionLocation",
          "type": "function"
        },
        "index": {
          "description": "From suggestion extract the file location it refers to",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "suggestionLocation",
          "normalized": "Suggestion-\u003eSrcLoc",
          "package": "hlint",
          "partial": "Location",
          "signature": "Suggestion-\u003eSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:suggestionLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a suggestion, determine how severe it is.\n\u003c/p\u003e",
          "module": "Language.Haskell.HLint",
          "name": "suggestionSeverity",
          "package": "hlint",
          "signature": "Suggestion -\u003e Severity",
          "source": "src/HLint.html#suggestionSeverity",
          "type": "function"
        },
        "index": {
          "description": "From suggestion determine how severe it is",
          "hierarchy": "Language Haskell HLint",
          "module": "Language.Haskell.HLint",
          "name": "suggestionSeverity",
          "normalized": "Suggestion-\u003eSeverity",
          "package": "hlint",
          "partial": "Severity",
          "signature": "Suggestion-\u003eSeverity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Language-Haskell-HLint.html#v:suggestionSeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWARNING: This module represents the evolving API of HLint, do not use.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis module provides a way to apply HLint hints. To replicate the full \u003ccode\u003ehlint\u003c/code\u003e experience you would:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003efindSettings\u003c/a\u003e\u003c/code\u003e to find and load the HLint settings files.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003ereadSettings\u003c/a\u003e\u003c/code\u003e to interpret the settings files, producing \u003ccode\u003e\u003ca\u003eHintRule\u003c/a\u003e\u003c/code\u003e values (\u003ccode\u003eLHS ==\u003e RHS\u003c/code\u003e replacements)\n   and \u003ccode\u003e\u003ca\u003eClassify\u003c/a\u003e\u003c/code\u003e values to assign \u003ccode\u003e\u003ca\u003eSeverity\u003c/a\u003e\u003c/code\u003e ratings to hints.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003ebuiltinHints\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehintRules\u003c/a\u003e\u003c/code\u003e to generate a \u003ccode\u003e\u003ca\u003eHint\u003c/a\u003e\u003c/code\u003e value.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003eparseModuleEx\u003c/a\u003e\u003c/code\u003e to parse the input files, using any fixity declarations from \u003ccode\u003e\u003ca\u003efindSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Use \u003ccode\u003e\u003ca\u003eapplyHints\u003c/a\u003e\u003c/code\u003e to execute the hints on the modules, generating \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Temporary.API",
          "name": "API",
          "package": "hlint",
          "source": "src/Temporary-API.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING This module represents the evolving API of HLint do not use This module provides way to apply HLint hints To replicate the full hlint experience you would Use findSettings to find and load the HLint settings files Use readSettings to interpret the settings files producing HintRule values LHS RHS replacements and Classify values to assign Severity ratings to hints Use builtinHints and hintRules to generate Hint value Use parseModuleEx to parse the input files using any fixity declarations from findSettings Use applyHints to execute the hints on the modules generating Idea",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "API",
          "package": "hlint",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to classify an \u003ccode\u003eIdea\u003c/code\u003e. If any matching field is \u003ccode\u003e\"\"\u003c/code\u003e then it matches everything.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Classify",
          "package": "hlint",
          "source": "src/Settings.html#Classify",
          "type": "data"
        },
        "index": {
          "description": "How to classify an Idea If any matching field is then it matches everything",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Classify",
          "package": "hlint",
          "partial": "Classify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat C pre processor should be used.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "CppFlags",
          "package": "hlint",
          "source": "src/CmdLine.html#CppFlags",
          "type": "data"
        },
        "index": {
          "description": "What pre processor should be used",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "CppFlags",
          "package": "hlint",
          "partial": "Cpp Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:CppFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e represents how characters are stored in a file. Created with\n   \u003ccode\u003e\u003ca\u003edefaultEncoding\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereadEncoding\u003c/a\u003e\u003c/code\u003e and used with \u003ccode\u003e\u003ca\u003euseEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Encoding",
          "package": "hlint",
          "source": "src/Util.html#Encoding",
          "type": "data"
        },
        "index": {
          "description": "An Encoding represents how characters are stored in file Created with defaultEncoding or readEncoding and used with useEncoding",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Encoding",
          "package": "hlint",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions to generate hints, combined using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Hint",
          "package": "hlint",
          "source": "src/Hint-Type.html#Hint",
          "type": "data"
        },
        "index": {
          "description": "Functions to generate hints combined using the Monoid instance",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Hint",
          "package": "hlint",
          "partial": "Hint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Hint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eLHS ==\u003e RHS\u003c/code\u003e style hint rule.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "HintRule",
          "package": "hlint",
          "source": "src/Settings.html#HintRule",
          "type": "data"
        },
        "index": {
          "description": "LHS RHS style hint rule",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "HintRule",
          "package": "hlint",
          "partial": "Hint Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:HintRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn idea suggest by a \u003ccode\u003eHint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Idea",
          "package": "hlint",
          "source": "src/Idea.html#Idea",
          "type": "data"
        },
        "index": {
          "description": "An idea suggest by Hint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Idea",
          "package": "hlint",
          "partial": "Idea",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Idea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA note describing the impact of the replacement.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Note",
          "package": "hlint",
          "source": "src/Settings.html#Note",
          "type": "data"
        },
        "index": {
          "description": "note describing the impact of the replacement",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Note",
          "package": "hlint",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parse error from \u003ccode\u003e\u003ca\u003eparseModuleEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ParseError",
          "package": "hlint",
          "source": "src/HSE-All.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "parse error from parseModuleEx",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ParseError",
          "package": "hlint",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreated with \u003ccode\u003e\u003ca\u003edefaultParseFlags\u003c/a\u003e\u003c/code\u003e, used by \u003ccode\u003e\u003ca\u003eparseModuleEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ParseFlags",
          "package": "hlint",
          "source": "src/HSE-All.html#ParseFlags",
          "type": "data"
        },
        "index": {
          "description": "Created with defaultParseFlags used by parseModuleEx",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ParseFlags",
          "package": "hlint",
          "partial": "Parse Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:ParseFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the modules in scope within a module.\n   Created with \u003ccode\u003e\u003ca\u003escopeCreate\u003c/a\u003e\u003c/code\u003e and queried with \u003ccode\u003e\u003ca\u003escopeMatch\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003escopeMove\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Scope",
          "package": "hlint",
          "source": "src/HSE-Scope.html#Scope",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the modules in scope within module Created with scopeCreate and queried with scopeMatch and scopeMove",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Scope",
          "package": "hlint",
          "partial": "Scope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow severe an issue is.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Severity",
          "package": "hlint",
          "source": "src/Settings.html#Severity",
          "type": "data"
        },
        "index": {
          "description": "How severe an issue is",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Severity",
          "package": "hlint",
          "partial": "Severity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#t:Severity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "Classify",
          "package": "hlint",
          "signature": "Classify",
          "source": "src/Settings.html#Classify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Classify",
          "package": "hlint",
          "partial": "Classify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLines prefixed with \u003ccode\u003e#\u003c/code\u003e are stripped.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "CppSimple",
          "package": "hlint",
          "signature": "CppSimple",
          "source": "src/CmdLine.html#CppFlags",
          "type": "function"
        },
        "index": {
          "description": "Lines prefixed with are stripped",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "CppSimple",
          "package": "hlint",
          "partial": "Cpp Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:CppSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ecpphs\u003c/code\u003e library is used.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Cpphs",
          "package": "hlint",
          "signature": "Cpphs CpphsOptions",
          "source": "src/CmdLine.html#CppFlags",
          "type": "function"
        },
        "index": {
          "description": "The cpphs library is used",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Cpphs",
          "package": "hlint",
          "partial": "Cpphs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Cpphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replacement is decreases laziness, for example replacing \u003ccode\u003e(fst x, snd x)\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e makes the code stricter.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "DecreasesLaziness",
          "package": "hlint",
          "signature": "DecreasesLaziness",
          "source": "src/Settings.html#Note",
          "type": "function"
        },
        "index": {
          "description": "The replacement is decreases laziness for example replacing fst snd with makes the code stricter",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "DecreasesLaziness",
          "package": "hlint",
          "partial": "Decreases Laziness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:DecreasesLaziness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "Hint",
          "package": "hlint",
          "signature": "Hint",
          "source": "src/Hint-Type.html#Hint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Hint",
          "package": "hlint",
          "partial": "Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Hint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "HintRule",
          "package": "hlint",
          "signature": "HintRule",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "HintRule",
          "package": "hlint",
          "partial": "Hint Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:HintRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "Idea",
          "package": "hlint",
          "signature": "Idea",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Idea",
          "package": "hlint",
          "partial": "Idea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Idea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replacement is increases laziness, for example replacing \u003ccode\u003ereverse (reverse x)\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e makes the code lazier.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "IncreasesLaziness",
          "package": "hlint",
          "signature": "IncreasesLaziness",
          "source": "src/Settings.html#Note",
          "type": "function"
        },
        "index": {
          "description": "The replacement is increases laziness for example replacing reverse reverse with makes the code lazier",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "IncreasesLaziness",
          "package": "hlint",
          "partial": "Increases Laziness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:IncreasesLaziness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo pre processing is done.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "NoCpp",
          "package": "hlint",
          "signature": "NoCpp",
          "source": "src/CmdLine.html#CppFlags",
          "type": "function"
        },
        "index": {
          "description": "No pre processing is done",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "NoCpp",
          "package": "hlint",
          "partial": "No Cpp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:NoCpp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary note.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "Note",
          "package": "hlint",
          "signature": "Note String",
          "source": "src/Settings.html#Note",
          "type": "function"
        },
        "index": {
          "description": "An arbitrary note",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "Note",
          "package": "hlint",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "ParseError",
          "package": "hlint",
          "signature": "ParseError",
          "source": "src/HSE-All.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ParseError",
          "package": "hlint",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporary.API",
          "name": "ParseFlags",
          "package": "hlint",
          "signature": "ParseFlags",
          "source": "src/HSE-All.html#ParseFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ParseFlags",
          "package": "hlint",
          "partial": "Parse Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ParseFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replacement removes errors, for example replacing \u003ccode\u003efoldr1 (+)\u003c/code\u003e with \u003ccode\u003esum\u003c/code\u003e removes an error on \u003ccode\u003e[]\u003c/code\u003e, and might contain the text \u003ccode\u003e\"on []\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "RemovesError",
          "package": "hlint",
          "signature": "RemovesError String",
          "source": "src/Settings.html#Note",
          "type": "function"
        },
        "index": {
          "description": "The replacement removes errors for example replacing foldr1 with sum removes an error on and might contain the text on",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "RemovesError",
          "package": "hlint",
          "partial": "Removes Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:RemovesError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replacement assumes standard type class lemmas, a hint with the note \u003ccode\u003eValidInstance \"Eq\" \"x\"\u003c/code\u003e might only be valid if\n   the \u003ccode\u003ex\u003c/code\u003e variable has a reflexive \u003ccode\u003eEq\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ValidInstance",
          "package": "hlint",
          "signature": "ValidInstance String String",
          "source": "src/Settings.html#Note",
          "type": "function"
        },
        "index": {
          "description": "The replacement assumes standard type class lemmas hint with the note ValidInstance Eq might only be valid if the variable has reflexive Eq instance",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ValidInstance",
          "package": "hlint",
          "partial": "Valid Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ValidInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a way of classifying results, and a \u003ccode\u003e\u003ca\u003eHint\u003c/a\u003e\u003c/code\u003e, apply to a set of modules generating a list of \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003es.\n   The \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003e values will be ordered within a file.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "applyHints",
          "package": "hlint",
          "signature": "[Classify] -\u003e Hint -\u003e [Module SrcSpanInfo] -\u003e [Idea]",
          "source": "src/Apply.html#applyHints",
          "type": "function"
        },
        "index": {
          "description": "Given way of classifying results and Hint apply to set of modules generating list of Idea The Idea values will be ordered within file",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "applyHints",
          "normalized": "[Classify]-\u003eHint-\u003e[Module SrcSpanInfo]-\u003e[Idea]",
          "package": "hlint",
          "partial": "Hints",
          "signature": "[Classify]-\u003eHint-\u003e[Module SrcSpanInfo]-\u003e[Idea]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:applyHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of builtin hints, currently including entries such as \u003ccode\u003e\"List\"\u003c/code\u003e and \u003ccode\u003e\"Bracket\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "builtinHints",
          "package": "hlint",
          "signature": "[(String, Hint)]",
          "source": "src/Hint-All.html#builtinHints",
          "type": "function"
        },
        "index": {
          "description": "list of builtin hints currently including entries such as List and Bracket",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "builtinHints",
          "normalized": "[(String,Hint)]",
          "package": "hlint",
          "partial": "Hints",
          "signature": "[(String,Hint)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:builtinHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eideaDecl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "classifyDecl",
          "package": "hlint",
          "signature": "String",
          "source": "src/Settings.html#Classify",
          "type": "function"
        },
        "index": {
          "description": "ideaDecl",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "classifyDecl",
          "package": "hlint",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:classifyDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eideaHint\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "classifyHint",
          "package": "hlint",
          "signature": "String",
          "source": "src/Settings.html#Classify",
          "type": "function"
        },
        "index": {
          "description": "ideaHint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "classifyHint",
          "package": "hlint",
          "partial": "Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:classifyHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eideaModule\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "classifyModule",
          "package": "hlint",
          "signature": "String",
          "source": "src/Settings.html#Classify",
          "type": "function"
        },
        "index": {
          "description": "ideaModule",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "classifyModule",
          "package": "hlint",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:classifyModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeverity to set the \u003ccode\u003eIdea\u003c/code\u003e to.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "classifySeverity",
          "package": "hlint",
          "signature": "Severity",
          "source": "src/Settings.html#Classify",
          "type": "function"
        },
        "index": {
          "description": "Severity to set the Idea to",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "classifySeverity",
          "package": "hlint",
          "partial": "Severity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:classifySeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the file is preprocessed (defaults to \u003ccode\u003e\u003ca\u003eNoCpp\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "cppFlags",
          "package": "hlint",
          "signature": "CppFlags",
          "source": "src/HSE-All.html#ParseFlags",
          "type": "function"
        },
        "index": {
          "description": "How the file is preprocessed defaults to NoCpp",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "cppFlags",
          "package": "hlint",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:cppFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe system default encoding.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "defaultEncoding",
          "package": "hlint",
          "signature": "Encoding",
          "source": "src/Util.html#defaultEncoding",
          "type": "function"
        },
        "index": {
          "description": "The system default encoding",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "defaultEncoding",
          "package": "hlint",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:defaultEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault values for \u003ccode\u003e\u003ca\u003eParseFlags\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "defaultParseFlags",
          "package": "hlint",
          "signature": "ParseFlags",
          "source": "src/HSE-All.html#defaultParseFlags",
          "type": "function"
        },
        "index": {
          "description": "Default values for ParseFlags",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "defaultParseFlags",
          "package": "hlint",
          "partial": "Parse Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:defaultParseFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the file is read in (defaults to \u003ccode\u003e\u003ca\u003edefaultEncoding\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "encoding",
          "package": "hlint",
          "signature": "Encoding",
          "source": "src/HSE-All.html#ParseFlags",
          "type": "function"
        },
        "index": {
          "description": "How the file is read in defaults to defaultEncoding",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "encoding",
          "package": "hlint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the data directory (where the \u003ccode\u003ehlint\u003c/code\u003e data files reside), and a filename to read, and optionally that file's\n   contents, produce a triple containing:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Builtin hints to use, e.g. \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e, which should be resolved using \u003ccode\u003ebuiltinHints\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A list of parse errors produced while parsing settings files.\n\u003c/li\u003e\u003cli\u003e A list of modules containing hints, suitable for processing with \u003ccode\u003e\u003ca\u003ereadSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Temporary.API",
          "name": "findSettings",
          "package": "hlint",
          "signature": "FilePath -\u003e FilePath -\u003e Maybe String -\u003e IO ([String], [ParseError], [Module SrcSpanInfo])",
          "source": "src/Settings.html#findSettings",
          "type": "function"
        },
        "index": {
          "description": "Given the data directory where the hlint data files reside and filename to read and optionally that file contents produce triple containing Builtin hints to use e.g List which should be resolved using builtinHints list of parse errors produced while parsing settings files list of modules containing hints suitable for processing with readSettings",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "findSettings",
          "normalized": "FilePath-\u003eFilePath-\u003eMaybe String-\u003eIO([String],[ParseError],[Module SrcSpanInfo])",
          "package": "hlint",
          "partial": "Settings",
          "signature": "FilePath-\u003eFilePath-\u003eMaybe String-\u003eIO([String],[ParseError],[Module SrcSpanInfo])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:findSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a declaration (with a module and scope) generate some \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003es.\n   This function will be partially applied with one module/scope, then used on multiple \u003ccode\u003e\u003ca\u003eDecl\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintDecl",
          "package": "hlint",
          "signature": "Scope -\u003e Module SrcSpanInfo -\u003e Decl SrcSpanInfo -\u003e [Idea]",
          "source": "src/Hint-Type.html#Hint",
          "type": "function"
        },
        "index": {
          "description": "Given declaration with module and scope generate some Idea This function will be partially applied with one module scope then used on multiple Decl values",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintDecl",
          "normalized": "Scope-\u003eModule SrcSpanInfo-\u003eDecl SrcSpanInfo-\u003e[Idea]",
          "package": "hlint",
          "partial": "Decl",
          "signature": "Scope-\u003eModule SrcSpanInfo-\u003eDecl SrcSpanInfo-\u003e[Idea]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a single module and its scope information generate some \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintModule",
          "package": "hlint",
          "signature": "Scope -\u003e Module SrcSpanInfo -\u003e [Idea]",
          "source": "src/Hint-Type.html#Hint",
          "type": "function"
        },
        "index": {
          "description": "Given single module and its scope information generate some Idea",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintModule",
          "normalized": "Scope-\u003eModule SrcSpanInfo-\u003e[Idea]",
          "package": "hlint",
          "partial": "Module",
          "signature": "Scope-\u003eModule SrcSpanInfo-\u003e[Idea]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of modules (and their scope information) generate some \u003ccode\u003e\u003ca\u003eIdea\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintModules",
          "package": "hlint",
          "signature": "[(Scope, Module SrcSpanInfo)] -\u003e [Idea]",
          "source": "src/Hint-Type.html#Hint",
          "type": "function"
        },
        "index": {
          "description": "Given list of modules and their scope information generate some Idea",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintModules",
          "normalized": "[(Scope,Module SrcSpanInfo)]-\u003e[Idea]",
          "package": "hlint",
          "partial": "Modules",
          "signature": "[(Scope,Module SrcSpanInfo)]-\u003e[Idea]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLHS\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleLHS",
          "package": "hlint",
          "signature": "Exp SrcSpanInfo",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "LHS",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleLHS",
          "package": "hlint",
          "partial": "Rule LHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleLHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName for the hint.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleName",
          "package": "hlint",
          "signature": "String",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "Name for the hint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleName",
          "package": "hlint",
          "partial": "Rule Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotes about application of the hint.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleNotes",
          "package": "hlint",
          "signature": "[Note]",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "Notes about application of the hint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleNotes",
          "normalized": "[Note]",
          "package": "hlint",
          "partial": "Rule Notes",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRHS\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleRHS",
          "package": "hlint",
          "signature": "Exp SrcSpanInfo",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "RHS",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleRHS",
          "package": "hlint",
          "partial": "Rule RHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleRHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule scope in which the hint operates.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleScope",
          "package": "hlint",
          "signature": "Scope",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "Module scope in which the hint operates",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleScope",
          "package": "hlint",
          "partial": "Rule Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault severity for the hint.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleSeverity",
          "package": "hlint",
          "signature": "Severity",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "Default severity for the hint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleSeverity",
          "package": "hlint",
          "partial": "Rule Severity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleSeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSide condition, typically specified with \u003ccode\u003ewhere _ = ...\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRuleSide",
          "package": "hlint",
          "signature": "Maybe (Exp SrcSpanInfo)",
          "source": "src/Settings.html#HintRule",
          "type": "function"
        },
        "index": {
          "description": "Side condition typically specified with where",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRuleSide",
          "package": "hlint",
          "partial": "Rule Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRuleSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a list of \u003ccode\u003e\u003ca\u003eHintRule\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eHint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hintRules",
          "package": "hlint",
          "signature": "[HintRule] -\u003e Hint",
          "source": "src/Hint-All.html#hintRules",
          "type": "function"
        },
        "index": {
          "description": "Transform list of HintRule into Hint",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hintRules",
          "normalized": "[HintRule]-\u003eHint",
          "package": "hlint",
          "partial": "Rules",
          "signature": "[HintRule]-\u003eHint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hintRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the file is parsed (defaults to all fixities in the \u003ccode\u003ebase\u003c/code\u003e package and most non-conflicting extensions).\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "hseFlags",
          "package": "hlint",
          "signature": "ParseMode",
          "source": "src/HSE-All.html#ParseFlags",
          "type": "function"
        },
        "index": {
          "description": "How the file is parsed defaults to all fixities in the base package and most non-conflicting extensions",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "hseFlags",
          "package": "hlint",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:hseFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe declaration the idea applies to, typically the function name, but may be a type name.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaDecl",
          "package": "hlint",
          "signature": "String",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The declaration the idea applies to typically the function name but may be type name",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaDecl",
          "package": "hlint",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contents of the source code the idea relates to.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaFrom",
          "package": "hlint",
          "signature": "String",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The contents of the source code the idea relates to",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaFrom",
          "package": "hlint",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the hint that generated the idea, e.g. \u003ccode\u003e\"Use reverse\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaHint",
          "package": "hlint",
          "signature": "String",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The name of the hint that generated the idea e.g Use reverse",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaHint",
          "package": "hlint",
          "partial": "Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe module the idea applies to, may be \u003ccode\u003e\"\"\u003c/code\u003e if the module cannot be determined or is a result of cross-module hints.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaModule",
          "package": "hlint",
          "signature": "String",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The module the idea applies to may be if the module cannot be determined or is result of cross-module hints",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaModule",
          "package": "hlint",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotes about the effect of applying the replacement.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaNote",
          "package": "hlint",
          "signature": "[Note]",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "Notes about the effect of applying the replacement",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaNote",
          "normalized": "[Note]",
          "package": "hlint",
          "partial": "Note",
          "signature": "[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe severity of the idea, e.g. \u003ccode\u003e\u003ca\u003eWarning\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaSeverity",
          "package": "hlint",
          "signature": "Severity",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The severity of the idea e.g Warning",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaSeverity",
          "package": "hlint",
          "partial": "Severity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaSeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source code the idea relates to.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaSpan",
          "package": "hlint",
          "signature": "SrcSpan",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The source code the idea relates to",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaSpan",
          "package": "hlint",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe suggested replacement, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for no replacement (e.g. on parse errors).\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "ideaTo",
          "package": "hlint",
          "signature": "Maybe String",
          "source": "src/Idea.html#Idea",
          "type": "function"
        },
        "index": {
          "description": "The suggested replacement or Nothing for no replacement e.g on parse errors",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "ideaTo",
          "package": "hlint",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:ideaTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnippet of several lines (typically 5) including a \u003ccode\u003e\u003e\u003c/code\u003e character pointing at the faulty line.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "parseErrorContents",
          "package": "hlint",
          "signature": "String",
          "source": "src/HSE-All.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Snippet of several lines typically including character pointing at the faulty line",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "parseErrorContents",
          "package": "hlint",
          "partial": "Error Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:parseErrorContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the error.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "parseErrorLocation",
          "package": "hlint",
          "signature": "SrcLoc",
          "source": "src/HSE-All.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Location of the error",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "parseErrorLocation",
          "package": "hlint",
          "partial": "Error Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:parseErrorLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage about the cause of the error.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "parseErrorMessage",
          "package": "hlint",
          "signature": "String",
          "source": "src/HSE-All.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Message about the cause of the error",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "parseErrorMessage",
          "package": "hlint",
          "partial": "Error Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:parseErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a Haskell module. Applies the C pre processor, and uses best-guess fixity resolution if there are ambiguities.\n   The filename \u003ccode\u003e-\u003c/code\u003e is treated as \u003ccode\u003estdin\u003c/code\u003e. Requires some flags (often \u003ccode\u003e\u003ca\u003edefaultParseFlags\u003c/a\u003e\u003c/code\u003e), the filename, and optionally the contents of that file.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "parseModuleEx",
          "package": "hlint",
          "signature": "ParseFlags -\u003e FilePath -\u003e Maybe String -\u003e IO (Either ParseError (Module SrcSpanInfo))",
          "source": "src/HSE-All.html#parseModuleEx",
          "type": "function"
        },
        "index": {
          "description": "Parse Haskell module Applies the pre processor and uses best-guess fixity resolution if there are ambiguities The filename is treated as stdin Requires some flags often defaultParseFlags the filename and optionally the contents of that file",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "parseModuleEx",
          "normalized": "ParseFlags-\u003eFilePath-\u003eMaybe String-\u003eIO(Either ParseError(Module SrcSpanInfo))",
          "package": "hlint",
          "partial": "Module Ex",
          "signature": "ParseFlags-\u003eFilePath-\u003eMaybe String-\u003eIO(Either ParseError(Module SrcSpanInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:parseModuleEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an encoding from a string, or throw an error if the encoding is not known.\n   Accepts many encodings including \u003ccode\u003elocale\u003c/code\u003e, \u003ccode\u003eutf-8\u003c/code\u003e and all those supported by the\n   GHC \u003ccode\u003emkTextEncoding\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "readEncoding",
          "package": "hlint",
          "signature": "String -\u003e IO Encoding",
          "source": "src/Util.html#readEncoding",
          "type": "function"
        },
        "index": {
          "description": "Create an encoding from string or throw an error if the encoding is not known Accepts many encodings including locale utf-8 and all those supported by the GHC mkTextEncoding function",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "readEncoding",
          "normalized": "String-\u003eIO Encoding",
          "package": "hlint",
          "partial": "Encoding",
          "signature": "String-\u003eIO Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:readEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a module containing HLint settings information return the \u003ccode\u003e\u003ca\u003eClassify\u003c/a\u003e\u003c/code\u003e rules and the \u003ccode\u003e\u003ca\u003eHintRule\u003c/a\u003e\u003c/code\u003e expressions.\n   Any fixity declarations will be discarded, but any other unrecognised elements will result in an exception.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "readSettings",
          "package": "hlint",
          "signature": "Module SrcSpanInfo -\u003e ([Classify], [HintRule])",
          "source": "src/Settings.html#readSettings",
          "type": "function"
        },
        "index": {
          "description": "Given module containing HLint settings information return the Classify rules and the HintRule expressions Any fixity declarations will be discarded but any other unrecognised elements will result in an exception",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "readSettings",
          "normalized": "Module SrcSpanInfo-\u003e([Classify],[HintRule])",
          "package": "hlint",
          "partial": "Settings",
          "signature": "Module SrcSpanInfo-\u003e([Classify],[HintRule])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:readSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eScope\u003c/a\u003e\u003c/code\u003e value from a module, based on the modules imports.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "scopeCreate",
          "package": "hlint",
          "signature": "Module SrcSpanInfo -\u003e Scope",
          "source": "src/HSE-Scope.html#scopeCreate",
          "type": "function"
        },
        "index": {
          "description": "Create Scope value from module based on the modules imports",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "scopeCreate",
          "normalized": "Module SrcSpanInfo-\u003eScope",
          "package": "hlint",
          "partial": "Create",
          "signature": "Module SrcSpanInfo-\u003eScope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:scopeCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a two names in scopes, could they possibly refer to the same thing.\n   This property is reflexive.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "scopeMatch",
          "package": "hlint",
          "signature": "(Scope, QName SrcSpanInfo) -\u003e (Scope, QName SrcSpanInfo) -\u003e Bool",
          "source": "src/HSE-Scope.html#scopeMatch",
          "type": "function"
        },
        "index": {
          "description": "Given two names in scopes could they possibly refer to the same thing This property is reflexive",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "scopeMatch",
          "normalized": "(Scope,QName SrcSpanInfo)-\u003e(Scope,QName SrcSpanInfo)-\u003eBool",
          "package": "hlint",
          "partial": "Match",
          "signature": "(Scope,QName SrcSpanInfo)-\u003e(Scope,QName SrcSpanInfo)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:scopeMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name in a scope, and a new scope, create a name for the new scope that will refer\n   to the same thing. If the resulting name is ambiguous, it picks a plausible candidate.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "scopeMove",
          "package": "hlint",
          "signature": "(Scope, QName SrcSpanInfo) -\u003e Scope -\u003e QName SrcSpanInfo",
          "source": "src/HSE-Scope.html#scopeMove",
          "type": "function"
        },
        "index": {
          "description": "Given name in scope and new scope create name for the new scope that will refer to the same thing If the resulting name is ambiguous it picks plausible candidate",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "scopeMove",
          "normalized": "(Scope,QName SrcSpanInfo)-\u003eScope-\u003eQName SrcSpanInfo",
          "package": "hlint",
          "partial": "Move",
          "signature": "(Scope,QName SrcSpanInfo)-\u003eScope-\u003eQName SrcSpanInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:scopeMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an encoding to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporary.API",
          "name": "useEncoding",
          "package": "hlint",
          "signature": "Handle -\u003e Encoding -\u003e IO ()",
          "source": "src/Util.html#useEncoding",
          "type": "function"
        },
        "index": {
          "description": "Apply an encoding to Handle",
          "hierarchy": "Temporary API",
          "module": "Temporary.API",
          "name": "useEncoding",
          "normalized": "Handle-\u003eEncoding-\u003eIO()",
          "package": "hlint",
          "partial": "Encoding",
          "signature": "Handle-\u003eEncoding-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlint/docs/Temporary-API.html#v:useEncoding"
      }
    }
  ]
]