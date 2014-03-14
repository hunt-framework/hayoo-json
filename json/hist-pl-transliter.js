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
        "word": "hist-pl-transliter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of transliteration rules prepared for documents from the\n IMPACT project.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport NLP.HistPL.Transliter.Impact\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn $ transliter impactRules \"angol\"\n\u003c/code\u003e\u003c/strong\u003e\"anjo&#322;\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.Transliter.Impact",
          "name": "Impact",
          "package": "hist-pl-transliter",
          "source": "src/NLP-HistPL-Transliter-Impact.html",
          "type": "module"
        },
        "index": {
          "description": "set of transliteration rules prepared for documents from the IMPACT project import NLP.HistPL.Transliter.Impact putStrLn transliter impactRules angol anjo",
          "hierarchy": "NLP HistPL Transliter Impact",
          "module": "NLP.HistPL.Transliter.Impact",
          "name": "Impact",
          "package": "hist-pl-transliter",
          "partial": "Impact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter-Impact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of transliteration rules prepared for documents\n from the IMPACT project. \n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter.Impact",
          "name": "impactRules",
          "package": "hist-pl-transliter",
          "signature": "TrRules",
          "source": "src/NLP-HistPL-Transliter-Impact.html#impactRules",
          "type": "function"
        },
        "index": {
          "description": "set of transliteration rules prepared for documents from the IMPACT project",
          "hierarchy": "NLP HistPL Transliter Impact",
          "module": "NLP.HistPL.Transliter.Impact",
          "name": "impactRules",
          "package": "hist-pl-transliter",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter-Impact.html#v:impactRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides a simple embedded domain specific language for\n defining transliteration rules.  All parsers are case-insensitive\n by default.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "Transliter",
          "package": "hist-pl-transliter",
          "source": "src/NLP-HistPL-Transliter.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides simple embedded domain specific language for defining transliteration rules All parsers are case-insensitive by default",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "Transliter",
          "package": "hist-pl-transliter",
          "partial": "Transliter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser data type.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "Parser",
          "package": "hist-pl-transliter",
          "source": "src/NLP-HistPL-Transliter.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "parser data type",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "Parser",
          "package": "hist-pl-transliter",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of transliteration rules.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "TrRules",
          "package": "hist-pl-transliter",
          "source": "src/NLP-HistPL-Transliter.html#TrRules",
          "type": "data"
        },
        "index": {
          "description": "set of transliteration rules",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "TrRules",
          "package": "hist-pl-transliter",
          "partial": "Tr Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#t:TrRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transliteration rule, e.g. (\"abc\" #\u003e \"bcd\") will\n substitute all \"abc\" (sub)string instances with \"bcd\".\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "(#\u003e)",
          "package": "hist-pl-transliter",
          "signature": "String -\u003e String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#%23%3E",
          "type": "function"
        },
        "index": {
          "description": "transliteration rule e.g abc bcd will substitute all abc sub string instances with bcd",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "(#\u003e) #\u003e",
          "normalized": "String-\u003eString-\u003eParser String",
          "package": "hist-pl-transliter",
          "signature": "String-\u003eString-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:-35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to `#\u003e`, but this function allows to define a custom\n parser for the string which should be substituted with another\n string.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "(\u003e#\u003e)",
          "package": "hist-pl-transliter",
          "signature": "Parser String -\u003e String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#%3E%23%3E",
          "type": "function"
        },
        "index": {
          "description": "Similar to but this function allows to define custom parser for the string which should be substituted with another string",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "(\u003e#\u003e) \u003e#\u003e",
          "normalized": "Parser String-\u003eString-\u003eParser String",
          "package": "hist-pl-transliter",
          "signature": "Parser String-\u003eString-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:-62--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatentation of parsers.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "(\u003e+\u003e)",
          "package": "hist-pl-transliter",
          "signature": "Parser String -\u003e Parser String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#%3E%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatentation of parsers",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "(\u003e+\u003e) \u003e+\u003e",
          "normalized": "Parser String-\u003eParser String-\u003eParser String",
          "package": "hist-pl-transliter",
          "signature": "Parser String-\u003eParser String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:-62--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOR parser, i.e. a parser which tries to match the first string argument,\n and only tries the second one if the first match failed.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "(.|)",
          "package": "hist-pl-transliter",
          "signature": "String -\u003e String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#.%7C",
          "type": "function"
        },
        "index": {
          "description": "OR parser i.e parser which tries to match the first string argument and only tries the second one if the first match failed",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "(.|) .|",
          "normalized": "String-\u003eString-\u003eParser String",
          "package": "hist-pl-transliter",
          "signature": "String-\u003eString-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e, but accepts a parser as the first argument.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "(.|.)",
          "package": "hist-pl-transliter",
          "signature": "Parser String -\u003e String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#.%7C.",
          "type": "function"
        },
        "index": {
          "description": "Similar to but accepts parser as the first argument",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "(.|.) .|.",
          "normalized": "Parser String-\u003eString-\u003eParser String",
          "package": "hist-pl-transliter",
          "signature": "Parser String-\u003eString-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.Transliter",
          "name": "TrRules",
          "package": "hist-pl-transliter",
          "signature": "TrRules",
          "source": "src/NLP-HistPL-Transliter.html#TrRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "TrRules",
          "package": "hist-pl-transliter",
          "partial": "Tr Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:TrRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter-level rule is always applied when a match is found.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "charRules",
          "package": "hist-pl-transliter",
          "signature": "[Parser String]",
          "source": "src/NLP-HistPL-Transliter.html#TrRules",
          "type": "function"
        },
        "index": {
          "description": "Character-level rule is always applied when match is found",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "charRules",
          "normalized": "[Parser String]",
          "package": "hist-pl-transliter",
          "partial": "Rules",
          "signature": "[Parser String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:charRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase insensitive character parser.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "ciChar",
          "package": "hist-pl-transliter",
          "signature": "Char -\u003e Parser Char",
          "source": "src/NLP-HistPL-Transliter.html#ciChar",
          "type": "function"
        },
        "index": {
          "description": "Case insensitive character parser",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "ciChar",
          "normalized": "Char-\u003eParser Char",
          "package": "hist-pl-transliter",
          "partial": "Char",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:ciChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase insensitive string parser.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "ciString",
          "package": "hist-pl-transliter",
          "signature": "String -\u003e Parser String",
          "source": "src/NLP-HistPL-Transliter.html#ciString",
          "type": "function"
        },
        "index": {
          "description": "Case insensitive string parser",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "ciString",
          "normalized": "String-\u003eParser String",
          "package": "hist-pl-transliter",
          "partial": "String",
          "signature": "String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:ciString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransliterate the word with the given set of transliteration rules.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "transliter",
          "package": "hist-pl-transliter",
          "signature": "TrRules -\u003e String -\u003e String",
          "source": "src/NLP-HistPL-Transliter.html#transliter",
          "type": "function"
        },
        "index": {
          "description": "Transliterate the word with the given set of transliteration rules",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "transliter",
          "normalized": "TrRules-\u003eString-\u003eString",
          "package": "hist-pl-transliter",
          "signature": "TrRules-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:transliter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord-level rule is applied only when it matches the entire word.\n\u003c/p\u003e",
          "module": "NLP.HistPL.Transliter",
          "name": "wordRules",
          "package": "hist-pl-transliter",
          "signature": "[Parser String]",
          "source": "src/NLP-HistPL-Transliter.html#TrRules",
          "type": "function"
        },
        "index": {
          "description": "Word-level rule is applied only when it matches the entire word",
          "hierarchy": "NLP HistPL Transliter",
          "module": "NLP.HistPL.Transliter",
          "name": "wordRules",
          "normalized": "[Parser String]",
          "package": "hist-pl-transliter",
          "partial": "Rules",
          "signature": "[Parser String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-transliter/docs/NLP-HistPL-Transliter.html#v:wordRules"
      }
    }
  ]
]