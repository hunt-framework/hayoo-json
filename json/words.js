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
        "word": "words"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes collections of words in a best guess of the current\n    language on the computer the application is running on.\n\u003c/p\u003e\u003cp\u003eFor UNIX-based systems, including MacOS, this list is taken either\n    \u003ccode\u003e\u003cem\u003eusr\u003c/em\u003eshare\u003cem\u003edict\u003c/em\u003ewords\u003c/code\u003e or \u003ccode\u003e\u003cem\u003eusr\u003c/em\u003edict/words\u003c/code\u003e, whichever is the first\n    that exists.  If neither path exists, then the list is taken from a\n    built-in collection of English language words.\n\u003c/p\u003e\u003cp\u003eBetter localization would be nice for platforms that do not have words\n    files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Words",
          "name": "Words",
          "package": "words",
          "source": "src/Language-Words.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes collections of words in best guess of the current language on the computer the application is running on For UNIX-based systems including MacOS this list is taken either usr share dict words or usr dict words whichever is the first that exists If neither path exists then the list is taken from built-in collection of English language words Better localization would be nice for platforms that do not have words files",
          "hierarchy": "Language Words",
          "module": "Language.Words",
          "name": "Words",
          "package": "words",
          "partial": "Words",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/words/docs/Language-Words.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Words",
          "name": "allStringWords",
          "package": "words",
          "signature": "[String]",
          "source": "src/Language-Words.html#allStringWords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Words",
          "module": "Language.Words",
          "name": "allStringWords",
          "normalized": "[String]",
          "package": "words",
          "partial": "String Words",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/words/docs/Language-Words.html#v:allStringWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Words",
          "name": "allWords",
          "package": "words",
          "signature": "[Text]",
          "source": "src/Language-Words.html#allWords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Words",
          "module": "Language.Words",
          "name": "allWords",
          "normalized": "[Text]",
          "package": "words",
          "partial": "Words",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/words/docs/Language-Words.html#v:allWords"
      }
    }
  ]
]