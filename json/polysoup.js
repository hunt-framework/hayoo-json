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
        "word": "polysoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides some common XML tree parsing combinators.\n There are two main groups of combinators: XPath-like combinators\n and tag/forest combinators.  Use combinators from the first group\n if possible, since they are generally easier too use and generate\n results in a lazy manner.\n\u003c/p\u003e\u003cp\u003eThe second class contains more powerful combinators which can be used\n to parse the contents of an XML node in a generic way.  Note, that\n combinators from the two groups can be interleaved -- you can use\n a forest parser to construct a tree predicate, but you can also use\n a tree predicate as an elementary forest parser (see the\n \u003ca\u003eText.XML.PolySoup.Parser\u003c/a\u003e module).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "Combine",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Combine.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides some common XML tree parsing combinators There are two main groups of combinators XPath-like combinators and tag forest combinators Use combinators from the first group if possible since they are generally easier too use and generate results in lazy manner The second class contains more powerful combinators which can be used to parse the contents of an XML node in generic way Note that combinators from the two groups can be interleaved you can use forest parser to construct tree predicate but you can also use tree predicate as an elementary forest parser see the Text.XML.PolySoup.Parser module",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "Combine",
          "package": "polysoup",
          "partial": "Combine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003e/\u003e\u003c/a\u003e\u003c/code\u003e combinator but runs the XML parser for all\n descendant XML elements, not only for its children.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(//\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) [b]",
          "source": "src/Text-XML-PolySoup-Combine.html#%2F%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Similar to combinator but runs the XML parser for all descendant XML elements not only for its children",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(//\u003e) //\u003e",
          "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)[c]",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-47--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag parser with the XML parser.  The XML parser will\n be called multiple times for tag children elements.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(/\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) [b]",
          "source": "src/Text-XML-PolySoup-Combine.html#%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag parser with the XML parser The XML parser will be called multiple times for tag children elements",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(/\u003e) /\u003e",
          "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)[c]",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag parser with the XML parser.  The XML parser will\n be called multiple times for tag children elements.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c/\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e Q (XmlTree s) b -\u003e Q (XmlTree s) (a, [b])",
          "source": "src/Text-XML-PolySoup-Combine.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag parser with the XML parser The XML parser will be called multiple times for tag children elements",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)c-\u003eQ(XmlTree a)(b,[c])",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eQ(XmlTree s)b-\u003eQ(XmlTree s)(a,[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of the joinL combinators.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c^)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) a",
          "source": "src/Text-XML-PolySoup-Combine.html#%3C%5E",
          "type": "function"
        },
        "index": {
          "description": "Infix version of the joinL combinators",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c^) \u003c^",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)b",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of the joinP combinators.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c^\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) (a, b)",
          "source": "src/Text-XML-PolySoup-Combine.html#%3C%5E%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix version of the joinP combinators",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003c^\u003e) \u003c^\u003e",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)(b,c)",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-60--94--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine a tag predicate with an XML predicate.  The XML predicate can\n depend on the value of tag parser and will be called multiple times for\n tag children elements.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003e/\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e (a -\u003e Q (XmlTree s) b) -\u003e Q (XmlTree s) [b]",
          "source": "src/Text-XML-PolySoup-Combine.html#%3E%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "Combine tag predicate with an XML predicate The XML predicate can depend on the value of tag parser and will be called multiple times for tag children elements",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003e/\u003e) \u003e/\u003e",
          "normalized": "Q(Tag a)b-\u003e(b-\u003eQ(XmlTree a)c)-\u003eQ(XmlTree a)[c]",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003e(a-\u003eQ(XmlTree s)b)-\u003eQ(XmlTree s)[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-62--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of the join combinators.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003e^\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e (a -\u003e P (XmlTree s) b) -\u003e Q (XmlTree s) b",
          "source": "src/Text-XML-PolySoup-Combine.html#%3E%5E%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix version of the join combinators",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(\u003e^\u003e) \u003e^\u003e",
          "normalized": "Q(Tag a)b-\u003e(b-\u003eP(XmlTree a)c)-\u003eQ(XmlTree a)c",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003e(a-\u003eP(XmlTree s)b)-\u003eQ(XmlTree s)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-62--94--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix version of the joinR combinators.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(^\u003e)",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) b",
          "source": "src/Text-XML-PolySoup-Combine.html#%5E%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix version of the joinR combinators",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "(^\u003e) ^\u003e",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)c",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:-94--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag predicate with the forest parser which will be used\n to parse contents of the tag element.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "join",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e (a -\u003e P (XmlTree s) b) -\u003e Q (XmlTree s) b",
          "source": "src/Text-XML-PolySoup-Combine.html#join",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag predicate with the forest parser which will be used to parse contents of the tag element",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "join",
          "normalized": "Q(Tag a)b-\u003e(b-\u003eP(XmlTree a)c)-\u003eQ(XmlTree a)c",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003e(a-\u003eP(XmlTree s)b)-\u003eQ(XmlTree s)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag predicate with the orest parser which will be used\n to parse contents of the tag element.  Only results of the tag predicate\n will be returned (the contents have to be successfully parsed, though).\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinL",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) a",
          "source": "src/Text-XML-PolySoup-Combine.html#joinL",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag predicate with the orest parser which will be used to parse contents of the tag element Only results of the tag predicate will be returned the contents have to be successfully parsed though",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinL",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)b",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag predicate with the forest parser which will be used\n to parse contents of the tag element.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinP",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) (a, b)",
          "source": "src/Text-XML-PolySoup-Combine.html#joinP",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag predicate with the forest parser which will be used to parse contents of the tag element",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinP",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)(b,c)",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the tag predicate with the orest parser which will be used\n to parse contents of the tag element.  Only results of the forest parser\n will be returned.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinR",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e P (XmlTree s) b -\u003e Q (XmlTree s) b",
          "source": "src/Text-XML-PolySoup-Combine.html#joinR",
          "type": "function"
        },
        "index": {
          "description": "Combine the tag predicate with the orest parser which will be used to parse contents of the tag element Only results of the forest parser will be returned",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "joinR",
          "normalized": "Q(Tag a)b-\u003eP(XmlTree a)c-\u003eQ(XmlTree a)c",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eP(XmlTree s)b-\u003eQ(XmlTree s)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:joinR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tree-level predicate from a tag-level predicate.\n Note, that in most cases you won't need this function, you\n can make use of the \u003ccode\u003eQuery\u003c/code\u003e typeclass.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Combine",
          "name": "node",
          "package": "polysoup",
          "signature": "Q (Tag s) a -\u003e Q (XmlTree s) a",
          "source": "src/Text-XML-PolySoup-Combine.html#node",
          "type": "function"
        },
        "index": {
          "description": "Make tree-level predicate from tag-level predicate Note that in most cases you won need this function you can make use of the Query typeclass",
          "hierarchy": "Text XML PolySoup Combine",
          "module": "Text.XML.PolySoup.Combine",
          "name": "node",
          "normalized": "Q(Tag a)b-\u003eQ(XmlTree a)b",
          "package": "polysoup",
          "signature": "Q(Tag s)a-\u003eQ(XmlTree s)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Combine.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module defines a generic parser which can be used, in particular,\n to parse XML forests.  The main characteristic of the parser is that it\n can be used in a sequential (sub-trees are processed in order) and a\n selective (subtrees are process regardless of their position) way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "Parser",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "The module defines generic parser which can be used in particular to parse XML forests The main characteristic of the parser is that it can be used in sequential sub-trees are processed in order and selective subtrees are process regardless of their position way",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "Parser",
          "package": "polysoup",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML forest parser.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "P",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Parser.html#P",
          "type": "newtype"
        },
        "index": {
          "description": "An XML forest parser",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "P",
          "package": "polysoup",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.PolySoup.Parser",
          "name": "P",
          "package": "polysoup",
          "signature": "P",
          "source": "src/Text-XML-PolySoup-Parser.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "P",
          "package": "polysoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate parser on the given XML forest.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "evalP",
          "package": "polysoup",
          "signature": "P a b -\u003e [a] -\u003e Maybe b",
          "source": "src/Text-XML-PolySoup-Parser.html#evalP",
          "type": "function"
        },
        "index": {
          "description": "Evaluate parser on the given XML forest",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "evalP",
          "normalized": "P a b-\u003e[a]-\u003eMaybe b",
          "package": "polysoup",
          "signature": "P a b-\u003e[a]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:evalP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect every tree satisfying the given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "every",
          "package": "polysoup",
          "signature": "Q a b -\u003e P a [b]",
          "source": "src/Text-XML-PolySoup-Parser.html#every",
          "type": "function"
        },
        "index": {
          "description": "Select every tree satisfying the given predicate",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "every",
          "normalized": "Q a b-\u003eP a[b]",
          "package": "polysoup",
          "signature": "Q a b-\u003eP a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym to \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "find",
          "package": "polysoup",
          "signature": "Q a b -\u003e P a b",
          "source": "src/Text-XML-PolySoup-Parser.html#find",
          "type": "function"
        },
        "index": {
          "description": "synonym to first",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "find",
          "normalized": "Q a b-\u003eP a b",
          "package": "polysoup",
          "signature": "Q a b-\u003eP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first tree satisfying the given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "first",
          "package": "polysoup",
          "signature": "Q a b -\u003e P a b",
          "source": "src/Text-XML-PolySoup-Parser.html#first",
          "type": "function"
        },
        "index": {
          "description": "Find the first tree satisfying the given predicate",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "first",
          "normalized": "Q a b-\u003eP a b",
          "package": "polysoup",
          "signature": "Q a b-\u003eP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck, if the first tree satisfies the given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Parser",
          "name": "pop",
          "package": "polysoup",
          "signature": "Q a b -\u003e P a b",
          "source": "src/Text-XML-PolySoup-Parser.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Check if the first tree satisfies the given predicate",
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "pop",
          "normalized": "Q a b-\u003eP a b",
          "package": "polysoup",
          "signature": "Q a b-\u003eP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.PolySoup.Parser",
          "name": "runP",
          "package": "polysoup",
          "signature": "[a] -\u003e Maybe (b, [a])",
          "source": "src/Text-XML-PolySoup-Parser.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML PolySoup Parser",
          "module": "Text.XML.PolySoup.Parser",
          "name": "runP",
          "normalized": "[a]-\u003eMaybe(b,[a])",
          "package": "polysoup",
          "signature": "[a]-\u003eMaybe(b,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Parser.html#v:runP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic extracting predicate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Predicate",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Predicate.html",
          "type": "module"
        },
        "index": {
          "description": "generic extracting predicate",
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Predicate",
          "package": "polysoup",
          "partial": "Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate checks if the given element satisfies some properties\n and extracts its attribute values.  You can compose predicates using\n Functor, Applicative and Alternative operators: \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e etc.\n Note, that it doesn't really have sense to use function like \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003esome\u003c/a\u003e\u003c/code\u003e, since the extracting predicate doesn't consume any input.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Q",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Predicate.html#Q",
          "type": "newtype"
        },
        "index": {
          "description": "predicate checks if the given element satisfies some properties and extracts its attribute values You can compose predicates using Functor Applicative and Alternative operators etc Note that it doesn really have sense to use function like many or some since the extracting predicate doesn consume any input",
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Q",
          "package": "polysoup",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#t:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Q",
          "package": "polysoup",
          "signature": "Q",
          "source": "src/Text-XML-PolySoup-Predicate.html#Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "Q",
          "package": "polysoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.PolySoup.Predicate",
          "name": "runQ",
          "package": "polysoup",
          "signature": "a -\u003e Maybe b",
          "source": "src/Text-XML-PolySoup-Predicate.html#Q",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "runQ",
          "normalized": "a-\u003eMaybe b",
          "package": "polysoup",
          "signature": "a-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:runQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the given predicate is satisfied.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "satisfy",
          "package": "polysoup",
          "signature": "(a -\u003e Bool) -\u003e Q a a",
          "source": "src/Text-XML-PolySoup-Predicate.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Check if the given predicate is satisfied",
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eQ a a",
          "package": "polysoup",
          "signature": "(a-\u003eBool)-\u003eQ a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which is always satisfied.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "true",
          "package": "polysoup",
          "signature": "Q a a",
          "source": "src/Text-XML-PolySoup-Predicate.html#true",
          "type": "function"
        },
        "index": {
          "description": "Predicate which is always satisfied",
          "hierarchy": "Text XML PolySoup Predicate",
          "module": "Text.XML.PolySoup.Predicate",
          "name": "true",
          "package": "polysoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Predicate.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides tag-level predicates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "Tag",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-Tag.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides tag-level predicates",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "Tag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the attribute value.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "attr",
          "package": "polysoup",
          "signature": "s -\u003e Q (Tag s) s",
          "source": "src/Text-XML-PolySoup-Tag.html#attr",
          "type": "function"
        },
        "index": {
          "description": "Extract the attribute value",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "attr",
          "normalized": "a-\u003eQ(Tag a)a",
          "package": "polysoup",
          "signature": "s-\u003eQ(Tag s)s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the attribute value.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "atts",
          "package": "polysoup",
          "signature": "Q (Tag s) [(s, s)]",
          "source": "src/Text-XML-PolySoup-Tag.html#atts",
          "type": "function"
        },
        "index": {
          "description": "Extract the attribute value",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "atts",
          "normalized": "Q(Tag a)[(a,a)]",
          "package": "polysoup",
          "signature": "Q(Tag s)[(s,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:atts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment node.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "commentTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#commentTag",
          "type": "function"
        },
        "index": {
          "description": "comment node",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "commentTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:commentTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet value of the attribute.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getAttr",
          "package": "polysoup",
          "signature": "s -\u003e Tag s -\u003e Maybe s",
          "source": "src/Text-XML-PolySoup-Tag.html#getAttr",
          "type": "function"
        },
        "index": {
          "description": "Get value of the attribute",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getAttr",
          "normalized": "a-\u003eTag a-\u003eMaybe a",
          "package": "polysoup",
          "partial": "Attr",
          "signature": "s-\u003eTag s-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet name of the tag.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getAtts",
          "package": "polysoup",
          "signature": "Tag s -\u003e Maybe [(s, s)]",
          "source": "src/Text-XML-PolySoup-Tag.html#getAtts",
          "type": "function"
        },
        "index": {
          "description": "Get name of the tag",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getAtts",
          "normalized": "Tag a-\u003eMaybe[(a,a)]",
          "package": "polysoup",
          "partial": "Atts",
          "signature": "Tag s-\u003eMaybe[(s,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getAtts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet name of the tag.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getName",
          "package": "polysoup",
          "signature": "Tag s -\u003e Maybe s",
          "source": "src/Text-XML-PolySoup-Tag.html#getName",
          "type": "function"
        },
        "index": {
          "description": "Get name of the tag",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getName",
          "normalized": "Tag a-\u003eMaybe a",
          "package": "polysoup",
          "partial": "Name",
          "signature": "Tag s-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet contents of the text node.\n A synonym for \u003ccode\u003e\u003ca\u003emaybeTagText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getText",
          "package": "polysoup",
          "signature": "Tag s -\u003e Maybe s",
          "source": "src/Text-XML-PolySoup-Tag.html#getText",
          "type": "function"
        },
        "index": {
          "description": "Get contents of the text node synonym for maybeTagText",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "getText",
          "normalized": "Tag a-\u003eMaybe a",
          "package": "polysoup",
          "partial": "Text",
          "signature": "Tag s-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:getText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes it have a given attribute?\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "hasAttr",
          "package": "polysoup",
          "signature": "s -\u003e Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#hasAttr",
          "type": "function"
        },
        "index": {
          "description": "Does it have given attribute",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "hasAttr",
          "normalized": "a-\u003eQ(Tag a)(Tag a)",
          "package": "polysoup",
          "partial": "Attr",
          "signature": "s-\u003eQ(Tag s)(Tag s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:hasAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes it have a given attribute with a given value?\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "hasAttrVal",
          "package": "polysoup",
          "signature": "s -\u003e s -\u003e Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#hasAttrVal",
          "type": "function"
        },
        "index": {
          "description": "Does it have given attribute with given value",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "hasAttrVal",
          "normalized": "a-\u003ea-\u003eQ(Tag a)(Tag a)",
          "package": "polysoup",
          "partial": "Attr Val",
          "signature": "s-\u003es-\u003eQ(Tag s)(Tag s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:hasAttrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal node (i.e., an opening tag).\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "innerTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#innerTag",
          "type": "function"
        },
        "index": {
          "description": "Internal node i.e an opening tag",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "innerTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:innerTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeaf node (everything but an opening tag).\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "leafTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#leafTag",
          "type": "function"
        },
        "index": {
          "description": "Leaf node everything but an opening tag",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "leafTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:leafTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the tag name.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "name",
          "package": "polysoup",
          "signature": "Q (Tag s) s",
          "source": "src/Text-XML-PolySoup-Tag.html#name",
          "type": "function"
        },
        "index": {
          "description": "Extract the tag name",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "name",
          "package": "polysoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes it have a given name?\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "named",
          "package": "polysoup",
          "signature": "s -\u003e Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#named",
          "type": "function"
        },
        "index": {
          "description": "Does it have given name",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "named",
          "normalized": "a-\u003eQ(Tag a)(Tag a)",
          "package": "polysoup",
          "signature": "s-\u003eQ(Tag s)(Tag s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position node.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "positionTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#positionTag",
          "type": "function"
        },
        "index": {
          "description": "position node",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "positionTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:positionTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract textual contents of the text node.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "text",
          "package": "polysoup",
          "signature": "Q (Tag s) s",
          "source": "src/Text-XML-PolySoup-Tag.html#text",
          "type": "function"
        },
        "index": {
          "description": "Extract textual contents of the text node",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "text",
          "package": "polysoup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA text node.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "textTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#textTag",
          "type": "function"
        },
        "index": {
          "description": "text node",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "textTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:textTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA warning node.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.Tag",
          "name": "warningTag",
          "package": "polysoup",
          "signature": "Q (Tag s) (Tag s)",
          "source": "src/Text-XML-PolySoup-Tag.html#warningTag",
          "type": "function"
        },
        "index": {
          "description": "warning node",
          "hierarchy": "Text XML PolySoup Tag",
          "module": "Text.XML.PolySoup.Tag",
          "name": "warningTag",
          "package": "polysoup",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-Tag.html#v:warningTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML as a tree of XML tags. \n\u003c/p\u003e\u003cp\u003eThe module provides an \u003ccode\u003e\u003ca\u003eXmlTree\u003c/a\u003e\u003c/code\u003e data type, which can be used to represent\n a parsed XML file.  The \u003ccode\u003e\u003ca\u003eXmlTree\u003c/a\u003e\u003c/code\u003e structure can be generated lazily by using\n the \u003ccode\u003e\u003ca\u003eparseTree\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eparseForest\u003c/a\u003e\u003c/code\u003e) function on any string-like input\n supported by the tagsoup library.\n\u003c/p\u003e\u003cp\u003eNote, that the parsing functions do not validate correctness of the input\n XML data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlTree",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-XmlTree.html",
          "type": "module"
        },
        "index": {
          "description": "XML as tree of XML tags The module provides an XmlTree data type which can be used to represent parsed XML file The XmlTree structure can be generated lazily by using the parseTree or parseForest function on any string-like input supported by the tagsoup library Note that the parsing functions do not validate correctness of the input XML data",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlTree",
          "package": "polysoup",
          "partial": "Xml Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parsed XML forest.  Closing tags are not preserved.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlForest",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-XmlTree.html#XmlForest",
          "type": "type"
        },
        "index": {
          "description": "parsed XML forest Closing tags are not preserved",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlForest",
          "package": "polysoup",
          "partial": "Xml Forest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#t:XmlForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parsed XML tree.  Closing tags are not preserved.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlTree",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup-XmlTree.html#XmlTree",
          "type": "type"
        },
        "index": {
          "description": "parsed XML tree Closing tags are not preserved",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "XmlTree",
          "package": "polysoup",
          "partial": "Xml Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#t:XmlTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse XML forest from a list of tags.  Note, that if the XML file\n has additional headers, the \u003ccode\u003e\u003ca\u003eparseForest\u003c/a\u003e\u003c/code\u003e function has to be used to\n parse it correctly.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "parseForest",
          "package": "polysoup",
          "signature": "[Tag s] -\u003e XmlForest s",
          "source": "src/Text-XML-PolySoup-XmlTree.html#parseForest",
          "type": "function"
        },
        "index": {
          "description": "Parse XML forest from list of tags Note that if the XML file has additional headers the parseForest function has to be used to parse it correctly",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "parseForest",
          "normalized": "[Tag a]-\u003eXmlForest a",
          "package": "polysoup",
          "partial": "Forest",
          "signature": "[Tag s]-\u003eXmlForest s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:parseForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse XML tree from a list of tags.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "parseTree",
          "package": "polysoup",
          "signature": "[Tag s] -\u003e XmlTree s",
          "source": "src/Text-XML-PolySoup-XmlTree.html#parseTree",
          "type": "function"
        },
        "index": {
          "description": "Parse XML tree from list of tags",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "parseTree",
          "normalized": "[Tag a]-\u003eXmlTree a",
          "package": "polysoup",
          "partial": "Tree",
          "signature": "[Tag s]-\u003eXmlTree s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:parseTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender XML forest tags.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "renderForest",
          "package": "polysoup",
          "signature": "XmlForest s -\u003e [Tag s]",
          "source": "src/Text-XML-PolySoup-XmlTree.html#renderForest",
          "type": "function"
        },
        "index": {
          "description": "Render XML forest tags",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "renderForest",
          "normalized": "XmlForest a-\u003e[Tag a]",
          "package": "polysoup",
          "partial": "Forest",
          "signature": "XmlForest s-\u003e[Tag s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:renderForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender XML tree tags.\n\u003c/p\u003e",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "renderTree",
          "package": "polysoup",
          "signature": "XmlTree s -\u003e [Tag s]",
          "source": "src/Text-XML-PolySoup-XmlTree.html#renderTree",
          "type": "function"
        },
        "index": {
          "description": "Render XML tree tags",
          "hierarchy": "Text XML PolySoup XmlTree",
          "module": "Text.XML.PolySoup.XmlTree",
          "name": "renderTree",
          "normalized": "XmlTree a-\u003e[Tag a]",
          "package": "polysoup",
          "partial": "Tree",
          "signature": "XmlTree s-\u003e[Tag s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup-XmlTree.html#v:renderTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module re-exports individual submodules of the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.PolySoup",
          "name": "PolySoup",
          "package": "polysoup",
          "source": "src/Text-XML-PolySoup.html",
          "type": "module"
        },
        "index": {
          "description": "The module re-exports individual submodules of the library",
          "hierarchy": "Text XML PolySoup",
          "module": "Text.XML.PolySoup",
          "name": "PolySoup",
          "package": "polysoup",
          "partial": "Poly Soup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/polysoup/docs/Text-XML-PolySoup.html#"
      }
    }
  ]
]