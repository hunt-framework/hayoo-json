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
        "word": "blaze-html-truncate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Blaze.Truncate",
          "name": "Truncate",
          "package": "blaze-html-truncate",
          "source": "src/Text-Blaze-Truncate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Blaze Truncate",
          "module": "Text.Blaze.Truncate",
          "name": "Truncate",
          "package": "blaze-html-truncate",
          "partial": "Truncate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blaze-html-truncate/docs/Text-Blaze-Truncate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate the given HTML to a certain length, preserving tags. Returns the truncated Html or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no truncation occured.\n   Words are preserved, so if the truncated text ends within some word, that whole word is cut.\n\u003c/p\u003e",
          "module": "Text.Blaze.Truncate",
          "name": "truncateHtml",
          "package": "blaze-html-truncate",
          "signature": "Int-\u003e Markup-\u003e Maybe Markup",
          "type": "function"
        },
        "index": {
          "description": "Truncate the given HTML to certain length preserving tags Returns the truncated Html or Nothing if no truncation occured Words are preserved so if the truncated text ends within some word that whole word is cut",
          "hierarchy": "Text Blaze Truncate",
          "module": "Text.Blaze.Truncate",
          "name": "truncateHtml",
          "normalized": "Int-\u003eMarkup-\u003eMaybe Markup",
          "package": "blaze-html-truncate",
          "partial": "Html",
          "signature": "Int-\u003eMarkup-\u003eMaybe Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-html-truncate/docs/Text-Blaze-Truncate.html#v:truncateHtml"
      }
    }
  ]
]