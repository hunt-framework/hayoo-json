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
        "word": "monad-memo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault instances of \u003ccode\u003e\u003ca\u003eArrayMemo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUArrayMemo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Array.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Default instances of ArrayMemo and UArrayMemo",
          "hierarchy": "Control Monad Memo Array Instances",
          "module": "Control.Monad.Memo.Array.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrayCache - mutable-array-based (\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e hosted) \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eVery fast memoization cache. Unfortunatelly it cannot suit every case (see limitations), but if you can use it, please do: it is generally an order of magnitude faster than \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e-based \u003ccode\u003e\u003ca\u003eMemo\u003c/a\u003e\u003c/code\u003e, especially \u003cem\u003eunboxed\u003c/em\u003e version - try to use it whenever you can.\n\u003c/p\u003e\u003cp\u003eLimitations: Since \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e is used as \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e the key range must be known beforehand and the array is allocated before the first call.\nIt is therefore most suitable for the cases when the distribution of possible key values is within reasonable range and is rather dense (the best case: all values withing some range will be used). If this is the case then \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e has O(1) for both lookup and update operations.\nIn addition unboxed \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e can only store unboxed types (but it does it very efficiently).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "Array",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html",
          "type": "module"
        },
        "index": {
          "description": "ArrayCache mutable-array-based IO and ST hosted MonadCache Very fast memoization cache Unfortunatelly it cannot suit every case see limitations but if you can use it please do it is generally an order of magnitude faster than Map based Memo especially unboxed version try to use it whenever you can Limitations Since MArray is used as MonadCache the key range must be known beforehand and the array is allocated before the first call It is therefore most suitable for the cases when the distribution of possible key values is within reasonable range and is rather dense the best case all values withing some range will be used If this is the case then MArray has for both lookup and update operations In addition unboxed UArrayCache can only store unboxed types but it does it very efficiently",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "Array",
          "package": "monad-memo",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA family of boxed arrays\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "Array",
          "package": "monad-memo",
          "signature": "Array",
          "type": "function"
        },
        "index": {
          "description": "family of boxed arrays",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "Array",
          "package": "monad-memo",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on mutable boxed array\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "ArrayCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#ArrayCache",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on mutable boxed array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "ArrayCache",
          "package": "monad-memo",
          "partial": "Array Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:ArrayCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "ArrayMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#ArrayMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the ArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "ArrayMemo",
          "package": "monad-memo",
          "partial": "Array Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:ArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Array-based memo cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "Cache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#Cache",
          "type": "type"
        },
        "index": {
          "description": "Generic Array-based memo cache",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "Cache",
          "package": "monad-memo",
          "partial": "Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Array",
          "name": "Container",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#Container",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA family of unboxed arrays\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "UArray",
          "package": "monad-memo",
          "signature": "UArray",
          "type": "function"
        },
        "index": {
          "description": "family of unboxed arrays",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "UArray",
          "package": "monad-memo",
          "partial": "UArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on mutable unboxed array\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "UArrayCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#UArrayCache",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on mutable unboxed array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "UArrayCache",
          "package": "monad-memo",
          "partial": "UArray Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArrayCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Array",
          "name": "UArrayMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#UArrayMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "UArrayMemo",
          "package": "monad-memo",
          "partial": "UArray Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Array",
          "name": "Container",
          "package": "monad-memo",
          "signature": "Container",
          "source": "src/Control-Monad-Memo-Array.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Array\",\"Control.Monad.Memo\"]",
          "name": "evalArrayMemo",
          "package": "monad-memo",
          "signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalArrayMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalArrayMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "evalArrayMemo",
          "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec d",
          "package": "monad-memo",
          "partial": "Array Memo",
          "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Array\",\"Control.Monad.Memo\"]",
          "name": "evalUArrayMemo",
          "package": "monad-memo",
          "signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalUArrayMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalUArrayMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "evalUArrayMemo",
          "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec d",
          "package": "monad-memo",
          "partial": "UArray Memo",
          "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalUArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Array",
          "name": "genericEvalArrayMemo",
          "package": "monad-memo",
          "signature": "Cache arr k e m a -\u003e (k, k) -\u003e m a",
          "source": "src/Control-Monad-Memo-Array.html#genericEvalArrayMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "genericEvalArrayMemo",
          "normalized": "Cache a b c d e-\u003e(b,b)-\u003ed e",
          "package": "monad-memo",
          "partial": "Eval Array Memo",
          "signature": "Cache arr k e m a-\u003e(k,k)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:genericEvalArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Array",
          "name": "genericRunArrayMemo",
          "package": "monad-memo",
          "signature": "Cache arr k e m a -\u003e (k, k) -\u003e m (a, arr k e)",
          "source": "src/Control-Monad-Memo-Array.html#genericRunArrayMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "genericRunArrayMemo",
          "normalized": "Cache a b c d e-\u003e(b,b)-\u003ed(e,a b c)",
          "package": "monad-memo",
          "partial": "Run Array Memo",
          "signature": "Cache arr k e m a-\u003e(k,k)-\u003em(a,arr k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:genericRunArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation and the final content of array cache using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Array\",\"Control.Monad.Memo\"]",
          "name": "runArrayMemo",
          "package": "monad-memo",
          "signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m (a, Array m k e)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runArrayMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runArrayMemo\"]"
        },
        "index": {
          "description": "Evaluate computation and the final content of array cache using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "runArrayMemo",
          "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec(d,Array c a b)",
          "package": "monad-memo",
          "partial": "Array Memo",
          "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em(a,Array m k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation and the final content of array cache using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Array\",\"Control.Monad.Memo\"]",
          "name": "runUArrayMemo",
          "package": "monad-memo",
          "signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m (a, UArray m k e)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runUArrayMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runUArrayMemo\"]"
        },
        "index": {
          "description": "Evaluate computation and the final content of array cache using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "runUArrayMemo",
          "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec(d,UArray c a b)",
          "package": "monad-memo",
          "partial": "UArray Memo",
          "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em(a,UArray m k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runUArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Array",
          "name": "toArray",
          "package": "monad-memo",
          "signature": "arr",
          "source": "src/Control-Monad-Memo-Array.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Array",
          "module": "Control.Monad.Memo.Array",
          "name": "toArray",
          "package": "monad-memo",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Interface for monadic computations which can be memoized.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Class",
          "name": "Class",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Interface for monadic computations which can be memoized",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "Class",
          "package": "monad-memo",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for memoization cache\n Is necessary since memoization mechanism from one transformer can use a cache from other (further down the stack) \n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Class",
          "name": "MonadCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Class.html#MonadCache",
          "type": "class"
        },
        "index": {
          "description": "Interface for memoization cache Is necessary since memoization mechanism from one transformer can use cache from other further down the stack",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "MonadCache",
          "package": "monad-memo",
          "partial": "Monad Cache",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#t:MonadCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization interface\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Class",
          "name": "MonadMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Class.html#MonadMemo",
          "type": "class"
        },
        "index": {
          "description": "Memoization interface",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "MonadMemo",
          "package": "monad-memo",
          "partial": "Monad Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#t:MonadMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Class",
          "name": "add",
          "package": "monad-memo",
          "signature": "k -\u003e v -\u003e m ()",
          "source": "src/Control-Monad-Memo-Class.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "add",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "monad-memo",
          "signature": "k-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapter for memoization of two-argument function\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "for2",
          "package": "monad-memo",
          "signature": "(((k1, k2) -\u003e mv) -\u003e (k1, k2) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e mv",
          "source": "src/Control-Monad-Memo-Class.html#for2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for2\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for2\"]"
        },
        "index": {
          "description": "Adapter for memoization of two-argument function",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "for2",
          "normalized": "(((a,a)-\u003eb)-\u003e(a,a)-\u003eb)-\u003e(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "monad-memo",
          "signature": "(((k,k)-\u003emv)-\u003e(k,k)-\u003emv)-\u003e(k-\u003ek-\u003emv)-\u003ek-\u003ek-\u003emv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapter for memoization of three-argument function\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "for3",
          "package": "monad-memo",
          "signature": "(((k1, k2, k3) -\u003e mv) -\u003e (k1, k2, k3) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e mv",
          "source": "src/Control-Monad-Memo-Class.html#for3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for3\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for3\"]"
        },
        "index": {
          "description": "Adapter for memoization of three-argument function",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "for3",
          "normalized": "(((a,a,a)-\u003eb)-\u003e(a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "monad-memo",
          "signature": "(((k,k,k)-\u003emv)-\u003e(k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003emv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapter for memoization of four-argument function\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "for4",
          "package": "monad-memo",
          "signature": "(((k1, k2, k3, k4) -\u003e mv) -\u003e (k1, k2, k3, k4) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv",
          "source": "src/Control-Monad-Memo-Class.html#for4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for4\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for4\"]"
        },
        "index": {
          "description": "Adapter for memoization of four-argument function",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "for4",
          "normalized": "(((a,a,a,a)-\u003eb)-\u003e(a,a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
          "package": "monad-memo",
          "signature": "(((k,k,k,k)-\u003emv)-\u003e(k,k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003ek-\u003emv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Class",
          "name": "lookup",
          "package": "monad-memo",
          "signature": "k -\u003e m (Maybe v)",
          "source": "src/Control-Monad-Memo-Class.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "lookup",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "monad-memo",
          "signature": "k-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Class",
          "name": "memo",
          "package": "monad-memo",
          "signature": "(k -\u003e m v) -\u003e k -\u003e m v",
          "source": "src/Control-Monad-Memo-Class.html#memo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memo",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "monad-memo",
          "signature": "(k-\u003em v)-\u003ek-\u003em v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses current monad's memoization cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memol0",
          "package": "monad-memo",
          "signature": "(k -\u003e m v) -\u003e k -\u003e m v",
          "source": "src/Control-Monad-Memo-Class.html#memol0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol0\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol0\"]"
        },
        "index": {
          "description": "Uses current monad memoization cache",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memol0",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "monad-memo",
          "signature": "(k-\u003em v)-\u003ek-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the 1st transformer in stack for memoization cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memol1",
          "package": "monad-memo",
          "signature": "(k -\u003e t1 m v) -\u003e k -\u003e t1 m v",
          "source": "src/Control-Monad-Memo-Class.html#memol1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol1\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol1\"]"
        },
        "index": {
          "description": "Uses the st transformer in stack for memoization cache",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memol1",
          "normalized": "(a-\u003eb c d)-\u003ea-\u003eb c d",
          "package": "monad-memo",
          "signature": "(k-\u003et m v)-\u003ek-\u003et m v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the 2nd transformer in stack for memoization cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memol2",
          "package": "monad-memo",
          "signature": "(k -\u003e t1 (t2 m) v) -\u003e k -\u003e t1 (t2 m) v",
          "source": "src/Control-Monad-Memo-Class.html#memol2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol2\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol2\"]"
        },
        "index": {
          "description": "Uses the nd transformer in stack for memoization cache",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memol2",
          "normalized": "(a-\u003eb(b c)d)-\u003ea-\u003eb(b c)d",
          "package": "monad-memo",
          "signature": "(k-\u003et(t m)v)-\u003ek-\u003et(t m)v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the 3rd transformer in stack for memoization cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memol3",
          "package": "monad-memo",
          "signature": "(k -\u003e t1 (t2 (t3 m)) v) -\u003e k -\u003e t1 (t2 (t3 m)) v",
          "source": "src/Control-Monad-Memo-Class.html#memol3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol3\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol3\"]"
        },
        "index": {
          "description": "Uses the rd transformer in stack for memoization cache",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memol3",
          "normalized": "(a-\u003eb(b(b c))d)-\u003ea-\u003eb(b(b c))d",
          "package": "monad-memo",
          "signature": "(k-\u003et(t(t m))v)-\u003ek-\u003et(t(t m))v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the 4th transformer in stack for memoization cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memol4",
          "package": "monad-memo",
          "signature": "(k -\u003e t1 (t2 (t3 (t4 m))) v) -\u003e k -\u003e t1 (t2 (t3 (t4 m))) v",
          "source": "src/Control-Monad-Memo-Class.html#memol4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol4\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol4\"]"
        },
        "index": {
          "description": "Uses the th transformer in stack for memoization cache",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memol4",
          "normalized": "(a-\u003eb(b(b(b c)))d)-\u003ea-\u003eb(b(b(b c)))d",
          "package": "monad-memo",
          "signature": "(k-\u003et(t(t(t m)))v)-\u003ek-\u003et(t(t(t m)))v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization for the current transformer in stack using a cache from an arbitrary transformer down the stack\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Class\",\"Control.Monad.Memo\"]",
          "name": "memoln",
          "package": "monad-memo",
          "signature": "(forall a.  m1 a -\u003e m2 a) -\u003e (k1 -\u003e k2) -\u003e (k1 -\u003e m2 v) -\u003e k1 -\u003e m2 v",
          "source": "src/Control-Monad-Memo-Class.html#memoln",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memoln\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memoln\"]"
        },
        "index": {
          "description": "Memoization for the current transformer in stack using cache from an arbitrary transformer down the stack",
          "hierarchy": "Control Monad Memo Class",
          "module": "Control.Monad.Memo.Class",
          "name": "memoln",
          "normalized": "(a b c d-\u003ec d)-\u003e(e-\u003ee)-\u003e(e-\u003ec f)-\u003ee-\u003ec f",
          "package": "monad-memo",
          "signature": "(forall a. m a-\u003em a)-\u003e(k-\u003ek)-\u003e(k-\u003em v)-\u003ek-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memoln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVector-based \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e implementation which dynamically expands the vector during the computation to accomodate all requested keys.\nThis implementation does not require to specify the length of the vector up front, but may be slower than \u003ca\u003eControl.Monad.Memo.Vector\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Expandable",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html",
          "type": "module"
        },
        "index": {
          "description": "Vector-based MonadCache implementation which dynamically expands the vector during the computation to accomodate all requested keys This implementation does not require to specify the length of the vector up front but may be slower than Control.Monad.Memo.Vector",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Expandable",
          "package": "monad-memo",
          "partial": "Expandable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Cache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#Cache",
          "type": "type"
        },
        "index": {
          "description": "Generic Vector-based memo cache",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Cache",
          "package": "monad-memo",
          "partial": "Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Container",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "UVectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#UVectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on unboxed vector",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "UVectorCache",
          "package": "monad-memo",
          "partial": "UVector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:UVectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#UVectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UVectorCache element",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:UVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "VectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#VectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on boxed vector",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "VectorCache",
          "package": "monad-memo",
          "partial": "Vector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:VectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "VectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#VectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the VectorCache element",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "VectorMemo",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:VectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Container",
          "package": "monad-memo",
          "signature": "Container",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "genericStartEvalVectorMemo",
          "package": "monad-memo",
          "signature": "Cache vec (PrimState m) e m a -\u003e m a",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#genericStartEvalVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "genericStartEvalVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eb d",
          "package": "monad-memo",
          "partial": "Start Eval Vector Memo",
          "signature": "Cache vec(PrimState m)e m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:genericStartEvalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "genericStartRunVectorMemo",
          "package": "monad-memo",
          "signature": "Cache vec (PrimState m) e m a -\u003e m (a, vec (PrimState m) e)",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#genericStartRunVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "genericStartRunVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eb(d,a(PrimState b)c)",
          "package": "monad-memo",
          "partial": "Start Run Vector Memo",
          "signature": "Cache vec(PrimState m)e m a-\u003em(a,vec(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:genericStartRunVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n which dynamically grows to accomodate all requested keys \n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startEvalUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a -\u003e m a",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#startEvalUVectorMemo",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable unboxed vector which dynamically grows to accomodate all requested keys",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startEvalUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003ea c",
          "package": "monad-memo",
          "partial": "Eval UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startEvalUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys \n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startEvalVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a -\u003e m a",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#startEvalVectorMemo",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startEvalVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003ea c",
          "package": "monad-memo",
          "partial": "Eval Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startEvalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n which dynamically grows to accomodate all requested keys.\n This function also returns the final content of the vector cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startRunUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a -\u003e m (a, UVector (PrimState m) e)",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#startRunUVectorMemo",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable unboxed vector which dynamically grows to accomodate all requested keys This function also returns the final content of the vector cache",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startRunUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003ea(c,UVector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "Run UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003em(a,UVector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startRunUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector\n which dynamically grows to accomodate all requested keys. \n This function also returns the final content of the vector cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startRunVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a -\u003e m (a, Vector (PrimState m) e)",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#startRunVectorMemo",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys This function also returns the final content of the vector cache",
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "startRunVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003ea(c,Vector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "Run Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003em(a,Vector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startRunVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "toVector",
          "package": "monad-memo",
          "signature": "vec",
          "source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Expandable",
          "module": "Control.Monad.Memo.Vector.Expandable",
          "name": "toVector",
          "package": "monad-memo",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault instances for \u003ccode\u003eVectorMemo\u003c/code\u003e and \u003ccode\u003eUVectorMemo\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Vector.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Default instances for VectorMemo and UVectorMemo",
          "hierarchy": "Control Monad Memo Vector Instances",
          "module": "Control.Monad.Memo.Vector.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectorCache - mutable-vector-based \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e with unsafe operations.\n\u003c/p\u003e\u003cp\u003eThis is a version of \u003ca\u003eControl.Monad.Memo.Mutable.Vector\u003c/a\u003e but implemented using \u003cem\u003eunsafe*\u003c/em\u003e vector operations.\nFaster than default implementation but you must be sure that your code doesn't try to read/write outside vector boundaries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Unsafe",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "VectorCache mutable-vector-based MonadCache with unsafe operations This is version of Control.Monad.Memo.Mutable.Vector but implemented using unsafe vector operations Faster than default implementation but you must be sure that your code doesn try to read write outside vector boundaries",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Unsafe",
          "package": "monad-memo",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Cache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#Cache",
          "type": "type"
        },
        "index": {
          "description": "Generic Vector-based memo cache",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Cache",
          "package": "monad-memo",
          "partial": "Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Container",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "UVectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#UVectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on unboxed vector",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "UVectorCache",
          "package": "monad-memo",
          "partial": "UVector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:UVectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#UVectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UVectorCache element",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:UVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "VectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#VectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on boxed vector",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "VectorCache",
          "package": "monad-memo",
          "partial": "Vector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:VectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "VectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#VectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the VectorCache element",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "VectorMemo",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:VectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Container",
          "package": "monad-memo",
          "signature": "Container",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "genericUnsafeEvalVectorMemo",
          "package": "monad-memo",
          "signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m a",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#genericUnsafeEvalVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "genericUnsafeEvalVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb d",
          "package": "monad-memo",
          "partial": "Unsafe Eval Vector Memo",
          "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:genericUnsafeEvalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "genericUnsafeRunVectorMemo",
          "package": "monad-memo",
          "signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m (a, c (PrimState m) e)",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#genericUnsafeRunVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "genericUnsafeRunVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb(d,a(PrimState b)c)",
          "package": "monad-memo",
          "partial": "Unsafe Run Vector Memo",
          "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em(a,c(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:genericUnsafeRunVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "toVector",
          "package": "monad-memo",
          "signature": "vec",
          "source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "toVector",
          "package": "monad-memo",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable unboxed vector and unsafe operations\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeEvalUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable unboxed vector and unsafe operations Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeEvalUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
          "package": "monad-memo",
          "partial": "Eval UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeEvalUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeEvalVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector and unsafe operations Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeEvalVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
          "package": "monad-memo",
          "partial": "Eval Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeEvalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeRunUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, UVector (PrimState m) e)",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector and unsafe operations It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeRunUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,UVector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "Run UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em(a,UVector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeRunUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeRunVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, Vector (PrimState m) e)",
          "type": "function"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector and unsafe operations It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
          "hierarchy": "Control Monad Memo Vector Unsafe",
          "module": "Control.Monad.Memo.Vector.Unsafe",
          "name": "unsafeRunVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,Vector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "Run Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em(a,Vector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeRunVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectorCache - mutable-vector-based (\u003ccode\u003eIO\u003c/code\u003e and \u003ccode\u003eST\u003c/code\u003e hosted) \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe fastest memoization cache, however it is even more limiting than \u003ca\u003eControl.Monad.Memo.Array\u003c/a\u003e due to nature of \u003ca\u003eData.Vector.Mutable\u003c/a\u003e. Still if you can use this cache please do since it will give you dramatic calculation speed up in comparison to pure \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e-based cache, especially when unboxed \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eLimitations: Since \u003ccode\u003e\u003ca\u003eMVector\u003c/a\u003e\u003c/code\u003e is used as \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e the key must be \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and the size of the cache's vector must be known beforehand with vector being allocated before the first call. In addition unboxed \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e can only store \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e values (but it does it very efficiently).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "Vector",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "VectorCache mutable-vector-based IO and ST hosted MonadCache The fastest memoization cache however it is even more limiting than Control.Monad.Memo.Array due to nature of Data.Vector.Mutable Still if you can use this cache please do since it will give you dramatic calculation speed up in comparison to pure Map based cache especially when unboxed UVectorCache is used Limitations Since MVector is used as MonadCache the key must be Int and the size of the cache vector must be known beforehand with vector being allocated before the first call In addition unboxed UVectorCache can only store Unbox values but it does it very efficiently",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "Vector",
          "package": "monad-memo",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "Cache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#Cache",
          "type": "type"
        },
        "index": {
          "description": "Generic Vector-based memo cache",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "Cache",
          "package": "monad-memo",
          "partial": "Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector",
          "name": "Container",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#Container",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnboxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVector",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#UVector",
          "type": "type"
        },
        "index": {
          "description": "Unboxed vector",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVector",
          "package": "monad-memo",
          "partial": "UVector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#UVectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on unboxed vector",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVectorCache",
          "package": "monad-memo",
          "partial": "UVector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#UVectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UVectorCache element",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "Vector",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#Vector",
          "type": "type"
        },
        "index": {
          "description": "Boxed vector",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "Vector",
          "package": "monad-memo",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "VectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#VectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on boxed vector",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "VectorCache",
          "package": "monad-memo",
          "partial": "Vector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:VectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo.Vector",
          "name": "VectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#VectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the VectorCache element",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "VectorMemo",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:VectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector",
          "name": "Container",
          "package": "monad-memo",
          "signature": "Container",
          "source": "src/Control-Monad-Memo-Vector.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Vector\",\"Control.Monad.Memo\"]",
          "name": "evalUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalUVectorMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalUVectorMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using mutable unboxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "evalUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Vector\",\"Control.Monad.Memo\"]",
          "name": "evalVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalVectorMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalVectorMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "evalVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector",
          "name": "genericEvalVectorMemo",
          "package": "monad-memo",
          "signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m a",
          "source": "src/Control-Monad-Memo-Vector.html#genericEvalVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "genericEvalVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb d",
          "package": "monad-memo",
          "partial": "Eval Vector Memo",
          "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:genericEvalVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector",
          "name": "genericRunVectorMemo",
          "package": "monad-memo",
          "signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m (a, c (PrimState m) e)",
          "source": "src/Control-Monad-Memo-Vector.html#genericRunVectorMemo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "genericRunVectorMemo",
          "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb(d,a(PrimState b)c)",
          "package": "monad-memo",
          "partial": "Run Vector Memo",
          "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em(a,c(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:genericRunVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable unboxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Vector\",\"Control.Monad.Memo\"]",
          "name": "runUVectorMemo",
          "package": "monad-memo",
          "signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, UVector (PrimState m) e)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runUVectorMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runUVectorMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using mutable unboxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "runUVectorMemo",
          "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,UVector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em(a,UVector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runUVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate computation using mutable boxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo.Vector\",\"Control.Monad.Memo\"]",
          "name": "runVectorMemo",
          "package": "monad-memo",
          "signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, Vector (PrimState m) e)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runVectorMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runVectorMemo\"]"
        },
        "index": {
          "description": "Evaluate computation using mutable boxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "runVectorMemo",
          "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,Vector(PrimState a)b)",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em(a,Vector(PrimState m)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo.Vector",
          "name": "toVector",
          "package": "monad-memo",
          "signature": "vec",
          "source": "src/Control-Monad-Memo-Vector.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Memo Vector",
          "module": "Control.Monad.Memo.Vector",
          "name": "toVector",
          "package": "monad-memo",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImporting just this module is sufficient for most cases of the package usage\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Memo",
          "name": "Memo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo.html",
          "type": "module"
        },
        "index": {
          "description": "Importing just this module is sufficient for most cases of the package usage",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "Memo",
          "package": "monad-memo",
          "partial": "Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on mutable boxed array\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "ArrayCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#ArrayCache",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on mutable boxed array",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "ArrayCache",
          "package": "monad-memo",
          "partial": "Array Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:ArrayCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "ArrayMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#ArrayMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the ArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "ArrayMemo",
          "package": "monad-memo",
          "partial": "Array Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:ArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "Memo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-Map.html#Memo",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad which uses Map as cache container",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "Memo",
          "package": "monad-memo",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:Memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "MemoState",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html#MemoState",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on StateCache to be used with pure cache containers which support MapLike interface",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "MemoState",
          "package": "monad-memo",
          "partial": "Memo State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad transformer based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "MemoStateT",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html#MemoStateT",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad transformer based on StateCache to be used with pure cache containers which support MapLike interface",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "MemoStateT",
          "package": "monad-memo",
          "partial": "Memo State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad transformer which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "MemoT",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-Map.html#MemoT",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad transformer which uses Map as cache container",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "MemoT",
          "package": "monad-memo",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization interface\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "MonadMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Class.html#MonadMemo",
          "type": "class"
        },
        "index": {
          "description": "Memoization interface",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "MonadMemo",
          "package": "monad-memo",
          "partial": "Monad Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MonadMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on mutable unboxed array\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "UArrayCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#UArrayCache",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on mutable unboxed array",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "UArrayCache",
          "package": "monad-memo",
          "partial": "UArray Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UArrayCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "UArrayMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Array.html#UArrayMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "UArrayMemo",
          "package": "monad-memo",
          "partial": "UArray Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UArrayMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "UVectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#UVectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on unboxed vector",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "UVectorCache",
          "package": "monad-memo",
          "partial": "UVector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UVectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#UVectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the UVectorCache element",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "UVectorMemo",
          "package": "monad-memo",
          "partial": "UVector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UVectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "VectorCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#VectorCache",
          "type": "type"
        },
        "index": {
          "description": "MonadCache based on boxed vector",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "VectorCache",
          "package": "monad-memo",
          "partial": "Vector Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:VectorCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Control.Monad.Memo",
          "name": "VectorMemo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Memo-Vector.html#VectorMemo",
          "type": "class"
        },
        "index": {
          "description": "This is just to be able to infer the type of the VectorCache element",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "VectorMemo",
          "package": "monad-memo",
          "partial": "Vector Memo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:VectorMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "evalMemo",
          "package": "monad-memo",
          "signature": "Memo k v a -\u003e Map k v -\u003e a",
          "source": "src/Control-Monad-Trans-Memo-Map.html#evalMemo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:evalMemo\"]"
        },
        "index": {
          "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "evalMemo",
          "normalized": "Memo a b c-\u003eMap a b-\u003ec",
          "package": "monad-memo",
          "partial": "Memo",
          "signature": "Memo k v a-\u003eMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation discarding the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.State\"]",
          "name": "evalMemoState",
          "package": "monad-memo",
          "signature": "MemoState c k v a -\u003e c -\u003e a",
          "source": "src/Control-Monad-Trans-Memo-State.html#evalMemoState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoState\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:evalMemoState\"]"
        },
        "index": {
          "description": "Returns the result of MonadMemo computation discarding the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "evalMemoState",
          "normalized": "MemoState a b c d-\u003ea-\u003ed",
          "package": "monad-memo",
          "partial": "Memo State",
          "signature": "MemoState c k v a-\u003ec-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation wrapped in monad.\n This function discards the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.State\"]",
          "name": "evalMemoStateT",
          "package": "monad-memo",
          "signature": "MemoStateT c k v m a -\u003e c -\u003e m a",
          "source": "src/Control-Monad-Trans-Memo-State.html#evalMemoStateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoStateT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:evalMemoStateT\"]"
        },
        "index": {
          "description": "Returns the result of MonadMemo computation wrapped in monad This function discards the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "evalMemoStateT",
          "normalized": "MemoStateT a b c d e-\u003ea-\u003ed e",
          "package": "monad-memo",
          "partial": "Memo State",
          "signature": "MemoStateT c k v m a-\u003ec-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "evalMemoT",
          "package": "monad-memo",
          "signature": "MemoT k v m a -\u003e Map k v -\u003e m a",
          "source": "src/Control-Monad-Trans-Memo-Map.html#evalMemoT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:evalMemoT\"]"
        },
        "index": {
          "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "evalMemoT",
          "normalized": "MemoT a b c d-\u003eMap a b-\u003ec d",
          "package": "monad-memo",
          "partial": "Memo",
          "signature": "MemoT k v m a-\u003eMap k v-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Memo",
          "name": "memo",
          "package": "monad-memo",
          "signature": "(k -\u003e m v) -\u003e k -\u003e m v",
          "source": "src/Control-Monad-Memo-Class.html#memo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "memo",
          "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "monad-memo",
          "signature": "(k-\u003em v)-\u003ek-\u003em v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "runMemo",
          "package": "monad-memo",
          "signature": "Memo k v a -\u003e Map k v -\u003e (a, Map k v)",
          "source": "src/Control-Monad-Trans-Memo-Map.html#runMemo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:runMemo\"]"
        },
        "index": {
          "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "runMemo",
          "normalized": "Memo a b c-\u003eMap a b-\u003e(c,Map a b)",
          "package": "monad-memo",
          "partial": "Memo",
          "signature": "Memo k v a-\u003eMap k v-\u003e(a,Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.State\"]",
          "name": "runMemoState",
          "package": "monad-memo",
          "signature": "MemoState c k v a -\u003e c -\u003e (a, c)",
          "source": "src/Control-Monad-Trans-Memo-State.html#runMemoState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoState\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:runMemoState\"]"
        },
        "index": {
          "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "runMemoState",
          "normalized": "MemoState a b c d-\u003ea-\u003e(d,a)",
          "package": "monad-memo",
          "partial": "Memo State",
          "signature": "MemoState c k v a-\u003ec-\u003e(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container wrapped in monad\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.State\"]",
          "name": "runMemoStateT",
          "package": "monad-memo",
          "signature": "MemoStateT s k v m a -\u003e s -\u003e m (a, s)",
          "source": "src/Control-Monad-Trans-Memo-State.html#runMemoStateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoStateT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:runMemoStateT\"]"
        },
        "index": {
          "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container wrapped in monad",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "runMemoStateT",
          "normalized": "MemoStateT a b c d e-\u003ea-\u003ed(e,a)",
          "package": "monad-memo",
          "partial": "Memo State",
          "signature": "MemoStateT s k v m a-\u003es-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "runMemoT",
          "package": "monad-memo",
          "signature": "MemoT k v m a -\u003e Map k v -\u003e m (a, Map k v)",
          "source": "src/Control-Monad-Trans-Memo-Map.html#runMemoT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:runMemoT\"]"
        },
        "index": {
          "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "runMemoT",
          "normalized": "MemoT a b c d-\u003eMap a b-\u003ec(d,Map a b)",
          "package": "monad-memo",
          "partial": "Memo",
          "signature": "MemoT k v m a-\u003eMap k v-\u003em(a,Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "startEvalMemo",
          "package": "monad-memo",
          "signature": "Memo k v a -\u003e a",
          "source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startEvalMemo\"]"
        },
        "index": {
          "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "startEvalMemo",
          "normalized": "Memo a b c-\u003ec",
          "package": "monad-memo",
          "partial": "Eval Memo",
          "signature": "Memo k v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "startEvalMemoT",
          "package": "monad-memo",
          "signature": "MemoT k v m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemoT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemoT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startEvalMemoT\"]"
        },
        "index": {
          "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "startEvalMemoT",
          "normalized": "MemoT a b c d-\u003ec d",
          "package": "monad-memo",
          "partial": "Eval Memo",
          "signature": "MemoT k v m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "startRunMemo",
          "package": "monad-memo",
          "signature": "Memo k v a -\u003e (a, Map k v)",
          "source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemo\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startRunMemo\"]"
        },
        "index": {
          "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "startRunMemo",
          "normalized": "Memo a b c-\u003e(c,Map a b)",
          "package": "monad-memo",
          "partial": "Run Memo",
          "signature": "Memo k v a-\u003e(a,Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Memo\",\"Control.Monad.Trans.Memo.Map\"]",
          "name": "startRunMemoT",
          "package": "monad-memo",
          "signature": "MemoT k v m a -\u003e m (a, Map k v)",
          "source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemoT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemoT\",\"http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startRunMemoT\"]"
        },
        "index": {
          "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
          "hierarchy": "Control Monad Memo",
          "module": "Control.Monad.Memo",
          "name": "startRunMemoT",
          "normalized": "MemoT a b c d-\u003ec(d,Map a b)",
          "package": "monad-memo",
          "partial": "Run Memo",
          "signature": "MemoT k v m a-\u003em(a,Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003eMemoStateT\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a container\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "Map",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-Map.html",
          "type": "module"
        },
        "index": {
          "description": "Specialization of MemoStateT with Map as container",
          "hierarchy": "Control Monad Trans Memo Map",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "Map",
          "package": "monad-memo",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "Memo",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-Map.html#Memo",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad which uses Map as cache container",
          "hierarchy": "Control Monad Trans Memo Map",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "Memo",
          "package": "monad-memo",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#t:Memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad transformer which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "MemoT",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-Map.html#MemoT",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad transformer which uses Map as cache container",
          "hierarchy": "Control Monad Trans Memo Map",
          "module": "Control.Monad.Trans.Memo.Map",
          "name": "MemoT",
          "package": "monad-memo",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#t:MemoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric StateCache - similar to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e but optimised for carrying cache container\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-ReaderCache.html",
          "type": "module"
        },
        "index": {
          "description": "Generic StateCache similar to ReaderT but optimised for carrying cache container",
          "hierarchy": "Control Monad Trans Memo ReaderCache",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "partial": "Reader Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric memoization cache which uses provided container\n This is pretty much identical to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e,\n but is tuned to speed up implementations which use unboxed mutable containers\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
          "type": "newtype"
        },
        "index": {
          "description": "Generic memoization cache which uses provided container This is pretty much identical to ReaderT but is tuned to speed up implementations which use unboxed mutable containers",
          "hierarchy": "Control Monad Trans Memo ReaderCache",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "partial": "Reader Cache",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#t:ReaderCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "signature": "ReaderCache",
          "source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo ReaderCache",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "ReaderCache",
          "package": "monad-memo",
          "partial": "Reader Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:ReaderCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns internal container\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "container",
          "package": "monad-memo",
          "signature": "ReaderCache c m c",
          "source": "src/Control-Monad-Trans-Memo-ReaderCache.html#container",
          "type": "function"
        },
        "index": {
          "description": "Returns internal container",
          "hierarchy": "Control Monad Trans Memo ReaderCache",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "container",
          "package": "monad-memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "evalReaderCache",
          "package": "monad-memo",
          "signature": "c -\u003e m a",
          "source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo ReaderCache",
          "module": "Control.Monad.Trans.Memo.ReaderCache",
          "name": "evalReaderCache",
          "normalized": "a-\u003eb c",
          "package": "monad-memo",
          "partial": "Reader Cache",
          "signature": "c-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:evalReaderCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines \u003ca\u003eMemoStateT\u003c/a\u003e - generalized (to any \u003ca\u003eData.MapLike\u003c/a\u003e content) memoization monad transformer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "State",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html",
          "type": "module"
        },
        "index": {
          "description": "Defines MemoStateT generalized to any Data.MapLike content memoization monad transformer",
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "State",
          "package": "monad-memo",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.State",
          "name": "Container",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html#Container",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "MemoState",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html#MemoState",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad based on StateCache to be used with pure cache containers which support MapLike interface",
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "MemoState",
          "package": "monad-memo",
          "partial": "Memo State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:MemoState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoization monad transformer based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "MemoStateT",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-State.html#MemoStateT",
          "type": "type"
        },
        "index": {
          "description": "Memoization monad transformer based on StateCache to be used with pure cache containers which support MapLike interface",
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "MemoStateT",
          "package": "monad-memo",
          "partial": "Memo State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:MemoStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.State",
          "name": "Container",
          "package": "monad-memo",
          "signature": "Container",
          "source": "src/Control-Monad-Trans-Memo-State.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "Container",
          "package": "monad-memo",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.State",
          "name": "toState",
          "package": "monad-memo",
          "signature": "s",
          "source": "src/Control-Monad-Trans-Memo-State.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo State",
          "module": "Control.Monad.Trans.Memo.State",
          "name": "toState",
          "package": "monad-memo",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:toState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric StateCache - similar to \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e but optimised for carrying cache container\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html",
          "type": "module"
        },
        "index": {
          "description": "Generic StateCache similar to StateT but optimised for carrying cache container",
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "partial": "State Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric memoization cache which uses provided container which can also be updated by the computation.\n This is pretty much identical to \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e,\n but is tuned to speed up implementations which use unboxed mutable containers\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
          "type": "newtype"
        },
        "index": {
          "description": "Generic memoization cache which uses provided container which can also be updated by the computation This is pretty much identical to StateT but is tuned to speed up implementations which use unboxed mutable containers",
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "partial": "State Cache",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#t:StateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "signature": "StateCache",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "StateCache",
          "package": "monad-memo",
          "partial": "State Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:StateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns internal container\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "container",
          "package": "monad-memo",
          "signature": "StateCache c m c",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#container",
          "type": "function"
        },
        "index": {
          "description": "Returns internal container",
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "container",
          "package": "monad-memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates computation discarding the resulting container \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "evalStateCache",
          "package": "monad-memo",
          "signature": "StateCache c m a -\u003e c -\u003e m a",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#evalStateCache",
          "type": "function"
        },
        "index": {
          "description": "Evaluates computation discarding the resulting container",
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "evalStateCache",
          "normalized": "StateCache a b c-\u003ea-\u003eb c",
          "package": "monad-memo",
          "partial": "State Cache",
          "signature": "StateCache c m a-\u003ec-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:evalStateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "runStateCache",
          "package": "monad-memo",
          "signature": "c -\u003e m (a, c)",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "runStateCache",
          "normalized": "a-\u003eb(c,a)",
          "package": "monad-memo",
          "partial": "State Cache",
          "signature": "c-\u003em(a,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:runStateCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssigns new value to internal container\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "setContainer",
          "package": "monad-memo",
          "signature": "c -\u003e StateCache c m ()",
          "source": "src/Control-Monad-Trans-Memo-StateCache.html#setContainer",
          "type": "function"
        },
        "index": {
          "description": "Assigns new value to internal container",
          "hierarchy": "Control Monad Trans Memo StateCache",
          "module": "Control.Monad.Trans.Memo.StateCache",
          "name": "setContainer",
          "normalized": "a-\u003eStateCache a b()",
          "package": "monad-memo",
          "partial": "Container",
          "signature": "c-\u003eStateCache c m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:setContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MapLike instances declaration for standard data types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MapLike.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "source": "src/Data-MapLike-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Defines MapLike instances declaration for standard data types",
          "hierarchy": "Data MapLike Instances",
          "module": "Data.MapLike.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract interface to the container which can store \u003ccode\u003ev\u003c/code\u003e indexed by \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MapLike.Instances",
          "name": "MapLike",
          "package": "monad-memo",
          "source": "src/Data-MapLike.html#MapLike",
          "type": "class"
        },
        "index": {
          "description": "An abstract interface to the container which can store indexed by",
          "hierarchy": "Data MapLike Instances",
          "module": "Data.MapLike.Instances",
          "name": "MapLike",
          "package": "monad-memo",
          "partial": "Map Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#t:MapLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MapLike.Instances",
          "name": "add",
          "package": "monad-memo",
          "signature": "k -\u003e v -\u003e c -\u003e c",
          "source": "src/Data-MapLike.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MapLike Instances",
          "module": "Data.MapLike.Instances",
          "name": "add",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "monad-memo",
          "signature": "k-\u003ev-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MapLike.Instances",
          "name": "lookup",
          "package": "monad-memo",
          "signature": "k -\u003e c -\u003e Maybe v",
          "source": "src/Data-MapLike.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MapLike Instances",
          "module": "Data.MapLike.Instances",
          "name": "lookup",
          "normalized": "a-\u003eb-\u003eMaybe c",
          "package": "monad-memo",
          "signature": "k-\u003ec-\u003eMaybe v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MapLike typeclass - generalized interface to Data.Map, Data.HashMap etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MapLike",
          "name": "MapLike",
          "package": "monad-memo",
          "source": "src/Data-MapLike.html",
          "type": "module"
        },
        "index": {
          "description": "Defines MapLike typeclass generalized interface to Data.Map Data.HashMap etc",
          "hierarchy": "Data MapLike",
          "module": "Data.MapLike",
          "name": "MapLike",
          "package": "monad-memo",
          "partial": "Map Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract interface to the container which can store \u003ccode\u003ev\u003c/code\u003e indexed by \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MapLike",
          "name": "MapLike",
          "package": "monad-memo",
          "source": "src/Data-MapLike.html#MapLike",
          "type": "class"
        },
        "index": {
          "description": "An abstract interface to the container which can store indexed by",
          "hierarchy": "Data MapLike",
          "module": "Data.MapLike",
          "name": "MapLike",
          "package": "monad-memo",
          "partial": "Map Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#t:MapLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MapLike",
          "name": "add",
          "package": "monad-memo",
          "signature": "k -\u003e v -\u003e c -\u003e c",
          "source": "src/Data-MapLike.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MapLike",
          "module": "Data.MapLike",
          "name": "add",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "monad-memo",
          "signature": "k-\u003ev-\u003ec-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MapLike",
          "name": "lookup",
          "package": "monad-memo",
          "signature": "k -\u003e c -\u003e Maybe v",
          "source": "src/Data-MapLike.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MapLike",
          "module": "Data.MapLike",
          "name": "lookup",
          "normalized": "a-\u003eb-\u003eMaybe c",
          "package": "monad-memo",
          "signature": "k-\u003ec-\u003eMaybe v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines default instances of \u003ccode\u003e\u003ca\u003eMaybeLike\u003c/a\u003e\u003c/code\u003e for most primitive \u003ca\u003eUnboxed\u003c/a\u003e types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MaybeLike.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "source": "src/Data-MaybeLike-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Defines default instances of MaybeLike for most primitive Unboxed types",
          "hierarchy": "Data MaybeLike Instances",
          "module": "Data.MaybeLike.Instances",
          "name": "Instances",
          "package": "monad-memo",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MaybeLike typeclass - a generic way to look at some types as if they were Maybe\n\u003c/p\u003e\u003cp\u003eIt is currently used to add maybe-ness to \u003ccode\u003eunboxed\u003c/code\u003e primitive types\nin cases when it isn't possuble to just use `Maybe a` (e.g. unboxed arrays) \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MaybeLike",
          "name": "MaybeLike",
          "package": "monad-memo",
          "source": "src/Data-MaybeLike.html",
          "type": "module"
        },
        "index": {
          "description": "Defines MaybeLike typeclass generic way to look at some types as if they were Maybe It is currently used to add maybe-ness to unboxed primitive types in cases when it isn possuble to just use Maybe e.g unboxed arrays",
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "MaybeLike",
          "package": "monad-memo",
          "partial": "Maybe Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract interface to a type which may not have a value\n\u003c/p\u003e",
          "module": "Data.MaybeLike",
          "name": "MaybeLike",
          "package": "monad-memo",
          "source": "src/Data-MaybeLike.html#MaybeLike",
          "type": "class"
        },
        "index": {
          "description": "An abstract interface to type which may not have value",
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "MaybeLike",
          "package": "monad-memo",
          "partial": "Maybe Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#t:MaybeLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MaybeLike",
          "name": "fromJust",
          "package": "monad-memo",
          "signature": "a -\u003e v",
          "source": "src/Data-MaybeLike.html#fromJust",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "fromJust",
          "normalized": "a-\u003eb",
          "package": "monad-memo",
          "partial": "Just",
          "signature": "a-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MaybeLike",
          "name": "isNothing",
          "package": "monad-memo",
          "signature": "a -\u003e Bool",
          "source": "src/Data-MaybeLike.html#isNothing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "isNothing",
          "normalized": "a-\u003eBool",
          "package": "monad-memo",
          "partial": "Nothing",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MaybeLike",
          "name": "just",
          "package": "monad-memo",
          "signature": "v -\u003e a",
          "source": "src/Data-MaybeLike.html#just",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "just",
          "normalized": "a-\u003eb",
          "package": "monad-memo",
          "signature": "v-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MaybeLike",
          "name": "nothing",
          "package": "monad-memo",
          "signature": "a",
          "source": "src/Data-MaybeLike.html#nothing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MaybeLike",
          "module": "Data.MaybeLike",
          "name": "nothing",
          "package": "monad-memo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:nothing"
      }
    }
  ]
]