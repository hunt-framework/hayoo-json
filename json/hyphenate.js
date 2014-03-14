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
        "word": "hyphenate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyphenate a string\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Hyphenate",
          "name": "Hyphenate",
          "package": "hyphenate",
          "source": "src/Text-Hyphenate.html",
          "type": "module"
        },
        "index": {
          "description": "Hyphenate string",
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "Hyphenate",
          "package": "hyphenate",
          "partial": "Hyphenate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenation databases\n\u003c/p\u003e",
          "module": "Text.Hyphenate",
          "name": "HyphenationDatabase",
          "package": "hyphenate",
          "source": "src/Text-Hyphenate-LowLevel.html#HyphenationDatabase",
          "type": "data"
        },
        "index": {
          "description": "Hyphenation databases",
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "HyphenationDatabase",
          "package": "hyphenate",
          "partial": "Hyphenation Database",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#t:HyphenationDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenate",
          "name": "MapString",
          "package": "hyphenate",
          "source": "src/Text-Hyphenate-Trie.html#MapString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "MapString",
          "package": "hyphenate",
          "partial": "Map String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#t:MapString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenate",
          "name": "CustomLanguage",
          "package": "hyphenate",
          "signature": "CustomLanguage (MapString [Int]) (MapString [Int])",
          "source": "src/Text-Hyphenate-LowLevel.html#HyphenationDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "CustomLanguage",
          "normalized": "CustomLanguage(MapString[Int])(MapString[Int])",
          "package": "hyphenate",
          "partial": "Custom Language",
          "signature": "CustomLanguage(MapString[Int])(MapString[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#v:CustomLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenate",
          "name": "English",
          "package": "hyphenate",
          "signature": "English (Maybe (MapString [Int]))",
          "source": "src/Text-Hyphenate-LowLevel.html#HyphenationDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "English",
          "normalized": "English(Maybe(MapString[Int]))",
          "package": "hyphenate",
          "partial": "English",
          "signature": "English(Maybe(MapString[Int]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#v:English"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyphenate a string\n\u003c/p\u003e",
          "module": "Text.Hyphenate",
          "name": "hyphenate",
          "package": "hyphenate",
          "signature": "HyphenationDatabase-\u003e String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Hyphenate string",
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "hyphenate",
          "normalized": "HyphenationDatabase-\u003eString-\u003e[String]",
          "package": "hyphenate",
          "signature": "HyphenationDatabase-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#v:hyphenate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a custom language for hyphenation\n\u003c/p\u003e",
          "module": "Text.Hyphenate",
          "name": "mkCustomLanguage",
          "package": "hyphenate",
          "signature": "[String]-\u003e [String]-\u003e HyphenationDatabase",
          "type": "function"
        },
        "index": {
          "description": "Create custom language for hyphenation",
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "mkCustomLanguage",
          "normalized": "[String]-\u003e[String]-\u003eHyphenationDatabase",
          "package": "hyphenate",
          "partial": "Custom Language",
          "signature": "[String]-\u003e[String]-\u003eHyphenationDatabase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#v:mkCustomLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hyphenate",
          "name": "mkExceptions",
          "package": "hyphenate",
          "signature": "[String] -\u003e MapString [Int]",
          "source": "src/Text-Hyphenate-LowLevel.html#mkExceptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Hyphenate",
          "module": "Text.Hyphenate",
          "name": "mkExceptions",
          "normalized": "[String]-\u003eMapString[Int]",
          "package": "hyphenate",
          "partial": "Exceptions",
          "signature": "[String]-\u003eMapString[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyphenate/docs/Text-Hyphenate.html#v:mkExceptions"
      }
    }
  ]
]