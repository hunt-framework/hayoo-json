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
        "word": "xml-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralized cursors to be applied to different nodes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Cursor.Generic",
          "name": "Generic",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Generalized cursors to be applied to different nodes",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "Generic",
          "package": "xml-conduit",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Cursor.Generic",
          "name": "Axis",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor-Generic.html#Axis",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "Axis",
          "package": "xml-conduit",
          "partial": "Axis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#t:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor: contains an XML \u003ccode\u003eNode\u003c/code\u003e and pointers to its children, ancestors and siblings.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor.Generic",
          "name": "Cursor",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor-Generic.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "cursor contains an XML Node and pointers to its children ancestors and siblings",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "Cursor",
          "package": "xml-conduit",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an axis to a 'Cursor node'.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "($|)",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e (Cursor node -\u003e a) -\u003e a",
          "source": "src/Text-XML-Cursor-Generic.html#%24%7C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--124-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-36--124-\"]"
        },
        "index": {
          "description": "Apply an axis to Cursor node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "($|) $|",
          "normalized": "Cursor a-\u003e(Cursor a-\u003eb)-\u003eb",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003e(Cursor node-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an axis to the children of a 'Cursor node'.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "($/)",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e (Cursor node -\u003e [a]) -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%24%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-36--47-\"]"
        },
        "index": {
          "description": "Apply an axis to the children of Cursor node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "($/) $/",
          "normalized": "Cursor a-\u003e(Cursor a-\u003e[b])-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003e(Cursor node-\u003e[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an axis to the descendants of a 'Cursor node'.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "($//)",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e (Cursor node -\u003e [a]) -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%24%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--47--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-36--47--47-\"]"
        },
        "index": {
          "description": "Apply an axis to the descendants of Cursor node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "($//) $//",
          "normalized": "Cursor a-\u003e(Cursor a-\u003e[b])-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003e(Cursor node-\u003e[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36--47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an axis to a 'Cursor node' as well as its descendants.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "($.//)",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e (Cursor node -\u003e [a]) -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%24.%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36-.-47--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-36-.-47--47-\"]"
        },
        "index": {
          "description": "Apply an axis to Cursor node as well as its descendants",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "($.//) $.//",
          "normalized": "Cursor a-\u003e(Cursor a-\u003e[b])-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003e(Cursor node-\u003e[a])-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-36-.-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the result of an axis.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "(&|)",
          "package": "xml-conduit",
          "signature": "(Cursor node -\u003e [a]) -\u003e (a -\u003e b) -\u003e Cursor node -\u003e [b]",
          "source": "src/Text-XML-Cursor-Generic.html#%26%7C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--124-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-38--124-\"]"
        },
        "index": {
          "description": "Apply function to the result of an axis",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "(&|) &|",
          "normalized": "(Cursor a-\u003e[b])-\u003e(b-\u003ec)-\u003eCursor a-\u003e[c]",
          "package": "xml-conduit",
          "signature": "(Cursor node-\u003e[a])-\u003e(a-\u003eb)-\u003eCursor node-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two axes so that the second works on the children of the results\n of the first.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "(&/)",
          "package": "xml-conduit",
          "signature": "Axis node -\u003e (Cursor node -\u003e [a]) -\u003e Cursor node -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%26%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-38--47-\"]"
        },
        "index": {
          "description": "Combine two axes so that the second works on the children of the results of the first",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "(&/) &/",
          "normalized": "Axis a-\u003e(Cursor a-\u003e[b])-\u003eCursor a-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Axis node-\u003e(Cursor node-\u003e[a])-\u003eCursor node-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two axes so that the second works on the descendants of the results\n of the first.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "(&//)",
          "package": "xml-conduit",
          "signature": "Axis node -\u003e (Cursor node -\u003e [a]) -\u003e Cursor node -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%26%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--47--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-38--47--47-\"]"
        },
        "index": {
          "description": "Combine two axes so that the second works on the descendants of the results of the first",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "(&//) &//",
          "normalized": "Axis a-\u003e(Cursor a-\u003e[b])-\u003eCursor a-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Axis node-\u003e(Cursor node-\u003e[a])-\u003eCursor node-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38--47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two axes so that the second works on both the result nodes, and their\n descendants.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "(&.//)",
          "package": "xml-conduit",
          "signature": "Axis node -\u003e (Cursor node -\u003e [a]) -\u003e Cursor node -\u003e [a]",
          "source": "src/Text-XML-Cursor-Generic.html#%26.%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38-.-47--47-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-38-.-47--47-\"]"
        },
        "index": {
          "description": "Combine two axes so that the second works on both the result nodes and their descendants",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "(&.//) &.//",
          "normalized": "Axis a-\u003e(Cursor a-\u003e[b])-\u003eCursor a-\u003e[b]",
          "package": "xml-conduit",
          "signature": "Axis node-\u003e(Cursor node-\u003e[a])-\u003eCursor node-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-38-.-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right Kleisli composition of monads.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "(\u003e=\u003e)",
          "package": "xml-conduit",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-62--61--62-\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:-62--61--62-\"]"
        },
        "index": {
          "description": "Left-to-right Kleisli composition of monads",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "xml-conduit",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ancestor axis. XPath:\n \u003cem\u003ethe ancestor axis contains the ancestors of the context node; the ancestors of the context node consist of the parent of context node and the parent's parent and so on; thus, the ancestor axis will always include the root node, unless the context node is the root node\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "ancestor",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#ancestor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:ancestor\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:ancestor\"]"
        },
        "index": {
          "description": "The ancestor axis XPath the ancestor axis contains the ancestors of the context node the ancestors of the context node consist of the parent of context node and the parent parent and so on thus the ancestor axis will always include the root node unless the context node is the root node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "ancestor",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:ancestor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child axis. XPath:\n \u003cem\u003ethe child axis contains the children of the context node\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "child",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e [Cursor node]",
          "source": "src/Text-XML-Cursor-Generic.html#child",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:child\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:child\"]"
        },
        "index": {
          "description": "The child axis XPath the child axis contains the children of the context node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "child",
          "normalized": "Cursor a-\u003e[Cursor a]",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003e[Cursor node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe descendant axis. XPath:\n \u003cem\u003ethe descendant axis contains the descendants of the context node; a descendant is a child or a child of a child and so on; thus the descendant axis never contains attribute or namespace nodes\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "descendant",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#descendant",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:descendant\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:descendant\"]"
        },
        "index": {
          "description": "The descendant axis XPath the descendant axis contains the descendants of the context node descendant is child or child of child and so on thus the descendant axis never contains attribute or namespace nodes",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "descendant",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following axis. XPath:\n \u003cem\u003ethe following axis contains all nodes in the same document as the context node that are after the context node in document order, excluding any descendants and excluding attribute nodes and namespace nodes\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "following",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#following",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:following\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:following\"]"
        },
        "index": {
          "description": "The following axis XPath the following axis contains all nodes in the same document as the context node that are after the context node in document order excluding any descendants and excluding attribute nodes and namespace nodes",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "following",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:following"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following-sibling axis. XPath:\n \u003cem\u003ethe following-sibling axis contains all the following siblings of the context node [...]\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "followingSibling",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#followingSibling",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:followingSibling\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:followingSibling\"]"
        },
        "index": {
          "description": "The following-sibling axis XPath the following-sibling axis contains all the following siblings of the context node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "followingSibling",
          "package": "xml-conduit",
          "partial": "Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:followingSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current node.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "node",
          "package": "xml-conduit",
          "signature": "Cursor node -\u003e node",
          "source": "src/Text-XML-Cursor-Generic.html#node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:node\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:node\"]"
        },
        "index": {
          "description": "The current node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "node",
          "normalized": "Cursor a-\u003ea",
          "package": "xml-conduit",
          "signature": "Cursor node-\u003enode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify an axis by adding the context node itself as the first element of the result list.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "orSelf",
          "package": "xml-conduit",
          "signature": "Axis node -\u003e Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#orSelf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:orSelf\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:orSelf\"]"
        },
        "index": {
          "description": "Modify an axis by adding the context node itself as the first element of the result list",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "orSelf",
          "normalized": "Axis a-\u003eAxis a",
          "package": "xml-conduit",
          "partial": "Self",
          "signature": "Axis node-\u003eAxis node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:orSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parent axis. As described in XPath:\n \u003cem\u003ethe parent axis contains the parent of the context node, if there is one\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eEvery node but the root element of the document has a parent. Parent nodes\n will always be \u003ccode\u003eNodeElement\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "parent",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#parent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:parent\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:parent\"]"
        },
        "index": {
          "description": "The parent axis As described in XPath the parent axis contains the parent of the context node if there is one Every node but the root element of the document has parent Parent nodes will always be NodeElement",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "parent",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preceding axis. XPath:\n \u003cem\u003ethe preceding axis contains all nodes in the same document as the context node that are before the context node in document order, excluding any ancestors and excluding attribute nodes and namespace nodes\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "preceding",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#preceding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:preceding\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:preceding\"]"
        },
        "index": {
          "description": "The preceding axis XPath the preceding axis contains all nodes in the same document as the context node that are before the context node in document order excluding any ancestors and excluding attribute nodes and namespace nodes",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "preceding",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:preceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preceding-sibling axis. XPath:\n \u003cem\u003ethe preceding-sibling axis contains all the preceding siblings of the context node [...]\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Cursor.Generic\",\"Text.XML.Cursor\"]",
          "name": "precedingSibling",
          "package": "xml-conduit",
          "signature": "Axis node",
          "source": "src/Text-XML-Cursor-Generic.html#precedingSibling",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:precedingSibling\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:precedingSibling\"]"
        },
        "index": {
          "description": "The preceding-sibling axis XPath the preceding-sibling axis contains all the preceding siblings of the context node",
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "precedingSibling",
          "package": "xml-conduit",
          "partial": "Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:precedingSibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Cursor.Generic",
          "name": "toCursor",
          "package": "xml-conduit",
          "signature": "(node -\u003e [node])-\u003e node-\u003e Cursor node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Cursor Generic",
          "module": "Text.XML.Cursor.Generic",
          "name": "toCursor",
          "normalized": "(a-\u003e[a])-\u003ea-\u003eCursor a",
          "package": "xml-conduit",
          "partial": "Cursor",
          "signature": "(node-\u003e[node])-\u003enode-\u003eCursor node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor-Generic.html#v:toCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides for simple DOM traversal. It is inspired by XPath. There are two central concepts here:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e represents a node in the DOM. It also contains information on the node's \u003cem\u003elocation\u003c/em\u003e. While the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e datatype will only know of its children, a \u003ccode\u003eCursor\u003c/code\u003e knows about its parent and siblings as well. (The underlying mechanism allowing this is called a zipper, see \u003ca\u003ehttp://www.haskell.org/haskellwiki/Zipper\u003c/a\u003e and \u003ca\u003ehttp://www.haskell.org/haskellwiki/Tying_the_Knot\u003c/a\u003e.)\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e, in its simplest form, takes a \u003ccode\u003eCursor\u003c/code\u003e and returns a list of \u003ccode\u003eCursor\u003c/code\u003es. It is used for selections, such as finding children, ancestors, etc. Axes can be chained together to express complex rules, such as all children named \u003cem\u003efoo\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe terminology used in this module is taken directly from the XPath\n specification: \u003ca\u003ehttp://www.w3.org/TR/xpath/\u003c/a\u003e. For those familiar with XPath,\n the one major difference is that attributes are not considered nodes in this\n module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Cursor",
          "name": "Cursor",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides for simple DOM traversal It is inspired by XPath There are two central concepts here Cursor represents node in the DOM It also contains information on the node location While the Node datatype will only know of its children Cursor knows about its parent and siblings as well The underlying mechanism allowing this is called zipper see http www.haskell.org haskellwiki Zipper and http www.haskell.org haskellwiki Tying the Knot An Axis in its simplest form takes Cursor and returns list of Cursor It is used for selections such as finding children ancestors etc Axes can be chained together to express complex rules such as all children named foo The terminology used in this module is taken directly from the XPath specification http www.w3.org TR xpath For those familiar with XPath the one major difference is that attributes are not considered nodes in this module",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "Cursor",
          "package": "xml-conduit",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of an Axis that returns a list of Cursors.\n They are roughly modeled after \u003ca\u003ehttp://www.w3.org/TR/xpath/#axes\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAxes can be composed with \u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e, where e.g. \u003ccode\u003ef \u003e=\u003e g\u003c/code\u003e means that on all results of\n the \u003ccode\u003ef\u003c/code\u003e axis, the \u003ccode\u003eg\u003c/code\u003e axis will be applied, and all results joined together. \n Because Axis is just a type synonym for \u003ccode\u003eCursor -\u003e [Cursor]\u003c/code\u003e, it is possible to use\n other standard functions like \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e similarly.\n\u003c/p\u003e\u003cp\u003eThe operators \u003ccode\u003e&|\u003c/code\u003e, \u003ccode\u003e&/\u003c/code\u003e, \u003ccode\u003e&//\u003c/code\u003e and \u003ccode\u003e&.//\u003c/code\u003e can be used to combine axes so that the second\n axis works on the context nodes, children, descendants, respectively the context node as \n well as its descendants of the results of the first axis.\n\u003c/p\u003e\u003cp\u003eThe operators \u003ccode\u003e$|\u003c/code\u003e, \u003ccode\u003e$/\u003c/code\u003e, \u003ccode\u003e$//\u003c/code\u003e and \u003ccode\u003e$.//\u003c/code\u003e can be used to apply an axis (right-hand side)\n to a cursor so that it is applied on the cursor itself, its children, its descendants,\n respectively itself and its descendants.\n\u003c/p\u003e\u003cp\u003eNote that many of these operators also work on \u003cem\u003egeneralised Axes\u003c/em\u003e that can return \n lists of something other than Cursors, for example Content elements.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "Axis",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor.html#Axis",
          "type": "type"
        },
        "index": {
          "description": "The type of an Axis that returns list of Cursors They are roughly modeled after http www.w3.org TR xpath axes Axes can be composed with where e.g means that on all results of the axis the axis will be applied and all results joined together Because Axis is just type synonym for Cursor Cursor it is possible to use other standard functions like or concatMap similarly The operators and can be used to combine axes so that the second axis works on the context nodes children descendants respectively the context node as well as its descendants of the results of the first axis The operators and can be used to apply an axis right-hand side to cursor so that it is applied on the cursor itself its children its descendants respectively itself and its descendants Note that many of these operators also work on generalised Axes that can return lists of something other than Cursors for example Content elements",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "Axis",
          "package": "xml-conduit",
          "partial": "Axis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#t:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSomething that can be used in a predicate check as a boolean.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "Boolean",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor.html#Boolean",
          "type": "class"
        },
        "index": {
          "description": "Something that can be used in predicate check as boolean",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "Boolean",
          "package": "xml-conduit",
          "partial": "Boolean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor: contains an XML \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and pointers to its children, ancestors and siblings.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "Cursor",
          "package": "xml-conduit",
          "source": "src/Text-XML-Cursor.html#Cursor",
          "type": "type"
        },
        "index": {
          "description": "cursor contains an XML Node and pointers to its children ancestors and siblings",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "Cursor",
          "package": "xml-conduit",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all non-elements. Compare roughly to XPath:\n \u003cem\u003eA node test * is true for any node of the principal node type. For example, child::* will select all element children of the context node [...]\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "anyElement",
          "package": "xml-conduit",
          "signature": "Axis",
          "source": "src/Text-XML-Cursor.html#anyElement",
          "type": "function"
        },
        "index": {
          "description": "Remove all non-elements Compare roughly to XPath node test is true for any node of the principal node type For example child will select all element children of the context node",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "anyElement",
          "package": "xml-conduit",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:anyElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect attributes on the current element (or nothing if it is not an element). XPath:\n \u003cem\u003ethe attribute axis contains the attributes of the context node; the axis will be empty unless the context node is an element\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that this is not strictly an \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e, but will work with most combinators.\n\u003c/p\u003e\u003cp\u003eThe return list of the generalised axis contains as elements lists of \u003ccode\u003eContent\u003c/code\u003e \n elements, each full list representing an attribute value.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "attribute",
          "package": "xml-conduit",
          "signature": "Name -\u003e Cursor -\u003e [Text]",
          "source": "src/Text-XML-Cursor.html#attribute",
          "type": "function"
        },
        "index": {
          "description": "Select attributes on the current element or nothing if it is not an element XPath the attribute axis contains the attributes of the context node the axis will be empty unless the context node is an element Note that this is not strictly an Axis but will work with most combinators The return list of the generalised axis contains as elements lists of Content elements each full list representing an attribute value",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "attribute",
          "normalized": "Name-\u003eCursor-\u003e[Text]",
          "package": "xml-conduit",
          "signature": "Name-\u003eCursor-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only those element nodes containing the given attribute key/value pair.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "attributeIs",
          "package": "xml-conduit",
          "signature": "Name -\u003e Text -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#attributeIs",
          "type": "function"
        },
        "index": {
          "description": "Select only those element nodes containing the given attribute key value pair",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "attributeIs",
          "normalized": "Name-\u003eText-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Is",
          "signature": "Name-\u003eText-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:attributeIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Cursor",
          "name": "bool",
          "package": "xml-conduit",
          "signature": "a -\u003e Bool",
          "source": "src/Text-XML-Cursor.html#bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "bool",
          "normalized": "a-\u003eBool",
          "package": "xml-conduit",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter cursors that don't pass a check.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "check",
          "package": "xml-conduit",
          "signature": "(Cursor -\u003e b) -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#check",
          "type": "function"
        },
        "index": {
          "description": "Filter cursors that don pass check",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "check",
          "normalized": "(Cursor-\u003ea)-\u003eAxis",
          "package": "xml-conduit",
          "signature": "(Cursor-\u003eb)-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter elements that don't pass a check, and remove all non-elements.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "checkElement",
          "package": "xml-conduit",
          "signature": "(Element -\u003e b) -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#checkElement",
          "type": "function"
        },
        "index": {
          "description": "Filter elements that don pass check and remove all non-elements",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "checkElement",
          "normalized": "(Element-\u003ea)-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Element",
          "signature": "(Element-\u003eb)-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:checkElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter elements that don't pass a name check, and remove all non-elements.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "checkName",
          "package": "xml-conduit",
          "signature": "(Name -\u003e b) -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#checkName",
          "type": "function"
        },
        "index": {
          "description": "Filter elements that don pass name check and remove all non-elements",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "checkName",
          "normalized": "(Name-\u003ea)-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Name",
          "signature": "(Name-\u003eb)-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:checkName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter nodes that don't pass a check.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "checkNode",
          "package": "xml-conduit",
          "signature": "(Node -\u003e b) -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#checkNode",
          "type": "function"
        },
        "index": {
          "description": "Filter nodes that don pass check",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "checkNode",
          "normalized": "(Node-\u003ea)-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Node",
          "signature": "(Node-\u003eb)-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:checkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only text nodes, and directly give the \u003ccode\u003eContent\u003c/code\u003e values. XPath:\n \u003cem\u003eThe node test text() is true for any text node.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that this is not strictly an \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e, but will work with most combinators.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "content",
          "package": "xml-conduit",
          "signature": "Cursor -\u003e [Text]",
          "source": "src/Text-XML-Cursor.html#content",
          "type": "function"
        },
        "index": {
          "description": "Select only text nodes and directly give the Content values XPath The node test text is true for any text node Note that this is not strictly an Axis but will work with most combinators",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "content",
          "normalized": "Cursor-\u003e[Text]",
          "package": "xml-conduit",
          "signature": "Cursor-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut a cursor off from its parent. The idea is to allow restricting the scope of queries on it.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "cut",
          "package": "xml-conduit",
          "signature": "Cursor -\u003e Cursor",
          "source": "src/Text-XML-Cursor.html#cut",
          "type": "function"
        },
        "index": {
          "description": "Cut cursor off from its parent The idea is to allow restricting the scope of queries on it",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "cut",
          "normalized": "Cursor-\u003eCursor",
          "package": "xml-conduit",
          "signature": "Cursor-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only those elements with a matching tag name. XPath:\n \u003cem\u003eA node test that is a QName is true if and only if the type of the node (see [5 Data Model]) is the principal node type and has an expanded-name equal to the expanded-name specified by the QName.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "element",
          "package": "xml-conduit",
          "signature": "Name -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#element",
          "type": "function"
        },
        "index": {
          "description": "Select only those elements with matching tag name XPath node test that is QName is true if and only if the type of the node see Data Model is the principal node type and has an expanded-name equal to the expanded-name specified by the QName",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "element",
          "normalized": "Name-\u003eAxis",
          "package": "xml-conduit",
          "signature": "Name-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Cursor",
          "name": "force",
          "package": "xml-conduit",
          "signature": "e -\u003e [a] -\u003e f a",
          "source": "src/Text-XML-Cursor.html#force",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "force",
          "normalized": "a-\u003e[b]-\u003ec b",
          "package": "xml-conduit",
          "signature": "e-\u003e[a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Cursor",
          "name": "forceM",
          "package": "xml-conduit",
          "signature": "e -\u003e [f a] -\u003e f a",
          "source": "src/Text-XML-Cursor.html#forceM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "forceM",
          "normalized": "a-\u003e[b c]-\u003eb c",
          "package": "xml-conduit",
          "signature": "e-\u003e[f a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:forceM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e. It will point to the document root.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "fromDocument",
          "package": "xml-conduit",
          "signature": "Document -\u003e Cursor",
          "source": "src/Text-XML-Cursor.html#fromDocument",
          "type": "function"
        },
        "index": {
          "description": "Convert Document to Cursor It will point to the document root",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "fromDocument",
          "normalized": "Document-\u003eCursor",
          "package": "xml-conduit",
          "partial": "Document",
          "signature": "Document-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:fromDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e (without parents).\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "fromNode",
          "package": "xml-conduit",
          "signature": "Node -\u003e Cursor",
          "source": "src/Text-XML-Cursor.html#fromNode",
          "type": "function"
        },
        "index": {
          "description": "Convert Node to Cursor without parents",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "fromNode",
          "normalized": "Node-\u003eCursor",
          "package": "xml-conduit",
          "partial": "Node",
          "signature": "Node-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:fromNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only those element nodes with the given attribute.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "hasAttribute",
          "package": "xml-conduit",
          "signature": "Name -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#hasAttribute",
          "type": "function"
        },
        "index": {
          "description": "Select only those element nodes with the given attribute",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "hasAttribute",
          "normalized": "Name-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Attribute",
          "signature": "Name-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:hasAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect attributes on the current element (or nothing if it is not an element).  Namespace and case are ignored. XPath:\n \u003cem\u003ethe attribute axis contains the attributes of the context node; the axis will be empty unless the context node is an element\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that this is not strictly an \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e, but will work with most combinators.\n\u003c/p\u003e\u003cp\u003eThe return list of the generalised axis contains as elements lists of \u003ccode\u003eContent\u003c/code\u003e \n elements, each full list representing an attribute value.\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "laxAttribute",
          "package": "xml-conduit",
          "signature": "Text -\u003e Cursor -\u003e [Text]",
          "source": "src/Text-XML-Cursor.html#laxAttribute",
          "type": "function"
        },
        "index": {
          "description": "Select attributes on the current element or nothing if it is not an element Namespace and case are ignored XPath the attribute axis contains the attributes of the context node the axis will be empty unless the context node is an element Note that this is not strictly an Axis but will work with most combinators The return list of the generalised axis contains as elements lists of Content elements each full list representing an attribute value",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "laxAttribute",
          "normalized": "Text-\u003eCursor-\u003e[Text]",
          "package": "xml-conduit",
          "partial": "Attribute",
          "signature": "Text-\u003eCursor-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:laxAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect only those elements with a loosely matching tag name. Namespace and case are ignored. XPath:\n \u003cem\u003eA node test that is a QName is true if and only if the type of the node (see [5 Data Model]) is the principal node type and has an expanded-name equal to the expanded-name specified by the QName.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.XML.Cursor",
          "name": "laxElement",
          "package": "xml-conduit",
          "signature": "Text -\u003e Axis",
          "source": "src/Text-XML-Cursor.html#laxElement",
          "type": "function"
        },
        "index": {
          "description": "Select only those elements with loosely matching tag name Namespace and case are ignored XPath node test that is QName is true if and only if the type of the node see Data Model is the principal node type and has an expanded-name equal to the expanded-name specified by the QName",
          "hierarchy": "Text XML Cursor",
          "module": "Text.XML.Cursor",
          "name": "laxElement",
          "normalized": "Text-\u003eAxis",
          "package": "xml-conduit",
          "partial": "Element",
          "signature": "Text-\u003eAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Cursor.html#v:laxElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides both a native Haskell solution for parsing XML\n documents into a stream of events, and a set of parser combinators for\n dealing with a stream of events.\n\u003c/p\u003e\u003cp\u003eAs a simple example, if you have the following XML file:\n\u003c/p\u003e\u003cpre\u003e \u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e\n \u003cpeople\u003e\n     \u003cperson age=\"25\"\u003eMichael\u003c/person\u003e\n     \u003cperson age=\"2\"\u003eEliezer\u003c/person\u003e\n \u003c/people\u003e\n\u003c/pre\u003e\u003cp\u003eThen this code:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Control.Monad.Trans.Resource\n import Data.Conduit (($$))\n import Data.Text (Text, unpack)\n import Text.XML.Stream.Parse\n\n data Person = Person Int Text\n     deriving Show\n\n parsePerson = tagName \"person\" (requireAttr \"age\") $ \\age -\u003e do\n     name \u003c- content\n     return $ Person (read $ unpack age) name\n\n parsePeople = tagNoAttr \"people\" $ many parsePerson\n\n main = do\n     people \u003c- runResourceT $\n             parseFile def \"people.xml\" $$ force \"people required\" parsePeople\n     print people\n\u003c/pre\u003e\u003cp\u003ewill produce:\n\u003c/p\u003e\u003cpre\u003e [Person {age = 25, name = \"Michael\"},Person {age = 2, name = \"Eliezer\"}]\n\u003c/pre\u003e\u003cp\u003ePrevious versions of this module contained a number of more sophisticated\n functions written by Aristid Breitkreuz and Dmitry Olshansky. To keep this\n package simpler, those functions are being moved to a separate package. This\n note will be updated with the name of the package(s) when available.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "Parse",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides both native Haskell solution for parsing XML documents into stream of events and set of parser combinators for dealing with stream of events As simple example if you have the following XML file xml version encoding utf-8 people person age Michael person person age Eliezer person people Then this code LANGUAGE OverloadedStrings import Control.Monad.Trans.Resource import Data.Conduit import Data.Text Text unpack import Text.XML.Stream.Parse data Person Person Int Text deriving Show parsePerson tagName person requireAttr age age do name content return Person read unpack age name parsePeople tagNoAttr people many parsePerson main do people runResourceT parseFile def people.xml force people required parsePeople print people will produce Person age name Michael Person age name Eliezer Previous versions of this module contained number of more sophisticated functions written by Aristid Breitkreuz and Dmitry Olshansky To keep this package simpler those functions are being moved to separate package This note will be updated with the name of the package when available",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "Parse",
          "package": "xml-conduit",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for parsing attributes. By default, it requires you to deal with\n all attributes present on an element, and will throw an exception if there\n are unhandled attributes. Use the \u003ccode\u003e\u003ca\u003erequireAttr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoptionalAttr\u003c/a\u003e\u003c/code\u003e et al\n functions for handling an attribute, and \u003ccode\u003e\u003ca\u003eignoreAttrs\u003c/a\u003e\u003c/code\u003e if you would like to\n skip the rest of the attributes on an element.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance behave like \u003ccode\u003eFirst\u003c/code\u003e monoid. It chooses first\n parser which doesn't fail.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "AttrParser",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#AttrParser",
          "type": "data"
        },
        "index": {
          "description": "monad for parsing attributes By default it requires you to deal with all attributes present on an element and will throw an exception if there are unhandled attributes Use the requireAttr optionalAttr et al functions for handling an attribute and ignoreAttrs if you would like to skip the rest of the attributes on an element Alternative instance behave like First monoid It chooses first parser which doesn fail",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "AttrParser",
          "package": "xml-conduit",
          "partial": "Attr Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:AttrParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "DecodeEntities",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#DecodeEntities",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "DecodeEntities",
          "package": "xml-conduit",
          "partial": "Decode Entities",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:DecodeEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "EventPos",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#EventPos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "EventPos",
          "package": "xml-conduit",
          "partial": "Event Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:EventPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#ParseSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "partial": "Parse Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:ParseSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "PositionRange",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "PositionRange",
          "package": "xml-conduit",
          "partial": "Position Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:PositionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "XmlException",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "XmlException",
          "package": "xml-conduit",
          "partial": "Xml Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#t:XmlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "InvalidEndElement",
          "package": "xml-conduit",
          "signature": "InvalidEndElement Name",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "InvalidEndElement",
          "package": "xml-conduit",
          "partial": "Invalid End Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:InvalidEndElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "InvalidEntity",
          "package": "xml-conduit",
          "signature": "InvalidEntity Text",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "InvalidEntity",
          "package": "xml-conduit",
          "partial": "Invalid Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:InvalidEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "UnparsedAttributes",
          "package": "xml-conduit",
          "signature": "UnparsedAttributes [(Name, [Content])]",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "UnparsedAttributes",
          "normalized": "UnparsedAttributes[(Name,[Content])]",
          "package": "xml-conduit",
          "partial": "Unparsed Attributes",
          "signature": "UnparsedAttributes[(Name,[Content])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:UnparsedAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "XmlException",
          "package": "xml-conduit",
          "signature": "XmlException",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "XmlException",
          "package": "xml-conduit",
          "partial": "Xml Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:XmlException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of the first parser which returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. If no parsers\n succeed (i.e., return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e), this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "choose",
          "package": "xml-conduit",
          "signature": "[Consumer Event m (Maybe a)] -\u003e Consumer Event m (Maybe a)",
          "source": "src/Text-XML-Stream-Parse.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Get the value of the first parser which returns Just If no parsers succeed i.e return Just this function returns Nothing",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "choose",
          "normalized": "[Consumer Event a(Maybe b)]-\u003eConsumer Event a(Maybe b)",
          "package": "xml-conduit",
          "signature": "[Consumer Event m(Maybe a)]-\u003eConsumer Event m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs the next piece of content. If none if available, returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n This is simply a wrapper around \u003ccode\u003e\u003ca\u003econtentMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "content",
          "package": "xml-conduit",
          "signature": "Consumer Event m Text",
          "source": "src/Text-XML-Stream-Parse.html#content",
          "type": "function"
        },
        "index": {
          "description": "Grabs the next piece of content If none if available returns empty This is simply wrapper around contentMaybe",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "content",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs the next piece of content if available. This function skips over any\n comments and instructions and concatenates all content until the next start\n or end tag.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "contentMaybe",
          "package": "xml-conduit",
          "signature": "Consumer Event m (Maybe Text)",
          "source": "src/Text-XML-Stream-Parse.html#contentMaybe",
          "type": "function"
        },
        "index": {
          "description": "Grabs the next piece of content if available This function skips over any comments and instructions and concatenates all content until the next start or end tag",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "contentMaybe",
          "package": "xml-conduit",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:contentMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML4-compliant entity decoder. Handles numerics, the five standard\n character entities, and the additional 248 entities defined by HTML 4 and\n XHTML 1.\n\u003c/p\u003e\u003cp\u003eNote that HTML 5 introduces a drastically larger number of entities, and\n this code does not recognize most of them.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Parse\",\"Text.XML\"]",
          "name": "decodeHtmlEntities",
          "package": "xml-conduit",
          "signature": "DecodeEntities",
          "source": "src/Text-XML-Stream-Parse.html#decodeHtmlEntities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:decodeHtmlEntities\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:decodeHtmlEntities\"]"
        },
        "index": {
          "description": "HTML4-compliant entity decoder Handles numerics the five standard character entities and the additional entities defined by HTML and XHTML Note that HTML introduces drastically larger number of entities and this code does not recognize most of them",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "decodeHtmlEntities",
          "package": "xml-conduit",
          "partial": "Html Entities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:decodeHtmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of \u003ccode\u003e\u003ca\u003eDecodeEntities\u003c/a\u003e\u003c/code\u003e: handles numeric entities and\n the five standard character entities (lt, gt, amp, quot, apos).\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Parse\",\"Text.XML\"]",
          "name": "decodeXmlEntities",
          "package": "xml-conduit",
          "signature": "DecodeEntities",
          "source": "src/Text-XML-Stream-Parse.html#decodeXmlEntities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:decodeXmlEntities\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:decodeXmlEntities\"]"
        },
        "index": {
          "description": "Default implementation of DecodeEntities handles numeric entities and the five standard character entities lt gt amp quot apos",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "decodeXmlEntities",
          "package": "xml-conduit",
          "partial": "Xml Entities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:decodeXmlEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Parse\",\"Text.XML.Stream.Render\",\"Text.XML.Unresolved\",\"Text.XML\"]",
          "name": "def",
          "package": "xml-conduit",
          "signature": "a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:def\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:def\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:def\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:def\"]"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "def",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically determine which UTF variant is being used. This function\n first checks for BOMs, removing them as necessary, and then check for the\n equivalent of \u003c?xml for each of UTF-8, UTF-16LE\u003cem\u003eBE, and UTF-32LE\u003c/em\u003eBE. It\n defaults to assuming UTF-8.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "detectUtf",
          "package": "xml-conduit",
          "signature": "Conduit ByteString m Text",
          "source": "src/Text-XML-Stream-Parse.html#detectUtf",
          "type": "function"
        },
        "index": {
          "description": "Automatically determine which UTF variant is being used This function first checks for BOMs removing them as necessary and then check for the equivalent of xml for each of UTF-8 UTF-16LE BE and UTF-32LE BE It defaults to assuming UTF-8",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "detectUtf",
          "package": "xml-conduit",
          "partial": "Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:detectUtf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce an optional parser into a required parser. All of the \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e\n functions, \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e deal with \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e parsers. Use this when you\n want to finally force something to happen.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "force",
          "package": "xml-conduit",
          "signature": "String-\u003e ConduitM Event o m (Maybe a)-\u003e ConduitM Event o m a",
          "type": "function"
        },
        "index": {
          "description": "Force an optional parser into required parser All of the tag functions choose and many deal with Maybe parsers Use this when you want to finally force something to happen",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "force",
          "normalized": "String-\u003eConduitM Event a b(Maybe c)-\u003eConduitM Event a b c",
          "package": "xml-conduit",
          "signature": "String-\u003eConduitM Event o m(Maybe a)-\u003eConduitM Event o m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the remaining attributes on an element. Since this will clear the\n list of attributes, you must call this \u003cem\u003eafter\u003c/em\u003e any calls to \u003ccode\u003e\u003ca\u003erequireAttr\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eoptionalAttr\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "ignoreAttrs",
          "package": "xml-conduit",
          "signature": "AttrParser ()",
          "source": "src/Text-XML-Stream-Parse.html#ignoreAttrs",
          "type": "function"
        },
        "index": {
          "description": "Skip the remaining attributes on an element Since this will clear the list of attributes you must call this after any calls to requireAttr optionalAttr etc",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "ignoreAttrs",
          "normalized": "AttrParser()",
          "package": "xml-conduit",
          "partial": "Attrs",
          "signature": "AttrParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:ignoreAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep parsing elements as long as the parser returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "many",
          "package": "xml-conduit",
          "signature": "Consumer Event m (Maybe a) -\u003e Consumer Event m [a]",
          "source": "src/Text-XML-Stream-Parse.html#many",
          "type": "function"
        },
        "index": {
          "description": "Keep parsing elements as long as the parser returns Just",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "many",
          "normalized": "Consumer Event a(Maybe b)-\u003eConsumer Event a[b]",
          "package": "xml-conduit",
          "signature": "Consumer Event m(Maybe a)-\u003eConsumer Event m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the value for an attribute if present.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "optionalAttr",
          "package": "xml-conduit",
          "signature": "Name -\u003e AttrParser (Maybe Text)",
          "source": "src/Text-XML-Stream-Parse.html#optionalAttr",
          "type": "function"
        },
        "index": {
          "description": "Return the value for an attribute if present",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "optionalAttr",
          "normalized": "Name-\u003eAttrParser(Maybe Text)",
          "package": "xml-conduit",
          "partial": "Attr",
          "signature": "Name-\u003eAttrParser(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:optionalAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "optionalAttrRaw",
          "package": "xml-conduit",
          "signature": "((Name, [Content]) -\u003e Maybe b) -\u003e AttrParser (Maybe b)",
          "source": "src/Text-XML-Stream-Parse.html#optionalAttrRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "optionalAttrRaw",
          "normalized": "((Name,[Content])-\u003eMaybe a)-\u003eAttrParser(Maybe a)",
          "package": "xml-conduit",
          "partial": "Attr Raw",
          "signature": "((Name,[Content])-\u003eMaybe b)-\u003eAttrParser(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:optionalAttrRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of the first parser which returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. If no parsers\n succeed (i.e., return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e), this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e orE a b = choose [a, b]\n\u003c/pre\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "orE",
          "package": "xml-conduit",
          "signature": "Consumer Event m (Maybe a) -\u003e Consumer Event m (Maybe a) -\u003e Consumer Event m (Maybe a)",
          "source": "src/Text-XML-Stream-Parse.html#orE",
          "type": "function"
        },
        "index": {
          "description": "Get the value of the first parser which returns Just If no parsers succeed i.e return Just this function returns Nothing orE choose",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "orE",
          "normalized": "Consumer Event a(Maybe b)-\u003eConsumer Event a(Maybe b)-\u003eConsumer Event a(Maybe b)",
          "package": "xml-conduit",
          "signature": "Consumer Event m(Maybe a)-\u003eConsumer Event m(Maybe a)-\u003eConsumer Event m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:orE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a byte stream into \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es. This function is implemented fully in\n Haskell using attoparsec-text for parsing. The produced error messages do\n not give line/column information, so you may prefer to stick with the parser\n provided by libxml-enumerator. However, this has the advantage of not\n relying on any C libraries.\n\u003c/p\u003e\u003cp\u003eThis relies on \u003ccode\u003e\u003ca\u003edetectUtf\u003c/a\u003e\u003c/code\u003e to determine character encoding, and \u003ccode\u003e\u003ca\u003eparseText\u003c/a\u003e\u003c/code\u003e\n to do the actual parsing.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "parseBytes",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Conduit ByteString m Event",
          "source": "src/Text-XML-Stream-Parse.html#parseBytes",
          "type": "function"
        },
        "index": {
          "description": "Parses byte stream into Event This function is implemented fully in Haskell using attoparsec-text for parsing The produced error messages do not give line column information so you may prefer to stick with the parser provided by libxml-enumerator However this has the advantage of not relying on any libraries This relies on detectUtf to determine character encoding and parseText to do the actual parsing",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "parseBytes",
          "normalized": "ParseSettings-\u003eConduit ByteString a Event",
          "package": "xml-conduit",
          "partial": "Bytes",
          "signature": "ParseSettings-\u003eConduit ByteString m Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:parseBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "parseBytesPos",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Conduit ByteString m EventPos",
          "source": "src/Text-XML-Stream-Parse.html#parseBytesPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "parseBytesPos",
          "normalized": "ParseSettings-\u003eConduit ByteString a EventPos",
          "package": "xml-conduit",
          "partial": "Bytes Pos",
          "signature": "ParseSettings-\u003eConduit ByteString m EventPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:parseBytesPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function which reads a file from disk using \u003ccode\u003eenumFile\u003c/code\u003e, detects\n character encoding using \u003ccode\u003e\u003ca\u003edetectUtf\u003c/a\u003e\u003c/code\u003e, parses the XML using \u003ccode\u003e\u003ca\u003eparseBytes\u003c/a\u003e\u003c/code\u003e, and\n then hands off control to your supplied parser.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "parseFile",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e FilePath -\u003e Producer m Event",
          "source": "src/Text-XML-Stream-Parse.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "helper function which reads file from disk using enumFile detects character encoding using detectUtf parses the XML using parseBytes and then hands off control to your supplied parser",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "parseFile",
          "normalized": "ParseSettings-\u003eFilePath-\u003eProducer a Event",
          "package": "xml-conduit",
          "partial": "File",
          "signature": "ParseSettings-\u003eFilePath-\u003eProducer m Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an event stream from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "parseLBS",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e ByteString -\u003e Producer m Event",
          "source": "src/Text-XML-Stream-Parse.html#parseLBS",
          "type": "function"
        },
        "index": {
          "description": "Parse an event stream from lazy ByteString",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "parseLBS",
          "normalized": "ParseSettings-\u003eByteString-\u003eProducer a Event",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "ParseSettings-\u003eByteString-\u003eProducer m Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a character stream into \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es. This function is implemented\n fully in Haskell using attoparsec-text for parsing. The produced error\n messages do not give line/column information, so you may prefer to stick\n with the parser provided by libxml-enumerator. However, this has the\n advantage of not relying on any C libraries.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "parseText",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Conduit Text m EventPos",
          "source": "src/Text-XML-Stream-Parse.html#parseText",
          "type": "function"
        },
        "index": {
          "description": "Parses character stream into Event This function is implemented fully in Haskell using attoparsec-text for parsing The produced error messages do not give line column information so you may prefer to stick with the parser provided by libxml-enumerator However this has the advantage of not relying on any libraries",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "parseText",
          "normalized": "ParseSettings-\u003eConduit Text a EventPos",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "ParseSettings-\u003eConduit Text m EventPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:parseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Stream.Parse\",\"Text.XML.Unresolved\",\"Text.XML\"]",
          "name": "psDecodeEntities",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e DecodeEntities",
          "source": "src/Text-XML-Stream-Parse.html#psDecodeEntities",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:psDecodeEntities\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:psDecodeEntities\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:psDecodeEntities\"]"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "psDecodeEntities",
          "normalized": "ParseSettings-\u003eDecodeEntities",
          "package": "xml-conduit",
          "partial": "Decode Entities",
          "signature": "ParseSettings-\u003eDecodeEntities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:psDecodeEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that a certain attribute be present and return its value.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "requireAttr",
          "package": "xml-conduit",
          "signature": "Name -\u003e AttrParser Text",
          "source": "src/Text-XML-Stream-Parse.html#requireAttr",
          "type": "function"
        },
        "index": {
          "description": "Require that certain attribute be present and return its value",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "requireAttr",
          "normalized": "Name-\u003eAttrParser Text",
          "package": "xml-conduit",
          "partial": "Attr",
          "signature": "Name-\u003eAttrParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:requireAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "requireAttrRaw",
          "package": "xml-conduit",
          "signature": "String -\u003e ((Name, [Content]) -\u003e Maybe b) -\u003e AttrParser b",
          "source": "src/Text-XML-Stream-Parse.html#requireAttrRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "requireAttrRaw",
          "normalized": "String-\u003e((Name,[Content])-\u003eMaybe a)-\u003eAttrParser a",
          "package": "xml-conduit",
          "partial": "Attr Raw",
          "signature": "String-\u003e((Name,[Content])-\u003eMaybe b)-\u003eAttrParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:requireAttrRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generic way to parse a tag. It takes a predicate for checking if\n this is the correct tag name, an \u003ccode\u003e\u003ca\u003eAttrParser\u003c/a\u003e\u003c/code\u003e for handling attributes, and\n then a parser for dealing with content.\n\u003c/p\u003e\u003cp\u003eThis function automatically absorbs its balancing closing tag, and will\n throw an exception if not all of the attributes or child elements are\n consumed. If you want to allow extra attributes, see \u003ccode\u003e\u003ca\u003eignoreAttrs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function automatically ignores comments, instructions and whitespace.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "tag",
          "package": "xml-conduit",
          "signature": "(Name -\u003e Maybe a) -\u003e (a -\u003e AttrParser b) -\u003e (b -\u003e ConduitM Event o m c) -\u003e ConduitM Event o m (Maybe c)",
          "source": "src/Text-XML-Stream-Parse.html#tag",
          "type": "function"
        },
        "index": {
          "description": "The most generic way to parse tag It takes predicate for checking if this is the correct tag name an AttrParser for handling attributes and then parser for dealing with content This function automatically absorbs its balancing closing tag and will throw an exception if not all of the attributes or child elements are consumed If you want to allow extra attributes see ignoreAttrs This function automatically ignores comments instructions and whitespace",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "tag",
          "normalized": "(Name-\u003eMaybe a)-\u003e(a-\u003eAttrParser b)-\u003e(b-\u003eConduitM Event c d e)-\u003eConduitM Event c d(Maybe e)",
          "package": "xml-conduit",
          "signature": "(Name-\u003eMaybe a)-\u003e(a-\u003eAttrParser b)-\u003e(b-\u003eConduitM Event o m c)-\u003eConduitM Event o m(Maybe c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplified version of \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e which matches for specific tag names instead\n of taking a predicate function. This is often sufficient, and when combined\n with OverloadedStrings and the IsString instance of \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, can prove to be\n very concise.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "tagName",
          "package": "xml-conduit",
          "signature": "Name -\u003e AttrParser a -\u003e (a -\u003e ConduitM Event o m b) -\u003e ConduitM Event o m (Maybe b)",
          "source": "src/Text-XML-Stream-Parse.html#tagName",
          "type": "function"
        },
        "index": {
          "description": "simplified version of tag which matches for specific tag names instead of taking predicate function This is often sufficient and when combined with OverloadedStrings and the IsString instance of Name can prove to be very concise",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "tagName",
          "normalized": "Name-\u003eAttrParser a-\u003e(a-\u003eConduitM Event b c d)-\u003eConduitM Event b c(Maybe d)",
          "package": "xml-conduit",
          "partial": "Name",
          "signature": "Name-\u003eAttrParser a-\u003e(a-\u003eConduitM Event o m b)-\u003eConduitM Event o m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:tagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA further simplified tag parser, which requires that no attributes exist.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "tagNoAttr",
          "package": "xml-conduit",
          "signature": "Name -\u003e ConduitM Event o m a -\u003e ConduitM Event o m (Maybe a)",
          "source": "src/Text-XML-Stream-Parse.html#tagNoAttr",
          "type": "function"
        },
        "index": {
          "description": "further simplified tag parser which requires that no attributes exist",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "tagNoAttr",
          "normalized": "Name-\u003eConduitM Event a b c-\u003eConduitM Event a b(Maybe c)",
          "package": "xml-conduit",
          "partial": "No Attr",
          "signature": "Name-\u003eConduitM Event o m a-\u003eConduitM Event o m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:tagNoAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplified version of \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e which matches against boolean predicates.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Parse",
          "name": "tagPredicate",
          "package": "xml-conduit",
          "signature": "(Name -\u003e Bool) -\u003e AttrParser a -\u003e (a -\u003e ConduitM Event o m b) -\u003e ConduitM Event o m (Maybe b)",
          "source": "src/Text-XML-Stream-Parse.html#tagPredicate",
          "type": "function"
        },
        "index": {
          "description": "simplified version of tag which matches against boolean predicates",
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "tagPredicate",
          "normalized": "(Name-\u003eBool)-\u003eAttrParser a-\u003e(a-\u003eConduitM Event b c d)-\u003eConduitM Event b c(Maybe d)",
          "package": "xml-conduit",
          "partial": "Predicate",
          "signature": "(Name-\u003eBool)-\u003eAttrParser a-\u003e(a-\u003eConduitM Event o m b)-\u003eConduitM Event o m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:tagPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "xmlBadInput",
          "package": "xml-conduit",
          "signature": "Maybe Event",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "xmlBadInput",
          "package": "xml-conduit",
          "partial": "Bad Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:xmlBadInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Parse",
          "name": "xmlErrorMessage",
          "package": "xml-conduit",
          "signature": "String",
          "source": "src/Text-XML-Stream-Parse.html#XmlException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Stream Parse",
          "module": "Text.XML.Stream.Parse",
          "name": "xmlErrorMessage",
          "package": "xml-conduit",
          "partial": "Error Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Parse.html#v:xmlErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eEnumeratee\u003c/code\u003es to render XML \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es. Unlike libxml-enumerator and\n expat-enumerator, this module does not provide IO and ST variants, since the\n underlying rendering operations are pure functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Stream.Render",
          "name": "Render",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Enumeratee to render XML Event Unlike libxml-enumerator and expat-enumerator this module does not provide IO and ST variants since the underlying rendering operations are pure functions",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "Render",
          "package": "xml-conduit",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Stream.Render",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Render.html#RenderSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "partial": "Render Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#t:RenderSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to create an ordering function suitable for\n use as the value of \u003ccode\u003e\u003ca\u003ersAttrOrder\u003c/a\u003e\u003c/code\u003e. The ordering function is created\n from an explicit ordering of the attributes, specified as a list of\n tuples, as follows: In each tuple, the first component is the\n \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e of an element, and the second component is a list of\n attributes names. When the given element is rendered, the\n attributes listed, when present, appear first in the given order,\n followed by any other attributes in arbitrary order. If an element\n does not appear, all of its attributes are rendered in arbitrary\n order.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Render\",\"Text.XML\"]",
          "name": "orderAttrs",
          "package": "xml-conduit",
          "signature": "[(Name, [Name])] -\u003e Name -\u003e Map Name Text -\u003e [(Name, Text)]",
          "source": "src/Text-XML-Stream-Render.html#orderAttrs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:orderAttrs\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:orderAttrs\"]"
        },
        "index": {
          "description": "Convenience function to create an ordering function suitable for use as the value of rsAttrOrder The ordering function is created from an explicit ordering of the attributes specified as list of tuples as follows In each tuple the first component is the Name of an element and the second component is list of attributes names When the given element is rendered the attributes listed when present appear first in the given order followed by any other attributes in arbitrary order If an element does not appear all of its attributes are rendered in arbitrary order",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "orderAttrs",
          "normalized": "[(Name,[Name])]-\u003eName-\u003eMap Name Text-\u003e[(Name,Text)]",
          "package": "xml-conduit",
          "partial": "Attrs",
          "signature": "[(Name,[Name])]-\u003eName-\u003eMap Name Text-\u003e[(Name,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:orderAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a stream of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into a prettified one, adding extra\n whitespace. Note that this can change the meaning of your XML.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Render",
          "name": "prettify",
          "package": "xml-conduit",
          "signature": "Conduit Event m Event",
          "source": "src/Text-XML-Stream-Render.html#prettify",
          "type": "function"
        },
        "index": {
          "description": "Convert stream of Event into prettified one adding extra whitespace Note that this can change the meaning of your XML",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "prettify",
          "package": "xml-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:prettify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a stream of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into a stream of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. Builders are from\n the blaze-builder package, and allow the create of optimally sized\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es with minimal buffer copying.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Render",
          "name": "renderBuilder",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Conduit Event m Builder",
          "source": "src/Text-XML-Stream-Render.html#renderBuilder",
          "type": "function"
        },
        "index": {
          "description": "Render stream of Event into stream of Builder Builders are from the blaze-builder package and allow the create of optimally sized ByteString with minimal buffer copying",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "renderBuilder",
          "normalized": "RenderSettings-\u003eConduit Event a Builder",
          "package": "xml-conduit",
          "partial": "Builder",
          "signature": "RenderSettings-\u003eConduit Event m Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:renderBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a stream of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. This function\n wraps around \u003ccode\u003e\u003ca\u003erenderBuilder\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuilderToByteString\u003c/a\u003e\u003c/code\u003e, so it produces\n optimally sized \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es with minimal buffer copying.\n\u003c/p\u003e\u003cp\u003eThe output is UTF8 encoded.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Render",
          "name": "renderBytes",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Conduit Event m ByteString",
          "source": "src/Text-XML-Stream-Render.html#renderBytes",
          "type": "function"
        },
        "index": {
          "description": "Render stream of Event into stream of ByteString This function wraps around renderBuilder and builderToByteString so it produces optimally sized ByteString with minimal buffer copying The output is UTF8 encoded",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "renderBytes",
          "normalized": "RenderSettings-\u003eConduit Event a ByteString",
          "package": "xml-conduit",
          "partial": "Bytes",
          "signature": "RenderSettings-\u003eConduit Event m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:renderBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a stream of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. This function\n wraps around \u003ccode\u003e\u003ca\u003erenderBuilder\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebuilderToByteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erenderBytes\u003c/a\u003e\u003c/code\u003e, so it\n produces optimally sized \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es with minimal buffer copying.\n\u003c/p\u003e",
          "module": "Text.XML.Stream.Render",
          "name": "renderText",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Conduit Event m Text",
          "source": "src/Text-XML-Stream-Render.html#renderText",
          "type": "function"
        },
        "index": {
          "description": "Render stream of Event into stream of ByteString This function wraps around renderBuilder builderToByteString and renderBytes so it produces optimally sized ByteString with minimal buffer copying",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "renderText",
          "normalized": "RenderSettings-\u003eConduit Event a Text",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "RenderSettings-\u003eConduit Event m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:renderText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify how to turn the unordered attributes used by the \u003ca\u003eText.XML\u003c/a\u003e\n module into an ordered list.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Render\",\"Text.XML\"]",
          "name": "rsAttrOrder",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Name -\u003e Map Name Text -\u003e [(Name, Text)]",
          "source": "src/Text-XML-Stream-Render.html#rsAttrOrder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsAttrOrder\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:rsAttrOrder\"]"
        },
        "index": {
          "description": "Specify how to turn the unordered attributes used by the Text.XML module into an ordered list",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "rsAttrOrder",
          "normalized": "RenderSettings-\u003eName-\u003eMap Name Text-\u003e[(Name,Text)]",
          "package": "xml-conduit",
          "partial": "Attr Order",
          "signature": "RenderSettings-\u003eName-\u003eMap Name Text-\u003e[(Name,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsAttrOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines some top level namespace definitions to be used, in the form\n of (prefix, namespace). This has absolutely no impact on the meaning\n of your documents, but can increase readability by moving commonly\n used namespace declarations to the top level.\n\u003c/p\u003e",
          "module": "[\"Text.XML.Stream.Render\",\"Text.XML.Unresolved\",\"Text.XML\"]",
          "name": "rsNamespaces",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e [(Text, Text)]",
          "source": "src/Text-XML-Stream-Render.html#rsNamespaces",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsNamespaces\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:rsNamespaces\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:rsNamespaces\"]"
        },
        "index": {
          "description": "Defines some top level namespace definitions to be used in the form of prefix namespace This has absolutely no impact on the meaning of your documents but can increase readability by moving commonly used namespace declarations to the top level",
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "rsNamespaces",
          "normalized": "RenderSettings-\u003e[(Text,Text)]",
          "package": "xml-conduit",
          "partial": "Namespaces",
          "signature": "RenderSettings-\u003e[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsNamespaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.XML.Stream.Render\",\"Text.XML.Unresolved\",\"Text.XML\"]",
          "name": "rsPretty",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Bool",
          "source": "src/Text-XML-Stream-Render.html#rsPretty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsPretty\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:rsPretty\",\"http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:rsPretty\"]"
        },
        "index": {
          "hierarchy": "Text XML Stream Render",
          "module": "Text.XML.Stream.Render",
          "name": "rsPretty",
          "normalized": "RenderSettings-\u003eBool",
          "package": "xml-conduit",
          "partial": "Pretty",
          "signature": "RenderSettings-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Stream-Render.html#v:rsPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDOM-based XML parsing and rendering.\n\u003c/p\u003e\u003cp\u003eIn this module, attribute values and content nodes can contain either raw\n text or entities. In most cases, these can be fully resolved at parsing. If\n that is the case for your documents, the \u003ca\u003eText.XML\u003c/a\u003e module provides\n simplified datatypes that only contain raw text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.Unresolved",
          "name": "Unresolved",
          "package": "xml-conduit",
          "source": "src/Text-XML-Unresolved.html",
          "type": "module"
        },
        "index": {
          "description": "DOM-based XML parsing and rendering In this module attribute values and content nodes can contain either raw text or entities In most cases these can be fully resolved at parsing If that is the case for your documents the Text.XML module provides simplified datatypes that only contain raw text",
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "Unresolved",
          "package": "xml-conduit",
          "partial": "Unresolved",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "InvalidEventStream",
          "package": "xml-conduit",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "InvalidEventStream",
          "package": "xml-conduit",
          "partial": "Invalid Event Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#t:InvalidEventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#ParseSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "partial": "Parse Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#t:ParseSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Render.html#RenderSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "partial": "Render Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#t:RenderSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "ContentAfterRoot",
          "package": "xml-conduit",
          "signature": "ContentAfterRoot EventPos",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "ContentAfterRoot",
          "package": "xml-conduit",
          "partial": "Content After Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:ContentAfterRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "InvalidInlineDoctype",
          "package": "xml-conduit",
          "signature": "InvalidInlineDoctype EventPos",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "InvalidInlineDoctype",
          "package": "xml-conduit",
          "partial": "Invalid Inline Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:InvalidInlineDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "MissingEndElement",
          "package": "xml-conduit",
          "signature": "MissingEndElement Name (Maybe EventPos)",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "MissingEndElement",
          "package": "xml-conduit",
          "partial": "Missing End Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:MissingEndElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "MissingRootElement",
          "package": "xml-conduit",
          "signature": "MissingRootElement",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "MissingRootElement",
          "package": "xml-conduit",
          "partial": "Missing Root Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:MissingRootElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "UnterminatedInlineDoctype",
          "package": "xml-conduit",
          "signature": "UnterminatedInlineDoctype",
          "source": "src/Text-XML-Unresolved.html#InvalidEventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "UnterminatedInlineDoctype",
          "package": "xml-conduit",
          "partial": "Unterminated Inline Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:UnterminatedInlineDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "fromEvents",
          "package": "xml-conduit",
          "signature": "Consumer EventPos m Document",
          "source": "src/Text-XML-Unresolved.html#fromEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "fromEvents",
          "package": "xml-conduit",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:fromEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "parseLBS",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e ByteString -\u003e Either SomeException Document",
          "source": "src/Text-XML-Unresolved.html#parseLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "parseLBS",
          "normalized": "ParseSettings-\u003eByteString-\u003eEither SomeException Document",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "ParseSettings-\u003eByteString-\u003eEither SomeException Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "parseLBS_",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e ByteString -\u003e Document",
          "source": "src/Text-XML-Unresolved.html#parseLBS_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "parseLBS_",
          "normalized": "ParseSettings-\u003eByteString-\u003eDocument",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "ParseSettings-\u003eByteString-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:parseLBS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "parseText",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Text -\u003e Either SomeException Document",
          "source": "src/Text-XML-Unresolved.html#parseText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "parseText",
          "normalized": "ParseSettings-\u003eText-\u003eEither SomeException Document",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "ParseSettings-\u003eText-\u003eEither SomeException Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:parseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "parseText_",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Text -\u003e Document",
          "source": "src/Text-XML-Unresolved.html#parseText_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "parseText_",
          "normalized": "ParseSettings-\u003eText-\u003eDocument",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "ParseSettings-\u003eText-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:parseText_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "readFile",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e FilePath -\u003e IO Document",
          "source": "src/Text-XML-Unresolved.html#readFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "readFile",
          "normalized": "ParseSettings-\u003eFilePath-\u003eIO Document",
          "package": "xml-conduit",
          "partial": "File",
          "signature": "ParseSettings-\u003eFilePath-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "renderBuilder",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e Producer m Builder",
          "source": "src/Text-XML-Unresolved.html#renderBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "renderBuilder",
          "normalized": "RenderSettings-\u003eDocument-\u003eProducer a Builder",
          "package": "xml-conduit",
          "partial": "Builder",
          "signature": "RenderSettings-\u003eDocument-\u003eProducer m Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:renderBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "renderBytes",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e Producer m ByteString",
          "source": "src/Text-XML-Unresolved.html#renderBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "renderBytes",
          "normalized": "RenderSettings-\u003eDocument-\u003eProducer a ByteString",
          "package": "xml-conduit",
          "partial": "Bytes",
          "signature": "RenderSettings-\u003eDocument-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:renderBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "renderLBS",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e ByteString",
          "source": "src/Text-XML-Unresolved.html#renderLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "renderLBS",
          "normalized": "RenderSettings-\u003eDocument-\u003eByteString",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "RenderSettings-\u003eDocument-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:renderLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "renderText",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e Producer m Text",
          "source": "src/Text-XML-Unresolved.html#renderText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "renderText",
          "normalized": "RenderSettings-\u003eDocument-\u003eProducer a Text",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "RenderSettings-\u003eDocument-\u003eProducer m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:renderText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "sinkDoc",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Consumer ByteString m Document",
          "source": "src/Text-XML-Unresolved.html#sinkDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "sinkDoc",
          "normalized": "ParseSettings-\u003eConsumer ByteString a Document",
          "package": "xml-conduit",
          "partial": "Doc",
          "signature": "ParseSettings-\u003eConsumer ByteString m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:sinkDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "sinkTextDoc",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Consumer Text m Document",
          "source": "src/Text-XML-Unresolved.html#sinkTextDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "sinkTextDoc",
          "normalized": "ParseSettings-\u003eConsumer Text a Document",
          "package": "xml-conduit",
          "partial": "Text Doc",
          "signature": "ParseSettings-\u003eConsumer Text m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:sinkTextDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "toEvents",
          "package": "xml-conduit",
          "signature": "Document -\u003e [Event]",
          "source": "src/Text-XML-Unresolved.html#toEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "toEvents",
          "normalized": "Document-\u003e[Event]",
          "package": "xml-conduit",
          "partial": "Events",
          "signature": "Document-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:toEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Unresolved",
          "name": "writeFile",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e FilePath -\u003e Document -\u003e IO ()",
          "source": "src/Text-XML-Unresolved.html#writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Unresolved",
          "module": "Text.XML.Unresolved",
          "name": "writeFile",
          "normalized": "RenderSettings-\u003eFilePath-\u003eDocument-\u003eIO()",
          "package": "xml-conduit",
          "partial": "File",
          "signature": "RenderSettings-\u003eFilePath-\u003eDocument-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML-Unresolved.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDOM-based parsing and rendering.\n\u003c/p\u003e\u003cp\u003eThis module requires that all entities be resolved at parsing. If you need\n to interact with unresolved entities, please use \u003ca\u003eText.XML.Unresolved\u003c/a\u003e. This\n is the recommended module for most uses cases.\n\u003c/p\u003e\u003cp\u003eWhile many of the datatypes in this module are simply re-exported from\n \u003ccode\u003eData.XML.Types\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003e are all redefined here to\n disallow the possibility of unresolved entities. Conversion functions are\n provided to switch between the two sets of datatypes.\n\u003c/p\u003e\u003cp\u003eFor simpler, bidirectional traversal of the DOM tree, see the\n \u003ca\u003eText.XML.Cursor\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML",
          "name": "XML",
          "package": "xml-conduit",
          "source": "src/Text-XML.html",
          "type": "module"
        },
        "index": {
          "description": "DOM-based parsing and rendering This module requires that all entities be resolved at parsing If you need to interact with unresolved entities please use Text.XML.Unresolved This is the recommended module for most uses cases While many of the datatypes in this module are simply re-exported from Data.XML.Types Document Node and Element are all redefined here to disallow the possibility of unresolved entities Conversion functions are provided to switch between the two sets of datatypes For simpler bidirectional traversal of the DOM tree see the Text.XML.Cursor module",
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "XML",
          "package": "xml-conduit",
          "partial": "XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: due to the incredible complexity of DTDs, this type only supports\n external subsets. I've tried adding internal subset types, but they\n quickly gain more code than the rest of this module put together.\n\u003c/p\u003e\u003cp\u003eIt is possible that some future version of this library might support\n internal subsets, but I am no longer actively working on adding them.\n\u003c/p\u003e",
          "module": "Text.XML",
          "name": "Doctype",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "description": "Note due to the incredible complexity of DTDs this type only supports external subsets ve tried adding internal subset types but they quickly gain more code than the rest of this module put together It is possible that some future version of this library might support internal subsets but am no longer actively working on adding them",
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Doctype",
          "package": "xml-conduit",
          "partial": "Doctype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Document",
          "package": "xml-conduit",
          "source": "src/Text-XML.html#Document",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Document",
          "package": "xml-conduit",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Element",
          "package": "xml-conduit",
          "source": "src/Text-XML.html#Element",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Element",
          "package": "xml-conduit",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "ExternalID",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "ExternalID",
          "package": "xml-conduit",
          "partial": "External ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:ExternalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Instruction",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Instruction",
          "package": "xml-conduit",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Miscellaneous",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Miscellaneous",
          "package": "xml-conduit",
          "partial": "Miscellaneous",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Miscellaneous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fully qualified name.\n\u003c/p\u003e\u003cp\u003ePrefixes are not semantically important; they are included only to\n simplify pass-through parsing. When comparing names with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n methods, prefixes are ignored.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eIsString\u003c/code\u003e instance supports Clark notation; see\n \u003ca\u003ehttp://www.jclark.com/xml/xmlns.htm\u003c/a\u003e and\n \u003ca\u003ehttp://infohost.nmt.edu/tcc/help/pubs/pylxml/etree-QName.html\u003c/a\u003e. Use\n the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension for very simple \u003ccode\u003eName\u003c/code\u003e\n construction:\n\u003c/p\u003e\u003cpre\u003e myname :: Name\n myname = \"{http://example.com/ns/my-namespace}my-name\"\n\u003c/pre\u003e",
          "module": "Text.XML",
          "name": "Name",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "description": "fully qualified name Prefixes are not semantically important they are included only to simplify pass-through parsing When comparing names with Eq or Ord methods prefixes are ignored The IsString instance supports Clark notation see http www.jclark.com xml xmlns.htm and http infohost.nmt.edu tcc help pubs pylxml etree-QName.html Use the OverloadedStrings language extension for very simple Name construction myname Name myname http example.com ns my-namespace my-name",
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Name",
          "package": "xml-conduit",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Node",
          "package": "xml-conduit",
          "source": "src/Text-XML.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Node",
          "package": "xml-conduit",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Parse.html#ParseSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "ParseSettings",
          "package": "xml-conduit",
          "partial": "Parse Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:ParseSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Prologue",
          "package": "xml-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Prologue",
          "package": "xml-conduit",
          "partial": "Prologue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:Prologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "source": "src/Text-XML-Stream-Render.html#RenderSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "RenderSettings",
          "package": "xml-conduit",
          "partial": "Render Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:RenderSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "UnresolvedEntityException",
          "package": "xml-conduit",
          "source": "src/Text-XML.html#UnresolvedEntityException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "UnresolvedEntityException",
          "package": "xml-conduit",
          "partial": "Unresolved Entity Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:UnresolvedEntityException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "XMLException",
          "package": "xml-conduit",
          "source": "src/Text-XML.html#XMLException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "XMLException",
          "package": "xml-conduit",
          "partial": "XMLException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#t:XMLException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Doctype",
          "package": "xml-conduit",
          "signature": "Doctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Doctype",
          "package": "xml-conduit",
          "partial": "Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Doctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Document",
          "package": "xml-conduit",
          "signature": "Document",
          "source": "src/Text-XML.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Document",
          "package": "xml-conduit",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Element",
          "package": "xml-conduit",
          "signature": "Element",
          "source": "src/Text-XML.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Element",
          "package": "xml-conduit",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Instruction",
          "package": "xml-conduit",
          "signature": "Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Instruction",
          "package": "xml-conduit",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "InvalidXMLFile",
          "package": "xml-conduit",
          "signature": "InvalidXMLFile FilePath SomeException",
          "source": "src/Text-XML.html#XMLException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "InvalidXMLFile",
          "package": "xml-conduit",
          "partial": "Invalid XMLFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:InvalidXMLFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "MiscComment",
          "package": "xml-conduit",
          "signature": "MiscComment Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "MiscComment",
          "package": "xml-conduit",
          "partial": "Misc Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:MiscComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "MiscInstruction",
          "package": "xml-conduit",
          "signature": "MiscInstruction Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "MiscInstruction",
          "package": "xml-conduit",
          "partial": "Misc Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:MiscInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Name",
          "package": "xml-conduit",
          "signature": "Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Name",
          "package": "xml-conduit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "NodeComment",
          "package": "xml-conduit",
          "signature": "NodeComment Text",
          "source": "src/Text-XML.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "NodeComment",
          "package": "xml-conduit",
          "partial": "Node Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:NodeComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "NodeContent",
          "package": "xml-conduit",
          "signature": "NodeContent Text",
          "source": "src/Text-XML.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "NodeContent",
          "package": "xml-conduit",
          "partial": "Node Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:NodeContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "NodeElement",
          "package": "xml-conduit",
          "signature": "NodeElement Element",
          "source": "src/Text-XML.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "NodeElement",
          "package": "xml-conduit",
          "partial": "Node Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:NodeElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "NodeInstruction",
          "package": "xml-conduit",
          "signature": "NodeInstruction Instruction",
          "source": "src/Text-XML.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "NodeInstruction",
          "package": "xml-conduit",
          "partial": "Node Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:NodeInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "Prologue",
          "package": "xml-conduit",
          "signature": "Prologue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "Prologue",
          "package": "xml-conduit",
          "partial": "Prologue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:Prologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "PublicID",
          "package": "xml-conduit",
          "signature": "PublicID Text Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "PublicID",
          "package": "xml-conduit",
          "partial": "Public ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:PublicID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "SystemID",
          "package": "xml-conduit",
          "signature": "SystemID Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "SystemID",
          "package": "xml-conduit",
          "partial": "System ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:SystemID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "UnresolvedEntityException",
          "package": "xml-conduit",
          "signature": "UnresolvedEntityException (Set Text)",
          "source": "src/Text-XML.html#UnresolvedEntityException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "UnresolvedEntityException",
          "package": "xml-conduit",
          "partial": "Unresolved Entity Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:UnresolvedEntityException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "doctypeID",
          "package": "xml-conduit",
          "signature": "Maybe ExternalID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "doctypeID",
          "package": "xml-conduit",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:doctypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "doctypeName",
          "package": "xml-conduit",
          "signature": "Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "doctypeName",
          "package": "xml-conduit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:doctypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "documentEpilogue",
          "package": "xml-conduit",
          "signature": "[Miscellaneous]",
          "source": "src/Text-XML.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "documentEpilogue",
          "normalized": "[Miscellaneous]",
          "package": "xml-conduit",
          "partial": "Epilogue",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:documentEpilogue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "documentPrologue",
          "package": "xml-conduit",
          "signature": "Prologue",
          "source": "src/Text-XML.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "documentPrologue",
          "package": "xml-conduit",
          "partial": "Prologue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:documentPrologue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "documentRoot",
          "package": "xml-conduit",
          "signature": "Element",
          "source": "src/Text-XML.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "documentRoot",
          "package": "xml-conduit",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:documentRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "elementAttributes",
          "package": "xml-conduit",
          "signature": "Map Name Text",
          "source": "src/Text-XML.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "elementAttributes",
          "package": "xml-conduit",
          "partial": "Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:elementAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "elementName",
          "package": "xml-conduit",
          "signature": "Name",
          "source": "src/Text-XML.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "elementName",
          "package": "xml-conduit",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:elementName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "elementNodes",
          "package": "xml-conduit",
          "signature": "[Node]",
          "source": "src/Text-XML.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "elementNodes",
          "normalized": "[Node]",
          "package": "xml-conduit",
          "partial": "Nodes",
          "signature": "[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:elementNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "fromEvents",
          "package": "xml-conduit",
          "signature": "Consumer EventPos m Document",
          "source": "src/Text-XML.html#fromEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "fromEvents",
          "package": "xml-conduit",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:fromEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "fromXMLDocument",
          "package": "xml-conduit",
          "signature": "Document -\u003e Either (Set Text) Document",
          "source": "src/Text-XML.html#fromXMLDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "fromXMLDocument",
          "normalized": "Document-\u003eEither(Set Text)Document",
          "package": "xml-conduit",
          "partial": "XMLDocument",
          "signature": "Document-\u003eEither(Set Text)Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:fromXMLDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "fromXMLElement",
          "package": "xml-conduit",
          "signature": "Element -\u003e Either (Set Text) Element",
          "source": "src/Text-XML.html#fromXMLElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "fromXMLElement",
          "normalized": "Element-\u003eEither(Set Text)Element",
          "package": "xml-conduit",
          "partial": "XMLElement",
          "signature": "Element-\u003eEither(Set Text)Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:fromXMLElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "fromXMLNode",
          "package": "xml-conduit",
          "signature": "Node -\u003e Either (Set Text) Node",
          "source": "src/Text-XML.html#fromXMLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "fromXMLNode",
          "normalized": "Node-\u003eEither(Set Text)Node",
          "package": "xml-conduit",
          "partial": "XMLNode",
          "signature": "Node-\u003eEither(Set Text)Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:fromXMLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "instructionData",
          "package": "xml-conduit",
          "signature": "Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "instructionData",
          "package": "xml-conduit",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:instructionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "instructionTarget",
          "package": "xml-conduit",
          "signature": "Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "instructionTarget",
          "package": "xml-conduit",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:instructionTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "nameLocalName",
          "package": "xml-conduit",
          "signature": "Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "nameLocalName",
          "package": "xml-conduit",
          "partial": "Local Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:nameLocalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "nameNamespace",
          "package": "xml-conduit",
          "signature": "Maybe Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "nameNamespace",
          "package": "xml-conduit",
          "partial": "Namespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:nameNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "namePrefix",
          "package": "xml-conduit",
          "signature": "Maybe Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "namePrefix",
          "package": "xml-conduit",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:namePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "parseLBS",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e ByteString -\u003e Either SomeException Document",
          "source": "src/Text-XML.html#parseLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "parseLBS",
          "normalized": "ParseSettings-\u003eByteString-\u003eEither SomeException Document",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "ParseSettings-\u003eByteString-\u003eEither SomeException Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "parseLBS_",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e ByteString -\u003e Document",
          "source": "src/Text-XML.html#parseLBS_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "parseLBS_",
          "normalized": "ParseSettings-\u003eByteString-\u003eDocument",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "ParseSettings-\u003eByteString-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:parseLBS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "parseText",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Text -\u003e Either SomeException Document",
          "source": "src/Text-XML.html#parseText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "parseText",
          "normalized": "ParseSettings-\u003eText-\u003eEither SomeException Document",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "ParseSettings-\u003eText-\u003eEither SomeException Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:parseText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "parseText_",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Text -\u003e Document",
          "source": "src/Text-XML.html#parseText_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "parseText_",
          "normalized": "ParseSettings-\u003eText-\u003eDocument",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "ParseSettings-\u003eText-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:parseText_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "prologueAfter",
          "package": "xml-conduit",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "prologueAfter",
          "normalized": "[Miscellaneous]",
          "package": "xml-conduit",
          "partial": "After",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:prologueAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "prologueBefore",
          "package": "xml-conduit",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "prologueBefore",
          "normalized": "[Miscellaneous]",
          "package": "xml-conduit",
          "partial": "Before",
          "signature": "[Miscellaneous]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:prologueBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "prologueDoctype",
          "package": "xml-conduit",
          "signature": "Maybe Doctype",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "prologueDoctype",
          "package": "xml-conduit",
          "partial": "Doctype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:prologueDoctype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "readFile",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e FilePath -\u003e IO Document",
          "source": "src/Text-XML.html#readFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "readFile",
          "normalized": "ParseSettings-\u003eFilePath-\u003eIO Document",
          "package": "xml-conduit",
          "partial": "File",
          "signature": "ParseSettings-\u003eFilePath-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "renderBytes",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e Producer m ByteString",
          "source": "src/Text-XML.html#renderBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "renderBytes",
          "normalized": "RenderSettings-\u003eDocument-\u003eProducer a ByteString",
          "package": "xml-conduit",
          "partial": "Bytes",
          "signature": "RenderSettings-\u003eDocument-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:renderBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "renderLBS",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e ByteString",
          "source": "src/Text-XML.html#renderLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "renderLBS",
          "normalized": "RenderSettings-\u003eDocument-\u003eByteString",
          "package": "xml-conduit",
          "partial": "LBS",
          "signature": "RenderSettings-\u003eDocument-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:renderLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "renderText",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e Document -\u003e Text",
          "source": "src/Text-XML.html#renderText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "renderText",
          "normalized": "RenderSettings-\u003eDocument-\u003eText",
          "package": "xml-conduit",
          "partial": "Text",
          "signature": "RenderSettings-\u003eDocument-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:renderText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "sinkDoc",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Consumer ByteString m Document",
          "source": "src/Text-XML.html#sinkDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "sinkDoc",
          "normalized": "ParseSettings-\u003eConsumer ByteString a Document",
          "package": "xml-conduit",
          "partial": "Doc",
          "signature": "ParseSettings-\u003eConsumer ByteString m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:sinkDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "sinkTextDoc",
          "package": "xml-conduit",
          "signature": "ParseSettings -\u003e Consumer Text m Document",
          "source": "src/Text-XML.html#sinkTextDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "sinkTextDoc",
          "normalized": "ParseSettings-\u003eConsumer Text a Document",
          "package": "xml-conduit",
          "partial": "Text Doc",
          "signature": "ParseSettings-\u003eConsumer Text m Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:sinkTextDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "toXMLDocument",
          "package": "xml-conduit",
          "signature": "Document -\u003e Document",
          "source": "src/Text-XML.html#toXMLDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "toXMLDocument",
          "normalized": "Document-\u003eDocument",
          "package": "xml-conduit",
          "partial": "XMLDocument",
          "signature": "Document-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:toXMLDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "toXMLElement",
          "package": "xml-conduit",
          "signature": "Element -\u003e Element",
          "source": "src/Text-XML.html#toXMLElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "toXMLElement",
          "normalized": "Element-\u003eElement",
          "package": "xml-conduit",
          "partial": "XMLElement",
          "signature": "Element-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:toXMLElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "toXMLNode",
          "package": "xml-conduit",
          "signature": "Node -\u003e Node",
          "source": "src/Text-XML.html#toXMLNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "toXMLNode",
          "normalized": "Node-\u003eNode",
          "package": "xml-conduit",
          "partial": "XMLNode",
          "signature": "Node-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:toXMLNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML",
          "name": "writeFile",
          "package": "xml-conduit",
          "signature": "RenderSettings -\u003e FilePath -\u003e Document -\u003e IO ()",
          "source": "src/Text-XML.html#writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML",
          "module": "Text.XML",
          "name": "writeFile",
          "normalized": "RenderSettings-\u003eFilePath-\u003eDocument-\u003eIO()",
          "package": "xml-conduit",
          "partial": "File",
          "signature": "RenderSettings-\u003eFilePath-\u003eDocument-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-conduit/docs/Text-XML.html#v:writeFile"
      }
    }
  ]
]