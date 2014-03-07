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
        "word": "yesod-rst"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the functionallity to use\n   pandocs reader for reStructuredText (RST) in Yesod.\n   The code bases heavily on yesod-markdown from\n   Patrick Brisbin, which does the same thing for Markdown.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "source": "src/Yesod-RST.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the functionallity to use pandocs reader for reStructuredText RST in Yesod The code bases heavily on yesod-markdown from Patrick Brisbin which does the same thing for Markdown",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "partial": "RST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "source": "src/Yesod-RST.html#RST",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "partial": "RST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#t:RST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "signature": "RST String",
          "source": "src/Yesod-RST.html#RST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "RST",
          "package": "yesod-rst",
          "partial": "RST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:RST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses Markdown into the intermediate Pandoc type\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "parseRST",
          "package": "yesod-rst",
          "signature": "ParserState -\u003e RST -\u003e Pandoc",
          "source": "src/Yesod-RST.html#parseRST",
          "type": "function"
        },
        "index": {
          "description": "Parses Markdown into the intermediate Pandoc type",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "parseRST",
          "normalized": "ParserState-\u003eRST-\u003ePandoc",
          "package": "yesod-rst",
          "partial": "RST",
          "signature": "ParserState-\u003eRST-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:parseRST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.RST",
          "name": "rstField",
          "package": "yesod-rst",
          "signature": "Field sub master RST",
          "source": "src/Yesod-RST.html#rstField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "rstField",
          "package": "yesod-rst",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:rstField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads RST in from the specified file; returns the empty string\n   if the file does not exist\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "rstFromFile",
          "package": "yesod-rst",
          "signature": "FilePath -\u003e IO RST",
          "source": "src/Yesod-RST.html#rstFromFile",
          "type": "function"
        },
        "index": {
          "description": "Reads RST in from the specified file returns the empty string if the file does not exist",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "rstFromFile",
          "normalized": "FilePath-\u003eIO RST",
          "package": "yesod-rst",
          "partial": "From File",
          "signature": "FilePath-\u003eIO RST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:rstFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts RST to sanitizied Html\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "rstToHtml",
          "package": "yesod-rst",
          "signature": "RST -\u003e Html",
          "source": "src/Yesod-RST.html#rstToHtml",
          "type": "function"
        },
        "index": {
          "description": "Converts RST to sanitizied Html",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "rstToHtml",
          "normalized": "RST-\u003eHtml",
          "package": "yesod-rst",
          "partial": "To Html",
          "signature": "RST-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:rstToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts RST to unsanitizied Html\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "rstToHtmlTrusted",
          "package": "yesod-rst",
          "signature": "RST -\u003e Html",
          "source": "src/Yesod-RST.html#rstToHtmlTrusted",
          "type": "function"
        },
        "index": {
          "description": "Converts RST to unsanitizied Html",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "rstToHtmlTrusted",
          "normalized": "RST-\u003eHtml",
          "package": "yesod-rst",
          "partial": "To Html Trusted",
          "signature": "RST-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:rstToHtmlTrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the intermediate Pandoc type to Html. Sanitizes HTML.\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "writePandoc",
          "package": "yesod-rst",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Yesod-RST.html#writePandoc",
          "type": "function"
        },
        "index": {
          "description": "Converts the intermediate Pandoc type to Html Sanitizes HTML",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "writePandoc",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "yesod-rst",
          "partial": "Pandoc",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:writePandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips the sanitization and its required conversion to Text\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "writePandocTrusted",
          "package": "yesod-rst",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Yesod-RST.html#writePandocTrusted",
          "type": "function"
        },
        "index": {
          "description": "Skips the sanitization and its required conversion to Text",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "writePandocTrusted",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "yesod-rst",
          "partial": "Pandoc Trusted",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:writePandocTrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePandoc defaults, plus Smart, plus ParseRaw\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "yesodDefaultParserState",
          "package": "yesod-rst",
          "signature": "ParserState",
          "source": "src/Yesod-RST.html#yesodDefaultParserState",
          "type": "function"
        },
        "index": {
          "description": "Pandoc defaults plus Smart plus ParseRaw",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "yesodDefaultParserState",
          "package": "yesod-rst",
          "partial": "Default Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:yesodDefaultParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePandoc defaults, plus Html5, minus WrapText\n\u003c/p\u003e",
          "module": "Yesod.RST",
          "name": "yesodDefaultWriterOptions",
          "package": "yesod-rst",
          "signature": "WriterOptions",
          "source": "src/Yesod-RST.html#yesodDefaultWriterOptions",
          "type": "function"
        },
        "index": {
          "description": "Pandoc defaults plus Html5 minus WrapText",
          "hierarchy": "Yesod RST",
          "module": "Yesod.RST",
          "name": "yesodDefaultWriterOptions",
          "package": "yesod-rst",
          "partial": "Default Writer Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-rst/docs/Yesod-RST.html#v:yesodDefaultWriterOptions"
      }
    }
  ]
]