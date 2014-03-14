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
        "word": "diet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDiscrete Interval Encoding Tree described by Martin Erwig in \u003cem\u003eDiets for Fat Sets, January 1993\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Set.Diet",
          "name": "Diet",
          "package": "diet",
          "source": "src/Data-Set-Diet.html",
          "type": "module"
        },
        "index": {
          "description": "Discrete Interval Encoding Tree described by Martin Erwig in Diets for Fat Sets January",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "Diet",
          "package": "diet",
          "partial": "Diet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Discrete Interval Encoding Tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "Diet",
          "package": "diet",
          "source": "src/Data-Set-Diet.html#Diet",
          "type": "data"
        },
        "index": {
          "description": "Discrete Interval Encoding Tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "Diet",
          "package": "diet",
          "partial": "Diet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#t:Diet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval with discrete values between.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "Interval",
          "package": "diet",
          "source": "src/Data-Set-Diet.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "An interval with discrete values between",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "Interval",
          "package": "diet",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an element from the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "delete",
          "package": "diet",
          "signature": "a -\u003e Diet a -\u003e Diet a",
          "source": "src/Data-Set-Diet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an element from the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "delete",
          "normalized": "a-\u003eDiet a-\u003eDiet a",
          "package": "diet",
          "signature": "a-\u003eDiet a-\u003eDiet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold on the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "diet",
          "package": "diet",
          "signature": "(b -\u003e Interval a -\u003e b -\u003e b) -\u003e b -\u003e Diet a -\u003e b",
          "source": "src/Data-Set-Diet.html#diet",
          "type": "function"
        },
        "index": {
          "description": "Fold on the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "diet",
          "normalized": "(a-\u003eInterval b-\u003ea-\u003ea)-\u003ea-\u003eDiet b-\u003ea",
          "package": "diet",
          "signature": "(b-\u003eInterval a-\u003eb-\u003eb)-\u003eb-\u003eDiet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:diet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an interval tree with no elements.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "empty",
          "package": "diet",
          "signature": "Diet a",
          "source": "src/Data-Set-Diet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval tree with no elements",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "empty",
          "package": "diet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an interval tree with the elements of the list.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "fromList",
          "package": "diet",
          "signature": "t a -\u003e Diet a",
          "source": "src/Data-Set-Diet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval tree with the elements of the list",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "fromList",
          "normalized": "a b-\u003eDiet b",
          "package": "diet",
          "partial": "List",
          "signature": "t a-\u003eDiet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "insert",
          "package": "diet",
          "signature": "a -\u003e Diet a -\u003e Diet a",
          "source": "src/Data-Set-Diet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an element into the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "insert",
          "normalized": "a-\u003eDiet a-\u003eDiet a",
          "package": "diet",
          "signature": "a-\u003eDiet a-\u003eDiet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an interval ensuring that the minimum is less than or equal to maximum.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "interval",
          "package": "diet",
          "signature": "a -\u003e a -\u003e Interval a",
          "source": "src/Data-Set-Diet.html#interval",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval ensuring that the minimum is less than or equal to maximum",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "interval",
          "normalized": "a-\u003ea-\u003eInterval a",
          "package": "diet",
          "signature": "a-\u003ea-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum of the interval.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "intervalMax",
          "package": "diet",
          "signature": "Interval a -\u003e a",
          "source": "src/Data-Set-Diet.html#intervalMax",
          "type": "function"
        },
        "index": {
          "description": "The maximum of the interval",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "intervalMax",
          "normalized": "Interval a-\u003ea",
          "package": "diet",
          "partial": "Max",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:intervalMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum of the interval.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "intervalMin",
          "package": "diet",
          "signature": "Interval a -\u003e a",
          "source": "src/Data-Set-Diet.html#intervalMin",
          "type": "function"
        },
        "index": {
          "description": "The minimum of the interval",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "intervalMin",
          "normalized": "Interval a-\u003ea",
          "package": "diet",
          "partial": "Min",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:intervalMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the interval has the same minimum and maximum.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "isPointed",
          "package": "diet",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Data-Set-Diet.html#isPointed",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not the interval has the same minimum and maximum",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "isPointed",
          "normalized": "Interval a-\u003eBool",
          "package": "diet",
          "partial": "Pointed",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:isPointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function across the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "mapD",
          "package": "diet",
          "signature": "(a -\u003e b) -\u003e Diet a -\u003e Diet b",
          "source": "src/Data-Set-Diet.html#mapD",
          "type": "function"
        },
        "index": {
          "description": "Map function across the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "mapD",
          "normalized": "(a-\u003eb)-\u003eDiet a-\u003eDiet b",
          "package": "diet",
          "signature": "(a-\u003eb)-\u003eDiet a-\u003eDiet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:mapD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function across the minimum and maximum of the interval.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "mapI",
          "package": "diet",
          "signature": "(a -\u003e b) -\u003e Interval a -\u003e Interval b",
          "source": "src/Data-Set-Diet.html#mapI",
          "type": "function"
        },
        "index": {
          "description": "Map function across the minimum and maximum of the interval",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "mapI",
          "normalized": "(a-\u003eb)-\u003eInterval a-\u003eInterval b",
          "package": "diet",
          "signature": "(a-\u003eb)-\u003eInterval a-\u003eInterval b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:mapI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for membership in the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "member",
          "package": "diet",
          "signature": "a -\u003e Diet a -\u003e Bool",
          "source": "src/Data-Set-Diet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Test for membership in the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "member",
          "normalized": "a-\u003eDiet a-\u003eBool",
          "package": "diet",
          "signature": "a-\u003eDiet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two intervals if they are overlapping or adjacent.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "mergeI",
          "package": "diet",
          "signature": "Interval a -\u003e Interval a -\u003e Maybe (Interval a)",
          "source": "src/Data-Set-Diet.html#mergeI",
          "type": "function"
        },
        "index": {
          "description": "Merge two intervals if they are overlapping or adjacent",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "mergeI",
          "normalized": "Interval a-\u003eInterval a-\u003eMaybe(Interval a)",
          "package": "diet",
          "signature": "Interval a-\u003eInterval a-\u003eMaybe(Interval a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:mergeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for non-membership in the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "notMember",
          "package": "diet",
          "signature": "a -\u003e Diet a -\u003e Bool",
          "source": "src/Data-Set-Diet.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "Test for non-membership in the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "notMember",
          "normalized": "a-\u003eDiet a-\u003eBool",
          "package": "diet",
          "partial": "Member",
          "signature": "a-\u003eDiet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval with the same minimum and maximum.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "point",
          "package": "diet",
          "signature": "a -\u003e Interval a",
          "source": "src/Data-Set-Diet.html#point",
          "type": "function"
        },
        "index": {
          "description": "An interval with the same minimum and maximum",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "point",
          "normalized": "a-\u003eInterval a",
          "package": "diet",
          "signature": "a-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an interval tree with a single element.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "single",
          "package": "diet",
          "signature": "a -\u003e Diet a",
          "source": "src/Data-Set-Diet.html#single",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval tree with single element",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "single",
          "normalized": "a-\u003eDiet a",
          "package": "diet",
          "signature": "a-\u003eDiet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an interval tree with a single interval.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "singleI",
          "package": "diet",
          "signature": "Interval a -\u003e Diet a",
          "source": "src/Data-Set-Diet.html#singleI",
          "type": "function"
        },
        "index": {
          "description": "Construct an interval tree with single interval",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "singleI",
          "normalized": "Interval a-\u003eDiet a",
          "package": "diet",
          "signature": "Interval a-\u003eDiet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:singleI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in the interval tree.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "size",
          "package": "diet",
          "signature": "Diet a -\u003e Int",
          "source": "src/Data-Set-Diet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in the interval tree",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "size",
          "normalized": "Diet a-\u003eInt",
          "package": "diet",
          "signature": "Diet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the interval tree as a list.\n\u003c/p\u003e",
          "module": "Data.Set.Diet",
          "name": "toList",
          "package": "diet",
          "signature": "Diet a -\u003e [a]",
          "source": "src/Data-Set-Diet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the interval tree as list",
          "hierarchy": "Data Set Diet",
          "module": "Data.Set.Diet",
          "name": "toList",
          "normalized": "Diet a-\u003e[a]",
          "package": "diet",
          "partial": "List",
          "signature": "Diet a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diet/docs/Data-Set-Diet.html#v:toList"
      }
    }
  ]
]