[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "Class",
        "normalized": "",
        "package": "folds",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#t:Folding",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold-Class.html#Folding",
        "fct-type": "class",
        "title": "Folding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "Folding",
        "normalized": "",
        "package": "folds",
        "partial": "Folding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#t:Scan",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold-Class.html#Scan",
        "fct-type": "class",
        "title": "Scan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "Scan",
        "normalized": "",
        "package": "folds",
        "partial": "Scan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:beneath",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis acts like a generalized notion of \"costrength\",\n when applied to a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e, causing it to return the\n left-most value that fails to match the Prism, or the\n result of accumulating rewrapped in the \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e if\n everything matches.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Left 2, Left 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eLeft 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Right 2, Right 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eRight 2\n\u003c/pre\u003e\u003cpre\u003e\n beneath :: Prism s t a b -\u003e p a b -\u003e p s t\n beneath :: Iso s t a b   -\u003e p a b -\u003e p s t\n\u003c/pre\u003e",
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "Overloaded p Mutator s t a b -\u003e p a b -\u003e p s t",
        "fct-source": "src/Data-Fold-Class.html#beneath",
        "fct-type": "function",
        "title": "beneath"
      },
      "index": {
        "description": "Lift Folding into Prism This acts like generalized notion of costrength when applied to Folding causing it to return the left-most value that fails to match the Prism or the result of accumulating rewrapped in the Prism if everything matches run Left Left Left beneath Left id Left run Left Right Right beneath Left id Right beneath Prism beneath Iso",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "beneath",
        "normalized": "Overloaded a Mutator b c d e-\u003ea d e-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "Overloaded p Mutator s t a b-\u003ep a b-\u003ep s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:filtering",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "(a -\u003e Bool) -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#filtering",
        "fct-type": "method",
        "title": "filtering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "filtering",
        "normalized": "(a-\u003eBool)-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:interspersing",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#interspersing",
        "fct-type": "method",
        "title": "interspersing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "interspersing",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfix",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e t a -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfix",
        "fct-type": "method",
        "title": "postfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "postfix",
        "normalized": "a b c-\u003ed b-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003et a-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfix1",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e a -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfix1",
        "fct-type": "method",
        "title": "postfix1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "postfix1",
        "normalized": "a b c-\u003eb-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003ea-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfixOf",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e p a b -\u003e s -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfixOf",
        "fct-type": "method",
        "title": "postfixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "postfixOf",
        "normalized": "Fold a b-\u003ec b d-\u003ea-\u003ec b d",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003ep a b-\u003es-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePartially apply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to some initial input on the left.\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "t a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefix",
        "fct-type": "method",
        "title": "prefix"
      },
      "index": {
        "description": "Partially apply Folding to some initial input on the left",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "prefix",
        "normalized": "a b-\u003ec b d-\u003ec b d",
        "package": "folds",
        "partial": "",
        "signature": "t a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefix1",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefix1",
        "fct-type": "method",
        "title": "prefix1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "prefix1",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefixOf",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e s -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefixOf",
        "fct-type": "method",
        "title": "prefixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "prefixOf",
        "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ec b d",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003es-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a container full of input:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [\"hello\",\"world\"] $ L id (++) []\n\u003c/code\u003e\u003c/strong\u003e\"helloworld\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [1,2,3] $ L id (+) 0\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "t a -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "Apply Folding to container full of input run hello world id helloworld run id",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "run",
        "normalized": "a b-\u003ec b d-\u003ed",
        "package": "folds",
        "partial": "",
        "signature": "t a-\u003ep a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:run1",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a single element of input\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#run1",
        "fct-type": "method",
        "title": "run1"
      },
      "index": {
        "description": "Apply Folding to single element of input",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "run1",
        "normalized": "a-\u003eb a c-\u003ec",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:runOf",
      "description": {
        "fct-module": "Data.Fold.Class",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e s -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#runOf",
        "fct-type": "method",
        "title": "runOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Class",
        "module": "Data.Fold.Class",
        "name": "runOf",
        "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ed",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003es-\u003ep a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "folds",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Maybe-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-Internal.html#Maybe%27",
        "fct-type": "data",
        "title": "Maybe'"
      },
      "index": {
        "description": "Strict Maybe",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Maybe'",
        "normalized": "",
        "package": "folds",
        "partial": "Maybe'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:N",
      "description": {
        "fct-descr": "\u003cp\u003eA reified \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Fold-Internal.html#N",
        "fct-type": "newtype",
        "title": "N"
      },
      "index": {
        "description": "reified Monoid",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "N",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Pair-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict Pair\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-Internal.html#Pair%27",
        "fct-type": "data",
        "title": "Pair'"
      },
      "index": {
        "description": "Strict Pair",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Pair'",
        "normalized": "",
        "package": "folds",
        "partial": "Pair'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:SnocList",
      "description": {
        "fct-descr": "\u003cp\u003eReversed '[]'\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-Internal.html#SnocList",
        "fct-type": "data",
        "title": "SnocList"
      },
      "index": {
        "description": "Reversed",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "SnocList",
        "normalized": "",
        "package": "folds",
        "partial": "Snoc List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eThe shape of a \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-Internal.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "The shape of foldMap",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Tree",
        "normalized": "",
        "package": "folds",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Just-39-",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Just' !a",
        "fct-source": "src/Data-Fold-Internal.html#Maybe%27",
        "fct-type": "function",
        "title": "Just'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Just'",
        "normalized": "",
        "package": "folds",
        "partial": "Just'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:N",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "N",
        "fct-source": "src/Data-Fold-Internal.html#N",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "N",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Nil",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Nil",
        "fct-source": "src/Data-Fold-Internal.html#SnocList",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Nil",
        "normalized": "",
        "package": "folds",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Nothing-39-",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Nothing'",
        "fct-source": "src/Data-Fold-Internal.html#Maybe%27",
        "fct-type": "function",
        "title": "Nothing'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Nothing'",
        "normalized": "",
        "package": "folds",
        "partial": "Nothing'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:One",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "One a",
        "fct-source": "src/Data-Fold-Internal.html#Tree",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "One",
        "normalized": "",
        "package": "folds",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Pair-39-",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Pair' !a !b",
        "fct-source": "src/Data-Fold-Internal.html#Pair%27",
        "fct-type": "function",
        "title": "Pair'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Pair'",
        "normalized": "",
        "package": "folds",
        "partial": "Pair'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Snoc",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Snoc (SnocList a) a",
        "fct-source": "src/Data-Fold-Internal.html#SnocList",
        "fct-type": "function",
        "title": "Snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Snoc",
        "normalized": "",
        "package": "folds",
        "partial": "Snoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Two",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Two (Tree a) (Tree a)",
        "fct-source": "src/Data-Fold-Internal.html#Tree",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Two",
        "normalized": "",
        "package": "folds",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Zero",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "Zero",
        "fct-source": "src/Data-Fold-Internal.html#Tree",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "Zero",
        "normalized": "",
        "package": "folds",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:maybe-39-",
      "description": {
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e Maybe' a -\u003e b",
        "fct-source": "src/Data-Fold-Internal.html#maybe%27",
        "fct-type": "function",
        "title": "maybe'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "maybe'",
        "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe' b-\u003ea",
        "package": "folds",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eMaybe' a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:runN",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Fold.Internal",
        "fct-package": "folds",
        "fct-signature": "a",
        "fct-source": "src/Data-Fold-Internal.html#N",
        "fct-type": "function",
        "title": "runN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold Internal",
        "module": "Data.Fold.Internal",
        "name": "runN",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#",
      "description": {
        "fct-module": "Data.Fold.L",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-L.html",
        "fct-type": "module",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold L",
        "module": "Data.Fold.L",
        "name": "L",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#t:L",
      "description": {
        "fct-descr": "\u003cp\u003eA Moore Machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold.L",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L.html#L",
        "fct-type": "data",
        "title": "L"
      },
      "index": {
        "description": "Moore Machine",
        "hierarchy": "Data Fold L",
        "module": "Data.Fold.L",
        "name": "L",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#v:L",
      "description": {
        "fct-module": "Data.Fold.L",
        "fct-package": "folds",
        "fct-signature": "forall r . L (r -\u003e b) (r -\u003e a -\u003e r) r",
        "fct-source": "src/Data-Fold-L.html#L",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold L",
        "module": "Data.Fold.L",
        "name": "L",
        "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall r L(r-\u003eb)(r-\u003ea-\u003er)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#v:unfoldL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Moore machine from a state valuation and transition function\n\u003c/p\u003e",
        "fct-module": "Data.Fold.L",
        "fct-package": "folds",
        "fct-signature": "(s -\u003e (b, a -\u003e s)) -\u003e s -\u003e L a b",
        "fct-source": "src/Data-Fold-L.html#unfoldL",
        "fct-type": "function",
        "title": "unfoldL"
      },
      "index": {
        "description": "Construct Moore machine from state valuation and transition function",
        "hierarchy": "Data Fold L",
        "module": "Data.Fold.L",
        "name": "unfoldL",
        "normalized": "(a-\u003e(b,c-\u003ea))-\u003ea-\u003eL c b",
        "package": "folds",
        "partial": "",
        "signature": "(s-\u003e(b,a-\u003es))-\u003es-\u003eL a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#",
      "description": {
        "fct-module": "Data.Fold.L1",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-L1.html",
        "fct-type": "module",
        "title": "L1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold L1",
        "module": "Data.Fold.L1",
        "name": "L1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#t:L1",
      "description": {
        "fct-descr": "\u003cp\u003eA Mealy Machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold.L1",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L1.html#L1",
        "fct-type": "data",
        "title": "L1"
      },
      "index": {
        "description": "Mealy Machine",
        "hierarchy": "Data Fold L1",
        "module": "Data.Fold.L1",
        "name": "L1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#v:L1",
      "description": {
        "fct-module": "Data.Fold.L1",
        "fct-package": "folds",
        "fct-signature": "forall c . L1 (c -\u003e b) (c -\u003e a -\u003e c) (a -\u003e c)",
        "fct-source": "src/Data-Fold-L1.html#L1",
        "fct-type": "function",
        "title": "L1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold L1",
        "module": "Data.Fold.L1",
        "name": "L1",
        "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)(d-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall c L(c-\u003eb)(c-\u003ea-\u003ec)(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e this \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e\n is based on a \u003ccode\u003e(-\u003e) r\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003eMonoid\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e rather than\n than on the \u003ccode\u003e\u003ccode\u003eStore\u003c/code\u003e r\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Fold.M",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-M.html",
        "fct-type": "module",
        "title": "M"
      },
      "index": {
        "description": "Unlike and this Comonad is based on Comonad for Monoid rather than than on the Store Comonad",
        "hierarchy": "Data Fold M",
        "module": "Data.Fold.M",
        "name": "M",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#t:M",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e caught in amber. a.k.a. a monoidal reducer\n\u003c/p\u003e",
        "fct-module": "Data.Fold.M",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-M.html#M",
        "fct-type": "data",
        "title": "M"
      },
      "index": {
        "description": "foldMap caught in amber a.k.a monoidal reducer",
        "hierarchy": "Data Fold M",
        "module": "Data.Fold.M",
        "name": "M",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#v:M",
      "description": {
        "fct-module": "Data.Fold.M",
        "fct-package": "folds",
        "fct-signature": "forall m . M (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m) m",
        "fct-source": "src/Data-Fold-M.html#M",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold M",
        "module": "Data.Fold.M",
        "name": "M",
        "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#",
      "description": {
        "fct-module": "Data.Fold.M1",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-M1.html",
        "fct-type": "module",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold M1",
        "module": "Data.Fold.M1",
        "name": "M1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#t:M1",
      "description": {
        "fct-descr": "\u003cp\u003eA semigroup reducer\n\u003c/p\u003e",
        "fct-module": "Data.Fold.M1",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-M1.html#M1",
        "fct-type": "data",
        "title": "M1"
      },
      "index": {
        "description": "semigroup reducer",
        "hierarchy": "Data Fold M1",
        "module": "Data.Fold.M1",
        "name": "M1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#v:M1",
      "description": {
        "fct-module": "Data.Fold.M1",
        "fct-package": "folds",
        "fct-signature": "forall m . M1 (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m)",
        "fct-source": "src/Data-Fold-M1.html#M1",
        "fct-type": "function",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold M1",
        "module": "Data.Fold.M1",
        "name": "M1",
        "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#",
      "description": {
        "fct-module": "Data.Fold.R",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-R.html",
        "fct-type": "module",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold R",
        "module": "Data.Fold.R",
        "name": "R",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003eright folds / a reversed Moore machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold.R",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-R.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "right folds reversed Moore machine",
        "hierarchy": "Data Fold R",
        "module": "Data.Fold.R",
        "name": "R",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#v:R",
      "description": {
        "fct-module": "Data.Fold.R",
        "fct-package": "folds",
        "fct-signature": "forall r . R (r -\u003e b) (a -\u003e r -\u003e r) r",
        "fct-source": "src/Data-Fold-R.html#R",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold R",
        "module": "Data.Fold.R",
        "name": "R",
        "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall r R(r-\u003eb)(a-\u003er-\u003er)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#",
      "description": {
        "fct-module": "Data.Fold.R1",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold-R1.html",
        "fct-type": "module",
        "title": "R1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold R1",
        "module": "Data.Fold.R1",
        "name": "R1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#t:R1",
      "description": {
        "fct-descr": "\u003cp\u003eA reversed Mealy machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold.R1",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-R1.html#R1",
        "fct-type": "data",
        "title": "R1"
      },
      "index": {
        "description": "reversed Mealy machine",
        "hierarchy": "Data Fold R1",
        "module": "Data.Fold.R1",
        "name": "R1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#v:R1",
      "description": {
        "fct-module": "Data.Fold.R1",
        "fct-package": "folds",
        "fct-signature": "forall c . R1 (c -\u003e b) (a -\u003e c -\u003e c) (a -\u003e c)",
        "fct-source": "src/Data-Fold-R1.html#R1",
        "fct-type": "function",
        "title": "R1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold R1",
        "module": "Data.Fold.R1",
        "name": "R1",
        "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)(d-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall c R(c-\u003eb)(a-\u003ec-\u003ec)(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "module",
        "fct-source": "src/Data-Fold.html",
        "fct-type": "module",
        "title": "Fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "Fold",
        "normalized": "",
        "package": "folds",
        "partial": "Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:AsL-39-",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold.html#AsL%27",
        "fct-type": "class",
        "title": "AsL'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "AsL'",
        "normalized": "",
        "package": "folds",
        "partial": "As L'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:AsRM",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold.html#AsRM",
        "fct-type": "class",
        "title": "AsRM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "AsRM",
        "normalized": "",
        "package": "folds",
        "partial": "As RM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:Folding",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold-Class.html#Folding",
        "fct-type": "class",
        "title": "Folding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "Folding",
        "normalized": "",
        "package": "folds",
        "partial": "Folding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L",
      "description": {
        "fct-descr": "\u003cp\u003eA Moore Machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L.html#L",
        "fct-type": "data",
        "title": "L"
      },
      "index": {
        "description": "Moore Machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict left fold / strict Moore machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L'.html#L%27",
        "fct-type": "data",
        "title": "L'"
      },
      "index": {
        "description": "strict left fold strict Moore machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L'",
        "normalized": "",
        "package": "folds",
        "partial": "L'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L1",
      "description": {
        "fct-descr": "\u003cp\u003eA Mealy Machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L1.html#L1",
        "fct-type": "data",
        "title": "L1"
      },
      "index": {
        "description": "Mealy Machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict Mealy Machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-L1'.html#L1%27",
        "fct-type": "data",
        "title": "L1'"
      },
      "index": {
        "description": "strict Mealy Machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L1'",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:M",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e caught in amber. a.k.a. a monoidal reducer\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-M.html#M",
        "fct-type": "data",
        "title": "M"
      },
      "index": {
        "description": "foldMap caught in amber a.k.a monoidal reducer",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "M",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:M1",
      "description": {
        "fct-descr": "\u003cp\u003eA semigroup reducer\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-M1.html#M1",
        "fct-type": "data",
        "title": "M1"
      },
      "index": {
        "description": "semigroup reducer",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "M1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003eright folds / a reversed Moore machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-R.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "right folds reversed Moore machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "R",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:R1",
      "description": {
        "fct-descr": "\u003cp\u003eA reversed Mealy machine\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "data",
        "fct-source": "src/Data-Fold-R1.html#R1",
        "fct-type": "data",
        "title": "R1"
      },
      "index": {
        "description": "reversed Mealy machine",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "R1",
        "normalized": "",
        "package": "folds",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:Scan",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "class",
        "fct-source": "src/Data-Fold-Class.html#Scan",
        "fct-type": "class",
        "title": "Scan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "Scan",
        "normalized": "",
        "package": "folds",
        "partial": "Scan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall r . L (r -\u003e b) (r -\u003e a -\u003e r) r",
        "fct-source": "src/Data-Fold-L.html#L",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L",
        "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall r L(r-\u003eb)(r-\u003ea-\u003er)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L-39-",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall r . L' (r -\u003e b) (r -\u003e a -\u003e r) r",
        "fct-source": "src/Data-Fold-L'.html#L%27",
        "fct-type": "function",
        "title": "L'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L'",
        "normalized": "a b L'(b-\u003ec)(b-\u003ed-\u003eb)b",
        "package": "folds",
        "partial": "L'",
        "signature": "forall r L'(r-\u003eb)(r-\u003ea-\u003er)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L1",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall c . L1 (c -\u003e b) (c -\u003e a -\u003e c) (a -\u003e c)",
        "fct-source": "src/Data-Fold-L1.html#L1",
        "fct-type": "function",
        "title": "L1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L1",
        "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)(d-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall c L(c-\u003eb)(c-\u003ea-\u003ec)(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L1-39-",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall c . L1' (c -\u003e b) (c -\u003e a -\u003e c) (a -\u003e c)",
        "fct-source": "src/Data-Fold-L1'.html#L1%27",
        "fct-type": "function",
        "title": "L1'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "L1'",
        "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)(d-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall c L(c-\u003eb)(c-\u003ea-\u003ec)(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:M",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall m . M (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m) m",
        "fct-source": "src/Data-Fold-M.html#M",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "M",
        "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:M1",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall m . M1 (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m)",
        "fct-source": "src/Data-Fold-M1.html#M1",
        "fct-type": "function",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "M1",
        "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:R",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall r . R (r -\u003e b) (a -\u003e r -\u003e r) r",
        "fct-source": "src/Data-Fold-R.html#R",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "R",
        "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)b",
        "package": "folds",
        "partial": "",
        "signature": "forall r R(r-\u003eb)(a-\u003er-\u003er)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:R1",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "forall c . R1 (c -\u003e b) (a -\u003e c -\u003e c) (a -\u003e c)",
        "fct-source": "src/Data-Fold-R1.html#R1",
        "fct-type": "function",
        "title": "R1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "R1",
        "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)(d-\u003eb)",
        "package": "folds",
        "partial": "",
        "signature": "forall c R(c-\u003eb)(a-\u003ec-\u003ec)(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asL-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a strict left folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                   &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#968;       &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                 &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e . k     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e L' a b",
        "fct-source": "src/Data-Fold.html#asL%27",
        "fct-type": "method",
        "title": "asL'"
      },
      "index": {
        "description": "asL is folding homomorphism to strict left folding run xs asL run xs prefix xs asL asL prefix xs prefixOf xs asL asL prefixOf xs postfix asL xs asL postfix xs postfixOf asL xs asL postfixOf xs left asL asL left right asL asL right dimap asL asL dimap extract asL extract pure asL pure asL asL asL return asL return asL asL asL filtering asL asL filtering interspersing asL asL interspersing",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "asL'",
        "normalized": "a b c-\u003eL' b c",
        "package": "folds",
        "partial": "L'",
        "signature": "p a b-\u003eL' a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a monoidal folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                  &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#968;        &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e . k      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e M a b",
        "fct-source": "src/Data-Fold.html#asM",
        "fct-type": "method",
        "title": "asM"
      },
      "index": {
        "description": "asM is folding homomorphism to monoidal folding run xs asM run xs prefix xs asM asM prefix xs prefixOf xs asM asM prefixOf xs postfix asM xs asM postfix xs postfixOf asM xs asM postfixOf xs left asM asM left right asM asM right dimap asM asM dimap extract asM extract pure asM pure asM asM asM return asM return asM asM asM filtering asM asM filtering interspersing asM asM interspersing",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "asM",
        "normalized": "a b c-\u003eM b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003eM a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a right folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                  &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#968;        &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e . k      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e R a b",
        "fct-source": "src/Data-Fold.html#asR",
        "fct-type": "method",
        "title": "asR"
      },
      "index": {
        "description": "asR is folding homomorphism to right folding run xs asR run xs prefix xs asR asR prefix xs prefixOf xs asR asR prefixOf xs postfix asR xs asR postfix xs postfixOf asR xs asR postfixOf xs left asR asR left right asR asR right dimap asR asR dimap extract asR extract pure asR pure asR asR asR return asR return asR asR asR filtering asR asR filtering interspersing asR asR interspersing",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "asR",
        "normalized": "a b c-\u003eR b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003eR a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:beneath",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis acts like a generalized notion of \"costrength\",\n when applied to a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e, causing it to return the\n left-most value that fails to match the Prism, or the\n result of accumulating rewrapped in the \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e if\n everything matches.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Left 2, Left 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eLeft 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Right 2, Right 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eRight 2\n\u003c/pre\u003e\u003cpre\u003e\n beneath :: Prism s t a b -\u003e p a b -\u003e p s t\n beneath :: Iso s t a b   -\u003e p a b -\u003e p s t\n\u003c/pre\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "Overloaded p Mutator s t a b -\u003e p a b -\u003e p s t",
        "fct-source": "src/Data-Fold-Class.html#beneath",
        "fct-type": "function",
        "title": "beneath"
      },
      "index": {
        "description": "Lift Folding into Prism This acts like generalized notion of costrength when applied to Folding causing it to return the left-most value that fails to match the Prism or the result of accumulating rewrapped in the Prism if everything matches run Left Left Left beneath Left id Left run Left Right Right beneath Left id Right beneath Prism beneath Iso",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "beneath",
        "normalized": "Overloaded a Mutator b c d e-\u003ea d e-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "Overloaded p Mutator s t a b-\u003ep a b-\u003ep s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:filtering",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "(a -\u003e Bool) -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#filtering",
        "fct-type": "method",
        "title": "filtering"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "filtering",
        "normalized": "(a-\u003eBool)-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:interspersing",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#interspersing",
        "fct-type": "method",
        "title": "interspersing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "interspersing",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfix",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e t a -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfix",
        "fct-type": "method",
        "title": "postfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "postfix",
        "normalized": "a b c-\u003ed b-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003et a-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfix1",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "p a b -\u003e a -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfix1",
        "fct-type": "method",
        "title": "postfix1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "postfix1",
        "normalized": "a b c-\u003eb-\u003ea b c",
        "package": "folds",
        "partial": "",
        "signature": "p a b-\u003ea-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfixOf",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e p a b -\u003e s -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#postfixOf",
        "fct-type": "method",
        "title": "postfixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "postfixOf",
        "normalized": "Fold a b-\u003ec b d-\u003ea-\u003ec b d",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003ep a b-\u003es-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePartially apply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to some initial input on the left.\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "t a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefix",
        "fct-type": "method",
        "title": "prefix"
      },
      "index": {
        "description": "Partially apply Folding to some initial input on the left",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "prefix",
        "normalized": "a b-\u003ec b d-\u003ec b d",
        "package": "folds",
        "partial": "",
        "signature": "t a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefix1",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefix1",
        "fct-type": "method",
        "title": "prefix1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "prefix1",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefixOf",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e s -\u003e p a b -\u003e p a b",
        "fct-source": "src/Data-Fold-Class.html#prefixOf",
        "fct-type": "method",
        "title": "prefixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "prefixOf",
        "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ec b d",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003es-\u003ep a b-\u003ep a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a container full of input:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [\"hello\",\"world\"] $ L id (++) []\n\u003c/code\u003e\u003c/strong\u003e\"helloworld\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [1,2,3] $ L id (+) 0\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "t a -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "Apply Folding to container full of input run hello world id helloworld run id",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "run",
        "normalized": "a b-\u003ec b d-\u003ed",
        "package": "folds",
        "partial": "",
        "signature": "t a-\u003ep a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:run1",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a single element of input\n\u003c/p\u003e",
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "a -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#run1",
        "fct-type": "method",
        "title": "run1"
      },
      "index": {
        "description": "Apply Folding to single element of input",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "run1",
        "normalized": "a-\u003eb a c-\u003ec",
        "package": "folds",
        "partial": "",
        "signature": "a-\u003ep a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:runOf",
      "description": {
        "fct-module": "Data.Fold",
        "fct-package": "folds",
        "fct-signature": "Fold s a -\u003e s -\u003e p a b -\u003e b",
        "fct-source": "src/Data-Fold-Class.html#runOf",
        "fct-type": "method",
        "title": "runOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fold",
        "module": "Data.Fold",
        "name": "runOf",
        "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ed",
        "package": "folds",
        "partial": "Of",
        "signature": "Fold s a-\u003es-\u003ep a b-\u003eb"
      }
    }
  }
]