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
        "word": "haskell98libraries"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Array",
          "name": "Array",
          "package": "haskell98libraries",
          "source": "src/Array.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Array",
          "module": "Array",
          "name": "Array",
          "package": "haskell98libraries",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable non-strict (boxed) arrays\n with indices in \u003ccode\u003ei\u003c/code\u003e and elements in \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Array",
          "name": "Array",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable non-strict boxed arrays with indices in and elements in",
          "hierarchy": "Array",
          "module": "Array",
          "name": "Array",
          "package": "haskell98libraries",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value at the given index in an array.\n\u003c/p\u003e",
          "module": "Array",
          "name": "(!)",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e i -\u003e e",
          "type": "function"
        },
        "index": {
          "description": "The value at the given index in an array",
          "hierarchy": "Array",
          "module": "Array",
          "name": "(!) !",
          "normalized": "Array a b-\u003ea-\u003eb",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an array identical to the first argument except that it has\n been updated by the associations in the right argument.\n For example, if \u003ccode\u003em\u003c/code\u003e is a 1-origin, \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en\u003c/code\u003e matrix, then\n\u003c/p\u003e\u003cpre\u003e m//[((i,i), 0) | i \u003c- [1..n]]\n\u003c/pre\u003e\u003cp\u003eis the same matrix, except with the diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eRepeated indices in the association list are handled as for \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e:\n Haskell 98 specifies that the resulting array is undefined (i.e. bottom),\n but GHC's implementation uses the last association for each index.\n\u003c/p\u003e",
          "module": "Array",
          "name": "(//)",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e [(i, e)] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Constructs an array identical to the first argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed Repeated indices in the association list are handled as for array Haskell specifies that the resulting array is undefined i.e bottom but GHC implementation uses the last association for each index",
          "hierarchy": "Array",
          "module": "Array",
          "name": "(//) //",
          "normalized": "Array a b-\u003e[(a,b)]-\u003eArray a b",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes an array and an association list and accumulates\n pairs from the list into the array with the accumulating function \u003ccode\u003ef\u003c/code\u003e.\n Thus \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e can be defined using \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \u003c- range b])\n\u003c/pre\u003e",
          "module": "Array",
          "name": "accum",
          "package": "haskell98libraries",
          "signature": "(e -\u003e a -\u003e e) -\u003e Array i e -\u003e [(i, a)] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
          "hierarchy": "Array",
          "module": "Array",
          "name": "accum",
          "normalized": "(a-\u003eb-\u003ea)-\u003eArray c a-\u003e[(c,b)]-\u003eArray c a",
          "package": "haskell98libraries",
          "signature": "(e-\u003ea-\u003ee)-\u003eArray i e-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e function deals with repeated indices in the association\n list using an \u003cem\u003eaccumulating function\u003c/em\u003e which combines the values of\n associations with the same index.\n For example, given a list of values of some index type, \u003ccode\u003ehist\u003c/code\u003e\n produces a histogram of the number of occurrences of each index within\n a specified range:\n\u003c/p\u003e\u003cpre\u003e hist :: (Ix a, Num b) =\u003e (a,a) -\u003e [a] -\u003e Array a b\n hist bnds is = accumArray (+) 0 bnds [(i, 1) | i\u003c-is, inRange bnds i]\n\u003c/pre\u003e\u003cp\u003eIf the accumulating function is strict, then \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e is strict in\n the values, as well as the indices, in the association list.  Thus,\n unlike ordinary arrays built with \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e, accumulated arrays should\n not in general be recursive.\n\u003c/p\u003e",
          "module": "Array",
          "name": "accumArray",
          "package": "haskell98libraries",
          "signature": "(e -\u003e a -\u003e e)-\u003e e-\u003e (i, i)-\u003e [(i, a)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "The accumArray function deals with repeated indices in the association list using an accumulating function which combines the values of associations with the same index For example given list of values of some index type hist produces histogram of the number of occurrences of each index within specified range hist Ix Num Array hist bnds is accumArray bnds is inRange bnds If the accumulating function is strict then accumArray is strict in the values as well as the indices in the association list Thus unlike ordinary arrays built with array accumulated arrays should not in general be recursive",
          "hierarchy": "Array",
          "module": "Array",
          "name": "accumArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003eArray c a",
          "package": "haskell98libraries",
          "partial": "Array",
          "signature": "(e-\u003ea-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array with the specified bounds and containing values\n for given indices within these bounds.\n\u003c/p\u003e\u003cp\u003eThe array is undefined (i.e. bottom) if any index in the list is\n out of bounds.  The Haskell 98 Report further specifies that if any\n two associations in the list have the same index, the value at that\n index is undefined (i.e. bottom).  However in GHC's implementation,\n the value at such an index is the value part of the last association\n with that index in the list.\n\u003c/p\u003e\u003cp\u003eBecause the indices must be checked for these errors, \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e is\n strict in the bounds argument and in the indices of the association\n list, but non-strict in the values.  Thus, recurrences such as the\n following are possible:\n\u003c/p\u003e\u003cpre\u003e a = array (1,100) ((1,1) : [(i, i * a!(i-1)) | i \u003c- [2..100]])\n\u003c/pre\u003e\u003cp\u003eNot every index within the bounds of the array need appear in the\n association list, but the values associated with indices that do not\n appear will be undefined (i.e. bottom).\n\u003c/p\u003e\u003cp\u003eIf, in any dimension, the lower bound is greater than the upper bound,\n then the array is legal, but empty.  Indexing an empty array always\n gives an array-bounds error, but \u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e still yields the bounds\n with which the array was constructed.\n\u003c/p\u003e",
          "module": "Array",
          "name": "array",
          "package": "haskell98libraries",
          "signature": "(i, i)-\u003e [(i, e)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with the specified bounds and containing values for given indices within these bounds The array is undefined i.e bottom if any index in the list is out of bounds The Haskell Report further specifies that if any two associations in the list have the same index the value at that index is undefined i.e bottom However in GHC implementation the value at such an index is the value part of the last association with that index in the list Because the indices must be checked for these errors array is strict in the bounds argument and in the indices of the association list but non-strict in the values Thus recurrences such as the following are possible array i-1 Not every index within the bounds of the array need appear in the association list but the values associated with indices that do not appear will be undefined i.e bottom If in any dimension the lower bound is greater than the upper bound then the array is legal but empty Indexing an empty array always gives an array-bounds error but bounds still yields the bounds with which the array was constructed",
          "hierarchy": "Array",
          "module": "Array",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,b)]-\u003eArray a b",
          "package": "haskell98libraries",
          "signature": "(i,i)-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of associations of an array in index order.\n\u003c/p\u003e",
          "module": "Array",
          "name": "assocs",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e [(i, e)]",
          "type": "function"
        },
        "index": {
          "description": "The list of associations of an array in index order",
          "hierarchy": "Array",
          "module": "Array",
          "name": "assocs",
          "normalized": "Array a b-\u003e[(a,b)]",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003e[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds with which an array was constructed.\n\u003c/p\u003e",
          "module": "Array",
          "name": "bounds",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e (i, i)",
          "type": "function"
        },
        "index": {
          "description": "The bounds with which an array was constructed",
          "hierarchy": "Array",
          "module": "Array",
          "name": "bounds",
          "normalized": "Array a b-\u003e(a,a)",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of elements of an array in index order.\n\u003c/p\u003e",
          "module": "Array",
          "name": "elems",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The list of elements of an array in index order",
          "hierarchy": "Array",
          "module": "Array",
          "name": "elems",
          "normalized": "Array a b-\u003e[b]",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of indices of an array in ascending order.\n\u003c/p\u003e",
          "module": "Array",
          "name": "indices",
          "package": "haskell98libraries",
          "signature": "Array i e -\u003e [i]",
          "type": "function"
        },
        "index": {
          "description": "The list of indices of an array in ascending order",
          "hierarchy": "Array",
          "module": "Array",
          "name": "indices",
          "normalized": "Array a b-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "Array i e-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eixmap\u003c/a\u003e\u003c/code\u003e allows for transformations on array indices.\n It may be thought of as providing function composition on the right\n with the mapping that the original array embodies.\n\u003c/p\u003e\u003cp\u003eA similar transformation of array values may be achieved using \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n from the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Array",
          "name": "ixmap",
          "package": "haskell98libraries",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e Array j e -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "ixmap allows for transformations on array indices It may be thought of as providing function composition on the right with the mapping that the original array embodies similar transformation of array values may be achieved using fmap from the Array instance of the Functor class",
          "hierarchy": "Array",
          "module": "Array",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eArray b c-\u003eArray a c",
          "package": "haskell98libraries",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eArray j e-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array from a pair of bounds and a list of values in\n index order.\n\u003c/p\u003e",
          "module": "Array",
          "name": "listArray",
          "package": "haskell98libraries",
          "signature": "(i, i) -\u003e [e] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array from pair of bounds and list of values in index order",
          "hierarchy": "Array",
          "module": "Array",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[b]-\u003eArray a b",
          "package": "haskell98libraries",
          "partial": "Array",
          "signature": "(i,i)-\u003e[e]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Array.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bits",
          "name": "Bits",
          "package": "haskell98libraries",
          "source": "src/Bits.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bits",
          "module": "Bits",
          "name": "Bits",
          "package": "haskell98libraries",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CError",
          "name": "CError",
          "package": "haskell98libraries",
          "source": "src/CError.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CError",
          "module": "CError",
          "name": "CError",
          "package": "haskell98libraries",
          "partial": "CError",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CForeign",
          "name": "CForeign",
          "package": "haskell98libraries",
          "source": "src/CForeign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CForeign",
          "module": "CForeign",
          "name": "CForeign",
          "package": "haskell98libraries",
          "partial": "CForeign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CForeign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CPUTime",
          "name": "CPUTime",
          "package": "haskell98libraries",
          "source": "src/CPUTime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CPUTime",
          "module": "CPUTime",
          "name": "CPUTime",
          "package": "haskell98libraries",
          "partial": "CPUTime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CPUTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecpuTimePrecision\u003c/a\u003e\u003c/code\u003e constant is the smallest measurable difference\n in CPU time that the implementation can record, and is given as an\n integral number of picoseconds.\n\u003c/p\u003e",
          "module": "CPUTime",
          "name": "cpuTimePrecision",
          "package": "haskell98libraries",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "The cpuTimePrecision constant is the smallest measurable difference in CPU time that the implementation can record and is given as an integral number of picoseconds",
          "hierarchy": "CPUTime",
          "module": "CPUTime",
          "name": "cpuTimePrecision",
          "package": "haskell98libraries",
          "partial": "Time Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CPUTime.html#v:cpuTimePrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetCPUTime\u003c/a\u003e\u003c/code\u003e returns the number of picoseconds CPU time\n used by the current program.  The precision of this result is\n implementation-dependent.\n\u003c/p\u003e",
          "module": "CPUTime",
          "name": "getCPUTime",
          "package": "haskell98libraries",
          "signature": "IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Computation getCPUTime returns the number of picoseconds CPU time used by the current program The precision of this result is implementation-dependent",
          "hierarchy": "CPUTime",
          "module": "CPUTime",
          "name": "getCPUTime",
          "package": "haskell98libraries",
          "partial": "CPUTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CPUTime.html#v:getCPUTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CString",
          "name": "CString",
          "package": "haskell98libraries",
          "source": "src/CString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CString",
          "module": "CString",
          "name": "CString",
          "package": "haskell98libraries",
          "partial": "CString",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CTypes",
          "name": "CTypes",
          "package": "haskell98libraries",
          "source": "src/CTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CTypes",
          "module": "CTypes",
          "name": "CTypes",
          "package": "haskell98libraries",
          "partial": "CTypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/CTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Char",
          "name": "Char",
          "package": "haskell98libraries",
          "source": "src/Char.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Char",
          "module": "Char",
          "name": "Char",
          "package": "haskell98libraries",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Char",
          "name": "Char",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Char",
          "module": "Char",
          "name": "Char",
          "package": "haskell98libraries",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "String",
          "package": "haskell98libraries",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Char",
          "module": "Char",
          "name": "String",
          "package": "haskell98libraries",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "chr",
          "package": "haskell98libraries",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "The toEnum method restricted to the type Char",
          "hierarchy": "Char",
          "module": "Char",
          "name": "chr",
          "normalized": "Int-\u003eChar",
          "package": "haskell98libraries",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a single digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.  \n This function fails unless its argument satisfies \u003ccode\u003e\u003ca\u003eisHexDigit\u003c/a\u003e\u003c/code\u003e,\n but recognises both upper and lower-case hexadecimal digits\n (i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Char",
          "name": "digitToInt",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Convert single digit Char to the corresponding Int This function fails unless its argument satisfies isHexDigit but recognises both upper and lower-case hexadecimal digits i.e",
          "hierarchy": "Char",
          "module": "Char",
          "name": "digitToInt",
          "normalized": "Char-\u003eInt",
          "package": "haskell98libraries",
          "partial": "To Int",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:digitToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e in the range \u003ccode\u003e0\u003c/code\u003e..\u003ccode\u003e15\u003c/code\u003e to the corresponding single\n digit \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.  This function fails on other inputs, and generates\n lower-case hexadecimal digits.\n\u003c/p\u003e",
          "module": "Char",
          "name": "intToDigit",
          "package": "haskell98libraries",
          "signature": "Int -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert an Int in the range to the corresponding single digit Char This function fails on other inputs and generates lower-case hexadecimal digits",
          "hierarchy": "Char",
          "module": "Char",
          "name": "intToDigit",
          "normalized": "Int-\u003eChar",
          "package": "haskell98libraries",
          "partial": "To Digit",
          "signature": "Int-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:intToDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic Unicode characters (lower-case, upper-case and\n title-case letters, plus letters of caseless scripts and modifiers letters).\n This function is equivalent to \u003ccode\u003e\u003ca\u003eisLetter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isAlpha",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic Unicode characters lower-case upper-case and title-case letters plus letters of caseless scripts and modifiers letters This function is equivalent to isLetter",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isAlpha",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects alphabetic or numeric digit Unicode characters.\n\u003c/p\u003e\u003cp\u003eNote that numeric digits outside the ASCII range are selected by this\n function but not by \u003ccode\u003e\u003ca\u003eisDigit\u003c/a\u003e\u003c/code\u003e.  Such digits may be part of identifiers\n but are not used by the printer and reader to represent numbers.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isAlphaNum",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects alphabetic or numeric digit Unicode characters Note that numeric digits outside the ASCII range are selected by this function but not by isDigit Such digits may be part of identifiers but are not used by the printer and reader to represent numbers",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isAlphaNum",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Alpha Num",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 128 characters of the Unicode character set,\n corresponding to the ASCII character set.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isAscii",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ASCII character set",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isAscii",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Ascii",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects control characters, which are the non-printing characters of\n the Latin-1 subset of Unicode.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isControl",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects control characters which are the non-printing characters of the Latin-1 subset of Unicode",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isControl",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Control",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isDigit",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII digits i.e",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII hexadecimal digits,\n i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'9'\u003c/code\u003e, \u003ccode\u003e'a'\u003c/code\u003e..\u003ccode\u003e'f'\u003c/code\u003e, \u003ccode\u003e'A'\u003c/code\u003e..\u003ccode\u003e'F'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isHexDigit",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII hexadecimal digits i.e",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the first 256 characters of the Unicode character set,\n corresponding to the ISO 8859-1 (Latin-1) character set.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isLatin1",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects the first characters of the Unicode character set corresponding to the ISO Latin-1 character set",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isLatin1",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Latin",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects lower-case alphabetic Unicode characters (letters).\n\u003c/p\u003e",
          "module": "Char",
          "name": "isLower",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects lower-case alphabetic Unicode characters letters",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isLower",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects ASCII octal digits, i.e. \u003ccode\u003e'0'\u003c/code\u003e..\u003ccode\u003e'7'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isOctDigit",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects ASCII octal digits i.e",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isOctDigit",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Oct Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects printable Unicode characters\n (letters, numbers, marks, punctuation, symbols and spaces).\n\u003c/p\u003e",
          "module": "Char",
          "name": "isPrint",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects printable Unicode characters letters numbers marks punctuation symbols and spaces",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isPrint",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Print",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for any Unicode space character, and the control\n characters \u003ccode\u003e\\t\u003c/code\u003e, \u003ccode\u003e\\n\u003c/code\u003e, \u003ccode\u003e\\r\u003c/code\u003e, \u003ccode\u003e\\f\u003c/code\u003e, \u003ccode\u003e\\v\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isSpace",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns True for any Unicode space character and the control characters",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isSpace",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects upper-case or title-case alphabetic Unicode characters (letters).\n Title case is used by a small number of letter ligatures like the\n single-character form of \u003cem\u003eLj\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "isUpper",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Selects upper-case or title-case alphabetic Unicode characters letters Title case is used by small number of letter ligatures like the single-character form of Lj",
          "hierarchy": "Char",
          "module": "Char",
          "name": "isUpper",
          "normalized": "Char-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string representation of a character, using Haskell\n source-language escape conventions.  For example:\n\u003c/p\u003e\u003cpre\u003e lexLitChar  \"\\\\nHello\"  =  [(\"\\\\n\", \"Hello\")]\n\u003c/pre\u003e",
          "module": "Char",
          "name": "lexLitChar",
          "package": "haskell98libraries",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "Read string representation of character using Haskell source-language escape conventions For example lexLitChar nHello Hello",
          "hierarchy": "Char",
          "module": "Char",
          "name": "lexLitChar",
          "package": "haskell98libraries",
          "partial": "Lit Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:lexLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e method restricted to the type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Char",
          "name": "ord",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The fromEnum method restricted to the type Char",
          "hierarchy": "Char",
          "module": "Char",
          "name": "ord",
          "normalized": "Char-\u003eInt",
          "package": "haskell98libraries",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string representation of a character, using Haskell\n source-language escape conventions, and convert it to the character\n that it encodes.  For example:\n\u003c/p\u003e\u003cpre\u003e readLitChar \"\\\\nHello\"  =  [('\\n', \"Hello\")]\n\u003c/pre\u003e",
          "module": "Char",
          "name": "readLitChar",
          "package": "haskell98libraries",
          "signature": "ReadS Char",
          "type": "function"
        },
        "index": {
          "description": "Read string representation of character using Haskell source-language escape conventions and convert it to the character that it encodes For example readLitChar nHello Hello",
          "hierarchy": "Char",
          "module": "Char",
          "name": "readLitChar",
          "package": "haskell98libraries",
          "partial": "Lit Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:readLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to a string using only printable characters,\n using Haskell source-language escape conventions.  For example:\n\u003c/p\u003e\u003cpre\u003e showLitChar '\\n' s  =  \"\\\\n\" ++ s\n\u003c/pre\u003e",
          "module": "Char",
          "name": "showLitChar",
          "package": "haskell98libraries",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Convert character to string using only printable characters using Haskell source-language escape conventions For example showLitChar",
          "hierarchy": "Char",
          "module": "Char",
          "name": "showLitChar",
          "normalized": "Char-\u003eShowS",
          "package": "haskell98libraries",
          "partial": "Lit Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:showLitChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding lower-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Char",
          "name": "toLower",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding lower-case letter if any Any other character is returned unchanged",
          "hierarchy": "Char",
          "module": "Char",
          "name": "toLower",
          "normalized": "Char-\u003eChar",
          "package": "haskell98libraries",
          "partial": "Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a letter to the corresponding upper-case letter, if any.\n Any other character is returned unchanged.\n\u003c/p\u003e",
          "module": "Char",
          "name": "toUpper",
          "package": "haskell98libraries",
          "signature": "Char -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert letter to the corresponding upper-case letter if any Any other character is returned unchanged",
          "hierarchy": "Char",
          "module": "Char",
          "name": "toUpper",
          "normalized": "Char-\u003eChar",
          "package": "haskell98libraries",
          "partial": "Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Char.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Complex",
          "name": "Complex",
          "package": "haskell98libraries",
          "source": "src/Complex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "Complex",
          "package": "haskell98libraries",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "Complex",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "Complex",
          "package": "haskell98libraries",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
          "module": "Complex",
          "name": ":+",
          "package": "haskell98libraries",
          "signature": "a :+ !a",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its real and imaginary rectangular components",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": ":+",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v::-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecis\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e is a complex value with magnitude \u003ccode\u003e1\u003c/code\u003e\n and phase \u003ccode\u003et\u003c/code\u003e (modulo \u003ccode\u003e2*\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Complex",
          "name": "cis",
          "package": "haskell98libraries",
          "signature": "a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "cis is complex value with magnitude and phase modulo pi",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "cis",
          "normalized": "a-\u003eComplex a",
          "package": "haskell98libraries",
          "signature": "a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conjugate of a complex number.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "conjugate",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "The conjugate of complex number",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "conjugate",
          "normalized": "Complex a-\u003eComplex a",
          "package": "haskell98libraries",
          "signature": "Complex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the imaginary part of a complex number.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "imagPart",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the imaginary part of complex number",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "imagPart",
          "normalized": "Complex a-\u003ea",
          "package": "haskell98libraries",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nonnegative magnitude of a complex number.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "magnitude",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The nonnegative magnitude of complex number",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "magnitude",
          "normalized": "Complex a-\u003ea",
          "package": "haskell98libraries",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a complex number from polar components of magnitude and phase.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "mkPolar",
          "package": "haskell98libraries",
          "signature": "a -\u003e a -\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "Form complex number from polar components of magnitude and phase",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "mkPolar",
          "normalized": "a-\u003ea-\u003eComplex a",
          "package": "haskell98libraries",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phase of a complex number, in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n If the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "phase",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The phase of complex number in the range pi pi If the magnitude is zero then so is the phase",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "phase",
          "normalized": "Complex a-\u003ea",
          "package": "haskell98libraries",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003epolar\u003c/a\u003e\u003c/code\u003e takes a complex number and\n returns a (magnitude, phase) pair in canonical form:\n the magnitude is nonnegative, and the phase in the range \u003ccode\u003e(-\u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e;\n if the magnitude is zero, then so is the phase.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "polar",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e (a, a)",
          "type": "function"
        },
        "index": {
          "description": "The function polar takes complex number and returns magnitude phase pair in canonical form the magnitude is nonnegative and the phase in the range pi pi if the magnitude is zero then so is the phase",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "polar",
          "normalized": "Complex a-\u003e(a,a)",
          "package": "haskell98libraries",
          "signature": "Complex a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the real part of a complex number.\n\u003c/p\u003e",
          "module": "Complex",
          "name": "realPart",
          "package": "haskell98libraries",
          "signature": "Complex a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extracts the real part of complex number",
          "hierarchy": "Complex",
          "module": "Complex",
          "name": "realPart",
          "normalized": "Complex a-\u003ea",
          "package": "haskell98libraries",
          "partial": "Part",
          "signature": "Complex a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Complex.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "Directory",
          "package": "haskell98libraries",
          "source": "src/Directory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "Directory",
          "package": "haskell98libraries",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "Permissions",
          "package": "haskell98libraries",
          "source": "src/Directory.html#Permissions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "Permissions",
          "package": "haskell98libraries",
          "partial": "Permissions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#t:Permissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "Permissions",
          "package": "haskell98libraries",
          "signature": "Permissions",
          "source": "src/Directory.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "Permissions",
          "package": "haskell98libraries",
          "partial": "Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:Permissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreateDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e creates a new directory \u003ccode\u003edir\u003c/code\u003e which is\ninitially empty, or as near to empty as the operating system\nallows.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisAlreadyExistsError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eAlreadyExists\u003c/code\u003e\nThe operand refers to a directory that already exists.  \n\u003ccode\u003e [EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path to the directory. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources (virtual memory, process file descriptors,\nphysical disk space, etc.) are available to perform the operation.\n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "createDirectory",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "createDirectory dir creates new directory dir which is initially empty or as near to empty as the operating system allows The operation may fail with isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES isAlreadyExistsError AlreadyExists The operand refers to directory that already exists EEXIST HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP NoSuchThing There is no path to the directory ENOENT ENOTDIR ResourceExhausted Insufficient resources virtual memory process file descriptors physical disk space etc are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK InappropriateType The path refers to an existing non-directory object EEXIST",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "createDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:createDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesDirectoryExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument file\nexists and is a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Directory",
          "name": "doesDirectoryExist",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The operation doesDirectoryExist returns True if the argument file exists and is directory and False otherwise",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "doesDirectoryExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Directory Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:doesDirectoryExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operation \u003ccode\u003e\u003ca\u003edoesFileExist\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\nif the argument file exists and is not a directory, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Directory",
          "name": "doesFileExist",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The operation doesFileExist returns True if the argument file exists and is not directory and False otherwise",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "doesFileExist",
          "normalized": "FilePath-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "File Exist",
          "signature": "FilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:doesFileExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "executable",
          "package": "haskell98libraries",
          "signature": "Bool",
          "source": "src/Directory.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "executable",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ca\u003egetCurrentDirectory\u003c/a\u003e\u003c/code\u003e returns an absolute path to the\ncurrent directory of the calling process.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThere is no path referring to the current directory.\n\u003ccode\u003e[EPERM, ENOENT, ESTALE...]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that in a concurrent program, the current directory is global\nstate shared between all threads of the process.  When using\nfilesystem operations from multiple threads, it is therefore highly\nrecommended to use absolute rather than relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Directory",
          "name": "getCurrentDirectory",
          "package": "haskell98libraries",
          "signature": "IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "If the operating system has notion of current directories getCurrentDirectory returns an absolute path to the current directory of the calling process The operation may fail with HardwareFault physical error has occurred EIO isDoesNotExistError NoSuchThing There is no path referring to the current directory EPERM ENOENT ESTALE isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The operating system has no notion of current directory Note that in concurrent program the current directory is global state shared between all threads of the process When using filesystem operations from multiple threads it is therefore highly recommended to use absolute rather than relative FilePath",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "getCurrentDirectory",
          "package": "haskell98libraries",
          "partial": "Current Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:getCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egetDirectoryContents\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e returns a list of \u003cem\u003eall\u003c/em\u003e entries\nin \u003cem\u003edir\u003c/em\u003e. \n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.\n\u003ccode\u003e[EMFILE, ENFILE]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "getDirectoryContents",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "getDirectoryContents dir returns list of all entries in dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES ResourceExhausted Insufficient resources are available to perform the operation EMFILE ENFILE InappropriateType The path refers to an existing non-directory object ENOTDIR",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "getDirectoryContents",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "haskell98libraries",
          "partial": "Directory Contents",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:getDirectoryContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "getModificationTime",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO ClockTime",
          "source": "src/Directory.html#getModificationTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "getModificationTime",
          "normalized": "FilePath-\u003eIO ClockTime",
          "package": "haskell98libraries",
          "partial": "Modification Time",
          "signature": "FilePath-\u003eIO ClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:getModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "getPermissions",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO Permissions",
          "source": "src/Directory.html#getPermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "getPermissions",
          "normalized": "FilePath-\u003eIO Permissions",
          "package": "haskell98libraries",
          "partial": "Permissions",
          "signature": "FilePath-\u003eIO Permissions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:getPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "readable",
          "package": "haskell98libraries",
          "signature": "Bool",
          "source": "src/Directory.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "readable",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:readable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e removes an existing directory \u003cem\u003edir\u003c/em\u003e.  The\nimplementation may specify additional constraints which must be\nsatisfied before a directory can be removed (e.g. the directory has to\nbe empty, or may not be in use by other processes).  It is not legal\nfor an implementation to partially remove a directory unless the\nentire directory is removed. A conformant implementation need not\nsupport directory removal in all situations (e.g. removal of the root\ndirectory).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\nEIO\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n[ENAMETOOLONG, ELOOP]\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support removal in this situation.\n\u003ccode\u003e[EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "removeDirectory",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeDirectory dir removes an existing directory dir The implementation may specify additional constraints which must be satisfied before directory can be removed e.g the directory has to be empty or may not be in use by other processes It is not legal for an implementation to partially remove directory unless the entire directory is removed conformant implementation need not support directory removal in all situations e.g removal of the root directory The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support removal in this situation EINVAL InappropriateType The operand refers to an existing non-directory object ENOTDIR",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "removeDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:removeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eremoveFile\u003c/a\u003e\u003c/code\u003e \u003cem\u003efile\u003c/em\u003e removes the directory entry for an existing file\n\u003cem\u003efile\u003c/em\u003e, where \u003cem\u003efile\u003c/em\u003e is not itself a directory. The\nimplementation may specify additional constraints which must be\nsatisfied before a file can be removed (e.g. the file may not be in\nuse by other processes).\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe file does not exist. \n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.  \n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe operand refers to an existing directory.\n\u003ccode\u003e[EPERM, EINVAL]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "removeFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeFile file removes the directory entry for an existing file file where file is not itself directory The implementation may specify additional constraints which must be satisfied before file can be removed e.g the file may not be in use by other processes The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The file does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY InappropriateType The operand refers to an existing directory EPERM EINVAL",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "removeFile",
          "normalized": "FilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:removeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameDirectory\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing\ndirectory from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e directory\nalready exists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e directory.\nIf the \u003cem\u003enew\u003c/em\u003e directory is neither the \u003cem\u003eold\u003c/em\u003e directory nor an\nalias of the \u003cem\u003eold\u003c/em\u003e directory, it is removed as if by\n\u003ccode\u003e\u003ca\u003eremoveDirectory\u003c/a\u003e\u003c/code\u003e.  A conformant implementation need not support\nrenaming directories in all situations (e.g. renaming to an existing\ndirectory, or across different physical devices), but the constraints\nmust be documented.\n\u003c/p\u003e\u003cp\u003eOn Win32 platforms, \u003ccode\u003erenameDirectory\u003c/code\u003e fails if the \u003cem\u003enew\u003c/em\u003e directory already\nexists.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original directory does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY, ENOTEMPTY, EEXIST]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EINVAL, EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR, EISDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "renameDirectory",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "renameDirectory old new changes the name of an existing directory from old to new If the new directory already exists it is atomically replaced by the old directory If the new directory is neither the old directory nor an alias of the old directory it is removed as if by removeDirectory conformant implementation need not support renaming directories in all situations e.g renaming to an existing directory or across different physical devices but the constraints must be documented On Win32 platforms renameDirectory fails if the new directory already exists The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original directory does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY ENOTEMPTY EEXIST UnsupportedOperation The implementation does not support renaming in this situation EINVAL EXDEV InappropriateType Either path refers to an existing non-directory object ENOTDIR EISDIR",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "renameDirectory",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:renameDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erenameFile\u003c/a\u003e\u003c/code\u003e old new\u003c/code\u003e changes the name of an existing file system\nobject from \u003cem\u003eold\u003c/em\u003e to \u003cem\u003enew\u003c/em\u003e.  If the \u003cem\u003enew\u003c/em\u003e object already\nexists, it is atomically replaced by the \u003cem\u003eold\u003c/em\u003e object.  Neither\npath may refer to an existing directory.  A conformant implementation\nneed not support renaming files in all situations (e.g. renaming\nacross different physical devices), but the constraints must be\ndocumented.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nEither operand is not a valid file name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe original file does not exist, or there is no path to the target.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EROFS, EACCES, EPERM]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e\nInsufficient resources are available to perform the operation.  \n\u003ccode\u003e[EDQUOT, ENOSPC, ENOMEM, EMLINK]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsatisfiedConstraints\u003c/code\u003e\nImplementation-dependent constraints are not satisfied.\n\u003ccode\u003e[EBUSY]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe implementation does not support renaming in this situation.\n\u003ccode\u003e[EXDEV]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nEither path refers to an existing directory.\n\u003ccode\u003e[ENOTDIR, EISDIR, EINVAL, EEXIST, ENOTEMPTY]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Directory",
          "name": "renameFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "renameFile old new changes the name of an existing file system object from old to new If the new object already exists it is atomically replaced by the old object Neither path may refer to an existing directory conformant implementation need not support renaming files in all situations e.g renaming across different physical devices but the constraints must be documented The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument Either operand is not valid file name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The original file does not exist or there is no path to the target ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EROFS EACCES EPERM ResourceExhausted Insufficient resources are available to perform the operation EDQUOT ENOSPC ENOMEM EMLINK UnsatisfiedConstraints Implementation-dependent constraints are not satisfied EBUSY UnsupportedOperation The implementation does not support renaming in this situation EXDEV InappropriateType Either path refers to an existing directory ENOTDIR EISDIR EINVAL EEXIST ENOTEMPTY",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "renameFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:renameFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "searchable",
          "package": "haskell98libraries",
          "signature": "Bool",
          "source": "src/Directory.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "searchable",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:searchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the operating system has a notion of current directories,\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003esetCurrentDirectory\u003c/a\u003e\u003c/code\u003e dir\u003c/code\u003e changes the current\ndirectory of the calling process to \u003cem\u003edir\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eHardwareFault\u003c/code\u003e\nA physical I/O error has occurred.\n\u003ccode\u003e[EIO]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInvalidArgument\u003c/code\u003e\nThe operand is not a valid directory name.\n\u003ccode\u003e[ENAMETOOLONG, ELOOP]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eNoSuchThing\u003c/code\u003e\nThe directory does not exist.\n\u003ccode\u003e[ENOENT, ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003ePermissionDenied\u003c/code\u003e\nThe process has insufficient privileges to perform the operation.\n\u003ccode\u003e[EACCES]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e\nThe operating system has no notion of current directory, or the\ncurrent directory cannot be dynamically changed.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eInappropriateType\u003c/code\u003e\nThe path refers to an existing non-directory object.\n\u003ccode\u003e[ENOTDIR]\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that in a concurrent program, the current directory is global\nstate shared between all threads of the process.  When using\nfilesystem operations from multiple threads, it is therefore highly\nrecommended to use absolute rather than relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Directory",
          "name": "setCurrentDirectory",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If the operating system has notion of current directories setCurrentDirectory dir changes the current directory of the calling process to dir The operation may fail with HardwareFault physical error has occurred EIO InvalidArgument The operand is not valid directory name ENAMETOOLONG ELOOP isDoesNotExistError NoSuchThing The directory does not exist ENOENT ENOTDIR isPermissionError PermissionDenied The process has insufficient privileges to perform the operation EACCES UnsupportedOperation The operating system has no notion of current directory or the current directory cannot be dynamically changed InappropriateType The path refers to an existing non-directory object ENOTDIR Note that in concurrent program the current directory is global state shared between all threads of the process When using filesystem operations from multiple threads it is therefore highly recommended to use absolute rather than relative FilePath",
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "setCurrentDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Current Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:setCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "setPermissions",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e Permissions -\u003e IO ()",
          "source": "src/Directory.html#setPermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "setPermissions",
          "normalized": "FilePath-\u003ePermissions-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Permissions",
          "signature": "FilePath-\u003ePermissions-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:setPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Directory",
          "name": "writable",
          "package": "haskell98libraries",
          "signature": "Bool",
          "source": "src/Directory.html#Permissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Directory",
          "module": "Directory",
          "name": "writable",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Directory.html#v:writable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell98libraries",
          "source": "src/ForeignPtr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ForeignPtr",
          "module": "ForeignPtr",
          "name": "ForeignPtr",
          "package": "haskell98libraries",
          "partial": "Foreign Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/ForeignPtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "IO",
          "package": "haskell98libraries",
          "source": "src/IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "IO",
          "package": "haskell98libraries",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
          "module": "IO",
          "name": "BufferMode",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
          "hierarchy": "IO",
          "module": "IO",
          "name": "BufferMode",
          "package": "haskell98libraries",
          "partial": "Buffer Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:BufferMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "IO",
          "name": "FilePath",
          "package": "haskell98libraries",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "IO",
          "module": "IO",
          "name": "FilePath",
          "package": "haskell98libraries",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e",
          "module": "IO",
          "name": "Handle",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality",
          "hierarchy": "IO",
          "module": "IO",
          "name": "Handle",
          "package": "haskell98libraries",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "HandlePosn",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "HandlePosn",
          "package": "haskell98libraries",
          "partial": "Handle Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:HandlePosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "IO",
          "name": "IO",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "IO",
          "module": "IO",
          "name": "IO",
          "package": "haskell98libraries",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell 98 type for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n Any I/O operation may raise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e instead of returning a result.\n For a more general type of exception, including also those that arise\n in pure code, see \u003ca\u003eControl.Exception.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, this is an opaque type.\n\u003c/p\u003e",
          "module": "IO",
          "name": "IOError",
          "package": "haskell98libraries",
          "type": "type"
        },
        "index": {
          "description": "The Haskell type for exceptions in the IO monad Any operation may raise an IOError instead of returning result For more general type of exception including also those that arise in pure code see Control.Exception.Exception In Haskell this is an opaque type",
          "hierarchy": "IO",
          "module": "IO",
          "name": "IOError",
          "package": "haskell98libraries",
          "partial": "IOError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "IO",
          "name": "IOMode",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "IO",
          "module": "IO",
          "name": "IOMode",
          "package": "haskell98libraries",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "SeekMode",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode",
          "hierarchy": "IO",
          "module": "IO",
          "name": "SeekMode",
          "package": "haskell98libraries",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "AbsoluteSeek",
          "package": "haskell98libraries",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "IO",
          "module": "IO",
          "name": "AbsoluteSeek",
          "package": "haskell98libraries",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "AppendMode",
          "package": "haskell98libraries",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "AppendMode",
          "package": "haskell98libraries",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
          "module": "IO",
          "name": "BlockBuffering",
          "package": "haskell98libraries",
          "signature": "BlockBuffering (Maybe Int)",
          "type": "function"
        },
        "index": {
          "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
          "hierarchy": "IO",
          "module": "IO",
          "name": "BlockBuffering",
          "package": "haskell98libraries",
          "partial": "Block Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:BlockBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
          "module": "IO",
          "name": "LineBuffering",
          "package": "haskell98libraries",
          "signature": "LineBuffering",
          "type": "function"
        },
        "index": {
          "description": "line-buffering should be enabled if possible",
          "hierarchy": "IO",
          "module": "IO",
          "name": "LineBuffering",
          "package": "haskell98libraries",
          "partial": "Line Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:LineBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
          "module": "IO",
          "name": "NoBuffering",
          "package": "haskell98libraries",
          "signature": "NoBuffering",
          "type": "function"
        },
        "index": {
          "description": "buffering is disabled if possible",
          "hierarchy": "IO",
          "module": "IO",
          "name": "NoBuffering",
          "package": "haskell98libraries",
          "partial": "No Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:NoBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "ReadMode",
          "package": "haskell98libraries",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "ReadMode",
          "package": "haskell98libraries",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "ReadWriteMode",
          "package": "haskell98libraries",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "ReadWriteMode",
          "package": "haskell98libraries",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "IO",
          "name": "RelativeSeek",
          "package": "haskell98libraries",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "IO",
          "module": "IO",
          "name": "RelativeSeek",
          "package": "haskell98libraries",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "IO",
          "name": "SeekFromEnd",
          "package": "haskell98libraries",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "IO",
          "module": "IO",
          "name": "SeekFromEnd",
          "package": "haskell98libraries",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "WriteMode",
          "package": "haskell98libraries",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "WriteMode",
          "package": "haskell98libraries",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "IO",
          "name": "appendFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "IO",
          "module": "IO",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e function captures a common allocate, compute, deallocate\n idiom in which the deallocation step must occur even in the case of an\n error during computation. This is similar to try-catch-finally in Java.\n\u003c/p\u003e\u003cp\u003eThis version handles only IO errors, as defined by Haskell 98.\n The version of \u003ccode\u003ebracket\u003c/code\u003e in \u003ca\u003eControl.Exception\u003c/a\u003e handles all exceptions,\n and should be used instead.\n\u003c/p\u003e",
          "module": "IO",
          "name": "bracket",
          "package": "haskell98libraries",
          "signature": "IO a -\u003e (a -\u003e IO b) -\u003e (a -\u003e IO c) -\u003e IO c",
          "source": "src/IO.html#bracket",
          "type": "function"
        },
        "index": {
          "description": "The bracket function captures common allocate compute deallocate idiom in which the deallocation step must occur even in the case of an error during computation This is similar to try-catch-finally in Java This version handles only IO errors as defined by Haskell The version of bracket in Control.Exception handles all exceptions and should be used instead",
          "hierarchy": "IO",
          "module": "IO",
          "name": "bracket",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "package": "haskell98libraries",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eIO c)-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the middle computation doesn't want \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis version handles only IO errors, as defined by Haskell 98.\n The version of \u003ccode\u003ebracket_\u003c/code\u003e in \u003ca\u003eControl.Exception\u003c/a\u003e handles all exceptions,\n and should be used instead.\n\u003c/p\u003e",
          "module": "IO",
          "name": "bracket_",
          "package": "haskell98libraries",
          "signature": "IO a -\u003e (a -\u003e IO b) -\u003e IO c -\u003e IO c",
          "source": "src/IO.html#bracket_",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the middle computation doesn want This version handles only IO errors as defined by Haskell The version of bracket in Control.Exception handles all exceptions and should be used instead",
          "hierarchy": "IO",
          "module": "IO",
          "name": "bracket_",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003eIO c-\u003eIO c",
          "package": "haskell98libraries",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003eIO c-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "catch",
          "package": "haskell98libraries",
          "signature": "IO a -\u003e (IOError -\u003e IO a) -\u003e IO a",
          "source": "src/IO.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "catch",
          "normalized": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "package": "haskell98libraries",
          "signature": "IO a-\u003e(IOError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "IO",
          "name": "getChar",
          "package": "haskell98libraries",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "IO",
          "module": "IO",
          "name": "getChar",
          "package": "haskell98libraries",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "IO",
          "name": "getContents",
          "package": "haskell98libraries",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "IO",
          "module": "IO",
          "name": "getContents",
          "package": "haskell98libraries",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "IO",
          "name": "getLine",
          "package": "haskell98libraries",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "IO",
          "module": "IO",
          "name": "getLine",
          "package": "haskell98libraries",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e makes handle \u003ccode\u003ehdl\u003c/code\u003e closed.  Before the\n computation finishes, if \u003ccode\u003ehdl\u003c/code\u003e is writable its buffer is flushed as\n for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e.\n Performing \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e on a handle that has already been closed has no effect; \n doing so is not an error.  All other operations on a closed handle will fail.\n If \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e fails for any reason, any further operations (apart from\n \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e) on the handle will still fail as if \u003ccode\u003ehdl\u003c/code\u003e had been successfully\n closed.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hClose",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hClose hdl makes handle hdl closed Before the computation finishes if hdl is writable its buffer is flushed as for hFlush Performing hClose on handle that has already been closed has no effect doing so is not an error All other operations on closed handle will fail If hClose fails for any reason any further operations apart from hClose on the handle will still fail as if hdl had been successfully closed",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hClose",
          "normalized": "Handle-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Close",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a handle \u003ccode\u003ehdl\u003c/code\u003e which attached to a physical file,\n \u003ccode\u003e\u003ca\u003ehFileSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the size of that file in 8-bit bytes.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hFileSize",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "For handle hdl which attached to physical file hFileSize hdl returns the size of that file in bit bytes",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hFileSize",
          "normalized": "Handle-\u003eIO Integer",
          "package": "haskell98libraries",
          "partial": "File Size",
          "signature": "Handle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e causes any items buffered for output\n in handle \u003ccode\u003ehdl\u003c/code\u003e to be sent immediately to the operating system.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisFullError\u003c/code\u003e if the device is full;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n    It is unspecified whether the characters in the buffer are discarded\n    or retained under these circumstances.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hFlush",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The action hFlush hdl causes any items buffered for output in handle hdl to be sent immediately to the operating system This operation may fail with isFullError if the device is full isPermissionError if system resource limit would be exceeded It is unspecified whether the characters in the buffer are discarded or retained under these circumstances",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hFlush",
          "normalized": "Handle-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Flush",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current buffering mode\n for \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hGetBuffering",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO BufferMode",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetBuffering hdl returns the current buffering mode for hdl",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hGetBuffering",
          "normalized": "Handle-\u003eIO BufferMode",
          "package": "haskell98libraries",
          "partial": "Get Buffering",
          "signature": "Handle-\u003eIO BufferMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a character from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e, blocking until a character is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hGetChar",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Char",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetChar hdl reads character from the file or channel managed by hdl blocking until character is available This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hGetChar",
          "normalized": "Handle-\u003eIO Char",
          "package": "haskell98libraries",
          "partial": "Get Char",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is put into an intermediate state, \u003cem\u003esemi-closed\u003c/em\u003e.\n In this state, \u003ccode\u003ehdl\u003c/code\u003e is effectively closed,\n but items are read from \u003ccode\u003ehdl\u003c/code\u003e on demand and accumulated in a special\n list returned by \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny operation that fails because a handle is closed,\n also fails if a handle is semi-closed.  The only exception is \u003ccode\u003ehClose\u003c/code\u003e.\n A semi-closed handle becomes closed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehClose\u003c/code\u003e is applied to it;\n\u003c/li\u003e\u003cli\u003e if an I/O error occurs when reading an item from the handle;\n\u003c/li\u003e\u003cli\u003e or once the entire contents of the handle has been read.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnce a semi-closed handle becomes closed, the contents of the\n associated list becomes fixed.  The contents of this final list is\n only partially specified: it will contain at least all the items of\n the stream that were evaluated prior to the handle becoming closed.\n\u003c/p\u003e\u003cp\u003eAny I/O errors encountered while a handle is semi-closed are simply\n discarded.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hGetContents",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is put into an intermediate state semi-closed In this state hdl is effectively closed but items are read from hdl on demand and accumulated in special list returned by hGetContents hdl Any operation that fails because handle is closed also fails if handle is semi-closed The only exception is hClose semi-closed handle becomes closed if hClose is applied to it if an error occurs when reading an item from the handle or once the entire contents of the handle has been read Once semi-closed handle becomes closed the contents of the associated list becomes fixed The contents of this final list is only partially specified it will contain at least all the items of the stream that were evaluated prior to the handle becoming closed Any errors encountered while handle is semi-closed are simply discarded This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "haskell98libraries",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a line from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file is encountered when reading\n    the \u003cem\u003efirst\u003c/em\u003e character of the line.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e encounters end-of-file at any other point while reading\n in a line, it is treated as a line terminator and the (partial)\n line is returned.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hGetLine",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetLine hdl reads line from the file or channel managed by hdl This operation may fail with isEOFError if the end of file is encountered when reading the first character of the line If hGetLine encounters end-of-file at any other point while reading in line it is treated as line terminator and the partial line is returned",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO String",
          "package": "haskell98libraries",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current I/O position of\n \u003ccode\u003ehdl\u003c/code\u003e as a value of the abstract type \u003ccode\u003e\u003ca\u003eHandlePosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hGetPosn",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO HandlePosn",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetPosn hdl returns the current position of hdl as value of the abstract type HandlePosn",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hGetPosn",
          "normalized": "Handle-\u003eIO HandlePosn",
          "package": "haskell98libraries",
          "partial": "Get Posn",
          "signature": "Handle-\u003eIO HandlePosn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hGetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "hIsClosed",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsClosed",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is Closed",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a readable handle \u003ccode\u003ehdl\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if no further input can be taken from \u003ccode\u003ehdl\u003c/code\u003e or for a\n physical file, if the current I/O position is equal to the length of\n the file.  Otherwise, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e may block, because it has to attempt to read from\n the stream to determine whether there is any more data to be read.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hIsEOF",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "For readable handle hdl hIsEOF hdl returns True if no further input can be taken from hdl or for physical file if the current position is equal to the length of the file Otherwise it returns False NOTE hIsEOF may block because it has to attempt to read from the stream to determine whether there is any more data to be read",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsEOF",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is EOF",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "hIsOpen",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsOpen",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is Open",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "hIsReadable",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsReadable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is Readable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "hIsSeekable",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsSeekable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is Seekable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "hIsWritable",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "hIsWritable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Is Writable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e returns the next character from the handle\n without removing it from the input buffer, blocking until a character\n is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisEOFError\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hLookAhead",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Char",
          "type": "function"
        },
        "index": {
          "description": "Computation hLookAhead returns the next character from the handle without removing it from the input buffer blocking until character is available This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hLookAhead",
          "normalized": "Handle-\u003eIO Char",
          "package": "haskell98libraries",
          "partial": "Look Ahead",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e writes the string representation of \u003ccode\u003et\u003c/code\u003e\n given by the \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e function to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e\n and appends a newline.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hPrint",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPrint hdl writes the string representation of given by the shows function to the file or channel managed by hdl and appends newline This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hPrint",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Print",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl ch\u003c/code\u003e writes the character \u003ccode\u003ech\u003c/code\u003e to the\n file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.  Characters may be buffered if\n buffering is enabled for \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hPutChar",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPutChar hdl ch writes the character ch to the file or channel managed by hdl Characters may be buffered if buffering is enabled for hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hPutChar",
          "normalized": "Handle-\u003eChar-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Put Char",
          "signature": "Handle-\u003eChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl s\u003c/code\u003e writes the string\n \u003ccode\u003es\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hPutStr",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPutStr hdl writes the string to the file or channel managed by hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hPutStrLn",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as hPutStr but adds newline character",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehReady\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e indicates whether at least one item is\n available for input from handle \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hReady",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Computation hReady hdl indicates whether at least one item is available for input from handle hdl This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hReady",
          "normalized": "Handle-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Ready",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e sets the position of handle\n \u003ccode\u003ehdl\u003c/code\u003e depending on \u003ccode\u003emode\u003c/code\u003e.\n The offset \u003ccode\u003ei\u003c/code\u003e is given in terms of 8-bit bytes.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ehdl\u003c/code\u003e is block- or line-buffered, then seeking to a position which is not\n in the current buffer will first cause any items in the output buffer to be\n written to the device, and then cause the input buffer to be discarded.\n Some handles may not be seekable (see \u003ccode\u003e\u003ca\u003ehIsSeekable\u003c/a\u003e\u003c/code\u003e), or only support a\n subset of the possible positioning operations (for instance, it may only\n be possible to seek to the end of a tape, or to a positive offset from\n the beginning or current position).\n It is not possible to set a negative I/O position, or for\n a physical file, an I/O position beyond the current end-of-file.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisIllegalOperationError\u003c/code\u003e if the Handle is not seekable, or does\n     not support the requested seek mode.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hSeek",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hSeek hdl mode sets the position of handle hdl depending on mode The offset is given in terms of bit bytes If hdl is block or line-buffered then seeking to position which is not in the current buffer will first cause any items in the output buffer to be written to the device and then cause the input buffer to be discarded Some handles may not be seekable see hIsSeekable or only support subset of the possible positioning operations for instance it may only be possible to seek to the end of tape or to positive offset from the beginning or current position It is not possible to set negative position or for physical file an position beyond the current end-of-file This operation may fail with isIllegalOperationError if the Handle is not seekable or does not support the requested seek mode isPermissionError if system resource limit would be exceeded",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hSeek",
          "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Seek",
          "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode\u003c/code\u003e sets the mode of buffering for\n handle \u003ccode\u003ehdl\u003c/code\u003e on subsequent reads and writes.\n\u003c/p\u003e\u003cp\u003eIf the buffer mode is changed from \u003ccode\u003e\u003ca\u003eBlockBuffering\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e, then\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is writable, the buffer is flushed as for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is not writable, the contents of the buffer is discarded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if the handle has already been used for reading\n    or writing and the implementation does not allow the buffering mode\n    to be changed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hSetBuffering",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e BufferMode -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hSetBuffering hdl mode sets the mode of buffering for handle hdl on subsequent reads and writes If the buffer mode is changed from BlockBuffering or LineBuffering to NoBuffering then if hdl is writable the buffer is flushed as for hFlush if hdl is not writable the contents of the buffer is discarded This operation may fail with isPermissionError if the handle has already been used for reading or writing and the implementation does not allow the buffering mode to be changed",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hSetBuffering",
          "normalized": "Handle-\u003eBufferMode-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Set Buffering",
          "signature": "Handle-\u003eBufferMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns a position \u003ccode\u003ep\u003c/code\u003e,\n then computation \u003ccode\u003e\u003ca\u003ehSetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e sets the position of \u003ccode\u003ehdl\u003c/code\u003e\n to the position it held at the time of the call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "IO",
          "name": "hSetPosn",
          "package": "haskell98libraries",
          "signature": "HandlePosn -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If call to hGetPosn hdl returns position then computation hSetPosn sets the position of hdl to the position it held at the time of the call to hGetPosn This operation may fail with isPermissionError if system resource limit would be exceeded",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hSetPosn",
          "normalized": "HandlePosn-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Set Posn",
          "signature": "HandlePosn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hSetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e\n waits until input is available on handle \u003ccode\u003ehdl\u003c/code\u003e.\n It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e as soon as input is available on \u003ccode\u003ehdl\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if no input is available within \u003ccode\u003et\u003c/code\u003e milliseconds.  Note that\n \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e waits until one or more full \u003cem\u003echaracters\u003c/em\u003e are available,\n which means that it needs to do decoding, and hence may fail\n with a decoding error.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is less than zero, then \u003ccode\u003ehWaitForInput\u003c/code\u003e waits indefinitely.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003cli\u003e a decoding error, if the input begins with an invalid byte sequence\n    in this Handle's encoding.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE for GHC users: unless you use the \u003ccode\u003e-threaded\u003c/code\u003e flag,\n \u003ccode\u003ehWaitForInput t\u003c/code\u003e where \u003ccode\u003et \u003e= 0\u003c/code\u003e will block all other Haskell\n threads for the duration of the call.  It behaves like a\n \u003ccode\u003esafe\u003c/code\u003e foreign call in this respect.\n\u003c/p\u003e",
          "module": "IO",
          "name": "hWaitForInput",
          "package": "haskell98libraries",
          "signature": "Handle -\u003e Int -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Computation hWaitForInput hdl waits until input is available on handle hdl It returns True as soon as input is available on hdl or False if no input is available within milliseconds Note that hWaitForInput waits until one or more full characters are available which means that it needs to do decoding and hence may fail with decoding error If is less than zero then hWaitForInput waits indefinitely This operation may fail with isEOFError if the end of file has been reached decoding error if the input begins with an invalid byte sequence in this Handle encoding NOTE for GHC users unless you use the threaded flag hWaitForInput where will block all other Haskell threads for the duration of the call It behaves like safe foreign call in this respect",
          "hierarchy": "IO",
          "module": "IO",
          "name": "hWaitForInput",
          "normalized": "Handle-\u003eInt-\u003eIO Bool",
          "package": "haskell98libraries",
          "partial": "Wait For Input",
          "signature": "Handle-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:hWaitForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "IO",
          "name": "interact",
          "package": "haskell98libraries",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "IO",
          "module": "IO",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "haskell98libraries",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "IO",
          "name": "ioError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Raise an IOError in the IO monad",
          "hierarchy": "IO",
          "module": "IO",
          "name": "ioError",
          "normalized": "IOError-\u003eIO a",
          "package": "haskell98libraries",
          "partial": "Error",
          "signature": "IOError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "ioeGetErrorString",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "ioeGetErrorString",
          "normalized": "IOError-\u003eString",
          "package": "haskell98libraries",
          "partial": "Get Error String",
          "signature": "IOError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ioeGetErrorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "ioeGetFileName",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Maybe FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "ioeGetFileName",
          "normalized": "IOError-\u003eMaybe FilePath",
          "package": "haskell98libraries",
          "partial": "Get File Name",
          "signature": "IOError-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ioeGetFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "IO",
          "name": "ioeGetHandle",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Maybe Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "IO",
          "module": "IO",
          "name": "ioeGetHandle",
          "normalized": "IOError-\u003eMaybe Handle",
          "package": "haskell98libraries",
          "partial": "Get Handle",
          "signature": "IOError-\u003eMaybe Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:ioeGetHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments already exists.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isAlreadyExistsError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments already exists",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isAlreadyExistsError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Already Exists Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isAlreadyExistsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments is a single-use resource, which is already\n being used (for example, opening the same file twice for writing\n might give this error).\n\u003c/p\u003e",
          "module": "IO",
          "name": "isAlreadyInUseError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments is single-use resource which is already being used for example opening the same file twice for writing might give this error",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isAlreadyInUseError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Already In Use Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isAlreadyInUseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n one of its arguments does not exist.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isDoesNotExistError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because one of its arguments does not exist",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isDoesNotExistError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Does Not Exist Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isDoesNotExistError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eisEOF\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e,\n except that it works only on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isEOF",
          "package": "haskell98libraries",
          "signature": "IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The computation isEOF is identical to hIsEOF except that it works only on stdin",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isEOF",
          "package": "haskell98libraries",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the end of file has been reached.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isEOFError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the end of file has been reached",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isEOFError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "EOFError",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isEOFError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the device is full.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isFullError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the device is full",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isFullError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Full Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isFullError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the operation was not possible.\n Any computation which returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e result may fail with\n \u003ccode\u003e\u003ca\u003eisIllegalOperation\u003c/a\u003e\u003c/code\u003e.  In some cases, an implementation will not be\n able to distinguish between the possible error causes.  In this case\n it should fail with \u003ccode\u003e\u003ca\u003eisIllegalOperation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isIllegalOperation",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the operation was not possible Any computation which returns an IO result may fail with isIllegalOperation In some cases an implementation will not be able to distinguish between the possible error causes In this case it should fail with isIllegalOperation",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isIllegalOperation",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Illegal Operation",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isIllegalOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error indicating that an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation failed because\n the user does not have sufficient operating system privilege\n to perform that operation.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isPermissionError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "An error indicating that an IO operation failed because the user does not have sufficient operating system privilege to perform that operation",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isPermissionError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Permission Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isPermissionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA programmer-defined error value constructed using \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "isUserError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "programmer-defined error value constructed using userError",
          "hierarchy": "IO",
          "module": "IO",
          "name": "isUserError",
          "normalized": "IOError-\u003eBool",
          "package": "haskell98libraries",
          "partial": "User Error",
          "signature": "IOError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:isUserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile mode\u003c/code\u003e allocates and returns a new, open\n handle to manage the file \u003ccode\u003efile\u003c/code\u003e.  It manages input if \u003ccode\u003emode\u003c/code\u003e\n is \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e, output if \u003ccode\u003emode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e,\n and both input and output if mode is \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the file does not exist and it is opened for output, it should be\n created as a new file.  If \u003ccode\u003emode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e and the file\n already exists, then it should be truncated to zero length.\n Some operating systems delete empty files, so there is no guarantee\n that the file will exist following an \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003emode\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e unless it is subsequently written to successfully.\n The handle is positioned at the end of the file if \u003ccode\u003emode\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e, and otherwise at the beginning (in which case its\n internal position is 0).\n The initial buffer mode is implementation-dependent.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisAlreadyInUseError\u003c/code\u003e if the file is already open and cannot be reopened;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e if the file does not exist; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if the user does not have permission to open the file.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote: if you will be working with files containing binary data, you'll want to\n be using \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "openFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "description": "Computation openFile file mode allocates and returns new open handle to manage the file file It manages input if mode is ReadMode output if mode is WriteMode or AppendMode and both input and output if mode is ReadWriteMode If the file does not exist and it is opened for output it should be created as new file If mode is WriteMode and the file already exists then it should be truncated to zero length Some operating systems delete empty files so there is no guarantee that the file will exist following an openFile with mode WriteMode unless it is subsequently written to successfully The handle is positioned at the end of the file if mode is AppendMode and otherwise at the beginning in which case its internal position is The initial buffer mode is implementation-dependent This operation may fail with isAlreadyInUseError if the file is already open and cannot be reopened isDoesNotExistError if the file does not exist or isPermissionError if the user does not have permission to open the file Note if you will be working with files containing binary data you ll want to be using openBinaryFile",
          "hierarchy": "IO",
          "module": "IO",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "IO",
          "name": "print",
          "package": "haskell98libraries",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "IO",
          "module": "IO",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "haskell98libraries",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "IO",
          "name": "putChar",
          "package": "haskell98libraries",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "IO",
          "module": "IO",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "IO",
          "name": "putStr",
          "package": "haskell98libraries",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "IO",
          "module": "IO",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "IO",
          "name": "putStrLn",
          "package": "haskell98libraries",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "IO",
          "module": "IO",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "readFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "IO",
          "module": "IO",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "IO",
          "name": "readIO",
          "package": "haskell98libraries",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "IO",
          "module": "IO",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "haskell98libraries",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "readLn",
          "package": "haskell98libraries",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "IO",
          "module": "IO",
          "name": "readLn",
          "package": "haskell98libraries",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard error channel.\n\u003c/p\u003e",
          "module": "IO",
          "name": "stderr",
          "package": "haskell98libraries",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard error channel",
          "hierarchy": "IO",
          "module": "IO",
          "name": "stderr",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing input from the Haskell program's standard input channel.\n\u003c/p\u003e",
          "module": "IO",
          "name": "stdin",
          "package": "haskell98libraries",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing input from the Haskell program standard input channel",
          "hierarchy": "IO",
          "module": "IO",
          "name": "stdin",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard output channel.\n\u003c/p\u003e",
          "module": "IO",
          "name": "stdout",
          "package": "haskell98libraries",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard output channel",
          "hierarchy": "IO",
          "module": "IO",
          "name": "stdout",
          "package": "haskell98libraries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe construct \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecomp\u003c/code\u003e exposes IO errors which occur within a\n computation, and which are not fully handled.\n\u003c/p\u003e\u003cp\u003eNon-I/O exceptions are not caught by this variant; to catch all\n exceptions, use \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eControl.Exception\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "try",
          "package": "haskell98libraries",
          "signature": "IO a -\u003e IO (Either IOError a)",
          "source": "src/IO.html#try",
          "type": "function"
        },
        "index": {
          "description": "The construct try comp exposes IO errors which occur within computation and which are not fully handled Non-I exceptions are not caught by this variant to catch all exceptions use try from Control.Exception",
          "hierarchy": "IO",
          "module": "IO",
          "name": "try",
          "normalized": "IO a-\u003eIO(Either IOError a)",
          "package": "haskell98libraries",
          "signature": "IO a-\u003eIO(Either IOError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value with a string describing the error.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class raises a\n \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e, thus:\n\u003c/p\u003e\u003cpre\u003e instance Monad IO where \n   ...\n   fail s = ioError (userError s)\n\u003c/pre\u003e",
          "module": "IO",
          "name": "userError",
          "package": "haskell98libraries",
          "signature": "String -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError value with string describing the error The fail method of the IO instance of the Monad class raises userError thus instance Monad IO where fail ioError userError",
          "hierarchy": "IO",
          "module": "IO",
          "name": "userError",
          "normalized": "String-\u003eIOError",
          "package": "haskell98libraries",
          "partial": "Error",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:userError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "IO",
          "name": "writeFile",
          "package": "haskell98libraries",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "IO",
          "module": "IO",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/IO.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Int",
          "name": "Int",
          "package": "haskell98libraries",
          "source": "src/Int.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Int",
          "module": "Int",
          "name": "Int",
          "package": "haskell98libraries",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Int.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ix",
          "name": "Ix",
          "package": "haskell98libraries",
          "source": "src/Ix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "Ix",
          "package": "haskell98libraries",
          "partial": "Ix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e class is used to map a contiguous subrange of values in\n a type onto integers.  It is used primarily for array indexing\n (see the array package).\n\u003c/p\u003e\u003cp\u003eThe first argument \u003ccode\u003e(l,u)\u003c/code\u003e of each of these operations is a pair\n specifying the lower and upper bounds of a contiguous subrange of values.\n\u003c/p\u003e\u003cp\u003eAn implementation is entitled to assume the following laws about these\n operations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e (l,u) i == \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e i (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u) \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e (l,u) i == i\u003c/code\u003e, when \u003ccode\u003e\u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e (l,u) i\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e (l,u)) (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))) == [0..\u003ccode\u003e\u003ca\u003erangeSize\u003c/a\u003e\u003c/code\u003e (l,u)-1]\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003erangeSize\u003c/a\u003e\u003c/code\u003e (l,u) == \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e (l,u))\u003c/code\u003e \u003ccode\u003e \u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete instance: \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einRange\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Ix",
          "name": "Ix",
          "package": "haskell98libraries",
          "type": "class"
        },
        "index": {
          "description": "The Ix class is used to map contiguous subrange of values in type onto integers It is used primarily for array indexing see the array package The first argument of each of these operations is pair specifying the lower and upper bounds of contiguous subrange of values An implementation is entitled to assume the following laws about these operations inRange elem range range index when inRange map index range rangeSize rangeSize length range Minimal complete instance range index and inRange",
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "Ix",
          "package": "haskell98libraries",
          "partial": "Ix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#t:Ix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the given subscript lies in the range defined\n the bounding pair.\n\u003c/p\u003e",
          "module": "Ix",
          "name": "inRange",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "Returns True the given subscript lies in the range defined the bounding pair",
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "inRange",
          "normalized": "(a,a)-\u003ea-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Range",
          "signature": "(a,a)-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of a subscript in the subrange.\n\u003c/p\u003e",
          "module": "Ix",
          "name": "index",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "The position of subscript in the subrange",
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "index",
          "normalized": "(a,a)-\u003ea-\u003eInt",
          "package": "haskell98libraries",
          "signature": "(a,a)-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of values in the subrange defined by a bounding pair.\n\u003c/p\u003e",
          "module": "Ix",
          "name": "range",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "The list of values in the subrange defined by bounding pair",
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "range",
          "normalized": "(a,a)-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a,a)-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the subrange defined by a bounding pair.\n\u003c/p\u003e",
          "module": "Ix",
          "name": "rangeSize",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the subrange defined by bounding pair",
          "hierarchy": "Ix",
          "module": "Ix",
          "name": "rangeSize",
          "normalized": "(a,a)-\u003eInt",
          "package": "haskell98libraries",
          "partial": "Size",
          "signature": "(a,a)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ix.html#v:rangeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "List",
          "name": "List",
          "package": "haskell98libraries",
          "source": "src/List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "List",
          "module": "List",
          "name": "List",
          "package": "haskell98libraries",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList index (subscript) operator, starting from 0.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e,\n which takes an index of any integral type.\n\u003c/p\u003e",
          "module": "List",
          "name": "(!!)",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e Int -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "List index subscript operator starting from It is an instance of the more general genericIndex which takes an index of any integral type",
          "hierarchy": "List",
          "module": "List",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n\u003c/p\u003e",
          "module": "List",
          "name": "(++)",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list",
          "hierarchy": "List",
          "module": "List",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e function is list difference (non-associative).\n In the result of \u003ccode\u003exs\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e, the first occurrence of each element of\n \u003ccode\u003eys\u003c/code\u003e in turn (if any) has been removed from \u003ccode\u003exs\u003c/code\u003e.  Thus\n\u003c/p\u003e\u003cpre\u003e (xs ++ ys) \\\\ xs == ys.\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer\n to supply their own equality test.\n\u003c/p\u003e",
          "module": "List",
          "name": "(\\\\)",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The function is list difference non-associative In the result of xs ys the first occurrence of each element of ys in turn if any has been removed from xs Thus xs ys xs ys It is special case of deleteFirstsBy which allows the programmer to supply their own equality test",
          "hierarchy": "List",
          "module": "List",
          "name": "(\\\\) \\\\",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate. For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "List",
          "name": "all",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate For the result to be True the list must be finite False however results from False value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "List",
          "module": "List",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "List",
          "name": "and",
          "package": "haskell98libraries",
          "signature": "[Bool] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
          "hierarchy": "List",
          "module": "List",
          "name": "and",
          "normalized": "[Bool]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "List",
          "name": "any",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list any determines if any element of the list satisfies the predicate For the result to be False the list must be finite True however results from True value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "List",
          "module": "List",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "break",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
          "hierarchy": "List",
          "module": "List",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of lists.\n\u003c/p\u003e",
          "module": "List",
          "name": "concat",
          "package": "haskell98libraries",
          "signature": "[[a]] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of lists",
          "hierarchy": "List",
          "module": "List",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a list and concatenate the results.\n\u003c/p\u003e",
          "module": "List",
          "name": "concatMap",
          "package": "haskell98libraries",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Map function over list and concatenate the results",
          "hierarchy": "List",
          "module": "List",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "haskell98libraries",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "List",
          "name": "cycle",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "List",
          "module": "List",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e removes the first occurrence of \u003ccode\u003ex\u003c/code\u003e from its list argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e delete 'a' \"banana\" == \"bnana\"\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "List",
          "name": "delete",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "delete removes the first occurrence of from its list argument For example delete banana bnana It is special case of deleteBy which allows the programmer to supply their own equality test",
          "hierarchy": "List",
          "module": "List",
          "name": "delete",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but takes a\n user-supplied equality predicate.\n\u003c/p\u003e",
          "module": "List",
          "name": "deleteBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteBy function behaves like delete but takes user-supplied equality predicate",
          "hierarchy": "List",
          "module": "List",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e function takes a predicate and two lists and\n returns the first list with the first occurrence of each element of\n the second list removed.\n\u003c/p\u003e",
          "module": "List",
          "name": "deleteFirstsBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The deleteFirstsBy function takes predicate and two lists and returns the first list with the first occurrence of each element of the second list removed",
          "hierarchy": "List",
          "module": "List",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "Firsts By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "List",
          "name": "drop",
          "package": "haskell98libraries",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general genericDrop in which may be of any integral type",
          "hierarchy": "List",
          "module": "List",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
          "module": "List",
          "name": "dropWhile",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
          "hierarchy": "List",
          "module": "List",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written in infix form,\n e.g., \u003ccode\u003ex `elem` xs\u003c/code\u003e.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from an element equal to \u003ccode\u003ex\u003c/code\u003e found at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "List",
          "name": "elem",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "elem is the list membership predicate usually written in infix form e.g elem xs For the result to be False the list must be finite True however results from an element equal to found at finite index of finite or infinite list",
          "hierarchy": "List",
          "module": "List",
          "name": "elem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given list which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "List",
          "name": "elemIndex",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given list which is equal by to the query element or Nothing if there is no such element",
          "hierarchy": "List",
          "module": "List",
          "name": "elemIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "haskell98libraries",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "List",
          "name": "elemIndices",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "List",
          "module": "List",
          "name": "elemIndices",
          "normalized": "a-\u003e[a]-\u003e[Int]",
          "package": "haskell98libraries",
          "partial": "Indices",
          "signature": "a-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "List",
          "name": "filter",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "List",
          "module": "List",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns the\n first element in the list matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no such element.\n\u003c/p\u003e",
          "module": "List",
          "name": "find",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and list and returns the first element in the list matching the predicate or Nothing if there is no such element",
          "hierarchy": "List",
          "module": "List",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns\n the index of the first element in the list satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "List",
          "name": "findIndex",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and list and returns the index of the first element in the list satisfying the predicate or Nothing if there is no such element",
          "hierarchy": "List",
          "module": "List",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "package": "haskell98libraries",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "List",
          "name": "findIndices",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "List",
          "module": "List",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "package": "haskell98libraries",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite.\n\u003c/p\u003e",
          "module": "List",
          "name": "foldl",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite",
          "hierarchy": "List",
          "module": "List",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "List",
          "name": "foldl1",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "List",
          "module": "List",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
          "module": "List",
          "name": "foldr",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "List",
          "module": "List",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "List",
          "name": "foldr1",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "List",
          "module": "List",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to drop.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericDrop",
          "package": "haskell98libraries",
          "signature": "i -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericDrop function is an overloaded version of drop which accepts any Integral value as the number of elements to drop",
          "hierarchy": "List",
          "module": "List",
          "name": "genericDrop",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "haskell98libraries",
          "partial": "Drop",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the index.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericIndex",
          "package": "haskell98libraries",
          "signature": "[b] -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The genericIndex function is an overloaded version of which accepts any Integral value as the index",
          "hierarchy": "List",
          "module": "List",
          "name": "genericIndex",
          "normalized": "[a]-\u003eb-\u003ea",
          "package": "haskell98libraries",
          "partial": "Index",
          "signature": "[b]-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.  In\n particular, instead of returning an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, it returns any type which is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.  It is, however, less efficient than \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericLength",
          "package": "haskell98libraries",
          "signature": "[b] -\u003e i",
          "type": "function"
        },
        "index": {
          "description": "The genericLength function is an overloaded version of length In particular instead of returning an Int it returns any type which is an instance of Num It is however less efficient than length",
          "hierarchy": "List",
          "module": "List",
          "name": "genericLength",
          "normalized": "[a]-\u003eb",
          "package": "haskell98libraries",
          "partial": "Length",
          "signature": "[b]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e,\n which accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of repetitions to make.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericReplicate",
          "package": "haskell98libraries",
          "signature": "i -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericReplicate function is an overloaded version of replicate which accepts any Integral value as the number of repetitions to make",
          "hierarchy": "List",
          "module": "List",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003e[b]",
          "package": "haskell98libraries",
          "partial": "Replicate",
          "signature": "i-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the position at which to split.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericSplitAt",
          "package": "haskell98libraries",
          "signature": "i -\u003e [b] -\u003e ([b], [b])",
          "type": "function"
        },
        "index": {
          "description": "The genericSplitAt function is an overloaded version of splitAt which accepts any Integral value as the position at which to split",
          "hierarchy": "List",
          "module": "List",
          "name": "genericSplitAt",
          "normalized": "a-\u003e[b]-\u003e([b],[b])",
          "package": "haskell98libraries",
          "partial": "Split At",
          "signature": "i-\u003e[b]-\u003e([b],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to take.\n\u003c/p\u003e",
          "module": "List",
          "name": "genericTake",
          "package": "haskell98libraries",
          "signature": "i -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The genericTake function is an overloaded version of take which accepts any Integral value as the number of elements to take",
          "hierarchy": "List",
          "module": "List",
          "name": "genericTake",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "haskell98libraries",
          "partial": "Take",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a list and returns a list of lists such\n that the concatenation of the result is equal to the argument.  Moreover,\n each sublist in the result contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "List",
          "name": "group",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The group function takes list and returns list of lists such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "List",
          "module": "List",
          "name": "group",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "groupBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "List",
          "module": "List",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "head",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of list which must be non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the elements of a list except the last one.\n The list must be non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "init",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function returns all initial segments of the argument,\n shortest first.  For example,\n\u003c/p\u003e\u003cpre\u003e inits \"abc\" == [\"\",\"a\",\"ab\",\"abc\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003einits _|_ = [] : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "List",
          "name": "inits",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The inits function returns all initial segments of the argument shortest first For example inits abc ab abc Note that inits has the following strictness property inits",
          "hierarchy": "List",
          "module": "List",
          "name": "inits",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function takes an element and a list and inserts the\n element into the list at the first position where it is less\n than or equal to the next element.  In particular, if the list\n is sorted before the call, the result will also be sorted.\n It is a special case of \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own comparison function.\n\u003c/p\u003e",
          "module": "List",
          "name": "insert",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The insert function takes an element and list and inserts the element into the list at the first position where it is less than or equal to the next element In particular if the list is sorted before the call the result will also be sorted It is special case of insertBy which allows the programmer to supply their own comparison function",
          "hierarchy": "List",
          "module": "List",
          "name": "insert",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe non-overloaded version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "insertBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The non-overloaded version of insert",
          "hierarchy": "List",
          "module": "List",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e function takes the list intersection of two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e [1,2,3,4] `intersect` [2,4,6,8] == [2,4]\n\u003c/pre\u003e\u003cp\u003eIf the first list contains duplicates, so will the result.\n\u003c/p\u003e\u003cpre\u003e [1,2,2,3,4] `intersect` [6,4,4,2] == [2,2,4]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. If the element is found in both the first\n and the second list, the element from the first list will be used.\n\u003c/p\u003e",
          "module": "List",
          "name": "intersect",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersect function takes the list intersection of two lists For example intersect If the first list contains duplicates so will the result intersect It is special case of intersectBy which allows the programmer to supply their own equality test If the element is found in both the first and the second list the element from the first list will be used",
          "hierarchy": "List",
          "module": "List",
          "name": "intersect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "intersectBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersectBy function is the non-overloaded version of intersect",
          "hierarchy": "List",
          "module": "List",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
          "module": "List",
          "name": "intersperse",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
          "hierarchy": "List",
          "module": "List",
          "name": "intersperse",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a prefix of the second.\n\u003c/p\u003e",
          "module": "List",
          "name": "isPrefixOf",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two lists and returns True iff the first list is prefix of the second",
          "hierarchy": "List",
          "module": "List",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Prefix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a suffix of the second.\n Both lists must be finite.\n\u003c/p\u003e",
          "module": "List",
          "name": "isSuffixOf",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two lists and returns True iff the first list is suffix of the second Both lists must be finite",
          "hierarchy": "List",
          "module": "List",
          "name": "isSuffixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Suffix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "List",
          "name": "iterate",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "List",
          "module": "List",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a list, which must be finite and non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "last",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
          "module": "List",
          "name": "length",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of finite list as an Int It is an instance of the more general genericLength the result type of which may be any kind of number",
          "hierarchy": "List",
          "module": "List",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "haskell98libraries",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "List",
          "name": "lines",
          "package": "haskell98libraries",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "List",
          "module": "List",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "haskell98libraries",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
          "module": "List",
          "name": "lookup",
          "package": "haskell98libraries",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "lookup key assocs looks up key in an association list",
          "hierarchy": "List",
          "module": "List",
          "name": "lookup",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "haskell98libraries",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e",
          "module": "List",
          "name": "map",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2",
          "hierarchy": "List",
          "module": "List",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from left to right, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "List",
          "name": "mapAccumL",
          "package": "haskell98libraries",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "List",
          "module": "List",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "haskell98libraries",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from right to left, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "List",
          "name": "mapAccumR",
          "package": "haskell98libraries",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of list passing an accumulating parameter from right to left and returning final value of this accumulator together with the new list",
          "hierarchy": "List",
          "module": "List",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "haskell98libraries",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "List",
          "name": "maximum",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of maximumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "List",
          "module": "List",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "maximumBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "List",
          "name": "minimum",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of minimumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "List",
          "module": "List",
          "name": "minimum",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the least element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "minimumBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The minimumBy function takes comparison function and list and returns the least element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "notElem",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "List",
          "module": "List",
          "name": "notElem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list.\n In particular, it keeps only the first occurrence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means `essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "List",
          "name": "nub",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurrence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own equality test",
          "hierarchy": "List",
          "module": "List",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "List",
          "name": "nubBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
          "hierarchy": "List",
          "module": "List",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "null",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "List",
          "module": "List",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "List",
          "name": "or",
          "package": "haskell98libraries",
          "signature": "[Bool] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
          "hierarchy": "List",
          "module": "List",
          "name": "or",
          "normalized": "[Bool]-\u003eBool",
          "package": "haskell98libraries",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "List",
          "name": "partition",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs",
          "hierarchy": "List",
          "module": "List",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of a finite list of numbers.\n\u003c/p\u003e",
          "module": "List",
          "name": "product",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The product function computes the product of finite list of numbers",
          "hierarchy": "List",
          "module": "List",
          "name": "product",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "List",
          "name": "repeat",
          "package": "haskell98libraries",
          "signature": "a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "List",
          "module": "List",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "List",
          "name": "replicate",
          "package": "haskell98libraries",
          "signature": "Int -\u003e a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general genericReplicate in which may be of any integral type",
          "hierarchy": "List",
          "module": "List",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "List",
          "name": "reverse",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "List",
          "module": "List",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "List",
          "name": "scanl",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "List",
          "module": "List",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "List",
          "name": "scanl1",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "List",
          "module": "List",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "List",
          "name": "scanr",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "List",
          "module": "List",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "List",
          "name": "scanr1",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "List",
          "module": "List",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e",
          "module": "List",
          "name": "sort",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function",
          "hierarchy": "List",
          "module": "List",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "sortBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sortBy function is the non-overloaded version of sort",
          "hierarchy": "List",
          "module": "List",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "List",
          "name": "span",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "List",
          "module": "List",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "haskell98libraries",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e when \u003ccode\u003en\u003c/code\u003e is not \u003ccode\u003e_|_\u003c/code\u003e\n (\u003ccode\u003esplitAt _|_ xs = _|_\u003c/code\u003e).\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "List",
          "name": "splitAt",
          "package": "haskell98libraries",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs when is not splitAt xs splitAt is an instance of the more general genericSplitAt in which may be of any integral type",
          "hierarchy": "List",
          "module": "List",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "haskell98libraries",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of a finite list of numbers.\n\u003c/p\u003e",
          "module": "List",
          "name": "sum",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The sum function computes the sum of finite list of numbers",
          "hierarchy": "List",
          "module": "List",
          "name": "sum",
          "normalized": "[a]-\u003ea",
          "package": "haskell98libraries",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "List",
          "name": "tail",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of list which must be non-empty",
          "hierarchy": "List",
          "module": "List",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function returns all final segments of the argument,\n longest first.  For example,\n\u003c/p\u003e\u003cpre\u003e tails \"abc\" == [\"abc\", \"bc\", \"c\",\"\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003etails _|_ = _|_ : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "List",
          "name": "tails",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The tails function returns all final segments of the argument longest first For example tails abc abc bc Note that tails has the following strictness property tails",
          "hierarchy": "List",
          "module": "List",
          "name": "tails",
          "normalized": "[a]-\u003e[[a]]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "List",
          "name": "take",
          "package": "haskell98libraries",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general genericTake in which may be of any integral type",
          "hierarchy": "List",
          "module": "List",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
          "module": "List",
          "name": "takeWhile",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
          "hierarchy": "List",
          "module": "List",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
          "module": "List",
          "name": "transpose",
          "package": "haskell98libraries",
          "signature": "[[a]] -\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its argument For example transpose",
          "hierarchy": "List",
          "module": "List",
          "name": "transpose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "haskell98libraries",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
          "module": "List",
          "name": "unfoldr",
          "package": "haskell98libraries",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1",
          "hierarchy": "List",
          "module": "List",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e[b]",
          "package": "haskell98libraries",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function returns the list union of the two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e \"dog\" `union` \"cow\" == \"dogcw\"\n\u003c/pre\u003e\u003cp\u003eDuplicates, and elements of the first list, are removed from the\n the second list, but if the first list contains duplicates, so will\n the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "List",
          "name": "union",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The union function returns the list union of the two lists For example dog union cow dogcw Duplicates and elements of the first list are removed from the the second list but if the first list contains duplicates so will the result It is special case of unionBy which allows the programmer to supply their own equality test",
          "hierarchy": "List",
          "module": "List",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unionBy",
          "package": "haskell98libraries",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The unionBy function is the non-overloaded version of union",
          "hierarchy": "List",
          "module": "List",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "List",
          "name": "unlines",
          "package": "haskell98libraries",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "List",
          "module": "List",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "haskell98libraries",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "List",
          "name": "unwords",
          "package": "haskell98libraries",
          "signature": "[String] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "List",
          "module": "List",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "haskell98libraries",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip",
          "package": "haskell98libraries",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs into list of first components and list of second components",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "haskell98libraries",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip3",
          "package": "haskell98libraries",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "haskell98libraries",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip4",
          "package": "haskell98libraries",
          "signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
          "type": "function"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip4",
          "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "package": "haskell98libraries",
          "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip5",
          "package": "haskell98libraries",
          "signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
          "type": "function"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip5",
          "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "package": "haskell98libraries",
          "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip6",
          "package": "haskell98libraries",
          "signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
          "type": "function"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip6",
          "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "package": "haskell98libraries",
          "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "unzip7",
          "package": "haskell98libraries",
          "signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
          "type": "function"
        },
        "index": {
          "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
          "hierarchy": "List",
          "module": "List",
          "name": "unzip7",
          "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "package": "haskell98libraries",
          "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:unzip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "List",
          "name": "words",
          "package": "haskell98libraries",
          "signature": "String -\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "List",
          "module": "List",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "haskell98libraries",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of corresponding pairs.\n If one input list is short, excess elements of the longer list are\n discarded.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "type": "function"
        },
        "index": {
          "description": "zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded",
          "hierarchy": "List",
          "module": "List",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of triples, analogous to\n \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip3",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "type": "function"
        },
        "index": {
          "description": "zip3 takes three lists and returns list of triples analogous to zip",
          "hierarchy": "List",
          "module": "List",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip4",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [(a, b, c, d)]",
          "type": "function"
        },
        "index": {
          "description": "The zip4 function takes four lists and returns list of quadruples analogous to zip",
          "hierarchy": "List",
          "module": "List",
          "name": "zip4",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five lists and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip5",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [(a, b, c, d, e)]",
          "type": "function"
        },
        "index": {
          "description": "The zip5 function takes five lists and returns list of five-tuples analogous to zip",
          "hierarchy": "List",
          "module": "List",
          "name": "zip5",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six lists and returns a list of six-tuples,\n analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip6",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [(a, b, c, d, e, f)]",
          "type": "function"
        },
        "index": {
          "description": "The zip6 function takes six lists and returns list of six-tuples analogous to zip",
          "hierarchy": "List",
          "module": "List",
          "name": "zip6",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e function takes seven lists and returns a list of\n seven-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zip7",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [(a, b, c, d, e, f, g)]",
          "type": "function"
        },
        "index": {
          "description": "The zip7 function takes seven lists and returns list of seven-tuples analogous to zip",
          "hierarchy": "List",
          "module": "List",
          "name": "zip7",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "package": "haskell98libraries",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given\n as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n elements, as well as three lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith3",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n elements, as well as four lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith4",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith4 function takes function which combines four elements as well as four lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n elements, as well as five lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith5",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith5 function takes function which combines five elements as well as five lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six\n elements, as well as six lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith6",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith6 function takes function which combines six elements as well as six lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e function takes a function which combines seven\n elements, as well as seven lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "List",
          "name": "zipWith7",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [h]",
          "type": "function"
        },
        "index": {
          "description": "The zipWith7 function takes function which combines seven elements as well as seven lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "List",
          "module": "List",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/List.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Locale",
          "name": "Locale",
          "package": "haskell98libraries",
          "source": "src/Locale.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Locale",
          "module": "Locale",
          "name": "Locale",
          "package": "haskell98libraries",
          "partial": "Locale",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Locale.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Locale",
          "name": "TimeLocale",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "hierarchy": "Locale",
          "module": "Locale",
          "name": "TimeLocale",
          "package": "haskell98libraries",
          "partial": "Time Locale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Locale.html#t:TimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Locale",
          "name": "TimeLocale",
          "package": "haskell98libraries",
          "signature": "TimeLocale [(String, String)] [(String, String)] [(String, String)] (String, String) String String String String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Locale",
          "module": "Locale",
          "name": "TimeLocale",
          "normalized": "TimeLocale[(String,String)][(String,String)][(String,String)](String,String)String String String String",
          "package": "haskell98libraries",
          "partial": "Time Locale",
          "signature": "TimeLocale[(String,String)][(String,String)][(String,String)](String,String)String String String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Locale.html#v:TimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Locale",
          "name": "defaultTimeLocale",
          "package": "haskell98libraries",
          "signature": "TimeLocale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Locale",
          "module": "Locale",
          "name": "defaultTimeLocale",
          "package": "haskell98libraries",
          "partial": "Time Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Locale.html#v:defaultTimeLocale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MarshalAlloc",
          "name": "MarshalAlloc",
          "package": "haskell98libraries",
          "source": "src/MarshalAlloc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MarshalAlloc",
          "module": "MarshalAlloc",
          "name": "MarshalAlloc",
          "package": "haskell98libraries",
          "partial": "Marshal Alloc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalAlloc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MarshalArray",
          "name": "MarshalArray",
          "package": "haskell98libraries",
          "source": "src/MarshalArray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MarshalArray",
          "module": "MarshalArray",
          "name": "MarshalArray",
          "package": "haskell98libraries",
          "partial": "Marshal Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MarshalError",
          "name": "MarshalError",
          "package": "haskell98libraries",
          "source": "src/MarshalError.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "MarshalError",
          "package": "haskell98libraries",
          "partial": "Marshal Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract type that contains a value for each variant of \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "IOErrorType",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "An abstract type that contains value for each variant of IOError",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "IOErrorType",
          "package": "haskell98libraries",
          "partial": "IOError Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#t:IOErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n already exists.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "alreadyExistsErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments already exists",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "alreadyExistsErrorType",
          "package": "haskell98libraries",
          "partial": "Exists Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:alreadyExistsErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n is a single-use resource, which is already being used.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "alreadyInUseErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments is single-use resource which is already being used",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "alreadyInUseErrorType",
          "package": "haskell98libraries",
          "partial": "In Use Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:alreadyInUseErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a location description and maybe a file path and file handle\n to an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.  If any of the file handle or file path is not given\n the corresponding value in the \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e remains unaltered.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "annotateIOError",
          "package": "haskell98libraries",
          "signature": "IOError -\u003e String -\u003e Maybe Handle -\u003e Maybe FilePath -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Adds location description and maybe file path and file handle to an IOError If any of the file handle or file path is not given the corresponding value in the IOError remains unaltered",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "annotateIOError",
          "normalized": "IOError-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "package": "haskell98libraries",
          "partial": "IOError",
          "signature": "IOError-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:annotateIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because one of its arguments\n does not exist.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "doesNotExistErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because one of its arguments does not exist",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "doesNotExistErrorType",
          "package": "haskell98libraries",
          "partial": "Not Exist Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:doesNotExistErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the end of file has\n been reached.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "eofErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the end of file has been reached",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "eofErrorType",
          "package": "haskell98libraries",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:eofErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the device is full.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "fullErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the device is full",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "fullErrorType",
          "package": "haskell98libraries",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:fullErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation is not possible.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "illegalOperationErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation is not possible",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "illegalOperationErrorType",
          "package": "haskell98libraries",
          "partial": "Operation Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:illegalOperationErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e of the given type where the second argument\n describes the error location and the third and fourth argument\n contain the file handle and file path of the file involved in the\n error if applicable.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "mkIOError",
          "package": "haskell98libraries",
          "signature": "IOErrorType -\u003e String -\u003e Maybe Handle -\u003e Maybe FilePath -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError of the given type where the second argument describes the error location and the third and fourth argument contain the file handle and file path of the file involved in the error if applicable",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "mkIOError",
          "normalized": "IOErrorType-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "package": "haskell98libraries",
          "partial": "IOError",
          "signature": "IOErrorType-\u003eString-\u003eMaybe Handle-\u003eMaybe FilePath-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:mkIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error where the operation failed because the user does not\n have sufficient operating system privilege to perform that operation.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "permissionErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error where the operation failed because the user does not have sufficient operating system privilege to perform that operation",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "permissionErrorType",
          "package": "haskell98libraries",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:permissionErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI/O error that is programmer-defined.\n\u003c/p\u003e",
          "module": "MarshalError",
          "name": "userErrorType",
          "package": "haskell98libraries",
          "signature": "IOErrorType",
          "type": "function"
        },
        "index": {
          "description": "error that is programmer-defined",
          "hierarchy": "MarshalError",
          "module": "MarshalError",
          "name": "userErrorType",
          "package": "haskell98libraries",
          "partial": "Error Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalError.html#v:userErrorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MarshalUtils",
          "name": "MarshalUtils",
          "package": "haskell98libraries",
          "source": "src/MarshalUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MarshalUtils",
          "module": "MarshalUtils",
          "name": "MarshalUtils",
          "package": "haskell98libraries",
          "partial": "Marshal Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/MarshalUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Maybe",
          "name": "Maybe",
          "package": "haskell98libraries",
          "source": "src/Maybe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "Maybe",
          "package": "haskell98libraries",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "Maybe",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "Maybe",
          "package": "haskell98libraries",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Maybe",
          "name": "Just",
          "package": "haskell98libraries",
          "signature": "Just a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "Just",
          "package": "haskell98libraries",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Maybe",
          "name": "Nothing",
          "package": "haskell98libraries",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "Nothing",
          "package": "haskell98libraries",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
          "module": "Maybe",
          "name": "catMaybes",
          "package": "haskell98libraries",
          "signature": "[Maybe a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and\n throws an error if its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "fromJust",
          "package": "haskell98libraries",
          "signature": "Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromJust function extracts the element out of Just and throws an error if its argument is Nothing",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "haskell98libraries",
          "partial": "Just",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "fromMaybe",
          "package": "haskell98libraries",
          "signature": "a -\u003e Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "haskell98libraries",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the\n form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "isJust",
          "package": "haskell98libraries",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isJust function returns True iff its argument is of the form Just",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "isJust",
          "normalized": "Maybe a-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Just",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "isNothing",
          "package": "haskell98libraries",
          "signature": "Maybe a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isNothing function returns True iff its argument is Nothing",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "isNothing",
          "normalized": "Maybe a-\u003eBool",
          "package": "haskell98libraries",
          "partial": "Nothing",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on an empty list\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the first element of the list.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "listToMaybe",
          "package": "haskell98libraries",
          "signature": "[a] -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "The listToMaybe function returns Nothing on an empty list or Just where is the first element of the list",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "haskell98libraries",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function is a version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e which can throw\n out elements.  In particular, the functional argument returns\n something of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.  If this is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no element\n is added on to the result list.  If it just \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is\n included in the result list.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "mapMaybe",
          "package": "haskell98libraries",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "The mapMaybe function is version of map which can throw out elements In particular the functional argument returns something of type Maybe If this is Nothing no element is added on to the result list If it just Just then is included in the result list",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "haskell98libraries",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "maybe",
          "package": "haskell98libraries",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "haskell98libraries",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function returns an empty list when given\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e or a singleton list when not given \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Maybe",
          "name": "maybeToList",
          "package": "haskell98libraries",
          "signature": "Maybe a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The maybeToList function returns an empty list when given Nothing or singleton list when not given Nothing",
          "hierarchy": "Maybe",
          "module": "Maybe",
          "name": "maybeToList",
          "normalized": "Maybe a-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "To List",
          "signature": "Maybe a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Maybe.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monad",
          "name": "Monad",
          "package": "haskell98libraries",
          "source": "src/Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "Monad",
          "package": "haskell98libraries",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "Functor",
          "package": "haskell98libraries",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "Functor",
          "package": "haskell98libraries",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "Monad",
          "package": "haskell98libraries",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "Monad",
          "package": "haskell98libraries",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that also support choice and failure.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "MonadPlus",
          "package": "haskell98libraries",
          "type": "class"
        },
        "index": {
          "description": "Monads that also support choice and failure",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "MonadPlus",
          "package": "haskell98libraries",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "(=\u003c\u003c)",
          "package": "haskell98libraries",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Same as but with the arguments interchanged",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "haskell98libraries",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "(\u003e\u003e)",
          "package": "haskell98libraries",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "haskell98libraries",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "(\u003e\u003e=)",
          "package": "haskell98libraries",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "haskell98libraries",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Monad",
          "name": "ap",
          "package": "haskell98libraries",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "haskell98libraries",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "fail",
          "package": "haskell98libraries",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "haskell98libraries",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "filterM",
          "package": "haskell98libraries",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based filter function",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "haskell98libraries",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Monad",
          "name": "fmap",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "foldM",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "haskell98libraries",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "guard",
          "package": "haskell98libraries",
          "signature": "Bool -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "guard is return if is True and mzero if is False",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "haskell98libraries",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "join",
          "package": "haskell98libraries",
          "signature": "m (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "haskell98libraries",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "liftM",
          "package": "haskell98libraries",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
          "module": "Monad",
          "name": "liftM2",
          "package": "haskell98libraries",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Monad",
          "name": "liftM3",
          "package": "haskell98libraries",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Monad",
          "name": "liftM4",
          "package": "haskell98libraries",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Monad",
          "name": "liftM5",
          "package": "haskell98libraries",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "haskell98libraries",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "mapAndUnzipM",
          "package": "haskell98libraries",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "haskell98libraries",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "mapM",
          "package": "haskell98libraries",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "haskell98libraries",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "mapM_",
          "package": "haskell98libraries",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "haskell98libraries",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean associative operation\n\u003c/p\u003e",
          "module": "Monad",
          "name": "mplus",
          "package": "haskell98libraries",
          "signature": "m a -\u003e m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "an associative operation",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "mplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "haskell98libraries",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "msum",
          "package": "haskell98libraries",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "haskell98libraries",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe identity of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.  It should also satisfy the equations\n\u003c/p\u003e\u003cpre\u003e mzero \u003e\u003e= f  =  mzero\n v \u003e\u003e mzero   =  mzero\n\u003c/pre\u003e",
          "module": "Monad",
          "name": "mzero",
          "package": "haskell98libraries",
          "signature": "m a",
          "type": "method"
        },
        "index": {
          "description": "the identity of mplus It should also satisfy the equations mzero mzero mzero mzero",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "mzero",
          "package": "haskell98libraries",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "return",
          "package": "haskell98libraries",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "haskell98libraries",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "sequence",
          "package": "haskell98libraries",
          "signature": "[m a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "haskell98libraries",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "sequence_",
          "package": "haskell98libraries",
          "signature": "[m a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and ignore the results",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "haskell98libraries",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "unless",
          "package": "haskell98libraries",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "haskell98libraries",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "when",
          "package": "haskell98libraries",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "haskell98libraries",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "zipWithM",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "type": "function"
        },
        "index": {
          "description": "The zipWithM function generalizes zipWith to arbitrary monads",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
          "module": "Monad",
          "name": "zipWithM_",
          "package": "haskell98libraries",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "zipWithM is the extension of zipWithM which ignores the final result",
          "hierarchy": "Monad",
          "module": "Monad",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Monad.html#v:zipWithM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ptr",
          "name": "Ptr",
          "package": "haskell98libraries",
          "source": "src/Ptr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ptr",
          "module": "Ptr",
          "name": "Ptr",
          "package": "haskell98libraries",
          "partial": "Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ptr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Random",
          "name": "Random",
          "package": "haskell98libraries",
          "source": "src/Random.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Random",
          "module": "Random",
          "name": "Random",
          "package": "haskell98libraries",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith a source of random number supply in hand, the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e class allows the\nprogrammer to extract random values of a variety of types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Random",
          "name": "Random",
          "package": "haskell98libraries",
          "source": "src/Random.html#Random",
          "type": "class"
        },
        "index": {
          "description": "With source of random number supply in hand the Random class allows the programmer to extract random values of variety of types Minimal complete definition randomR and random",
          "hierarchy": "Random",
          "module": "Random",
          "name": "Random",
          "package": "haskell98libraries",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e provides a common interface to random number\n generators.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Random",
          "name": "RandomGen",
          "package": "haskell98libraries",
          "source": "src/Random.html#RandomGen",
          "type": "class"
        },
        "index": {
          "description": "The class RandomGen provides common interface to random number generators Minimal complete definition next and split",
          "hierarchy": "Random",
          "module": "Random",
          "name": "RandomGen",
          "package": "haskell98libraries",
          "partial": "Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#t:RandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e of at least 30 bits.\n\u003c/p\u003e\u003cp\u003eThe result of repeatedly using \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e should be at least as statistically\nrobust as the \u003cem\u003eMinimal Standard Random Number Generator\u003c/em\u003e described by\n[\u003ca\u003eRandom\u003c/a\u003e, \u003ca\u003eRandom\u003c/a\u003e].\nUntil more is known about implementations of \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, all we require is\nthat \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e deliver generators that are (a) not identical and\n(b) independently robust in the sense just given.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instances of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e provide a primitive way to save the\nstate of a random number generator.\nIt is required that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e g) == g\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition, \u003ccode\u003e\u003ca\u003ereads\u003c/a\u003e\u003c/code\u003e may be used to map an arbitrary string (not necessarily one\nproduced by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e) onto a value of type \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e. In general, the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\ninstance of \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e has the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It guarantees to succeed on any string.\n\u003c/li\u003e\u003cli\u003e It guarantees to consume only a finite portion of the string.\n\u003c/li\u003e\u003cli\u003e Different argument strings are likely to result in different results.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Random",
          "name": "StdGen",
          "package": "haskell98libraries",
          "source": "src/Random.html#StdGen",
          "type": "data"
        },
        "index": {
          "description": "The StdGen instance of RandomGen has genRange of at least bits The result of repeatedly using next should be at least as statistically robust as the Minimal Standard Random Number Generator described by Random Random Until more is known about implementations of split all we require is that split deliver generators that are not identical and independently robust in the sense just given The Show and Read instances of StdGen provide primitive way to save the state of random number generator It is required that read show In addition reads may be used to map an arbitrary string not necessarily one produced by show onto value of type StdGen In general the Read instance of StdGen has the following properties It guarantees to succeed on any string It guarantees to consume only finite portion of the string Different argument strings are likely to result in different results",
          "hierarchy": "Random",
          "module": "Random",
          "name": "StdGen",
          "package": "haskell98libraries",
          "partial": "Std Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#t:StdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e operation yields the range of values returned by\n the generator.\n\u003c/p\u003e\u003cp\u003eIt is required that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e(a,b) = \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e, then \u003ccode\u003ea \u003c b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e always returns a pair of defined \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe second condition ensures that \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e cannot examine its\n argument, and hence the value it returns can be determined only by the\n instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.  That in turn allows an implementation to make\n a single call to \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e to establish a generator's range, without\n being concerned that the generator returned by (say) \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e might have\n a different range to the generator passed to \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition spans the full range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Random",
          "name": "genRange",
          "package": "haskell98libraries",
          "signature": "g -\u003e (Int, Int)",
          "source": "src/Random.html#genRange",
          "type": "method"
        },
        "index": {
          "description": "The genRange operation yields the range of values returned by the generator It is required that If genRange then genRange always returns pair of defined Int The second condition ensures that genRange cannot examine its argument and hence the value it returns can be determined only by the instance of RandomGen That in turn allows an implementation to make single call to genRange to establish generator range without being concerned that the generator returned by say next might have different range to the generator passed to next The default definition spans the full range of Int",
          "hierarchy": "Random",
          "module": "Random",
          "name": "genRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "haskell98libraries",
          "partial": "Range",
          "signature": "g-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:genRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the global random number generator.\n\u003c/p\u003e",
          "module": "Random",
          "name": "getStdGen",
          "package": "haskell98libraries",
          "signature": "IO StdGen",
          "source": "src/Random.html#getStdGen",
          "type": "function"
        },
        "index": {
          "description": "Gets the global random number generator",
          "hierarchy": "Random",
          "module": "Random",
          "name": "getStdGen",
          "package": "haskell98libraries",
          "partial": "Std Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:getStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the supplied function to get a value from the current global\nrandom generator, and updates the global generator with the new generator\nreturned by the function. For example, \u003ccode\u003erollDice\u003c/code\u003e gets a random integer\nbetween 1 and 6:\n\u003c/p\u003e\u003cpre\u003e  rollDice :: IO Int\n  rollDice = getStdRandom (randomR (1,6))\n\u003c/pre\u003e",
          "module": "Random",
          "name": "getStdRandom",
          "package": "haskell98libraries",
          "signature": "(StdGen -\u003e (a, StdGen)) -\u003e IO a",
          "source": "src/Random.html#getStdRandom",
          "type": "function"
        },
        "index": {
          "description": "Uses the supplied function to get value from the current global random generator and updates the global generator with the new generator returned by the function For example rollDice gets random integer between and rollDice IO Int rollDice getStdRandom randomR",
          "hierarchy": "Random",
          "module": "Random",
          "name": "getStdRandom",
          "normalized": "(StdGen-\u003e(a,StdGen))-\u003eIO a",
          "package": "haskell98libraries",
          "partial": "Std Random",
          "signature": "(StdGen-\u003e(a,StdGen))-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:getStdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003emkStdGen\u003c/a\u003e\u003c/code\u003e provides an alternative way of producing an initial\ngenerator, by mapping an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e into a generator. Again, distinct arguments\nshould be likely to produce distinct generators.\n\u003c/p\u003e",
          "module": "Random",
          "name": "mkStdGen",
          "package": "haskell98libraries",
          "signature": "Int -\u003e StdGen",
          "source": "src/Random.html#mkStdGen",
          "type": "function"
        },
        "index": {
          "description": "The function mkStdGen provides an alternative way of producing an initial generator by mapping an Int into generator Again distinct arguments should be likely to produce distinct generators",
          "hierarchy": "Random",
          "module": "Random",
          "name": "mkStdGen",
          "normalized": "Int-\u003eStdGen",
          "package": "haskell98libraries",
          "partial": "Std Gen",
          "signature": "Int-\u003eStdGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:mkStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e to the current global random generator,\n updates it with one of the results, and returns the other.\n\u003c/p\u003e",
          "module": "Random",
          "name": "newStdGen",
          "package": "haskell98libraries",
          "signature": "IO StdGen",
          "source": "src/Random.html#newStdGen",
          "type": "function"
        },
        "index": {
          "description": "Applies split to the current global random generator updates it with one of the results and returns the other",
          "hierarchy": "Random",
          "module": "Random",
          "name": "newStdGen",
          "package": "haskell98libraries",
          "partial": "Std Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:newStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation returns an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e that is uniformly distributed\n in the range returned by \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e (including both end points),\n and a new generator.\n\u003c/p\u003e",
          "module": "Random",
          "name": "next",
          "package": "haskell98libraries",
          "signature": "g -\u003e (Int, g)",
          "source": "src/Random.html#next",
          "type": "method"
        },
        "index": {
          "description": "The next operation returns an Int that is uniformly distributed in the range returned by genRange including both end points and new generator",
          "hierarchy": "Random",
          "module": "Random",
          "name": "next",
          "normalized": "a-\u003e(Int,a)",
          "package": "haskell98libraries",
          "signature": "g-\u003e(Int,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, but using a default range determined by the type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For bounded types (instances of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e),\n   the range is normally the whole type.\n\u003c/li\u003e\u003cli\u003e For fractional types, the range is normally the semi-closed interval\n \u003ccode\u003e[0,1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the range is (arbitrarily) the range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Random",
          "name": "random",
          "package": "haskell98libraries",
          "signature": "g -\u003e (a, g)",
          "source": "src/Random.html#random",
          "type": "method"
        },
        "index": {
          "description": "The same as randomR but using default range determined by the type For bounded types instances of Bounded such as Char the range is normally the whole type For fractional types the range is normally the semi-closed interval For Integer the range is arbitrarily the range of Int",
          "hierarchy": "Random",
          "module": "Random",
          "name": "random",
          "normalized": "a-\u003e(b,a)",
          "package": "haskell98libraries",
          "signature": "g-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eRandom\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Random",
          "name": "randomIO",
          "package": "haskell98libraries",
          "signature": "IO a",
          "source": "src/Random.html#randomIO",
          "type": "method"
        },
        "index": {
          "description": "variant of random that uses the global random number generator see Random",
          "hierarchy": "Random",
          "module": "Random",
          "name": "randomIO",
          "package": "haskell98libraries",
          "partial": "IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:randomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a range \u003cem\u003e(lo,hi)\u003c/em\u003e and a random number generator\n \u003cem\u003eg\u003c/em\u003e, and returns a random value uniformly distributed in the closed\n interval \u003cem\u003e[lo,hi]\u003c/em\u003e, together with a new generator. It is unspecified\n what happens if \u003cem\u003elo\u003ehi\u003c/em\u003e. For continuous types there is no requirement\n that the values \u003cem\u003elo\u003c/em\u003e and \u003cem\u003ehi\u003c/em\u003e are ever produced, but they may be,\n depending on the implementation and the interval.\n\u003c/p\u003e",
          "module": "Random",
          "name": "randomR",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e g -\u003e (a, g)",
          "source": "src/Random.html#randomR",
          "type": "method"
        },
        "index": {
          "description": "Takes range lo hi and random number generator and returns random value uniformly distributed in the closed interval lo hi together with new generator It is unspecified what happens if lo hi For continuous types there is no requirement that the values lo and hi are ever produced but they may be depending on the implementation and the interval",
          "hierarchy": "Random",
          "module": "Random",
          "name": "randomR",
          "normalized": "(a,a)-\u003eb-\u003e(a,b)",
          "package": "haskell98libraries",
          "signature": "(a,a)-\u003eg-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eRandom\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Random",
          "name": "randomRIO",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e IO a",
          "source": "src/Random.html#randomRIO",
          "type": "method"
        },
        "index": {
          "description": "variant of randomR that uses the global random number generator see Random",
          "hierarchy": "Random",
          "module": "Random",
          "name": "randomRIO",
          "normalized": "(a,a)-\u003eIO a",
          "package": "haskell98libraries",
          "partial": "RIO",
          "signature": "(a,a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:randomRIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "Random",
          "name": "randomRs",
          "package": "haskell98libraries",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "source": "src/Random.html#randomRs",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of randomR producing an infinite list of random values instead of returning new generator",
          "hierarchy": "Random",
          "module": "Random",
          "name": "randomRs",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "haskell98libraries",
          "partial": "Rs",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "Random",
          "name": "randoms",
          "package": "haskell98libraries",
          "signature": "g -\u003e [a]",
          "source": "src/Random.html#randoms",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of random producing an infinite list of random values instead of returning new generator",
          "hierarchy": "Random",
          "module": "Random",
          "name": "randoms",
          "normalized": "a-\u003e[b]",
          "package": "haskell98libraries",
          "signature": "g-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the global random number generator.\n\u003c/p\u003e",
          "module": "Random",
          "name": "setStdGen",
          "package": "haskell98libraries",
          "signature": "StdGen -\u003e IO ()",
          "source": "src/Random.html#setStdGen",
          "type": "function"
        },
        "index": {
          "description": "Sets the global random number generator",
          "hierarchy": "Random",
          "module": "Random",
          "name": "setStdGen",
          "normalized": "StdGen-\u003eIO()",
          "package": "haskell98libraries",
          "partial": "Std Gen",
          "signature": "StdGen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:setStdGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e operation allows one to obtain two distinct random number\n generators. This is very useful in functional programs (for example, when\n passing a random number generator down to recursive calls), but very\n little work has been done on statistically robust implementations of\n \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e ([\u003ca\u003eRandom\u003c/a\u003e, \u003ca\u003eRandom\u003c/a\u003e]\n are the only examples we know of).\n\u003c/p\u003e",
          "module": "Random",
          "name": "split",
          "package": "haskell98libraries",
          "signature": "g -\u003e (g, g)",
          "source": "src/Random.html#split",
          "type": "method"
        },
        "index": {
          "description": "The split operation allows one to obtain two distinct random number generators This is very useful in functional programs for example when passing random number generator down to recursive calls but very little work has been done on statistically robust implementations of split Random Random are the only examples we know of",
          "hierarchy": "Random",
          "module": "Random",
          "name": "split",
          "normalized": "a-\u003e(a,a)",
          "package": "haskell98libraries",
          "signature": "g-\u003e(g,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Random.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ratio",
          "name": "Ratio",
          "package": "haskell98libraries",
          "source": "src/Ratio.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "Ratio",
          "package": "haskell98libraries",
          "partial": "Ratio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRational numbers, with numerator and denominator of some \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "Ratio",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "Rational numbers with numerator and denominator of some Integral type",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "Ratio",
          "package": "haskell98libraries",
          "partial": "Ratio",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#t:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "Rational",
          "package": "haskell98libraries",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "Rational",
          "package": "haskell98libraries",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForms the ratio of two integral numbers.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "(%)",
          "package": "haskell98libraries",
          "signature": "a -\u003e a -\u003e Ratio a",
          "type": "function"
        },
        "index": {
          "description": "Forms the ratio of two integral numbers",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "(%) %",
          "normalized": "a-\u003ea-\u003eRatio a",
          "package": "haskell98libraries",
          "signature": "a-\u003ea-\u003eRatio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eapproxRational\u003c/a\u003e\u003c/code\u003e, applied to two real fractional numbers \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003eepsilon\u003c/code\u003e,\n returns the simplest rational number within \u003ccode\u003eepsilon\u003c/code\u003e of \u003ccode\u003ex\u003c/code\u003e.\n A rational number \u003ccode\u003ey\u003c/code\u003e is said to be \u003cem\u003esimpler\u003c/em\u003e than another \u003ccode\u003ey'\u003c/code\u003e if\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enumerator\u003c/a\u003e\u003c/code\u003e y')\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y \u003c= \u003ccode\u003e\u003ca\u003edenominator\u003c/a\u003e\u003c/code\u003e y'\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny real interval contains a unique simplest rational;\n in particular, note that \u003ccode\u003e0/1\u003c/code\u003e is the simplest rational of all.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "approxRational",
          "package": "haskell98libraries",
          "signature": "a -\u003e a -\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "approxRational applied to two real fractional numbers and epsilon returns the simplest rational number within epsilon of rational number is said to be simpler than another if abs numerator abs numerator and denominator denominator Any real interval contains unique simplest rational in particular note that is the simplest rational of all",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "approxRational",
          "normalized": "a-\u003ea-\u003eRational",
          "package": "haskell98libraries",
          "partial": "Rational",
          "signature": "a-\u003ea-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#v:approxRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the denominator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "denominator",
          "package": "haskell98libraries",
          "signature": "Ratio a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the denominator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "denominator",
          "normalized": "Ratio a-\u003ea",
          "package": "haskell98libraries",
          "signature": "Ratio a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#v:denominator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the numerator of the ratio in reduced form:\n the numerator and denominator have no common factor and the denominator\n is positive.\n\u003c/p\u003e",
          "module": "Ratio",
          "name": "numerator",
          "package": "haskell98libraries",
          "signature": "Ratio a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the numerator of the ratio in reduced form the numerator and denominator have no common factor and the denominator is positive",
          "hierarchy": "Ratio",
          "module": "Ratio",
          "name": "numerator",
          "normalized": "Ratio a-\u003ea",
          "package": "haskell98libraries",
          "signature": "Ratio a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Ratio.html#v:numerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StablePtr",
          "name": "StablePtr",
          "package": "haskell98libraries",
          "source": "src/StablePtr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "StablePtr",
          "module": "StablePtr",
          "name": "StablePtr",
          "package": "haskell98libraries",
          "partial": "Stable Ptr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/StablePtr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Storable",
          "name": "Storable",
          "package": "haskell98libraries",
          "source": "src/Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Storable",
          "module": "Storable",
          "name": "Storable",
          "package": "haskell98libraries",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System",
          "name": "System",
          "package": "haskell98libraries",
          "source": "src/System.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System",
          "module": "System",
          "name": "System",
          "package": "haskell98libraries",
          "partial": "System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the exit codes that a program can return.\n\u003c/p\u003e",
          "module": "System",
          "name": "ExitCode",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "Defines the exit codes that program can return",
          "hierarchy": "System",
          "module": "System",
          "name": "ExitCode",
          "package": "haskell98libraries",
          "partial": "Exit Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#t:ExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates program failure with an exit code.\n The exact interpretation of the code is\n operating-system dependent.  In particular, some values\n may be prohibited (e.g. 0 on a POSIX-compliant system).\n\u003c/p\u003e",
          "module": "System",
          "name": "ExitFailure",
          "package": "haskell98libraries",
          "signature": "ExitFailure Int",
          "type": "function"
        },
        "index": {
          "description": "indicates program failure with an exit code The exact interpretation of the code is operating-system dependent In particular some values may be prohibited e.g on POSIX-compliant system",
          "hierarchy": "System",
          "module": "System",
          "name": "ExitFailure",
          "package": "haskell98libraries",
          "partial": "Exit Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:ExitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates successful termination;\n\u003c/p\u003e",
          "module": "System",
          "name": "ExitSuccess",
          "package": "haskell98libraries",
          "signature": "ExitSuccess",
          "type": "function"
        },
        "index": {
          "description": "indicates successful termination",
          "hierarchy": "System",
          "module": "System",
          "name": "ExitSuccess",
          "package": "haskell98libraries",
          "partial": "Exit Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:ExitSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e\u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e \u003cem\u003eexitfail\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e,\n where \u003cem\u003eexitfail\u003c/em\u003e is implementation-dependent.\n\u003c/p\u003e",
          "module": "System",
          "name": "exitFailure",
          "package": "haskell98libraries",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The computation exitFailure is equivalent to exitWith ExitFailure exitfail where exitfail is implementation-dependent",
          "hierarchy": "System",
          "module": "System",
          "name": "exitFailure",
          "package": "haskell98libraries",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:exitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecode\u003c/code\u003e throws \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecode\u003c/code\u003e.\n Normally this terminates the program, returning \u003ccode\u003ecode\u003c/code\u003e to the\n program's caller.\n\u003c/p\u003e\u003cp\u003eOn program termination, the standard \u003ccode\u003eHandle\u003c/code\u003es \u003ccode\u003estdout\u003c/code\u003e and\n \u003ccode\u003estderr\u003c/code\u003e are flushed automatically; any other buffered \u003ccode\u003eHandle\u003c/code\u003es\n need to be flushed manually, otherwise the buffered data will be\n discarded.\n\u003c/p\u003e\u003cp\u003eA program that fails in any other way is treated as if it had\n called \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e.\n A program that terminates successfully without calling \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e\n explicitly is treated as it it had called \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e is not an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e bypasses\n the error handling in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and cannot be intercepted by\n \u003ccode\u003ecatch\u003c/code\u003e from the \u003ca\u003ePrelude\u003c/a\u003e.  However it is a \u003ccode\u003eSomeException\u003c/code\u003e, and can\n be caught using the functions of \u003ca\u003eControl.Exception\u003c/a\u003e.  This means\n that cleanup computations added with \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n (from \u003ca\u003eControl.Exception\u003c/a\u003e) are also executed properly on \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: in GHC, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e should be called from the main program\n thread in order to exit the process.  When called from another\n thread, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e will throw an \u003ccode\u003eExitException\u003c/code\u003e as normal, but the\n exception will not cause the process itself to exit.\n\u003c/p\u003e",
          "module": "System",
          "name": "exitWith",
          "package": "haskell98libraries",
          "signature": "ExitCode -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Computation exitWith code throws ExitCode code Normally this terminates the program returning code to the program caller On program termination the standard Handle stdout and stderr are flushed automatically any other buffered Handle need to be flushed manually otherwise the buffered data will be discarded program that fails in any other way is treated as if it had called exitFailure program that terminates successfully without calling exitWith explicitly is treated as it it had called exitWith ExitSuccess As an ExitCode is not an IOError exitWith bypasses the error handling in the IO monad and cannot be intercepted by catch from the Prelude However it is SomeException and can be caught using the functions of Control.Exception This means that cleanup computations added with bracket from Control.Exception are also executed properly on exitWith Note in GHC exitWith should be called from the main program thread in order to exit the process When called from another thread exitWith will throw an ExitException as normal but the exception will not cause the process itself to exit",
          "hierarchy": "System",
          "module": "System",
          "name": "exitWith",
          "normalized": "ExitCode-\u003eIO a",
          "package": "haskell98libraries",
          "partial": "With",
          "signature": "ExitCode-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:exitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e returns a list of the program's command\n line arguments (not including the program name).\n\u003c/p\u003e",
          "module": "System",
          "name": "getArgs",
          "package": "haskell98libraries",
          "signature": "IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Computation getArgs returns list of the program command line arguments not including the program name",
          "hierarchy": "System",
          "module": "System",
          "name": "getArgs",
          "normalized": "IO[String]",
          "package": "haskell98libraries",
          "partial": "Args",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:getArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar\u003c/code\u003e returns the value\n of the environment variable \u003ccode\u003evar\u003c/code\u003e. For the inverse, POSIX users\n can use \u003ccode\u003e\u003ca\u003eputEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the environment variable\n    does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System",
          "name": "getEnv",
          "package": "haskell98libraries",
          "signature": "String -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation getEnv var returns the value of the environment variable var For the inverse POSIX users can use putEnv This computation may fail with isDoesNotExistError if the environment variable does not exist",
          "hierarchy": "System",
          "module": "System",
          "name": "getEnv",
          "normalized": "String-\u003eIO String",
          "package": "haskell98libraries",
          "partial": "Env",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e returns the name of the program as it was\ninvoked.\n\u003c/p\u003e\u003cp\u003eHowever, this is hard-to-impossible to implement on some non-Unix\nOSes, so instead, for maximum portability, we just return the leafname\nof the program as invoked. Even then there are some differences\nbetween platforms: on Windows, for example, a program invoked as foo\nis probably really \u003ccode\u003eFOO.EXE\u003c/code\u003e, and that is what \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e will return.\n\u003c/p\u003e",
          "module": "System",
          "name": "getProgName",
          "package": "haskell98libraries",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation getProgName returns the name of the program as it was invoked However this is hard-to-impossible to implement on some non-Unix OSes so instead for maximum portability we just return the leafname of the program as invoked Even then there are some differences between platforms on Windows for example program invoked as foo is probably really FOO.EXE and that is what getProgName will return",
          "hierarchy": "System",
          "module": "System",
          "name": "getProgName",
          "package": "haskell98libraries",
          "partial": "Prog Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:getProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003esystem cmd\u003c/code\u003e returns the exit code produced when the\noperating system runs the shell command \u003ccode\u003ecmd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation may fail with\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ePermissionDenied\u003c/code\u003e: The process has insufficient privileges to\n     perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e: Insufficient resources are available to\n     perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e: The implementation does not support\n     system calls.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn Windows, \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e passes the command to the Windows command\ninterpreter (\u003ccode\u003eCMD.EXE\u003c/code\u003e or \u003ccode\u003eCOMMAND.COM\u003c/code\u003e), hence Unixy shell tricks\nwill not work.\n\u003c/p\u003e",
          "module": "System",
          "name": "system",
          "package": "haskell98libraries",
          "signature": "String -\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Computation system cmd returns the exit code produced when the operating system runs the shell command cmd This computation may fail with PermissionDenied The process has insufficient privileges to perform the operation ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The implementation does not support system calls On Windows system passes the command to the Windows command interpreter CMD.EXE or COMMAND.COM hence Unixy shell tricks will not work",
          "hierarchy": "System",
          "module": "System",
          "name": "system",
          "normalized": "String-\u003eIO ExitCode",
          "package": "haskell98libraries",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/System.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Time",
          "package": "haskell98libraries",
          "source": "src/Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Time",
          "package": "haskell98libraries",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e is a user-readable and manipulable\n representation of the internal \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Time",
          "name": "CalendarTime",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "CalendarTime is user-readable and manipulable representation of the internal ClockTime type",
          "hierarchy": "Time",
          "module": "Time",
          "name": "CalendarTime",
          "package": "haskell98libraries",
          "partial": "Calendar Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#t:CalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of the internal clock time.\n Clock times may be compared, converted to strings, or converted to an\n external calendar time \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e for I/O or other manipulations.\n\u003c/p\u003e",
          "module": "Time",
          "name": "ClockTime",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "representation of the internal clock time Clock times may be compared converted to strings or converted to an external calendar time CalendarTime for or other manipulations",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ClockTime",
          "package": "haskell98libraries",
          "partial": "Clock Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#t:ClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA day of the week.\n\u003c/p\u003e",
          "module": "Time",
          "name": "Day",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "day of the week",
          "hierarchy": "Time",
          "module": "Time",
          "name": "Day",
          "package": "haskell98libraries",
          "partial": "Day",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#t:Day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA month of the year.\n\u003c/p\u003e",
          "module": "Time",
          "name": "Month",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "month of the year",
          "hierarchy": "Time",
          "module": "Time",
          "name": "Month",
          "package": "haskell98libraries",
          "partial": "Month",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#t:Month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecords the difference between two clock times in a user-readable way.\n\u003c/p\u003e",
          "module": "Time",
          "name": "TimeDiff",
          "package": "haskell98libraries",
          "type": "data"
        },
        "index": {
          "description": "records the difference between two clock times in user-readable way",
          "hierarchy": "Time",
          "module": "Time",
          "name": "TimeDiff",
          "package": "haskell98libraries",
          "partial": "Time Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#t:TimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "April",
          "package": "haskell98libraries",
          "signature": "April",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "April",
          "package": "haskell98libraries",
          "partial": "April",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:April"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "August",
          "package": "haskell98libraries",
          "signature": "August",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "August",
          "package": "haskell98libraries",
          "partial": "August",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:August"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "CalendarTime",
          "package": "haskell98libraries",
          "signature": "CalendarTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "CalendarTime",
          "package": "haskell98libraries",
          "partial": "Calendar Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:CalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "December",
          "package": "haskell98libraries",
          "signature": "December",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "December",
          "package": "haskell98libraries",
          "partial": "December",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:December"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "February",
          "package": "haskell98libraries",
          "signature": "February",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "February",
          "package": "haskell98libraries",
          "partial": "February",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:February"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Friday",
          "package": "haskell98libraries",
          "signature": "Friday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Friday",
          "package": "haskell98libraries",
          "partial": "Friday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "January",
          "package": "haskell98libraries",
          "signature": "January",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "January",
          "package": "haskell98libraries",
          "partial": "January",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:January"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "July",
          "package": "haskell98libraries",
          "signature": "July",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "July",
          "package": "haskell98libraries",
          "partial": "July",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:July"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "June",
          "package": "haskell98libraries",
          "signature": "June",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "June",
          "package": "haskell98libraries",
          "partial": "June",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:June"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "March",
          "package": "haskell98libraries",
          "signature": "March",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "March",
          "package": "haskell98libraries",
          "partial": "March",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:March"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "May",
          "package": "haskell98libraries",
          "signature": "May",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "May",
          "package": "haskell98libraries",
          "partial": "May",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:May"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Monday",
          "package": "haskell98libraries",
          "signature": "Monday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Monday",
          "package": "haskell98libraries",
          "partial": "Monday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "November",
          "package": "haskell98libraries",
          "signature": "November",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "November",
          "package": "haskell98libraries",
          "partial": "November",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:November"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "October",
          "package": "haskell98libraries",
          "signature": "October",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "October",
          "package": "haskell98libraries",
          "partial": "October",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:October"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Saturday",
          "package": "haskell98libraries",
          "signature": "Saturday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Saturday",
          "package": "haskell98libraries",
          "partial": "Saturday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "September",
          "package": "haskell98libraries",
          "signature": "September",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "September",
          "package": "haskell98libraries",
          "partial": "September",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:September"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Sunday",
          "package": "haskell98libraries",
          "signature": "Sunday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Sunday",
          "package": "haskell98libraries",
          "partial": "Sunday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Thursday",
          "package": "haskell98libraries",
          "signature": "Thursday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Thursday",
          "package": "haskell98libraries",
          "partial": "Thursday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "TimeDiff",
          "package": "haskell98libraries",
          "signature": "TimeDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "TimeDiff",
          "package": "haskell98libraries",
          "partial": "Time Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:TimeDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Tuesday",
          "package": "haskell98libraries",
          "signature": "Tuesday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Tuesday",
          "package": "haskell98libraries",
          "partial": "Tuesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "Wednesday",
          "package": "haskell98libraries",
          "signature": "Wednesday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "Wednesday",
          "package": "haskell98libraries",
          "partial": "Wednesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:Wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddToClockTime\u003c/a\u003e\u003c/code\u003e d t\u003c/code\u003e adds a time difference \u003ccode\u003ed\u003c/code\u003e and a\n clock time \u003ccode\u003et\u003c/code\u003e to yield a new clock time.  The difference \u003ccode\u003ed\u003c/code\u003e\n may be either positive or negative.\n\u003c/p\u003e",
          "module": "Time",
          "name": "addToClockTime",
          "package": "haskell98libraries",
          "signature": "TimeDiff -\u003e ClockTime -\u003e ClockTime",
          "type": "function"
        },
        "index": {
          "description": "addToClockTime adds time difference and clock time to yield new clock time The difference may be either positive or negative",
          "hierarchy": "Time",
          "module": "Time",
          "name": "addToClockTime",
          "normalized": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "package": "haskell98libraries",
          "partial": "To Clock Time",
          "signature": "TimeDiff-\u003eClockTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:addToClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats calendar times using local conventions.\n\u003c/p\u003e",
          "module": "Time",
          "name": "calendarTimeToString",
          "package": "haskell98libraries",
          "signature": "CalendarTime -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "formats calendar times using local conventions",
          "hierarchy": "Time",
          "module": "Time",
          "name": "calendarTimeToString",
          "normalized": "CalendarTime-\u003eString",
          "package": "haskell98libraries",
          "partial": "Time To String",
          "signature": "CalendarTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:calendarTimeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the month (1 to 31)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctDay",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Day of the month to",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctDay",
          "package": "haskell98libraries",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHour of the day (0 to 23)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctHour",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Hour of the day to",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctHour",
          "package": "haskell98libraries",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if Daylight Savings Time would\n be in effect, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctIsDST",
          "package": "haskell98libraries",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "True if Daylight Savings Time would be in effect and False otherwise",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctIsDST",
          "package": "haskell98libraries",
          "partial": "Is DST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctIsDST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinutes (0 to 59)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctMin",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Minutes to",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctMin",
          "package": "haskell98libraries",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonth of the year\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctMonth",
          "package": "haskell98libraries",
          "signature": "Month",
          "type": "function"
        },
        "index": {
          "description": "Month of the year",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctMonth",
          "package": "haskell98libraries",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePicoseconds\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctPicosec",
          "package": "haskell98libraries",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "Picoseconds",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctPicosec",
          "package": "haskell98libraries",
          "partial": "Picosec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctPicosec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds (0 to 61, allowing for up to\n two leap seconds)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctSec",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Seconds to allowing for up to two leap seconds",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctSec",
          "package": "haskell98libraries",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation from UTC in seconds\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctTZ",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Variation from UTC in seconds",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctTZ",
          "package": "haskell98libraries",
          "partial": "TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the time zone\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctTZName",
          "package": "haskell98libraries",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "Name of the time zone",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctTZName",
          "package": "haskell98libraries",
          "partial": "TZName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctTZName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the week\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctWDay",
          "package": "haskell98libraries",
          "signature": "Day",
          "type": "function"
        },
        "index": {
          "description": "Day of the week",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctWDay",
          "package": "haskell98libraries",
          "partial": "WDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctWDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of the year\n (0 to 364, or 365 in leap years)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctYDay",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Day of the year to or in leap years",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctYDay",
          "package": "haskell98libraries",
          "partial": "YDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctYDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYear (pre-Gregorian dates are inaccurate)\n\u003c/p\u003e",
          "module": "Time",
          "name": "ctYear",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Year pre-Gregorian dates are inaccurate",
          "hierarchy": "Time",
          "module": "Time",
          "name": "ctYear",
          "package": "haskell98libraries",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:ctYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ediffClockTimes\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e returns the difference between two clock\n times \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eTimeDiff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Time",
          "name": "diffClockTimes",
          "package": "haskell98libraries",
          "signature": "ClockTime -\u003e ClockTime -\u003e TimeDiff",
          "type": "function"
        },
        "index": {
          "description": "diffClockTimes t1 t2 returns the difference between two clock times t1 and t2 as TimeDiff",
          "hierarchy": "Time",
          "module": "Time",
          "name": "diffClockTimes",
          "normalized": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "package": "haskell98libraries",
          "partial": "Clock Times",
          "signature": "ClockTime-\u003eClockTime-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:diffClockTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformats calendar times using local conventions and a formatting string.\n The formatting string is that understood by the ISO C \u003ccode\u003estrftime()\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Time",
          "name": "formatCalendarTime",
          "package": "haskell98libraries",
          "signature": "TimeLocale -\u003e String -\u003e CalendarTime -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "formats calendar times using local conventions and formatting string The formatting string is that understood by the ISO strftime function",
          "hierarchy": "Time",
          "module": "Time",
          "name": "formatCalendarTime",
          "normalized": "TimeLocale-\u003eString-\u003eCalendarTime-\u003eString",
          "package": "haskell98libraries",
          "partial": "Calendar Time",
          "signature": "TimeLocale-\u003eString-\u003eCalendarTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:formatCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "getClockTime",
          "package": "haskell98libraries",
          "signature": "IO ClockTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "getClockTime",
          "package": "haskell98libraries",
          "partial": "Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:getClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdDay",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdDay",
          "package": "haskell98libraries",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdHour",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdHour",
          "package": "haskell98libraries",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdMin",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdMin",
          "package": "haskell98libraries",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdMonth",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdMonth",
          "package": "haskell98libraries",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdPicosec",
          "package": "haskell98libraries",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdPicosec",
          "package": "haskell98libraries",
          "partial": "Picosec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdPicosec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdSec",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdSec",
          "package": "haskell98libraries",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Time",
          "name": "tdYear",
          "package": "haskell98libraries",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Time",
          "module": "Time",
          "name": "tdYear",
          "package": "haskell98libraries",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:tdYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts an internal clock time to a local time, modified by the\n timezone and daylight savings time settings in force at the time\n of conversion.  Because of this dependence on the local environment,\n \u003ccode\u003e\u003ca\u003etoCalendarTime\u003c/a\u003e\u003c/code\u003e is in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Time",
          "name": "toCalendarTime",
          "package": "haskell98libraries",
          "signature": "ClockTime -\u003e IO CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "converts an internal clock time to local time modified by the timezone and daylight savings time settings in force at the time of conversion Because of this dependence on the local environment toCalendarTime is in the IO monad",
          "hierarchy": "Time",
          "module": "Time",
          "name": "toCalendarTime",
          "normalized": "ClockTime-\u003eIO CalendarTime",
          "package": "haskell98libraries",
          "partial": "Calendar Time",
          "signature": "ClockTime-\u003eIO CalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:toCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e into the corresponding internal\n \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e, ignoring the contents of the  \u003ccode\u003e\u003ca\u003ectWDay\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ectYDay\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ectTZName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ectIsDST\u003c/a\u003e\u003c/code\u003e fields.\n\u003c/p\u003e",
          "module": "Time",
          "name": "toClockTime",
          "package": "haskell98libraries",
          "signature": "CalendarTime -\u003e ClockTime",
          "type": "function"
        },
        "index": {
          "description": "converts CalendarTime into the corresponding internal ClockTime ignoring the contents of the ctWDay ctYDay ctTZName and ctIsDST fields",
          "hierarchy": "Time",
          "module": "Time",
          "name": "toClockTime",
          "normalized": "CalendarTime-\u003eClockTime",
          "package": "haskell98libraries",
          "partial": "Clock Time",
          "signature": "CalendarTime-\u003eClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:toClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts an internal clock time into a \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e in standard\n UTC format.\n\u003c/p\u003e",
          "module": "Time",
          "name": "toUTCTime",
          "package": "haskell98libraries",
          "signature": "ClockTime -\u003e CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "converts an internal clock time into CalendarTime in standard UTC format",
          "hierarchy": "Time",
          "module": "Time",
          "name": "toUTCTime",
          "normalized": "ClockTime-\u003eCalendarTime",
          "package": "haskell98libraries",
          "partial": "UTCTime",
          "signature": "ClockTime-\u003eCalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Time.html#v:toUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Word",
          "name": "Word",
          "package": "haskell98libraries",
          "source": "src/Word.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Word",
          "module": "Word",
          "name": "Word",
          "package": "haskell98libraries",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell98libraries/docs/Word.html#"
      }
    }
  ]
]