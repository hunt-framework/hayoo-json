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
        "word": "monad-par-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This structure does not perform well, and will be removed in future versions\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e type, a list that supports\n constant-time append, and is therefore ideal for building the\n result of tree-shaped parallel computations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-AList.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated This structure does not perform well and will be removed in future versions This module defines the AList type list that supports constant-time append and is therefore ideal for building the result of tree-shaped parallel computations",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "package": "monad-par-extras",
          "partial": "AList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList that support constant-time append (sometimes called\n join-lists).\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-AList.html#AList",
          "type": "data"
        },
        "index": {
          "description": "List that support constant-time append sometimes called join-lists",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "package": "monad-par-extras",
          "partial": "AList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#t:AList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "package": "monad-par-extras",
          "signature": "AList [a]",
          "source": "src/Control-Monad-Par-AList.html#AList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "AList",
          "normalized": "AList[a]",
          "package": "monad-par-extras",
          "partial": "AList",
          "signature": "AList[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:AList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "ANil",
          "package": "monad-par-extras",
          "signature": "ANil",
          "source": "src/Control-Monad-Par-AList.html#AList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "ANil",
          "package": "monad-par-extras",
          "partial": "ANil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:ANil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "ASing",
          "package": "monad-par-extras",
          "signature": "ASing a",
          "source": "src/Control-Monad-Par-AList.html#AList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "ASing",
          "package": "monad-par-extras",
          "partial": "ASing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:ASing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "Append",
          "package": "monad-par-extras",
          "signature": "Append (AList a) (AList a)",
          "source": "src/Control-Monad-Par-AList.html#AList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "Append",
          "package": "monad-par-extras",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Append two \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "append",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e AList a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "append",
          "normalized": "AList a-\u003eAList a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eAList a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBalance the tree representation of an AList.  \n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "balance",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#balance",
          "type": "function"
        },
        "index": {
          "description": "Balance the tree representation of an AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "balance",
          "normalized": "AList a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e prepend an element\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "cons",
          "package": "monad-par-extras",
          "signature": "a -\u003e AList a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#cons",
          "type": "function"
        },
        "index": {
          "description": "prepend an element",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "cons",
          "normalized": "a-\u003eAList a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "a-\u003eAList a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "depth",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e Int",
          "source": "src/Control-Monad-Par-AList.html#depth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "depth",
          "normalized": "AList a-\u003eInt",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e an empty \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "empty",
          "package": "monad-par-extras",
          "signature": "AList a",
          "source": "src/Control-Monad-Par-AList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "an empty AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "empty",
          "package": "monad-par-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "filter",
          "package": "monad-par-extras",
          "signature": "(a -\u003e Bool) -\u003e AList a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eAList a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "(a-\u003eBool)-\u003eAList a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e convert an ordinary list to an \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "fromList",
          "package": "monad-par-extras",
          "signature": "[a] -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "convert an ordinary list to an AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "fromList",
          "normalized": "[a]-\u003eAList a",
          "package": "monad-par-extras",
          "partial": "List",
          "signature": "[a]-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an ordinary list, but do so using \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eASing\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "fromListBalanced",
          "package": "monad-par-extras",
          "signature": "[a] -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#fromListBalanced",
          "type": "function"
        },
        "index": {
          "description": "Convert an ordinary list but do so using Append and ASing rather than AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "fromListBalanced",
          "normalized": "[a]-\u003eAList a",
          "package": "monad-par-extras",
          "partial": "List Balanced",
          "signature": "[a]-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:fromListBalanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e take the head element of an \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNB. linear-time, because the list might look like this:\n\u003c/p\u003e\u003cpre\u003e (((... `append` a) `append` b) `append` c)\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "head",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e a",
          "source": "src/Control-Monad-Par-AList.html#head",
          "type": "function"
        },
        "index": {
          "description": "take the head element of an AList NB linear-time because the list might look like this append append append",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "head",
          "normalized": "AList a-\u003ea",
          "package": "monad-par-extras",
          "signature": "AList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e find the length of an \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "length",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e Int",
          "source": "src/Control-Monad-Par-AList.html#length",
          "type": "function"
        },
        "index": {
          "description": "find the length of an AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "length",
          "normalized": "AList a-\u003eInt",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe usual \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "map",
          "package": "monad-par-extras",
          "signature": "(a -\u003e b) -\u003e AList a -\u003e AList b",
          "source": "src/Control-Monad-Par-AList.html#map",
          "type": "function"
        },
        "index": {
          "description": "The usual map operation",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eAList a-\u003eAList b",
          "package": "monad-par-extras",
          "signature": "(a-\u003eb)-\u003eAList a-\u003eAList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "null",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e Bool",
          "source": "src/Control-Monad-Par-AList.html#null",
          "type": "function"
        },
        "index": {
          "description": "returns True if the AList is empty",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "null",
          "normalized": "AList a-\u003eBool",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Auto-partitioning\" version of \u003ccode\u003e\u003ca\u003eparBuildThresh\u003c/a\u003e\u003c/code\u003e that chooses the threshold based on\n    the size of the range and the number of processors..\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "parBuild",
          "package": "monad-par-extras",
          "signature": "InclusiveRange -\u003e (Int -\u003e a) -\u003e p (AList a)",
          "source": "src/Control-Monad-Par-AList.html#parBuild",
          "type": "function"
        },
        "index": {
          "description": "Auto-partitioning version of parBuildThresh that chooses the threshold based on the size of the range and the number of processors",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "parBuild",
          "normalized": "InclusiveRange-\u003e(Int-\u003ea)-\u003eb(AList a)",
          "package": "monad-par-extras",
          "partial": "Build",
          "signature": "InclusiveRange-\u003e(Int-\u003ea)-\u003ep(AList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:parBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eparBuild\u003c/a\u003e\u003c/code\u003e, but the construction function is monadic\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildM",
          "package": "monad-par-extras",
          "signature": "InclusiveRange -\u003e (Int -\u003e p a) -\u003e p (AList a)",
          "source": "src/Control-Monad-Par-AList.html#parBuildM",
          "type": "function"
        },
        "index": {
          "description": "like parBuild but the construction function is monadic",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildM",
          "normalized": "InclusiveRange-\u003e(Int-\u003ea b)-\u003ea(AList b)",
          "package": "monad-par-extras",
          "partial": "Build",
          "signature": "InclusiveRange-\u003e(Int-\u003ep a)-\u003ep(AList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:parBuildM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parMap over an AList can result in more balanced parallelism than\n   the default parMap over Traversable data types.\n parMap :: NFData b =\u003e (a -\u003e b) -\u003e AList a -\u003e Par (AList b)\n\u003c/p\u003e\u003cp\u003eBuild a balanced \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e in parallel, constructing each element as a\n   function of its index.  The threshold argument provides control\n   over the degree of parallelism.  It indicates under what number\n   of elements the build process should switch from parallel to\n   serial.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildThresh",
          "package": "monad-par-extras",
          "signature": "Int -\u003e InclusiveRange -\u003e (Int -\u003e a) -\u003e p (AList a)",
          "source": "src/Control-Monad-Par-AList.html#parBuildThresh",
          "type": "function"
        },
        "index": {
          "description": "parMap over an AList can result in more balanced parallelism than the default parMap over Traversable data types parMap NFData AList Par AList Build balanced AList in parallel constructing each element as function of its index The threshold argument provides control over the degree of parallelism It indicates under what number of elements the build process should switch from parallel to serial",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildThresh",
          "normalized": "Int-\u003eInclusiveRange-\u003e(Int-\u003ea)-\u003eb(AList a)",
          "package": "monad-par-extras",
          "partial": "Build Thresh",
          "signature": "Int-\u003eInclusiveRange-\u003e(Int-\u003ea)-\u003ep(AList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:parBuildThresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eparBuildThresh\u003c/a\u003e\u003c/code\u003e in which the element-construction function is itself a \u003ccode\u003ePar\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildThreshM",
          "package": "monad-par-extras",
          "signature": "Int -\u003e InclusiveRange -\u003e (Int -\u003e p a) -\u003e p (AList a)",
          "source": "src/Control-Monad-Par-AList.html#parBuildThreshM",
          "type": "function"
        },
        "index": {
          "description": "Variant of parBuildThresh in which the element-construction function is itself Par computation",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "parBuildThreshM",
          "normalized": "Int-\u003eInclusiveRange-\u003e(Int-\u003ea b)-\u003ea(AList b)",
          "package": "monad-par-extras",
          "partial": "Build Thresh",
          "signature": "Int-\u003eInclusiveRange-\u003e(Int-\u003ep a)-\u003ep(AList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:parBuildThreshM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.AList",
          "name": "partition",
          "package": "monad-par-extras",
          "signature": "(a -\u003e Bool) -\u003e AList a -\u003e (AList a, AList a)",
          "source": "src/Control-Monad-Par-AList.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eAList a-\u003e(AList a,AList a)",
          "package": "monad-par-extras",
          "signature": "(a-\u003eBool)-\u003eAList a-\u003e(AList a,AList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e a singleton \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "singleton",
          "package": "monad-par-extras",
          "signature": "a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "singleton",
          "normalized": "a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e take the tail element of an \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "tail",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e AList a",
          "source": "src/Control-Monad-Par-AList.html#tail",
          "type": "function"
        },
        "index": {
          "description": "take the tail element of an AList",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "tail",
          "normalized": "AList a-\u003eAList a",
          "package": "monad-par-extras",
          "signature": "AList a-\u003eAList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e converts an \u003ccode\u003e\u003ca\u003eAList\u003c/a\u003e\u003c/code\u003e to an ordinary list\n\u003c/p\u003e",
          "module": "Control.Monad.Par.AList",
          "name": "toList",
          "package": "monad-par-extras",
          "signature": "AList a -\u003e [a]",
          "source": "src/Control-Monad-Par-AList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "converts an AList to an ordinary list",
          "hierarchy": "Control Monad Par AList",
          "module": "Control.Monad.Par.AList",
          "name": "toList",
          "normalized": "AList a-\u003e[a]",
          "package": "monad-par-extras",
          "partial": "List",
          "signature": "AList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-AList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of useful parallel combinators based on top of a \u003ccode\u003ePar\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eIn particular, this module provides higher order functions for\n     traversing data structures in parallel.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "Combinator",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "collection of useful parallel combinators based on top of Par monad In particular this module provides higher order functions for traversing data structures in parallel",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "Combinator",
          "package": "monad-par-extras",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Combinator",
          "name": "InclusiveRange",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-Combinator.html#InclusiveRange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "InclusiveRange",
          "package": "monad-par-extras",
          "partial": "Inclusive Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#t:InclusiveRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.Combinator",
          "name": "InclusiveRange",
          "package": "monad-par-extras",
          "signature": "InclusiveRange Int Int",
          "source": "src/Control-Monad-Par-Combinator.html#InclusiveRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "InclusiveRange",
          "package": "monad-par-extras",
          "partial": "Inclusive Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:InclusiveRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel for-loop over an inclusive range.  Semantically equivalent\n to\n\u003c/p\u003e\u003cpre\u003e parFor (InclusiveRange n m) f = forM_ [n..m] f\n\u003c/pre\u003e\u003cp\u003eexcept that the implementation will split the work into an\n unspecified number of subtasks in an attempt to gain parallelism.\n The exact number of subtasks is chosen at runtime, and is probably\n a small multiple of the available number of processors.\n\u003c/p\u003e\u003cp\u003eStrictly speaking the semantics of \u003ccode\u003e\u003ca\u003eparFor\u003c/a\u003e\u003c/code\u003e depends on the\n number of processors, and its behaviour is therefore not\n deterministic.  However, a good rule of thumb is to not have any\n interdependencies between the elements; if this rule is followed\n then \u003ccode\u003eparFor\u003c/code\u003e has deterministic semantics.  One easy way to follow\n this rule is to only use \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eput_\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ef\u003c/code\u003e, never \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "parFor",
          "package": "monad-par-extras",
          "signature": "InclusiveRange -\u003e (Int -\u003e p ()) -\u003e p ()",
          "source": "src/Control-Monad-Par-Combinator.html#parFor",
          "type": "function"
        },
        "index": {
          "description": "Parallel for-loop over an inclusive range Semantically equivalent to parFor InclusiveRange forM n..m except that the implementation will split the work into an unspecified number of subtasks in an attempt to gain parallelism The exact number of subtasks is chosen at runtime and is probably small multiple of the available number of processors Strictly speaking the semantics of parFor depends on the number of processors and its behaviour is therefore not deterministic However good rule of thumb is to not have any interdependencies between the elements if this rule is followed then parFor has deterministic semantics One easy way to follow this rule is to only use put or put in never get",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "parFor",
          "normalized": "InclusiveRange-\u003e(Int-\u003ea())-\u003ea()",
          "package": "monad-par-extras",
          "partial": "For",
          "signature": "InclusiveRange-\u003e(Int-\u003ep())-\u003ep()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:parFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the given function to each element of a data structure\n in parallel (fully evaluating the results), and returns a new data\n structure containing the results.\n\u003c/p\u003e\u003cpre\u003e parMap f xs = mapM (spawnP . f) xs \u003e\u003e= mapM get\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eparMap\u003c/code\u003e is commonly used for lists, where it has this specialised type:\n\u003c/p\u003e\u003cpre\u003e parMap :: NFData b =\u003e (a -\u003e b) -\u003e [a] -\u003e Par [b]\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMap",
          "package": "monad-par-extras",
          "signature": "(a -\u003e b) -\u003e t a -\u003e p (t b)",
          "source": "src/Control-Monad-Par-Combinator.html#parMap",
          "type": "function"
        },
        "index": {
          "description": "Applies the given function to each element of data structure in parallel fully evaluating the results and returns new data structure containing the results parMap xs mapM spawnP xs mapM get parMap is commonly used for lists where it has this specialised type parMap NFData Par",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed(c b)",
          "package": "monad-par-extras",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003et a-\u003ep(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eparMap\u003c/a\u003e\u003c/code\u003e, but the function is a \u003ccode\u003ePar\u003c/code\u003e monad operation.\n\u003c/p\u003e\u003cpre\u003e parMapM f xs = mapM (spawn . f) xs \u003e\u003e= mapM get\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapM",
          "package": "monad-par-extras",
          "signature": "(a -\u003e p b) -\u003e t a -\u003e p (t b)",
          "source": "src/Control-Monad-Par-Combinator.html#parMapM",
          "type": "function"
        },
        "index": {
          "description": "Like parMap but the function is Par monad operation parMapM xs mapM spawn xs mapM get",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapM",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "monad-par-extras",
          "partial": "Map",
          "signature": "(a-\u003ep b)-\u003et a-\u003ep(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:parMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Auto-partitioning\" version of \u003ccode\u003e\u003ca\u003eparMapReduceRangeThresh\u003c/a\u003e\u003c/code\u003e that chooses the threshold based on\n    the size of the range and the number of processors..\n\u003c/p\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapReduceRange",
          "package": "monad-par-extras",
          "signature": "InclusiveRange -\u003e (Int -\u003e p a) -\u003e (a -\u003e a -\u003e p a) -\u003e a -\u003e p a",
          "source": "src/Control-Monad-Par-Combinator.html#parMapReduceRange",
          "type": "function"
        },
        "index": {
          "description": "Auto-partitioning version of parMapReduceRangeThresh that chooses the threshold based on the size of the range and the number of processors",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapReduceRange",
          "normalized": "InclusiveRange-\u003e(Int-\u003ea b)-\u003e(b-\u003eb-\u003ea b)-\u003eb-\u003ea b",
          "package": "monad-par-extras",
          "partial": "Map Reduce Range",
          "signature": "InclusiveRange-\u003e(Int-\u003ep a)-\u003e(a-\u003ea-\u003ep a)-\u003ea-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:parMapReduceRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a binary map/reduce over a finite range.  The range is\n recursively split into two, the result for each half is computed in\n parallel, and then the two results are combined.  When the range\n reaches the threshold size, the remaining elements of the range are\n computed sequentially.\n\u003c/p\u003e\u003cp\u003eFor example, the following is a parallel implementation of\n\u003c/p\u003e\u003cpre\u003e  foldl (+) 0 (map (^2) [1..10^6])\n\u003c/pre\u003e\u003cpre\u003e parMapReduceRangeThresh 100 (InclusiveRange 1 (10^6))\n        (\\x -\u003e return (x^2))\n        (\\x y -\u003e return (x+y))\n        0\n\u003c/pre\u003e",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapReduceRangeThresh",
          "package": "monad-par-extras",
          "signature": "Int-\u003e InclusiveRange-\u003e (Int -\u003e p a)-\u003e (a -\u003e a -\u003e p a)-\u003e a-\u003e p a",
          "type": "function"
        },
        "index": {
          "description": "Computes binary map reduce over finite range The range is recursively split into two the result for each half is computed in parallel and then the two results are combined When the range reaches the threshold size the remaining elements of the range are computed sequentially For example the following is parallel implementation of foldl map parMapReduceRangeThresh InclusiveRange return return",
          "hierarchy": "Control Monad Par Combinator",
          "module": "Control.Monad.Par.Combinator",
          "name": "parMapReduceRangeThresh",
          "normalized": "Int-\u003eInclusiveRange-\u003e(Int-\u003ea b)-\u003e(b-\u003eb-\u003ea b)-\u003eb-\u003ea b",
          "package": "monad-par-extras",
          "partial": "Map Reduce Range Thresh",
          "signature": "Int-\u003eInclusiveRange-\u003e(Int-\u003ep a)-\u003e(a-\u003ea-\u003ep a)-\u003ea-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-Combinator.html#v:parMapReduceRangeThresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines another Par-related class to capture the\n   random number generation capability.  \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erand\u003c/a\u003e\u003c/code\u003e operation provides deterministic parallel random\n   number generation from within a Par monad.\n\u003c/p\u003e\u003cp\u003eMost likely one will simply use the \u003ccode\u003e\u003ca\u003eParRand\u003c/a\u003e\u003c/code\u003e the instance\n   provided in this file, which is based on a state transformer\n   carrying the random generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.RNG",
          "name": "RNG",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-RNG.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines another Par-related class to capture the random number generation capability The rand operation provides deterministic parallel random number generation from within Par monad Most likely one will simply use the ParRand the instance provided in this file which is based on state transformer carrying the random generator",
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "RNG",
          "package": "monad-par-extras",
          "partial": "RNG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParRand\u003c/a\u003e\u003c/code\u003e monad is a Par monad with support for random number generation..\n\u003c/p\u003e",
          "module": "Control.Monad.Par.RNG",
          "name": "ParRand",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-RNG.html#ParRand",
          "type": "class"
        },
        "index": {
          "description": "ParRand monad is Par monad with support for random number generation",
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "ParRand",
          "package": "monad-par-extras",
          "partial": "Par Rand",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#t:ParRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience type for the most standard\n\u003c/p\u003e",
          "module": "Control.Monad.Par.RNG",
          "name": "ParRandStd",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-RNG.html#ParRandStd",
          "type": "type"
        },
        "index": {
          "description": "convenience type for the most standard",
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "ParRandStd",
          "package": "monad-par-extras",
          "partial": "Par Rand Std",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#t:ParRandStd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.RNG",
          "name": "rand",
          "package": "monad-par-extras",
          "signature": "p a",
          "source": "src/Control-Monad-Par-RNG.html#rand",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "rand",
          "package": "monad-par-extras",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#v:rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.RNG",
          "name": "randInt",
          "package": "monad-par-extras",
          "signature": "p Int",
          "source": "src/Control-Monad-Par-RNG.html#randInt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "randInt",
          "package": "monad-par-extras",
          "partial": "Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#v:randInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.RNG",
          "name": "runParRand",
          "package": "monad-par-extras",
          "signature": "(p a -\u003e a) -\u003e StateT StdGen p a -\u003e IO a",
          "source": "src/Control-Monad-Par-RNG.html#runParRand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Par RNG",
          "module": "Control.Monad.Par.RNG",
          "name": "runParRand",
          "normalized": "(a b-\u003eb)-\u003eStateT StdGen a b-\u003eIO b",
          "package": "monad-par-extras",
          "partial": "Par Rand",
          "signature": "(p a-\u003ea)-\u003eStateT StdGen p a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-RNG.html#v:runParRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a notion of (Splittable) State that is\n   compatible with any Par monad.\n\u003c/p\u003e\u003cp\u003eThis module provides instances that make StateT-transformed\n   monads into valid Par monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Par.State",
          "name": "State",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-State.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides notion of Splittable State that is compatible with any Par monad This module provides instances that make StateT-transformed monads into valid Par monads",
          "hierarchy": "Control Monad Par State",
          "module": "Control.Monad.Par.State",
          "name": "State",
          "package": "monad-par-extras",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type in \u003ccode\u003e\u003ca\u003eSplittableState\u003c/a\u003e\u003c/code\u003e is meant to be added to a Par monad\n   using StateT.  It works like any other state except at \u003ccode\u003efork\u003c/code\u003e\n   points, where the runtime system splits the state using \u003ccode\u003e\u003ca\u003esplitState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCommon examples for applications of \u003ccode\u003e\u003ca\u003eSplittableState\u003c/a\u003e\u003c/code\u003e would\n   include (1) routing a splittable random number generator through\n   a parallel computation, and (2) keeping a tree-index that locates\n   the current computation within the binary tree of \u003ccode\u003efork\u003c/code\u003es.\n   Also, it is possible to simply duplicate the state at all fork points,\n   enabling \u003ca\u003ethread local\u003c/a\u003e copies of the state.\n\u003c/p\u003e\u003cp\u003eThe limitation of this approach is that the splitting method is\n   fixed, and the same at all \u003ccode\u003efork\u003c/code\u003e points.\n\u003c/p\u003e",
          "module": "Control.Monad.Par.State",
          "name": "SplittableState",
          "package": "monad-par-extras",
          "source": "src/Control-Monad-Par-State.html#SplittableState",
          "type": "class"
        },
        "index": {
          "description": "type in SplittableState is meant to be added to Par monad using StateT It works like any other state except at fork points where the runtime system splits the state using splitState Common examples for applications of SplittableState would include routing splittable random number generator through parallel computation and keeping tree-index that locates the current computation within the binary tree of fork Also it is possible to simply duplicate the state at all fork points enabling thread local copies of the state The limitation of this approach is that the splitting method is fixed and the same at all fork points",
          "hierarchy": "Control Monad Par State",
          "module": "Control.Monad.Par.State",
          "name": "SplittableState",
          "package": "monad-par-extras",
          "partial": "Splittable State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-State.html#t:SplittableState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Par.State",
          "name": "splitState",
          "package": "monad-par-extras",
          "signature": "a -\u003e (a, a)",
          "source": "src/Control-Monad-Par-State.html#splitState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Par State",
          "module": "Control.Monad.Par.State",
          "name": "splitState",
          "normalized": "a-\u003e(a,a)",
          "package": "monad-par-extras",
          "partial": "State",
          "signature": "a-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-par-extras/docs/Control-Monad-Par-State.html#v:splitState"
      }
    }
  ]
]