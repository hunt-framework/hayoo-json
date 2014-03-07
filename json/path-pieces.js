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
        "word": "path-pieces"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "PathPieces",
          "package": "path-pieces",
          "source": "src/Web-PathPieces.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "PathPieces",
          "package": "path-pieces",
          "partial": "Path Pieces",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "PathMultiPiece",
          "package": "path-pieces",
          "source": "src/Web-PathPieces.html#PathMultiPiece",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "PathMultiPiece",
          "package": "path-pieces",
          "partial": "Path Multi Piece",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#t:PathMultiPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "PathPiece",
          "package": "path-pieces",
          "source": "src/Web-PathPieces.html#PathPiece",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "PathPiece",
          "package": "path-pieces",
          "partial": "Path Piece",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#t:PathPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use fromPathMultiPiece instead of fromMultiPiece\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.PathPieces",
          "name": "fromMultiPiece",
          "package": "path-pieces",
          "signature": "[Text] -\u003e Maybe ps",
          "source": "src/Web-PathPieces.html#fromMultiPiece",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use fromPathMultiPiece instead of fromMultiPiece",
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "fromMultiPiece",
          "normalized": "[Text]-\u003eMaybe a",
          "package": "path-pieces",
          "partial": "Multi Piece",
          "signature": "[Text]-\u003eMaybe ps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:fromMultiPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "fromPathMultiPiece",
          "package": "path-pieces",
          "signature": "[Text] -\u003e Maybe s",
          "source": "src/Web-PathPieces.html#fromPathMultiPiece",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "fromPathMultiPiece",
          "normalized": "[Text]-\u003eMaybe a",
          "package": "path-pieces",
          "partial": "Path Multi Piece",
          "signature": "[Text]-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:fromPathMultiPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "fromPathPiece",
          "package": "path-pieces",
          "signature": "Text -\u003e Maybe s",
          "source": "src/Web-PathPieces.html#fromPathPiece",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "fromPathPiece",
          "normalized": "Text-\u003eMaybe a",
          "package": "path-pieces",
          "partial": "Path Piece",
          "signature": "Text-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:fromPathPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use fromPathPiece instead of fromSinglePiece\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.PathPieces",
          "name": "fromSinglePiece",
          "package": "path-pieces",
          "signature": "Text -\u003e Maybe p",
          "source": "src/Web-PathPieces.html#fromSinglePiece",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use fromPathPiece instead of fromSinglePiece",
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "fromSinglePiece",
          "normalized": "Text-\u003eMaybe a",
          "package": "path-pieces",
          "partial": "Single Piece",
          "signature": "Text-\u003eMaybe p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:fromSinglePiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use toPathMultiPiece instead of toMultiPiece\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.PathPieces",
          "name": "toMultiPiece",
          "package": "path-pieces",
          "signature": "ps -\u003e [Text]",
          "source": "src/Web-PathPieces.html#toMultiPiece",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use toPathMultiPiece instead of toMultiPiece",
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "toMultiPiece",
          "normalized": "a-\u003e[Text]",
          "package": "path-pieces",
          "partial": "Multi Piece",
          "signature": "ps-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:toMultiPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "toPathMultiPiece",
          "package": "path-pieces",
          "signature": "s -\u003e [Text]",
          "source": "src/Web-PathPieces.html#toPathMultiPiece",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "toPathMultiPiece",
          "normalized": "a-\u003e[Text]",
          "package": "path-pieces",
          "partial": "Path Multi Piece",
          "signature": "s-\u003e[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:toPathMultiPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.PathPieces",
          "name": "toPathPiece",
          "package": "path-pieces",
          "signature": "s -\u003e Text",
          "source": "src/Web-PathPieces.html#toPathPiece",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "toPathPiece",
          "normalized": "a-\u003eText",
          "package": "path-pieces",
          "partial": "Path Piece",
          "signature": "s-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:toPathPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use toPathPiece instead of toSinglePiece\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.PathPieces",
          "name": "toSinglePiece",
          "package": "path-pieces",
          "signature": "p -\u003e Text",
          "source": "src/Web-PathPieces.html#toSinglePiece",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use toPathPiece instead of toSinglePiece",
          "hierarchy": "Web PathPieces",
          "module": "Web.PathPieces",
          "name": "toSinglePiece",
          "normalized": "a-\u003eText",
          "package": "path-pieces",
          "partial": "Single Piece",
          "signature": "p-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/path-pieces/docs/Web-PathPieces.html#v:toSinglePiece"
      }
    }
  ]
]