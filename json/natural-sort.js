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
        "word": "natural-sort"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHuman-friendly text collation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algorithms.NaturalSort",
          "name": "NaturalSort",
          "package": "natural-sort",
          "source": "src/Algorithms-NaturalSort.html",
          "type": "module"
        },
        "index": {
          "description": "Human-friendly text collation",
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "NaturalSort",
          "package": "natural-sort",
          "partial": "Natural Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algorithms.NaturalSort",
          "name": "NaturalSort",
          "package": "natural-sort",
          "source": "src/Algorithms-NaturalSort.html#NaturalSort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "NaturalSort",
          "package": "natural-sort",
          "partial": "Natural Sort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#t:NaturalSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algorithms.NaturalSort",
          "name": "SortKey",
          "package": "natural-sort",
          "source": "src/Algorithms-NaturalSort.html#SortKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "SortKey",
          "package": "natural-sort",
          "partial": "Sort Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#t:SortKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two values, using their natural ordering.\n\u003c/p\u003e",
          "module": "Algorithms.NaturalSort",
          "name": "compare",
          "package": "natural-sort",
          "signature": "a -\u003e a -\u003e Ordering",
          "source": "src/Algorithms-NaturalSort.html#compare",
          "type": "function"
        },
        "index": {
          "description": "Compare two values using their natural ordering",
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "natural-sort",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a sortable type into textual and numeric sections, with no\n collation transformation.\n\u003c/p\u003e\u003cp\u003eIf advanced collation is required, either pre-transform the input\n (using eg \u003ccode\u003e\u003ca\u003etoLower\u003c/a\u003e\u003c/code\u003e) or use \u003ccode\u003e\u003ca\u003esortKeyCollated\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithms.NaturalSort",
          "name": "sortKey",
          "package": "natural-sort",
          "signature": "a -\u003e SortKey",
          "source": "src/Algorithms-NaturalSort.html#sortKey",
          "type": "method"
        },
        "index": {
          "description": "Split sortable type into textual and numeric sections with no collation transformation If advanced collation is required either pre-transform the input using eg toLower or use sortKeyCollated",
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "sortKey",
          "normalized": "a-\u003eSortKey",
          "package": "natural-sort",
          "partial": "Key",
          "signature": "a-\u003eSortKey",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#v:sortKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a sortable type into textual and numeric sections, using\n a custom collation transformation. This is useful for providing\n language- or use-specific ordering.\n\u003c/p\u003e",
          "module": "Algorithms.NaturalSort",
          "name": "sortKeyCollated",
          "package": "natural-sort",
          "signature": "(Text -\u003e ByteString) -\u003e a -\u003e SortKey",
          "source": "src/Algorithms-NaturalSort.html#sortKeyCollated",
          "type": "method"
        },
        "index": {
          "description": "Split sortable type into textual and numeric sections using custom collation transformation This is useful for providing language or use-specific ordering",
          "hierarchy": "Algorithms NaturalSort",
          "module": "Algorithms.NaturalSort",
          "name": "sortKeyCollated",
          "normalized": "(Text-\u003eByteString)-\u003ea-\u003eSortKey",
          "package": "natural-sort",
          "partial": "Key Collated",
          "signature": "(Text-\u003eByteString)-\u003ea-\u003eSortKey",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/natural-sort/docs/Algorithms-NaturalSort.html#v:sortKeyCollated"
      }
    }
  ]
]