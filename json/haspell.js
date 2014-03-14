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
        "word": "haspell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Options",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Options",
          "package": "haspell",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "ACOption",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "ACOption",
          "package": "haspell",
          "partial": "ACOption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#t:ACOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Encoding",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html#Encoding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Encoding",
          "package": "haspell",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "NormalizeForm",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html#NormalizeForm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NormalizeForm",
          "package": "haspell",
          "partial": "Normalize Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#t:NormalizeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "SuggestMode",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "SuggestMode",
          "package": "haspell",
          "partial": "Suggest Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#t:SuggestMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "WordListSize",
          "package": "haspell",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "WordListSize",
          "package": "haspell",
          "partial": "Word List Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#t:WordListSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "BadSpellers",
          "package": "haspell",
          "signature": "BadSpellers",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "BadSpellers",
          "package": "haspell",
          "partial": "Bad Spellers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:BadSpellers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Composed",
          "package": "haspell",
          "signature": "Composed",
          "source": "src/Language-Aspell-Options.html#NormalizeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Composed",
          "package": "haspell",
          "partial": "Composed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Composed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitches the context which should be visible to Aspell. Per default the initial context is assumed to be invisible as one would expect when spell checking source files of programs where relevant parts are contained in string constants and comments but not in the remaining code. If set to true the initial context is visible while the delimited ones are hidden. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "ContextVisibleFirst",
          "package": "haspell",
          "signature": "ContextVisibleFirst Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Switches the context which should be visible to Aspell Per default the initial context is assumed to be invisible as one would expect when spell checking source files of programs where relevant parts are contained in string constants and comments but not in the remaining code If set to true the initial context is visible while the delimited ones are hidden",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "ContextVisibleFirst",
          "package": "haspell",
          "partial": "Context Visible First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:ContextVisibleFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of language data files.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "DataDir",
          "package": "haspell",
          "signature": "DataDir ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Location of language data files",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "DataDir",
          "package": "haspell",
          "partial": "Data Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:DataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase name of the dictionary to use. If this option is specified then Aspell will either use this dictionary or die. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Dictionary",
          "package": "haspell",
          "signature": "Dictionary ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Base name of the dictionary to use If this option is specified then Aspell will either use this dictionary or die",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Dictionary",
          "package": "haspell",
          "partial": "Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Dictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of characters that can appear before the quote character.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "EmailMargin",
          "package": "haspell",
          "signature": "EmailMargin Integer",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "The number of characters that can appear before the quote character",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "EmailMargin",
          "package": "haspell",
          "partial": "Email Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:EmailMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe encoding the input text is in. When using the Aspell utility the default encoding is based on the current locale. Thus if your locale currently uses the \u003ccode\u003eutf-8\u003c/code\u003e encoding than everything will be in UTF-8.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Encoding",
          "package": "haspell",
          "signature": "Encoding Encoding",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "The encoding the input text is in When using the Aspell utility the default encoding is based on the current locale Thus if your locale currently uses the utf-8 encoding than everything will be in UTF-8",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Encoding",
          "package": "haspell",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Fast",
          "package": "haspell",
          "signature": "Fast",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Fast",
          "package": "haspell",
          "partial": "Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Fast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the filter mode. Possible values include, but not limited to, \u003ccode\u003enone\u003c/code\u003e, \u003ccode\u003eurl\u003c/code\u003e, \u003ccode\u003eemail\u003c/code\u003e, \u003ccode\u003esgml\u003c/code\u003e, or \u003ccode\u003etex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "FilterMode",
          "package": "haspell",
          "signature": "FilterMode ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Sets the filter mode Possible values include but not limited to none url email sgml or tex",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "FilterMode",
          "package": "haspell",
          "partial": "Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:FilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation for personal files.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "HomeDir",
          "package": "haspell",
          "signature": "HomeDir ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Location for personal files",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "HomeDir",
          "package": "haspell",
          "partial": "Home Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:HomeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Huge",
          "package": "haspell",
          "signature": "Huge",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Huge",
          "package": "haspell",
          "partial": "Huge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Huge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore words with N characters or less.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Ignore",
          "package": "haspell",
          "signature": "Ignore Integer",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Ignore words with characters or less",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Ignore",
          "package": "haspell",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore accents when checking words (currently ignored).\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "IgnoreAccents",
          "package": "haspell",
          "signature": "IgnoreAccents Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Ignore accents when checking words currently ignored",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "IgnoreAccents",
          "package": "haspell",
          "partial": "Ignore Accents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:IgnoreAccents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore case when checking words.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "IgnoreCase",
          "package": "haspell",
          "signature": "IgnoreCase Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Ignore case when checking words",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "IgnoreCase",
          "package": "haspell",
          "partial": "Ignore Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:IgnoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore commands to store replacement pairs.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "IgnoreReplace",
          "package": "haspell",
          "signature": "IgnoreReplace Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Ignore commands to store replacement pairs",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "IgnoreReplace",
          "package": "haspell",
          "partial": "Ignore Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:IgnoreReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Insane",
          "package": "haspell",
          "signature": "Insane",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Insane",
          "package": "haspell",
          "partial": "Insane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Insane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base name of the keyboard definition file to use (see \u003ca\u003ehttp://aspell.net/man-html/Notes-on-Typo_002dAnalysis.html#Notes-on-Typo_002dAnalysis\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "KeyboardDef",
          "package": "haspell",
          "signature": "KeyboardDef ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "The base name of the keyboard definition file to use see http aspell.net man-html Notes-on-Typo dAnalysis.html Notes-on-Typo dAnalysis",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "KeyboardDef",
          "package": "haspell",
          "partial": "Keyboard Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:KeyboardDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage to use. It follows the same format of the LANG environment variable on most systems. It consists of the two letter ISO 639 language code and an optional two letter ISO 3166 country code after a dash or underscore. The default value is based on the value of the \u003ccode\u003eLC_MESSAGES\u003c/code\u003e locale. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Lang",
          "package": "haspell",
          "signature": "Lang ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Language to use It follows the same format of the LANG environment variable on most systems It consists of the two letter ISO language code and an optional two letter ISO country code after dash or underscore The default value is based on the value of the LC MESSAGES locale",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Lang",
          "package": "haspell",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Large",
          "package": "haspell",
          "signature": "Large",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Large",
          "package": "haspell",
          "partial": "Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Large"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Latin1",
          "package": "haspell",
          "signature": "Latin1",
          "source": "src/Language-Aspell-Options.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Latin1",
          "package": "haspell",
          "partial": "Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this keyboard layout for suggesting possible words. These spelling errors happen if a user accidently presses a key next to the intended correct key. The default is keyboard standard. If you are creating documents, you may want to set it according to your particular type of keyboard. If spellchecking documents created elsewhere, you might want to set this to the keyboard type for that locale. If you are not sure, just leave this as standard.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Layout",
          "package": "haspell",
          "signature": "Layout ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Use this keyboard layout for suggesting possible words These spelling errors happen if user accidently presses key next to the intended correct key The default is keyboard standard If you are creating documents you may want to set it according to your particular type of keyboard If spellchecking documents created elsewhere you might want to set this to the keyboard type for that locale If you are not sure just leave this as standard",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Layout",
          "package": "haspell",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative location of language data files. This directory is searched before \u003ccode\u003e\u003ca\u003eDataDir\u003c/a\u003e\u003c/code\u003e. It defaults to the same directory the actual main word list is in (which is not necessary \u003ccode\u003e\u003ca\u003eDictionary\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "LocalDataDir",
          "package": "haspell",
          "signature": "LocalDataDir ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Alternative location of language data files This directory is searched before DataDir It defaults to the same directory the actual main word list is in which is not necessary Dictionary",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "LocalDataDir",
          "package": "haspell",
          "partial": "Local Data Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:LocalDataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain configuration file. This file overrides Aspell's global defaults.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "MainConfig",
          "package": "haspell",
          "signature": "MainConfig ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Main configuration file This file overrides Aspell global defaults",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "MainConfig",
          "package": "haspell",
          "partial": "Main Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:MainConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of main configuration file.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "MainConfigDir",
          "package": "haspell",
          "signature": "MainConfigDir ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Location of main configuration file",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "MainConfigDir",
          "package": "haspell",
          "partial": "Main Config Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:MainConfigDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Medium",
          "package": "haspell",
          "signature": "Medium",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Medium",
          "package": "haspell",
          "partial": "Medium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "MediumLarge",
          "package": "haspell",
          "signature": "MediumLarge",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "MediumLarge",
          "package": "haspell",
          "partial": "Medium Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:MediumLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "MediumSmall",
          "package": "haspell",
          "signature": "MediumSmall",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "MediumSmall",
          "package": "haspell",
          "partial": "Medium Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:MediumSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "NFC",
          "package": "haspell",
          "signature": "NFC",
          "source": "src/Language-Aspell-Options.html#NormalizeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NFC",
          "package": "haspell",
          "partial": "NFC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:NFC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "NFD",
          "package": "haspell",
          "signature": "NFD",
          "source": "src/Language-Aspell-Options.html#NormalizeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NFD",
          "package": "haspell",
          "partial": "NFD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:NFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "None",
          "package": "haspell",
          "signature": "None",
          "source": "src/Language-Aspell-Options.html#NormalizeForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "None",
          "package": "haspell",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Normal",
          "package": "haspell",
          "signature": "Normal",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Normal",
          "package": "haspell",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform Unicode normalization. Enabled by default. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Normalize",
          "package": "haspell",
          "signature": "Normalize Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Perform Unicode normalization Enabled by default",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Normalize",
          "package": "haspell",
          "partial": "Normalize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe normalization form the output should be in. This option primarily effects the normalization form of the suggestions as when spell checkering as the actual text is unchanged unless there is an error. Valid values are \u003ccode\u003e\u003ca\u003eNone\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNFD\u003c/a\u003e\u003c/code\u003e for full decomposition (Normalization Form D), \u003ccode\u003e\u003ca\u003eNFC\u003c/a\u003e\u003c/code\u003e for Normalization Form C, or \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e for fully composed. \u003ccode\u003e\u003ca\u003eComposed\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eNFC\u003c/a\u003e\u003c/code\u003e except that full composition is used rather than canonical composition. The normalize option must be enabled for this option to be used. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "NormalizeForm",
          "package": "haspell",
          "signature": "NormalizeForm NormalizeForm",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "The normalization form the output should be in This option primarily effects the normalization form of the suggestions as when spell checkering as the actual text is unchanged unless there is an error Valid values are None NFD for full decomposition Normalization Form NFC for Normalization Form or Composed for fully composed Composed is like NFC except that full composition is used rather than canonical composition The normalize option must be enabled for this option to be used",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NormalizeForm",
          "package": "haspell",
          "partial": "Normalize Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:NormalizeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to true when the current language requires Unicode normalization. This is generally the case when private use characters are used internally by Aspell or when Normalization Form C is not the same as full composition.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "NormalizeRequired",
          "package": "haspell",
          "signature": "NormalizeRequired Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Set to true when the current language requires Unicode normalization This is generally the case when private use characters are used internally by Aspell or when Normalization Form is not the same as full composition",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NormalizeRequired",
          "package": "haspell",
          "partial": "Normalize Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:NormalizeRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvoid lossy conversions when normalizing. Lossy conversions includes compatibility mappings such as splitting the letter \u003ccode\u003eOE\u003c/code\u003e (U+152) into \u003ccode\u003eO\u003c/code\u003e and \u003ccode\u003eE\u003c/code\u003e (when the combined letter is not available), and mappings which will remove accents. Disabled by default except when creating dictionaries. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "NormalizeStrict",
          "package": "haspell",
          "signature": "NormalizeStrict Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Avoid lossy conversions when normalizing Lossy conversions includes compatibility mappings such as splitting the letter OE into and when the combined letter is not available and mappings which will remove accents Disabled by default except when creating dictionaries",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "NormalizeStrict",
          "package": "haspell",
          "partial": "Normalize Strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:NormalizeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersonal configuration file. This file overrides options found in the global \u003ccode\u003e\u003ca\u003eMainConfig\u003c/a\u003e\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "PersonalConfig",
          "package": "haspell",
          "signature": "PersonalConfig ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Personal configuration file This file overrides options found in the global MainConfig file",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "PersonalConfig",
          "package": "haspell",
          "partial": "Personal Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:PersonalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersonal word list file name. \n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "PersonalWordList",
          "package": "haspell",
          "signature": "PersonalWordList ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Personal word list file name",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "PersonalWordList",
          "package": "haspell",
          "partial": "Personal Word List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:PersonalWordList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix directory.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Prefix",
          "package": "haspell",
          "signature": "Prefix ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Prefix directory",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Prefix",
          "package": "haspell",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "ReallySmall",
          "package": "haspell",
          "signature": "ReallySmall",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "ReallySmall",
          "package": "haspell",
          "partial": "Really Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:ReallySmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplacements list file name.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "ReplacementsList",
          "package": "haspell",
          "signature": "ReplacementsList ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Replacements list file name",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "ReplacementsList",
          "package": "haspell",
          "partial": "Replacements List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:ReplacementsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsider run-together words valid.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "RunTogether",
          "package": "haspell",
          "signature": "RunTogether Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Consider run-together words valid",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "RunTogether",
          "package": "haspell",
          "partial": "Run Together",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:RunTogether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of words that can be strung together.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "RunTogetherLimit",
          "package": "haspell",
          "signature": "RunTogetherLimit Integer",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of words that can be strung together",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "RunTogetherLimit",
          "package": "haspell",
          "partial": "Run Together Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:RunTogetherLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal length of interior words.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "RunTogetherMin",
          "package": "haspell",
          "signature": "RunTogetherMin Integer",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Minimal length of interior words",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "RunTogetherMin",
          "package": "haspell",
          "partial": "Run Together Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:RunTogetherMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the replacement word list on save all.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "SaveReplace",
          "package": "haspell",
          "signature": "SaveReplace Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Save the replacement word list on save all",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "SaveReplace",
          "package": "haspell",
          "partial": "Save Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:SaveReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the prefix based on executable location (only works on WIN32 and when compiled with \u003ccode\u003e--enable-win32-relocatable\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "SetPrefix",
          "package": "haspell",
          "signature": "SetPrefix Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Set the prefix based on executable location only works on WIN32 and when compiled with enable-win32-relocatable",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "SetPrefix",
          "package": "haspell",
          "partial": "Set Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:SetPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preferred size of the word list.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "Size",
          "package": "haspell",
          "signature": "Size WordListSize",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "The preferred size of the word list",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Size",
          "package": "haspell",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Slow",
          "package": "haspell",
          "signature": "Slow",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Slow",
          "package": "haspell",
          "partial": "Slow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Slow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Small",
          "package": "haspell",
          "signature": "Small",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Small",
          "package": "haspell",
          "partial": "Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggestion mode = \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUltra\u003c/a\u003e\u003c/code\u003e | \u003ccode\u003e\u003ca\u003eFast\u003c/a\u003e\u003c/code\u003e | \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e | \u003ccode\u003e\u003ca\u003eSlow\u003c/a\u003e\u003c/code\u003e | \u003ccode\u003eBadSpeller\u003c/code\u003e\u003c/code\u003e (see \u003ca\u003ehttp://aspell.net/man-html/Notes-on-the-Different-Suggestion-Modes.html#Notes-on-the-Different-Suggestion-Modes\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "SuggestMode",
          "package": "haspell",
          "signature": "SuggestMode SuggestMode",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Suggestion mode Ultra Fast Normal Slow BadSpeller see http aspell.net man-html Notes-on-the-Different-Suggestion-Modes.html Notes-on-the-Different-Suggestion-Modes",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "SuggestMode",
          "package": "haspell",
          "partial": "Suggest Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:SuggestMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck TeX comments.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "TeXCheckComments",
          "package": "haspell",
          "signature": "TeXCheckComments Bool",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Check TeX comments",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "TeXCheckComments",
          "package": "haspell",
          "partial": "Te XCheck Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:TeXCheckComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Tiny",
          "package": "haspell",
          "signature": "Tiny",
          "source": "src/Language-Aspell-Options.html#WordListSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Tiny",
          "package": "haspell",
          "partial": "Tiny",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Tiny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "UTF8",
          "package": "haspell",
          "signature": "UTF8",
          "source": "src/Language-Aspell-Options.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "UTF8",
          "package": "haspell",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell.Options",
          "name": "Ultra",
          "package": "haspell",
          "signature": "Ultra",
          "source": "src/Language-Aspell-Options.html#SuggestMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "Ultra",
          "package": "haspell",
          "partial": "Ultra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:Ultra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of the main word list.\n\u003c/p\u003e",
          "module": "Language.Aspell.Options",
          "name": "WordListDir",
          "package": "haspell",
          "signature": "WordListDir ByteString",
          "source": "src/Language-Aspell-Options.html#ACOption",
          "type": "function"
        },
        "index": {
          "description": "Location of the main word list",
          "hierarchy": "Language Aspell Options",
          "module": "Language.Aspell.Options",
          "name": "WordListDir",
          "package": "haspell",
          "partial": "Word List Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell-Options.html#v:WordListDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell",
          "name": "Aspell",
          "package": "haspell",
          "source": "src/Language-Aspell.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "Aspell",
          "package": "haspell",
          "partial": "Aspell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Aspell",
          "name": "SpellChecker",
          "package": "haspell",
          "source": "src/Language-Aspell.html#SpellChecker",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "SpellChecker",
          "package": "haspell",
          "partial": "Spell Checker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#t:SpellChecker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a word has been spelled correctly.\n\u003c/p\u003e",
          "module": "Language.Aspell",
          "name": "check",
          "package": "haspell",
          "signature": "SpellChecker -\u003e ByteString -\u003e Bool",
          "source": "src/Language-Aspell.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checks if word has been spelled correctly",
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "check",
          "normalized": "SpellChecker-\u003eByteString-\u003eBool",
          "package": "haspell",
          "signature": "SpellChecker-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a spell checker with default options.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003espellChecker\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003espellCheckerWithOptions\u003c/a\u003e\u003c/code\u003e []\n\u003c/pre\u003e",
          "module": "Language.Aspell",
          "name": "spellChecker",
          "package": "haspell",
          "signature": "IO (Either ByteString SpellChecker)",
          "source": "src/Language-Aspell.html#spellChecker",
          "type": "function"
        },
        "index": {
          "description": "Creates spell checker with default options spellChecker spellCheckerWithOptions",
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "spellChecker",
          "package": "haspell",
          "partial": "Checker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#v:spellChecker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for specifying a dictionary.\n\u003c/p\u003e\u003cp\u003eYou can determine which dictionaries are available to you with \u003ccode\u003easpell dump dicts\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003espellCheckerWithDictionary\u003c/a\u003e\u003c/code\u003e dict = \u003ccode\u003e\u003ca\u003espellCheckerWithOptions\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eDictionary\u003c/a\u003e\u003c/code\u003e dict]\n\u003c/pre\u003e",
          "module": "Language.Aspell",
          "name": "spellCheckerWithDictionary",
          "package": "haspell",
          "signature": "ByteString -\u003e IO (Either ByteString SpellChecker)",
          "source": "src/Language-Aspell.html#spellCheckerWithDictionary",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for specifying dictionary You can determine which dictionaries are available to you with aspell dump dicts spellCheckerWithDictionary dict spellCheckerWithOptions Dictionary dict",
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "spellCheckerWithDictionary",
          "normalized": "ByteString-\u003eIO(Either ByteString SpellChecker)",
          "package": "haspell",
          "partial": "Checker With Dictionary",
          "signature": "ByteString-\u003eIO(Either ByteString SpellChecker)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#v:spellCheckerWithDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a spell checker with a custom set of options.\n\u003c/p\u003e",
          "module": "Language.Aspell",
          "name": "spellCheckerWithOptions",
          "package": "haspell",
          "signature": "[ACOption] -\u003e IO (Either ByteString SpellChecker)",
          "source": "src/Language-Aspell.html#spellCheckerWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Creates spell checker with custom set of options",
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "spellCheckerWithOptions",
          "normalized": "[ACOption]-\u003eIO(Either ByteString SpellChecker)",
          "package": "haspell",
          "partial": "Checker With Options",
          "signature": "[ACOption]-\u003eIO(Either ByteString SpellChecker)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#v:spellCheckerWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists suggestions for misspelled words.\n\u003c/p\u003e\u003cp\u003eIf the input is not misspelled according to the dictionary, returns \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Aspell",
          "name": "suggest",
          "package": "haspell",
          "signature": "SpellChecker -\u003e ByteString -\u003e IO [ByteString]",
          "source": "src/Language-Aspell.html#suggest",
          "type": "function"
        },
        "index": {
          "description": "Lists suggestions for misspelled words If the input is not misspelled according to the dictionary returns",
          "hierarchy": "Language Aspell",
          "module": "Language.Aspell",
          "name": "suggest",
          "normalized": "SpellChecker-\u003eByteString-\u003eIO[ByteString]",
          "package": "haspell",
          "signature": "SpellChecker-\u003eByteString-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haspell/docs/Language-Aspell.html#v:suggest"
      }
    }
  ]
]