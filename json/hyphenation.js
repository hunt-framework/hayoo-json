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
        "word": "hyphenation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Exception",
          "name": "Exception",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "Exception",
          "package": "hyphenation",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenation exceptions are special cases that should use the specified hyphenation points.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Exception",
          "name": "Exceptions",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Exception.html#Exceptions",
          "type": "data"
        },
        "index": {
          "description": "Hyphenation exceptions are special cases that should use the specified hyphenation points",
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "Exceptions",
          "package": "hyphenation",
          "partial": "Exceptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#t:Exceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an exception to the exception table.\n if it is already present, this will restrict the set of hyphenations to the\n intersection of the set provided and the set present.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Exception",
          "name": "addException",
          "package": "hyphenation",
          "signature": "String -\u003e Exceptions -\u003e Exceptions",
          "source": "src/Text-Hyphenation-Exception.html#addException",
          "type": "function"
        },
        "index": {
          "description": "add an exception to the exception table if it is already present this will restrict the set of hyphenations to the intersection of the set provided and the set present",
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "addException",
          "normalized": "String-\u003eExceptions-\u003eExceptions",
          "package": "hyphenation",
          "partial": "Exception",
          "signature": "String-\u003eExceptions-\u003eExceptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:addException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to find a matching hyphenation exception.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Exception",
          "name": "lookupException",
          "package": "hyphenation",
          "signature": "String -\u003e Exceptions -\u003e Maybe [Int]",
          "source": "src/Text-Hyphenation-Exception.html#lookupException",
          "type": "function"
        },
        "index": {
          "description": "Try to find matching hyphenation exception",
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "lookupException",
          "normalized": "String-\u003eExceptions-\u003eMaybe[Int]",
          "package": "hyphenation",
          "partial": "Exception",
          "signature": "String-\u003eExceptions-\u003eMaybe[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:lookupException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one exception per line from an input string\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Exception",
          "name": "parseExceptions",
          "package": "hyphenation",
          "signature": "String -\u003e Exceptions",
          "source": "src/Text-Hyphenation-Exception.html#parseExceptions",
          "type": "function"
        },
        "index": {
          "description": "Parse one exception per line from an input string",
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "parseExceptions",
          "normalized": "String-\u003eExceptions",
          "package": "hyphenation",
          "partial": "Exceptions",
          "signature": "String-\u003eExceptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:parseExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an exception string to a score.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Exception",
          "name": "scoreException",
          "package": "hyphenation",
          "signature": "String -\u003e [Int]",
          "source": "src/Text-Hyphenation-Exception.html#scoreException",
          "type": "function"
        },
        "index": {
          "description": "Convert an exception string to score",
          "hierarchy": "Text Hyphenation Exception",
          "module": "Text.Hyphenation.Exception",
          "name": "scoreException",
          "normalized": "String-\u003e[Int]",
          "package": "hyphenation",
          "partial": "Exception",
          "signature": "String-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Exception.html#v:scoreException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyphenation based on the Knuth-Liang algorithm as used by TeX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Hyphenator.html",
          "type": "module"
        },
        "index": {
          "description": "Hyphenation based on the Knuth-Liang algorithm as used by TeX",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "partial": "Hyphenator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eHyphenator\u003c/code\u003e is combination of an alphabet normalization scheme, a set of \u003ccode\u003e\u003ca\u003ePatterns\u003c/a\u003e\u003c/code\u003e, a set of \u003ccode\u003e\u003ca\u003eExceptions\u003c/a\u003e\u003c/code\u003e to those patterns\n and a number of characters at each end to skip hyphenating.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "data"
        },
        "index": {
          "description": "Hyphenator is combination of an alphabet normalization scheme set of Patterns set of Exceptions to those patterns and number of characters at each end to skip hyphenating",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "partial": "Hyphenator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#t:Hyphenator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "Hyphenator",
          "package": "hyphenation",
          "partial": "Hyphenator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:Hyphenator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, do not insert hyphens in the first two characters\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edefaultLeftMin\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "defaultLeftMin",
          "package": "hyphenation",
          "signature": "Int",
          "source": "src/Text-Hyphenation-Hyphenator.html#defaultLeftMin",
          "type": "function"
        },
        "index": {
          "description": "By default do not insert hyphens in the first two characters defaultLeftMin",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "defaultLeftMin",
          "package": "hyphenation",
          "partial": "Left Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:defaultLeftMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, do not insert hyphens in the last three characters.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edefaultRightMin\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "defaultRightMin",
          "package": "hyphenation",
          "signature": "Int",
          "source": "src/Text-Hyphenation-Hyphenator.html#defaultRightMin",
          "type": "function"
        },
        "index": {
          "description": "By default do not insert hyphens in the last three characters defaultRightMin",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "defaultRightMin",
          "package": "hyphenation",
          "partial": "Right Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:defaultRightMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehyphenate a single word using the specified Hyphenator. Returns a set of candidate breakpoints by decomposing the input\n into substrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Text.Hyphenation\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"ifrag\",\"ilis\",\"tic\",\"ex\",\"pi\",\"al\",\"ado\",\"cious\"]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"hyphenation\"\n\u003c/code\u003e\u003c/strong\u003e[\"hy\",\"phen\",\"ation\"]\n\u003c/pre\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenate",
          "package": "hyphenation",
          "signature": "Hyphenator -\u003e String -\u003e [String]",
          "source": "src/Text-Hyphenation-Hyphenator.html#hyphenate",
          "type": "function"
        },
        "index": {
          "description": "hyphenate single word using the specified Hyphenator Returns set of candidate breakpoints by decomposing the input into substrings import Text.Hyphenation hyphenate english US supercalifragilisticexpialadocious su per cal ifrag ilis tic ex pi al ado cious hyphenate english US hyphenation hy phen ation",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenate",
          "normalized": "Hyphenator-\u003eString-\u003e[String]",
          "package": "hyphenation",
          "signature": "Hyphenator-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea normalization function applied to input characters before applying patterns or exceptions\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorChars",
          "package": "hyphenation",
          "signature": "Char -\u003e Char",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "description": "normalization function applied to input characters before applying patterns or exceptions",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorChars",
          "normalized": "Char-\u003eChar",
          "package": "hyphenation",
          "partial": "Chars",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexceptions to the general hyphenation rules, hyphenated manually\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorExceptions",
          "package": "hyphenation",
          "signature": "Exceptions",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "description": "exceptions to the general hyphenation rules hyphenated manually",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorExceptions",
          "package": "hyphenation",
          "partial": "Exceptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of characters as the start of a word to skip hyphenating, by default: 2\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorLeftMin",
          "package": "hyphenation",
          "signature": "Int",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "description": "the number of characters as the start of word to skip hyphenating by default",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorLeftMin",
          "package": "hyphenation",
          "partial": "Left Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorLeftMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehyphenation patterns stored in a trie\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorPatterns",
          "package": "hyphenation",
          "signature": "Patterns",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "description": "hyphenation patterns stored in trie",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorPatterns",
          "package": "hyphenation",
          "partial": "Patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorPatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of characters at the end of the word to skip hyphenating, by default: 3\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorRightMin",
          "package": "hyphenation",
          "signature": "Int",
          "source": "src/Text-Hyphenation-Hyphenator.html#Hyphenator",
          "type": "function"
        },
        "index": {
          "description": "the number of characters at the end of the word to skip hyphenating by default",
          "hierarchy": "Text Hyphenation Hyphenator",
          "module": "Text.Hyphenation.Hyphenator",
          "name": "hyphenatorRightMin",
          "package": "hyphenation",
          "partial": "Right Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Hyphenator.html#v:hyphenatorRightMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Language",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Language.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Language",
          "package": "hyphenation",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strongly typed set of available languages you can use for hyphenation.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "Language",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "data"
        },
        "index": {
          "description": "strongly typed set of available languages you can use for hyphenation",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Language",
          "package": "hyphenation",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Afrikaans",
          "package": "hyphenation",
          "signature": "Afrikaans",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Afrikaans",
          "package": "hyphenation",
          "partial": "Afrikaans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Afrikaans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Basque",
          "package": "hyphenation",
          "signature": "Basque",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Basque",
          "package": "hyphenation",
          "partial": "Basque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Basque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Bengali",
          "package": "hyphenation",
          "signature": "Bengali",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Bengali",
          "package": "hyphenation",
          "partial": "Bengali",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Bengali"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Bulgarian",
          "package": "hyphenation",
          "signature": "Bulgarian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Bulgarian",
          "package": "hyphenation",
          "partial": "Bulgarian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Bulgarian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Catalan",
          "package": "hyphenation",
          "signature": "Catalan",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Catalan",
          "package": "hyphenation",
          "partial": "Catalan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Catalan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Chinese",
          "package": "hyphenation",
          "signature": "Chinese",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Chinese",
          "package": "hyphenation",
          "partial": "Chinese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Chinese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Coptic",
          "package": "hyphenation",
          "signature": "Coptic",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Coptic",
          "package": "hyphenation",
          "partial": "Coptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Coptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Croatian",
          "package": "hyphenation",
          "signature": "Croatian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Croatian",
          "package": "hyphenation",
          "partial": "Croatian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Croatian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Czech",
          "package": "hyphenation",
          "signature": "Czech",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Czech",
          "package": "hyphenation",
          "partial": "Czech",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Czech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Danish",
          "package": "hyphenation",
          "signature": "Danish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Danish",
          "package": "hyphenation",
          "partial": "Danish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Danish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Dutch",
          "package": "hyphenation",
          "signature": "Dutch",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Dutch",
          "package": "hyphenation",
          "partial": "Dutch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Dutch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "English_GB",
          "package": "hyphenation",
          "signature": "English_GB",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "English_GB",
          "package": "hyphenation",
          "partial": "English GB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:English_GB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "English_US",
          "package": "hyphenation",
          "signature": "English_US",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "English_US",
          "package": "hyphenation",
          "partial": "English US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:English_US"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Esperanto",
          "package": "hyphenation",
          "signature": "Esperanto",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Esperanto",
          "package": "hyphenation",
          "partial": "Esperanto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Esperanto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Estonian",
          "package": "hyphenation",
          "signature": "Estonian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Estonian",
          "package": "hyphenation",
          "partial": "Estonian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Estonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Ethiopic",
          "package": "hyphenation",
          "signature": "Ethiopic",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Ethiopic",
          "package": "hyphenation",
          "partial": "Ethiopic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Ethiopic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFarsi\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "Finnish",
          "package": "hyphenation",
          "signature": "Finnish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "description": "Farsi",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Finnish",
          "package": "hyphenation",
          "partial": "Finnish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Finnish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "French",
          "package": "hyphenation",
          "signature": "French",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "French",
          "package": "hyphenation",
          "partial": "French",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:French"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Friulan",
          "package": "hyphenation",
          "signature": "Friulan",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Friulan",
          "package": "hyphenation",
          "partial": "Friulan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Friulan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Galician",
          "package": "hyphenation",
          "signature": "Galician",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Galician",
          "package": "hyphenation",
          "partial": "Galician",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Galician"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "German_1901",
          "package": "hyphenation",
          "signature": "German_1901",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "German_1901",
          "package": "hyphenation",
          "partial": "German",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_1901"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "German_1996",
          "package": "hyphenation",
          "signature": "German_1996",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "German_1996",
          "package": "hyphenation",
          "partial": "German",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_1996"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "German_Swiss",
          "package": "hyphenation",
          "signature": "German_Swiss",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "German_Swiss",
          "package": "hyphenation",
          "partial": "German Swiss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:German_Swiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Ancient",
          "package": "hyphenation",
          "signature": "Greek_Ancient",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Ancient",
          "package": "hyphenation",
          "partial": "Greek Ancient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Ancient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Mono",
          "package": "hyphenation",
          "signature": "Greek_Mono",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Mono",
          "package": "hyphenation",
          "partial": "Greek Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Mono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Poly",
          "package": "hyphenation",
          "signature": "Greek_Poly",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Greek_Poly",
          "package": "hyphenation",
          "partial": "Greek Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Greek_Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Gujarati",
          "package": "hyphenation",
          "signature": "Gujarati",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Gujarati",
          "package": "hyphenation",
          "partial": "Gujarati",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Gujarati"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Hindi",
          "package": "hyphenation",
          "signature": "Hindi",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Hindi",
          "package": "hyphenation",
          "partial": "Hindi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Hindi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Hungarian",
          "package": "hyphenation",
          "signature": "Hungarian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Hungarian",
          "package": "hyphenation",
          "partial": "Hungarian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Hungarian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Icelandic",
          "package": "hyphenation",
          "signature": "Icelandic",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Icelandic",
          "package": "hyphenation",
          "partial": "Icelandic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Icelandic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Indonesian",
          "package": "hyphenation",
          "signature": "Indonesian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Indonesian",
          "package": "hyphenation",
          "partial": "Indonesian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Indonesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Interlingua",
          "package": "hyphenation",
          "signature": "Interlingua",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Interlingua",
          "package": "hyphenation",
          "partial": "Interlingua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Interlingua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Irish",
          "package": "hyphenation",
          "signature": "Irish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Irish",
          "package": "hyphenation",
          "partial": "Irish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Irish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Italian",
          "package": "hyphenation",
          "signature": "Italian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Italian",
          "package": "hyphenation",
          "partial": "Italian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Italian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Kannada",
          "package": "hyphenation",
          "signature": "Kannada",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Kannada",
          "package": "hyphenation",
          "partial": "Kannada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Kannada"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Kurmanji",
          "package": "hyphenation",
          "signature": "Kurmanji",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Kurmanji",
          "package": "hyphenation",
          "partial": "Kurmanji",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Kurmanji"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Lao",
          "package": "hyphenation",
          "signature": "Lao",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Lao",
          "package": "hyphenation",
          "partial": "Lao",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Lao"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Latin",
          "package": "hyphenation",
          "signature": "Latin",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Latin",
          "package": "hyphenation",
          "partial": "Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Latin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Latvian",
          "package": "hyphenation",
          "signature": "Latvian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Latvian",
          "package": "hyphenation",
          "partial": "Latvian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Latvian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Lithuanian",
          "package": "hyphenation",
          "signature": "Lithuanian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Lithuanian",
          "package": "hyphenation",
          "partial": "Lithuanian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Lithuanian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Malayalam",
          "package": "hyphenation",
          "signature": "Malayalam",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Malayalam",
          "package": "hyphenation",
          "partial": "Malayalam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Malayalam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Marathi",
          "package": "hyphenation",
          "signature": "Marathi",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Marathi",
          "package": "hyphenation",
          "partial": "Marathi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Marathi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Mongolian",
          "package": "hyphenation",
          "signature": "Mongolian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Mongolian",
          "package": "hyphenation",
          "partial": "Mongolian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Mongolian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Norwegian_Bokmal",
          "package": "hyphenation",
          "signature": "Norwegian_Bokmal",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Norwegian_Bokmal",
          "package": "hyphenation",
          "partial": "Norwegian Bokmal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Norwegian_Bokmal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Norwegian_Nynorsk",
          "package": "hyphenation",
          "signature": "Norwegian_Nynorsk",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Norwegian_Nynorsk",
          "package": "hyphenation",
          "partial": "Norwegian Nynorsk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Norwegian_Nynorsk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Oriya",
          "package": "hyphenation",
          "signature": "Oriya",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Oriya",
          "package": "hyphenation",
          "partial": "Oriya",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Oriya"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Panjabi",
          "package": "hyphenation",
          "signature": "Panjabi",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Panjabi",
          "package": "hyphenation",
          "partial": "Panjabi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Panjabi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Piedmontese",
          "package": "hyphenation",
          "signature": "Piedmontese",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Piedmontese",
          "package": "hyphenation",
          "partial": "Piedmontese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Piedmontese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Polish",
          "package": "hyphenation",
          "signature": "Polish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Polish",
          "package": "hyphenation",
          "partial": "Polish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Polish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Portuguese",
          "package": "hyphenation",
          "signature": "Portuguese",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Portuguese",
          "package": "hyphenation",
          "partial": "Portuguese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Portuguese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Romanian",
          "package": "hyphenation",
          "signature": "Romanian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Romanian",
          "package": "hyphenation",
          "partial": "Romanian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Romanian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Romansh",
          "package": "hyphenation",
          "signature": "Romansh",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Romansh",
          "package": "hyphenation",
          "partial": "Romansh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Romansh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Russian",
          "package": "hyphenation",
          "signature": "Russian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Russian",
          "package": "hyphenation",
          "partial": "Russian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Russian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Sanskrit",
          "package": "hyphenation",
          "signature": "Sanskrit",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Sanskrit",
          "package": "hyphenation",
          "partial": "Sanskrit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Sanskrit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Serbian_Cyrillic",
          "package": "hyphenation",
          "signature": "Serbian_Cyrillic",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Serbian_Cyrillic",
          "package": "hyphenation",
          "partial": "Serbian Cyrillic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbian_Cyrillic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Serbocroatian_Cyrillic",
          "package": "hyphenation",
          "signature": "Serbocroatian_Cyrillic",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Serbocroatian_Cyrillic",
          "package": "hyphenation",
          "partial": "Serbocroatian Cyrillic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbocroatian_Cyrillic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Serbocroatian_Latin",
          "package": "hyphenation",
          "signature": "Serbocroatian_Latin",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Serbocroatian_Latin",
          "package": "hyphenation",
          "partial": "Serbocroatian Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Serbocroatian_Latin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Slovak",
          "package": "hyphenation",
          "signature": "Slovak",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Slovak",
          "package": "hyphenation",
          "partial": "Slovak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Slovak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Slovenian",
          "package": "hyphenation",
          "signature": "Slovenian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Slovenian",
          "package": "hyphenation",
          "partial": "Slovenian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Slovenian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Spanish",
          "package": "hyphenation",
          "signature": "Spanish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Spanish",
          "package": "hyphenation",
          "partial": "Spanish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Spanish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Swedish",
          "package": "hyphenation",
          "signature": "Swedish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Swedish",
          "package": "hyphenation",
          "partial": "Swedish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Swedish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Tamil",
          "package": "hyphenation",
          "signature": "Tamil",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Tamil",
          "package": "hyphenation",
          "partial": "Tamil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Tamil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Telugu",
          "package": "hyphenation",
          "signature": "Telugu",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Telugu",
          "package": "hyphenation",
          "partial": "Telugu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Telugu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Thai",
          "package": "hyphenation",
          "signature": "Thai",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Thai",
          "package": "hyphenation",
          "partial": "Thai",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Thai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Turkish",
          "package": "hyphenation",
          "signature": "Turkish",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Turkish",
          "package": "hyphenation",
          "partial": "Turkish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Turkish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Turkmen",
          "package": "hyphenation",
          "signature": "Turkmen",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Turkmen",
          "package": "hyphenation",
          "partial": "Turkmen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Turkmen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Ukrainian",
          "package": "hyphenation",
          "signature": "Ukrainian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Ukrainian",
          "package": "hyphenation",
          "partial": "Ukrainian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Ukrainian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Uppersorbian",
          "package": "hyphenation",
          "signature": "Uppersorbian",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Uppersorbian",
          "package": "hyphenation",
          "partial": "Uppersorbian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Uppersorbian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Language",
          "name": "Welsh",
          "package": "hyphenation",
          "signature": "Welsh",
          "source": "src/Text-Hyphenation-Language.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "Welsh",
          "package": "hyphenation",
          "partial": "Welsh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:Welsh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "afrikaans",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#afrikaans",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "afrikaans",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:afrikaans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "basque",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#basque",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "basque",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:basque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "bengali",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#bengali",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "bengali",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:bengali"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "bulgarian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#bulgarian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "bulgarian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:bulgarian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "catalan",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#catalan",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "catalan",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:catalan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "chinese",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#chinese",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "chinese",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:chinese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "coptic",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#coptic",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "coptic",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:coptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "croatian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#croatian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "croatian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:croatian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "czech",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#czech",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "czech",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:czech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "danish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#danish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "danish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:danish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "dutch",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#dutch",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "dutch",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:dutch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_GB \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"i\",\"fra\",\"gil\",\"istic\",\"ex\",\"pi\",\"alado\",\"cious\"]\n\u003c/pre\u003e\u003cp\u003efavors UK hyphenation\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "english_GB",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#english_GB",
          "type": "function"
        },
        "index": {
          "description": "hyphenate english GB supercalifragilisticexpialadocious su per cal fra gil istic ex pi alado cious favors UK hyphenation",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "english_GB",
          "package": "hyphenation",
          "partial": "GB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:english_GB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate english_US \"supercalifragilisticexpialadocious\"\n\u003c/code\u003e\u003c/strong\u003e[\"su\",\"per\",\"cal\",\"ifrag\",\"ilis\",\"tic\",\"ex\",\"pi\",\"al\",\"ado\",\"cious\"]\n\u003c/pre\u003e\u003cp\u003efavors US hyphenation\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "english_US",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#english_US",
          "type": "function"
        },
        "index": {
          "description": "hyphenate english US supercalifragilisticexpialadocious su per cal ifrag ilis tic ex pi al ado cious favors US hyphenation",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "english_US",
          "package": "hyphenation",
          "partial": "US",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:english_US"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "esperanto",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#esperanto",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "esperanto",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:esperanto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "estonian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#estonian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "estonian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:estonian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "ethiopic",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#ethiopic",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "ethiopic",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:ethiopic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "finnish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#finnish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "finnish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:finnish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate french \"anticonstitutionnellement\"\n\u003c/code\u003e\u003c/strong\u003e[\"an\",\"ti\",\"cons\",\"ti\",\"tu\",\"tion\",\"nel\",\"le\",\"ment\"]\n\u003c/pre\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "french",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#french",
          "type": "function"
        },
        "index": {
          "description": "hyphenate french anticonstitutionnellement an ti cons ti tu tion nel le ment",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "french",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:french"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "friulan",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#friulan",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "friulan",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:friulan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "galician",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#galician",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "galician",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:galician"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "german_1901",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#german_1901",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "german_1901",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_1901"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "german_1996",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#german_1996",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "german_1996",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_1996"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "german_Swiss",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#german_Swiss",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "german_Swiss",
          "package": "hyphenation",
          "partial": "Swiss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:german_Swiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Ancient",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#greek_Ancient",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Ancient",
          "package": "hyphenation",
          "partial": "Ancient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Ancient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Mono",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#greek_Mono",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Mono",
          "package": "hyphenation",
          "partial": "Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Mono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Poly",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#greek_Poly",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "greek_Poly",
          "package": "hyphenation",
          "partial": "Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:greek_Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "gujarati",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#gujarati",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "gujarati",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:gujarati"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "hindi",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#hindi",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "hindi",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:hindi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "hungarian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#hungarian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "hungarian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:hungarian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehyphenate icelandic \"va\\240lahei\\240avegavinnuverkf\\230rageymslusk\\250r\"\n\u003c/code\u003e\u003c/strong\u003e[\"va\\240la\",\"hei\\240a\",\"vega\",\"vinnu\",\"verk\",\"f\\230ra\",\"geymslu\",\"sk\\250r\"]\n\u003c/pre\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "icelandic",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#icelandic",
          "type": "function"
        },
        "index": {
          "description": "hyphenate icelandic va lahei avegavinnuverkf rageymslusk va la hei vega vinnu verk ra geymslu sk",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "icelandic",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:icelandic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "indonesian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#indonesian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "indonesian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:indonesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "interlingua",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#interlingua",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "interlingua",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:interlingua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "irish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#irish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "irish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:irish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "italian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#italian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "italian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:italian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "kannada",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#kannada",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "kannada",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:kannada"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "kurmanji",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#kurmanji",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "kurmanji",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:kurmanji"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe infix portion of the data file names used for this language\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "languageAffix",
          "package": "hyphenation",
          "signature": "Language -\u003e String",
          "source": "src/Text-Hyphenation-Language.html#languageAffix",
          "type": "function"
        },
        "index": {
          "description": "the infix portion of the data file names used for this language",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "languageAffix",
          "normalized": "Language-\u003eString",
          "package": "hyphenation",
          "partial": "Affix",
          "signature": "Language-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:languageAffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad (and cache) the hyphenator for a given language.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "languageHyphenator",
          "package": "hyphenation",
          "signature": "Language -\u003e Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#languageHyphenator",
          "type": "function"
        },
        "index": {
          "description": "Load and cache the hyphenator for given language",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "languageHyphenator",
          "normalized": "Language-\u003eHyphenator",
          "package": "hyphenation",
          "partial": "Hyphenator",
          "signature": "Language-\u003eHyphenator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:languageHyphenator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "lao",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#lao",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "lao",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:lao"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "latin",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#latin",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "latin",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:latin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "latvian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#latvian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "latvian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:latvian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "lithuanian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#lithuanian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "lithuanian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:lithuanian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a built-in language file from the data directory where cabal installed this package.\n\u003c/p\u003e\u003cp\u003e(e.g. \u003ccode\u003ehyphenateLanguage \"en-us\"\u003c/code\u003e opens \u003ccode\u003e\"/Users/ekmett/.cabal/share/hyphenation-0.2/ghc-7.4.1/hyph-en-us.hyp.txt\"\u003c/code\u003e\n among others when run on the author's local machine)\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "loadHyphenator",
          "package": "hyphenation",
          "signature": "String -\u003e IO Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#loadHyphenator",
          "type": "function"
        },
        "index": {
          "description": "Read built-in language file from the data directory where cabal installed this package e.g hyphenateLanguage en-us opens Users ekmett cabal share hyphenation-0.2 ghc-7.4.1 hyph-en-us.hyp.txt among others when run on the author local machine",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "loadHyphenator",
          "normalized": "String-\u003eIO Hyphenator",
          "package": "hyphenation",
          "partial": "Hyphenator",
          "signature": "String-\u003eIO Hyphenator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:loadHyphenator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "malayalam",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#malayalam",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "malayalam",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:malayalam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "marathi",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#marathi",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "marathi",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:marathi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "mongolian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#mongolian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "mongolian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:mongolian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "norwegian_Bokmal",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#norwegian_Bokmal",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "norwegian_Bokmal",
          "package": "hyphenation",
          "partial": "Bokmal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:norwegian_Bokmal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "norwegian_Nynorsk",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#norwegian_Nynorsk",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "norwegian_Nynorsk",
          "package": "hyphenation",
          "partial": "Nynorsk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:norwegian_Nynorsk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "oriya",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#oriya",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "oriya",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:oriya"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "panjabi",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#panjabi",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "panjabi",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:panjabi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "piedmontese",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#piedmontese",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "piedmontese",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:piedmontese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "polish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#polish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "polish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:polish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "portuguese",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#portuguese",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "portuguese",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:portuguese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "romanian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#romanian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "romanian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:romanian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "romansh",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#romansh",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "romansh",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:romansh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "russian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#russian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "russian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:russian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "sanskrit",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#sanskrit",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "sanskrit",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:sanskrit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "serbian_Cyrillic",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#serbian_Cyrillic",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "serbian_Cyrillic",
          "package": "hyphenation",
          "partial": "Cyrillic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbian_Cyrillic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "serbocroatian_Cyrillic",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#serbocroatian_Cyrillic",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "serbocroatian_Cyrillic",
          "package": "hyphenation",
          "partial": "Cyrillic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbocroatian_Cyrillic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "serbocroatian_Latin",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#serbocroatian_Latin",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "serbocroatian_Latin",
          "package": "hyphenation",
          "partial": "Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:serbocroatian_Latin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "slovak",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#slovak",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "slovak",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:slovak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "slovenian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#slovenian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "slovenian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:slovenian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "spanish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#spanish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "spanish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:spanish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "swedish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#swedish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "swedish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:swedish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "tamil",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#tamil",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "tamil",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:tamil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "telugu",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#telugu",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "telugu",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:telugu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "thai",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#thai",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "thai",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:thai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "turkish",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#turkish",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "turkish",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:turkish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "turkmen",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#turkmen",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "turkmen",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:turkmen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "ukrainian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#ukrainian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "ukrainian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:ukrainian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "uppersorbian",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#uppersorbian",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "uppersorbian",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:uppersorbian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenators for a wide array of languages.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Language",
          "name": "welsh",
          "package": "hyphenation",
          "signature": "Hyphenator",
          "source": "src/Text-Hyphenation-Language.html#welsh",
          "type": "function"
        },
        "index": {
          "description": "Hyphenators for wide array of languages",
          "hierarchy": "Text Hyphenation Language",
          "module": "Text.Hyphenation.Language",
          "name": "welsh",
          "package": "hyphenation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Language.html#v:welsh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenation.Pattern",
          "name": "Pattern",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Pattern.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "Pattern",
          "package": "hyphenation",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenation patterns\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Pattern",
          "name": "Patterns",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation-Pattern.html#Patterns",
          "type": "data"
        },
        "index": {
          "description": "Hyphenation patterns",
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "Patterns",
          "package": "hyphenation",
          "partial": "Patterns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#t:Patterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a Knuth-Liang hyphenation pattern into the trie\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003e.\u003c/code\u003e denotes the start or end of the input\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0-9\u003c/code\u003e are used to denote hyphenation or dehyphenation depending on whether or not they are even (no hyphen) or odd (hyphen allowed).\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003ePatterns are overlaid and the maximum value at each location is used.\n this allows you to implement a finite number of precedences between hyphenation rules\n\u003c/p\u003e\u003cp\u003e(e.g. \u003ccode\u003e3foo.\u003c/code\u003e indicates that the suffix '-foo' should be hyphenated with precedence 3.)\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Pattern",
          "name": "insertPattern",
          "package": "hyphenation",
          "signature": "String -\u003e Patterns -\u003e Patterns",
          "source": "src/Text-Hyphenation-Pattern.html#insertPattern",
          "type": "function"
        },
        "index": {
          "description": "Insert Knuth-Liang hyphenation pattern into the trie denotes the start or end of the input are used to denote hyphenation or dehyphenation depending on whether or not they are even no hyphen or odd hyphen allowed Patterns are overlaid and the maximum value at each location is used this allows you to implement finite number of precedences between hyphenation rules e.g foo indicates that the suffix foo should be hyphenated with precedence",
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "insertPattern",
          "normalized": "String-\u003ePatterns-\u003ePatterns",
          "package": "hyphenation",
          "partial": "Pattern",
          "signature": "String-\u003ePatterns-\u003ePatterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:insertPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTallies the hyphenation scores for a word considering all tails.\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Pattern",
          "name": "lookupPattern",
          "package": "hyphenation",
          "signature": "String -\u003e Patterns -\u003e [Int]",
          "source": "src/Text-Hyphenation-Pattern.html#lookupPattern",
          "type": "function"
        },
        "index": {
          "description": "Tallies the hyphenation scores for word considering all tails",
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "lookupPattern",
          "normalized": "String-\u003ePatterns-\u003e[Int]",
          "package": "hyphenation",
          "partial": "Pattern",
          "signature": "String-\u003ePatterns-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:lookupPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one pattern per line from an input string\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehyph-utf8\u003c/code\u003e supplies these files UTF-8 encoded in the \u003ccode\u003etxt\u003c/code\u003e folder with a \u003ccode\u003e.pat.txt\u003c/code\u003e extension\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Pattern",
          "name": "parsePatterns",
          "package": "hyphenation",
          "signature": "String -\u003e Patterns",
          "source": "src/Text-Hyphenation-Pattern.html#parsePatterns",
          "type": "function"
        },
        "index": {
          "description": "Parse one pattern per line from an input string hyph-utf8 supplies these files UTF-8 encoded in the txt folder with pat.txt extension",
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "parsePatterns",
          "normalized": "String-\u003ePatterns",
          "package": "hyphenation",
          "partial": "Patterns",
          "signature": "String-\u003ePatterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:parsePatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Pattern string to a Score\n\u003c/p\u003e",
          "module": "Text.Hyphenation.Pattern",
          "name": "scorePattern",
          "package": "hyphenation",
          "signature": "String -\u003e [Int]",
          "source": "src/Text-Hyphenation-Pattern.html#scorePattern",
          "type": "function"
        },
        "index": {
          "description": "Convert Pattern string to Score",
          "hierarchy": "Text Hyphenation Pattern",
          "module": "Text.Hyphenation.Pattern",
          "name": "scorePattern",
          "normalized": "String-\u003e[Int]",
          "package": "hyphenation",
          "partial": "Pattern",
          "signature": "String-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation-Pattern.html#v:scorePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyphenation based on the Knuth-Liang algorithm as used by TeX.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on Ned Batchelder's public domain \u003ccode\u003ehyphenate.py\u003c/code\u003e\n and simplified to remove the need for a manual exception list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Hyphenation",
          "name": "Hyphenation",
          "package": "hyphenation",
          "source": "src/Text-Hyphenation.html",
          "type": "module"
        },
        "index": {
          "description": "Hyphenation based on the Knuth-Liang algorithm as used by TeX The implementation is based on Ned Batchelder public domain hyphenate.py and simplified to remove the need for manual exception list",
          "hierarchy": "Text Hyphenation",
          "module": "Text.Hyphenation",
          "name": "Hyphenation",
          "package": "hyphenation",
          "partial": "Hyphenation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenation/docs/Text-Hyphenation.html#"
      }
    }
  ]
]