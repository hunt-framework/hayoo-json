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
        "word": "ordered"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartially ordered data types.  The standard \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is for\n total orders and therefore not suitable for floating point.  However, we can\n still define meaningful \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003esort\u003c/code\u003e functions for these types.\n\u003c/p\u003e\u003cp\u003eWe define a \u003ccode\u003e\u003ca\u003ePosetOrd\u003c/a\u003e\u003c/code\u003e class which extends \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e by adding\n a \u003ccode\u003e\u003ca\u003eNComp\u003c/a\u003e\u003c/code\u003e constructor representing that two elements are\n incomparable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Poset",
          "name": "Poset",
          "package": "ordered",
          "source": "src/Data-Poset.html",
          "type": "module"
        },
        "index": {
          "description": "Partially ordered data types The standard Ord class is for total orders and therefore not suitable for floating point However we can still define meaningful max and sort functions for these types We define PosetOrd class which extends Ord by adding NComp constructor representing that two elements are incomparable",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "Poset",
          "package": "ordered",
          "partial": "Poset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for partially ordered data types.  Instances should satisfy the\n following laws for all values a, b and c:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e and \u003ccode\u003eb \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e implies \u003ccode\u003ea == b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e and \u003ccode\u003eb \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e implies \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBut note that the floating point instances don't satisfy the first rule.\n\u003c/p\u003e\u003cp\u003eMinimal definition: posetCmp or leq.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "Poset",
          "package": "ordered",
          "source": "src/Data-Poset-Internal.html#Poset",
          "type": "class"
        },
        "index": {
          "description": "Class for partially ordered data types Instances should satisfy the following laws for all values and leq leq and leq implies leq and leq implies leq But note that the floating point instances don satisfy the first rule Minimal definition posetCmp or leq",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "Poset",
          "package": "ordered",
          "partial": "Poset",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#t:Poset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre two elements of the underlying comparabale or not; if they\n are, then Ordering tell the relation between them.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "PosetOrd",
          "package": "ordered",
          "source": "src/Data-Poset-Internal.html#PosetOrd",
          "type": "data"
        },
        "index": {
          "description": "Are two elements of the underlying comparabale or not if they are then Ordering tell the relation between them",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "PosetOrd",
          "package": "ordered",
          "partial": "Poset Ord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#t:PosetOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs not comparable to.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "(\u003c/=\u003e)",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#%3C%2F%3D%3E",
          "type": "method"
        },
        "index": {
          "description": "Is not comparable to",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "(\u003c/=\u003e) \u003c/=\u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:-60--47--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs comparable to.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "(\u003c==\u003e)",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#%3C%3D%3D%3E",
          "type": "method"
        },
        "index": {
          "description": "Is comparable to",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "(\u003c==\u003e) \u003c==\u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:-60--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poset",
          "name": "Comp",
          "package": "ordered",
          "signature": "Comp Ordering",
          "source": "src/Data-Poset-Internal.html#PosetOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "Comp",
          "package": "ordered",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poset",
          "name": "NComp",
          "package": "ordered",
          "signature": "NComp",
          "source": "src/Data-Poset-Internal.html#PosetOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "NComp",
          "package": "ordered",
          "partial": "NComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:NComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to values before comparing.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "comparing",
          "package": "ordered",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e PosetOrd",
          "source": "src/Data-Poset.html#comparing",
          "type": "function"
        },
        "index": {
          "description": "Apply function to values before comparing",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "comparing",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ePosetOrd",
          "package": "ordered",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ePosetOrd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:comparing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreater than or equal.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "geq",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#geq",
          "type": "method"
        },
        "index": {
          "description": "Greater than or equal",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "geq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:geq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict greater than.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "gt",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#gt",
          "type": "method"
        },
        "index": {
          "description": "Strict greater than",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "gt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than or equal.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "leq",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#leq",
          "type": "method"
        },
        "index": {
          "description": "Less than or equal",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "leq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:leq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict less than.\n\u003c/p\u003e",
          "module": "Data.Poset",
          "name": "lt",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Poset-Internal.html#lt",
          "type": "method"
        },
        "index": {
          "description": "Strict less than",
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "lt",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ordered",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poset",
          "name": "posetCmp",
          "package": "ordered",
          "signature": "a -\u003e a -\u003e PosetOrd",
          "source": "src/Data-Poset-Internal.html#posetCmp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Poset",
          "module": "Data.Poset",
          "name": "posetCmp",
          "normalized": "a-\u003ea-\u003ePosetOrd",
          "package": "ordered",
          "partial": "Cmp",
          "signature": "a-\u003ea-\u003ePosetOrd",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:posetCmp"
      }
    }
  ]
]