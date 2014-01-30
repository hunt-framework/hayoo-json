[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFoldMap lists: lists represented by their \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e -- A right-infinite list\n c = 1 `cons` c\n\u003c/pre\u003e\u003cpre\u003e -- A left-infinite list\n d = d `snoc` 2\n\u003c/pre\u003e\u003cpre\u003e -- A middle-infinite list ??\n e = c `append` d\n\u003c/pre\u003e\u003cpre\u003e *\u003e head e\n 1\n *\u003e last e\n 2\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "module",
        "fct-source": "src/Data-FMList.html",
        "fct-type": "module",
        "title": "FMList"
      },
      "index": {
        "description": "FoldMap lists lists represented by their foldMap function Examples right-infinite list cons left-infinite list snoc middle-infinite list append head last",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "FMList",
        "normalized": "",
        "package": "fmlist",
        "partial": "FMList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#t:FMList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e function wrapped up in a newtype.\n\u003c/p\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "newtype",
        "fct-source": "src/Data-FMList.html#FMList",
        "fct-type": "newtype",
        "title": "FMList"
      },
      "index": {
        "description": "FMList is foldMap function wrapped up in newtype",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "FMList",
        "normalized": "",
        "package": "fmlist",
        "partial": "FMList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:FM",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FM",
        "fct-source": "src/Data-FMList.html#FMList",
        "fct-type": "function",
        "title": "FM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "FM",
        "normalized": "",
        "package": "fmlist",
        "partial": "FM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:append",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "append",
        "normalized": "FMList a-\u003eFMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:cons",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "a -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "cons",
        "normalized": "a-\u003eFMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "a-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:drop",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "n -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "drop",
        "normalized": "a-\u003eFMList b-\u003eFMList b",
        "package": "fmlist",
        "partial": "",
        "signature": "n-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:dropWhile",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "forall a.  f a",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The identity of",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "empty",
        "normalized": "",
        "package": "fmlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:filter",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:flatten",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList (t a) -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "flatten",
        "normalized": "FMList(a b)-\u003eFMList b",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList(t a)-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:foldMapA",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to an action, evaluate these actions from left to right, \n and concat the monoid results.\n\u003c/p\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e f m) -\u003e t a -\u003e f m",
        "fct-source": "src/Data-FMList.html#foldMapA",
        "fct-type": "function",
        "title": "foldMapA"
      },
      "index": {
        "description": "Map each element of structure to an action evaluate these actions from left to right and concat the monoid results",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "foldMapA",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb c",
        "package": "fmlist",
        "partial": "Map",
        "signature": "(a-\u003ef m)-\u003et a-\u003ef m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:fromFoldable",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "f a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#fromFoldable",
        "fct-type": "function",
        "title": "fromFoldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "fromFoldable",
        "normalized": "a b-\u003eFMList b",
        "package": "fmlist",
        "partial": "Foldable",
        "signature": "f a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:fromList",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "[a] -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "fromList",
        "normalized": "[a]-\u003eFMList a",
        "package": "fmlist",
        "partial": "List",
        "signature": "[a]-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:genericLength",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e b",
        "fct-source": "src/Data-FMList.html#genericLength",
        "fct-type": "function",
        "title": "genericLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "genericLength",
        "normalized": "FMList a-\u003eb",
        "package": "fmlist",
        "partial": "Length",
        "signature": "FMList a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:head",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e a",
        "fct-source": "src/Data-FMList.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "head",
        "normalized": "FMList a-\u003ea",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:init",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "init",
        "normalized": "FMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:iterate",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:last",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e a",
        "fct-source": "src/Data-FMList.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "last",
        "normalized": "FMList a-\u003ea",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:length",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e Int",
        "fct-source": "src/Data-FMList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "length",
        "normalized": "FMList a-\u003eInt",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:null",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e Bool",
        "fct-source": "src/Data-FMList.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "null",
        "normalized": "FMList a-\u003eBool",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:pair",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "a -\u003e a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#pair",
        "fct-type": "function",
        "title": "pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "pair",
        "normalized": "a-\u003ea-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "a-\u003ea-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:repeat",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "repeat",
        "normalized": "a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:reverse",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "reverse",
        "normalized": "FMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:singleton",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "singleton",
        "normalized": "a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:snoc",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "snoc",
        "normalized": "FMList a-\u003ea-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003ea-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:tail",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "tail",
        "normalized": "FMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:take",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "n -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "take",
        "normalized": "a-\u003eFMList b-\u003eFMList b",
        "package": "fmlist",
        "partial": "",
        "signature": "n-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:takeWhile",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
        "package": "fmlist",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "t a -\u003e [a]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "List of elements of structure",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "toList",
        "normalized": "a b-\u003e[b]",
        "package": "fmlist",
        "partial": "List",
        "signature": "t a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e transforms a list by changing \n the map function that is passed to \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt has the following property:\n\u003c/p\u003e\u003cpre\u003etransform a . transform b = transform (b . a)\u003c/pre\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e  m \u003e\u003e= g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= flatten (fmap g m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= flatten . fmap g $ m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform foldMap . transform (. g) $ m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform ((. g) . foldMap) m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform (\\f -\u003e foldMap f . g) m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e m) -\u003e b -\u003e m) -\u003e FMList b -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "The function transform transforms list by changing the map function that is passed to foldMap It has the following property transform transform transform For example flatten fmap flatten fmap transform foldMap transform transform foldMap transform foldMap",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "transform",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb)-\u003eFMList c-\u003eFMList a",
        "package": "fmlist",
        "partial": "",
        "signature": "(a-\u003em)-\u003eb-\u003em)-\u003eFMList b-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unFM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e m) -\u003e m",
        "fct-source": "src/Data-FMList.html#FMList",
        "fct-type": "function",
        "title": "unFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "unFM",
        "normalized": "(a-\u003eb)-\u003eb",
        "package": "fmlist",
        "partial": "FM",
        "signature": "(a-\u003em)-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e builds a list from a seed value.\n The function takes the seed and returns an \u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e of values.\n If the value is \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, then \u003ccode\u003ea\u003c/code\u003e is appended to the result, and if the\n value is \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is used as seed value in a recursive call.\n\u003c/p\u003e\u003cp\u003eA simple use of \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e (simulating unfoldl):\n\u003c/p\u003e\u003cpre\u003e *\u003e unfold (\\b -\u003e if b == 0 then empty else Left (b-1) `pair` Right b) 10\n fromList [1,2,3,4,5,6,7,8,9,10]\n\u003c/pre\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(b -\u003e FMList (Either b a)) -\u003e b -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "unfold builds list from seed value The function takes the seed and returns an FMList of values If the value is Right then is appended to the result and if the value is Left then is used as seed value in recursive call simple use of unfold simulating unfoldl unfold if then empty else Left b-1 pair Right fromList",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "unfold",
        "normalized": "(a-\u003eFMList(Either a b))-\u003ea-\u003eFMList b",
        "package": "fmlist",
        "partial": "",
        "signature": "(b-\u003eFMList(Either b a))-\u003eb-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds an \u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e from a seed value from left to right.\n The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a appended to the result and \u003ccode\u003eb\u003c/code\u003e is used as the next\n seed value in a recursive call.\n\u003c/p\u003e\u003cp\u003eA simple use of \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e *\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n fromList [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e FMList a",
        "fct-source": "src/Data-FMList.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "unfoldr builds an FMList from seed value from left to right The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is appended to the result and is used as the next seed value in recursive call simple use of unfoldr unfoldr if then Nothing else Just b-1 fromList",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eFMList b",
        "package": "fmlist",
        "partial": "",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eFMList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:zip",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "FMList a -\u003e FMList b -\u003e FMList (a, b)",
        "fct-source": "src/Data-FMList.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "zip",
        "normalized": "FMList a-\u003eFMList b-\u003eFMList(a,b)",
        "package": "fmlist",
        "partial": "",
        "signature": "FMList a-\u003eFMList b-\u003eFMList(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:zipWith",
      "description": {
        "fct-module": "Data.FMList",
        "fct-package": "fmlist",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e FMList a -\u003e FMList b -\u003e FMList c",
        "fct-source": "src/Data-FMList.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FMList",
        "module": "Data.FMList",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eFMList a-\u003eFMList b-\u003eFMList c",
        "package": "fmlist",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eFMList a-\u003eFMList b-\u003eFMList c"
      }
    }
  }
]