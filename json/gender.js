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
        "word": "gender"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "Gender",
          "package": "gender",
          "source": "src/Language-Gender.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "Gender",
          "package": "gender",
          "partial": "Gender",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "Gender",
          "package": "gender",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "Gender",
          "package": "gender",
          "partial": "Gender",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#t:Gender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "Female",
          "package": "gender",
          "signature": "Female",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "Female",
          "package": "gender",
          "partial": "Female",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:Female"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "Male",
          "package": "gender",
          "signature": "Male",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "Male",
          "package": "gender",
          "partial": "Male",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:Male"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "MostlyFemale",
          "package": "gender",
          "signature": "MostlyFemale",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "MostlyFemale",
          "package": "gender",
          "partial": "Mostly Female",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:MostlyFemale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "MostlyMale",
          "package": "gender",
          "signature": "MostlyMale",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "MostlyMale",
          "package": "gender",
          "partial": "Mostly Male",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:MostlyMale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Gender",
          "name": "Unisex",
          "package": "gender",
          "signature": "Unisex",
          "source": "src/Language-Gender-Types.html#Gender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "Unisex",
          "package": "gender",
          "partial": "Unisex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:Unisex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads the default dictionary file from disk\n\u003c/p\u003e",
          "module": "Language.Gender",
          "name": "defaultDictionary",
          "package": "gender",
          "signature": "IO [(Text, Gender)]",
          "source": "src/Language-Gender.html#defaultDictionary",
          "type": "function"
        },
        "index": {
          "description": "Loads the default dictionary file from disk",
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "defaultDictionary",
          "normalized": "IO[(Text,Gender)]",
          "package": "gender",
          "partial": "Dictionary",
          "signature": "IO[(Text,Gender)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:defaultDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault dictionary file: $datadir/nam_dict.txt\n\u003c/p\u003e",
          "module": "Language.Gender",
          "name": "defaultDictionaryFile",
          "package": "gender",
          "signature": "IO FilePath",
          "source": "src/Language-Gender.html#defaultDictionaryFile",
          "type": "function"
        },
        "index": {
          "description": "Default dictionary file datadir nam dict.txt",
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "defaultDictionaryFile",
          "package": "gender",
          "partial": "Dictionary File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:defaultDictionaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses Text with the nam_dict format into a lookup table.\n\u003c/p\u003e",
          "module": "Language.Gender",
          "name": "parseDictionary",
          "package": "gender",
          "signature": "Text -\u003e [(Text, Gender)]",
          "source": "src/Language-Gender-Dictionary.html#parseDictionary",
          "type": "function"
        },
        "index": {
          "description": "Parses Text with the nam dict format into lookup table",
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "parseDictionary",
          "normalized": "Text-\u003e[(Text,Gender)]",
          "package": "gender",
          "partial": "Dictionary",
          "signature": "Text-\u003e[(Text,Gender)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:parseDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns parseDictionary from a FilePath\n\u003c/p\u003e",
          "module": "Language.Gender",
          "name": "parseDictionaryFile",
          "package": "gender",
          "signature": "FilePath -\u003e IO [(Text, Gender)]",
          "source": "src/Language-Gender.html#parseDictionaryFile",
          "type": "function"
        },
        "index": {
          "description": "Runs parseDictionary from FilePath",
          "hierarchy": "Language Gender",
          "module": "Language.Gender",
          "name": "parseDictionaryFile",
          "normalized": "FilePath-\u003eIO[(Text,Gender)]",
          "package": "gender",
          "partial": "Dictionary File",
          "signature": "FilePath-\u003eIO[(Text,Gender)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gender/docs/Language-Gender.html#v:parseDictionaryFile"
      }
    }
  ]
]