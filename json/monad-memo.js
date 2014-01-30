[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault instances of \u003ccode\u003e\u003ca\u003eArrayMemo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUArrayMemo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Array.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Array-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Default instances of ArrayMemo and UArrayMemo",
        "hierarchy": "Control Monad Memo Array Instances",
        "module": "Control.Monad.Memo.Array.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrayCache - mutable-array-based (\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e hosted) \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eVery fast memoization cache. Unfortunatelly it cannot suit every case (see limitations), but if you can use it, please do: it is generally an order of magnitude faster than \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e-based \u003ccode\u003e\u003ca\u003eMemo\u003c/a\u003e\u003c/code\u003e, especially \u003cem\u003eunboxed\u003c/em\u003e version - try to use it whenever you can.\n\u003c/p\u003e\u003cp\u003eLimitations: Since \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e is used as \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e the key range must be known beforehand and the array is allocated before the first call.\nIt is therefore most suitable for the cases when the distribution of possible key values is within reasonable range and is rather dense (the best case: all values withing some range will be used). If this is the case then \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e has O(1) for both lookup and update operations.\nIn addition unboxed \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e can only store unboxed types (but it does it very efficiently).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Array.html",
        "fct-type": "module",
        "title": "Array"
      },
      "index": {
        "description": "ArrayCache mutable-array-based IO and ST hosted MonadCache Very fast memoization cache Unfortunatelly it cannot suit every case see limitations but if you can use it please do it is generally an order of magnitude faster than Map based Memo especially unboxed version try to use it whenever you can Limitations Since MArray is used as MonadCache the key range must be known beforehand and the array is allocated before the first call It is therefore most suitable for the cases when the distribution of possible key values is within reasonable range and is rather dense the best case all values withing some range will be used If this is the case then MArray has for both lookup and update operations In addition unboxed UArrayCache can only store unboxed types but it does it very efficiently",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "Array",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA family of boxed arrays\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "family of boxed arrays",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "Array",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:ArrayCache",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on mutable boxed array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Array.html#ArrayCache",
        "fct-type": "type",
        "title": "ArrayCache"
      },
      "index": {
        "description": "Memoization monad based on mutable boxed array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "ArrayCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:ArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Array.html#ArrayMemo",
        "fct-type": "class",
        "title": "ArrayMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the ArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "ArrayMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Cache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Array-based memo cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Array.html#Cache",
        "fct-type": "type",
        "title": "Cache"
      },
      "index": {
        "description": "Generic Array-based memo cache",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "Cache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Memo-Array.html#Container",
        "fct-type": "newtype",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArray",
      "description": {
        "fct-descr": "\u003cp\u003eA family of unboxed arrays\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "UArray",
        "fct-type": "function",
        "title": "UArray"
      },
      "index": {
        "description": "family of unboxed arrays",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "UArray",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArrayCache",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on mutable unboxed array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Array.html#UArrayCache",
        "fct-type": "type",
        "title": "UArrayCache"
      },
      "index": {
        "description": "Memoization monad based on mutable unboxed array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "UArrayCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UArray Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#t:UArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Array.html#UArrayMemo",
        "fct-type": "class",
        "title": "UArrayMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "UArrayMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "Container",
        "fct-source": "src/Control-Monad-Memo-Array.html#Container",
        "fct-type": "function",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m a",
        "fct-type": "function",
        "title": "evalArrayMemo"
      },
      "index": {
        "description": "Evaluate computation using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "evalArrayMemo",
        "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec d",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:evalUArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m a",
        "fct-type": "function",
        "title": "evalUArrayMemo"
      },
      "index": {
        "description": "Evaluate computation using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "evalUArrayMemo",
        "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec d",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:genericEvalArrayMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "Cache arr k e m a -\u003e (k, k) -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Array.html#genericEvalArrayMemo",
        "fct-type": "function",
        "title": "genericEvalArrayMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "genericEvalArrayMemo",
        "normalized": "Cache a b c d e-\u003e(b,b)-\u003ed e",
        "package": "monad-memo",
        "partial": "Eval Array Memo",
        "signature": "Cache arr k e m a-\u003e(k,k)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:genericRunArrayMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "Cache arr k e m a -\u003e (k, k) -\u003e m (a, arr k e)",
        "fct-source": "src/Control-Monad-Memo-Array.html#genericRunArrayMemo",
        "fct-type": "function",
        "title": "genericRunArrayMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "genericRunArrayMemo",
        "normalized": "Cache a b c d e-\u003e(b,b)-\u003ed(e,a b c)",
        "package": "monad-memo",
        "partial": "Run Array Memo",
        "signature": "Cache arr k e m a-\u003e(k,k)-\u003em(a,arr k e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation and the final content of array cache using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m (a, Array m k e)",
        "fct-type": "function",
        "title": "runArrayMemo"
      },
      "index": {
        "description": "Evaluate computation and the final content of array cache using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "runArrayMemo",
        "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec(d,Array c a b)",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em(a,Array m k e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:runUArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation and the final content of array cache using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m (a, UArray m k e)",
        "fct-type": "function",
        "title": "runUArrayMemo"
      },
      "index": {
        "description": "Evaluate computation and the final content of array cache using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "runUArrayMemo",
        "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec(d,UArray c a b)",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em(a,UArray m k e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Array.html#v:toArray",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Memo.Array",
        "fct-package": "monad-memo",
        "fct-signature": "arr",
        "fct-source": "src/Control-Monad-Memo-Array.html#Container",
        "fct-type": "function",
        "title": "toArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Array",
        "module": "Control.Monad.Memo.Array",
        "name": "toArray",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Interface for monadic computations which can be memoized.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Computation type Interface for monadic computations which can be memoized",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "Class",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#t:MonadCache",
      "description": {
        "fct-descr": "\u003cp\u003eInterface for memoization cache\n Is necessary since memoization mechanism from one transformer can use a cache from other (further down the stack) \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Class.html#MonadCache",
        "fct-type": "class",
        "title": "MonadCache"
      },
      "index": {
        "description": "Interface for memoization cache Is necessary since memoization mechanism from one transformer can use cache from other further down the stack",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "MonadCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Monad Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#t:MonadMemo",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Class.html#MonadMemo",
        "fct-type": "class",
        "title": "MonadMemo"
      },
      "index": {
        "description": "Memoization interface",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "MonadMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Monad Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:add",
      "description": {
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e v -\u003e m ()",
        "fct-source": "src/Control-Monad-Memo-Class.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "add",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for2",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of two-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2) -\u003e mv) -\u003e (k1, k2) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for2",
        "fct-type": "function",
        "title": "for2"
      },
      "index": {
        "description": "Adapter for memoization of two-argument function",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "for2",
        "normalized": "(((a,a)-\u003eb)-\u003e(a,a)-\u003eb)-\u003e(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k)-\u003emv)-\u003e(k,k)-\u003emv)-\u003e(k-\u003ek-\u003emv)-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for3",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of three-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2, k3) -\u003e mv) -\u003e (k1, k2, k3) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for3",
        "fct-type": "function",
        "title": "for3"
      },
      "index": {
        "description": "Adapter for memoization of three-argument function",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "for3",
        "normalized": "(((a,a,a)-\u003eb)-\u003e(a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k,k)-\u003emv)-\u003e(k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:for4",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of four-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2, k3, k4) -\u003e mv) -\u003e (k1, k2, k3, k4) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for4",
        "fct-type": "function",
        "title": "for4"
      },
      "index": {
        "description": "Adapter for memoization of four-argument function",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "for4",
        "normalized": "(((a,a,a,a)-\u003eb)-\u003e(a,a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k,k,k)-\u003emv)-\u003e(k,k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:lookup",
      "description": {
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e m (Maybe v)",
        "fct-source": "src/Control-Monad-Memo-Class.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "lookup",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memo",
      "description": {
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e m v) -\u003e k -\u003e m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memo",
        "fct-type": "method",
        "title": "memo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memo",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol0",
      "description": {
        "fct-descr": "\u003cp\u003eUses current monad's memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e m v) -\u003e k -\u003e m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol0",
        "fct-type": "function",
        "title": "memol0"
      },
      "index": {
        "description": "Uses current monad memoization cache",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memol0",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol1",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 1st transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 m v) -\u003e k -\u003e t1 m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol1",
        "fct-type": "function",
        "title": "memol1"
      },
      "index": {
        "description": "Uses the st transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memol1",
        "normalized": "(a-\u003eb c d)-\u003ea-\u003eb c d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et m v)-\u003ek-\u003et m v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol2",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 2nd transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 m) v) -\u003e k -\u003e t1 (t2 m) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol2",
        "fct-type": "function",
        "title": "memol2"
      },
      "index": {
        "description": "Uses the nd transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memol2",
        "normalized": "(a-\u003eb(b c)d)-\u003ea-\u003eb(b c)d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t m)v)-\u003ek-\u003et(t m)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol3",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 3rd transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 (t3 m)) v) -\u003e k -\u003e t1 (t2 (t3 m)) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol3",
        "fct-type": "function",
        "title": "memol3"
      },
      "index": {
        "description": "Uses the rd transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memol3",
        "normalized": "(a-\u003eb(b(b c))d)-\u003ea-\u003eb(b(b c))d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t(t m))v)-\u003ek-\u003et(t(t m))v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memol4",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 4th transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 (t3 (t4 m))) v) -\u003e k -\u003e t1 (t2 (t3 (t4 m))) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol4",
        "fct-type": "function",
        "title": "memol4"
      },
      "index": {
        "description": "Uses the th transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memol4",
        "normalized": "(a-\u003eb(b(b(b c)))d)-\u003ea-\u003eb(b(b(b c)))d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t(t(t m)))v)-\u003ek-\u003et(t(t(t m)))v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Class.html#v:memoln",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization for the current transformer in stack using a cache from an arbitrary transformer down the stack\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Class",
        "fct-package": "monad-memo",
        "fct-signature": "(forall a.  m1 a -\u003e m2 a) -\u003e (k1 -\u003e k2) -\u003e (k1 -\u003e m2 v) -\u003e k1 -\u003e m2 v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memoln",
        "fct-type": "function",
        "title": "memoln"
      },
      "index": {
        "description": "Memoization for the current transformer in stack using cache from an arbitrary transformer down the stack",
        "hierarchy": "Control Monad Memo Class",
        "module": "Control.Monad.Memo.Class",
        "name": "memoln",
        "normalized": "(a b c d-\u003ec d)-\u003e(e-\u003ee)-\u003e(e-\u003ec f)-\u003ee-\u003ec f",
        "package": "monad-memo",
        "partial": "",
        "signature": "(forall a. m a-\u003em a)-\u003e(k-\u003ek)-\u003e(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVector-based \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e implementation which dynamically expands the vector during the computation to accomodate all requested keys.\nThis implementation does not require to specify the length of the vector up front, but may be slower than \u003ca\u003eControl.Monad.Memo.Vector\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html",
        "fct-type": "module",
        "title": "Expandable"
      },
      "index": {
        "description": "Vector-based MonadCache implementation which dynamically expands the vector during the computation to accomodate all requested keys This implementation does not require to specify the length of the vector up front but may be slower than Control.Monad.Memo.Vector",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "Expandable",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Expandable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:Cache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#Cache",
        "fct-type": "type",
        "title": "Cache"
      },
      "index": {
        "description": "Generic Vector-based memo cache",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "Cache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
        "fct-type": "newtype",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:UVectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#UVectorCache",
        "fct-type": "type",
        "title": "UVectorCache"
      },
      "index": {
        "description": "MonadCache based on unboxed vector",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "UVectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:UVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#UVectorMemo",
        "fct-type": "class",
        "title": "UVectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UVectorCache element",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "UVectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:VectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#VectorCache",
        "fct-type": "type",
        "title": "VectorCache"
      },
      "index": {
        "description": "MonadCache based on boxed vector",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "VectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#t:VectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#VectorMemo",
        "fct-type": "class",
        "title": "VectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the VectorCache element",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "VectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "Container",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
        "fct-type": "function",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:genericStartEvalVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "Cache vec (PrimState m) e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#genericStartEvalVectorMemo",
        "fct-type": "function",
        "title": "genericStartEvalVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "genericStartEvalVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eb d",
        "package": "monad-memo",
        "partial": "Start Eval Vector Memo",
        "signature": "Cache vec(PrimState m)e m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:genericStartRunVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "Cache vec (PrimState m) e m a -\u003e m (a, vec (PrimState m) e)",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#genericStartRunVectorMemo",
        "fct-type": "function",
        "title": "genericStartRunVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "genericStartRunVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eb(d,a(PrimState b)c)",
        "package": "monad-memo",
        "partial": "Start Run Vector Memo",
        "signature": "Cache vec(PrimState m)e m a-\u003em(a,vec(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startEvalUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n which dynamically grows to accomodate all requested keys \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#startEvalUVectorMemo",
        "fct-type": "function",
        "title": "startEvalUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector which dynamically grows to accomodate all requested keys",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "startEvalUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003ea c",
        "package": "monad-memo",
        "partial": "Eval UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startEvalVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#startEvalVectorMemo",
        "fct-type": "function",
        "title": "startEvalVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "startEvalVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003ea c",
        "package": "monad-memo",
        "partial": "Eval Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startRunUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n which dynamically grows to accomodate all requested keys.\n This function also returns the final content of the vector cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a -\u003e m (a, UVector (PrimState m) e)",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#startRunUVectorMemo",
        "fct-type": "function",
        "title": "startRunUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector which dynamically grows to accomodate all requested keys This function also returns the final content of the vector cache",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "startRunUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003ea(c,UVector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Run UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003em(a,UVector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:startRunVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector\n which dynamically grows to accomodate all requested keys. \n This function also returns the final content of the vector cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a -\u003e m (a, Vector (PrimState m) e)",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#startRunVectorMemo",
        "fct-type": "function",
        "title": "startRunVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector which dynamically grows to accomodate all requested keys This function also returns the final content of the vector cache",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "startRunVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003ea(c,Vector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Run Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003em(a,Vector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Expandable.html#v:toVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Memo.Vector.Expandable",
        "fct-package": "monad-memo",
        "fct-signature": "vec",
        "fct-source": "src/Control-Monad-Memo-Vector-Expandable.html#Container",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Expandable",
        "module": "Control.Monad.Memo.Vector.Expandable",
        "name": "toVector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault instances for \u003ccode\u003eVectorMemo\u003c/code\u003e and \u003ccode\u003eUVectorMemo\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Vector-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Default instances for VectorMemo and UVectorMemo",
        "hierarchy": "Control Monad Memo Vector Instances",
        "module": "Control.Monad.Memo.Vector.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectorCache - mutable-vector-based \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e with unsafe operations.\n\u003c/p\u003e\u003cp\u003eThis is a version of \u003ca\u003eControl.Monad.Memo.Mutable.Vector\u003c/a\u003e but implemented using \u003cem\u003eunsafe*\u003c/em\u003e vector operations.\nFaster than default implementation but you must be sure that your code doesn't try to read/write outside vector boundaries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "VectorCache mutable-vector-based MonadCache with unsafe operations This is version of Control.Monad.Memo.Mutable.Vector but implemented using unsafe vector operations Faster than default implementation but you must be sure that your code doesn try to read write outside vector boundaries",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:Cache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#Cache",
        "fct-type": "type",
        "title": "Cache"
      },
      "index": {
        "description": "Generic Vector-based memo cache",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "Cache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
        "fct-type": "newtype",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:UVectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#UVectorCache",
        "fct-type": "type",
        "title": "UVectorCache"
      },
      "index": {
        "description": "MonadCache based on unboxed vector",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "UVectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:UVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#UVectorMemo",
        "fct-type": "class",
        "title": "UVectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UVectorCache element",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "UVectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:VectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#VectorCache",
        "fct-type": "type",
        "title": "VectorCache"
      },
      "index": {
        "description": "MonadCache based on boxed vector",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "VectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#t:VectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#VectorMemo",
        "fct-type": "class",
        "title": "VectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the VectorCache element",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "VectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "Container",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
        "fct-type": "function",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:genericUnsafeEvalVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#genericUnsafeEvalVectorMemo",
        "fct-type": "function",
        "title": "genericUnsafeEvalVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "genericUnsafeEvalVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb d",
        "package": "monad-memo",
        "partial": "Unsafe Eval Vector Memo",
        "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:genericUnsafeRunVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m (a, c (PrimState m) e)",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#genericUnsafeRunVectorMemo",
        "fct-type": "function",
        "title": "genericUnsafeRunVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "genericUnsafeRunVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb(d,a(PrimState b)c)",
        "package": "monad-memo",
        "partial": "Unsafe Run Vector Memo",
        "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em(a,c(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:toVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "vec",
        "fct-source": "src/Control-Monad-Memo-Vector-Unsafe.html#Container",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "toVector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeEvalUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector and unsafe operations\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "unsafeEvalUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector and unsafe operations Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "unsafeEvalUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "Eval UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeEvalVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "unsafeEvalVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector and unsafe operations Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "unsafeEvalVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "Eval Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeRunUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, UVector (PrimState m) e)",
        "fct-type": "function",
        "title": "unsafeRunUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector and unsafe operations It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "unsafeRunUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,UVector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Run UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em(a,UVector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector-Unsafe.html#v:unsafeRunVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector and unsafe operations.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise the behaviour is undefined (i.e. segfault)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector.Unsafe",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, Vector (PrimState m) e)",
        "fct-type": "function",
        "title": "unsafeRunVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector and unsafe operations It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise the behaviour is undefined i.e segfault",
        "hierarchy": "Control Monad Memo Vector Unsafe",
        "module": "Control.Monad.Memo.Vector.Unsafe",
        "name": "unsafeRunVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,Vector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Run Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em(a,Vector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVectorCache - mutable-vector-based (\u003ccode\u003eIO\u003c/code\u003e and \u003ccode\u003eST\u003c/code\u003e hosted) \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe fastest memoization cache, however it is even more limiting than \u003ca\u003eControl.Monad.Memo.Array\u003c/a\u003e due to nature of \u003ca\u003eData.Vector.Mutable\u003c/a\u003e. Still if you can use this cache please do since it will give you dramatic calculation speed up in comparison to pure \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e-based cache, especially when unboxed \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eLimitations: Since \u003ccode\u003e\u003ca\u003eMVector\u003c/a\u003e\u003c/code\u003e is used as \u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e the key must be \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and the size of the cache's vector must be known beforehand with vector being allocated before the first call. In addition unboxed \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e can only store \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e values (but it does it very efficiently).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "VectorCache mutable-vector-based IO and ST hosted MonadCache The fastest memoization cache however it is even more limiting than Control.Monad.Memo.Array due to nature of Data.Vector.Mutable Still if you can use this cache please do since it will give you dramatic calculation speed up in comparison to pure Map based cache especially when unboxed UVectorCache is used Limitations Since MVector is used as MonadCache the key must be Int and the size of the cache vector must be known beforehand with vector being allocated before the first call In addition unboxed UVectorCache can only store Unbox values but it does it very efficiently",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Cache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Vector-based memo cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#Cache",
        "fct-type": "type",
        "title": "Cache"
      },
      "index": {
        "description": "Generic Vector-based memo cache",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "Cache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Memo-Vector.html#Container",
        "fct-type": "newtype",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVector",
      "description": {
        "fct-descr": "\u003cp\u003eUnboxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#UVector",
        "fct-type": "type",
        "title": "UVector"
      },
      "index": {
        "description": "Unboxed vector",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "UVector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#UVectorCache",
        "fct-type": "type",
        "title": "UVectorCache"
      },
      "index": {
        "description": "MonadCache based on unboxed vector",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "UVectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:UVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector.html#UVectorMemo",
        "fct-type": "class",
        "title": "UVectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UVectorCache element",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "UVectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eBoxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "Boxed vector",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:VectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#VectorCache",
        "fct-type": "type",
        "title": "VectorCache"
      },
      "index": {
        "description": "MonadCache based on boxed vector",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "VectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#t:VectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector.html#VectorMemo",
        "fct-type": "class",
        "title": "VectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the VectorCache element",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "VectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:Container",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "Container",
        "fct-source": "src/Control-Monad-Memo-Vector.html#Container",
        "fct-type": "function",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "evalUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "evalUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:evalVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "evalVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "evalVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:genericEvalVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m a",
        "fct-source": "src/Control-Monad-Memo-Vector.html#genericEvalVectorMemo",
        "fct-type": "function",
        "title": "genericEvalVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "genericEvalVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb d",
        "package": "monad-memo",
        "partial": "Eval Vector Memo",
        "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:genericRunVectorMemo",
      "description": {
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "Cache c (PrimState m) e m a -\u003e Int -\u003e m (a, c (PrimState m) e)",
        "fct-source": "src/Control-Monad-Memo-Vector.html#genericRunVectorMemo",
        "fct-type": "function",
        "title": "genericRunVectorMemo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "genericRunVectorMemo",
        "normalized": "Cache a(PrimState b)c b d-\u003eInt-\u003eb(d,a(PrimState b)c)",
        "package": "monad-memo",
        "partial": "Run Vector Memo",
        "signature": "Cache c(PrimState m)e m a-\u003eInt-\u003em(a,c(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, UVector (PrimState m) e)",
        "fct-type": "function",
        "title": "runUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "runUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,UVector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em(a,UVector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:runVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, Vector (PrimState m) e)",
        "fct-type": "function",
        "title": "runVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "runVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,Vector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em(a,Vector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo-Vector.html#v:toVector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Memo.Vector",
        "fct-package": "monad-memo",
        "fct-signature": "vec",
        "fct-source": "src/Control-Monad-Memo-Vector.html#Container",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo Vector",
        "module": "Control.Monad.Memo.Vector",
        "name": "toVector",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImporting just this module is sufficient for most cases of the package usage\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Memo.html",
        "fct-type": "module",
        "title": "Memo"
      },
      "index": {
        "description": "Importing just this module is sufficient for most cases of the package usage",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "Memo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:ArrayCache",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on mutable boxed array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Array.html#ArrayCache",
        "fct-type": "type",
        "title": "ArrayCache"
      },
      "index": {
        "description": "Memoization monad based on mutable boxed array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "ArrayCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:ArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Array.html#ArrayMemo",
        "fct-type": "class",
        "title": "ArrayMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the ArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "ArrayMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:Memo",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#Memo",
        "fct-type": "type",
        "title": "Memo"
      },
      "index": {
        "description": "Memoization monad which uses Map as cache container",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "Memo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoState",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#MemoState",
        "fct-type": "type",
        "title": "MemoState"
      },
      "index": {
        "description": "Memoization monad based on StateCache to be used with pure cache containers which support MapLike interface",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "MemoState",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad transformer based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#MemoStateT",
        "fct-type": "type",
        "title": "MemoStateT"
      },
      "index": {
        "description": "Memoization monad transformer based on StateCache to be used with pure cache containers which support MapLike interface",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "MemoStateT",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MemoT",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad transformer which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#MemoT",
        "fct-type": "type",
        "title": "MemoT"
      },
      "index": {
        "description": "Memoization monad transformer which uses Map as cache container",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "MemoT",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:MonadMemo",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Class.html#MonadMemo",
        "fct-type": "class",
        "title": "MonadMemo"
      },
      "index": {
        "description": "Memoization interface",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "MonadMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Monad Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UArrayCache",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on mutable unboxed array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Array.html#UArrayCache",
        "fct-type": "type",
        "title": "UArrayCache"
      },
      "index": {
        "description": "Memoization monad based on mutable unboxed array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "UArrayCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UArray Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUArrayCache\u003c/a\u003e\u003c/code\u003e element\n\u003c/p\u003e\u003cp\u003eType families could be used instead but due to the bug in 7.4.* we cannot use them here\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Array.html#UArrayMemo",
        "fct-type": "class",
        "title": "UArrayMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UArrayCache element Type families could be used instead but due to the bug in we cannot use them here",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "UArrayMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UVectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on unboxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#UVectorCache",
        "fct-type": "type",
        "title": "UVectorCache"
      },
      "index": {
        "description": "MonadCache based on unboxed vector",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "UVectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:UVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eUVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector.html#UVectorMemo",
        "fct-type": "class",
        "title": "UVectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the UVectorCache element",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "UVectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:VectorCache",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadCache\u003c/a\u003e\u003c/code\u003e based on boxed vector\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Memo-Vector.html#VectorCache",
        "fct-type": "type",
        "title": "VectorCache"
      },
      "index": {
        "description": "MonadCache based on boxed vector",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "VectorCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#t:VectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is just to be able to infer the type of the \u003ccode\u003e\u003ca\u003eVectorCache\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Memo-Vector.html#VectorMemo",
        "fct-type": "class",
        "title": "VectorMemo"
      },
      "index": {
        "description": "This is just to be able to infer the type of the VectorCache element",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "VectorMemo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m a",
        "fct-type": "function",
        "title": "evalArrayMemo"
      },
      "index": {
        "description": "Evaluate computation using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalArrayMemo",
        "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec d",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e Map k v -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#evalMemo",
        "fct-type": "function",
        "title": "evalMemo"
      },
      "index": {
        "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalMemo",
        "normalized": "Memo a b c-\u003eMap a b-\u003ec",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "Memo k v a-\u003eMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation discarding the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoState c k v a -\u003e c -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#evalMemoState",
        "fct-type": "function",
        "title": "evalMemoState"
      },
      "index": {
        "description": "Returns the result of MonadMemo computation discarding the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalMemoState",
        "normalized": "MemoState a b c d-\u003ea-\u003ed",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoState c k v a-\u003ec-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation wrapped in monad.\n This function discards the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoStateT c k v m a -\u003e c -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#evalMemoStateT",
        "fct-type": "function",
        "title": "evalMemoStateT"
      },
      "index": {
        "description": "Returns the result of MonadMemo computation wrapped in monad This function discards the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalMemoStateT",
        "normalized": "MemoStateT a b c d e-\u003ea-\u003ed e",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoStateT c k v m a-\u003ec-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e Map k v -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#evalMemoT",
        "fct-type": "function",
        "title": "evalMemoT"
      },
      "index": {
        "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalMemoT",
        "normalized": "MemoT a b c d-\u003eMap a b-\u003ec d",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "MemoT k v m a-\u003eMap k v-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalUArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m a",
        "fct-type": "function",
        "title": "evalUArrayMemo"
      },
      "index": {
        "description": "Evaluate computation using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalUArrayMemo",
        "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec d",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "evalUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:evalVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m a",
        "fct-type": "function",
        "title": "evalVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "evalVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea c",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for2",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of two-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2) -\u003e mv) -\u003e (k1, k2) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for2",
        "fct-type": "function",
        "title": "for2"
      },
      "index": {
        "description": "Adapter for memoization of two-argument function",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "for2",
        "normalized": "(((a,a)-\u003eb)-\u003e(a,a)-\u003eb)-\u003e(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k)-\u003emv)-\u003e(k,k)-\u003emv)-\u003e(k-\u003ek-\u003emv)-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for3",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of three-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2, k3) -\u003e mv) -\u003e (k1, k2, k3) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for3",
        "fct-type": "function",
        "title": "for3"
      },
      "index": {
        "description": "Adapter for memoization of three-argument function",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "for3",
        "normalized": "(((a,a,a)-\u003eb)-\u003e(a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k,k)-\u003emv)-\u003e(k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:for4",
      "description": {
        "fct-descr": "\u003cp\u003eAdapter for memoization of four-argument function\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(((k1, k2, k3, k4) -\u003e mv) -\u003e (k1, k2, k3, k4) -\u003e mv) -\u003e (k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv) -\u003e k1 -\u003e k2 -\u003e k3 -\u003e k4 -\u003e mv",
        "fct-source": "src/Control-Monad-Memo-Class.html#for4",
        "fct-type": "function",
        "title": "for4"
      },
      "index": {
        "description": "Adapter for memoization of four-argument function",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "for4",
        "normalized": "(((a,a,a,a)-\u003eb)-\u003e(a,a,a,a)-\u003eb)-\u003e(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "(((k,k,k,k)-\u003emv)-\u003e(k,k,k,k)-\u003emv)-\u003e(k-\u003ek-\u003ek-\u003ek-\u003emv)-\u003ek-\u003ek-\u003ek-\u003ek-\u003emv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memo",
      "description": {
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e m v) -\u003e k -\u003e m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memo",
        "fct-type": "method",
        "title": "memo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memo",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol0",
      "description": {
        "fct-descr": "\u003cp\u003eUses current monad's memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e m v) -\u003e k -\u003e m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol0",
        "fct-type": "function",
        "title": "memol0"
      },
      "index": {
        "description": "Uses current monad memoization cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memol0",
        "normalized": "(a-\u003eb c)-\u003ea-\u003eb c",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol1",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 1st transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 m v) -\u003e k -\u003e t1 m v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol1",
        "fct-type": "function",
        "title": "memol1"
      },
      "index": {
        "description": "Uses the st transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memol1",
        "normalized": "(a-\u003eb c d)-\u003ea-\u003eb c d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et m v)-\u003ek-\u003et m v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol2",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 2nd transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 m) v) -\u003e k -\u003e t1 (t2 m) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol2",
        "fct-type": "function",
        "title": "memol2"
      },
      "index": {
        "description": "Uses the nd transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memol2",
        "normalized": "(a-\u003eb(b c)d)-\u003ea-\u003eb(b c)d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t m)v)-\u003ek-\u003et(t m)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol3",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 3rd transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 (t3 m)) v) -\u003e k -\u003e t1 (t2 (t3 m)) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol3",
        "fct-type": "function",
        "title": "memol3"
      },
      "index": {
        "description": "Uses the rd transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memol3",
        "normalized": "(a-\u003eb(b(b c))d)-\u003ea-\u003eb(b(b c))d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t(t m))v)-\u003ek-\u003et(t(t m))v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memol4",
      "description": {
        "fct-descr": "\u003cp\u003eUses the 4th transformer in stack for memoization cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(k -\u003e t1 (t2 (t3 (t4 m))) v) -\u003e k -\u003e t1 (t2 (t3 (t4 m))) v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memol4",
        "fct-type": "function",
        "title": "memol4"
      },
      "index": {
        "description": "Uses the th transformer in stack for memoization cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memol4",
        "normalized": "(a-\u003eb(b(b(b c)))d)-\u003ea-\u003eb(b(b(b c)))d",
        "package": "monad-memo",
        "partial": "",
        "signature": "(k-\u003et(t(t(t m)))v)-\u003ek-\u003et(t(t(t m)))v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:memoln",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization for the current transformer in stack using a cache from an arbitrary transformer down the stack\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "(forall a.  m1 a -\u003e m2 a) -\u003e (k1 -\u003e k2) -\u003e (k1 -\u003e m2 v) -\u003e k1 -\u003e m2 v",
        "fct-source": "src/Control-Monad-Memo-Class.html#memoln",
        "fct-type": "function",
        "title": "memoln"
      },
      "index": {
        "description": "Memoization for the current transformer in stack using cache from an arbitrary transformer down the stack",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "memoln",
        "normalized": "(a b c d-\u003ec d)-\u003e(e-\u003ee)-\u003e(e-\u003ec f)-\u003ee-\u003ec f",
        "package": "monad-memo",
        "partial": "",
        "signature": "(forall a. m a-\u003em a)-\u003e(k-\u003ek)-\u003e(k-\u003em v)-\u003ek-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation and the final content of array cache using boxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "ArrayCache k e m a-\u003e (k, k)-\u003e m (a, Array m k e)",
        "fct-type": "function",
        "title": "runArrayMemo"
      },
      "index": {
        "description": "Evaluate computation and the final content of array cache using boxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runArrayMemo",
        "normalized": "ArrayCache a b c d-\u003e(a,a)-\u003ec(d,Array c a b)",
        "package": "monad-memo",
        "partial": "Array Memo",
        "signature": "ArrayCache k e m a-\u003e(k,k)-\u003em(a,Array m k e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e Map k v -\u003e (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#runMemo",
        "fct-type": "function",
        "title": "runMemo"
      },
      "index": {
        "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runMemo",
        "normalized": "Memo a b c-\u003eMap a b-\u003e(c,Map a b)",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "Memo k v a-\u003eMap k v-\u003e(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoState c k v a -\u003e c -\u003e (a, c)",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#runMemoState",
        "fct-type": "function",
        "title": "runMemoState"
      },
      "index": {
        "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runMemoState",
        "normalized": "MemoState a b c d-\u003ea-\u003e(d,a)",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoState c k v a-\u003ec-\u003e(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container wrapped in monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoStateT s k v m a -\u003e s -\u003e m (a, s)",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#runMemoStateT",
        "fct-type": "function",
        "title": "runMemoStateT"
      },
      "index": {
        "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container wrapped in monad",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runMemoStateT",
        "normalized": "MemoStateT a b c d e-\u003ea-\u003ed(e,a)",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoStateT s k v m a-\u003es-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e Map k v -\u003e m (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#runMemoT",
        "fct-type": "function",
        "title": "runMemoT"
      },
      "index": {
        "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runMemoT",
        "normalized": "MemoT a b c d-\u003eMap a b-\u003ec(d,Map a b)",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "MemoT k v m a-\u003eMap k v-\u003em(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runUArrayMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation and the final content of array cache using unboxed array\n\u003c/p\u003e\u003cp\u003eKey range should cover all possible keys used in computation\n otherwise \u003cem\u003enot in range\u003c/em\u003e error is generated by array\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "UArrayCache k e m a-\u003e (k, k)-\u003e m (a, UArray m k e)",
        "fct-type": "function",
        "title": "runUArrayMemo"
      },
      "index": {
        "description": "Evaluate computation and the final content of array cache using unboxed array Key range should cover all possible keys used in computation otherwise not in range error is generated by array",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runUArrayMemo",
        "normalized": "UArrayCache a b c d-\u003e(a,a)-\u003ec(d,UArray c a b)",
        "package": "monad-memo",
        "partial": "UArray Memo",
        "signature": "UArrayCache k e m a-\u003e(k,k)-\u003em(a,UArray m k e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runUVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable unboxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "UVectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, UVector (PrimState m) e)",
        "fct-type": "function",
        "title": "runUVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable unboxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runUVectorMemo",
        "normalized": "UVectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,UVector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "UVector Memo",
        "signature": "UVectorCache(PrimState m)e m a-\u003eInt-\u003em(a,UVector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:runVectorMemo",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate computation using mutable boxed vector.\n It also returns the final content of the vector cache\n\u003c/p\u003e\u003cp\u003eVector length must covers all possible keys used in computation\n otherwise \u003cem\u003eindex out of bound\u003c/em\u003e error is generated by vector code\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "VectorCache (PrimState m) e m a-\u003e Int-\u003e m (a, Vector (PrimState m) e)",
        "fct-type": "function",
        "title": "runVectorMemo"
      },
      "index": {
        "description": "Evaluate computation using mutable boxed vector It also returns the final content of the vector cache Vector length must covers all possible keys used in computation otherwise index out of bound error is generated by vector code",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "runVectorMemo",
        "normalized": "VectorCache(PrimState a)b a c-\u003eInt-\u003ea(c,Vector(PrimState a)b)",
        "package": "monad-memo",
        "partial": "Vector Memo",
        "signature": "VectorCache(PrimState m)e m a-\u003eInt-\u003em(a,Vector(PrimState m)e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemo",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemo",
        "fct-type": "function",
        "title": "startEvalMemo"
      },
      "index": {
        "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "startEvalMemo",
        "normalized": "Memo a b c-\u003ec",
        "package": "monad-memo",
        "partial": "Eval Memo",
        "signature": "Memo k v a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startEvalMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemoT",
        "fct-type": "function",
        "title": "startEvalMemoT"
      },
      "index": {
        "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "startEvalMemoT",
        "normalized": "MemoT a b c d-\u003ec d",
        "package": "monad-memo",
        "partial": "Eval Memo",
        "signature": "MemoT k v m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemo",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemo",
        "fct-type": "function",
        "title": "startRunMemo"
      },
      "index": {
        "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "startRunMemo",
        "normalized": "Memo a b c-\u003e(c,Map a b)",
        "package": "monad-memo",
        "partial": "Run Memo",
        "signature": "Memo k v a-\u003e(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Memo.html#v:startRunMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Memo",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e m (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemoT",
        "fct-type": "function",
        "title": "startRunMemoT"
      },
      "index": {
        "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Memo",
        "module": "Control.Monad.Memo",
        "name": "startRunMemoT",
        "normalized": "MemoT a b c d-\u003ec(d,Map a b)",
        "package": "monad-memo",
        "partial": "Run Memo",
        "signature": "MemoT k v m a-\u003em(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003eMemoStateT\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a container\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "Specialization of MemoStateT with Map as container",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "Map",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#t:Memo",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#Memo",
        "fct-type": "type",
        "title": "Memo"
      },
      "index": {
        "description": "Memoization monad which uses Map as cache container",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "Memo",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#t:MemoT",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad transformer which uses \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as a cache container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#MemoT",
        "fct-type": "type",
        "title": "MemoT"
      },
      "index": {
        "description": "Memoization monad transformer which uses Map as cache container",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "MemoT",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:evalMemo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e Map k v -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#evalMemo",
        "fct-type": "function",
        "title": "evalMemo"
      },
      "index": {
        "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "evalMemo",
        "normalized": "Memo a b c-\u003eMap a b-\u003ec",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "Memo k v a-\u003eMap k v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:evalMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial state, compute the result of a memoized computation\n discarding the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e Map k v -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#evalMemoT",
        "fct-type": "function",
        "title": "evalMemoT"
      },
      "index": {
        "description": "Given an initial state compute the result of memoized computation discarding the final state of the cache",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "evalMemoT",
        "normalized": "MemoT a b c d-\u003eMap a b-\u003ec d",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "MemoT k v m a-\u003eMap k v-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:runMemo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e Map k v -\u003e (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#runMemo",
        "fct-type": "function",
        "title": "runMemo"
      },
      "index": {
        "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "runMemo",
        "normalized": "Memo a b c-\u003eMap a b-\u003e(c,Map a b)",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "Memo k v a-\u003eMap k v-\u003e(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:runMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial cache, compute the result of a memoized computation\n along with the final state of the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e Map k v -\u003e m (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#runMemoT",
        "fct-type": "function",
        "title": "runMemoT"
      },
      "index": {
        "description": "Given an initial cache compute the result of memoized computation along with the final state of the cache",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "runMemoT",
        "normalized": "MemoT a b c d-\u003eMap a b-\u003ec(d,Map a b)",
        "package": "monad-memo",
        "partial": "Memo",
        "signature": "MemoT k v m a-\u003eMap k v-\u003em(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startEvalMemo",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemo",
        "fct-type": "function",
        "title": "startEvalMemo"
      },
      "index": {
        "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "startEvalMemo",
        "normalized": "Memo a b c-\u003ec",
        "package": "monad-memo",
        "partial": "Eval Memo",
        "signature": "Memo k v a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startEvalMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of a memoized computation discarding the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startEvalMemoT",
        "fct-type": "function",
        "title": "startEvalMemoT"
      },
      "index": {
        "description": "Compute the result of memoized computation discarding the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "startEvalMemoT",
        "normalized": "MemoT a b c d-\u003ec d",
        "package": "monad-memo",
        "partial": "Eval Memo",
        "signature": "MemoT k v m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startRunMemo",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "Memo k v a -\u003e (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemo",
        "fct-type": "function",
        "title": "startRunMemo"
      },
      "index": {
        "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "startRunMemo",
        "normalized": "Memo a b c-\u003e(c,Map a b)",
        "package": "monad-memo",
        "partial": "Run Memo",
        "signature": "Memo k v a-\u003e(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-Map.html#v:startRunMemoT",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the result of memoized computation along with the final state of the cache.\n This function uses empty \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e as an initial state\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.Map",
        "fct-package": "monad-memo",
        "fct-signature": "MemoT k v m a -\u003e m (a, Map k v)",
        "fct-source": "src/Control-Monad-Trans-Memo-Map.html#startRunMemoT",
        "fct-type": "function",
        "title": "startRunMemoT"
      },
      "index": {
        "description": "Compute the result of memoized computation along with the final state of the cache This function uses empty Map as an initial state",
        "hierarchy": "Control Monad Trans Memo Map",
        "module": "Control.Monad.Trans.Memo.Map",
        "name": "startRunMemoT",
        "normalized": "MemoT a b c d-\u003ec(d,Map a b)",
        "package": "monad-memo",
        "partial": "Run Memo",
        "signature": "MemoT k v m a-\u003em(a,Map k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric StateCache - similar to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e but optimised for carrying cache container\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Memo.ReaderCache",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Memo-ReaderCache.html",
        "fct-type": "module",
        "title": "ReaderCache"
      },
      "index": {
        "description": "Generic StateCache similar to ReaderT but optimised for carrying cache container",
        "hierarchy": "Control Monad Trans Memo ReaderCache",
        "module": "Control.Monad.Trans.Memo.ReaderCache",
        "name": "ReaderCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Reader Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#t:ReaderCache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric memoization cache which uses provided container\n This is pretty much identical to \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e,\n but is tuned to speed up implementations which use unboxed mutable containers\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.ReaderCache",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
        "fct-type": "newtype",
        "title": "ReaderCache"
      },
      "index": {
        "description": "Generic memoization cache which uses provided container This is pretty much identical to ReaderT but is tuned to speed up implementations which use unboxed mutable containers",
        "hierarchy": "Control Monad Trans Memo ReaderCache",
        "module": "Control.Monad.Trans.Memo.ReaderCache",
        "name": "ReaderCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Reader Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:ReaderCache",
      "description": {
        "fct-module": "Control.Monad.Trans.Memo.ReaderCache",
        "fct-package": "monad-memo",
        "fct-signature": "ReaderCache",
        "fct-source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
        "fct-type": "function",
        "title": "ReaderCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo ReaderCache",
        "module": "Control.Monad.Trans.Memo.ReaderCache",
        "name": "ReaderCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Reader Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:container",
      "description": {
        "fct-descr": "\u003cp\u003eReturns internal container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.ReaderCache",
        "fct-package": "monad-memo",
        "fct-signature": "ReaderCache c m c",
        "fct-source": "src/Control-Monad-Trans-Memo-ReaderCache.html#container",
        "fct-type": "function",
        "title": "container"
      },
      "index": {
        "description": "Returns internal container",
        "hierarchy": "Control Monad Trans Memo ReaderCache",
        "module": "Control.Monad.Trans.Memo.ReaderCache",
        "name": "container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-ReaderCache.html#v:evalReaderCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Memo.ReaderCache",
        "fct-package": "monad-memo",
        "fct-signature": "c -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-ReaderCache.html#ReaderCache",
        "fct-type": "function",
        "title": "evalReaderCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo ReaderCache",
        "module": "Control.Monad.Trans.Memo.ReaderCache",
        "name": "evalReaderCache",
        "normalized": "a-\u003eb c",
        "package": "monad-memo",
        "partial": "Reader Cache",
        "signature": "c-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines \u003ca\u003eMemoStateT\u003c/a\u003e - generalized (to any \u003ca\u003eData.MapLike\u003c/a\u003e content) memoization monad transformer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "Defines MemoStateT generalized to any Data.MapLike content memoization monad transformer",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "State",
        "normalized": "",
        "package": "monad-memo",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:Container",
      "description": {
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#Container",
        "fct-type": "newtype",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:MemoState",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#MemoState",
        "fct-type": "type",
        "title": "MemoState"
      },
      "index": {
        "description": "Memoization monad based on StateCache to be used with pure cache containers which support MapLike interface",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "MemoState",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#t:MemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMemoization monad transformer based on \u003ccode\u003e\u003ca\u003eStateCache\u003c/a\u003e\u003c/code\u003e\n to be used with pure cache containers which support \u003ccode\u003e\u003ca\u003eMapLike\u003c/a\u003e\u003c/code\u003e interface\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#MemoStateT",
        "fct-type": "type",
        "title": "MemoStateT"
      },
      "index": {
        "description": "Memoization monad transformer based on StateCache to be used with pure cache containers which support MapLike interface",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "MemoStateT",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:Container",
      "description": {
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "Container",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#Container",
        "fct-type": "function",
        "title": "Container"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "Container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:evalMemoState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation discarding the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "MemoState c k v a -\u003e c -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#evalMemoState",
        "fct-type": "function",
        "title": "evalMemoState"
      },
      "index": {
        "description": "Returns the result of MonadMemo computation discarding the cache",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "evalMemoState",
        "normalized": "MemoState a b c d-\u003ea-\u003ed",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoState c k v a-\u003ec-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:evalMemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation wrapped in monad.\n This function discards the cache\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "MemoStateT c k v m a -\u003e c -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#evalMemoStateT",
        "fct-type": "function",
        "title": "evalMemoStateT"
      },
      "index": {
        "description": "Returns the result of MonadMemo computation wrapped in monad This function discards the cache",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "evalMemoStateT",
        "normalized": "MemoStateT a b c d e-\u003ea-\u003ed e",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoStateT c k v m a-\u003ec-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:runMemoState",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "MemoState c k v a -\u003e c -\u003e (a, c)",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#runMemoState",
        "fct-type": "function",
        "title": "runMemoState"
      },
      "index": {
        "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "runMemoState",
        "normalized": "MemoState a b c d-\u003ea-\u003e(d,a)",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoState c k v a-\u003ec-\u003e(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:runMemoStateT",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the pair of the result of \u003ccode\u003e\u003ca\u003eMonadMemo\u003c/a\u003e\u003c/code\u003e computation\n along with the final state of the internal pure container wrapped in monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "MemoStateT s k v m a -\u003e s -\u003e m (a, s)",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#runMemoStateT",
        "fct-type": "function",
        "title": "runMemoStateT"
      },
      "index": {
        "description": "Returns the pair of the result of MonadMemo computation along with the final state of the internal pure container wrapped in monad",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "runMemoStateT",
        "normalized": "MemoStateT a b c d e-\u003ea-\u003ed(e,a)",
        "package": "monad-memo",
        "partial": "Memo State",
        "signature": "MemoStateT s k v m a-\u003es-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-State.html#v:toState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Memo.State",
        "fct-package": "monad-memo",
        "fct-signature": "s",
        "fct-source": "src/Control-Monad-Trans-Memo-State.html#Container",
        "fct-type": "function",
        "title": "toState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo State",
        "module": "Control.Monad.Trans.Memo.State",
        "name": "toState",
        "normalized": "",
        "package": "monad-memo",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric StateCache - similar to \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e but optimised for carrying cache container\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html",
        "fct-type": "module",
        "title": "StateCache"
      },
      "index": {
        "description": "Generic StateCache similar to StateT but optimised for carrying cache container",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "StateCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "State Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#t:StateCache",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric memoization cache which uses provided container which can also be updated by the computation.\n This is pretty much identical to \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e,\n but is tuned to speed up implementations which use unboxed mutable containers\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
        "fct-type": "newtype",
        "title": "StateCache"
      },
      "index": {
        "description": "Generic memoization cache which uses provided container which can also be updated by the computation This is pretty much identical to StateT but is tuned to speed up implementations which use unboxed mutable containers",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "StateCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "State Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:StateCache",
      "description": {
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "StateCache",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
        "fct-type": "function",
        "title": "StateCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "StateCache",
        "normalized": "",
        "package": "monad-memo",
        "partial": "State Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:container",
      "description": {
        "fct-descr": "\u003cp\u003eReturns internal container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "StateCache c m c",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#container",
        "fct-type": "function",
        "title": "container"
      },
      "index": {
        "description": "Returns internal container",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "container",
        "normalized": "",
        "package": "monad-memo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:evalStateCache",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates computation discarding the resulting container \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "StateCache c m a -\u003e c -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#evalStateCache",
        "fct-type": "function",
        "title": "evalStateCache"
      },
      "index": {
        "description": "Evaluates computation discarding the resulting container",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "evalStateCache",
        "normalized": "StateCache a b c-\u003ea-\u003eb c",
        "package": "monad-memo",
        "partial": "State Cache",
        "signature": "StateCache c m a-\u003ec-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:runStateCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "c -\u003e m (a, c)",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#StateCache",
        "fct-type": "function",
        "title": "runStateCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "runStateCache",
        "normalized": "a-\u003eb(c,a)",
        "package": "monad-memo",
        "partial": "State Cache",
        "signature": "c-\u003em(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Control-Monad-Trans-Memo-StateCache.html#v:setContainer",
      "description": {
        "fct-descr": "\u003cp\u003eAssigns new value to internal container\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Memo.StateCache",
        "fct-package": "monad-memo",
        "fct-signature": "c -\u003e StateCache c m ()",
        "fct-source": "src/Control-Monad-Trans-Memo-StateCache.html#setContainer",
        "fct-type": "function",
        "title": "setContainer"
      },
      "index": {
        "description": "Assigns new value to internal container",
        "hierarchy": "Control Monad Trans Memo StateCache",
        "module": "Control.Monad.Trans.Memo.StateCache",
        "name": "setContainer",
        "normalized": "a-\u003eStateCache a b()",
        "package": "monad-memo",
        "partial": "Container",
        "signature": "c-\u003eStateCache c m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MapLike instances declaration for standard data types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MapLike.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Data-MapLike-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Defines MapLike instances declaration for standard data types",
        "hierarchy": "Data MapLike Instances",
        "module": "Data.MapLike.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#t:MapLike",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract interface to the container which can store \u003ccode\u003ev\u003c/code\u003e indexed by \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MapLike.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Data-MapLike.html#MapLike",
        "fct-type": "class",
        "title": "MapLike"
      },
      "index": {
        "description": "An abstract interface to the container which can store indexed by",
        "hierarchy": "Data MapLike Instances",
        "module": "Data.MapLike.Instances",
        "name": "MapLike",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Map Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#v:add",
      "description": {
        "fct-module": "Data.MapLike.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e v -\u003e c -\u003e c",
        "fct-source": "src/Data-MapLike.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MapLike Instances",
        "module": "Data.MapLike.Instances",
        "name": "add",
        "normalized": "a-\u003eb-\u003ec-\u003ec",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003ev-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike-Instances.html#v:lookup",
      "description": {
        "fct-module": "Data.MapLike.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e c -\u003e Maybe v",
        "fct-source": "src/Data-MapLike.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MapLike Instances",
        "module": "Data.MapLike.Instances",
        "name": "lookup",
        "normalized": "a-\u003eb-\u003eMaybe c",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003ec-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MapLike typeclass - generalized interface to Data.Map, Data.HashMap etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MapLike",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Data-MapLike.html",
        "fct-type": "module",
        "title": "MapLike"
      },
      "index": {
        "description": "Defines MapLike typeclass generalized interface to Data.Map Data.HashMap etc",
        "hierarchy": "Data MapLike",
        "module": "Data.MapLike",
        "name": "MapLike",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Map Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#t:MapLike",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract interface to the container which can store \u003ccode\u003ev\u003c/code\u003e indexed by \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.MapLike",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Data-MapLike.html#MapLike",
        "fct-type": "class",
        "title": "MapLike"
      },
      "index": {
        "description": "An abstract interface to the container which can store indexed by",
        "hierarchy": "Data MapLike",
        "module": "Data.MapLike",
        "name": "MapLike",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Map Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#v:add",
      "description": {
        "fct-module": "Data.MapLike",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e v -\u003e c -\u003e c",
        "fct-source": "src/Data-MapLike.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MapLike",
        "module": "Data.MapLike",
        "name": "add",
        "normalized": "a-\u003eb-\u003ec-\u003ec",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003ev-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MapLike.html#v:lookup",
      "description": {
        "fct-module": "Data.MapLike",
        "fct-package": "monad-memo",
        "fct-signature": "k -\u003e c -\u003e Maybe v",
        "fct-source": "src/Data-MapLike.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MapLike",
        "module": "Data.MapLike",
        "name": "lookup",
        "normalized": "a-\u003eb-\u003eMaybe c",
        "package": "monad-memo",
        "partial": "",
        "signature": "k-\u003ec-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines default instances of \u003ccode\u003e\u003ca\u003eMaybeLike\u003c/a\u003e\u003c/code\u003e for most primitive \u003ca\u003eUnboxed\u003c/a\u003e types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MaybeLike.Instances",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Data-MaybeLike-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Defines default instances of MaybeLike for most primitive Unboxed types",
        "hierarchy": "Data MaybeLike Instances",
        "module": "Data.MaybeLike.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines MaybeLike typeclass - a generic way to look at some types as if they were Maybe\n\u003c/p\u003e\u003cp\u003eIt is currently used to add maybe-ness to \u003ccode\u003eunboxed\u003c/code\u003e primitive types\nin cases when it isn't possuble to just use `Maybe a` (e.g. unboxed arrays) \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "module",
        "fct-source": "src/Data-MaybeLike.html",
        "fct-type": "module",
        "title": "MaybeLike"
      },
      "index": {
        "description": "Defines MaybeLike typeclass generic way to look at some types as if they were Maybe It is currently used to add maybe-ness to unboxed primitive types in cases when it isn possuble to just use Maybe e.g unboxed arrays",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "MaybeLike",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Maybe Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#t:MaybeLike",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract interface to a type which may not have a value\n\u003c/p\u003e",
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "class",
        "fct-source": "src/Data-MaybeLike.html#MaybeLike",
        "fct-type": "class",
        "title": "MaybeLike"
      },
      "index": {
        "description": "An abstract interface to type which may not have value",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "MaybeLike",
        "normalized": "",
        "package": "monad-memo",
        "partial": "Maybe Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:fromJust",
      "description": {
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "a -\u003e v",
        "fct-source": "src/Data-MaybeLike.html#fromJust",
        "fct-type": "method",
        "title": "fromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "fromJust",
        "normalized": "a-\u003eb",
        "package": "monad-memo",
        "partial": "Just",
        "signature": "a-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:isNothing",
      "description": {
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-MaybeLike.html#isNothing",
        "fct-type": "method",
        "title": "isNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "isNothing",
        "normalized": "a-\u003eBool",
        "package": "monad-memo",
        "partial": "Nothing",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:just",
      "description": {
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "v -\u003e a",
        "fct-source": "src/Data-MaybeLike.html#just",
        "fct-type": "method",
        "title": "just"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "just",
        "normalized": "a-\u003eb",
        "package": "monad-memo",
        "partial": "",
        "signature": "v-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-memo/docs/Data-MaybeLike.html#v:nothing",
      "description": {
        "fct-module": "Data.MaybeLike",
        "fct-package": "monad-memo",
        "fct-signature": "a",
        "fct-source": "src/Data-MaybeLike.html#nothing",
        "fct-type": "method",
        "title": "nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MaybeLike",
        "module": "Data.MaybeLike",
        "name": "nothing",
        "normalized": "",
        "package": "monad-memo",
        "partial": "",
        "signature": ""
      }
    }
  }
]