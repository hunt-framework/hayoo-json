[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearching unbounded intervals within bounded integral types for the\n boundary of an upward-closed set, using a combination of exponential\n and binary search.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search.Bounded",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search-Bounded.html",
        "fct-type": "module",
        "title": "Bounded"
      },
      "index": {
        "description": "Searching unbounded intervals within bounded integral types for the boundary of an upward-closed set using combination of exponential and binary search",
        "hierarchy": "Numeric Search Bounded",
        "module": "Numeric.Search.Bounded",
        "name": "Bounded",
        "normalized": "",
        "package": "binary-search",
        "partial": "Bounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search a bounded integral type.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearch p\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least such satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Bounded",
        "fct-package": "binary-search",
        "fct-signature": "(a -\u003e Bool) -\u003e Maybe a",
        "fct-source": "src/Numeric-Search-Bounded.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "log abs Search bounded integral type If is an upward-closed predicate search returns Just if and only if is the least such satisfying",
        "hierarchy": "Numeric Search Bounded",
        "module": "Numeric.Search.Bounded",
        "name": "search",
        "normalized": "(a-\u003eBool)-\u003eMaybe a",
        "package": "binary-search",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:searchFrom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the part of a bounded integral type from a given point.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchFrom p l\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least \u003ccode\u003en \u003e= l\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Bounded",
        "fct-package": "binary-search",
        "fct-signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
        "fct-source": "src/Numeric-Search-Bounded.html#searchFrom",
        "fct-type": "function",
        "title": "searchFrom"
      },
      "index": {
        "description": "log abs Search the part of bounded integral type from given point If is an upward-closed predicate searchFrom returns Just if and only if is the least satisfying",
        "hierarchy": "Numeric Search Bounded",
        "module": "Numeric.Search.Bounded",
        "name": "searchFrom",
        "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
        "package": "binary-search",
        "partial": "From",
        "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:searchTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the part of a bounded integral type up to a given point.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchTo p h\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least \u003ccode\u003en \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Bounded",
        "fct-package": "binary-search",
        "fct-signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
        "fct-source": "src/Numeric-Search-Bounded.html#searchTo",
        "fct-type": "function",
        "title": "searchTo"
      },
      "index": {
        "description": "log abs Search the part of bounded integral type up to given point If is an upward-closed predicate searchTo returns Just if and only if is the least satisfying",
        "hierarchy": "Numeric Search Bounded",
        "module": "Numeric.Search.Bounded",
        "name": "searchTo",
        "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
        "package": "binary-search",
        "partial": "To",
        "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic binary search combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html",
        "fct-type": "module",
        "title": "Monadic"
      },
      "index": {
        "description": "Monadic binary search combinators",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "Monadic",
        "normalized": "",
        "package": "binary-search",
        "partial": "Monadic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:BinarySearchM",
      "description": {
        "fct-descr": "\u003cp\u003eThe generalized type for binary search functions.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#BinarySearchM",
        "fct-type": "type",
        "title": "BinarySearchM"
      },
      "index": {
        "description": "The generalized type for binary search functions",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "BinarySearchM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Binary Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:BookEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBookEnd\u003c/a\u003e\u003c/code\u003e comes in order [LEnd, REnd, LEnd, REnd ...], and\n represents the ongoing state of the search results.\n Two successive \u003ccode\u003e\u003ca\u003eBookEnd\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eLEnd x1 y1\u003c/code\u003e, \u003ccode\u003eREnd x2 y1\u003c/code\u003e represents a\n claim that \u003ccode\u003epred x == y1\u003c/code\u003e for all \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n Like this:\n\u003c/p\u003e\u003cpre\u003e is (x^2 \u003e 20000) ?\n\n LEnd    REnd  LEnd     REnd\n 0        100  200       300\n |_ False _|    |_ True  _|\n\u003c/pre\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
        "fct-type": "data",
        "title": "BookEnd"
      },
      "index": {
        "description": "BookEnd comes in order LEnd REnd LEnd REnd and represents the ongoing state of the search results Two successive BookEnd LEnd x1 y1 REnd x2 y1 represents claim that pred y1 for all such that x1 x2 Like this is LEnd REnd LEnd REnd False True",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "BookEnd",
        "normalized": "",
        "package": "binary-search",
        "partial": "Book End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:CutterM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep x1 x2\u003c/code\u003e decides if we should further investigate the\n gap between \u003ccode\u003ex1\u003c/code\u003e and \u003ccode\u003ex2\u003c/code\u003e. If so, it gives a new value \u003ccode\u003ex3\u003c/code\u003e wrapped\n in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e may optionally use the predicate.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#CutterM",
        "fct-type": "type",
        "title": "CutterM"
      },
      "index": {
        "description": "CutterM x1 x2 decides if we should further investigate the gap between x1 and x2 If so it gives new value x3 wrapped in Just CutterM may optionally use the predicate",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "CutterM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Cutter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:InitializerM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInitializerM\u003c/a\u003e\u003c/code\u003e generates the initial set of ranges.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#InitializerM",
        "fct-type": "type",
        "title": "InitializerM"
      },
      "index": {
        "description": "InitializerM generates the initial set of ranges",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "InitializerM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Initializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:PredicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em a b\u003c/code\u003e calculates the predicate in the context \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#PredicateM",
        "fct-type": "type",
        "title": "PredicateM"
      },
      "index": {
        "description": "PredicateM calculates the predicate in the context",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "PredicateM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e((x1,x2),y)\u003c/code\u003e denotes that \u003ccode\u003epred x == y\u003c/code\u003e for all\n \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#Range",
        "fct-type": "type",
        "title": "Range"
      },
      "index": {
        "description": "Range x1 x2 denotes that pred for all x1 x2",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "Range",
        "normalized": "",
        "package": "binary-search",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:LEnd",
      "description": {
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "LEnd !a !b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
        "fct-type": "function",
        "title": "LEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "LEnd",
        "normalized": "",
        "package": "binary-search",
        "partial": "LEnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:REnd",
      "description": {
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "REnd !a !b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
        "fct-type": "function",
        "title": "REnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "REnd",
        "normalized": "",
        "package": "binary-search",
        "partial": "REnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:cutIntegralM",
      "description": {
        "fct-descr": "\u003cp\u003ea cutter for integral types.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "CutterM m a b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#cutIntegralM",
        "fct-type": "function",
        "title": "cutIntegralM"
      },
      "index": {
        "description": "cutter for integral types",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "cutIntegralM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:initBoundedM",
      "description": {
        "fct-descr": "\u003cp\u003ean initializer that searches for the full bound.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "InitializerM m a b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#initBoundedM",
        "fct-type": "function",
        "title": "initBoundedM"
      },
      "index": {
        "description": "an initializer that searches for the full bound",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "initBoundedM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Bounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:initConstM",
      "description": {
        "fct-descr": "\u003cp\u003ean initializer with the initial range specified.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "a -\u003e a -\u003e InitializerM m a b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#initConstM",
        "fct-type": "function",
        "title": "initConstM"
      },
      "index": {
        "description": "an initializer with the initial range specified",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "initConstM",
        "normalized": "a-\u003ea-\u003eInitializerM b a c",
        "package": "binary-search",
        "partial": "Const",
        "signature": "a-\u003ea-\u003eInitializerM m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:searchWithM",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generalized version of search.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Combinator.Monadic",
        "fct-package": "binary-search",
        "fct-signature": "BinarySearchM m a b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#searchWithM",
        "fct-type": "function",
        "title": "searchWithM"
      },
      "index": {
        "description": "The most generalized version of search",
        "hierarchy": "Numeric Search Combinator Monadic",
        "module": "Numeric.Search.Combinator.Monadic",
        "name": "searchWithM",
        "normalized": "",
        "package": "binary-search",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Pure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure counterpart for binary search.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search.Combinator.Pure",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search-Combinator-Pure.html",
        "fct-type": "module",
        "title": "Pure"
      },
      "index": {
        "description": "Pure counterpart for binary search",
        "hierarchy": "Numeric Search Combinator Pure",
        "module": "Numeric.Search.Combinator.Pure",
        "name": "Pure",
        "normalized": "",
        "package": "binary-search",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearching unbounded intervals of integers for the boundary of an\n upward-closed set, using a combination of exponential and binary\n search.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search.Integer",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search-Integer.html",
        "fct-type": "module",
        "title": "Integer"
      },
      "index": {
        "description": "Searching unbounded intervals of integers for the boundary of an upward-closed set using combination of exponential and binary search",
        "hierarchy": "Numeric Search Integer",
        "module": "Numeric.Search.Integer",
        "name": "Integer",
        "normalized": "",
        "package": "binary-search",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the integers.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearch p\u003c/code\u003e returns the least\n \u003ccode\u003en\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.  If no such \u003ccode\u003en\u003c/code\u003e exists, either because no integer\n satisfies \u003ccode\u003ep\u003c/code\u003e or all do, \u003ccode\u003esearch p\u003c/code\u003e does not terminate.\n\u003c/p\u003e\u003cp\u003eFor example, the following function computes discrete logarithms (base 2):\n\u003c/p\u003e\u003cpre\u003e discreteLog :: Integer -\u003e Integer\n discreteLog n = search (\\ k -\u003e 2^k \u003c= n)\n\u003c/pre\u003e",
        "fct-module": "Numeric.Search.Integer",
        "fct-package": "binary-search",
        "fct-signature": "(Integer -\u003e Bool) -\u003e Integer",
        "fct-source": "src/Numeric-Search-Integer.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "log abs Search the integers If is an upward-closed predicate search returns the least satisfying If no such exists either because no integer satisfies or all do search does not terminate For example the following function computes discrete logarithms base discreteLog Integer Integer discreteLog search",
        "hierarchy": "Numeric Search Integer",
        "module": "Numeric.Search.Integer",
        "name": "search",
        "normalized": "(Integer-\u003eBool)-\u003eInteger",
        "package": "binary-search",
        "partial": "",
        "signature": "(Integer-\u003eBool)-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:search2",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m log(n\\\u003c/em\u003em))/.\n Two-dimensional search, using an algorithm due described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Richard Bird, \u003cem\u003eSaddleback search: a lesson in algorithm design\u003c/em\u003e,\n   in \u003cem\u003eMathematics of Program Construction\u003c/em\u003e 2006,\n   Springer LNCS vol. 4014, pp82-89.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is closed upwards in each argument on non-negative integers,\n \u003ccode\u003esearch2 p\u003c/code\u003e returns the minimal non-negative pairs satisfying \u003ccode\u003ep\u003c/code\u003e,\n listed in order of increasing x-coordinate.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003em\u003c/em\u003e and \u003cem\u003en\u003c/em\u003e refer to the smaller and larger dimensions of the\n rectangle containing the boundary.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e search2 (\\ x y -\u003e x^2 + y^2 \u003e= 25)  ==  [(0,5),(3,4),(4,3),(5,0)]\n\u003c/pre\u003e",
        "fct-module": "Numeric.Search.Integer",
        "fct-package": "binary-search",
        "fct-signature": "(Integer -\u003e Integer -\u003e Bool) -\u003e [(Integer, Integer)]",
        "fct-source": "src/Numeric-Search-Integer.html#search2",
        "fct-type": "function",
        "title": "search2"
      },
      "index": {
        "description": "log Two-dimensional search using an algorithm due described in Richard Bird Saddleback search lesson in algorithm design in Mathematics of Program Construction Springer LNCS vol pp82-89 If is closed upwards in each argument on non-negative integers search2 returns the minimal non-negative pairs satisfying listed in order of increasing x-coordinate and refer to the smaller and larger dimensions of the rectangle containing the boundary For example search2",
        "hierarchy": "Numeric Search Integer",
        "module": "Numeric.Search.Integer",
        "name": "search2",
        "normalized": "(Integer-\u003eInteger-\u003eBool)-\u003e[(Integer,Integer)]",
        "package": "binary-search",
        "partial": "",
        "signature": "(Integer-\u003eInteger-\u003eBool)-\u003e[(Integer,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:searchFrom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n-l))\u003c/em\u003e.\n Search the integers from a given lower bound.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate,\n \u003ccode\u003esearchFrom p l = \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e (\\ i -\u003e i \u003e= l && p i)\u003c/code\u003e.\n If no such \u003ccode\u003en\u003c/code\u003e exists (because no integer satisfies \u003ccode\u003ep\u003c/code\u003e),\n \u003ccode\u003esearchFrom p\u003c/code\u003e does not terminate.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Integer",
        "fct-package": "binary-search",
        "fct-signature": "(Integer -\u003e Bool) -\u003e Integer -\u003e Integer",
        "fct-source": "src/Numeric-Search-Integer.html#searchFrom",
        "fct-type": "function",
        "title": "searchFrom"
      },
      "index": {
        "description": "log n-l Search the integers from given lower bound If is an upward-closed predicate searchFrom search If no such exists because no integer satisfies searchFrom does not terminate",
        "hierarchy": "Numeric Search Integer",
        "module": "Numeric.Search.Integer",
        "name": "searchFrom",
        "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eInteger",
        "package": "binary-search",
        "partial": "From",
        "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:searchTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(h-n))\u003c/em\u003e.\n Search the integers up to a given upper bound.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchTo p h == \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e\n if and only if \u003ccode\u003en\u003c/code\u003e is the least number \u003ccode\u003en \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search.Integer",
        "fct-package": "binary-search",
        "fct-signature": "(Integer -\u003e Bool) -\u003e Integer -\u003e Maybe Integer",
        "fct-source": "src/Numeric-Search-Integer.html#searchTo",
        "fct-type": "function",
        "title": "searchTo"
      },
      "index": {
        "description": "log h-n Search the integers up to given upper bound If is an upward-closed predicate searchTo Just if and only if is the least number satisfying",
        "hierarchy": "Numeric Search Integer",
        "module": "Numeric.Search.Integer",
        "name": "searchTo",
        "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eMaybe Integer",
        "package": "binary-search",
        "partial": "To",
        "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Range.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary search of a bounded interval of an integral type for the\n boundary of an upward-closed set, using a combination of exponential\n and binary search.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search.Range",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search-Range.html",
        "fct-type": "module",
        "title": "Range"
      },
      "index": {
        "description": "Binary search of bounded interval of an integral type for the boundary of an upward-closed set using combination of exponential and binary search",
        "hierarchy": "Numeric Search Range",
        "module": "Numeric.Search.Range",
        "name": "Range",
        "normalized": "",
        "package": "binary-search",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Range.html#v:searchFromTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(h-l))\u003c/em\u003e.\n Search a bounded interval of some integral type.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchFromTo p l h == Just n\u003c/code\u003e\n if and only if \u003ccode\u003en\u003c/code\u003e is the least number \u003ccode\u003el \u003c= n \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, the following function determines the first index (if any)\n at which a value occurs in an ordered array:\n\u003c/p\u003e\u003cpre\u003e searchArray :: Ord a =\u003e a -\u003e Array Int a -\u003e Maybe Int\n searchArray x array = do\n   let (lo, hi) = bounds array\n   k \u003c- searchFromTo (\\ i -\u003e array!i \u003e= x) lo hi\n   guard (array!k == x)\n   return k\n\u003c/pre\u003e",
        "fct-module": "Numeric.Search.Range",
        "fct-package": "binary-search",
        "fct-signature": "(a -\u003e Bool) -\u003e a -\u003e a -\u003e Maybe a",
        "fct-source": "src/Numeric-Search-Range.html#searchFromTo",
        "fct-type": "function",
        "title": "searchFromTo"
      },
      "index": {
        "description": "log h-l Search bounded interval of some integral type If is an upward-closed predicate searchFromTo Just if and only if is the least number satisfying For example the following function determines the first index if any at which value occurs in an ordered array searchArray Ord Array Int Maybe Int searchArray array do let lo hi bounds array searchFromTo array lo hi guard array return",
        "hierarchy": "Numeric Search Range",
        "module": "Numeric.Search.Range",
        "name": "searchFromTo",
        "normalized": "(a-\u003eBool)-\u003ea-\u003ea-\u003eMaybe a",
        "package": "binary-search",
        "partial": "From To",
        "signature": "(a-\u003eBool)-\u003ea-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides combinators to construct many variants of\n binary search.  Most generally, it provides the binary search over\n predicate of the form \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e b, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m) =\u003e a -\u003e m b\u003c/code\u003e . The other\n searches are derived as special cases of this function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eBinarySearch\u003c/code\u003e assumes two things;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003eb\u003c/code\u003e, the codomain of \u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e belongs to type class \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Each value of \u003ccode\u003eb\u003c/code\u003e form a convex set in the codomain space of the\n PredicateM. That is, if for certain pair \u003ccode\u003e(left, right) :: (a, a)\u003c/code\u003e\n satisfies \u003ccode\u003epred left == val && pred right == val\u003c/code\u003e, then also \u003ccode\u003epred\n x == val\u003c/code\u003e for all \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eleft \u003c= x \u003c= right\u003c/code\u003e .\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "This package provides combinators to construct many variants of binary search Most generally it provides the binary search over predicate of the form Eq Monad The other searches are derived as special cases of this function BinarySearch assumes two things the codomain of PredicateM belongs to type class Eq Each value of form convex set in the codomain space of the PredicateM That is if for certain pair left right satisfies pred left val pred right val then also pred val for all such that left right",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "Search",
        "normalized": "",
        "package": "binary-search",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:BinarySearchM",
      "description": {
        "fct-descr": "\u003cp\u003eThe generalized type for binary search functions.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#BinarySearchM",
        "fct-type": "type",
        "title": "BinarySearchM"
      },
      "index": {
        "description": "The generalized type for binary search functions",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "BinarySearchM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Binary Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:CutterM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep x1 x2\u003c/code\u003e decides if we should further investigate the\n gap between \u003ccode\u003ex1\u003c/code\u003e and \u003ccode\u003ex2\u003c/code\u003e. If so, it gives a new value \u003ccode\u003ex3\u003c/code\u003e wrapped\n in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e may optionally use the predicate.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#CutterM",
        "fct-type": "type",
        "title": "CutterM"
      },
      "index": {
        "description": "CutterM x1 x2 decides if we should further investigate the gap between x1 and x2 If so it gives new value x3 wrapped in Just CutterM may optionally use the predicate",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "CutterM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Cutter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:InitializerM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInitializerM\u003c/a\u003e\u003c/code\u003e generates the initial set of ranges.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#InitializerM",
        "fct-type": "type",
        "title": "InitializerM"
      },
      "index": {
        "description": "InitializerM generates the initial set of ranges",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "InitializerM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Initializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:PredicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em a b\u003c/code\u003e calculates the predicate in the context \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#PredicateM",
        "fct-type": "type",
        "title": "PredicateM"
      },
      "index": {
        "description": "PredicateM calculates the predicate in the context",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "PredicateM",
        "normalized": "",
        "package": "binary-search",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:Range",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e((x1,x2),y)\u003c/code\u003e denotes that \u003ccode\u003epred x == y\u003c/code\u003e for all\n \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#Range",
        "fct-type": "type",
        "title": "Range"
      },
      "index": {
        "description": "Range x1 x2 denotes that pred for all x1 x2",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "Range",
        "normalized": "",
        "package": "binary-search",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#v:searchWithM",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generalized version of search.\n\u003c/p\u003e",
        "fct-module": "Numeric.Search",
        "fct-package": "binary-search",
        "fct-signature": "BinarySearchM m a b",
        "fct-source": "src/Numeric-Search-Combinator-Monadic.html#searchWithM",
        "fct-type": "function",
        "title": "searchWithM"
      },
      "index": {
        "description": "The most generalized version of search",
        "hierarchy": "Numeric Search",
        "module": "Numeric.Search",
        "name": "searchWithM",
        "normalized": "",
        "package": "binary-search",
        "partial": "With",
        "signature": ""
      }
    }
  }
]