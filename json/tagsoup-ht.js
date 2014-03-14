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
        "word": "tagsoup-ht"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "All tags that are defined being self-closing by the HTML standard\nare formatted only as open tag.\nE.g. \u003ctt\u003e\u003ca\u003ebr\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "html",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Format.html#html",
          "type": "function"
        },
        "index": {
          "description": "All tags that are defined being self-closing by the HTML standard are formatted only as open tag E.g br",
          "hierarchy": "Text HTML TagSoup HT Format",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "html",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Format.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If the first tag is \u003ctt\u003e\u003ca\u003e?xml ...?\u003c/a\u003e\u003c/tt\u003e then format in XHTML style,\nelse in HTML style.\n",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "htmlOrXhtml",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Format.html#htmlOrXhtml",
          "type": "function"
        },
        "index": {
          "description": "If the first tag is xml then format in XHTML style else in HTML style",
          "hierarchy": "Text HTML TagSoup HT Format",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "htmlOrXhtml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "partial": "Or Xhtml",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Format.html#v:htmlOrXhtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "All tags that are defined being self-closing by the XHTML standard\nare formatted as self-closing open tag.\nE.g. \u003ctt\u003e\u003ca\u003ebr/\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xhtml",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Format.html#xhtml",
          "type": "function"
        },
        "index": {
          "description": "All tags that are defined being self-closing by the XHTML standard are formatted as self-closing open tag E.g br",
          "hierarchy": "Text HTML TagSoup HT Format",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xhtml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Format.html#v:xhtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "All tags are formatted as they are.\n",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xml",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Format.html#xml",
          "type": "function"
        },
        "index": {
          "description": "All tags are formatted as they are",
          "hierarchy": "Text HTML TagSoup HT Format",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xml",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Format.html#v:xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Adjacent corresponding open and close tags are merged to a self-closing tag.\nE.g. \u003ctt\u003e\u003ca\u003ea\u003e\u003c/a\u003e@ becomes @\u003ca/\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xmlCondensed",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Format.html#xmlCondensed",
          "type": "function"
        },
        "index": {
          "description": "Adjacent corresponding open and close tags are merged to self-closing tag E.g becomes",
          "hierarchy": "Text HTML TagSoup HT Format",
          "module": "Text.HTML.TagSoup.HT.Format",
          "name": "xmlCondensed",
          "normalized": "[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "partial": "Condensed",
          "signature": "[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Format.html#v:xmlCondensed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "CharType",
          "package": "tagsoup-ht",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#CharType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "CharType",
          "package": "tagsoup-ht",
          "partial": "Char Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:CharType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse the inner of a single tag.\nThat is, \u003ctt\u003erunTag \"\u003cbla\u003e\"\u003c/tt\u003e is the same as \u003ctt\u003erunInnerOfTag \"\u003cbla\u003e\"\u003c/tt\u003e.\n",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runInnerOfTag",
          "package": "tagsoup-ht",
          "signature": "String -\u003e T name sink",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#runInnerOfTag",
          "type": "function"
        },
        "index": {
          "description": "Parse the inner of single tag That is runTag bla is the same as runInnerOfTag bla",
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runInnerOfTag",
          "normalized": "String-\u003eT a b",
          "package": "tagsoup-ht",
          "partial": "Inner Of Tag",
          "signature": "String-\u003eT name sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:runInnerOfTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like \u003ctt\u003e\u003ca\u003erunSoupWithPositions\u003c/a\u003e\u003c/tt\u003e but hides source file positions.\n",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoup",
          "package": "tagsoup-ht",
          "signature": "source -\u003e [T name sink]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#runSoup",
          "type": "function"
        },
        "index": {
          "description": "Like runSoupWithPositions but hides source file positions",
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoup",
          "normalized": "a-\u003e[T b c]",
          "package": "tagsoup-ht",
          "partial": "Soup",
          "signature": "source-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:runSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse an HTML document to a list of \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e.\n Automatically expands out escape characters.\n",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoupWithPositions",
          "package": "tagsoup-ht",
          "signature": "source -\u003e [T name sink]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#runSoupWithPositions",
          "type": "function"
        },
        "index": {
          "description": "Parse an HTML document to list of Automatically expands out escape characters",
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoupWithPositions",
          "normalized": "a-\u003e[T b c]",
          "package": "tagsoup-ht",
          "partial": "Soup With Positions",
          "signature": "source-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:runSoupWithPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoupWithPositionsName",
          "package": "tagsoup-ht",
          "signature": "FilePath -\u003e source -\u003e [T name sink]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#runSoupWithPositionsName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runSoupWithPositionsName",
          "normalized": "FilePath-\u003ea-\u003e[T b c]",
          "package": "tagsoup-ht",
          "partial": "Soup With Positions Name",
          "signature": "FilePath-\u003esource-\u003e[T name sink]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:runSoupWithPositionsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse a single tag, throws an error if there is a syntax error.\nThis is useful for parsing a match pattern.\n",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runTag",
          "package": "tagsoup-ht",
          "signature": "source -\u003e T name sink",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Parser.html#runTag",
          "type": "function"
        },
        "index": {
          "description": "Parse single tag throws an error if there is syntax error This is useful for parsing match pattern",
          "hierarchy": "Text HTML TagSoup HT Parser",
          "module": "Text.HTML.TagSoup.HT.Parser",
          "name": "runTag",
          "normalized": "a-\u003eT b c",
          "package": "tagsoup-ht",
          "partial": "Tag",
          "signature": "source-\u003eT name sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Parser.html#v:runTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.ParserNM",
          "name": "runSoup",
          "package": "tagsoup-ht",
          "signature": "String -\u003e [Tag]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-ParserNM.html#runSoup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT ParserNM",
          "module": "Text.HTML.TagSoup.HT.ParserNM",
          "name": "runSoup",
          "normalized": "String-\u003e[Tag]",
          "package": "tagsoup-ht",
          "partial": "Soup",
          "signature": "String-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-ParserNM.html#v:runSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "T",
          "package": "tagsoup-ht",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "T",
          "package": "tagsoup-ht",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Merge adjacent Text sections.\n",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "concatTexts",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#concatTexts",
          "type": "function"
        },
        "index": {
          "description": "Merge adjacent Text sections",
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "concatTexts",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagsoup-ht",
          "partial": "Texts",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:concatTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "cons",
          "package": "tagsoup-ht",
          "signature": "T -\u003e T name string -\u003e T name string",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "cons",
          "normalized": "T-\u003eT a b-\u003eT a b",
          "package": "tagsoup-ht",
          "signature": "T-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "lift",
          "package": "tagsoup-ht",
          "signature": "(T name0 string0 -\u003e T name1 string1) -\u003e T name0 string0 -\u003e T name1 string1",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "lift",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "tagsoup-ht",
          "signature": "(T name string-\u003eT name string)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "position",
          "package": "tagsoup-ht",
          "signature": "T (T name string) T",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "position",
          "package": "tagsoup-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "tag",
          "package": "tagsoup-ht",
          "signature": "T (T name string) (T name string)",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "tag",
          "package": "tagsoup-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "textFromCData",
          "package": "tagsoup-ht",
          "signature": "T name String -\u003e T name String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-PositionTag.html#textFromCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT PositionTag",
          "module": "Text.HTML.TagSoup.HT.PositionTag",
          "name": "textFromCData",
          "normalized": "T a String-\u003eT a String",
          "package": "tagsoup-ht",
          "partial": "From CData",
          "signature": "T name String-\u003eT name String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-PositionTag.html#v:textFromCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "findMetaEncoding",
          "package": "tagsoup-ht",
          "signature": "[T name String] -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Process.html#findMetaEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Process",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "findMetaEncoding",
          "normalized": "[T a String]-\u003eMaybe String",
          "package": "tagsoup-ht",
          "partial": "Meta Encoding",
          "signature": "[T name String]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Process.html#v:findMetaEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "getHeadTags",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Process.html#getHeadTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Process",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "getHeadTags",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagsoup-ht",
          "partial": "Head Tags",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Process.html#v:getHeadTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract META tags which contain HTTP-EQUIV attribute\nand present these values like HTTP headers.\n",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "getMetaHTTPHeaders",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e [(string, string)]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Process.html#getMetaHTTPHeaders",
          "type": "function"
        },
        "index": {
          "description": "Extract META tags which contain HTTP-EQUIV attribute and present these values like HTTP headers",
          "hierarchy": "Text HTML TagSoup HT Process",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "getMetaHTTPHeaders",
          "normalized": "[T a b]-\u003e[(b,b)]",
          "package": "tagsoup-ht",
          "partial": "Meta HTTPHeaders",
          "signature": "[T name string]-\u003e[(string,string)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Process.html#v:getMetaHTTPHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify attributes and tags of certain parts.\nFor limitations, see \u003ctt\u003e\u003ca\u003eparts\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "partAttrs",
          "package": "tagsoup-ht",
          "signature": "(Name name -\u003e Bool) -\u003e (([T name string], [T name string]) -\u003e ([T name string], [T name string])) -\u003e [T name string] -\u003e [T name string]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Process.html#partAttrs",
          "type": "function"
        },
        "index": {
          "description": "Modify attributes and tags of certain parts For limitations see parts",
          "hierarchy": "Text HTML TagSoup HT Process",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "partAttrs",
          "normalized": "(Name a-\u003eBool)-\u003e(([T a b],[T a b])-\u003e([T a b],[T a b]))-\u003e[T a b]-\u003e[T a b]",
          "package": "tagsoup-ht",
          "partial": "Attrs",
          "signature": "(Name name-\u003eBool)-\u003e(([T name string],[T name string])-\u003e([T name string],[T name string]))-\u003e[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Process.html#v:partAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract parts from the tag soup\nthat are enclosed in corresponding open and close tags.\nIf a close tag is missing, the soup end is considered as end of the part.\nHowever nested tags are not supported,\ne.g. in \u003ctt\u003e\u003ca\u003ea\u003e\u003ca\u003e\u003c/a\u003e\u003c/a\u003e@ the second @\u003ca\u003c/a\u003e\u003c/tt\u003e is considered\nto be enclosed in the first \u003ctt\u003e\u003ca\u003ea\u003e@ and the first @\u003c/a\u003c/a\u003e\u003c/tt\u003e\nand the second \u003ctt\u003e\u003ca\u003e/a\u003c/a\u003e\u003c/tt\u003e is ignored.\n",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "parts",
          "package": "tagsoup-ht",
          "signature": "(Name name -\u003e Bool) -\u003e [T name string] -\u003e [Either ((Name name, [T name string]), [T name string]) [T name string]]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Process.html#parts",
          "type": "function"
        },
        "index": {
          "description": "Extract parts from the tag soup that are enclosed in corresponding open and close tags If close tag is missing the soup end is considered as end of the part However nested tags are not supported e.g in the second is considered to be enclosed in the first and the first and the second is ignored",
          "hierarchy": "Text HTML TagSoup HT Process",
          "module": "Text.HTML.TagSoup.HT.Process",
          "name": "parts",
          "normalized": "(Name a-\u003eBool)-\u003e[T a b]-\u003e[Either((Name a,[T a b]),[T a b])[T a b]]",
          "package": "tagsoup-ht",
          "signature": "(Name name-\u003eBool)-\u003e[T name string]-\u003e[Either((Name name,[T name string]),[T name string])[T name string]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Process.html#v:parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "match an closing tag\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "close",
          "package": "tagsoup-ht",
          "signature": "(Name name -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#close",
          "type": "function"
        },
        "index": {
          "description": "match an closing tag",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "close",
          "normalized": "(Name a-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "(Name name-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "match a closing tag's name literally\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "closeLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#closeLit",
          "type": "function"
        },
        "index": {
          "description": "match closing tag name literally",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "closeLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:closeLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Check if the \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e is \u003ctt\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/tt\u003e and matches the given name\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "closeNameLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#closeNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check if the is Close and matches the given name",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "closeNameLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Name Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:closeNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "comment",
          "package": "tagsoup-ht",
          "signature": "(String -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "comment",
          "normalized": "(String-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "(String-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "ignore",
          "package": "tagsoup-ht",
          "signature": "a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#ignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "ignore",
          "normalized": "a-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "match an opening tag\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "open",
          "package": "tagsoup-ht",
          "signature": "(Name name -\u003e Bool) -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#open",
          "type": "function"
        },
        "index": {
          "description": "match an opening tag",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "open",
          "normalized": "(Name a-\u003eBool)-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "(Name name-\u003eBool)-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openAttrLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e String -\u003e string -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#openAttrLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openAttrLit",
          "normalized": "String-\u003eString-\u003ea-\u003eT b a-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Attr Lit",
          "signature": "String-\u003eString-\u003estring-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:openAttrLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Match a tag with given name, that contains an attribute\nwith given name, that satisfies a predicate.\nIf an attribute occurs multiple times,\nall occurrences are checked.\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openAttrNameLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e String -\u003e (string -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#openAttrNameLit",
          "type": "function"
        },
        "index": {
          "description": "Match tag with given name that contains an attribute with given name that satisfies predicate If an attribute occurs multiple times all occurrences are checked",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openAttrNameLit",
          "normalized": "String-\u003eString-\u003e(a-\u003eBool)-\u003eT b a-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Attr Name Lit",
          "signature": "String-\u003eString-\u003e(string-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:openAttrNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "match a opening tag's name literally\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e ([T name string] -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#openLit",
          "type": "function"
        },
        "index": {
          "description": "match opening tag name literally",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openLit",
          "normalized": "String-\u003e([T a b]-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Lit",
          "signature": "String-\u003e([T name string]-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:openLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Check if the \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e is \u003ctt\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/tt\u003e and matches the given name\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openNameLit",
          "package": "tagsoup-ht",
          "signature": "String -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#openNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check if the is Open and matches the given name",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "openNameLit",
          "normalized": "String-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Name Lit",
          "signature": "String-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:openNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "special",
          "package": "tagsoup-ht",
          "signature": "(Name name -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#special",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "special",
          "normalized": "(Name a-\u003eBool)-\u003e(String-\u003eBool)-\u003eT a b-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "(Name name-\u003eBool)-\u003e(String-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "match a text\n",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "text",
          "package": "tagsoup-ht",
          "signature": "(string -\u003e Bool) -\u003e T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag-Match.html#text",
          "type": "function"
        },
        "index": {
          "description": "match text",
          "hierarchy": "Text HTML TagSoup HT Tag Match",
          "module": "Text.HTML.TagSoup.HT.Tag.Match",
          "name": "text",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eBool",
          "package": "tagsoup-ht",
          "signature": "(string-\u003eBool)-\u003eT name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag-Match.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "Name",
          "package": "tagsoup-ht",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-XML-Basic-Tag.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "Name",
          "package": "tagsoup-ht",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "T",
          "package": "tagsoup-ht",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "T",
          "package": "tagsoup-ht",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Merge adjacent Text sections.\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "concatTexts",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e [T name string]",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#concatTexts",
          "type": "function"
        },
        "index": {
          "description": "Merge adjacent Text sections",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "concatTexts",
          "normalized": "[T a b]-\u003e[T a b]",
          "package": "tagsoup-ht",
          "partial": "Texts",
          "signature": "[T name string]-\u003e[T name string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:concatTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "formatClose",
          "package": "tagsoup-ht",
          "signature": "Name name -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#formatClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "formatClose",
          "normalized": "Name a-\u003eShowS",
          "package": "tagsoup-ht",
          "partial": "Close",
          "signature": "Name name-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:formatClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "formatOpen",
          "package": "tagsoup-ht",
          "signature": "Bool -\u003e Name name -\u003e [T name string] -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#formatOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "formatOpen",
          "normalized": "Bool-\u003eName a-\u003e[T a b]-\u003eShowS",
          "package": "tagsoup-ht",
          "partial": "Open",
          "signature": "Bool-\u003eName name-\u003e[T name string]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:formatOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract all text content from tags (similar to Verbatim found in HaXml)\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "innerText",
          "package": "tagsoup-ht",
          "signature": "[T name string] -\u003e string",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#innerText",
          "type": "function"
        },
        "index": {
          "description": "Extract all text content from tags similar to Verbatim found in HaXml",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "innerText",
          "normalized": "[T a b]-\u003eb",
          "package": "tagsoup-ht",
          "partial": "Text",
          "signature": "[T name string]-\u003estring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:innerText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isCData",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isCData",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "CData",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test if a \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e is a \u003ctt\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isClose",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isClose",
          "type": "function"
        },
        "index": {
          "description": "Test if is Close",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isClose",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Close",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isComment",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isComment",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Comment",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test if a \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e is a \u003ctt\u003e\u003ca\u003eOpen\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isOpen",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isOpen",
          "type": "function"
        },
        "index": {
          "description": "Test if is Open",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isOpen",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Open",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isProcessing",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isProcessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isProcessing",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Processing",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isProcessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isSpecial",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isSpecial",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Special",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test if a \u003ctt\u003e\u003ca\u003eT\u003c/a\u003e\u003c/tt\u003e is a \u003ctt\u003e\u003ca\u003eText\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isText",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isText",
          "type": "function"
        },
        "index": {
          "description": "Test if is Text",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isText",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Text",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isWarning",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Bool",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#isWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "isWarning",
          "normalized": "T a b-\u003eBool",
          "package": "tagsoup-ht",
          "partial": "Warning",
          "signature": "T name string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:isWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapName",
          "package": "tagsoup-ht",
          "signature": "(name0 -\u003e name1) -\u003e T name0 string -\u003e T name1 string",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#mapName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapName",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "tagsoup-ht",
          "partial": "Name",
          "signature": "(name-\u003ename)-\u003eT name string-\u003eT name string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:mapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify content of a Text or a CDATA part.\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapText",
          "package": "tagsoup-ht",
          "signature": "(String -\u003e String) -\u003e T name String -\u003e T name String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#mapText",
          "type": "function"
        },
        "index": {
          "description": "Modify content of Text or CDATA part",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapText",
          "normalized": "(String-\u003eString)-\u003eT a String-\u003eT a String",
          "package": "tagsoup-ht",
          "partial": "Text",
          "signature": "(String-\u003eString)-\u003eT name String-\u003eT name String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:mapText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapTextA",
          "package": "tagsoup-ht",
          "signature": "(String -\u003e f String) -\u003e T name String -\u003e f (T name String)",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#mapTextA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "mapTextA",
          "normalized": "(String-\u003ea String)-\u003eT b String-\u003ea(T b String)",
          "package": "tagsoup-ht",
          "partial": "Text",
          "signature": "(String-\u003ef String)-\u003eT name String-\u003ef(T name String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:mapTextA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeCData",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeCData",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagsoup-ht",
          "partial": "CData",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeClose",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe (Name name)",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeClose",
          "normalized": "T a b-\u003eMaybe(Name a)",
          "package": "tagsoup-ht",
          "partial": "Close",
          "signature": "T name string-\u003eMaybe(Name name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeComment",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeComment",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagsoup-ht",
          "partial": "Comment",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeOpen",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe (Name name, [T name string])",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeOpen",
          "normalized": "T a b-\u003eMaybe(Name a,[T a b])",
          "package": "tagsoup-ht",
          "partial": "Open",
          "signature": "T name string-\u003eMaybe(Name name,[T name string])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeProcessing",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe (Name name, T name string)",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeProcessing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeProcessing",
          "normalized": "T a b-\u003eMaybe(Name a,T a b)",
          "package": "tagsoup-ht",
          "partial": "Processing",
          "signature": "T name string-\u003eMaybe(Name name,T name string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeProcessing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeSpecial",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe (Name name, String)",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeSpecial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeSpecial",
          "normalized": "T a b-\u003eMaybe(Name a,String)",
          "package": "tagsoup-ht",
          "partial": "Special",
          "signature": "T name string-\u003eMaybe(Name name,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract the string from within \u003ctt\u003e\u003ca\u003eText\u003c/a\u003e\u003c/tt\u003e, otherwise \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeText",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe string",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeText",
          "type": "function"
        },
        "index": {
          "description": "Extract the string from within Text otherwise Nothing",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeText",
          "normalized": "T a b-\u003eMaybe b",
          "package": "tagsoup-ht",
          "partial": "Text",
          "signature": "T name string-\u003eMaybe string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeWarning",
          "package": "tagsoup-ht",
          "signature": "T name string -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#maybeWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "maybeWarning",
          "normalized": "T a b-\u003eMaybe String",
          "package": "tagsoup-ht",
          "partial": "Warning",
          "signature": "T name string-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:maybeWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Replace CDATA sections by plain text.\n",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "textFromCData",
          "package": "tagsoup-ht",
          "signature": "T name String -\u003e T name String",
          "source": "http://hackage.haskell.org/package/tagsoup-ht/docs/src/Text-HTML-TagSoup-HT-Tag.html#textFromCData",
          "type": "function"
        },
        "index": {
          "description": "Replace CDATA sections by plain text",
          "hierarchy": "Text HTML TagSoup HT Tag",
          "module": "Text.HTML.TagSoup.HT.Tag",
          "name": "textFromCData",
          "normalized": "T a String-\u003eT a String",
          "package": "tagsoup-ht",
          "partial": "From CData",
          "signature": "T name String-\u003eT name String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-ht/docs/Text-HTML-TagSoup-HT-Tag.html#v:textFromCData"
      }
    }
  ]
]