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
        "word": "folds"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "Class",
          "package": "folds",
          "source": "src/Data-Fold-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "Class",
          "package": "folds",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "Folding",
          "package": "folds",
          "source": "src/Data-Fold-Class.html#Folding",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "Folding",
          "package": "folds",
          "partial": "Folding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#t:Folding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "Scan",
          "package": "folds",
          "source": "src/Data-Fold-Class.html#Scan",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "Scan",
          "package": "folds",
          "partial": "Scan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#t:Scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis acts like a generalized notion of \"costrength\",\n when applied to a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e, causing it to return the\n left-most value that fails to match the Prism, or the\n result of accumulating rewrapped in the \u003ccode\u003e\u003ca\u003ePrism\u003c/a\u003e\u003c/code\u003e if\n everything matches.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Left 2, Left 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eLeft 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [Left 1, Right 2, Right 3] $ beneath _Left $ R id (+) 0\n\u003c/code\u003e\u003c/strong\u003eRight 2\n\u003c/pre\u003e\u003cpre\u003e\n beneath :: Prism s t a b -\u003e p a b -\u003e p s t\n beneath :: Iso s t a b   -\u003e p a b -\u003e p s t\n\u003c/pre\u003e",
          "module": "[\"Data.Fold.Class\",\"Data.Fold\"]",
          "name": "beneath",
          "package": "folds",
          "signature": "Overloaded p Mutator s t a b -\u003e p a b -\u003e p s t",
          "source": "src/Data-Fold-Class.html#beneath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:beneath\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:beneath\"]"
        },
        "index": {
          "description": "Lift Folding into Prism This acts like generalized notion of costrength when applied to Folding causing it to return the left-most value that fails to match the Prism or the result of accumulating rewrapped in the Prism if everything matches run Left Left Left beneath Left id Left run Left Right Right beneath Left id Right beneath Prism beneath Iso",
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "beneath",
          "normalized": "Overloaded a Mutator b c d e-\u003ea d e-\u003ea b c",
          "package": "folds",
          "signature": "Overloaded p Mutator s t a b-\u003ep a b-\u003ep s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:beneath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "filtering",
          "package": "folds",
          "signature": "(a -\u003e Bool) -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#filtering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "filtering",
          "normalized": "(a-\u003eBool)-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "(a-\u003eBool)-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:filtering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "interspersing",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#interspersing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "interspersing",
          "normalized": "a-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:interspersing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "postfix",
          "package": "folds",
          "signature": "p a b -\u003e t a -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "postfix",
          "normalized": "a b c-\u003ed b-\u003ea b c",
          "package": "folds",
          "signature": "p a b-\u003et a-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "postfix1",
          "package": "folds",
          "signature": "p a b -\u003e a -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfix1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "postfix1",
          "normalized": "a b c-\u003eb-\u003ea b c",
          "package": "folds",
          "signature": "p a b-\u003ea-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "postfixOf",
          "package": "folds",
          "signature": "Fold s a -\u003e p a b -\u003e s -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "postfixOf",
          "normalized": "Fold a b-\u003ec b d-\u003ea-\u003ec b d",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003ep a b-\u003es-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:postfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartially apply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to some initial input on the left.\n\u003c/p\u003e",
          "module": "Data.Fold.Class",
          "name": "prefix",
          "package": "folds",
          "signature": "t a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefix",
          "type": "method"
        },
        "index": {
          "description": "Partially apply Folding to some initial input on the left",
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "prefix",
          "normalized": "a b-\u003ec b d-\u003ec b d",
          "package": "folds",
          "signature": "t a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "prefix1",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefix1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "prefix1",
          "normalized": "a-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "prefixOf",
          "package": "folds",
          "signature": "Fold s a -\u003e s -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "prefixOf",
          "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ec b d",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003es-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:prefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a container full of input:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [\"hello\",\"world\"] $ L id (++) []\n\u003c/code\u003e\u003c/strong\u003e\"helloworld\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [1,2,3] $ L id (+) 0\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
          "module": "Data.Fold.Class",
          "name": "run",
          "package": "folds",
          "signature": "t a -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#run",
          "type": "method"
        },
        "index": {
          "description": "Apply Folding to container full of input run hello world id helloworld run id",
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "run",
          "normalized": "a b-\u003ec b d-\u003ed",
          "package": "folds",
          "signature": "t a-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a single element of input\n\u003c/p\u003e",
          "module": "Data.Fold.Class",
          "name": "run1",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#run1",
          "type": "method"
        },
        "index": {
          "description": "Apply Folding to single element of input",
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "run1",
          "normalized": "a-\u003eb a c-\u003ec",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:run1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Class",
          "name": "runOf",
          "package": "folds",
          "signature": "Fold s a -\u003e s -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#runOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold Class",
          "module": "Data.Fold.Class",
          "name": "runOf",
          "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ed",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003es-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Class.html#v:runOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Internal",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Internal",
          "package": "folds",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Fold.Internal",
          "name": "Maybe'",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html#Maybe%27",
          "type": "data"
        },
        "index": {
          "description": "Strict Maybe",
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Maybe'",
          "package": "folds",
          "partial": "Maybe'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Maybe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reified \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fold.Internal",
          "name": "N",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html#N",
          "type": "newtype"
        },
        "index": {
          "description": "reified Monoid",
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "N",
          "package": "folds",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict Pair\n\u003c/p\u003e",
          "module": "Data.Fold.Internal",
          "name": "Pair'",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html#Pair%27",
          "type": "data"
        },
        "index": {
          "description": "Strict Pair",
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Pair'",
          "package": "folds",
          "partial": "Pair'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Pair-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversed '[]'\n\u003c/p\u003e",
          "module": "Data.Fold.Internal",
          "name": "SnocList",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html#SnocList",
          "type": "data"
        },
        "index": {
          "description": "Reversed",
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "SnocList",
          "package": "folds",
          "partial": "Snoc List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:SnocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape of a \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Fold.Internal",
          "name": "Tree",
          "package": "folds",
          "source": "src/Data-Fold-Internal.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "The shape of foldMap",
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Tree",
          "package": "folds",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Just'",
          "package": "folds",
          "signature": "Just' !a",
          "source": "src/Data-Fold-Internal.html#Maybe%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Just'",
          "package": "folds",
          "partial": "Just'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Just-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "N",
          "package": "folds",
          "signature": "N",
          "source": "src/Data-Fold-Internal.html#N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "N",
          "package": "folds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Nil",
          "package": "folds",
          "signature": "Nil",
          "source": "src/Data-Fold-Internal.html#SnocList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Nil",
          "package": "folds",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Nothing'",
          "package": "folds",
          "signature": "Nothing'",
          "source": "src/Data-Fold-Internal.html#Maybe%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Nothing'",
          "package": "folds",
          "partial": "Nothing'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Nothing-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "One",
          "package": "folds",
          "signature": "One a",
          "source": "src/Data-Fold-Internal.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "One",
          "package": "folds",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Pair'",
          "package": "folds",
          "signature": "Pair' !a !b",
          "source": "src/Data-Fold-Internal.html#Pair%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Pair'",
          "package": "folds",
          "partial": "Pair'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Pair-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Snoc",
          "package": "folds",
          "signature": "Snoc (SnocList a) a",
          "source": "src/Data-Fold-Internal.html#SnocList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Snoc",
          "package": "folds",
          "partial": "Snoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Two",
          "package": "folds",
          "signature": "Two (Tree a) (Tree a)",
          "source": "src/Data-Fold-Internal.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Two",
          "package": "folds",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "Zero",
          "package": "folds",
          "signature": "Zero",
          "source": "src/Data-Fold-Internal.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "Zero",
          "package": "folds",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "maybe'",
          "package": "folds",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe' a -\u003e b",
          "source": "src/Data-Fold-Internal.html#maybe%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "maybe'",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe' b-\u003ea",
          "package": "folds",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe' a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:maybe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.Internal",
          "name": "runN",
          "package": "folds",
          "signature": "a",
          "source": "src/Data-Fold-Internal.html#N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold Internal",
          "module": "Data.Fold.Internal",
          "name": "runN",
          "package": "folds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-Internal.html#v:runN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.L",
          "name": "L",
          "package": "folds",
          "source": "src/Data-Fold-L.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold L",
          "module": "Data.Fold.L",
          "name": "L",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Moore Machine\n\u003c/p\u003e",
          "module": "Data.Fold.L",
          "name": "L",
          "package": "folds",
          "source": "src/Data-Fold-L.html#L",
          "type": "data"
        },
        "index": {
          "description": "Moore Machine",
          "hierarchy": "Data Fold L",
          "module": "Data.Fold.L",
          "name": "L",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.L\",\"Data.Fold\"]",
          "name": "L",
          "package": "folds",
          "signature": "forall r . L (r -\u003e b) (r -\u003e a -\u003e r) r",
          "source": "src/Data-Fold-L.html#L",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#v:L\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L\"]"
        },
        "index": {
          "hierarchy": "Data Fold L",
          "module": "Data.Fold.L",
          "name": "L",
          "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)b",
          "package": "folds",
          "signature": "forall r L(r-\u003eb)(r-\u003ea-\u003er)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Moore machine from a state valuation and transition function\n\u003c/p\u003e",
          "module": "Data.Fold.L",
          "name": "unfoldL",
          "package": "folds",
          "signature": "(s -\u003e (b, a -\u003e s)) -\u003e s -\u003e L a b",
          "source": "src/Data-Fold-L.html#unfoldL",
          "type": "function"
        },
        "index": {
          "description": "Construct Moore machine from state valuation and transition function",
          "hierarchy": "Data Fold L",
          "module": "Data.Fold.L",
          "name": "unfoldL",
          "normalized": "(a-\u003e(b,c-\u003ea))-\u003ea-\u003eL c b",
          "package": "folds",
          "signature": "(s-\u003e(b,a-\u003es))-\u003es-\u003eL a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L.html#v:unfoldL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.L1",
          "name": "L1",
          "package": "folds",
          "source": "src/Data-Fold-L1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold L1",
          "module": "Data.Fold.L1",
          "name": "L1",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Mealy Machine\n\u003c/p\u003e",
          "module": "Data.Fold.L1",
          "name": "L1",
          "package": "folds",
          "source": "src/Data-Fold-L1.html#L1",
          "type": "data"
        },
        "index": {
          "description": "Mealy Machine",
          "hierarchy": "Data Fold L1",
          "module": "Data.Fold.L1",
          "name": "L1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#t:L1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.L1\",\"Data.Fold\"]",
          "name": "L1",
          "package": "folds",
          "signature": "forall c . L1 (c -\u003e b) (c -\u003e a -\u003e c) (a -\u003e c)",
          "source": "src/Data-Fold-L1.html#L1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#v:L1\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L1\"]"
        },
        "index": {
          "hierarchy": "Data Fold L1",
          "module": "Data.Fold.L1",
          "name": "L1",
          "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)(d-\u003eb)",
          "package": "folds",
          "signature": "forall c L(c-\u003eb)(c-\u003ea-\u003ec)(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-L1.html#v:L1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e this \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e\n is based on a \u003ccode\u003e(-\u003e) r\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003eMonoid\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e rather than\n than on the \u003ccode\u003e\u003ccode\u003eStore\u003c/code\u003e r\u003c/code\u003e \u003ccode\u003e\u003ca\u003eComonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Fold.M",
          "name": "M",
          "package": "folds",
          "source": "src/Data-Fold-M.html",
          "type": "module"
        },
        "index": {
          "description": "Unlike and this Comonad is based on Comonad for Monoid rather than than on the Store Comonad",
          "hierarchy": "Data Fold M",
          "module": "Data.Fold.M",
          "name": "M",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e caught in amber. a.k.a. a monoidal reducer\n\u003c/p\u003e",
          "module": "Data.Fold.M",
          "name": "M",
          "package": "folds",
          "source": "src/Data-Fold-M.html#M",
          "type": "data"
        },
        "index": {
          "description": "foldMap caught in amber a.k.a monoidal reducer",
          "hierarchy": "Data Fold M",
          "module": "Data.Fold.M",
          "name": "M",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#t:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.M\",\"Data.Fold\"]",
          "name": "M",
          "package": "folds",
          "signature": "forall m . M (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m) m",
          "source": "src/Data-Fold-M.html#M",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#v:M\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:M\"]"
        },
        "index": {
          "hierarchy": "Data Fold M",
          "module": "Data.Fold.M",
          "name": "M",
          "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)b",
          "package": "folds",
          "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.M1",
          "name": "M1",
          "package": "folds",
          "source": "src/Data-Fold-M1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold M1",
          "module": "Data.Fold.M1",
          "name": "M1",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA semigroup reducer\n\u003c/p\u003e",
          "module": "Data.Fold.M1",
          "name": "M1",
          "package": "folds",
          "source": "src/Data-Fold-M1.html#M1",
          "type": "data"
        },
        "index": {
          "description": "semigroup reducer",
          "hierarchy": "Data Fold M1",
          "module": "Data.Fold.M1",
          "name": "M1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#t:M1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.M1\",\"Data.Fold\"]",
          "name": "M1",
          "package": "folds",
          "signature": "forall m . M1 (m -\u003e b) (a -\u003e m) (m -\u003e m -\u003e m)",
          "source": "src/Data-Fold-M1.html#M1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#v:M1\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:M1\"]"
        },
        "index": {
          "hierarchy": "Data Fold M1",
          "module": "Data.Fold.M1",
          "name": "M1",
          "normalized": "a b M(b-\u003ec)(d-\u003eb)(b-\u003eb-\u003eb)",
          "package": "folds",
          "signature": "forall m M(m-\u003eb)(a-\u003em)(m-\u003em-\u003em)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-M1.html#v:M1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.R",
          "name": "R",
          "package": "folds",
          "source": "src/Data-Fold-R.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold R",
          "module": "Data.Fold.R",
          "name": "R",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eright folds / a reversed Moore machine\n\u003c/p\u003e",
          "module": "Data.Fold.R",
          "name": "R",
          "package": "folds",
          "source": "src/Data-Fold-R.html#R",
          "type": "data"
        },
        "index": {
          "description": "right folds reversed Moore machine",
          "hierarchy": "Data Fold R",
          "module": "Data.Fold.R",
          "name": "R",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.R\",\"Data.Fold\"]",
          "name": "R",
          "package": "folds",
          "signature": "forall r . R (r -\u003e b) (a -\u003e r -\u003e r) r",
          "source": "src/Data-Fold-R.html#R",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#v:R\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:R\"]"
        },
        "index": {
          "hierarchy": "Data Fold R",
          "module": "Data.Fold.R",
          "name": "R",
          "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)b",
          "package": "folds",
          "signature": "forall r R(r-\u003eb)(a-\u003er-\u003er)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold.R1",
          "name": "R1",
          "package": "folds",
          "source": "src/Data-Fold-R1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold R1",
          "module": "Data.Fold.R1",
          "name": "R1",
          "package": "folds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reversed Mealy machine\n\u003c/p\u003e",
          "module": "Data.Fold.R1",
          "name": "R1",
          "package": "folds",
          "source": "src/Data-Fold-R1.html#R1",
          "type": "data"
        },
        "index": {
          "description": "reversed Mealy machine",
          "hierarchy": "Data Fold R1",
          "module": "Data.Fold.R1",
          "name": "R1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Fold.R1\",\"Data.Fold\"]",
          "name": "R1",
          "package": "folds",
          "signature": "forall c . R1 (c -\u003e b) (a -\u003e c -\u003e c) (a -\u003e c)",
          "source": "src/Data-Fold-R1.html#R1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#v:R1\",\"http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:R1\"]"
        },
        "index": {
          "hierarchy": "Data Fold R1",
          "module": "Data.Fold.R1",
          "name": "R1",
          "normalized": "a b R(b-\u003ec)(d-\u003eb-\u003eb)(d-\u003eb)",
          "package": "folds",
          "signature": "forall c R(c-\u003eb)(a-\u003ec-\u003ec)(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold-R1.html#v:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "Fold",
          "package": "folds",
          "source": "src/Data-Fold.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "Fold",
          "package": "folds",
          "partial": "Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "AsL'",
          "package": "folds",
          "source": "src/Data-Fold.html#AsL%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "AsL'",
          "package": "folds",
          "partial": "As L'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:AsL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "AsRM",
          "package": "folds",
          "source": "src/Data-Fold.html#AsRM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "AsRM",
          "package": "folds",
          "partial": "As RM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:AsRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "Folding",
          "package": "folds",
          "source": "src/Data-Fold-Class.html#Folding",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "Folding",
          "package": "folds",
          "partial": "Folding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:Folding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Moore Machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "L",
          "package": "folds",
          "source": "src/Data-Fold-L.html#L",
          "type": "data"
        },
        "index": {
          "description": "Moore Machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict left fold / strict Moore machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "L'",
          "package": "folds",
          "source": "src/Data-Fold-L'.html#L%27",
          "type": "data"
        },
        "index": {
          "description": "strict left fold strict Moore machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L'",
          "package": "folds",
          "partial": "L'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Mealy Machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "L1",
          "package": "folds",
          "source": "src/Data-Fold-L1.html#L1",
          "type": "data"
        },
        "index": {
          "description": "Mealy Machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict Mealy Machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "L1'",
          "package": "folds",
          "source": "src/Data-Fold-L1'.html#L1%27",
          "type": "data"
        },
        "index": {
          "description": "strict Mealy Machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L1'",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:L1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e caught in amber. a.k.a. a monoidal reducer\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "M",
          "package": "folds",
          "source": "src/Data-Fold-M.html#M",
          "type": "data"
        },
        "index": {
          "description": "foldMap caught in amber a.k.a monoidal reducer",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "M",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA semigroup reducer\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "M1",
          "package": "folds",
          "source": "src/Data-Fold-M1.html#M1",
          "type": "data"
        },
        "index": {
          "description": "semigroup reducer",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "M1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:M1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eright folds / a reversed Moore machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "R",
          "package": "folds",
          "source": "src/Data-Fold-R.html#R",
          "type": "data"
        },
        "index": {
          "description": "right folds reversed Moore machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "R",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reversed Mealy machine\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "R1",
          "package": "folds",
          "source": "src/Data-Fold-R1.html#R1",
          "type": "data"
        },
        "index": {
          "description": "reversed Mealy machine",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "R1",
          "package": "folds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "Scan",
          "package": "folds",
          "source": "src/Data-Fold-Class.html#Scan",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "Scan",
          "package": "folds",
          "partial": "Scan",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#t:Scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "L'",
          "package": "folds",
          "signature": "forall r . L' (r -\u003e b) (r -\u003e a -\u003e r) r",
          "source": "src/Data-Fold-L'.html#L%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L'",
          "normalized": "a b L'(b-\u003ec)(b-\u003ed-\u003eb)b",
          "package": "folds",
          "partial": "L'",
          "signature": "forall r L'(r-\u003eb)(r-\u003ea-\u003er)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "L1'",
          "package": "folds",
          "signature": "forall c . L1' (c -\u003e b) (c -\u003e a -\u003e c) (a -\u003e c)",
          "source": "src/Data-Fold-L1'.html#L1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "L1'",
          "normalized": "a b L(b-\u003ec)(b-\u003ed-\u003eb)(d-\u003eb)",
          "package": "folds",
          "signature": "forall c L(c-\u003eb)(c-\u003ea-\u003ec)(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:L1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a strict left folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                   &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#968;       &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                 &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e . k     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easL'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
          "module": "Data.Fold",
          "name": "asL'",
          "package": "folds",
          "signature": "p a b -\u003e L' a b",
          "source": "src/Data-Fold.html#asL%27",
          "type": "method"
        },
        "index": {
          "description": "asL is folding homomorphism to strict left folding run xs asL run xs prefix xs asL asL prefix xs prefixOf xs asL asL prefixOf xs postfix asL xs asL postfix xs postfixOf asL xs asL postfixOf xs left asL asL left right asL asL right dimap asL asL dimap extract asL extract pure asL pure asL asL asL return asL return asL asL asL filtering asL asL filtering interspersing asL asL interspersing",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "asL'",
          "normalized": "a b c-\u003eL' b c",
          "package": "folds",
          "partial": "L'",
          "signature": "p a b-\u003eL' a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a monoidal folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                  &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#968;        &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e . k      &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easM\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
          "module": "Data.Fold",
          "name": "asM",
          "package": "folds",
          "signature": "p a b -\u003e M a b",
          "source": "src/Data-Fold.html#asM",
          "type": "method"
        },
        "index": {
          "description": "asM is folding homomorphism to monoidal folding run xs asM run xs prefix xs asM asM prefix xs prefixOf xs asM asM prefixOf xs postfix asM xs asM postfix xs postfixOf asM xs asM postfixOf xs left asM asM left right asM asM right dimap asM asM dimap extract asM extract pure asM pure asM asM asM return asM return asM asM asM filtering asM asM filtering interspersing asM asM interspersing",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "asM",
          "normalized": "a b c-\u003eM b c",
          "package": "folds",
          "signature": "p a b-\u003eM a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e is a folding homomorphism to a right folding\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e xs &#966;\n \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e xs &#966;)\n \u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)  &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eprefixOf\u003c/a\u003e\u003c/code\u003e l xs &#966;)\n \u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) xs     &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfix\u003c/a\u003e\u003c/code\u003e &#966; xs)\n \u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) xs &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epostfixOf\u003c/a\u003e\u003c/code\u003e l &#966; xs)\n \u003ccode\u003eleft'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)          &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eleft'\u003c/code\u003e &#966;)\n \u003ccode\u003eright'\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)         &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eright'\u003c/code\u003e &#966;)\n \u003ccode\u003edimap\u003c/code\u003e l r (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003edimap\u003c/code\u003e l r &#966;)\n \u003ccode\u003eextract\u003c/code\u003e (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)        &#8801; \u003ccode\u003eextract\u003c/code\u003e &#966;\n \u003ccode\u003epure\u003c/code\u003e a                  &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003epure\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#968;        &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003c*\u003e\u003c/code\u003e &#968;)\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a                &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e a)\n \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e . k      &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (&#966; \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e k)\n \u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;)     &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efiltering\u003c/a\u003e\u003c/code\u003e p &#966;)\n \u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a (\u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e &#966;) &#8801; \u003ccode\u003e\u003ca\u003easR\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einterspersing\u003c/a\u003e\u003c/code\u003e a &#966;)\n\u003c/pre\u003e",
          "module": "Data.Fold",
          "name": "asR",
          "package": "folds",
          "signature": "p a b -\u003e R a b",
          "source": "src/Data-Fold.html#asR",
          "type": "method"
        },
        "index": {
          "description": "asR is folding homomorphism to right folding run xs asR run xs prefix xs asR asR prefix xs prefixOf xs asR asR prefixOf xs postfix asR xs asR postfix xs postfixOf asR xs asR postfixOf xs left asR asR left right asR asR right dimap asR asR dimap extract asR extract pure asR pure asR asR asR return asR return asR asR asR filtering asR asR filtering interspersing asR asR interspersing",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "asR",
          "normalized": "a b c-\u003eR b c",
          "package": "folds",
          "signature": "p a b-\u003eR a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:asR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "filtering",
          "package": "folds",
          "signature": "(a -\u003e Bool) -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#filtering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "filtering",
          "normalized": "(a-\u003eBool)-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "(a-\u003eBool)-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:filtering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "interspersing",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#interspersing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "interspersing",
          "normalized": "a-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:interspersing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "postfix",
          "package": "folds",
          "signature": "p a b -\u003e t a -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "postfix",
          "normalized": "a b c-\u003ed b-\u003ea b c",
          "package": "folds",
          "signature": "p a b-\u003et a-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "postfix1",
          "package": "folds",
          "signature": "p a b -\u003e a -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfix1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "postfix1",
          "normalized": "a b c-\u003eb-\u003ea b c",
          "package": "folds",
          "signature": "p a b-\u003ea-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "postfixOf",
          "package": "folds",
          "signature": "Fold s a -\u003e p a b -\u003e s -\u003e p a b",
          "source": "src/Data-Fold-Class.html#postfixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "postfixOf",
          "normalized": "Fold a b-\u003ec b d-\u003ea-\u003ec b d",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003ep a b-\u003es-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:postfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartially apply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to some initial input on the left.\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "prefix",
          "package": "folds",
          "signature": "t a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefix",
          "type": "method"
        },
        "index": {
          "description": "Partially apply Folding to some initial input on the left",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "prefix",
          "normalized": "a b-\u003ec b d-\u003ec b d",
          "package": "folds",
          "signature": "t a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "prefix1",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefix1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "prefix1",
          "normalized": "a-\u003eb a c-\u003eb a c",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "prefixOf",
          "package": "folds",
          "signature": "Fold s a -\u003e s -\u003e p a b -\u003e p a b",
          "source": "src/Data-Fold-Class.html#prefixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "prefixOf",
          "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ec b d",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003es-\u003ep a b-\u003ep a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:prefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a container full of input:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [\"hello\",\"world\"] $ L id (++) []\n\u003c/code\u003e\u003c/strong\u003e\"helloworld\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun [1,2,3] $ L id (+) 0\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e",
          "module": "Data.Fold",
          "name": "run",
          "package": "folds",
          "signature": "t a -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#run",
          "type": "method"
        },
        "index": {
          "description": "Apply Folding to container full of input run hello world id helloworld run id",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "run",
          "normalized": "a b-\u003ec b d-\u003ed",
          "package": "folds",
          "signature": "t a-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eFolding\u003c/a\u003e\u003c/code\u003e to a single element of input\n\u003c/p\u003e",
          "module": "Data.Fold",
          "name": "run1",
          "package": "folds",
          "signature": "a -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#run1",
          "type": "method"
        },
        "index": {
          "description": "Apply Folding to single element of input",
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "run1",
          "normalized": "a-\u003eb a c-\u003ec",
          "package": "folds",
          "signature": "a-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:run1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fold",
          "name": "runOf",
          "package": "folds",
          "signature": "Fold s a -\u003e s -\u003e p a b -\u003e b",
          "source": "src/Data-Fold-Class.html#runOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Fold",
          "module": "Data.Fold",
          "name": "runOf",
          "normalized": "Fold a b-\u003ea-\u003ec b d-\u003ed",
          "package": "folds",
          "partial": "Of",
          "signature": "Fold s a-\u003es-\u003ep a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/folds/docs/Data-Fold.html#v:runOf"
      }
    }
  ]
]