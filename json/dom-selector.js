[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScraping (innerHTML/innerText) and modification (node removal) functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Scraping.html",
        "fct-type": "module",
        "title": "Scraping"
      },
      "index": {
        "description": "Scraping innerHTML innerText and modification node removal functions",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "Scraping",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Scraping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#t:GetAttribute",
      "description": {
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Scraping.html#GetAttribute",
        "fct-type": "class",
        "title": "GetAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "GetAttribute",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Get Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#t:GetInner",
      "description": {
        "fct-descr": "\u003cp\u003eType class for getting lazy text representation of HTML element(s). This can be used for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e, [Node], and [Cursor].\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "class",
        "fct-source": "src/Text-XML-Scraping.html#GetInner",
        "fct-type": "class",
        "title": "GetInner"
      },
      "index": {
        "description": "Type class for getting lazy text representation of HTML element This can be used for Node Cursor Node and Cursor",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "GetInner",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Get Inner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:eclass",
      "description": {
        "fct-descr": "\u003cp\u003eReturns element classes. If node is not an element or does not have a class, returns an empty list.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e [Text]",
        "fct-source": "src/Text-XML-Scraping.html#eclass",
        "fct-type": "method",
        "title": "eclass"
      },
      "index": {
        "description": "Returns element classes If node is not an element or does not have class returns an empty list",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "eclass",
        "normalized": "a-\u003e[Text]",
        "package": "dom-selector",
        "partial": "",
        "signature": "elem-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:eid",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an element id. If node is not an element or does not have an id, returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e Maybe Text",
        "fct-source": "src/Text-XML-Scraping.html#eid",
        "fct-type": "method",
        "title": "eid"
      },
      "index": {
        "description": "Returns an element id If node is not an element or does not have an id returns Nothing",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "eid",
        "normalized": "a-\u003eMaybe Text",
        "package": "dom-selector",
        "partial": "",
        "signature": "elem-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:ename",
      "description": {
        "fct-descr": "\u003cp\u003eTag name of element node. Returns Nothing if the node is not an element.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e Maybe Text",
        "fct-source": "src/Text-XML-Scraping.html#ename",
        "fct-type": "method",
        "title": "ename"
      },
      "index": {
        "description": "Tag name of element node Returns Nothing if the node is not an element",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "ename",
        "normalized": "a-\u003eMaybe Text",
        "package": "dom-selector",
        "partial": "",
        "signature": "elem-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:getMeta",
      "description": {
        "fct-descr": "\u003cp\u003eSearches a meta with a specified name under a cursor, and gets a ''content'' field. \n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "Text -\u003e elem -\u003e [Text]",
        "fct-source": "src/Text-XML-Scraping.html#getMeta",
        "fct-type": "method",
        "title": "getMeta"
      },
      "index": {
        "description": "Searches meta with specified name under cursor and gets content field",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "getMeta",
        "normalized": "Text-\u003ea-\u003e[Text]",
        "package": "dom-selector",
        "partial": "Meta",
        "signature": "Text-\u003eelem-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:innerHtml",
      "description": {
        "fct-descr": "\u003cp\u003e''innerHtml'' of the element(s).\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e Text",
        "fct-source": "src/Text-XML-Scraping.html#innerHtml",
        "fct-type": "method",
        "title": "innerHtml"
      },
      "index": {
        "description": "innerHtml of the element",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "innerHtml",
        "normalized": "a-\u003eText",
        "package": "dom-selector",
        "partial": "Html",
        "signature": "elem-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:innerText",
      "description": {
        "fct-descr": "\u003cp\u003e''innerText'' of the element(s).\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e Text",
        "fct-source": "src/Text-XML-Scraping.html#innerText",
        "fct-type": "method",
        "title": "innerText"
      },
      "index": {
        "description": "innerText of the element",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "innerText",
        "normalized": "a-\u003eText",
        "package": "dom-selector",
        "partial": "Text",
        "signature": "elem-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:nodeHaving",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the node contains any descendant (and self) node that satisfies predicate.\n To return false, this function needs to traverse all descendant elements, so this is not efficient.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "(Node -\u003e Bool) -\u003e Node -\u003e Bool",
        "fct-source": "src/Text-XML-Scraping.html#nodeHaving",
        "fct-type": "function",
        "title": "nodeHaving"
      },
      "index": {
        "description": "Checks whether the node contains any descendant and self node that satisfies predicate To return false this function needs to traverse all descendant elements so this is not efficient",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "nodeHaving",
        "normalized": "(Node-\u003eBool)-\u003eNode-\u003eBool",
        "package": "dom-selector",
        "partial": "Having",
        "signature": "(Node-\u003eBool)-\u003eNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:remove",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves descendant nodes that satisfy predicate, and returns a new updated \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n This is a general function, and internally used for other remove* functions in this module.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "(Node -\u003e Bool) -\u003e Node -\u003e Node",
        "fct-source": "src/Text-XML-Scraping.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "Removes descendant nodes that satisfy predicate and returns new updated Node This is general function and internally used for other remove functions in this module",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "remove",
        "normalized": "(Node-\u003eBool)-\u003eNode-\u003eNode",
        "package": "dom-selector",
        "partial": "",
        "signature": "(Node-\u003eBool)-\u003eNode-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeDepth",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e, but with a limit of depth.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "(Node -\u003e Bool) -\u003e Int -\u003e Node -\u003e Node",
        "fct-source": "src/Text-XML-Scraping.html#removeDepth",
        "fct-type": "function",
        "title": "removeDepth"
      },
      "index": {
        "description": "Similar to remove but with limit of depth",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "removeDepth",
        "normalized": "(Node-\u003eBool)-\u003eInt-\u003eNode-\u003eNode",
        "package": "dom-selector",
        "partial": "Depth",
        "signature": "(Node-\u003eBool)-\u003eInt-\u003eNode-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeQueries",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all descendant nodes that match any of query strings.\n ''removeQuery'' in ver 0.1 was merged into this.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "[String] -\u003e [Node] -\u003e [Node]",
        "fct-source": "src/Text-XML-Scraping.html#removeQueries",
        "fct-type": "function",
        "title": "removeQueries"
      },
      "index": {
        "description": "Remove all descendant nodes that match any of query strings removeQuery in ver was merged into this",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "removeQueries",
        "normalized": "[String]-\u003e[Node]-\u003e[Node]",
        "package": "dom-selector",
        "partial": "Queries",
        "signature": "[String]-\u003e[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeQuery",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use removeQueries instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRemove all descendant nodes that match a query string.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e [Node] -\u003e [Node]",
        "fct-source": "src/Text-XML-Scraping.html#removeQuery",
        "fct-type": "function",
        "title": "removeQuery"
      },
      "index": {
        "description": "Deprecated Use removeQueries instead Remove all descendant nodes that match query string",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "removeQuery",
        "normalized": "String-\u003e[Node]-\u003e[Node]",
        "package": "dom-selector",
        "partial": "Query",
        "signature": "String-\u003e[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeTags",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all descendant nodes with specified tag names.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "[String] -\u003e [Node] -\u003e [Node]",
        "fct-source": "src/Text-XML-Scraping.html#removeTags",
        "fct-type": "function",
        "title": "removeTags"
      },
      "index": {
        "description": "Remove all descendant nodes with specified tag names",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "removeTags",
        "normalized": "[String]-\u003e[Node]-\u003e[Node]",
        "package": "dom-selector",
        "partial": "Tags",
        "signature": "[String]-\u003e[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:rmElem",
      "description": {
        "fct-descr": "\u003cp\u003eRemove descendant nodes that match specified tag, id, and class (similar to \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e, but more specific.)\n  If you pass an empty string to tag or id, that does not filter tag or id (Read the source code for details).\n\u003c/p\u003e\u003cpre\u003e\n rmElem ''div'' ''div-id'' [''div-class'', ''div-class2''] nodes = newnodes\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e String -\u003e [String] -\u003e [Node] -\u003e [Node]",
        "fct-source": "src/Text-XML-Scraping.html#rmElem",
        "fct-type": "function",
        "title": "rmElem"
      },
      "index": {
        "description": "Remove descendant nodes that match specified tag id and class similar to remove but more specific If you pass an empty string to tag or id that does not filter tag or id Read the source code for details rmElem div div-id div-class div-class2 nodes newnodes",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "rmElem",
        "normalized": "String-\u003eString-\u003e[String]-\u003e[Node]-\u003e[Node]",
        "package": "dom-selector",
        "partial": "Elem",
        "signature": "String-\u003eString-\u003e[String]-\u003e[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:toHtml",
      "description": {
        "fct-descr": "\u003cp\u003e''toHtml'' of the element(s).\n\u003c/p\u003e",
        "fct-module": "Text.XML.Scraping",
        "fct-package": "dom-selector",
        "fct-signature": "elem -\u003e Text",
        "fct-source": "src/Text-XML-Scraping.html#toHtml",
        "fct-type": "method",
        "title": "toHtml"
      },
      "index": {
        "description": "toHtml of the element",
        "hierarchy": "Text XML Scraping",
        "module": "Text.XML.Scraping",
        "name": "toHtml",
        "normalized": "a-\u003eText",
        "package": "dom-selector",
        "partial": "Html",
        "signature": "elem-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Parser.html#",
      "description": {
        "fct-module": "Text.XML.Selector.Parser",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Selector-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Parser",
        "module": "Text.XML.Selector.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Parser.html#v:parseJQ",
      "description": {
        "fct-descr": "\u003cp\u003eParse a jQuery selector string and return a list of \u003ccode\u003e\u003ca\u003eJQSelector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector.Parser",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e [JQSelector]",
        "fct-source": "src/Text-XML-Selector-Parser.html#parseJQ",
        "fct-type": "function",
        "title": "parseJQ"
      },
      "index": {
        "description": "Parse jQuery selector string and return list of JQSelector",
        "hierarchy": "Text XML Selector Parser",
        "module": "Text.XML.Selector.Parser",
        "name": "parseJQ",
        "normalized": "String-\u003e[JQSelector]",
        "package": "dom-selector",
        "partial": "JQ",
        "signature": "String-\u003e[JQSelector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#",
      "description": {
        "fct-module": "Text.XML.Selector.TH",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Selector-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector TH",
        "module": "Text.XML.Selector.TH",
        "name": "TH",
        "normalized": "",
        "package": "dom-selector",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#v:jq",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiQuoter for CSS selector\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector.TH",
        "fct-package": "dom-selector",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-XML-Selector-TH.html#jq",
        "fct-type": "function",
        "title": "jq"
      },
      "index": {
        "description": "QuasiQuoter for CSS selector",
        "hierarchy": "Text XML Selector TH",
        "module": "Text.XML.Selector.TH",
        "name": "jq",
        "normalized": "",
        "package": "dom-selector",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#v:queryT",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e from jQuery selector QQ.\n\u003c/p\u003e\u003cpre\u003ehtml = innerHtml $ cursor $| queryT [jq| ul.foo \u003e li#bar |]\n\u003c/pre\u003e",
        "fct-module": "Text.XML.Selector.TH",
        "fct-package": "dom-selector",
        "fct-signature": "[JQSelector] -\u003e Axis",
        "fct-source": "src/Text-XML-Selector-TH.html#queryT",
        "fct-type": "function",
        "title": "queryT"
      },
      "index": {
        "description": "Get Axis from jQuery selector QQ html innerHtml cursor queryT jq ul.foo li bar",
        "hierarchy": "Text XML Selector TH",
        "module": "Text.XML.Selector.TH",
        "name": "queryT",
        "normalized": "[JQSelector]-\u003eAxis",
        "package": "dom-selector",
        "partial": "",
        "signature": "[JQSelector]-\u003eAxis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Test.html#",
      "description": {
        "fct-module": "Text.XML.Selector.Test",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Selector-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Test",
        "module": "Text.XML.Selector.Test",
        "name": "Test",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Test.html#v:prop_parseJQ",
      "description": {
        "fct-descr": "\u003cp\u003eQuickCheck for a parser.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector.Test",
        "fct-package": "dom-selector",
        "fct-signature": "[JQSelector] -\u003e Bool",
        "fct-source": "src/Text-XML-Selector-Test.html#prop_parseJQ",
        "fct-type": "function",
        "title": "prop_parseJQ"
      },
      "index": {
        "description": "QuickCheck for parser",
        "hierarchy": "Text XML Selector Test",
        "module": "Text.XML.Selector.Test",
        "name": "prop_parseJQ",
        "normalized": "[JQSelector]-\u003eBool",
        "package": "dom-selector",
        "partial": "JQ",
        "signature": "[JQSelector]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Selector-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Types",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:AttrRel",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "data",
        "title": "AttrRel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "AttrRel",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Attr Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:JQSelector",
      "description": {
        "fct-descr": "\u003cp\u003eJQSelector represents one token of jquery selector. One JQSelector corresponds to \"div#content\", \"a[href='/index.html']\", etc. You can get a list of JQSelector by \u003ccode\u003eparseJQ\u003c/code\u003e, and show them by \u003ccode\u003eshowJQ\u003c/code\u003e\n As long as you use \u003ccode\u003equery\u003c/code\u003e, you don't need to handle this type directly.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "data",
        "title": "JQSelector"
      },
      "index": {
        "description": "JQSelector represents one token of jquery selector One JQSelector corresponds to div content href index.html etc You can get list of JQSelector by parseJQ and show them by showJQ As long as you use query you don need to handle this type directly",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "JQSelector",
        "normalized": "",
        "package": "dom-selector",
        "partial": "JQSelector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:RelPrev",
      "description": {
        "fct-descr": "\u003cp\u003eRelationship to the preceding selector.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Selector-Types.html#RelPrev",
        "fct-type": "data",
        "title": "RelPrev"
      },
      "index": {
        "description": "Relationship to the preceding selector",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "RelPrev",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Rel Prev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:TagAttr",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "data",
        "fct-source": "src/Text-XML-Selector-Types.html#TagAttr",
        "fct-type": "data",
        "title": "TagAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "TagAttr",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Tag Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Begin",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Begin",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "Begin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Begin",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Child",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Child",
        "fct-source": "src/Text-XML-Selector-Types.html#RelPrev",
        "fct-type": "function",
        "title": "Child"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Child",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Contains",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Contains",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "Contains"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Contains",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Contains",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:ContainsWord",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "ContainsWord",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "ContainsWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "ContainsWord",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Contains Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Descendant",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Descendant",
        "fct-source": "src/Text-XML-Selector-Types.html#RelPrev",
        "fct-type": "function",
        "title": "Descendant"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Descendant",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Descendant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:End",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "End",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "End"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "End",
        "normalized": "",
        "package": "dom-selector",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Equal",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Equal",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "Equal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Equal",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Exists",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Exists",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "Exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Exists",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:JQSelector",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "JQSelector",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "JQSelector"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "JQSelector",
        "normalized": "",
        "package": "dom-selector",
        "partial": "JQSelector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Next",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Next",
        "fct-source": "src/Text-XML-Selector-Types.html#RelPrev",
        "fct-type": "function",
        "title": "Next"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Next",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:NotEqual",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "NotEqual",
        "fct-source": "src/Text-XML-Selector-Types.html#AttrRel",
        "fct-type": "function",
        "title": "NotEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "NotEqual",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Not Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Sibling",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Sibling",
        "fct-source": "src/Text-XML-Selector-Types.html#RelPrev",
        "fct-type": "function",
        "title": "Sibling"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "Sibling",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Sibling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:TagAttr",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "TagAttr",
        "fct-source": "src/Text-XML-Selector-Types.html#TagAttr",
        "fct-type": "function",
        "title": "TagAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "TagAttr",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Tag Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "String",
        "fct-source": "src/Text-XML-Selector-Types.html#TagAttr",
        "fct-type": "function",
        "title": "attrName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "attrName",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrRel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "AttrRel",
        "fct-source": "src/Text-XML-Selector-Types.html#TagAttr",
        "fct-type": "function",
        "title": "attrRel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "attrRel",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrVal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-XML-Selector-Types.html#TagAttr",
        "fct-type": "function",
        "title": "attrVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "attrVal",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "[TagAttr]",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "jqTagAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "jqTagAttr",
        "normalized": "[TagAttr]",
        "package": "dom-selector",
        "partial": "Tag Attr",
        "signature": "[TagAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagClass",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "[String]",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "jqTagClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "jqTagClass",
        "normalized": "[String]",
        "package": "dom-selector",
        "partial": "Tag Class",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "jqTagId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "jqTagId",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Tag Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "jqTagName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "jqTagName",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Tag Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:relPrev",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "RelPrev",
        "fct-source": "src/Text-XML-Selector-Types.html#JQSelector",
        "fct-type": "function",
        "title": "relPrev"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "relPrev",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Prev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:relToStr",
      "description": {
        "fct-module": "Text.XML.Selector.Types",
        "fct-package": "dom-selector",
        "fct-signature": "AttrRel -\u003e String",
        "fct-source": "src/Text-XML-Selector-Types.html#relToStr",
        "fct-type": "function",
        "title": "relToStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector Types",
        "module": "Text.XML.Selector.Types",
        "name": "relToStr",
        "normalized": "AttrRel-\u003eString",
        "package": "dom-selector",
        "partial": "To Str",
        "signature": "AttrRel-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has query functions for traversing DOM. \u003ccode\u003equeryT\u003c/code\u003e, a quasiquote version, is also available in \u003ca\u003eText.XML.Selector.TH\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-Selector.html",
        "fct-type": "module",
        "title": "Selector"
      },
      "index": {
        "description": "This module has query functions for traversing DOM queryT quasiquote version is also available in Text.XML.Selector.TH module",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "Selector",
        "normalized": "",
        "package": "dom-selector",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:byClass",
      "description": {
        "fct-descr": "\u003cp\u003eAxis for choosing elements by a class\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e Axis",
        "fct-source": "src/Text-XML-Selector.html#byClass",
        "fct-type": "function",
        "title": "byClass"
      },
      "index": {
        "description": "Axis for choosing elements by class",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "byClass",
        "normalized": "String-\u003eAxis",
        "package": "dom-selector",
        "partial": "Class",
        "signature": "String-\u003eAxis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:byId",
      "description": {
        "fct-descr": "\u003cp\u003eAxis for choosing elements by an id\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e Axis",
        "fct-source": "src/Text-XML-Selector.html#byId",
        "fct-type": "function",
        "title": "byId"
      },
      "index": {
        "description": "Axis for choosing elements by an id",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "byId",
        "normalized": "String-\u003eAxis",
        "package": "dom-selector",
        "partial": "Id",
        "signature": "String-\u003eAxis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:headm",
      "description": {
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Text-XML-Selector.html#headm",
        "fct-type": "function",
        "title": "headm"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "headm",
        "normalized": "[a]-\u003eMaybe a",
        "package": "dom-selector",
        "partial": "",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:maybeText",
      "description": {
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "Text -\u003e Maybe Text",
        "fct-source": "src/Text-XML-Selector.html#maybeText",
        "fct-type": "function",
        "title": "maybeText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "maybeText",
        "normalized": "Text-\u003eMaybe Text",
        "package": "dom-selector",
        "partial": "Text",
        "signature": "Text-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eGets the next sibling. Note that this is not a Axis.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "Cursor -\u003e Maybe Cursor",
        "fct-source": "src/Text-XML-Selector.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Gets the next sibling Note that this is not Axis",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "next",
        "normalized": "Cursor-\u003eMaybe Cursor",
        "package": "dom-selector",
        "partial": "",
        "signature": "Cursor-\u003eMaybe Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e from jQuery selector string.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e Axis",
        "fct-source": "src/Text-XML-Selector.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Get Axis from jQuery selector string",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "query",
        "normalized": "String-\u003eAxis",
        "package": "dom-selector",
        "partial": "",
        "signature": "String-\u003eAxis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:query1",
      "description": {
        "fct-descr": "\u003cp\u003eReturn Just (the first element of query results). If no element matches, it returns Nothing.\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e Cursor -\u003e Maybe Cursor",
        "fct-source": "src/Text-XML-Selector.html#query1",
        "fct-type": "function",
        "title": "query1"
      },
      "index": {
        "description": "Return Just the first element of query results If no element matches it returns Nothing",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "query1",
        "normalized": "String-\u003eCursor-\u003eMaybe Cursor",
        "package": "dom-selector",
        "partial": "",
        "signature": "String-\u003eCursor-\u003eMaybe Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:queryMatchNode",
      "description": {
        "fct-descr": "\u003cp\u003eReturn if a node matches a selector given by string\n |Only first token is used (i.e. no hierarchy is enabled.)\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "String -\u003e Node -\u003e Bool",
        "fct-source": "src/Text-XML-Selector.html#queryMatchNode",
        "fct-type": "function",
        "title": "queryMatchNode"
      },
      "index": {
        "description": "Return if node matches selector given by string Only first token is used i.e no hierarchy is enabled",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "queryMatchNode",
        "normalized": "String-\u003eNode-\u003eBool",
        "package": "dom-selector",
        "partial": "Match Node",
        "signature": "String-\u003eNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:searchTree",
      "description": {
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "[JQSelector] -\u003e Axis",
        "fct-source": "src/Text-XML-Selector.html#searchTree",
        "fct-type": "function",
        "title": "searchTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "searchTree",
        "normalized": "[JQSelector]-\u003eAxis",
        "package": "dom-selector",
        "partial": "Tree",
        "signature": "[JQSelector]-\u003eAxis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:selectorMatch",
      "description": {
        "fct-descr": "\u003cp\u003eReturn if an element matches a selector\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "JQSelector -\u003e Element -\u003e Bool",
        "fct-source": "src/Text-XML-Selector.html#selectorMatch",
        "fct-type": "function",
        "title": "selectorMatch"
      },
      "index": {
        "description": "Return if an element matches selector",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "selectorMatch",
        "normalized": "JQSelector-\u003eElement-\u003eBool",
        "package": "dom-selector",
        "partial": "Match",
        "signature": "JQSelector-\u003eElement-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:showJQ",
      "description": {
        "fct-descr": "\u003cp\u003eShow a parsed selector.\n (parseJQ . showJQ) == id\n\u003c/p\u003e",
        "fct-module": "Text.XML.Selector",
        "fct-package": "dom-selector",
        "fct-signature": "[JQSelector] -\u003e String",
        "fct-source": "src/Text-XML-Selector.html#showJQ",
        "fct-type": "function",
        "title": "showJQ"
      },
      "index": {
        "description": "Show parsed selector parseJQ showJQ id",
        "hierarchy": "Text XML Selector",
        "module": "Text.XML.Selector",
        "name": "showJQ",
        "normalized": "[JQSelector]-\u003eString",
        "package": "dom-selector",
        "partial": "JQ",
        "signature": "[JQSelector]-\u003eString"
      }
    }
  }
]