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
        "word": "uvector-algorithms"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe purpose of this module is to supply various combinators for commonly\n used idioms for the algorithms in this package. Examples at the time of\n this writing include running an algorithm keyed on some function of the\n elements (but only computing said function once per element), and safely\n applying the algorithms on mutable arrays to immutable arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "Combinators",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "The purpose of this module is to supply various combinators for commonly used idioms for the algorithms in this package Examples at the time of this writing include running an algorithm keyed on some function of the elements but only computing said function once per element and safely applying the algorithms on mutable arrays to immutable arrays",
          "hierarchy": "Data Array Vector Algorithms Combinators",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "Combinators",
          "package": "uvector-algorithms",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely applies a mutable array algorithm to an immutable array.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "apply",
          "package": "uvector-algorithms",
          "signature": "(forall s.  MUArr e s -\u003e ST s ()) -\u003e UArr e -\u003e UArr e",
          "source": "src/Data-Array-Vector-Algorithms-Combinators.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Safely applies mutable array algorithm to an immutable array",
          "hierarchy": "Data Array Vector Algorithms Combinators",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "apply",
          "normalized": "(a b MUArr c d-\u003eST d())-\u003eUArr c-\u003eUArr c",
          "package": "uvector-algorithms",
          "signature": "(forall s. MUArr e s-\u003eST s())-\u003eUArr e-\u003eUArr e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Combinators.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs usingKeys, only the key function has access to the array index\n at which each element is stored.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "usingIxKeys",
          "package": "uvector-algorithms",
          "signature": "Comparison e' -\u003e MUArr e' s -\u003e ST s ()) -\u003e (Int -\u003e e -\u003e k) -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Combinators.html#usingIxKeys",
          "type": "function"
        },
        "index": {
          "description": "As usingKeys only the key function has access to the array index at which each element is stored",
          "hierarchy": "Data Array Vector Algorithms Combinators",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "usingIxKeys",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b())-\u003e(Int-\u003ec-\u003ed)-\u003eMUArr c b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Ix Keys",
          "signature": "Comparison e'-\u003eMUArr e' s-\u003eST s())-\u003e(Int-\u003ee-\u003ek)-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Combinators.html#v:usingIxKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses a function to compute a key for each element which the\n algorithm should use in lieu of the actual element. For instance:\n\u003c/p\u003e\u003cpre\u003e usingKeys sortBy f arr\n\u003c/pre\u003e\u003cp\u003eshould produce the same results as:\n\u003c/p\u003e\u003cpre\u003e sortBy (comparing f) arr\n\u003c/pre\u003e\u003cp\u003ethe difference being that usingKeys computes each key only once\n which can be more efficient for expensive key functions.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "usingKeys",
          "package": "uvector-algorithms",
          "signature": "Comparison e' -\u003e MUArr e' s -\u003e ST s ()) -\u003e (e -\u003e k) -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Combinators.html#usingKeys",
          "type": "function"
        },
        "index": {
          "description": "Uses function to compute key for each element which the algorithm should use in lieu of the actual element For instance usingKeys sortBy arr should produce the same results as sortBy comparing arr the difference being that usingKeys computes each key only once which can be more efficient for expensive key functions",
          "hierarchy": "Data Array Vector Algorithms Combinators",
          "module": "Data.Array.Vector.Algorithms.Combinators",
          "name": "usingKeys",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b())-\u003e(c-\u003ed)-\u003eMUArr c b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Keys",
          "signature": "Comparison e'-\u003eMUArr e' s-\u003eST s())-\u003e(e-\u003ek)-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Combinators.html#v:usingKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple insertion sort. Though it's O(n^2), its iterative nature can be\n beneficial for small arrays. It is used to sort small segments of an array\n by some of the more heavy-duty, recursive algorithms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "Insertion",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Insertion.html",
          "type": "module"
        },
        "index": {
          "description": "simple insertion sort Though it its iterative nature can be beneficial for small arrays It is used to sort small segments of an array by some of the more heavy-duty recursive algorithms",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "Insertion",
          "package": "uvector-algorithms",
          "partial": "Insertion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Common.html#Comparison",
          "type": "type"
        },
        "index": {
          "description": "type of comparisons between two values of given type",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "partial": "Comparison",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#t:Comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using the default comparison for the type\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Insertion.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using the default comparison for the type",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sort",
          "normalized": "MUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using a given comparison\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Insertion.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using given comparison",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the portion of an array delimited by [l,u)\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Insertion.html#sortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Sorts the portion of an array delimited by",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#v:sortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the portion of the array delimited by [l,u) under the assumption\n that [l,m) is already sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortByBounds'",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Insertion.html#sortByBounds%27",
          "type": "function"
        },
        "index": {
          "description": "Sorts the portion of the array delimited by under the assumption that is already sorted",
          "hierarchy": "Data Array Vector Algorithms Insertion",
          "module": "Data.Array.Vector.Algorithms.Insertion",
          "name": "sortByBounds'",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds'",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Insertion.html#v:sortByBounds-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements various algorithms based on the introsort algorithm,\n originally described by David R. Musser in the paper /Introspective Sorting\n and Selection Algorithms/. It is also in widespread practical use, as the\n standard unstable sort used in the C++ Standard Template Library.\n\u003c/p\u003e\u003cp\u003eIntrosort is at its core a quicksort. The version implemented here has the\n following optimizations that make it perform better in practice:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Small segments of the array are left unsorted until a final insertion\n     sort pass. This is faster than recursing all the way down to\n     one-element arrays.\n\u003c/li\u003e\u003cli\u003e The pivot for segment [l,u) is chosen as the median of the elements at\n     l, u-1 and (u+l)/2. This yields good behavior on mostly sorted (or\n     reverse-sorted) arrays.\n\u003c/li\u003e\u003cli\u003e The algorithm tracks its recursion depth, and if it decides it is\n     taking too long (depth greater than 2 * lg n), it switches to a heap\n     sort to maintain O(n lg n) worst case behavior. (This is what makes the\n     algorithm introsort).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "Intro",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements various algorithms based on the introsort algorithm originally described by David Musser in the paper Introspective Sorting and Selection Algorithms It is also in widespread practical use as the standard unstable sort used in the Standard Template Library Introsort is at its core quicksort The version implemented here has the following optimizations that make it perform better in practice Small segments of the array are left unsorted until final insertion sort pass This is faster than recursing all the way down to one-element arrays The pivot for segment is chosen as the median of the elements at u-1 and This yields good behavior on mostly sorted or reverse-sorted arrays The algorithm tracks its recursion depth and if it decides it is taking too long depth greater than lg it switches to heap sort to maintain lg worst case behavior This is what makes the algorithm introsort",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "Intro",
          "package": "uvector-algorithms",
          "partial": "Intro",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Common.html#Comparison",
          "type": "type"
        },
        "index": {
          "description": "type of comparisons between two values of given type",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "partial": "Comparison",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#t:Comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements to the front of the array, sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#partialSort",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements to the front of the array sorted",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSort",
          "normalized": "MUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort",
          "signature": "MUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:partialSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements (as defined by the comparison) to\n the front of the array, sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#partialSortBy",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements as defined by the comparison to the front of the array sorted",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:partialSortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements in the interval [l,u) to the positions\n [l,k+l), sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#partialSortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements in the interval to the positions sorted",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "partialSortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:partialSortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements to the front of the array in\n no particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "select",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#select",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements to the front of the array in no particular order",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "select",
          "normalized": "MUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements (as defined by the comparison) to\n the front of the array in no particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "selectBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#selectBy",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements as defined by the comparison to the front of the array in no particular order",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "selectBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:selectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the least k elements in the interval [l,u) to the positions\n [l,k+l) in no particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "selectByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#selectByBounds",
          "type": "function"
        },
        "index": {
          "description": "Moves the least elements in the interval to the positions in no particular order",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "selectByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:selectByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using the default ordering.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using the default ordering",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sort",
          "normalized": "MUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using a custom ordering.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using custom ordering",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a portion of an array [l,u) using a custom ordering\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Intro.html#sortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Sorts portion of an array using custom ordering",
          "hierarchy": "Data Array Vector Algorithms Intro",
          "module": "Data.Array.Vector.Algorithms.Intro",
          "name": "sortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Intro.html#v:sortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a simple top-down merge sort. The temporary buffer\n is preallocated to 1/2 the size of the input array, and shared through\n the entire sorting process to ease the amount of allocation performed in\n total. This is a stable sort.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "Merge",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Merge.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements simple top-down merge sort The temporary buffer is preallocated to the size of the input array and shared through the entire sorting process to ease the amount of allocation performed in total This is stable sort",
          "hierarchy": "Data Array Vector Algorithms Merge",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "Merge",
          "package": "uvector-algorithms",
          "partial": "Merge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Merge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Common.html#Comparison",
          "type": "type"
        },
        "index": {
          "description": "type of comparisons between two values of given type",
          "hierarchy": "Data Array Vector Algorithms Merge",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "partial": "Comparison",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Merge.html#t:Comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an array using the default comparison.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Merge.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts an array using the default comparison",
          "hierarchy": "Data Array Vector Algorithms Merge",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sort",
          "normalized": "MUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Merge.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an array using a custom comparison.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Merge.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "Sorts an array using custom comparison",
          "hierarchy": "Data Array Vector Algorithms Merge",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Merge.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a portion of an array [l,u) using a custom comparison.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Merge.html#sortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Sorts portion of an array using custom comparison",
          "hierarchy": "Data Array Vector Algorithms Merge",
          "module": "Data.Array.Vector.Algorithms.Merge",
          "name": "sortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Merge.html#v:sortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOptimal sorts for very small array sizes, or for small numbers of\n particular indices in a larger array (to be used, for instance, for\n sorting a median of 3 values into the lowest position in an array\n for a median-of-3 quicksort).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "Optimal",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html",
          "type": "module"
        },
        "index": {
          "description": "Optimal sorts for very small array sizes or for small numbers of particular indices in larger array to be used for instance for sorting median of values into the lowest position in an array for median-of-3 quicksort",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "Optimal",
          "package": "uvector-algorithms",
          "partial": "Optimal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Common.html#Comparison",
          "type": "type"
        },
        "index": {
          "description": "type of comparisons between two values of given type",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "partial": "Comparison",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#t:Comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the elements at the two given indices using the comparison. This\n is essentially a compare-and-swap, although the first index is assumed to\n be the \u003ccode\u003elower\u003c/code\u003e of the two.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort2ByIndex",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort2ByIndex",
          "type": "function"
        },
        "index": {
          "description": "Sorts the elements at the two given indices using the comparison This is essentially compare-and-swap although the first index is assumed to be the lower of the two",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort2ByIndex",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Index",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort2ByIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the elements at the positions \u003ccode\u003eoff\u003c/code\u003e and 'off + 1' in the given\n array using the comparison.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort2ByOffset",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort2ByOffset",
          "type": "function"
        },
        "index": {
          "description": "Sorts the elements at the positions off and off in the given array using the comparison",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort2ByOffset",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Offset",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort2ByOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the elements at the three given indices. The indices are assumed\n to be given from lowest to highest, so if 'l \u003c m \u003c u' then\n 'sort3ByIndex cmp a m l u' essentially sorts the median of three into the\n lowest position in the array.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort3ByIndex",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort3ByIndex",
          "type": "function"
        },
        "index": {
          "description": "Sorts the elements at the three given indices The indices are assumed to be given from lowest to highest so if then sort3ByIndex cmp essentially sorts the median of three into the lowest position in the array",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort3ByIndex",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Index",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort3ByIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the three elements starting at the given offset in the array.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort3ByOffset",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort3ByOffset",
          "type": "function"
        },
        "index": {
          "description": "Sorts the three elements starting at the given offset in the array",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort3ByOffset",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Offset",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort3ByOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the elements at the four given indices. Like the 2 and 3 element\n versions, this assumes that the indices are given in increasing order, so\n it can be used to sort medians into particular positions and so on.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort4ByIndex",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort4ByIndex",
          "type": "function"
        },
        "index": {
          "description": "Sorts the elements at the four given indices Like the and element versions this assumes that the indices are given in increasing order so it can be used to sort medians into particular positions and so on",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort4ByIndex",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Index",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort4ByIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the four elements beginning at the offset.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort4ByOffset",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Optimal.html#sort4ByOffset",
          "type": "function"
        },
        "index": {
          "description": "Sorts the four elements beginning at the offset",
          "hierarchy": "Data Array Vector Algorithms Optimal",
          "module": "Data.Array.Vector.Algorithms.Optimal",
          "name": "sort4ByOffset",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Offset",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Optimal.html#v:sort4ByOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a radix sort for a subclass of unboxed arrays. The \n radix class gives information on\n   * the number of passes needed for the data type\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the size of the auxiliary arrays\n\u003c/li\u003e\u003cli\u003e how to compute the pass-k radix of a value\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRadix sort is not a comparison sort, so it is able to achieve O(n) run\n time, though it also uses O(n) auxiliary space. In addition, there is a\n constant space overhead of 2*size*sizeOf(Int) for the sort, so it is not\n advisable to use this sort for large numbers of very small arrays.\n\u003c/p\u003e\u003cp\u003eA standard example (upon which one could base their own Radix instance)\n is Word32:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e We choose to sort on r = 8 bits at a time\n\u003c/li\u003e\u003cli\u003e A Word32 has b = 32 bits total\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThus, b/r = 4 passes are required, 2^r = 256 elements are needed in an\n   auxiliary array, and the radix function is:\n\u003c/p\u003e\u003cpre\u003e radix k e = (e `shiftR` (k*8)) .&. 256\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "Radix",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides radix sort for subclass of unboxed arrays The radix class gives information on the number of passes needed for the data type the size of the auxiliary arrays how to compute the pass-k radix of value Radix sort is not comparison sort so it is able to achieve run time though it also uses auxiliary space In addition there is constant space overhead of size sizeOf Int for the sort so it is not advisable to use this sort for large numbers of very small arrays standard example upon which one could base their own Radix instance is Word32 We choose to sort on bits at time Word32 has bits total Thus passes are required elements are needed in an auxiliary array and the radix function is radix shiftR",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "Radix",
          "package": "uvector-algorithms",
          "partial": "Radix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "Radix",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html#Radix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "Radix",
          "package": "uvector-algorithms",
          "partial": "Radix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#t:Radix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of passes necessary to sort an array of es\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "passes",
          "package": "uvector-algorithms",
          "signature": "e -\u003e Int",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html#passes",
          "type": "method"
        },
        "index": {
          "description": "The number of passes necessary to sort an array of es",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "passes",
          "normalized": "a-\u003eInt",
          "package": "uvector-algorithms",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#v:passes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe radix function parameterized by the current pass\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "radix",
          "package": "uvector-algorithms",
          "signature": "Int -\u003e e -\u003e Int",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html#radix",
          "type": "method"
        },
        "index": {
          "description": "The radix function parameterized by the current pass",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "radix",
          "normalized": "Int-\u003ea-\u003eInt",
          "package": "uvector-algorithms",
          "signature": "Int-\u003ee-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#v:radix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of an auxiliary array\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "size",
          "package": "uvector-algorithms",
          "signature": "e -\u003e Int",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html#size",
          "type": "method"
        },
        "index": {
          "description": "The size of an auxiliary array",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "uvector-algorithms",
          "signature": "e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an array based on the Radix instance.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "sort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-Radix.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts an array based on the Radix instance",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "sort",
          "normalized": "MUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix sorts an array using custom radix information\n requires the number of passes to fully sort the array,\n the size of of auxiliary arrays necessary (should be\n one greater than the maximum value returned by the radix\n function), and a radix function, which takes the pass\n and an element, and returns the relevant radix.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "sortBy",
          "package": "uvector-algorithms",
          "signature": "Int-\u003e Int-\u003e (Int -\u003e e -\u003e Int)-\u003e MUArr e s-\u003e ST s ()",
          "type": "function"
        },
        "index": {
          "description": "Radix sorts an array using custom radix information requires the number of passes to fully sort the array the size of of auxiliary arrays necessary should be one greater than the maximum value returned by the radix function and radix function which takes the pass and an element and returns the relevant radix",
          "hierarchy": "Data Array Vector Algorithms Radix",
          "module": "Data.Array.Vector.Algorithms.Radix",
          "name": "sortBy",
          "normalized": "Int-\u003eInt-\u003e(Int-\u003ea-\u003eInt)-\u003eMUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Int-\u003eInt-\u003e(Int-\u003ee-\u003eInt)-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-Radix.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements operations for working with a trinary heap stored\n in an unboxed array. Most heapsorts are defined in terms of a binary heap,\n in which each internal node has at most two children. By contrast, a\n trinary heap has internal nodes with up to three children. This reduces\n the number of comparisons in a heapsort slightly, and improves locality\n (again, slightly) by flattening out the heap.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "TriHeap",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements operations for working with trinary heap stored in an unboxed array Most heapsorts are defined in terms of binary heap in which each internal node has at most two children By contrast trinary heap has internal nodes with up to three children This reduces the number of comparisons in heapsort slightly and improves locality again slightly by flattening out the heap",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "TriHeap",
          "package": "uvector-algorithms",
          "partial": "Tri Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "source": "src/Data-Array-Vector-Algorithms-Common.html#Comparison",
          "type": "type"
        },
        "index": {
          "description": "type of comparisons between two values of given type",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "Comparison",
          "package": "uvector-algorithms",
          "partial": "Comparison",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#t:Comparison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a heap in a portion of an array [l, u)\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "heapify",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#heapify",
          "type": "function"
        },
        "index": {
          "description": "Constructs heap in portion of an array",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "heapify",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:heapify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the lowest k elements to the front of the array, sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#partialSort",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest elements to the front of the array sorted",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSort",
          "normalized": "MUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort",
          "signature": "MUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:partialSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the lowest k elements (as defined by the comparison) to\n the front of the array, sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#partialSortBy",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest elements as defined by the comparison to the front of the array sorted",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:partialSortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the lowest k elements in the portion [l,u) of the array\n into positions [l,k+l), sorted.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#partialSortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest elements in the portion of the array into positions sorted",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "partialSortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Sort By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:partialSortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u), swaps the\n top of the heap with the element at u and rebuilds the heap.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "pop",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Given heap stored in portion of an array swaps the top of the heap with the element at and rebuilds the heap",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "pop",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u) swaps the top\n of the heap with the element at position t, and rebuilds the heap.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "popTo",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#popTo",
          "type": "function"
        },
        "index": {
          "description": "Given heap stored in portion of an array swaps the top of the heap with the element at position and rebuilds the heap",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "popTo",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "To",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:popTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the lowest k elements to the front of the array.\n The elements will be in no particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "select",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#select",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest elements to the front of the array The elements will be in no particular order",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "select",
          "normalized": "MUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the \u003ccode\u003elowest\u003c/code\u003e (as defined by the comparison) k elements\n to the front of the array. The elements will be in no particular\n order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "selectBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#selectBy",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest as defined by the comparison elements to the front of the array The elements will be in no particular order",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "selectBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:selectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the \u003ccode\u003elowest\u003c/code\u003e k elements in the portion [l,u) of the\n array into the positions [l,k+l). The elements will be in\n no particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "selectByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#selectByBounds",
          "type": "function"
        },
        "index": {
          "description": "Moves the lowest elements in the portion of the array into the positions The elements will be in no particular order",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "selectByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:selectByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using the default ordering.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sort",
          "package": "uvector-algorithms",
          "signature": "MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using the default ordering",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sort",
          "normalized": "MUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "signature": "MUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts an entire array using a custom ordering.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortBy",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "Sorts an entire array using custom ordering",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortBy",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By",
          "signature": "Comparison e-\u003eMUArr e s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a portion of an array [l,u) using a custom ordering\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortByBounds",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#sortByBounds",
          "type": "function"
        },
        "index": {
          "description": "Sorts portion of an array using custom ordering",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortByBounds",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "By Bounds",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:sortByBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u), sorts the\n highest values into [m,u). The elements in [l,m) are not in any\n particular order.\n\u003c/p\u003e",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortHeap",
          "package": "uvector-algorithms",
          "signature": "Comparison e -\u003e MUArr e s -\u003e Int -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Vector-Algorithms-TriHeap.html#sortHeap",
          "type": "function"
        },
        "index": {
          "description": "Given heap stored in portion of an array sorts the highest values into The elements in are not in any particular order",
          "hierarchy": "Data Array Vector Algorithms TriHeap",
          "module": "Data.Array.Vector.Algorithms.TriHeap",
          "name": "sortHeap",
          "normalized": "Comparison a-\u003eMUArr a b-\u003eInt-\u003eInt-\u003eInt-\u003eST b()",
          "package": "uvector-algorithms",
          "partial": "Heap",
          "signature": "Comparison e-\u003eMUArr e s-\u003eInt-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uvector-algorithms/docs/Data-Array-Vector-Algorithms-TriHeap.html#v:sortHeap"
      }
    }
  ]
]