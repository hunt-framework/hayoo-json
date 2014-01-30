[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a nondeterminism monad which allows you to give computations\n weights, such that the lowest-weight computations will be returned first.\n This allows you to search infinite spaces productively, by guarding\n recursive calls with weights.  Example:\n\u003c/p\u003e\u003cpre\u003e import qualified Control.Monad.WeightedSearch as W\n import Control.Applicative\n \n -- All naturals, weighted by the size of the number\n naturals :: W.T Integer Integer\n naturals = go 0\n     where\n     go n = pure n \u003c|\u003e W.weight 1 (go $! n+1)\n \n -- All finite lists, weighted by the length of the list\n finiteLists :: W.T Integer a -\u003e W.T Integer a\n finiteLists = pure [] \u003c|\u003e W.weight 1 ((:) \u003c$\u003e w \u003c*\u003e finiteLists w)\n \n -- A list of all finite lists of naturals\n finiteListsOfNaturals = W.toList (finiteLists naturals)\n    -- [ [], [0], [0,0], [1], [0,0,0], [0,1], [1,0], [2], [0,0,0,0], [0,0,1], ... ]\n\u003c/pre\u003e\u003cp\u003eWeights must be strictly positive for this to be well-defined.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-WeightedSearch.html",
        "fct-type": "module",
        "title": "WeightedSearch"
      },
      "index": {
        "description": "This is nondeterminism monad which allows you to give computations weights such that the lowest-weight computations will be returned first This allows you to search infinite spaces productively by guarding recursive calls with weights Example import qualified Control.Monad.WeightedSearch as import Control.Applicative All naturals weighted by the size of the number naturals W.T Integer Integer naturals go where go pure W.weight go All finite lists weighted by the length of the list finiteLists W.T Integer W.T Integer finiteLists pure W.weight finiteLists list of all finite lists of naturals finiteListsOfNaturals W.toList finiteLists naturals Weights must be strictly positive for this to be well-defined",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "WeightedSearch",
        "normalized": "",
        "package": "weighted-search",
        "partial": "Weighted Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eWeighted nondeterminstic computations over the weight \u003ccode\u003ew\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-WeightedSearch.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "Weighted nondeterminstic computations over the weight",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "T",
        "normalized": "",
        "package": "weighted-search",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#t:Weight",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of positive weights. We need to know how to subtract.  Weights\n must be strictly positive.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-WeightedSearch.html#Weight",
        "fct-type": "class",
        "title": "Weight"
      },
      "index": {
        "description": "The class of positive weights We need to know how to subtract Weights must be strictly positive",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "Weight",
        "normalized": "",
        "package": "weighted-search",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:difference",
      "description": {
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "w -\u003e w -\u003e w",
        "fct-source": "src/Control-Monad-WeightedSearch.html#difference",
        "fct-type": "method",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "difference",
        "normalized": "a-\u003ea-\u003ea",
        "package": "weighted-search",
        "partial": "",
        "signature": "w-\u003ew-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "t a -\u003e [a]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "List of elements of structure",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "toList",
        "normalized": "a b-\u003e[b]",
        "package": "weighted-search",
        "partial": "List",
        "signature": "t a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/weighted-search/docs/Control-Monad-WeightedSearch.html#v:weight",
      "description": {
        "fct-descr": "\u003cp\u003eTake a positive weight and weight a computation with it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.WeightedSearch",
        "fct-package": "weighted-search",
        "fct-signature": "w -\u003e T w a -\u003e T w a",
        "fct-source": "src/Control-Monad-WeightedSearch.html#weight",
        "fct-type": "function",
        "title": "weight"
      },
      "index": {
        "description": "Take positive weight and weight computation with it",
        "hierarchy": "Control Monad WeightedSearch",
        "module": "Control.Monad.WeightedSearch",
        "name": "weight",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "weighted-search",
        "partial": "",
        "signature": "w-\u003eT w a-\u003eT w a"
      }
    }
  }
]