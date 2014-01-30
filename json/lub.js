[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGreatest lower bound\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "module",
        "fct-source": "src/Data-Glb.html",
        "fct-type": "module",
        "title": "Glb"
      },
      "index": {
        "description": "Greatest lower bound",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "Glb",
        "normalized": "",
        "package": "lub",
        "partial": "Glb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#t:HasGlb",
      "description": {
        "fct-descr": "\u003cp\u003eTypes that support information intersection (\u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "class",
        "fct-source": "src/Data-Glb.html#HasGlb",
        "fct-type": "class",
        "title": "HasGlb"
      },
      "index": {
        "description": "Types that support information intersection glb",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "HasGlb",
        "normalized": "",
        "package": "lub",
        "partial": "Has Glb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#v:flatGlb",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e on flat types with equality.  Gives bottom for unequal\n arguments.\n\u003c/p\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Glb.html#flatGlb",
        "fct-type": "function",
        "title": "flatGlb"
      },
      "index": {
        "description": "glb on flat types with equality Gives bottom for unequal arguments",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "flatGlb",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lub",
        "partial": "Glb",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#v:glb",
      "description": {
        "fct-descr": "\u003cp\u003eGreatest lower information bound.  Intersects information available\n from each argument.\n\u003c/p\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Glb.html#glb",
        "fct-type": "method",
        "title": "glb"
      },
      "index": {
        "description": "Greatest lower information bound Intersects information available from each argument",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "glb",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#v:glbBottom",
      "description": {
        "fct-descr": "\u003cp\u003eBottom for a \u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e.  In the form of \u003ccode\u003eerror \"glb: bottom (\u003creason\u003e)\"\u003c/code\u003e,\n though not really an error.\n\u003c/p\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-Glb.html#glbBottom",
        "fct-type": "function",
        "title": "glbBottom"
      },
      "index": {
        "description": "Bottom for glb In the form of error glb bottom reason though not really an error",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "glbBottom",
        "normalized": "String-\u003ea",
        "package": "lub",
        "partial": "Bottom",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Glb.html#v:glbs1",
      "description": {
        "fct-descr": "\u003cp\u003en-ary \u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e for n \u003e 0.  Defaults to \u003ccode\u003efoldr1 glb\u003c/code\u003e.  Unlike \u003ccode\u003elub\u003c/code\u003e, we\n have no unit for \u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Glb",
        "fct-package": "lub",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Glb.html#glbs1",
        "fct-type": "method",
        "title": "glbs1"
      },
      "index": {
        "description": "n-ary glb for Defaults to foldr1 glb Unlike lub we have no unit for glb",
        "hierarchy": "Data Glb",
        "module": "Data.Glb",
        "name": "glbs1",
        "normalized": "[a]-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Laxer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome laxer operations.\n See \u003ca\u003ehttp://conal.net/blog/posts/lazier-functional-programming-part-2/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Laxer",
        "fct-package": "lub",
        "fct-signature": "module",
        "fct-source": "src/Data-Laxer.html",
        "fct-type": "module",
        "title": "Laxer"
      },
      "index": {
        "description": "Some laxer operations See http conal.net blog posts lazier-functional-programming-part-2",
        "hierarchy": "Data Laxer",
        "module": "Data.Laxer",
        "name": "Laxer",
        "normalized": "",
        "package": "lub",
        "partial": "Laxer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Laxer.html#v:condL",
      "description": {
        "fct-descr": "\u003cp\u003eLaxer if-then-else, due to Luke Palmer\n\u003c/p\u003e",
        "fct-module": "Data.Laxer",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e Bool -\u003e a",
        "fct-source": "src/Data-Laxer.html#condL",
        "fct-type": "function",
        "title": "condL"
      },
      "index": {
        "description": "Laxer if-then-else due to Luke Palmer",
        "hierarchy": "Data Laxer",
        "module": "Data.Laxer",
        "name": "condL",
        "normalized": "a-\u003ea-\u003eBool-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Laxer.html#v:eitherL",
      "description": {
        "fct-descr": "\u003cp\u003eLaxer variant of \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Laxer",
        "fct-package": "lub",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
        "fct-source": "src/Data-Laxer.html#eitherL",
        "fct-type": "function",
        "title": "eitherL"
      },
      "index": {
        "description": "Laxer variant of either",
        "hierarchy": "Data Laxer",
        "module": "Data.Laxer",
        "name": "eitherL",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
        "package": "lub",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute least upper bound (\u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e) of two values, with respect to\n information content.  I.e., merge the information available in each.\n For flat types (in which all values are either bottom or fully\n defined), \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "module",
        "fct-source": "src/Data-Lub.html",
        "fct-type": "module",
        "title": "Lub"
      },
      "index": {
        "description": "Compute least upper bound lub of two values with respect to information content I.e merge the information available in each For flat types in which all values are either bottom or fully defined lub is equivalent to unamb",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "Lub",
        "normalized": "",
        "package": "lub",
        "partial": "Lub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#t:HasLub",
      "description": {
        "fct-descr": "\u003cp\u003eTypes that support information merging (\u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "class",
        "fct-source": "src/Data-Lub.html#HasLub",
        "fct-type": "class",
        "title": "HasLub"
      },
      "index": {
        "description": "Types that support information merging lub",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "HasLub",
        "normalized": "",
        "package": "lub",
        "partial": "Has Lub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#v:flatLub",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e for flat domains.  Equivalent to \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e.  Handy for defining\n \u003ccode\u003e\u003ca\u003eHasLub\u003c/a\u003e\u003c/code\u003e instances, e.g.,\n\u003c/p\u003e\u003cpre\u003e\n   instance HasLub Integer where lub = flatLub\n\u003c/pre\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Lub.html#flatLub",
        "fct-type": "function",
        "title": "flatLub"
      },
      "index": {
        "description": "lub for flat domains Equivalent to unamb Handy for defining HasLub instances e.g instance HasLub Integer where lub flatLub",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "flatLub",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lub",
        "partial": "Lub",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#v:lub",
      "description": {
        "fct-descr": "\u003cp\u003eLeast upper information bound.  Combines information available from\n each argument.  The arguments must be consistent, i.e., must have a\n common upper bound.\n\u003c/p\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Lub.html#lub",
        "fct-type": "method",
        "title": "lub"
      },
      "index": {
        "description": "Least upper information bound Combines information available from each argument The arguments must be consistent i.e must have common upper bound",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "lub",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#v:lubs",
      "description": {
        "fct-descr": "\u003cp\u003en-ary \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e.  Defaults to \u003ccode\u003efoldr lub undefined\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Lub.html#lubs",
        "fct-type": "method",
        "title": "lubs"
      },
      "index": {
        "description": "n-ary lub Defaults to foldr lub undefined",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "lubs",
        "normalized": "[a]-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#v:parCommute",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a binary commutative operation into that tries both orders in\n parallel, \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e-merging the results.  Useful when there are special\n cases that don't require evaluating both arguments.\n\u003c/p\u003e\u003cp\u003eSimilar to parCommute from Unamb, but uses \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e b",
        "fct-source": "src/Data-Lub.html#parCommute",
        "fct-type": "function",
        "title": "parCommute"
      },
      "index": {
        "description": "Turn binary commutative operation into that tries both orders in parallel lub merging the results Useful when there are special cases that don require evaluating both arguments Similar to parCommute from Unamb but uses lub instead of unamb",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "parCommute",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
        "package": "lub",
        "partial": "Commute",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Lub.html#v:ptimes",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication optimized for either argument being zero or one, where\n the other might be expensive/delayed.\n\u003c/p\u003e",
        "fct-module": "Data.Lub",
        "fct-package": "lub",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Lub.html#ptimes",
        "fct-type": "function",
        "title": "ptimes"
      },
      "index": {
        "description": "Multiplication optimized for either argument being zero or one where the other might be expensive delayed",
        "hierarchy": "Data Lub",
        "module": "Data.Lub",
        "name": "ptimes",
        "normalized": "a-\u003ea-\u003ea",
        "package": "lub",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute least upper bounds (lub / join) of two values\n\u003c/p\u003e\u003cp\u003eThis version uses associated types for HasRepr\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "module",
        "fct-source": "src/Data-Repr.html",
        "fct-type": "module",
        "title": "Repr"
      },
      "index": {
        "description": "Compute least upper bounds lub join of two values This version uses associated types for HasRepr",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "Repr",
        "normalized": "",
        "package": "lub",
        "partial": "Repr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#t:HasRepr",
      "description": {
        "fct-descr": "\u003cp\u003eA data type representation, in terms of standard data types.\n Requires that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunrepr\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003erepr\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "class",
        "fct-source": "src/Data-Repr.html#HasRepr",
        "fct-type": "class",
        "title": "HasRepr"
      },
      "index": {
        "description": "data type representation in terms of standard data types Requires that unrepr repr id",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "HasRepr",
        "normalized": "",
        "package": "lub",
        "partial": "Has Repr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#v:onRepr",
      "description": {
        "fct-descr": "\u003cp\u003eApply a binary function on a repr\n\u003c/p\u003e",
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "(ra -\u003e rb) -\u003e a -\u003e b",
        "fct-source": "src/Data-Repr.html#onRepr",
        "fct-type": "function",
        "title": "onRepr"
      },
      "index": {
        "description": "Apply binary function on repr",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "onRepr",
        "normalized": "(a-\u003eb)-\u003ec-\u003ed",
        "package": "lub",
        "partial": "Repr",
        "signature": "(ra-\u003erb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#v:onRepr2",
      "description": {
        "fct-descr": "\u003cp\u003eApply a binary function on a repr\n\u003c/p\u003e",
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "(ra -\u003e rb -\u003e rc) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Data-Repr.html#onRepr2",
        "fct-type": "function",
        "title": "onRepr2"
      },
      "index": {
        "description": "Apply binary function on repr",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "onRepr2",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed-\u003ee-\u003ef",
        "package": "lub",
        "partial": "Repr",
        "signature": "(ra-\u003erb-\u003erc)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#v:repr",
      "description": {
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "repr",
        "fct-source": "src/Data-Repr.html#repr",
        "fct-type": "method",
        "title": "repr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "repr",
        "normalized": "",
        "package": "lub",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lub/docs/Data-Repr.html#v:unrepr",
      "description": {
        "fct-module": "Data.Repr",
        "fct-package": "lub",
        "fct-signature": "unrepr",
        "fct-source": "src/Data-Repr.html#unrepr",
        "fct-type": "method",
        "title": "unrepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Repr",
        "module": "Data.Repr",
        "name": "unrepr",
        "normalized": "",
        "package": "lub",
        "partial": "",
        "signature": ""
      }
    }
  }
]