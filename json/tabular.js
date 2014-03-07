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
        "word": "tabular"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.AsciiArt",
          "name": "AsciiArt",
          "package": "tabular",
          "source": "src/Text-Tabular-AsciiArt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "AsciiArt",
          "package": "tabular",
          "partial": "Ascii Art",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.AsciiArt",
          "name": "padLeft",
          "package": "tabular",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Text-Tabular-AsciiArt.html#padLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "padLeft",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "tabular",
          "partial": "Left",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#v:padLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor simplicity, we assume that each cell is rendered\n   on a single line\n\u003c/p\u003e",
          "module": "Text.Tabular.AsciiArt",
          "name": "render",
          "package": "tabular",
          "signature": "(rh -\u003e String) -\u003e (ch -\u003e String) -\u003e (a -\u003e String) -\u003e Table rh ch a -\u003e String",
          "source": "src/Text-Tabular-AsciiArt.html#render",
          "type": "function"
        },
        "index": {
          "description": "for simplicity we assume that each cell is rendered on single line",
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "render",
          "normalized": "(a-\u003eString)-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003eTable a b c-\u003eString",
          "package": "tabular",
          "signature": "(rh-\u003eString)-\u003e(ch-\u003eString)-\u003e(a-\u003eString)-\u003eTable rh ch a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe stop rendering on the shortest list!\n\u003c/p\u003e",
          "module": "Text.Tabular.AsciiArt",
          "name": "renderColumns",
          "package": "tabular",
          "signature": "[Int]-\u003e Header String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "We stop rendering on the shortest list",
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "renderColumns",
          "normalized": "[Int]-\u003eHeader String-\u003eString",
          "package": "tabular",
          "partial": "Columns",
          "signature": "[Int]-\u003eHeader String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#v:renderColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.AsciiArt",
          "name": "renderHLine",
          "package": "tabular",
          "signature": "[Int]-\u003e Header String-\u003e Properties-\u003e [String]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "renderHLine",
          "normalized": "[Int]-\u003eHeader String-\u003eProperties-\u003e[String]",
          "package": "tabular",
          "partial": "HLine",
          "signature": "[Int]-\u003eHeader String-\u003eProperties-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#v:renderHLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.AsciiArt",
          "name": "renderHLine'",
          "package": "tabular",
          "signature": "[Int] -\u003e Char -\u003e Header String -\u003e String",
          "source": "src/Text-Tabular-AsciiArt.html#renderHLine%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular AsciiArt",
          "module": "Text.Tabular.AsciiArt",
          "name": "renderHLine'",
          "normalized": "[Int]-\u003eChar-\u003eHeader String-\u003eString",
          "package": "tabular",
          "partial": "HLine'",
          "signature": "[Int]-\u003eChar-\u003eHeader String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-AsciiArt.html#v:renderHLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Csv",
          "name": "Csv",
          "package": "tabular",
          "source": "src/Text-Tabular-Csv.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Tabular Csv",
          "module": "Text.Tabular.Csv",
          "name": "Csv",
          "package": "tabular",
          "partial": "Csv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Csv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor simplicity, we assume that each cell is rendered\n   on a single line\n\u003c/p\u003e",
          "module": "Text.Tabular.Csv",
          "name": "render",
          "package": "tabular",
          "signature": "(rh -\u003e String) -\u003e (ch -\u003e String) -\u003e (a -\u003e String) -\u003e Table rh ch a -\u003e String",
          "source": "src/Text-Tabular-Csv.html#render",
          "type": "function"
        },
        "index": {
          "description": "for simplicity we assume that each cell is rendered on single line",
          "hierarchy": "Text Tabular Csv",
          "module": "Text.Tabular.Csv",
          "name": "render",
          "normalized": "(a-\u003eString)-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003eTable a b c-\u003eString",
          "package": "tabular",
          "signature": "(rh-\u003eString)-\u003e(ch-\u003eString)-\u003e(a-\u003eString)-\u003eTable rh ch a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Csv.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Html",
          "name": "Html",
          "package": "tabular",
          "source": "src/Text-Tabular-Html.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "Html",
          "package": "tabular",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to add a CSS string to your\n   HTML document\n\u003c/p\u003e",
          "module": "Text.Tabular.Html",
          "name": "css",
          "package": "tabular",
          "signature": "String -\u003e Html",
          "source": "src/Text-Tabular-Html.html#css",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to add CSS string to your HTML document",
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "css",
          "normalized": "String-\u003eHtml",
          "package": "tabular",
          "signature": "String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need to incorporate some CSS into your file with\n   the classes \u003ccode\u003ethinbottom\u003c/code\u003e, \u003ccode\u003ethinright\u003c/code\u003e, \u003ccode\u003ethickbottom\u003c/code\u003e\n   and \u003ccode\u003ethickright\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ecss\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Tabular.Html",
          "name": "defaultCss",
          "package": "tabular",
          "signature": "String",
          "source": "src/Text-Tabular-Html.html#defaultCss",
          "type": "function"
        },
        "index": {
          "description": "You need to incorporate some CSS into your file with the classes thinbottom thinright thickbottom and thickright See css",
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "defaultCss",
          "package": "tabular",
          "partial": "Css",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#v:defaultCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Html",
          "name": "hAttr",
          "package": "tabular",
          "signature": "Properties -\u003e [HtmlAttr]",
          "source": "src/Text-Tabular-Html.html#hAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "hAttr",
          "normalized": "Properties-\u003e[HtmlAttr]",
          "package": "tabular",
          "partial": "Attr",
          "signature": "Properties-\u003e[HtmlAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#v:hAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Html",
          "name": "render",
          "package": "tabular",
          "signature": "(rh -\u003e Html) -\u003e (ch -\u003e Html) -\u003e (a -\u003e Html) -\u003e Table rh ch a -\u003e Html",
          "source": "src/Text-Tabular-Html.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "render",
          "normalized": "(a-\u003eHtml)-\u003e(b-\u003eHtml)-\u003e(c-\u003eHtml)-\u003eTable a b c-\u003eHtml",
          "package": "tabular",
          "signature": "(rh-\u003eHtml)-\u003e(ch-\u003eHtml)-\u003e(a-\u003eHtml)-\u003eTable rh ch a-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Html",
          "name": "vAttr",
          "package": "tabular",
          "signature": "Properties -\u003e [HtmlAttr]",
          "source": "src/Text-Tabular-Html.html#vAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Html",
          "module": "Text.Tabular.Html",
          "name": "vAttr",
          "normalized": "Properties-\u003e[HtmlAttr]",
          "package": "tabular",
          "partial": "Attr",
          "signature": "Properties-\u003e[HtmlAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Html.html#v:vAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "Latex",
          "package": "tabular",
          "source": "src/Text-Tabular-Latex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "Latex",
          "package": "tabular",
          "partial": "Latex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "addTableNl",
          "package": "tabular",
          "signature": "String -\u003e String",
          "source": "src/Text-Tabular-Latex.html#addTableNl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "addTableNl",
          "normalized": "String-\u003eString",
          "package": "tabular",
          "partial": "Table Nl",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:addTableNl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "hAttr",
          "package": "tabular",
          "signature": "Properties -\u003e String",
          "source": "src/Text-Tabular-Latex.html#hAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "hAttr",
          "normalized": "Properties-\u003eString",
          "package": "tabular",
          "partial": "Attr",
          "signature": "Properties-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:hAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "hline",
          "package": "tabular",
          "signature": "String",
          "source": "src/Text-Tabular-Latex.html#hline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "hline",
          "package": "tabular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:hline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "label",
          "package": "tabular",
          "signature": "String -\u003e String",
          "source": "src/Text-Tabular-Latex.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "label",
          "normalized": "String-\u003eString",
          "package": "tabular",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "render",
          "package": "tabular",
          "signature": "(rh -\u003e String) -\u003e (ch -\u003e String) -\u003e (a -\u003e String) -\u003e Table rh ch a -\u003e String",
          "source": "src/Text-Tabular-Latex.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "render",
          "normalized": "(a-\u003eString)-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003eTable a b c-\u003eString",
          "package": "tabular",
          "signature": "(rh-\u003eString)-\u003e(ch-\u003eString)-\u003e(a-\u003eString)-\u003eTable rh ch a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "renderUsing",
          "package": "tabular",
          "signature": "[String]-\u003e (rh -\u003e String)-\u003e (ch -\u003e String)-\u003e (a -\u003e String)-\u003e Table rh ch a-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "renderUsing",
          "normalized": "[String]-\u003e(a-\u003eString)-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003eTable a b c-\u003eString",
          "package": "tabular",
          "partial": "Using",
          "signature": "[String]-\u003e(rh-\u003eString)-\u003e(ch-\u003eString)-\u003e(a-\u003eString)-\u003eTable rh ch a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:renderUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.Latex",
          "name": "vAttr",
          "package": "tabular",
          "signature": "Properties -\u003e String",
          "source": "src/Text-Tabular-Latex.html#vAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular Latex",
          "module": "Text.Tabular.Latex",
          "name": "vAttr",
          "normalized": "Properties-\u003eString",
          "package": "tabular",
          "partial": "Attr",
          "signature": "Properties-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-Latex.html#v:vAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.SimpleText",
          "name": "SimpleText",
          "package": "tabular",
          "source": "src/Text-Tabular-SimpleText.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Tabular SimpleText",
          "module": "Text.Tabular.SimpleText",
          "name": "SimpleText",
          "package": "tabular",
          "partial": "Simple Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-SimpleText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.SimpleText",
          "name": "render",
          "package": "tabular",
          "signature": "String-\u003e (rh -\u003e String)-\u003e (ch -\u003e String)-\u003e (a -\u003e String)-\u003e Table rh ch a-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular SimpleText",
          "module": "Text.Tabular.SimpleText",
          "name": "render",
          "normalized": "String-\u003e(a-\u003eString)-\u003e(b-\u003eString)-\u003e(c-\u003eString)-\u003eTable a b c-\u003eString",
          "package": "tabular",
          "signature": "String-\u003e(rh-\u003eString)-\u003e(ch-\u003eString)-\u003e(a-\u003eString)-\u003eTable rh ch a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-SimpleText.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular.SimpleText",
          "name": "renderColumns",
          "package": "tabular",
          "signature": "String -\u003e Header String -\u003e String",
          "source": "src/Text-Tabular-SimpleText.html#renderColumns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular SimpleText",
          "module": "Text.Tabular.SimpleText",
          "name": "renderColumns",
          "normalized": "String-\u003eHeader String-\u003eString",
          "package": "tabular",
          "partial": "Columns",
          "signature": "String-\u003eHeader String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular-SimpleText.html#v:renderColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote: the core types and comibnators\n   from this module are from Toxaris in a #haskell\n   conversation on 2008-08-24\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Tabular",
          "name": "Tabular",
          "package": "tabular",
          "source": "src/Text-Tabular.html",
          "type": "module"
        },
        "index": {
          "description": "Note the core types and comibnators from this module are from Toxaris in haskell conversation on",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Tabular",
          "package": "tabular",
          "partial": "Tabular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "Header",
          "package": "tabular",
          "source": "src/Text-Tabular.html#Header",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Header",
          "package": "tabular",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "Properties",
          "package": "tabular",
          "source": "src/Text-Tabular.html#Properties",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Properties",
          "package": "tabular",
          "partial": "Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#t:Properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience type for just one row (or column).\n   To be used with combinators as follows:\n\u003c/p\u003e\u003cpre\u003e example2 =\n   empty ^..^ col \"memtest 1\" [] ^|^ col \"memtest 2\"   []\n         ^||^ col \"time test \"[] ^|^ col \"time test 2\" []\n   +.+ row \"A 1\" [\"hog\", \"terrible\", \"slow\", \"slower\"]\n   +.+ row \"A 2\" [\"pig\", \"not bad\", \"fast\", \"slowest\"]\n   +----+\n       row \"B 1\" [\"good\", \"awful\", \"intolerable\", \"bearable\"]\n   +.+ row \"B 2\" [\"better\", \"no chance\", \"crawling\", \"amazing\"]\n   +.+ row \"B 3\" [\"meh\",  \"well...\", \"worst ever\", \"ok\"]\n\u003c/pre\u003e",
          "module": "Text.Tabular",
          "name": "SemiTable",
          "package": "tabular",
          "source": "src/Text-Tabular.html#SemiTable",
          "type": "data"
        },
        "index": {
          "description": "Convenience type for just one row or column To be used with combinators as follows example2 empty col memtest col memtest col time test col time test row hog terrible slow slower row pig not bad fast slowest row good awful intolerable bearable row better no chance crawling amazing row meh well worst ever ok",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "SemiTable",
          "package": "tabular",
          "partial": "Semi Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#t:SemiTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e example = Table\n   (Group SingleLine\n      [ Group NoLine [Header \"A 1\", Header \"A 2\"]\n      , Group NoLine [Header \"B 1\", Header \"B 2\", Header \"B 3\"]\n      ])\n   (Group DoubleLine\n      [ Group SingleLine [Header \"memtest 1\", Header \"memtest 2\"]\n      , Group SingleLine [Header \"time test 1\", Header \"time test 2\"]\n      ])\n   [ [\"hog\", \"terrible\", \"slow\", \"slower\"]\n   , [\"pig\", \"not bad\",  \"fast\", \"slowest\"]\n   , [\"good\", \"awful\" ,  \"intolerable\", \"bearable\"]\n   , [\"better\", \"no chance\", \"crawling\", \"amazing\"]\n   , [\"meh\",  \"well...\", \"worst ever\", \"ok\"]\n   ]\n\u003c/pre\u003e\u003cpre\u003e -- Text.Tabular.AsciiArt.render id id id example\n --\n --     || memtest 1 | memtest 2 ||  time test  | time test 2\n -- ====++===========+===========++=============+============\n -- A 1 ||       hog |  terrible ||        slow |      slower\n -- A 2 ||       pig |   not bad ||        fast |     slowest\n -- ----++-----------+-----------++-------------+------------\n -- B 1 ||      good |     awful || intolerable |    bearable\n -- B 2 ||    better | no chance ||    crawling |     amazing\n -- B 3 ||       meh |   well... ||  worst ever |          ok\n\u003c/pre\u003e",
          "module": "Text.Tabular",
          "name": "Table",
          "package": "tabular",
          "source": "src/Text-Tabular.html#Table",
          "type": "data"
        },
        "index": {
          "description": "example Table Group SingleLine Group NoLine Header Header Group NoLine Header Header Header Group DoubleLine Group SingleLine Header memtest Header memtest Group SingleLine Header time test Header time test hog terrible slow slower pig not bad fast slowest good awful intolerable bearable better no chance crawling amazing meh well worst ever ok Text.Tabular.AsciiArt.render id id id example memtest memtest time test time test hog terrible slow slower pig not bad fast slowest good awful intolerable bearable better no chance crawling amazing meh well worst ever ok",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Table",
          "package": "tabular",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebelow with a line\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(+----+)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable rh a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%2B----%2B",
          "type": "function"
        },
        "index": {
          "description": "below with line",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(+----+) +----+",
          "normalized": "Table a b c-\u003eSemiTable a c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable rh a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-43--45--45--45--45--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebelow with a double line\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(+====+)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable rh a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%2B%3D%3D%3D%3D%2B",
          "type": "function"
        },
        "index": {
          "description": "below with double line",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(+====+) +====+",
          "normalized": "Table a b c-\u003eSemiTable a c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable rh a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-43--61--61--61--61--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebelow\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(+.+)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable rh a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%2B.%2B",
          "type": "function"
        },
        "index": {
          "description": "below",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(+.+) +.+",
          "normalized": "Table a b c-\u003eSemiTable a c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable rh a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-43-.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebesides with a double line\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(^||^)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable ch a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%5E%7C%7C%5E",
          "type": "function"
        },
        "index": {
          "description": "besides with double line",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(^||^) ^||^",
          "normalized": "Table a b c-\u003eSemiTable b c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable ch a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-94--124--124--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebesides with a line\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(^|^)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable ch a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%5E%7C%5E",
          "type": "function"
        },
        "index": {
          "description": "besides with line",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(^|^) ^|^",
          "normalized": "Table a b c-\u003eSemiTable b c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable ch a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-94--124--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebesides\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "(^..^)",
          "package": "tabular",
          "signature": "Table rh ch a -\u003e SemiTable ch a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#%5E..%5E",
          "type": "function"
        },
        "index": {
          "description": "besides",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "(^..^) ^..^",
          "normalized": "Table a b c-\u003eSemiTable b c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Table rh ch a-\u003eSemiTable ch a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:-94-..-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "DoubleLine",
          "package": "tabular",
          "signature": "DoubleLine",
          "source": "src/Text-Tabular.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "DoubleLine",
          "package": "tabular",
          "partial": "Double Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:DoubleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "Group",
          "package": "tabular",
          "signature": "Group Properties [Header h]",
          "source": "src/Text-Tabular.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Group",
          "normalized": "Group Properties[Header a]",
          "package": "tabular",
          "partial": "Group",
          "signature": "Group Properties[Header h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "Header",
          "package": "tabular",
          "signature": "Header h",
          "source": "src/Text-Tabular.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Header",
          "package": "tabular",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "NoLine",
          "package": "tabular",
          "signature": "NoLine",
          "source": "src/Text-Tabular.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "NoLine",
          "package": "tabular",
          "partial": "No Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:NoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "SemiTable",
          "package": "tabular",
          "signature": "SemiTable (Header h) [a]",
          "source": "src/Text-Tabular.html#SemiTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "SemiTable",
          "normalized": "SemiTable(Header a)[b]",
          "package": "tabular",
          "partial": "Semi Table",
          "signature": "SemiTable(Header h)[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:SemiTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "SingleLine",
          "package": "tabular",
          "signature": "SingleLine",
          "source": "src/Text-Tabular.html#Properties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "SingleLine",
          "package": "tabular",
          "partial": "Single Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:SingleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "Table",
          "package": "tabular",
          "signature": "Table (Header rh) (Header ch) [[a]]",
          "source": "src/Text-Tabular.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "Table",
          "normalized": "Table(Header a)(Header b)[[c]]",
          "package": "tabular",
          "partial": "Table",
          "signature": "Table(Header rh)(Header ch)[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "below",
          "package": "tabular",
          "signature": "Properties -\u003e Table rh ch a -\u003e SemiTable rh a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#below",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "below",
          "normalized": "Properties-\u003eTable a b c-\u003eSemiTable a c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Properties-\u003eTable rh ch a-\u003eSemiTable rh a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "beside",
          "package": "tabular",
          "signature": "Properties -\u003e Table rh ch a -\u003e SemiTable ch a -\u003e Table rh ch a",
          "source": "src/Text-Tabular.html#beside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "beside",
          "normalized": "Properties-\u003eTable a b c-\u003eSemiTable b c-\u003eTable a b c",
          "package": "tabular",
          "signature": "Properties-\u003eTable rh ch a-\u003eSemiTable ch a-\u003eTable rh ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:beside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "col",
          "package": "tabular",
          "signature": "ch -\u003e [a] -\u003e SemiTable ch a",
          "source": "src/Text-Tabular.html#col",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "col",
          "normalized": "a-\u003e[b]-\u003eSemiTable a b",
          "package": "tabular",
          "signature": "ch-\u003e[a]-\u003eSemiTable ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn header\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "colH",
          "package": "tabular",
          "signature": "ch -\u003e SemiTable ch a",
          "source": "src/Text-Tabular.html#colH",
          "type": "function"
        },
        "index": {
          "description": "Column header",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "colH",
          "normalized": "a-\u003eSemiTable a b",
          "package": "tabular",
          "signature": "ch-\u003eSemiTable ch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:colH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "empty",
          "package": "tabular",
          "signature": "Table rh ch a",
          "source": "src/Text-Tabular.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "empty",
          "package": "tabular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "flattenHeader",
          "package": "tabular",
          "signature": "Header h -\u003e [Either Properties h]",
          "source": "src/Text-Tabular.html#flattenHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "flattenHeader",
          "normalized": "Header a-\u003e[Either Properties a]",
          "package": "tabular",
          "partial": "Header",
          "signature": "Header h-\u003e[Either Properties h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:flattenHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the contents of a  header\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "headerContents",
          "package": "tabular",
          "signature": "Header h -\u003e [h]",
          "source": "src/Text-Tabular.html#headerContents",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the contents of header",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "headerContents",
          "normalized": "Header a-\u003e[a]",
          "package": "tabular",
          "partial": "Contents",
          "signature": "Header h-\u003e[h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:headerContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "row",
          "package": "tabular",
          "signature": "rh -\u003e [a] -\u003e SemiTable rh a",
          "source": "src/Text-Tabular.html#row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "row",
          "normalized": "a-\u003e[b]-\u003eSemiTable a b",
          "package": "tabular",
          "signature": "rh-\u003e[a]-\u003eSemiTable rh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Tabular",
          "name": "rowH",
          "package": "tabular",
          "signature": "rh -\u003e SemiTable rh a",
          "source": "src/Text-Tabular.html#rowH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "rowH",
          "normalized": "a-\u003eSemiTable a b",
          "package": "tabular",
          "signature": "rh-\u003eSemiTable rh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:rowH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe idea is to deal with the fact that Properties\n   (e.g. borders) are not standalone cells but attributes\n   of a cell.  A border is just a CSS decoration of a\n   TD element.\n\u003c/p\u003e\u003cp\u003esquish \u003ccode\u003edecorator f h\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to every item\n   in the list represented by \u003ccode\u003eh\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eflattenHeader\u003c/a\u003e\u003c/code\u003e),\n   additionally applying \u003ccode\u003edecorator\u003c/code\u003e if the item is\n   followed by some kind of boundary\n\u003c/p\u003e\u003cp\u003eSo\n   \u003ccode\u003e\n     o o o | o o o | o o\n   \u003c/code\u003e\n   gets converted into\n   \u003ccode\u003e\n     O O X   O O X   O O\n   \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "squish",
          "package": "tabular",
          "signature": "(Properties -\u003e b -\u003e b) -\u003e (h -\u003e b) -\u003e Header h -\u003e [b]",
          "source": "src/Text-Tabular.html#squish",
          "type": "function"
        },
        "index": {
          "description": "The idea is to deal with the fact that Properties e.g borders are not standalone cells but attributes of cell border is just CSS decoration of TD element squish decorator applies to every item in the list represented by see flattenHeader additionally applying decorator if the item is followed by some kind of boundary So gets converted into",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "squish",
          "normalized": "(Properties-\u003ea-\u003ea)-\u003e(b-\u003ea)-\u003eHeader b-\u003e[a]",
          "package": "tabular",
          "signature": "(Properties-\u003eb-\u003eb)-\u003e(h-\u003eb)-\u003eHeader h-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:squish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipHeader\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee\u003c/code\u003e \u003ccode\u003ess\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e returns the same structure\n   as \u003ccode\u003eh\u003c/code\u003e except with all the text replaced by the contents\n   of \u003ccode\u003ess\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ess\u003c/code\u003e has too many cells, the excess is ignored.\n   If it has too few cells, the missing ones (at the end)\n   and replaced with the empty contents \u003ccode\u003ee\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Tabular",
          "name": "zipHeader",
          "package": "tabular",
          "signature": "h -\u003e [h] -\u003e Header a -\u003e Header (h, a)",
          "source": "src/Text-Tabular.html#zipHeader",
          "type": "function"
        },
        "index": {
          "description": "zipHeader ss returns the same structure as except with all the text replaced by the contents of ss If ss has too many cells the excess is ignored If it has too few cells the missing ones at the end and replaced with the empty contents",
          "hierarchy": "Text Tabular",
          "module": "Text.Tabular",
          "name": "zipHeader",
          "normalized": "a-\u003e[a]-\u003eHeader b-\u003eHeader(a,b)",
          "package": "tabular",
          "partial": "Header",
          "signature": "h-\u003e[h]-\u003eHeader a-\u003eHeader(h,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tabular/docs/Text-Tabular.html#v:zipHeader"
      }
    }
  ]
]