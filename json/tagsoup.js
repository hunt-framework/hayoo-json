[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module converts between HTML/XML entities (i.e. \u003ccode\u003e&amp;\u003c/code\u003e) and\n   the characters they represent.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html",
        "fct-type": "module",
        "title": "Entity"
      },
      "index": {
        "description": "This module converts between HTML XML entities i.e amp and the characters they represent",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "Entity",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:escapeXML",
      "description": {
        "fct-descr": "\u003cp\u003eEscape an XML string.\n\u003c/p\u003e\u003cpre\u003e escapeXML \"hello world\" == \"hello world\"\n escapeXML \"hello & world\" == \"hello &amp; world\"\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#escapeXML",
        "fct-type": "function",
        "title": "escapeXML"
      },
      "index": {
        "description": "Escape an XML string escapeXML hello world hello world escapeXML hello world hello amp world",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "escapeXML",
        "normalized": "String-\u003eString",
        "package": "tagsoup",
        "partial": "XML",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:htmlEntities",
      "description": {
        "fct-descr": "\u003cp\u003eA table mapping HTML entity names to resolved strings. Most resolved strings are a single character long,\n   but some (e.g. \u003ccode\u003e\u003ca\u003engeqq\u003c/a\u003e\u003c/code\u003e) are two characters long. The list is taken from\n   \u003ca\u003ehttp://www.w3.org/TR/html5/syntax.html#named-character-references\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#htmlEntities",
        "fct-type": "function",
        "title": "htmlEntities"
      },
      "index": {
        "description": "table mapping HTML entity names to resolved strings Most resolved strings are single character long but some e.g ngeqq are two characters long The list is taken from http www.w3.org TR html5 syntax.html named-character-references",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "htmlEntities",
        "normalized": "[(String,String)]",
        "package": "tagsoup",
        "partial": "Entities",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupEntity",
      "description": {
        "fct-descr": "\u003cp\u003eLookup an entity, using \u003ccode\u003e\u003ca\u003elookupNumericEntity\u003c/a\u003e\u003c/code\u003e if it starts with\n   \u003ccode\u003e#\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupNamedEntity\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "String -\u003e Maybe String",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#lookupEntity",
        "fct-type": "function",
        "title": "lookupEntity"
      },
      "index": {
        "description": "Lookup an entity using lookupNumericEntity if it starts with and lookupNamedEntity otherwise",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "lookupEntity",
        "normalized": "String-\u003eMaybe String",
        "package": "tagsoup",
        "partial": "Entity",
        "signature": "String-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupNamedEntity",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a named entity, using \u003ccode\u003e\u003ca\u003ehtmlEntities\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e lookupNamedEntity \"amp\" == Just \"&\"\n lookupNamedEntity \"haskell\" == Nothing\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "String -\u003e Maybe String",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#lookupNamedEntity",
        "fct-type": "function",
        "title": "lookupNamedEntity"
      },
      "index": {
        "description": "Lookup named entity using htmlEntities lookupNamedEntity amp Just lookupNamedEntity haskell Nothing",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "lookupNamedEntity",
        "normalized": "String-\u003eMaybe String",
        "package": "tagsoup",
        "partial": "Named Entity",
        "signature": "String-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:lookupNumericEntity",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a numeric entity, the leading \u003ccode\u003e'#'\u003c/code\u003e must have already been removed.\n\u003c/p\u003e\u003cpre\u003e lookupNumericEntity \"65\" == Just \"A\"\n lookupNumericEntity \"x41\" == Just \"A\"\n lookupNumericEntity \"x4E\" === Just \"N\"\n lookupNumericEntity \"x4e\" === Just \"N\"\n lookupNumericEntity \"Haskell\" == Nothing\n lookupNumericEntity \"\" == Nothing\n lookupNumericEntity \"89439085908539082\" == Nothing\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "String -\u003e Maybe String",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#lookupNumericEntity",
        "fct-type": "function",
        "title": "lookupNumericEntity"
      },
      "index": {
        "description": "Lookup numeric entity the leading must have already been removed lookupNumericEntity Just lookupNumericEntity x41 Just lookupNumericEntity x4E Just lookupNumericEntity x4e Just lookupNumericEntity Haskell Nothing lookupNumericEntity Nothing lookupNumericEntity Nothing",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "lookupNumericEntity",
        "normalized": "String-\u003eMaybe String",
        "package": "tagsoup",
        "partial": "Numeric Entity",
        "signature": "String-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Entity.html#v:xmlEntities",
      "description": {
        "fct-descr": "\u003cp\u003eA table mapping XML entity names to resolved strings. All strings are a single character long.\n   Does \u003cem\u003enot\u003c/em\u003e include \u003ccode\u003eapos\u003c/code\u003e as Internet Explorer does not know about it.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Entity",
        "fct-package": "tagsoup",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Text-HTML-TagSoup-Entity.html#xmlEntities",
        "fct-type": "function",
        "title": "xmlEntities"
      },
      "index": {
        "description": "table mapping XML entity names to resolved strings All strings are single character long Does not include apos as Internet Explorer does not know about it",
        "hierarchy": "Text HTML TagSoup Entity",
        "module": "Text.HTML.TagSoup.Entity",
        "name": "xmlEntities",
        "normalized": "[(String,String)]",
        "package": "tagsoup",
        "partial": "Entities",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators to match tags. Some people prefer to use \u003ccode\u003e(~==)\u003c/code\u003e from\n   \u003ca\u003eText.HTML.TagSoup\u003c/a\u003e, others prefer these more structured combinators.\n   Which you use is personal preference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-TagSoup-Match.html",
        "fct-type": "module",
        "title": "Match"
      },
      "index": {
        "description": "Combinators to match tags Some people prefer to use from Text.HTML.TagSoup others prefer these more structured combinators Which you use is personal preference",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "Match",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttr",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "((str, str) -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttr",
        "fct-type": "function",
        "title": "anyAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttr",
        "normalized": "((a,a)-\u003eBool)-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr",
        "signature": "((str,str)-\u003eBool)-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrLit",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str, str) -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttrLit",
        "fct-type": "function",
        "title": "anyAttrLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttrLit",
        "normalized": "(a,a)-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr Lit",
        "signature": "(str,str)-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrName",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttrName",
        "fct-type": "function",
        "title": "anyAttrName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttrName",
        "normalized": "(a-\u003eBool)-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr Name",
        "signature": "(str-\u003eBool)-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrNameLit",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttrNameLit",
        "fct-type": "function",
        "title": "anyAttrNameLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttrNameLit",
        "normalized": "a-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr Name Lit",
        "signature": "str-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrValue",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttrValue",
        "fct-type": "function",
        "title": "anyAttrValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttrValue",
        "normalized": "(a-\u003eBool)-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr Value",
        "signature": "(str-\u003eBool)-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:anyAttrValueLit",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e [Attribute str] -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#anyAttrValueLit",
        "fct-type": "function",
        "title": "anyAttrValueLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "anyAttrValueLit",
        "normalized": "a-\u003e[Attribute a]-\u003eBool",
        "package": "tagsoup",
        "partial": "Attr Value Lit",
        "signature": "str-\u003e[Attribute str]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:getTagContent",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e ([Attribute str] -\u003e Bool) -\u003e [Tag str] -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#getTagContent",
        "fct-type": "function",
        "title": "getTagContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "getTagContent",
        "normalized": "a-\u003e([Attribute a]-\u003eBool)-\u003e[Tag a]-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Tag Content",
        "signature": "str-\u003e([Attribute str]-\u003eBool)-\u003e[Tag str]-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagClose",
      "description": {
        "fct-descr": "\u003cp\u003ematch an closing tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagClose",
        "fct-type": "function",
        "title": "tagClose"
      },
      "index": {
        "description": "match an closing tag",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagClose",
        "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Close",
        "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagCloseLit",
      "description": {
        "fct-descr": "\u003cp\u003ematch a closing tag's name literally\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagCloseLit",
        "fct-type": "function",
        "title": "tagCloseLit"
      },
      "index": {
        "description": "match closing tag name literally",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagCloseLit",
        "normalized": "a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Close Lit",
        "signature": "str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagCloseNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the 'Tag str' is \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagCloseNameLit",
        "fct-type": "function",
        "title": "tagCloseNameLit"
      },
      "index": {
        "description": "Check if the Tag str is TagClose and matches the given name",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagCloseNameLit",
        "normalized": "a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Close Name Lit",
        "signature": "str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagComment",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagComment",
        "fct-type": "function",
        "title": "tagComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagComment",
        "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Comment",
        "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpen",
      "description": {
        "fct-descr": "\u003cp\u003ematch an opening tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e ([Attribute str] -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagOpen",
        "fct-type": "function",
        "title": "tagOpen"
      },
      "index": {
        "description": "match an opening tag",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagOpen",
        "normalized": "(a-\u003eBool)-\u003e([Attribute a]-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Open",
        "signature": "(str-\u003eBool)-\u003e([Attribute str]-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenAttrLit",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Attribute str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagOpenAttrLit",
        "fct-type": "function",
        "title": "tagOpenAttrLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagOpenAttrLit",
        "normalized": "a-\u003eAttribute a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Open Attr Lit",
        "signature": "str-\u003eAttribute str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenAttrNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a tag with given name, that contains an attribute\nwith given name, that satisfies a predicate.\nIf an attribute occurs multiple times,\nall occurrences are checked.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e str -\u003e (str -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagOpenAttrNameLit",
        "fct-type": "function",
        "title": "tagOpenAttrNameLit"
      },
      "index": {
        "description": "Match tag with given name that contains an attribute with given name that satisfies predicate If an attribute occurs multiple times all occurrences are checked",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagOpenAttrNameLit",
        "normalized": "a-\u003ea-\u003e(a-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Open Attr Name Lit",
        "signature": "str-\u003estr-\u003e(str-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenLit",
      "description": {
        "fct-descr": "\u003cp\u003ematch a opening tag's name literally\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e ([Attribute str] -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagOpenLit",
        "fct-type": "function",
        "title": "tagOpenLit"
      },
      "index": {
        "description": "match opening tag name literally",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagOpenLit",
        "normalized": "a-\u003e([Attribute a]-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Open Lit",
        "signature": "str-\u003e([Attribute str]-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagOpenNameLit",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the 'Tag str' is \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagOpenNameLit",
        "fct-type": "function",
        "title": "tagOpenNameLit"
      },
      "index": {
        "description": "Check if the Tag str is TagOpen and matches the given name",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagOpenNameLit",
        "normalized": "a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Open Name Lit",
        "signature": "str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Match.html#v:tagText",
      "description": {
        "fct-descr": "\u003cp\u003ematch a text\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Match",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Bool) -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Match.html#tagText",
        "fct-type": "function",
        "title": "tagText"
      },
      "index": {
        "description": "match text",
        "hierarchy": "Text HTML TagSoup Match",
        "module": "Text.HTML.TagSoup.Match",
        "name": "tagText",
        "normalized": "(a-\u003eBool)-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Text",
        "signature": "(str-\u003eBool)-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eNOTE\u003c/em\u003e: This module is preliminary and may change at a future date.\n\u003c/p\u003e\u003cp\u003eThis module is intended to help converting a list of tags into a\n    tree of tags.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "NOTE This module is preliminary and may change at future date This module is intended to help converting list of tags into tree of tags",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#t:TagTree",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
        "fct-type": "data",
        "title": "TagTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "TagTree",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:TagBranch",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "TagBranch str [Attribute str] [TagTree str]",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
        "fct-type": "function",
        "title": "TagBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "TagBranch",
        "normalized": "TagBranch a[Attribute a][TagTree a]",
        "package": "tagsoup",
        "partial": "Tag Branch",
        "signature": "TagBranch str[Attribute str][TagTree str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:TagLeaf",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "TagLeaf (Tag str)",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#TagTree",
        "fct-type": "function",
        "title": "TagLeaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "TagLeaf",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:flattenTree",
      "description": {
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "[TagTree str] -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#flattenTree",
        "fct-type": "function",
        "title": "flattenTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "flattenTree",
        "normalized": "[TagTree a]-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Tree",
        "signature": "[TagTree str]-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:tagTree",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of tags into a tree. This version is not lazy at\n   all, that is saved for version 2.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "[Tag str] -\u003e [TagTree str]",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#tagTree",
        "fct-type": "function",
        "title": "tagTree"
      },
      "index": {
        "description": "Convert list of tags into tree This version is not lazy at all that is saved for version",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "tagTree",
        "normalized": "[Tag a]-\u003e[TagTree a]",
        "package": "tagsoup",
        "partial": "Tree",
        "signature": "[Tag str]-\u003e[TagTree str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:transformTree",
      "description": {
        "fct-descr": "\u003cp\u003eThis operation is based on the Uniplate \u003ccode\u003etransform\u003c/code\u003e function. Given a\n   list of trees, it applies the function to every tree in a bottom-up\n   manner. This operation is useful for manipulating a tree - for example\n   to make all tag names upper case:\n\u003c/p\u003e\u003cpre\u003e upperCase = transformTree f\n   where f (TagBranch name atts inner) = [TagBranch (map toUpper name) atts inner]\n         f x = x\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "(TagTree str -\u003e [TagTree str]) -\u003e [TagTree str] -\u003e [TagTree str]",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#transformTree",
        "fct-type": "function",
        "title": "transformTree"
      },
      "index": {
        "description": "This operation is based on the Uniplate transform function Given list of trees it applies the function to every tree in bottom-up manner This operation is useful for manipulating tree for example to make all tag names upper case upperCase transformTree where TagBranch name atts inner TagBranch map toUpper name atts inner",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "transformTree",
        "normalized": "(TagTree a-\u003e[TagTree a])-\u003e[TagTree a]-\u003e[TagTree a]",
        "package": "tagsoup",
        "partial": "Tree",
        "signature": "(TagTree str-\u003e[TagTree str])-\u003e[TagTree str]-\u003e[TagTree str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup-Tree.html#v:universeTree",
      "description": {
        "fct-descr": "\u003cp\u003eThis operation is based on the Uniplate \u003ccode\u003euniverse\u003c/code\u003e function. Given a\n   list of trees, it returns those trees, and all the children trees at\n   any level. For example:\n\u003c/p\u003e\u003cpre\u003e universeTree\n    [TagBranch \"a\" [(\"href\",\"url\")] [TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]]\n == [TagBranch \"a\" [(\"href\",\"url\")] [TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]]\n    ,TagBranch \"b\" [] [TagLeaf (TagText \"text\")]]\n\u003c/pre\u003e\u003cp\u003eThis operation is particularly useful for queries. To collect all \u003ccode\u003e\"a\"\u003c/code\u003e\n   tags in a tree, simply do:\n\u003c/p\u003e\u003cpre\u003e [x | x@(TagTree \"a\" _ _) \u003c- universeTree tree]\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup.Tree",
        "fct-package": "tagsoup",
        "fct-signature": "[TagTree str] -\u003e [TagTree str]",
        "fct-source": "src/Text-HTML-TagSoup-Tree.html#universeTree",
        "fct-type": "function",
        "title": "universeTree"
      },
      "index": {
        "description": "This operation is based on the Uniplate universe function Given list of trees it returns those trees and all the children trees at any level For example universeTree TagBranch href url TagBranch TagLeaf TagText text TagBranch href url TagBranch TagLeaf TagText text TagBranch TagLeaf TagText text This operation is particularly useful for queries To collect all tags in tree simply do TagTree universeTree tree",
        "hierarchy": "Text HTML TagSoup Tree",
        "module": "Text.HTML.TagSoup.Tree",
        "name": "universeTree",
        "normalized": "[TagTree a]-\u003e[TagTree a]",
        "package": "tagsoup",
        "partial": "Tree",
        "signature": "[TagTree str]-\u003e[TagTree str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for working with HTML/XML. It deals with both well-formed XML and\n    malformed HTML from the web. It features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A lazy parser, based on the HTML 5 specification - see \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A renderer that can write out HTML/XML - see \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Utilities for extracting information from a document - see \u003ccode\u003e\u003ca\u003e~==\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esections\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epartitions\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe standard practice is to parse a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eparseTags\u003c/a\u003e\u003c/code\u003e,\n    then operate upon it to extract the necessary information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-HTML-TagSoup.html",
        "fct-type": "module",
        "title": "TagSoup"
      },
      "index": {
        "description": "This module is for working with HTML XML It deals with both well-formed XML and malformed HTML from the web It features lazy parser based on the HTML specification see parseTags renderer that can write out HTML XML see renderTags Utilities for extracting information from document see sections and partitions The standard practice is to parse String to Tag String using parseTags then operate upon it to extract the necessary information",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagSoup",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Soup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Attribute",
      "description": {
        "fct-descr": "\u003cp\u003eAn HTML attribute \u003ccode\u003eid=\"name\"\u003c/code\u003e generates \u003ccode\u003e(\"id\",\"name\")\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "type",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Attribute",
        "fct-type": "type",
        "title": "Attribute"
      },
      "index": {
        "description": "An HTML attribute id name generates id name",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "Attribute",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Column",
      "description": {
        "fct-descr": "\u003cp\u003eThe column of a position, starting at 1\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "type",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Column",
        "fct-type": "type",
        "title": "Column"
      },
      "index": {
        "description": "The column of position starting at",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "Column",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:ParseOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThese options control how \u003ccode\u003eparseTags\u003c/code\u003e works. The \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e type is usually generated by one of\n   \u003ccode\u003e\u003ca\u003eparseOptions\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eparseOptionsFast\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eparseOptionsEntities\u003c/a\u003e\u003c/code\u003e, then selected fields may be overriden.\n\u003c/p\u003e\u003cp\u003eThe options \u003ccode\u003e\u003ca\u003eoptTagPosition\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptTagWarning\u003c/a\u003e\u003c/code\u003e specify whether to generate\n   \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e elements respectively. Usually these options should be set to \u003ccode\u003eFalse\u003c/code\u003e\n   to simplify future stages, unless you rely on position information or want to give malformed HTML\n   messages to the end user.\n\u003c/p\u003e\u003cp\u003eThe options \u003ccode\u003e\u003ca\u003eoptEntityData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eoptEntityAttrib\u003c/a\u003e\u003c/code\u003e control how entities, for example \u003ccode\u003e&nbsp;\u003c/code\u003e are handled.\n   Both take a string, and a boolean, where \u003ccode\u003eTrue\u003c/code\u003e indicates that the entity ended with a semi-colon \u003ccode\u003e;\u003c/code\u003e.\n   Inside normal text \u003ccode\u003e\u003ca\u003eoptEntityData\u003c/a\u003e\u003c/code\u003e will be called, and the results will be inserted in the tag stream.\n   Inside a tag attribute \u003ccode\u003e\u003ca\u003eoptEntityAttrib\u003c/a\u003e\u003c/code\u003e will be called, and the first component of the result will be used\n   in the attribute, and the second component will be appended after the \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e value (usually the second\n   component is \u003ccode\u003e[]\u003c/code\u003e). As an example, to not decode any entities, pass:\n\u003c/p\u003e\u003cpre\u003e parseOptions\n     {optEntityData=\\(str,b) -\u003e [TagText $ \"&\" ++ str ++ [';' | b]]\n     ,optEntityAttrib\\(str,b) -\u003e (\"&\" ++ str ++ [';' | b], [])\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "data",
        "title": "ParseOptions"
      },
      "index": {
        "description": "These options control how parseTags works The ParseOptions type is usually generated by one of parseOptions parseOptionsFast or parseOptionsEntities then selected fields may be overriden The options optTagPosition and optTagWarning specify whether to generate TagPosition or TagWarning elements respectively Usually these options should be set to False to simplify future stages unless you rely on position information or want to give malformed HTML messages to the end user The options optEntityData and optEntityAttrib control how entities for example nbsp are handled Both take string and boolean where True indicates that the entity ended with semi-colon Inside normal text optEntityData will be called and the results will be inserted in the tag stream Inside tag attribute optEntityAttrib will be called and the first component of the result will be used in the attribute and the second component will be appended after the TagOpen value usually the second component is As an example to not decode any entities pass parseOptions optEntityData str TagText str optEntityAttrib str str",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "ParseOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:RenderOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThese options control how \u003ccode\u003e\u003ca\u003erenderTags\u003c/a\u003e\u003c/code\u003e works.\n\u003c/p\u003e\u003cp\u003eThe strange quirk of only minimizing \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tags is due to Internet Explorer treating\n   \u003ccode\u003e\u003cbr\u003e\u003c/br\u003e\u003c/code\u003e as \u003ccode\u003e\u003cbr\u003e\u003cbr\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
        "fct-type": "data",
        "title": "RenderOptions"
      },
      "index": {
        "description": "These options control how renderTags works The strange quirk of only minimizing br tags is due to Internet Explorer treating br br as br br",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "RenderOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Render Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Row",
      "description": {
        "fct-descr": "\u003cp\u003eThe row/line of a position, starting at 1\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "type",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Row",
        "fct-type": "type",
        "title": "Row"
      },
      "index": {
        "description": "The row line of position starting at",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "Row",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eA single HTML element. A whole document is represented by a list of \u003ccode\u003eTag\u003c/code\u003e.\n   There is no requirement for \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e to match.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "data",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "single HTML element whole document is represented by list of Tag There is no requirement for TagOpen and TagClose to match",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "Tag",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#t:TagRep",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a class to allow String's or Tag str's to be used as matches\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "class",
        "fct-source": "src/Text-HTML-TagSoup.html#TagRep",
        "fct-type": "class",
        "title": "TagRep"
      },
      "index": {
        "description": "Define class to allow String or Tag str to be used as matches",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagRep",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:-126--47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eNegation of \u003ccode\u003e\u003ca\u003e~==\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e t -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup.html#~%2F%3D",
        "fct-type": "function",
        "title": "(~/=)"
      },
      "index": {
        "description": "Negation of",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "(~/=) ~/=",
        "normalized": "Tag a-\u003eb-\u003eBool",
        "package": "tagsoup",
        "partial": "",
        "signature": "Tag str-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:-126--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an inexact match, the first item should be the thing to match.\n If the second item is a blank string, that is considered to match anything.\n For example:\n\u003c/p\u003e\u003cpre\u003e (TagText \"test\" ~== TagText \"\"    ) == True\n (TagText \"test\" ~== TagText \"test\") == True\n (TagText \"test\" ~== TagText \"soup\") == False\n\u003c/pre\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e missing attributes on the right are allowed.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e t -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup.html#~%3D%3D",
        "fct-type": "function",
        "title": "(~==)"
      },
      "index": {
        "description": "Performs an inexact match the first item should be the thing to match If the second item is blank string that is considered to match anything For example TagText test TagText True TagText test TagText test True TagText test TagText soup False For TagOpen missing attributes on the right are allowed",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "(~==) ~==",
        "normalized": "Tag a-\u003eb-\u003eBool",
        "package": "tagsoup",
        "partial": "",
        "signature": "Tag str-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:ParseOptions",
      "description": {
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "ParseOptions",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "ParseOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "ParseOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:RenderOptions",
      "description": {
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "RenderOptions",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
        "fct-type": "function",
        "title": "RenderOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "RenderOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Render Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagClose",
      "description": {
        "fct-descr": "\u003cp\u003eA closing tag\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagClose str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagClose"
      },
      "index": {
        "description": "closing tag",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagClose",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagComment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagComment str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagComment"
      },
      "index": {
        "description": "comment",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagComment",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagOpen",
      "description": {
        "fct-descr": "\u003cp\u003eAn open tag with \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003es in their original order\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagOpen str [Attribute str]",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagOpen"
      },
      "index": {
        "description": "An open tag with Attribute in their original order",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagOpen",
        "normalized": "TagOpen a[Attribute a]",
        "package": "tagsoup",
        "partial": "Tag Open",
        "signature": "TagOpen str[Attribute str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagPosition",
      "description": {
        "fct-descr": "\u003cp\u003eMeta: The position of a parsed element\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagPosition !Row !Column",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagPosition"
      },
      "index": {
        "description": "Meta The position of parsed element",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagPosition",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagText",
      "description": {
        "fct-descr": "\u003cp\u003eA text node, guaranteed not to be the empty string\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagText str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagText"
      },
      "index": {
        "description": "text node guaranteed not to be the empty string",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagText",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:TagWarning",
      "description": {
        "fct-descr": "\u003cp\u003eMeta: A syntax error in the input file\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "TagWarning str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#Tag",
        "fct-type": "function",
        "title": "TagWarning"
      },
      "index": {
        "description": "Meta syntax error in the input file",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "TagWarning",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:canonicalizeTags",
      "description": {
        "fct-descr": "\u003cp\u003eTurns all tag names and attributes to lower case and\n   converts DOCTYPE to upper case.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "[Tag str] -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup.html#canonicalizeTags",
        "fct-type": "function",
        "title": "canonicalizeTags"
      },
      "index": {
        "description": "Turns all tag names and attributes to lower case and converts DOCTYPE to upper case",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "canonicalizeTags",
        "normalized": "[Tag a]-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Tags",
        "signature": "[Tag str]-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:escapeHTML",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the four characters \u003ccode\u003e&\"\u003c\u003e\u003c/code\u003e with their HTML entities (\u003ccode\u003e\u003ca\u003eescapeXML\u003c/a\u003e\u003c/code\u003e lifted to \u003ccode\u003e\u003ca\u003eStringLike\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#escapeHTML",
        "fct-type": "function",
        "title": "escapeHTML"
      },
      "index": {
        "description": "Replace the four characters with their HTML entities escapeXML lifted to StringLike",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "escapeHTML",
        "normalized": "a-\u003ea",
        "package": "tagsoup",
        "partial": "HTML",
        "signature": "str-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:fromAttrib",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an attribute, crashes if not a \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e.\n   Returns \u003ccode\u003e\"\"\u003c/code\u003e if no attribute present.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#fromAttrib",
        "fct-type": "function",
        "title": "fromAttrib"
      },
      "index": {
        "description": "Extract an attribute crashes if not TagOpen Returns if no attribute present",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "fromAttrib",
        "normalized": "a-\u003eTag a-\u003ea",
        "package": "tagsoup",
        "partial": "Attrib",
        "signature": "str-\u003eTag str-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:fromTagText",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e, crashes if not a \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#fromTagText",
        "fct-type": "function",
        "title": "fromTagText"
      },
      "index": {
        "description": "Extract the string from within TagText crashes if not TagText",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "fromTagText",
        "normalized": "Tag a-\u003ea",
        "package": "tagsoup",
        "partial": "Tag Text",
        "signature": "Tag str-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:innerText",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all text content from tags (similar to Verbatim found in HaXml)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "[Tag str] -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#innerText",
        "fct-type": "function",
        "title": "innerText"
      },
      "index": {
        "description": "Extract all text content from tags similar to Verbatim found in HaXml",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "innerText",
        "normalized": "[Tag a]-\u003ea",
        "package": "tagsoup",
        "partial": "Text",
        "signature": "[Tag str]-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagClose",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagClose",
        "fct-type": "function",
        "title": "isTagClose"
      },
      "index": {
        "description": "Test if Tag is TagClose",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagClose",
        "normalized": "Tag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Close",
        "signature": "Tag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagCloseName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTagClose\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagCloseName",
        "fct-type": "function",
        "title": "isTagCloseName"
      },
      "index": {
        "description": "Returns True if the Tag is TagClose and matches the given name",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagCloseName",
        "normalized": "a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Close Name",
        "signature": "str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagOpen",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagOpen",
        "fct-type": "function",
        "title": "isTagOpen"
      },
      "index": {
        "description": "Test if Tag is TagOpen",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagOpen",
        "normalized": "Tag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Open",
        "signature": "Tag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagOpenName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTagOpen\u003c/a\u003e\u003c/code\u003e and matches the given name\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagOpenName",
        "fct-type": "function",
        "title": "isTagOpenName"
      },
      "index": {
        "description": "Returns True if the Tag is TagOpen and matches the given name",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagOpenName",
        "normalized": "a-\u003eTag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Open Name",
        "signature": "str-\u003eTag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagPosition",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagPosition",
        "fct-type": "function",
        "title": "isTagPosition"
      },
      "index": {
        "description": "Test if Tag is TagPosition",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagPosition",
        "normalized": "Tag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Position",
        "signature": "Tag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagText",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagText",
        "fct-type": "function",
        "title": "isTagText"
      },
      "index": {
        "description": "Test if Tag is TagText",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagText",
        "normalized": "Tag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Text",
        "signature": "Tag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:isTagWarning",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#isTagWarning",
        "fct-type": "function",
        "title": "isTagWarning"
      },
      "index": {
        "description": "Test if Tag is TagWarning",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "isTagWarning",
        "normalized": "Tag a-\u003eBool",
        "package": "tagsoup",
        "partial": "Tag Warning",
        "signature": "Tag str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:maybeTagText",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Maybe str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#maybeTagText",
        "fct-type": "function",
        "title": "maybeTagText"
      },
      "index": {
        "description": "Extract the string from within TagText otherwise Nothing",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "maybeTagText",
        "normalized": "Tag a-\u003eMaybe a",
        "package": "tagsoup",
        "partial": "Tag Text",
        "signature": "Tag str-\u003eMaybe str"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:maybeTagWarning",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the string from within \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Tag str -\u003e Maybe str",
        "fct-source": "src/Text-HTML-TagSoup-Type.html#maybeTagWarning",
        "fct-type": "function",
        "title": "maybeTagWarning"
      },
      "index": {
        "description": "Extract the string from within TagWarning otherwise Nothing",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "maybeTagWarning",
        "normalized": "Tag a-\u003eMaybe a",
        "package": "tagsoup",
        "partial": "Tag Warning",
        "signature": "Tag str-\u003eMaybe str"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEntityAttrib",
      "description": {
        "fct-descr": "\u003cp\u003eHow to lookup an entity in an attribute (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e?)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "(str, Bool) -\u003e (str, [Tag str])",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "optEntityAttrib"
      },
      "index": {
        "description": "How to lookup an entity in an attribute Bool has ending",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optEntityAttrib",
        "normalized": "(a,Bool)-\u003e(a,[Tag a])",
        "package": "tagsoup",
        "partial": "Entity Attrib",
        "signature": "(str,Bool)-\u003e(str,[Tag str])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEntityData",
      "description": {
        "fct-descr": "\u003cp\u003eHow to lookup an entity (Bool = has ending \u003ccode\u003e';'\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "(str, Bool) -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "optEntityData"
      },
      "index": {
        "description": "How to lookup an entity Bool has ending",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optEntityData",
        "normalized": "(a,Bool)-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Entity Data",
        "signature": "(str,Bool)-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optEscape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape a piece of text (default = escape the four characters \u003ccode\u003e&\"\u003c\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
        "fct-type": "function",
        "title": "optEscape"
      },
      "index": {
        "description": "Escape piece of text default escape the four characters",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optEscape",
        "normalized": "a-\u003ea",
        "package": "tagsoup",
        "partial": "Escape",
        "signature": "str-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optMinimize",
      "description": {
        "fct-descr": "\u003cp\u003eMinimise \u003cb\u003e\u003c/b\u003e -\u003e \u003cb/\u003e (default = minimise only \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e tags)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
        "fct-type": "function",
        "title": "optMinimize"
      },
      "index": {
        "description": "Minimise default minimise only br tags",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optMinimize",
        "normalized": "a-\u003eBool",
        "package": "tagsoup",
        "partial": "Minimize",
        "signature": "str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optRawTag",
      "description": {
        "fct-descr": "\u003cp\u003eShould a tag be output with no escaping (default = true only for \u003ccode\u003escript\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e Bool",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#RenderOptions",
        "fct-type": "function",
        "title": "optRawTag"
      },
      "index": {
        "description": "Should tag be output with no escaping default true only for script",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optRawTag",
        "normalized": "a-\u003eBool",
        "package": "tagsoup",
        "partial": "Raw Tag",
        "signature": "str-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagPosition",
      "description": {
        "fct-descr": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagPosition\u003c/a\u003e\u003c/code\u003e values be given before some items (default=False,fast=False).\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Bool",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "optTagPosition"
      },
      "index": {
        "description": "Should TagPosition values be given before some items default False fast False",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optTagPosition",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagTextMerge",
      "description": {
        "fct-descr": "\u003cp\u003eRequire no adjacent \u003ccode\u003e\u003ca\u003eTagText\u003c/a\u003e\u003c/code\u003e values (default=True,fast=False)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Bool",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "optTagTextMerge"
      },
      "index": {
        "description": "Require no adjacent TagText values default True fast False",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optTagTextMerge",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Text Merge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:optTagWarning",
      "description": {
        "fct-descr": "\u003cp\u003eShould \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e values be given (default=False,fast=False)\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "Bool",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#ParseOptions",
        "fct-type": "function",
        "title": "optTagWarning"
      },
      "index": {
        "description": "Should TagWarning values be given default False fast False",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "optTagWarning",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Tag Warning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default parse options value, described in \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e. Equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseOptionsEntities\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elookupEntity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "ParseOptions str",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#parseOptions",
        "fct-type": "function",
        "title": "parseOptions"
      },
      "index": {
        "description": "The default parse options value described in ParseOptions Equivalent to parseOptionsEntities lookupEntity",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "parseOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptionsEntities",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e structure using a custom function to lookup attributes. Any attribute\n   that is not found will be left intact, and a \u003ccode\u003e\u003ca\u003eTagWarning\u003c/a\u003e\u003c/code\u003e given (if \u003ccode\u003e\u003ca\u003eoptTagWarning\u003c/a\u003e\u003c/code\u003e is set).\n\u003c/p\u003e\u003cp\u003eIf you do not want to resolve any entities, simpliy pass \u003ccode\u003econst Nothing\u003c/code\u003e for the lookup function.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "(str -\u003e Maybe str) -\u003e ParseOptions str",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#parseOptionsEntities",
        "fct-type": "function",
        "title": "parseOptionsEntities"
      },
      "index": {
        "description": "ParseOptions structure using custom function to lookup attributes Any attribute that is not found will be left intact and TagWarning given if optTagWarning is set If you do not want to resolve any entities simpliy pass const Nothing for the lookup function",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "parseOptionsEntities",
        "normalized": "(a-\u003eMaybe a)-\u003eParseOptions a",
        "package": "tagsoup",
        "partial": "Options Entities",
        "signature": "(str-\u003eMaybe str)-\u003eParseOptions str"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseOptionsFast",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e structure optimised for speed, following the fast options.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "ParseOptions str",
        "fct-source": "src/Text-HTML-TagSoup-Options.html#parseOptionsFast",
        "fct-type": "function",
        "title": "parseOptionsFast"
      },
      "index": {
        "description": "ParseOptions structure optimised for speed following the fast options",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "parseOptionsFast",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Options Fast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseTags",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a list of tags, using an HTML 5 compliant parser.\n\u003c/p\u003e\u003cpre\u003e parseTags \"\u003chello\u003emy&amp;\u003c/world\u003e\" == [TagOpen \"hello\" [],TagText \"my&\",TagClose \"world\"]\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "str -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup-Parser.html#parseTags",
        "fct-type": "function",
        "title": "parseTags"
      },
      "index": {
        "description": "Parse string to list of tags using an HTML compliant parser parseTags hello my amp world TagOpen hello TagText my TagClose world",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "parseTags",
        "normalized": "a-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Tags",
        "signature": "str-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:parseTagsOptions",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a list of tags, using settings supplied by the \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e parameter,\n   eg. to output position information:\n\u003c/p\u003e\u003cpre\u003e parseTagsOptions parseOptions{optTagPosition = True} \"\u003chello\u003emy&amp;\u003c/world\u003e\" ==\n    [TagPosition 1 1,TagOpen \"hello\" [],TagPosition 1 8,TagText \"my&\",TagPosition 1 15,TagClose \"world\"]\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "ParseOptions str -\u003e str -\u003e [Tag str]",
        "fct-source": "src/Text-HTML-TagSoup-Parser.html#parseTagsOptions",
        "fct-type": "function",
        "title": "parseTagsOptions"
      },
      "index": {
        "description": "Parse string to list of tags using settings supplied by the ParseOptions parameter eg to output position information parseTagsOptions parseOptions optTagPosition True hello my amp world TagPosition TagOpen hello TagPosition TagText my TagPosition TagClose world",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "parseTagsOptions",
        "normalized": "ParseOptions a-\u003ea-\u003e[Tag a]",
        "package": "tagsoup",
        "partial": "Tags Options",
        "signature": "ParseOptions str-\u003estr-\u003e[Tag str]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:partitions",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003esections\u003c/a\u003e\u003c/code\u003e, but splits the list\n   so no element appears in any two partitions.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Text-HTML-TagSoup.html#partitions",
        "fct-type": "function",
        "title": "partitions"
      },
      "index": {
        "description": "This function is similar to sections but splits the list so no element appears in any two partitions",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "partitions",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "tagsoup",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default render options value, described in \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "RenderOptions str",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#renderOptions",
        "fct-type": "function",
        "title": "renderOptions"
      },
      "index": {
        "description": "The default render options value described in RenderOptions",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "renderOptions",
        "normalized": "",
        "package": "tagsoup",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderTags",
      "description": {
        "fct-descr": "\u003cp\u003eShow a list of tags, as they might have been parsed, using the default settings given in\n   \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e renderTags [TagOpen \"hello\" [],TagText \"my&\",TagClose \"world\"] == \"\u003chello\u003emy&amp;\u003c/world\u003e\"\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "[Tag str] -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#renderTags",
        "fct-type": "function",
        "title": "renderTags"
      },
      "index": {
        "description": "Show list of tags as they might have been parsed using the default settings given in RenderOptions renderTags TagOpen hello TagText my TagClose world hello my amp world",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "renderTags",
        "normalized": "[Tag a]-\u003ea",
        "package": "tagsoup",
        "partial": "Tags",
        "signature": "[Tag str]-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:renderTagsOptions",
      "description": {
        "fct-descr": "\u003cp\u003eShow a list of tags using settings supplied by the \u003ccode\u003e\u003ca\u003eRenderOptions\u003c/a\u003e\u003c/code\u003e parameter,\n   eg. to avoid escaping any characters one could do:\n\u003c/p\u003e\u003cpre\u003e renderTagsOptions renderOptions{optEscape = id} [TagText \"my&\"] == \"my&\"\n\u003c/pre\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "RenderOptions str -\u003e [Tag str] -\u003e str",
        "fct-source": "src/Text-HTML-TagSoup-Render.html#renderTagsOptions",
        "fct-type": "function",
        "title": "renderTagsOptions"
      },
      "index": {
        "description": "Show list of tags using settings supplied by the RenderOptions parameter eg to avoid escaping any characters one could do renderTagsOptions renderOptions optEscape id TagText my my",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "renderTagsOptions",
        "normalized": "RenderOptions a-\u003e[Tag a]-\u003ea",
        "package": "tagsoup",
        "partial": "Tags Options",
        "signature": "RenderOptions str-\u003e[Tag str]-\u003estr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:sections",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a list, and returns all suffixes whose\n   first item matches the predicate.\n\u003c/p\u003e",
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Text-HTML-TagSoup.html#sections",
        "fct-type": "function",
        "title": "sections"
      },
      "index": {
        "description": "This function takes list and returns all suffixes whose first item matches the predicate",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "sections",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "tagsoup",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-HTML-TagSoup.html#v:toTagRep",
      "description": {
        "fct-module": "Text.HTML.TagSoup",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e Tag str",
        "fct-source": "src/Text-HTML-TagSoup.html#toTagRep",
        "fct-type": "method",
        "title": "toTagRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HTML TagSoup",
        "module": "Text.HTML.TagSoup",
        "name": "toTagRep",
        "normalized": "a-\u003eTag b",
        "package": "tagsoup",
        "partial": "Tag Rep",
        "signature": "a-\u003eTag str"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: This module is \u003cem\u003enot\u003c/em\u003e intended for use outside the TagSoup library.\n\u003c/p\u003e\u003cp\u003eThis module provides an abstraction for String's as used inside TagSoup. It allows\n   TagSoup to work with String (list of Char), ByteString.Char8, ByteString.Lazy.Char8,\n   Data.Text and Data.Text.Lazy.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "module",
        "fct-source": "src/Text-StringLike.html",
        "fct-type": "module",
        "title": "StringLike"
      },
      "index": {
        "description": "WARNING This module is not intended for use outside the TagSoup library This module provides an abstraction for String as used inside TagSoup It allows TagSoup to work with String list of Char ByteString.Char8 ByteString.Lazy.Char8 Data.Text and Data.Text.Lazy",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "StringLike",
        "normalized": "",
        "package": "tagsoup",
        "partial": "String Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#t:StringLike",
      "description": {
        "fct-descr": "\u003cp\u003eA class to generalise TagSoup parsing over many types of string-like types.\n   Examples are given for the String type.\n\u003c/p\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "class",
        "fct-source": "src/Text-StringLike.html#StringLike",
        "fct-type": "class",
        "title": "StringLike"
      },
      "index": {
        "description": "class to generalise TagSoup parsing over many types of string-like types Examples are given for the String type",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "StringLike",
        "normalized": "",
        "package": "tagsoup",
        "partial": "String Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:append",
      "description": {
        "fct-descr": "\u003cpre\u003e append = (++)\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Text-StringLike.html#append",
        "fct-type": "method",
        "title": "append"
      },
      "index": {
        "description": "append",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "append",
        "normalized": "a-\u003ea-\u003ea",
        "package": "tagsoup",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:castString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a String from one type to another.\n\u003c/p\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Text-StringLike.html#castString",
        "fct-type": "function",
        "title": "castString"
      },
      "index": {
        "description": "Convert String from one type to another",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "castString",
        "normalized": "a-\u003eb",
        "package": "tagsoup",
        "partial": "String",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:cons",
      "description": {
        "fct-descr": "\u003cpre\u003e cons = (:)\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "Char -\u003e a -\u003e a",
        "fct-source": "src/Text-StringLike.html#cons",
        "fct-type": "method",
        "title": "cons"
      },
      "index": {
        "description": "cons",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "cons",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "tagsoup",
        "partial": "",
        "signature": "Char-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:empty",
      "description": {
        "fct-descr": "\u003cpre\u003e empty = \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a",
        "fct-source": "src/Text-StringLike.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "empty",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "empty",
        "normalized": "",
        "package": "tagsoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:fromChar",
      "description": {
        "fct-descr": "\u003cpre\u003e fromChar = return\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "Char -\u003e a",
        "fct-source": "src/Text-StringLike.html#fromChar",
        "fct-type": "method",
        "title": "fromChar"
      },
      "index": {
        "description": "fromChar return",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "fromChar",
        "normalized": "Char-\u003ea",
        "package": "tagsoup",
        "partial": "Char",
        "signature": "Char-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:fromString",
      "description": {
        "fct-descr": "\u003cpre\u003e fromString = id\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Text-StringLike.html#fromString",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "fromString id",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "tagsoup",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:strConcat",
      "description": {
        "fct-descr": "\u003cpre\u003e strConcat = concat\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Text-StringLike.html#strConcat",
        "fct-type": "method",
        "title": "strConcat"
      },
      "index": {
        "description": "strConcat concat",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "strConcat",
        "normalized": "[a]-\u003ea",
        "package": "tagsoup",
        "partial": "Concat",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:strNull",
      "description": {
        "fct-descr": "\u003cpre\u003e strNull = null\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Text-StringLike.html#strNull",
        "fct-type": "method",
        "title": "strNull"
      },
      "index": {
        "description": "strNull null",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "strNull",
        "normalized": "a-\u003eBool",
        "package": "tagsoup",
        "partial": "Null",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:toString",
      "description": {
        "fct-descr": "\u003cpre\u003e toString = id\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-StringLike.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "toString id",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "tagsoup",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagsoup/docs/Text-StringLike.html#v:uncons",
      "description": {
        "fct-descr": "\u003cpre\u003e uncons []     = Nothing\n uncons (x:xs) = Just (x, xs)\n\u003c/pre\u003e",
        "fct-module": "Text.StringLike",
        "fct-package": "tagsoup",
        "fct-signature": "a -\u003e Maybe (Char, a)",
        "fct-source": "src/Text-StringLike.html#uncons",
        "fct-type": "method",
        "title": "uncons"
      },
      "index": {
        "description": "uncons Nothing uncons xs Just xs",
        "hierarchy": "Text StringLike",
        "module": "Text.StringLike",
        "name": "uncons",
        "normalized": "a-\u003eMaybe(Char,a)",
        "package": "tagsoup",
        "partial": "",
        "signature": "a-\u003eMaybe(Char,a)"
      }
    }
  }
]