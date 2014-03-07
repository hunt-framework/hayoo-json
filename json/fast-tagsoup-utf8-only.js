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
        "word": "fast-tagsoup-utf8-only"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery fast TagSoup parser.\n\u003c/p\u003e\u003cp\u003eWorks only with strict bytestrings.\n  Correctly handles HTML \u003ccode\u003e\u003cscript\u003e\u003c/code\u003e and \u003ccode\u003e\u003cstyle\u003e\u003c/code\u003e tags.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be used in conjunction with the original \u003ccode\u003etagsoup\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003e import Text.HTML.TagSoup hiding (parseTags, renderTags)\n import Text.HTML.TagSoup.Fast.Utf8Only\n\u003c/pre\u003e\u003cp\u003eRemark that tags are returned in lower case and comments are not returned.\n\u003c/p\u003e\u003cp\u003eIn long running multithreaded applications it's generally recommended to use\n  \u003ccode\u003e\u003ca\u003eparseTagsT\u003c/a\u003e\u003c/code\u003e and work with \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eText\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e to reduce memory fragmentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "Utf8Only",
          "package": "fast-tagsoup-utf8-only",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html",
          "type": "module"
        },
        "index": {
          "description": "Very fast TagSoup parser Works only with strict bytestrings Correctly handles HTML script and style tags This module is intended to be used in conjunction with the original tagsoup package import Text.HTML.TagSoup hiding parseTags renderTags import Text.HTML.TagSoup.Fast.Utf8Only Remark that tags are returned in lower case and comments are not returned In long running multithreaded applications it generally recommended to use parseTagsT and work with Tag Text to reduce memory fragmentation",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "Utf8Only",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Utf Only",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode XML to UTF-8 using \u003ccode\u003eencoding\u003c/code\u003e attribute of \u003ccode\u003e\u003c?xml\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "ensureUtf8Xml",
          "package": "fast-tagsoup-utf8-only",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#ensureUtf8Xml",
          "type": "function"
        },
        "index": {
          "description": "Decode XML to UTF-8 using encoding attribute of xml tag",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "ensureUtf8Xml",
          "normalized": "ByteString-\u003eByteString",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Utf Xml",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:ensureUtf8Xml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape characters unsafe to HTML\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "escapeHtml",
          "package": "fast-tagsoup-utf8-only",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#escapeHtml",
          "type": "function"
        },
        "index": {
          "description": "Escape characters unsafe to HTML",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "escapeHtml",
          "normalized": "ByteString-\u003eByteString",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Html",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:escapeHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eescapeHtml\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "escapeHtmlT",
          "package": "fast-tagsoup-utf8-only",
          "signature": "Text -\u003e Text",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#escapeHtmlT",
          "type": "function"
        },
        "index": {
          "description": "Alternative to escapeHtml working with Text",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "escapeHtmlT",
          "normalized": "Text-\u003eText",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Html",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:escapeHtmlT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string to a list of tags.\n\u003c/p\u003e\u003cpre\u003e parseTags \"\u003cdiv\u003e&amp;\u003cscript\u003ex\u003cy\u003c/script\u003e\" ==\n   [TagOpen \"div\" [],TagText \"&\",TagOpen \"script\" [],TagText \"x\u003cy\",TagClose \"script\"]\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "parseTags",
          "package": "fast-tagsoup-utf8-only",
          "signature": "ByteString -\u003e [Tag ByteString]",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#parseTags",
          "type": "function"
        },
        "index": {
          "description": "Parse string to list of tags parseTags div amp script script TagOpen div TagText TagOpen script TagText TagClose script",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "parseTags",
          "normalized": "ByteString-\u003e[Tag ByteString]",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Tags",
          "signature": "ByteString-\u003e[Tag ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:parseTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "parseTagsT",
          "package": "fast-tagsoup-utf8-only",
          "signature": "ByteString -\u003e [Tag Text]",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#parseTagsT",
          "type": "function"
        },
        "index": {
          "description": "Alternative to parseTags working with Text",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "parseTagsT",
          "normalized": "ByteString-\u003e[Tag Text]",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Tags",
          "signature": "ByteString-\u003e[Tag Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:parseTagsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list of tags, as they might have been parsed.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "renderTags",
          "package": "fast-tagsoup-utf8-only",
          "signature": "[Tag ByteString] -\u003e ByteString",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#renderTags",
          "type": "function"
        },
        "index": {
          "description": "Show list of tags as they might have been parsed",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "renderTags",
          "normalized": "[Tag ByteString]-\u003eByteString",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Tags",
          "signature": "[Tag ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:renderTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "renderTagsT",
          "package": "fast-tagsoup-utf8-only",
          "signature": "[Tag Text] -\u003e Text",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#renderTagsT",
          "type": "function"
        },
        "index": {
          "description": "Alternative to renderTags working with Text",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "renderTagsT",
          "normalized": "[Tag Text]-\u003eText",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Tags",
          "signature": "[Tag Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:renderTagsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert escaped HTML to raw.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "unescapeHtml",
          "package": "fast-tagsoup-utf8-only",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#unescapeHtml",
          "type": "function"
        },
        "index": {
          "description": "Convert escaped HTML to raw",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "unescapeHtml",
          "normalized": "ByteString-\u003eByteString",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Html",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:unescapeHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eunescapeHtml\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "unescapeHtmlT",
          "package": "fast-tagsoup-utf8-only",
          "signature": "Text -\u003e Text",
          "source": "src/Text-HTML-TagSoup-Fast-Utf8Only.html#unescapeHtmlT",
          "type": "function"
        },
        "index": {
          "description": "Alternative to unescapeHtml working with Text",
          "hierarchy": "Text HTML TagSoup Fast Utf8Only",
          "module": "Text.HTML.TagSoup.Fast.Utf8Only",
          "name": "unescapeHtmlT",
          "normalized": "Text-\u003eText",
          "package": "fast-tagsoup-utf8-only",
          "partial": "Html",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-tagsoup-utf8-only/docs/Text-HTML-TagSoup-Fast-Utf8Only.html#v:unescapeHtmlT"
      }
    }
  ]
]