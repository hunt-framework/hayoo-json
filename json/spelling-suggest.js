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
        "word": "spelling-suggest"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead a spelling dictionary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.SpellingSuggest.Dictionary",
          "name": "Dictionary",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-Dictionary.html",
          "type": "module"
        },
        "index": {
          "description": "Read spelling dictionary",
          "hierarchy": "Text SpellingSuggest Dictionary",
          "module": "Text.SpellingSuggest.Dictionary",
          "name": "Dictionary",
          "package": "spelling-suggest",
          "partial": "Dictionary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-Dictionary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile path for default dictionary.\n\u003c/p\u003e",
          "module": "[\"Text.SpellingSuggest.Dictionary\",\"Text.SpellingSuggest\"]",
          "name": "defaultDictionary",
          "package": "spelling-suggest",
          "signature": "String",
          "source": "src/Text-SpellingSuggest-Dictionary.html#defaultDictionary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-Dictionary.html#v:defaultDictionary\",\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:defaultDictionary\"]"
        },
        "index": {
          "description": "File path for default dictionary",
          "hierarchy": "Text SpellingSuggest Dictionary",
          "module": "Text.SpellingSuggest.Dictionary",
          "name": "defaultDictionary",
          "package": "spelling-suggest",
          "partial": "Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-Dictionary.html#v:defaultDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the words out of the dictionary at the given\n path. XXX Will leak a file handle until/unless it is\n finalized, since there's no non-trivial way to arrange\n for the dictionary file to be closed explicitly.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.Dictionary",
          "name": "readDictionary",
          "package": "spelling-suggest",
          "signature": "Maybe String -\u003e IO [String]",
          "source": "src/Text-SpellingSuggest-Dictionary.html#readDictionary",
          "type": "function"
        },
        "index": {
          "description": "Read the words out of the dictionary at the given path XXX Will leak file handle until unless it is finalized since there no non-trivial way to arrange for the dictionary file to be closed explicitly",
          "hierarchy": "Text SpellingSuggest Dictionary",
          "module": "Text.SpellingSuggest.Dictionary",
          "name": "readDictionary",
          "normalized": "Maybe String-\u003eIO[String]",
          "package": "spelling-suggest",
          "partial": "Dictionary",
          "signature": "Maybe String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-Dictionary.html#v:readDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation-level interface for spelling suggestion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "LowLevel",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-LowLevel.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation-level interface for spelling suggestion",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "LowLevel",
          "package": "spelling-suggest",
          "partial": "Low Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "SpellingWordCoder",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-LowLevel.html#SpellingWordCoder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "SpellingWordCoder",
          "package": "spelling-suggest",
          "partial": "Spelling Word Coder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#t:SpellingWordCoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "SpellingWordFilter",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-LowLevel.html#SpellingWordFilter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "SpellingWordFilter",
          "package": "spelling-suggest",
          "partial": "Spelling Word Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#t:SpellingWordFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.SpellingSuggest.LowLevel\",\"Text.SpellingSuggest\"]",
          "name": "anyWordFilter",
          "package": "spelling-suggest",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Text-SpellingSuggest-LowLevel.html#anyWordFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:anyWordFilter\",\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:anyWordFilter\"]"
        },
        "index": {
          "description": "Always returns True",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "anyWordFilter",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "spelling-suggest",
          "partial": "Word Filter",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:anyWordFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe weighted edit distance between a pair of strings,\n   with weights for insertion, deletion, transposition and\n   substitution chose to try to mimic spelling errors.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "editDistance",
          "package": "spelling-suggest",
          "signature": "String -\u003e String -\u003e Int",
          "source": "src/Text-SpellingSuggest-LowLevel.html#editDistance",
          "type": "function"
        },
        "index": {
          "description": "The weighted edit distance between pair of strings with weights for insertion deletion transposition and substitution chose to try to mimic spelling errors",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "editDistance",
          "normalized": "String-\u003eString-\u003eInt",
          "package": "spelling-suggest",
          "partial": "Distance",
          "signature": "String-\u003eString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:editDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eeditDistance\u003c/a\u003e\u003c/code\u003e from the target word to the\n   given word is small enough.    \n\u003c/p\u003e",
          "module": "[\"Text.SpellingSuggest.LowLevel\",\"Text.SpellingSuggest\"]",
          "name": "nearbyWordFilter",
          "package": "spelling-suggest",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Text-SpellingSuggest-LowLevel.html#nearbyWordFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:nearbyWordFilter\",\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:nearbyWordFilter\"]"
        },
        "index": {
          "description": "Return True if the editDistance from the target word to the given word is small enough",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "nearbyWordFilter",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "spelling-suggest",
          "partial": "Word Filter",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:nearbyWordFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ca\u003efull\u003c/a\u003e phonix code; i.e., do not drop any\n encodable characters from the result.  The leading\n character of the code will be folded to uppercase.\n Non-alphabetics are not encoded. If no alphabetics are\n present, the phonix code will be \u003ca\u003e0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere appear to be many, many variants of phonix\n implemented on the web, and I'm too cheap and lazy to go\n find the original paper by Gadd (1990) that actually\n describes the original algorithm.  Thus, I am taking some\n big guesses on intent here as I implement.\n Corrections, especially those involving getting me a copy\n of the article, are welcome.\n\u003c/p\u003e\u003cp\u003eDropping the \u003ca\u003etrailing sound\u003c/a\u003e seems to be\n an integral part of Gadd's technique, but I'm not sure how\n it is supposed to be done.  I am currently compressing runs\n of vowels, and then dropping the trailing digit or vowel\n from the code.\n\u003c/p\u003e\u003cp\u003eAnother area of confusion is whether to compress strings of\n the same code, as in Soundex, or merely strings of the same\n consonant.  I have chosen the former.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "phonix",
          "package": "spelling-suggest",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Compute full phonix code i.e do not drop any encodable characters from the result The leading character of the code will be folded to uppercase Non-alphabetics are not encoded If no alphabetics are present the phonix code will be There appear to be many many variants of phonix implemented on the web and too cheap and lazy to go find the original paper by Gadd that actually describes the original algorithm Thus am taking some big guesses on intent here as implement Corrections especially those involving getting me copy of the article are welcome Dropping the trailing sound seems to be an integral part of Gadd technique but not sure how it is supposed to be done am currently compressing runs of vowels and then dropping the trailing digit or vowel from the code Another area of confusion is whether to compress strings of the same code as in Soundex or merely strings of the same consonant have chosen the former",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "phonix",
          "normalized": "String-\u003eString",
          "package": "spelling-suggest",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:phonix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ca\u003efull\u003c/a\u003e soundex code; i.e., do not drop any\n encodable characters from the result.  The leading\n character of the code will be folded to uppercase.\n Non-alphabetics are not encoded. If no alphabetics are\n present, the soundex code will be \u003ca\u003e0\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe two commonly encountered forms of soundex are Simplified\n and another known as American, Miracode, NARA or Knuth.  This\n code will calculate either---passing True gets NARA, and False\n gets Simplified.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "soundex",
          "package": "spelling-suggest",
          "signature": "Bool -\u003e String -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Compute full soundex code i.e do not drop any encodable characters from the result The leading character of the code will be folded to uppercase Non-alphabetics are not encoded If no alphabetics are present the soundex code will be The two commonly encountered forms of soundex are Simplified and another known as American Miracode NARA or Knuth This code will calculate either---passing True gets NARA and False gets Simplified",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "soundex",
          "normalized": "Bool-\u003eString-\u003eString",
          "package": "spelling-suggest",
          "signature": "Bool-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:soundex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap any given word to a constant \u003ca\u003ephonetic code\u003c/a\u003e.\n   In other words, suppress phonetic coding.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "trivialPhoneticCode",
          "package": "spelling-suggest",
          "signature": "String -\u003e String",
          "source": "src/Text-SpellingSuggest-LowLevel.html#trivialPhoneticCode",
          "type": "function"
        },
        "index": {
          "description": "Map any given word to constant phonetic code In other words suppress phonetic coding",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "trivialPhoneticCode",
          "normalized": "String-\u003eString",
          "package": "spelling-suggest",
          "partial": "Phonetic Code",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:trivialPhoneticCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore algorithm for spelling suggestion. Takes a\n prefiltering function, a phonetic coding function, a\n limit on the number of choices returned, a target word,\n and a list of candidate words. Returns an ordered list of\n suggested candidates.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "tryWord",
          "package": "spelling-suggest",
          "signature": "SpellingWordFilter -\u003e SpellingWordCoder -\u003e String -\u003e [String] -\u003e [String]",
          "source": "src/Text-SpellingSuggest-LowLevel.html#tryWord",
          "type": "function"
        },
        "index": {
          "description": "Core algorithm for spelling suggestion Takes prefiltering function phonetic coding function limit on the number of choices returned target word and list of candidate words Returns an ordered list of suggested candidates",
          "hierarchy": "Text SpellingSuggest LowLevel",
          "module": "Text.SpellingSuggest.LowLevel",
          "name": "tryWord",
          "normalized": "SpellingWordFilter-\u003eSpellingWordCoder-\u003eString-\u003e[String]-\u003e[String]",
          "package": "spelling-suggest",
          "partial": "Word",
          "signature": "SpellingWordFilter-\u003eSpellingWordCoder-\u003eString-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-LowLevel.html#v:tryWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreate and maintain a nonvolatile database of\n   phonetic codes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "PCDB",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-PCDB.html",
          "type": "module"
        },
        "index": {
          "description": "Create and maintain nonvolatile database of phonetic codes",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "PCDB",
          "package": "spelling-suggest",
          "partial": "PCDB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase connection.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "DBConnection",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest-PCDB.html#DBConnection",
          "type": "data"
        },
        "index": {
          "description": "Database connection",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "DBConnection",
          "package": "spelling-suggest",
          "partial": "DBConnection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#t:DBConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest.PCDB",
          "name": "closeDB",
          "package": "spelling-suggest",
          "signature": "DBConnection -\u003e IO ()",
          "source": "src/Text-SpellingSuggest-PCDB.html#closeDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "closeDB",
          "normalized": "DBConnection-\u003eIO()",
          "package": "spelling-suggest",
          "partial": "DB",
          "signature": "DBConnection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:closeDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and populate the phonetic codes database, given\n a list of words and a database path.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "createDB",
          "package": "spelling-suggest",
          "signature": "[String] -\u003e Maybe String -\u003e IO DBConnection",
          "source": "src/Text-SpellingSuggest-PCDB.html#createDB",
          "type": "function"
        },
        "index": {
          "description": "Create and populate the phonetic codes database given list of words and database path",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "createDB",
          "normalized": "[String]-\u003eMaybe String-\u003eIO DBConnection",
          "package": "spelling-suggest",
          "partial": "DB",
          "signature": "[String]-\u003eMaybe String-\u003eIO DBConnection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:createDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile path for default cache database.\n\u003c/p\u003e",
          "module": "[\"Text.SpellingSuggest.PCDB\",\"Text.SpellingSuggest\"]",
          "name": "defaultDB",
          "package": "spelling-suggest",
          "signature": "IO String",
          "source": "src/Text-SpellingSuggest-PCDB.html#defaultDB",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:defaultDB\",\"http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:defaultDB\"]"
        },
        "index": {
          "description": "File path for default cache database",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "defaultDB",
          "package": "spelling-suggest",
          "partial": "DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:defaultDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the words in the given coding system matching the given code.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "matchDB",
          "package": "spelling-suggest",
          "signature": "DBConnection -\u003e String -\u003e String -\u003e IO [String]",
          "source": "src/Text-SpellingSuggest-PCDB.html#matchDB",
          "type": "function"
        },
        "index": {
          "description": "Return all the words in the given coding system matching the given code",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "matchDB",
          "normalized": "DBConnection-\u003eString-\u003eString-\u003eIO[String]",
          "package": "spelling-suggest",
          "partial": "DB",
          "signature": "DBConnection-\u003eString-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:matchDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the phonetic codes database, given a database path.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "openDB",
          "package": "spelling-suggest",
          "signature": "Maybe String -\u003e IO (Maybe DBConnection)",
          "source": "src/Text-SpellingSuggest-PCDB.html#openDB",
          "type": "function"
        },
        "index": {
          "description": "Open the phonetic codes database given database path",
          "hierarchy": "Text SpellingSuggest PCDB",
          "module": "Text.SpellingSuggest.PCDB",
          "name": "openDB",
          "normalized": "Maybe String-\u003eIO(Maybe DBConnection)",
          "package": "spelling-suggest",
          "partial": "DB",
          "signature": "Maybe String-\u003eIO(Maybe DBConnection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest-PCDB.html#v:openDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplified interface for spelling suggestion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.SpellingSuggest",
          "name": "SpellingSuggest",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest.html",
          "type": "module"
        },
        "index": {
          "description": "Simplified interface for spelling suggestion",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "SpellingSuggest",
          "package": "spelling-suggest",
          "partial": "Spelling Suggest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need to know the name and coding function\n of each phonetic coder.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "PhoneticCoder",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest.html#PhoneticCoder",
          "type": "data"
        },
        "index": {
          "description": "We need to know the name and coding function of each phonetic coder",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "PhoneticCoder",
          "package": "spelling-suggest",
          "partial": "Phonetic Coder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#t:PhoneticCoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters controlling the suggestion search.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "SearchParams",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest.html#SearchParams",
          "type": "data"
        },
        "index": {
          "description": "Parameters controlling the suggestion search",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "SearchParams",
          "package": "spelling-suggest",
          "partial": "Search Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#t:SearchParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe spelling dictionary.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "SpellingDictionary",
          "package": "spelling-suggest",
          "source": "src/Text-SpellingSuggest.html#SpellingDictionary",
          "type": "data"
        },
        "index": {
          "description": "The spelling dictionary",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "SpellingDictionary",
          "package": "spelling-suggest",
          "partial": "Spelling Dictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#t:SpellingDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest",
          "name": "FlatFile",
          "package": "spelling-suggest",
          "signature": "FlatFile String",
          "source": "src/Text-SpellingSuggest.html#SpellingDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "FlatFile",
          "package": "spelling-suggest",
          "partial": "Flat File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:FlatFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest",
          "name": "SearchParams",
          "package": "spelling-suggest",
          "signature": "SearchParams",
          "source": "src/Text-SpellingSuggest.html#SearchParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "SearchParams",
          "package": "spelling-suggest",
          "partial": "Search Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:SearchParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest",
          "name": "WordList",
          "package": "spelling-suggest",
          "signature": "WordList [String]",
          "source": "src/Text-SpellingSuggest.html#SpellingDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "WordList",
          "normalized": "WordList[String]",
          "package": "spelling-suggest",
          "partial": "Word List",
          "signature": "WordList[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:WordList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.SpellingSuggest",
          "name": "closeDictionary",
          "package": "spelling-suggest",
          "signature": "SpellingDictionary -\u003e IO ()",
          "source": "src/Text-SpellingSuggest.html#closeDictionary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "closeDictionary",
          "normalized": "SpellingDictionary-\u003eIO()",
          "package": "spelling-suggest",
          "partial": "Dictionary",
          "signature": "SpellingDictionary-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:closeDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default phonetic coder.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "defaultPhoneticCoder",
          "package": "spelling-suggest",
          "signature": "PhoneticCoder",
          "source": "src/Text-SpellingSuggest.html#defaultPhoneticCoder",
          "type": "function"
        },
        "index": {
          "description": "default phonetic coder",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "defaultPhoneticCoder",
          "package": "spelling-suggest",
          "partial": "Phonetic Coder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:defaultPhoneticCoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese params work OK in practice.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "defaultSearchParams",
          "package": "spelling-suggest",
          "signature": "SearchParams",
          "source": "src/Text-SpellingSuggest.html#defaultSearchParams",
          "type": "function"
        },
        "index": {
          "description": "These params work OK in practice",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "defaultSearchParams",
          "package": "spelling-suggest",
          "partial": "Search Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:defaultSearchParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default word filter.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "defaultWordFilter",
          "package": "spelling-suggest",
          "signature": "SpellingWordFilter",
          "source": "src/Text-SpellingSuggest.html#defaultWordFilter",
          "type": "function"
        },
        "index": {
          "description": "default word filter",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "defaultWordFilter",
          "package": "spelling-suggest",
          "partial": "Word Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:defaultWordFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor performance reasons, it may sometimes be desirable\n to know what's sitting under the dictionary.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "dictionaryIsDB",
          "package": "spelling-suggest",
          "signature": "SpellingDictionary -\u003e Bool",
          "source": "src/Text-SpellingSuggest.html#dictionaryIsDB",
          "type": "function"
        },
        "index": {
          "description": "For performance reasons it may sometimes be desirable to know what sitting under the dictionary",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "dictionaryIsDB",
          "normalized": "SpellingDictionary-\u003eBool",
          "package": "spelling-suggest",
          "partial": "Is DB",
          "signature": "SpellingDictionary-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:dictionaryIsDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the coding system with the given name.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "findPhoneticCoder",
          "package": "spelling-suggest",
          "signature": "String -\u003e Maybe PhoneticCoder",
          "source": "src/Text-SpellingSuggest.html#findPhoneticCoder",
          "type": "function"
        },
        "index": {
          "description": "Return the coding system with the given name",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "findPhoneticCoder",
          "normalized": "String-\u003eMaybe PhoneticCoder",
          "package": "spelling-suggest",
          "partial": "Phonetic Coder",
          "signature": "String-\u003eMaybe PhoneticCoder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:findPhoneticCoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a connection to the given or default database. If this fails,\n open the given or default dictionary and cache the words. XXX Will\n leak a file handle if \u003ccode\u003e\u003ca\u003ereadDictionary\u003c/a\u003e\u003c/code\u003e does.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "openDictionary",
          "package": "spelling-suggest",
          "signature": "Maybe String -\u003e Maybe String -\u003e IO SpellingDictionary",
          "source": "src/Text-SpellingSuggest.html#openDictionary",
          "type": "function"
        },
        "index": {
          "description": "Make connection to the given or default database If this fails open the given or default dictionary and cache the words XXX Will leak file handle if readDictionary does",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "openDictionary",
          "normalized": "Maybe String-\u003eMaybe String-\u003eIO SpellingDictionary",
          "package": "spelling-suggest",
          "partial": "Dictionary",
          "signature": "Maybe String-\u003eMaybe String-\u003eIO SpellingDictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:openDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of choices returned.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsChoices",
          "package": "spelling-suggest",
          "signature": "Int",
          "source": "src/Text-SpellingSuggest.html#SearchParams",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of choices returned",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsChoices",
          "package": "spelling-suggest",
          "partial": "Params Choices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:searchParamsChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhonetic coder to use for matches.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsCoder",
          "package": "spelling-suggest",
          "signature": "PhoneticCoder",
          "source": "src/Text-SpellingSuggest.html#SearchParams",
          "type": "function"
        },
        "index": {
          "description": "Phonetic coder to use for matches",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsCoder",
          "package": "spelling-suggest",
          "partial": "Params Coder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:searchParamsCoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefilter to use to limit search.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsFilter",
          "package": "spelling-suggest",
          "signature": "SpellingWordFilter",
          "source": "src/Text-SpellingSuggest.html#SearchParams",
          "type": "function"
        },
        "index": {
          "description": "Prefilter to use to limit search",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "searchParamsFilter",
          "package": "spelling-suggest",
          "partial": "Params Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:searchParamsFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggest candidates in order using the given information. Requires\n a valid spelling dictionary.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "suggest",
          "package": "spelling-suggest",
          "signature": "SearchParams -\u003e SpellingDictionary -\u003e String -\u003e IO [String]",
          "source": "src/Text-SpellingSuggest.html#suggest",
          "type": "function"
        },
        "index": {
          "description": "Suggest candidates in order using the given information Requires valid spelling dictionary",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "suggest",
          "normalized": "SearchParams-\u003eSpellingDictionary-\u003eString-\u003eIO[String]",
          "package": "spelling-suggest",
          "signature": "SearchParams-\u003eSpellingDictionary-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:suggest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggest candidates from the given list in order using\n the given information.\n\u003c/p\u003e",
          "module": "Text.SpellingSuggest",
          "name": "suggestFromList",
          "package": "spelling-suggest",
          "signature": "SearchParams -\u003e [String] -\u003e String -\u003e [String]",
          "source": "src/Text-SpellingSuggest.html#suggestFromList",
          "type": "function"
        },
        "index": {
          "description": "Suggest candidates from the given list in order using the given information",
          "hierarchy": "Text SpellingSuggest",
          "module": "Text.SpellingSuggest",
          "name": "suggestFromList",
          "normalized": "SearchParams-\u003e[String]-\u003eString-\u003e[String]",
          "package": "spelling-suggest",
          "partial": "From List",
          "signature": "SearchParams-\u003e[String]-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spelling-suggest/docs/Text-SpellingSuggest.html#v:suggestFromList"
      }
    }
  ]
]