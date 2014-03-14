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
        "word": "xml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXML cursors for working XML content withing the context of\n an XML document.  This implementation is based on the general\n tree zipper written by Krasimir Angelov and Iavor S. Diatchki.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "Cursor",
          "package": "xml",
          "source": "src/Text-XML-Light-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "XML cursors for working XML content withing the context of an XML document This implementation is based on the general tree zipper written by Krasimir Angelov and Iavor Diatchki",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Cursor",
          "package": "xml",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of a piece of content in an XML document.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "Cursor",
          "package": "xml",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "The position of piece of content in an XML document",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Cursor",
          "package": "xml",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "Path",
          "package": "xml",
          "source": "src/Text-XML-Light-Cursor.html#Path",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Path",
          "package": "xml",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "Tag",
          "package": "xml",
          "source": "src/Text-XML-Light-Cursor.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Tag",
          "package": "xml",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "Cur",
          "package": "xml",
          "signature": "Cur",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Cur",
          "package": "xml",
          "partial": "Cur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:Cur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "Tag",
          "package": "xml",
          "signature": "Tag",
          "source": "src/Text-XML-Light-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "Tag",
          "package": "xml",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe currently selected content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "current",
          "package": "xml",
          "signature": "Content",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "The currently selected content",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "current",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child that satisfies a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "findChild",
          "package": "xml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#findChild",
          "type": "function"
        },
        "index": {
          "description": "The first child that satisfies predicate",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "findChild",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Child",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:findChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next left sibling that satisfies a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "findLeft",
          "package": "xml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#findLeft",
          "type": "function"
        },
        "index": {
          "description": "Find the next left sibling that satisfies predicate",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "findLeft",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Left",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:findLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a depth first search for a descendant that satisfies the\n given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "findRec",
          "package": "xml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#findRec",
          "type": "function"
        },
        "index": {
          "description": "Perform depth first search for descendant that satisfies the given predicate",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "findRec",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Rec",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:findRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next right sibling that satisfies a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "findRight",
          "package": "xml",
          "signature": "(Cursor -\u003e Bool) -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#findRight",
          "type": "function"
        },
        "index": {
          "description": "Find the next right sibling that satisfies predicate",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "findRight",
          "normalized": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Right",
          "signature": "(Cursor-\u003eBool)-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:findRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first child of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "firstChild",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#firstChild",
          "type": "function"
        },
        "index": {
          "description": "The first child of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "firstChild",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Child",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:firstChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor for the given content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "fromContent",
          "package": "xml",
          "signature": "Content -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#fromContent",
          "type": "function"
        },
        "index": {
          "description": "cursor for the given content",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "fromContent",
          "normalized": "Content-\u003eCursor",
          "package": "xml",
          "partial": "Content",
          "signature": "Content-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:fromContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor for the given element.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "fromElement",
          "package": "xml",
          "signature": "Element -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#fromElement",
          "type": "function"
        },
        "index": {
          "description": "cursor for the given element",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "fromElement",
          "normalized": "Element-\u003eCursor",
          "package": "xml",
          "partial": "Element",
          "signature": "Element-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:fromElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of the first tree in a forest.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "fromForest",
          "package": "xml",
          "signature": "[Content] -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#fromForest",
          "type": "function"
        },
        "index": {
          "description": "The location of the first tree in forest",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "fromForest",
          "normalized": "[Content]-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Forest",
          "signature": "[Content]-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:fromForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "fromTag",
          "package": "xml",
          "signature": "Tag -\u003e [Content] -\u003e Element",
          "source": "src/Text-XML-Light-Cursor.html#fromTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "fromTag",
          "normalized": "Tag-\u003e[Content]-\u003eElement",
          "package": "xml",
          "partial": "Tag",
          "signature": "Tag-\u003e[Content]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:fromTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child with the given index (starting from 0).\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "getChild",
          "package": "xml",
          "signature": "Int -\u003e Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#getChild",
          "type": "function"
        },
        "index": {
          "description": "The child with the given index starting from",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "getChild",
          "normalized": "Int-\u003eCursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Child",
          "signature": "Int-\u003eCursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:getChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node index inside the sequence of children\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "getNodeIndex",
          "package": "xml",
          "signature": "Cursor -\u003e Int",
          "source": "src/Text-XML-Light-Cursor.html#getNodeIndex",
          "type": "function"
        },
        "index": {
          "description": "Get the node index inside the sequence of children",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "getNodeIndex",
          "normalized": "Cursor-\u003eInt",
          "package": "xml",
          "partial": "Node Index",
          "signature": "Cursor-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:getNodeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "getTag",
          "package": "xml",
          "signature": "Element -\u003e Tag",
          "source": "src/Text-XML-Light-Cursor.html#getTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "getTag",
          "normalized": "Element-\u003eTag",
          "package": "xml",
          "partial": "Tag",
          "signature": "Element-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:getTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have children?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "hasChildren",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#hasChildren",
          "type": "function"
        },
        "index": {
          "description": "Do we have children",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "hasChildren",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "Children",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:hasChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the left of the current position.\n The new content becomes the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "insertGoLeft",
          "package": "xml",
          "signature": "Content -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#insertGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the left of the current position The new content becomes the current position",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "insertGoLeft",
          "normalized": "Content-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Go Left",
          "signature": "Content-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:insertGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the right of the current position.\n The new content becomes the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "insertGoRight",
          "package": "xml",
          "signature": "Content -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#insertGoRight",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the right of the current position The new content becomes the current position",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "insertGoRight",
          "normalized": "Content-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Go Right",
          "signature": "Content-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:insertGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the left of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "insertLeft",
          "package": "xml",
          "signature": "Content -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#insertLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the left of the current position",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "insertLeft",
          "normalized": "Content-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Left",
          "signature": "Content-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:insertLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert content to the right of the current position.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "insertRight",
          "package": "xml",
          "signature": "Content -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#insertRight",
          "type": "function"
        },
        "index": {
          "description": "Insert content to the right of the current position",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "insertRight",
          "normalized": "Content-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Right",
          "signature": "Content-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:insertRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we have a parent?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "isChild",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#isChild",
          "type": "function"
        },
        "index": {
          "description": "Do we have parent",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "isChild",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "Child",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:isChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the left end of the the document?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "isFirst",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#isFirst",
          "type": "function"
        },
        "index": {
          "description": "Are we at the left end of the the document",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "isFirst",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "First",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:isFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the right end of the document?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "isLast",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#isLast",
          "type": "function"
        },
        "index": {
          "description": "Are we at the right end of the document",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "isLast",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "Last",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:isLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the bottom of the document?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "isLeaf",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Are we at the bottom of the document",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "isLeaf",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "Leaf",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre we at the top of the document?\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "isRoot",
          "package": "xml",
          "signature": "Cursor -\u003e Bool",
          "source": "src/Text-XML-Light-Cursor.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Are we at the top of the document",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "isRoot",
          "normalized": "Cursor-\u003eBool",
          "package": "xml",
          "partial": "Root",
          "signature": "Cursor-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last child of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "lastChild",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#lastChild",
          "type": "function"
        },
        "index": {
          "description": "The last child of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "lastChild",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Child",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:lastChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe left sibling of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "left",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#left",
          "type": "function"
        },
        "index": {
          "description": "The left sibling of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "left",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings on the left, closest first.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "lefts",
          "package": "xml",
          "signature": "[Content]",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "Siblings on the left closest first",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "lefts",
          "normalized": "[Content]",
          "package": "xml",
          "signature": "[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "modifyContent",
          "package": "xml",
          "signature": "(Content -\u003e Content) -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#modifyContent",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "modifyContent",
          "normalized": "(Content-\u003eContent)-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Content",
          "signature": "(Content-\u003eContent)-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:modifyContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current content, allowing for an effect.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "modifyContentM",
          "package": "xml",
          "signature": "(Content -\u003e m Content) -\u003e Cursor -\u003e m Cursor",
          "source": "src/Text-XML-Light-Cursor.html#modifyContentM",
          "type": "function"
        },
        "index": {
          "description": "Modify the current content allowing for an effect",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "modifyContentM",
          "normalized": "(Content-\u003ea Content)-\u003eCursor-\u003ea Cursor",
          "package": "xml",
          "partial": "Content",
          "signature": "(Content-\u003em Content)-\u003eCursor-\u003em Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:modifyContentM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next position in a left-to-right depth-first traversal of a document:\n either the first child, right sibling, or the right sibling of a parent that\n has one.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "nextDF",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#nextDF",
          "type": "function"
        },
        "index": {
          "description": "The next position in left-to-right depth-first traversal of document either the first child right sibling or the right sibling of parent that has one",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "nextDF",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "DF",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:nextDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parent of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "parent",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#parent",
          "type": "function"
        },
        "index": {
          "description": "The parent of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "parent",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contexts of the parent elements of this location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "parents",
          "package": "xml",
          "signature": "Path",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "The contexts of the parent elements of this location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "parents",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the left.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoLeft",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#removeGoLeft",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the left",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoLeft",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Go Left",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:removeGoLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the one on the right.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoRight",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#removeGoRight",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the one on the right",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoRight",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Go Right",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:removeGoRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element.\n The new position is the parent of the old position.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoUp",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#removeGoUp",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element The new position is the parent of the old position",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "removeGoUp",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "partial": "Go Up",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:removeGoUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the left of the current position, if any.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "removeLeft",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe (Content, Cursor)",
          "source": "src/Text-XML-Light-Cursor.html#removeLeft",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the left of the current position if any",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "removeLeft",
          "normalized": "Cursor-\u003eMaybe(Content,Cursor)",
          "package": "xml",
          "partial": "Left",
          "signature": "Cursor-\u003eMaybe(Content,Cursor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:removeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the content on the right of the current position, if any.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "removeRight",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe (Content, Cursor)",
          "source": "src/Text-XML-Light-Cursor.html#removeRight",
          "type": "function"
        },
        "index": {
          "description": "Remove the content on the right of the current position if any",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "removeRight",
          "normalized": "Cursor-\u003eMaybe(Content,Cursor)",
          "package": "xml",
          "partial": "Right",
          "signature": "Cursor-\u003eMaybe(Content,Cursor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:removeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe right sibling of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "right",
          "package": "xml",
          "signature": "Cursor -\u003e Maybe Cursor",
          "source": "src/Text-XML-Light-Cursor.html#right",
          "type": "function"
        },
        "index": {
          "description": "The right sibling of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "right",
          "normalized": "Cursor-\u003eMaybe Cursor",
          "package": "xml",
          "signature": "Cursor-\u003eMaybe Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiblings on the right, closest first.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "rights",
          "package": "xml",
          "signature": "[Content]",
          "source": "src/Text-XML-Light-Cursor.html#Cursor",
          "type": "function"
        },
        "index": {
          "description": "Siblings on the right closest first",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "rights",
          "normalized": "[Content]",
          "package": "xml",
          "signature": "[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-most parent of the given location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "root",
          "package": "xml",
          "signature": "Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#root",
          "type": "function"
        },
        "index": {
          "description": "The top-most parent of the given location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "root",
          "normalized": "Cursor-\u003eCursor",
          "package": "xml",
          "signature": "Cursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "setContent",
          "package": "xml",
          "signature": "Content -\u003e Cursor -\u003e Cursor",
          "source": "src/Text-XML-Light-Cursor.html#setContent",
          "type": "function"
        },
        "index": {
          "description": "Change the current content",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "setContent",
          "normalized": "Content-\u003eCursor-\u003eCursor",
          "package": "xml",
          "partial": "Content",
          "signature": "Content-\u003eCursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:setContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "setTag",
          "package": "xml",
          "signature": "Tag -\u003e Element -\u003e Element",
          "source": "src/Text-XML-Light-Cursor.html#setTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "setTag",
          "normalized": "Tag-\u003eElement-\u003eElement",
          "package": "xml",
          "partial": "Tag",
          "signature": "Tag-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:setTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "tagAttribs",
          "package": "xml",
          "signature": "[Attr]",
          "source": "src/Text-XML-Light-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "tagAttribs",
          "normalized": "[Attr]",
          "package": "xml",
          "partial": "Attribs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:tagAttribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "tagLine",
          "package": "xml",
          "signature": "Maybe Line",
          "source": "src/Text-XML-Light-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "tagLine",
          "package": "xml",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:tagLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Cursor",
          "name": "tagName",
          "package": "xml",
          "signature": "QName",
          "source": "src/Text-XML-Light-Cursor.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "tagName",
          "package": "xml",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the forest containing this location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "toForest",
          "package": "xml",
          "signature": "Cursor -\u003e [Content]",
          "source": "src/Text-XML-Light-Cursor.html#toForest",
          "type": "function"
        },
        "index": {
          "description": "Computes the forest containing this location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "toForest",
          "normalized": "Cursor-\u003e[Content]",
          "package": "xml",
          "partial": "Forest",
          "signature": "Cursor-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:toForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the tree containing this location.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Cursor",
          "name": "toTree",
          "package": "xml",
          "signature": "Cursor -\u003e Content",
          "source": "src/Text-XML-Light-Cursor.html#toTree",
          "type": "function"
        },
        "index": {
          "description": "Computes the tree containing this location",
          "hierarchy": "Text XML Light Cursor",
          "module": "Text.XML.Light.Cursor",
          "name": "toTree",
          "normalized": "Cursor-\u003eContent",
          "package": "xml",
          "partial": "Tree",
          "signature": "Cursor-\u003eContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Cursor.html#v:toTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLightweight XML parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Light.Input",
          "name": "Input",
          "package": "xml",
          "source": "src/Text-XML-Light-Input.html",
          "type": "module"
        },
        "index": {
          "description": "Lightweight XML parsing",
          "hierarchy": "Text XML Light Input",
          "module": "Text.XML.Light.Input",
          "name": "Input",
          "package": "xml",
          "partial": "Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Input.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparseXML to a list of content chunks\n\u003c/p\u003e",
          "module": "Text.XML.Light.Input",
          "name": "parseXML",
          "package": "xml",
          "signature": "s -\u003e [Content]",
          "source": "src/Text-XML-Light-Input.html#parseXML",
          "type": "function"
        },
        "index": {
          "description": "parseXML to list of content chunks",
          "hierarchy": "Text XML Light Input",
          "module": "Text.XML.Light.Input",
          "name": "parseXML",
          "normalized": "a-\u003e[Content]",
          "package": "xml",
          "partial": "XML",
          "signature": "s-\u003e[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Input.html#v:parseXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparseXMLDoc, parse a XMLl document to maybe an element\n\u003c/p\u003e",
          "module": "Text.XML.Light.Input",
          "name": "parseXMLDoc",
          "package": "xml",
          "signature": "s -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Input.html#parseXMLDoc",
          "type": "function"
        },
        "index": {
          "description": "parseXMLDoc parse XMLl document to maybe an element",
          "hierarchy": "Text XML Light Input",
          "module": "Text.XML.Light.Input",
          "name": "parseXMLDoc",
          "normalized": "a-\u003eMaybe Element",
          "package": "xml",
          "partial": "XMLDoc",
          "signature": "s-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Input.html#v:parseXMLDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "Lexer",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "Lexer",
          "package": "xml",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "LChar",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#LChar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "LChar",
          "package": "xml",
          "partial": "LChar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:LChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "LString",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#LString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "LString",
          "package": "xml",
          "partial": "LString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:LString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type may be used to provide a custom scanning function\n for extracting characters.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Lexer",
          "name": "Scanner",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#Scanner",
          "type": "data"
        },
        "index": {
          "description": "This type may be used to provide custom scanning function for extracting characters",
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "Scanner",
          "package": "xml",
          "partial": "Scanner",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:Scanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "Token",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "Token",
          "package": "xml",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "Txt",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#Txt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "Txt",
          "package": "xml",
          "partial": "Txt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:Txt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "XmlSource",
          "package": "xml",
          "source": "src/Text-XML-Light-Lexer.html#XmlSource",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "XmlSource",
          "package": "xml",
          "partial": "Xml Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#t:XmlSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "CRefBit",
          "package": "xml",
          "signature": "CRefBit String",
          "source": "src/Text-XML-Light-Lexer.html#Txt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "CRefBit",
          "package": "xml",
          "partial": "CRef Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:CRefBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "Scanner",
          "package": "xml",
          "signature": "Scanner (Maybe (Char, s)) (s -\u003e Maybe (Char, s))",
          "source": "src/Text-XML-Light-Lexer.html#Scanner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "Scanner",
          "normalized": "Scanner(Maybe(Char,a))(a-\u003eMaybe(Char,a))",
          "package": "xml",
          "partial": "Scanner",
          "signature": "Scanner(Maybe(Char,s))(s-\u003eMaybe(Char,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:Scanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "TokCRef",
          "package": "xml",
          "signature": "TokCRef String",
          "source": "src/Text-XML-Light-Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "TokCRef",
          "package": "xml",
          "partial": "Tok CRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:TokCRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "TokEnd",
          "package": "xml",
          "signature": "TokEnd Line QName",
          "source": "src/Text-XML-Light-Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "TokEnd",
          "package": "xml",
          "partial": "Tok End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:TokEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "TokStart",
          "package": "xml",
          "signature": "TokStart Line QName [Attr] Bool",
          "source": "src/Text-XML-Light-Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "TokStart",
          "normalized": "TokStart Line QName[Attr]Bool",
          "package": "xml",
          "partial": "Tok Start",
          "signature": "TokStart Line QName[Attr]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:TokStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "TokText",
          "package": "xml",
          "signature": "TokText CData",
          "source": "src/Text-XML-Light-Lexer.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "TokText",
          "package": "xml",
          "partial": "Tok Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:TokText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "TxtBit",
          "package": "xml",
          "signature": "TxtBit String",
          "source": "src/Text-XML-Light-Lexer.html#Txt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "TxtBit",
          "package": "xml",
          "partial": "Txt Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:TxtBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "attr_val",
          "package": "xml",
          "signature": "LString -\u003e (String, LString)",
          "source": "src/Text-XML-Light-Lexer.html#attr_val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "attr_val",
          "normalized": "LString-\u003e(String,LString)",
          "package": "xml",
          "signature": "LString-\u003e(String,LString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:attr_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "attrib",
          "package": "xml",
          "signature": "LString -\u003e (Attr, LString)",
          "source": "src/Text-XML-Light-Lexer.html#attrib",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "attrib",
          "normalized": "LString-\u003e(Attr,LString)",
          "package": "xml",
          "signature": "LString-\u003e(Attr,LString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:attrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "attribs",
          "package": "xml",
          "signature": "LString -\u003e ([Attr], Bool, [Token])",
          "source": "src/Text-XML-Light-Lexer.html#attribs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "attribs",
          "normalized": "LString-\u003e([Attr],Bool,[Token])",
          "package": "xml",
          "signature": "LString-\u003e([Attr],Bool,[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:attribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "break'",
          "package": "xml",
          "signature": "(a -\u003e Bool) -\u003e [(b, a)] -\u003e ([a], [(b, a)])",
          "source": "src/Text-XML-Light-Lexer.html#break%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "break'",
          "normalized": "(a-\u003eBool)-\u003e[(b,a)]-\u003e([a],[(b,a)])",
          "package": "xml",
          "signature": "(a-\u003eBool)-\u003e[(b,a)]-\u003e([a],[(b,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:break-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "breakn",
          "package": "xml",
          "signature": "(a -\u003e Bool) -\u003e [(b, a)] -\u003e ([a], [(b, a)])",
          "source": "src/Text-XML-Light-Lexer.html#breakn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "breakn",
          "normalized": "(a-\u003eBool)-\u003e[(b,a)]-\u003e([a],[(b,a)])",
          "package": "xml",
          "signature": "(a-\u003eBool)-\u003e[(b,a)]-\u003e([a],[(b,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:breakn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "cref_to_char",
          "package": "xml",
          "signature": "[Char] -\u003e Maybe Char",
          "source": "src/Text-XML-Light-Lexer.html#cref_to_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "cref_to_char",
          "normalized": "[Char]-\u003eMaybe Char",
          "package": "xml",
          "signature": "[Char]-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:cref_to_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type may be used to provide a custom scanning function\n for extracting characters.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Lexer",
          "name": "customScanner",
          "package": "xml",
          "signature": "(s -\u003e Maybe (Char, s)) -\u003e s -\u003e Scanner s",
          "source": "src/Text-XML-Light-Lexer.html#customScanner",
          "type": "function"
        },
        "index": {
          "description": "This type may be used to provide custom scanning function for extracting characters",
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "customScanner",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eScanner a",
          "package": "xml",
          "partial": "Scanner",
          "signature": "(s-\u003eMaybe(Char,s))-\u003es-\u003eScanner s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:customScanner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "cvt_char",
          "package": "xml",
          "signature": "Int -\u003e Maybe Char",
          "source": "src/Text-XML-Light-Lexer.html#cvt_char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "cvt_char",
          "normalized": "Int-\u003eMaybe Char",
          "package": "xml",
          "signature": "Int-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:cvt_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "decode_attr",
          "package": "xml",
          "signature": "String -\u003e String",
          "source": "src/Text-XML-Light-Lexer.html#decode_attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "decode_attr",
          "normalized": "String-\u003eString",
          "package": "xml",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:decode_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "decode_text",
          "package": "xml",
          "signature": "[Char] -\u003e [Txt]",
          "source": "src/Text-XML-Light-Lexer.html#decode_text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "decode_text",
          "normalized": "[Char]-\u003e[Txt]",
          "package": "xml",
          "signature": "[Char]-\u003e[Txt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:decode_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "dropSpace",
          "package": "xml",
          "signature": "LString -\u003e LString",
          "source": "src/Text-XML-Light-Lexer.html#dropSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "dropSpace",
          "normalized": "LString-\u003eLString",
          "package": "xml",
          "partial": "Space",
          "signature": "LString-\u003eLString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:dropSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "linenumber",
          "package": "xml",
          "signature": "Integer -\u003e s -\u003e LString",
          "source": "src/Text-XML-Light-Lexer.html#linenumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "linenumber",
          "normalized": "Integer-\u003ea-\u003eLString",
          "package": "xml",
          "signature": "Integer-\u003es-\u003eLString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:linenumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "num_esc",
          "package": "xml",
          "signature": "String -\u003e Maybe Char",
          "source": "src/Text-XML-Light-Lexer.html#num_esc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "num_esc",
          "normalized": "String-\u003eMaybe Char",
          "package": "xml",
          "signature": "String-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:num_esc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "qualName",
          "package": "xml",
          "signature": "LString -\u003e (QName, LString)",
          "source": "src/Text-XML-Light-Lexer.html#qualName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "qualName",
          "normalized": "LString-\u003e(QName,LString)",
          "package": "xml",
          "partial": "Name",
          "signature": "LString-\u003e(QName,LString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:qualName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "special",
          "package": "xml",
          "signature": "LChar -\u003e LString -\u003e [Token]",
          "source": "src/Text-XML-Light-Lexer.html#special",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "special",
          "normalized": "LChar-\u003eLString-\u003e[Token]",
          "package": "xml",
          "signature": "LChar-\u003eLString-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the value for an attribute.  For malformed XML we do\n our best to guess the programmer's intention.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Lexer",
          "name": "string",
          "package": "xml",
          "signature": "LString -\u003e (String, LString)",
          "source": "src/Text-XML-Light-Lexer.html#string",
          "type": "function"
        },
        "index": {
          "description": "Match the value for an attribute For malformed XML we do our best to guess the programmer intention",
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "string",
          "normalized": "LString-\u003e(String,LString)",
          "package": "xml",
          "signature": "LString-\u003e(String,LString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "tag",
          "package": "xml",
          "signature": "LString -\u003e [Token]",
          "source": "src/Text-XML-Light-Lexer.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "tag",
          "normalized": "LString-\u003e[Token]",
          "package": "xml",
          "signature": "LString-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "tokens",
          "package": "xml",
          "signature": "source -\u003e [Token]",
          "source": "src/Text-XML-Light-Lexer.html#tokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "tokens",
          "normalized": "a-\u003e[Token]",
          "package": "xml",
          "signature": "source-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "tokens'",
          "package": "xml",
          "signature": "LString -\u003e [Token]",
          "source": "src/Text-XML-Light-Lexer.html#tokens%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "tokens'",
          "normalized": "LString-\u003e[Token]",
          "package": "xml",
          "signature": "LString-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:tokens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Lexer",
          "name": "uncons",
          "package": "xml",
          "signature": "s -\u003e Maybe (Char, s)",
          "source": "src/Text-XML-Light-Lexer.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Light Lexer",
          "module": "Text.XML.Light.Lexer",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Char,a)",
          "package": "xml",
          "signature": "s-\u003eMaybe(Char,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Lexer.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "Output",
          "package": "xml",
          "source": "src/Text-XML-Light-Output.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "Output",
          "package": "xml",
          "partial": "Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "ConfigPP",
          "package": "xml",
          "source": "src/Text-XML-Light-Output.html#ConfigPP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ConfigPP",
          "package": "xml",
          "partial": "Config PP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#t:ConfigPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault pretty orinting configutaion.\n  * Always use abbreviate empty tags.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "defaultConfigPP",
          "package": "xml",
          "signature": "ConfigPP",
          "source": "src/Text-XML-Light-Output.html#defaultConfigPP",
          "type": "function"
        },
        "index": {
          "description": "Default pretty orinting configutaion Always use abbreviate empty tags",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "defaultConfigPP",
          "package": "xml",
          "partial": "Config PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:defaultConfigPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing content\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppContent",
          "package": "xml",
          "signature": "Content -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppContent",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing content",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppContent",
          "normalized": "Content-\u003eString",
          "package": "xml",
          "partial": "Content",
          "signature": "Content-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing elements\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppElement",
          "package": "xml",
          "signature": "Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppElement",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing elements",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppElement",
          "normalized": "Element-\u003eString",
          "package": "xml",
          "partial": "Element",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing renders XML documents faithfully,\n with the exception that whitespace may be added/removed\n in non-verbatim character data.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppTopElement",
          "package": "xml",
          "signature": "Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppTopElement",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing renders XML documents faithfully with the exception that whitespace may be added removed in non-verbatim character data",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppTopElement",
          "normalized": "Element-\u003eString",
          "package": "xml",
          "partial": "Top Element",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppTopElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing content\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppcContent",
          "package": "xml",
          "signature": "ConfigPP -\u003e Content -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppcContent",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing content",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppcContent",
          "normalized": "ConfigPP-\u003eContent-\u003eString",
          "package": "xml",
          "partial": "Content",
          "signature": "ConfigPP-\u003eContent-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppcContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing elements\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppcElement",
          "package": "xml",
          "signature": "ConfigPP -\u003e Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppcElement",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing elements",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppcElement",
          "normalized": "ConfigPP-\u003eElement-\u003eString",
          "package": "xml",
          "partial": "Element",
          "signature": "ConfigPP-\u003eElement-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppcElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing renders XML documents faithfully,\n with the exception that whitespace may be added/removed\n in non-verbatim character data.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "ppcTopElement",
          "package": "xml",
          "signature": "ConfigPP -\u003e Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#ppcTopElement",
          "type": "function"
        },
        "index": {
          "description": "Pretty printing renders XML documents faithfully with the exception that whitespace may be added removed in non-verbatim character data",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "ppcTopElement",
          "normalized": "ConfigPP-\u003eElement-\u003eString",
          "package": "xml",
          "partial": "Top Element",
          "signature": "ConfigPP-\u003eElement-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:ppcTopElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configuration that tries to make things pretty\n (possibly at the cost of changing the semantics a bit\n through adding white space.)\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "prettyConfigPP",
          "package": "xml",
          "signature": "ConfigPP",
          "source": "src/Text-XML-Light-Output.html#prettyConfigPP",
          "type": "function"
        },
        "index": {
          "description": "configuration that tries to make things pretty possibly at the cost of changing the semantics bit through adding white space",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "prettyConfigPP",
          "package": "xml",
          "partial": "Config PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:prettyConfigPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "showAttr",
          "package": "xml",
          "signature": "Attr -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showAttr",
          "normalized": "Attr-\u003eString",
          "package": "xml",
          "partial": "Attr",
          "signature": "Attr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "showCData",
          "package": "xml",
          "signature": "CData -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showCData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showCData",
          "normalized": "CData-\u003eString",
          "package": "xml",
          "partial": "CData",
          "signature": "CData-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "showContent",
          "package": "xml",
          "signature": "Content -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showContent",
          "normalized": "Content-\u003eString",
          "package": "xml",
          "partial": "Content",
          "signature": "Content-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "showElement",
          "package": "xml",
          "signature": "Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showElement",
          "normalized": "Element-\u003eString",
          "package": "xml",
          "partial": "Element",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "showQName",
          "package": "xml",
          "signature": "QName -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showQName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showQName",
          "normalized": "QName-\u003eString",
          "package": "xml",
          "partial": "QName",
          "signature": "QName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the \u003ca\u003e?xml?\u003c/a\u003e header.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "showTopElement",
          "package": "xml",
          "signature": "Element -\u003e String",
          "source": "src/Text-XML-Light-Output.html#showTopElement",
          "type": "function"
        },
        "index": {
          "description": "Adds the xml header",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "showTopElement",
          "normalized": "Element-\u003eString",
          "package": "xml",
          "partial": "Top Element",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:showTopElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Output",
          "name": "tagEnd",
          "package": "xml",
          "signature": "QName -\u003e ShowS",
          "source": "src/Text-XML-Light-Output.html#tagEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "tagEnd",
          "normalized": "QName-\u003eShowS",
          "package": "xml",
          "partial": "End",
          "signature": "QName-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:tagEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify if we should use extra white-space to make document more readable.\n WARNING: This adds additional white-space to text elements,\n and so it may change the meaning of the document.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "useExtraWhiteSpace",
          "package": "xml",
          "signature": "Bool -\u003e ConfigPP -\u003e ConfigPP",
          "source": "src/Text-XML-Light-Output.html#useExtraWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Specify if we should use extra white-space to make document more readable WARNING This adds additional white-space to text elements and so it may change the meaning of the document",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "useExtraWhiteSpace",
          "normalized": "Bool-\u003eConfigPP-\u003eConfigPP",
          "package": "xml",
          "partial": "Extra White Space",
          "signature": "Bool-\u003eConfigPP-\u003eConfigPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:useExtraWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe predicate specifies for which empty tags we should use XML's\n abbreviated notation \u003ca\u003e/\u003c/a\u003e.  This is useful if we are working with\n some XML-ish standards (such as certain versions of HTML) where some\n empty tags should always be displayed in the \u003ca\u003eTAG\u003c/a\u003e\u003ca\u003e/TAG\u003c/a\u003e form.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "useShortEmptyTags",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e ConfigPP -\u003e ConfigPP",
          "source": "src/Text-XML-Light-Output.html#useShortEmptyTags",
          "type": "function"
        },
        "index": {
          "description": "The predicate specifies for which empty tags we should use XML abbreviated notation This is useful if we are working with some XML-ish standards such as certain versions of HTML where some empty tags should always be displayed in the TAG TAG form",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "useShortEmptyTags",
          "normalized": "(QName-\u003eBool)-\u003eConfigPP-\u003eConfigPP",
          "package": "xml",
          "partial": "Short Empty Tags",
          "signature": "(QName-\u003eBool)-\u003eConfigPP-\u003eConfigPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:useShortEmptyTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML 1.0 header\n\u003c/p\u003e",
          "module": "Text.XML.Light.Output",
          "name": "xml_header",
          "package": "xml",
          "signature": "String",
          "source": "src/Text-XML-Light-Output.html#xml_header",
          "type": "function"
        },
        "index": {
          "description": "The XML header",
          "hierarchy": "Text XML Light Output",
          "module": "Text.XML.Light.Output",
          "name": "xml_header",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Output.html#v:xml_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Proc",
          "name": "Proc",
          "package": "xml",
          "source": "src/Text-XML-Light-Proc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "Proc",
          "package": "xml",
          "partial": "Proc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only the elements from a parent.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "elChildren",
          "package": "xml",
          "signature": "Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#elChildren",
          "type": "function"
        },
        "index": {
          "description": "Select only the elements from parent",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "elChildren",
          "normalized": "Element-\u003e[Element]",
          "package": "xml",
          "partial": "Children",
          "signature": "Element-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:elChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterChild",
          "package": "xml",
          "signature": "(Element -\u003e Bool) -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#filterChild",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with the given name",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterChild",
          "normalized": "(Element-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Child",
          "signature": "(Element-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with name matching a predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildName",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#filterChildName",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with name matching predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildName",
          "normalized": "(QName-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Child Name",
          "signature": "(QName-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterChildName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter all immediate children wrt a given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildren",
          "package": "xml",
          "signature": "(Element -\u003e Bool) -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#filterChildren",
          "type": "function"
        },
        "index": {
          "description": "Filter all immediate children wrt given predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildren",
          "normalized": "(Element-\u003eBool)-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Children",
          "signature": "(Element-\u003eBool)-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter all immediate children wrt a given predicate over their names.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildrenName",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#filterChildrenName",
          "type": "function"
        },
        "index": {
          "description": "Filter all immediate children wrt given predicate over their names",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterChildrenName",
          "normalized": "(QName-\u003eBool)-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Children Name",
          "signature": "(QName-\u003eBool)-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterChildrenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the left-most occurrence of an element wrt. given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterElement",
          "package": "xml",
          "signature": "(Element -\u003e Bool) -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#filterElement",
          "type": "function"
        },
        "index": {
          "description": "Filter the left-most occurrence of an element wrt given predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterElement",
          "normalized": "(Element-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Element",
          "signature": "(Element-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the left-most occurrence of an element wrt. given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterElementName",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#filterElementName",
          "type": "function"
        },
        "index": {
          "description": "Filter the left-most occurrence of an element wrt given predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterElementName",
          "normalized": "(QName-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Element Name",
          "signature": "(QName-\u003eBool)-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterElementName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurrences of an element wrt. given predicate.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterElements",
          "package": "xml",
          "signature": "(Element -\u003e Bool) -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#filterElements",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurrences of an element wrt given predicate i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterElements",
          "normalized": "(Element-\u003eBool)-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Elements",
          "signature": "(Element-\u003eBool)-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurences of an element wrt a predicate over element names.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "filterElementsName",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#filterElementsName",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurences of an element wrt predicate over element names i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "filterElementsName",
          "normalized": "(QName-\u003eBool)-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Elements Name",
          "signature": "(QName-\u003eBool)-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:filterElementsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of an attribute.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findAttr",
          "package": "xml",
          "signature": "QName -\u003e Element -\u003e Maybe String",
          "source": "src/Text-XML-Light-Proc.html#findAttr",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of an attribute",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findAttr",
          "normalized": "QName-\u003eElement-\u003eMaybe String",
          "package": "xml",
          "partial": "Attr",
          "signature": "QName-\u003eElement-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of the first attribute whose name\n satisfies the given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findAttrBy",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e Element -\u003e Maybe String",
          "source": "src/Text-XML-Light-Proc.html#findAttrBy",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of the first attribute whose name satisfies the given predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findAttrBy",
          "normalized": "(QName-\u003eBool)-\u003eElement-\u003eMaybe String",
          "package": "xml",
          "partial": "Attr By",
          "signature": "(QName-\u003eBool)-\u003eElement-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findAttrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an immediate child with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findChild",
          "package": "xml",
          "signature": "QName -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#findChild",
          "type": "function"
        },
        "index": {
          "description": "Find an immediate child with the given name",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findChild",
          "normalized": "QName-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Child",
          "signature": "QName-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all immediate children with the given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findChildren",
          "package": "xml",
          "signature": "QName -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#findChildren",
          "type": "function"
        },
        "index": {
          "description": "Find all immediate children with the given name",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findChildren",
          "normalized": "QName-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Children",
          "signature": "QName-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the left-most occurrence of an element matching given name.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findElement",
          "package": "xml",
          "signature": "QName -\u003e Element -\u003e Maybe Element",
          "source": "src/Text-XML-Light-Proc.html#findElement",
          "type": "function"
        },
        "index": {
          "description": "Find the left-most occurrence of an element matching given name",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findElement",
          "normalized": "QName-\u003eElement-\u003eMaybe Element",
          "package": "xml",
          "partial": "Element",
          "signature": "QName-\u003eElement-\u003eMaybe Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all non-nested occurances of an element.\n (i.e., once we have found an element, we do not search\n for more occurances among the element's children).\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "findElements",
          "package": "xml",
          "signature": "QName -\u003e Element -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#findElements",
          "type": "function"
        },
        "index": {
          "description": "Find all non-nested occurances of an element i.e once we have found an element we do not search for more occurances among the element children",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "findElements",
          "normalized": "QName-\u003eElement-\u003e[Element]",
          "package": "xml",
          "partial": "Elements",
          "signature": "QName-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:findElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup attribute name from list.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "lookupAttr",
          "package": "xml",
          "signature": "QName -\u003e [Attr] -\u003e Maybe String",
          "source": "src/Text-XML-Light-Proc.html#lookupAttr",
          "type": "function"
        },
        "index": {
          "description": "Lookup attribute name from list",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "lookupAttr",
          "normalized": "QName-\u003e[Attr]-\u003eMaybe String",
          "package": "xml",
          "partial": "Attr",
          "signature": "QName-\u003e[Attr]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:lookupAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the first attribute whose name satisfies the given predicate.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "lookupAttrBy",
          "package": "xml",
          "signature": "(QName -\u003e Bool) -\u003e [Attr] -\u003e Maybe String",
          "source": "src/Text-XML-Light-Proc.html#lookupAttrBy",
          "type": "function"
        },
        "index": {
          "description": "Lookup the first attribute whose name satisfies the given predicate",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "lookupAttrBy",
          "normalized": "(QName-\u003eBool)-\u003e[Attr]-\u003eMaybe String",
          "package": "xml",
          "partial": "Attr By",
          "signature": "(QName-\u003eBool)-\u003e[Attr]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:lookupAttrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only the elements from a list of XML content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "onlyElems",
          "package": "xml",
          "signature": "[Content] -\u003e [Element]",
          "source": "src/Text-XML-Light-Proc.html#onlyElems",
          "type": "function"
        },
        "index": {
          "description": "Select only the elements from list of XML content",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "onlyElems",
          "normalized": "[Content]-\u003e[Element]",
          "package": "xml",
          "partial": "Elems",
          "signature": "[Content]-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:onlyElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only the text from a list of XML content.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "onlyText",
          "package": "xml",
          "signature": "[Content] -\u003e [CData]",
          "source": "src/Text-XML-Light-Proc.html#onlyText",
          "type": "function"
        },
        "index": {
          "description": "Select only the text from list of XML content",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "onlyText",
          "normalized": "[Content]-\u003e[CData]",
          "package": "xml",
          "partial": "Text",
          "signature": "[Content]-\u003e[CData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:onlyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the text value of an XML element.  This function\n ignores non-text elements, and concatenates all text elements.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Proc",
          "name": "strContent",
          "package": "xml",
          "signature": "Element -\u003e String",
          "source": "src/Text-XML-Light-Proc.html#strContent",
          "type": "function"
        },
        "index": {
          "description": "Get the text value of an XML element This function ignores non-text elements and concatenates all text elements",
          "hierarchy": "Text XML Light Proc",
          "module": "Text.XML.Light.Proc",
          "name": "strContent",
          "normalized": "Element-\u003eString",
          "package": "xml",
          "partial": "Content",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Proc.html#v:strContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "Types",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Types",
          "package": "xml",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML attributes\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "Attr",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "XML attributes",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Attr",
          "package": "xml",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML CData\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "CData",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#CData",
          "type": "data"
        },
        "index": {
          "description": "XML CData",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CData",
          "package": "xml",
          "partial": "CData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:CData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "CDataKind",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#CDataKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CDataKind",
          "package": "xml",
          "partial": "CData Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:CDataKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML content\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "Content",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#Content",
          "type": "data"
        },
        "index": {
          "description": "XML content",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Content",
          "package": "xml",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML elements\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "Element",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "data"
        },
        "index": {
          "description": "XML elements",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Element",
          "package": "xml",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line is an Integer\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "Line",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#Line",
          "type": "type"
        },
        "index": {
          "description": "line is an Integer",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Line",
          "package": "xml",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXML qualified names\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "QName",
          "package": "xml",
          "source": "src/Text-XML-Light-Types.html#QName",
          "type": "data"
        },
        "index": {
          "description": "XML qualified names",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "QName",
          "package": "xml",
          "partial": "QName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#t:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "Attr",
          "package": "xml",
          "signature": "Attr",
          "source": "src/Text-XML-Light-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Attr",
          "package": "xml",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "CData",
          "package": "xml",
          "signature": "CData",
          "source": "src/Text-XML-Light-Types.html#CData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CData",
          "package": "xml",
          "partial": "CData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:CData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs-is character data; pretty printer passes it along without any escaping or CDATA wrap-up.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "CDataRaw",
          "package": "xml",
          "signature": "CDataRaw",
          "source": "src/Text-XML-Light-Types.html#CDataKind",
          "type": "function"
        },
        "index": {
          "description": "As-is character data pretty printer passes it along without any escaping or CDATA wrap-up",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CDataRaw",
          "package": "xml",
          "partial": "CData Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:CDataRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary character data; pretty printer escapes &, \u003c etc.\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "CDataText",
          "package": "xml",
          "signature": "CDataText",
          "source": "src/Text-XML-Light-Types.html#CDataKind",
          "type": "function"
        },
        "index": {
          "description": "Ordinary character data pretty printer escapes etc",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CDataText",
          "package": "xml",
          "partial": "CData Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:CDataText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnescaped character data; pretty printer embeds it in \u003c![CDATA[..\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "CDataVerbatim",
          "package": "xml",
          "signature": "CDataVerbatim",
          "source": "src/Text-XML-Light-Types.html#CDataKind",
          "type": "function"
        },
        "index": {
          "description": "Unescaped character data pretty printer embeds it in CDATA",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CDataVerbatim",
          "package": "xml",
          "partial": "CData Verbatim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:CDataVerbatim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "CRef",
          "package": "xml",
          "signature": "CRef String",
          "source": "src/Text-XML-Light-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "CRef",
          "package": "xml",
          "partial": "CRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:CRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "Elem",
          "package": "xml",
          "signature": "Elem Element",
          "source": "src/Text-XML-Light-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Elem",
          "package": "xml",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "Element",
          "package": "xml",
          "signature": "Element",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Element",
          "package": "xml",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "QName",
          "package": "xml",
          "signature": "QName",
          "source": "src/Text-XML-Light-Types.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "QName",
          "package": "xml",
          "partial": "QName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "Text",
          "package": "xml",
          "signature": "Text CData",
          "source": "src/Text-XML-Light-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "Text",
          "package": "xml",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "attrKey",
          "package": "xml",
          "signature": "QName",
          "source": "src/Text-XML-Light-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "attrKey",
          "package": "xml",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:attrKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "attrVal",
          "package": "xml",
          "signature": "String",
          "source": "src/Text-XML-Light-Types.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "attrVal",
          "package": "xml",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:attrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank cdata\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "blank_cdata",
          "package": "xml",
          "signature": "CData",
          "source": "src/Text-XML-Light-Types.html#blank_cdata",
          "type": "function"
        },
        "index": {
          "description": "Blank cdata",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "blank_cdata",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:blank_cdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank elements\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "blank_element",
          "package": "xml",
          "signature": "Element",
          "source": "src/Text-XML-Light-Types.html#blank_element",
          "type": "function"
        },
        "index": {
          "description": "Blank elements",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "blank_element",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:blank_element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank names\n\u003c/p\u003e",
          "module": "Text.XML.Light.Types",
          "name": "blank_name",
          "package": "xml",
          "signature": "QName",
          "source": "src/Text-XML-Light-Types.html#blank_name",
          "type": "function"
        },
        "index": {
          "description": "Blank names",
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "blank_name",
          "package": "xml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:blank_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "cdData",
          "package": "xml",
          "signature": "String",
          "source": "src/Text-XML-Light-Types.html#CData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "cdData",
          "package": "xml",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:cdData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "cdLine",
          "package": "xml",
          "signature": "Maybe Line",
          "source": "src/Text-XML-Light-Types.html#CData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "cdLine",
          "package": "xml",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:cdLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "cdVerbatim",
          "package": "xml",
          "signature": "CDataKind",
          "source": "src/Text-XML-Light-Types.html#CData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "cdVerbatim",
          "package": "xml",
          "partial": "Verbatim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:cdVerbatim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "elAttribs",
          "package": "xml",
          "signature": "[Attr]",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "elAttribs",
          "normalized": "[Attr]",
          "package": "xml",
          "partial": "Attribs",
          "signature": "[Attr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:elAttribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "elContent",
          "package": "xml",
          "signature": "[Content]",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "elContent",
          "normalized": "[Content]",
          "package": "xml",
          "partial": "Content",
          "signature": "[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:elContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "elLine",
          "package": "xml",
          "signature": "Maybe Line",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "elLine",
          "package": "xml",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:elLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "elName",
          "package": "xml",
          "signature": "QName",
          "source": "src/Text-XML-Light-Types.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "elName",
          "package": "xml",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:elName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "qName",
          "package": "xml",
          "signature": "String",
          "source": "src/Text-XML-Light-Types.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "qName",
          "package": "xml",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:qName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "qPrefix",
          "package": "xml",
          "signature": "Maybe String",
          "source": "src/Text-XML-Light-Types.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "qPrefix",
          "package": "xml",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:qPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light.Types",
          "name": "qURI",
          "package": "xml",
          "signature": "Maybe String",
          "source": "src/Text-XML-Light-Types.html#QName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Light Types",
          "module": "Text.XML.Light.Types",
          "name": "qURI",
          "package": "xml",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light-Types.html#v:qURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lightweight XML parsing, filtering and generating library.\n\u003c/p\u003e\u003cp\u003eThis module reexports functions from:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eText.XML.Light.Types\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eText.XML.Light.Proc\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eText.XML.Light.Input\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eText.XML.Light.Output\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.XML.Light",
          "name": "Light",
          "package": "xml",
          "source": "src/Text-XML-Light.html",
          "type": "module"
        },
        "index": {
          "description": "lightweight XML parsing filtering and generating library This module reexports functions from Text.XML.Light.Types Text.XML.Light.Proc Text.XML.Light.Input Text.XML.Light.Output",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "Light",
          "package": "xml",
          "partial": "Light",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA smart element constructor which uses the type of its argument\n to determine what sort of element to make.\n\u003c/p\u003e",
          "module": "Text.XML.Light",
          "name": "Node",
          "package": "xml",
          "source": "src/Text-XML-Light.html#Node",
          "type": "class"
        },
        "index": {
          "description": "smart element constructor which uses the type of its argument to determine what sort of element to make",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "Node",
          "package": "xml",
          "partial": "Node",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an attribute to an element.\n\u003c/p\u003e",
          "module": "Text.XML.Light",
          "name": "add_attr",
          "package": "xml",
          "signature": "Attr -\u003e Element -\u003e Element",
          "source": "src/Text-XML-Light.html#add_attr",
          "type": "function"
        },
        "index": {
          "description": "Add an attribute to an element",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "add_attr",
          "normalized": "Attr-\u003eElement-\u003eElement",
          "package": "xml",
          "signature": "Attr-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#v:add_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd some attributes to an element.\n\u003c/p\u003e",
          "module": "Text.XML.Light",
          "name": "add_attrs",
          "package": "xml",
          "signature": "[Attr] -\u003e Element -\u003e Element",
          "source": "src/Text-XML-Light.html#add_attrs",
          "type": "function"
        },
        "index": {
          "description": "Add some attributes to an element",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "add_attrs",
          "normalized": "[Attr]-\u003eElement-\u003eElement",
          "package": "xml",
          "signature": "[Attr]-\u003eElement-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#v:add_attrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Light",
          "name": "node",
          "package": "xml",
          "signature": "QName -\u003e t -\u003e Element",
          "source": "src/Text-XML-Light.html#node",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "node",
          "normalized": "QName-\u003ea-\u003eElement",
          "package": "xml",
          "signature": "QName-\u003et-\u003eElement",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate node with unqualified name\n\u003c/p\u003e",
          "module": "Text.XML.Light",
          "name": "unode",
          "package": "xml",
          "signature": "String -\u003e t -\u003e Element",
          "source": "src/Text-XML-Light.html#unode",
          "type": "function"
        },
        "index": {
          "description": "Create node with unqualified name",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "unode",
          "normalized": "String-\u003ea-\u003eElement",
          "package": "xml",
          "signature": "String-\u003et-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#v:unode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unqualified name.\n\u003c/p\u003e",
          "module": "Text.XML.Light",
          "name": "unqual",
          "package": "xml",
          "signature": "String -\u003e QName",
          "source": "src/Text-XML-Light.html#unqual",
          "type": "function"
        },
        "index": {
          "description": "Create an unqualified name",
          "hierarchy": "Text XML Light",
          "module": "Text.XML.Light",
          "name": "unqual",
          "normalized": "String-\u003eQName",
          "package": "xml",
          "signature": "String-\u003eQName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml/docs/Text-XML-Light.html#v:unqual"
      }
    }
  ]
]