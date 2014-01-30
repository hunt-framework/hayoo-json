[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides some common XML tree parsing combinators.\n There are two main groups of combinators: XPath-like combinators\n and tag/forest combinators.  Use combinators from the first group\n if possible, since they are generally easier too use and generate\n results in a lazy manner.\n\u003c/p\u003e\u003cp\u003eThe second class contains more powerful combinators which can be used\n to parse the contents of an XML node in a generic way.  Note, that\n combinators from the two groups can be interleaved -- you can use\n a forest parser to construct a tree predicate, but you can also use\n a tree predicate as an elementary forest parser (see the\n \u003ca\u003eText.XML.PolySoup.Parser\u003c/a\u003e module).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup-Combine.html",
        "fct-type": "module",
        "title": "Combine"
      },
      "index": {
        "description": "The module provides some common XML tree parsing combinators There are two main groups of combinators XPath-like combinators and tag forest combinators Use combinators from the first group if possible since they are generally easier too use and generate results in lazy manner The second class contains more powerful combinators which can be used to parse the contents of an XML node in generic way Note that combinators from the two groups can be interleaved you can use forest parser to construct tree predicate but you can also use tree predicate as an elementary forest parser see the Text.XML.PolySoup.Parser module",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "Combine",
        "normalized": "",
        "package": "polysoup",
        "partial": "Combine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003e/\u003e\u003c/a\u003e\u003c/code\u003e combinator but runs the XML parser for all\n descendant XML elements, not only for its children.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) [b]",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%2F%2F%3E",
        "fct-type": "function",
        "title": "(//\u003e)"
      },
      "index": {
        "description": "Similar to combinator but runs the XML parser for all descendant XML elements not only for its children",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(//\u003e) //\u003e",
        "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)[c]",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag parser with the XML parser.  The XML parser will\n be called multiple times for tag children elements.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) [b]",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%2F%3E",
        "fct-type": "function",
        "title": "(/\u003e)"
      },
      "index": {
        "description": "Combine the tag parser with the XML parser The XML parser will be called multiple times for tag children elements",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(/\u003e) /\u003e",
        "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)[c]",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag parser with the XML parser.  The XML parser will\n be called multiple times for tag children elements.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) (a, [b])",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "Combine the tag parser with the XML parser The XML parser will be called multiple times for tag children elements",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)(b,[c])",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)(a,[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--94-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of the joinL combinators.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) a",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%3C%5E",
        "fct-type": "function",
        "title": "(\u003c^)"
      },
      "index": {
        "description": "Infix version of the joinL combinators",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(\u003c^) \u003c^",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--94--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of the joinP combinators.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) (a, b)",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%3C%5E%3E",
        "fct-type": "function",
        "title": "(\u003c^\u003e)"
      },
      "index": {
        "description": "Infix version of the joinP combinators",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(\u003c^\u003e) \u003c^\u003e",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)(b,c)",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-62--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine a tag predicate with an XML predicate.  The XML predicate can\n depend on the value of tag parser and will be called multiple times for\n tag children elements.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e (a -\u003e Q (XmlTree s) b) -\u003e Q (XmlTree s) [b]",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%3E%2F%3E",
        "fct-type": "function",
        "title": "(\u003e/\u003e)"
      },
      "index": {
        "description": "Combine tag predicate with an XML predicate The XML predicate can depend on the value of tag parser and will be called multiple times for tag children elements",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(\u003e/\u003e) \u003e/\u003e",
        "normalized": "Q(Tag a)b-\u003e(b-\u003eQ(XmlTree a)c)-\u003eQ(XmlTree a)[c]",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003e(a-\u003eQ(XmlTree s)b)-\u003eQ(XmlTree s)[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-62--94--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of the join combinators.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e (a -\u003e P (XmlTree s) b) -\u003e Q (XmlTree s) b",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%3E%5E%3E",
        "fct-type": "function",
        "title": "(\u003e^\u003e)"
      },
      "index": {
        "description": "Infix version of the join combinators",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(\u003e^\u003e) \u003e^\u003e",
        "normalized": "Q(Tag a)b-\u003e(b-\u003eP(XmlTree a)c)-\u003eQ(XmlTree a)c",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003e(a-\u003eP(XmlTree s)b)-\u003eQ(XmlTree s)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-94--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of the joinR combinators.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) b",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#%5E%3E",
        "fct-type": "function",
        "title": "(^\u003e)"
      },
      "index": {
        "description": "Infix version of the joinR combinators",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "(^\u003e) ^\u003e",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)c",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag predicate with the forest parser which will be used\n to parse contents of the tag element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e (a -\u003e P (XmlTree s) b) -\u003e Q (XmlTree s) b",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Combine the tag predicate with the forest parser which will be used to parse contents of the tag element",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "join",
        "normalized": "Q(Tag a)b-\u003e(b-\u003eP(XmlTree a)c)-\u003eQ(XmlTree a)c",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003e(a-\u003eP(XmlTree s)b)-\u003eQ(XmlTree s)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinL",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag predicate with the orest parser which will be used\n to parse contents of the tag element.  Only results of the tag predicate\n will be returned (the contents have to be successfully parsed, though).\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) a",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#joinL",
        "fct-type": "function",
        "title": "joinL"
      },
      "index": {
        "description": "Combine the tag predicate with the orest parser which will be used to parse contents of the tag element Only results of the tag predicate will be returned the contents have to be successfully parsed though",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "joinL",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinP",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag predicate with the forest parser which will be used\n to parse contents of the tag element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) (a, b)",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#joinP",
        "fct-type": "function",
        "title": "joinP"
      },
      "index": {
        "description": "Combine the tag predicate with the forest parser which will be used to parse contents of the tag element",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "joinP",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)(b,c)",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinR",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the tag predicate with the orest parser which will be used\n to parse contents of the tag element.  Only results of the forest parser\n will be returned.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) b",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#joinR",
        "fct-type": "function",
        "title": "joinR"
      },
      "index": {
        "description": "Combine the tag predicate with the orest parser which will be used to parse contents of the tag element Only results of the forest parser will be returned",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "joinR",
        "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)c",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:node",
      "description": {
        "fct-descr": "\u003cp\u003eMake a tree-level predicate from a tag-level predicate.\n Note, that in most cases you won't need this function, you\n can make use of the \u003ccode\u003eQuery\u003c/code\u003e typeclass.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Combine",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) a -\u003e Q (XmlTree s) a",
        "fct-source": "src/Text-XML-PolySoup-Combine.html#node",
        "fct-type": "function",
        "title": "node"
      },
      "index": {
        "description": "Make tree-level predicate from tag-level predicate Note that in most cases you won need this function you can make use of the Query typeclass",
        "hierarchy": "Text XML PolySoup Combine",
        "module": "Text.XML.PolySoup.Combine",
        "name": "node",
        "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)a-\u003eQ(XmlTree s)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module defines a generic parser which can be used, in particular,\n to parse XML forests.  The main characteristic of the parser is that it\n can be used in a sequential (sub-trees are processed in order) and a\n selective (subtrees are process regardless of their position) way.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "The module defines generic parser which can be used in particular to parse XML forests The main characteristic of the parser is that it can be used in sequential sub-trees are processed in order and selective subtrees are process regardless of their position way",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "polysoup",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#t:P",
      "description": {
        "fct-descr": "\u003cp\u003eAn XML forest parser.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "newtype",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#P",
        "fct-type": "newtype",
        "title": "P"
      },
      "index": {
        "description": "An XML forest parser",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "P",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:P",
      "description": {
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "P",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#P",
        "fct-type": "function",
        "title": "P"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "P",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:evalP",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate parser on the given XML forest.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "P a b -\u003e [a] -\u003e Maybe b",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#evalP",
        "fct-type": "function",
        "title": "evalP"
      },
      "index": {
        "description": "Evaluate parser on the given XML forest",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "evalP",
        "normalized": "P a b-\u003e[a]-\u003eMaybe b",
        "package": "polysoup",
        "partial": "",
        "signature": "P a b-\u003e[a]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:every",
      "description": {
        "fct-descr": "\u003cp\u003eSelect every tree satisfying the given predicate.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "Q a b -\u003e P a [b]",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#every",
        "fct-type": "function",
        "title": "every"
      },
      "index": {
        "description": "Select every tree satisfying the given predicate",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "every",
        "normalized": "Q a b-\u003eP a[b]",
        "package": "polysoup",
        "partial": "",
        "signature": "Q a b-\u003eP a[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym to \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "Q a b -\u003e P a b",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "synonym to first",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "find",
        "normalized": "Q a b-\u003eP a b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q a b-\u003eP a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eFind the first tree satisfying the given predicate.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "Q a b -\u003e P a b",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#first",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Find the first tree satisfying the given predicate",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "first",
        "normalized": "Q a b-\u003eP a b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q a b-\u003eP a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eCheck, if the first tree satisfies the given predicate.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "Q a b -\u003e P a b",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Check if the first tree satisfies the given predicate",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "pop",
        "normalized": "Q a b-\u003eP a b",
        "package": "polysoup",
        "partial": "",
        "signature": "Q a b-\u003eP a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:runP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.PolySoup.Parser",
        "fct-package": "polysoup",
        "fct-signature": "[a] -\u003e Maybe (b, [a])",
        "fct-source": "src/Text-XML-PolySoup-Parser.html#P",
        "fct-type": "function",
        "title": "runP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML PolySoup Parser",
        "module": "Text.XML.PolySoup.Parser",
        "name": "runP",
        "normalized": "[a]-\u003eMaybe(b,[a])",
        "package": "polysoup",
        "partial": "",
        "signature": "[a]-\u003eMaybe(b,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic extracting predicate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html",
        "fct-type": "module",
        "title": "Predicate"
      },
      "index": {
        "description": "generic extracting predicate",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "Predicate",
        "normalized": "",
        "package": "polysoup",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#t:Q",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate checks if the given element satisfies some properties\n and extracts its attribute values.  You can compose predicates using\n Functor, Applicative and Alternative operators: \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e etc.\n Note, that it doesn't really have sense to use function like \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003esome\u003c/a\u003e\u003c/code\u003e, since the extracting predicate doesn't consume any input.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "newtype",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html#Q",
        "fct-type": "newtype",
        "title": "Q"
      },
      "index": {
        "description": "predicate checks if the given element satisfies some properties and extracts its attribute values You can compose predicates using Functor Applicative and Alternative operators etc Note that it doesn really have sense to use function like many or some since the extracting predicate doesn consume any input",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "Q",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:Q",
      "description": {
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "Q",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html#Q",
        "fct-type": "function",
        "title": "Q"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "Q",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:runQ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "a -\u003e Maybe b",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html#Q",
        "fct-type": "function",
        "title": "runQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "runQ",
        "normalized": "a-\u003eMaybe b",
        "package": "polysoup",
        "partial": "",
        "signature": "a-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:satisfy",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the given predicate is satisfied.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "(a -\u003e Bool) -\u003e Q a a",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html#satisfy",
        "fct-type": "function",
        "title": "satisfy"
      },
      "index": {
        "description": "Check if the given predicate is satisfied",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "satisfy",
        "normalized": "(a-\u003eBool)-\u003eQ a a",
        "package": "polysoup",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eQ a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate which is always satisfied.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Predicate",
        "fct-package": "polysoup",
        "fct-signature": "Q a a",
        "fct-source": "src/Text-XML-PolySoup-Predicate.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "Predicate which is always satisfied",
        "hierarchy": "Text XML PolySoup Predicate",
        "module": "Text.XML.PolySoup.Predicate",
        "name": "true",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides tag-level predicates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup-Tag.html",
        "fct-type": "module",
        "title": "Tag"
      },
      "index": {
        "description": "The module provides tag-level predicates",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:attr",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the attribute value.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "s -\u003e Q (Tag s) s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#attr",
        "fct-type": "function",
        "title": "attr"
      },
      "index": {
        "description": "Extract the attribute value",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "attr",
        "normalized": "a-\u003eQ(Tag a)a",
        "package": "polysoup",
        "partial": "",
        "signature": "s-\u003eQ(Tag s)s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:atts",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the attribute value.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) [(s, s)]",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#atts",
        "fct-type": "function",
        "title": "atts"
      },
      "index": {
        "description": "Extract the attribute value",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "atts",
        "normalized": "Q(Tag a)[(a,a)]",
        "package": "polysoup",
        "partial": "",
        "signature": "Q(Tag s)[(s,s)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:commentTag",
      "description": {
        "fct-descr": "\u003cp\u003eA comment node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#commentTag",
        "fct-type": "function",
        "title": "commentTag"
      },
      "index": {
        "description": "comment node",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "commentTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet value of the attribute.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "s -\u003e Tag s -\u003e Maybe s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#getAttr",
        "fct-type": "function",
        "title": "getAttr"
      },
      "index": {
        "description": "Get value of the attribute",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "getAttr",
        "normalized": "a-\u003eTag a-\u003eMaybe a",
        "package": "polysoup",
        "partial": "Attr",
        "signature": "s-\u003eTag s-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getAtts",
      "description": {
        "fct-descr": "\u003cp\u003eGet name of the tag.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Tag s -\u003e Maybe [(s, s)]",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#getAtts",
        "fct-type": "function",
        "title": "getAtts"
      },
      "index": {
        "description": "Get name of the tag",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "getAtts",
        "normalized": "Tag a-\u003eMaybe[(a,a)]",
        "package": "polysoup",
        "partial": "Atts",
        "signature": "Tag s-\u003eMaybe[(s,s)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getName",
      "description": {
        "fct-descr": "\u003cp\u003eGet name of the tag.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Tag s -\u003e Maybe s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#getName",
        "fct-type": "function",
        "title": "getName"
      },
      "index": {
        "description": "Get name of the tag",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "getName",
        "normalized": "Tag a-\u003eMaybe a",
        "package": "polysoup",
        "partial": "Name",
        "signature": "Tag s-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getText",
      "description": {
        "fct-descr": "\u003cp\u003eGet contents of the text node.\n A synonym for \u003ccode\u003e\u003ca\u003emaybeTagText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Tag s -\u003e Maybe s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#getText",
        "fct-type": "function",
        "title": "getText"
      },
      "index": {
        "description": "Get contents of the text node synonym for maybeTagText",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "getText",
        "normalized": "Tag a-\u003eMaybe a",
        "package": "polysoup",
        "partial": "Text",
        "signature": "Tag s-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:hasAttr",
      "description": {
        "fct-descr": "\u003cp\u003eDoes it have a given attribute?\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "s -\u003e Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#hasAttr",
        "fct-type": "function",
        "title": "hasAttr"
      },
      "index": {
        "description": "Does it have given attribute",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "hasAttr",
        "normalized": "a-\u003eQ(Tag a)(Tag a)",
        "package": "polysoup",
        "partial": "Attr",
        "signature": "s-\u003eQ(Tag s)(Tag s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:hasAttrVal",
      "description": {
        "fct-descr": "\u003cp\u003eDoes it have a given attribute with a given value?\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "s -\u003e s -\u003e Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#hasAttrVal",
        "fct-type": "function",
        "title": "hasAttrVal"
      },
      "index": {
        "description": "Does it have given attribute with given value",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "hasAttrVal",
        "normalized": "a-\u003ea-\u003eQ(Tag a)(Tag a)",
        "package": "polysoup",
        "partial": "Attr Val",
        "signature": "s-\u003es-\u003eQ(Tag s)(Tag s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:innerTag",
      "description": {
        "fct-descr": "\u003cp\u003eInternal node (i.e., an opening tag).\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#innerTag",
        "fct-type": "function",
        "title": "innerTag"
      },
      "index": {
        "description": "Internal node i.e an opening tag",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "innerTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:leafTag",
      "description": {
        "fct-descr": "\u003cp\u003eLeaf node (everything but an opening tag).\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#leafTag",
        "fct-type": "function",
        "title": "leafTag"
      },
      "index": {
        "description": "Leaf node everything but an opening tag",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "leafTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the tag name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Extract the tag name",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "name",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:named",
      "description": {
        "fct-descr": "\u003cp\u003eDoes it have a given name?\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "s -\u003e Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#named",
        "fct-type": "function",
        "title": "named"
      },
      "index": {
        "description": "Does it have given name",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "named",
        "normalized": "a-\u003eQ(Tag a)(Tag a)",
        "package": "polysoup",
        "partial": "",
        "signature": "s-\u003eQ(Tag s)(Tag s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:positionTag",
      "description": {
        "fct-descr": "\u003cp\u003eA position node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#positionTag",
        "fct-type": "function",
        "title": "positionTag"
      },
      "index": {
        "description": "position node",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "positionTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eExtract textual contents of the text node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) s",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Extract textual contents of the text node",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "text",
        "normalized": "",
        "package": "polysoup",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:textTag",
      "description": {
        "fct-descr": "\u003cp\u003eA text node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#textTag",
        "fct-type": "function",
        "title": "textTag"
      },
      "index": {
        "description": "text node",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "textTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:warningTag",
      "description": {
        "fct-descr": "\u003cp\u003eA warning node.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.Tag",
        "fct-package": "polysoup",
        "fct-signature": "Q (Tag s) (Tag s)",
        "fct-source": "src/Text-XML-PolySoup-Tag.html#warningTag",
        "fct-type": "function",
        "title": "warningTag"
      },
      "index": {
        "description": "warning node",
        "hierarchy": "Text XML PolySoup Tag",
        "module": "Text.XML.PolySoup.Tag",
        "name": "warningTag",
        "normalized": "",
        "package": "polysoup",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML as a tree of XML tags. \n\u003c/p\u003e\u003cp\u003eThe module provides an \u003ccode\u003e\u003ca\u003eXmlTree\u003c/a\u003e\u003c/code\u003e data type, which can be used to represent\n a parsed XML file.  The \u003ccode\u003e\u003ca\u003eXmlTree\u003c/a\u003e\u003c/code\u003e structure can be generated lazily by using\n the \u003ccode\u003e\u003ca\u003eparseTree\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eparseForest\u003c/a\u003e\u003c/code\u003e) function on any string-like input\n supported by the tagsoup library.\n\u003c/p\u003e\u003cp\u003eNote, that the parsing functions do not validate correctness of the input\n XML data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html",
        "fct-type": "module",
        "title": "XmlTree"
      },
      "index": {
        "description": "XML as tree of XML tags The module provides an XmlTree data type which can be used to represent parsed XML file The XmlTree structure can be generated lazily by using the parseTree or parseForest function on any string-like input supported by the tagsoup library Note that the parsing functions do not validate correctness of the input XML data",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "XmlTree",
        "normalized": "",
        "package": "polysoup",
        "partial": "Xml Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#t:XmlForest",
      "description": {
        "fct-descr": "\u003cp\u003eA parsed XML forest.  Closing tags are not preserved.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#XmlForest",
        "fct-type": "type",
        "title": "XmlForest"
      },
      "index": {
        "description": "parsed XML forest Closing tags are not preserved",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "XmlForest",
        "normalized": "",
        "package": "polysoup",
        "partial": "Xml Forest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#t:XmlTree",
      "description": {
        "fct-descr": "\u003cp\u003eA parsed XML tree.  Closing tags are not preserved.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "type",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#XmlTree",
        "fct-type": "type",
        "title": "XmlTree"
      },
      "index": {
        "description": "parsed XML tree Closing tags are not preserved",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "XmlTree",
        "normalized": "",
        "package": "polysoup",
        "partial": "Xml Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:parseForest",
      "description": {
        "fct-descr": "\u003cp\u003eParse XML forest from a list of tags.  Note, that if the XML file\n has additional headers, the \u003ccode\u003e\u003ca\u003eparseForest\u003c/a\u003e\u003c/code\u003e function has to be used to\n parse it correctly.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "[Tag s] -\u003e XmlForest s",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#parseForest",
        "fct-type": "function",
        "title": "parseForest"
      },
      "index": {
        "description": "Parse XML forest from list of tags Note that if the XML file has additional headers the parseForest function has to be used to parse it correctly",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "parseForest",
        "normalized": "[Tag a]-\u003eXmlForest a",
        "package": "polysoup",
        "partial": "Forest",
        "signature": "[Tag s]-\u003eXmlForest s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:parseTree",
      "description": {
        "fct-descr": "\u003cp\u003eParse XML tree from a list of tags.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "[Tag s] -\u003e XmlTree s",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#parseTree",
        "fct-type": "function",
        "title": "parseTree"
      },
      "index": {
        "description": "Parse XML tree from list of tags",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "parseTree",
        "normalized": "[Tag a]-\u003eXmlTree a",
        "package": "polysoup",
        "partial": "Tree",
        "signature": "[Tag s]-\u003eXmlTree s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:renderForest",
      "description": {
        "fct-descr": "\u003cp\u003eRender XML forest tags.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "XmlForest s -\u003e [Tag s]",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#renderForest",
        "fct-type": "function",
        "title": "renderForest"
      },
      "index": {
        "description": "Render XML forest tags",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "renderForest",
        "normalized": "XmlForest a-\u003e[Tag a]",
        "package": "polysoup",
        "partial": "Forest",
        "signature": "XmlForest s-\u003e[Tag s]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:renderTree",
      "description": {
        "fct-descr": "\u003cp\u003eRender XML tree tags.\n\u003c/p\u003e",
        "fct-module": "Text.XML.PolySoup.XmlTree",
        "fct-package": "polysoup",
        "fct-signature": "XmlTree s -\u003e [Tag s]",
        "fct-source": "src/Text-XML-PolySoup-XmlTree.html#renderTree",
        "fct-type": "function",
        "title": "renderTree"
      },
      "index": {
        "description": "Render XML tree tags",
        "hierarchy": "Text XML PolySoup XmlTree",
        "module": "Text.XML.PolySoup.XmlTree",
        "name": "renderTree",
        "normalized": "XmlTree a-\u003e[Tag a]",
        "package": "polysoup",
        "partial": "Tree",
        "signature": "XmlTree s-\u003e[Tag s]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module re-exports individual submodules of the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.PolySoup",
        "fct-package": "polysoup",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-PolySoup.html",
        "fct-type": "module",
        "title": "PolySoup"
      },
      "index": {
        "description": "The module re-exports individual submodules of the library",
        "hierarchy": "Text XML PolySoup",
        "module": "Text.XML.PolySoup",
        "name": "PolySoup",
        "normalized": "",
        "package": "polysoup",
        "partial": "Poly Soup",
        "signature": ""
      }
    }
  }
]