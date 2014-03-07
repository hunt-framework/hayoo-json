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
        "word": "binary-search"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearching unbounded intervals within bounded integral types for the\n boundary of an upward-closed set, using a combination of exponential\n and binary search.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Search.Bounded",
          "name": "Bounded",
          "package": "binary-search",
          "source": "src/Numeric-Search-Bounded.html",
          "type": "module"
        },
        "index": {
          "description": "Searching unbounded intervals within bounded integral types for the boundary of an upward-closed set using combination of exponential and binary search",
          "hierarchy": "Numeric Search Bounded",
          "module": "Numeric.Search.Bounded",
          "name": "Bounded",
          "package": "binary-search",
          "partial": "Bounded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search a bounded integral type.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearch p\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least such satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search.Bounded",
          "name": "search",
          "package": "binary-search",
          "signature": "(a -\u003e Bool) -\u003e Maybe a",
          "source": "src/Numeric-Search-Bounded.html#search",
          "type": "function"
        },
        "index": {
          "description": "log abs Search bounded integral type If is an upward-closed predicate search returns Just if and only if is the least such satisfying",
          "hierarchy": "Numeric Search Bounded",
          "module": "Numeric.Search.Bounded",
          "name": "search",
          "normalized": "(a-\u003eBool)-\u003eMaybe a",
          "package": "binary-search",
          "signature": "(a-\u003eBool)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the part of a bounded integral type from a given point.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchFrom p l\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least \u003ccode\u003en \u003e= l\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search.Bounded",
          "name": "searchFrom",
          "package": "binary-search",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Search-Bounded.html#searchFrom",
          "type": "function"
        },
        "index": {
          "description": "log abs Search the part of bounded integral type from given point If is an upward-closed predicate searchFrom returns Just if and only if is the least satisfying",
          "hierarchy": "Numeric Search Bounded",
          "module": "Numeric.Search.Bounded",
          "name": "searchFrom",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "package": "binary-search",
          "partial": "From",
          "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:searchFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the part of a bounded integral type up to a given point.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchTo p h\u003c/code\u003e returns\n \u003ccode\u003eJust n\u003c/code\u003e if and only if \u003ccode\u003en\u003c/code\u003e is the least \u003ccode\u003en \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search.Bounded",
          "name": "searchTo",
          "package": "binary-search",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Search-Bounded.html#searchTo",
          "type": "function"
        },
        "index": {
          "description": "log abs Search the part of bounded integral type up to given point If is an upward-closed predicate searchTo returns Just if and only if is the least satisfying",
          "hierarchy": "Numeric Search Bounded",
          "module": "Numeric.Search.Bounded",
          "name": "searchTo",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "package": "binary-search",
          "partial": "To",
          "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Bounded.html#v:searchTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic binary search combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "Monadic",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic binary search combinators",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "Monadic",
          "package": "binary-search",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized type for binary search functions.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "BinarySearchM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#BinarySearchM",
          "type": "type"
        },
        "index": {
          "description": "The generalized type for binary search functions",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "BinarySearchM",
          "package": "binary-search",
          "partial": "Binary Search",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:BinarySearchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBookEnd\u003c/a\u003e\u003c/code\u003e comes in order [LEnd, REnd, LEnd, REnd ...], and\n represents the ongoing state of the search results.\n Two successive \u003ccode\u003e\u003ca\u003eBookEnd\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eLEnd x1 y1\u003c/code\u003e, \u003ccode\u003eREnd x2 y1\u003c/code\u003e represents a\n claim that \u003ccode\u003epred x == y1\u003c/code\u003e for all \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n Like this:\n\u003c/p\u003e\u003cpre\u003e is (x^2 \u003e 20000) ?\n\n LEnd    REnd  LEnd     REnd\n 0        100  200       300\n |_ False _|    |_ True  _|\n\u003c/pre\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "BookEnd",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
          "type": "data"
        },
        "index": {
          "description": "BookEnd comes in order LEnd REnd LEnd REnd and represents the ongoing state of the search results Two successive BookEnd LEnd x1 y1 REnd x2 y1 represents claim that pred y1 for all such that x1 x2 Like this is LEnd REnd LEnd REnd False True",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "BookEnd",
          "package": "binary-search",
          "partial": "Book End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:BookEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep x1 x2\u003c/code\u003e decides if we should further investigate the\n gap between \u003ccode\u003ex1\u003c/code\u003e and \u003ccode\u003ex2\u003c/code\u003e. If so, it gives a new value \u003ccode\u003ex3\u003c/code\u003e wrapped\n in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e may optionally use the predicate.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "CutterM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#CutterM",
          "type": "type"
        },
        "index": {
          "description": "CutterM x1 x2 decides if we should further investigate the gap between x1 and x2 If so it gives new value x3 wrapped in Just CutterM may optionally use the predicate",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "CutterM",
          "package": "binary-search",
          "partial": "Cutter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:CutterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInitializerM\u003c/a\u003e\u003c/code\u003e generates the initial set of ranges.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "InitializerM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#InitializerM",
          "type": "type"
        },
        "index": {
          "description": "InitializerM generates the initial set of ranges",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "InitializerM",
          "package": "binary-search",
          "partial": "Initializer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:InitializerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em a b\u003c/code\u003e calculates the predicate in the context \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "PredicateM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#PredicateM",
          "type": "type"
        },
        "index": {
          "description": "PredicateM calculates the predicate in the context",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "PredicateM",
          "package": "binary-search",
          "partial": "Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:PredicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e((x1,x2),y)\u003c/code\u003e denotes that \u003ccode\u003epred x == y\u003c/code\u003e for all\n \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "Range",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#Range",
          "type": "type"
        },
        "index": {
          "description": "Range x1 x2 denotes that pred for all x1 x2",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "Range",
          "package": "binary-search",
          "partial": "Range",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "LEnd",
          "package": "binary-search",
          "signature": "LEnd !a !b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "LEnd",
          "package": "binary-search",
          "partial": "LEnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:LEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "REnd",
          "package": "binary-search",
          "signature": "REnd !a !b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#BookEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "REnd",
          "package": "binary-search",
          "partial": "REnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:REnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea cutter for integral types.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "cutIntegralM",
          "package": "binary-search",
          "signature": "CutterM m a b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#cutIntegralM",
          "type": "function"
        },
        "index": {
          "description": "cutter for integral types",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "cutIntegralM",
          "package": "binary-search",
          "partial": "Integral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:cutIntegralM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean initializer that searches for the full bound.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "initBoundedM",
          "package": "binary-search",
          "signature": "InitializerM m a b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#initBoundedM",
          "type": "function"
        },
        "index": {
          "description": "an initializer that searches for the full bound",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "initBoundedM",
          "package": "binary-search",
          "partial": "Bounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:initBoundedM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean initializer with the initial range specified.\n\u003c/p\u003e",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "initConstM",
          "package": "binary-search",
          "signature": "a -\u003e a -\u003e InitializerM m a b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#initConstM",
          "type": "function"
        },
        "index": {
          "description": "an initializer with the initial range specified",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "initConstM",
          "normalized": "a-\u003ea-\u003eInitializerM b a c",
          "package": "binary-search",
          "partial": "Const",
          "signature": "a-\u003ea-\u003eInitializerM m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:initConstM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most generalized version of search.\n\u003c/p\u003e",
          "module": "[\"Numeric.Search.Combinator.Monadic\",\"Numeric.Search\"]",
          "name": "searchWithM",
          "package": "binary-search",
          "signature": "BinarySearchM m a b",
          "source": "src/Numeric-Search-Combinator-Monadic.html#searchWithM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:searchWithM\",\"http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#v:searchWithM\"]"
        },
        "index": {
          "description": "The most generalized version of search",
          "hierarchy": "Numeric Search Combinator Monadic",
          "module": "Numeric.Search.Combinator.Monadic",
          "name": "searchWithM",
          "package": "binary-search",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Monadic.html#v:searchWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure counterpart for binary search.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Search.Combinator.Pure",
          "name": "Pure",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "Pure counterpart for binary search",
          "hierarchy": "Numeric Search Combinator Pure",
          "module": "Numeric.Search.Combinator.Pure",
          "name": "Pure",
          "package": "binary-search",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Combinator-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearching unbounded intervals of integers for the boundary of an\n upward-closed set, using a combination of exponential and binary\n search.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Search.Integer",
          "name": "Integer",
          "package": "binary-search",
          "source": "src/Numeric-Search-Integer.html",
          "type": "module"
        },
        "index": {
          "description": "Searching unbounded intervals of integers for the boundary of an upward-closed set using combination of exponential and binary search",
          "hierarchy": "Numeric Search Integer",
          "module": "Numeric.Search.Integer",
          "name": "Integer",
          "package": "binary-search",
          "partial": "Integer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(abs n))\u003c/em\u003e.\n Search the integers.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearch p\u003c/code\u003e returns the least\n \u003ccode\u003en\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.  If no such \u003ccode\u003en\u003c/code\u003e exists, either because no integer\n satisfies \u003ccode\u003ep\u003c/code\u003e or all do, \u003ccode\u003esearch p\u003c/code\u003e does not terminate.\n\u003c/p\u003e\u003cp\u003eFor example, the following function computes discrete logarithms (base 2):\n\u003c/p\u003e\u003cpre\u003e discreteLog :: Integer -\u003e Integer\n discreteLog n = search (\\ k -\u003e 2^k \u003c= n)\n\u003c/pre\u003e",
          "module": "Numeric.Search.Integer",
          "name": "search",
          "package": "binary-search",
          "signature": "(Integer -\u003e Bool) -\u003e Integer",
          "source": "src/Numeric-Search-Integer.html#search",
          "type": "function"
        },
        "index": {
          "description": "log abs Search the integers If is an upward-closed predicate search returns the least satisfying If no such exists either because no integer satisfies or all do search does not terminate For example the following function computes discrete logarithms base discreteLog Integer Integer discreteLog search",
          "hierarchy": "Numeric Search Integer",
          "module": "Numeric.Search.Integer",
          "name": "search",
          "normalized": "(Integer-\u003eBool)-\u003eInteger",
          "package": "binary-search",
          "signature": "(Integer-\u003eBool)-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(m log(n\\\u003c/em\u003em))/.\n Two-dimensional search, using an algorithm due described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Richard Bird, \u003cem\u003eSaddleback search: a lesson in algorithm design\u003c/em\u003e,\n   in \u003cem\u003eMathematics of Program Construction\u003c/em\u003e 2006,\n   Springer LNCS vol. 4014, pp82-89.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is closed upwards in each argument on non-negative integers,\n \u003ccode\u003esearch2 p\u003c/code\u003e returns the minimal non-negative pairs satisfying \u003ccode\u003ep\u003c/code\u003e,\n listed in order of increasing x-coordinate.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003em\u003c/em\u003e and \u003cem\u003en\u003c/em\u003e refer to the smaller and larger dimensions of the\n rectangle containing the boundary.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e search2 (\\ x y -\u003e x^2 + y^2 \u003e= 25)  ==  [(0,5),(3,4),(4,3),(5,0)]\n\u003c/pre\u003e",
          "module": "Numeric.Search.Integer",
          "name": "search2",
          "package": "binary-search",
          "signature": "(Integer -\u003e Integer -\u003e Bool) -\u003e [(Integer, Integer)]",
          "source": "src/Numeric-Search-Integer.html#search2",
          "type": "function"
        },
        "index": {
          "description": "log Two-dimensional search using an algorithm due described in Richard Bird Saddleback search lesson in algorithm design in Mathematics of Program Construction Springer LNCS vol pp82-89 If is closed upwards in each argument on non-negative integers search2 returns the minimal non-negative pairs satisfying listed in order of increasing x-coordinate and refer to the smaller and larger dimensions of the rectangle containing the boundary For example search2",
          "hierarchy": "Numeric Search Integer",
          "module": "Numeric.Search.Integer",
          "name": "search2",
          "normalized": "(Integer-\u003eInteger-\u003eBool)-\u003e[(Integer,Integer)]",
          "package": "binary-search",
          "signature": "(Integer-\u003eInteger-\u003eBool)-\u003e[(Integer,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:search2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(n-l))\u003c/em\u003e.\n Search the integers from a given lower bound.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate,\n \u003ccode\u003esearchFrom p l = \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e (\\ i -\u003e i \u003e= l && p i)\u003c/code\u003e.\n If no such \u003ccode\u003en\u003c/code\u003e exists (because no integer satisfies \u003ccode\u003ep\u003c/code\u003e),\n \u003ccode\u003esearchFrom p\u003c/code\u003e does not terminate.\n\u003c/p\u003e",
          "module": "Numeric.Search.Integer",
          "name": "searchFrom",
          "package": "binary-search",
          "signature": "(Integer -\u003e Bool) -\u003e Integer -\u003e Integer",
          "source": "src/Numeric-Search-Integer.html#searchFrom",
          "type": "function"
        },
        "index": {
          "description": "log n-l Search the integers from given lower bound If is an upward-closed predicate searchFrom search If no such exists because no integer satisfies searchFrom does not terminate",
          "hierarchy": "Numeric Search Integer",
          "module": "Numeric.Search.Integer",
          "name": "searchFrom",
          "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eInteger",
          "package": "binary-search",
          "partial": "From",
          "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:searchFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(h-n))\u003c/em\u003e.\n Search the integers up to a given upper bound.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchTo p h == \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e\n if and only if \u003ccode\u003en\u003c/code\u003e is the least number \u003ccode\u003en \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search.Integer",
          "name": "searchTo",
          "package": "binary-search",
          "signature": "(Integer -\u003e Bool) -\u003e Integer -\u003e Maybe Integer",
          "source": "src/Numeric-Search-Integer.html#searchTo",
          "type": "function"
        },
        "index": {
          "description": "log h-n Search the integers up to given upper bound If is an upward-closed predicate searchTo Just if and only if is the least number satisfying",
          "hierarchy": "Numeric Search Integer",
          "module": "Numeric.Search.Integer",
          "name": "searchTo",
          "normalized": "(Integer-\u003eBool)-\u003eInteger-\u003eMaybe Integer",
          "package": "binary-search",
          "partial": "To",
          "signature": "(Integer-\u003eBool)-\u003eInteger-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Integer.html#v:searchTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary search of a bounded interval of an integral type for the\n boundary of an upward-closed set, using a combination of exponential\n and binary search.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Search.Range",
          "name": "Range",
          "package": "binary-search",
          "source": "src/Numeric-Search-Range.html",
          "type": "module"
        },
        "index": {
          "description": "Binary search of bounded interval of an integral type for the boundary of an upward-closed set using combination of exponential and binary search",
          "hierarchy": "Numeric Search Range",
          "module": "Numeric.Search.Range",
          "name": "Range",
          "package": "binary-search",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(h-l))\u003c/em\u003e.\n Search a bounded interval of some integral type.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is an upward-closed predicate, \u003ccode\u003esearchFromTo p l h == Just n\u003c/code\u003e\n if and only if \u003ccode\u003en\u003c/code\u003e is the least number \u003ccode\u003el \u003c= n \u003c= h\u003c/code\u003e satisfying \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, the following function determines the first index (if any)\n at which a value occurs in an ordered array:\n\u003c/p\u003e\u003cpre\u003e searchArray :: Ord a =\u003e a -\u003e Array Int a -\u003e Maybe Int\n searchArray x array = do\n   let (lo, hi) = bounds array\n   k \u003c- searchFromTo (\\ i -\u003e array!i \u003e= x) lo hi\n   guard (array!k == x)\n   return k\n\u003c/pre\u003e",
          "module": "Numeric.Search.Range",
          "name": "searchFromTo",
          "package": "binary-search",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e a -\u003e Maybe a",
          "source": "src/Numeric-Search-Range.html#searchFromTo",
          "type": "function"
        },
        "index": {
          "description": "log h-l Search bounded interval of some integral type If is an upward-closed predicate searchFromTo Just if and only if is the least number satisfying For example the following function determines the first index if any at which value occurs in an ordered array searchArray Ord Array Int Maybe Int searchArray array do let lo hi bounds array searchFromTo array lo hi guard array return",
          "hierarchy": "Numeric Search Range",
          "module": "Numeric.Search.Range",
          "name": "searchFromTo",
          "normalized": "(a-\u003eBool)-\u003ea-\u003ea-\u003eMaybe a",
          "package": "binary-search",
          "partial": "From To",
          "signature": "(a-\u003eBool)-\u003ea-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search-Range.html#v:searchFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides combinators to construct many variants of\n binary search.  Most generally, it provides the binary search over\n predicate of the form \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e b, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m) =\u003e a -\u003e m b\u003c/code\u003e . The other\n searches are derived as special cases of this function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eBinarySearch\u003c/code\u003e assumes two things;\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003eb\u003c/code\u003e, the codomain of \u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e belongs to type class \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Each value of \u003ccode\u003eb\u003c/code\u003e form a convex set in the codomain space of the\n PredicateM. That is, if for certain pair \u003ccode\u003e(left, right) :: (a, a)\u003c/code\u003e\n satisfies \u003ccode\u003epred left == val && pred right == val\u003c/code\u003e, then also \u003ccode\u003epred\n x == val\u003c/code\u003e for all \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eleft \u003c= x \u003c= right\u003c/code\u003e .\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Numeric.Search",
          "name": "Search",
          "package": "binary-search",
          "source": "src/Numeric-Search.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides combinators to construct many variants of binary search Most generally it provides the binary search over predicate of the form Eq Monad The other searches are derived as special cases of this function BinarySearch assumes two things the codomain of PredicateM belongs to type class Eq Each value of form convex set in the codomain space of the PredicateM That is if for certain pair left right satisfies pred left val pred right val then also pred val for all such that left right",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "Search",
          "package": "binary-search",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalized type for binary search functions.\n\u003c/p\u003e",
          "module": "Numeric.Search",
          "name": "BinarySearchM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#BinarySearchM",
          "type": "type"
        },
        "index": {
          "description": "The generalized type for binary search functions",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "BinarySearchM",
          "package": "binary-search",
          "partial": "Binary Search",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:BinarySearchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep x1 x2\u003c/code\u003e decides if we should further investigate the\n gap between \u003ccode\u003ex1\u003c/code\u003e and \u003ccode\u003ex2\u003c/code\u003e. If so, it gives a new value \u003ccode\u003ex3\u003c/code\u003e wrapped\n in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eCutterM\u003c/a\u003e\u003c/code\u003e may optionally use the predicate.\n\u003c/p\u003e",
          "module": "Numeric.Search",
          "name": "CutterM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#CutterM",
          "type": "type"
        },
        "index": {
          "description": "CutterM x1 x2 decides if we should further investigate the gap between x1 and x2 If so it gives new value x3 wrapped in Just CutterM may optionally use the predicate",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "CutterM",
          "package": "binary-search",
          "partial": "Cutter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:CutterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInitializerM\u003c/a\u003e\u003c/code\u003e generates the initial set of ranges.\n\u003c/p\u003e",
          "module": "Numeric.Search",
          "name": "InitializerM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#InitializerM",
          "type": "type"
        },
        "index": {
          "description": "InitializerM generates the initial set of ranges",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "InitializerM",
          "package": "binary-search",
          "partial": "Initializer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:InitializerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePredicateM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em a b\u003c/code\u003e calculates the predicate in the context \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Search",
          "name": "PredicateM",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#PredicateM",
          "type": "type"
        },
        "index": {
          "description": "PredicateM calculates the predicate in the context",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "PredicateM",
          "package": "binary-search",
          "partial": "Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:PredicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e((x1,x2),y)\u003c/code\u003e denotes that \u003ccode\u003epred x == y\u003c/code\u003e for all\n \u003ccode\u003ex1 \u003c= x \u003c= x2\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Numeric.Search",
          "name": "Range",
          "package": "binary-search",
          "source": "src/Numeric-Search-Combinator-Monadic.html#Range",
          "type": "type"
        },
        "index": {
          "description": "Range x1 x2 denotes that pred for all x1 x2",
          "hierarchy": "Numeric Search",
          "module": "Numeric.Search",
          "name": "Range",
          "package": "binary-search",
          "partial": "Range",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary-search/docs/Numeric-Search.html#t:Range"
      }
    }
  ]
]