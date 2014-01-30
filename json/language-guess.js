[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edat \u003c- loadData'\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehead $ guess dat \"this is a teststring\"\n\u003c/code\u003e\u003c/strong\u003e(\"en\",0.49421052631578954)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 2 $ guess dat \"dette er en teststreng\"\n\u003c/code\u003e\u003c/strong\u003e[(\"no\",0.5703030303030303),(\"da\",0.5096969696969698)]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehead $ guess dat \"lorem ipsum dolor sit amet\"\n\u003c/code\u003e\u003c/strong\u003e(\"la\",0.34199999999999997)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "module",
        "fct-source": "src/Language-Guess.html",
        "fct-type": "module",
        "title": "Guess"
      },
      "index": {
        "description": "Example usage dat loadData head guess dat this is teststring en take guess dat dette er en teststreng no da head guess dat lorem ipsum dolor sit amet la",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "Guess",
        "normalized": "",
        "package": "language-guess",
        "partial": "Guess",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Frequency",
      "description": {
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "type",
        "fct-source": "src/Language-Guess.html#Frequency",
        "fct-type": "type",
        "title": "Frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "Frequency",
        "normalized": "",
        "package": "language-guess",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Language",
      "description": {
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "type",
        "fct-source": "src/Language-Guess.html#Language",
        "fct-type": "type",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "Language",
        "normalized": "",
        "package": "language-guess",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Rank",
      "description": {
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "type",
        "fct-source": "src/Language-Guess.html#Rank",
        "fct-type": "type",
        "title": "Rank"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "Rank",
        "normalized": "",
        "package": "language-guess",
        "partial": "Rank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Trigram",
      "description": {
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "type",
        "fct-source": "src/Language-Guess.html#Trigram",
        "fct-type": "type",
        "title": "Trigram"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "Trigram",
        "normalized": "",
        "package": "language-guess",
        "partial": "Trigram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:clean",
      "description": {
        "fct-descr": "\u003cp\u003eClean a string, removing punctiation, lowering cases, and collapsing\n adjacent spaces.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Language-Guess.html#clean",
        "fct-type": "function",
        "title": "clean"
      },
      "index": {
        "description": "Clean string removing punctiation lowering cases and collapsing adjacent spaces",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "clean",
        "normalized": "String-\u003eString",
        "package": "language-guess",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate distance between ranked trigram sets.\n Cavnar & Trenkle (1994)\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "Map Trigram Rank -\u003e Map Trigram Rank -\u003e Double",
        "fct-source": "src/Language-Guess.html#distance",
        "fct-type": "function",
        "title": "distance"
      },
      "index": {
        "description": "Calculate distance between ranked trigram sets Cavnar Trenkle",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "distance",
        "normalized": "Map Trigram Rank-\u003eMap Trigram Rank-\u003eDouble",
        "package": "language-guess",
        "partial": "",
        "signature": "Map Trigram Rank-\u003eMap Trigram Rank-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:guess",
      "description": {
        "fct-descr": "\u003cp\u003eGuess the language of a string.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "Map Language (Map Trigram Rank) -\u003e String -\u003e [(Language, Double)]",
        "fct-source": "src/Language-Guess.html#guess",
        "fct-type": "function",
        "title": "guess"
      },
      "index": {
        "description": "Guess the language of string",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "guess",
        "normalized": "Map Language(Map Trigram Rank)-\u003eString-\u003e[(Language,Double)]",
        "package": "language-guess",
        "partial": "",
        "signature": "Map Language(Map Trigram Rank)-\u003eString-\u003e[(Language,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:loadData",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a cerealized file.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "FilePath -\u003e IO (Map Language (Map Trigram Rank))",
        "fct-source": "src/Language-Guess.html#loadData",
        "fct-type": "function",
        "title": "loadData"
      },
      "index": {
        "description": "Load cerealized file",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "loadData",
        "normalized": "FilePath-\u003eIO(Map Language(Map Trigram Rank))",
        "package": "language-guess",
        "partial": "Data",
        "signature": "FilePath-\u003eIO(Map Language(Map Trigram Rank))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:loadData-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLoad the default cerealized file.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "IO (Map Language (Map Trigram Rank))",
        "fct-source": "src/Language-Guess.html#loadData%27",
        "fct-type": "function",
        "title": "loadData'"
      },
      "index": {
        "description": "Load the default cerealized file",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "loadData'",
        "normalized": "",
        "package": "language-guess",
        "partial": "Data'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eMake a trigram frequency map out of a string.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "String -\u003e Map (Char, Char, Char) Frequency",
        "fct-source": "src/Language-Guess.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Make trigram frequency map out of string",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "parse",
        "normalized": "String-\u003eMap(Char,Char,Char)Frequency",
        "package": "language-guess",
        "partial": "",
        "signature": "String-\u003eMap(Char,Char,Char)Frequency"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:rank",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a set of trigram frequencies to ranks.\n Maximum of \u003ccode\u003e\u003ca\u003ethreshold\u003c/a\u003e\u003c/code\u003e, uses alphabetical sort to break ties.\n\u003c/p\u003e",
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "Map Trigram Frequency -\u003e Map Trigram Rank",
        "fct-source": "src/Language-Guess.html#rank",
        "fct-type": "function",
        "title": "rank"
      },
      "index": {
        "description": "Convert set of trigram frequencies to ranks Maximum of threshold uses alphabetical sort to break ties",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "rank",
        "normalized": "Map Trigram Frequency-\u003eMap Trigram Rank",
        "package": "language-guess",
        "partial": "",
        "signature": "Map Trigram Frequency-\u003eMap Trigram Rank"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:threshold",
      "description": {
        "fct-module": "Language.Guess",
        "fct-package": "language-guess",
        "fct-signature": "Int",
        "fct-source": "src/Language-Guess.html#threshold",
        "fct-type": "function",
        "title": "threshold"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Guess",
        "module": "Language.Guess",
        "name": "threshold",
        "normalized": "",
        "package": "language-guess",
        "partial": "",
        "signature": ""
      }
    }
  }
]