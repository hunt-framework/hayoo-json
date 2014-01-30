[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of data structures that can be folded to a summary value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "module",
        "fct-source": "src/Data-Collections-Foldable.html",
        "fct-type": "module",
        "title": "Foldable"
      },
      "index": {
        "description": "Class of data structures that can be folded to summary value",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "collections-api",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#t:Foldable",
      "description": {
        "fct-descr": "\u003cp\u003eData structures that can be folded.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree\n    foldMap f Empty = mempty\n    foldMap f (Leaf x) = f x\n    foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the monoid is assumed\n to satisfy the monoid laws.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections-Foldable.html#Foldable",
        "fct-type": "class",
        "title": "Foldable"
      },
      "index": {
        "description": "Data structures that can be folded Minimal complete definition foldMap or foldr For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Foldable Tree foldMap Empty mempty foldMap Leaf foldMap Node foldMap mappend mappend foldMap This is suitable even for abstract types as the monoid is assumed to satisfy the monoid laws",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "collections-api",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether all elements of the structure satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e Bool) -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "Determines whether all elements of the structure satisfy the predicate",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "all",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a container of Bools.  For the\n result to be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the container must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however,\n results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e value finitely far from the left end.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "and returns the conjunction of container of Bools For the result to be True the container must be finite False however results from False value finitely far from the left end",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "and",
        "normalized": "a-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether any element of the structure satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e Bool) -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "Determines whether any element of the structure satisfies the predicate",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "any",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:asum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003econcat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e f a",
        "fct-source": "src/Data-Collections-Foldable.html#asum",
        "fct-type": "function",
        "title": "asum"
      },
      "index": {
        "description": "The sum of collection of actions generalizing concat",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "asum",
        "normalized": "a-\u003eb c",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the element occur in the structure?\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "a -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Does the element occur in the structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "elem",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "a-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a structure and returns\n the leftmost element of the structure matching the predicate, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e Bool) -\u003e t -\u003e Maybe a",
        "fct-source": "src/Data-Collections-Foldable.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "The find function takes predicate and structure and returns the leftmost element of the structure matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "find",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eMaybe a",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003et-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the elements of a structure using a monoid.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#fold",
        "fct-type": "method",
        "title": "fold"
      },
      "index": {
        "description": "Combine the elements of structure using monoid",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "fold",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of the structure to a monoid,\n and combine the results.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e m) -\u003e t -\u003e m",
        "fct-source": "src/Data-Collections-Foldable.html#foldMap",
        "fct-type": "method",
        "title": "foldMap"
      },
      "index": {
        "description": "Map each element of the structure to monoid and combine the results",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "collections-api",
        "partial": "Map",
        "signature": "(a-\u003em)-\u003et-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e t -\u003e b",
        "fct-source": "src/Data-Collections-Foldable.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "Left-associative fold of structure foldl foldl toList",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003et-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFold over the elements of a structure,\n associating to the left, but strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Fold over the elements of structure associating to the left but strictly",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#foldl1",
        "fct-type": "method",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl that has no base case and thus may only be applied to non-empty structures foldl1 foldl1 toList",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldlM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic fold over the elements of a structure,\n associating to the left, i.e. from left to right.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e t -\u003e m a",
        "fct-source": "src/Data-Collections-Foldable.html#foldlM",
        "fct-type": "function",
        "title": "foldlM"
      },
      "index": {
        "description": "Monadic fold over the elements of structure associating to the left i.e from left to right",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldlM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed-\u003ec a",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003et-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eRight-associative fold of a structure.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
        "fct-source": "src/Data-Collections-Foldable.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "Right-associative fold of structure foldr foldr toList",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldr-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFold over the elements of a structure,\n associating to the right, but strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t -\u003e b",
        "fct-source": "src/Data-Collections-Foldable.html#foldr%27",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "Fold over the elements of structure associating to the right but strictly",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldr'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#foldr1",
        "fct-type": "method",
        "title": "foldr1"
      },
      "index": {
        "description": "variant of foldr that has no base case and thus may only be applied to non-empty structures foldr1 foldr1 toList",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:foldrM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic fold over the elements of a structure,\n associating to the right, i.e. from right to left.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e m b) -\u003e b -\u003e t -\u003e m b",
        "fct-source": "src/Data-Collections-Foldable.html#foldrM",
        "fct-type": "function",
        "title": "foldrM"
      },
      "index": {
        "description": "Monadic fold over the elements of structure associating to the right i.e from right to left",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "foldrM",
        "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed-\u003ec b",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eb-\u003em b)-\u003eb-\u003et-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:forM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Data-Collections-Foldable.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "forM is mapM with its arguments flipped",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "forM_",
        "normalized": "a-\u003e(b-\u003ec d)-\u003ec()",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:for_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e (a -\u003e f b) -\u003e f ()",
        "fct-source": "src/Data-Collections-Foldable.html#for_",
        "fct-type": "function",
        "title": "for_"
      },
      "index": {
        "description": "for is traverse with its arguments flipped",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "for_",
        "normalized": "a-\u003e(b-\u003ec d)-\u003ec()",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003e(a-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:isSingleton",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether the structure contains a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#isSingleton",
        "fct-type": "method",
        "title": "isSingleton"
      },
      "index": {
        "description": "Tells whether the structure contains single element",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "isSingleton",
        "normalized": "a-\u003eBool",
        "package": "collections-api",
        "partial": "Singleton",
        "signature": "t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to a monadic action, evaluate\n these actions from left to right, and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e m b) -\u003e t -\u003e m ()",
        "fct-source": "src/Data-Collections-Foldable.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Map each element of structure to monadic action evaluate these actions from left to right and ignore the results",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003ed-\u003eb()",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003em b)-\u003et-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003eThe largest element of the structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "The largest element of the structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "maximum",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:maximumBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe largest element of a non-empty structure with respect to the\n given comparison function.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#maximumBy",
        "fct-type": "function",
        "title": "maximumBy"
      },
      "index": {
        "description": "The largest element of non-empty structure with respect to the given comparison function",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "maximumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003eThe least element of a non-null structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "The least element of non-null structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "minimum",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:minimumBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe least element of a non-empty structure with respect to the\n given comparison function.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#minimumBy",
        "fct-type": "function",
        "title": "minimumBy"
      },
      "index": {
        "description": "The least element of non-empty structure with respect to the given comparison function",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "minimumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:msum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003econcat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e m a",
        "fct-source": "src/Data-Collections-Foldable.html#msum",
        "fct-type": "function",
        "title": "msum"
      },
      "index": {
        "description": "The sum of collection of actions generalizing concat",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "msum",
        "normalized": "a-\u003eb c",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "a -\u003e t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "notElem is the negation of elem",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "notElem",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "Elem",
        "signature": "a-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether the structure is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Tells whether the structure is empty",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a container of Bools.  For the\n result to be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the container must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however,\n results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e value finitely far from the left end.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e Bool",
        "fct-source": "src/Data-Collections-Foldable.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "or returns the disjunction of container of Bools For the result to be False the container must be finite True however results from True value finitely far from the left end",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "or",
        "normalized": "a-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of the numbers of a structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "The product function computes the product of the numbers of structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "product",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:sequenceA_",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each action in the structure from left to right,\n and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e f ()",
        "fct-source": "src/Data-Collections-Foldable.html#sequenceA_",
        "fct-type": "function",
        "title": "sequenceA_"
      },
      "index": {
        "description": "Evaluate each action in the structure from left to right and ignore the results",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "sequenceA_",
        "normalized": "a-\u003eb()",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:sequence_",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate each monadic action in the structure from left to right,\n and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e m ()",
        "fct-source": "src/Data-Collections-Foldable.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "Evaluate each monadic action in the structure from left to right and ignore the results",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "sequence_",
        "normalized": "a-\u003eb()",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of the structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Data-Collections-Foldable.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Returns the size of the structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "size",
        "normalized": "a-\u003eInt",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of the numbers of a structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e a",
        "fct-source": "src/Data-Collections-Foldable.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "The sum function computes the sum of the numbers of structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "sum",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e [a]",
        "fct-source": "src/Data-Collections-Foldable.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "List of elements of structure",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "toList",
        "normalized": "a-\u003e[b]",
        "package": "collections-api",
        "partial": "List",
        "signature": "t-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Foldable.html#v:traverse_",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to an action, evaluate\n these actions from left to right, and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Data.Collections.Foldable",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e f b) -\u003e t -\u003e f ()",
        "fct-source": "src/Data-Collections-Foldable.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "Map each element of structure to an action evaluate these actions from left to right and ignore the results",
        "hierarchy": "Data Collections Foldable",
        "module": "Data.Collections.Foldable",
        "name": "traverse_",
        "normalized": "(a-\u003eb c)-\u003ed-\u003eb()",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe purpose of this module is twofold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Check instances of the classes in the collection framework.\n\u003c/li\u003e\u003cli\u003e Give those classes more formal semantics.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eTherefore, this acts as a contract between the collections users and implementers.\n\u003c/p\u003e\u003cp\u003eEach function in this module returns a list of \u003ccode\u003e(property_name, propterty)\u003c/code\u003e\n for a given class (or set of classes). Each function is parameterized on the \n type of\n the collection to check, so a value witnessing the type must be passed. This\n value is guaranteed not to be evaluated, so it can always be \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThese properties allow to verify, with a high degree of confidence, that\n instances of the classes defined in \u003ccode\u003eData.Collections\u003c/code\u003e satisfy \n the prescribed properties.\n\u003c/p\u003e\u003cp\u003eYou will note that properties depend on the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class. This means that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e properties are verified up to \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e equivalence.\n\u003c/li\u003e\u003cli\u003e Infinite structures and other \u003ccode\u003ebottom\u003c/code\u003es are not testable with this module.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "module",
        "fct-source": "src/Data-Collections-Properties.html",
        "fct-type": "module",
        "title": "Properties"
      },
      "index": {
        "description": "The purpose of this module is twofold Check instances of the classes in the collection framework Give those classes more formal semantics Therefore this acts as contract between the collections users and implementers Each function in this module returns list of property name propterty for given class or set of classes Each function is parameterized on the type of the collection to check so value witnessing the type must be passed This value is guaranteed not to be evaluated so it can always be undefined These properties allow to verify with high degree of confidence that instances of the classes defined in Data.Collections satisfy the prescribed properties You will note that properties depend on the Eq class This means that properties are verified up to Eq equivalence Infinite structures and other bottom are not testable with this module",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "Properties",
        "normalized": "",
        "package": "collections-api",
        "partial": "Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:collection_properties",
      "description": {
        "fct-descr": "\u003cp\u003ecollection_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003ecollection\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldr insert empty c == c\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eempty\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  null empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsert1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  a `elem` (insert a c)                                 -- insert puts the element in the collection\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsert2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  a /= a' ==\u003e (a' `elem` c \u003c==  a' `elem` (insert a c)) -- insert does not insert other elements\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsert3\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  let c' = insert a c in x `elem` c && y `elem` c ==\u003e x `elem` c' || y `elem` c' -- insert alters at most one element\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efilter\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  (a `elem` filter f c) \u003c==\u003e ((a `elem` c) && f a)\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#collection_properties",
        "fct-type": "function",
        "title": "collection_properties"
      },
      "index": {
        "description": "collection properties returns the following properties collection foldr insert empty empty null empty insert1 elem insert insert puts the element in the collection insert2 elem elem insert insert does not insert other elements insert3 let insert in elem elem elem elem insert alters at most one element filter elem filter elem",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "collection_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:foldable_properties",
      "description": {
        "fct-descr": "\u003cp\u003efoldable_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003esize\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  size c == foldr (const (+1)) 0 c\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003enull\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  null c \u003c==\u003e all (const False) c\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eisSingleton\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  isSingleton c \u003c==\u003e size c == 1\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eeq_elem\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  c1 == c2 ==\u003e elem x c1 == elem x c2 -- note that the order of folding is not enforced, and that the converse is not true\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#foldable_properties",
        "fct-type": "function",
        "title": "foldable_properties"
      },
      "index": {
        "description": "foldable properties returns the following properties size size foldr const null null all const False isSingleton isSingleton size eq elem c1 c2 elem c1 elem c2 note that the order of folding is not enforced and that the converse is not true",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "foldable_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:indexed_map_properties",
      "description": {
        "fct-descr": "\u003cp\u003eindexed_map_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edomain\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` m \u003c==\u003e k `member` m\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eindex\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  case lookup k m of {Just x -\u003e x == index k m; _ -\u003e True}\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#indexed_map_properties",
        "fct-type": "function",
        "title": "indexed_map_properties"
      },
      "index": {
        "description": "indexed map properties returns the following properties domain inDomain member index case lookup of Just index True",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "indexed_map_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:indexed_properties",
      "description": {
        "fct-descr": "\u003cp\u003eindexed_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eadjust\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` m ==\u003e index k (adjust f k m) == f (index k m)\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#indexed_properties",
        "fct-type": "function",
        "title": "indexed_properties"
      },
      "index": {
        "description": "indexed properties returns the following properties adjust inDomain index adjust index",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "indexed_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:indexed_sequence_properties",
      "description": {
        "fct-descr": "\u003cp\u003eindexed_sequence_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edomain\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` s \u003c==\u003e k \u003e= 0 && k \u003c size s\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eleft1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` s ==\u003e index (k+1)      (x \u003c| s) == index k s\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eleft2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e                       index 0          (x \u003c| s) == x\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eright1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` s ==\u003e index k          (s |\u003e x) == index k s\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eright2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e                     index (size s)   (s |\u003e x) == x\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eappend1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` t ==\u003e index (k+size s) (s \u003e\u003c t) == index k t\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eappend2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  k `inDomain` s ==\u003e index k          (s \u003e\u003c t) == index k s\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "s -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#indexed_sequence_properties",
        "fct-type": "function",
        "title": "indexed_sequence_properties"
      },
      "index": {
        "description": "indexed sequence properties returns the following properties domain inDomain size left1 inDomain index index left2 index right1 inDomain index index right2 index size append1 inDomain index size index append2 inDomain index index",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "indexed_sequence_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "s-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:map_fold_properties",
      "description": {
        "fct-descr": "\u003cp\u003emap_fold_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efoldable\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  maybeToList (lookup k m) == map snd (List.filter ((== k) . fst) (toList m))\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003esize\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  sizeExcept (alter f k m) == sizeExcept m\n    where sizeExcept m = size m - maybe 0 (const 1) (lookup k m)\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#map_fold_properties",
        "fct-type": "function",
        "title": "map_fold_properties"
      },
      "index": {
        "description": "map fold properties returns the following properties foldable maybeToList lookup map snd List.filter fst toList size sizeExcept alter sizeExcept where sizeExcept size maybe const lookup",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "map_fold_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:map_properties",
      "description": {
        "fct-descr": "\u003cp\u003emap_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003ealter\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k (alter f k m) == f (lookup k m)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emapWithKey\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k (mapWithKey f m) == fmap (f k) (lookup k m)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eunionWith\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k (unionWith f m1 m2) == case (lookup k m1, lookup k m2) of\n     (Nothing,Nothing) -\u003e Nothing\n     (Just x, Nothing) -\u003e Just x\n     (Nothing,Just x)  -\u003e Just x\n     (Just x, Just y)  -\u003e Just (f x y)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eintersectionWith\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k (intersectionWith f m1 m2) == case (lookup k m1, lookup k m2) of\n     (Just x, Just y) -\u003e Just (f x y)\n     _ -\u003e Nothing\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edifferenceWith\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k (differenceWith f m1 m2) == case (lookup k m1, lookup k m2) of\n     (Just x, Nothing) -\u003e Just x\n     (Just x, Just y)  -\u003e f x y\n     (Nothing, _)      -\u003e Nothing\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eisSubmapBy\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  isSubmapBy f m1 m2 \u003c==\u003e differenceWith (\\x y-\u003eif f x y then Nothing else Just v) m1 m2 == mempty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eisProperSubmapBy\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  isProperSubmapBy f m1 m2 \u003c==\u003e isSubmapBy f m1 m2 && m1 /= m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsertWith\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  insertWith f k a m == alter (\\x -\u003e Just $ case x of {Nothing-\u003ea;Just a' -\u003e f a a'}) k m\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efromFoldableWith\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  fromFoldableWith f l == foldr (uncurry (insertWith f)) mempty l\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edelete\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  delete k m == alter (const Nothing) k m\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emember\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  member k m \u003c==\u003e isJust (lookup k m)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eunion\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  union m1 m2 == unionWith const m1 m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eintersection\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  intersection m1 m2 == intersectionWith const m1 m2 \n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edifference\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  difference m1 m2 == differenceWith (\\_ _ -\u003e Nothing) m1 m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003esubset\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  isSubset m1 m2 \u003c==\u003e isSubmapBy (\\_ _ -\u003e True) m1 m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eproperSubset\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  isProperSubset m1 m2 \u003c==\u003e isProperSubmapBy (\\_ _ -\u003e True) m1 m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emempty\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  lookup k mempty == Nothing\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emappend\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  mappend m1 m2 == union m1 m2\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eeq_lookup\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  c1 == c2 ==\u003e lookup x c1 == lookup x c2 -- should really be: c1 == c2 \u003c==\u003e forall x. lookup x c1 == lookup x c2\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#map_properties",
        "fct-type": "function",
        "title": "map_properties"
      },
      "index": {
        "description": "map properties returns the following properties alter lookup alter lookup mapWithKey lookup mapWithKey fmap lookup unionWith lookup unionWith m1 m2 case lookup m1 lookup m2 of Nothing Nothing Nothing Just Nothing Just Nothing Just Just Just Just Just intersectionWith lookup intersectionWith m1 m2 case lookup m1 lookup m2 of Just Just Just Nothing differenceWith lookup differenceWith m1 m2 case lookup m1 lookup m2 of Just Nothing Just Just Just Nothing Nothing isSubmapBy isSubmapBy m1 m2 differenceWith if then Nothing else Just m1 m2 mempty isProperSubmapBy isProperSubmapBy m1 m2 isSubmapBy m1 m2 m1 m2 insertWith insertWith alter Just case of Nothing Just fromFoldableWith fromFoldableWith foldr uncurry insertWith mempty delete delete alter const Nothing member member isJust lookup union union m1 m2 unionWith const m1 m2 intersection intersection m1 m2 intersectionWith const m1 m2 difference difference m1 m2 differenceWith Nothing m1 m2 subset isSubset m1 m2 isSubmapBy True m1 m2 properSubset isProperSubset m1 m2 isProperSubmapBy True m1 m2 mempty lookup mempty Nothing mappend mappend m1 m2 union m1 m2 eq lookup c1 c2 lookup c1 lookup c2 should really be c1 c2 forall lookup c1 lookup c2",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "map_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:map_unfold_properties",
      "description": {
        "fct-descr": "\u003cp\u003emap_unfold_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emempty\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  mempty == empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsert\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  insert (k,v) m == insertWith (\\x _ -\u003e x) k v m\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#map_unfold_properties",
        "fct-type": "function",
        "title": "map_unfold_properties"
      },
      "index": {
        "description": "map unfold properties returns the following properties mempty mempty empty insert insert insertWith",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "map_unfold_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:sequence_properties",
      "description": {
        "fct-descr": "\u003cp\u003esequence_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efold0\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldMap f empty == mempty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efold1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldMap f (x \u003c| s) == f x `mappend` foldMap f s\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efold2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldMap f (s |\u003e x) == foldMap f s `mappend` f x\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efold3\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldMap f (s \u003e\u003c t) == foldMap f s `mappend` foldMap f t\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efront0\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  front empty == Nothing\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efront1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  front (x \u003c| s) == Just (x,s)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efront2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  front (s |\u003e x) == case front s of {Nothing -\u003e Just (x, empty); Just (x',s') -\u003e Just (x', s' |\u003e x)}\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efront3\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  front (s \u003e\u003c t) == case front s of {Nothing -\u003e front t;         Just (x',s') -\u003e Just (x', s' \u003e\u003c t)}\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eback0\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  back empty == Nothing\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eback1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  back (s |\u003e x) == Just (s,x)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eback2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  back (x \u003c| s) == case back s of {Nothing -\u003e Just (empty, x); Just (s',x') -\u003e Just (x \u003c| s', x')}\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eback3\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  back (t \u003e\u003c s) == case back s of {Nothing -\u003e back t;          Just (s',x') -\u003e Just (t \u003e\u003c s', x')}\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edrop1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e          drop 0     s == s\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003edrop2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  n\u003e0 ==\u003e drop (n+1) s == case front (drop n s) of Nothing -\u003e empty; Just (_,s') -\u003e s'\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003etake1\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e          take 0     s == empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003etake2\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  n\u003e0 ==\u003e take (n+1) s == case front s of Nothing -\u003e empty; Just (x,s') -\u003e x \u003c| take n s'\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003ereverse\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  foldMap f (reverse s) == getDual (foldMap (Dual . f) s)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emempty\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  mempty == empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eeq_fold\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  s1 == s2 ==\u003e foldMap f s1 == foldMap f s2\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "s -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#sequence_properties",
        "fct-type": "function",
        "title": "sequence_properties"
      },
      "index": {
        "description": "sequence properties returns the following properties fold0 foldMap empty mempty fold1 foldMap mappend foldMap fold2 foldMap foldMap mappend fold3 foldMap foldMap mappend foldMap front0 front empty Nothing front1 front Just front2 front case front of Nothing Just empty Just Just front3 front case front of Nothing front Just Just back0 back empty Nothing back1 back Just back2 back case back of Nothing Just empty Just Just back3 back case back of Nothing back Just Just drop1 drop drop2 drop case front drop of Nothing empty Just take1 take empty take2 take case front of Nothing empty Just take reverse foldMap reverse getDual foldMap Dual mempty mempty empty eq fold s1 s2 foldMap s1 foldMap s2",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "sequence_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "s-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:set_fold_properties",
      "description": {
        "fct-descr": "\u003cp\u003eset_fold_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003efoldable\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  maybeToList (lookup k m) == map (const ()) (List.filter (== k) (toList m))\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003esize\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  sizeExcept (alter f k m) == sizeExcept m\n    where sizeExcept m = size m - maybe 0 (const 1) (lookup k m)\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#set_fold_properties",
        "fct-type": "function",
        "title": "set_fold_properties"
      },
      "index": {
        "description": "set fold properties returns the following properties foldable maybeToList lookup map const List.filter toList size sizeExcept alter sizeExcept where sizeExcept size maybe const lookup",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "set_fold_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:set_unfold_properties",
      "description": {
        "fct-descr": "\u003cp\u003eset_unfold_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003emempty\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  mempty == empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsert\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  insert k m == insertWith (\\x _-\u003ex) k () m\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "m -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#set_unfold_properties",
        "fct-type": "function",
        "title": "set_unfold_properties"
      },
      "index": {
        "description": "set unfold properties returns the following properties mempty mempty empty insert insert insertWith",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "set_unfold_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "m-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections-Properties.html#v:unfoldable_properties",
      "description": {
        "fct-descr": "\u003cp\u003eunfoldable_properties returns the following properties: \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003esingleton\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  singleton a == insert a empty\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsertMany\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  insertMany l c == Foldable.foldr insert c l\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003einsertManySorted\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e  insertManySorted l c == Foldable.foldr insert c l\n     where l = List.sort l0\n\u003c/pre\u003e",
        "fct-module": "Data.Collections.Properties",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e [(Property, String)]",
        "fct-source": "src/Data-Collections-Properties.html#unfoldable_properties",
        "fct-type": "function",
        "title": "unfoldable_properties"
      },
      "index": {
        "description": "unfoldable properties returns the following properties singleton singleton insert empty insertMany insertMany Foldable.foldr insert insertManySorted insertManySorted Foldable.foldr insert where List.sort l0",
        "hierarchy": "Data Collections Properties",
        "module": "Data.Collections.Properties",
        "name": "unfoldable_properties",
        "normalized": "a-\u003e[(Property,String)]",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003e[(Property,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a class framework for collection types. It provides:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Classes for the most common type of collections\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eView\u003c/em\u003e types to change the type of a collection, so it implements other classes.\n This allows to use types for purposes that they are not originally designed for. (eg. \u003ccode\u003e\u003ca\u003eElemsView\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e A few generic functions for handling collections.\n\u003c/li\u003e\u003cli\u003e Infix (operator) version of common functions.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eShould you need a more precise documentation, \u003ca\u003eData.Collections.Properties\u003c/a\u003e lists laws that\n implementations are entitled to assume.\n\u003c/p\u003e\u003cp\u003eThe classes defined in this module are intended to give hints about performance.\n eg. if a function has a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e c k v\u003c/code\u003e context, this indicates that the function\n will perform better if \u003ccode\u003ec\u003c/code\u003e has an efficitent lookup function.\n\u003c/p\u003e\u003cp\u003eThis class framework is based on ideas found in Simon Peyton Jones, \"\u003cem\u003eBulk types with class\u003c/em\u003e\".\n \u003ca\u003ehttp://research.microsoft.com/Users/simonpj/Papers/collections.ps.gz\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAnother inspiration source are the examples of MPTC and fuctional dependencies in Oleg Kiselyov's\n many articles posted to the haskell mailing list.\n\u003c/p\u003e\u003cp\u003eThis module name-clashes with a lot of Prelude functions, subsuming those.\n The user is encouraged to import Prelude hiding the clashing functions.\n Alternatively, it can be imported \u003ccode\u003equalified\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "module",
        "fct-source": "src/Data-Collections.html",
        "fct-type": "module",
        "title": "Collections"
      },
      "index": {
        "description": "This module defines class framework for collection types It provides Classes for the most common type of collections View types to change the type of collection so it implements other classes This allows to use types for purposes that they are not originally designed for eg ElemsView few generic functions for handling collections Infix operator version of common functions Should you need more precise documentation Data.Collections.Properties lists laws that implementations are entitled to assume The classes defined in this module are intended to give hints about performance eg if function has Map context this indicates that the function will perform better if has an efficitent lookup function This class framework is based on ideas found in Simon Peyton Jones Bulk types with class http research.microsoft.com Users simonpj Papers collections.ps.gz Another inspiration source are the examples of MPTC and fuctional dependencies in Oleg Kiselyov many articles posted to the haskell mailing list This module name-clashes with lot of Prelude functions subsuming those The user is encouraged to import Prelude hiding the clashing functions Alternatively it can be imported qualified",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Collections",
        "normalized": "",
        "package": "collections-api",
        "partial": "Collections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Array",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Array",
        "fct-type": "class",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Array",
        "normalized": "",
        "package": "collections-api",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eClass of collection types.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Collection",
        "fct-type": "class",
        "title": "Collection"
      },
      "index": {
        "description": "Class of collection types",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Collection",
        "normalized": "",
        "package": "collections-api",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:ElemsView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eView\u003c/a\u003e to the elements of a dictionnary\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Collections.html#ElemsView",
        "fct-type": "newtype",
        "title": "ElemsView"
      },
      "index": {
        "description": "View to the elements of dictionnary",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "ElemsView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Elems View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Indexed",
      "description": {
        "fct-descr": "\u003cp\u003eClass of indexed types. \n The collection is \u003ccode\u003edense\u003c/code\u003e: there is no way to \u003cem\u003eremove\u003c/em\u003e an element nor for lookup \n to return \u003ca\u003enot found\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn practice however, most shallow collection types will instanciate this\n class in addition of \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, and leave the responsibility of failure to the caller.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Indexed",
        "fct-type": "class",
        "title": "Indexed"
      },
      "index": {
        "description": "Class of indexed types The collection is dense there is no way to remove an element nor for lookup to return not found In practice however most shallow collection types will instanciate this class in addition of Map and leave the responsibility of failure to the caller",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Indexed",
        "normalized": "",
        "package": "collections-api",
        "partial": "Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:KeysView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eView\u003c/a\u003e to the keys of a dictionnary\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Collections.html#KeysView",
        "fct-type": "newtype",
        "title": "KeysView"
      },
      "index": {
        "description": "View to the keys of dictionnary",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "KeysView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Keys View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eClass of map-like types. (aka. for sparse associative types).\n\u003c/p\u003e\u003cp\u003eIn opposition of Indexed, Map supports unexisting value for some indices.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Map",
        "fct-type": "class",
        "title": "Map"
      },
      "index": {
        "description": "Class of map-like types aka for sparse associative types In opposition of Indexed Map supports unexisting value for some indices",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Map",
        "normalized": "",
        "package": "collections-api",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Sequence",
      "description": {
        "fct-descr": "\u003cp\u003eClass of sequential-access types. \n In addition of the \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e services, it provides deconstruction and concatenation.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Sequence",
        "fct-type": "class",
        "title": "Sequence"
      },
      "index": {
        "description": "Class of sequential-access types In addition of the Collection services it provides deconstruction and concatenation",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Sequence",
        "normalized": "",
        "package": "collections-api",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eClass for set-like collection types. A set is really a map \n with no value associated to the keys,\n so Set just states so.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Set",
        "fct-type": "class",
        "title": "Set"
      },
      "index": {
        "description": "Class for set-like collection types set is really map with no value associated to the keys so Set just states so",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Set",
        "normalized": "",
        "package": "collections-api",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:SortingCollection",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#SortingCollection",
        "fct-type": "class",
        "title": "SortingCollection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "SortingCollection",
        "normalized": "",
        "package": "collections-api",
        "partial": "Sorting Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#t:Unfoldable",
      "description": {
        "fct-descr": "\u003cp\u003eClass of collection with unobservable elements. It is the dual of the \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "class",
        "fct-source": "src/Data-Collections.html#Unfoldable",
        "fct-type": "class",
        "title": "Unfoldable"
      },
      "index": {
        "description": "Class of collection with unobservable elements It is the dual of the Foldable class",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "Unfoldable",
        "normalized": "",
        "package": "collections-api",
        "partial": "Unfoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e: add an element to the right end of a sequence.\n Mnemonic: a triangle with the single element at the pointy end. \n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e i -\u003e c",
        "fct-source": "src/Data-Collections.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "Infix version of snoc add an element to the right end of sequence Mnemonic triangle with the single element at the pointy end",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(|\u003e) |\u003e",
        "normalized": "a-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ei-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e, with arguments swapped.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e k -\u003e v",
        "fct-source": "src/Data-Collections.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Infix version of index with arguments swapped",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(!) !",
        "normalized": "a-\u003eb-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-47--47-",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a collection identical to the first argument except that it has\n been updated by the associations in the right argument.\n For example, if \u003ccode\u003em\u003c/code\u003e is a 1-origin, \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en\u003c/code\u003e matrix, then\n\u003c/p\u003e\u003cpre\u003e m//[((i,i), 0) | i \u003c- [1..n]]\n\u003c/pre\u003e\u003cp\u003eis the same matrix, except with the diagonal zeroed.    \n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e l -\u003e c",
        "fct-source": "src/Data-Collections.html#%2F%2F",
        "fct-type": "method",
        "title": "(//)"
      },
      "index": {
        "description": "Constructs collection identical to the first argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(//) //",
        "normalized": "a-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003el-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e: add an element to the left end of a sequence.\n Mnemonic: a triangle with the single element at the pointy end.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "i -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "Infix version of cons add an element to the left end of sequence Mnemonic triangle with the single element at the pointy end",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(\u003c|) \u003c|",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "i-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix verion of \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e. Concatenate two sequences.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Infix verion of append Concatenate two sequences",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix version of \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e. Difference of two (key) sets.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "Infix version of difference Difference of two key sets",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "(\\\\) \\\\",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:ElemsView",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "ElemsView",
        "fct-source": "src/Data-Collections.html#ElemsView",
        "fct-type": "function",
        "title": "ElemsView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "ElemsView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Elems View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:KeysView",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "KeysView",
        "fct-source": "src/Data-Collections.html#KeysView",
        "fct-type": "function",
        "title": "KeysView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "KeysView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Keys View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes an array and an association list and accumulates\n pairs from the list into the array with the accumulating function \u003ccode\u003ef\u003c/code\u003e.\n Thus \u003ccode\u003eaccumArray\u003c/code\u003e can be defined using \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(v -\u003e v' -\u003e v) -\u003e c -\u003e l -\u003e c",
        "fct-source": "src/Data-Collections.html#accum",
        "fct-type": "method",
        "title": "accum"
      },
      "index": {
        "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "accum",
        "normalized": "(a-\u003eb-\u003ea)-\u003ec-\u003ed-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "(v-\u003ev'-\u003ev)-\u003ec-\u003el-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eadjust f k c\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to element associated to \u003ccode\u003ek\u003c/code\u003e and returns the resulting collection.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(v -\u003e v) -\u003e k -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#adjust",
        "fct-type": "method",
        "title": "adjust"
      },
      "index": {
        "description": "adjust applies to element associated to and returns the resulting collection",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003ec-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "(v-\u003ev)-\u003ek-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003eChange the value associated to a given key. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e represents no associated value.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#alter",
        "fct-type": "method",
        "title": "alter"
      },
      "index": {
        "description": "Change the value associated to given key Nothing represents no associated value",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ec-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two sequences.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Concatenate two sequences",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "append",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:array",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an array with the specified bounds and containing values\n for given indices within these bounds.\n\u003c/p\u003e\u003cp\u003eThe array is undefined (i.e. bottom) if any index in the list is\n out of bounds.  The Haskell 98 Report further specifies that if any\n two associations in the list have the same index, the value at that\n index is undefined (i.e. bottom).  However in GHC's implementation,\n the value at such an index is the value part of the last association\n with that index in the list.\n\u003c/p\u003e\u003cp\u003eBecause the indices must be checked for these errors, \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e is\n strict in the bounds argument and in the indices of the association\n list, but nonstrict in the values.  Thus, recurrences such as the\n following are possible:\n\u003c/p\u003e\u003cpre\u003e a = array (1,100) ((1,1) : [(i, i * a!(i-1)) | i \u003c- [2..100]])\n\u003c/pre\u003e\u003cp\u003eNot every index within the bounds of the array need appear in the\n association list, but the values associated with indices that do not\n appear will be undefined (i.e. bottom).\n\u003c/p\u003e\u003cp\u003eIf, in any dimension, the lower bound is greater than the upper bound,\n then the array is legal, but empty.  Indexing an empty array always\n gives an array-bounds error, but \u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e still yields the bounds\n with which the array was constructed.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(k, k) -\u003e l -\u003e c",
        "fct-source": "src/Data-Collections.html#array",
        "fct-type": "method",
        "title": "array"
      },
      "index": {
        "description": "Construct an array with the specified bounds and containing values for given indices within these bounds The array is undefined i.e bottom if any index in the list is out of bounds The Haskell Report further specifies that if any two associations in the list have the same index the value at that index is undefined i.e bottom However in GHC implementation the value at such an index is the value part of the last association with that index in the list Because the indices must be checked for these errors array is strict in the bounds argument and in the indices of the association list but nonstrict in the values Thus recurrences such as the following are possible array i-1 Not every index within the bounds of the array need appear in the association list but the values associated with indices that do not appear will be undefined i.e bottom If in any dimension the lower bound is greater than the upper bound then the array is legal but empty Indexing an empty array always gives an array-bounds error but bounds still yields the bounds with which the array was constructed",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "array",
        "normalized": "(a,a)-\u003eb-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "(k,k)-\u003el-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:back",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyse the right end of a sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e Maybe (c, a)",
        "fct-source": "src/Data-Collections.html#back",
        "fct-type": "method",
        "title": "back"
      },
      "index": {
        "description": "Analyse the right end of sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "back",
        "normalized": "a-\u003eMaybe(a,b)",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003eMaybe(c,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:bounds",
      "description": {
        "fct-descr": "\u003cp\u003eif \u003ccode\u003e(l,r) = bounds c\u003c/code\u003e, then \u003ccode\u003einDomain k c \u003ca\u003e==\u003c/a\u003e l \u003c= k \u003c= r\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e (k, k)",
        "fct-source": "src/Data-Collections.html#bounds",
        "fct-type": "method",
        "title": "bounds"
      },
      "index": {
        "description": "if bounds then inDomain",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "bounds",
        "normalized": "a-\u003e(b,b)",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003e(k,k)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eThe concatenation of all the elements of a container of sequences.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "t -\u003e s",
        "fct-source": "src/Data-Collections.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "The concatenation of all the elements of container of sequences",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "concat",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "t-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all the elements of a container and concatenate\n the resulting sequences.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e s) -\u003e t -\u003e s",
        "fct-source": "src/Data-Collections.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over all the elements of container and concatenate the resulting sequences",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "concatMap",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "collections-api",
        "partial": "Map",
        "signature": "(a-\u003es)-\u003et-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an element to the left end of a sequence.    \n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "a -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#cons",
        "fct-type": "method",
        "title": "cons"
      },
      "index": {
        "description": "Add an element to the left end of sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "a-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a key from the keySet (and therefore the associated value in the Map).\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Remove key from the keySet and therefore the associated value in the Map",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "delete",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "k-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eDifference of two keySets.\n Difference is to be read infix: \u003ccode\u003ea \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e returns a set containing the \n elements of \u003ccode\u003ea\u003c/code\u003e that are also absent from \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#difference",
        "fct-type": "method",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two keySets Difference is to be read infix difference returns set containing the elements of that are also absent from",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "difference",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003eDifference with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e Maybe a) -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#differenceWith",
        "fct-type": "method",
        "title": "differenceWith"
      },
      "index": {
        "description": "Difference with combining function",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "differenceWith",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eb-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "With",
        "signature": "(a-\u003ea-\u003eMaybe a)-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:differenceWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e, but with a more general type.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e Maybe c) -\u003e m a -\u003e m b -\u003e m c",
        "fct-source": "src/Data-Collections.html#differenceWith%27",
        "fct-type": "function",
        "title": "differenceWith'"
      },
      "index": {
        "description": "Same as differenceWith but with more general type",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "differenceWith'",
        "normalized": "(a-\u003eb-\u003eMaybe c)-\u003ed a-\u003ed b-\u003ed c",
        "package": "collections-api",
        "partial": "With'",
        "signature": "(a-\u003eb-\u003eMaybe c)-\u003em a-\u003em b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eElements of a sequence after the first \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "Int -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#drop",
        "fct-type": "method",
        "title": "drop"
      },
      "index": {
        "description": "Elements of sequence after the first",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "drop",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "Int-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty collection.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c",
        "fct-source": "src/Data-Collections.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "The empty collection",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "empty",
        "normalized": "",
        "package": "collections-api",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efilter f c\u003c/code\u003e returns the collection of those elements that satisfy the predicate \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e Bool) -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#filter",
        "fct-type": "method",
        "title": "filter"
      },
      "index": {
        "description": "filter returns the collection of those elements that satisfy the predicate",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:foldGroups",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, with a combining function.\n \u003ccode\u003efoldGroups f a l = let mkGroup g = (fst $ head g, foldr f a (map snd g)) in fromList . map mkGroup . groupBy ((==) \u003ccode\u003eon\u003c/code\u003e fst)) . toList\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e l -\u003e c",
        "fct-source": "src/Data-Collections.html#foldGroups",
        "fct-type": "method",
        "title": "foldGroups"
      },
      "index": {
        "description": "Convert Foldable to Map with combining function foldGroups let mkGroup fst head foldr map snd in fromList map mkGroup groupBy on fst toList",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "foldGroups",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003ed",
        "package": "collections-api",
        "partial": "Groups",
        "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003el-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromAscFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from a Foldable to a Collection, with the \u003cem\u003eunchecked\u003c/em\u003e precondition that the input is sorted \n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "f -\u003e c'",
        "fct-source": "src/Data-Collections.html#fromAscFoldable",
        "fct-type": "function",
        "title": "fromAscFoldable"
      },
      "index": {
        "description": "Conversion from Foldable to Collection with the unchecked precondition that the input is sorted",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromAscFoldable",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "Asc Foldable",
        "signature": "f-\u003ec'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list into a collection, with the precondition that the input is sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "[a] -\u003e c",
        "fct-source": "src/Data-Collections.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Converts list into collection with the precondition that the input is sorted",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromAscList",
        "normalized": "[a]-\u003eb",
        "package": "collections-api",
        "partial": "Asc List",
        "signature": "[a]-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromElemsView",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "m",
        "fct-source": "src/Data-Collections.html#ElemsView",
        "fct-type": "function",
        "title": "fromElemsView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromElemsView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Elems View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from a Foldable to a Collection.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "f -\u003e c'",
        "fct-source": "src/Data-Collections.html#fromFoldable",
        "fct-type": "function",
        "title": "fromFoldable"
      },
      "index": {
        "description": "Conversion from Foldable to Collection",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromFoldable",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "Foldable",
        "signature": "f-\u003ec'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromFoldableWith",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, with a combining function. \n Note the applications of the combining function: \n \u003ccode\u003efromFoldableWith (+) [(k,x1), (k,x2), ..., (k,xn)] = fromFoldable [(k, xn + (... + (x2 + x1)))]\u003c/code\u003e\n or more generally \u003ccode\u003efromFoldableWith f [(k,x) | x \u003c- l] = fromFoldable [(k,foldl1 (flip f) l)]\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003efoldGroups\u003c/a\u003e\u003c/code\u003e is probably less surprising, so use it.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e l -\u003e c",
        "fct-source": "src/Data-Collections.html#fromFoldableWith",
        "fct-type": "method",
        "title": "fromFoldableWith"
      },
      "index": {
        "description": "Convert Foldable to Map with combining function Note the applications of the combining function fromFoldableWith x1 x2 xn fromFoldable xn x2 x1 or more generally fromFoldableWith fromFoldable foldl1 flip foldGroups is probably less surprising so use it",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromFoldableWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ec",
        "package": "collections-api",
        "partial": "Foldable With",
        "signature": "(a-\u003ea-\u003ea)-\u003el-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromKeysView",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "m",
        "fct-source": "src/Data-Collections.html#KeysView",
        "fct-type": "function",
        "title": "fromKeysView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromKeysView",
        "normalized": "",
        "package": "collections-api",
        "partial": "Keys View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list into a collection.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "[a] -\u003e c",
        "fct-source": "src/Data-Collections.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Converts list into collection",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromList",
        "normalized": "[a]-\u003eb",
        "package": "collections-api",
        "partial": "List",
        "signature": "[a]-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialized version of fromFoldableWith for lists.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e c",
        "fct-source": "src/Data-Collections.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "Specialized version of fromFoldableWith for lists",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003ec",
        "package": "collections-api",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:front",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyse the left end of a sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e Maybe (a, c)",
        "fct-source": "src/Data-Collections.html#front",
        "fct-type": "method",
        "title": "front"
      },
      "index": {
        "description": "Analyse the left end of sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "front",
        "normalized": "a-\u003eMaybe(b,a)",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003eMaybe(a,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:haddock_candy",
      "description": {
        "fct-descr": "\u003cp\u003eDummy method for haddock to accept the class.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e k",
        "fct-source": "src/Data-Collections.html#haddock_candy",
        "fct-type": "method",
        "title": "haddock_candy"
      },
      "index": {
        "description": "Dummy method for haddock to accept the class",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "haddock_candy",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:head",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "s -\u003e a",
        "fct-source": "src/Data-Collections.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "head",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "s-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:inDomain",
      "description": {
        "fct-descr": "\u003cp\u003eif \u003ccode\u003einDomain k c\u003c/code\u003e, then \u003ccode\u003eindex c k\u003c/code\u003e is guaranteed not to fail.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#inDomain",
        "fct-type": "method",
        "title": "inDomain"
      },
      "index": {
        "description": "if inDomain then index is guaranteed not to fail",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "inDomain",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "Domain",
        "signature": "k-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eindex c k\u003c/code\u003e returns element associated to \u003ccode\u003ek\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e v",
        "fct-source": "src/Data-Collections.html#index",
        "fct-type": "method",
        "title": "index"
      },
      "index": {
        "description": "index returns element associated to",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "index",
        "normalized": "a-\u003eb-\u003ec",
        "package": "collections-api",
        "partial": "",
        "signature": "k-\u003ec-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e'natural' insertion of an element into a collection.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "i -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "natural insertion of an element into collection",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "i-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:insertMany",
      "description": {
        "fct-descr": "\u003cp\u003eInsert all the elements of a foldable.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c' -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#insertMany",
        "fct-type": "method",
        "title": "insertMany"
      },
      "index": {
        "description": "Insert all the elements of foldable",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "insertMany",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "Many",
        "signature": "c'-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:insertManySorted",
      "description": {
        "fct-descr": "\u003cp\u003eSame as insertMany, but with the unchecked precondition that the input \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e is sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c' -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#insertManySorted",
        "fct-type": "method",
        "title": "insertManySorted"
      },
      "index": {
        "description": "Same as insertMany but with the unchecked precondition that the input Foldable is sorted",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "insertManySorted",
        "normalized": "a-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "Many Sorted",
        "signature": "c'-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eInsert with a combining function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003einsertWith f key value m\u003c/code\u003e \n will insert the pair \u003ccode\u003e(key, value)\u003c/code\u003e into \u003ccode\u003em\u003c/code\u003e if \u003ccode\u003ekey\u003c/code\u003e does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#insertWith",
        "fct-type": "method",
        "title": "insertWith"
      },
      "index": {
        "description": "Insert with combining function insertWith key value will insert the pair key value into if key does not exist in the map If the key does exist the function will insert the pair key new value old value",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec-\u003ec",
        "package": "collections-api",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eIntersection of two keySets.\n\u003c/p\u003e\u003cp\u003eWhen duplicates are encountered, the keys may come from any of the two input sets.\n Values come from the map given as first arguement.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#intersection",
        "fct-type": "method",
        "title": "intersection"
      },
      "index": {
        "description": "Intersection of two keySets When duplicates are encountered the keys may come from any of the two input sets Values come from the map given as first arguement",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "intersection",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003eIntersection with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#intersectionWith",
        "fct-type": "method",
        "title": "intersectionWith"
      },
      "index": {
        "description": "Intersection with combining function",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:intersectionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but with a more general type.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e m b -\u003e m c",
        "fct-source": "src/Data-Collections.html#intersectionWith%27",
        "fct-type": "function",
        "title": "intersectionWith'"
      },
      "index": {
        "description": "Same as intersectionWith but with more general type",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "intersectionWith'",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "collections-api",
        "partial": "With'",
        "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003em b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:isPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPrefix\u003c/a\u003e\u003c/code\u003e function takes two seqences and returns True iff \n the first is a prefix of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#isPrefix",
        "fct-type": "method",
        "title": "isPrefix"
      },
      "index": {
        "description": "The isPrefix function takes two seqences and returns True iff the first is prefix of the second",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "isPrefix",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "collections-api",
        "partial": "Prefix",
        "signature": "c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:isProperSubmapBy",
      "description": {
        "fct-descr": "\u003cp\u003eisProperSubmapBy\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#isProperSubmapBy",
        "fct-type": "method",
        "title": "isProperSubmapBy"
      },
      "index": {
        "description": "isProperSubmapBy",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "isProperSubmapBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "Proper Submap By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ec-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:isProperSubset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es1 \u003ccode\u003e\u003ca\u003eisProperSubset\u003c/a\u003e\u003c/code\u003e s2\u003c/code\u003e returns True iff. \u003ccode\u003es1 \u003ccode\u003e\u003ca\u003eisProperSubset\u003c/a\u003e\u003c/code\u003e s2\u003c/code\u003e and \u003ccode\u003es1 /= s2\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#isProperSubset",
        "fct-type": "method",
        "title": "isProperSubset"
      },
      "index": {
        "description": "s1 isProperSubset s2 returns True iff s1 isProperSubset s2 and s1 s2",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "isProperSubset",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "collections-api",
        "partial": "Proper Subset",
        "signature": "c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:isSubmapBy",
      "description": {
        "fct-descr": "\u003cp\u003eisSubmapBy\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#isSubmapBy",
        "fct-type": "method",
        "title": "isSubmapBy"
      },
      "index": {
        "description": "isSubmapBy",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "isSubmapBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "Submap By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ec-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:isSubset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003es1 \u003ccode\u003e\u003ca\u003eisSubset\u003c/a\u003e\u003c/code\u003e s2\u003c/code\u003e returns True iff. the keys in s1 form a subset of the keys in s2.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#isSubset",
        "fct-type": "method",
        "title": "isSubset"
      },
      "index": {
        "description": "s1 isSubset s2 returns True iff the keys in s1 form subset of the keys in s2",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "isSubset",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "collections-api",
        "partial": "Subset",
        "signature": "c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value at a given key.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e Maybe a",
        "fct-source": "src/Data-Collections.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value at given key",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "lookup",
        "normalized": "a-\u003eb-\u003eMaybe c",
        "package": "collections-api",
        "partial": "",
        "signature": "k-\u003ec-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:lookupWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003elookupWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the key is not in the map.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "a -\u003e k -\u003e c -\u003e a",
        "fct-source": "src/Data-Collections.html#lookupWithDefault",
        "fct-type": "function",
        "title": "lookupWithDefault"
      },
      "index": {
        "description": "The expression lookupWithDefault def map returns the value at key or returns def when the key is not in the map",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "lookupWithDefault",
        "normalized": "a-\u003eb-\u003ec-\u003ea",
        "package": "collections-api",
        "partial": "With Default",
        "signature": "a-\u003ek-\u003ec-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(k -\u003e a -\u003e a) -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#mapWithKey",
        "fct-type": "method",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Apply function over all values in the map",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ec-\u003ec",
        "package": "collections-api",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea)-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:mapWithKey-39-",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e m a -\u003e m b",
        "fct-source": "src/Data-Collections.html#mapWithKey%27",
        "fct-type": "function",
        "title": "mapWithKey'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "mapWithKey'",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed b-\u003ed c",
        "package": "collections-api",
        "partial": "With Key'",
        "signature": "(k-\u003ea-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether an key is member of the keySet.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#member",
        "fct-type": "method",
        "title": "member"
      },
      "index": {
        "description": "Tells whether an key is member of the keySet",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "member",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "",
        "signature": "k-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:minView",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e Maybe (o, c)",
        "fct-source": "src/Data-Collections.html#minView",
        "fct-type": "method",
        "title": "minView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "minView",
        "normalized": "a-\u003eMaybe(b,a)",
        "package": "collections-api",
        "partial": "View",
        "signature": "c-\u003eMaybe(o,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether a key is not a member of the keySet.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "k -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Collections.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "Tells whether key is not member of the keySet",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "notMember",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "collections-api",
        "partial": "Member",
        "signature": "k-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eReverse a sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c",
        "fct-source": "src/Data-Collections.html#reverse",
        "fct-type": "method",
        "title": "reverse"
      },
      "index": {
        "description": "Reverse sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "reverse",
        "normalized": "a-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a collection with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "i -\u003e c",
        "fct-source": "src/Data-Collections.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Creates collection with single element",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "singleton",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "i-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an element to the right end of a sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e a -\u003e c",
        "fct-source": "src/Data-Collections.html#snoc",
        "fct-type": "method",
        "title": "snoc"
      },
      "index": {
        "description": "Add an element to the right end of sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "snoc",
        "normalized": "a-\u003eb-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a sequence at a given index.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "Int -\u003e c -\u003e (c, c)",
        "fct-source": "src/Data-Collections.html#splitAt",
        "fct-type": "method",
        "title": "splitAt"
      },
      "index": {
        "description": "Split sequence at given index",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "splitAt",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "collections-api",
        "partial": "At",
        "signature": "Int-\u003ec-\u003e(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:tail",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "s -\u003e s",
        "fct-source": "src/Data-Collections.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "tail",
        "normalized": "a-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "s-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eThe first \u003ccode\u003ei\u003c/code\u003e elements of a sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "Int -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#take",
        "fct-type": "method",
        "title": "take"
      },
      "index": {
        "description": "The first elements of sequence",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "take",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "Int-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of two keySets.\n When duplicates are encountered, the keys may come from any of the two input sets.\n Values come from the map given as first arguement.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "Union of two keySets When duplicates are encountered the keys may come from any of the two input sets Values come from the map given as first arguement",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "union",
        "normalized": "a-\u003ea-\u003ea",
        "package": "collections-api",
        "partial": "",
        "signature": "c-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eUnion with a combining function. \n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e c -\u003e c -\u003e c",
        "fct-source": "src/Data-Collections.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "Union with combining function",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003eb-\u003eb",
        "package": "collections-api",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ec-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of many (key) sets.\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "cs -\u003e s",
        "fct-source": "src/Data-Collections.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Union of many key sets",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "unions",
        "normalized": "a-\u003eb",
        "package": "collections-api",
        "partial": "",
        "signature": "cs-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of many (key) sets, with combining function\n\u003c/p\u003e",
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e cs -\u003e s",
        "fct-source": "src/Data-Collections.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "Union of many key sets with combining function",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ec",
        "package": "collections-api",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ecs-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:withElems",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "T (ElemsView m k v) -\u003e T m",
        "fct-source": "src/Data-Collections.html#withElems",
        "fct-type": "function",
        "title": "withElems"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "withElems",
        "normalized": "T(ElemsView a b c)-\u003eT a",
        "package": "collections-api",
        "partial": "Elems",
        "signature": "T(ElemsView m k v)-\u003eT m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/collections-api/docs/Data-Collections.html#v:withKeys",
      "description": {
        "fct-module": "Data.Collections",
        "fct-package": "collections-api",
        "fct-signature": "T (KeysView m k v) -\u003e T m",
        "fct-source": "src/Data-Collections.html#withKeys",
        "fct-type": "function",
        "title": "withKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Collections",
        "module": "Data.Collections",
        "name": "withKeys",
        "normalized": "T(KeysView a b c)-\u003eT a",
        "package": "collections-api",
        "partial": "Keys",
        "signature": "T(KeysView m k v)-\u003eT m"
      }
    }
  }
]