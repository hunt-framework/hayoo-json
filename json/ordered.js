[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePartially ordered data types.  The standard \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is for\n total orders and therefore not suitable for floating point.  However, we can\n still define meaningful \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003esort\u003c/code\u003e functions for these types.\n\u003c/p\u003e\u003cp\u003eWe define a \u003ccode\u003e\u003ca\u003ePosetOrd\u003c/a\u003e\u003c/code\u003e class which extends \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e by adding\n a \u003ccode\u003e\u003ca\u003eNComp\u003c/a\u003e\u003c/code\u003e constructor representing that two elements are\n incomparable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "module",
        "fct-source": "src/Data-Poset.html",
        "fct-type": "module",
        "title": "Poset"
      },
      "index": {
        "description": "Partially ordered data types The standard Ord class is for total orders and therefore not suitable for floating point However we can still define meaningful max and sort functions for these types We define PosetOrd class which extends Ord by adding NComp constructor representing that two elements are incomparable",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "Poset",
        "normalized": "",
        "package": "ordered",
        "partial": "Poset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#t:Poset",
      "description": {
        "fct-descr": "\u003cp\u003eClass for partially ordered data types.  Instances should satisfy the\n following laws for all values a, b and c:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e and \u003ccode\u003eb \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e implies \u003ccode\u003ea == b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e and \u003ccode\u003eb \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e implies \u003ccode\u003ea \u003ccode\u003e\u003ca\u003eleq\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBut note that the floating point instances don't satisfy the first rule.\n\u003c/p\u003e\u003cp\u003eMinimal definition: posetCmp or leq.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "class",
        "fct-source": "src/Data-Poset-Internal.html#Poset",
        "fct-type": "class",
        "title": "Poset"
      },
      "index": {
        "description": "Class for partially ordered data types Instances should satisfy the following laws for all values and leq leq and leq implies leq and leq implies leq But note that the floating point instances don satisfy the first rule Minimal definition posetCmp or leq",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "Poset",
        "normalized": "",
        "package": "ordered",
        "partial": "Poset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#t:PosetOrd",
      "description": {
        "fct-descr": "\u003cp\u003eAre two elements of the underlying comparabale or not; if they\n are, then Ordering tell the relation between them.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "data",
        "fct-source": "src/Data-Poset-Internal.html#PosetOrd",
        "fct-type": "data",
        "title": "PosetOrd"
      },
      "index": {
        "description": "Are two elements of the underlying comparabale or not if they are then Ordering tell the relation between them",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "PosetOrd",
        "normalized": "",
        "package": "ordered",
        "partial": "Poset Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:-60--47--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIs not comparable to.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#%3C%2F%3D%3E",
        "fct-type": "method",
        "title": "(\u003c/=\u003e)"
      },
      "index": {
        "description": "Is not comparable to",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "(\u003c/=\u003e) \u003c/=\u003e",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:-60--61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIs comparable to.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#%3C%3D%3D%3E",
        "fct-type": "method",
        "title": "(\u003c==\u003e)"
      },
      "index": {
        "description": "Is comparable to",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "(\u003c==\u003e) \u003c==\u003e",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:Comp",
      "description": {
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "Comp Ordering",
        "fct-source": "src/Data-Poset-Internal.html#PosetOrd",
        "fct-type": "function",
        "title": "Comp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "Comp",
        "normalized": "",
        "package": "ordered",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:NComp",
      "description": {
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "NComp",
        "fct-source": "src/Data-Poset-Internal.html#PosetOrd",
        "fct-type": "function",
        "title": "NComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "NComp",
        "normalized": "",
        "package": "ordered",
        "partial": "NComp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:comparing",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to values before comparing.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e PosetOrd",
        "fct-source": "src/Data-Poset.html#comparing",
        "fct-type": "function",
        "title": "comparing"
      },
      "index": {
        "description": "Apply function to values before comparing",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "comparing",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ePosetOrd",
        "package": "ordered",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ePosetOrd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eGreater than or equal.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#geq",
        "fct-type": "method",
        "title": "geq"
      },
      "index": {
        "description": "Greater than or equal",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "geq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:gt",
      "description": {
        "fct-descr": "\u003cp\u003eStrict greater than.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#gt",
        "fct-type": "method",
        "title": "gt"
      },
      "index": {
        "description": "Strict greater than",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "gt",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:leq",
      "description": {
        "fct-descr": "\u003cp\u003eLess than or equal.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#leq",
        "fct-type": "method",
        "title": "leq"
      },
      "index": {
        "description": "Less than or equal",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "leq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:lt",
      "description": {
        "fct-descr": "\u003cp\u003eStrict less than.\n\u003c/p\u003e",
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Poset-Internal.html#lt",
        "fct-type": "method",
        "title": "lt"
      },
      "index": {
        "description": "Strict less than",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "lt",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ordered",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ordered/docs/Data-Poset.html#v:posetCmp",
      "description": {
        "fct-module": "Data.Poset",
        "fct-package": "ordered",
        "fct-signature": "a -\u003e a -\u003e PosetOrd",
        "fct-source": "src/Data-Poset-Internal.html#posetCmp",
        "fct-type": "method",
        "title": "posetCmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Poset",
        "module": "Data.Poset",
        "name": "posetCmp",
        "normalized": "a-\u003ea-\u003ePosetOrd",
        "package": "ordered",
        "partial": "Cmp",
        "signature": "a-\u003ea-\u003ePosetOrd"
      }
    }
  }
]