[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements American flag sort: an in-place, unstable, bucket\n sort. Also in contrast to radix sort, the values are inspected in a big\n endian order, and buckets are sorted via recursive splitting. This,\n however, makes it sensible for sorting strings in lexicographic order\n (provided indexing is fast).\n\u003c/p\u003e\u003cp\u003eThe algorithm works as follows: at each stage, the array is looped over,\n counting the number of elements for each bucket. Then, starting at the\n beginning of the array, elements are permuted in place to reside in the\n proper bucket, following chains until they reach back to the current\n base index. Finally, each bucket is sorted recursively. This lends itself\n well to the aforementioned variable-length strings, and so the algorithm\n takes a stopping predicate, which is given a representative of the stripe,\n rather than running for a set number of iterations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html",
        "fct-type": "module",
        "title": "AmericanFlag"
      },
      "index": {
        "description": "This module implements American flag sort an in-place unstable bucket sort Also in contrast to radix sort the values are inspected in big endian order and buckets are sorted via recursive splitting This however makes it sensible for sorting strings in lexicographic order provided indexing is fast The algorithm works as follows at each stage the array is looped over counting the number of elements for each bucket Then starting at the beginning of the array elements are permuted in place to reside in the proper bucket following chains until they reach back to the current base index Finally each bucket is sorted recursively This lends itself well to the aforementioned variable-length strings and so the algorithm takes stopping predicate which is given representative of the stripe rather than running for set number of iterations",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "AmericanFlag",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "American Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#t:Lexicographic",
      "description": {
        "fct-descr": "\u003cp\u003eThe methods of this class specify the information necessary to sort\n arrays using the default ordering. The name \u003ccode\u003e\u003ca\u003eLexicographic\u003c/a\u003e\u003c/code\u003e is meant\n to convey that index should return results in a similar way to indexing\n into a string.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "class",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html#Lexicographic",
        "fct-type": "class",
        "title": "Lexicographic"
      },
      "index": {
        "description": "The methods of this class specify the information necessary to sort arrays using the default ordering The name Lexicographic is meant to convey that index should return results in similar way to indexing into string",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "Lexicographic",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Lexicographic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines which bucket a given element should inhabit for a\n particular iteration.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "Int -\u003e e -\u003e Int",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html#index",
        "fct-type": "method",
        "title": "index"
      },
      "index": {
        "description": "Determines which bucket given element should inhabit for particular iteration",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "index",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "Int-\u003ee-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the bucket array necessary for sorting es\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "The size of the bucket array necessary for sorting es",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "size",
        "normalized": "a-\u003eInt",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an array using the default ordering. Both Lexicographic and\n Ord are necessary because the algorithm falls back to insertion sort\n for sufficiently small arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an array using the default ordering Both Lexicographic and Ord are necessary because the algorithm falls back to insertion sort for sufficiently small arrays",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eA fully parameterized version of the sorting algorithm. Again, this\n function takes both radix information and a comparison, because the\n algorithms falls back to insertion sort for small arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e-\u003e (e -\u003e Int -\u003e Bool)-\u003e Int-\u003e (Int -\u003e e -\u003e Int)-\u003e v (PrimState m) e-\u003e m ()",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "fully parameterized version of the sorting algorithm Again this function takes both radix information and comparison because the algorithms falls back to insertion sort for small arrays",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "sortBy",
        "normalized": "Comparison a-\u003e(a-\u003eInt-\u003eBool)-\u003eInt-\u003e(Int-\u003ea-\u003eInt)-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003e(e-\u003eInt-\u003eBool)-\u003eInt-\u003e(Int-\u003ee-\u003eInt)-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-AmericanFlag.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a representative of a stripe and an index number, this\n function should determine whether to stop sorting.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.AmericanFlag",
        "fct-package": "vector-algorithms",
        "fct-signature": "e -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Vector-Algorithms-AmericanFlag.html#terminate",
        "fct-type": "method",
        "title": "terminate"
      },
      "index": {
        "description": "Given representative of stripe and an index number this function should determine whether to stop sorting",
        "hierarchy": "Data Vector Algorithms AmericanFlag",
        "module": "Data.Vector.Algorithms.AmericanFlag",
        "name": "terminate",
        "normalized": "a-\u003eInt-\u003eBool",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "e-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements operations for working with a quaternary heap stored\n in an unboxed array. Most heapsorts are defined in terms of a binary heap,\n in which each internal node has at most two children. By contrast, a\n quaternary heap has internal nodes with up to four children. This reduces\n the number of comparisons in a heapsort slightly, and improves locality\n (again, slightly) by flattening out the heap.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html",
        "fct-type": "module",
        "title": "Heap"
      },
      "index": {
        "description": "This module implements operations for working with quaternary heap stored in an unboxed array Most heapsorts are defined in terms of binary heap in which each internal node has at most two children By contrast quaternary heap has internal nodes with up to four children This reduces the number of comparisons in heapsort slightly and improves locality again slightly by flattening out the heap",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:heapify",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a heap in a portion of an array [l, u)\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#heapify",
        "fct-type": "function",
        "title": "heapify"
      },
      "index": {
        "description": "Constructs heap in portion of an array",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "heapify",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:partialSort",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the lowest k elements to the front of the array, sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#partialSort",
        "fct-type": "function",
        "title": "partialSort"
      },
      "index": {
        "description": "Moves the lowest elements to the front of the array sorted",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "partialSort",
        "normalized": "a(PrimState b)c-\u003eInt-\u003eb()",
        "package": "vector-algorithms",
        "partial": "Sort",
        "signature": "v(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:partialSortBy",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the lowest k elements (as defined by the comparison) to\n the front of the array, sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#partialSortBy",
        "fct-type": "function",
        "title": "partialSortBy"
      },
      "index": {
        "description": "Moves the lowest elements as defined by the comparison to the front of the array sorted",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "partialSortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "Sort By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:partialSortByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the lowest k elements in the portion [l,u) of the array\n into positions [l,k+l), sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#partialSortByBounds",
        "fct-type": "function",
        "title": "partialSortByBounds"
      },
      "index": {
        "description": "Moves the lowest elements in the portion of the array into positions sorted",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "partialSortByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "Sort By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u), swaps the\n top of the heap with the element at u and rebuilds the heap.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Given heap stored in portion of an array swaps the top of the heap with the element at and rebuilds the heap",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "pop",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:popTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u) swaps the top\n of the heap with the element at position t, and rebuilds the heap.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#popTo",
        "fct-type": "function",
        "title": "popTo"
      },
      "index": {
        "description": "Given heap stored in portion of an array swaps the top of the heap with the element at position and rebuilds the heap",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "popTo",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "To",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the lowest k elements to the front of the array.\n The elements will be in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Moves the lowest elements to the front of the array The elements will be in no particular order",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "select",
        "normalized": "a(PrimState b)c-\u003eInt-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:selectBy",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the \u003ccode\u003elowest\u003c/code\u003e (as defined by the comparison) k elements\n to the front of the array. The elements will be in no particular\n order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#selectBy",
        "fct-type": "function",
        "title": "selectBy"
      },
      "index": {
        "description": "Moves the lowest as defined by the comparison elements to the front of the array The elements will be in no particular order",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "selectBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:selectByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the \u003ccode\u003elowest\u003c/code\u003e k elements in the portion [l,u) of the\n array into the positions [l,k+l). The elements will be in\n no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#selectByBounds",
        "fct-type": "function",
        "title": "selectByBounds"
      },
      "index": {
        "description": "Moves the lowest elements in the portion of the array into the positions The elements will be in no particular order",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "selectByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using the default ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an entire array using the default ordering",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using a custom ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Sorts an entire array using custom ordering",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "sortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:sortByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eSorts a portion of an array [l,u) using a custom ordering\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#sortByBounds",
        "fct-type": "function",
        "title": "sortByBounds"
      },
      "index": {
        "description": "Sorts portion of an array using custom ordering",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "sortByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Heap.html#v:sortHeap",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a heap stored in a portion of an array [l,u), sorts the\n highest values into [m,u). The elements in [l,m) are not in any\n particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Heap",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Heap.html#sortHeap",
        "fct-type": "function",
        "title": "sortHeap"
      },
      "index": {
        "description": "Given heap stored in portion of an array sorts the highest values into The elements in are not in any particular order",
        "hierarchy": "Data Vector Algorithms Heap",
        "module": "Data.Vector.Algorithms.Heap",
        "name": "sortHeap",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "Heap",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple insertion sort. Though it's O(n^2), its iterative nature can be\n beneficial for small arrays. It is used to sort small segments of an array\n by some of the more heavy-duty, recursive algorithms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Insertion.html",
        "fct-type": "module",
        "title": "Insertion"
      },
      "index": {
        "description": "simple insertion sort Though it its iterative nature can be beneficial for small arrays It is used to sort small segments of an array by some of the more heavy-duty recursive algorithms",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "Insertion",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Insertion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using the default comparison for the type\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Insertion.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an entire array using the default comparison for the type",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using a given comparison\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Insertion.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Sorts an entire array using given comparison",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "sortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#v:sortByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the portion of an array delimited by [l,u)\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Insertion.html#sortByBounds",
        "fct-type": "function",
        "title": "sortByBounds"
      },
      "index": {
        "description": "Sorts the portion of an array delimited by",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "sortByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Insertion.html#v:sortByBounds-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the portion of the array delimited by [l,u) under the assumption\n that [l,m) is already sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Insertion",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Insertion.html#sortByBounds%27",
        "fct-type": "function",
        "title": "sortByBounds'"
      },
      "index": {
        "description": "Sorts the portion of the array delimited by under the assumption that is already sorted",
        "hierarchy": "Data Vector Algorithms Insertion",
        "module": "Data.Vector.Algorithms.Insertion",
        "name": "sortByBounds'",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds'",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements various algorithms based on the introsort algorithm,\n originally described by David R. Musser in the paper /Introspective Sorting\n and Selection Algorithms/. It is also in widespread practical use, as the\n standard unstable sort used in the C++ Standard Template Library.\n\u003c/p\u003e\u003cp\u003eIntrosort is at its core a quicksort. The version implemented here has the\n following optimizations that make it perform better in practice:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Small segments of the array are left unsorted until a final insertion\n     sort pass. This is faster than recursing all the way down to\n     one-element arrays.\n\u003c/li\u003e\u003cli\u003e The pivot for segment [l,u) is chosen as the median of the elements at\n     l, u-1 and (u+l)/2. This yields good behavior on mostly sorted (or\n     reverse-sorted) arrays.\n\u003c/li\u003e\u003cli\u003e The algorithm tracks its recursion depth, and if it decides it is\n     taking too long (depth greater than 2 * lg n), it switches to a heap\n     sort to maintain O(n lg n) worst case behavior. (This is what makes the\n     algorithm introsort).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html",
        "fct-type": "module",
        "title": "Intro"
      },
      "index": {
        "description": "This module implements various algorithms based on the introsort algorithm originally described by David Musser in the paper Introspective Sorting and Selection Algorithms It is also in widespread practical use as the standard unstable sort used in the Standard Template Library Introsort is at its core quicksort The version implemented here has the following optimizations that make it perform better in practice Small segments of the array are left unsorted until final insertion sort pass This is faster than recursing all the way down to one-element arrays The pivot for segment is chosen as the median of the elements at u-1 and This yields good behavior on mostly sorted or reverse-sorted arrays The algorithm tracks its recursion depth and if it decides it is taking too long depth greater than lg it switches to heap sort to maintain lg worst case behavior This is what makes the algorithm introsort",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "Intro",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Intro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:partialSort",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements to the front of the array, sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#partialSort",
        "fct-type": "function",
        "title": "partialSort"
      },
      "index": {
        "description": "Moves the least elements to the front of the array sorted",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "partialSort",
        "normalized": "a(PrimState b)c-\u003eInt-\u003eb()",
        "package": "vector-algorithms",
        "partial": "Sort",
        "signature": "v(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:partialSortBy",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements (as defined by the comparison) to\n the front of the array, sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#partialSortBy",
        "fct-type": "function",
        "title": "partialSortBy"
      },
      "index": {
        "description": "Moves the least elements as defined by the comparison to the front of the array sorted",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "partialSortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "Sort By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:partialSortByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements in the interval [l,u) to the positions\n [l,k+l), sorted.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#partialSortByBounds",
        "fct-type": "function",
        "title": "partialSortByBounds"
      },
      "index": {
        "description": "Moves the least elements in the interval to the positions sorted",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "partialSortByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "Sort By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements to the front of the array in\n no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Moves the least elements to the front of the array in no particular order",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "select",
        "normalized": "a(PrimState b)c-\u003eInt-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:selectBy",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements (as defined by the comparison) to\n the front of the array in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#selectBy",
        "fct-type": "function",
        "title": "selectBy"
      },
      "index": {
        "description": "Moves the least elements as defined by the comparison to the front of the array in no particular order",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "selectBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:selectByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the least k elements in the interval [l,u) to the positions\n [l,k+l) in no particular order.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#selectByBounds",
        "fct-type": "function",
        "title": "selectByBounds"
      },
      "index": {
        "description": "Moves the least elements in the interval to the positions in no particular order",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "selectByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using the default ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an entire array using the default ordering",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an entire array using a custom ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Sorts an entire array using custom ordering",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "sortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Intro.html#v:sortByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eSorts a portion of an array [l,u) using a custom ordering\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Intro",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Intro.html#sortByBounds",
        "fct-type": "function",
        "title": "sortByBounds"
      },
      "index": {
        "description": "Sorts portion of an array using custom ordering",
        "hierarchy": "Data Vector Algorithms Intro",
        "module": "Data.Vector.Algorithms.Intro",
        "name": "sortByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Merge.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a simple top-down merge sort. The temporary buffer\n is preallocated to 1/2 the size of the input array, and shared through\n the entire sorting process to ease the amount of allocation performed in\n total. This is a stable sort.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Merge",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Merge.html",
        "fct-type": "module",
        "title": "Merge"
      },
      "index": {
        "description": "This module implements simple top-down merge sort The temporary buffer is preallocated to the size of the input array and shared through the entire sorting process to ease the amount of allocation performed in total This is stable sort",
        "hierarchy": "Data Vector Algorithms Merge",
        "module": "Data.Vector.Algorithms.Merge",
        "name": "Merge",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Merge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Merge.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Merge",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Merge",
        "module": "Data.Vector.Algorithms.Merge",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Merge.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an array using the default comparison.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Merge",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Merge.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an array using the default comparison",
        "hierarchy": "Data Vector Algorithms Merge",
        "module": "Data.Vector.Algorithms.Merge",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Merge.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an array using a custom comparison.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Merge",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Merge.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Sorts an array using custom comparison",
        "hierarchy": "Data Vector Algorithms Merge",
        "module": "Data.Vector.Algorithms.Merge",
        "name": "sortBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOptimal sorts for very small array sizes, or for small numbers of\n particular indices in a larger array (to be used, for instance, for\n sorting a median of 3 values into the lowest position in an array\n for a median-of-3 quicksort).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html",
        "fct-type": "module",
        "title": "Optimal"
      },
      "index": {
        "description": "Optimal sorts for very small array sizes or for small numbers of particular indices in larger array to be used for instance for sorting median of values into the lowest position in an array for median-of-3 quicksort",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "Optimal",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Optimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort2ByIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the elements at the two given indices using the comparison. This\n is essentially a compare-and-swap, although the first index is assumed to\n be the \u003ccode\u003elower\u003c/code\u003e of the two.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort2ByIndex",
        "fct-type": "function",
        "title": "sort2ByIndex"
      },
      "index": {
        "description": "Sorts the elements at the two given indices using the comparison This is essentially compare-and-swap although the first index is assumed to be the lower of the two",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort2ByIndex",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Index",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort2ByOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the elements at the positions \u003ccode\u003eoff\u003c/code\u003e and 'off + 1' in the given\n array using the comparison.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort2ByOffset",
        "fct-type": "function",
        "title": "sort2ByOffset"
      },
      "index": {
        "description": "Sorts the elements at the positions off and off in the given array using the comparison",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort2ByOffset",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Offset",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort3ByIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the elements at the three given indices. The indices are assumed\n to be given from lowest to highest, so if 'l \u003c m \u003c u' then\n 'sort3ByIndex cmp a m l u' essentially sorts the median of three into the\n lowest position in the array.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort3ByIndex",
        "fct-type": "function",
        "title": "sort3ByIndex"
      },
      "index": {
        "description": "Sorts the elements at the three given indices The indices are assumed to be given from lowest to highest so if then sort3ByIndex cmp essentially sorts the median of three into the lowest position in the array",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort3ByIndex",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Index",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort3ByOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the three elements starting at the given offset in the array.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort3ByOffset",
        "fct-type": "function",
        "title": "sort3ByOffset"
      },
      "index": {
        "description": "Sorts the three elements starting at the given offset in the array",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort3ByOffset",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Offset",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort4ByIndex",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the elements at the four given indices. Like the 2 and 3 element\n versions, this assumes that the indices are given in increasing order, so\n it can be used to sort medians into particular positions and so on.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort4ByIndex",
        "fct-type": "function",
        "title": "sort4ByIndex"
      },
      "index": {
        "description": "Sorts the elements at the four given indices Like the and element versions this assumes that the indices are given in increasing order so it can be used to sort medians into particular positions and so on",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort4ByIndex",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Index",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Optimal.html#v:sort4ByOffset",
      "description": {
        "fct-descr": "\u003cp\u003eSorts the four elements beginning at the offset.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Optimal",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Optimal.html#sort4ByOffset",
        "fct-type": "function",
        "title": "sort4ByOffset"
      },
      "index": {
        "description": "Sorts the four elements beginning at the offset",
        "hierarchy": "Data Vector Algorithms Optimal",
        "module": "Data.Vector.Algorithms.Optimal",
        "name": "sort4ByOffset",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003eInt-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By Offset",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a radix sort for a subclass of unboxed arrays. The\n radix class gives information on\n   * the number of passes needed for the data type\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the size of the auxiliary arrays\n\u003c/li\u003e\u003cli\u003e how to compute the pass-k radix of a value\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRadix sort is not a comparison sort, so it is able to achieve O(n) run\n time, though it also uses O(n) auxiliary space. In addition, there is a\n constant space overhead of 2*size*sizeOf(Int) for the sort, so it is not\n advisable to use this sort for large numbers of very small arrays.\n\u003c/p\u003e\u003cp\u003eA standard example (upon which one could base their own Radix instance)\n is Word32:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e We choose to sort on r = 8 bits at a time\n\u003c/li\u003e\u003cli\u003e A Word32 has b = 32 bits total\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThus, b/r = 4 passes are required, 2^r = 256 elements are needed in an\n   auxiliary array, and the radix function is:\n\u003c/p\u003e\u003cpre\u003e radix k e = (e `shiftR` (k*8)) .&. 255\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html",
        "fct-type": "module",
        "title": "Radix"
      },
      "index": {
        "description": "This module provides radix sort for subclass of unboxed arrays The radix class gives information on the number of passes needed for the data type the size of the auxiliary arrays how to compute the pass-k radix of value Radix sort is not comparison sort so it is able to achieve run time though it also uses auxiliary space In addition there is constant space overhead of size sizeOf Int for the sort so it is not advisable to use this sort for large numbers of very small arrays standard example upon which one could base their own Radix instance is Word32 We choose to sort on bits at time Word32 has bits total Thus passes are required elements are needed in an auxiliary array and the radix function is radix shiftR",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "Radix",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Radix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#t:Radix",
      "description": {
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "class",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html#Radix",
        "fct-type": "class",
        "title": "Radix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "Radix",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Radix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#v:passes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of passes necessary to sort an array of es\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html#passes",
        "fct-type": "method",
        "title": "passes"
      },
      "index": {
        "description": "The number of passes necessary to sort an array of es",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "passes",
        "normalized": "a-\u003eInt",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#v:radix",
      "description": {
        "fct-descr": "\u003cp\u003eThe radix function parameterized by the current pass\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "Int -\u003e e -\u003e Int",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html#radix",
        "fct-type": "method",
        "title": "radix"
      },
      "index": {
        "description": "The radix function parameterized by the current pass",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "radix",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "Int-\u003ee-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of an auxiliary array\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "e -\u003e Int",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "The size of an auxiliary array",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "size",
        "normalized": "a-\u003eInt",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSorts an array based on the Radix instance.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e m ()",
        "fct-source": "src/Data-Vector-Algorithms-Radix.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sorts an array based on the Radix instance",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "sort",
        "normalized": "a(PrimState b)c-\u003eb()",
        "package": "vector-algorithms",
        "partial": "",
        "signature": "v(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Radix.html#v:sortBy",
      "description": {
        "fct-descr": "\u003cp\u003eRadix sorts an array using custom radix information\n requires the number of passes to fully sort the array,\n the size of of auxiliary arrays necessary (should be\n one greater than the maximum value returned by the radix\n function), and a radix function, which takes the pass\n and an element, and returns the relevant radix.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Radix",
        "fct-package": "vector-algorithms",
        "fct-signature": "Int-\u003e Int-\u003e (Int -\u003e e -\u003e Int)-\u003e v (PrimState m) e-\u003e m ()",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "Radix sorts an array using custom radix information requires the number of passes to fully sort the array the size of of auxiliary arrays necessary should be one greater than the maximum value returned by the radix function and radix function which takes the pass and an element and returns the relevant radix",
        "hierarchy": "Data Vector Algorithms Radix",
        "module": "Data.Vector.Algorithms.Radix",
        "name": "sortBy",
        "normalized": "Int-\u003eInt-\u003e(Int-\u003ea-\u003eInt)-\u003eb(PrimState c)a-\u003ec()",
        "package": "vector-algorithms",
        "partial": "By",
        "signature": "Int-\u003eInt-\u003e(Int-\u003ee-\u003eInt)-\u003ev(PrimState m)e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements several methods of searching for indicies to insert\n elements into a sorted vector.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Algorithms-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "This module implements several methods of searching for indicies to insert elements into sorted vector",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "Search",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#t:Comparison",
      "description": {
        "fct-descr": "\u003cp\u003eA type of comparisons between two values of a given type.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "type",
        "fct-source": "src/Data-Vector-Algorithms-Common.html#Comparison",
        "fct-type": "type",
        "title": "Comparison"
      },
      "index": {
        "description": "type of comparisons between two values of given type",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "Comparison",
        "normalized": "",
        "package": "vector-algorithms",
        "partial": "Comparison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearch",
      "description": {
        "fct-descr": "\u003cp\u003eFinds an index in a given sorted vector at which the given element could\n be inserted while maintaining the sortedness of the vector.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearch",
        "fct-type": "function",
        "title": "binarySearch"
      },
      "index": {
        "description": "Finds an index in given sorted vector at which the given element could be inserted while maintaining the sortedness of the vector",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearch",
        "normalized": "a(PrimState b)c-\u003ec-\u003eb Int",
        "package": "vector-algorithms",
        "partial": "Search",
        "signature": "v(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchBy",
      "description": {
        "fct-descr": "\u003cp\u003eFinds an index in a given vector, which must be sorted with respect to the\n given comparison function, at which the given element could be inserted while\n preserving the vector's sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchBy",
        "fct-type": "function",
        "title": "binarySearchBy"
      },
      "index": {
        "description": "Finds an index in given vector which must be sorted with respect to the given comparison function at which the given element could be inserted while preserving the vector sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search By",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a vector sorted with respect to a given comparison function in indices\n in [l,u), finds an index in [l,u] at which the given element could be inserted\n while preserving sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e Int -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchByBounds",
        "fct-type": "function",
        "title": "binarySearchByBounds"
      },
      "index": {
        "description": "Given vector sorted with respect to given comparison function in indices in finds an index in at which the given element could be inserted while preserving sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003eInt-\u003eInt-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search By Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003eInt-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchL",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the lowest index in a given sorted vector at which the given element\n could be inserted while maintaining the sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchL",
        "fct-type": "function",
        "title": "binarySearchL"
      },
      "index": {
        "description": "Finds the lowest index in given sorted vector at which the given element could be inserted while maintaining the sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchL",
        "normalized": "a(PrimState b)c-\u003ec-\u003eb Int",
        "package": "vector-algorithms",
        "partial": "Search",
        "signature": "v(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchLBy",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the lowest index in a given vector, which must be sorted with respect to\n the given comparison function, at which the given element could be inserted\n while preserving the sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchLBy",
        "fct-type": "function",
        "title": "binarySearchLBy"
      },
      "index": {
        "description": "Finds the lowest index in given vector which must be sorted with respect to the given comparison function at which the given element could be inserted while preserving the sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchLBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search LBy",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchLByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a vector sorted with respect to a given comparison function on indices\n in [l,u), finds the lowest index in [l,u] at which the given element could be\n inserted while preserving sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e Int -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchLByBounds",
        "fct-type": "function",
        "title": "binarySearchLByBounds"
      },
      "index": {
        "description": "Given vector sorted with respect to given comparison function on indices in finds the lowest index in at which the given element could be inserted while preserving sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchLByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003eInt-\u003eInt-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search LBy Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003eInt-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchP",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a predicate that is guaraneteed to be monotone on the given vector,\n finds the first index at which the predicate returns True, or the length of\n the array if the predicate is false for the entire array.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "(e -\u003e Bool) -\u003e v (PrimState m) e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchP",
        "fct-type": "function",
        "title": "binarySearchP"
      },
      "index": {
        "description": "Given predicate that is guaraneteed to be monotone on the given vector finds the first index at which the predicate returns True or the length of the array if the predicate is false for the entire array",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchP",
        "normalized": "(a-\u003eBool)-\u003eb(PrimState c)a-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search",
        "signature": "(e-\u003eBool)-\u003ev(PrimState m)e-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchPBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a predicate that is guaranteed to be monotone on the indices [l,u) in\n a given vector, finds the index in [l,u] at which the predicate turns from\n False to True (yielding u if the entire interval is False).\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "(e -\u003e Bool) -\u003e v (PrimState m) e -\u003e Int -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchPBounds",
        "fct-type": "function",
        "title": "binarySearchPBounds"
      },
      "index": {
        "description": "Given predicate that is guaranteed to be monotone on the indices in given vector finds the index in at which the predicate turns from False to True yielding if the entire interval is False",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchPBounds",
        "normalized": "(a-\u003eBool)-\u003eb(PrimState c)a-\u003eInt-\u003eInt-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search PBounds",
        "signature": "(e-\u003eBool)-\u003ev(PrimState m)e-\u003eInt-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchR",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the greatest index in a given sorted vector at which the given element\n could be inserted while maintaining sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchR",
        "fct-type": "function",
        "title": "binarySearchR"
      },
      "index": {
        "description": "Finds the greatest index in given sorted vector at which the given element could be inserted while maintaining sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchR",
        "normalized": "a(PrimState b)c-\u003ec-\u003eb Int",
        "package": "vector-algorithms",
        "partial": "Search",
        "signature": "v(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchRBy",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the greatest index in a given vector, which must be sorted with respect to\n the given comparison function, at which the given element could be inserted\n while preserving the sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchRBy",
        "fct-type": "function",
        "title": "binarySearchRBy"
      },
      "index": {
        "description": "Finds the greatest index in given vector which must be sorted with respect to the given comparison function at which the given element could be inserted while preserving the sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchRBy",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search RBy",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-algorithms/docs/Data-Vector-Algorithms-Search.html#v:binarySearchRByBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a vector sorted with respect to the given comparison function on indices\n in [l,u), finds the greatest index in [l,u] at which the given element could be\n inserted while preserving sortedness.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Algorithms.Search",
        "fct-package": "vector-algorithms",
        "fct-signature": "Comparison e -\u003e v (PrimState m) e -\u003e e -\u003e Int -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Vector-Algorithms-Search.html#binarySearchRByBounds",
        "fct-type": "function",
        "title": "binarySearchRByBounds"
      },
      "index": {
        "description": "Given vector sorted with respect to the given comparison function on indices in finds the greatest index in at which the given element could be inserted while preserving sortedness",
        "hierarchy": "Data Vector Algorithms Search",
        "module": "Data.Vector.Algorithms.Search",
        "name": "binarySearchRByBounds",
        "normalized": "Comparison a-\u003eb(PrimState c)a-\u003ea-\u003eInt-\u003eInt-\u003ec Int",
        "package": "vector-algorithms",
        "partial": "Search RBy Bounds",
        "signature": "Comparison e-\u003ev(PrimState m)e-\u003ee-\u003eInt-\u003eInt-\u003em Int"
      }
    }
  }
]