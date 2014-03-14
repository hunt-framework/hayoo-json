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
        "word": "patience"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements \"patience diff\" and the patience algorithm for the longest\n   increasing subsequence problem.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "Patience",
          "package": "patience",
          "source": "src/Data-Algorithm-Patience.html",
          "type": "module"
        },
        "index": {
          "description": "Implements patience diff and the patience algorithm for the longest increasing subsequence problem",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "Patience",
          "package": "patience",
          "partial": "Patience",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn element of a computed difference.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "Item",
          "package": "patience",
          "source": "src/Data-Algorithm-Patience.html#Item",
          "type": "data"
        },
        "index": {
          "description": "An element of computed difference",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "Item",
          "package": "patience",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue taken from both lists.  Both values are provided, in case\n   your type has a non-structural definition of equality.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "Both",
          "package": "patience",
          "signature": "Both t t",
          "source": "src/Data-Algorithm-Patience.html#Item",
          "type": "function"
        },
        "index": {
          "description": "Value taken from both lists Both values are provided in case your type has non-structural definition of equality",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "Both",
          "package": "patience",
          "partial": "Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:Both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue taken from the \"new\" list, i.e. right argument to \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "New",
          "package": "patience",
          "signature": "New t",
          "source": "src/Data-Algorithm-Patience.html#Item",
          "type": "function"
        },
        "index": {
          "description": "Value taken from the new list i.e right argument to diff",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "New",
          "package": "patience",
          "partial": "New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:New"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue taken from the \"old\" list, i.e. left argument to \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "Old",
          "package": "patience",
          "signature": "Old t",
          "source": "src/Data-Algorithm-Patience.html#Item",
          "type": "function"
        },
        "index": {
          "description": "Value taken from the old list i.e left argument to diff",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "Old",
          "package": "patience",
          "partial": "Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:Old"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difference between two lists, according to the\n \"patience diff\" algorithm.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "diff",
          "package": "patience",
          "signature": "[t] -\u003e [t] -\u003e [Item t]",
          "source": "src/Data-Algorithm-Patience.html#diff",
          "type": "function"
        },
        "index": {
          "description": "The difference between two lists according to the patience diff algorithm",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "diff",
          "normalized": "[a]-\u003e[a]-\u003e[Item a]",
          "package": "patience",
          "signature": "[t]-\u003e[t]-\u003e[Item t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character \u003ccode\u003e'-'\u003c/code\u003e or \u003ccode\u003e'+'\u003c/code\u003e or \u003ccode\u003e' '\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eOld\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNew\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "itemChar",
          "package": "patience",
          "signature": "Item t -\u003e Char",
          "source": "src/Data-Algorithm-Patience.html#itemChar",
          "type": "function"
        },
        "index": {
          "description": "The character or or for Old or New or Both respectively",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "itemChar",
          "normalized": "Item a-\u003eChar",
          "package": "patience",
          "partial": "Char",
          "signature": "Item t-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:itemChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value from an \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.  For \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e, returns the \"old\" value.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "itemValue",
          "package": "patience",
          "signature": "Item t -\u003e t",
          "source": "src/Data-Algorithm-Patience.html#itemValue",
          "type": "function"
        },
        "index": {
          "description": "The value from an Item For Both returns the old value",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "itemValue",
          "normalized": "Item a-\u003ea",
          "package": "patience",
          "partial": "Value",
          "signature": "Item t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:itemValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven: a list of distinct integers.  Picks a subset of the integers\n   in the same order, i.e. a subsequence, with the property that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e it is monotonically increasing, and\n\u003c/li\u003e\u003cli\u003e it is at least as long as any other such subsequence.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function uses patience sort:\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Patience_sorting\u003c/a\u003e.\n For implementation reasons, the actual list returned is the reverse of\n the subsequence.\n\u003c/p\u003e\u003cp\u003eYou can pair each integer with an arbitrary annotation, which will be\n carried through the algorithm.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Patience",
          "name": "longestIncreasing",
          "package": "patience",
          "signature": "[(Int, a)] -\u003e [(Int, a)]",
          "source": "src/Data-Algorithm-Patience.html#longestIncreasing",
          "type": "function"
        },
        "index": {
          "description": "Given list of distinct integers Picks subset of the integers in the same order i.e subsequence with the property that it is monotonically increasing and it is at least as long as any other such subsequence This function uses patience sort http en.wikipedia.org wiki Patience sorting For implementation reasons the actual list returned is the reverse of the subsequence You can pair each integer with an arbitrary annotation which will be carried through the algorithm",
          "hierarchy": "Data Algorithm Patience",
          "module": "Data.Algorithm.Patience",
          "name": "longestIncreasing",
          "normalized": "[(Int,a)]-\u003e[(Int,a)]",
          "package": "patience",
          "partial": "Increasing",
          "signature": "[(Int,a)]-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patience/docs/Data-Algorithm-Patience.html#v:longestIncreasing"
      }
    }
  ]
]