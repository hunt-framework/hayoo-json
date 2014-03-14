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
        "word": "tagsoup-parsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "Parsec",
          "package": "tagsoup-parsec",
          "source": "src/Text-HTML-TagSoup-Parsec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "Parsec",
          "package": "tagsoup-parsec",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Tag parser, using Tag as the token.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "TagParser",
          "package": "tagsoup-parsec",
          "source": "src/Text-HTML-TagSoup-Parsec.html#TagParser",
          "type": "type"
        },
        "index": {
          "description": "The Tag parser using Tag as the token",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "TagParser",
          "package": "tagsoup-parsec",
          "partial": "Tag Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#t:TagParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful tag parser\n This is a new type alias to allow backwards compatibility with old code.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "TagParserSt",
          "package": "tagsoup-parsec",
          "source": "src/Text-HTML-TagSoup-Parsec.html#TagParserSt",
          "type": "type"
        },
        "index": {
          "description": "stateful tag parser This is new type alias to allow backwards compatibility with old code",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "TagParserSt",
          "package": "tagsoup-parsec",
          "partial": "Tag Parser St",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#t:TagParserSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type represent the TagOpen, any inner tags , and the TagClose.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "WholeTag",
          "package": "tagsoup-parsec",
          "source": "src/Text-HTML-TagSoup-Parsec.html#WholeTag",
          "type": "type"
        },
        "index": {
          "description": "type represent the TagOpen any inner tags and the TagClose",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "WholeTag",
          "package": "tagsoup-parsec",
          "partial": "Whole Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#t:WholeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallCloseTags will return all TagClose with the given name.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allCloseTags",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st [Tag str]",
          "source": "src/Text-HTML-TagSoup-Parsec.html#allCloseTags",
          "type": "function"
        },
        "index": {
          "description": "allCloseTags will return all TagClose with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allCloseTags",
          "normalized": "a-\u003eTagParserSt a b[Tag a]",
          "package": "tagsoup-parsec",
          "partial": "Close Tags",
          "signature": "str-\u003eTagParserSt str st[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:allCloseTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallOpenTags will return all TagOpen with the given name.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allOpenTags",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st [Tag str]",
          "source": "src/Text-HTML-TagSoup-Parsec.html#allOpenTags",
          "type": "function"
        },
        "index": {
          "description": "allOpenTags will return all TagOpen with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allOpenTags",
          "normalized": "a-\u003eTagParserSt a b[Tag a]",
          "package": "tagsoup-parsec",
          "partial": "Open Tags",
          "signature": "str-\u003eTagParserSt str st[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:allOpenTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallP takes a parser which returns  a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value, and returns a list of matching tokens.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allP",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st (Maybe a) -\u003e GenParser tok st [a]",
          "source": "src/Text-HTML-TagSoup-Parsec.html#allP",
          "type": "function"
        },
        "index": {
          "description": "allP takes parser which returns Maybe value and returns list of matching tokens",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allP",
          "normalized": "GenParser a b(Maybe c)-\u003eGenParser a b[c]",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st(Maybe a)-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:allP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallWholeTags will return all WholeTag with the given name.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allWholeTags",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st [WholeTag str]",
          "source": "src/Text-HTML-TagSoup-Parsec.html#allWholeTags",
          "type": "function"
        },
        "index": {
          "description": "allWholeTags will return all WholeTag with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "allWholeTags",
          "normalized": "a-\u003eTagParserSt a b[WholeTag a]",
          "package": "tagsoup-parsec",
          "partial": "Whole Tags",
          "signature": "str-\u003eTagParserSt str st[WholeTag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:allWholeTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecloseTag matches a TagClose with the given name.  It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "closeTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Tag str)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#closeTag",
          "type": "function"
        },
        "index": {
          "description": "closeTag matches TagClose with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "closeTag",
          "normalized": "a-\u003eTagParserSt a b(Tag a)",
          "package": "tagsoup-parsec",
          "partial": "Tag",
          "signature": "str-\u003eTagParserSt str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:closeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither a Right TagClose or a Left arbitary tag.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherCloseTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Either (Tag str) (Tag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#eitherCloseTag",
          "type": "function"
        },
        "index": {
          "description": "either Right TagClose or Left arbitary tag",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherCloseTag",
          "normalized": "a-\u003eTagParserSt a b(Either(Tag a)(Tag a))",
          "package": "tagsoup-parsec",
          "partial": "Close Tag",
          "signature": "str-\u003eTagParserSt str st(Either(Tag str)(Tag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:eitherCloseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither a Right TagOpen or a Left arbitary tag.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherOpenTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Either (Tag str) (Tag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#eitherOpenTag",
          "type": "function"
        },
        "index": {
          "description": "either Right TagOpen or Left arbitary tag",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherOpenTag",
          "normalized": "a-\u003eTagParserSt a b(Either(Tag a)(Tag a))",
          "package": "tagsoup-parsec",
          "partial": "Open Tag",
          "signature": "str-\u003eTagParserSt str st(Either(Tag str)(Tag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:eitherOpenTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeitherP takes a parser, and becomes its \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e equivalent -- returning \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e if it matches, and \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e of anyToken if it doesn't.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherP",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st a -\u003e GenParser tok st (Either tok a)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#eitherP",
          "type": "function"
        },
        "index": {
          "description": "eitherP takes parser and becomes its Either equivalent returning Right if it matches and Left of anyToken if it doesn",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherP",
          "normalized": "GenParser a b c-\u003eGenParser a b(Either a c)",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Either tok a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:eitherP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither a Right WholeTag or a Left arbitary tag.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherWholeTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Either (Tag str) (WholeTag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#eitherWholeTag",
          "type": "function"
        },
        "index": {
          "description": "either Right WholeTag or Left arbitary tag",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "eitherWholeTag",
          "normalized": "a-\u003eTagParserSt a b(Either(Tag a)(WholeTag a))",
          "package": "tagsoup-parsec",
          "partial": "Whole Tag",
          "signature": "str-\u003eTagParserSt str st(Either(Tag str)(WholeTag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:eitherWholeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaybeCloseTag will return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the tag if it gets a TagClose with he given name,\n It will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeCloseTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Maybe (Tag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#maybeCloseTag",
          "type": "function"
        },
        "index": {
          "description": "maybeCloseTag will return Just the tag if it gets TagClose with he given name It will return Nothing otherwise It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeCloseTag",
          "normalized": "a-\u003eTagParserSt a b(Maybe(Tag a))",
          "package": "tagsoup-parsec",
          "partial": "Close Tag",
          "signature": "str-\u003eTagParserSt str st(Maybe(Tag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:maybeCloseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaybeOpenTag will return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the tag if it gets a TagOpen with he given name,\n It will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeOpenTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Maybe (Tag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#maybeOpenTag",
          "type": "function"
        },
        "index": {
          "description": "maybeOpenTag will return Just the tag if it gets TagOpen with he given name It will return Nothing otherwise It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeOpenTag",
          "normalized": "a-\u003eTagParserSt a b(Maybe(Tag a))",
          "package": "tagsoup-parsec",
          "partial": "Open Tag",
          "signature": "str-\u003eTagParserSt str st(Maybe(Tag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:maybeOpenTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaybeP takes a parser, and becomes its \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e equivalent -- returning \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if it matches, and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it doesn't.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeP",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st a -\u003e GenParser tok st (Maybe a)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#maybeP",
          "type": "function"
        },
        "index": {
          "description": "maybeP takes parser and becomes its Maybe equivalent returning Just if it matches and Nothing if it doesn",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeP",
          "normalized": "GenParser a b c-\u003eGenParser a b(Maybe c)",
          "package": "tagsoup-parsec",
          "signature": "GenParser tok st a-\u003eGenParser tok st(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:maybeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaybeWholeTag will return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the tag if it gets a WholeTag with he given name,\n It will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeWholeTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Maybe (WholeTag str))",
          "source": "src/Text-HTML-TagSoup-Parsec.html#maybeWholeTag",
          "type": "function"
        },
        "index": {
          "description": "maybeWholeTag will return Just the tag if it gets WholeTag with he given name It will return Nothing otherwise It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "maybeWholeTag",
          "normalized": "a-\u003eTagParserSt a b(Maybe(WholeTag a))",
          "package": "tagsoup-parsec",
          "partial": "Whole Tag",
          "signature": "str-\u003eTagParserSt str st(Maybe(WholeTag str))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:maybeWholeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enotCloseTag will match any tag which is not a TagClose with the given name.  It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "notCloseTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Tag str)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#notCloseTag",
          "type": "function"
        },
        "index": {
          "description": "notCloseTag will match any tag which is not TagClose with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "notCloseTag",
          "normalized": "a-\u003eTagParserSt a b(Tag a)",
          "package": "tagsoup-parsec",
          "partial": "Close Tag",
          "signature": "str-\u003eTagParserSt str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:notCloseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enotOpenTag will match any tag which is not a TagOpen with the given name.  It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "notOpenTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Tag str)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#notOpenTag",
          "type": "function"
        },
        "index": {
          "description": "notOpenTag will match any tag which is not TagOpen with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "notOpenTag",
          "normalized": "a-\u003eTagParserSt a b(Tag a)",
          "package": "tagsoup-parsec",
          "partial": "Open Tag",
          "signature": "str-\u003eTagParserSt str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:notOpenTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopenTag matches a TagOpen with the given name.  It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "openTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (Tag str)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#openTag",
          "type": "function"
        },
        "index": {
          "description": "openTag matches TagOpen with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "openTag",
          "normalized": "a-\u003eTagParserSt a b(Tag a)",
          "package": "tagsoup-parsec",
          "partial": "Tag",
          "signature": "str-\u003eTagParserSt str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:openTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to invoke parsing of Tags.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "tParse",
          "package": "tagsoup-parsec",
          "signature": "TagParser str a -\u003e [Tag str] -\u003e a",
          "source": "src/Text-HTML-TagSoup-Parsec.html#tParse",
          "type": "function"
        },
        "index": {
          "description": "Used to invoke parsing of Tags",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "tParse",
          "normalized": "TagParser a b-\u003e[Tag a]-\u003eb",
          "package": "tagsoup-parsec",
          "partial": "Parse",
          "signature": "TagParser str a-\u003e[Tag str]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:tParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply run a stateful tag parser\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "tStParse",
          "package": "tagsoup-parsec",
          "signature": "TagParserSt str st a -\u003e st -\u003e [Tag str] -\u003e a",
          "source": "src/Text-HTML-TagSoup-Parsec.html#tStParse",
          "type": "function"
        },
        "index": {
          "description": "Simply run stateful tag parser",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "tStParse",
          "normalized": "TagParserSt a b c-\u003eb-\u003e[Tag a]-\u003ec",
          "package": "tagsoup-parsec",
          "partial": "St Parse",
          "signature": "TagParserSt str st a-\u003est-\u003e[Tag str]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:tStParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewholeTag matches a TagOpen with the given name,\n then all intervening tags,\n until it reaches a TagClose with the given name.\n It is not case sensitive.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "wholeTag",
          "package": "tagsoup-parsec",
          "signature": "str -\u003e TagParserSt str st (WholeTag str)",
          "source": "src/Text-HTML-TagSoup-Parsec.html#wholeTag",
          "type": "function"
        },
        "index": {
          "description": "wholeTag matches TagOpen with the given name then all intervening tags until it reaches TagClose with the given name It is not case sensitive",
          "hierarchy": "Text HTML TagSoup Parsec",
          "module": "Text.HTML.TagSoup.Parsec",
          "name": "wholeTag",
          "normalized": "a-\u003eTagParserSt a b(WholeTag a)",
          "package": "tagsoup-parsec",
          "partial": "Tag",
          "signature": "str-\u003eTagParserSt str st(WholeTag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup-parsec/docs/Text-HTML-TagSoup-Parsec.html#v:wholeTag"
      }
    }
  ]
]