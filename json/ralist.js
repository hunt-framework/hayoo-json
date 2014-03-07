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
        "word": "ralist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random-access list implementation based on Chris Okasaki's approach\n on his book \"Purely Functional Data Structures\", Cambridge University\n Press, 1998, chapter 9.3.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e is a replacement for ordinary finite lists.\n \u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e provides the same complexity as ordinary for most the list operations.\n Some operations take \u003cem\u003eO(log n)\u003c/em\u003e for \u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e where the list operation is \u003cem\u003eO(n)\u003c/em\u003e,\n notably indexing, '(!!)'.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RAList",
          "name": "RAList",
          "package": "ralist",
          "source": "src/Data-RAList.html",
          "type": "module"
        },
        "index": {
          "description": "random-access list implementation based on Chris Okasaki approach on his book Purely Functional Data Structures Cambridge University Press chapter RAList is replacement for ordinary finite lists RAList provides the same complexity as ordinary for most the list operations Some operations take log for RAList where the list operation is notably indexing",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "RAList",
          "package": "ralist",
          "partial": "RAList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "RAList",
          "package": "ralist",
          "source": "src/Data-RAList.html#RAList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "RAList",
          "package": "ralist",
          "partial": "RAList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#t:RAList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "(!!)",
          "package": "ralist",
          "signature": "RAList a -\u003e Int -\u003e a",
          "source": "src/Data-RAList.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "Complexity log",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "(!!) !!",
          "normalized": "RAList a-\u003eInt-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "(++)",
          "package": "ralist",
          "signature": "RAList a -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "(++) ++",
          "normalized": "RAList a-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "RAList a-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the value at the given index.\n Complexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "adjust",
          "package": "ralist",
          "signature": "(a -\u003e a) -\u003e Int -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the value at the given index Complexity log",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInt-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "(a-\u003ea)-\u003eInt-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "all",
          "package": "ralist",
          "signature": "(a -\u003e Bool) -\u003e RAList a -\u003e Bool",
          "source": "src/Data-RAList.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
          "package": "ralist",
          "signature": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "and",
          "package": "ralist",
          "signature": "RAList Bool -\u003e Bool",
          "source": "src/Data-RAList.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "and",
          "normalized": "RAList Bool-\u003eBool",
          "package": "ralist",
          "signature": "RAList Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "any",
          "package": "ralist",
          "signature": "(a -\u003e Bool) -\u003e RAList a -\u003e Bool",
          "source": "src/Data-RAList.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
          "package": "ralist",
          "signature": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "concat",
          "package": "ralist",
          "signature": "RAList (RAList a) -\u003e RAList a",
          "source": "src/Data-RAList.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "concat",
          "normalized": "RAList(RAList a)-\u003eRAList a",
          "package": "ralist",
          "signature": "RAList(RAList a)-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "concatMap",
          "package": "ralist",
          "signature": "(a -\u003e RAList b) -\u003e RAList a -\u003e RAList b",
          "source": "src/Data-RAList.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "concatMap",
          "normalized": "(a-\u003eRAList b)-\u003eRAList a-\u003eRAList b",
          "package": "ralist",
          "partial": "Map",
          "signature": "(a-\u003eRAList b)-\u003eRAList a-\u003eRAList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "cons",
          "package": "ralist",
          "signature": "a -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "cons",
          "normalized": "a-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "a-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "drop",
          "package": "ralist",
          "signature": "Int -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Complexity log",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "drop",
          "normalized": "Int-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "Int-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "elem",
          "package": "ralist",
          "signature": "a -\u003e RAList a -\u003e Bool",
          "source": "src/Data-RAList.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "elem",
          "normalized": "a-\u003eRAList a-\u003eBool",
          "package": "ralist",
          "signature": "a-\u003eRAList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "empty",
          "package": "ralist",
          "signature": "RAList a",
          "source": "src/Data-RAList.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "empty",
          "package": "ralist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "filter",
          "package": "ralist",
          "signature": "(a -\u003e Bool) -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "(a-\u003eBool)-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldl",
          "package": "ralist",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e RAList b -\u003e a",
          "source": "src/Data-RAList.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
          "package": "ralist",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldl'",
          "package": "ralist",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e RAList b -\u003e a",
          "source": "src/Data-RAList.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
          "package": "ralist",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldl1",
          "package": "ralist",
          "signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
          "source": "src/Data-RAList.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "package": "ralist",
          "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldl1'",
          "package": "ralist",
          "signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
          "source": "src/Data-RAList.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "package": "ralist",
          "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldr",
          "package": "ralist",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e RAList a -\u003e b",
          "source": "src/Data-RAList.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eRAList a-\u003eb",
          "package": "ralist",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eRAList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "foldr1",
          "package": "ralist",
          "signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
          "source": "src/Data-RAList.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "package": "ralist",
          "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "fromList",
          "package": "ralist",
          "signature": "[a] -\u003e RAList a",
          "source": "src/Data-RAList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "fromList",
          "normalized": "[a]-\u003eRAList a",
          "package": "ralist",
          "partial": "List",
          "signature": "[a]-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "head",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#head",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "head",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "init",
          "package": "ralist",
          "signature": "RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "init",
          "normalized": "RAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "RAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "last",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#last",
          "type": "function"
        },
        "index": {
          "description": "Complexity log",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "last",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "length",
          "package": "ralist",
          "signature": "RAList a -\u003e Int",
          "source": "src/Data-RAList.html#length",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "length",
          "normalized": "RAList a-\u003eInt",
          "package": "ralist",
          "signature": "RAList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "lookup",
          "package": "ralist",
          "signature": "a -\u003e RAList (a, b) -\u003e Maybe b",
          "source": "src/Data-RAList.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "lookup",
          "normalized": "a-\u003eRAList(a,b)-\u003eMaybe b",
          "package": "ralist",
          "signature": "a-\u003eRAList(a,b)-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "map",
          "package": "ralist",
          "signature": "(a -\u003e b) -\u003e RAList a -\u003e RAList b",
          "source": "src/Data-RAList.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eRAList a-\u003eRAList b",
          "package": "ralist",
          "signature": "(a-\u003eb)-\u003eRAList a-\u003eRAList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "maximum",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "maximum",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "minimum",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "minimum",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "notElem",
          "package": "ralist",
          "signature": "a -\u003e RAList a -\u003e Bool",
          "source": "src/Data-RAList.html#notElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "notElem",
          "normalized": "a-\u003eRAList a-\u003eBool",
          "package": "ralist",
          "partial": "Elem",
          "signature": "a-\u003eRAList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "null",
          "package": "ralist",
          "signature": "RAList a -\u003e Bool",
          "source": "src/Data-RAList.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "null",
          "normalized": "RAList a-\u003eBool",
          "package": "ralist",
          "signature": "RAList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "or",
          "package": "ralist",
          "signature": "RAList Bool -\u003e Bool",
          "source": "src/Data-RAList.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "or",
          "normalized": "RAList Bool-\u003eBool",
          "package": "ralist",
          "signature": "RAList Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "partition",
          "package": "ralist",
          "signature": "(a -\u003e Bool) -\u003e RAList a -\u003e (RAList a, RAList a)",
          "source": "src/Data-RAList.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eRAList a-\u003e(RAList a,RAList a)",
          "package": "ralist",
          "signature": "(a-\u003eBool)-\u003eRAList a-\u003e(RAList a,RAList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "product",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "product",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "replicate",
          "package": "ralist",
          "signature": "Int -\u003e a -\u003e RAList a",
          "source": "src/Data-RAList.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eRAList a",
          "package": "ralist",
          "signature": "Int-\u003ea-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "reverse",
          "package": "ralist",
          "signature": "RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "reverse",
          "normalized": "RAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "RAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "splitAt",
          "package": "ralist",
          "signature": "Int -\u003e RAList a -\u003e (RAList a, RAList a)",
          "source": "src/Data-RAList.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "splitAt",
          "normalized": "Int-\u003eRAList a-\u003e(RAList a,RAList a)",
          "package": "ralist",
          "partial": "At",
          "signature": "Int-\u003eRAList a-\u003e(RAList a,RAList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "sum",
          "package": "ralist",
          "signature": "RAList a -\u003e a",
          "source": "src/Data-RAList.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "sum",
          "normalized": "RAList a-\u003ea",
          "package": "ralist",
          "signature": "RAList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "tail",
          "package": "ralist",
          "signature": "RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "tail",
          "normalized": "RAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "RAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "take",
          "package": "ralist",
          "signature": "Int -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "take",
          "normalized": "Int-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "Int-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplexity \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "toList",
          "package": "ralist",
          "signature": "RAList a -\u003e [a]",
          "source": "src/Data-RAList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Complexity",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "toList",
          "normalized": "RAList a-\u003e[a]",
          "package": "ralist",
          "partial": "List",
          "signature": "RAList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "unzip",
          "package": "ralist",
          "signature": "RAList (a, b) -\u003e (RAList a, RAList b)",
          "source": "src/Data-RAList.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "unzip",
          "normalized": "RAList(a,b)-\u003e(RAList a,RAList b)",
          "package": "ralist",
          "signature": "RAList(a,b)-\u003e(RAList a,RAList b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange element at the given index.\n Complexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.RAList",
          "name": "update",
          "package": "ralist",
          "signature": "Int -\u003e a -\u003e RAList a -\u003e RAList a",
          "source": "src/Data-RAList.html#update",
          "type": "function"
        },
        "index": {
          "description": "Change element at the given index Complexity log",
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "update",
          "normalized": "Int-\u003ea-\u003eRAList a-\u003eRAList a",
          "package": "ralist",
          "signature": "Int-\u003ea-\u003eRAList a-\u003eRAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "zip",
          "package": "ralist",
          "signature": "RAList a -\u003e RAList b -\u003e RAList (a, b)",
          "source": "src/Data-RAList.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "zip",
          "normalized": "RAList a-\u003eRAList b-\u003eRAList(a,b)",
          "package": "ralist",
          "signature": "RAList a-\u003eRAList b-\u003eRAList(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RAList",
          "name": "zipWith",
          "package": "ralist",
          "signature": "(a -\u003e b -\u003e c) -\u003e RAList a -\u003e RAList b -\u003e RAList c",
          "source": "src/Data-RAList.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RAList",
          "module": "Data.RAList",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eRAList a-\u003eRAList b-\u003eRAList c",
          "package": "ralist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eRAList a-\u003eRAList b-\u003eRAList c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:zipWith"
      }
    }
  ]
]