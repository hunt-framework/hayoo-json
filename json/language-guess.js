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
        "word": "language-guess"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edat \u003c- loadData'\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehead $ guess dat \"this is a teststring\"\n\u003c/code\u003e\u003c/strong\u003e(\"en\",0.49421052631578954)\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 2 $ guess dat \"dette er en teststreng\"\n\u003c/code\u003e\u003c/strong\u003e[(\"no\",0.5703030303030303),(\"da\",0.5096969696969698)]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehead $ guess dat \"lorem ipsum dolor sit amet\"\n\u003c/code\u003e\u003c/strong\u003e(\"la\",0.34199999999999997)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Language.Guess",
          "name": "Guess",
          "package": "language-guess",
          "source": "src/Language-Guess.html",
          "type": "module"
        },
        "index": {
          "description": "Example usage dat loadData head guess dat this is teststring en take guess dat dette er en teststreng no da head guess dat lorem ipsum dolor sit amet la",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "Guess",
          "package": "language-guess",
          "partial": "Guess",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Guess",
          "name": "Frequency",
          "package": "language-guess",
          "source": "src/Language-Guess.html#Frequency",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "Frequency",
          "package": "language-guess",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Guess",
          "name": "Language",
          "package": "language-guess",
          "source": "src/Language-Guess.html#Language",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "Language",
          "package": "language-guess",
          "partial": "Language",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Guess",
          "name": "Rank",
          "package": "language-guess",
          "source": "src/Language-Guess.html#Rank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "Rank",
          "package": "language-guess",
          "partial": "Rank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Guess",
          "name": "Trigram",
          "package": "language-guess",
          "source": "src/Language-Guess.html#Trigram",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "Trigram",
          "package": "language-guess",
          "partial": "Trigram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#t:Trigram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean a string, removing punctiation, lowering cases, and collapsing\n adjacent spaces.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "clean",
          "package": "language-guess",
          "signature": "String -\u003e String",
          "source": "src/Language-Guess.html#clean",
          "type": "function"
        },
        "index": {
          "description": "Clean string removing punctiation lowering cases and collapsing adjacent spaces",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "clean",
          "normalized": "String-\u003eString",
          "package": "language-guess",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:clean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate distance between ranked trigram sets.\n Cavnar & Trenkle (1994)\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "distance",
          "package": "language-guess",
          "signature": "Map Trigram Rank -\u003e Map Trigram Rank -\u003e Double",
          "source": "src/Language-Guess.html#distance",
          "type": "function"
        },
        "index": {
          "description": "Calculate distance between ranked trigram sets Cavnar Trenkle",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "distance",
          "normalized": "Map Trigram Rank-\u003eMap Trigram Rank-\u003eDouble",
          "package": "language-guess",
          "signature": "Map Trigram Rank-\u003eMap Trigram Rank-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the language of a string.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "guess",
          "package": "language-guess",
          "signature": "Map Language (Map Trigram Rank) -\u003e String -\u003e [(Language, Double)]",
          "source": "src/Language-Guess.html#guess",
          "type": "function"
        },
        "index": {
          "description": "Guess the language of string",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "guess",
          "normalized": "Map Language(Map Trigram Rank)-\u003eString-\u003e[(Language,Double)]",
          "package": "language-guess",
          "signature": "Map Language(Map Trigram Rank)-\u003eString-\u003e[(Language,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:guess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a cerealized file.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "loadData",
          "package": "language-guess",
          "signature": "FilePath -\u003e IO (Map Language (Map Trigram Rank))",
          "source": "src/Language-Guess.html#loadData",
          "type": "function"
        },
        "index": {
          "description": "Load cerealized file",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "loadData",
          "normalized": "FilePath-\u003eIO(Map Language(Map Trigram Rank))",
          "package": "language-guess",
          "partial": "Data",
          "signature": "FilePath-\u003eIO(Map Language(Map Trigram Rank))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:loadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the default cerealized file.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "loadData'",
          "package": "language-guess",
          "signature": "IO (Map Language (Map Trigram Rank))",
          "source": "src/Language-Guess.html#loadData%27",
          "type": "function"
        },
        "index": {
          "description": "Load the default cerealized file",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "loadData'",
          "package": "language-guess",
          "partial": "Data'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:loadData-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a trigram frequency map out of a string.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "parse",
          "package": "language-guess",
          "signature": "String -\u003e Map (Char, Char, Char) Frequency",
          "source": "src/Language-Guess.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Make trigram frequency map out of string",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "parse",
          "normalized": "String-\u003eMap(Char,Char,Char)Frequency",
          "package": "language-guess",
          "signature": "String-\u003eMap(Char,Char,Char)Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a set of trigram frequencies to ranks.\n Maximum of \u003ccode\u003e\u003ca\u003ethreshold\u003c/a\u003e\u003c/code\u003e, uses alphabetical sort to break ties.\n\u003c/p\u003e",
          "module": "Language.Guess",
          "name": "rank",
          "package": "language-guess",
          "signature": "Map Trigram Frequency -\u003e Map Trigram Rank",
          "source": "src/Language-Guess.html#rank",
          "type": "function"
        },
        "index": {
          "description": "Convert set of trigram frequencies to ranks Maximum of threshold uses alphabetical sort to break ties",
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "rank",
          "normalized": "Map Trigram Frequency-\u003eMap Trigram Rank",
          "package": "language-guess",
          "signature": "Map Trigram Frequency-\u003eMap Trigram Rank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Guess",
          "name": "threshold",
          "package": "language-guess",
          "signature": "Int",
          "source": "src/Language-Guess.html#threshold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Guess",
          "module": "Language.Guess",
          "name": "threshold",
          "package": "language-guess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-guess/docs/Language-Guess.html#v:threshold"
      }
    }
  ]
]