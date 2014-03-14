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
        "word": "tagsoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module converts between HTML/XML entities (i.e. \u003ccode\u003e&amp;\u003c/code\u003e) and\n   the characters they represent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "Entity",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Entity.html",
          "type": "module"
        },
        "index": {
          "description": "This module converts between HTML XML entities i.e amp and the characters they represent",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "Entity",
          "package": "tagsoup",
          "partial": "Entity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape an XML string.\n\u003c/p\u003e\u003cpre\u003e escapeXML \"hello world\" == \"hello world\"\n escapeXML \"hello & world\" == \"hello &amp; world\"\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "escapeXML",
          "package": "tagsoup",
          "signature": "String -\u003e String",
          "source": "src/Text-HTML-TagSoup-Entity.html#escapeXML",
          "type": "function"
        },
        "index": {
          "description": "Escape an XML string escapeXML hello world hello world escapeXML hello world hello amp world",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "escapeXML",
          "normalized": "String-\u003eString",
          "package": "tagsoup",
          "partial": "XML",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:escapeXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table mapping HTML entity names to resolved strings. Most resolved strings are a single character long,\n   but some (e.g. \u003ccode\u003e\u003ca\u003engeqq\u003c/a\u003e\u003c/code\u003e) are two characters long. The list is taken from\n   \u003ca\u003ehttp://www.w3.org/TR/html5/syntax.html#named-character-references\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "htmlEntities",
          "package": "tagsoup",
          "signature": "[(String, String)]",
          "source": "src/Text-HTML-TagSoup-Entity.html#htmlEntities",
          "type": "function"
        },
        "index": {
          "description": "table mapping HTML entity names to resolved strings Most resolved strings are single character long but some e.g ngeqq are two characters long The list is taken from http www.w3.org TR html5 syntax.html named-character-references",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "htmlEntities",
          "normalized": "[(String,String)]",
          "package": "tagsoup",
          "partial": "Entities",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:htmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an entity, using \u003ccode\u003e\u003ca\u003elookupNumericEntity\u003c/a\u003e\u003c/code\u003e if it starts with\n   \u003ccode\u003e#\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupNamedEntity\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupEntity",
          "package": "tagsoup",
          "signature": "String -\u003e Maybe String",
          "source": "src/Text-HTML-TagSoup-Entity.html#lookupEntity",
          "type": "function"
        },
        "index": {
          "description": "Lookup an entity using lookupNumericEntity if it starts with and lookupNamedEntity otherwise",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupEntity",
          "normalized": "String-\u003eMaybe String",
          "package": "tagsoup",
          "partial": "Entity",
          "signature": "String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a named entity, using \u003ccode\u003e\u003ca\u003ehtmlEntities\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e lookupNamedEntity \"amp\" == Just \"&\"\n lookupNamedEntity \"haskell\" == Nothing\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupNamedEntity",
          "package": "tagsoup",
          "signature": "String -\u003e Maybe String",
          "source": "src/Text-HTML-TagSoup-Entity.html#lookupNamedEntity",
          "type": "function"
        },
        "index": {
          "description": "Lookup named entity using htmlEntities lookupNamedEntity amp Just lookupNamedEntity haskell Nothing",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupNamedEntity",
          "normalized": "String-\u003eMaybe String",
          "package": "tagsoup",
          "partial": "Named Entity",
          "signature": "String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupNamedEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a numeric entity, the leading \u003ccode\u003e'#'\u003c/code\u003e must have already been removed.\n\u003c/p\u003e\u003cpre\u003e lookupNumericEntity \"65\" == Just \"A\"\n lookupNumericEntity \"x41\" == Just \"A\"\n lookupNumericEntity \"x4E\" === Just \"N\"\n lookupNumericEntity \"x4e\" === Just \"N\"\n lookupNumericEntity \"Haskell\" == Nothing\n lookupNumericEntity \"\" == Nothing\n lookupNumericEntity \"89439085908539082\" == Nothing\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupNumericEntity",
          "package": "tagsoup",
          "signature": "String -\u003e Maybe String",
          "source": "src/Text-HTML-TagSoup-Entity.html#lookupNumericEntity",
          "type": "function"
        },
        "index": {
          "description": "Lookup numeric entity the leading must have already been removed lookupNumericEntity Just lookupNumericEntity x41 Just lookupNumericEntity x4E Just lookupNumericEntity x4e Just lookupNumericEntity Haskell Nothing lookupNumericEntity Nothing lookupNumericEntity Nothing",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "lookupNumericEntity",
          "normalized": "String-\u003eMaybe String",
          "package": "tagsoup",
          "partial": "Numeric Entity",
          "signature": "String-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupNumericEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table mapping XML entity names to resolved strings. All strings are a single character long.\n   Does \u003cem\u003enot\u003c/em\u003e include \u003ccode\u003eapos\u003c/code\u003e as Internet Explorer does not know about it.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "xmlEntities",
          "package": "tagsoup",
          "signature": "[(String, String)]",
          "source": "src/Text-HTML-TagSoup-Entity.html#xmlEntities",
          "type": "function"
        },
        "index": {
          "description": "table mapping XML entity names to resolved strings All strings are single character long Does not include apos as Internet Explorer does not know about it",
          "hierarchy": "Text HTML TagSoup Entity",
          "module": "Text.HTML.TagSoup.Entity",
          "name": "xmlEntities",
          "normalized": "[(String,String)]",
          "package": "tagsoup",
          "partial": "Entities",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:xmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators to match tags. Some people prefer to use \u003ccode\u003e(~==)\u003c/code\u003e from\n   \u003ca\u003eText.HTML.TagSoup\u003c/a\u003e, others prefer these more structured combinators.\n   Which you use is personal preference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "Match",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Match.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators to match tags Some people prefer to use from Text.HTML.TagSoup others prefer these more structured combinators Which you use is personal preference",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "Match",
          "package": "tagsoup",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttr",
          "package": "tagsoup",
          "signature": "((str, str) -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttr",
          "normalized": "((a,a)-\u003eBool)-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr",
          "signature": "((str,str)-\u003eBool)-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrLit",
          "package": "tagsoup",
          "signature": "(str, str) -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttrLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrLit",
          "normalized": "(a,a)-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr Lit",
          "signature": "(str,str)-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrName",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttrName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrName",
          "normalized": "(a-\u003eBool)-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr Name",
          "signature": "(str-\u003eBool)-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrNameLit",
          "package": "tagsoup",
          "signature": "str -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttrNameLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrNameLit",
          "normalized": "a-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr Name Lit",
          "signature": "str-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrValue",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttrValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrValue",
          "normalized": "(a-\u003eBool)-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr Value",
          "signature": "(str-\u003eBool)-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrValueLit",
          "package": "tagsoup",
          "signature": "str -\u003e [Attribute str] -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#anyAttrValueLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "anyAttrValueLit",
          "normalized": "a-\u003e[Attribute a]-\u003eBool",
          "package": "tagsoup",
          "partial": "Attr Value Lit",
          "signature": "str-\u003e[Attribute str]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrValueLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "getTagContent",
          "package": "tagsoup",
          "signature": "str -\u003e ([Attribute str] -\u003e Bool) -\u003e [Tag str] -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup-Match.html#getTagContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "getTagContent",
          "normalized": "a-\u003e([Attribute a]-\u003eBool)-\u003e[Tag a]-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Tag Content",
          "signature": "str-\u003e([Attribute str]-\u003eBool)-\u003e[Tag str]-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:getTagContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch an closing tag\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagClose",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagClose",
          "type": "function"
        },
        "index": {
          "description": "match an closing tag",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagClose",
          "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Close",
          "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a closing tag's name literally\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagCloseLit",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagCloseLit",
          "type": "function"
        },
        "index": {
          "description": "match closing tag name literally",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagCloseLit",
          "normalized": "a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Close Lit",
          "signature": "str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagCloseLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the 'Tag str' is \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagCloseNameLit",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagCloseNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check if the Tag str is TagClose and matches the given name",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagCloseNameLit",
          "normalized": "a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Close Name Lit",
          "signature": "str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagCloseNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagComment",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagComment",
          "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Comment",
          "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch an opening tag\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpen",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e ([Attribute str] -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagOpen",
          "type": "function"
        },
        "index": {
          "description": "match an opening tag",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpen",
          "normalized": "(a-\u003eBool)-\u003e([Attribute a]-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Open",
          "signature": "(str-\u003eBool)-\u003e([Attribute str]-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenAttrLit",
          "package": "tagsoup",
          "signature": "str -\u003e Attribute str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagOpenAttrLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenAttrLit",
          "normalized": "a-\u003eAttribute a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Open Attr Lit",
          "signature": "str-\u003eAttribute str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenAttrLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a tag with given name, that contains an attribute\nwith given name, that satisfies a predicate.\nIf an attribute occurs multiple times,\nall occurrences are checked.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenAttrNameLit",
          "package": "tagsoup",
          "signature": "str -\u003e str -\u003e (str -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagOpenAttrNameLit",
          "type": "function"
        },
        "index": {
          "description": "Match tag with given name that contains an attribute with given name that satisfies predicate If an attribute occurs multiple times all occurrences are checked",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenAttrNameLit",
          "normalized": "a-\u003ea-\u003e(a-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Open Attr Name Lit",
          "signature": "str-\u003estr-\u003e(str-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenAttrNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a opening tag's name literally\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenLit",
          "package": "tagsoup",
          "signature": "str -\u003e ([Attribute str] -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagOpenLit",
          "type": "function"
        },
        "index": {
          "description": "match opening tag name literally",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenLit",
          "normalized": "a-\u003e([Attribute a]-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Open Lit",
          "signature": "str-\u003e([Attribute str]-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the 'Tag str' is \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenNameLit",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagOpenNameLit",
          "type": "function"
        },
        "index": {
          "description": "Check if the Tag str is TagOpen and matches the given name",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagOpenNameLit",
          "normalized": "a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Open Name Lit",
          "signature": "str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenNameLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch a text\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagText",
          "package": "tagsoup",
          "signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Match.html#tagText",
          "type": "function"
        },
        "index": {
          "description": "match text",
          "hierarchy": "Text HTML TagSoup Match",
          "module": "Text.HTML.TagSoup.Match",
          "name": "tagText",
          "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Text",
          "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eNOTE\u003c/em\u003e: This module is preliminary and may change at a future date.\n\u003c/p\u003e\u003cp\u003eThis module is intended to help converting a list of tags into a\n    tree of tags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "Tree",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "NOTE This module is preliminary and may change at future date This module is intended to help converting list of tags into tree of tags",
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "Tree",
          "package": "tagsoup",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagTree",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagTree",
          "package": "tagsoup",
          "partial": "Tag Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#t:TagTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagBranch",
          "package": "tagsoup",
          "signature": "TagBranch str [Attribute str] [TagTree str]",
          "source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagBranch",
          "normalized": "TagBranch a[Attribute a][TagTree a]",
          "package": "tagsoup",
          "partial": "Tag Branch",
          "signature": "TagBranch str[Attribute str][TagTree str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:TagBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagLeaf",
          "package": "tagsoup",
          "signature": "TagLeaf (Tag str)",
          "source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "TagLeaf",
          "package": "tagsoup",
          "partial": "Tag Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:TagLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup.Tree",
          "name": "flattenTree",
          "package": "tagsoup",
          "signature": "[TagTree str] -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup-Tree.html#flattenTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "flattenTree",
          "normalized": "[TagTree a]-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Tree",
          "signature": "[TagTree str]-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:flattenTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of tags into a tree. This version is not lazy at\n   all, that is saved for version 2.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "tagTree",
          "package": "tagsoup",
          "signature": "[Tag str] -\u003e [TagTree str]",
          "source": "src/Text-HTML-TagSoup-Tree.html#tagTree",
          "type": "function"
        },
        "index": {
          "description": "Convert list of tags into tree This version is not lazy at all that is saved for version",
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "tagTree",
          "normalized": "[Tag a]-\u003e[TagTree a]",
          "package": "tagsoup",
          "partial": "Tree",
          "signature": "[Tag str]-\u003e[TagTree str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:tagTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operation is based on the Uniplate \u003ccode\u003etransform\u003c/code\u003e function. Given a\n   list of trees, it applies the function to every tree in a bottom-up\n   manner. This operation is useful for manipulating a tree - for example\n   to make all tag names upper case:\n\u003c/p\u003e\u003cpre\u003e upperCase = transformTree f\n   where f (TagBranch name atts inner) = [TagBranch (map toUpper name) atts inner]\n         f x = x\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "transformTree",
          "package": "tagsoup",
          "signature": "(TagTree str -\u003e [TagTree str]) -\u003e [TagTree str] -\u003e [TagTree str]",
          "source": "src/Text-HTML-TagSoup-Tree.html#transformTree",
          "type": "function"
        },
        "index": {
          "description": "This operation is based on the Uniplate transform function Given list of trees it applies the function to every tree in bottom-up manner This operation is useful for manipulating tree for example to make all tag names upper case upperCase transformTree where TagBranch name atts inner TagBranch map toUpper name atts inner",
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "transformTree",
          "normalized": "(TagTree a-\u003e[TagTree a])-\u003e[TagTree a]-\u003e[TagTree a]",
          "package": "tagsoup",
          "partial": "Tree",
          "signature": "(TagTree str-\u003e[TagTree str])-\u003e[TagTree str]-\u003e[TagTree str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:transformTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operation is based on the Uniplate \u003ccode\u003euniverse\u003c/code\u003e function. Given a\n   list of trees, it returns those trees, and all the children trees at\n   any level. For example:\n\u003c/p\u003e\u003cpre\u003e universeTree\n    [TagBranch \"a\" [(\"href\",\"url\")] [TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]]\n == [TagBranch \"a\" [(\"href\",\"url\")] [TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]]\n    ,TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]\n\u003c/pre\u003e\u003cp\u003eThis operation is particularly useful for queries. To collect all \u003ccode\u003e\"a\"\u003c/code\u003e\n   tags in a tree, simply do:\n\u003c/p\u003e\u003cpre\u003e [x | x@(TagTree \"a\" _ _) \u003c- universeTree tree]\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "universeTree",
          "package": "tagsoup",
          "signature": "[TagTree str] -\u003e [TagTree str]",
          "source": "src/Text-HTML-TagSoup-Tree.html#universeTree",
          "type": "function"
        },
        "index": {
          "description": "This operation is based on the Uniplate universe function Given list of trees it returns those trees and all the children trees at any level For example universeTree TagBranch href url TagBranch TagLeaf TagText text TagBranch href url TagBranch TagLeaf TagText text TagBranch TagLeaf TagText text This operation is particularly useful for queries To collect all tags in tree simply do TagTree universeTree tree",
          "hierarchy": "Text HTML TagSoup Tree",
          "module": "Text.HTML.TagSoup.Tree",
          "name": "universeTree",
          "normalized": "[TagTree a]-\u003e[TagTree a]",
          "package": "tagsoup",
          "partial": "Tree",
          "signature": "[TagTree str]-\u003e[TagTree str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:universeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for working with HTML/XML. It deals with both well-formed XML and\n    malformed HTML from the web. It features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A lazy parser, based on the HTML 5 specification - see \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A renderer that can write out HTML/XML - see \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Utilities for extracting information from a document - see \u003ccode\u003e\u003ca\u003e~==\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esections\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epartitions\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe standard practice is to parse a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e,\n    then operate upon it to extract the necessary information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagSoup",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for working with HTML XML It deals with both well-formed XML and malformed HTML from the web It features lazy parser based on the HTML specification see parseTags renderer that can write out HTML XML see renderTags Utilities for extracting information from document see sections and partitions The standard practice is to parse String to Tag String using parseTags then operate upon it to extract the necessary information",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagSoup",
          "package": "tagsoup",
          "partial": "Tag Soup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTML attribute \u003ccode\u003eid=\"name\"\u003c/code\u003e generates \u003ccode\u003e(\"id\",\"name\")\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "Attribute",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Type.html#Attribute",
          "type": "type"
        },
        "index": {
          "description": "An HTML attribute id name generates id name",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "Attribute",
          "package": "tagsoup",
          "partial": "Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe column of a position, starting at 1\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "Column",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Type.html#Column",
          "type": "type"
        },
        "index": {
          "description": "The column of position starting at",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "Column",
          "package": "tagsoup",
          "partial": "Column",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese options control how \u003ccode\u003eparseTags\u003c/code\u003e works. The \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e type is usually generated by one of\n   \u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseOptionsFast\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eparseOptionsEntities\u003c/a\u003e\u003c/code\u003e, then selected fields may be overriden.\n\u003c/p\u003e\u003cp\u003eThe options \u003ccode\u003e\u003ca\u003eoptTagPosition\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptTagWarning\u003c/a\u003e\u003c/code\u003e specify whether to generate\n   \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e elements respectively. Usually these options should be set to \u003ccode\u003eFalse\u003c/code\u003e\n   to simplify future stages, unless you rely on position information or want to give malformed HTML\n   messages to the end user.\n\u003c/p\u003e\u003cp\u003eThe options \u003ccode\u003e\u003ca\u003eoptEntityData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptEntityAttrib\u003c/a\u003e\u003c/code\u003e control how entities, for example \u003ccode\u003e&nbsp;\u003c/code\u003e are handled.\n   Both take a string, and a boolean, where \u003ccode\u003eTrue\u003c/code\u003e indicates that the entity ended with a semi-colon \u003ccode\u003e;\u003c/code\u003e.\n   Inside normal text \u003ccode\u003e\u003ca\u003eoptEntityData\u003c/a\u003e\u003c/code\u003e will be called, and the results will be inserted in the tag stream.\n   Inside a tag attribute \u003ccode\u003e\u003ca\u003eoptEntityAttrib\u003c/a\u003e\u003c/code\u003e will be called, and the first component of the result will be used\n   in the attribute, and the second component will be appended after the \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e value (usually the second\n   component is \u003ccode\u003e[]\u003c/code\u003e). As an example, to not decode any entities, pass:\n\u003c/p\u003e\u003cpre\u003e parseOptions\n     {optEntityData=\\(str,b) -\u003e [TagText $ \"&\" ++ str ++ [';' | b]]\n     ,optEntityAttrib\\(str,b) -\u003e (\"&\" ++ str ++ [';' | b], [])\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "ParseOptions",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "description": "These options control how parseTags works The ParseOptions type is usually generated by one of parseOptions parseOptionsFast or parseOptionsEntities then selected fields may be overriden The options optTagPosition and optTagWarning specify whether to generate TagPosition or TagWarning elements respectively Usually these options should be set to False to simplify future stages unless you rely on position information or want to give malformed HTML messages to the end user The options optEntityData and optEntityAttrib control how entities for example nbsp are handled Both take string and boolean where True indicates that the entity ended with semi-colon Inside normal text optEntityData will be called and the results will be inserted in the tag stream Inside tag attribute optEntityAttrib will be called and the first component of the result will be used in the attribute and the second component will be appended after the TagOpen value usually the second component is As an example to not decode any entities pass parseOptions optEntityData str TagText str optEntityAttrib str str",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "ParseOptions",
          "package": "tagsoup",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese options control how \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e works.\n\u003c/p\u003e\u003cp\u003eThe strange quirk of only minimizing \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tags is due to Internet Explorer treating\n   \u003ccode\u003e\u003cbr\u003e\u003c/br\u003e\u003c/code\u003e as \u003ccode\u003e\u003cbr\u003e\u003cbr\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "RenderOptions",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
          "type": "data"
        },
        "index": {
          "description": "These options control how renderTags works The strange quirk of only minimizing br tags is due to Internet Explorer treating br br as br br",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "RenderOptions",
          "package": "tagsoup",
          "partial": "Render Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:RenderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe row/line of a position, starting at 1\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "Row",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Type.html#Row",
          "type": "type"
        },
        "index": {
          "description": "The row line of position starting at",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "Row",
          "package": "tagsoup",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single HTML element. A whole document is represented by a list of \u003ccode\u003eTag\u003c/code\u003e.\n   There is no requirement for \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e to match.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "Tag",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "single HTML element whole document is represented by list of Tag There is no requirement for TagOpen and TagClose to match",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "Tag",
          "package": "tagsoup",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a class to allow String's or Tag str's to be used as matches\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagRep",
          "package": "tagsoup",
          "source": "src/Text-HTML-TagSoup.html#TagRep",
          "type": "class"
        },
        "index": {
          "description": "Define class to allow String or Tag str to be used as matches",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagRep",
          "package": "tagsoup",
          "partial": "Tag Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:TagRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation of \u003ccode\u003e\u003ca\u003e~==\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "(~/=)",
          "package": "tagsoup",
          "signature": "Tag str -\u003e t -\u003e Bool",
          "source": "src/Text-HTML-TagSoup.html#~%2F%3D",
          "type": "function"
        },
        "index": {
          "description": "Negation of",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "(~/=) ~/=",
          "normalized": "Tag a-\u003eb-\u003eBool",
          "package": "tagsoup",
          "signature": "Tag str-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:-126--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an inexact match, the first item should be the thing to match.\n If the second item is a blank string, that is considered to match anything.\n For example:\n\u003c/p\u003e\u003cpre\u003e (TagText \"test\" ~== TagText \"\"    ) == True\n (TagText \"test\" ~== TagText \"test\") == True\n (TagText \"test\" ~== TagText \"soup\") == False\n\u003c/pre\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e missing attributes on the right are allowed.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "(~==)",
          "package": "tagsoup",
          "signature": "Tag str -\u003e t -\u003e Bool",
          "source": "src/Text-HTML-TagSoup.html#~%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Performs an inexact match the first item should be the thing to match If the second item is blank string that is considered to match anything For example TagText test TagText True TagText test TagText test True TagText test TagText soup False For TagOpen missing attributes on the right are allowed",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "(~==) ~==",
          "normalized": "Tag a-\u003eb-\u003eBool",
          "package": "tagsoup",
          "signature": "Tag str-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:-126--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup",
          "name": "ParseOptions",
          "package": "tagsoup",
          "signature": "ParseOptions",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "ParseOptions",
          "package": "tagsoup",
          "partial": "Parse Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup",
          "name": "RenderOptions",
          "package": "tagsoup",
          "signature": "RenderOptions",
          "source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "RenderOptions",
          "package": "tagsoup",
          "partial": "Render Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:RenderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closing tag\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagClose",
          "package": "tagsoup",
          "signature": "TagClose str",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "closing tag",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagClose",
          "package": "tagsoup",
          "partial": "Tag Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagComment",
          "package": "tagsoup",
          "signature": "TagComment str",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "comment",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagComment",
          "package": "tagsoup",
          "partial": "Tag Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn open tag with \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003es in their original order\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagOpen",
          "package": "tagsoup",
          "signature": "TagOpen str [Attribute str]",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "An open tag with Attribute in their original order",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagOpen",
          "normalized": "TagOpen a[Attribute a]",
          "package": "tagsoup",
          "partial": "Tag Open",
          "signature": "TagOpen str[Attribute str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta: The position of a parsed element\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagPosition",
          "package": "tagsoup",
          "signature": "TagPosition !Row !Column",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "Meta The position of parsed element",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagPosition",
          "package": "tagsoup",
          "partial": "Tag Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA text node, guaranteed not to be the empty string\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagText",
          "package": "tagsoup",
          "signature": "TagText str",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "text node guaranteed not to be the empty string",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagText",
          "package": "tagsoup",
          "partial": "Tag Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta: A syntax error in the input file\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "TagWarning",
          "package": "tagsoup",
          "signature": "TagWarning str",
          "source": "src/Text-HTML-TagSoup-Type.html#Tag",
          "type": "function"
        },
        "index": {
          "description": "Meta syntax error in the input file",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "TagWarning",
          "package": "tagsoup",
          "partial": "Tag Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns all tag names and attributes to lower case and\n   converts DOCTYPE to upper case.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "canonicalizeTags",
          "package": "tagsoup",
          "signature": "[Tag str] -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup.html#canonicalizeTags",
          "type": "function"
        },
        "index": {
          "description": "Turns all tag names and attributes to lower case and converts DOCTYPE to upper case",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "canonicalizeTags",
          "normalized": "[Tag a]-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Tags",
          "signature": "[Tag str]-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:canonicalizeTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the four characters \u003ccode\u003e&\"\u003c\u003e\u003c/code\u003e with their HTML entities (\u003ccode\u003e\u003ca\u003eescapeXML\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eStringLike\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "escapeHTML",
          "package": "tagsoup",
          "signature": "str -\u003e str",
          "source": "src/Text-HTML-TagSoup-Render.html#escapeHTML",
          "type": "function"
        },
        "index": {
          "description": "Replace the four characters with their HTML entities escapeXML lifted to StringLike",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "escapeHTML",
          "normalized": "a-\u003ea",
          "package": "tagsoup",
          "partial": "HTML",
          "signature": "str-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:escapeHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an attribute, crashes if not a \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e.\n   Returns \u003ccode\u003e\"\"\u003c/code\u003e if no attribute present.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "fromAttrib",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e str",
          "source": "src/Text-HTML-TagSoup-Type.html#fromAttrib",
          "type": "function"
        },
        "index": {
          "description": "Extract an attribute crashes if not TagOpen Returns if no attribute present",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "fromAttrib",
          "normalized": "a-\u003eTag a-\u003ea",
          "package": "tagsoup",
          "partial": "Attrib",
          "signature": "str-\u003eTag str-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:fromAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e, crashes if not a \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "fromTagText",
          "package": "tagsoup",
          "signature": "Tag str -\u003e str",
          "source": "src/Text-HTML-TagSoup-Type.html#fromTagText",
          "type": "function"
        },
        "index": {
          "description": "Extract the string from within TagText crashes if not TagText",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "fromTagText",
          "normalized": "Tag a-\u003ea",
          "package": "tagsoup",
          "partial": "Tag Text",
          "signature": "Tag str-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:fromTagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all text content from tags (similar to Verbatim found in HaXml)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "innerText",
          "package": "tagsoup",
          "signature": "[Tag str] -\u003e str",
          "source": "src/Text-HTML-TagSoup-Type.html#innerText",
          "type": "function"
        },
        "index": {
          "description": "Extract all text content from tags similar to Verbatim found in HaXml",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "innerText",
          "normalized": "[Tag a]-\u003ea",
          "package": "tagsoup",
          "partial": "Text",
          "signature": "[Tag str]-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:innerText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagClose",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagClose",
          "type": "function"
        },
        "index": {
          "description": "Test if Tag is TagClose",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagClose",
          "normalized": "Tag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Close",
          "signature": "Tag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagCloseName",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagCloseName",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Tag is TagClose and matches the given name",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagCloseName",
          "normalized": "a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Close Name",
          "signature": "str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagCloseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagOpen",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagOpen",
          "type": "function"
        },
        "index": {
          "description": "Test if Tag is TagOpen",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagOpen",
          "normalized": "Tag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Open",
          "signature": "Tag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagOpenName",
          "package": "tagsoup",
          "signature": "str -\u003e Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagOpenName",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Tag is TagOpen and matches the given name",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagOpenName",
          "normalized": "a-\u003eTag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Open Name",
          "signature": "str-\u003eTag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagOpenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagPosition",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagPosition",
          "type": "function"
        },
        "index": {
          "description": "Test if Tag is TagPosition",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagPosition",
          "normalized": "Tag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Position",
          "signature": "Tag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagText",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagText",
          "type": "function"
        },
        "index": {
          "description": "Test if Tag is TagText",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagText",
          "normalized": "Tag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Text",
          "signature": "Tag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "isTagWarning",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Type.html#isTagWarning",
          "type": "function"
        },
        "index": {
          "description": "Test if Tag is TagWarning",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "isTagWarning",
          "normalized": "Tag a-\u003eBool",
          "package": "tagsoup",
          "partial": "Tag Warning",
          "signature": "Tag str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "maybeTagText",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Maybe str",
          "source": "src/Text-HTML-TagSoup-Type.html#maybeTagText",
          "type": "function"
        },
        "index": {
          "description": "Extract the string from within TagText otherwise Nothing",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "maybeTagText",
          "normalized": "Tag a-\u003eMaybe a",
          "package": "tagsoup",
          "partial": "Tag Text",
          "signature": "Tag str-\u003eMaybe str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:maybeTagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "maybeTagWarning",
          "package": "tagsoup",
          "signature": "Tag str -\u003e Maybe str",
          "source": "src/Text-HTML-TagSoup-Type.html#maybeTagWarning",
          "type": "function"
        },
        "index": {
          "description": "Extract the string from within TagWarning otherwise Nothing",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "maybeTagWarning",
          "normalized": "Tag a-\u003eMaybe a",
          "package": "tagsoup",
          "partial": "Tag Warning",
          "signature": "Tag str-\u003eMaybe str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:maybeTagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to lookup an entity in an attribute (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e?)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optEntityAttrib",
          "package": "tagsoup",
          "signature": "(str, Bool) -\u003e (str, [Tag str])",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "How to lookup an entity in an attribute Bool has ending",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optEntityAttrib",
          "normalized": "(a,Bool)-\u003e(a,[Tag a])",
          "package": "tagsoup",
          "partial": "Entity Attrib",
          "signature": "(str,Bool)-\u003e(str,[Tag str])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEntityAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to lookup an entity (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optEntityData",
          "package": "tagsoup",
          "signature": "(str, Bool) -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "How to lookup an entity Bool has ending",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optEntityData",
          "normalized": "(a,Bool)-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Entity Data",
          "signature": "(str,Bool)-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEntityData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a piece of text (default = escape the four characters \u003ccode\u003e&\"\u003c\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optEscape",
          "package": "tagsoup",
          "signature": "str -\u003e str",
          "source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
          "type": "function"
        },
        "index": {
          "description": "Escape piece of text default escape the four characters",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optEscape",
          "normalized": "a-\u003ea",
          "package": "tagsoup",
          "partial": "Escape",
          "signature": "str-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimise \u003cb\u003e\u003c/b\u003e -\u003e \u003cb/\u003e (default = minimise only \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tags)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optMinimize",
          "package": "tagsoup",
          "signature": "str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
          "type": "function"
        },
        "index": {
          "description": "Minimise default minimise only br tags",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optMinimize",
          "normalized": "a-\u003eBool",
          "package": "tagsoup",
          "partial": "Minimize",
          "signature": "str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optMinimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould a tag be output with no escaping (default = true only for \u003ccode\u003escript\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optRawTag",
          "package": "tagsoup",
          "signature": "str -\u003e Bool",
          "source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
          "type": "function"
        },
        "index": {
          "description": "Should tag be output with no escaping default true only for script",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optRawTag",
          "normalized": "a-\u003eBool",
          "package": "tagsoup",
          "partial": "Raw Tag",
          "signature": "str-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optRawTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e values be given before some items (default=False,fast=False).\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optTagPosition",
          "package": "tagsoup",
          "signature": "Bool",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "Should TagPosition values be given before some items default False fast False",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optTagPosition",
          "package": "tagsoup",
          "partial": "Tag Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire no adjacent \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e values (default=True,fast=False)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optTagTextMerge",
          "package": "tagsoup",
          "signature": "Bool",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "Require no adjacent TagText values default True fast False",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optTagTextMerge",
          "package": "tagsoup",
          "partial": "Tag Text Merge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagTextMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e values be given (default=False,fast=False)\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "optTagWarning",
          "package": "tagsoup",
          "signature": "Bool",
          "source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "Should TagWarning values be given default False fast False",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "optTagWarning",
          "package": "tagsoup",
          "partial": "Tag Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default parse options value, described in \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e. Equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptionsEntities\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elookupEntity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptions",
          "package": "tagsoup",
          "signature": "ParseOptions str",
          "source": "src/Text-HTML-TagSoup-Options.html#parseOptions",
          "type": "function"
        },
        "index": {
          "description": "The default parse options value described in ParseOptions Equivalent to parseOptionsEntities lookupEntity",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptions",
          "package": "tagsoup",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e structure using a custom function to lookup attributes. Any attribute\n   that is not found will be left intact, and a \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e given (if \u003ccode\u003e\u003ca\u003eoptTagWarning\u003c/a\u003e\u003c/code\u003e is set).\n\u003c/p\u003e\u003cp\u003eIf you do not want to resolve any entities, simpliy pass \u003ccode\u003econst Nothing\u003c/code\u003e for the lookup function.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptionsEntities",
          "package": "tagsoup",
          "signature": "(str -\u003e Maybe str) -\u003e ParseOptions str",
          "source": "src/Text-HTML-TagSoup-Options.html#parseOptionsEntities",
          "type": "function"
        },
        "index": {
          "description": "ParseOptions structure using custom function to lookup attributes Any attribute that is not found will be left intact and TagWarning given if optTagWarning is set If you do not want to resolve any entities simpliy pass const Nothing for the lookup function",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptionsEntities",
          "normalized": "(a-\u003eMaybe a)-\u003eParseOptions a",
          "package": "tagsoup",
          "partial": "Options Entities",
          "signature": "(str-\u003eMaybe str)-\u003eParseOptions str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptionsEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e structure optimised for speed, following the fast options.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptionsFast",
          "package": "tagsoup",
          "signature": "ParseOptions str",
          "source": "src/Text-HTML-TagSoup-Options.html#parseOptionsFast",
          "type": "function"
        },
        "index": {
          "description": "ParseOptions structure optimised for speed following the fast options",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "parseOptionsFast",
          "package": "tagsoup",
          "partial": "Options Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptionsFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string to a list of tags, using an HTML 5 compliant parser.\n\u003c/p\u003e\u003cpre\u003e parseTags \"\u003chello\u003emy&amp;\u003c/world\u003e\" == [TagOpen \"hello\" [],TagText \"my&\",TagClose \"world\"]\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "parseTags",
          "package": "tagsoup",
          "signature": "str -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup-Parser.html#parseTags",
          "type": "function"
        },
        "index": {
          "description": "Parse string to list of tags using an HTML compliant parser parseTags hello my amp world TagOpen hello TagText my TagClose world",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "parseTags",
          "normalized": "a-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Tags",
          "signature": "str-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string to a list of tags, using settings supplied by the \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e parameter,\n   eg. to output position information:\n\u003c/p\u003e\u003cpre\u003e parseTagsOptions parseOptions{optTagPosition = True} \"\u003chello\u003emy&amp;\u003c/world\u003e\" ==\n    [TagPosition 1 1,TagOpen \"hello\" [],TagPosition 1 8,TagText \"my&\",TagPosition 1 15,TagClose \"world\"]\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "parseTagsOptions",
          "package": "tagsoup",
          "signature": "ParseOptions str -\u003e str -\u003e [Tag str]",
          "source": "src/Text-HTML-TagSoup-Parser.html#parseTagsOptions",
          "type": "function"
        },
        "index": {
          "description": "Parse string to list of tags using settings supplied by the ParseOptions parameter eg to output position information parseTagsOptions parseOptions optTagPosition True hello my amp world TagPosition TagOpen hello TagPosition TagText my TagPosition TagClose world",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "parseTagsOptions",
          "normalized": "ParseOptions a-\u003ea-\u003e[Tag a]",
          "package": "tagsoup",
          "partial": "Tags Options",
          "signature": "ParseOptions str-\u003estr-\u003e[Tag str]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseTagsOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003esections\u003c/a\u003e\u003c/code\u003e, but splits the list\n   so no element appears in any two partitions.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "partitions",
          "package": "tagsoup",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Text-HTML-TagSoup.html#partitions",
          "type": "function"
        },
        "index": {
          "description": "This function is similar to sections but splits the list so no element appears in any two partitions",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "partitions",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "tagsoup",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:partitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default render options value, described in \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "renderOptions",
          "package": "tagsoup",
          "signature": "RenderOptions str",
          "source": "src/Text-HTML-TagSoup-Render.html#renderOptions",
          "type": "function"
        },
        "index": {
          "description": "The default render options value described in RenderOptions",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "renderOptions",
          "package": "tagsoup",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list of tags, as they might have been parsed, using the default settings given in\n   \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e renderTags [TagOpen \"hello\" [],TagText \"my&\",TagClose \"world\"] == \"\u003chello\u003emy&amp;\u003c/world\u003e\"\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "renderTags",
          "package": "tagsoup",
          "signature": "[Tag str] -\u003e str",
          "source": "src/Text-HTML-TagSoup-Render.html#renderTags",
          "type": "function"
        },
        "index": {
          "description": "Show list of tags as they might have been parsed using the default settings given in RenderOptions renderTags TagOpen hello TagText my TagClose world hello my amp world",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "renderTags",
          "normalized": "[Tag a]-\u003ea",
          "package": "tagsoup",
          "partial": "Tags",
          "signature": "[Tag str]-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list of tags using settings supplied by the \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e parameter,\n   eg. to avoid escaping any characters one could do:\n\u003c/p\u003e\u003cpre\u003e renderTagsOptions renderOptions{optEscape = id} [TagText \"my&\"] == \"my&\"\n\u003c/pre\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "renderTagsOptions",
          "package": "tagsoup",
          "signature": "RenderOptions str -\u003e [Tag str] -\u003e str",
          "source": "src/Text-HTML-TagSoup-Render.html#renderTagsOptions",
          "type": "function"
        },
        "index": {
          "description": "Show list of tags using settings supplied by the RenderOptions parameter eg to avoid escaping any characters one could do renderTagsOptions renderOptions optEscape id TagText my my",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "renderTagsOptions",
          "normalized": "RenderOptions a-\u003e[Tag a]-\u003ea",
          "package": "tagsoup",
          "partial": "Tags Options",
          "signature": "RenderOptions str-\u003e[Tag str]-\u003estr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderTagsOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a list, and returns all suffixes whose\n   first item matches the predicate.\n\u003c/p\u003e",
          "module": "Text.HTML.TagSoup",
          "name": "sections",
          "package": "tagsoup",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Text-HTML-TagSoup.html#sections",
          "type": "function"
        },
        "index": {
          "description": "This function takes list and returns all suffixes whose first item matches the predicate",
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "sections",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "tagsoup",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:sections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.TagSoup",
          "name": "toTagRep",
          "package": "tagsoup",
          "signature": "a -\u003e Tag str",
          "source": "src/Text-HTML-TagSoup.html#toTagRep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text HTML TagSoup",
          "module": "Text.HTML.TagSoup",
          "name": "toTagRep",
          "normalized": "a-\u003eTag b",
          "package": "tagsoup",
          "partial": "Tag Rep",
          "signature": "a-\u003eTag str",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:toTagRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: This module is \u003cem\u003enot\u003c/em\u003e intended for use outside the TagSoup library.\n\u003c/p\u003e\u003cp\u003eThis module provides an abstraction for String's as used inside TagSoup. It allows\n   TagSoup to work with String (list of Char), ByteString.Char8, ByteString.Lazy.Char8,\n   Data.Text and Data.Text.Lazy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.StringLike",
          "name": "StringLike",
          "package": "tagsoup",
          "source": "src/Text-StringLike.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING This module is not intended for use outside the TagSoup library This module provides an abstraction for String as used inside TagSoup It allows TagSoup to work with String list of Char ByteString.Char8 ByteString.Lazy.Char8 Data.Text and Data.Text.Lazy",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "StringLike",
          "package": "tagsoup",
          "partial": "String Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to generalise TagSoup parsing over many types of string-like types.\n   Examples are given for the String type.\n\u003c/p\u003e",
          "module": "Text.StringLike",
          "name": "StringLike",
          "package": "tagsoup",
          "source": "src/Text-StringLike.html#StringLike",
          "type": "class"
        },
        "index": {
          "description": "class to generalise TagSoup parsing over many types of string-like types Examples are given for the String type",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "StringLike",
          "package": "tagsoup",
          "partial": "String Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#t:StringLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e append = (++)\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "append",
          "package": "tagsoup",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-StringLike.html#append",
          "type": "method"
        },
        "index": {
          "description": "append",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "tagsoup",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a String from one type to another.\n\u003c/p\u003e",
          "module": "Text.StringLike",
          "name": "castString",
          "package": "tagsoup",
          "signature": "a -\u003e b",
          "source": "src/Text-StringLike.html#castString",
          "type": "function"
        },
        "index": {
          "description": "Convert String from one type to another",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "castString",
          "normalized": "a-\u003eb",
          "package": "tagsoup",
          "partial": "String",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:castString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e cons = (:)\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "cons",
          "package": "tagsoup",
          "signature": "Char -\u003e a -\u003e a",
          "source": "src/Text-StringLike.html#cons",
          "type": "method"
        },
        "index": {
          "description": "cons",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "cons",
          "normalized": "Char-\u003ea-\u003ea",
          "package": "tagsoup",
          "signature": "Char-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e empty = \"\"\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "empty",
          "package": "tagsoup",
          "signature": "a",
          "source": "src/Text-StringLike.html#empty",
          "type": "method"
        },
        "index": {
          "description": "empty",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "empty",
          "package": "tagsoup",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e fromChar = return\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "fromChar",
          "package": "tagsoup",
          "signature": "Char -\u003e a",
          "source": "src/Text-StringLike.html#fromChar",
          "type": "method"
        },
        "index": {
          "description": "fromChar return",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "fromChar",
          "normalized": "Char-\u003ea",
          "package": "tagsoup",
          "partial": "Char",
          "signature": "Char-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:fromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e fromString = id\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "fromString",
          "package": "tagsoup",
          "signature": "String -\u003e a",
          "source": "src/Text-StringLike.html#fromString",
          "type": "method"
        },
        "index": {
          "description": "fromString id",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "tagsoup",
          "partial": "String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e strConcat = concat\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "strConcat",
          "package": "tagsoup",
          "signature": "[a] -\u003e a",
          "source": "src/Text-StringLike.html#strConcat",
          "type": "method"
        },
        "index": {
          "description": "strConcat concat",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "strConcat",
          "normalized": "[a]-\u003ea",
          "package": "tagsoup",
          "partial": "Concat",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:strConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e strNull = null\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "strNull",
          "package": "tagsoup",
          "signature": "a -\u003e Bool",
          "source": "src/Text-StringLike.html#strNull",
          "type": "method"
        },
        "index": {
          "description": "strNull null",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "strNull",
          "normalized": "a-\u003eBool",
          "package": "tagsoup",
          "partial": "Null",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:strNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e toString = id\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "toString",
          "package": "tagsoup",
          "signature": "a -\u003e String",
          "source": "src/Text-StringLike.html#toString",
          "type": "method"
        },
        "index": {
          "description": "toString id",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "tagsoup",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e uncons []     = Nothing\n uncons (x:xs) = Just (x, xs)\n\u003c/pre\u003e",
          "module": "Text.StringLike",
          "name": "uncons",
          "package": "tagsoup",
          "signature": "a -\u003e Maybe (Char, a)",
          "source": "src/Text-StringLike.html#uncons",
          "type": "method"
        },
        "index": {
          "description": "uncons Nothing uncons xs Just xs",
          "hierarchy": "Text StringLike",
          "module": "Text.StringLike",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Char,a)",
          "package": "tagsoup",
          "signature": "a-\u003eMaybe(Char,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:uncons"
      }
    }
  ]
]