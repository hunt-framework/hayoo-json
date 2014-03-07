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
        "word": "parsec-tagsoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "Tag",
          "package": "parsec-tagsoup",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "Tag",
          "package": "parsec-tagsoup",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Tag parsers, a synonym for GenParser (Tag str)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "TagParser",
          "package": "parsec-tagsoup",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#TagParser",
          "type": "type"
        },
        "index": {
          "description": "The type of Tag parsers synonym for GenParser Tag str",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "TagParser",
          "package": "parsec-tagsoup",
          "partial": "Tag Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#t:TagParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTag",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#anyTag",
          "type": "function"
        },
        "index": {
          "description": "Parses any tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTag",
          "package": "parsec-tagsoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:anyTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any opening or closing tag.\n   As all the tag parsers, these consume the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagClose",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#anyTagOpen",
          "type": "function"
        },
        "index": {
          "description": "Parse any opening or closing tag As all the tag parsers these consume the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagClose",
          "package": "parsec-tagsoup",
          "partial": "Tag Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:anyTagClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any opening or closing tag.\n   As all the tag parsers, these consume the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagOpen",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#anyTagOpen",
          "type": "function"
        },
        "index": {
          "description": "Parse any opening or closing tag As all the tag parsers these consume the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagOpen",
          "package": "parsec-tagsoup",
          "partial": "Tag Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:anyTagOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehaves like \u003ccode\u003etagP\u003c/code\u003e sans the predicate. Expects that the next tag will be an opening tag or fails otherwise.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagP",
          "package": "parsec-tagsoup",
          "signature": "(Tag str -\u003e TagParser str st a) -\u003e TagParser str st a",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#anyTagP",
          "type": "function"
        },
        "index": {
          "description": "Behaves like tagP sans the predicate Expects that the next tag will be an opening tag or fails otherwise",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "anyTagP",
          "normalized": "(Tag a-\u003eTagParser a b c)-\u003eTagParser a b c",
          "package": "parsec-tagsoup",
          "partial": "Tag",
          "signature": "(Tag str-\u003eTagParser str st a)-\u003eTagParser str st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:anyTagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elexeme p\u003c/code\u003e first applies parser \u003ccode\u003ep\u003c/code\u003e and then \u003ccode\u003e\u003ca\u003ewhitespace\u003c/a\u003e\u003c/code\u003e, returning the value of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003elexeme = (\u003c* whitespace)\u003c/pre\u003e\u003cp\u003eEvery tag parser is defined using \u003ccode\u003e\u003ca\u003elexeme\u003c/a\u003e\u003c/code\u003e, this way every parse starts at a point\n   without whitespace.\n\u003c/p\u003e\u003cp\u003eThe only point where \u003ccode\u003e\u003ca\u003ewhitespace\u003c/a\u003e\u003c/code\u003e should be called explicitly is at the start of\n   the top level parser, in order to skip any leading whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "lexeme",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st a -\u003e TagParser str st a",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#lexeme",
          "type": "function"
        },
        "index": {
          "description": "lexeme first applies parser and then whitespace returning the value of lexeme whitespace Every tag parser is defined using lexeme this way every parse starts at point without whitespace The only point where whitespace should be called explicitly is at the start of the top level parser in order to skip any leading whitespace",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "lexeme",
          "normalized": "TagParser a b c-\u003eTagParser a b c",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st a-\u003eTagParser str st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersions of these Parsec combinators for tags\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "noneOf",
          "package": "parsec-tagsoup",
          "signature": "[Tag str] -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Versions of these Parsec combinators for tags",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "noneOf",
          "normalized": "[Tag a]-\u003eTagParser a b(Tag a)",
          "package": "parsec-tagsoup",
          "partial": "Of",
          "signature": "[Tag str]-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersions of these Parsec combinators for tags\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "oneOf",
          "package": "parsec-tagsoup",
          "signature": "[Tag str] -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Versions of these Parsec combinators for tags",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "oneOf",
          "normalized": "[Tag a]-\u003eTagParser a b(Tag a)",
          "package": "parsec-tagsoup",
          "partial": "Of",
          "signature": "[Tag str]-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a tag if it satisfies the predicate.\n   As all the tag parsers, it consumes the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "satisfy",
          "package": "parsec-tagsoup",
          "signature": "(Tag str -\u003e Bool) -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Parse tag if it satisfies the predicate As all the tag parsers it consumes the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "satisfy",
          "normalized": "(Tag a-\u003eBool)-\u003eTagParser a b(Tag a)",
          "package": "parsec-tagsoup",
          "signature": "(Tag str-\u003eBool)-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a text block containing only characters which satisfy \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "space",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#space",
          "type": "function"
        },
        "index": {
          "description": "Parses text block containing only characters which satisfy isSpace",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "space",
          "package": "parsec-tagsoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etag t\u003c/code\u003e parses any tag for which \u003ccode\u003e(~== t)\u003c/code\u003e is true.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tag",
          "package": "parsec-tagsoup",
          "signature": "rep -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#tag",
          "type": "function"
        },
        "index": {
          "description": "tag parses any tag for which is true",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tag",
          "normalized": "a-\u003eTagParser b c(Tag b)",
          "package": "parsec-tagsoup",
          "signature": "rep-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given opening or closing tag\n   As all the tag parsers, these consume the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagClose",
          "package": "parsec-tagsoup",
          "signature": "str -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#tagOpen",
          "type": "function"
        },
        "index": {
          "description": "Parse the given opening or closing tag As all the tag parsers these consume the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagClose",
          "normalized": "a-\u003eTagParser a b(Tag a)",
          "package": "parsec-tagsoup",
          "partial": "Close",
          "signature": "str-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:tagClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given opening or closing tag\n   As all the tag parsers, these consume the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagOpen",
          "package": "parsec-tagsoup",
          "signature": "str -\u003e TagParser str st (Tag str)",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#tagOpen",
          "type": "function"
        },
        "index": {
          "description": "Parse the given opening or closing tag As all the tag parsers these consume the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagOpen",
          "normalized": "a-\u003eTagParser a b(Tag a)",
          "package": "parsec-tagsoup",
          "partial": "Open",
          "signature": "str-\u003eTagParser str st(Tag str)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:tagOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main workhorse.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etagP t p\u003c/code\u003e parses an opening tag \u003ccode\u003eu\u003c/code\u003e for which \u003ccode\u003e(~== t)\u003c/code\u003e is true.\n   Then it runs the continuation parser \u003ccode\u003ep\u003c/code\u003e.\n   Next it skips all the tags until the closing tag for \u003ccode\u003eu\u003c/code\u003e.\n   Finally it returns the results of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ep\u003c/code\u003e parser should never consume the closing tag for \u003ccode\u003eu\u003c/code\u003e, or tagP will fail.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagP",
          "package": "parsec-tagsoup",
          "signature": "rep -\u003e (Tag str -\u003e TagParser str st a) -\u003e TagParser str st a",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#tagP",
          "type": "function"
        },
        "index": {
          "description": "The main workhorse tagP parses an opening tag for which is true Then it runs the continuation parser Next it skips all the tags until the closing tag for Finally it returns the results of The parser should never consume the closing tag for or tagP will fail",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagP",
          "normalized": "a-\u003e(Tag b-\u003eTagParser b c d)-\u003eTagParser b c d",
          "package": "parsec-tagsoup",
          "signature": "rep-\u003e(Tag str-\u003eTagParser str st a)-\u003eTagParser str st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:tagP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a chunk of text.\n   As all the tag parsers, it consumes the whitespace immediately after the parsed tag.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagText",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st str",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#tagText",
          "type": "function"
        },
        "index": {
          "description": "Parses chunk of text As all the tag parsers it consumes the whitespace immediately after the parsed tag",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "tagText",
          "package": "parsec-tagsoup",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:tagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any whitespace. Whitespace consists of zero or more ocurrences of \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "whitespace",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st ()",
          "source": "src/Text-ParserCombinators-Parsec-Tag.html#whitespace",
          "type": "function"
        },
        "index": {
          "description": "Parses any whitespace Whitespace consists of zero or more ocurrences of space",
          "hierarchy": "Text ParserCombinators Parsec Tag",
          "module": "Text.ParserCombinators.Parsec.Tag",
          "name": "whitespace",
          "normalized": "TagParser a b()",
          "package": "parsec-tagsoup",
          "signature": "TagParser str st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsec-tagsoup/docs/Text-ParserCombinators-Parsec-Tag.html#v:whitespace"
      }
    }
  ]
]