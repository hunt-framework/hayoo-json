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
        "word": "hexpat-lens"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Hexpat lens module for generic tags.\n\u003c/p\u003e\u003cp\u003eLenses provide power to do very concise XML tree diving. This\n module provides a less general interface to the Hexpat datatypes\n via lenses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "Generic",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Hexpat lens module for generic tags Lenses provide power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "Generic",
          "package": "hexpat-lens",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlue two \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003es together as relations. This is much like\n \u003ccode\u003eXPath\u003c/code\u003e's *slash*.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "(./)",
          "package": "hexpat-lens",
          "signature": "Traversal' s i -\u003e Traversal' i a -\u003e Traversal' s a",
          "source": "src/Text-XML-Expat-Lens-Generic.html#.%2F",
          "type": "function"
        },
        "index": {
          "description": "Glue two Traversal together as relations This is much like XPath slash",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "(./) ./",
          "normalized": "Traversal' a b-\u003eTraversal' b c-\u003eTraversal' a c",
          "package": "hexpat-lens",
          "signature": "Traversal' s i-\u003eTraversal' i a-\u003eTraversal' s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a list of all \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003es in a XML tree. Synonym for\n \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "allNodes",
          "package": "hexpat-lens",
          "signature": "NodeG c tag text -\u003e [NodeG c tag text]",
          "source": "src/Text-XML-Expat-Lens-Generic.html#allNodes",
          "type": "function"
        },
        "index": {
          "description": "Produces list of all UNode in XML tree Synonym for universe",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "allNodes",
          "normalized": "NodeG a b c-\u003e[NodeG a b c]",
          "package": "hexpat-lens",
          "partial": "Nodes",
          "signature": "NodeG c tag text-\u003e[NodeG c tag text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:allNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses to the list of attributes of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "attributes",
          "package": "hexpat-lens",
          "signature": "Traversal' (NodeG f tag text) (Attributes tag text)",
          "source": "src/Text-XML-Expat-Lens-Generic.html#attributes",
          "type": "function"
        },
        "index": {
          "description": "Traverses to the list of attributes of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "attributes",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses the children of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "children",
          "package": "hexpat-lens",
          "signature": "Traversal' (NodeG f tag text) (f (NodeG f tag text))",
          "source": "src/Text-XML-Expat-Lens-Generic.html#children",
          "type": "function"
        },
        "index": {
          "description": "Traverses the children of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "children",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses the name of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "name",
          "package": "hexpat-lens",
          "signature": "Traversal' (NodeG f tag text) tag",
          "source": "src/Text-XML-Expat-Lens-Generic.html#name",
          "type": "function"
        },
        "index": {
          "description": "Traverses the name of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "name",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es which have a particular name.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "named",
          "package": "hexpat-lens",
          "signature": "tag -\u003e Overloaded' p f (NodeG c tag text) (NodeG c tag text)",
          "source": "src/Text-XML-Expat-Lens-Generic.html#named",
          "type": "function"
        },
        "index": {
          "description": "Traverses Element which have particular name",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "named",
          "normalized": "a-\u003eOverloaded' b c(NodeG d a e)(NodeG d a e)",
          "package": "hexpat-lens",
          "signature": "tag-\u003eOverloaded' p f(NodeG c tag text)(NodeG c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparameterized k v\u003c/code\u003e traverses \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es which match the value\n \u003ccode\u003ev\u003c/code\u003e at the key \u003ccode\u003ek\u003c/code\u003e in their attributes.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "parameterized",
          "package": "hexpat-lens",
          "signature": "tag -\u003e text -\u003e Overloaded' p f (NodeG c tag text) (NodeG c tag text)",
          "source": "src/Text-XML-Expat-Lens-Generic.html#parameterized",
          "type": "function"
        },
        "index": {
          "description": "parameterized traverses Element which match the value at the key in their attributes",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "parameterized",
          "normalized": "a-\u003eb-\u003eOverloaded' c d(NodeG e a b)(NodeG e a b)",
          "package": "hexpat-lens",
          "signature": "tag-\u003etext-\u003eOverloaded' p f(NodeG c tag text)(NodeG c tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:parameterized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrismatic access to the text of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e node. This is more\n powerful than \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eattributes\u003c/a\u003e\u003c/code\u003e since it can\n be \u003ccode\u003e\u003ca\u003eReview\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "text",
          "package": "hexpat-lens",
          "signature": "Prism' (NodeG f tag text) text",
          "source": "src/Text-XML-Expat-Lens-Generic.html#text",
          "type": "function"
        },
        "index": {
          "description": "Prismatic access to the text of Text node This is more powerful than name children and attributes since it can be Review ed",
          "hierarchy": "Text XML Expat Lens Generic",
          "module": "Text.XML.Expat.Lens.Generic",
          "name": "text",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsos on \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eNName\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eLenses will provide the power to do very concise XML tree\n diving. This module provides a less general interface to the Hexpat\n datatypes via lenses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "Names",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens-Names.html",
          "type": "module"
        },
        "index": {
          "description": "Isos on QName and NName Lenses will provide the power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "Names",
          "package": "hexpat-lens",
          "partial": "Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Names",
          "name": "HasLocalPart",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens-Names.html#HasLocalPart",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "HasLocalPart",
          "package": "hexpat-lens",
          "partial": "Has Local Part",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#t:HasLocalPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Names",
          "name": "localPart",
          "package": "hexpat-lens",
          "signature": "Lens' (a t) t",
          "source": "src/Text-XML-Expat-Lens-Names.html#localPart",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "localPart",
          "package": "hexpat-lens",
          "partial": "Part",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:localPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Names",
          "name": "namespace",
          "package": "hexpat-lens",
          "signature": "Lens' (NName text) (Maybe text)",
          "source": "src/Text-XML-Expat-Lens-Names.html#namespace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "namespace",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:namespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e between a node marked by a qualified \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e name to one\n using a namespaced \u003ccode\u003e\u003ca\u003eNName\u003c/a\u003e\u003c/code\u003e. Normally this throws an exception if\n the namespace is non-standard, but here the \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e simply fails if\n incompatible.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "namespaced",
          "package": "hexpat-lens",
          "signature": "Prism' (n c (QName text) text) (n c (NName text) text)",
          "source": "src/Text-XML-Expat-Lens-Names.html#namespaced",
          "type": "function"
        },
        "index": {
          "description": "Prism between node marked by qualified QName name to one using namespaced NName Normally this throws an exception if the namespace is non-standard but here the Prism simply fails if incompatible",
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "namespaced",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:namespaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Names",
          "name": "prefix",
          "package": "hexpat-lens",
          "signature": "Lens' (QName text) (Maybe text)",
          "source": "src/Text-XML-Expat-Lens-Names.html#prefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "prefix",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIso between a node marked by a \u003ca\u003estringy\u003c/a\u003e name to one using a\n qualified \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "qualified",
          "package": "hexpat-lens",
          "signature": "Iso' (n c text text) (n c (QName text) text)",
          "source": "src/Text-XML-Expat-Lens-Names.html#qualified",
          "type": "function"
        },
        "index": {
          "description": "Iso between node marked by stringy name to one using qualified QName",
          "hierarchy": "Text XML Expat Lens Names",
          "module": "Text.XML.Expat.Lens.Names",
          "name": "qualified",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:qualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML parsing \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003es from Hexpat. HTML parsing \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003es from TagSoup.\n\u003c/p\u003e\u003cp\u003eWhile \u003ccode\u003eHexpat\u003c/code\u003e offers lazy, incremental parsing and this can\n improve performance, we must force the parse to completion in order\n to provide a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e, so the lazy parsing is not offered here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "Parse",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "XML parsing Prism from Hexpat HTML parsing Iso from TagSoup While Hexpat offers lazy incremental parsing and this can improve performance we must force the parse to completion in order to provide Prism so the lazy parsing is not offered here",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "Parse",
          "package": "hexpat-lens",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ca\u003etag soup\u003c/a\u003e parsing to build a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e tree. Technically a\n retract, since \u003ccode\u003e_HTML\u003c/code\u003e tries very hard to return *something*, we\n get an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eview (from _HTML . _HTML) = id\u003c/pre\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTML",
          "package": "hexpat-lens",
          "signature": "Iso' ByteString (UNode text)",
          "source": "src/Text-XML-Expat-Lens-Parse.html#_HTML",
          "type": "function"
        },
        "index": {
          "description": "Uses tag soup parsing to build UNode tree Technically retract since HTML tries very hard to return something we get an Iso instead of Prism view from HTML HTML id",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTML",
          "package": "hexpat-lens",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ca\u003etag soup\u003c/a\u003e parsing to build a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e tree. Technically a\n retract, since \u003ccode\u003e_HTML\u003c/code\u003e tries very hard to return *something*, we\n get an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e. Uses the *fast* tag soup parsing\n options.\n\u003c/p\u003e\u003cpre\u003eview (from _HTML' . _HTML') = id\u003c/pre\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTML'",
          "package": "hexpat-lens",
          "signature": "Iso' ByteString (UNode text)",
          "source": "src/Text-XML-Expat-Lens-Parse.html#_HTML%27",
          "type": "function"
        },
        "index": {
          "description": "Uses tag soup parsing to build UNode tree Technically retract since HTML tries very hard to return something we get an Iso instead of Prism Uses the fast tag soup parsing options view from HTML HTML id",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTML'",
          "package": "hexpat-lens",
          "partial": "HTML'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTML-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike '_HTML but allows choice of \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTMLWithOptions",
          "package": "hexpat-lens",
          "signature": "ParseOptions ByteString -\u003e Iso' ByteString (UNode text)",
          "source": "src/Text-XML-Expat-Lens-Parse.html#_HTMLWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Like HTML but allows choice of ParseOptions",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_HTMLWithOptions",
          "normalized": "ParseOptions ByteString-\u003eIso' ByteString(UNode a)",
          "package": "hexpat-lens",
          "partial": "HTMLWith Options",
          "signature": "ParseOptions ByteString-\u003eIso' ByteString(UNode text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTMLWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict parsing and formatting of XML via \u003ccode\u003e\u003ca\u003eformat'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparse'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_XML",
          "package": "hexpat-lens",
          "signature": "Prism' ByteString (NodeG [] tag text)",
          "source": "src/Text-XML-Expat-Lens-Parse.html#_XML",
          "type": "function"
        },
        "index": {
          "description": "Strict parsing and formatting of XML via format and parse",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_XML",
          "normalized": "Prism' ByteString(NodeG[]a b)",
          "package": "hexpat-lens",
          "partial": "XML",
          "signature": "Prism' ByteString(NodeG[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_XML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides an '_XMLWithOptions parsing \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e with access to the\n \u003ccode\u003eParsingOptions\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_XMLWithOptions",
          "package": "hexpat-lens",
          "signature": "ParseOptions tag text -\u003e Prism' ByteString (NodeG [] tag text)",
          "source": "src/Text-XML-Expat-Lens-Parse.html#_XMLWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Provides an XMLWithOptions parsing Prism with access to the ParsingOptions",
          "hierarchy": "Text XML Expat Lens Parse",
          "module": "Text.XML.Expat.Lens.Parse",
          "name": "_XMLWithOptions",
          "normalized": "ParseOptions a b-\u003ePrism' ByteString(NodeG[]a b)",
          "package": "hexpat-lens",
          "partial": "XMLWith Options",
          "signature": "ParseOptions tag text-\u003ePrism' ByteString(NodeG[]tag text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_XMLWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple Hexpat lens module. This is nothing more than a\n type-specialized re-export of \u003ca\u003eText.XML.Expat.Lens.Generic\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eLenses provide power to do very concise XML tree diving. This\n module provides a less general interface to the Hexpat datatypes\n via lenses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "Unqualified",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html",
          "type": "module"
        },
        "index": {
          "description": "simple Hexpat lens module This is nothing more than type-specialized re-export of Text.XML.Expat.Lens.Generic Lenses provide power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "Unqualified",
          "package": "hexpat-lens",
          "partial": "Unqualified",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "(./)",
          "package": "hexpat-lens",
          "signature": "Traversal' s i -\u003e Traversal' i a -\u003e Traversal' s a",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#.%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "(./) ./",
          "normalized": "Traversal' a b-\u003eTraversal' b c-\u003eTraversal' a c",
          "package": "hexpat-lens",
          "signature": "Traversal' s i-\u003eTraversal' i a-\u003eTraversal' s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "allNodes",
          "package": "hexpat-lens",
          "signature": "UNode t -\u003e [UNode t]",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#allNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "allNodes",
          "normalized": "UNode a-\u003e[UNode a]",
          "package": "hexpat-lens",
          "partial": "Nodes",
          "signature": "UNode t-\u003e[UNode t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:allNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "attributes",
          "package": "hexpat-lens",
          "signature": "Traversal' (UNode t) (UAttributes t)",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "attributes",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "children",
          "package": "hexpat-lens",
          "signature": "Traversal' (UNode t) [UNode t]",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#children",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "children",
          "normalized": "Traversal'(UNode a)[UNode a]",
          "package": "hexpat-lens",
          "signature": "Traversal'(UNode t)[UNode t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "name",
          "package": "hexpat-lens",
          "signature": "Traversal' (UNode t) t",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "name",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "named",
          "package": "hexpat-lens",
          "signature": "t -\u003e Overloaded' p f (UNode t) (UNode t)",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#named",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "named",
          "normalized": "a-\u003eOverloaded' b c(UNode a)(UNode a)",
          "package": "hexpat-lens",
          "signature": "t-\u003eOverloaded' p f(UNode t)(UNode t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "parameterized",
          "package": "hexpat-lens",
          "signature": "t -\u003e t -\u003e Overloaded' p f (UNode t) (UNode t)",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#parameterized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "parameterized",
          "normalized": "a-\u003ea-\u003eOverloaded' b c(UNode a)(UNode a)",
          "package": "hexpat-lens",
          "signature": "t-\u003et-\u003eOverloaded' p f(UNode t)(UNode t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:parameterized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "text",
          "package": "hexpat-lens",
          "signature": "Prism' (UNode t) t",
          "source": "src/Text-XML-Expat-Lens-Unqualified.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Expat Lens Unqualified",
          "module": "Text.XML.Expat.Lens.Unqualified",
          "name": "text",
          "package": "hexpat-lens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple Hexpat lens module. Right now this only re-exports lenses\n on Hexpat \u003ccode\u003eUName\u003c/code\u003es. In the future it may be better to export the\n general API in this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Expat.Lens",
          "name": "Lens",
          "package": "hexpat-lens",
          "source": "src/Text-XML-Expat-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "simple Hexpat lens module Right now this only re-exports lenses on Hexpat UName In the future it may be better to export the general API in this module",
          "hierarchy": "Text XML Expat Lens",
          "module": "Text.XML.Expat.Lens",
          "name": "Lens",
          "package": "hexpat-lens",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens.html#"
      }
    }
  ]
]