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
        "word": "hexpat-tagsoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn integration of the \u003cem\u003etagsoup\u003c/em\u003e and \u003cem\u003ehexpat\u003c/em\u003e packages, allowing HTML to be parsed to a\n hexpat tree, tolerant of errors.\n\u003c/p\u003e\u003cp\u003eThe real work is done by Neil Mitchell's \u003cem\u003etagsoup\u003c/em\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "TagSoup",
          "package": "hexpat-tagsoup",
          "source": "src/Text-XML-Expat-TagSoup.html",
          "type": "module"
        },
        "index": {
          "description": "An integration of the tagsoup and hexpat packages allowing HTML to be parsed to hexpat tree tolerant of errors The real work is done by Neil Mitchell tagsoup package",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "TagSoup",
          "package": "hexpat-tagsoup",
          "partial": "Tag Soup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese options control how \u003ccode\u003eparseTags\u003c/code\u003e works.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "ParseOptions",
          "package": "hexpat-tagsoup",
          "type": "data"
        },
        "index": {
          "description": "These options control how parseTags works",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "ParseOptions",
          "package": "hexpat-tagsoup",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.TagSoup",
          "name": "ParseOptions",
          "package": "hexpat-tagsoup",
          "signature": "ParseOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "ParseOptions",
          "package": "hexpat-tagsoup",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to lookup an entity in an attribute (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e?)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optEntityAttrib",
          "package": "hexpat-tagsoup",
          "signature": "(str, Bool) -\u003e (str, [Tag str])",
          "type": "function"
        },
        "index": {
          "description": "How to lookup an entity in an attribute Bool has ending",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optEntityAttrib",
          "normalized": "(a,Bool)-\u003e(a,[Tag a])",
          "package": "hexpat-tagsoup",
          "partial": "Entity Attrib",
          "signature": "(str,Bool)-\u003e(str,[Tag str])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:optEntityAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to lookup an entity (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optEntityData",
          "package": "hexpat-tagsoup",
          "signature": "(str, Bool) -\u003e [Tag str]",
          "type": "function"
        },
        "index": {
          "description": "How to lookup an entity Bool has ending",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optEntityData",
          "normalized": "(a,Bool)-\u003e[Tag a]",
          "package": "hexpat-tagsoup",
          "partial": "Entity Data",
          "signature": "(str,Bool)-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:optEntityData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e values be given before some items (default=False,fast=False)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagPosition",
          "package": "hexpat-tagsoup",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Should TagPosition values be given before some items default False fast False",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagPosition",
          "package": "hexpat-tagsoup",
          "partial": "Tag Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:optTagPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire no adjacent \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e values (default=True,fast=False)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagTextMerge",
          "package": "hexpat-tagsoup",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Require no adjacent TagText values default True fast False",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagTextMerge",
          "package": "hexpat-tagsoup",
          "partial": "Tag Text Merge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:optTagTextMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e values be given (default=False,fast=False)\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagWarning",
          "package": "hexpat-tagsoup",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Should TagWarning values be given default False fast False",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "optTagWarning",
          "package": "hexpat-tagsoup",
          "partial": "Tag Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:optTagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default parse options value, described in \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseOptions",
          "package": "hexpat-tagsoup",
          "signature": "ParseOptions str",
          "type": "function"
        },
        "index": {
          "description": "The default parse options value described in ParseOptions",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseOptions",
          "package": "hexpat-tagsoup",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:parseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e structure optimised for speed, following the fast options.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseOptionsFast",
          "package": "hexpat-tagsoup",
          "signature": "ParseOptions str",
          "type": "function"
        },
        "index": {
          "description": "ParseOptions structure optimised for speed following the fast options",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseOptionsFast",
          "package": "hexpat-tagsoup",
          "partial": "Options Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:parseOptionsFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse tags using TagSoup, invoke canonicalizeTags to convert them all to\n lower case, automatically self-close tags like \u003ccode\u003eimg\u003c/code\u003e and \u003ccode\u003einput\u003c/code\u003e, then\n convert to a hexpat tree.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseTags",
          "package": "hexpat-tagsoup",
          "signature": "s -\u003e UNode text",
          "source": "src/Text-XML-Expat-TagSoup.html#parseTags",
          "type": "function"
        },
        "index": {
          "description": "Parse tags using TagSoup invoke canonicalizeTags to convert them all to lower case automatically self-close tags like img and input then convert to hexpat tree",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseTags",
          "normalized": "a-\u003eUNode b",
          "package": "hexpat-tagsoup",
          "partial": "Tags",
          "signature": "s-\u003eUNode text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:parseTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant that accepts options.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseTagsOptions",
          "package": "hexpat-tagsoup",
          "signature": "ParseOptions s -\u003e s -\u003e UNode text",
          "source": "src/Text-XML-Expat-TagSoup.html#parseTagsOptions",
          "type": "function"
        },
        "index": {
          "description": "Variant that accepts options",
          "hierarchy": "Text XML Expat TagSoup",
          "module": "Text.XML.Expat.TagSoup",
          "name": "parseTagsOptions",
          "normalized": "ParseOptions a-\u003ea-\u003eUNode b",
          "package": "hexpat-tagsoup",
          "partial": "Tags Options",
          "signature": "ParseOptions s-\u003es-\u003eUNode text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-tagsoup/docs/Text-XML-Expat-TagSoup.html#v:parseTagsOptions"
      }
    }
  ]
]