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
        "word": "html-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.DOM",
          "name": "DOM",
          "package": "html-conduit",
          "source": "src/Text-HTML-DOM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HTML DOM",
          "module": "Text.HTML.DOM",
          "name": "DOM",
          "package": "html-conduit",
          "partial": "DOM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/html-conduit/docs/Text-HTML-DOM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a stream of bytes to a stream of properly balanced \u003ccode\u003eEvent\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eNote that there may be multiple (or not) root elements. \u003ccode\u003esinkDoc\u003c/code\u003e addresses\n that case.\n\u003c/p\u003e",
          "module": "Text.HTML.DOM",
          "name": "eventConduit",
          "package": "html-conduit",
          "signature": "Conduit ByteString m Event",
          "source": "src/Text-HTML-DOM.html#eventConduit",
          "type": "function"
        },
        "index": {
          "description": "Converts stream of bytes to stream of properly balanced Event Note that there may be multiple or not root elements sinkDoc addresses that case",
          "hierarchy": "Text HTML DOM",
          "module": "Text.HTML.DOM",
          "name": "eventConduit",
          "package": "html-conduit",
          "partial": "Conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-conduit/docs/Text-HTML-DOM.html#v:eventConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.DOM",
          "name": "parseLBS",
          "package": "html-conduit",
          "signature": "ByteString -\u003e Document",
          "source": "src/Text-HTML-DOM.html#parseLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML DOM",
          "module": "Text.HTML.DOM",
          "name": "parseLBS",
          "normalized": "ByteString-\u003eDocument",
          "package": "html-conduit",
          "partial": "LBS",
          "signature": "ByteString-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-conduit/docs/Text-HTML-DOM.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.DOM",
          "name": "readFile",
          "package": "html-conduit",
          "signature": "FilePath -\u003e IO Document",
          "source": "src/Text-HTML-DOM.html#readFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML DOM",
          "module": "Text.HTML.DOM",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO Document",
          "package": "html-conduit",
          "partial": "File",
          "signature": "FilePath-\u003eIO Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-conduit/docs/Text-HTML-DOM.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.DOM",
          "name": "sinkDoc",
          "package": "html-conduit",
          "signature": "Sink ByteString m Document",
          "source": "src/Text-HTML-DOM.html#sinkDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HTML DOM",
          "module": "Text.HTML.DOM",
          "name": "sinkDoc",
          "package": "html-conduit",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/html-conduit/docs/Text-HTML-DOM.html#v:sinkDoc"
      }
    }
  ]
]