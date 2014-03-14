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
        "word": "array"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable arrays, with an overloaded interface.  For array types which\n can be used with this interface, see the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e type exported by this\n module and the \u003ca\u003eData.Array.Unboxed\u003c/a\u003e module. Other packages, such as\n diffarray, also provide arrays using this interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.IArray",
          "name": "IArray",
          "package": "array",
          "source": "src/Data-Array-IArray.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable arrays with an overloaded interface For array types which can be used with this interface see the Array type exported by this module and the Data.Array.Unboxed module Other packages such as diffarray also provide arrays using this interface",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "IArray",
          "package": "array",
          "partial": "IArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable non-strict (boxed) arrays\n with indices in \u003ccode\u003ei\u003c/code\u003e and elements in \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "Array",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable non-strict boxed arrays with indices in and elements in",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "Array",
          "package": "array",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of immutable array types.\n\u003c/p\u003e\u003cp\u003eAn array type has the form \u003ccode\u003e(a i e)\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the array type\nconstructor (kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e), \u003ccode\u003ei\u003c/code\u003e is the index type (a member of\nthe class \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e), and \u003ccode\u003ee\u003c/code\u003e is the element type.  The \u003ccode\u003eIArray\u003c/code\u003e class is\nparameterised over both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e, so that instances specialised to\ncertain element types can be defined.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "IArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#IArray",
          "type": "class"
        },
        "index": {
          "description": "Class of immutable array types An array type has the form where is the array type constructor kind is the index type member of the class Ix and is the element type The IArray class is parameterised over both and so that instances specialised to certain element types can be defined",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "IArray",
          "package": "array",
          "partial": "IArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#t:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the element of an immutable array at the specified index.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "(!)",
          "package": "array",
          "signature": "a i e -\u003e i -\u003e e",
          "source": "src/Data-Array-Base.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Returns the element of an immutable array at the specified index",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "(!) !",
          "normalized": "a b c-\u003eb-\u003ec",
          "package": "array",
          "signature": "a i e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an array and a list of pairs and returns an array identical to\nthe left argument except that it has been updated by the associations\nin the right argument.  For example, if m is a 1-origin, n by n matrix,\nthen \u003ccode\u003em//[((i,i), 0) | i \u003c- [1..n]]\u003c/code\u003e is the same matrix, except with\nthe diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eAs with the \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e function, if any two associations in the list have\nthe same index, the value at that index is implementation-dependent.\n(In GHC, the last value specified for that index is used.\nOther implementations will also do this for unboxed arrays, but Haskell\n98 requires that for \u003ccode\u003eArray\u003c/code\u003e the value at such indices is bottom.)\n\u003c/p\u003e\u003cp\u003eFor most array types, this operation is O(\u003cem\u003en\u003c/em\u003e) where \u003cem\u003en\u003c/em\u003e is the size\nof the array.  However, the diffarray package provides an array type\nfor which this operation has complexity linear in the number of updates.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "(//)",
          "package": "array",
          "signature": "a i e -\u003e [(i, e)] -\u003e a i e",
          "source": "src/Data-Array-Base.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Takes an array and list of pairs and returns an array identical to the left argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed As with the array function if any two associations in the list have the same index the value at that index is implementation-dependent In GHC the last value specified for that index is used Other implementations will also do this for unboxed arrays but Haskell requires that for Array the value at such indices is bottom For most array types this operation is where is the size of the array However the diffarray package provides an array type for which this operation has complexity linear in the number of updates",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "(//) //",
          "normalized": "a b c-\u003e[(b,c)]-\u003ea b c",
          "package": "array",
          "signature": "a i e-\u003e[(i,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaccum f\u003c/code\u003e takes an array and an association list and accumulates pairs\nfrom the list into the array with the accumulating function \u003ccode\u003ef\u003c/code\u003e. Thus\n\u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e can be defined using \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \\\u003c- range b])\n\u003c/pre\u003e",
          "module": "Data.Array.IArray",
          "name": "accum",
          "package": "array",
          "signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(i, e')] -\u003e a i e",
          "source": "src/Data-Array-Base.html#accum",
          "type": "function"
        },
        "index": {
          "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "accum",
          "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(d,b)]-\u003ec d a",
          "package": "array",
          "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(i,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an immutable array from a list of associations.  Unlike\n\u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e, the same index is allowed to occur multiple times in the list\nof associations; an \u003cem\u003eaccumulating function\u003c/em\u003e is used to combine the\nvalues of elements with the same index.\n\u003c/p\u003e\u003cp\u003eFor example, given a list of values of some index type, hist produces\na histogram of the number of occurrences of each index within a\nspecified range:\n\u003c/p\u003e\u003cpre\u003e hist :: (Ix a, Num b) =\u003e (a,a) -\u003e [a] -\u003e Array a b\n hist bnds is = accumArray (+) 0 bnds [(i, 1) | i\\\u003c-is, inRange bnds i]\n\u003c/pre\u003e",
          "module": "Data.Array.IArray",
          "name": "accumArray",
          "package": "array",
          "signature": "(e -\u003e e' -\u003e e)-\u003e e-\u003e (i, i)-\u003e [(i, e')]-\u003e a i e",
          "type": "function"
        },
        "index": {
          "description": "Constructs an immutable array from list of associations Unlike array the same index is allowed to occur multiple times in the list of associations an accumulating function is used to combine the values of elements with the same index For example given list of values of some index type hist produces histogram of the number of occurrences of each index within specified range hist Ix Num Array hist bnds is accumArray bnds is inRange bnds",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "accumArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003ed c a",
          "package": "array",
          "partial": "Array",
          "signature": "(e-\u003ee'-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(i,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new array derived from the original array by applying a\n function to each of the elements.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "amap",
          "package": "array",
          "signature": "(e' -\u003e e) -\u003e a i e' -\u003e a i e",
          "source": "src/Data-Array-Base.html#amap",
          "type": "function"
        },
        "index": {
          "description": "Returns new array derived from the original array by applying function to each of the elements",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "amap",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "array",
          "signature": "(e'-\u003ee)-\u003ea i e'-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:amap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an immutable array from a pair of bounds and a list of\ninitial associations.\n\u003c/p\u003e\u003cp\u003eThe bounds are specified as a pair of the lowest and highest bounds in\nthe array respectively.  For example, a one-origin vector of length 10\nhas bounds (1,10), and a one-origin 10 by 10 matrix has bounds\n((1,1),(10,10)).\n\u003c/p\u003e\u003cp\u003eAn association is a pair of the form \u003ccode\u003e(i,x)\u003c/code\u003e, which defines the value of\nthe array at index \u003ccode\u003ei\u003c/code\u003e to be \u003ccode\u003ex\u003c/code\u003e.  The array is undefined if any index\nin the list is out of bounds.  If any two associations in the list have\nthe same index, the value at that index is implementation-dependent.\n(In GHC, the last value specified for that index is used.\nOther implementations will also do this for unboxed arrays, but Haskell\n98 requires that for \u003ccode\u003eArray\u003c/code\u003e the value at such indices is bottom.)\n\u003c/p\u003e\u003cp\u003eBecause the indices must be checked for these errors, \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e is\nstrict in the bounds argument and in the indices of the association\nlist.  Whether \u003ccode\u003earray\u003c/code\u003e is strict or non-strict in the elements depends\non the array type: \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e is a non-strict array type, but\nall of the \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e arrays are strict.  Thus in a\nnon-strict array, recurrences such as the following are possible:\n\u003c/p\u003e\u003cpre\u003e a = array (1,100) ((1,1) : [(i, i * a!(i-1)) | i \\\u003c- [2..100]])\n\u003c/pre\u003e\u003cp\u003eNot every index within the bounds of the array need appear in the\nassociation list, but the values associated with indices that do not\nappear will be undefined.\n\u003c/p\u003e\u003cp\u003eIf, in any dimension, the lower bound is greater than the upper bound,\nthen the array is legal, but empty. Indexing an empty array always\ngives an array-bounds error, but \u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e still yields the bounds with\nwhich the array was constructed.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "array",
          "package": "array",
          "signature": "(i, i)-\u003e [(i, e)]-\u003e a i e",
          "type": "function"
        },
        "index": {
          "description": "Constructs an immutable array from pair of bounds and list of initial associations The bounds are specified as pair of the lowest and highest bounds in the array respectively For example one-origin vector of length has bounds and one-origin by matrix has bounds An association is pair of the form which defines the value of the array at index to be The array is undefined if any index in the list is out of bounds If any two associations in the list have the same index the value at that index is implementation-dependent In GHC the last value specified for that index is used Other implementations will also do this for unboxed arrays but Haskell requires that for Array the value at such indices is bottom Because the indices must be checked for these errors array is strict in the bounds argument and in the indices of the association list Whether array is strict or non-strict in the elements depends on the array type Array is non-strict array type but all of the UArray arrays are strict Thus in non-strict array recurrences such as the following are possible array i-1 Not every index within the bounds of the array need appear in the association list but the values associated with indices that do not appear will be undefined If in any dimension the lower bound is greater than the upper bound then the array is legal but empty Indexing an empty array always gives an array-bounds error but bounds still yields the bounds with which the array was constructed",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,b)]-\u003ec a b",
          "package": "array",
          "signature": "(i,i)-\u003e[(i,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the contents of an array as a list of associations.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "assocs",
          "package": "array",
          "signature": "a i e -\u003e [(i, e)]",
          "source": "src/Data-Array-Base.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Returns the contents of an array as list of associations",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "assocs",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "array",
          "signature": "a i e-\u003e[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the bounds of an immutable array\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "bounds",
          "package": "array",
          "signature": "a i e -\u003e (i, i)",
          "source": "src/Data-Array-Base.html#bounds",
          "type": "method"
        },
        "index": {
          "description": "Extracts the bounds of an immutable array",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "bounds",
          "normalized": "a b c-\u003e(b,b)",
          "package": "array",
          "signature": "a i e-\u003e(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all the elements of an array, in the same order\n as their indices.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "elems",
          "package": "array",
          "signature": "a i e -\u003e [e]",
          "source": "src/Data-Array-Base.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all the elements of an array in the same order as their indices",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "elems",
          "normalized": "a b c-\u003e[c]",
          "package": "array",
          "signature": "a i e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all the valid indices in an array.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "indices",
          "package": "array",
          "signature": "a i e -\u003e [i]",
          "source": "src/Data-Array-Base.html#indices",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all the valid indices in an array",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "indices",
          "normalized": "a b c-\u003e[b]",
          "package": "array",
          "signature": "a i e-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a new array derived from the original array by applying a\n function to each of the indices.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "ixmap",
          "package": "array",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e a i e",
          "source": "src/Data-Array-Base.html#ixmap",
          "type": "function"
        },
        "index": {
          "description": "Returns new array derived from the original array by applying function to each of the indices",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "array",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an immutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n\u003c/p\u003e",
          "module": "Data.Array.IArray",
          "name": "listArray",
          "package": "array",
          "signature": "(i, i) -\u003e [e] -\u003e a i e",
          "source": "src/Data-Array-Base.html#listArray",
          "type": "function"
        },
        "index": {
          "description": "Constructs an immutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
          "hierarchy": "Data Array IArray",
          "module": "Data.Array.IArray",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[b]-\u003ec a b",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003e[e]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IArray.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable boxed and unboxed arrays in the IO monad.\n .\n Safe API only of \u003ca\u003eData.Array.IO\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.4.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.IO.Safe",
          "name": "Safe",
          "package": "array",
          "source": "src/Data-Array-IO-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable boxed and unboxed arrays in the IO monad Safe API only of Data.Array.IO Since",
          "hierarchy": "Data Array IO Safe",
          "module": "Data.Array.IO.Safe",
          "name": "Safe",
          "package": "array",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e is a mutable, boxed, non-strict array in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.IO.Safe",
          "name": "IOArray",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "An IOArray is mutable boxed non-strict array in the IO monad The type arguments are as follows the index type of the array should be an instance of Ix the element type of the array",
          "hierarchy": "Data Array IO Safe",
          "module": "Data.Array.IO.Safe",
          "name": "IOArray",
          "package": "array",
          "partial": "IOArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#t:IOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable, unboxed, strict arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type\n arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.  Only certain element types\n    are supported: see \u003ca\u003eData.Array.MArray\u003c/a\u003e for a list of instances.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.IO.Safe",
          "name": "IOUArray",
          "package": "array",
          "source": "src/Data-Array-IO-Internals.html#IOUArray",
          "type": "data"
        },
        "index": {
          "description": "Mutable unboxed strict arrays in the IO monad The type arguments are as follows the index type of the array should be an instance of Ix the element type of the array Only certain element types are supported see Data.Array.MArray for list of instances",
          "hierarchy": "Data Array IO Safe",
          "module": "Data.Array.IO.Safe",
          "name": "IOUArray",
          "package": "array",
          "partial": "IOUArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#t:IOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a number of \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003es from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e directly\n into an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.IO.Safe\",\"Data.Array.IO\"]",
          "name": "hGetArray",
          "package": "array",
          "signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#v:hGetArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-IO.html#v:hGetArray\"]"
        },
        "index": {
          "description": "Reads number of Word8 from the specified Handle directly into an array",
          "hierarchy": "Data Array IO Safe",
          "module": "Data.Array.IO.Safe",
          "name": "hGetArray",
          "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int",
          "package": "array",
          "partial": "Get Array",
          "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#v:hGetArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites an array of \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.IO.Safe\",\"Data.Array.IO\"]",
          "name": "hPutArray",
          "package": "array",
          "signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#v:hPutArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-IO.html#v:hPutArray\"]"
        },
        "index": {
          "description": "Writes an array of Word8 to the specified Handle",
          "hierarchy": "Data Array IO Safe",
          "module": "Data.Array.IO.Safe",
          "name": "hPutArray",
          "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()",
          "package": "array",
          "partial": "Put Array",
          "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO-Safe.html#v:hPutArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable boxed and unboxed arrays in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.IO",
          "name": "IO",
          "package": "array",
          "source": "src/Data-Array-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable boxed and unboxed arrays in the IO monad",
          "hierarchy": "Data Array IO",
          "module": "Data.Array.IO",
          "name": "IO",
          "package": "array",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e is a mutable, boxed, non-strict array in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.IO",
          "name": "IOArray",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "An IOArray is mutable boxed non-strict array in the IO monad The type arguments are as follows the index type of the array should be an instance of Ix the element type of the array",
          "hierarchy": "Data Array IO",
          "module": "Data.Array.IO",
          "name": "IOArray",
          "package": "array",
          "partial": "IOArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO.html#t:IOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable, unboxed, strict arrays in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type\n arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.  Only certain element types\n    are supported: see \u003ca\u003eData.Array.MArray\u003c/a\u003e for a list of instances.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.IO",
          "name": "IOUArray",
          "package": "array",
          "source": "src/Data-Array-IO-Internals.html#IOUArray",
          "type": "data"
        },
        "index": {
          "description": "Mutable unboxed strict arrays in the IO monad The type arguments are as follows the index type of the array should be an instance of Ix the element type of the array Only certain element types are supported see Data.Array.MArray for list of instances",
          "hierarchy": "Data Array IO",
          "module": "Data.Array.IO",
          "name": "IOUArray",
          "package": "array",
          "partial": "IOUArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-IO.html#t:IOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable arrays.  For array types which can be\n used with this interface, see \u003ca\u003eData.Array.IO\u003c/a\u003e, \u003ca\u003eData.Array.ST\u003c/a\u003e,\n and \u003ca\u003eData.Array.Storable\u003c/a\u003e.\n .\n Safe API only of \u003ca\u003eData.Array.MArray\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.4.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.MArray.Safe",
          "name": "Safe",
          "package": "array",
          "source": "src/Data-Array-MArray-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable arrays For array types which can be used with this interface see Data.Array.IO Data.Array.ST and Data.Array.Storable Safe API only of Data.Array.MArray Since",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "Safe",
          "package": "array",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of mutable array types.\n\u003c/p\u003e\u003cp\u003eAn array type has the form \u003ccode\u003e(a i e)\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the array type\nconstructor (kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e), \u003ccode\u003ei\u003c/code\u003e is the index type (a member of\nthe class \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e), and \u003ccode\u003ee\u003c/code\u003e is the element type.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMArray\u003c/code\u003e class is parameterised over both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e (so that\ninstances specialised to certain element types can be defined, in the\nsame way as for \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e), and also over the type of the monad, \u003ccode\u003em\u003c/code\u003e,\nin which the mutable array will be manipulated.\n\u003c/p\u003e",
          "module": "Data.Array.MArray.Safe",
          "name": "MArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#MArray",
          "type": "class"
        },
        "index": {
          "description": "Class of mutable array types An array type has the form where is the array type constructor kind is the index type member of the class Ix and is the element type The MArray class is parameterised over both and so that instances specialised to certain element types can be defined in the same way as for IArray and also over the type of the monad in which the mutable array will be manipulated",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "MArray",
          "package": "array",
          "partial": "MArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#t:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a mutable array (any instance of \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e) to an\n immutable array (any instance of \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e) by taking a complete\n copy of it.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "freeze",
          "package": "array",
          "signature": "a i e -\u003e m (b i e)",
          "source": "src/Data-Array-Base.html#freeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:freeze\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:freeze\"]"
        },
        "index": {
          "description": "Converts mutable array any instance of MArray to an immutable array any instance of IArray by taking complete copy of it",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "freeze",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "array",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all the associations of a mutable array, in\n index order.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "getAssocs",
          "package": "array",
          "signature": "a i e -\u003e m [(i, e)]",
          "source": "src/Data-Array-Base.html#getAssocs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:getAssocs\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:getAssocs\"]"
        },
        "index": {
          "description": "Return list of all the associations of mutable array in index order",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "getAssocs",
          "normalized": "a b c-\u003ed[(b,c)]",
          "package": "array",
          "partial": "Assocs",
          "signature": "a i e-\u003em[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:getAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bounds of the array\n\u003c/p\u003e",
          "module": "Data.Array.MArray.Safe",
          "name": "getBounds",
          "package": "array",
          "signature": "a i e -\u003e m (i, i)",
          "source": "src/Data-Array-Base.html#getBounds",
          "type": "method"
        },
        "index": {
          "description": "Returns the bounds of the array",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "getBounds",
          "normalized": "a b c-\u003ed(b,b)",
          "package": "array",
          "partial": "Bounds",
          "signature": "a i e-\u003em(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:getBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all the elements of a mutable array\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "getElems",
          "package": "array",
          "signature": "a i e -\u003e m [e]",
          "source": "src/Data-Array-Base.html#getElems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:getElems\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:getElems\"]"
        },
        "index": {
          "description": "Return list of all the elements of mutable array",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "getElems",
          "normalized": "a b c-\u003ed[c]",
          "package": "array",
          "partial": "Elems",
          "signature": "a i e-\u003em[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new array derived from the original array by applying a\n function to each of the elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "mapArray",
          "package": "array",
          "signature": "(e' -\u003e e) -\u003e a i e' -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#mapArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:mapArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:mapArray\"]"
        },
        "index": {
          "description": "Constructs new array derived from the original array by applying function to each of the elements",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "mapArray",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ee(c d b)",
          "package": "array",
          "partial": "Array",
          "signature": "(e'-\u003ee)-\u003ea i e'-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new array derived from the original array by applying a\n function to each of the indices.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "mapIndices",
          "package": "array",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#mapIndices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:mapIndices\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:mapIndices\"]"
        },
        "index": {
          "description": "Constructs new array derived from the original array by applying function to each of the indices",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "mapIndices",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ee(c a d)",
          "package": "array",
          "partial": "Indices",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:mapIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a new array, with every element initialised to the supplied\n value.\n\u003c/p\u003e",
          "module": "Data.Array.MArray.Safe",
          "name": "newArray",
          "package": "array",
          "signature": "(i, i) -\u003e e -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#newArray",
          "type": "method"
        },
        "index": {
          "description": "Builds new array with every element initialised to the supplied value",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "newArray",
          "normalized": "(a,a)-\u003eb-\u003ec(d a b)",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003ee-\u003em(a i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a new array, with every element initialised to an\n undefined value. In a monadic context in which operations must\n be deterministic (e.g. the ST monad), the array elements are\n initialised to a fixed but undefined value, such as zero.\n\u003c/p\u003e",
          "module": "Data.Array.MArray.Safe",
          "name": "newArray_",
          "package": "array",
          "signature": "(i, i) -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#newArray_",
          "type": "method"
        },
        "index": {
          "description": "Builds new array with every element initialised to an undefined value In monadic context in which operations must be deterministic e.g the ST monad the array elements are initialised to fixed but undefined value such as zero",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "newArray_",
          "normalized": "(a,a)-\u003eb(c a d)",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003em(a i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a mutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "newListArray",
          "package": "array",
          "signature": "(i, i) -\u003e [e] -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#newListArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:newListArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:newListArray\"]"
        },
        "index": {
          "description": "Constructs mutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "newListArray",
          "normalized": "(a,a)-\u003e[b]-\u003ec(d a b)",
          "package": "array",
          "partial": "List Array",
          "signature": "(i,i)-\u003e[e]-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:newListArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an element from a mutable array\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "readArray",
          "package": "array",
          "signature": "a i e -\u003e i -\u003e m e",
          "source": "src/Data-Array-Base.html#readArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:readArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:readArray\"]"
        },
        "index": {
          "description": "Read an element from mutable array",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "readArray",
          "normalized": "a b c-\u003eb-\u003ed c",
          "package": "array",
          "partial": "Array",
          "signature": "a i e-\u003ei-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an immutable array (any instance of \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e) into a\n mutable array (any instance of \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e) by taking a complete copy\n of it.\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "thaw",
          "package": "array",
          "signature": "a i e -\u003e m (b i e)",
          "source": "src/Data-Array-Base.html#thaw",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:thaw\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:thaw\"]"
        },
        "index": {
          "description": "Converts an immutable array any instance of IArray into mutable array any instance of MArray by taking complete copy of it",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "thaw",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "array",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element in a mutable array\n\u003c/p\u003e",
          "module": "[\"Data.Array.MArray.Safe\",\"Data.Array.MArray\"]",
          "name": "writeArray",
          "package": "array",
          "signature": "a i e -\u003e i -\u003e e -\u003e m ()",
          "source": "src/Data-Array-Base.html#writeArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:writeArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:writeArray\"]"
        },
        "index": {
          "description": "Write an element in mutable array",
          "hierarchy": "Data Array MArray Safe",
          "module": "Data.Array.MArray.Safe",
          "name": "writeArray",
          "normalized": "a b c-\u003eb-\u003ec-\u003ed()",
          "package": "array",
          "partial": "Array",
          "signature": "a i e-\u003ei-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray-Safe.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable arrays.  For array types which can be\n used with this interface, see \u003ca\u003eData.Array.IO\u003c/a\u003e, \u003ca\u003eData.Array.ST\u003c/a\u003e,\n and \u003ca\u003eData.Array.Storable\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.MArray",
          "name": "MArray",
          "package": "array",
          "source": "src/Data-Array-MArray.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable arrays For array types which can be used with this interface see Data.Array.IO Data.Array.ST and Data.Array.Storable",
          "hierarchy": "Data Array MArray",
          "module": "Data.Array.MArray",
          "name": "MArray",
          "package": "array",
          "partial": "MArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of mutable array types.\n\u003c/p\u003e\u003cp\u003eAn array type has the form \u003ccode\u003e(a i e)\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the array type\nconstructor (kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e), \u003ccode\u003ei\u003c/code\u003e is the index type (a member of\nthe class \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e), and \u003ccode\u003ee\u003c/code\u003e is the element type.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMArray\u003c/code\u003e class is parameterised over both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e (so that\ninstances specialised to certain element types can be defined, in the\nsame way as for \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e), and also over the type of the monad, \u003ccode\u003em\u003c/code\u003e,\nin which the mutable array will be manipulated.\n\u003c/p\u003e",
          "module": "Data.Array.MArray",
          "name": "MArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#MArray",
          "type": "class"
        },
        "index": {
          "description": "Class of mutable array types An array type has the form where is the array type constructor kind is the index type member of the class Ix and is the element type The MArray class is parameterised over both and so that instances specialised to certain element types can be defined in the same way as for IArray and also over the type of the monad in which the mutable array will be manipulated",
          "hierarchy": "Data Array MArray",
          "module": "Data.Array.MArray",
          "name": "MArray",
          "package": "array",
          "partial": "MArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#t:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bounds of the array\n\u003c/p\u003e",
          "module": "Data.Array.MArray",
          "name": "getBounds",
          "package": "array",
          "signature": "a i e -\u003e m (i, i)",
          "source": "src/Data-Array-Base.html#getBounds",
          "type": "method"
        },
        "index": {
          "description": "Returns the bounds of the array",
          "hierarchy": "Data Array MArray",
          "module": "Data.Array.MArray",
          "name": "getBounds",
          "normalized": "a b c-\u003ed(b,b)",
          "package": "array",
          "partial": "Bounds",
          "signature": "a i e-\u003em(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:getBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a new array, with every element initialised to the supplied\n value.\n\u003c/p\u003e",
          "module": "Data.Array.MArray",
          "name": "newArray",
          "package": "array",
          "signature": "(i, i) -\u003e e -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#newArray",
          "type": "method"
        },
        "index": {
          "description": "Builds new array with every element initialised to the supplied value",
          "hierarchy": "Data Array MArray",
          "module": "Data.Array.MArray",
          "name": "newArray",
          "normalized": "(a,a)-\u003eb-\u003ec(d a b)",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003ee-\u003em(a i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a new array, with every element initialised to an\n undefined value. In a monadic context in which operations must\n be deterministic (e.g. the ST monad), the array elements are\n initialised to a fixed but undefined value, such as zero.\n\u003c/p\u003e",
          "module": "Data.Array.MArray",
          "name": "newArray_",
          "package": "array",
          "signature": "(i, i) -\u003e m (a i e)",
          "source": "src/Data-Array-Base.html#newArray_",
          "type": "method"
        },
        "index": {
          "description": "Builds new array with every element initialised to an undefined value In monadic context in which operations must be deterministic e.g the ST monad the array elements are initialised to fixed but undefined value such as zero",
          "hierarchy": "Data Array MArray",
          "module": "Data.Array.MArray",
          "name": "newArray_",
          "normalized": "(a,a)-\u003eb(c a d)",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003em(a i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-MArray.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable boxed and unboxed arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eSafe API only of \u003ca\u003eData.Array.ST\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.4.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.ST.Safe",
          "name": "Safe",
          "package": "array",
          "source": "src/Data-Array-ST-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable boxed and unboxed arrays in the ST monad Safe API only of Data.Array.ST Since",
          "hierarchy": "Data Array ST Safe",
          "module": "Data.Array.ST.Safe",
          "name": "Safe",
          "package": "array",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable, boxed, non-strict arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type\n arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.ST.Safe",
          "name": "STArray",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "Mutable boxed non-strict arrays in the ST monad The type arguments are as follows the state variable argument for the ST type the index type of the array should be an instance of Ix the element type of the array",
          "hierarchy": "Data Array ST Safe",
          "module": "Data.Array.ST.Safe",
          "name": "STArray",
          "package": "array",
          "partial": "STArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable array with unboxed elements, that can be manipulated in\n the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003eIx\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.  Only certain element types\n    are supported.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e will generally be more efficient (in terms of both time\n and space) than the equivalent boxed version (\u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e) with the same\n element type.  However, \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e is strict in its elements - so\n don't use \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e if you require the non-strictness that\n \u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e provides.\n\u003c/p\u003e",
          "module": "Data.Array.ST.Safe",
          "name": "STUArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#STUArray",
          "type": "data"
        },
        "index": {
          "description": "mutable array with unboxed elements that can be manipulated in the ST monad The type arguments are as follows the state variable argument for the ST type the index type of the array should be an instance of Ix the element type of the array Only certain element types are supported An STUArray will generally be more efficient in terms of both time and space than the equivalent boxed version STArray with the same element type However STUArray is strict in its elements so don use STUArray if you require the non-strictness that STArray provides",
          "hierarchy": "Data Array ST Safe",
          "module": "Data.Array.ST.Safe",
          "name": "STUArray",
          "package": "array",
          "partial": "STUArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#t:STUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable array before returning an\n immutable array for later perusal.  This function avoids copying\n the array before returning it - it uses \u003ccode\u003eunsafeFreeze\u003c/code\u003e internally, but\n this wrapper is a safe interface to that function.\n\u003c/p\u003e",
          "module": "[\"Data.Array.ST.Safe\",\"Data.Array.ST\"]",
          "name": "runSTArray",
          "package": "array",
          "signature": "(forall s.  ST s (STArray s i e)) -\u003e Array i e",
          "source": "src/Data-Array-ST.html#runSTArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#v:runSTArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-ST.html#v:runSTArray\"]"
        },
        "index": {
          "description": "safe way to create and work with mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Array ST Safe",
          "module": "Data.Array.ST.Safe",
          "name": "runSTArray",
          "normalized": "(a b ST c(STArray c d e))-\u003eArray d e",
          "package": "array",
          "partial": "STArray",
          "signature": "(forall s. ST s(STArray s i e))-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#v:runSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with an unboxed mutable array before\n returning an immutable array for later perusal.  This function\n avoids copying the array before returning it - it uses\n \u003ccode\u003eunsafeFreeze\u003c/code\u003e internally, but this wrapper is a safe interface to\n that function.\n\u003c/p\u003e",
          "module": "[\"Data.Array.ST.Safe\",\"Data.Array.ST\"]",
          "name": "runSTUArray",
          "package": "array",
          "signature": "(forall s.  ST s (STUArray s i e)) -\u003e UArray i e",
          "source": "src/Data-Array-ST.html#runSTUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#v:runSTUArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-ST.html#v:runSTUArray\"]"
        },
        "index": {
          "description": "safe way to create and work with an unboxed mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Array ST Safe",
          "module": "Data.Array.ST.Safe",
          "name": "runSTUArray",
          "normalized": "(a b ST c(STUArray c d e))-\u003eUArray d e",
          "package": "array",
          "partial": "STUArray",
          "signature": "(forall s. ST s(STUArray s i e))-\u003eUArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST-Safe.html#v:runSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable boxed and unboxed arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.ST",
          "name": "ST",
          "package": "array",
          "source": "src/Data-Array-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable boxed and unboxed arrays in the ST monad",
          "hierarchy": "Data Array ST",
          "module": "Data.Array.ST",
          "name": "ST",
          "package": "array",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable, boxed, non-strict arrays in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type\n arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.ST",
          "name": "STArray",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "Mutable boxed non-strict arrays in the ST monad The type arguments are as follows the state variable argument for the ST type the index type of the array should be an instance of Ix the element type of the array",
          "hierarchy": "Data Array ST",
          "module": "Data.Array.ST",
          "name": "STArray",
          "package": "array",
          "partial": "STArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable array with unboxed elements, that can be manipulated in\n the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ei\u003c/code\u003e: the index type of the array (should be an instance of \u003ccode\u003eIx\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the array.  Only certain element types\n    are supported.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e will generally be more efficient (in terms of both time\n and space) than the equivalent boxed version (\u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e) with the same\n element type.  However, \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e is strict in its elements - so\n don't use \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e if you require the non-strictness that\n \u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e provides.\n\u003c/p\u003e",
          "module": "Data.Array.ST",
          "name": "STUArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#STUArray",
          "type": "data"
        },
        "index": {
          "description": "mutable array with unboxed elements that can be manipulated in the ST monad The type arguments are as follows the state variable argument for the ST type the index type of the array should be an instance of Ix the element type of the array Only certain element types are supported An STUArray will generally be more efficient in terms of both time and space than the equivalent boxed version STArray with the same element type However STUArray is strict in its elements so don use STUArray if you require the non-strictness that STArray provides",
          "hierarchy": "Data Array ST",
          "module": "Data.Array.ST",
          "name": "STUArray",
          "package": "array",
          "partial": "STUArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-ST.html#t:STUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA storable array is an IO-mutable array which stores its\n contents in a contiguous memory block living in the C\n heap. Elements are stored according to the class \u003ccode\u003eStorable\u003c/code\u003e.\n You can obtain the pointer to the array contents to manipulate\n elements from languages like C.\n\u003c/p\u003e\u003cp\u003eIt is similar to \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e but slower.\n Its advantage is that it's compatible with C.\n\u003c/p\u003e\u003cp\u003eSafe API only of \u003ca\u003eData.Array.Storable\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.4.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Storable.Safe",
          "name": "Safe",
          "package": "array",
          "source": "src/Data-Array-Storable-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "storable array is an IO-mutable array which stores its contents in contiguous memory block living in the heap Elements are stored according to the class Storable You can obtain the pointer to the array contents to manipulate elements from languages like It is similar to IOUArray but slower Its advantage is that it compatible with Safe API only of Data.Array.Storable Since",
          "hierarchy": "Data Array Storable Safe",
          "module": "Data.Array.Storable.Safe",
          "name": "Safe",
          "package": "array",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe array type\n\u003c/p\u003e",
          "module": "Data.Array.Storable.Safe",
          "name": "StorableArray",
          "package": "array",
          "source": "src/Data-Array-Storable-Internals.html#StorableArray",
          "type": "data"
        },
        "index": {
          "description": "The array type",
          "hierarchy": "Data Array Storable Safe",
          "module": "Data.Array.Storable.Safe",
          "name": "StorableArray",
          "package": "array",
          "partial": "Storable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#t:StorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to use it afterwards, ensure that you\n \u003ccode\u003e\u003ca\u003etouchStorableArray\u003c/a\u003e\u003c/code\u003e after the last use of the pointer,\n so the array is not freed too early.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Storable.Safe\",\"Data.Array.Storable\"]",
          "name": "touchStorableArray",
          "package": "array",
          "signature": "StorableArray i e -\u003e IO ()",
          "source": "src/Data-Array-Storable-Internals.html#touchStorableArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#v:touchStorableArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-Storable.html#v:touchStorableArray\"]"
        },
        "index": {
          "description": "If you want to use it afterwards ensure that you touchStorableArray after the last use of the pointer so the array is not freed too early",
          "hierarchy": "Data Array Storable Safe",
          "module": "Data.Array.Storable.Safe",
          "name": "touchStorableArray",
          "normalized": "StorableArray a b-\u003eIO()",
          "package": "array",
          "partial": "Storable Array",
          "signature": "StorableArray i e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#v:touchStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer to the array contents is obtained by \u003ccode\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/code\u003e.\n The idea is similar to \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e (used internally here).\n The pointer should be used only during execution of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n retured by the function passed as argument to \u003ccode\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Storable.Safe\",\"Data.Array.Storable\"]",
          "name": "withStorableArray",
          "package": "array",
          "signature": "StorableArray i e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Array-Storable-Internals.html#withStorableArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#v:withStorableArray\",\"http://hackage.haskell.org/package/array/docs/Data-Array-Storable.html#v:withStorableArray\"]"
        },
        "index": {
          "description": "The pointer to the array contents is obtained by withStorableArray The idea is similar to ForeignPtr used internally here The pointer should be used only during execution of the IO action retured by the function passed as argument to withStorableArray",
          "hierarchy": "Data Array Storable Safe",
          "module": "Data.Array.Storable.Safe",
          "name": "withStorableArray",
          "normalized": "StorableArray a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "array",
          "partial": "Storable Array",
          "signature": "StorableArray i e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable-Safe.html#v:withStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA storable array is an IO-mutable array which stores its\n contents in a contiguous memory block living in the C\n heap. Elements are stored according to the class \u003ccode\u003eStorable\u003c/code\u003e.\n You can obtain the pointer to the array contents to manipulate\n elements from languages like C.\n\u003c/p\u003e\u003cp\u003eIt is similar to \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e but slower.\n Its advantage is that it's compatible with C.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Storable",
          "name": "Storable",
          "package": "array",
          "source": "src/Data-Array-Storable.html",
          "type": "module"
        },
        "index": {
          "description": "storable array is an IO-mutable array which stores its contents in contiguous memory block living in the heap Elements are stored according to the class Storable You can obtain the pointer to the array contents to manipulate elements from languages like It is similar to IOUArray but slower Its advantage is that it compatible with",
          "hierarchy": "Data Array Storable",
          "module": "Data.Array.Storable",
          "name": "Storable",
          "package": "array",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe array type\n\u003c/p\u003e",
          "module": "Data.Array.Storable",
          "name": "StorableArray",
          "package": "array",
          "source": "src/Data-Array-Storable-Internals.html#StorableArray",
          "type": "data"
        },
        "index": {
          "description": "The array type",
          "hierarchy": "Data Array Storable",
          "module": "Data.Array.Storable",
          "name": "StorableArray",
          "package": "array",
          "partial": "Storable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Storable.html#t:StorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnboxed immutable arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Unboxed",
          "name": "Unboxed",
          "package": "array",
          "source": "src/Data-Array-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "Unboxed immutable arrays",
          "hierarchy": "Data Array Unboxed",
          "module": "Data.Array.Unboxed",
          "name": "Unboxed",
          "package": "array",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays with unboxed elements.  Instances of \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e are provided\n for \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e with certain element types (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e,\n etc.; see the \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e class for a full list).\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e will generally be more efficient (in terms of both time\n and space) than the equivalent \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e with the same\n element type.  However, \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e is strict in its elements - so\n don't use \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e if you require the non-strictness that\n \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e provides.\n\u003c/p\u003e\u003cp\u003eBecause the \u003ccode\u003eIArray\u003c/code\u003e interface provides operations overloaded on\n the type of the array, it should be possible to just change the\n array type being used by a program from say \u003ccode\u003eArray\u003c/code\u003e to \u003ccode\u003eUArray\u003c/code\u003e to\n get the benefits of unboxed arrays (don't forget to import\n \u003ca\u003eData.Array.Unboxed\u003c/a\u003e instead of \u003ca\u003eData.Array\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.Array.Unboxed",
          "name": "UArray",
          "package": "array",
          "source": "src/Data-Array-Base.html#UArray",
          "type": "data"
        },
        "index": {
          "description": "Arrays with unboxed elements Instances of IArray are provided for UArray with certain element types Int Float Char etc see the UArray class for full list UArray will generally be more efficient in terms of both time and space than the equivalent Array with the same element type However UArray is strict in its elements so don use UArray if you require the non-strictness that Array provides Because the IArray interface provides operations overloaded on the type of the array it should be possible to just change the array type being used by program from say Array to UArray to get the benefits of unboxed arrays don forget to import Data.Array.Unboxed instead of Data.Array",
          "hierarchy": "Data Array Unboxed",
          "module": "Data.Array.Unboxed",
          "name": "UArray",
          "package": "array",
          "partial": "UArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unboxed.html#t:UArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains the various unsafe operations that can be performed\n on arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.4.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Unsafe",
          "name": "Unsafe",
          "package": "array",
          "source": "src/Data-Array-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Contains the various unsafe operations that can be performed on arrays Since",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "Unsafe",
          "package": "array",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts an \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e with one element type into one with a\n different element type.  All the elements of the resulting array\n are undefined (unless you know what you're doing...).\n\u003c/p\u003e",
          "module": "Data.Array.Unsafe",
          "name": "castIOUArray",
          "package": "array",
          "signature": "IOUArray ix a -\u003e IO (IOUArray ix b)",
          "source": "src/Data-Array-IO-Internals.html#castIOUArray",
          "type": "function"
        },
        "index": {
          "description": "Casts an IOUArray with one element type into one with different element type All the elements of the resulting array are undefined unless you know what you re doing",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "castIOUArray",
          "normalized": "IOUArray a b-\u003eIO(IOUArray a c)",
          "package": "array",
          "partial": "IOUArray",
          "signature": "IOUArray ix a-\u003eIO(IOUArray ix b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#v:castIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts an \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e with one element type into one with a\n different element type.  All the elements of the resulting array\n are undefined (unless you know what you're doing...).\n\u003c/p\u003e",
          "module": "Data.Array.Unsafe",
          "name": "castSTUArray",
          "package": "array",
          "signature": "STUArray s ix a -\u003e ST s (STUArray s ix b)",
          "source": "src/Data-Array-Base.html#castSTUArray",
          "type": "function"
        },
        "index": {
          "description": "Casts an STUArray with one element type into one with different element type All the elements of the resulting array are undefined unless you know what you re doing",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "castSTUArray",
          "normalized": "STUArray a b c-\u003eST a(STUArray a b d)",
          "package": "array",
          "partial": "STUArray",
          "signature": "STUArray s ix a-\u003eST s(STUArray s ix b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#v:castSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e from an arbitrary \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e.  It is\n the caller's responsibility to ensure that the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e points to\n an area of memory sufficient for the specified bounds.\n\u003c/p\u003e",
          "module": "Data.Array.Unsafe",
          "name": "unsafeForeignPtrToStorableArray",
          "package": "array",
          "signature": "ForeignPtr e -\u003e (i, i) -\u003e IO (StorableArray i e)",
          "source": "src/Data-Array-Storable-Internals.html#unsafeForeignPtrToStorableArray",
          "type": "function"
        },
        "index": {
          "description": "Construct StorableArray from an arbitrary ForeignPtr It is the caller responsibility to ensure that the ForeignPtr points to an area of memory sufficient for the specified bounds",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "unsafeForeignPtrToStorableArray",
          "normalized": "ForeignPtr a-\u003e(b,b)-\u003eIO(StorableArray b a)",
          "package": "array",
          "partial": "Foreign Ptr To Storable Array",
          "signature": "ForeignPtr e-\u003e(i,i)-\u003eIO(StorableArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#v:unsafeForeignPtrToStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an mutable array into an immutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is safe to use, therefore, if\n   the mutable version is never modified after the freeze operation.\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Unsafe",
          "name": "unsafeFreeze",
          "package": "array",
          "signature": "a i e -\u003e m (b i e)",
          "source": "src/Data-Array-Base.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "description": "Converts an mutable array into an immutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is safe to use therefore if the mutable version is never modified after the freeze operation The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeFreeze Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them IOUArray UArray STUArray UArray IOArray Array STArray Array",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "unsafeFreeze",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "array",
          "partial": "Freeze",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an immutable array into a mutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is only safe to use,\n   therefore, if the immutable array is never referenced again in this\n   thread, and there is no possibility that it can be also referenced\n   in another thread.  If you use an unsafeThaw\u003cem\u003ewrite\u003c/em\u003eunsafeFreeze\n   sequence in a multi-threaded setting, then you must ensure that\n   this sequence is atomic with respect to other threads, or a garbage\n   collector crash may result (because the write may be writing to a\n   frozen array).\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ccode\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/code\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e  -\u003e \u003ccode\u003e\u003ca\u003eIOArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e  -\u003e \u003ccode\u003e\u003ca\u003eSTArray\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Unsafe",
          "name": "unsafeThaw",
          "package": "array",
          "signature": "a i e -\u003e m (b i e)",
          "source": "src/Data-Array-Base.html#unsafeThaw",
          "type": "function"
        },
        "index": {
          "description": "Converts an immutable array into mutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is only safe to use therefore if the immutable array is never referenced again in this thread and there is no possibility that it can be also referenced in another thread If you use an unsafeThaw write unsafeFreeze sequence in multi-threaded setting then you must ensure that this sequence is atomic with respect to other threads or garbage collector crash may result because the write may be writing to frozen array The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeThaw Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them UArray IOUArray UArray STUArray Array IOArray Array STArray",
          "hierarchy": "Data Array Unsafe",
          "module": "Data.Array.Unsafe",
          "name": "unsafeThaw",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "array",
          "partial": "Thaw",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array-Unsafe.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic non-strict arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e The \u003ca\u003eData.Array.IArray\u003c/a\u003e module provides a more general interface\n to immutable arrays: it defines operations with the same names as\n those defined below, but with more general types, and also defines\n \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e instances of the relevant classes.  To use that more general\n interface, import \u003ca\u003eData.Array.IArray\u003c/a\u003e but not \u003ca\u003eData.Array\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array",
          "name": "Array",
          "package": "array",
          "source": "src/Data-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Basic non-strict arrays Note The Data.Array.IArray module provides more general interface to immutable arrays it defines operations with the same names as those defined below but with more general types and also defines Array instances of the relevant classes To use that more general interface import Data.Array.IArray but not Data.Array",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "Array",
          "package": "array",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable non-strict (boxed) arrays\n with indices in \u003ccode\u003ei\u003c/code\u003e and elements in \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "Array",
          "package": "array",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable non-strict boxed arrays with indices in and elements in",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "Array",
          "package": "array",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value at the given index in an array.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "(!)",
          "package": "array",
          "signature": "Array i e -\u003e i -\u003e e",
          "type": "function"
        },
        "index": {
          "description": "The value at the given index in an array",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "(!) !",
          "normalized": "Array a b-\u003ea-\u003eb",
          "package": "array",
          "signature": "Array i e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an array identical to the first argument except that it has\n been updated by the associations in the right argument.\n For example, if \u003ccode\u003em\u003c/code\u003e is a 1-origin, \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en\u003c/code\u003e matrix, then\n\u003c/p\u003e\u003cpre\u003e m//[((i,i), 0) | i \u003c- [1..n]]\n\u003c/pre\u003e\u003cp\u003eis the same matrix, except with the diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eRepeated indices in the association list are handled as for \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e:\n Haskell 98 specifies that the resulting array is undefined (i.e. bottom),\n but GHC's implementation uses the last association for each index.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "(//)",
          "package": "array",
          "signature": "Array i e -\u003e [(i, e)] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Constructs an array identical to the first argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed Repeated indices in the association list are handled as for array Haskell specifies that the resulting array is undefined i.e bottom but GHC implementation uses the last association for each index",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "(//) //",
          "normalized": "Array a b-\u003e[(a,b)]-\u003eArray a b",
          "package": "array",
          "signature": "Array i e-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes an array and an association list and accumulates\n pairs from the list into the array with the accumulating function \u003ccode\u003ef\u003c/code\u003e.\n Thus \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e can be defined using \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \u003c- range b])\n\u003c/pre\u003e",
          "module": "Data.Array",
          "name": "accum",
          "package": "array",
          "signature": "(e -\u003e a -\u003e e) -\u003e Array i e -\u003e [(i, a)] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "accum",
          "normalized": "(a-\u003eb-\u003ea)-\u003eArray c a-\u003e[(c,b)]-\u003eArray c a",
          "package": "array",
          "signature": "(e-\u003ea-\u003ee)-\u003eArray i e-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e function deals with repeated indices in the association\n list using an \u003cem\u003eaccumulating function\u003c/em\u003e which combines the values of\n associations with the same index.\n For example, given a list of values of some index type, \u003ccode\u003ehist\u003c/code\u003e\n produces a histogram of the number of occurrences of each index within\n a specified range:\n\u003c/p\u003e\u003cpre\u003e hist :: (Ix a, Num b) =\u003e (a,a) -\u003e [a] -\u003e Array a b\n hist bnds is = accumArray (+) 0 bnds [(i, 1) | i\u003c-is, inRange bnds i]\n\u003c/pre\u003e\u003cp\u003eIf the accumulating function is strict, then \u003ccode\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/code\u003e is strict in\n the values, as well as the indices, in the association list.  Thus,\n unlike ordinary arrays built with \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e, accumulated arrays should\n not in general be recursive.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "accumArray",
          "package": "array",
          "signature": "(e -\u003e a -\u003e e)-\u003e e-\u003e (i, i)-\u003e [(i, a)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "The accumArray function deals with repeated indices in the association list using an accumulating function which combines the values of associations with the same index For example given list of values of some index type hist produces histogram of the number of occurrences of each index within specified range hist Ix Num Array hist bnds is accumArray bnds is inRange bnds If the accumulating function is strict then accumArray is strict in the values as well as the indices in the association list Thus unlike ordinary arrays built with array accumulated arrays should not in general be recursive",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "accumArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003eArray c a",
          "package": "array",
          "partial": "Array",
          "signature": "(e-\u003ea-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(i,a)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array with the specified bounds and containing values\n for given indices within these bounds.\n\u003c/p\u003e\u003cp\u003eThe array is undefined (i.e. bottom) if any index in the list is\n out of bounds.  The Haskell 98 Report further specifies that if any\n two associations in the list have the same index, the value at that\n index is undefined (i.e. bottom).  However in GHC's implementation,\n the value at such an index is the value part of the last association\n with that index in the list.\n\u003c/p\u003e\u003cp\u003eBecause the indices must be checked for these errors, \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e is\n strict in the bounds argument and in the indices of the association\n list, but non-strict in the values.  Thus, recurrences such as the\n following are possible:\n\u003c/p\u003e\u003cpre\u003e a = array (1,100) ((1,1) : [(i, i * a!(i-1)) | i \u003c- [2..100]])\n\u003c/pre\u003e\u003cp\u003eNot every index within the bounds of the array need appear in the\n association list, but the values associated with indices that do not\n appear will be undefined (i.e. bottom).\n\u003c/p\u003e\u003cp\u003eIf, in any dimension, the lower bound is greater than the upper bound,\n then the array is legal, but empty.  Indexing an empty array always\n gives an array-bounds error, but \u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e still yields the bounds\n with which the array was constructed.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "array",
          "package": "array",
          "signature": "(i, i)-\u003e [(i, e)]-\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with the specified bounds and containing values for given indices within these bounds The array is undefined i.e bottom if any index in the list is out of bounds The Haskell Report further specifies that if any two associations in the list have the same index the value at that index is undefined i.e bottom However in GHC implementation the value at such an index is the value part of the last association with that index in the list Because the indices must be checked for these errors array is strict in the bounds argument and in the indices of the association list but non-strict in the values Thus recurrences such as the following are possible array i-1 Not every index within the bounds of the array need appear in the association list but the values associated with indices that do not appear will be undefined i.e bottom If in any dimension the lower bound is greater than the upper bound then the array is legal but empty Indexing an empty array always gives an array-bounds error but bounds still yields the bounds with which the array was constructed",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,b)]-\u003eArray a b",
          "package": "array",
          "signature": "(i,i)-\u003e[(i,e)]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of associations of an array in index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "assocs",
          "package": "array",
          "signature": "Array i e -\u003e [(i, e)]",
          "type": "function"
        },
        "index": {
          "description": "The list of associations of an array in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "assocs",
          "normalized": "Array a b-\u003e[(a,b)]",
          "package": "array",
          "signature": "Array i e-\u003e[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds with which an array was constructed.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "bounds",
          "package": "array",
          "signature": "Array i e -\u003e (i, i)",
          "type": "function"
        },
        "index": {
          "description": "The bounds with which an array was constructed",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "bounds",
          "normalized": "Array a b-\u003e(a,a)",
          "package": "array",
          "signature": "Array i e-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of elements of an array in index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "elems",
          "package": "array",
          "signature": "Array i e -\u003e [e]",
          "type": "function"
        },
        "index": {
          "description": "The list of elements of an array in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "elems",
          "normalized": "Array a b-\u003e[b]",
          "package": "array",
          "signature": "Array i e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of indices of an array in ascending order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "indices",
          "package": "array",
          "signature": "Array i e -\u003e [i]",
          "type": "function"
        },
        "index": {
          "description": "The list of indices of an array in ascending order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "indices",
          "normalized": "Array a b-\u003e[a]",
          "package": "array",
          "signature": "Array i e-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eixmap\u003c/a\u003e\u003c/code\u003e allows for transformations on array indices.\n It may be thought of as providing function composition on the right\n with the mapping that the original array embodies.\n\u003c/p\u003e\u003cp\u003eA similar transformation of array values may be achieved using \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e\n from the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "ixmap",
          "package": "array",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e Array j e -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "ixmap allows for transformations on array indices It may be thought of as providing function composition on the right with the mapping that the original array embodies similar transformation of array values may be achieved using fmap from the Array instance of the Functor class",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003eArray b c-\u003eArray a c",
          "package": "array",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003eArray j e-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array from a pair of bounds and a list of values in\n index order.\n\u003c/p\u003e",
          "module": "Data.Array",
          "name": "listArray",
          "package": "array",
          "signature": "(i, i) -\u003e [e] -\u003e Array i e",
          "type": "function"
        },
        "index": {
          "description": "Construct an array from pair of bounds and list of values in index order",
          "hierarchy": "Data Array",
          "module": "Data.Array",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[b]-\u003eArray a b",
          "package": "array",
          "partial": "Array",
          "signature": "(i,i)-\u003e[e]-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array/docs/Data-Array.html#v:listArray"
      }
    }
  ]
]