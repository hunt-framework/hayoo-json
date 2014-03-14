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
        "word": "xmlhtml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRenderer that supports rendering to xmlhtml forests.  This is a port of\n the Hexpat renderer.\n\u003c/p\u003e\u003cp\u003eWarning: because this renderer doesn't directly create the output, but\n rather an XML tree representation, it is impossible to render pre-escaped\n text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "XmlHtml",
          "package": "xmlhtml",
          "source": "src/Text-Blaze-Renderer-XmlHtml.html",
          "type": "module"
        },
        "index": {
          "description": "Renderer that supports rendering to xmlhtml forests This is port of the Hexpat renderer Warning because this renderer doesn directly create the output but rather an XML tree representation it is impossible to render pre-escaped text",
          "hierarchy": "Text Blaze Renderer XmlHtml",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "XmlHtml",
          "package": "xmlhtml",
          "partial": "Xml Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-Blaze-Renderer-XmlHtml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender HTML to an xmlhtml \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "renderHtml",
          "package": "xmlhtml",
          "signature": "Html -\u003e Document",
          "source": "src/Text-Blaze-Renderer-XmlHtml.html#renderHtml",
          "type": "function"
        },
        "index": {
          "description": "Render HTML to an xmlhtml Document",
          "hierarchy": "Text Blaze Renderer XmlHtml",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "renderHtml",
          "normalized": "Html-\u003eDocument",
          "package": "xmlhtml",
          "partial": "Html",
          "signature": "Html-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-Blaze-Renderer-XmlHtml.html#v:renderHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender HTML to a list of xmlhtml nodes\n\u003c/p\u003e",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "renderHtmlNodes",
          "package": "xmlhtml",
          "signature": "Html -\u003e [Node]",
          "source": "src/Text-Blaze-Renderer-XmlHtml.html#renderHtmlNodes",
          "type": "function"
        },
        "index": {
          "description": "Render HTML to list of xmlhtml nodes",
          "hierarchy": "Text Blaze Renderer XmlHtml",
          "module": "Text.Blaze.Renderer.XmlHtml",
          "name": "renderHtmlNodes",
          "normalized": "Html-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Html Nodes",
          "signature": "Html-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-Blaze-Renderer-XmlHtml.html#v:renderHtmlNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA zipper for navigating and modifying XML trees.  This is nearly the\n same exposed interface as the \u003ccode\u003exml\u003c/code\u003e package in \u003ccode\u003eText.XML.Light.Cursor\u003c/code\u003e,\n with modifications as needed to adapt to different types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "Cursor",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "zipper for navigating and modifying XML trees This is nearly the same exposed interface as the xml package in Text.XML.Light.Cursor with modifications as needed to adapt to different types",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "Cursor",
          "package": "xmlhtml",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA zipper for XML document forests.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "Cursor",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Cursor.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "zipper for XML document forests",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "Cursor",
          "package": "xmlhtml",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the current node of a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "current",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Node",
          "source": "src/Text-XmlHtml-Cursor.html#current",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the current node of Cursor",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "current",
          "normalized": "Cursor-\u003eNode",
          "package": "xmlhtml",
          "signature": "Cursor-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to the first child that matches the predicate.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "findChild",
          "package": "xmlhtml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#findChild",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor to the first child that matches the predicate",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "findChild",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Child",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:findChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to the nearest left sibling that matches a\n predicate.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "findLeft",
          "package": "xmlhtml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#findLeft",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor to the nearest left sibling that matches predicate",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "findLeft",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Left",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:findLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a depth-first search for a descendant matching the predicate.  This\n can match the current cursor position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "findRec",
          "package": "xmlhtml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#findRec",
          "type": "function"
        },
        "index": {
          "description": "Does depth-first search for descendant matching the predicate This can match the current cursor position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "findRec",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Rec",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:findRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to the nearest right sibling that matches a\n predicate.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "findRight",
          "package": "xmlhtml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#findRight",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor to the nearest right sibling that matches predicate",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "findRight",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Right",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:findRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e down to its first child.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "firstChild",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#firstChild",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor down to its first child",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "firstChild",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Child",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:firstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e for navigating a tree. That is, a forest with a single\n root \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "fromNode",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#fromNode",
          "type": "function"
        },
        "index": {
          "description": "Builds Cursor for navigating tree That is forest with single root Node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "fromNode",
          "normalized": "Node-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Node",
          "signature": "Node-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:fromNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e for navigating a forest with the given list of roots.\n The cursor is initially positioned at the left-most node.  Gives \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if the list is empty.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "fromNodes",
          "package": "xmlhtml",
          "signature": "[Node] -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#fromNodes",
          "type": "function"
        },
        "index": {
          "description": "Builds Cursor for navigating forest with the given list of roots The cursor is initially positioned at the left-most node Gives Nothing if the list is empty",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "fromNodes",
          "normalized": "[Node]-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Nodes",
          "signature": "[Node]-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:fromNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e down to the indicated child index.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "getChild",
          "package": "xmlhtml",
          "signature": "Int -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#getChild",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor down to the indicated child index",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "getChild",
          "normalized": "Int-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Child",
          "signature": "Int-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:getChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the index of the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e among its siblings.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "getNodeIndex",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Int",
          "source": "src/Text-XmlHtml-Cursor.html#getNodeIndex",
          "type": "function"
        },
        "index": {
          "description": "Gets the index of the Cursor among its siblings",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "getNodeIndex",
          "normalized": "Cursor-\u003eInt",
          "package": "xmlhtml",
          "partial": "Node Index",
          "signature": "Cursor-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:getNodeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a non-leaf node (i.e., if it has\n children).\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "hasChildren",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#hasChildren",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at non-leaf node i.e if it has children",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "hasChildren",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "Children",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:hasChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e as the first child of the current element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertFirstChild",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertFirstChild",
          "type": "function"
        },
        "index": {
          "description": "Inserts Node as the first child of the current element",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertFirstChild",
          "normalized": "Node-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "First Child",
          "signature": "Node-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertFirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the left of the current position, and moves\n left to the new node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertGoLeft",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Inserts new Node to the left of the current position and moves left to the new node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertGoLeft",
          "normalized": "Node-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Go Left",
          "signature": "Node-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the right of the current position, and moves\n right to the new node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertGoRight",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertGoRight",
          "type": "function"
        },
        "index": {
          "description": "Inserts new Node to the right of the current position and moves right to the new node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertGoRight",
          "normalized": "Node-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Go Right",
          "signature": "Node-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e as the last child of the current element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertLastChild",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertLastChild",
          "type": "function"
        },
        "index": {
          "description": "Inserts Node as the last child of the current element",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertLastChild",
          "normalized": "Node-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Last Child",
          "signature": "Node-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the left of the current position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertLeft",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertLeft",
          "type": "function"
        },
        "index": {
          "description": "Inserts new Node to the left of the current position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertLeft",
          "normalized": "Node-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Left",
          "signature": "Node-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es as the first children of the current element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyFirstChild",
          "package": "xmlhtml",
          "signature": "[Node] -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertManyFirstChild",
          "type": "function"
        },
        "index": {
          "description": "Inserts list of Node as the first children of the current element",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyFirstChild",
          "normalized": "[Node]-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Many First Child",
          "signature": "[Node]-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertManyFirstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a list of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es as the last children of the current element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyLastChild",
          "package": "xmlhtml",
          "signature": "[Node] -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertManyLastChild",
          "type": "function"
        },
        "index": {
          "description": "Inserts list of Node as the last children of the current element",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyLastChild",
          "normalized": "[Node]-\u003eCursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Many Last Child",
          "signature": "[Node]-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertManyLastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a list of new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es to the left of the current position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyLeft",
          "package": "xmlhtml",
          "signature": "[Node] -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertManyLeft",
          "type": "function"
        },
        "index": {
          "description": "Inserts list of new Node to the left of the current position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyLeft",
          "normalized": "[Node]-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Many Left",
          "signature": "[Node]-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertManyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a list of new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es to the right of the current position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyRight",
          "package": "xmlhtml",
          "signature": "[Node] -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertManyRight",
          "type": "function"
        },
        "index": {
          "description": "Inserts list of new Node to the right of the current position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertManyRight",
          "normalized": "[Node]-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Many Right",
          "signature": "[Node]-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertManyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the right of the current position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertRight",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#insertRight",
          "type": "function"
        },
        "index": {
          "description": "Inserts new Node to the right of the current position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "insertRight",
          "normalized": "Node-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Right",
          "signature": "Node-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:insertRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a child node (i.e., if it has a parent).\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "isChild",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#isChild",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at child node i.e if it has parent",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "isChild",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "Child",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:isChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a first child.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "isFirst",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#isFirst",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at first child",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "isFirst",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "First",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:isFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a last child.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "isLast",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#isLast",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at last child",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "isLast",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "Last",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:isLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a leaf node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "isLeaf",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at leaf node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "isLeaf",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "Leaf",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is at a root node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "isRoot",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XmlHtml-Cursor.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Determines if the Cursor is at root node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "isRoot",
          "normalized": "Cursor-\u003eBool",
          "package": "xmlhtml",
          "partial": "Root",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e down to its last child.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "lastChild",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#lastChild",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor down to its last child",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "lastChild",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Child",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:lastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to its left sibling.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "left",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#left",
          "type": "function"
        },
        "index": {
          "description": "Moves Cursor to its left sibling",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "left",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current node by applying a function.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "modifyNode",
          "package": "xmlhtml",
          "signature": "(Node -\u003e Node) -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#modifyNode",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current node by applying function",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "modifyNode",
          "normalized": "(Node-\u003eNode)-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Node",
          "signature": "(Node-\u003eNode)-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:modifyNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the current node by applying an action in some functor.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "modifyNodeM",
          "package": "xmlhtml",
          "signature": "(Node -\u003e m Node) -\u003e Cursor -\u003e m Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#modifyNodeM",
          "type": "function"
        },
        "index": {
          "description": "Modifies the current node by applying an action in some functor",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "modifyNodeM",
          "normalized": "(Node-\u003ea Node)-\u003eCursor-\u003ea Cursor",
          "package": "xmlhtml",
          "partial": "Node",
          "signature": "(Node-\u003em Node)-\u003eCursor-\u003em Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:modifyNodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to the next node encountered in a depth-first search.\n If it has children, this is equivalent to \u003ccode\u003e\u003ca\u003efirstChild\u003c/a\u003e\u003c/code\u003e.  Otherwise, if it\n has a right sibling, then this is equivalent to \u003ccode\u003e\u003ca\u003eright\u003c/a\u003e\u003c/code\u003e.  Otherwise, the\n cursor moves to the first right sibling of one of its parents.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "nextDF",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#nextDF",
          "type": "function"
        },
        "index": {
          "description": "Moves Cursor to the next node encountered in depth-first search If it has children this is equivalent to firstChild Otherwise if it has right sibling then this is equivalent to right Otherwise the cursor moves to the first right sibling of one of its parents",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "nextDF",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "DF",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:nextDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to its parent in the document.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "parent",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#parent",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor to its parent in the document",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "parent",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the current \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, and moves the Cursor to its left sibling,\n if any.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoLeft",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#removeGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Removes the current Node and moves the Cursor to its left sibling if any",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoLeft",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Go Left",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:removeGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the current \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, and moves the Cursor to its right sibling,\n if any.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoRight",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#removeGoRight",
          "type": "function"
        },
        "index": {
          "description": "Removes the current Node and moves the Cursor to its right sibling if any",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoRight",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Go Right",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:removeGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the current \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, and moves the Cursor to its parent, if any.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoUp",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#removeGoUp",
          "type": "function"
        },
        "index": {
          "description": "Removes the current Node and moves the Cursor to its parent if any",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeGoUp",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "partial": "Go Up",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:removeGoUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the left of the current position, if any.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeLeft",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe (Node, Cursor)",
          "source": "src/Text-XmlHtml-Cursor.html#removeLeft",
          "type": "function"
        },
        "index": {
          "description": "Removes the Node to the left of the current position if any",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeLeft",
          "normalized": "Cursor-\u003eMaybe(Node,Cursor)",
          "package": "xmlhtml",
          "partial": "Left",
          "signature": "Cursor-\u003eMaybe(Node,Cursor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:removeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to the right of the current position, if any.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeRight",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe (Node, Cursor)",
          "source": "src/Text-XmlHtml-Cursor.html#removeRight",
          "type": "function"
        },
        "index": {
          "description": "Removes the Node to the right of the current position if any",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "removeRight",
          "normalized": "Cursor-\u003eMaybe(Node,Cursor)",
          "package": "xmlhtml",
          "partial": "Right",
          "signature": "Cursor-\u003eMaybe(Node,Cursor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:removeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e to its right sibling.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "right",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#right",
          "type": "function"
        },
        "index": {
          "description": "Moves Cursor to its right sibling",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "right",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xmlhtml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNavigates a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e up through parents to reach the root level.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "root",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#root",
          "type": "function"
        },
        "index": {
          "description": "Navigates Cursor up through parents to reach the root level",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "root",
          "normalized": "Cursor-\u003eCursor",
          "package": "xmlhtml",
          "signature": "Cursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the current node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "setNode",
          "package": "xmlhtml",
          "signature": "Node -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XmlHtml-Cursor.html#setNode",
          "type": "function"
        },
        "index": {
          "description": "Replaces the current node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "setNode",
          "normalized": "Node-\u003eCursor-\u003eCursor",
          "package": "xmlhtml",
          "partial": "Node",
          "signature": "Node-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:setNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a list of the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es at the same level as the current position\n of a cursor, including the current node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "siblings",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e [Node]",
          "source": "src/Text-XmlHtml-Cursor.html#siblings",
          "type": "function"
        },
        "index": {
          "description": "Retrieves list of the Node at the same level as the current position of cursor including the current node",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "siblings",
          "normalized": "Cursor-\u003e[Node]",
          "package": "xmlhtml",
          "signature": "Cursor-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:siblings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the root node containing the current cursor position.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "topNode",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e Node",
          "source": "src/Text-XmlHtml-Cursor.html#topNode",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the root node containing the current cursor position",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "topNode",
          "normalized": "Cursor-\u003eNode",
          "package": "xmlhtml",
          "partial": "Node",
          "signature": "Cursor-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:topNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the entire forest of \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es corresponding to a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.Cursor",
          "name": "topNodes",
          "package": "xmlhtml",
          "signature": "Cursor -\u003e [Node]",
          "source": "src/Text-XmlHtml-Cursor.html#topNodes",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the entire forest of Node corresponding to Cursor",
          "hierarchy": "Text XmlHtml Cursor",
          "module": "Text.XmlHtml.Cursor",
          "name": "topNodes",
          "normalized": "Cursor-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Nodes",
          "signature": "Cursor-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-Cursor.html#v:topNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "Meta",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-HTML-Meta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "Meta",
          "package": "xmlhtml",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of elements with omittable end tags.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "endOmittableLast",
          "package": "xmlhtml",
          "signature": "HashSet Text",
          "source": "src/Text-XmlHtml-HTML-Meta.html#endOmittableLast",
          "type": "function"
        },
        "index": {
          "description": "List of elements with omittable end tags",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "endOmittableLast",
          "package": "xmlhtml",
          "partial": "Omittable Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:endOmittableLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags which should be considered automatically ended in case one of a\n certain set of tags pops up.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "endOmittableNext",
          "package": "xmlhtml",
          "signature": "HashMap Text (HashSet Text)",
          "source": "src/Text-XmlHtml-HTML-Meta.html#endOmittableNext",
          "type": "function"
        },
        "index": {
          "description": "Tags which should be considered automatically ended in case one of certain set of tags pops up",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "endOmittableNext",
          "package": "xmlhtml",
          "partial": "Omittable Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:endOmittableNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether a tag should be treated as raw text.  Raw text elements\n are not allowed to have any other tags in them.  This is necessary to\n support the Javascript less than operator inside a script tag, for example.\n\u003c/p\u003e\u003cp\u003eIf a tag is in the \u003ccode\u003e\u003ca\u003erawTextTags\u003c/a\u003e\u003c/code\u003e set, this function allows you to override\n that behavior by adding the \u003ccode\u003exmlhtmlNotRaw\u003c/code\u003e attribute.  Conversely, if a\n tag is not in the \u003ccode\u003e\u003ca\u003erawTextTags\u003c/a\u003e\u003c/code\u003e set, this function allows you to override\n that by adding the \u003ccode\u003exmlhtmlRaw\u003c/code\u003e attribute to the tag.\n\u003c/p\u003e\u003cp\u003eThis is the function that is actually used in the parser and renderer.\n \u003ccode\u003e\u003ca\u003erawTextTags\u003c/a\u003e\u003c/code\u003e is not used any more, but is still provided for backwards\n compatibility and to let you see which tags are treated as raw by default.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "isRawText",
          "package": "xmlhtml",
          "signature": "Text -\u003e [(Text, Text)] -\u003e Bool",
          "source": "src/Text-XmlHtml-HTML-Meta.html#isRawText",
          "type": "function"
        },
        "index": {
          "description": "Determine whether tag should be treated as raw text Raw text elements are not allowed to have any other tags in them This is necessary to support the Javascript less than operator inside script tag for example If tag is in the rawTextTags set this function allows you to override that behavior by adding the xmlhtmlNotRaw attribute Conversely if tag is not in the rawTextTags set this function allows you to override that by adding the xmlhtmlRaw attribute to the tag This is the function that is actually used in the parser and renderer rawTextTags is not used any more but is still provided for backwards compatibility and to let you see which tags are treated as raw by default",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "isRawText",
          "normalized": "Text-\u003e[(Text,Text)]-\u003eBool",
          "package": "xmlhtml",
          "partial": "Raw Text",
          "signature": "Text-\u003e[(Text,Text)]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:isRawText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredefined character entity references as defined by the HTML5 spec.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "predefinedRefs",
          "package": "xmlhtml",
          "signature": "HashMap Text Text",
          "source": "src/Text-XmlHtml-HTML-Meta.html#predefinedRefs",
          "type": "function"
        },
        "index": {
          "description": "Predefined character entity references as defined by the HTML5 spec",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "predefinedRefs",
          "package": "xmlhtml",
          "partial": "Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:predefinedRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElements that XmlHtml treats as raw text by default.  Raw text elements\n are not allowed to have any other tags in them.  This is necessary to\n support the Javascript less than operator inside a script tag, for example.\n\u003c/p\u003e\u003cp\u003eThe library uses the \u003ccode\u003e\u003ca\u003eisRawText\u003c/a\u003e\u003c/code\u003e function everywhere instead of checking\n this set directly because that gives us an escape hatch to avoid the\n default behavior if necessary.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "rawTextTags",
          "package": "xmlhtml",
          "signature": "HashSet Text",
          "source": "src/Text-XmlHtml-HTML-Meta.html#rawTextTags",
          "type": "function"
        },
        "index": {
          "description": "Elements that XmlHtml treats as raw text by default Raw text elements are not allowed to have any other tags in them This is necessary to support the Javascript less than operator inside script tag for example The library uses the isRawText function everywhere instead of checking this set directly because that gives us an escape hatch to avoid the default behavior if necessary",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "rawTextTags",
          "package": "xmlhtml",
          "partial": "Text Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:rawTextTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoid elements as defined by the HTML5 spec.\n\u003c/p\u003e",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "voidTags",
          "package": "xmlhtml",
          "signature": "HashSet Text",
          "source": "src/Text-XmlHtml-HTML-Meta.html#voidTags",
          "type": "function"
        },
        "index": {
          "description": "Void elements as defined by the HTML5 spec",
          "hierarchy": "Text XmlHtml HTML Meta",
          "module": "Text.XmlHtml.HTML.Meta",
          "name": "voidTags",
          "package": "xmlhtml",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml-HTML-Meta.html#v:voidTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsers and renderers for XML and HTML 5.  Although the formats are\n   treated differently, the data types used by each are the same, which\n   makes it easy to write code that works with the element structure of\n   either XML or HTML 5 documents.\n\u003c/p\u003e\u003cp\u003eLimitations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The XML parser does not parse internal DOCTYPE subsets.  They are just\n     stored as blocks of text, with minimal scanning done to match quotes\n     and brackets to determine the end.\n\u003c/li\u003e\u003cli\u003e Since DTDs are not parsed, the XML parser fails on entity references,\n     except for those defined internally.  You cannot use this library for\n     parsing XML documents with entity references outside the predefined\n     set.\n\u003c/li\u003e\u003cli\u003e The HTML 5 parser is not a compliant HTML parser.  Instead, it is a\n     parser for valid HTML 5 content.  It should only be used on content\n     that you have reason to believe is probably correct, since the\n     compatibility features of HTML 5 are missing.  This is the wrong\n     library on which to build a web spider.\n\u003c/li\u003e\u003cli\u003e Both parsers accept fragments of documents, by which is meant that\n     they do not enforce the top-level structure of the document.  Files\n     may contain more than one root element, for example.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.XmlHtml",
          "name": "XmlHtml",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml.html",
          "type": "module"
        },
        "index": {
          "description": "Parsers and renderers for XML and HTML Although the formats are treated differently the data types used by each are the same which makes it easy to write code that works with the element structure of either XML or HTML documents Limitations The XML parser does not parse internal DOCTYPE subsets They are just stored as blocks of text with minimal scanning done to match quotes and brackets to determine the end Since DTDs are not parsed the XML parser fails on entity references except for those defined internally You cannot use this library for parsing XML documents with entity references outside the predefined set The HTML parser is not compliant HTML parser Instead it is parser for valid HTML content It should only be used on content that you have reason to believe is probably correct since the compatibility features of HTML are missing This is the wrong library on which to build web spider Both parsers accept fragments of documents by which is meant that they do not enforce the top-level structure of the document Files may contain more than one root element for example",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "XmlHtml",
          "package": "xmlhtml",
          "partial": "Xml Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document type declaration.  Note that DTD internal subsets are\n currently unimplemented.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "DocType",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#DocType",
          "type": "data"
        },
        "index": {
          "description": "document type declaration Note that DTD internal subsets are currently unimplemented",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "DocType",
          "package": "xmlhtml",
          "partial": "Doc Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:DocType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a document fragment, including the format, encoding, and\n document type declaration as well as its content.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "Document",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "data"
        },
        "index": {
          "description": "Represents document fragment including the format encoding and document type declaration as well as its content",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Document",
          "package": "xmlhtml",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character encoding of a document.  Currently only the required\n character encodings are implemented.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "Encoding",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#Encoding",
          "type": "data"
        },
        "index": {
          "description": "The character encoding of document Currently only the required character encodings are implemented",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Encoding",
          "package": "xmlhtml",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn external ID, as in a document type declaration.  This can be a\n SYSTEM identifier, or a PUBLIC identifier, or can be omitted.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "ExternalID",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#ExternalID",
          "type": "data"
        },
        "index": {
          "description": "An external ID as in document type declaration This can be SYSTEM identifier or PUBLIC identifier or can be omitted",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "ExternalID",
          "package": "xmlhtml",
          "partial": "External ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:ExternalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal subset is unparsed, but preserved in case it's actually\n wanted.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "InternalSubset",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#InternalSubset",
          "type": "data"
        },
        "index": {
          "description": "The internal subset is unparsed but preserved in case it actually wanted",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "InternalSubset",
          "package": "xmlhtml",
          "partial": "Internal Subset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:InternalSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node of a document structure.  A node can be text, a comment, or an\n element.  XML processing instructions are intentionally omitted as a\n simplification, and CDATA and plain text are both text nodes, since they\n ought to be semantically interchangeable.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "Node",
          "package": "xmlhtml",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "data"
        },
        "index": {
          "description": "node of document structure node can be text comment or an element XML processing instructions are intentionally omitted as simplification and CDATA and plain text are both text nodes since they ought to be semantically interchangeable",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Node",
          "package": "xmlhtml",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "Comment",
          "package": "xmlhtml",
          "signature": "Comment !Text",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Comment",
          "package": "xmlhtml",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "DocType",
          "package": "xmlhtml",
          "signature": "DocType !Text !ExternalID !InternalSubset",
          "source": "src/Text-XmlHtml-Common.html#DocType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "DocType",
          "package": "xmlhtml",
          "partial": "Doc Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:DocType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "Element",
          "package": "xmlhtml",
          "signature": "Element",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Element",
          "package": "xmlhtml",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "HtmlDocument",
          "package": "xmlhtml",
          "signature": "HtmlDocument",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "HtmlDocument",
          "package": "xmlhtml",
          "partial": "Html Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:HtmlDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "InternalText",
          "package": "xmlhtml",
          "signature": "InternalText !Text",
          "source": "src/Text-XmlHtml-Common.html#InternalSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "InternalText",
          "package": "xmlhtml",
          "partial": "Internal Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:InternalText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "NoExternalID",
          "package": "xmlhtml",
          "signature": "NoExternalID",
          "source": "src/Text-XmlHtml-Common.html#ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "NoExternalID",
          "package": "xmlhtml",
          "partial": "No External ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:NoExternalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "NoInternalSubset",
          "package": "xmlhtml",
          "signature": "NoInternalSubset",
          "source": "src/Text-XmlHtml-Common.html#InternalSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "NoInternalSubset",
          "package": "xmlhtml",
          "partial": "No Internal Subset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:NoInternalSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "Public",
          "package": "xmlhtml",
          "signature": "Public !Text !Text",
          "source": "src/Text-XmlHtml-Common.html#ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "Public",
          "package": "xmlhtml",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:Public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "System",
          "package": "xmlhtml",
          "signature": "System !Text",
          "source": "src/Text-XmlHtml-Common.html#ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "System",
          "package": "xmlhtml",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "TextNode",
          "package": "xmlhtml",
          "signature": "TextNode !Text",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "TextNode",
          "package": "xmlhtml",
          "partial": "Text Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:TextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "UTF16BE",
          "package": "xmlhtml",
          "signature": "UTF16BE",
          "source": "src/Text-XmlHtml-Common.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "UTF16BE",
          "package": "xmlhtml",
          "partial": "UTF BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:UTF16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "UTF16LE",
          "package": "xmlhtml",
          "signature": "UTF16LE",
          "source": "src/Text-XmlHtml-Common.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "UTF16LE",
          "package": "xmlhtml",
          "partial": "UTF LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:UTF16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "UTF8",
          "package": "xmlhtml",
          "signature": "UTF8",
          "source": "src/Text-XmlHtml-Common.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "UTF8",
          "package": "xmlhtml",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "XmlDocument",
          "package": "xmlhtml",
          "signature": "XmlDocument",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "XmlDocument",
          "package": "xmlhtml",
          "partial": "Xml Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:XmlDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the first child element of the node with the given tag name,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such child element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "childElementTag",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e Maybe Node",
          "source": "src/Text-XmlHtml-Common.html#childElementTag",
          "type": "function"
        },
        "index": {
          "description": "Gives the first child element of the node with the given tag name or Nothing if there is no such child element",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "childElementTag",
          "normalized": "Text-\u003eNode-\u003eMaybe Node",
          "package": "xmlhtml",
          "partial": "Element Tag",
          "signature": "Text-\u003eNode-\u003eMaybe Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:childElementTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the child elements of the given node.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "childElements",
          "package": "xmlhtml",
          "signature": "Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#childElements",
          "type": "function"
        },
        "index": {
          "description": "Gives the child elements of the given node",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "childElements",
          "normalized": "Node-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Elements",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:childElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives all of the child elements of the node with the given tag\n name.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "childElementsTag",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#childElementsTag",
          "type": "function"
        },
        "index": {
          "description": "Gives all of the child elements of the node with the given tag name",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "childElementsTag",
          "normalized": "Text-\u003eNode-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Elements Tag",
          "signature": "Text-\u003eNode-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:childElementsTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the child nodes of the given node.  Only elements have child nodes.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "childNodes",
          "package": "xmlhtml",
          "signature": "Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#childNodes",
          "type": "function"
        },
        "index": {
          "description": "Gives the child nodes of the given node Only elements have child nodes",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "childNodes",
          "normalized": "Node-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Nodes",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:childNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the first descendant element of the node with the given tag name,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "descendantElementTag",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e Maybe Node",
          "source": "src/Text-XmlHtml-Common.html#descendantElementTag",
          "type": "function"
        },
        "index": {
          "description": "Gives the first descendant element of the node with the given tag name or Nothing if there is no such element",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "descendantElementTag",
          "normalized": "Text-\u003eNode-\u003eMaybe Node",
          "package": "xmlhtml",
          "partial": "Element Tag",
          "signature": "Text-\u003eNode-\u003eMaybe Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:descendantElementTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the descendant elements of the given node, in the order that their\n start tags appear in the document.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "descendantElements",
          "package": "xmlhtml",
          "signature": "Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#descendantElements",
          "type": "function"
        },
        "index": {
          "description": "Gives the descendant elements of the given node in the order that their start tags appear in the document",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "descendantElements",
          "normalized": "Node-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Elements",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:descendantElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the descendant elements with a given tag name.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "descendantElementsTag",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#descendantElementsTag",
          "type": "function"
        },
        "index": {
          "description": "Gives the descendant elements with given tag name",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "descendantElementsTag",
          "normalized": "Text-\u003eNode-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Elements Tag",
          "signature": "Text-\u003eNode-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:descendantElementsTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the descendants of the given node in the order that they begin in\n the document.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "descendantNodes",
          "package": "xmlhtml",
          "signature": "Node -\u003e [Node]",
          "source": "src/Text-XmlHtml-Common.html#descendantNodes",
          "type": "function"
        },
        "index": {
          "description": "Gives the descendants of the given node in the order that they begin in the document",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "descendantNodes",
          "normalized": "Node-\u003e[Node]",
          "package": "xmlhtml",
          "partial": "Nodes",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:descendantNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "docContent",
          "package": "xmlhtml",
          "signature": "[Node]",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "docContent",
          "normalized": "[Node]",
          "package": "xmlhtml",
          "partial": "Content",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:docContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "docEncoding",
          "package": "xmlhtml",
          "signature": "Encoding",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "docEncoding",
          "package": "xmlhtml",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:docEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "docType",
          "package": "xmlhtml",
          "signature": "(Maybe DocType)",
          "source": "src/Text-XmlHtml-Common.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "docType",
          "package": "xmlhtml",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:docType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "elementAttrs",
          "package": "xmlhtml",
          "signature": "[(Text, Text)]",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "elementAttrs",
          "normalized": "[(Text,Text)]",
          "package": "xmlhtml",
          "partial": "Attrs",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:elementAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "elementChildren",
          "package": "xmlhtml",
          "signature": "[Node]",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "elementChildren",
          "normalized": "[Node]",
          "package": "xmlhtml",
          "partial": "Children",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:elementChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "elementTag",
          "package": "xmlhtml",
          "signature": "Text",
          "source": "src/Text-XmlHtml-Common.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "elementTag",
          "package": "xmlhtml",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:elementTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the attribute with the given name.  If the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is not an\n element, the result is always \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "getAttribute",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e Maybe Text",
          "source": "src/Text-XmlHtml-Common.html#getAttribute",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the attribute with the given name If the Node is not an element the result is always Nothing",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "getAttribute",
          "normalized": "Text-\u003eNode-\u003eMaybe Text",
          "package": "xmlhtml",
          "partial": "Attribute",
          "signature": "Text-\u003eNode-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:getAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if a given attribute exists in a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "hasAttribute",
          "package": "xmlhtml",
          "signature": "Text -\u003e Node -\u003e Bool",
          "source": "src/Text-XmlHtml-Common.html#hasAttribute",
          "type": "function"
        },
        "index": {
          "description": "Checks if given attribute exists in Node",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "hasAttribute",
          "normalized": "Text-\u003eNode-\u003eBool",
          "package": "xmlhtml",
          "partial": "Attribute",
          "signature": "Text-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:hasAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the node is a comment or not.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "isComment",
          "package": "xmlhtml",
          "signature": "Node -\u003e Bool",
          "source": "src/Text-XmlHtml-Common.html#isComment",
          "type": "function"
        },
        "index": {
          "description": "Determines whether the node is comment or not",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "isComment",
          "normalized": "Node-\u003eBool",
          "package": "xmlhtml",
          "partial": "Comment",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the node is an element or not.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "isElement",
          "package": "xmlhtml",
          "signature": "Node -\u003e Bool",
          "source": "src/Text-XmlHtml-Common.html#isElement",
          "type": "function"
        },
        "index": {
          "description": "Determines whether the node is an element or not",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "isElement",
          "normalized": "Node-\u003eBool",
          "package": "xmlhtml",
          "partial": "Element",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:isElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the node is text or not.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "isTextNode",
          "package": "xmlhtml",
          "signature": "Node -\u003e Bool",
          "source": "src/Text-XmlHtml-Common.html#isTextNode",
          "type": "function"
        },
        "index": {
          "description": "Determines whether the node is text or not",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "isTextNode",
          "normalized": "Node-\u003eBool",
          "package": "xmlhtml",
          "partial": "Text Node",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:isTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the entire text content of a node, ignoring markup.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "nodeText",
          "package": "xmlhtml",
          "signature": "Node -\u003e Text",
          "source": "src/Text-XmlHtml-Common.html#nodeText",
          "type": "function"
        },
        "index": {
          "description": "Gives the entire text content of node ignoring markup",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "nodeText",
          "normalized": "Node-\u003eText",
          "package": "xmlhtml",
          "partial": "Text",
          "signature": "Node-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:nodeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the given HTML fragment.  This enables HTML quirks mode, which\n   changes the parsing algorithm to parse valid HTML 5 documents correctly.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "parseHTML",
          "package": "xmlhtml",
          "signature": "String-\u003e ByteString-\u003e Either String Document",
          "type": "function"
        },
        "index": {
          "description": "Parses the given HTML fragment This enables HTML quirks mode which changes the parsing algorithm to parse valid HTML documents correctly",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "parseHTML",
          "normalized": "String-\u003eByteString-\u003eEither String Document",
          "package": "xmlhtml",
          "partial": "HTML",
          "signature": "String-\u003eByteString-\u003eEither String Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:parseHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the given XML fragment.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "parseXML",
          "package": "xmlhtml",
          "signature": "String-\u003e ByteString-\u003e Either String Document",
          "type": "function"
        },
        "index": {
          "description": "Parses the given XML fragment",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "parseXML",
          "normalized": "String-\u003eByteString-\u003eEither String Document",
          "package": "xmlhtml",
          "partial": "XML",
          "signature": "String-\u003eByteString-\u003eEither String Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:parseXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "render",
          "package": "xmlhtml",
          "signature": "Document -\u003e Builder",
          "source": "src/Text-XmlHtml.html#render",
          "type": "function"
        },
        "index": {
          "description": "Renders Document",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "render",
          "normalized": "Document-\u003eBuilder",
          "package": "xmlhtml",
          "signature": "Document-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XmlHtml",
          "name": "renderDocType",
          "package": "xmlhtml",
          "signature": "Encoding -\u003e Maybe DocType -\u003e Builder",
          "source": "src/Text-XmlHtml.html#renderDocType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "renderDocType",
          "normalized": "Encoding-\u003eMaybe DocType-\u003eBuilder",
          "package": "xmlhtml",
          "partial": "Doc Type",
          "signature": "Encoding-\u003eMaybe DocType-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:renderDocType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for rendering HTML nodes without the overhead of creating a\n Document structure.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "renderHtmlFragment",
          "package": "xmlhtml",
          "signature": "Encoding -\u003e [Node] -\u003e Builder",
          "source": "src/Text-XmlHtml-HTML-Render.html#renderHtmlFragment",
          "type": "function"
        },
        "index": {
          "description": "Function for rendering HTML nodes without the overhead of creating Document structure",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "renderHtmlFragment",
          "normalized": "Encoding-\u003e[Node]-\u003eBuilder",
          "package": "xmlhtml",
          "partial": "Html Fragment",
          "signature": "Encoding-\u003e[Node]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:renderHtmlFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for rendering XML nodes without the overhead of creating a\n Document structure.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "renderXmlFragment",
          "package": "xmlhtml",
          "signature": "Encoding -\u003e [Node] -\u003e Builder",
          "source": "src/Text-XmlHtml-XML-Render.html#renderXmlFragment",
          "type": "function"
        },
        "index": {
          "description": "Function for rendering XML nodes without the overhead of creating Document structure",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "renderXmlFragment",
          "normalized": "Encoding-\u003e[Node]-\u003eBuilder",
          "package": "xmlhtml",
          "partial": "Xml Fragment",
          "signature": "Encoding-\u003e[Node]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:renderXmlFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the attribute name to the given value.  If the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e is not an\n element, this is the identity.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "setAttribute",
          "package": "xmlhtml",
          "signature": "Text -\u003e Text -\u003e Node -\u003e Node",
          "source": "src/Text-XmlHtml-Common.html#setAttribute",
          "type": "function"
        },
        "index": {
          "description": "Sets the attribute name to the given value If the Node is not an element this is the identity",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "setAttribute",
          "normalized": "Text-\u003eText-\u003eNode-\u003eNode",
          "package": "xmlhtml",
          "partial": "Attribute",
          "signature": "Text-\u003eText-\u003eNode-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:setAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the tag name of an element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the node isn't an\n element.\n\u003c/p\u003e",
          "module": "Text.XmlHtml",
          "name": "tagName",
          "package": "xmlhtml",
          "signature": "Node -\u003e Maybe Text",
          "source": "src/Text-XmlHtml-Common.html#tagName",
          "type": "function"
        },
        "index": {
          "description": "Gives the tag name of an element or Nothing if the node isn an element",
          "hierarchy": "Text XmlHtml",
          "module": "Text.XmlHtml",
          "name": "tagName",
          "normalized": "Node-\u003eMaybe Text",
          "package": "xmlhtml",
          "partial": "Name",
          "signature": "Node-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmlhtml/docs/Text-XmlHtml.html#v:tagName"
      }
    }
  ]
]