[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#",
      "description": {
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "module",
        "fct-source": "src/Data-Cycle.html",
        "fct-type": "module",
        "title": "Cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "Cycle",
        "normalized": "",
        "package": "data-cycle",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#t:Cycle",
      "description": {
        "fct-descr": "\u003cp\u003eA cyclic doubly linked list. \n\u003c/p\u003e\u003cp\u003eTo create a new Cycle, use \n   \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromFoldable\u003c/a\u003e\u003c/code\u003e or any of\n   the insertion functions from \u003ccode\u003e\u003ca\u003eUnfoldable\u003c/a\u003e\u003c/code\u003e. Elements\n   are inserted in front of the current position.\n\u003c/p\u003e\u003cp\u003eTo get the length of the list, use \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e. \n   To extract all cycle elements, use \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e. You can\n   also create an infinite list with \u003ccode\u003e\u003ca\u003ecycleToInfiniteList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e\n   also accept negative values for working backwards (see \u003ccode\u003e\u003ca\u003etakeLR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edropLR\u003c/a\u003e\u003c/code\u003e \n   for details).\n\u003c/p\u003e\u003cp\u003eIn general, any function \u003ccode\u003ef\u003c/code\u003e working on\n   \u003ccode\u003e[a]\u003c/code\u003e can be adapted for \u003ccode\u003eCycle a\u003c/code\u003e by writing \u003ccode\u003efromList . f . toList\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e instances work\n   like the default instances for lists.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "data",
        "fct-source": "src/Data-Cycle.html#Cycle",
        "fct-type": "data",
        "title": "Cycle"
      },
      "index": {
        "description": "cyclic doubly linked list To create new Cycle use fromList fromFoldable or any of the insertion functions from Unfoldable Elements are inserted in front of the current position To get the length of the list use size To extract all cycle elements use toList You can also create an infinite list with cycleToInfiniteList take drop and splitAt also accept negative values for working backwards see takeLR and dropLR for details In general any function working on can be adapted for Cycle by writing fromList toList The Monad Functor Applicative Alternative Monoid and Foldable instances work like the default instances for lists",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "Cycle",
        "normalized": "",
        "package": "data-cycle",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:cycleToInfiniteList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an infinite list starting with the current value\n   and moving to the right.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e [a]",
        "fct-source": "src/Data-Cycle.html#cycleToInfiniteList",
        "fct-type": "function",
        "title": "cycleToInfiniteList"
      },
      "index": {
        "description": "Convert to an infinite list starting with the current value and moving to the right",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "cycleToInfiniteList",
        "normalized": "Cycle a-\u003e[a]",
        "package": "data-cycle",
        "partial": "To Infinite List",
        "signature": "Cycle a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:dropLR",
      "description": {
        "fct-descr": "\u003cp\u003eDrop \u003ccode\u003eabs n\u003c/code\u003e values starting at the current one and moving \n   to the right (\u003ccode\u003en \u003e 0\u003c/code\u003e) or left (\u003ccode\u003en \u003c 0\u003c/code\u003e). \u003ccode\u003en\u003c/code\u003e can be arbitrary\n   big.\n\u003c/p\u003e\u003cpre\u003e drop n = fromList . dropLR n\n\u003c/pre\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Int -\u003e Cycle a -\u003e [a]",
        "fct-source": "src/Data-Cycle.html#dropLR",
        "fct-type": "function",
        "title": "dropLR"
      },
      "index": {
        "description": "Drop abs values starting at the current one and moving to the right or left can be arbitrary big drop fromList dropLR",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "dropLR",
        "normalized": "Int-\u003eCycle a-\u003e[a]",
        "package": "data-cycle",
        "partial": "LR",
        "signature": "Int-\u003eCycle a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value at the current position. \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003enull c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e a",
        "fct-source": "src/Data-Cycle.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "Get the value at the current position error if null",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "getValue",
        "normalized": "Cycle a-\u003ea",
        "package": "data-cycle",
        "partial": "Value",
        "signature": "Cycle a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:goLR",
      "description": {
        "fct-descr": "\u003cp\u003eMove \u003ccode\u003eabs n\u003c/code\u003e steps to the left (\u003ccode\u003en \u003c 0\u003c/code\u003e) or right (\u003ccode\u003en \u003e 0\u003c/code\u003e) or don't move\n   at all (\u003ccode\u003en == 0\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Int -\u003e Cycle a -\u003e Cycle a",
        "fct-source": "src/Data-Cycle.html#goLR",
        "fct-type": "function",
        "title": "goLR"
      },
      "index": {
        "description": "Move abs steps to the left or right or don move at all",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "goLR",
        "normalized": "Int-\u003eCycle a-\u003eCycle a",
        "package": "data-cycle",
        "partial": "LR",
        "signature": "Int-\u003eCycle a-\u003eCycle a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:goLeft",
      "description": {
        "fct-descr": "\u003cp\u003eMove focus to the element on the left of the current position.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e Cycle a",
        "fct-source": "src/Data-Cycle.html#goLeft",
        "fct-type": "function",
        "title": "goLeft"
      },
      "index": {
        "description": "Move focus to the element on the left of the current position",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "goLeft",
        "normalized": "Cycle a-\u003eCycle a",
        "package": "data-cycle",
        "partial": "Left",
        "signature": "Cycle a-\u003eCycle a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:goRight",
      "description": {
        "fct-descr": "\u003cp\u003eMove focus to the element on the right of the current position.\n\u003c/p\u003e\u003cpre\u003e goLeft . goRight == id\n\u003c/pre\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e Cycle a",
        "fct-source": "src/Data-Cycle.html#goRight",
        "fct-type": "function",
        "title": "goRight"
      },
      "index": {
        "description": "Move focus to the element on the right of the current position goLeft goRight id",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "goRight",
        "normalized": "Cycle a-\u003eCycle a",
        "package": "data-cycle",
        "partial": "Right",
        "signature": "Cycle a-\u003eCycle a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:leftValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet value on the left. \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003enull c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e a",
        "fct-source": "src/Data-Cycle.html#leftValue",
        "fct-type": "function",
        "title": "leftValue"
      },
      "index": {
        "description": "Get value on the left error if null",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "leftValue",
        "normalized": "Cycle a-\u003ea",
        "package": "data-cycle",
        "partial": "Value",
        "signature": "Cycle a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:nthValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet nth value to the left (\u003ccode\u003en \u003c 0\u003c/code\u003e) or right (\u003ccode\u003en \u003e 0\u003c/code\u003e) or \n   the current value (\u003ccode\u003en == 0\u003c/code\u003e). \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003enull c\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e nthValue = flip (!)\n\u003c/pre\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Int -\u003e Cycle a -\u003e a",
        "fct-source": "src/Data-Cycle.html#nthValue",
        "fct-type": "function",
        "title": "nthValue"
      },
      "index": {
        "description": "Get nth value to the left or right or the current value error if null nthValue flip",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "nthValue",
        "normalized": "Int-\u003eCycle a-\u003ea",
        "package": "data-cycle",
        "partial": "Value",
        "signature": "Int-\u003eCycle a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:rightValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet value on the right. \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003enull c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e a",
        "fct-source": "src/Data-Cycle.html#rightValue",
        "fct-type": "function",
        "title": "rightValue"
      },
      "index": {
        "description": "Get value on the right error if null",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "rightValue",
        "normalized": "Cycle a-\u003ea",
        "package": "data-cycle",
        "partial": "Value",
        "signature": "Cycle a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:takeLR",
      "description": {
        "fct-descr": "\u003cp\u003eTake \u003ccode\u003eabs n\u003c/code\u003e values starting at the current one and moving \n   to the right (\u003ccode\u003en \u003e 0\u003c/code\u003e) or left (\u003ccode\u003en \u003c 0\u003c/code\u003e). \u003ccode\u003en\u003c/code\u003e can be arbitrary\n   big. \n\u003c/p\u003e\u003cpre\u003e take n = fromList . takeLR n\n\u003c/pre\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Int -\u003e Cycle a -\u003e [a]",
        "fct-source": "src/Data-Cycle.html#takeLR",
        "fct-type": "function",
        "title": "takeLR"
      },
      "index": {
        "description": "Take abs values starting at the current one and moving to the right or left can be arbitrary big take fromList takeLR",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "takeLR",
        "normalized": "Int-\u003eCycle a-\u003e[a]",
        "package": "data-cycle",
        "partial": "LR",
        "signature": "Int-\u003eCycle a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:zipCycle",
      "description": {
        "fct-descr": "\u003cpre\u003e zipCycle = zipCycleWith (,)\n\u003c/pre\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "Cycle a -\u003e Cycle b -\u003e Cycle (a, b)",
        "fct-source": "src/Data-Cycle.html#zipCycle",
        "fct-type": "function",
        "title": "zipCycle"
      },
      "index": {
        "description": "zipCycle zipCycleWith",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "zipCycle",
        "normalized": "Cycle a-\u003eCycle b-\u003eCycle(a,b)",
        "package": "data-cycle",
        "partial": "Cycle",
        "signature": "Cycle a-\u003eCycle b-\u003eCycle(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-cycle/docs/Data-Cycle.html#v:zipCycleWith",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two cycles by applying a binary function to all element\n   pairs. Like \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cycle",
        "fct-package": "data-cycle",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Cycle a -\u003e Cycle b -\u003e Cycle c",
        "fct-source": "src/Data-Cycle.html#zipCycleWith",
        "fct-type": "function",
        "title": "zipCycleWith"
      },
      "index": {
        "description": "Combine two cycles by applying binary function to all element pairs Like zipWith",
        "hierarchy": "Data Cycle",
        "module": "Data.Cycle",
        "name": "zipCycleWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eCycle a-\u003eCycle b-\u003eCycle c",
        "package": "data-cycle",
        "partial": "Cycle With",
        "signature": "(a-\u003eb-\u003ec)-\u003eCycle a-\u003eCycle b-\u003eCycle c"
      }
    }
  }
]