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
        "word": "Plural"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.English.Plural",
          "name": "Plural",
          "package": "Plural",
          "source": "src/Language-English-Plural.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language English Plural",
          "module": "Language.English.Plural",
          "name": "Plural",
          "package": "Plural",
          "partial": "Plural",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Plural/docs/Language-English-Plural.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet plural format.\n\u003c/p\u003e",
          "module": "Language.English.Plural",
          "name": "plural",
          "package": "Plural",
          "signature": "String -\u003e String",
          "source": "src/Language-English-Plural.html#plural",
          "type": "function"
        },
        "index": {
          "description": "Get plural format",
          "hierarchy": "Language English Plural",
          "module": "Language.English.Plural",
          "name": "plural",
          "normalized": "String-\u003eString",
          "package": "Plural",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plural/docs/Language-English-Plural.html#v:plural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe knowledge for plural process.\n\u003c/p\u003e",
          "module": "Language.English.Plural",
          "name": "pluralKnowledge",
          "package": "Plural",
          "signature": "Map String String",
          "source": "src/Language-English-Plural.html#pluralKnowledge",
          "type": "function"
        },
        "index": {
          "description": "The knowledge for plural process",
          "hierarchy": "Language English Plural",
          "module": "Language.English.Plural",
          "name": "pluralKnowledge",
          "package": "Plural",
          "partial": "Knowledge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plural/docs/Language-English-Plural.html#v:pluralKnowledge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry get plural format of word with number.\n\u003c/p\u003e",
          "module": "Language.English.Plural",
          "name": "tryPlural",
          "package": "Plural",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Language-English-Plural.html#tryPlural",
          "type": "function"
        },
        "index": {
          "description": "Try get plural format of word with number",
          "hierarchy": "Language English Plural",
          "module": "Language.English.Plural",
          "name": "tryPlural",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "Plural",
          "partial": "Plural",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plural/docs/Language-English-Plural.html#v:tryPlural"
      }
    }
  ]
]