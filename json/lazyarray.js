[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of monolithic lazy array. If you want to know\n what an monolithic lazy array is good for, you can read for example\n the paper \"Efficient Graph Algorithms Using Lazy Monolithic Arrays\": \n \u003ca\u003ehttp://citeseer.ist.psu.edu/95126.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module implements lowlevel lazy array somewhat similar to \u003ccode\u003eData.LazyArray.lArrayFirst\u003c/code\u003e,\n so read its description first. This implementation\n uses no temporary buffer (at least in optimised GHC build) and\n for index i it returns not the first associated element, but\n the first 'nonzero' element (or 'zero' if there are no elements).\n Don't forget to import some kind of arrays when using this module.\n\u003c/p\u003e\u003cp\u003eBenchmark of various implementations of DFS can be found in the \n \u003ca\u003eData.LazyArray\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "module",
        "fct-source": "src/Data-LazyArray-Lowlevel.html",
        "fct-type": "module",
        "title": "Lowlevel"
      },
      "index": {
        "description": "This is an implementation of monolithic lazy array If you want to know what an monolithic lazy array is good for you can read for example the paper Efficient Graph Algorithms Using Lazy Monolithic Arrays http citeseer.ist.psu.edu html This module implements lowlevel lazy array somewhat similar to Data.LazyArray.lArrayFirst so read its description first This implementation uses no temporary buffer at least in optimised GHC build and for index it returns not the first associated element but the first nonzero element or zero if there are no elements Don forget to import some kind of arrays when using this module Benchmark of various implementations of DFS can be found in the Data.LazyArray module",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "Lowlevel",
        "normalized": "",
        "package": "lazyarray",
        "partial": "Lowlevel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#t:LArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe lazyarray in construction is not classic \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e, but has the same parameters.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "data",
        "fct-source": "src/Data-LazyArray-Lowlevel.html#LArray",
        "fct-type": "data",
        "title": "LArray"
      },
      "index": {
        "description": "The lazyarray in construction is not classic Array but has the same parameters",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "LArray",
        "normalized": "",
        "package": "lazyarray",
        "partial": "LArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#v:laAt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an element on the i-th position of the lazy array. If it was already\n found, just return it. If it was not found yet, consume the list of associations\n until it is empty or the 'nonzero' association for i is found.\n If no 'nonzero' association is found, returns 'zero'.\n All visited elements from the association list are processed and not visited any more.\n\u003c/p\u003e\u003cp\u003eWhen not concerned about the laziness and time complexity,\n\u003c/p\u003e\u003cpre\u003e(laCreate zero bnds assoc) `laAt` i = zero `fromMaybe` (find (\\(i',e)-\u003ei'==i && e/=zero) assoc)\u003c/pre\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "LArray i e -\u003e i -\u003e e",
        "fct-source": "src/Data-LazyArray-Lowlevel.html#laAt",
        "fct-type": "function",
        "title": "laAt"
      },
      "index": {
        "description": "Returns an element on the i-th position of the lazy array If it was already found just return it If it was not found yet consume the list of associations until it is empty or the nonzero association for is found If no nonzero association is found returns zero All visited elements from the association list are processed and not visited any more When not concerned about the laziness and time complexity laCreate zero bnds assoc laAt zero fromMaybe find zero assoc",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "laAt",
        "normalized": "LArray a b-\u003ea-\u003eb",
        "package": "lazyarray",
        "partial": "At",
        "signature": "LArray i e-\u003ei-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#v:laCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an lazy array, using first argument as 'zero' element for this array.\n The list of associations is left intact until needed by \u003ccode\u003e\u003ca\u003elaAt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elaFreeze\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "e-\u003e (i, i)-\u003e [(i, e)]-\u003e LArray i e",
        "fct-type": "function",
        "title": "laCreate"
      },
      "index": {
        "description": "Creates an lazy array using first argument as zero element for this array The list of associations is left intact until needed by laAt or laFreeze",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "laCreate",
        "normalized": "a-\u003e(b,b)-\u003e[(b,a)]-\u003eLArray b a",
        "package": "lazyarray",
        "partial": "Create",
        "signature": "e-\u003e(i,i)-\u003e[(i,e)]-\u003eLArray i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#v:laFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eConvert lazy array to \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e. Because the result is not lazy,\n this function \u003cem\u003eforces the evaluation of the whole association list\u003c/em\u003e before returning,\n so it should be used when the lazy array is fully contructed (ie. the association\n list is ended by []).\n\u003c/p\u003e\u003cp\u003eOnce again - this function is really \"non-lazy\", as it traverses the whole associtation\n list, no matter which elements from the resulting \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e will be needed. Even if\n only 1-st element is needed and even if it could already be found, the whole rest\n of the association list is processed. (Small heuristic is implemented - when all\n members of resulting Array are 'nonzero', the traversal of the association list is stopped.)\n\u003c/p\u003e\u003cp\u003eThis function uses \u003ccode\u003eData.Array.MArray.unsafeFreeze\u003c/code\u003e to convert \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n It is used after the whole association list is processed, so it is safe, and\n when using optimised GHC build, it imposes no time or space overhead.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "LArray i e -\u003e Array i e",
        "fct-source": "src/Data-LazyArray-Lowlevel.html#laFreeze",
        "fct-type": "function",
        "title": "laFreeze"
      },
      "index": {
        "description": "Convert lazy array to Array Because the result is not lazy this function forces the evaluation of the whole association list before returning so it should be used when the lazy array is fully contructed ie the association list is ended by Once again this function is really non-lazy as it traverses the whole associtation list no matter which elements from the resulting Array will be needed Even if only st element is needed and even if it could already be found the whole rest of the association list is processed Small heuristic is implemented when all members of resulting Array are nonzero the traversal of the association list is stopped This function uses Data.Array.MArray.unsafeFreeze to convert IOArray to Array It is used after the whole association list is processed so it is safe and when using optimised GHC build it imposes no time or space overhead",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "laFreeze",
        "normalized": "LArray a b-\u003eArray a b",
        "package": "lazyarray",
        "partial": "Freeze",
        "signature": "LArray i e-\u003eArray i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray-Lowlevel.html#v:mlaCreate",
      "description": {
        "fct-descr": "\u003cp\u003eThis method creates lazy array using \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for 'zero' element.\n It is just a simple wrapper of \u003ccode\u003e\u003ca\u003elaCreate\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003emlaCreate bnds assoc = laCreate Nothing bnds (map (\\(i,e)-\u003e(i,Just e)) assoc)\u003c/pre\u003e",
        "fct-module": "Data.LazyArray.Lowlevel",
        "fct-package": "lazyarray",
        "fct-signature": "(i, i) -\u003e [(i, e)] -\u003e LArray i (Maybe e)",
        "fct-source": "src/Data-LazyArray-Lowlevel.html#mlaCreate",
        "fct-type": "function",
        "title": "mlaCreate"
      },
      "index": {
        "description": "This method creates lazy array using Nothing for zero element It is just simple wrapper of laCreate mlaCreate bnds assoc laCreate Nothing bnds map Just assoc",
        "hierarchy": "Data LazyArray Lowlevel",
        "module": "Data.LazyArray.Lowlevel",
        "name": "mlaCreate",
        "normalized": "(a,a)-\u003e[(a,b)]-\u003eLArray a(Maybe b)",
        "package": "lazyarray",
        "partial": "Create",
        "signature": "(i,i)-\u003e[(i,e)]-\u003eLArray i(Maybe e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of monolithic lazy array. If you want to know\n what an monolithic lazy array is good for, you can read for example\n the paper \"Efficient Graph Algorithms Using Lazy Monolithic Arrays\"\n (\u003ca\u003ehttp://citeseer.ist.psu.edu/95126.html\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eModule \u003ca\u003eData.LazyArray\u003c/a\u003e implements the monolithic lazy array using \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e\n with temporary buffer. For implementation without the temporary buffer\n see \u003ca\u003eData.LazyArray.Lowlevel\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eDon't forget to import some kind of arrays when using this module.\n Results of small benchmark and a discussion can be found at the bottom of this page.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LazyArray",
        "fct-package": "lazyarray",
        "fct-signature": "module",
        "fct-source": "src/Data-LazyArray.html",
        "fct-type": "module",
        "title": "LazyArray"
      },
      "index": {
        "description": "This is an implementation of monolithic lazy array If you want to know what an monolithic lazy array is good for you can read for example the paper Efficient Graph Algorithms Using Lazy Monolithic Arrays http citeseer.ist.psu.edu html Module Data.LazyArray implements the monolithic lazy array using Array with temporary buffer For implementation without the temporary buffer see Data.LazyArray.Lowlevel module Don forget to import some kind of arrays when using this module Results of small benchmark and discussion can be found at the bottom of this page",
        "hierarchy": "Data LazyArray",
        "module": "Data.LazyArray",
        "name": "LazyArray",
        "normalized": "",
        "package": "lazyarray",
        "partial": "Lazy Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray.html#v:lArray",
      "description": {
        "fct-descr": "\u003cp\u003eThis function returns an array, which i-th element is a list, that\n contains all values associated with i in the list of associations, in that order.\n In other words, the result of \u003ccode\u003elArray bnds assoc\u003c/code\u003e is\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elArray bnds assoc = array bnds [(i,[e|(i',e)\u003c-assoc,i'==i] | i\u003c-range bnds]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe important difference between the two sides of previous equation is that\n \u003ccode\u003elArray\u003c/code\u003e works in linear time, ie. each member in the \u003ccode\u003eassoc\u003c/code\u003e list is accessed\n exactly once, and \u003ccode\u003elArray\u003c/code\u003e is lazy in its second argument. It means the \u003ccode\u003eassoc\u003c/code\u003e\n list is left intact until an i-th element of the resulting array needs to be evaluated.\n At that time the \u003ccode\u003eassoc\u003c/code\u003e list is examined until the first pair (i,e') is found.\n Until such pair is found, processed elements of \u003ccode\u003eassoc\u003c/code\u003e are stored at appropriate indexes\n in the resulting array.\n\u003c/p\u003e\u003cp\u003eThe implementation uses temporary array for such processed elements of \u003ccode\u003eassoc\u003c/code\u003e list,\n that were not yet 'requested' [or 'evaluated'] in the resulting array. This array\n can be freed when all lists of the resulting array are fully evaluated.\n\u003c/p\u003e\u003cp\u003eHere is an example of how to use the monolithic lazy array. Given a graph of type\n \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e] we construct the dfs numbering from a given vertex.\n Obviously, only the first element of the \u003ccode\u003elArray\u003c/code\u003e is needed - \u003ccode\u003e\u003ca\u003elArrayFirst\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003elArrayMaybe\u003c/a\u003e\u003c/code\u003e or \u003ca\u003eData.LazyArray.Lowlevel\u003c/a\u003e are better choice here.\n\u003c/p\u003e\u003cpre\u003ednum::Array Int [Int]-\u003eInt-\u003eArray Int (Maybe Int)\ndnum g s = amap listToMaybe marks where\n   list = dfs' [s] 0\n   marks = lArray (bounds g) list\n   dfs' []     _ = []\n   dfs' (s:ss) n = (s,n) : if n == head (marks!s) then dfs' ((g!s)++ss) (n+1) else dfs' ss n\n\u003c/pre\u003e",
        "fct-module": "Data.LazyArray",
        "fct-package": "lazyarray",
        "fct-signature": "(i, i)-\u003e [(i, e)]-\u003e Array i [e]",
        "fct-type": "function",
        "title": "lArray"
      },
      "index": {
        "description": "This function returns an array which i-th element is list that contains all values associated with in the list of associations in that order In other words the result of lArray bnds assoc is lArray bnds assoc array bnds assoc range bnds The important difference between the two sides of previous equation is that lArray works in linear time ie each member in the assoc list is accessed exactly once and lArray is lazy in its second argument It means the assoc list is left intact until an i-th element of the resulting array needs to be evaluated At that time the assoc list is examined until the first pair is found Until such pair is found processed elements of assoc are stored at appropriate indexes in the resulting array The implementation uses temporary array for such processed elements of assoc list that were not yet requested or evaluated in the resulting array This array can be freed when all lists of the resulting array are fully evaluated Here is an example of how to use the monolithic lazy array Given graph of type Array Int Int we construct the dfs numbering from given vertex Obviously only the first element of the lArray is needed lArrayFirst lArrayMaybe or Data.LazyArray.Lowlevel are better choice here dnum Array Int Int Int Array Int Maybe Int dnum amap listToMaybe marks where list dfs marks lArray bounds list dfs dfs ss if head marks then dfs ss else dfs ss",
        "hierarchy": "Data LazyArray",
        "module": "Data.LazyArray",
        "name": "lArray",
        "normalized": "(a,a)-\u003e[(a,b)]-\u003eArray a[b]",
        "package": "lazyarray",
        "partial": "Array",
        "signature": "(i,i)-\u003e[(i,e)]-\u003eArray i[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray.html#v:lArrayFirst",
      "description": {
        "fct-descr": "\u003cp\u003eThis is equivalent to \u003ccode\u003elArrayFirst zero = lArrayMap (\\x-\u003ecase x of []-\u003ezero; e:_-\u003ee)\u003c/code\u003e\n but a bit faster.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray",
        "fct-package": "lazyarray",
        "fct-signature": "e-\u003e (i, i)-\u003e [(i, e)]-\u003e Array i e",
        "fct-type": "function",
        "title": "lArrayFirst"
      },
      "index": {
        "description": "This is equivalent to lArrayFirst zero lArrayMap case of zero but bit faster",
        "hierarchy": "Data LazyArray",
        "module": "Data.LazyArray",
        "name": "lArrayFirst",
        "normalized": "a-\u003e(b,b)-\u003e[(b,a)]-\u003eArray b a",
        "package": "lazyarray",
        "partial": "Array First",
        "signature": "e-\u003e(i,i)-\u003e[(i,e)]-\u003eArray i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray.html#v:lArrayMap",
      "description": {
        "fct-descr": "\u003cp\u003eIt is often needed to apply some function to the list of elements belonging\n to the same index. Function \u003ccode\u003elArrayMap\u003c/code\u003e is provided, and could be defined like\n \u003ccode\u003elArrayMap f = (amap f) . lArray\u003c/code\u003e. Obviously, \u003ccode\u003elArray = lArrayMap id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray",
        "fct-package": "lazyarray",
        "fct-signature": "([e] -\u003e e')-\u003e (i, i)-\u003e [(i, e)]-\u003e Array i e'",
        "fct-type": "function",
        "title": "lArrayMap"
      },
      "index": {
        "description": "It is often needed to apply some function to the list of elements belonging to the same index Function lArrayMap is provided and could be defined like lArrayMap amap lArray Obviously lArray lArrayMap id",
        "hierarchy": "Data LazyArray",
        "module": "Data.LazyArray",
        "name": "lArrayMap",
        "normalized": "([a]-\u003eb)-\u003e(c,c)-\u003e[(c,a)]-\u003eArray c b",
        "package": "lazyarray",
        "partial": "Array Map",
        "signature": "([e]-\u003ee')-\u003e(i,i)-\u003e[(i,e)]-\u003eArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazyarray/docs/Data-LazyArray.html#v:lArrayMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThis is equivalent to \u003ccode\u003elArrayMaybe = lArrayMap listToMaybe\u003c/code\u003e but a bit faster.\n\u003c/p\u003e",
        "fct-module": "Data.LazyArray",
        "fct-package": "lazyarray",
        "fct-signature": "(i, i)-\u003e [(i, e)]-\u003e Array i (Maybe e)",
        "fct-type": "function",
        "title": "lArrayMaybe"
      },
      "index": {
        "description": "This is equivalent to lArrayMaybe lArrayMap listToMaybe but bit faster",
        "hierarchy": "Data LazyArray",
        "module": "Data.LazyArray",
        "name": "lArrayMaybe",
        "normalized": "(a,a)-\u003e[(a,b)]-\u003eArray a(Maybe b)",
        "package": "lazyarray",
        "partial": "Array Maybe",
        "signature": "(i,i)-\u003e[(i,e)]-\u003eArray i(Maybe e)"
      }
    }
  }
]