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
        "word": "blaze-html-hexpat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRenderer that supports rendering to expat forests\n\u003c/p\u003e\u003cp\u003eWarning: because this renderer doesn't directly create the output, but rather\n an XML tree representation, it is impossible to render pre-escaped text. This\n means that \u003ccode\u003epreEscapedString\u003c/code\u003e will produce the same output as \u003ccode\u003estring\u003c/code\u003e. This\n also applies to the functions \u003ccode\u003epreEscapedText\u003c/code\u003e, \u003ccode\u003epreEscapedTextValue\u003c/code\u003e...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "Hexpat",
          "package": "blaze-html-hexpat",
          "source": "src/Text-Blaze-Renderer-Hexpat.html",
          "type": "module"
        },
        "index": {
          "description": "Renderer that supports rendering to expat forests Warning because this renderer doesn directly create the output but rather an XML tree representation it is impossible to render pre-escaped text This means that preEscapedString will produce the same output as string This also applies to the functions preEscapedText preEscapedTextValue",
          "hierarchy": "Text Blaze Renderer Hexpat",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "Hexpat",
          "package": "blaze-html-hexpat",
          "partial": "Hexpat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blaze-html-hexpat/docs/Text-Blaze-Renderer-Hexpat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used as list of nodes\n\u003c/p\u003e",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "Forest",
          "package": "blaze-html-hexpat",
          "source": "src/Text-Blaze-Renderer-Hexpat.html#Forest",
          "type": "type"
        },
        "index": {
          "description": "Type used as list of nodes",
          "hierarchy": "Text Blaze Renderer Hexpat",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "Forest",
          "package": "blaze-html-hexpat",
          "partial": "Forest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/blaze-html-hexpat/docs/Text-Blaze-Renderer-Hexpat.html#t:Forest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender HTML to an expat forest\n\u003c/p\u003e",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "renderHtml",
          "package": "blaze-html-hexpat",
          "signature": "Html -\u003e Forest",
          "source": "src/Text-Blaze-Renderer-Hexpat.html#renderHtml",
          "type": "function"
        },
        "index": {
          "description": "Render HTML to an expat forest",
          "hierarchy": "Text Blaze Renderer Hexpat",
          "module": "Text.Blaze.Renderer.Hexpat",
          "name": "renderHtml",
          "normalized": "Html-\u003eForest",
          "package": "blaze-html-hexpat",
          "partial": "Html",
          "signature": "Html-\u003eForest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-html-hexpat/docs/Text-Blaze-Renderer-Hexpat.html#v:renderHtml"
      }
    }
  ]
]