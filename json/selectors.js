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
        "word": "selectors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.TH",
          "name": "TH",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "XML Selectors CSS TH",
          "module": "XML.Selectors.CSS.TH",
          "name": "TH",
          "package": "selectors",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e [css| #interface div.doc:first-child |] \u003c/code\u003e would select this paragraph.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.TH",
          "name": "css",
          "package": "selectors",
          "signature": "QuasiQuoter",
          "source": "src/XML-Selectors-CSS-TH.html#css",
          "type": "function"
        },
        "index": {
          "description": "css interface div.doc first-child would select this paragraph",
          "hierarchy": "XML Selectors CSS TH",
          "module": "XML.Selectors.CSS.TH",
          "name": "css",
          "package": "selectors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-TH.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es in the CSS selector grammar as well as the data types\n representing the parse result.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Types",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions of Token in the CSS selector grammar as well as the data types representing the parse result",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Types",
          "package": "selectors",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing the relationship between two \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Comb",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Comb",
          "type": "data"
        },
        "index": {
          "description": "Type representing the relationship between two Selector",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Comb",
          "package": "selectors",
          "partial": "Comb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Comb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing boolean operations on attribute values.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pred",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Pred",
          "type": "data"
        },
        "index": {
          "description": "Type representing boolean operations on attribute values",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pred",
          "package": "selectors",
          "partial": "Pred",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "PredOp",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "PredOp",
          "package": "selectors",
          "partial": "Pred Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:PredOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly supporting two pseudoelement selectors.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pseudo",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Pseudo",
          "type": "data"
        },
        "index": {
          "description": "Only supporting two pseudoelement selectors",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pseudo",
          "package": "selectors",
          "partial": "Pseudo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Pseudo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop level entity representing the parse tree of a CSS path expression.\n Composed of one or more \u003ccode\u003e\u003ca\u003eSimpleSelector\u003c/a\u003e\u003c/code\u003es combined with a \u003ccode\u003e\u003ca\u003eComb\u003c/a\u003e\u003c/code\u003e relation.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Selector",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Selector",
          "type": "data"
        },
        "index": {
          "description": "Top level entity representing the parse tree of CSS path expression Composed of one or more SimpleSelector combined with Comb relation",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Selector",
          "package": "selectors",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing a single set of filters for selecting nodes.\n Contain an optional single element name, a sequence of id, class, and attribute\n \u003ccode\u003e\u003ca\u003eSpecifier\u003c/a\u003e\u003c/code\u003es, and an optional pseudo-element selector.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "SimpleSelector",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#SimpleSelector",
          "type": "data"
        },
        "index": {
          "description": "Type representing single set of filters for selecting nodes Contain an optional single element name sequence of id class and attribute Specifier and an optional pseudo-element selector",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "SimpleSelector",
          "package": "selectors",
          "partial": "Simple Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:SimpleSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing id, class, and attribute filters.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Specifier",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Specifier",
          "type": "data"
        },
        "index": {
          "description": "Type representing id class and attribute filters",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Specifier",
          "package": "selectors",
          "partial": "Specifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Specifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "Token",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Token",
          "package": "selectors",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny following sibling node; represented by \u003ccode\u003e ~ \u003c/code\u003e in CSS\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "AnySibling",
          "package": "selectors",
          "signature": "AnySibling",
          "source": "src/XML-Selectors-CSS-Types.html#Comb",
          "type": "function"
        },
        "index": {
          "description": "Any following sibling node represented by in CSS",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "AnySibling",
          "package": "selectors",
          "partial": "Any Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:AnySibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "Attrib",
          "package": "selectors",
          "signature": "Attrib String Pred",
          "source": "src/XML-Selectors-CSS-Types.html#Specifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Attrib",
          "package": "selectors",
          "partial": "Attrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Attrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString begins with; \u003ccode\u003e ^= \u003c/code\u003e\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "BeginsWith",
          "package": "selectors",
          "signature": "BeginsWith",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "function"
        },
        "index": {
          "description": "String begins with",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "BeginsWith",
          "package": "selectors",
          "partial": "Begins With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:BeginsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny direct child; represented by \u003ccode\u003e \u003e \u003c/code\u003e in CSS\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Child",
          "package": "selectors",
          "signature": "Child",
          "source": "src/XML-Selectors-CSS-Types.html#Comb",
          "type": "function"
        },
        "index": {
          "description": "Any direct child represented by in CSS",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Child",
          "package": "selectors",
          "partial": "Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "Class",
          "package": "selectors",
          "signature": "Class String",
          "source": "src/XML-Selectors-CSS-Types.html#Specifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Class",
          "package": "selectors",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "Combinator",
          "package": "selectors",
          "signature": "Combinator SimpleSelector Comb Selector",
          "source": "src/XML-Selectors-CSS-Types.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Combinator",
          "package": "selectors",
          "partial": "Combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Combinator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString equality, optional dash following; \u003ccode\u003e |= \u003c/code\u003e\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "DashMatch",
          "package": "selectors",
          "signature": "DashMatch",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "function"
        },
        "index": {
          "description": "String equality optional dash following",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "DashMatch",
          "package": "selectors",
          "partial": "Dash Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:DashMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny descendant; represented by plain whitespace in CSS\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Descendant",
          "package": "selectors",
          "signature": "Descendant",
          "source": "src/XML-Selectors-CSS-Types.html#Comb",
          "type": "function"
        },
        "index": {
          "description": "Any descendant represented by plain whitespace in CSS",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Descendant",
          "package": "selectors",
          "partial": "Descendant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString ends with; \u003ccode\u003e $= \u003c/code\u003e\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "EndsWith",
          "package": "selectors",
          "signature": "EndsWith",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "function"
        },
        "index": {
          "description": "String ends with",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "EndsWith",
          "package": "selectors",
          "partial": "Ends With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:EndsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString equality\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Equals",
          "package": "selectors",
          "signature": "Equals",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "function"
        },
        "index": {
          "description": "String equality",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Equals",
          "package": "selectors",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "FirstChild",
          "package": "selectors",
          "signature": "FirstChild",
          "source": "src/XML-Selectors-CSS-Types.html#Pseudo",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "FirstChild",
          "package": "selectors",
          "partial": "First Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:FirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectly following sibling node; represented by \u003ccode\u003e + \u003c/code\u003e in CSS\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "FollowingSibling",
          "package": "selectors",
          "signature": "FollowingSibling",
          "source": "src/XML-Selectors-CSS-Types.html#Comb",
          "type": "function"
        },
        "index": {
          "description": "Directly following sibling node represented by in CSS",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "FollowingSibling",
          "package": "selectors",
          "partial": "Following Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:FollowingSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "ID",
          "package": "selectors",
          "signature": "ID String",
          "source": "src/XML-Selectors-CSS-Types.html#Specifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "ID",
          "package": "selectors",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains word; \u003ccode\u003e ~= \u003c/code\u003e\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Includes",
          "package": "selectors",
          "signature": "Includes",
          "source": "src/XML-Selectors-CSS-Types.html#PredOp",
          "type": "function"
        },
        "index": {
          "description": "Contains word",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Includes",
          "package": "selectors",
          "partial": "Includes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Includes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "LastChild",
          "package": "selectors",
          "signature": "LastChild",
          "source": "src/XML-Selectors-CSS-Types.html#Pseudo",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "LastChild",
          "package": "selectors",
          "partial": "Last Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:LastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple existence test\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "None",
          "package": "selectors",
          "signature": "None",
          "source": "src/XML-Selectors-CSS-Types.html#Pred",
          "type": "function"
        },
        "index": {
          "description": "Simple existence test",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "None",
          "package": "selectors",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString comparison test\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pred",
          "package": "selectors",
          "signature": "Pred PredOp String",
          "source": "src/XML-Selectors-CSS-Types.html#Pred",
          "type": "function"
        },
        "index": {
          "description": "String comparison test",
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Pred",
          "package": "selectors",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "Selector",
          "package": "selectors",
          "signature": "Selector SimpleSelector",
          "source": "src/XML-Selectors-CSS-Types.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "Selector",
          "package": "selectors",
          "partial": "Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "SimpleSelector",
          "package": "selectors",
          "signature": "SimpleSelector (Maybe String) [Specifier] (Maybe Pseudo)",
          "source": "src/XML-Selectors-CSS-Types.html#SimpleSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "SimpleSelector",
          "normalized": "SimpleSelector(Maybe String)[Specifier](Maybe Pseudo)",
          "package": "selectors",
          "partial": "Simple Selector",
          "signature": "SimpleSelector(Maybe String)[Specifier](Maybe Pseudo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:SimpleSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenAnySibling",
          "package": "selectors",
          "signature": "TokenAnySibling",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenAnySibling",
          "package": "selectors",
          "partial": "Token Any Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenAnySibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenAster",
          "package": "selectors",
          "signature": "TokenAster",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenAster",
          "package": "selectors",
          "partial": "Token Aster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenAster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenBeginsWith",
          "package": "selectors",
          "signature": "TokenBeginsWith",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenBeginsWith",
          "package": "selectors",
          "partial": "Token Begins With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenBeginsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenCB",
          "package": "selectors",
          "signature": "TokenCB",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenCB",
          "package": "selectors",
          "partial": "Token CB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenCP",
          "package": "selectors",
          "signature": "TokenCP",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenCP",
          "package": "selectors",
          "partial": "Token CP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenChild",
          "package": "selectors",
          "signature": "TokenChild",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenChild",
          "package": "selectors",
          "partial": "Token Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDashMatch",
          "package": "selectors",
          "signature": "TokenDashMatch",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDashMatch",
          "package": "selectors",
          "partial": "Token Dash Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenDashMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDigits",
          "package": "selectors",
          "signature": "TokenDigits String",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDigits",
          "package": "selectors",
          "partial": "Token Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDot",
          "package": "selectors",
          "signature": "TokenDot",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenDot",
          "package": "selectors",
          "partial": "Token Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEOF",
          "package": "selectors",
          "signature": "TokenEOF",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEOF",
          "package": "selectors",
          "partial": "Token EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEndsWith",
          "package": "selectors",
          "signature": "TokenEndsWith",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEndsWith",
          "package": "selectors",
          "partial": "Token Ends With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenEndsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEquals",
          "package": "selectors",
          "signature": "TokenEquals",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenEquals",
          "package": "selectors",
          "partial": "Token Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenFirstChild",
          "package": "selectors",
          "signature": "TokenFirstChild",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenFirstChild",
          "package": "selectors",
          "partial": "Token First Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenFirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenHash",
          "package": "selectors",
          "signature": "TokenHash",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenHash",
          "package": "selectors",
          "partial": "Token Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenIncludes",
          "package": "selectors",
          "signature": "TokenIncludes",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenIncludes",
          "package": "selectors",
          "partial": "Token Includes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenIncludes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenLastChild",
          "package": "selectors",
          "signature": "TokenLastChild",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenLastChild",
          "package": "selectors",
          "partial": "Token Last Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenMinus",
          "package": "selectors",
          "signature": "TokenMinus",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenMinus",
          "package": "selectors",
          "partial": "Token Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenName",
          "package": "selectors",
          "signature": "TokenName String",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenName",
          "package": "selectors",
          "partial": "Token Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenNthChild",
          "package": "selectors",
          "signature": "TokenNthChild",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenNthChild",
          "package": "selectors",
          "partial": "Token Nth Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenNthChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenNthLastChild",
          "package": "selectors",
          "signature": "TokenNthLastChild",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenNthLastChild",
          "package": "selectors",
          "partial": "Token Nth Last Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenNthLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenOB",
          "package": "selectors",
          "signature": "TokenOB",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenOB",
          "package": "selectors",
          "partial": "Token OB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenOP",
          "package": "selectors",
          "signature": "TokenOP",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenOP",
          "package": "selectors",
          "partial": "Token OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenPlus",
          "package": "selectors",
          "signature": "TokenPlus",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenPlus",
          "package": "selectors",
          "partial": "Token Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenPseudo",
          "package": "selectors",
          "signature": "TokenPseudo",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenPseudo",
          "package": "selectors",
          "partial": "Token Pseudo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenPseudo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenQuote",
          "package": "selectors",
          "signature": "TokenQuote",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenQuote",
          "package": "selectors",
          "partial": "Token Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenSlash",
          "package": "selectors",
          "signature": "TokenSlash",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenSlash",
          "package": "selectors",
          "partial": "Token Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenSpace",
          "package": "selectors",
          "signature": "TokenSpace",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenSpace",
          "package": "selectors",
          "partial": "Token Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenString",
          "package": "selectors",
          "signature": "TokenString String",
          "source": "src/XML-Selectors-CSS-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS Types",
          "module": "XML.Selectors.CSS.Types",
          "name": "TokenString",
          "package": "selectors",
          "partial": "Token String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS-Types.html#v:TokenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports functions for parsing and executing CSS selector\n expressions in pure Haskell. TH QuasiQuoters are provided in\n \u003ca\u003eXML.Selectors.CSS.TH\u003c/a\u003e for validation and static-checking of CSS selectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XML.Selectors.CSS",
          "name": "CSS",
          "package": "selectors",
          "source": "src/XML-Selectors-CSS.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports functions for parsing and executing CSS selector expressions in pure Haskell TH QuasiQuoters are provided in XML.Selectors.CSS.TH for validation and static-checking of CSS selectors",
          "hierarchy": "XML Selectors CSS",
          "module": "XML.Selectors.CSS",
          "name": "CSS",
          "package": "selectors",
          "partial": "CSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XML.Selectors.CSS",
          "name": "parsePath",
          "package": "selectors",
          "signature": "String -\u003e Either String Selector",
          "source": "src/XML-Selectors-CSS-Parse.html#parsePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "XML Selectors CSS",
          "module": "XML.Selectors.CSS",
          "name": "parsePath",
          "normalized": "String-\u003eEither String Selector",
          "package": "selectors",
          "partial": "Path",
          "signature": "String-\u003eEither String Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS.html#v:parsePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert CSS \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XML.Selectors.CSS",
          "name": "toAxis",
          "package": "selectors",
          "signature": "Selector -\u003e Axis",
          "source": "src/XML-Selectors-CSS.html#toAxis",
          "type": "function"
        },
        "index": {
          "description": "Convert CSS Selector to an Axis",
          "hierarchy": "XML Selectors CSS",
          "module": "XML.Selectors.CSS",
          "name": "toAxis",
          "normalized": "Selector-\u003eAxis",
          "package": "selectors",
          "partial": "Axis",
          "signature": "Selector-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/selectors/docs/XML-Selectors-CSS.html#v:toAxis"
      }
    }
  ]
]