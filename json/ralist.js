[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random-access list implementation based on Chris Okasaki's approach\n on his book \"Purely Functional Data Structures\", Cambridge University\n Press, 1998, chapter 9.3.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e is a replacement for ordinary finite lists.\n \u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e provides the same complexity as ordinary for most the list operations.\n Some operations take \u003cem\u003eO(log n)\u003c/em\u003e for \u003ccode\u003e\u003ca\u003eRAList\u003c/a\u003e\u003c/code\u003e where the list operation is \u003cem\u003eO(n)\u003c/em\u003e,\n notably indexing, '(!!)'.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "module",
        "fct-source": "src/Data-RAList.html",
        "fct-type": "module",
        "title": "RAList"
      },
      "index": {
        "description": "random-access list implementation based on Chris Okasaki approach on his book Purely Functional Data Structures Cambridge University Press chapter RAList is replacement for ordinary finite lists RAList provides the same complexity as ordinary for most the list operations Some operations take log for RAList where the list operation is notably indexing",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "RAList",
        "normalized": "",
        "package": "ralist",
        "partial": "RAList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#t:RAList",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "data",
        "fct-source": "src/Data-RAList.html#RAList",
        "fct-type": "data",
        "title": "RAList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "RAList",
        "normalized": "",
        "package": "ralist",
        "partial": "RAList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e Int -\u003e a",
        "fct-source": "src/Data-RAList.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "Complexity log",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "(!!) !!",
        "normalized": "RAList a-\u003eInt-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:-43--43-",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#%2B%2B",
        "fct-type": "function",
        "title": "(++)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "(++) ++",
        "normalized": "RAList a-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the value at the given index.\n Complexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e a) -\u003e Int -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Apply function to the value at the given index Complexity log",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eInt-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eInt-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:all",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e Bool) -\u003e RAList a -\u003e Bool",
        "fct-source": "src/Data-RAList.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRAList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:and",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList Bool -\u003e Bool",
        "fct-source": "src/Data-RAList.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "and",
        "normalized": "RAList Bool-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "RAList Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:any",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e Bool) -\u003e RAList a -\u003e Bool",
        "fct-source": "src/Data-RAList.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRAList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:concat",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList (RAList a) -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "concat",
        "normalized": "RAList(RAList a)-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "RAList(RAList a)-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:concatMap",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e RAList b) -\u003e RAList a -\u003e RAList b",
        "fct-source": "src/Data-RAList.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "concatMap",
        "normalized": "(a-\u003eRAList b)-\u003eRAList a-\u003eRAList b",
        "package": "ralist",
        "partial": "Map",
        "signature": "(a-\u003eRAList b)-\u003eRAList a-\u003eRAList b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "a -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "cons",
        "normalized": "a-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "a-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "Int -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Complexity log",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "drop",
        "normalized": "Int-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "Int-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:elem",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "a -\u003e RAList a -\u003e Bool",
        "fct-source": "src/Data-RAList.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "elem",
        "normalized": "a-\u003eRAList a-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "a-\u003eRAList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:empty",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a",
        "fct-source": "src/Data-RAList.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "empty",
        "normalized": "",
        "package": "ralist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:filter",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e Bool) -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e RAList b -\u003e a",
        "fct-source": "src/Data-RAList.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl-39-",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e RAList b -\u003e a",
        "fct-source": "src/Data-RAList.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eRAList b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl1",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldl1-39-",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldl1'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldr",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e RAList a -\u003e b",
        "fct-source": "src/Data-RAList.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eRAList a-\u003eb",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eRAList a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:foldr1",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eRAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "[a] -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "fromList",
        "normalized": "[a]-\u003eRAList a",
        "package": "ralist",
        "partial": "List",
        "signature": "[a]-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "head",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:init",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "init",
        "normalized": "RAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Complexity log",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "last",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e Int",
        "fct-source": "src/Data-RAList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "length",
        "normalized": "RAList a-\u003eInt",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:lookup",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "a -\u003e RAList (a, b) -\u003e Maybe b",
        "fct-source": "src/Data-RAList.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "lookup",
        "normalized": "a-\u003eRAList(a,b)-\u003eMaybe b",
        "package": "ralist",
        "partial": "",
        "signature": "a-\u003eRAList(a,b)-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:map",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e b) -\u003e RAList a -\u003e RAList b",
        "fct-source": "src/Data-RAList.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eRAList a-\u003eRAList b",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eRAList a-\u003eRAList b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:maximum",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "maximum",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:minimum",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "minimum",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:notElem",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "a -\u003e RAList a -\u003e Bool",
        "fct-source": "src/Data-RAList.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "notElem",
        "normalized": "a-\u003eRAList a-\u003eBool",
        "package": "ralist",
        "partial": "Elem",
        "signature": "a-\u003eRAList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:null",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e Bool",
        "fct-source": "src/Data-RAList.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "null",
        "normalized": "RAList a-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:or",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList Bool -\u003e Bool",
        "fct-source": "src/Data-RAList.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "or",
        "normalized": "RAList Bool-\u003eBool",
        "package": "ralist",
        "partial": "",
        "signature": "RAList Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:partition",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e Bool) -\u003e RAList a -\u003e (RAList a, RAList a)",
        "fct-source": "src/Data-RAList.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eRAList a-\u003e(RAList a,RAList a)",
        "package": "ralist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRAList a-\u003e(RAList a,RAList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:product",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "product",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:replicate",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "Int -\u003e a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "Int-\u003ea-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:reverse",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "reverse",
        "normalized": "RAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:splitAt",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "Int -\u003e RAList a -\u003e (RAList a, RAList a)",
        "fct-source": "src/Data-RAList.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "splitAt",
        "normalized": "Int-\u003eRAList a-\u003e(RAList a,RAList a)",
        "package": "ralist",
        "partial": "At",
        "signature": "Int-\u003eRAList a-\u003e(RAList a,RAList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:sum",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e a",
        "fct-source": "src/Data-RAList.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "sum",
        "normalized": "RAList a-\u003ea",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "tail",
        "normalized": "RAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:take",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "Int -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "take",
        "normalized": "Int-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "Int-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eComplexity \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e [a]",
        "fct-source": "src/Data-RAList.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Complexity",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "toList",
        "normalized": "RAList a-\u003e[a]",
        "package": "ralist",
        "partial": "List",
        "signature": "RAList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:unzip",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList (a, b) -\u003e (RAList a, RAList b)",
        "fct-source": "src/Data-RAList.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "unzip",
        "normalized": "RAList(a,b)-\u003e(RAList a,RAList b)",
        "package": "ralist",
        "partial": "",
        "signature": "RAList(a,b)-\u003e(RAList a,RAList b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eChange element at the given index.\n Complexity \u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "Int -\u003e a -\u003e RAList a -\u003e RAList a",
        "fct-source": "src/Data-RAList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Change element at the given index Complexity log",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "update",
        "normalized": "Int-\u003ea-\u003eRAList a-\u003eRAList a",
        "package": "ralist",
        "partial": "",
        "signature": "Int-\u003ea-\u003eRAList a-\u003eRAList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:zip",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "RAList a -\u003e RAList b -\u003e RAList (a, b)",
        "fct-source": "src/Data-RAList.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "zip",
        "normalized": "RAList a-\u003eRAList b-\u003eRAList(a,b)",
        "package": "ralist",
        "partial": "",
        "signature": "RAList a-\u003eRAList b-\u003eRAList(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ralist/docs/Data-RAList.html#v:zipWith",
      "description": {
        "fct-module": "Data.RAList",
        "fct-package": "ralist",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e RAList a -\u003e RAList b -\u003e RAList c",
        "fct-source": "src/Data-RAList.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RAList",
        "module": "Data.RAList",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eRAList a-\u003eRAList b-\u003eRAList c",
        "package": "ralist",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eRAList a-\u003eRAList b-\u003eRAList c"
      }
    }
  }
]