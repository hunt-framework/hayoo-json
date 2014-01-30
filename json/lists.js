[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with lists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "module",
        "fct-source": "src/Data-Lists.html",
        "fct-type": "module",
        "title": "Lists"
      },
      "index": {
        "description": "Functions for dealing with lists",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "Lists",
        "normalized": "",
        "package": "lists",
        "partial": "Lists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:addToAL",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the specified (key, value) pair to the given list, removing any\nexisting pair with the same key already present. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(key, elt)] -\u003e key -\u003e elt -\u003e [(key, elt)]",
        "fct-source": "src/Data-Lists.html#addToAL",
        "fct-type": "function",
        "title": "addToAL"
      },
      "index": {
        "description": "Adds the specified key value pair to the given list removing any existing pair with the same key already present",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "addToAL",
        "normalized": "[(a,b)]-\u003ea-\u003eb-\u003e[(a,b)]",
        "package": "lists",
        "partial": "To AL",
        "signature": "[(key,elt)]-\u003ekey-\u003eelt-\u003e[(key,elt)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:alwaysElemRIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLike elemRIndex, but returns -1 if there is nothing\nfound. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "a -\u003e [a] -\u003e Int",
        "fct-source": "src/Data-Lists.html#alwaysElemRIndex",
        "fct-type": "function",
        "title": "alwaysElemRIndex"
      },
      "index": {
        "description": "Like elemRIndex but returns if there is nothing found",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "alwaysElemRIndex",
        "normalized": "a-\u003e[a]-\u003eInt",
        "package": "lists",
        "partial": "Elem RIndex",
        "signature": "a-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:breakList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.break, but performs the test on the entire remaining\nlist instead of just one element.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-Lists.html#breakList",
        "fct-type": "function",
        "title": "breakList"
      },
      "index": {
        "description": "Similar to Data.List.break but performs the test on the entire remaining list instead of just one element",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "breakList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "lists",
        "partial": "List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:countElem",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a count of the number of times the given element occured in the\ngiven list. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "a -\u003e [a] -\u003e Int",
        "fct-source": "src/Data-Lists.html#countElem",
        "fct-type": "function",
        "title": "countElem"
      },
      "index": {
        "description": "Returns count of the number of times the given element occured in the given list",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "countElem",
        "normalized": "a-\u003e[a]-\u003eInt",
        "package": "lists",
        "partial": "Elem",
        "signature": "a-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:delFromAL",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves all (key, value) pairs from the given list where the key\nmatches the given one. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(key, a)] -\u003e key -\u003e [(key, a)]",
        "fct-source": "src/Data-Lists.html#delFromAL",
        "fct-type": "function",
        "title": "delFromAL"
      },
      "index": {
        "description": "Removes all key value pairs from the given list where the key matches the given one",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "delFromAL",
        "normalized": "[(a,b)]-\u003ea-\u003e[(a,b)]",
        "package": "lists",
        "partial": "From AL",
        "signature": "[(key,a)]-\u003ekey-\u003e[(key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:dropWhileList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.dropWhile, drops elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#dropWhileList",
        "fct-type": "function",
        "title": "dropWhileList"
      },
      "index": {
        "description": "Similar to Data.List.dropWhile drops elements while the func is true The function is given the remainder of the list to examine",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "dropWhileList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "lists",
        "partial": "While List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:elemRIndex",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the rightmost index of the given element in the\ngiven list. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "a -\u003e [a] -\u003e Maybe Int",
        "fct-source": "src/Data-Lists.html#elemRIndex",
        "fct-type": "function",
        "title": "elemRIndex"
      },
      "index": {
        "description": "Returns the rightmost index of the given element in the given list",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "elemRIndex",
        "normalized": "a-\u003e[a]-\u003eMaybe Int",
        "package": "lists",
        "partial": "RIndex",
        "signature": "a-\u003e[a]-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:firstOr",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the first item of a list or something else.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "a -\u003e [a] -\u003e a",
        "fct-source": "src/Data-Lists.html#firstOr",
        "fct-type": "function",
        "title": "firstOr"
      },
      "index": {
        "description": "Return the first item of list or something else",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "firstOr",
        "normalized": "a-\u003e[a]-\u003ea",
        "package": "lists",
        "partial": "Or",
        "signature": "a-\u003e[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:flipAL",
      "description": {
        "fct-descr": "\u003cp\u003eFlips an association list.  Converts (key1, val), (key2, val) pairs\nto (val, [key1, key2]). \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(key, val)] -\u003e [(val, [key])]",
        "fct-source": "src/Data-Lists.html#flipAL",
        "fct-type": "function",
        "title": "flipAL"
      },
      "index": {
        "description": "Flips an association list Converts key1 val key2 val pairs to val key1 key2",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "flipAL",
        "normalized": "[(a,b)]-\u003e[(b,[a])]",
        "package": "lists",
        "partial": "AL",
        "signature": "[(key,val)]-\u003e[(val,[key])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:for",
      "description": {
        "fct-descr": "\u003cp\u003eOpposite of map.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e (a -\u003e b) -\u003e [b]",
        "fct-source": "src/Data-Lists.html#for",
        "fct-type": "function",
        "title": "for"
      },
      "index": {
        "description": "Opposite of map",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "for",
        "normalized": "[a]-\u003e(a-\u003eb)-\u003e[b]",
        "package": "lists",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eb)-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:genericJoin",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e, but works with a list of anything showable, converting\nit to a String.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e genericJoin \", \" [1, 2, 3, 4] -\u003e \"1, 2, 3, 4\"\n genericJoin \"|\" [\"foo\", \"bar\", \"baz\"] -\u003e \"\\\"foo\\\"|\\\"bar\\\"|\\\"baz\\\"\"\n\u003c/pre\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "String -\u003e [a] -\u003e String",
        "fct-source": "src/Data-Lists.html#genericJoin",
        "fct-type": "function",
        "title": "genericJoin"
      },
      "index": {
        "description": "Like intercalate but works with list of anything showable converting it to String Examples genericJoin genericJoin foo bar baz foo bar baz",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "genericJoin",
        "normalized": "String-\u003e[a]-\u003eString",
        "package": "lists",
        "partial": "Join",
        "signature": "String-\u003e[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:hasAny",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the given list contains any of the elements in the search\nlist. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a]-\u003e [a]-\u003e Bool",
        "fct-type": "function",
        "title": "hasAny"
      },
      "index": {
        "description": "Returns true if the given list contains any of the elements in the search list",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "hasAny",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "lists",
        "partial": "Any",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:hasKeyAL",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates whether or not the given key is in the AL. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "a -\u003e [(a, b)] -\u003e Bool",
        "fct-source": "src/Data-Lists.html#hasKeyAL",
        "fct-type": "function",
        "title": "hasKeyAL"
      },
      "index": {
        "description": "Indicates whether or not the given key is in the AL",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "hasKeyAL",
        "normalized": "a-\u003e[(a,b)]-\u003eBool",
        "package": "lists",
        "partial": "Key AL",
        "signature": "a-\u003e[(a,b)]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:keysAL",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the keys that comprise the (key, value) pairs of the given AL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap fst\n\u003c/pre\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(key, a)] -\u003e [key]",
        "fct-source": "src/Data-Lists.html#keysAL",
        "fct-type": "function",
        "title": "keysAL"
      },
      "index": {
        "description": "Returns the keys that comprise the key value pairs of the given AL Same as map fst",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "keysAL",
        "normalized": "[(a,b)]-\u003e[a]",
        "package": "lists",
        "partial": "AL",
        "signature": "[(key,a)]-\u003e[key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:lastToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe get the last element in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Data-Lists.html#lastToMaybe",
        "fct-type": "function",
        "title": "lastToMaybe"
      },
      "index": {
        "description": "Maybe get the last element in the list",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "lastToMaybe",
        "normalized": "[a]-\u003eMaybe a",
        "package": "lists",
        "partial": "To Maybe",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a list is non-null, pass it to a function, otherwise use the\n default.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "b -\u003e ([a] -\u003e b) -\u003e [a] -\u003e b",
        "fct-source": "src/Data-Lists.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "When list is non-null pass it to function otherwise use the default",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "list",
        "normalized": "a-\u003e([b]-\u003ea)-\u003e[b]-\u003ea",
        "package": "lists",
        "partial": "",
        "signature": "b-\u003e([a]-\u003eb)-\u003e[a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:maxList",
      "description": {
        "fct-descr": "\u003cp\u003eGet the maximum of a list or return zero.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[t] -\u003e t",
        "fct-source": "src/Data-Lists.html#maxList",
        "fct-type": "function",
        "title": "maxList"
      },
      "index": {
        "description": "Get the maximum of list or return zero",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "maxList",
        "normalized": "[a]-\u003ea",
        "package": "lists",
        "partial": "List",
        "signature": "[t]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sorted lists into a single, sorted whole.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e merge [1,3,5] [1,2,4,6] -\u003e [1,1,2,3,4,5,6]\n\u003c/pre\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_merge xs ys =\n    merge (sort xs) (sort ys) == sort (xs ++ ys)\n          where types = xs :: [Int]\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge two sorted lists into single sorted whole Example merge QuickCheck test property prop merge xs ys merge sort xs sort ys sort xs ys where types xs Int",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "merge",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "lists",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two sorted lists using into a single, sorted whole,\nallowing the programmer to specify the comparison function.\n\u003c/p\u003e\u003cp\u003eQuickCheck test property:\n\u003c/p\u003e\u003cp\u003eprop_mergeBy xs ys =\n    mergeBy cmp (sortBy cmp xs) (sortBy cmp ys) == sortBy cmp (xs ++ ys)\n          where types = xs :: [ (Int, Int) ]\n                cmp (x1,_) (x2,_) = compare x1 x2\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "Merge two sorted lists using into single sorted whole allowing the programmer to specify the comparison function QuickCheck test property prop mergeBy xs ys mergeBy cmp sortBy cmp xs sortBy cmp ys sortBy cmp xs ys where types xs Int Int cmp x1 x2 compare x1 x2",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "lists",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:powerslice",
      "description": {
        "fct-descr": "\u003cp\u003eEssentially a powerset but retaining contiguously ordererd subsets.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-Lists.html#powerslice",
        "fct-type": "function",
        "title": "powerslice"
      },
      "index": {
        "description": "Essentially powerset but retaining contiguously ordererd subsets",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "powerslice",
        "normalized": "[a]-\u003e[[a]]",
        "package": "lists",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list and a replacement list, replaces each occurance of the search\nlist with the replacement list in the operation list.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003ereplace \",\" \".\" \"127,0,0,1\" -\u003e \"127.0.0.1\"\n\u003c/pre\u003e\u003cp\u003eThis could logically be thought of as:\n\u003c/p\u003e\u003cpre\u003ereplace old new l = join new . split old $ l\n\u003c/pre\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Given list and replacement list replaces each occurance of the search list with the replacement list in the operation list Example replace This could logically be thought of as replace old new join new split old",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "replace",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "lists",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:seqList",
      "description": {
        "fct-descr": "\u003cp\u003eForces the evaluation of the entire list. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#seqList",
        "fct-type": "function",
        "title": "seqList"
      },
      "index": {
        "description": "Forces the evaluation of the entire list",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "seqList",
        "normalized": "[a]-\u003e[a]",
        "package": "lists",
        "partial": "List",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:spanList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.span, but performs the test on the entire remaining\nlist instead of just one element.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003espanList p xs\u003c/code\u003e is the same as \u003ccode\u003e(takeWhileList p xs, dropWhileList p xs)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Data-Lists.html#spanList",
        "fct-type": "function",
        "title": "spanList"
      },
      "index": {
        "description": "Similar to Data.List.span but performs the test on the entire remaining list instead of just one element spanList xs is the same as takeWhileList xs dropWhileList xs",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "spanList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "lists",
        "partial": "List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:strFromAL",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an association list to a string.  The string will have\none pair per line, with the key and value both represented as a Haskell string.\n\u003c/p\u003e\u003cp\u003eThis function is designed to work with [(String, String)] association lists,\nbut may work with other types as well. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(a, b)] -\u003e String",
        "fct-source": "src/Data-Lists.html#strFromAL",
        "fct-type": "function",
        "title": "strFromAL"
      },
      "index": {
        "description": "Converts an association list to string The string will have one pair per line with the key and value both represented as Haskell string This function is designed to work with String String association lists but may work with other types as well",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "strFromAL",
        "normalized": "[(a,b)]-\u003eString",
        "package": "lists",
        "partial": "From AL",
        "signature": "[(a,b)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:strToAL",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this function reads a string and outputs the\nappropriate association list.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e, this is designed to work with [(String, String)] association\nlists but may also work with other objects with simple representations.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "String -\u003e [(a, b)]",
        "fct-source": "src/Data-Lists.html#strToAL",
        "fct-type": "function",
        "title": "strToAL"
      },
      "index": {
        "description": "The inverse of strFromAL this function reads string and outputs the appropriate association list Like strFromAL this is designed to work with String String association lists but may also work with other objects with simple representations",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "strToAL",
        "normalized": "String-\u003e[(a,b)]",
        "package": "lists",
        "partial": "To AL",
        "signature": "String-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:takeWhileList",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to Data.List.takeWhile, takes elements while the func is true.\nThe function is given the remainder of the list to examine. \n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#takeWhileList",
        "fct-type": "function",
        "title": "takeWhileList"
      },
      "index": {
        "description": "Similar to Data.List.takeWhile takes elements while the func is true The function is given the remainder of the list to examine",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "takeWhileList",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "lists",
        "partial": "While List",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:unionOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet the union of the given lists.\n\u003c/p\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Data-Lists.html#unionOf",
        "fct-type": "function",
        "title": "unionOf"
      },
      "index": {
        "description": "Get the union of the given lists",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "unionOf",
        "normalized": "[[a]]-\u003e[a]",
        "package": "lists",
        "partial": "Of",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lists/docs/Data-Lists.html#v:valuesAL",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the values the comprise the (key, value) pairs of the given\nAL.\n\u003c/p\u003e\u003cp\u003eSame as:\n\u003c/p\u003e\u003cpre\u003emap snd\n\u003c/pre\u003e",
        "fct-module": "Data.Lists",
        "fct-package": "lists",
        "fct-signature": "[(a, value)] -\u003e [value]",
        "fct-source": "src/Data-Lists.html#valuesAL",
        "fct-type": "function",
        "title": "valuesAL"
      },
      "index": {
        "description": "Returns the values the comprise the key value pairs of the given AL Same as map snd",
        "hierarchy": "Data Lists",
        "module": "Data.Lists",
        "name": "valuesAL",
        "normalized": "[(a,b)]-\u003e[b]",
        "package": "lists",
        "partial": "AL",
        "signature": "[(a,value)]-\u003e[value]"
      }
    }
  }
]