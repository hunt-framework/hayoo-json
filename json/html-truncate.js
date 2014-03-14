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
        "word": "html-truncate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Truncate",
          "name": "Truncate",
          "package": "html-truncate",
          "source": "src/Text-HTML-Truncate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Truncate",
          "module": "Text.HTML.Truncate",
          "name": "Truncate",
          "package": "html-truncate",
          "partial": "Truncate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/html-truncate/docs/Text-HTML-Truncate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate HTML, and ensure that tags are closed; Remove trailing empty tags\n\u003c/p\u003e",
          "module": "Text.HTML.Truncate",
          "name": "truncateHtml",
          "package": "html-truncate",
          "signature": "Int -\u003e str -\u003e str",
          "source": "src/Text-HTML-Truncate.html#truncateHtml",
          "type": "function"
        },
        "index": {
          "description": "Truncate HTML and ensure that tags are closed Remove trailing empty tags",
          "hierarchy": "Text HTML Truncate",
          "module": "Text.HTML.Truncate",
          "name": "truncateHtml",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "html-truncate",
          "partial": "Html",
          "signature": "Int-\u003estr-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-truncate/docs/Text-HTML-Truncate.html#v:truncateHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Truncate",
          "name": "truncateHtml'",
          "package": "html-truncate",
          "signature": "Int -\u003e str -\u003e (Int, str)",
          "source": "src/Text-HTML-Truncate.html#truncateHtml%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Truncate",
          "module": "Text.HTML.Truncate",
          "name": "truncateHtml'",
          "normalized": "Int-\u003ea-\u003e(Int,a)",
          "package": "html-truncate",
          "partial": "Html'",
          "signature": "Int-\u003estr-\u003e(Int,str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-truncate/docs/Text-HTML-Truncate.html#v:truncateHtml-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate to full words. If actual truncation occured, remove the last (usually cut-off) word, then remove trailing whitespace.\n | Returns the truncated string and the number of characters that remain to be truncated\n\u003c/p\u003e",
          "module": "Text.HTML.Truncate",
          "name": "truncateStringLike",
          "package": "html-truncate",
          "signature": "Int -\u003e str -\u003e (Int, str)",
          "source": "src/Text-HTML-Truncate.html#truncateStringLike",
          "type": "function"
        },
        "index": {
          "description": "Truncate to full words If actual truncation occured remove the last usually cut-off word then remove trailing whitespace Returns the truncated string and the number of characters that remain to be truncated",
          "hierarchy": "Text HTML Truncate",
          "module": "Text.HTML.Truncate",
          "name": "truncateStringLike",
          "normalized": "Int-\u003ea-\u003e(Int,a)",
          "package": "html-truncate",
          "partial": "String Like",
          "signature": "Int-\u003estr-\u003e(Int,str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-truncate/docs/Text-HTML-Truncate.html#v:truncateStringLike"
      }
    }
  ]
]