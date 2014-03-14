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
        "word": "NonEmpty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "source": "src/Data-List-NonEmpty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "partial": "Non Empty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-empty list\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "data"
        },
        "index": {
          "description": "non-empty list",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "partial": "Non Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#t:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "signature": "NonEmpty",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "NonEmpty",
          "partial": "Non Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of a given NonEmpty\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "length'",
          "package": "NonEmpty",
          "signature": "NonEmpty a -\u003e Int",
          "source": "src/Data-List-NonEmpty.html#length%27",
          "type": "function"
        },
        "index": {
          "description": "Length of given NonEmpty",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "length'",
          "normalized": "NonEmpty a-\u003eInt",
          "package": "NonEmpty",
          "signature": "NonEmpty a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:length-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to convert a list to a NonEmpty. Returns the NonEmpty if it can, or fails in the monad otherwise.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "listToNonEmpty",
          "package": "NonEmpty",
          "signature": "[a] -\u003e m (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#listToNonEmpty",
          "type": "function"
        },
        "index": {
          "description": "Tries to convert list to NonEmpty Returns the NonEmpty if it can or fails in the monad otherwise",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "listToNonEmpty",
          "normalized": "[a]-\u003eb(NonEmpty a)",
          "package": "NonEmpty",
          "partial": "To Non Empty",
          "signature": "[a]-\u003em(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:listToNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "neHead",
          "package": "NonEmpty",
          "signature": "a",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "neHead",
          "package": "NonEmpty",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:neHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "neTail",
          "package": "NonEmpty",
          "signature": "[a]",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "neTail",
          "normalized": "[a]",
          "package": "NonEmpty",
          "partial": "Tail",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:neTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantic function for NonEmpty\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "nonEmptyToList",
          "package": "NonEmpty",
          "signature": "NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#nonEmptyToList",
          "type": "function"
        },
        "index": {
          "description": "Semantic function for NonEmpty",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "nonEmptyToList",
          "normalized": "NonEmpty a-\u003e[a]",
          "package": "NonEmpty",
          "partial": "Empty To List",
          "signature": "NonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NonEmpty/docs/Data-List-NonEmpty.html#v:nonEmptyToList"
      }
    }
  ]
]