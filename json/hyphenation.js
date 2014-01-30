[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#",
      "description": {
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "module",
        "fct-source": "src/Text-Hyphenation-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#t:Exceptions",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenation exceptions are special cases that should use the specified hyphenation points.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "data",
        "fct-source": "src/Text-Hyphenation-Exception.html#Exceptions",
        "fct-type": "data",
        "title": "Exceptions"
      },
      "index": {
        "description": "Hyphenation exceptions are special cases that should use the specified hyphenation points",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "Exceptions",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:addException",
      "description": {
        "fct-descr": "\u003cp\u003eadd an exception to the exception table.\n if it is already present, this will restrict the set of hyphenations to the\n intersection of the set provided and the set present.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Exceptions -\u003e Exceptions",
        "fct-source": "src/Text-Hyphenation-Exception.html#addException",
        "fct-type": "function",
        "title": "addException"
      },
      "index": {
        "description": "add an exception to the exception table if it is already present this will restrict the set of hyphenations to the intersection of the set provided and the set present",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "addException",
        "normalized": "String-\u003eExceptions-\u003eExceptions",
        "package": "hyphenation",
        "partial": "Exception",
        "signature": "String-\u003eExceptions-\u003eExceptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:lookupException",
      "description": {
        "fct-descr": "\u003cp\u003eTry to find a matching hyphenation exception.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Exceptions -\u003e Maybe [Int]",
        "fct-source": "src/Text-Hyphenation-Exception.html#lookupException",
        "fct-type": "function",
        "title": "lookupException"
      },
      "index": {
        "description": "Try to find matching hyphenation exception",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "lookupException",
        "normalized": "String-\u003eExceptions-\u003eMaybe[Int]",
        "package": "hyphenation",
        "partial": "Exception",
        "signature": "String-\u003eExceptions-\u003eMaybe[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:parseExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eParse one exception per line from an input string\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Exceptions",
        "fct-source": "src/Text-Hyphenation-Exception.html#parseExceptions",
        "fct-type": "function",
        "title": "parseExceptions"
      },
      "index": {
        "description": "Parse one exception per line from an input string",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "parseExceptions",
        "normalized": "String-\u003eExceptions",
        "package": "hyphenation",
        "partial": "Exceptions",
        "signature": "String-\u003eExceptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:scoreException",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an exception string to a score.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Exception",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e [Int]",
        "fct-source": "src/Text-Hyphenation-Exception.html#scoreException",
        "fct-type": "function",
        "title": "scoreException"
      },
      "index": {
        "description": "Convert an exception string to score",
        "hierarchy": "Text Hyphenation Exception",
        "module": "Text.Hyphenation.Exception",
        "name": "scoreException",
        "normalized": "String-\u003e[Int]",
        "package": "hyphenation",
        "partial": "Exception",
        "signature": "String-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyphenation based on the Knuth-Liang algorithm as used by TeX.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "module",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html",
        "fct-type": "module",
        "title": "Hyphenator"
      },
      "index": {
        "description": "Hyphenation based on the Knuth-Liang algorithm as used by TeX",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "Hyphenator",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hyphenator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#t:Hyphenator",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eHyphenator\u003c/code\u003e is combination of an alphabet normalization scheme, a set of \u003ccode\u003e\u003ca\u003ePatterns\u003c/a\u003e\u003c/code\u003e, a set of \u003ccode\u003e\u003ca\u003eExceptions\u003c/a\u003e\u003c/code\u003e to those patterns\n and a number of characters at each end to skip hyphenating.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "data",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "data",
        "title": "Hyphenator"
      },
      "index": {
        "description": "Hyphenator is combination of an alphabet normalization scheme set of Patterns set of Exceptions to those patterns and number of characters at each end to skip hyphenating",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "Hyphenator",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hyphenator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:Hyphenator",
      "description": {
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "Hyphenator"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "Hyphenator",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hyphenator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:defaultLeftMin",
      "description": {
        "fct-descr": "\u003cp\u003eBy default, do not insert hyphens in the first two characters\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edefaultLeftMin\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Int",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#defaultLeftMin",
        "fct-type": "function",
        "title": "defaultLeftMin"
      },
      "index": {
        "description": "By default do not insert hyphens in the first two characters defaultLeftMin",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "defaultLeftMin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Left Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:defaultRightMin",
      "description": {
        "fct-descr": "\u003cp\u003eBy default, do not insert hyphens in the last three characters.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edefaultRightMin\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Int",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#defaultRightMin",
        "fct-type": "function",
        "title": "defaultRightMin"
      },
      "index": {
        "description": "By default do not insert hyphens in the last three characters defaultRightMin",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "defaultRightMin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Right Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenate",
      "description": {
        "fct-descr": "\u003cp\u003ehyphenate a single word using the specified Hyphenator. Returns a set of candidate breakpoints by decomposing the input\n into substrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Text.Hyphenation\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"ifrag\",\"ilis\",\"tic\",\"ex\",\"pi\",\"al\",\"ado\",\"cious\"]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"hyphenation\"\n\u003c/code\u003e\u003c/strong\u003e[\"hy\",\"phen\",\"ation\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator -\u003e String -\u003e [String]",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#hyphenate",
        "fct-type": "function",
        "title": "hyphenate"
      },
      "index": {
        "description": "hyphenate single word using the specified Hyphenator Returns set of candidate breakpoints by decomposing the input into substrings import Text.Hyphenation hyphenate english US supercalifragilisticexpialadocious su per cal ifrag ilis tic ex pi al ado cious hyphenate english US hyphenation hy phen ation",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenate",
        "normalized": "Hyphenator-\u003eString-\u003e[String]",
        "package": "hyphenation",
        "partial": "",
        "signature": "Hyphenator-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorChars",
      "description": {
        "fct-descr": "\u003cp\u003ea normalization function applied to input characters before applying patterns or exceptions\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Char -\u003e Char",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "hyphenatorChars"
      },
      "index": {
        "description": "normalization function applied to input characters before applying patterns or exceptions",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenatorChars",
        "normalized": "Char-\u003eChar",
        "package": "hyphenation",
        "partial": "Chars",
        "signature": "Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eexceptions to the general hyphenation rules, hyphenated manually\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Exceptions",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "hyphenatorExceptions"
      },
      "index": {
        "description": "exceptions to the general hyphenation rules hyphenated manually",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenatorExceptions",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorLeftMin",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of characters as the start of a word to skip hyphenating, by default: 2\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "!Int",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "hyphenatorLeftMin"
      },
      "index": {
        "description": "the number of characters as the start of word to skip hyphenating by default",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenatorLeftMin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Left Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorPatterns",
      "description": {
        "fct-descr": "\u003cp\u003ehyphenation patterns stored in a trie\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "Patterns",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "hyphenatorPatterns"
      },
      "index": {
        "description": "hyphenation patterns stored in trie",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenatorPatterns",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Patterns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorRightMin",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of characters at the end of the word to skip hyphenating, by default: 3\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Hyphenator",
        "fct-package": "hyphenation",
        "fct-signature": "!Int",
        "fct-source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
        "fct-type": "function",
        "title": "hyphenatorRightMin"
      },
      "index": {
        "description": "the number of characters at the end of the word to skip hyphenating by default",
        "hierarchy": "Text Hyphenation Hyphenator",
        "module": "Text.Hyphenation.Hyphenator",
        "name": "hyphenatorRightMin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Right Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "module",
        "fct-source": "src/Text-Hyphenation-Language.html",
        "fct-type": "module",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Language",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eA strongly typed set of available languages you can use for hyphenation.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "data",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "strongly typed set of available languages you can use for hyphenation",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Language",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Afrikaans",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Afrikaans",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Afrikaans"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Afrikaans",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Afrikaans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Basque",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Basque",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Basque"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Basque",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Basque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Bengali",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Bengali",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Bengali"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Bengali",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Bengali",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Bulgarian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Bulgarian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Bulgarian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Bulgarian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Bulgarian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Catalan",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Catalan",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Catalan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Catalan",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Catalan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Chinese",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Chinese",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Chinese"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Chinese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Chinese",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Coptic",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Coptic",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Coptic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Coptic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Coptic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Croatian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Croatian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Croatian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Croatian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Croatian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Czech",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Czech",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Czech"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Czech",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Czech",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Danish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Danish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Danish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Danish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Danish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Dutch",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Dutch",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Dutch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Dutch",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Dutch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:English_GB",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "English_GB",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "English_GB"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "English_GB",
        "normalized": "",
        "package": "hyphenation",
        "partial": "English GB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:English_US",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "English_US",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "English_US"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "English_US",
        "normalized": "",
        "package": "hyphenation",
        "partial": "English US",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Esperanto",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Esperanto",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Esperanto"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Esperanto",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Esperanto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Estonian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Estonian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Estonian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Estonian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Estonian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Ethiopic",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Ethiopic",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Ethiopic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Ethiopic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Ethiopic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Finnish",
      "description": {
        "fct-descr": "\u003cp\u003eFarsi\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Finnish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Finnish"
      },
      "index": {
        "description": "Farsi",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Finnish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Finnish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:French",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "French",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "French"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "French",
        "normalized": "",
        "package": "hyphenation",
        "partial": "French",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Friulan",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Friulan",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Friulan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Friulan",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Friulan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Galician",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Galician",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Galician"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Galician",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Galician",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_1901",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "German_1901",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "German_1901"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "German_1901",
        "normalized": "",
        "package": "hyphenation",
        "partial": "German",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_1996",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "German_1996",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "German_1996"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "German_1996",
        "normalized": "",
        "package": "hyphenation",
        "partial": "German",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_Swiss",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "German_Swiss",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "German_Swiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "German_Swiss",
        "normalized": "",
        "package": "hyphenation",
        "partial": "German Swiss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Ancient",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Greek_Ancient",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Greek_Ancient"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Greek_Ancient",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Greek Ancient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Mono",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Greek_Mono",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Greek_Mono"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Greek_Mono",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Greek Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Poly",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Greek_Poly",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Greek_Poly"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Greek_Poly",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Greek Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Gujarati",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Gujarati",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Gujarati"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Gujarati",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Gujarati",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Hindi",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hindi",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Hindi"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Hindi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hindi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Hungarian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hungarian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Hungarian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Hungarian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hungarian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Icelandic",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Icelandic",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Icelandic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Icelandic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Icelandic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Indonesian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Indonesian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Indonesian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Indonesian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Indonesian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Interlingua",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Interlingua",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Interlingua"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Interlingua",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Interlingua",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Irish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Irish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Irish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Irish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Irish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Italian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Italian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Italian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Italian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Italian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Kannada",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Kannada",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Kannada"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Kannada",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Kannada",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Kurmanji",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Kurmanji",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Kurmanji"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Kurmanji",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Kurmanji",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Lao",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Lao",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Lao"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Lao",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Lao",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Latin",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Latin",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Latin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Latin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Latin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Latvian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Latvian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Latvian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Latvian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Latvian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Lithuanian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Lithuanian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Lithuanian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Lithuanian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Lithuanian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Malayalam",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Malayalam",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Malayalam"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Malayalam",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Malayalam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Marathi",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Marathi",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Marathi"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Marathi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Marathi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Mongolian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Mongolian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Mongolian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Mongolian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Mongolian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Norwegian_Bokmal",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Norwegian_Bokmal",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Norwegian_Bokmal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Norwegian_Bokmal",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Norwegian Bokmal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Norwegian_Nynorsk",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Norwegian_Nynorsk",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Norwegian_Nynorsk"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Norwegian_Nynorsk",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Norwegian Nynorsk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Oriya",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Oriya",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Oriya"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Oriya",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Oriya",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Panjabi",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Panjabi",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Panjabi"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Panjabi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Panjabi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Piedmontese",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Piedmontese",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Piedmontese"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Piedmontese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Piedmontese",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Polish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Polish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Polish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Polish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Polish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Portuguese",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Portuguese",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Portuguese"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Portuguese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Portuguese",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Romanian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Romanian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Romanian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Romanian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Romanian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Romansh",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Romansh",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Romansh"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Romansh",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Romansh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Russian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Russian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Russian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Russian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Russian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Sanskrit",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Sanskrit",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Sanskrit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Sanskrit",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Sanskrit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbian_Cyrillic",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Serbian_Cyrillic",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Serbian_Cyrillic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Serbian_Cyrillic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Serbian Cyrillic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbocroatian_Cyrillic",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Serbocroatian_Cyrillic",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Serbocroatian_Cyrillic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Serbocroatian_Cyrillic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Serbocroatian Cyrillic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbocroatian_Latin",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Serbocroatian_Latin",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Serbocroatian_Latin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Serbocroatian_Latin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Serbocroatian Latin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Slovak",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Slovak",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Slovak"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Slovak",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Slovak",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Slovenian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Slovenian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Slovenian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Slovenian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Slovenian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Spanish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Spanish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Spanish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Spanish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Spanish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Swedish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Swedish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Swedish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Swedish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Swedish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Tamil",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Tamil",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Tamil"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Tamil",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Tamil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Telugu",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Telugu",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Telugu"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Telugu",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Telugu",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Thai",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Thai",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Thai"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Thai",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Thai",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Turkish",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Turkish",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Turkish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Turkish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Turkish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Turkmen",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Turkmen",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Turkmen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Turkmen",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Turkmen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Ukrainian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Ukrainian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Ukrainian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Ukrainian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Ukrainian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Uppersorbian",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Uppersorbian",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Uppersorbian"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Uppersorbian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Uppersorbian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Welsh",
      "description": {
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Welsh",
        "fct-source": "src/Text-Hyphenation-Language.html#Language",
        "fct-type": "function",
        "title": "Welsh"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "Welsh",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Welsh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:afrikaans",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#afrikaans",
        "fct-type": "function",
        "title": "afrikaans"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "afrikaans",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:basque",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#basque",
        "fct-type": "function",
        "title": "basque"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "basque",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:bengali",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#bengali",
        "fct-type": "function",
        "title": "bengali"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "bengali",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:bulgarian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#bulgarian",
        "fct-type": "function",
        "title": "bulgarian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "bulgarian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:catalan",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#catalan",
        "fct-type": "function",
        "title": "catalan"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "catalan",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:chinese",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#chinese",
        "fct-type": "function",
        "title": "chinese"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "chinese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:coptic",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#coptic",
        "fct-type": "function",
        "title": "coptic"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "coptic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:croatian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#croatian",
        "fct-type": "function",
        "title": "croatian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "croatian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:czech",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#czech",
        "fct-type": "function",
        "title": "czech"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "czech",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:danish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#danish",
        "fct-type": "function",
        "title": "danish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "danish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:dutch",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#dutch",
        "fct-type": "function",
        "title": "dutch"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "dutch",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:english_GB",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_GB \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"i\",\"fra\",\"gil\",\"istic\",\"ex\",\"pi\",\"alado\",\"cious\"]\n\u003c/pre\u003e\u003cp\u003efavors UK hyphenation\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#english_GB",
        "fct-type": "function",
        "title": "english_GB"
      },
      "index": {
        "description": "hyphenate english GB supercalifragilisticexpialadocious su per cal fra gil istic ex pi alado cious favors UK hyphenation",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "english_GB",
        "normalized": "",
        "package": "hyphenation",
        "partial": "GB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:english_US",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"ifrag\",\"ilis\",\"tic\",\"ex\",\"pi\",\"al\",\"ado\",\"cious\"]\n\u003c/pre\u003e\u003cp\u003efavors US hyphenation\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#english_US",
        "fct-type": "function",
        "title": "english_US"
      },
      "index": {
        "description": "hyphenate english US supercalifragilisticexpialadocious su per cal ifrag ilis tic ex pi al ado cious favors US hyphenation",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "english_US",
        "normalized": "",
        "package": "hyphenation",
        "partial": "US",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:esperanto",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#esperanto",
        "fct-type": "function",
        "title": "esperanto"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "esperanto",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:estonian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#estonian",
        "fct-type": "function",
        "title": "estonian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "estonian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:ethiopic",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#ethiopic",
        "fct-type": "function",
        "title": "ethiopic"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "ethiopic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:finnish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#finnish",
        "fct-type": "function",
        "title": "finnish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "finnish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:french",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate french \"anticonstitutionnellement\"\n\u003c/code\u003e\u003c/strong\u003e[\"an\",\"ti\",\"cons\",\"ti\",\"tu\",\"tion\",\"nel\",\"le\",\"ment\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#french",
        "fct-type": "function",
        "title": "french"
      },
      "index": {
        "description": "hyphenate french anticonstitutionnellement an ti cons ti tu tion nel le ment",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "french",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:friulan",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#friulan",
        "fct-type": "function",
        "title": "friulan"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "friulan",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:galician",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#galician",
        "fct-type": "function",
        "title": "galician"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "galician",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_1901",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#german_1901",
        "fct-type": "function",
        "title": "german_1901"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "german_1901",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_1996",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#german_1996",
        "fct-type": "function",
        "title": "german_1996"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "german_1996",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_Swiss",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#german_Swiss",
        "fct-type": "function",
        "title": "german_Swiss"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "german_Swiss",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Swiss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Ancient",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#greek_Ancient",
        "fct-type": "function",
        "title": "greek_Ancient"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "greek_Ancient",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Ancient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Mono",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#greek_Mono",
        "fct-type": "function",
        "title": "greek_Mono"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "greek_Mono",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Poly",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#greek_Poly",
        "fct-type": "function",
        "title": "greek_Poly"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "greek_Poly",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:gujarati",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#gujarati",
        "fct-type": "function",
        "title": "gujarati"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "gujarati",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:hindi",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#hindi",
        "fct-type": "function",
        "title": "hindi"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "hindi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:hungarian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#hungarian",
        "fct-type": "function",
        "title": "hungarian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "hungarian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:icelandic",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate icelandic \"va\\240lahei\\240avegavinnuverkf\\230rageymslusk\\250r\"\n\u003c/code\u003e\u003c/strong\u003e[\"va\\240la\",\"hei\\240a\",\"vega\",\"vinnu\",\"verk\",\"f\\230ra\",\"geymslu\",\"sk\\250r\"]\n\u003c/pre\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#icelandic",
        "fct-type": "function",
        "title": "icelandic"
      },
      "index": {
        "description": "hyphenate icelandic va lahei avegavinnuverkf rageymslusk va la hei vega vinnu verk ra geymslu sk",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "icelandic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:indonesian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#indonesian",
        "fct-type": "function",
        "title": "indonesian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "indonesian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:interlingua",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#interlingua",
        "fct-type": "function",
        "title": "interlingua"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "interlingua",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:irish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#irish",
        "fct-type": "function",
        "title": "irish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "irish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:italian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#italian",
        "fct-type": "function",
        "title": "italian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "italian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:kannada",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#kannada",
        "fct-type": "function",
        "title": "kannada"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "kannada",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:kurmanji",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#kurmanji",
        "fct-type": "function",
        "title": "kurmanji"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "kurmanji",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:languageAffix",
      "description": {
        "fct-descr": "\u003cp\u003ethe infix portion of the data file names used for this language\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Language -\u003e String",
        "fct-source": "src/Text-Hyphenation-Language.html#languageAffix",
        "fct-type": "function",
        "title": "languageAffix"
      },
      "index": {
        "description": "the infix portion of the data file names used for this language",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "languageAffix",
        "normalized": "Language-\u003eString",
        "package": "hyphenation",
        "partial": "Affix",
        "signature": "Language-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:languageHyphenator",
      "description": {
        "fct-descr": "\u003cp\u003eLoad (and cache) the hyphenator for a given language.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Language -\u003e Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#languageHyphenator",
        "fct-type": "function",
        "title": "languageHyphenator"
      },
      "index": {
        "description": "Load and cache the hyphenator for given language",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "languageHyphenator",
        "normalized": "Language-\u003eHyphenator",
        "package": "hyphenation",
        "partial": "Hyphenator",
        "signature": "Language-\u003eHyphenator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:lao",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#lao",
        "fct-type": "function",
        "title": "lao"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "lao",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:latin",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#latin",
        "fct-type": "function",
        "title": "latin"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "latin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:latvian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#latvian",
        "fct-type": "function",
        "title": "latvian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "latvian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:lithuanian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#lithuanian",
        "fct-type": "function",
        "title": "lithuanian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "lithuanian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:loadHyphenator",
      "description": {
        "fct-descr": "\u003cp\u003eRead a built-in language file from the data directory where cabal installed this package.\n\u003c/p\u003e\u003cp\u003e(e.g. \u003ccode\u003ehyphenateLanguage \"en-us\"\u003c/code\u003e opens \u003ccode\u003e\"/Users/ekmett/.cabal/share/hyphenation-0.2/ghc-7.4.1/hyph-en-us.hyp.txt\"\u003c/code\u003e\n among others when run on the author's local machine)\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e IO Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#loadHyphenator",
        "fct-type": "function",
        "title": "loadHyphenator"
      },
      "index": {
        "description": "Read built-in language file from the data directory where cabal installed this package e.g hyphenateLanguage en-us opens Users ekmett cabal share hyphenation-0.2 ghc-7.4.1 hyph-en-us.hyp.txt among others when run on the author local machine",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "loadHyphenator",
        "normalized": "String-\u003eIO Hyphenator",
        "package": "hyphenation",
        "partial": "Hyphenator",
        "signature": "String-\u003eIO Hyphenator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:malayalam",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#malayalam",
        "fct-type": "function",
        "title": "malayalam"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "malayalam",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:marathi",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#marathi",
        "fct-type": "function",
        "title": "marathi"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "marathi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:mongolian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#mongolian",
        "fct-type": "function",
        "title": "mongolian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "mongolian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:norwegian_Bokmal",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#norwegian_Bokmal",
        "fct-type": "function",
        "title": "norwegian_Bokmal"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "norwegian_Bokmal",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Bokmal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:norwegian_Nynorsk",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#norwegian_Nynorsk",
        "fct-type": "function",
        "title": "norwegian_Nynorsk"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "norwegian_Nynorsk",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Nynorsk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:oriya",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#oriya",
        "fct-type": "function",
        "title": "oriya"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "oriya",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:panjabi",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#panjabi",
        "fct-type": "function",
        "title": "panjabi"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "panjabi",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:piedmontese",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#piedmontese",
        "fct-type": "function",
        "title": "piedmontese"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "piedmontese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:polish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#polish",
        "fct-type": "function",
        "title": "polish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "polish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:portuguese",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#portuguese",
        "fct-type": "function",
        "title": "portuguese"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "portuguese",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:romanian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#romanian",
        "fct-type": "function",
        "title": "romanian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "romanian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:romansh",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#romansh",
        "fct-type": "function",
        "title": "romansh"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "romansh",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:russian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#russian",
        "fct-type": "function",
        "title": "russian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "russian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:sanskrit",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#sanskrit",
        "fct-type": "function",
        "title": "sanskrit"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "sanskrit",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbian_Cyrillic",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#serbian_Cyrillic",
        "fct-type": "function",
        "title": "serbian_Cyrillic"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "serbian_Cyrillic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Cyrillic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbocroatian_Cyrillic",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#serbocroatian_Cyrillic",
        "fct-type": "function",
        "title": "serbocroatian_Cyrillic"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "serbocroatian_Cyrillic",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Cyrillic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbocroatian_Latin",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#serbocroatian_Latin",
        "fct-type": "function",
        "title": "serbocroatian_Latin"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "serbocroatian_Latin",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Latin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:slovak",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#slovak",
        "fct-type": "function",
        "title": "slovak"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "slovak",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:slovenian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#slovenian",
        "fct-type": "function",
        "title": "slovenian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "slovenian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:spanish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#spanish",
        "fct-type": "function",
        "title": "spanish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "spanish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:swedish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#swedish",
        "fct-type": "function",
        "title": "swedish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "swedish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:tamil",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#tamil",
        "fct-type": "function",
        "title": "tamil"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "tamil",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:telugu",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#telugu",
        "fct-type": "function",
        "title": "telugu"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "telugu",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:thai",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#thai",
        "fct-type": "function",
        "title": "thai"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "thai",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:turkish",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#turkish",
        "fct-type": "function",
        "title": "turkish"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "turkish",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:turkmen",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#turkmen",
        "fct-type": "function",
        "title": "turkmen"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "turkmen",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:ukrainian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#ukrainian",
        "fct-type": "function",
        "title": "ukrainian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "ukrainian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:uppersorbian",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#uppersorbian",
        "fct-type": "function",
        "title": "uppersorbian"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "uppersorbian",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:welsh",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Language",
        "fct-package": "hyphenation",
        "fct-signature": "Hyphenator",
        "fct-source": "src/Text-Hyphenation-Language.html#welsh",
        "fct-type": "function",
        "title": "welsh"
      },
      "index": {
        "description": "Hyphenators for wide array of languages",
        "hierarchy": "Text Hyphenation Language",
        "module": "Text.Hyphenation.Language",
        "name": "welsh",
        "normalized": "",
        "package": "hyphenation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#",
      "description": {
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "module",
        "fct-source": "src/Text-Hyphenation-Pattern.html",
        "fct-type": "module",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "Pattern",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#t:Patterns",
      "description": {
        "fct-descr": "\u003cp\u003eHyphenation patterns\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "data",
        "fct-source": "src/Text-Hyphenation-Pattern.html#Patterns",
        "fct-type": "data",
        "title": "Patterns"
      },
      "index": {
        "description": "Hyphenation patterns",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "Patterns",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Patterns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:insertPattern",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a Knuth-Liang hyphenation pattern into the trie\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e.\u003c/code\u003e denotes the start or end of the input\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0-9\u003c/code\u003e are used to denote hyphenation or dehyphenation depending on whether or not they are even (no hyphen) or odd (hyphen allowed).\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003ePatterns are overlaid and the maximum value at each location is used.\n this allows you to implement a finite number of precedences between hyphenation rules\n\u003c/p\u003e\u003cp\u003e(e.g. \u003ccode\u003e3foo.\u003c/code\u003e indicates that the suffix '-foo' should be hyphenated with precedence 3.)\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Patterns -\u003e Patterns",
        "fct-source": "src/Text-Hyphenation-Pattern.html#insertPattern",
        "fct-type": "function",
        "title": "insertPattern"
      },
      "index": {
        "description": "Insert Knuth-Liang hyphenation pattern into the trie denotes the start or end of the input are used to denote hyphenation or dehyphenation depending on whether or not they are even no hyphen or odd hyphen allowed Patterns are overlaid and the maximum value at each location is used this allows you to implement finite number of precedences between hyphenation rules e.g foo indicates that the suffix foo should be hyphenated with precedence",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "insertPattern",
        "normalized": "String-\u003ePatterns-\u003ePatterns",
        "package": "hyphenation",
        "partial": "Pattern",
        "signature": "String-\u003ePatterns-\u003ePatterns"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:lookupPattern",
      "description": {
        "fct-descr": "\u003cp\u003eTallies the hyphenation scores for a word considering all tails.\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Patterns -\u003e [Int]",
        "fct-source": "src/Text-Hyphenation-Pattern.html#lookupPattern",
        "fct-type": "function",
        "title": "lookupPattern"
      },
      "index": {
        "description": "Tallies the hyphenation scores for word considering all tails",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "lookupPattern",
        "normalized": "String-\u003ePatterns-\u003e[Int]",
        "package": "hyphenation",
        "partial": "Pattern",
        "signature": "String-\u003ePatterns-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:parsePatterns",
      "description": {
        "fct-descr": "\u003cp\u003eParse one pattern per line from an input string\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehyph-utf8\u003c/code\u003e supplies these files UTF-8 encoded in the \u003ccode\u003etxt\u003c/code\u003e folder with a \u003ccode\u003e.pat.txt\u003c/code\u003e extension\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e Patterns",
        "fct-source": "src/Text-Hyphenation-Pattern.html#parsePatterns",
        "fct-type": "function",
        "title": "parsePatterns"
      },
      "index": {
        "description": "Parse one pattern per line from an input string hyph-utf8 supplies these files UTF-8 encoded in the txt folder with pat.txt extension",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "parsePatterns",
        "normalized": "String-\u003ePatterns",
        "package": "hyphenation",
        "partial": "Patterns",
        "signature": "String-\u003ePatterns"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:scorePattern",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Pattern string to a Score\n\u003c/p\u003e",
        "fct-module": "Text.Hyphenation.Pattern",
        "fct-package": "hyphenation",
        "fct-signature": "String -\u003e [Int]",
        "fct-source": "src/Text-Hyphenation-Pattern.html#scorePattern",
        "fct-type": "function",
        "title": "scorePattern"
      },
      "index": {
        "description": "Convert Pattern string to Score",
        "hierarchy": "Text Hyphenation Pattern",
        "module": "Text.Hyphenation.Pattern",
        "name": "scorePattern",
        "normalized": "String-\u003e[Int]",
        "package": "hyphenation",
        "partial": "Pattern",
        "signature": "String-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyphenation based on the Knuth-Liang algorithm as used by TeX.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on Ned Batchelder's public domain \u003ccode\u003ehyphenate.py\u003c/code\u003e\n and simplified to remove the need for a manual exception list.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Hyphenation",
        "fct-package": "hyphenation",
        "fct-signature": "module",
        "fct-source": "src/Text-Hyphenation.html",
        "fct-type": "module",
        "title": "Hyphenation"
      },
      "index": {
        "description": "Hyphenation based on the Knuth-Liang algorithm as used by TeX The implementation is based on Ned Batchelder public domain hyphenate.py and simplified to remove the need for manual exception list",
        "hierarchy": "Text Hyphenation",
        "module": "Text.Hyphenation",
        "name": "Hyphenation",
        "normalized": "",
        "package": "hyphenation",
        "partial": "Hyphenation",
        "signature": ""
      }
    }
  }
]