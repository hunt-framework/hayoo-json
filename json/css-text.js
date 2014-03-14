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
        "word": "css-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse CSS with parseNestedBlocks and render it with renderNestedBlock\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSS.Parse",
          "name": "Parse",
          "package": "css-text",
          "source": "src/Text-CSS-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Parse CSS with parseNestedBlocks and render it with renderNestedBlock",
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "Parse",
          "package": "css-text",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "NestedBlock",
          "package": "css-text",
          "source": "src/Text-CSS-Parse.html#NestedBlock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "NestedBlock",
          "package": "css-text",
          "partial": "Nested Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#t:NestedBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "LeafBlock",
          "package": "css-text",
          "signature": "LeafBlock CssBlock",
          "source": "src/Text-CSS-Parse.html#NestedBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "LeafBlock",
          "package": "css-text",
          "partial": "Leaf Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:LeafBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor example a media query\n\u003c/p\u003e",
          "module": "Text.CSS.Parse",
          "name": "NestedBlock",
          "package": "css-text",
          "signature": "NestedBlock Text [NestedBlock]",
          "source": "src/Text-CSS-Parse.html#NestedBlock",
          "type": "function"
        },
        "index": {
          "description": "for example media query",
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "NestedBlock",
          "normalized": "NestedBlock Text[NestedBlock]",
          "package": "css-text",
          "partial": "Nested Block",
          "signature": "NestedBlock Text[NestedBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:NestedBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "attrParser",
          "package": "css-text",
          "signature": "Parser (Text, Text)",
          "source": "src/Text-CSS-Parse.html#attrParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "attrParser",
          "normalized": "Parser(Text,Text)",
          "package": "css-text",
          "partial": "Parser",
          "signature": "Parser(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:attrParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "attrsParser",
          "package": "css-text",
          "signature": "Parser [(Text, Text)]",
          "source": "src/Text-CSS-Parse.html#attrsParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "attrsParser",
          "normalized": "Parser[(Text,Text)]",
          "package": "css-text",
          "partial": "Parser",
          "signature": "Parser[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:attrsParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "blockParser",
          "package": "css-text",
          "signature": "Parser (Text, [(Text, Text)])",
          "source": "src/Text-CSS-Parse.html#blockParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "blockParser",
          "normalized": "Parser(Text,[(Text,Text)])",
          "package": "css-text",
          "partial": "Parser",
          "signature": "Parser(Text,[(Text,Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:blockParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "blocksParser",
          "package": "css-text",
          "signature": "Parser [(Text, [(Text, Text)])]",
          "source": "src/Text-CSS-Parse.html#blocksParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "blocksParser",
          "normalized": "Parser[(Text,[(Text,Text)])]",
          "package": "css-text",
          "partial": "Parser",
          "signature": "Parser[(Text,[(Text,Text)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:blocksParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "parseAttr",
          "package": "css-text",
          "signature": "Text -\u003e Either String (Text, Text)",
          "source": "src/Text-CSS-Parse.html#parseAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "parseAttr",
          "normalized": "Text-\u003eEither String(Text,Text)",
          "package": "css-text",
          "partial": "Attr",
          "signature": "Text-\u003eEither String(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:parseAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "parseAttrs",
          "package": "css-text",
          "signature": "Text -\u003e Either String [(Text, Text)]",
          "source": "src/Text-CSS-Parse.html#parseAttrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "parseAttrs",
          "normalized": "Text-\u003eEither String[(Text,Text)]",
          "package": "css-text",
          "partial": "Attrs",
          "signature": "Text-\u003eEither String[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:parseAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parse",
          "name": "parseBlock",
          "package": "css-text",
          "signature": "Text -\u003e Either String CssBlock",
          "source": "src/Text-CSS-Parse.html#parseBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "parseBlock",
          "normalized": "Text-\u003eEither String CssBlock",
          "package": "css-text",
          "partial": "Block",
          "signature": "Text-\u003eEither String CssBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:parseBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe original parser of basic CSS, but throws out media queries\n\u003c/p\u003e",
          "module": "Text.CSS.Parse",
          "name": "parseBlocks",
          "package": "css-text",
          "signature": "Text -\u003e Either String [CssBlock]",
          "source": "src/Text-CSS-Parse.html#parseBlocks",
          "type": "function"
        },
        "index": {
          "description": "The original parser of basic CSS but throws out media queries",
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "parseBlocks",
          "normalized": "Text-\u003eEither String[CssBlock]",
          "package": "css-text",
          "partial": "Blocks",
          "signature": "Text-\u003eEither String[CssBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:parseBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preferred parser, will capture media queries\n\u003c/p\u003e",
          "module": "Text.CSS.Parse",
          "name": "parseNestedBlocks",
          "package": "css-text",
          "signature": "Text -\u003e Either String [NestedBlock]",
          "source": "src/Text-CSS-Parse.html#parseNestedBlocks",
          "type": "function"
        },
        "index": {
          "description": "The preferred parser will capture media queries",
          "hierarchy": "Text CSS Parse",
          "module": "Text.CSS.Parse",
          "name": "parseNestedBlocks",
          "normalized": "Text-\u003eEither String[NestedBlock]",
          "package": "css-text",
          "partial": "Nested Blocks",
          "signature": "Text-\u003eEither String[NestedBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Parse.html#v:parseNestedBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrender CSS with renderNestedBlocks\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.CSS.Render",
          "name": "Render",
          "package": "css-text",
          "source": "src/Text-CSS-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Prender CSS with renderNestedBlocks",
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "Render",
          "package": "css-text",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Render",
          "name": "renderAttr",
          "package": "css-text",
          "signature": "(Text, Text) -\u003e Builder",
          "source": "src/Text-CSS-Render.html#renderAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "renderAttr",
          "normalized": "(Text,Text)-\u003eBuilder",
          "package": "css-text",
          "partial": "Attr",
          "signature": "(Text,Text)-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#v:renderAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Render",
          "name": "renderAttrs",
          "package": "css-text",
          "signature": "[(Text, Text)] -\u003e Builder",
          "source": "src/Text-CSS-Render.html#renderAttrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "renderAttrs",
          "normalized": "[(Text,Text)]-\u003eBuilder",
          "package": "css-text",
          "partial": "Attrs",
          "signature": "[(Text,Text)]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#v:renderAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Render",
          "name": "renderBlock",
          "package": "css-text",
          "signature": "(Text, [(Text, Text)]) -\u003e Builder",
          "source": "src/Text-CSS-Render.html#renderBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "renderBlock",
          "normalized": "(Text,[(Text,Text)])-\u003eBuilder",
          "package": "css-text",
          "partial": "Block",
          "signature": "(Text,[(Text,Text)])-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#v:renderBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Render",
          "name": "renderBlocks",
          "package": "css-text",
          "signature": "[(Text, [(Text, Text)])] -\u003e Builder",
          "source": "src/Text-CSS-Render.html#renderBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "renderBlocks",
          "normalized": "[(Text,[(Text,Text)])]-\u003eBuilder",
          "package": "css-text",
          "partial": "Blocks",
          "signature": "[(Text,[(Text,Text)])]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#v:renderBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Render",
          "name": "renderNestedBlocks",
          "package": "css-text",
          "signature": "[NestedBlock] -\u003e Builder",
          "source": "src/Text-CSS-Render.html#renderNestedBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Render",
          "module": "Text.CSS.Render",
          "name": "renderNestedBlocks",
          "normalized": "[NestedBlock]-\u003eBuilder",
          "package": "css-text",
          "partial": "Nested Blocks",
          "signature": "[NestedBlock]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/css-text/docs/Text-CSS-Render.html#v:renderNestedBlocks"
      }
    }
  ]
]