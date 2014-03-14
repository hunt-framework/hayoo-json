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
        "word": "tagchup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a tag soup to its text representation\nrespecting various conventions for merging open and close tags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "Format",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Format.html",
          "type": "module"
        },
        "index": {
          "description": "Convert tag soup to its text representation respecting various conventions for merging open and close tags",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "Format",
          "package": "tagchup",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll tags that are defined being self-closing by the HTML standard\nare formatted only as open tag.\nE.g. \u003ccode\u003e\u003ca\u003ebr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "html",
          "package": "tagchup",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Format.html#html",
          "type": "function"
        },
        "index": {
          "description": "All tags that are defined being self-closing by the HTML standard are formatted only as open tag E.g br",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "html",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagchup",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the first tag is \u003ccode\u003e\u003ca\u003e...?\u003c/a\u003e\u003c/code\u003e then format in XHTML style,\nelse in HTML style.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "htmlOrXhtml",
          "package": "tagchup",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Format.html#htmlOrXhtml",
          "type": "function"
        },
        "index": {
          "description": "If the first tag is then format in XHTML style else in HTML style",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "htmlOrXhtml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagchup",
          "partial": "Or Xhtml",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:htmlOrXhtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll tags that are defined being self-closing by the XHTML standard\nare formatted as self-closing open tag.\nE.g. \u003ccode\u003e\u003ca\u003ebr/\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xhtml",
          "package": "tagchup",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Format.html#xhtml",
          "type": "function"
        },
        "index": {
          "description": "All tags that are defined being self-closing by the XHTML standard are formatted as self-closing open tag E.g br",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xhtml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagchup",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xhtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll tags are formatted as they are.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xml",
          "package": "tagchup",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Format.html#xml",
          "type": "function"
        },
        "index": {
          "description": "All tags are formatted as they are",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagchup",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjacent corresponding open and close tags are merged to a self-closing tag.\nE.g. \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e becomes \u003ccode\u003e\u003ca\u003ea/\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xmlCondensed",
          "package": "tagchup",
          "signature": "[T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Format.html#xmlCondensed",
          "type": "function"
        },
        "index": {
          "description": "Adjacent corresponding open and close tags are merged to self-closing tag E.g becomes",
          "hierarchy": "Text HTML Tagchup Format",
          "module": "Text.HTML.Tagchup.Format",
          "name": "xmlCondensed",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagchup",
          "partial": "Condensed",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Format.html#v:xmlCondensed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse a string into our custom tag soup data structure.\n\u003c/p\u003e\u003cp\u003eThe parser works only on proper Unicode texts.\nThat is, you must have decoded it before,\ne.g. using decoding functions from hxt or encoding package.\n\u003ccode\u003e\u003ca\u003efindMetaEncoding\u003c/a\u003e\u003c/code\u003e\ncan assist you retrieving the character set encoding\nfrom meta information of the document at hand.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "Parser",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parse string into our custom tag soup data structure The parser works only on proper Unicode texts That is you must have decoded it before e.g using decoding functions from hxt or encoding package findMetaEncoding can assist you retrieving the character set encoding from meta information of the document at hand",
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "Parser",
          "package": "tagchup",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Parser",
          "name": "CharType",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Parser-Tag.html#CharType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "CharType",
          "package": "tagchup",
          "partial": "Char Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#t:CharType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the inner of a single tag.\nThat is, \u003ccode\u003erunTag \"\u003cbla\u003e\"\u003c/code\u003e is the same as \u003ccode\u003erunInnerOfTag \"bla\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runInnerOfTag",
          "package": "tagchup",
          "signature": "String -\u003e T name sink",
          "source": "src/Text-HTML-Tagchup-Parser.html#runInnerOfTag",
          "type": "function"
        },
        "index": {
          "description": "Parse the inner of single tag That is runTag bla is the same as runInnerOfTag bla",
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runInnerOfTag",
          "normalized": "String-\u003eT a b",
          "package": "tagchup",
          "partial": "Inner Of Tag",
          "signature": "String-\u003eT name sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runInnerOfTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunSoupWithPositions\u003c/a\u003e\u003c/code\u003e but hides source file positions.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoup",
          "package": "tagchup",
          "signature": "source -\u003e [T name sink]",
          "source": "src/Text-HTML-Tagchup-Parser.html#runSoup",
          "type": "function"
        },
        "index": {
          "description": "Like runSoupWithPositions but hides source file positions",
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoup",
          "normalized": "a-\u003e[T b c]",
          "package": "tagchup",
          "partial": "Soup",
          "signature": "source-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an HTML document to a list of \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e.\n Automatically expands out escape characters.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoupWithPositions",
          "package": "tagchup",
          "signature": "source -\u003e [T name sink]",
          "source": "src/Text-HTML-Tagchup-Parser.html#runSoupWithPositions",
          "type": "function"
        },
        "index": {
          "description": "Parse an HTML document to list of Automatically expands out escape characters",
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoupWithPositions",
          "normalized": "a-\u003e[T b c]",
          "package": "tagchup",
          "partial": "Soup With Positions",
          "signature": "source-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoupWithPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoupWithPositionsName",
          "package": "tagchup",
          "signature": "FilePath -\u003e source -\u003e [T name sink]",
          "source": "src/Text-HTML-Tagchup-Parser.html#runSoupWithPositionsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runSoupWithPositionsName",
          "normalized": "FilePath-\u003ea-\u003e[T b c]",
          "package": "tagchup",
          "partial": "Soup With Positions Name",
          "signature": "FilePath-\u003esource-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runSoupWithPositionsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single tag, throws an error if there is a syntax error.\nThis is useful for parsing a match pattern.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runTag",
          "package": "tagchup",
          "signature": "source -\u003e T name sink",
          "source": "src/Text-HTML-Tagchup-Parser.html#runTag",
          "type": "function"
        },
        "index": {
          "description": "Parse single tag throws an error if there is syntax error This is useful for parsing match pattern",
          "hierarchy": "Text HTML Tagchup Parser",
          "module": "Text.HTML.Tagchup.Parser",
          "name": "runTag",
          "normalized": "a-\u003eT b c",
          "package": "tagchup",
          "partial": "Tag",
          "signature": "source-\u003eT name sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Parser.html#v:runTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "PositionTag",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-PositionTag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "PositionTag",
          "package": "tagchup",
          "partial": "Position Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "T",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "T",
          "package": "tagchup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "Cons",
          "package": "tagchup",
          "signature": "Cons",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "Cons",
          "package": "tagchup",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge adjacent Text sections.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "concatTexts",
          "package": "tagchup",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#concatTexts",
          "type": "function"
        },
        "index": {
          "description": "Merge adjacent Text sections",
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "concatTexts",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagchup",
          "partial": "Texts",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:concatTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "cons",
          "package": "tagchup",
          "signature": "T -\u003e T name string -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "cons",
          "normalized": "T-\u003eT a b-\u003eT a b",
          "package": "tagchup",
          "signature": "T-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "lift",
          "package": "tagchup",
          "signature": "(T name0 string0 -\u003e T name1 string1) -\u003e T name0 string0 -\u003e T name1 string1",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "lift",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "tagchup",
          "signature": "(T name string-\u003eT name string)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "liftA",
          "package": "tagchup",
          "signature": "(T name0 string0 -\u003e f (T name1 string1)) -\u003e T name0 string0 -\u003e f (T name1 string1)",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#liftA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "liftA",
          "normalized": "(T a b-\u003ec(T a b))-\u003eT a b-\u003ec(T a b)",
          "package": "tagchup",
          "signature": "(T name string-\u003ef(T name string))-\u003eT name string-\u003ef(T name string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "position",
          "package": "tagchup",
          "signature": "T (T name string) T",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "position",
          "package": "tagchup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "position_",
          "package": "tagchup",
          "signature": "T",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "position_",
          "package": "tagchup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:position_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "tag",
          "package": "tagchup",
          "signature": "T (T name string) (T name string)",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "tag",
          "package": "tagchup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "tag_",
          "package": "tagchup",
          "signature": "T name string",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "tag_",
          "package": "tagchup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:tag_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "textFromCData",
          "package": "tagchup",
          "signature": "T name [char] -\u003e T name [char]",
          "source": "src/Text-HTML-Tagchup-PositionTag.html#textFromCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup PositionTag",
          "module": "Text.HTML.Tagchup.PositionTag",
          "name": "textFromCData",
          "normalized": "T a[b]-\u003eT a[b]",
          "package": "tagchup",
          "partial": "From CData",
          "signature": "T name[char]-\u003eT name[char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-PositionTag.html#v:textFromCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Process",
          "name": "Process",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Process.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "Process",
          "package": "tagchup",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould be [Word8]\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "Encoded",
          "package": "tagchup",
          "type": "type"
        },
        "index": {
          "description": "should be Word8",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "Encoded",
          "package": "tagchup",
          "partial": "Encoded",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#t:Encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Process",
          "name": "Encoding",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Process.html#Encoding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "Encoding",
          "package": "tagchup",
          "partial": "Encoding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects a decoder dynamically according\nto xml-encoding and meta-http-equiv tags.\nThe \u003ccode\u003e?xml\u003c/code\u003e tag should only appear at the beginning of a document,\nbut we respect it at every occurence.\n\u003c/p\u003e\u003cpre\u003e import qualified Text.XML.HXT.DOM.Unicode as Unicode\n\u003c/pre\u003e\u003cpre\u003e evalDecodeAdaptive .\n decodeAdaptive\n    (maybe Unicode.latin1ToUnicode (fst.) .\n     Unicode.getDecodingFct)\n\u003c/pre\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "decodeAdaptive",
          "package": "tagchup",
          "signature": "(Encoding -\u003e Encoded -\u003e String) -\u003e [T name [T]] -\u003e State (Encoded -\u003e String) [T name String]",
          "source": "src/Text-HTML-Tagchup-Process.html#decodeAdaptive",
          "type": "function"
        },
        "index": {
          "description": "Selects decoder dynamically according to xml-encoding and meta-http-equiv tags The xml tag should only appear at the beginning of document but we respect it at every occurence import qualified Text.XML.HXT.DOM.Unicode as Unicode evalDecodeAdaptive decodeAdaptive maybe Unicode.latin1ToUnicode fst Unicode.getDecodingFct",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "decodeAdaptive",
          "normalized": "(Encoding-\u003eEncoded-\u003eString)-\u003e[T a[T]]-\u003eState(Encoded-\u003eString)[T a String]",
          "package": "tagchup",
          "partial": "Adaptive",
          "signature": "(Encoding-\u003eEncoded-\u003eString)-\u003e[T name[T]]-\u003eState(Encoded-\u003eString)[T name String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:decodeAdaptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecodeTagAdaptive decoderSelector tag\u003c/code\u003e generates a state monad,\nwith a decoder as state.\nIt decodes encoding specific byte sequences\nusing the current decoder\nand XML references using a fixed table.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "decodeTagAdaptive",
          "package": "tagchup",
          "signature": "(Encoding -\u003e Encoded -\u003e String) -\u003e T name [T] -\u003e State (Encoded -\u003e String) (T name String)",
          "source": "src/Text-HTML-Tagchup-Process.html#decodeTagAdaptive",
          "type": "function"
        },
        "index": {
          "description": "decodeTagAdaptive decoderSelector tag generates state monad with decoder as state It decodes encoding specific byte sequences using the current decoder and XML references using fixed table",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "decodeTagAdaptive",
          "normalized": "(Encoding-\u003eEncoded-\u003eString)-\u003eT a[T]-\u003eState(Encoded-\u003eString)(T a String)",
          "package": "tagchup",
          "partial": "Tag Adaptive",
          "signature": "(Encoding-\u003eEncoded-\u003eString)-\u003eT name[T]-\u003eState(Encoded-\u003eString)(T name String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:decodeTagAdaptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Process",
          "name": "evalDecodeAdaptive",
          "package": "tagchup",
          "signature": "State (Encoded -\u003e String) a -\u003e a",
          "source": "src/Text-HTML-Tagchup-Process.html#evalDecodeAdaptive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "evalDecodeAdaptive",
          "normalized": "State(Encoded-\u003eString)a-\u003ea",
          "package": "tagchup",
          "partial": "Decode Adaptive",
          "signature": "State(Encoded-\u003eString)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:evalDecodeAdaptive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather the same as \u003ccode\u003ewraxml:HTML.Tree.findMetaEncoding\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "findMetaEncoding",
          "package": "tagchup",
          "signature": "[T name String] -\u003e Maybe String",
          "source": "src/Text-HTML-Tagchup-Process.html#findMetaEncoding",
          "type": "function"
        },
        "index": {
          "description": "Rather the same as wraxml HTML.Tree.findMetaEncoding",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "findMetaEncoding",
          "normalized": "[T a String]-\u003eMaybe String",
          "package": "tagchup",
          "partial": "Meta Encoding",
          "signature": "[T name String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:findMetaEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Process",
          "name": "getHeadTags",
          "package": "tagchup",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "src/Text-HTML-Tagchup-Process.html#getHeadTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "getHeadTags",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagchup",
          "partial": "Head Tags",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getHeadTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract META tags which contain HTTP-EQUIV attribute\nand present these values like HTTP headers.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "getMetaHTTPHeaders",
          "package": "tagchup",
          "signature": "[T name string] -\u003e [(string, string)]",
          "source": "src/Text-HTML-Tagchup-Process.html#getMetaHTTPHeaders",
          "type": "function"
        },
        "index": {
          "description": "Extract META tags which contain HTTP-EQUIV attribute and present these values like HTTP headers",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "getMetaHTTPHeaders",
          "normalized": "[T a b]-\u003e[(b,b)]",
          "package": "tagchup",
          "partial": "Meta HTTPHeaders",
          "signature": "[T name string]-\u003e[(string,string)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getMetaHTTPHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the first tag is an \u003ccode\u003exml\u003c/code\u003e processing instruction tag\nand return the value of its \u003ccode\u003eencoding\u003c/code\u003e attribute.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "getXMLEncoding",
          "package": "tagchup",
          "signature": "[T name String] -\u003e Maybe String",
          "source": "src/Text-HTML-Tagchup-Process.html#getXMLEncoding",
          "type": "function"
        },
        "index": {
          "description": "Check whether the first tag is an xml processing instruction tag and return the value of its encoding attribute",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "getXMLEncoding",
          "normalized": "[T a String]-\u003eMaybe String",
          "package": "tagchup",
          "partial": "XMLEncoding",
          "signature": "[T name String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:getXMLEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify attributes and tags of certain parts.\nFor limitations, see \u003ccode\u003e\u003ca\u003eparts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "partAttrs",
          "package": "tagchup",
          "signature": "(Name name -\u003e Bool) -\u003e (([T name string], [T name string]) -\u003e ([T name string], [T name string])) -\u003e [T name string] -\u003e [T name string]",
          "source": "src/Text-HTML-Tagchup-Process.html#partAttrs",
          "type": "function"
        },
        "index": {
          "description": "Modify attributes and tags of certain parts For limitations see parts",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "partAttrs",
          "normalized": "(Name a-\u003eBool)-\u003e(([T a b],[T a b])-\u003e([T a b],[T a b]))-\u003e[T a b]-\u003e[T a b]",
          "package": "tagchup",
          "partial": "Attrs",
          "signature": "(Name name-\u003eBool)-\u003e(([T name string],[T name string])-\u003e([T name string],[T name string]))-\u003e[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:partAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract parts from the tag soup\nthat are enclosed in corresponding open and close tags.\nIf a close tag is missing, the soup end is considered as end of the part.\nHowever nested tags are not supported,\ne.g. in \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003ea\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e the second \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003c/code\u003e is considered\nto be enclosed in the first \u003ccode\u003e\u003ca\u003ea\u003c/a\u003e\u003c/code\u003e and the first \u003ccode\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e\nand the second \u003ccode\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/code\u003e is ignored.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Process",
          "name": "parts",
          "package": "tagchup",
          "signature": "(Name name -\u003e Bool) -\u003e [T name string] -\u003e [Either ((Name name, [T name string]), [T name string]) [T name string]]",
          "source": "src/Text-HTML-Tagchup-Process.html#parts",
          "type": "function"
        },
        "index": {
          "description": "Extract parts from the tag soup that are enclosed in corresponding open and close tags If close tag is missing the soup end is considered as end of the part However nested tags are not supported e.g in the second is considered to be enclosed in the first and the first and the second is ignored",
          "hierarchy": "Text HTML Tagchup Process",
          "module": "Text.HTML.Tagchup.Process",
          "name": "parts",
          "normalized": "(Name a-\u003eBool)-\u003e[T a b]-\u003e[Either((Name a,[T a b]),[T a b])[T a b]]",
          "package": "tagchup",
          "signature": "(Name name-\u003eBool)-\u003e[T name string]-\u003e[Either((Name name,[T name string]),[T name string])[T name string]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Process.html#v:parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "Match",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "Match",
          "package": "tagchup",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch an closing tag\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "close",
          "package": "tagchup",
          "signature": "(Name name -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#close",
          "type": "function"
        },
        "index": {
          "description": "match an closing tag",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "close",
          "normalized": "(Name a-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "signature": "(Name name-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a closing tag's name literally\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "closeLit",
          "package": "tagchup",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#closeLit",
          "type": "function"
        },
        "index": {
          "description": "match closing tag name literally",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "closeLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "partial": "Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:closeLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "closeNameLit",
          "package": "tagchup",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#closeNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check whether the is Close and matches the given name",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "closeNameLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "partial": "Name Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:closeNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "comment",
          "package": "tagchup",
          "signature": "(String -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "comment",
          "normalized": "(String-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "signature": "(String-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "ignore",
          "package": "tagchup",
          "signature": "a -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#ignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "ignore",
          "normalized": "a-\u003eBool",
          "package": "tagchup",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch an opening tag\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "open",
          "package": "tagchup",
          "signature": "(Name name -\u003e Bool) -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#open",
          "type": "function"
        },
        "index": {
          "description": "match an opening tag",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "open",
          "normalized": "(Name a-\u003eBool)-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "signature": "(Name name-\u003eBool)-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openAttrLit",
          "package": "tagchup",
          "signature": "String -\u003e String -\u003e string -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#openAttrLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openAttrLit",
          "normalized": "String-\u003eString-\u003ea-\u003eT b a-\u003eBool",
          "package": "tagchup",
          "partial": "Attr Lit",
          "signature": "String-\u003eString-\u003estring-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openAttrLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a tag with given name, that contains an attribute\nwith given name, that satisfies a predicate.\nIf an attribute occurs multiple times,\nall occurrences are checked.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openAttrNameLit",
          "package": "tagchup",
          "signature": "String -\u003e String -\u003e (string -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#openAttrNameLit",
          "type": "function"
        },
        "index": {
          "description": "Match tag with given name that contains an attribute with given name that satisfies predicate If an attribute occurs multiple times all occurrences are checked",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openAttrNameLit",
          "normalized": "String-\u003eString-\u003e(a-\u003eBool)-\u003eT b a-\u003eBool",
          "package": "tagchup",
          "partial": "Attr Name Lit",
          "signature": "String-\u003eString-\u003e(string-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openAttrNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a opening tag's name literally\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openLit",
          "package": "tagchup",
          "signature": "String -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#openLit",
          "type": "function"
        },
        "index": {
          "description": "match opening tag name literally",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openLit",
          "normalized": "String-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "partial": "Lit",
          "signature": "String-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openNameLit",
          "package": "tagchup",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#openNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check whether the is Open and matches the given name",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "openNameLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "partial": "Name Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:openNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "special",
          "package": "tagchup",
          "signature": "(Name name -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#special",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "special",
          "normalized": "(Name a-\u003eBool)-\u003e(String-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagchup",
          "signature": "(Name name-\u003eBool)-\u003e(String-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a text\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "text",
          "package": "tagchup",
          "signature": "(string -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag-Match.html#text",
          "type": "function"
        },
        "index": {
          "description": "match text",
          "hierarchy": "Text HTML Tagchup Tag Match",
          "module": "Text.HTML.Tagchup.Tag.Match",
          "name": "text",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eBool",
          "package": "tagchup",
          "signature": "(string-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag-Match.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Tag",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Tag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Tag",
          "package": "tagchup",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Name",
          "package": "tagchup",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Name",
          "package": "tagchup",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTML element, a document is \u003ccode\u003e[T]\u003c/code\u003e.\nThere is no requirement for \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e to match.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003estring\u003c/code\u003e lets you choose between\n\u003ccode\u003e[Char]\u003c/code\u003e for interpreted HTML entity references and\n\u003ccode\u003e[HTMLChar.T]\u003c/code\u003e for uninterpreted HTML entities.\nYou will most oftenly want plain \u003ccode\u003eChar\u003c/code\u003e,\nsince \u003ccode\u003eHTMLChar.T\u003c/code\u003e is only necessary if you want to know,\nwhether a non-ASCII character was encoded as HTML entity\nor as non-ASCII Unicode character.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "T",
          "package": "tagchup",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "data"
        },
        "index": {
          "description": "An HTML element document is There is no requirement for Open and Close to match The type parameter string lets you choose between Char for interpreted HTML entity references and HTMLChar.T for uninterpreted HTML entities You will most oftenly want plain Char since HTMLChar.T is only necessary if you want to know whether non-ASCII character was encoded as HTML entity or as non-ASCII Unicode character",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "T",
          "package": "tagchup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closing tag\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Close",
          "package": "tagchup",
          "signature": "Close (Name name)",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "closing tag",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Close",
          "package": "tagchup",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Comment",
          "package": "tagchup",
          "signature": "Comment String",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "comment",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Comment",
          "package": "tagchup",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Name",
          "package": "tagchup",
          "signature": "Name ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Name",
          "package": "tagchup",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn open tag with \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003es in their original order.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Open",
          "package": "tagchup",
          "signature": "Open (Name name) [T name string]",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "An open tag with in their original order",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Open",
          "normalized": "Open(Name a)[T a b]",
          "package": "tagchup",
          "partial": "Open",
          "signature": "Open(Name name)[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tag like \u003ccode\u003e\u003c?xml ...\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Processing",
          "package": "tagchup",
          "signature": "Processing (Name name) (T name string)",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "tag like xml",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Processing",
          "package": "tagchup",
          "partial": "Processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Processing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tag like \u003ccode\u003e\u003c!DOCTYPE ...\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Special",
          "package": "tagchup",
          "signature": "Special (Name name) String",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "tag like DOCTYPE",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Special",
          "package": "tagchup",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA text node, guaranteed not to be the empty string\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Text",
          "package": "tagchup",
          "signature": "Text string",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "text node guaranteed not to be the empty string",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Text",
          "package": "tagchup",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a syntax error in the input file\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Warning",
          "package": "tagchup",
          "signature": "Warning String",
          "source": "src/Text-HTML-Tagchup-Tag.html#T",
          "type": "function"
        },
        "index": {
          "description": "Mark syntax error in the input file",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "Warning",
          "package": "tagchup",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "cdata",
          "package": "tagchup",
          "signature": "String -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#cdata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "cdata",
          "normalized": "String-\u003eT a b",
          "package": "tagchup",
          "signature": "String-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "close",
          "package": "tagchup",
          "signature": "Name name -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "close",
          "normalized": "Name a-\u003eT a b",
          "package": "tagchup",
          "signature": "Name name-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "comment",
          "package": "tagchup",
          "signature": "String -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "comment",
          "normalized": "String-\u003eT a b",
          "package": "tagchup",
          "signature": "String-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge adjacent Text sections.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "concatTexts",
          "package": "tagchup",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "src/Text-HTML-Tagchup-Tag.html#concatTexts",
          "type": "function"
        },
        "index": {
          "description": "Merge adjacent Text sections",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "concatTexts",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagchup",
          "partial": "Texts",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:concatTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "formatClose",
          "package": "tagchup",
          "signature": "Name name -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Tag.html#formatClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "formatClose",
          "normalized": "Name a-\u003eShowS",
          "package": "tagchup",
          "partial": "Close",
          "signature": "Name name-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:formatClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "formatOpen",
          "package": "tagchup",
          "signature": "Bool -\u003e Name name -\u003e [T name string] -\u003e ShowS",
          "source": "src/Text-HTML-Tagchup-Tag.html#formatOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "formatOpen",
          "normalized": "Bool-\u003eName a-\u003e[T a b]-\u003eShowS",
          "package": "tagchup",
          "partial": "Open",
          "signature": "Bool-\u003eName name-\u003e[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:formatOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all text content from tags (similar to Verbatim found in HaXml)\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "innerText",
          "package": "tagchup",
          "signature": "[T name string] -\u003e string",
          "source": "src/Text-HTML-Tagchup-Tag.html#innerText",
          "type": "function"
        },
        "index": {
          "description": "Extract all text content from tags similar to Verbatim found in HaXml",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "innerText",
          "normalized": "[T a b]-\u003eb",
          "package": "tagchup",
          "partial": "Text",
          "signature": "[T name string]-\u003estring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:innerText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isCData",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isCData",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "CData",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isClose",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isClose",
          "type": "function"
        },
        "index": {
          "description": "Test if is Close",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isClose",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Close",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isComment",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isComment",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Comment",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isOpen",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isOpen",
          "type": "function"
        },
        "index": {
          "description": "Test if is Open",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isOpen",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Open",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isProcessing",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isProcessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isProcessing",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Processing",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isProcessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isSpecial",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isSpecial",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Special",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isText",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isText",
          "type": "function"
        },
        "index": {
          "description": "Test if is Text",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isText",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Text",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isWarning",
          "package": "tagchup",
          "signature": "T name string -\u003e Bool",
          "source": "src/Text-HTML-Tagchup-Tag.html#isWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "isWarning",
          "normalized": "T a b-\u003eBool",
          "package": "tagchup",
          "partial": "Warning",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:isWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapName",
          "package": "tagchup",
          "signature": "(Name name0 -\u003e Name name1) -\u003e (Name name0 -\u003e Name name1) -\u003e T name0 string -\u003e T name1 string",
          "source": "src/Text-HTML-Tagchup-Tag.html#mapName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapName",
          "normalized": "(Name a-\u003eName a)-\u003e(Name a-\u003eName a)-\u003eT a b-\u003eT a b",
          "package": "tagchup",
          "partial": "Name",
          "signature": "(Name name-\u003eName name)-\u003e(Name name-\u003eName name)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify content of a Text or a CDATA part.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapText",
          "package": "tagchup",
          "signature": "(String -\u003e String) -\u003e T name String -\u003e T name String",
          "source": "src/Text-HTML-Tagchup-Tag.html#mapText",
          "type": "function"
        },
        "index": {
          "description": "Modify content of Text or CDATA part",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapText",
          "normalized": "(String-\u003eString)-\u003eT a String-\u003eT a String",
          "package": "tagchup",
          "partial": "Text",
          "signature": "(String-\u003eString)-\u003eT name String-\u003eT name String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapTextA",
          "package": "tagchup",
          "signature": "(String -\u003e f String) -\u003e T name String -\u003e f (T name String)",
          "source": "src/Text-HTML-Tagchup-Tag.html#mapTextA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "mapTextA",
          "normalized": "(String-\u003ea String)-\u003eT b String-\u003ea(T b String)",
          "package": "tagchup",
          "partial": "Text",
          "signature": "(String-\u003ef String)-\u003eT name String-\u003ef(T name String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:mapTextA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeCData",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe String",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeCData",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagchup",
          "partial": "CData",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeClose",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe (Name name)",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeClose",
          "normalized": "T a b-\u003eMaybe(Name a)",
          "package": "tagchup",
          "partial": "Close",
          "signature": "T name string-\u003eMaybe(Name name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeComment",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe String",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeComment",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagchup",
          "partial": "Comment",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeOpen",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe (Name name, [T name string])",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeOpen",
          "normalized": "T a b-\u003eMaybe(Name a,[T a b])",
          "package": "tagchup",
          "partial": "Open",
          "signature": "T name string-\u003eMaybe(Name name,[T name string])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeProcessing",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe (Name name, T name string)",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeProcessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeProcessing",
          "normalized": "T a b-\u003eMaybe(Name a,T a b)",
          "package": "tagchup",
          "partial": "Processing",
          "signature": "T name string-\u003eMaybe(Name name,T name string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeProcessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeSpecial",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe (Name name, String)",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeSpecial",
          "normalized": "T a b-\u003eMaybe(Name a,String)",
          "package": "tagchup",
          "partial": "Special",
          "signature": "T name string-\u003eMaybe(Name name,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeText",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe string",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeText",
          "type": "function"
        },
        "index": {
          "description": "Extract the string from within Text otherwise Nothing",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeText",
          "normalized": "T a b-\u003eMaybe b",
          "package": "tagchup",
          "partial": "Text",
          "signature": "T name string-\u003eMaybe string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeWarning",
          "package": "tagchup",
          "signature": "T name string -\u003e Maybe String",
          "source": "src/Text-HTML-Tagchup-Tag.html#maybeWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "maybeWarning",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagchup",
          "partial": "Warning",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:maybeWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "open",
          "package": "tagchup",
          "signature": "Name name -\u003e [T name string] -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#open",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "open",
          "normalized": "Name a-\u003e[T a b]-\u003eT a b",
          "package": "tagchup",
          "signature": "Name name-\u003e[T name string]-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "processing",
          "package": "tagchup",
          "signature": "Name name -\u003e T name string -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#processing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "processing",
          "normalized": "Name a-\u003eT a b-\u003eT a b",
          "package": "tagchup",
          "signature": "Name name-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:processing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "special",
          "package": "tagchup",
          "signature": "Name name -\u003e String -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#special",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "special",
          "normalized": "Name a-\u003eString-\u003eT a b",
          "package": "tagchup",
          "signature": "Name name-\u003eString-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "text",
          "package": "tagchup",
          "signature": "string -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "text",
          "normalized": "a-\u003eT b a",
          "package": "tagchup",
          "signature": "string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace CDATA sections by plain text.\n\u003c/p\u003e",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "textFromCData",
          "package": "tagchup",
          "signature": "T name [char] -\u003e T name [char]",
          "source": "src/Text-HTML-Tagchup-Tag.html#textFromCData",
          "type": "function"
        },
        "index": {
          "description": "Replace CDATA sections by plain text",
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "textFromCData",
          "normalized": "T a[b]-\u003eT a[b]",
          "package": "tagchup",
          "partial": "From CData",
          "signature": "T name[char]-\u003eT name[char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:textFromCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Tagchup.Tag",
          "name": "warning",
          "package": "tagchup",
          "signature": "String -\u003e T name string",
          "source": "src/Text-HTML-Tagchup-Tag.html#warning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML Tagchup Tag",
          "module": "Text.HTML.Tagchup.Tag",
          "name": "warning",
          "normalized": "String-\u003eT a b",
          "package": "tagchup",
          "signature": "String-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagchup/docs/Text-HTML-Tagchup-Tag.html#v:warning"
      }
    }
  ]
]