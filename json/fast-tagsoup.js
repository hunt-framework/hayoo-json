[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery fast TagSoup parser.\n\u003c/p\u003e\u003cp\u003eWorks only with strict bytestrings.\n  Correctly handles HTML \u003ccode\u003e\u003cscript\u003e\u003c/code\u003e and \u003ccode\u003e\u003cstyle\u003e\u003c/code\u003e tags.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be used in conjunction with the original \u003ccode\u003etagsoup\u003c/code\u003e package:\n\u003c/p\u003e\u003cpre\u003e import Text.HTML.TagSoup hiding (parseTags, renderTags)\n import Text.HTML.TagSoup.Fast\n\u003c/pre\u003e\u003cp\u003eRemark that tags are returned in lower case and comments are not returned.\n\u003c/p\u003e\u003cp\u003eIn long running multithreaded applications it's generally recommended to use\n  \u003ccode\u003e\u003ca\u003eparseTagsT\u003c/a\u003e\u003c/code\u003e and work with \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eText\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e to reduce memory fragmentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html",
        "fct-type": "module",
        "title": "Fast"
      },
      "index": {
        "description": "Very fast TagSoup parser Works only with strict bytestrings Correctly handles HTML script and style tags This module is intended to be used in conjunction with the original tagsoup package import Text.HTML.TagSoup hiding parseTags renderTags import Text.HTML.TagSoup.Fast Remark that tags are returned in lower case and comments are not returned In long running multithreaded applications it generally recommended to use parseTagsT and work with Tag Text to reduce memory fragmentation",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "Fast",
        "normalized": "",
        "package": "fast-tagsoup",
        "partial": "Fast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:ensureUtf8Xml",
      "description": {
        "fct-descr": "\u003cp\u003eDecode XML to UTF-8 using \u003ccode\u003eencoding\u003c/code\u003e attribute of \u003ccode\u003e\u003c?xml\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#ensureUtf8Xml",
        "fct-type": "function",
        "title": "ensureUtf8Xml"
      },
      "index": {
        "description": "Decode XML to UTF-8 using encoding attribute of xml tag",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "ensureUtf8Xml",
        "normalized": "ByteString-\u003eByteString",
        "package": "fast-tagsoup",
        "partial": "Utf Xml",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:escapeHtml",
      "description": {
        "fct-descr": "\u003cp\u003eEscape characters unsafe to HTML\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#escapeHtml",
        "fct-type": "function",
        "title": "escapeHtml"
      },
      "index": {
        "description": "Escape characters unsafe to HTML",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "escapeHtml",
        "normalized": "ByteString-\u003eByteString",
        "package": "fast-tagsoup",
        "partial": "Html",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:escapeHtmlT",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eescapeHtml\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#escapeHtmlT",
        "fct-type": "function",
        "title": "escapeHtmlT"
      },
      "index": {
        "description": "Alternative to escapeHtml working with Text",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "escapeHtmlT",
        "normalized": "Text-\u003eText",
        "package": "fast-tagsoup",
        "partial": "Html",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:parseTags",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a list of tags.\n\u003c/p\u003e\u003cpre\u003e parseTags \"\u003cdiv\u003e&amp;\u003cscript\u003ex\u003cy\u003c/script\u003e\" ==\n   [TagOpen \"div\" [],TagText \"&\",TagOpen \"script\" [],TagText \"x\u003cy\",TagClose \"script\"]\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "ByteString -\u003e [Tag ByteString]",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#parseTags",
        "fct-type": "function",
        "title": "parseTags"
      },
      "index": {
        "description": "Parse string to list of tags parseTags div amp script script TagOpen div TagText TagOpen script TagText TagClose script",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "parseTags",
        "normalized": "ByteString-\u003e[Tag ByteString]",
        "package": "fast-tagsoup",
        "partial": "Tags",
        "signature": "ByteString-\u003e[Tag ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:parseTagsT",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "ByteString -\u003e [Tag Text]",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#parseTagsT",
        "fct-type": "function",
        "title": "parseTagsT"
      },
      "index": {
        "description": "Alternative to parseTags working with Text",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "parseTagsT",
        "normalized": "ByteString-\u003e[Tag Text]",
        "package": "fast-tagsoup",
        "partial": "Tags",
        "signature": "ByteString-\u003e[Tag Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:renderTags",
      "description": {
        "fct-descr": "\u003cp\u003eShow a list of tags, as they might have been parsed.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "[Tag ByteString] -\u003e ByteString",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#renderTags",
        "fct-type": "function",
        "title": "renderTags"
      },
      "index": {
        "description": "Show list of tags as they might have been parsed",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "renderTags",
        "normalized": "[Tag ByteString]-\u003eByteString",
        "package": "fast-tagsoup",
        "partial": "Tags",
        "signature": "[Tag ByteString]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:renderTagsT",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "[Tag Text] -\u003e Text",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#renderTagsT",
        "fct-type": "function",
        "title": "renderTagsT"
      },
      "index": {
        "description": "Alternative to renderTags working with Text",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "renderTagsT",
        "normalized": "[Tag Text]-\u003eText",
        "package": "fast-tagsoup",
        "partial": "Tags",
        "signature": "[Tag Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:unescapeHtml",
      "description": {
        "fct-descr": "\u003cp\u003eConvert escaped HTML to raw.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#unescapeHtml",
        "fct-type": "function",
        "title": "unescapeHtml"
      },
      "index": {
        "description": "Convert escaped HTML to raw",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "unescapeHtml",
        "normalized": "ByteString-\u003eByteString",
        "package": "fast-tagsoup",
        "partial": "Html",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fast-tagsoup/docs/Text-HTML-TagSoup-Fast.html#v:unescapeHtmlT",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative to \u003ccode\u003e\u003ca\u003eunescapeHtml\u003c/a\u003e\u003c/code\u003e working with \u003ccode\u003eText\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Fast",
        "fct-package": "fast-tagsoup",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Text-HTML-TagSoup-Fast.html#unescapeHtmlT",
        "fct-type": "function",
        "title": "unescapeHtmlT"
      },
      "index": {
        "description": "Alternative to unescapeHtml working with Text",
        "hierarchy": "Text HTML TagSoup Fast",
        "module": "Text.HTML.TagSoup.Fast",
        "name": "unescapeHtmlT",
        "normalized": "Text-\u003eText",
        "package": "fast-tagsoup",
        "partial": "Html",
        "signature": "Text-\u003eText"
      }
    }
  }
]