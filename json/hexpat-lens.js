[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Hexpat lens module for generic tags.\n\u003c/p\u003e\u003cp\u003eLenses provide power to do very concise XML tree diving. This\n module provides a less general interface to the Hexpat datatypes\n via lenses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "Hexpat lens module for generic tags Lenses provide power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:.-47-",
      "description": {
        "fct-descr": "\u003cp\u003eGlue two \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003es together as relations. This is much like\n \u003ccode\u003eXPath\u003c/code\u003e's *slash*.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' s i -\u003e Traversal' i a -\u003e Traversal' s a",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#.%2F",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "Glue two Traversal together as relations This is much like XPath slash",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "(./) ./",
        "normalized": "Traversal' a b-\u003eTraversal' b c-\u003eTraversal' a c",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "Traversal' s i-\u003eTraversal' i a-\u003eTraversal' s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:allNodes",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a list of all \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003es in a XML tree. Synonym for\n \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "NodeG c tag text -\u003e [NodeG c tag text]",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#allNodes",
        "fct-type": "function",
        "title": "allNodes"
      },
      "index": {
        "description": "Produces list of all UNode in XML tree Synonym for universe",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "allNodes",
        "normalized": "NodeG a b c-\u003e[NodeG a b c]",
        "package": "hexpat-lens",
        "partial": "Nodes",
        "signature": "NodeG c tag text-\u003e[NodeG c tag text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:attributes",
      "description": {
        "fct-descr": "\u003cp\u003eTraverses to the list of attributes of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (NodeG f tag text) (Attributes tag text)",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#attributes",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "Traverses to the list of attributes of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "attributes",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eTraverses the children of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (NodeG f tag text) (f (NodeG f tag text))",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "Traverses the children of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "children",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eTraverses the name of an \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e. This is as\n an \u003ca\u003eAffine\u003c/a\u003e, or 0-or-1 target, \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e. In regex terms, you\n can think of it like the \u003ccode\u003e?\u003c/code\u003e suffix modifier.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (NodeG f tag text) tag",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Traverses the name of an Element This is as an Affine or or-1 target Traversal In regex terms you can think of it like the suffix modifier",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "name",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:named",
      "description": {
        "fct-descr": "\u003cp\u003eTraverses \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es which have a particular name.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "tag -\u003e Overloaded' p f (NodeG c tag text) (NodeG c tag text)",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#named",
        "fct-type": "function",
        "title": "named"
      },
      "index": {
        "description": "Traverses Element which have particular name",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "named",
        "normalized": "a-\u003eOverloaded' b c(NodeG d a e)(NodeG d a e)",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "tag-\u003eOverloaded' p f(NodeG c tag text)(NodeG c tag text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:parameterized",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparameterized k v\u003c/code\u003e traverses \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es which match the value\n \u003ccode\u003ev\u003c/code\u003e at the key \u003ccode\u003ek\u003c/code\u003e in their attributes.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "tag -\u003e text -\u003e Overloaded' p f (NodeG c tag text) (NodeG c tag text)",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#parameterized",
        "fct-type": "function",
        "title": "parameterized"
      },
      "index": {
        "description": "parameterized traverses Element which match the value at the key in their attributes",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "parameterized",
        "normalized": "a-\u003eb-\u003eOverloaded' c d(NodeG e a b)(NodeG e a b)",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "tag-\u003etext-\u003eOverloaded' p f(NodeG c tag text)(NodeG c tag text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Generic.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003ePrismatic access to the text of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e node. This is more\n powerful than \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eattributes\u003c/a\u003e\u003c/code\u003e since it can\n be \u003ccode\u003e\u003ca\u003eReview\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Generic",
        "fct-package": "hexpat-lens",
        "fct-signature": "Prism' (NodeG f tag text) text",
        "fct-source": "src/Text-XML-Expat-Lens-Generic.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Prismatic access to the text of Text node This is more powerful than name children and attributes since it can be Review ed",
        "hierarchy": "Text XML Expat Lens Generic",
        "module": "Text.XML.Expat.Lens.Generic",
        "name": "text",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIsos on \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eNName\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eLenses will provide the power to do very concise XML tree\n diving. This module provides a less general interface to the Hexpat\n datatypes via lenses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html",
        "fct-type": "module",
        "title": "Names"
      },
      "index": {
        "description": "Isos on QName and NName Lenses will provide the power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "Names",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Names",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#t:HasLocalPart",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#HasLocalPart",
        "fct-type": "class",
        "title": "HasLocalPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "HasLocalPart",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Has Local Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:localPart",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "Lens' (a t) t",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#localPart",
        "fct-type": "method",
        "title": "localPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "localPart",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:namespace",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "Lens' (NName text) (Maybe text)",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#namespace",
        "fct-type": "function",
        "title": "namespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "namespace",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:namespaced",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e between a node marked by a qualified \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e name to one\n using a namespaced \u003ccode\u003e\u003ca\u003eNName\u003c/a\u003e\u003c/code\u003e. Normally this throws an exception if\n the namespace is non-standard, but here the \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e simply fails if\n incompatible.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "Prism' (n c (QName text) text) (n c (NName text) text)",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#namespaced",
        "fct-type": "function",
        "title": "namespaced"
      },
      "index": {
        "description": "Prism between node marked by qualified QName name to one using namespaced NName Normally this throws an exception if the namespace is non-standard but here the Prism simply fails if incompatible",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "namespaced",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:prefix",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "Lens' (QName text) (Maybe text)",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "prefix",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Names.html#v:qualified",
      "description": {
        "fct-descr": "\u003cp\u003eIso between a node marked by a \u003ca\u003estringy\u003c/a\u003e name to one using a\n qualified \u003ccode\u003e\u003ca\u003eQName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Names",
        "fct-package": "hexpat-lens",
        "fct-signature": "Iso' (n c text text) (n c (QName text) text)",
        "fct-source": "src/Text-XML-Expat-Lens-Names.html#qualified",
        "fct-type": "function",
        "title": "qualified"
      },
      "index": {
        "description": "Iso between node marked by stringy name to one using qualified QName",
        "hierarchy": "Text XML Expat Lens Names",
        "module": "Text.XML.Expat.Lens.Names",
        "name": "qualified",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML parsing \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003es from Hexpat. HTML parsing \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003es from TagSoup.\n\u003c/p\u003e\u003cp\u003eWhile \u003ccode\u003eHexpat\u003c/code\u003e offers lazy, incremental parsing and this can\n improve performance, we must force the parse to completion in order\n to provide a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e, so the lazy parsing is not offered here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "XML parsing Prism from Hexpat HTML parsing Iso from TagSoup While Hexpat offers lazy incremental parsing and this can improve performance we must force the parse to completion in order to provide Prism so the lazy parsing is not offered here",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTML",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ca\u003etag soup\u003c/a\u003e parsing to build a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e tree. Technically a\n retract, since \u003ccode\u003e_HTML\u003c/code\u003e tries very hard to return *something*, we\n get an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eview (from _HTML . _HTML) = id\u003c/pre\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "Iso' ByteString (UNode text)",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html#_HTML",
        "fct-type": "function",
        "title": "_HTML"
      },
      "index": {
        "description": "Uses tag soup parsing to build UNode tree Technically retract since HTML tries very hard to return something we get an Iso instead of Prism view from HTML HTML id",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "_HTML",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTML-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ca\u003etag soup\u003c/a\u003e parsing to build a \u003ccode\u003e\u003ca\u003eUNode\u003c/a\u003e\u003c/code\u003e tree. Technically a\n retract, since \u003ccode\u003e_HTML\u003c/code\u003e tries very hard to return *something*, we\n get an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e. Uses the *fast* tag soup parsing\n options.\n\u003c/p\u003e\u003cpre\u003eview (from _HTML' . _HTML') = id\u003c/pre\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "Iso' ByteString (UNode text)",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html#_HTML%27",
        "fct-type": "function",
        "title": "_HTML'"
      },
      "index": {
        "description": "Uses tag soup parsing to build UNode tree Technically retract since HTML tries very hard to return something we get an Iso instead of Prism Uses the fast tag soup parsing options view from HTML HTML id",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "_HTML'",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "HTML'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_HTMLWithOptions",
      "description": {
        "fct-descr": "\u003cp\u003eLike '_HTML but allows choice of \u003ccode\u003e\u003ca\u003eParseOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "ParseOptions ByteString -\u003e Iso' ByteString (UNode text)",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html#_HTMLWithOptions",
        "fct-type": "function",
        "title": "_HTMLWithOptions"
      },
      "index": {
        "description": "Like HTML but allows choice of ParseOptions",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "_HTMLWithOptions",
        "normalized": "ParseOptions ByteString-\u003eIso' ByteString(UNode a)",
        "package": "hexpat-lens",
        "partial": "HTMLWith Options",
        "signature": "ParseOptions ByteString-\u003eIso' ByteString(UNode text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_XML",
      "description": {
        "fct-descr": "\u003cp\u003eStrict parsing and formatting of XML via \u003ccode\u003e\u003ca\u003eformat'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparse'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "Prism' ByteString (NodeG [] tag text)",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html#_XML",
        "fct-type": "function",
        "title": "_XML"
      },
      "index": {
        "description": "Strict parsing and formatting of XML via format and parse",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "_XML",
        "normalized": "Prism' ByteString(NodeG[]a b)",
        "package": "hexpat-lens",
        "partial": "XML",
        "signature": "Prism' ByteString(NodeG[]tag text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Parse.html#v:_XMLWithOptions",
      "description": {
        "fct-descr": "\u003cp\u003eProvides an '_XMLWithOptions parsing \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e with access to the\n \u003ccode\u003eParsingOptions\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Expat.Lens.Parse",
        "fct-package": "hexpat-lens",
        "fct-signature": "ParseOptions tag text -\u003e Prism' ByteString (NodeG [] tag text)",
        "fct-source": "src/Text-XML-Expat-Lens-Parse.html#_XMLWithOptions",
        "fct-type": "function",
        "title": "_XMLWithOptions"
      },
      "index": {
        "description": "Provides an XMLWithOptions parsing Prism with access to the ParsingOptions",
        "hierarchy": "Text XML Expat Lens Parse",
        "module": "Text.XML.Expat.Lens.Parse",
        "name": "_XMLWithOptions",
        "normalized": "ParseOptions a b-\u003ePrism' ByteString(NodeG[]a b)",
        "package": "hexpat-lens",
        "partial": "XMLWith Options",
        "signature": "ParseOptions tag text-\u003ePrism' ByteString(NodeG[]tag text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple Hexpat lens module. This is nothing more than a\n type-specialized re-export of \u003ca\u003eText.XML.Expat.Lens.Generic\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eLenses provide power to do very concise XML tree diving. This\n module provides a less general interface to the Hexpat datatypes\n via lenses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html",
        "fct-type": "module",
        "title": "Unqualified"
      },
      "index": {
        "description": "simple Hexpat lens module This is nothing more than type-specialized re-export of Text.XML.Expat.Lens.Generic Lenses provide power to do very concise XML tree diving This module provides less general interface to the Hexpat datatypes via lenses",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "Unqualified",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Unqualified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:.-47-",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' s i -\u003e Traversal' i a -\u003e Traversal' s a",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#.%2F",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "(./) ./",
        "normalized": "Traversal' a b-\u003eTraversal' b c-\u003eTraversal' a c",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "Traversal' s i-\u003eTraversal' i a-\u003eTraversal' s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:allNodes",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "UNode t -\u003e [UNode t]",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#allNodes",
        "fct-type": "function",
        "title": "allNodes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "allNodes",
        "normalized": "UNode a-\u003e[UNode a]",
        "package": "hexpat-lens",
        "partial": "Nodes",
        "signature": "UNode t-\u003e[UNode t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:attributes",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (UNode t) (UAttributes t)",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#attributes",
        "fct-type": "function",
        "title": "attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "attributes",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:children",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (UNode t) [UNode t]",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "children",
        "normalized": "Traversal'(UNode a)[UNode a]",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "Traversal'(UNode t)[UNode t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:name",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "Traversal' (UNode t) t",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "name",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:named",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "t -\u003e Overloaded' p f (UNode t) (UNode t)",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#named",
        "fct-type": "function",
        "title": "named"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "named",
        "normalized": "a-\u003eOverloaded' b c(UNode a)(UNode a)",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "t-\u003eOverloaded' p f(UNode t)(UNode t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:parameterized",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "t -\u003e t -\u003e Overloaded' p f (UNode t) (UNode t)",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#parameterized",
        "fct-type": "function",
        "title": "parameterized"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "parameterized",
        "normalized": "a-\u003ea-\u003eOverloaded' b c(UNode a)(UNode a)",
        "package": "hexpat-lens",
        "partial": "",
        "signature": "t-\u003et-\u003eOverloaded' p f(UNode t)(UNode t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens-Unqualified.html#v:text",
      "description": {
        "fct-module": "Text.XML.Expat.Lens.Unqualified",
        "fct-package": "hexpat-lens",
        "fct-signature": "Prism' (UNode t) t",
        "fct-source": "src/Text-XML-Expat-Lens-Unqualified.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Expat Lens Unqualified",
        "module": "Text.XML.Expat.Lens.Unqualified",
        "name": "text",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hexpat-lens/docs/Text-XML-Expat-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple Hexpat lens module. Right now this only re-exports lenses\n on Hexpat \u003ccode\u003eUName\u003c/code\u003es. In the future it may be better to export the\n general API in this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Expat.Lens",
        "fct-package": "hexpat-lens",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Expat-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "simple Hexpat lens module Right now this only re-exports lenses on Hexpat UName In the future it may be better to export the general API in this module",
        "hierarchy": "Text XML Expat Lens",
        "module": "Text.XML.Expat.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "hexpat-lens",
        "partial": "Lens",
        "signature": ""
      }
    }
  }
]