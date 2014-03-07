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
        "word": "dom-selector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScraping (innerHTML/innerText) and modification (node removal) functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Scraping",
          "name": "Scraping",
          "package": "dom-selector",
          "source": "src/Text-XML-Scraping.html",
          "type": "module"
        },
        "index": {
          "description": "Scraping innerHTML innerText and modification node removal functions",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "Scraping",
          "package": "dom-selector",
          "partial": "Scraping",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Scraping",
          "name": "GetAttribute",
          "package": "dom-selector",
          "source": "src/Text-XML-Scraping.html#GetAttribute",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "GetAttribute",
          "package": "dom-selector",
          "partial": "Get Attribute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#t:GetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for getting lazy text representation of HTML element(s). This can be used for \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e, [Node], and [Cursor].\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "GetInner",
          "package": "dom-selector",
          "source": "src/Text-XML-Scraping.html#GetInner",
          "type": "class"
        },
        "index": {
          "description": "Type class for getting lazy text representation of HTML element This can be used for Node Cursor Node and Cursor",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "GetInner",
          "package": "dom-selector",
          "partial": "Get Inner",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#t:GetInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns element classes. If node is not an element or does not have a class, returns an empty list.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "eclass",
          "package": "dom-selector",
          "signature": "elem -\u003e [Text]",
          "source": "src/Text-XML-Scraping.html#eclass",
          "type": "method"
        },
        "index": {
          "description": "Returns element classes If node is not an element or does not have class returns an empty list",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "eclass",
          "normalized": "a-\u003e[Text]",
          "package": "dom-selector",
          "signature": "elem-\u003e[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:eclass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an element id. If node is not an element or does not have an id, returns Nothing.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "eid",
          "package": "dom-selector",
          "signature": "elem -\u003e Maybe Text",
          "source": "src/Text-XML-Scraping.html#eid",
          "type": "method"
        },
        "index": {
          "description": "Returns an element id If node is not an element or does not have an id returns Nothing",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "eid",
          "normalized": "a-\u003eMaybe Text",
          "package": "dom-selector",
          "signature": "elem-\u003eMaybe Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:eid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag name of element node. Returns Nothing if the node is not an element.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "ename",
          "package": "dom-selector",
          "signature": "elem -\u003e Maybe Text",
          "source": "src/Text-XML-Scraping.html#ename",
          "type": "method"
        },
        "index": {
          "description": "Tag name of element node Returns Nothing if the node is not an element",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "ename",
          "normalized": "a-\u003eMaybe Text",
          "package": "dom-selector",
          "signature": "elem-\u003eMaybe Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:ename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches a meta with a specified name under a cursor, and gets a ''content'' field. \n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "getMeta",
          "package": "dom-selector",
          "signature": "Text -\u003e elem -\u003e [Text]",
          "source": "src/Text-XML-Scraping.html#getMeta",
          "type": "method"
        },
        "index": {
          "description": "Searches meta with specified name under cursor and gets content field",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "getMeta",
          "normalized": "Text-\u003ea-\u003e[Text]",
          "package": "dom-selector",
          "partial": "Meta",
          "signature": "Text-\u003eelem-\u003e[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:getMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''innerHtml'' of the element(s).\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "innerHtml",
          "package": "dom-selector",
          "signature": "elem -\u003e Text",
          "source": "src/Text-XML-Scraping.html#innerHtml",
          "type": "method"
        },
        "index": {
          "description": "innerHtml of the element",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "innerHtml",
          "normalized": "a-\u003eText",
          "package": "dom-selector",
          "partial": "Html",
          "signature": "elem-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:innerHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''innerText'' of the element(s).\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "innerText",
          "package": "dom-selector",
          "signature": "elem -\u003e Text",
          "source": "src/Text-XML-Scraping.html#innerText",
          "type": "method"
        },
        "index": {
          "description": "innerText of the element",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "innerText",
          "normalized": "a-\u003eText",
          "package": "dom-selector",
          "partial": "Text",
          "signature": "elem-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:innerText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the node contains any descendant (and self) node that satisfies predicate.\n To return false, this function needs to traverse all descendant elements, so this is not efficient.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "nodeHaving",
          "package": "dom-selector",
          "signature": "(Node -\u003e Bool) -\u003e Node -\u003e Bool",
          "source": "src/Text-XML-Scraping.html#nodeHaving",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the node contains any descendant and self node that satisfies predicate To return false this function needs to traverse all descendant elements so this is not efficient",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "nodeHaving",
          "normalized": "(Node-\u003eBool)-\u003eNode-\u003eBool",
          "package": "dom-selector",
          "partial": "Having",
          "signature": "(Node-\u003eBool)-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:nodeHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves descendant nodes that satisfy predicate, and returns a new updated \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n This is a general function, and internally used for other remove* functions in this module.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "remove",
          "package": "dom-selector",
          "signature": "(Node -\u003e Bool) -\u003e Node -\u003e Node",
          "source": "src/Text-XML-Scraping.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Removes descendant nodes that satisfy predicate and returns new updated Node This is general function and internally used for other remove functions in this module",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "remove",
          "normalized": "(Node-\u003eBool)-\u003eNode-\u003eNode",
          "package": "dom-selector",
          "signature": "(Node-\u003eBool)-\u003eNode-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e, but with a limit of depth.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "removeDepth",
          "package": "dom-selector",
          "signature": "(Node -\u003e Bool) -\u003e Int -\u003e Node -\u003e Node",
          "source": "src/Text-XML-Scraping.html#removeDepth",
          "type": "function"
        },
        "index": {
          "description": "Similar to remove but with limit of depth",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "removeDepth",
          "normalized": "(Node-\u003eBool)-\u003eInt-\u003eNode-\u003eNode",
          "package": "dom-selector",
          "partial": "Depth",
          "signature": "(Node-\u003eBool)-\u003eInt-\u003eNode-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all descendant nodes that match any of query strings.\n ''removeQuery'' in ver 0.1 was merged into this.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "removeQueries",
          "package": "dom-selector",
          "signature": "[String] -\u003e [Node] -\u003e [Node]",
          "source": "src/Text-XML-Scraping.html#removeQueries",
          "type": "function"
        },
        "index": {
          "description": "Remove all descendant nodes that match any of query strings removeQuery in ver was merged into this",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "removeQueries",
          "normalized": "[String]-\u003e[Node]-\u003e[Node]",
          "package": "dom-selector",
          "partial": "Queries",
          "signature": "[String]-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use removeQueries instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRemove all descendant nodes that match a query string.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "removeQuery",
          "package": "dom-selector",
          "signature": "String -\u003e [Node] -\u003e [Node]",
          "source": "src/Text-XML-Scraping.html#removeQuery",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use removeQueries instead Remove all descendant nodes that match query string",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "removeQuery",
          "normalized": "String-\u003e[Node]-\u003e[Node]",
          "package": "dom-selector",
          "partial": "Query",
          "signature": "String-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all descendant nodes with specified tag names.\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "removeTags",
          "package": "dom-selector",
          "signature": "[String] -\u003e [Node] -\u003e [Node]",
          "source": "src/Text-XML-Scraping.html#removeTags",
          "type": "function"
        },
        "index": {
          "description": "Remove all descendant nodes with specified tag names",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "removeTags",
          "normalized": "[String]-\u003e[Node]-\u003e[Node]",
          "package": "dom-selector",
          "partial": "Tags",
          "signature": "[String]-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:removeTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove descendant nodes that match specified tag, id, and class (similar to \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003e, but more specific.)\n  If you pass an empty string to tag or id, that does not filter tag or id (Read the source code for details).\n\u003c/p\u003e\u003cpre\u003e\n rmElem ''div'' ''div-id'' [''div-class'', ''div-class2''] nodes = newnodes\n\u003c/pre\u003e",
          "module": "Text.XML.Scraping",
          "name": "rmElem",
          "package": "dom-selector",
          "signature": "String -\u003e String -\u003e [String] -\u003e [Node] -\u003e [Node]",
          "source": "src/Text-XML-Scraping.html#rmElem",
          "type": "function"
        },
        "index": {
          "description": "Remove descendant nodes that match specified tag id and class similar to remove but more specific If you pass an empty string to tag or id that does not filter tag or id Read the source code for details rmElem div div-id div-class div-class2 nodes newnodes",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "rmElem",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[Node]-\u003e[Node]",
          "package": "dom-selector",
          "partial": "Elem",
          "signature": "String-\u003eString-\u003e[String]-\u003e[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:rmElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''toHtml'' of the element(s).\n\u003c/p\u003e",
          "module": "Text.XML.Scraping",
          "name": "toHtml",
          "package": "dom-selector",
          "signature": "elem -\u003e Text",
          "source": "src/Text-XML-Scraping.html#toHtml",
          "type": "method"
        },
        "index": {
          "description": "toHtml of the element",
          "hierarchy": "Text XML Scraping",
          "module": "Text.XML.Scraping",
          "name": "toHtml",
          "normalized": "a-\u003eText",
          "package": "dom-selector",
          "partial": "Html",
          "signature": "elem-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Scraping.html#v:toHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Parser",
          "name": "Parser",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Selector Parser",
          "module": "Text.XML.Selector.Parser",
          "name": "Parser",
          "package": "dom-selector",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a jQuery selector string and return a list of \u003ccode\u003e\u003ca\u003eJQSelector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Selector.Parser",
          "name": "parseJQ",
          "package": "dom-selector",
          "signature": "String -\u003e [JQSelector]",
          "source": "src/Text-XML-Selector-Parser.html#parseJQ",
          "type": "function"
        },
        "index": {
          "description": "Parse jQuery selector string and return list of JQSelector",
          "hierarchy": "Text XML Selector Parser",
          "module": "Text.XML.Selector.Parser",
          "name": "parseJQ",
          "normalized": "String-\u003e[JQSelector]",
          "package": "dom-selector",
          "partial": "JQ",
          "signature": "String-\u003e[JQSelector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Parser.html#v:parseJQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.TH",
          "name": "TH",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Selector TH",
          "module": "Text.XML.Selector.TH",
          "name": "TH",
          "package": "dom-selector",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for CSS selector\n\u003c/p\u003e",
          "module": "Text.XML.Selector.TH",
          "name": "jq",
          "package": "dom-selector",
          "signature": "QuasiQuoter",
          "source": "src/Text-XML-Selector-TH.html#jq",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for CSS selector",
          "hierarchy": "Text XML Selector TH",
          "module": "Text.XML.Selector.TH",
          "name": "jq",
          "package": "dom-selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#v:jq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e from jQuery selector QQ.\n\u003c/p\u003e\u003cpre\u003ehtml = innerHtml $ cursor $| queryT [jq| ul.foo \u003e li#bar |]\n\u003c/pre\u003e",
          "module": "Text.XML.Selector.TH",
          "name": "queryT",
          "package": "dom-selector",
          "signature": "[JQSelector] -\u003e Axis",
          "source": "src/Text-XML-Selector-TH.html#queryT",
          "type": "function"
        },
        "index": {
          "description": "Get Axis from jQuery selector QQ html innerHtml cursor queryT jq ul.foo li bar",
          "hierarchy": "Text XML Selector TH",
          "module": "Text.XML.Selector.TH",
          "name": "queryT",
          "normalized": "[JQSelector]-\u003eAxis",
          "package": "dom-selector",
          "signature": "[JQSelector]-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-TH.html#v:queryT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Test",
          "name": "Test",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Selector Test",
          "module": "Text.XML.Selector.Test",
          "name": "Test",
          "package": "dom-selector",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickCheck for a parser.\n\u003c/p\u003e",
          "module": "Text.XML.Selector.Test",
          "name": "prop_parseJQ",
          "package": "dom-selector",
          "signature": "[JQSelector] -\u003e Bool",
          "source": "src/Text-XML-Selector-Test.html#prop_parseJQ",
          "type": "function"
        },
        "index": {
          "description": "QuickCheck for parser",
          "hierarchy": "Text XML Selector Test",
          "module": "Text.XML.Selector.Test",
          "name": "prop_parseJQ",
          "normalized": "[JQSelector]-\u003eBool",
          "package": "dom-selector",
          "partial": "JQ",
          "signature": "[JQSelector]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Test.html#v:prop_parseJQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Types",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Types",
          "package": "dom-selector",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "AttrRel",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "AttrRel",
          "package": "dom-selector",
          "partial": "Attr Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:AttrRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJQSelector represents one token of jquery selector. One JQSelector corresponds to \"div#content\", \"a[href='/index.html']\", etc. You can get a list of JQSelector by \u003ccode\u003eparseJQ\u003c/code\u003e, and show them by \u003ccode\u003eshowJQ\u003c/code\u003e\n As long as you use \u003ccode\u003equery\u003c/code\u003e, you don't need to handle this type directly.\n\u003c/p\u003e",
          "module": "Text.XML.Selector.Types",
          "name": "JQSelector",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "data"
        },
        "index": {
          "description": "JQSelector represents one token of jquery selector One JQSelector corresponds to div content href index.html etc You can get list of JQSelector by parseJQ and show them by showJQ As long as you use query you don need to handle this type directly",
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "JQSelector",
          "package": "dom-selector",
          "partial": "JQSelector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:JQSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelationship to the preceding selector.\n\u003c/p\u003e",
          "module": "Text.XML.Selector.Types",
          "name": "RelPrev",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Types.html#RelPrev",
          "type": "data"
        },
        "index": {
          "description": "Relationship to the preceding selector",
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "RelPrev",
          "package": "dom-selector",
          "partial": "Rel Prev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:RelPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "TagAttr",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector-Types.html#TagAttr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "TagAttr",
          "package": "dom-selector",
          "partial": "Tag Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#t:TagAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Begin",
          "package": "dom-selector",
          "signature": "Begin",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Begin",
          "package": "dom-selector",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Child",
          "package": "dom-selector",
          "signature": "Child",
          "source": "src/Text-XML-Selector-Types.html#RelPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Child",
          "package": "dom-selector",
          "partial": "Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Contains",
          "package": "dom-selector",
          "signature": "Contains",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Contains",
          "package": "dom-selector",
          "partial": "Contains",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "ContainsWord",
          "package": "dom-selector",
          "signature": "ContainsWord",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "ContainsWord",
          "package": "dom-selector",
          "partial": "Contains Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:ContainsWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Descendant",
          "package": "dom-selector",
          "signature": "Descendant",
          "source": "src/Text-XML-Selector-Types.html#RelPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Descendant",
          "package": "dom-selector",
          "partial": "Descendant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "End",
          "package": "dom-selector",
          "signature": "End",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "End",
          "package": "dom-selector",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Equal",
          "package": "dom-selector",
          "signature": "Equal",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Equal",
          "package": "dom-selector",
          "partial": "Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Exists",
          "package": "dom-selector",
          "signature": "Exists",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Exists",
          "package": "dom-selector",
          "partial": "Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "JQSelector",
          "package": "dom-selector",
          "signature": "JQSelector",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "JQSelector",
          "package": "dom-selector",
          "partial": "JQSelector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:JQSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Next",
          "package": "dom-selector",
          "signature": "Next",
          "source": "src/Text-XML-Selector-Types.html#RelPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Next",
          "package": "dom-selector",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "NotEqual",
          "package": "dom-selector",
          "signature": "NotEqual",
          "source": "src/Text-XML-Selector-Types.html#AttrRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "NotEqual",
          "package": "dom-selector",
          "partial": "Not Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:NotEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "Sibling",
          "package": "dom-selector",
          "signature": "Sibling",
          "source": "src/Text-XML-Selector-Types.html#RelPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "Sibling",
          "package": "dom-selector",
          "partial": "Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:Sibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "TagAttr",
          "package": "dom-selector",
          "signature": "TagAttr",
          "source": "src/Text-XML-Selector-Types.html#TagAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "TagAttr",
          "package": "dom-selector",
          "partial": "Tag Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:TagAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "attrName",
          "package": "dom-selector",
          "signature": "String",
          "source": "src/Text-XML-Selector-Types.html#TagAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "attrName",
          "package": "dom-selector",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "attrRel",
          "package": "dom-selector",
          "signature": "AttrRel",
          "source": "src/Text-XML-Selector-Types.html#TagAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "attrRel",
          "package": "dom-selector",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "attrVal",
          "package": "dom-selector",
          "signature": "Maybe String",
          "source": "src/Text-XML-Selector-Types.html#TagAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "attrVal",
          "package": "dom-selector",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:attrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "jqTagAttr",
          "package": "dom-selector",
          "signature": "[TagAttr]",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "jqTagAttr",
          "normalized": "[TagAttr]",
          "package": "dom-selector",
          "partial": "Tag Attr",
          "signature": "[TagAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "jqTagClass",
          "package": "dom-selector",
          "signature": "[String]",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "jqTagClass",
          "normalized": "[String]",
          "package": "dom-selector",
          "partial": "Tag Class",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "jqTagId",
          "package": "dom-selector",
          "signature": "Maybe String",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "jqTagId",
          "package": "dom-selector",
          "partial": "Tag Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "jqTagName",
          "package": "dom-selector",
          "signature": "Maybe String",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "jqTagName",
          "package": "dom-selector",
          "partial": "Tag Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:jqTagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "relPrev",
          "package": "dom-selector",
          "signature": "RelPrev",
          "source": "src/Text-XML-Selector-Types.html#JQSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "relPrev",
          "package": "dom-selector",
          "partial": "Prev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:relPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector.Types",
          "name": "relToStr",
          "package": "dom-selector",
          "signature": "AttrRel -\u003e String",
          "source": "src/Text-XML-Selector-Types.html#relToStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector Types",
          "module": "Text.XML.Selector.Types",
          "name": "relToStr",
          "normalized": "AttrRel-\u003eString",
          "package": "dom-selector",
          "partial": "To Str",
          "signature": "AttrRel-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector-Types.html#v:relToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has query functions for traversing DOM. \u003ccode\u003equeryT\u003c/code\u003e, a quasiquote version, is also available in \u003ca\u003eText.XML.Selector.TH\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Selector",
          "name": "Selector",
          "package": "dom-selector",
          "source": "src/Text-XML-Selector.html",
          "type": "module"
        },
        "index": {
          "description": "This module has query functions for traversing DOM queryT quasiquote version is also available in Text.XML.Selector.TH module",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "Selector",
          "package": "dom-selector",
          "partial": "Selector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAxis for choosing elements by a class\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "byClass",
          "package": "dom-selector",
          "signature": "String -\u003e Axis",
          "source": "src/Text-XML-Selector.html#byClass",
          "type": "function"
        },
        "index": {
          "description": "Axis for choosing elements by class",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "byClass",
          "normalized": "String-\u003eAxis",
          "package": "dom-selector",
          "partial": "Class",
          "signature": "String-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:byClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAxis for choosing elements by an id\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "byId",
          "package": "dom-selector",
          "signature": "String -\u003e Axis",
          "source": "src/Text-XML-Selector.html#byId",
          "type": "function"
        },
        "index": {
          "description": "Axis for choosing elements by an id",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "byId",
          "normalized": "String-\u003eAxis",
          "package": "dom-selector",
          "partial": "Id",
          "signature": "String-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:byId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector",
          "name": "headm",
          "package": "dom-selector",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Text-XML-Selector.html#headm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "headm",
          "normalized": "[a]-\u003eMaybe a",
          "package": "dom-selector",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:headm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector",
          "name": "maybeText",
          "package": "dom-selector",
          "signature": "Text -\u003e Maybe Text",
          "source": "src/Text-XML-Selector.html#maybeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "maybeText",
          "normalized": "Text-\u003eMaybe Text",
          "package": "dom-selector",
          "partial": "Text",
          "signature": "Text-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:maybeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the next sibling. Note that this is not a Axis.\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "next",
          "package": "dom-selector",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Selector.html#next",
          "type": "function"
        },
        "index": {
          "description": "Gets the next sibling Note that this is not Axis",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "next",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "dom-selector",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e from jQuery selector string.\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "query",
          "package": "dom-selector",
          "signature": "String -\u003e Axis",
          "source": "src/Text-XML-Selector.html#query",
          "type": "function"
        },
        "index": {
          "description": "Get Axis from jQuery selector string",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "query",
          "normalized": "String-\u003eAxis",
          "package": "dom-selector",
          "signature": "String-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn Just (the first element of query results). If no element matches, it returns Nothing.\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "query1",
          "package": "dom-selector",
          "signature": "String -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Selector.html#query1",
          "type": "function"
        },
        "index": {
          "description": "Return Just the first element of query results If no element matches it returns Nothing",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "query1",
          "normalized": "String-\u003eCursor-\u003eMaybe Cursor",
          "package": "dom-selector",
          "signature": "String-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:query1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn if a node matches a selector given by string\n |Only first token is used (i.e. no hierarchy is enabled.)\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "queryMatchNode",
          "package": "dom-selector",
          "signature": "String -\u003e Node -\u003e Bool",
          "source": "src/Text-XML-Selector.html#queryMatchNode",
          "type": "function"
        },
        "index": {
          "description": "Return if node matches selector given by string Only first token is used i.e no hierarchy is enabled",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "queryMatchNode",
          "normalized": "String-\u003eNode-\u003eBool",
          "package": "dom-selector",
          "partial": "Match Node",
          "signature": "String-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:queryMatchNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Selector",
          "name": "searchTree",
          "package": "dom-selector",
          "signature": "[JQSelector] -\u003e Axis",
          "source": "src/Text-XML-Selector.html#searchTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "searchTree",
          "normalized": "[JQSelector]-\u003eAxis",
          "package": "dom-selector",
          "partial": "Tree",
          "signature": "[JQSelector]-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:searchTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn if an element matches a selector\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "selectorMatch",
          "package": "dom-selector",
          "signature": "JQSelector -\u003e Element -\u003e Bool",
          "source": "src/Text-XML-Selector.html#selectorMatch",
          "type": "function"
        },
        "index": {
          "description": "Return if an element matches selector",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "selectorMatch",
          "normalized": "JQSelector-\u003eElement-\u003eBool",
          "package": "dom-selector",
          "partial": "Match",
          "signature": "JQSelector-\u003eElement-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:selectorMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a parsed selector.\n (parseJQ . showJQ) == id\n\u003c/p\u003e",
          "module": "Text.XML.Selector",
          "name": "showJQ",
          "package": "dom-selector",
          "signature": "[JQSelector] -\u003e String",
          "source": "src/Text-XML-Selector.html#showJQ",
          "type": "function"
        },
        "index": {
          "description": "Show parsed selector parseJQ showJQ id",
          "hierarchy": "Text XML Selector",
          "module": "Text.XML.Selector",
          "name": "showJQ",
          "normalized": "[JQSelector]-\u003eString",
          "package": "dom-selector",
          "partial": "JQ",
          "signature": "[JQSelector]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-selector/docs/Text-XML-Selector.html#v:showJQ"
      }
    }
  ]
]