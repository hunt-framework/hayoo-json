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
        "word": "fmlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFoldMap lists: lists represented by their \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e -- A right-infinite list\n c = 1 `cons` c\n\u003c/pre\u003e\u003cpre\u003e -- A left-infinite list\n d = d `snoc` 2\n\u003c/pre\u003e\u003cpre\u003e -- A middle-infinite list ??\n e = c `append` d\n\u003c/pre\u003e\u003cpre\u003e *\u003e head e\n 1\n *\u003e last e\n 2\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.FMList",
          "name": "FMList",
          "package": "fmlist",
          "source": "src/Data-FMList.html",
          "type": "module"
        },
        "index": {
          "description": "FoldMap lists lists represented by their foldMap function Examples right-infinite list cons left-infinite list snoc middle-infinite list append head last",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "FMList",
          "package": "fmlist",
          "partial": "FMList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e function wrapped up in a newtype.\n\u003c/p\u003e",
          "module": "Data.FMList",
          "name": "FMList",
          "package": "fmlist",
          "source": "src/Data-FMList.html#FMList",
          "type": "newtype"
        },
        "index": {
          "description": "FMList is foldMap function wrapped up in newtype",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "FMList",
          "package": "fmlist",
          "partial": "FMList",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#t:FMList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "FM",
          "package": "fmlist",
          "signature": "FM",
          "source": "src/Data-FMList.html#FMList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "FM",
          "package": "fmlist",
          "partial": "FM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:FM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "append",
          "package": "fmlist",
          "signature": "FMList a -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "append",
          "normalized": "FMList a-\u003eFMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "FMList a-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "cons",
          "package": "fmlist",
          "signature": "a -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "cons",
          "normalized": "a-\u003eFMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "a-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "drop",
          "package": "fmlist",
          "signature": "n -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "drop",
          "normalized": "a-\u003eFMList b-\u003eFMList b",
          "package": "fmlist",
          "signature": "n-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "dropWhile",
          "package": "fmlist",
          "signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "package": "fmlist",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.FMList",
          "name": "empty",
          "package": "fmlist",
          "signature": "forall a.  f a",
          "type": "function"
        },
        "index": {
          "description": "The identity of",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "empty",
          "package": "fmlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "filter",
          "package": "fmlist",
          "signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "flatten",
          "package": "fmlist",
          "signature": "FMList (t a) -\u003e FMList a",
          "source": "src/Data-FMList.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "flatten",
          "normalized": "FMList(a b)-\u003eFMList b",
          "package": "fmlist",
          "signature": "FMList(t a)-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element of a structure to an action, evaluate these actions from left to right, \n and concat the monoid results.\n\u003c/p\u003e",
          "module": "Data.FMList",
          "name": "foldMapA",
          "package": "fmlist",
          "signature": "(a -\u003e f m) -\u003e t a -\u003e f m",
          "source": "src/Data-FMList.html#foldMapA",
          "type": "function"
        },
        "index": {
          "description": "Map each element of structure to an action evaluate these actions from left to right and concat the monoid results",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "foldMapA",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb c",
          "package": "fmlist",
          "partial": "Map",
          "signature": "(a-\u003ef m)-\u003et a-\u003ef m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:foldMapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "fromFoldable",
          "package": "fmlist",
          "signature": "f a -\u003e FMList a",
          "source": "src/Data-FMList.html#fromFoldable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "fromFoldable",
          "normalized": "a b-\u003eFMList b",
          "package": "fmlist",
          "partial": "Foldable",
          "signature": "f a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:fromFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "fromList",
          "package": "fmlist",
          "signature": "[a] -\u003e FMList a",
          "source": "src/Data-FMList.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "fromList",
          "normalized": "[a]-\u003eFMList a",
          "package": "fmlist",
          "partial": "List",
          "signature": "[a]-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "genericLength",
          "package": "fmlist",
          "signature": "FMList a -\u003e b",
          "source": "src/Data-FMList.html#genericLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "genericLength",
          "normalized": "FMList a-\u003eb",
          "package": "fmlist",
          "partial": "Length",
          "signature": "FMList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "head",
          "package": "fmlist",
          "signature": "FMList a -\u003e a",
          "source": "src/Data-FMList.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "head",
          "normalized": "FMList a-\u003ea",
          "package": "fmlist",
          "signature": "FMList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "init",
          "package": "fmlist",
          "signature": "FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "init",
          "normalized": "FMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "FMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "iterate",
          "package": "fmlist",
          "signature": "(a -\u003e a) -\u003e a -\u003e FMList a",
          "source": "src/Data-FMList.html#iterate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eFMList a",
          "package": "fmlist",
          "signature": "(a-\u003ea)-\u003ea-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "last",
          "package": "fmlist",
          "signature": "FMList a -\u003e a",
          "source": "src/Data-FMList.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "last",
          "normalized": "FMList a-\u003ea",
          "package": "fmlist",
          "signature": "FMList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "length",
          "package": "fmlist",
          "signature": "FMList a -\u003e Int",
          "source": "src/Data-FMList.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "length",
          "normalized": "FMList a-\u003eInt",
          "package": "fmlist",
          "signature": "FMList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "null",
          "package": "fmlist",
          "signature": "FMList a -\u003e Bool",
          "source": "src/Data-FMList.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "null",
          "normalized": "FMList a-\u003eBool",
          "package": "fmlist",
          "signature": "FMList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "pair",
          "package": "fmlist",
          "signature": "a -\u003e a -\u003e FMList a",
          "source": "src/Data-FMList.html#pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "pair",
          "normalized": "a-\u003ea-\u003eFMList a",
          "package": "fmlist",
          "signature": "a-\u003ea-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "repeat",
          "package": "fmlist",
          "signature": "a -\u003e FMList a",
          "source": "src/Data-FMList.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "repeat",
          "normalized": "a-\u003eFMList a",
          "package": "fmlist",
          "signature": "a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "reverse",
          "package": "fmlist",
          "signature": "FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "reverse",
          "normalized": "FMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "FMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "singleton",
          "package": "fmlist",
          "signature": "a -\u003e FMList a",
          "source": "src/Data-FMList.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "singleton",
          "normalized": "a-\u003eFMList a",
          "package": "fmlist",
          "signature": "a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "snoc",
          "package": "fmlist",
          "signature": "FMList a -\u003e a -\u003e FMList a",
          "source": "src/Data-FMList.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "snoc",
          "normalized": "FMList a-\u003ea-\u003eFMList a",
          "package": "fmlist",
          "signature": "FMList a-\u003ea-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "tail",
          "package": "fmlist",
          "signature": "FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "tail",
          "normalized": "FMList a-\u003eFMList a",
          "package": "fmlist",
          "signature": "FMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "take",
          "package": "fmlist",
          "signature": "n -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "take",
          "normalized": "a-\u003eFMList b-\u003eFMList b",
          "package": "fmlist",
          "signature": "n-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "takeWhile",
          "package": "fmlist",
          "signature": "(a -\u003e Bool) -\u003e FMList a -\u003e FMList a",
          "source": "src/Data-FMList.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "package": "fmlist",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eFMList a-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
          "module": "Data.FMList",
          "name": "toList",
          "package": "fmlist",
          "signature": "t a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "List of elements of structure",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "fmlist",
          "partial": "List",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e transforms a list by changing \n the map function that is passed to \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt has the following property:\n\u003c/p\u003e\u003cpre\u003etransform a . transform b = transform (b . a)\u003c/pre\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e  m \u003e\u003e= g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= flatten (fmap g m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= flatten . fmap g $ m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform foldMap . transform (. g) $ m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform ((. g) . foldMap) m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e= transform (\\f -\u003e foldMap f . g) m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.FMList",
          "name": "transform",
          "package": "fmlist",
          "signature": "(a -\u003e m) -\u003e b -\u003e m) -\u003e FMList b -\u003e FMList a",
          "source": "src/Data-FMList.html#transform",
          "type": "function"
        },
        "index": {
          "description": "The function transform transforms list by changing the map function that is passed to foldMap It has the following property transform transform transform For example flatten fmap flatten fmap transform foldMap transform transform foldMap transform foldMap",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "transform",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb)-\u003eFMList c-\u003eFMList a",
          "package": "fmlist",
          "signature": "(a-\u003em)-\u003eb-\u003em)-\u003eFMList b-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "unFM",
          "package": "fmlist",
          "signature": "(a -\u003e m) -\u003e m",
          "source": "src/Data-FMList.html#FMList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "unFM",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "fmlist",
          "partial": "FM",
          "signature": "(a-\u003em)-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e builds a list from a seed value.\n The function takes the seed and returns an \u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e of values.\n If the value is \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, then \u003ccode\u003ea\u003c/code\u003e is appended to the result, and if the\n value is \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is used as seed value in a recursive call.\n\u003c/p\u003e\u003cp\u003eA simple use of \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e (simulating unfoldl):\n\u003c/p\u003e\u003cpre\u003e *\u003e unfold (\\b -\u003e if b == 0 then empty else Left (b-1) `pair` Right b) 10\n fromList [1,2,3,4,5,6,7,8,9,10]\n\u003c/pre\u003e",
          "module": "Data.FMList",
          "name": "unfold",
          "package": "fmlist",
          "signature": "(b -\u003e FMList (Either b a)) -\u003e b -\u003e FMList a",
          "source": "src/Data-FMList.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold builds list from seed value The function takes the seed and returns an FMList of values If the value is Right then is appended to the result and if the value is Left then is used as seed value in recursive call simple use of unfold simulating unfoldl unfold if then empty else Left b-1 pair Right fromList",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "unfold",
          "normalized": "(a-\u003eFMList(Either a b))-\u003ea-\u003eFMList b",
          "package": "fmlist",
          "signature": "(b-\u003eFMList(Either b a))-\u003eb-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds an \u003ccode\u003e\u003ca\u003eFMList\u003c/a\u003e\u003c/code\u003e from a seed value from left to right.\n The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a appended to the result and \u003ccode\u003eb\u003c/code\u003e is used as the next\n seed value in a recursive call.\n\u003c/p\u003e\u003cp\u003eA simple use of \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e *\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n fromList [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Data.FMList",
          "name": "unfoldr",
          "package": "fmlist",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e FMList a",
          "source": "src/Data-FMList.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "unfoldr builds an FMList from seed value from left to right The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is appended to the result and is used as the next seed value in recursive call simple use of unfoldr unfoldr if then Nothing else Just b-1 fromList",
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eFMList b",
          "package": "fmlist",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eFMList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "zip",
          "package": "fmlist",
          "signature": "FMList a -\u003e FMList b -\u003e FMList (a, b)",
          "source": "src/Data-FMList.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "zip",
          "normalized": "FMList a-\u003eFMList b-\u003eFMList(a,b)",
          "package": "fmlist",
          "signature": "FMList a-\u003eFMList b-\u003eFMList(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FMList",
          "name": "zipWith",
          "package": "fmlist",
          "signature": "(a -\u003e b -\u003e c) -\u003e FMList a -\u003e FMList b -\u003e FMList c",
          "source": "src/Data-FMList.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FMList",
          "module": "Data.FMList",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eFMList a-\u003eFMList b-\u003eFMList c",
          "package": "fmlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eFMList a-\u003eFMList b-\u003eFMList c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fmlist/docs/Data-FMList.html#v:zipWith"
      }
    }
  ]
]