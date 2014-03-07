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
        "word": "discount"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a thin wrapper around the discount\n Markdown-processing library, by David Parsons\n \u003ca\u003ehttp://www.pell.portland.or.us/~orc/Code/discount/\u003c/a\u003e. It exposes\n options that can be passed to the parser, as well as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e interfaces to the parser itself.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Discount",
          "name": "Discount",
          "package": "discount",
          "source": "src/Text-Discount.html",
          "type": "module"
        },
        "index": {
          "description": "This module is thin wrapper around the discount Markdown-processing library by David Parsons http www.pell.portland.or.us orc Code discount It exposes options that can be passed to the parser as well as ByteString and Text interfaces to the parser itself",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "Discount",
          "package": "discount",
          "partial": "Discount",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option flag to be passed to the discount parser.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "DiscountOption",
          "package": "discount",
          "source": "src/Text-Discount-Internal.html#DiscountOption",
          "type": "data"
        },
        "index": {
          "description": "An option flag to be passed to the discount parser",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "DiscountOption",
          "package": "discount",
          "partial": "Discount Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#t:DiscountOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables all discount features not in the original Markdown spec:\n SmartyPants, relaxed emphasis, pseudo-protocols, strikethrough,\n headers, alphabetical lists, definition lists, superscripts, and\n tables.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "compatOptions",
          "package": "discount",
          "signature": "[DiscountOption]",
          "source": "src/Text-Discount.html#compatOptions",
          "type": "function"
        },
        "index": {
          "description": "Disables all discount features not in the original Markdown spec SmartyPants relaxed emphasis pseudo-protocols strikethrough headers alphabetical lists definition lists superscripts and tables",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "compatOptions",
          "normalized": "[DiscountOption]",
          "package": "discount",
          "partial": "Options",
          "signature": "[DiscountOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:compatOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable Markdown Extra style footnotes. See\n \u003ca\u003ehttp://michelf.com/projects/php-markdown/extra/#footnotes\u003c/a\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e Here's some text with a footnote.[^1]\n\n [^1]: Here's a footnote with some text.\n\u003c/pre\u003e\u003cp\u003eFootnotes have backlinks to their parent.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "footnotes",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#footnotes",
          "type": "function"
        },
        "index": {
          "description": "Enable Markdown Extra style footnotes See http michelf.com projects php-markdown extra footnotes For example Here some text with footnote Here footnote with some text Footnotes have backlinks to their parent",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "footnotes",
          "package": "discount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:footnotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables alphanumeric-ordered lists.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noAlphaLists",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noAlphaLists",
          "type": "function"
        },
        "index": {
          "description": "Disables alphanumeric-ordered lists",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noAlphaLists",
          "package": "discount",
          "partial": "Alpha Lists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noAlphaLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables definition lists.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noDefinitionLists",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noDefinitionLists",
          "type": "function"
        },
        "index": {
          "description": "Disables definition lists",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noDefinitionLists",
          "package": "discount",
          "partial": "Definition Lists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noDefinitionLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables div-style quotes. Div-style quotes translates\n\u003c/p\u003e\u003cpre\u003e \u003e %class%\n \u003e foo\n\u003c/pre\u003e\u003cp\u003eas \u003ccode\u003e\u003cdiv class=\"class\"\u003efoo\u003c/div\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noDivQuotes",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noDivQuotes",
          "type": "function"
        },
        "index": {
          "description": "Disables div-style quotes Div-style quotes translates class foo as div class class foo div",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noDivQuotes",
          "package": "discount",
          "partial": "Div Quotes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noDivQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables Pandoc-style header processing. This does not disable\n headers like\n\u003c/p\u003e\u003cpre\u003e This\n ====\n # or this\n\u003c/pre\u003e",
          "module": "Text.Discount",
          "name": "noHeaders",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noHeaders",
          "type": "function"
        },
        "index": {
          "description": "Disables Pandoc-style header processing This does not disable headers like This or this",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noHeaders",
          "package": "discount",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables raw HTML. Note that this will produce invalid HTML due\n to a bug in discount!\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noHtml",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noHtml",
          "type": "function"
        },
        "index": {
          "description": "Disables raw HTML Note that this will produce invalid HTML due to bug in discount",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noHtml",
          "package": "discount",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables image processing. Note that this will produce invalid\n HTML due to a bug in discount!\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noImages",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noImages",
          "type": "function"
        },
        "index": {
          "description": "Disables image processing Note that this will produce invalid HTML due to bug in discount",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noImages",
          "package": "discount",
          "partial": "Images",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables processing of links. Note that this will produce invalid\n HTML due to a bug in discount!\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noLinks",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noLinks",
          "type": "function"
        },
        "index": {
          "description": "Disables processing of links Note that this will produce invalid HTML due to bug in discount",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noLinks",
          "package": "discount",
          "partial": "Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable pseudoprotocol wrapping. If this is not enabled, then\n links of the form \u003ccode\u003e[foo bar](class:glarch)\u003c/code\u003e will be replaced by\n \u003ccode\u003e\u003cspan class=\"glarch\"\u003efoo bar\u003c/span\u003e\u003c/code\u003e, and similarly for\n \u003ccode\u003eabbr:desc\u003c/code\u003e (uses \u003ccode\u003e\u003cabbr title=\"desc\"\u003e\u003c/code\u003e) and \u003ccode\u003eid:name\u003c/code\u003e (uses \u003ccode\u003e\u003ca\n id=\"name\"\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noPseudoProtocols",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noPseudoProtocols",
          "type": "function"
        },
        "index": {
          "description": "Disable pseudoprotocol wrapping If this is not enabled then links of the form foo bar class glarch will be replaced by span class glarch foo bar span and similarly for abbr desc uses abbr title desc and id name uses id name",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noPseudoProtocols",
          "package": "discount",
          "partial": "Pseudo Protocols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noPseudoProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables relaxed emphasis, allowing underscores to indicate\n emphasis in the middle of a word. With relaxed emphasis on\n (i.e. without this option) \u003ccode\u003efoo_bar_\u003c/code\u003e will parse as\n \u003ccode\u003efoo_bar_\u003c/code\u003e. With it off, it parses as \u003ccode\u003efoo\u003cem\u003ebar\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noRelaxedEmphasis",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noRelaxedEmphasis",
          "type": "function"
        },
        "index": {
          "description": "Disables relaxed emphasis allowing underscores to indicate emphasis in the middle of word With relaxed emphasis on i.e without this option foo bar will parse as foo bar With it off it parses as foo em bar em",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noRelaxedEmphasis",
          "package": "discount",
          "partial": "Relaxed Emphasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noRelaxedEmphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables SmartyPants processing. SmartyPants replaces quotes with\n curly quotes (except in code blocks), replaces \u003ccode\u003e(tm)\u003c/code\u003e, \u003ccode\u003e(r)\u003c/code\u003e, and\n \u003ccode\u003e(c)\u003c/code\u003e with the relevant symbols, and replaces ellipses and\n em/en-dashes with the appropriate symbols.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noSmartyPants",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noSmartyPants",
          "type": "function"
        },
        "index": {
          "description": "Disables SmartyPants processing SmartyPants replaces quotes with curly quotes except in code blocks replaces tm and with the relevant symbols and replaces ellipses and em en-dashes with the appropriate symbols",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noSmartyPants",
          "package": "discount",
          "partial": "Smarty Pants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noSmartyPants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables \u003ccode\u003e~~strikethrough~~\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noStrikethrough",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noStrikethrough",
          "type": "function"
        },
        "index": {
          "description": "Disables strikethrough",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noStrikethrough",
          "package": "discount",
          "partial": "Strikethrough",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noStrikethrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables converstion of \u003ccode\u003eA^B\u003c/code\u003e into \u003ccode\u003eA\u003csup\u003eB\u003c/sup\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noSuperscripts",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noSuperscripts",
          "type": "function"
        },
        "index": {
          "description": "Disables converstion of into sup sup",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noSuperscripts",
          "package": "discount",
          "partial": "Superscripts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noSuperscripts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables PHP Markdown Extra-style tables. See the documentation\n on PHP Markdown Extra at\n \u003ca\u003ehttp://michelf.com/projects/php-markdown/extra/#table\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "noTables",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#noTables",
          "type": "function"
        },
        "index": {
          "description": "Disables PHP Markdown Extra-style tables See the documentation on PHP Markdown Extra at http michelf.com projects php-markdown extra table",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "noTables",
          "package": "discount",
          "partial": "Tables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:noTables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the ByteString String input into well-formed HTML\n output. Note that an empty set of flags will not enable \u003ca\u003estrict\u003c/a\u003e\n markdown behavior; instead, use \u003ccode\u003e\u003ca\u003ecompatOptions\u003c/a\u003e\u003c/code\u003e, which will cause\n discount to pass the markdown tests.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "parseMarkdown",
          "package": "discount",
          "signature": "[DiscountOption] -\u003e ByteString -\u003e ByteString",
          "source": "src/Text-Discount.html#parseMarkdown",
          "type": "function"
        },
        "index": {
          "description": "Convert the ByteString String input into well-formed HTML output Note that an empty set of flags will not enable strict markdown behavior instead use compatOptions which will cause discount to pass the markdown tests",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "parseMarkdown",
          "normalized": "[DiscountOption]-\u003eByteString-\u003eByteString",
          "package": "discount",
          "partial": "Markdown",
          "signature": "[DiscountOption]-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:parseMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eparseMarkdown\u003c/a\u003e\u003c/code\u003e, but taking \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values instead. Uses UTF-8 internally.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "parseMarkdownUtf8",
          "package": "discount",
          "signature": "[DiscountOption] -\u003e Text -\u003e Text",
          "source": "src/Text-Discount.html#parseMarkdownUtf8",
          "type": "function"
        },
        "index": {
          "description": "As parseMarkdown but taking Text values instead Uses UTF-8 internally",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "parseMarkdownUtf8",
          "normalized": "[DiscountOption]-\u003eText-\u003eText",
          "package": "discount",
          "partial": "Markdown Utf",
          "signature": "[DiscountOption]-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:parseMarkdownUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly allow links that are local or that point to \u003ccode\u003ehttp\u003c/code\u003e, \u003ccode\u003ehttps\u003c/code\u003e,\n \u003ccode\u003enews\u003c/code\u003e, or \u003ccode\u003eftp\u003c/code\u003e schemes.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "safeLinks",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#safeLinks",
          "type": "function"
        },
        "index": {
          "description": "Only allow links that are local or that point to http https news or ftp schemes",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "safeLinks",
          "package": "discount",
          "partial": "Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:safeLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables both superscript and relaxed emphasis (see \u003ccode\u003e\u003ca\u003enoRelaxedEmphasis\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "strict",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#strict",
          "type": "function"
        },
        "index": {
          "description": "Disables both superscript and relaxed emphasis see noRelaxedEmphasis",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "strict",
          "package": "discount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:strict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand tabs to 4 spaces.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "tabStop",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#tabStop",
          "type": "function"
        },
        "index": {
          "description": "Expand tabs to spaces",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "tabStop",
          "package": "discount",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:tabStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess Markdown even inside an HTML tag.\n\u003c/p\u003e",
          "module": "Text.Discount",
          "name": "tagText",
          "package": "discount",
          "signature": "DiscountOption",
          "source": "src/Text-Discount.html#tagText",
          "type": "function"
        },
        "index": {
          "description": "Process Markdown even inside an HTML tag",
          "hierarchy": "Text Discount",
          "module": "Text.Discount",
          "name": "tagText",
          "package": "discount",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/discount/docs/Text-Discount.html#v:tagText"
      }
    }
  ]
]