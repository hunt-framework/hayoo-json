[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a tag soup to its text representation\nrespecting various conventions for merging open and close tags.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-Format.html",
        "fct-type": "module",
        "title": "Format"
      },
      "index": {
        "description": "Convert tag soup to its text representation respecting various conventions for merging open and close tags",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "Format",
        "normalized": "",
        "package": "tagchup",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:html",
      "description": {
        "fct-descr": "\u003cp\u003eAll tags that are defined being self-closing by the HTML standard\nare formatted only as open tag.\nE.g. \u003ccode\u003e\u003ca\u003ebr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Format.html#html",
        "fct-type": "function",
        "title": "html"
      },
      "index": {
        "description": "All tags that are defined being self-closing by the HTML standard are formatted only as open tag E.g br",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "html",
        "normalized": "[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "",
        "signature": "[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:htmlOrXhtml",
      "description": {
        "fct-descr": "\u003cp\u003eIf the first tag is \u003ccode\u003e\u003ca\u003e...?\u003c/a\u003e\u003c/code\u003e then format in XHTML style,\nelse in HTML style.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Format.html#htmlOrXhtml",
        "fct-type": "function",
        "title": "htmlOrXhtml"
      },
      "index": {
        "description": "If the first tag is then format in XHTML style else in HTML style",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "htmlOrXhtml",
        "normalized": "[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "Or Xhtml",
        "signature": "[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xhtml",
      "description": {
        "fct-descr": "\u003cp\u003eAll tags that are defined being self-closing by the XHTML standard\nare formatted as self-closing open tag.\nE.g. \u003ccode\u003e\u003ca\u003ebr/\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Format.html#xhtml",
        "fct-type": "function",
        "title": "xhtml"
      },
      "index": {
        "description": "All tags that are defined being self-closing by the XHTML standard are formatted as self-closing open tag E.g br",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "xhtml",
        "normalized": "[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "",
        "signature": "[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xml",
      "description": {
        "fct-descr": "\u003cp\u003eAll tags are formatted as they are.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Format.html#xml",
        "fct-type": "function",
        "title": "xml"
      },
      "index": {
        "description": "All tags are formatted as they are",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "xml",
        "normalized": "[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "",
        "signature": "[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xmlCondensed",
      "description": {
        "fct-descr": "\u003cp\u003eAdjacent corresponding open and close tags are merged to a self-closing tag.\nE.g. \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e becomes \u003ccode\u003e\u003ca\u003ea/\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Format",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Format.html#xmlCondensed",
        "fct-type": "function",
        "title": "xmlCondensed"
      },
      "index": {
        "description": "Adjacent corresponding open and close tags are merged to self-closing tag E.g becomes",
        "hierarchy": "Text HTML Tagchup Format",
        "module": "Text.HTML.Tagchup.Format",
        "name": "xmlCondensed",
        "normalized": "[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "Condensed",
        "signature": "[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse a string into our custom tag soup data structure.\n\u003c/p\u003e\u003cp\u003eThe parser works only on proper Unicode texts.\nThat is, you must have decoded it before,\ne.g. using decoding functions from hxt or encoding package.\n\u003ccode\u003e\u003ca\u003efindMetaEncoding\u003c/a\u003e\u003c/code\u003e\ncan assist you retrieving the character set encoding\nfrom meta information of the document at hand.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parse string into our custom tag soup data structure The parser works only on proper Unicode texts That is you must have decoded it before e.g using decoding functions from hxt or encoding package findMetaEncoding can assist you retrieving the character set encoding from meta information of the document at hand",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "tagchup",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#t:CharType",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "class",
        "fct-source": "src/Text-HTML-Tagchup-Parser-Tag.html#CharType",
        "fct-type": "class",
        "title": "CharType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "CharType",
        "normalized": "",
        "package": "tagchup",
        "partial": "Char Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runInnerOfTag",
      "description": {
        "fct-descr": "\u003cp\u003eParse the inner of a single tag.\nThat is, \u003ccode\u003erunTag \"\u003cbla\u003e\"\u003c/code\u003e is the same as \u003ccode\u003erunInnerOfTag \"bla\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name sink",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html#runInnerOfTag",
        "fct-type": "function",
        "title": "runInnerOfTag"
      },
      "index": {
        "description": "Parse the inner of single tag That is runTag bla is the same as runInnerOfTag bla",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "runInnerOfTag",
        "normalized": "String-\u003eT a b",
        "package": "tagchup",
        "partial": "Inner Of Tag",
        "signature": "String-\u003eT name sink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoup",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunSoupWithPositions\u003c/a\u003e\u003c/code\u003e but hides source file positions.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "source -\u003e [T name sink]",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html#runSoup",
        "fct-type": "function",
        "title": "runSoup"
      },
      "index": {
        "description": "Like runSoupWithPositions but hides source file positions",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "runSoup",
        "normalized": "a-\u003e[T b c]",
        "package": "tagchup",
        "partial": "Soup",
        "signature": "source-\u003e[T name sink]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoupWithPositions",
      "description": {
        "fct-descr": "\u003cp\u003eParse an HTML document to a list of \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e.\n Automatically expands out escape characters.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "source -\u003e [T name sink]",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html#runSoupWithPositions",
        "fct-type": "function",
        "title": "runSoupWithPositions"
      },
      "index": {
        "description": "Parse an HTML document to list of Automatically expands out escape characters",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "runSoupWithPositions",
        "normalized": "a-\u003e[T b c]",
        "package": "tagchup",
        "partial": "Soup With Positions",
        "signature": "source-\u003e[T name sink]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoupWithPositionsName",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "FilePath -\u003e source -\u003e [T name sink]",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html#runSoupWithPositionsName",
        "fct-type": "function",
        "title": "runSoupWithPositionsName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "runSoupWithPositionsName",
        "normalized": "FilePath-\u003ea-\u003e[T b c]",
        "package": "tagchup",
        "partial": "Soup With Positions Name",
        "signature": "FilePath-\u003esource-\u003e[T name sink]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runTag",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single tag, throws an error if there is a syntax error.\nThis is useful for parsing a match pattern.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Parser",
        "fct-package": "tagchup",
        "fct-signature": "source -\u003e T name sink",
        "fct-source": "src/Text-HTML-Tagchup-Parser.html#runTag",
        "fct-type": "function",
        "title": "runTag"
      },
      "index": {
        "description": "Parse single tag throws an error if there is syntax error This is useful for parsing match pattern",
        "hierarchy": "Text HTML Tagchup Parser",
        "module": "Text.HTML.Tagchup.Parser",
        "name": "runTag",
        "normalized": "a-\u003eT b c",
        "package": "tagchup",
        "partial": "Tag",
        "signature": "source-\u003eT name sink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html",
        "fct-type": "module",
        "title": "PositionTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "PositionTag",
        "normalized": "",
        "package": "tagchup",
        "partial": "Position Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#t:T",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "T",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:Cons",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "Cons",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#T",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "Cons",
        "normalized": "",
        "package": "tagchup",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:concatTexts",
      "description": {
        "fct-descr": "\u003cp\u003eMerge adjacent Text sections.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e [T name string]",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#concatTexts",
        "fct-type": "function",
        "title": "concatTexts"
      },
      "index": {
        "description": "Merge adjacent Text sections",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "concatTexts",
        "normalized": "[T a b]-\u003e[T a b]",
        "package": "tagchup",
        "partial": "Texts",
        "signature": "[T name string]-\u003e[T name string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:cons",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T -\u003e T name string -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "cons",
        "normalized": "T-\u003eT a b-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "T-\u003eT name string-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:lift",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "(T name0 string0 -\u003e T name1 string1) -\u003e T name0 string0 -\u003e T name1 string1",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "lift",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "(T name string-\u003eT name string)-\u003eT name string-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:liftA",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "(T name0 string0 -\u003e f (T name1 string1)) -\u003e T name0 string0 -\u003e f (T name1 string1)",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#liftA",
        "fct-type": "function",
        "title": "liftA"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "liftA",
        "normalized": "(T a b-\u003ec(T a b))-\u003eT a b-\u003ec(T a b)",
        "package": "tagchup",
        "partial": "",
        "signature": "(T name string-\u003ef(T name string))-\u003eT name string-\u003ef(T name string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:position",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T (T name string) T",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#position",
        "fct-type": "function",
        "title": "position"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "position",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:position_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#T",
        "fct-type": "function",
        "title": "position_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "position_",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:tag",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T (T name string) (T name string)",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "tag",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:tag_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T name string",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#T",
        "fct-type": "function",
        "title": "tag_"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "tag_",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:textFromCData",
      "description": {
        "fct-module": "Text.HTML.Tagchup.PositionTag",
        "fct-package": "tagchup",
        "fct-signature": "T name [char] -\u003e T name [char]",
        "fct-source": "src/Text-HTML-Tagchup-PositionTag.html#textFromCData",
        "fct-type": "function",
        "title": "textFromCData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup PositionTag",
        "module": "Text.HTML.Tagchup.PositionTag",
        "name": "textFromCData",
        "normalized": "T a[b]-\u003eT a[b]",
        "package": "tagchup",
        "partial": "From CData",
        "signature": "T name[char]-\u003eT name[char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "Process",
        "normalized": "",
        "package": "tagchup",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#t:Encoded",
      "description": {
        "fct-descr": "\u003cp\u003eshould be [Word8]\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Encoded"
      },
      "index": {
        "description": "should be Word8",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "Encoded",
        "normalized": "",
        "package": "tagchup",
        "partial": "Encoded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#t:Encoding",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "type",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#Encoding",
        "fct-type": "type",
        "title": "Encoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "Encoding",
        "normalized": "",
        "package": "tagchup",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:decodeAdaptive",
      "description": {
        "fct-descr": "\u003cp\u003eSelects a decoder dynamically according\nto xml-encoding and meta-http-equiv tags.\nThe \u003ccode\u003e?xml\u003c/code\u003e tag should only appear at the beginning of a document,\nbut we respect it at every occurence.\n\u003c/p\u003e\u003cpre\u003e import qualified Text.XML.HXT.DOM.Unicode as Unicode\n\u003c/pre\u003e\u003cpre\u003e evalDecodeAdaptive .\n decodeAdaptive\n    (maybe Unicode.latin1ToUnicode (fst.) .\n     Unicode.getDecodingFct)\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "(Encoding -\u003e Encoded -\u003e String) -\u003e [T name [T]] -\u003e State (Encoded -\u003e String) [T name String]",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#decodeAdaptive",
        "fct-type": "function",
        "title": "decodeAdaptive"
      },
      "index": {
        "description": "Selects decoder dynamically according to xml-encoding and meta-http-equiv tags The xml tag should only appear at the beginning of document but we respect it at every occurence import qualified Text.XML.HXT.DOM.Unicode as Unicode evalDecodeAdaptive decodeAdaptive maybe Unicode.latin1ToUnicode fst Unicode.getDecodingFct",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "decodeAdaptive",
        "normalized": "(Encoding-\u003eEncoded-\u003eString)-\u003e[T a[T]]-\u003eState(Encoded-\u003eString)[T a String]",
        "package": "tagchup",
        "partial": "Adaptive",
        "signature": "(Encoding-\u003eEncoded-\u003eString)-\u003e[T name[T]]-\u003eState(Encoded-\u003eString)[T name String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:decodeTagAdaptive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edecodeTagAdaptive decoderSelector tag\u003c/code\u003e generates a state monad,\nwith a decoder as state.\nIt decodes encoding specific byte sequences\nusing the current decoder\nand XML references using a fixed table.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "(Encoding -\u003e Encoded -\u003e String) -\u003e T name [T] -\u003e State (Encoded -\u003e String) (T name String)",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#decodeTagAdaptive",
        "fct-type": "function",
        "title": "decodeTagAdaptive"
      },
      "index": {
        "description": "decodeTagAdaptive decoderSelector tag generates state monad with decoder as state It decodes encoding specific byte sequences using the current decoder and XML references using fixed table",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "decodeTagAdaptive",
        "normalized": "(Encoding-\u003eEncoded-\u003eString)-\u003eT a[T]-\u003eState(Encoded-\u003eString)(T a String)",
        "package": "tagchup",
        "partial": "Tag Adaptive",
        "signature": "(Encoding-\u003eEncoded-\u003eString)-\u003eT name[T]-\u003eState(Encoded-\u003eString)(T name String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:evalDecodeAdaptive",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "State (Encoded -\u003e String) a -\u003e a",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#evalDecodeAdaptive",
        "fct-type": "function",
        "title": "evalDecodeAdaptive"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "evalDecodeAdaptive",
        "normalized": "State(Encoded-\u003eString)a-\u003ea",
        "package": "tagchup",
        "partial": "Decode Adaptive",
        "signature": "State(Encoded-\u003eString)a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:findMetaEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eRather the same as \u003ccode\u003ewraxml:HTML.Tree.findMetaEncoding\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "[T name String] -\u003e Maybe String",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#findMetaEncoding",
        "fct-type": "function",
        "title": "findMetaEncoding"
      },
      "index": {
        "description": "Rather the same as wraxml HTML.Tree.findMetaEncoding",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "findMetaEncoding",
        "normalized": "[T a String]-\u003eMaybe String",
        "package": "tagchup",
        "partial": "Meta Encoding",
        "signature": "[T name String]-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getHeadTags",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e [T name string]",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#getHeadTags",
        "fct-type": "function",
        "title": "getHeadTags"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "getHeadTags",
        "normalized": "[T a b]-\u003e[T a b]",
        "package": "tagchup",
        "partial": "Head Tags",
        "signature": "[T name string]-\u003e[T name string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getMetaHTTPHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eExtract META tags which contain HTTP-EQUIV attribute\nand present these values like HTTP headers.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e [(string, string)]",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#getMetaHTTPHeaders",
        "fct-type": "function",
        "title": "getMetaHTTPHeaders"
      },
      "index": {
        "description": "Extract META tags which contain HTTP-EQUIV attribute and present these values like HTTP headers",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "getMetaHTTPHeaders",
        "normalized": "[T a b]-\u003e[(b,b)]",
        "package": "tagchup",
        "partial": "Meta HTTPHeaders",
        "signature": "[T name string]-\u003e[(string,string)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getXMLEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the first tag is an \u003ccode\u003exml\u003c/code\u003e processing instruction tag\nand return the value of its \u003ccode\u003eencoding\u003c/code\u003e attribute.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "[T name String] -\u003e Maybe String",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#getXMLEncoding",
        "fct-type": "function",
        "title": "getXMLEncoding"
      },
      "index": {
        "description": "Check whether the first tag is an xml processing instruction tag and return the value of its encoding attribute",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "getXMLEncoding",
        "normalized": "[T a String]-\u003eMaybe String",
        "package": "tagchup",
        "partial": "XMLEncoding",
        "signature": "[T name String]-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:partAttrs",
      "description": {
        "fct-descr": "\u003cp\u003eModify attributes and tags of certain parts.\nFor limitations, see \u003ccode\u003e\u003ca\u003eparts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "(Name name -\u003e Bool) -\u003e (([T name string], [T name string]) -\u003e ([T name string], [T name string])) -\u003e [T name string] -\u003e [T name string]",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#partAttrs",
        "fct-type": "function",
        "title": "partAttrs"
      },
      "index": {
        "description": "Modify attributes and tags of certain parts For limitations see parts",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "partAttrs",
        "normalized": "(Name a-\u003eBool)-\u003e(([T a b],[T a b])-\u003e([T a b],[T a b]))-\u003e[T a b]-\u003e[T a b]",
        "package": "tagchup",
        "partial": "Attrs",
        "signature": "(Name name-\u003eBool)-\u003e(([T name string],[T name string])-\u003e([T name string],[T name string]))-\u003e[T name string]-\u003e[T name string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:parts",
      "description": {
        "fct-descr": "\u003cp\u003eExtract parts from the tag soup\nthat are enclosed in corresponding open and close tags.\nIf a close tag is missing, the soup end is considered as end of the part.\nHowever nested tags are not supported,\ne.g. in \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e the second \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003c/code\u003e is considered\nto be enclosed in the first \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003c/code\u003e and the first \u003ccode\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e\nand the second \u003ccode\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e is ignored.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Process",
        "fct-package": "tagchup",
        "fct-signature": "(Name name -\u003e Bool) -\u003e [T name string] -\u003e [Either ((Name name, [T name string]), [T name string]) [T name string]]",
        "fct-source": "src/Text-HTML-Tagchup-Process.html#parts",
        "fct-type": "function",
        "title": "parts"
      },
      "index": {
        "description": "Extract parts from the tag soup that are enclosed in corresponding open and close tags If close tag is missing the soup end is considered as end of the part However nested tags are not supported e.g in the second is considered to be enclosed in the first and the first and the second is ignored",
        "hierarchy": "Text HTML Tagchup Process",
        "module": "Text.HTML.Tagchup.Process",
        "name": "parts",
        "normalized": "(Name a-\u003eBool)-\u003e[T a b]-\u003e[Either((Name a,[T a b]),[T a b])[T a b]]",
        "package": "tagchup",
        "partial": "",
        "signature": "(Name name-\u003eBool)-\u003e[T name string]-\u003e[Either((Name name,[T name string]),[T name string])[T name string]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html",
        "fct-type": "module",
        "title": "Match"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "Match",
        "normalized": "",
        "package": "tagchup",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003ematch an closing tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "(Name name -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "match an closing tag",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "close",
        "normalized": "(Name a-\u003eBool)-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "(Name name-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:closeLit",
      "description": {
        "fct-descr": "\u003cp\u003ematch a closing tag's name literally\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#closeLit",
        "fct-type": "function",
        "title": "closeLit"
      },
      "index": {
        "description": "match closing tag name literally",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "closeLit",
        "normalized": "String-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "Lit",
        "signature": "String-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:closeNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#closeNameLit",
        "fct-type": "function",
        "title": "closeNameLit"
      },
      "index": {
        "description": "Check whether the is Close and matches the given name",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "closeNameLit",
        "normalized": "String-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "Name Lit",
        "signature": "String-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:comment",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "(String -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "comment",
        "normalized": "(String-\u003eBool)-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "(String-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:ignore",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "ignore",
        "normalized": "a-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003ematch an opening tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "(Name name -\u003e Bool) -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "match an opening tag",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "open",
        "normalized": "(Name a-\u003eBool)-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "(Name name-\u003eBool)-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openAttrLit",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e String -\u003e string -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#openAttrLit",
        "fct-type": "function",
        "title": "openAttrLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "openAttrLit",
        "normalized": "String-\u003eString-\u003ea-\u003eT b a-\u003eBool",
        "package": "tagchup",
        "partial": "Attr Lit",
        "signature": "String-\u003eString-\u003estring-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openAttrNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a tag with given name, that contains an attribute\nwith given name, that satisfies a predicate.\nIf an attribute occurs multiple times,\nall occurrences are checked.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e String -\u003e (string -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#openAttrNameLit",
        "fct-type": "function",
        "title": "openAttrNameLit"
      },
      "index": {
        "description": "Match tag with given name that contains an attribute with given name that satisfies predicate If an attribute occurs multiple times all occurrences are checked",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "openAttrNameLit",
        "normalized": "String-\u003eString-\u003e(a-\u003eBool)-\u003eT b a-\u003eBool",
        "package": "tagchup",
        "partial": "Attr Name Lit",
        "signature": "String-\u003eString-\u003e(string-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openLit",
      "description": {
        "fct-descr": "\u003cp\u003ematch a opening tag's name literally\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#openLit",
        "fct-type": "function",
        "title": "openLit"
      },
      "index": {
        "description": "match opening tag name literally",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "openLit",
        "normalized": "String-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "Lit",
        "signature": "String-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#openNameLit",
        "fct-type": "function",
        "title": "openNameLit"
      },
      "index": {
        "description": "Check whether the is Open and matches the given name",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "openNameLit",
        "normalized": "String-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "Name Lit",
        "signature": "String-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:special",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "(Name name -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#special",
        "fct-type": "function",
        "title": "special"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "special",
        "normalized": "(Name a-\u003eBool)-\u003e(String-\u003eBool)-\u003eT a b-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "(Name name-\u003eBool)-\u003e(String-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003ematch a text\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag.Match",
        "fct-package": "tagchup",
        "fct-signature": "(string -\u003e Bool) -\u003e T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag-Match.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "match text",
        "hierarchy": "Text HTML Tagchup Tag Match",
        "module": "Text.HTML.Tagchup.Tag.Match",
        "name": "text",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eBool",
        "package": "tagchup",
        "partial": "",
        "signature": "(string-\u003eBool)-\u003eT name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html",
        "fct-type": "module",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "tagchup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#t:Name",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Name",
        "normalized": "",
        "package": "tagchup",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eAn HTML element, a document is \u003ccode\u003e[T]\u003c/code\u003e.\nThere is no requirement for \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e to match.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003estring\u003c/code\u003e lets you choose between\n\u003ccode\u003e[Char]\u003c/code\u003e for interpreted HTML entity references and\n\u003ccode\u003e[HTMLChar.T]\u003c/code\u003e for uninterpreted HTML entities.\nYou will most oftenly want plain \u003ccode\u003eChar\u003c/code\u003e,\nsince \u003ccode\u003eHTMLChar.T\u003c/code\u003e is only necessary if you want to know,\nwhether a non-ASCII character was encoded as HTML entity\nor as non-ASCII Unicode character.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "An HTML element document is There is no requirement for Open and Close to match The type parameter string lets you choose between Char for interpreted HTML entity references and HTMLChar.T for uninterpreted HTML entities You will most oftenly want plain Char since HTMLChar.T is only necessary if you want to know whether non-ASCII character was encoded as HTML entity or as non-ASCII Unicode character",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "T",
        "normalized": "",
        "package": "tagchup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Close",
      "description": {
        "fct-descr": "\u003cp\u003eA closing tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Close (Name name)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Close"
      },
      "index": {
        "description": "closing tag",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Close",
        "normalized": "",
        "package": "tagchup",
        "partial": "Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Comment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Comment String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Comment"
      },
      "index": {
        "description": "comment",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Comment",
        "normalized": "",
        "package": "tagchup",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Name",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name ident",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Name",
        "normalized": "",
        "package": "tagchup",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Open",
      "description": {
        "fct-descr": "\u003cp\u003eAn open tag with \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003es in their original order.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Open (Name name) [T name string]",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Open"
      },
      "index": {
        "description": "An open tag with in their original order",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Open",
        "normalized": "Open(Name a)[T a b]",
        "package": "tagchup",
        "partial": "Open",
        "signature": "Open(Name name)[T name string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Processing",
      "description": {
        "fct-descr": "\u003cp\u003eA tag like \u003ccode\u003e\u003c?xml ...\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Processing (Name name) (T name string)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Processing"
      },
      "index": {
        "description": "tag like xml",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Processing",
        "normalized": "",
        "package": "tagchup",
        "partial": "Processing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Special",
      "description": {
        "fct-descr": "\u003cp\u003eA tag like \u003ccode\u003e\u003c!DOCTYPE ...\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Special (Name name) String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Special"
      },
      "index": {
        "description": "tag like DOCTYPE",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Special",
        "normalized": "",
        "package": "tagchup",
        "partial": "Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA text node, guaranteed not to be the empty string\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Text string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "text node guaranteed not to be the empty string",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Text",
        "normalized": "",
        "package": "tagchup",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Warning",
      "description": {
        "fct-descr": "\u003cp\u003eMark a syntax error in the input file\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Warning String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#T",
        "fct-type": "function",
        "title": "Warning"
      },
      "index": {
        "description": "Mark syntax error in the input file",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "Warning",
        "normalized": "",
        "package": "tagchup",
        "partial": "Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:cdata",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#cdata",
        "fct-type": "function",
        "title": "cdata"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "cdata",
        "normalized": "String-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "String-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:close",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name name -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "close",
        "normalized": "Name a-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "Name name-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:comment",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "comment",
        "normalized": "String-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "String-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:concatTexts",
      "description": {
        "fct-descr": "\u003cp\u003eMerge adjacent Text sections.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e [T name string]",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#concatTexts",
        "fct-type": "function",
        "title": "concatTexts"
      },
      "index": {
        "description": "Merge adjacent Text sections",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "concatTexts",
        "normalized": "[T a b]-\u003e[T a b]",
        "package": "tagchup",
        "partial": "Texts",
        "signature": "[T name string]-\u003e[T name string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:formatClose",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name name -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#formatClose",
        "fct-type": "function",
        "title": "formatClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "formatClose",
        "normalized": "Name a-\u003eShowS",
        "package": "tagchup",
        "partial": "Close",
        "signature": "Name name-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:formatOpen",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Bool -\u003e Name name -\u003e [T name string] -\u003e ShowS",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#formatOpen",
        "fct-type": "function",
        "title": "formatOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "formatOpen",
        "normalized": "Bool-\u003eName a-\u003e[T a b]-\u003eShowS",
        "package": "tagchup",
        "partial": "Open",
        "signature": "Bool-\u003eName name-\u003e[T name string]-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:innerText",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all text content from tags (similar to Verbatim found in HaXml)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "[T name string] -\u003e string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#innerText",
        "fct-type": "function",
        "title": "innerText"
      },
      "index": {
        "description": "Extract all text content from tags similar to Verbatim found in HaXml",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "innerText",
        "normalized": "[T a b]-\u003eb",
        "package": "tagchup",
        "partial": "Text",
        "signature": "[T name string]-\u003estring"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isCData",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isCData",
        "fct-type": "function",
        "title": "isCData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isCData",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "CData",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isClose",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isClose",
        "fct-type": "function",
        "title": "isClose"
      },
      "index": {
        "description": "Test if is Close",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isClose",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Close",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isComment",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isComment",
        "fct-type": "function",
        "title": "isComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isComment",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Comment",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isOpen",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isOpen",
        "fct-type": "function",
        "title": "isOpen"
      },
      "index": {
        "description": "Test if is Open",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isOpen",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Open",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isProcessing",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isProcessing",
        "fct-type": "function",
        "title": "isProcessing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isProcessing",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Processing",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isSpecial",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isSpecial",
        "fct-type": "function",
        "title": "isSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isSpecial",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Special",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isText",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isText",
        "fct-type": "function",
        "title": "isText"
      },
      "index": {
        "description": "Test if is Text",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isText",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Text",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isWarning",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Bool",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#isWarning",
        "fct-type": "function",
        "title": "isWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "isWarning",
        "normalized": "T a b-\u003eBool",
        "package": "tagchup",
        "partial": "Warning",
        "signature": "T name string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapName",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "(Name name0 -\u003e Name name1) -\u003e (Name name0 -\u003e Name name1) -\u003e T name0 string -\u003e T name1 string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#mapName",
        "fct-type": "function",
        "title": "mapName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "mapName",
        "normalized": "(Name a-\u003eName a)-\u003e(Name a-\u003eName a)-\u003eT a b-\u003eT a b",
        "package": "tagchup",
        "partial": "Name",
        "signature": "(Name name-\u003eName name)-\u003e(Name name-\u003eName name)-\u003eT name string-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapText",
      "description": {
        "fct-descr": "\u003cp\u003eModify content of a Text or a CDATA part.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "(String -\u003e String) -\u003e T name String -\u003e T name String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#mapText",
        "fct-type": "function",
        "title": "mapText"
      },
      "index": {
        "description": "Modify content of Text or CDATA part",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "mapText",
        "normalized": "(String-\u003eString)-\u003eT a String-\u003eT a String",
        "package": "tagchup",
        "partial": "Text",
        "signature": "(String-\u003eString)-\u003eT name String-\u003eT name String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapTextA",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "(String -\u003e f String) -\u003e T name String -\u003e f (T name String)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#mapTextA",
        "fct-type": "function",
        "title": "mapTextA"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "mapTextA",
        "normalized": "(String-\u003ea String)-\u003eT b String-\u003ea(T b String)",
        "package": "tagchup",
        "partial": "Text",
        "signature": "(String-\u003ef String)-\u003eT name String-\u003ef(T name String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeCData",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeCData",
        "fct-type": "function",
        "title": "maybeCData"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeCData",
        "normalized": "T a b-\u003eMaybe String",
        "package": "tagchup",
        "partial": "CData",
        "signature": "T name string-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeClose",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe (Name name)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeClose",
        "fct-type": "function",
        "title": "maybeClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeClose",
        "normalized": "T a b-\u003eMaybe(Name a)",
        "package": "tagchup",
        "partial": "Close",
        "signature": "T name string-\u003eMaybe(Name name)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeComment",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeComment",
        "fct-type": "function",
        "title": "maybeComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeComment",
        "normalized": "T a b-\u003eMaybe String",
        "package": "tagchup",
        "partial": "Comment",
        "signature": "T name string-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeOpen",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe (Name name, [T name string])",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeOpen",
        "fct-type": "function",
        "title": "maybeOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeOpen",
        "normalized": "T a b-\u003eMaybe(Name a,[T a b])",
        "package": "tagchup",
        "partial": "Open",
        "signature": "T name string-\u003eMaybe(Name name,[T name string])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeProcessing",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe (Name name, T name string)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeProcessing",
        "fct-type": "function",
        "title": "maybeProcessing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeProcessing",
        "normalized": "T a b-\u003eMaybe(Name a,T a b)",
        "package": "tagchup",
        "partial": "Processing",
        "signature": "T name string-\u003eMaybe(Name name,T name string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeSpecial",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe (Name name, String)",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeSpecial",
        "fct-type": "function",
        "title": "maybeSpecial"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeSpecial",
        "normalized": "T a b-\u003eMaybe(Name a,String)",
        "package": "tagchup",
        "partial": "Special",
        "signature": "T name string-\u003eMaybe(Name name,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeText",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeText",
        "fct-type": "function",
        "title": "maybeText"
      },
      "index": {
        "description": "Extract the string from within Text otherwise Nothing",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeText",
        "normalized": "T a b-\u003eMaybe b",
        "package": "tagchup",
        "partial": "Text",
        "signature": "T name string-\u003eMaybe string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeWarning",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name string -\u003e Maybe String",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#maybeWarning",
        "fct-type": "function",
        "title": "maybeWarning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "maybeWarning",
        "normalized": "T a b-\u003eMaybe String",
        "package": "tagchup",
        "partial": "Warning",
        "signature": "T name string-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:open",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name name -\u003e [T name string] -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "open",
        "normalized": "Name a-\u003e[T a b]-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "Name name-\u003e[T name string]-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:processing",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name name -\u003e T name string -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#processing",
        "fct-type": "function",
        "title": "processing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "processing",
        "normalized": "Name a-\u003eT a b-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "Name name-\u003eT name string-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:special",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "Name name -\u003e String -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#special",
        "fct-type": "function",
        "title": "special"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "special",
        "normalized": "Name a-\u003eString-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "Name name-\u003eString-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:text",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "string -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "text",
        "normalized": "a-\u003eT b a",
        "package": "tagchup",
        "partial": "",
        "signature": "string-\u003eT name string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:textFromCData",
      "description": {
        "fct-descr": "\u003cp\u003eReplace CDATA sections by plain text.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "T name [char] -\u003e T name [char]",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#textFromCData",
        "fct-type": "function",
        "title": "textFromCData"
      },
      "index": {
        "description": "Replace CDATA sections by plain text",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "textFromCData",
        "normalized": "T a[b]-\u003eT a[b]",
        "package": "tagchup",
        "partial": "From CData",
        "signature": "T name[char]-\u003eT name[char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:warning",
      "description": {
        "fct-module": "Text.HTML.Tagchup.Tag",
        "fct-package": "tagchup",
        "fct-signature": "String -\u003e T name string",
        "fct-source": "src/Text-HTML-Tagchup-Tag.html#warning",
        "fct-type": "function",
        "title": "warning"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML Tagchup Tag",
        "module": "Text.HTML.Tagchup.Tag",
        "name": "warning",
        "normalized": "String-\u003eT a b",
        "package": "tagchup",
        "partial": "",
        "signature": "String-\u003eT name string"
      }
    }
  }
]