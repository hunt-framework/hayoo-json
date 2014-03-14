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
        "word": "clevercss"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain parsing and evaluation module for CleverCSS.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSS.CleverCSS",
          "name": "CleverCSS",
          "package": "clevercss",
          "source": "src/Text-CSS-CleverCSS.html",
          "type": "module"
        },
        "index": {
          "description": "Main parsing and evaluation module for CleverCSS",
          "hierarchy": "Text CSS CleverCSS",
          "module": "Text.CSS.CleverCSS",
          "name": "CleverCSS",
          "package": "clevercss",
          "partial": "Clever CSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/clevercss/docs/Text-CSS-CleverCSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert CleverCSS source to CSS.\n   For documentation of available syntax and command line use, see\n   \u003ca\u003ehttp://sandbox.pocoo.org/clevercss-hs/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.CSS.CleverCSS",
          "name": "cleverCSSConvert",
          "package": "clevercss",
          "signature": "SourceName-\u003e String-\u003e [(String, String)]-\u003e IO (Either String String)",
          "type": "function"
        },
        "index": {
          "description": "Convert CleverCSS source to CSS For documentation of available syntax and command line use see http sandbox.pocoo.org clevercss-hs",
          "hierarchy": "Text CSS CleverCSS",
          "module": "Text.CSS.CleverCSS",
          "name": "cleverCSSConvert",
          "normalized": "SourceName-\u003eString-\u003e[(String,String)]-\u003eIO(Either String String)",
          "package": "clevercss",
          "partial": "CSSConvert",
          "signature": "SourceName-\u003eString-\u003e[(String,String)]-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/clevercss/docs/Text-CSS-CleverCSS.html#v:cleverCSSConvert"
      }
    }
  ]
]