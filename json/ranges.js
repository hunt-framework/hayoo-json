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
        "word": "ranges"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranges",
          "name": "Ranges",
          "package": "ranges",
          "source": "src/Data-Ranges.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "Ranges",
          "package": "ranges",
          "partial": "Ranges",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranges",
          "name": "Range",
          "package": "ranges",
          "source": "src/Data-Ranges.html#Range",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "Range",
          "package": "ranges",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranges",
          "name": "Ranges",
          "package": "ranges",
          "source": "src/Data-Ranges.html#Ranges",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "Ranges",
          "package": "ranges",
          "partial": "Ranges",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#t:Ranges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranges",
          "name": "addRange",
          "package": "ranges",
          "signature": "Ranges a -\u003e Range a -\u003e Ranges a",
          "source": "src/Data-Ranges.html#addRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "addRange",
          "normalized": "Ranges a-\u003eRange a-\u003eRanges a",
          "package": "ranges",
          "partial": "Range",
          "signature": "Ranges a-\u003eRange a-\u003eRanges a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:addRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if a given range contains a particular value.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "inRange",
          "package": "ranges",
          "signature": "a -\u003e Range a -\u003e Bool",
          "source": "src/Data-Ranges.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Tests if given range contains particular value",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "inRange",
          "normalized": "a-\u003eRange a-\u003eBool",
          "package": "ranges",
          "partial": "Range",
          "signature": "a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if any of the ranges contains a particular value.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "inRanges",
          "package": "ranges",
          "signature": "a -\u003e Ranges a -\u003e Bool",
          "source": "src/Data-Ranges.html#inRanges",
          "type": "function"
        },
        "index": {
          "description": "Tests if any of the ranges contains particular value",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "inRanges",
          "normalized": "a-\u003eRanges a-\u003eBool",
          "package": "ranges",
          "partial": "Ranges",
          "signature": "a-\u003eRanges a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:inRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e from a lower and upper bound.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "range",
          "package": "ranges",
          "signature": "a -\u003e a -\u003e Range a",
          "source": "src/Data-Ranges.html#range",
          "type": "function"
        },
        "index": {
          "description": "Construct Range from lower and upper bound",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "range",
          "normalized": "a-\u003ea-\u003eRange a",
          "package": "ranges",
          "signature": "a-\u003ea-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eRanges\u003c/a\u003e\u003c/code\u003e from a list of lower and upper bounds.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "ranges",
          "package": "ranges",
          "signature": "[Range a] -\u003e Ranges a",
          "source": "src/Data-Ranges.html#ranges",
          "type": "function"
        },
        "index": {
          "description": "Construct Ranges from list of lower and upper bounds",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "ranges",
          "normalized": "[Range a]-\u003eRanges a",
          "package": "ranges",
          "signature": "[Range a]-\u003eRanges a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:ranges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range consisting of a single value.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "single",
          "package": "ranges",
          "signature": "a -\u003e Range a",
          "source": "src/Data-Ranges.html#single",
          "type": "function"
        },
        "index": {
          "description": "range consisting of single value",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "single",
          "normalized": "a-\u003eRange a",
          "package": "ranges",
          "signature": "a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows quick lookups using ranges.\n\u003c/p\u003e",
          "module": "Data.Ranges",
          "name": "toSet",
          "package": "ranges",
          "signature": "Ranges a -\u003e Set (Range a)",
          "source": "src/Data-Ranges.html#toSet",
          "type": "function"
        },
        "index": {
          "description": "Allows quick lookups using ranges",
          "hierarchy": "Data Ranges",
          "module": "Data.Ranges",
          "name": "toSet",
          "normalized": "Ranges a-\u003eSet(Range a)",
          "package": "ranges",
          "partial": "Set",
          "signature": "Ranges a-\u003eSet(Range a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ranges/docs/Data-Ranges.html#v:toSet"
      }
    }
  ]
]