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
        "word": "weighted-search"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a nondeterminism monad which allows you to give computations\n weights, such that the lowest-weight computations will be returned first.\n This allows you to search infinite spaces productively, by guarding\n recursive calls with weights.  Example:\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Monad.WeightedSearch as W\n import Control.Applicative\n \n -- All naturals, weighted by the size of the number\n naturals :: W.T Integer Integer\n naturals = go 0\n     where\n     go n = pure n \u003c|\u003e W.weight 1 (go $! n+1)\n \n -- All finite lists, weighted by the length of the list\n finiteLists :: W.T Integer a -\u003e W.T Integer a\n finiteLists = pure [] \u003c|\u003e W.weight 1 ((:) \u003c$\u003e w \u003c*\u003e finiteLists w)\n \n -- A list of all finite lists of naturals\n finiteListsOfNaturals = W.toList (finiteLists naturals)\n    -- [ [], [0], [0,0], [1], [0,0,0], [0,1], [1,0], [2], [0,0,0,0], [0,0,1], ... ]\n\u003c/pre\u003e\u003cp\u003eWeights must be strictly positive for this to be well-defined.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.WeightedSearch",
          "name": "WeightedSearch",
          "package": "weighted-search",
          "source": "src/Control-Monad-WeightedSearch.html",
          "type": "module"
        },
        "index": {
          "description": "This is nondeterminism monad which allows you to give computations weights such that the lowest-weight computations will be returned first This allows you to search infinite spaces productively by guarding recursive calls with weights Example import qualified Control.Monad.WeightedSearch as import Control.Applicative All naturals weighted by the size of the number naturals W.T Integer Integer naturals go where go pure W.weight go All finite lists weighted by the length of the list finiteLists W.T Integer W.T Integer finiteLists pure W.weight finiteLists list of all finite lists of naturals finiteListsOfNaturals W.toList finiteLists naturals Weights must be strictly positive for this to be well-defined",
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "WeightedSearch",
          "package": "weighted-search",
          "partial": "Weighted Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeighted nondeterminstic computations over the weight \u003ccode\u003ew\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Control.Monad.WeightedSearch",
          "name": "T",
          "package": "weighted-search",
          "source": "src/Control-Monad-WeightedSearch.html#T",
          "type": "data"
        },
        "index": {
          "description": "Weighted nondeterminstic computations over the weight",
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "T",
          "package": "weighted-search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of positive weights. We need to know how to subtract.  Weights\n must be strictly positive.\n\u003c/p\u003e",
          "module": "Control.Monad.WeightedSearch",
          "name": "Weight",
          "package": "weighted-search",
          "source": "src/Control-Monad-WeightedSearch.html#Weight",
          "type": "class"
        },
        "index": {
          "description": "The class of positive weights We need to know how to subtract Weights must be strictly positive",
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "Weight",
          "package": "weighted-search",
          "partial": "Weight",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#t:Weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WeightedSearch",
          "name": "difference",
          "package": "weighted-search",
          "signature": "w -\u003e w -\u003e w",
          "source": "src/Control-Monad-WeightedSearch.html#difference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "difference",
          "normalized": "a-\u003ea-\u003ea",
          "package": "weighted-search",
          "signature": "w-\u003ew-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
          "module": "Control.Monad.WeightedSearch",
          "name": "toList",
          "package": "weighted-search",
          "signature": "t a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "List of elements of structure",
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "weighted-search",
          "partial": "List",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a positive weight and weight a computation with it.\n\u003c/p\u003e",
          "module": "Control.Monad.WeightedSearch",
          "name": "weight",
          "package": "weighted-search",
          "signature": "w -\u003e T w a -\u003e T w a",
          "source": "src/Control-Monad-WeightedSearch.html#weight",
          "type": "function"
        },
        "index": {
          "description": "Take positive weight and weight computation with it",
          "hierarchy": "Control Monad WeightedSearch",
          "module": "Control.Monad.WeightedSearch",
          "name": "weight",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "weighted-search",
          "signature": "w-\u003eT w a-\u003eT w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:weight"
      }
    }
  ]
]