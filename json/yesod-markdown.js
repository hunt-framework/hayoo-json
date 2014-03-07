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
        "word": "yesod-markdown"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRewrite/simplification of yesod-markdown written by ajdunlap.\n\u003c/p\u003e\u003cp\u003eForked from \u003ca\u003ehttps://github.com/ajdunlap/yesod-markdown\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "source": "src/Yesod-Markdown.html",
          "type": "module"
        },
        "index": {
          "description": "Rewrite simplification of yesod-markdown written by ajdunlap Forked from https github.com ajdunlap yesod-markdown",
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "partial": "Markdown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "source": "src/Yesod-Markdown.html#Markdown",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "partial": "Markdown",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#t:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "signature": "Markdown",
          "source": "src/Yesod-Markdown.html#Markdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "Markdown",
          "package": "yesod-markdown",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "markdownField",
          "package": "yesod-markdown",
          "signature": "Field m Markdown",
          "source": "src/Yesod-Markdown.html#markdownField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "markdownField",
          "package": "yesod-markdown",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:markdownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the empty string if the file does not exist\n\u003c/p\u003e",
          "module": "Yesod.Markdown",
          "name": "markdownFromFile",
          "package": "yesod-markdown",
          "signature": "FilePath -\u003e IO Markdown",
          "source": "src/Yesod-Markdown.html#markdownFromFile",
          "type": "function"
        },
        "index": {
          "description": "Returns the empty string if the file does not exist",
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "markdownFromFile",
          "normalized": "FilePath-\u003eIO Markdown",
          "package": "yesod-markdown",
          "partial": "From File",
          "signature": "FilePath-\u003eIO Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:markdownFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "markdownToHtml",
          "package": "yesod-markdown",
          "signature": "Markdown -\u003e Html",
          "source": "src/Yesod-Markdown.html#markdownToHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "markdownToHtml",
          "normalized": "Markdown-\u003eHtml",
          "package": "yesod-markdown",
          "partial": "To Html",
          "signature": "Markdown-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:markdownToHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo HTML sanitization\n\u003c/p\u003e",
          "module": "Yesod.Markdown",
          "name": "markdownToHtmlTrusted",
          "package": "yesod-markdown",
          "signature": "Markdown -\u003e Html",
          "source": "src/Yesod-Markdown.html#markdownToHtmlTrusted",
          "type": "function"
        },
        "index": {
          "description": "No HTML sanitization",
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "markdownToHtmlTrusted",
          "normalized": "Markdown-\u003eHtml",
          "package": "yesod-markdown",
          "partial": "To Html Trusted",
          "signature": "Markdown-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:markdownToHtmlTrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "parseMarkdown",
          "package": "yesod-markdown",
          "signature": "ReaderOptions -\u003e Markdown -\u003e Pandoc",
          "source": "src/Yesod-Markdown.html#parseMarkdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "parseMarkdown",
          "normalized": "ReaderOptions-\u003eMarkdown-\u003ePandoc",
          "package": "yesod-markdown",
          "partial": "Markdown",
          "signature": "ReaderOptions-\u003eMarkdown-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:parseMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "unMarkdown",
          "package": "yesod-markdown",
          "signature": "Text",
          "source": "src/Yesod-Markdown.html#Markdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "unMarkdown",
          "package": "yesod-markdown",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:unMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "writePandoc",
          "package": "yesod-markdown",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Yesod-Markdown.html#writePandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "writePandoc",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "yesod-markdown",
          "partial": "Pandoc",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:writePandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Markdown",
          "name": "writePandocTrusted",
          "package": "yesod-markdown",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Yesod-Markdown.html#writePandocTrusted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "writePandocTrusted",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "yesod-markdown",
          "partial": "Pandoc Trusted",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:writePandocTrusted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults plus Smart and ParseRaw\n\u003c/p\u003e",
          "module": "Yesod.Markdown",
          "name": "yesodDefaultReaderOptions",
          "package": "yesod-markdown",
          "signature": "ReaderOptions",
          "source": "src/Yesod-Markdown.html#yesodDefaultReaderOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults plus Smart and ParseRaw",
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "yesodDefaultReaderOptions",
          "package": "yesod-markdown",
          "partial": "Default Reader Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:yesodDefaultReaderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults plus Html5, minus WrapText\n\u003c/p\u003e",
          "module": "Yesod.Markdown",
          "name": "yesodDefaultWriterOptions",
          "package": "yesod-markdown",
          "signature": "WriterOptions",
          "source": "src/Yesod-Markdown.html#yesodDefaultWriterOptions",
          "type": "function"
        },
        "index": {
          "description": "Defaults plus Html5 minus WrapText",
          "hierarchy": "Yesod Markdown",
          "module": "Yesod.Markdown",
          "name": "yesodDefaultWriterOptions",
          "package": "yesod-markdown",
          "partial": "Default Writer Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-markdown/docs/Yesod-Markdown.html#v:yesodDefaultWriterOptions"
      }
    }
  ]
]